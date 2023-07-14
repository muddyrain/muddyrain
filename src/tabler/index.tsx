import { useSetState } from 'ahooks';
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
							 * 是否显示
							 */
							if (action.visible === false) {
								return null;
							}
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
										disabled={!!action.disabled}
										okText="确定"
										cancelText="取消"
										onConfirm={() => {
											action.onClick?.(record, index);
										}}
										{...action.confirmProps}
									>
										<Button
											disabled={!!action.disabled}
											loading={!!action.loading}
											type="primary"
											{...action.props}
										>
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
									loading={!!action.loading}
									disabled={!!action.disabled}
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

const handleSort = (
	props: TablerProps,
	pagination: TablerProps['pagination']
): TablerProps['columns'] => {
	return [
		{
			title: props.sortTitle || '序号',
			render(_, __, index) {
				if (pagination) {
					return (
						index +
						1 +
						((pagination?.current || 1) - 1) * (pagination?.pageSize || 10)
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
	return columns.map((column) => {
		return {
			...column,
			render: (text, record, index) => {
				const content = column.render?.(text, record, index) || text;
				if (typeof column.ellipsis === 'boolean' && column.ellipsis) {
					return (
						<Tooltip title={text} {...column.ellipsisProps}>
							{content}
						</Tooltip>
					);
				} else {
					return <>{content}</>;
				}
			},
		};
	});
};

const Tabler: FC<TablerProps> = (props) => {
	const { columns = [], dataSource = [], actions = null, onPageChange } = props;
	const [state, setState] = useSetState({
		current: 1,
		pageSize: 10,
	});
	const pagination: TablerProps['pagination'] =
		typeof props.pagination === 'boolean'
			? props.pagination
			: {
					current: state.current,
					pageSize: state.pageSize,
					total: dataSource.length,
					showTotal: (value) => `共 ${value} 条`,
					onChange(page, pageSize) {
						setState({
							current: page,
							pageSize,
						});
						onPageChange?.({ page, size: pageSize, pageSize });
					},
					...props.pagination,
			  };
	return (
		<Table
			{...props}
			columns={[
				...(handleSort(props, pagination) || []),
				...(handleCell(columns) || []),
				...(handleActions(actions) || []),
			]}
			pagination={pagination}
			dataSource={dataSource}
		/>
	);
};

export default Tabler;
