import React, { FC, useEffect, useRef, useState } from 'react';
import styles from './index.module.less';
import type { TailorProps } from './types';

/**
 * 裁剪
 */
const Tailor: FC<TailorProps> = ({ src }) => {
	const imgRef = useRef<HTMLImageElement>(null);
	const dragRef = useRef<HTMLDivElement>(null);

	const [base64URL, setBase64URL] = useState('');
	const imgObject = useRef(new Image());
	const clipImage = (
		left: number,
		top: number,
		width: number,
		height: number
	) => {
		const imageElement = imgRef.current;
		if (!imageElement) return;
		const canvasElement = document.createElement('canvas') as HTMLCanvasElement;
		canvasElement.width = width;
		canvasElement.height = height;
		const ctx = canvasElement.getContext('2d');
		if (ctx) {
			ctx.drawImage(
				imgObject.current,
				left,
				top,
				width,
				height,
				0,
				0,
				width,
				height
			);
			const _base64URL = canvasElement.toDataURL('image/jpeg', 1);
			setBase64URL(_base64URL);
		}
	};
	const initImage = () => {
		imgObject.current.src = src;
		imgObject.current.setAttribute('crossOrigin', 'Anonymous');
		imgObject.current.onload = () => {};
	};
	useEffect(() => {
		if (!dragRef.current) return;
		if (!imgRef.current) return;
		// 初始化图片对象
		initImage();
		const dragElement = dragRef.current;
		const imageElement = imgRef.current;
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
				const maxL = imageElement.clientWidth - dragElement.offsetWidth;
				const maxT = imageElement.clientHeight - dragElement.offsetHeight;
				curL = curL < minL ? minL : curL > maxL ? maxL : curL;
				curT = curT < minT ? minT : curT > maxT ? maxT : curT;
				dragElement.style.left = curL + 'px';
				dragElement.style.top = curT + 'px';
				console.log(curL, curT);
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
	}, []);

	return (
		<div className={styles['container']}>
			<div className={styles['tail_area']}>
				<div className={styles['drag_crop']} ref={dragRef}>
					<div className={styles['drag_crop_point_t']}></div>
					<div className={styles['drag_crop_point_b']}></div>
				</div>
				<img ref={imgRef} className={styles['img']} src={src} alt="" />
			</div>
			<div className={styles['tail_result']}>
				<img src={base64URL} alt="" className={styles['tail_result_img']} />
				<span className={styles['tail_result_text']}>预览</span>
			</div>
		</div>
	);
};

export default Tailor;
