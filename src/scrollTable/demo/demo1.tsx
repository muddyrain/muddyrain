import React, { FC } from 'react';
import ScrollTable from '..';
const Demo1: FC = () => {
	return (
		<>
			<ScrollTable
				style={{ height: 640 }}
				isAutoPlay={true}
				dataSource={Array.from({ length: 10 }).map((_, index) => ({
					name: '陈子涵' + (index + 1),
					age: '21',
					address: '广东省深圳市',
					date: '2023-01-01 12:00:00',
				}))}
				columns={[
					{
						title: '姓名',
						width: '450px',
						dataIndex: 'name',
					},
					{
						title: '年龄',
						dataIndex: 'age',
					},
					{
						title: '地址',
						dataIndex: 'address',
					},
					{
						title: '日期',
						dataIndex: 'date',
					},
				]}
			/>
		</>
	);
};

export default Demo1;
