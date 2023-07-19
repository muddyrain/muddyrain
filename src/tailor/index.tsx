import React, { FC, useEffect, useRef, useState } from 'react';
import ErrorImage from './images/error.png';
import styles from './index.module.less';
import {
	DragPointDirection,
	DragSideDirection,
	type TailorProps,
} from './type.d';
import { handleMoveDragElement, hexToRgba } from './utils';
/**
 * 裁剪
 */
const Tailor: FC<TailorProps> = ({
	src,
	filename = '下载',
	onFinish,
	isShowDownload = true,
	isShowReview = true,
	areaColor = '#f00000',
	sideColor = 'transparent',
	areaAlpha = 0.25,
}) => {
	const dragRef = useRef<HTMLDivElement>(null);
	const imageContainerRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const wrapRef = useRef<HTMLDivElement>(null);
	const [base64URL, setBase64URL] = useState('');
	const imgObject = useRef(new Image());

	const state = useRef<{
		imageScale: number;
		canvasCtx?: CanvasRenderingContext2D;
	}>({
		imageScale: 1,
	});

	/**
	 * 处理 image 图片报错
	 */

	const handleImageError = function () {
		setBase64URL(ErrorImage);
	};

	/**
	 * 处理下载图片
	 */
	const handleDownload = () => {
		const a = document.createElement('a');
		// 设置图片名称
		a.download = filename + '.jpg';
		a.href = base64URL;
		a.click();
	};

	/**
	 * 裁剪图片
	 */
	const clipImage = (
		left: number,
		top: number,
		dragWidth: number,
		dragHeight: number
	) => {
		const imageElement = canvasRef.current;
		if (!imageElement) return;
		const ctx = state.current.canvasCtx;
		if (ctx) {
			const imagedata = ctx.getImageData(left, top, dragWidth, dragHeight);
			let _canvas = document.createElement('canvas');
			if (_canvas) {
				let _ctx = _canvas.getContext('2d');
				_canvas.width = imagedata.width;
				_canvas.height = imagedata.height;
				if (_ctx) {
					_ctx.putImageData(imagedata, 0, 0);
					setBase64URL(_canvas.toDataURL());
					onFinish?.(_canvas.toDataURL());
				}
			}
		}
	};
	const createDragEvent = (
		dragElement: HTMLDivElement,
		canvasElement: HTMLCanvasElement
	) => {
		if (!dragElement) return;
		for (const element of Array.from(
			dragElement.children
		) as HTMLDivElement[]) {
			handleMoveDragElement(element, dragElement, canvasElement, () => {
				const { left: canvasLeft, top: canvasTop } =
					canvasElement.getBoundingClientRect();
				const { left: dragLeft, top: dragTop } =
					dragElement.getBoundingClientRect();
				clipImage(
					dragLeft - canvasLeft,
					dragTop - canvasTop,
					dragElement.clientWidth,
					dragElement.clientHeight
				);
			});
		}
	};
	/**
	 * 初始化canvas
	 */
	const initCanvas = (): Promise<undefined> => {
		return new Promise((resolve, reject) => {
			const canvasElement = canvasRef.current;
			const wrapElement = wrapRef.current;
			if (canvasElement && wrapElement) {
				const ctx = canvasElement.getContext('2d');
				if (ctx) {
					state.current.canvasCtx = ctx;
					const image = new Image();
					image.src = src;
					image.crossOrigin = '*';
					const { width: wrapWidth, height: wrapHeight } =
						wrapElement.getBoundingClientRect();
					const wrapProportion = wrapWidth / wrapHeight;

					image.onload = () => {
						const { width: imageWidth, height: imageHeight } = image;
						const imageProportion = imageWidth / imageHeight;

						// 如果图片尺寸小于容器尺寸
						if (imageWidth <= wrapWidth && imageHeight <= wrapHeight) {
							state.current.imageScale = 1;
						} else if (imageProportion > wrapProportion) {
							state.current.imageScale = wrapWidth / imageWidth;
						} else {
							state.current.imageScale = wrapHeight / imageHeight;
						}
						const scaleImgWidth = state.current.imageScale * imageWidth;
						const scaleImgHeight = state.current.imageScale * imageHeight;
						canvasElement.width = scaleImgWidth;
						canvasElement.height = scaleImgHeight;
						ctx.drawImage(image, 0, 0, scaleImgWidth, scaleImgHeight);
						resolve(undefined);
					};
					image.onerror = (error) => {
						reject(error);
					};
				}
			}
		});
	};

	const handleDrag = (
		dragElement: HTMLDivElement,
		canvasElement: HTMLCanvasElement
	) => {
		let curT = 0;
		let curL = 0;
		dragElement.addEventListener('mousedown', (e) => {
			e.stopPropagation();
			// 记录点击距离页面坐标
			const pageX = e.pageX;
			const pageY = e.pageY;
			// 记录左边和上边的距离
			const left = dragElement.offsetLeft;
			const top = dragElement.offsetTop;
			document.onmousemove = (ev) => {
				curT = ev.pageY - pageY + top;
				curL = ev.pageX - pageX + left;
				// 边界处理
				const minL = 0;
				const minT = 0;
				const maxL = canvasElement.clientWidth - dragElement.offsetWidth;
				const maxT = canvasElement.clientHeight - dragElement.offsetHeight;
				curL = curL < minL ? minL : curL > maxL ? maxL : curL;
				curT = curT < minT ? minT : curT > maxT ? maxT : curT;
				dragElement.style.left = curL + 'px';
				dragElement.style.top = curT + 'px';
			};
			document.onmouseup = () => {
				clipImage(
					curL,
					curT,
					dragElement.clientWidth,
					dragElement.clientHeight
				);
				document.onmousemove = null;
			};
		});
	};
	useEffect(() => {
		if (!dragRef.current) return;
		if (!wrapRef.current) return;
		if (!canvasRef.current) return;
		const initImage = () => {
			const dragElement = dragRef.current;
			imgObject.current.src = src;
			imgObject.current.setAttribute('crossOrigin', 'Anonymous');
			imgObject.current.onload = () => {
				clipImage(
					0,
					0,
					dragElement?.clientWidth || 0,
					dragElement?.clientHeight || 0
				);
			};
		};
		initCanvas()
			.then(() => {
				// 初始化图片对象
				initImage();
				// 注册drag元素事件
				createDragEvent(dragRef.current!, canvasRef.current!);
			})
			.catch((err) => {
				throw err;
			});

		handleDrag(dragRef.current, canvasRef.current);
	}, []);
	return (
		<div className={styles['container']}>
			<div className={styles['tail_area']} ref={wrapRef}>
				<div className={styles['image_container']} ref={imageContainerRef}>
					<canvas ref={canvasRef} />
					<div
						className={styles['drag_crop']}
						ref={dragRef}
						style={{ background: hexToRgba(areaColor, areaAlpha) }}
					>
						{Object.keys(DragSideDirection).map((key) => (
							<div
								key={key}
								role={key}
								style={{ background: sideColor }}
								className={`${styles['drag_crop_side']} ${
									styles['drag_crop_side_' + key]
								}`}
							/>
						))}
						{Object.keys(DragPointDirection).map((key) => (
							<div
								key={key}
								role={key}
								className={`${styles['drag_crop_point']} ${
									styles['drag_crop_point_' + key]
								}`}
							/>
						))}
					</div>
				</div>
			</div>
			{(isShowReview || isShowDownload) && (
				<div className={styles['tail_result']}>
					{isShowReview && (
						<>
							<div className={styles['tail_result_img']}>
								<img src={base64URL} alt="" onError={handleImageError} />
							</div>
							<span className={styles['tail_result_text']}>预览</span>
						</>
					)}
					{isShowDownload && (
						<span
							className={styles['tail_result_link']}
							onClick={handleDownload}
						>
							下载
						</span>
					)}
				</div>
			)}
		</div>
	);
};

export default Tailor;
export * from './type.d';
