import React, { FC, useRef } from 'react';
import Dialog from '../dialog';
import styles from './index.module.css';
import type { TailorProps } from './types';

/**
 * 裁剪
 */
const Tailor: FC<TailorProps> = ({ src }) => {
	const imgRef = useRef<HTMLImageElement>(null);
	return (
		<div>
			<Dialog visible width="large" title="编辑图片">
				<div className={styles['container']}>
					<div className={styles['tail_area']}>
						<img ref={imgRef} className={styles['img']} src={src} alt="" />
					</div>
					<div className={styles['tail_result']}>
						<img
							src="https://img.yzcdn.cn/vant/cat.jpeg"
							alt=""
							className={styles['tail_result_img']}
						/>
						<span className={styles['tail_result_text']}>预览</span>
					</div>
				</div>
			</Dialog>
		</div>
	);
};

export default Tailor;
