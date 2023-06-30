import gsap from 'gsap';
import React, { FC, useLayoutEffect, useRef, useState } from 'react';
import styles from './index.module.less';
import type { DataSourceType, ScrollTableProps, SpacingType } from './type';

const ScrollTable: FC<ScrollTableProps> = ({
	columns,
	dataSource,
	isAutoPlay = true,
	className = '',
	headClassName = '',
	rowClassName = '',
	headStyle = {},
	rowStyle = {},
	headSpacing = [10, 15],
	rowSpacing = [10, 15],
	style,
}) => {
	// 表格身体元素
	const tableBodyRef = useRef<HTMLDivElement>(null);
	// 表格外部元素
	const tableWrapperRef = useRef<HTMLDivElement>(null);
	// 行元素
	const rowRef = useRef<HTMLDivElement>(null);
	const scrollHeight = useRef(0);
	// 是否播放
	const isPlay = useRef(isAutoPlay);
	const dataLength = useRef(dataSource.length);
	const widths = useRef<number[]>([]);
	const isInit = useRef(false);
	const rowHeight = useRef(0);
	const [data, setData] = useState<DataSourceType>(dataSource);
	// 当前滚动的索引
	const currentScrollIndex = useRef(0);
	/**
	 * 计算间距
	 */
	const computedSpacing = (spacing: SpacingType): string => {
		if (Array.isArray(spacing)) {
			if (spacing.length === 2) {
				return `${spacing[0]}px ${spacing[1]}px`;
			}
			if (spacing.length === 4) {
				return `${spacing[0]}px ${spacing[1]}px ${spacing[2]}px ${spacing[3]}px`;
			}
		}
		if (typeof spacing === 'string') {
			return `${spacing}`;
		}
		if (typeof spacing === 'number') {
			return `${spacing}px`;
		}
		return ``;
	};
	/**
	 * 计算数据源
	 */
	const computedData = () => {
		/**
		 * 迭代数据
		 */
		function iterateData(data: DataSourceType, num: number) {
			let _data: DataSourceType = [];
			for (let i = 0; i < num; i++) {
				_data = [..._data, ...data];
			}
			setData([..._data]);
		}
		if (tableWrapperRef.current) {
			const targetElement = tableWrapperRef.current as HTMLDivElement;
			const { height } = targetElement.getBoundingClientRect();
			// 承载个数
			const CarryingNumber = Math.ceil(height / rowHeight.current);
			// 承载需求层叠次数
			const needsNumber = Math.ceil(CarryingNumber / dataLength.current);
			if (CarryingNumber > dataLength.current) {
				iterateData(data, needsNumber + 1);
			}
		}
	};
	/**
	 * 计算表格宽度
	 */
	const computedWidth = () => {
		console.log(tableBodyRef.current);
		if (tableBodyRef.current) {
			const targetElement = tableBodyRef.current as HTMLDivElement;
			const { width } = targetElement.getBoundingClientRect();
			widths.current = Array.from({ length: columns.length }).map(
				() => width / columns.length
			);
		}
	};
	// 开始运动
	const startMove = () => {
		if (tableBodyRef.current && rowRef.current) {
			const targetElement = tableBodyRef.current as HTMLDivElement;
			scrollHeight.current += rowHeight.current;
			currentScrollIndex.current += 1;
			gsap.to(tableBodyRef.current.style, {
				duration: 1,
				delay: 0.25,
				transform: `translateY(-${scrollHeight.current}px)`,
				onComplete() {
					// 如果当前滚动的索引小于数据总长度
					if (currentScrollIndex.current < dataLength.current) {
						if (isPlay.current) {
							startMove();
						}
					} else {
						targetElement.style.transform = `translateY(0px)`;
						scrollHeight.current = 0;
						currentScrollIndex.current = 0;
						if (isPlay.current) {
							startMove();
						}
					}
				},
			});
		}
	};
	useLayoutEffect(() => {
		if (isInit.current) return;
		computedWidth();
		if (!rowRef.current) return;
		isInit.current = true;
		const { height } = rowRef.current.getBoundingClientRect();
		rowHeight.current = height;
		computedData();
		if (isPlay.current) {
			startMove();
		}
	}, [tableBodyRef.current, rowRef.current]);
	return (
		<div
			className={`${styles.scrollTable_container} ${className}`}
			style={style}
		>
			<div
				className={`${styles.head} ${headClassName}`}
				style={{ ...headStyle }}
			>
				{columns.map((column, columnIndex) => (
					<div
						key={columnIndex}
						className={styles.head_item}
						style={{
							width: column.width || widths.current[columnIndex],
							padding: computedSpacing(headSpacing),
						}}
					>
						{column.title}
					</div>
				))}
			</div>
			<div className={styles.wrapper} ref={tableWrapperRef}>
				<div
					className={styles.body}
					ref={tableBodyRef}
					style={{ transform: 'translateY(0px)' }}
				>
					{data.map((item, index) => (
						<div
							className={`${styles.row} ${rowClassName}`}
							style={{ ...rowStyle }}
							key={index}
							{...(index === 0 ? { ref: rowRef } : {})}
						>
							{columns.map((column, columnIndex) => {
								return (
									<div
										key={columnIndex}
										className={styles.row_item}
										style={{
											width: column.width || widths.current[columnIndex],
											padding: computedSpacing(rowSpacing),
										}}
									>
										{column.dataIndex && item[column.dataIndex]}
									</div>
								);
							})}
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default ScrollTable;
