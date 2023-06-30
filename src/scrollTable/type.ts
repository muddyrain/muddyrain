interface ColumnType {
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
}
export interface ScrollTableProps {
	/**
	 * 表头数据
	 */
	columns: ColumnType[];
	/**
	 * 表格数据
	 */
	dataSource: any[];
	/**
	 * 是否自动播放
	 * default : true
	 */
	isAutoPlay?: boolean;
}
