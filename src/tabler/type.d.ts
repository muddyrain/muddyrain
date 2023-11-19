import { ButtonProps, PopconfirmProps, TooltipProps } from 'antd';
import type { ColumnType, TableProps } from 'antd/es/table';

export type RecordType = any;

export interface TablerActionsProps {
	key?: string;
	confirm?: string | ((record: RecordType, index: number) => string);
	visible?: boolean | ((record: RecordType, index: number) => boolean);
	loading?: boolean | ((record: RecordType, index: number) => boolean);
	disabled?: boolean | ((record: RecordType, index: number) => boolean);
	props?: ButtonProps;
	confirmProps?: PopconfirmProps;
	content:
		| React.ReactNode
		| ((record: RecordType, index: number) => React.ReactNode);
	onClick?: (record: RecordType, index: number) => void;
}

export interface TablerProps extends TableProps<RecordType> {
	/**
	 * 类名
	 */
	className?: string;
	/**
	 * 样式
	 */
	style?: React.CSSProperties;
	/**
	 * 行key
	 */
	rowKey?: string;
	/**
	 * 高度自适应
	 * default: 否
	 */
	autoHeight?: boolean;
	/**
	 * 操作项
	 */
	actions?: TablerActionsProps[] | null;
	/**
	 * 操作项参数
	 * @default {}
	 */
	actionsProps?: TablerProps['columns'][number];
	/**
	 * 显示
	 * default: 是否显示排序
	 */
	showSort?: boolean;
	/**
	 * 排序标题
	 * default: 序号
	 */
	sortTitle?: string;
	/**
	 * 排序宽度
	 * default: 80
	 */
	sortWidth?: number;
	/**
	 * 排序参数
	 * default: {}
	 */
	sortProps?: TablerProps['columns'][number];
	/**
	 * 操作列宽度
	 * default: 200
	 */
	actionsWidth?: string | number | undefined;
	/**
	 * 是否固定
	 * default: true
	 */
	fixed?: boolean;
	/**
	 * 表格列的配置
	 */
	columns: (ColumnType<RecordType> & {
		ellipsis?: boolean;
		ellipsisProps?: TooltipProps;
	})[];
	/**
	 * 监听分页
	 */
	onPageChange?: (props: {
		page: number;
		pageSize: number;
		size: number;
	}) => void;
}
