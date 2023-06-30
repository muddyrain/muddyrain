import gsap from 'gsap';
import React, { FC, useLayoutEffect, useRef } from 'react';
import styles from './index.module.less';
import { ScrollTableProps } from './type';
const ScrollTable: FC<ScrollTableProps> = ({}) => {
	// 表格身体元素
	const tableBodyRef = useRef<HTMLTableSectionElement>(null);
	const rowRef = useRef<HTMLDivElement>(null);
	const scrollHeight = useRef(0);
	const dataLength = useRef(6);
	const widths = useRef<number[]>([]);
	const isInit = useRef(false);
	// 当前滚动的索引
	const currentScrollIndex = useRef(0);
	const computedWidth = () => {
		if (tableBodyRef.current) {
			const targetElement = tableBodyRef.current as HTMLDivElement;
			const { width } = targetElement.getBoundingClientRect();
			widths.current = Array.from({ length: 4 }).map(() => width / 4);
		}
	};
	// 开始运动
	const startMove = () => {
		if (tableBodyRef.current && rowRef.current) {
			const targetElement = tableBodyRef.current as HTMLDivElement;
			const { height } = rowRef.current.getBoundingClientRect();
			scrollHeight.current += height;
			currentScrollIndex.current += 1;
			gsap.to(tableBodyRef.current.style, {
				duration: 1,
				delay: 0.25,
				transform: `translateY(-${scrollHeight.current}px)`,
				onComplete() {
					// 如果当前滚动的索引小于数据总长度
					if (currentScrollIndex.current < dataLength.current) {
						startMove();
					} else {
						targetElement.style.transform = `translateY(0px)`;
						scrollHeight.current = 0;
						currentScrollIndex.current = 0;
						startMove();
					}
				},
			});
		}
	};
	useLayoutEffect(() => {
		if (isInit.current) return;
		isInit.current = true;
		startMove();
		computedWidth();
	}, [tableBodyRef.current]);
	return (
		<div className={styles.scrollTable_container}>
			<div className={styles.head}>
				<div className={styles.head_item} style={{ width: widths.current[0] }}>
					姓名
				</div>
				<div className={styles.head_item} style={{ width: widths.current[1] }}>
					年龄
				</div>
				<div className={styles.head_item} style={{ width: widths.current[2] }}>
					地址
				</div>
				<div className={styles.head_item} style={{ width: widths.current[3] }}>
					日期
				</div>
			</div>
			<div className={styles.wrapper} style={{ height: 300 }}>
				<div
					className={styles.body}
					ref={tableBodyRef}
					style={{ transform: 'translateY(0px)' }}
				>
					{Array.from({ length: dataLength.current }).map((_, index) => (
						<div className={styles.row} key={index}>
							<div
								className={styles.row_item}
								style={{ width: widths.current[0] }}
							>
								陈子涵{index + 1}
							</div>
							<div
								className={styles.row_item}
								style={{ width: widths.current[1] }}
							>
								21
							</div>
							<div
								className={styles.row_item}
								style={{ width: widths.current[2] }}
							>
								广东省深圳市
							</div>
							<div
								className={styles.row_item}
								style={{ width: widths.current[3] }}
							>
								2023-01-01 12:00:00{' '}
							</div>
						</div>
					))}
					{Array.from({ length: dataLength.current }).map((_, index) => (
						<div className={styles.row} key={index} ref={rowRef}>
							<div
								className={styles.row_item}
								style={{ width: widths.current[0] }}
							>
								陈子涵{index + 1}
							</div>
							<div
								className={styles.row_item}
								style={{ width: widths.current[1] }}
							>
								21
							</div>
							<div
								className={styles.row_item}
								style={{ width: widths.current[2] }}
							>
								广东省深圳市
							</div>
							<div
								className={styles.row_item}
								style={{ width: widths.current[3] }}
							>
								2023-01-01 12:00:00{' '}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ScrollTable;
