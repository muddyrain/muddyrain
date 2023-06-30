import gsap from 'gsap';
import React, { FC, useLayoutEffect, useRef, useState } from 'react';
import styles from './index.module.less';
import { ScrollTableProps } from './type';
type DataSourceType = ScrollTableProps['dataSource'];
const ScrollTable: FC<ScrollTableProps> = ({
	columns,
	dataSource,
	isAutoPlay = true,
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
				iterateData(data, needsNumber);
			}
		}
	};
	/**
	 * 计算表格宽度
	 */
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
		if (!rowRef.current) return;
		isInit.current = true;
		const { height } = rowRef.current.getBoundingClientRect();
		rowHeight.current = height;
		computedData();
		computedWidth();
		if (isPlay.current) {
			startMove();
		}
	}, [tableBodyRef.current, rowRef.current]);
	return (
		<div className={styles.scrollTable_container}>
			<div className={styles.head}>
				{columns.map((column, columnIndex) => (
					<div
						key={columnIndex}
						className={styles.head_item}
						style={{ width: column.width || widths.current[columnIndex] }}
					>
						{column.title}
					</div>
				))}
			</div>
			<div
				className={styles.wrapper}
				ref={tableWrapperRef}
				style={{ height: 300 }}
			>
				<div
					className={styles.body}
					ref={tableBodyRef}
					style={{ transform: 'translateY(0px)' }}
				>
					{data.map((item, index) => (
						<div
							className={styles.row}
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
										}}
									>
										{column.dataIndex && item[column.dataIndex]}
									</div>
								);
							})}
						</div>
					))}
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
				</div>
			</div>
		</div>
	);
};

export default ScrollTable;
