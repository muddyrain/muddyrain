import React, { FC, useEffect, useRef, useState } from 'react';
import ErrorImage from './images/error.png';
import styles from './index.module.less';
import type { TailorProps } from './types';
/**
 * 裁剪
 */
const Tailor: FC<TailorProps> = ({ src, name = '下载' }) => {
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
		a.download = name + '.jpg';
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
				}
			}
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
		dragElement.onmousedown = (e) => {
			// 记录点击距离页面坐标
			const pageX = e.pageX;
			const pageY = e.pageY;
			// 记录左边和上边的距离
			const left = dragElement.offsetLeft;
			const top = dragElement.offsetTop;
			e.preventDefault();
			document.onmousemove = (ev) => {
				let curT = ev.pageY - pageY + top;
				let curL = ev.pageX - pageX + left;
				// 边界处理
				const minL = 0;
				const minT = 0;
				const maxL = canvasElement.clientWidth - dragElement.offsetWidth;
				const maxT = canvasElement.clientHeight - dragElement.offsetHeight;
				curL = curL < minL ? minL : curL > maxL ? maxL : curL;
				curT = curT < minT ? minT : curT > maxT ? maxT : curT;
				dragElement.style.left = curL + 'px';
				dragElement.style.top = curT + 'px';
				clipImage(
					curL,
					curT,
					dragElement.clientWidth,
					dragElement.clientHeight
				);
			};
		};
		document.onmouseup = () => {
			document.onmousemove = null;
		};
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
		initCanvas().then(() => {
			// 初始化图片对象
			initImage();
		});

		handleDrag(dragRef.current, canvasRef.current);
	}, []);

	return (
		<div className={styles['container']}>
			<div className={styles['tail_area']} ref={wrapRef}>
				<div className={styles['image_container']} ref={imageContainerRef}>
					<canvas ref={canvasRef} />
					<div className={styles['drag_crop']} ref={dragRef}>
						<div className={styles['drag_crop_point_t']}></div>
						<div className={styles['drag_crop_point_b']}></div>
					</div>
				</div>
			</div>
			<div className={styles['tail_result']}>
				<img
					src={base64URL}
					alt=""
					className={styles['tail_result_img']}
					onError={handleImageError}
				/>
				<span className={styles['tail_result_text']}>预览</span>
				<span className={styles['tail_result_link']} onClick={handleDownload}>
					下载
				</span>
			</div>
		</div>
	);
};

export default Tailor;
