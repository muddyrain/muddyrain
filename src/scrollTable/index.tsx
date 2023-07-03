import Tippy from '@tippyjs/react';
import gsap from 'gsap';
import React, { FC, useLayoutEffect, useRef, useState } from 'react';
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
	const renderText = column.render ? column.render(text, item, index) : text;
	if (column.ellipsis) {
		return (
			<Tippy
				placement={column.ellipsisPlacement || 'top'}
				content={<div className={column.ellipsisClassName}>{text}</div>}
			>
				{column.render ? (
					React.cloneElement(renderText, {
						className: `${styles['ellipsis-line']} ${renderText?.props?.className}`,
					})
				) : (
					<span className={styles['ellipsis-line']}>{text}</span>
				)}
			</Tippy>
		);
	} else {
		return renderText;
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
	headTextColor = 'white',
	rowTextColor = 'white',
	striped = true,
	duration = 1000,
	delay = 250,
	waitTime = 2000,
	rowScrollHeight,
	hoverPause = false,
	onClick,
	onMouseOver,
	onMouseMove,
	onMouseLeave,
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
	const childrenElements = useRef<Element[]>([]);
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
		if (!tableBodyRef.current) return;
		const targetElement = childrenElements.current[currentScrollIndex.current];
		const { height } = targetElement.getBoundingClientRect();
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
			} else {
				iterateData(data, 2);
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
	const computedTransform = (startMove: () => void) => {
		if (tableBodyRef.current && rowRef.current) {
			const targetElement = tableBodyRef.current as HTMLDivElement;
			// 重新计算下一个行高
			computedRowHeight();
			scrollHeight.current += rowScrollHeight || rowHeight.current;
			currentScrollIndex.current += 1;
			gsap.to(tableBodyRef.current.style, {
				duration: duration / 1e3,
				delay: delay / 1e3,
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
	// 开始运动
	const startMove = () => {
		if (!isPlay.current) return;
		if (timer.current) {
			clearTimeout(timer.current);
		}
		timer.current = setTimeout(() => {
			computedTransform(startMove);
		}, waitTime);
	};
	const computedRowBackgroundColor = (index: number) => {
		let _rowBackgroundColor = rowBackgroundColor;
		if (striped) {
			if (
				!(
					Array.isArray(_rowBackgroundColor) && _rowBackgroundColor.length === 2
				)
			) {
				console.warn(
					'`ScrollTable` 如果设置了 `striped` 为条纹状,那么只支持两种颜色,为保证渲染效果,请使用两种颜色数组[color,color]'
				);
				_rowBackgroundColor = [colors['cyan']['700'], colors['sky']['700']];
			}
			if (index % 2 === 0) {
				return _rowBackgroundColor[0];
			} else {
				return _rowBackgroundColor[1];
			}
		} else {
			if (Array.isArray(_rowBackgroundColor)) {
				console.warn(
					'`ScrollTable` 当前状态为正常颜色,仅支持1种颜色,为保证渲染效果,请使用1种颜色-color'
				);
				return _rowBackgroundColor[0];
			} else {
				return _rowBackgroundColor as string;
			}
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
	/**
	 * 监听窗口时间
	 */
	const listenWindowSize = () => {
		computedWidth();
		window.addEventListener('resize', () => {
			computedWidth();
		});
	};
	useLayoutEffect(() => {
		if (isInit.current) return;
		if (!tableBodyRef.current) return;
		listenWindowSize();
		childrenElements.current = Array.from(tableBodyRef.current.children).slice(
			0,
			dataLength.current
		);
		computedRowHeight();
		isInit.current = true;
		computedData();
		startMove();
	}, [tableBodyRef.current, rowRef.current]);
	return (
		<div
			className={`${styles.scrollTable_container} ${className}`}
			style={style}
			onMouseOver={() => {
				if (hoverPause) {
					isPlay.current = false;
					clearTimeout(timer.current);
				}
			}}
			onMouseLeave={() => {
				isPlay.current = true;
				startMove();
			}}
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
							color: headTextColor,
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
											color: rowTextColor,
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
										onMouseLeave={(e) => {
											onMouseLeave?.(item, index, e);
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
