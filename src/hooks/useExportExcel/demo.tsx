import Tabler from '@/tabler';
import { Button } from 'antd';
import React, { FC } from 'react';
import useExportExcel from '.';

const useExportExcelDemo: FC = () => {
	const data = [
		{
			id: 1,
			name: 'muddyrain',
			age: 18,
			address: '北京市朝阳区',
			img: <img src="https://random.imagecdn.app/50/50" />,
		},
	];
	const columns = [
		{
			title: '姓名',
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
	];
	const { exportExcel } = useExportExcel('表格文件');
	return (
		<div>
			<Button
				onClick={() => {
					exportExcel(columns, data);
				}}
			>
				导出
			</Button>
			<Tabler rowKey="id" dataSource={data} columns={columns} />
		</div>
	);
};

export default useExportExcelDemo;
