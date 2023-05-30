import { Button, Popconfirm, Space, Table, Tooltip } from 'antd';
import React, { FC } from 'react';
import { TablerProps } from './type';

const handleActions = (
	actions: TablerProps['actions']
): TablerProps['columns'] => {
	if (!actions) {
		return [];
	}
	return [
		{
			title: '操作',
			render: (_, record, index) => {
				return (
					<Space>
						{actions.map((action, _index) => {
							const key = action.key || _index;
							/**
							 * 自定义函数组件式方式
							 */
							if (typeof action?.content === 'function') {
								return <div key={key}>{action?.content(record, index)}</div>;
							}
							if (action.confirm) {
								return (
									<Popconfirm
										title="提示"
										key={key}
										description={
											typeof action.confirm === 'string'
												? action.confirm
												: action.confirm(record, index)
										}
										okText="确定"
										cancelText="取消"
										onConfirm={() => {
											action.onClick?.(record, index);
										}}
										{...action.confirmProps}
									>
										<Button type="primary" {...action.props}>
											{action.content || ''}
										</Button>
									</Popconfirm>
								);
							}
							/**
							 * 普通方式 - 展示内容按钮
							 */
							return (
								<Button
									key={key}
									type="primary"
									onClick={() => {
										action.onClick?.(record, index);
									}}
									{...action.props}
								>
									{action.content}
								</Button>
							);
						})}
					</Space>
				);
			},
		},
	];
};

const handleSort = (props: TablerProps): TablerProps['columns'] => {
	return [
		{
			title: props.sortTitle || '序号',
			render(_, __, index) {
				if (typeof props.pagination === 'object') {
					return (
						index +
						1 +
						((props.pagination?.current || 1) - 1) *
							(props.pagination?.pageSize || 10)
					);
				} else {
					return index + 1;
				}
			},
		},
	];
};

const handleCell = (
	columns: TablerProps['columns']
): TablerProps['columns'] => {
	console.log(columns);
	return columns.map((column) => {
		return {
			...column,
			render: (text) => {
				if (typeof column.ellipsis === 'boolean' && column.ellipsis) {
					return (
						<Tooltip title={text} {...column.ellipsisProps}>
							{text}
						</Tooltip>
					);
				} else {
					return <div>{text}</div>;
				}
			},
		};
	});
};

const Tabler: FC<TablerProps> = (props) => {
	const { columns = [], dataSource = [], actions = null } = props;
	return (
		<Table
			columns={[
				...(handleSort(props) || []),
				...(handleCell(columns) || []),
				...(handleActions(actions) || []),
			]}
			dataSource={dataSource}
		/>
	);
};

export default Tabler;
