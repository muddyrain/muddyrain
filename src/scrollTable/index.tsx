import React, { FC, useLayoutEffect, useRef } from 'react';
import styles from './index.module.less';
const ScrollTable: FC = () => {
	// 表格身体元素
	const tableBodyRef = useRef<HTMLDivElement>(null);
	const scrollHeight = useRef(0);
	const dataLength = useRef(6);
	// 当前滚动的索引
	const currentScrollIndex = useRef(0);
	useLayoutEffect(() => {
		if (tableBodyRef.current === null) return;

		new MutationObserver(() => {
			if (!tableBodyRef.current) return;
			const targetElement = tableBodyRef.current as HTMLDivElement;
			const transform = getComputedStyle(tableBodyRef.current).getPropertyValue(
				'transform'
			);
			// matrix(1, 0, 0, 1, 0, -54.5)
			const value = transform.slice(21, -1);
			console.log(value);
			if (currentScrollIndex.current <= 0) {
				targetElement.style.transition = 'all 0.35s ease-in-out';
			}
			if (currentScrollIndex.current > dataLength.current) {
				scrollHeight.current = 0;
				currentScrollIndex.current = -1;
				if (targetElement) {
					targetElement.style.transition = 'none';
					targetElement.style.transform = `translateY(-${scrollHeight.current}px)`;
				}
			}
		}).observe(tableBodyRef.current, {
			attributes: true,
		});
		setInterval(() => {
			if (tableBodyRef.current) {
				scrollHeight.current += 54.5;
				currentScrollIndex.current += 1;
				tableBodyRef.current.style.transform = `translateY(-${scrollHeight.current}px)`;
			}
		}, 1000);
	}, [tableBodyRef.current]);
	return (
		<div className={styles.scrollTable_container}>
			<div className={styles.head}>
				<div className={styles.head_item}>姓名</div>
				<div className={styles.head_item}>年龄</div>
				<div className={styles.head_item}>地址</div>
				<div className={styles.head_item}>日期</div>
			</div>
			<div className={styles.wrapper} style={{ height: 300 }}>
				<div className={styles.body} ref={tableBodyRef}>
					{Array.from({ length: dataLength.current }).map((_, index) => (
						<div className={styles.row} key={index}>
							<div className={styles.row_item}>陈子涵{index + 1}</div>
							<div className={styles.row_item}>21</div>
							<div className={styles.row_item}>广东省深圳市</div>
							<div className={styles.row_item}>2023-01-01 12:00:00</div>
						</div>
					))}
					{Array.from({ length: dataLength.current }).map((_, index) => (
						<div className={styles.row} key={index}>
							<div className={styles.row_item}>陈子涵{index + 1}</div>
							<div className={styles.row_item}>21</div>
							<div className={styles.row_item}>广东省深圳市</div>
							<div className={styles.row_item}>2023-01-01 12:00:00</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ScrollTable;
