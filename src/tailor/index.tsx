import React, { FC, useEffect, useRef } from 'react';
import styles from './index.module.less';
import type { TailorProps } from './types';

/**
 * 裁剪
 */
const Tailor: FC<TailorProps> = ({ src }) => {
	const dragRef = useRef<HTMLDivElement>(null);
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const wrapRef = useRef<HTMLDivElement>(null);

	const state = useRef<{
		imageScale: number;
	}>({
		imageScale: 1,
	});
	/**
	 * 初始化canvas
	 */
	const initCanvas = () => {
		const canvasElement = canvasRef.current;
		const wrapElement = wrapRef.current;
		if (canvasElement && wrapElement) {
			const ctx = canvasElement.getContext('2d');
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
				ctx?.drawImage(image, 0, 0, scaleImgWidth, scaleImgHeight);
			};
		}
	};
	useEffect(() => {
		if (!dragRef.current) return;
		if (!wrapRef.current) return;
		if (!canvasRef.current) return;
		initCanvas();
	}, []);

	return (
		<div className={styles['container']}>
			<div className={styles['tail_area']} ref={wrapRef}>
				<div className={styles['drag_crop']} ref={dragRef}>
					<div className={styles['drag_crop_point_t']}></div>
					<div className={styles['drag_crop_point_b']}></div>
				</div>
				<canvas ref={canvasRef} />
			</div>
			<div className={styles['tail_result']}>
				{/* <img src={base64URL} alt="" className={styles['tail_result_img']} /> */}
				<span className={styles['tail_result_text']}>预览</span>
			</div>
		</div>
	);
};

export default Tailor;
