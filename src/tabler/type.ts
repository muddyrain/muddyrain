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
	rowKey?: string;
	actions?: TablerActionsProps[] | null;
	/**
	 * 排序标题
	 * default: 序号
	 */
	sortTitle?: string;
	columns: (ColumnType<RecordType> & {
		ellipsis?: boolean;
		ellipsisProps?: TooltipProps;
	})[];
	onPageChange?: (props: {
		page: number;
		pageSize: number;
		size: number;
	}) => void;
}
