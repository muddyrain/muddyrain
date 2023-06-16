import React, { FC, useEffect, useRef, useState } from 'react';
import Dialog from '../dialog';
import styles from './index.module.css';
import type { TailorProps } from './types';

/**
 * 裁剪
 */
const Tailor: FC<TailorProps> = ({ src }) => {
	// 拖拽元素
	const dragRef = useRef<HTMLDivElement>(null);
	// 容器元素
	const containerRef = useRef<HTMLDivElement>(null);
	// canvas 元素
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const [visible, setVisible] = useState(true);

	const canvasState = useRef({
		imgScale: 1,
		imgProportion: 1,
	});
	const [base64URL] = useState('');

	const computedSize = (obj: {
		width: number;
		height: number;
		containerWidth: number;
		containerHeight: number;
	}) => {
		const { width, height, containerWidth, containerHeight } = obj;
		const imgProportion = width / height;
		canvasState.current.imgProportion = imgProportion;
		if (width <= containerWidth && height <= containerHeight) {
			canvasState.current.imgScale = 1;
			return;
		}
		if (imgProportion > containerWidth / containerHeight) {
			canvasState.current.imgScale = containerWidth / width;
		} else {
			canvasState.current.imgScale = containerHeight / height;
		}
	};
	const initImage = () => {
		const canvasElement = canvasRef.current;
		const containerElement = containerRef.current;
		if (!canvasElement) return;
		if (!containerElement) return;
		const ctx = canvasElement.getContext('2d');
		if (ctx) {
			const image = new Image();
			image.src = src;
			image.onload = () => {
				const { width, height } = image;
				const { width: containerWidth, height: containerHeight } =
					containerElement.getBoundingClientRect();
				// 计算尺寸比例
				computedSize({ width, height, containerWidth, containerHeight });
				ctx.drawImage(image, 0, 0, canvasElement.width, canvasElement.height);
				// const _base64URL = canvasElement.toDataURL('image/jpeg', 1);
				// setBase64URL(_base64URL);
			};
		}
	};
	useEffect(() => {
		if (!visible) return;
		if (!dragRef.current) return;
		if (!canvasRef.current) return;
		if (!containerRef.current) return;
		// 初始化图片对象
		initImage();
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
					<div className={styles['tail_area']}>
						<div className={styles['drag_crop']} ref={dragRef}>
							<div className={styles['drag_crop_point_t']}></div>
							<div className={styles['drag_crop_point_b']}></div>
						</div>
						<div className={styles['img']} ref={containerRef}>
							<canvas ref={canvasRef} />
						</div>
					</div>
					<div className={styles['tail_result']}>
						<img src={base64URL} alt="" className={styles['tail_result_img']} />
						<span className={styles['tail_result_text']}>预览</span>
					</div>
				</div>
			</Dialog>
		</div>
	);
};

export default Tailor;
