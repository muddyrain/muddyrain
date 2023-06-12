import { CANVAS_ERROR_MESSAGE } from 'muddyrain/constant';
import React, { FC, useEffect, useRef, useState } from 'react';
import Dialog from '../dialog';
import styles from './index.module.css';
import type { CanvasState, TailorProps } from './types';
import { useSyncState } from './useSyncState';
import { getPixelRatio } from './utils';

/**
 * 裁剪
 */
const Tailor: FC<TailorProps> = ({ src }) => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const areaRef = useRef<HTMLDivElement>(null);
	const [getState, setState, getAllState] = useSyncState<CanvasState>({
		image: new Image(),
		canChangeSelect: false,
		imageSize: {
			width: 0,
			height: 0,
		},
		canvasSize: {
			width: 0,
			height: 0,
		},
		initSize: {
			width: 0,
			height: 0,
		},
		imageScale: 1,
		pixelRatio: 1,
		mousePosi: [],
		initMousePosi: {
			x: 0,
			y: 0,
		},
	});

	const [visible, setVisible] = useState(true);

	const [base64URL, setBase64URL] = useState('');

	/**
	 * 初始化canvas图片
	 */
	const initImageCanvas = (image: HTMLImageElement) => {
		const { width: imageWidth, height: imageHeight } = image;
		const imageProportion = imageWidth / imageHeight;
		setState('imageSize', {
			width: imageWidth,
			height: imageHeight,
		});
		console.log(imageProportion);
		const initSize = getState('initSize');
		// 图片尺寸小于初始化尺寸
		if (imageWidth <= initSize.width && imageHeight <= initSize.height) {
			setState('imageScale', 1);
			return;
		}
		if (imageProportion > initSize.width / initSize.height) {
			setState('imageScale', initSize.width / imageWidth);
		} else {
			setState('imageScale', initSize.height / imageHeight);
		}
	};
	/**
	 * 绘制图片
	 */
	const drawImage = () => {
		const { ctx, imageSize, imageScale, image, canvasSize } = getAllState();
		const { width: canvasWidth, height: canvasHeight } = canvasSize;
		if (ctx) {
			ctx.save();
			ctx.globalCompositeOperation = 'destination-over';
			ctx.translate(canvasWidth / 2, canvasHeight / 2);
			// ctx.rotate((Math.PI / 180) * rotate);
			// if (rotate % 180 !== 0) {
			//   [canvasWidth, canvasHeight] = [canvasHeight, canvasWidth];
			// }
			ctx.translate(-canvasWidth / 2, -canvasHeight / 2);
			const scaleImgWidth = imageScale * imageSize.width;
			const scaleImgHeight = imageScale * imageSize.height;
			ctx.drawImage(
				image,
				(canvasWidth - scaleImgWidth) / 2,
				(canvasHeight - scaleImgHeight) / 2,
				scaleImgWidth,
				scaleImgHeight
			);
		}
	};
	/**
	 * 计算 canvas Size
	 */
	const calcCanvasSize = () => {
		if (!canvasRef.current) return;
		console.log(getAllState());
		const { initSize, imageSize, imageScale, pixelRatio, ctx } = getAllState();
		const canvasWidth = Math.min(initSize.width, imageSize.width * imageScale);
		const canvasHeight = Math.min(
			initSize.height,
			imageSize.height * imageScale
		);

		canvasRef.current.style.width = `${canvasWidth}px`;
		canvasRef.current.style.height = `${canvasHeight}px`;
		canvasRef.current.width = canvasWidth * pixelRatio;
		canvasRef.current.height = canvasHeight * pixelRatio;
		if (ctx) {
			ctx.scale(pixelRatio, pixelRatio);
		}
		setState('canvasSize', {
			width: canvasWidth,
			height: canvasHeight,
		});
		setState('mousePosi', []);
	};
	/**
	 * 处理图片
	 */
	const handleImage = () => {
		const image = getState('image');
		image.src = src;
		image.onload = () => {
			initImageCanvas(image);
			calcCanvasSize();
			drawImage();
		};
		setBase64URL('');
	};

	/**
	 * 监听 canvas元素 鼠标按下事件
	 */
	const handleMouseDown = (e: React.MouseEvent) => {
		setState('canChangeSelect', true);
		setState('initMousePosi', {
			x: e.nativeEvent.offsetX,
			y: e.nativeEvent.offsetY,
		});
	};

	/**
	 * 监听 canvas 元素 鼠标移动事件
	 */
	const handleMouseMove = (e: React.MouseEvent) => {
		const { ctx, pixelRatio } = getAllState();
		if (!ctx || !canvasRef.current) {
			return;
		}
		const { offsetX, offsetY } = e.nativeEvent;
		const pathX = offsetX * pixelRatio;
		const pathY = offsetY * pixelRatio;
		console.log(pathX, pathY);
	};

	useEffect(() => {
		if (!visible) return;
		if (!canvasRef.current) return;
		if (!areaRef.current) return;
		try {
			const { width: areaWidth, height: areaHeight } =
				areaRef.current.getBoundingClientRect();
			setState('initSize', {
				width: areaWidth,
				height: areaHeight,
			});
			const ctx = canvasRef.current?.getContext(
				'2d'
			) as CanvasRenderingContext2D;
			setState('ctx', ctx);
			// 获取像素比
			const pixelRatio = getPixelRatio(ctx);
			setState('pixelRatio', pixelRatio);

			// 初始化图片
			handleImage();
		} catch (error) {
			console.error(CANVAS_ERROR_MESSAGE);
		}
	}, [visible]);

	return (
		<div>
			<Dialog
				visible={visible}
				changeVisible={setVisible}
				width="large"
				title="编辑图片"
			>
				<div className={styles['container']}>
					<div className={styles['tail_area']} ref={areaRef}>
						{/* <div className={styles['drag_crop']} ref={dragRef}>
							<div className={styles['drag_crop_point_t']}></div>
							<div className={styles['drag_crop_point_b']}></div>
						</div> */}
						{/* <img ref={imgRef} className={styles['img']} src={src} alt="" /> */}
						<canvas
							ref={canvasRef}
							onMouseDown={handleMouseDown}
							onMouseMove={handleMouseMove}
						>
							{CANVAS_ERROR_MESSAGE}
						</canvas>
					</div>
					<div className={styles['tail_result']}>
						{base64URL ? (
							<img
								src={base64URL}
								alt=""
								className={styles['tail_result_img']}
							/>
						) : (
							<div className={styles['tail_result_img']} />
						)}

						<span className={styles['tail_result_text']}>预览</span>
					</div>
				</div>
			</Dialog>
		</div>
	);
};

export default Tailor;
