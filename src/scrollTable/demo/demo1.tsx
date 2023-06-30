import React, { FC } from 'react';
import ScrollTable from '..';
const Demo1: FC = () => {
	return (
		<>
			<ScrollTable
				style={{ height: 400 }}
				isAutoPlay={true}
				duration={200}
				waitTime={1000}
				hoverPause={true}
				onClick={(record, index) => {
					console.log(record, index);
				}}
				dataSource={Array.from({ length: 5 }).map((_, index) => ({
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
						align: 'center',
						headAlign: 'center',
						render: () => {
							return (
								<div
									style={{
										width: '100%',
										height: 50,
										display: 'flex',
										alignItems: 'center',
									}}
								>
									<img
										src="https://p3-passport.byteimg.com/img/user-avatar/09e00df42d9bfe86f3b0c7c8cdbf1c84~100x100.awebp"
										alt=""
									/>
									<span>陈子涵</span>
								</div>
							);
						},
					},
					{
						title: '年龄',
						dataIndex: 'age',
						render(text) {
							return text + '岁';
						},
					},
					{
						title: '地址',
						dataIndex: 'address',
						ellipsis: true,
						cursor: 'pointer',
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
