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
		imageSize: {
			width: 0,
			height: 0,
		},
		initSize: {
			width: 0,
			height: 0,
		},
		imageScale: 1,
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
	 * 计算 canvas Size
	 */
	const calcCanvasSize = () => {
		if (!canvasRef.current) return;
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
		};
		setBase64URL(image.src);
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
						<canvas ref={canvasRef}>{CANVAS_ERROR_MESSAGE}</canvas>
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
