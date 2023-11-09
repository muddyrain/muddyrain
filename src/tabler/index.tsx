import { useSetState } from 'ahooks';
import { Button, Popconfirm, Space, Table, Tooltip } from 'antd';
import React, { FC } from 'react';
import { TablerProps } from './type';
const handleActions = (
	actions: TablerProps['actions'],
	actionsWidth?: TablerProps['actionsWidth'],
	actionsProps?: TablerProps['columns'][number]
): TablerProps['columns'] => {
	if (Array.isArray(actions)) {
		return [
			{
				title: '操作',
				width: actionsWidth || 200,
				align: 'center',
				render: (_, record, index) => {
					return (
						<Space style={{ padding: '0 10px' }}>
							{actions.map((action, _index) => {
								const key = action.key || _index;
								/**
								 * 函数返回时是否显示
								 */
								if (
									typeof action.visible === 'function' &&
									!action.visible(record, index)
								)
									return null;
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
				...actionsProps,
			},
		];
	}
	return [];
};
// 处理固定列
const procedureFixed = ({
	fixed,
	columns,
	scroll,
}: {
	fixed?: boolean;
	columns?: TablerProps['columns'];
	scroll?: TablerProps['scroll'];
}) => {
	let total = 0;

	// 计算内容需要宽度 [Begin]
	const recursion = (list: TablerProps['columns'] = []) => {
		list.forEach((item: any) => {
			total = total + (Number(item?.width) || 0);
			if (item?.children) {
				recursion(item.children);
			}
		});
	};
	// 计算内容需要宽度 [End]

	recursion(columns);

	return fixed ? { scroll: { x: total, ...scroll } } : {};
};

const handleSort = (
	props: TablerProps,
	pagination: TablerProps['pagination']
): TablerProps['columns'] => {
	return [
		{
			title: props.sortTitle || '序号',
			width: props.sortWidth || 80,
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
			...props.sortProps,
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
							<div
								style={{
									width: '100%',
									textOverflow: 'ellipsis',
									overflow: 'hidden',
								}}
							>
								{content}
							</div>
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
	const {
		columns = [],
		dataSource = [],
		actions = null,
		onPageChange,
		actionsWidth,
		actionsProps,
		fixed = true,
	} = props;
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
			{...procedureFixed({ fixed, scroll: props.scroll, columns })}
			columns={[
				...(props.showSort ? handleSort(props, pagination) || [] : []),
				...(handleCell(columns) || []),
				...(handleActions(actions, actionsWidth, actionsProps) || []),
			]}
			pagination={pagination}
			dataSource={dataSource}
		/>
	);
};

export default Tabler;
export * from './type.d';
