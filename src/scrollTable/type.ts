import { Placement } from 'tippy.js';
export type AlignType = 'left' | 'center' | 'right';
export interface ColumnType {
	/**
	 * 列样式类名
	 *
	 * default : -
	 */
	className?: string;
	/**
	 * 列数据在数据项中对应的路径
	 *
	 * default : -
	 */
	dataIndex: string;
	/**
	 * 超过宽度将自动省略
	 *
	 * default : false
	 */
	ellipsis?: boolean;
	/**
	 * 生成复杂数据的渲染函数，参数分别为当前行的值，当前行数据，行索引
	 *
	 * default : -
	 */
	render?: (
		text: any,
		record: any,
		index: number
	) => string | React.ReactNode | JSX.Element;
	/**
	 * 列头显示文字
	 *
	 * default : -
	 */
	title: React.ReactNode;
	/**
	 * 列宽度
	 *
	 * default : 1:1
	 */
	width?: number | string;
	/**
	 * 行数据对齐方式
	 *
	 * default : left
	 */
	align?: AlignType;
	/**
	 * 对齐方式
	 *
	 * default : left
	 */
	headAlign?: AlignType;
	/**
	 * 省略元素类名
	 */
	ellipsisClassName?: string;
	/**
	 * 省略方向
	 */
	ellipsisPlacement?: Placement;
	/**
	 * 指针
	 *
	 * default : auto
	 */
	cursor?: React.CSSProperties['cursor'];
}

/**
 * 数据源类型
 */
export type DataSourceType = any[];
/**
 * 间距类型
 */
export type SpacingType =
	| [number | string, number | string]
	| [number | string, number | string, number | string, number | string]
	| number
	| string;

type MouseEventHandler = (
	record: any,
	index: number,
	event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => void;
export interface ScrollTableProps {
	/**
	 * 表头数据
	 */
	columns: ColumnType[];
	/**
	 * 表格数据
	 */
	dataSource: DataSourceType;
	/**
	 * 是否自动播放
	 * default : true
	 */
	isAutoPlay?: boolean;
	/**
	 * 类名
	 */
	className?: string;
	/**
	 * 样式
	 */
	style?: React.CSSProperties;
	/**
	 * 表头容器类名
	 */
	headClassName?: string;
	/**
	 * 行容器类名
	 */
	rowClassName?: string;
	/**
	 * 表头容器样式
	 */
	headStyle?: React.CSSProperties;
	/**
	 * 行容器样式
	 */
	rowStyle?: React.CSSProperties;
	/**
	 * 表头每列间距
	 *
	 * 内用于 padding 属性
	 *
	 * default : [10,15]
	 */
	headSpacing?: SpacingType;
	/**
	 * 行每列间距
	 *
	 * 内用于 padding 属性
	 *
	 * default : [10,15]
	 */
	rowSpacing?: SpacingType;
	/**
	 * 表头背景颜色
	 *
	 * default : blue-400
	 */
	headBackgroundColor?: React.CSSProperties['backgroundColor'];
	/**
	 * 行背景颜色
	 *
	 * 有条纹的: [cyan-700,sky-700]
	 *
	 * default : cyan-700
	 */
	rowBackgroundColor?: React.CSSProperties['backgroundColor'];
	/**
	 * 有条纹的
	 *
	 * default : true
	 */
	striped?: boolean;
	/**
	 * 滚动动画执行时长 (毫秒)
	 *
	 * default : 1000
	 */
	duration?: number;
	/**
	 * 延时停留时长 (毫秒)
	 *
	 * default : 250
	 */
	delay?: number;
	/**
	 * 轮播时间间隔 (毫秒)
	 *
	 * default : 2000
	 */
	waitTime?: number;
	/**
	 * 每行滚动行高
	 *
	 * 根据第一行数据自动计算 如果添加则覆盖
	 *
	 * default : -
	 */
	rowScrollHeight?: number;

	/**
	 * 悬浮暂停
	 *
	 * default : false
	 */
	hoverPause?: boolean;

	/**
	 * 点击事件
	 *
	 * default : -
	 */
	onClick?: MouseEventHandler;

	/**
	 * 鼠标进入事件
	 *
	 * default : -
	 */
	onMouseOver?: MouseEventHandler;
	/**
	 * 鼠标离开事件
	 *
	 * default : -
	 */
	onMouseLeave?: MouseEventHandler;
	/**
	 * 鼠标移动事件
	 *
	 * default : -
	 */
	onMouseMove?: MouseEventHandler;
}
