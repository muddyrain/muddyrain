import React, { FC, useState } from 'react';
import ScrollTable from '..';
const Demo2: FC = () => {
	const [dataSource] = useState([
		{
			address: 'KTV',
			type: '吸烟',
			time: '2023-6-29',
			data: '取流失败',
			isError: true,
		},
		{
			address: '游泳池',
			type: '救生员不在岗',
			time: '2023-6-29',
			data: '第一个取流失败',
			isError: true,
		},
		{
			address: '游艺场所',
			type: '火灾',
			time: '2023-6-29',
			data: '第一个绿了',
			isError: false,
		},
		{
			address: '游泳池',
			type: '救生员不在岗',
			time: '2023-6-29',
			data: '第二个取流失败',
			isError: true,
		},
		{
			address: 'KTV',
			type: '吸烟',
			time: '2023-6-29',
			data: '取流失败',
			isError: true,
		},
		{
			address: '游泳池',
			type: '救生员不在岗',
			time: '2023-6-29',
			data: '第一个取流失败',
			isError: true,
		},
		{
			address: '游艺场所',
			type: '火灾',
			time: '2023-6-29',
			data: '第一个绿了',
			isError: false,
		},
	]);
	return (
		<>
			<ScrollTable
				duration={1000}
				waitTime={1000}
				className="h-full w-full"
				style={{ width: '100%', height: '1150px' }}
				headClassName="text-sm"
				rowBackgroundColor={'red'}
				striped={false}
				headStyle={{
					fontSize: '18.8px',
				}}
				rowClassName="text-xs"
				rowStyle={{
					fontSize: '20px',
				}}
				isAutoPlay={true}
				columns={[
					{
						title: '报警地点',
						dataIndex: 'address',
					},
					{
						title: '报警类型',
						dataIndex: 'type',
					},
					{
						title: '报警时间',
						dataIndex: 'time',
						ellipsis: true,
					},
					{
						title: '数据取流',
						dataIndex: 'data',
						ellipsis: true,
						render(text, record) {
							return (
								<span
									style={{
										color: record.isError ? 'red' : 'green',
									}}
								>
									{text}
								</span>
							);
						},
					},
				]}
				dataSource={dataSource}
			/>
		</>
	);
};

export default Demo2;
