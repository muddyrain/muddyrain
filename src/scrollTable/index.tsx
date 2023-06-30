import Tippy from '@tippyjs/react';
import gsap from 'gsap';
import React, { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
import colors from 'tailwindcss/colors';
import 'tippy.js/dist/tippy.css';
import styles from './index.module.less';
import type {
	AlignType,
	ColumnType,
	DataSourceType,
	ScrollTableProps,
	SpacingType,
} from './type';

/**
 * 处理渲染行数据
 */
const handleRenderRowData = (
	column: ColumnType,
	item: DataSourceType[number],
	index: number
): React.ReactNode => {
	const text = column.dataIndex && item[column.dataIndex];
	if (column.ellipsis) {
		return (
			<Tippy
				placement={column.ellipsisPlacement || 'top'}
				content={<div className={column.ellipsisClassName}>{text}</div>}
			>
				<span className={styles['ellipsis-line']}>{text}</span>
			</Tippy>
		);
	} else {
		if (column.render) {
			return column.render(item[column.dataIndex], item, index);
		} else {
			return text;
		}
	}
};

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
	headBackgroundColor = colors['blue']['400'],
	rowBackgroundColor: _rowBackgroundColor,
	striped = true,
	duration = 1000,
	delay = 250,
	waitTime = 2000,
	rowScrollHeight,
	onClick,
	onMouseOver,
	onMouseMove,
	onMouseEnter,
	style,
}) => {
	const rowBackgroundColor =
		_rowBackgroundColor ||
		(striped
			? [colors['cyan']['700'], colors['sky']['700']]
			: colors['cyan']['700']);
	const timer = useRef<NodeJS.Timer>();
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
	 * 计算行的高度
	 */
	const computedRowHeight = () => {
		if (!rowRef.current) return;
		const { height } = rowRef.current.getBoundingClientRect();
		rowHeight.current = height;
	};
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
			computedRowHeight();
		}
	};
	/**
	 * 计算表格宽度
	 */
	const computedWidth = () => {
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
		timer.current = setTimeout(() => {
			if (tableBodyRef.current && rowRef.current) {
				const targetElement = tableBodyRef.current as HTMLDivElement;
				scrollHeight.current += rowScrollHeight || rowHeight.current;
				currentScrollIndex.current += 1;
				gsap.to(tableBodyRef.current.style, {
					duration: duration / 1e3,
					delay: delay / 1e3,
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
		}, waitTime);
	};
	const computedRowBackgroundColor = (index: number) => {
		if (striped) {
			if (index % 2 === 0) {
				return rowBackgroundColor[0];
			} else {
				return rowBackgroundColor[1];
			}
		} else {
			return rowBackgroundColor as string;
		}
	};
	const computedJustify = (align: AlignType) => {
		switch (align) {
			case 'left':
				return 'flex-start';
			case 'center':
				return 'center';
			case 'right':
				return 'flex-end';
			default:
				return 'flex-start';
		}
	};
	useLayoutEffect(() => {
		if (isInit.current) return;
		computedWidth();
		computedRowHeight();
		isInit.current = true;
		computedData();
		if (isPlay.current) {
			startMove();
		}
	}, [tableBodyRef.current, rowRef.current]);
	useEffect(() => {
		return () => {
			clearTimeout(timer.current);
		};
	}, []);
	return (
		<div
			className={`${styles.scrollTable_container} ${className}`}
			style={style}
		>
			<div
				className={`${styles.head} ${headClassName}`}
				style={{ backgroundColor: headBackgroundColor, ...headStyle }}
			>
				{columns.map((column, columnIndex) => (
					<div
						key={columnIndex}
						className={styles.head_item}
						style={{
							width: column.width || widths.current[columnIndex],
							padding: computedSpacing(headSpacing),
							justifyContent: computedJustify(column.headAlign || 'left'),
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
							style={{
								backgroundColor: computedRowBackgroundColor(index),
								...rowStyle,
							}}
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
											justifyContent: computedJustify(column.align || 'left'),
											cursor: column.cursor,
										}}
										onClick={(e) => {
											onClick?.(item, index, e);
										}}
										onMouseOver={(e) => {
											onMouseOver?.(item, index, e);
										}}
										onMouseMove={(e) => {
											onMouseMove?.(item, index, e);
										}}
										onMouseEnter={(e) => {
											onMouseEnter?.(item, index, e);
										}}
									>
										{handleRenderRowData(column, item, index)}
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
