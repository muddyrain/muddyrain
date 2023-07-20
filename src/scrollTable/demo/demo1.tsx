import { ColorPicker, Input, Space, Switch } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import ScrollTable from '..';
const Demo1: FC = () => {
	const [rowTextColor, setRowTextColor] = React.useState('#ffffff');
	const [waitTime, setWaitTime] = React.useState(1000);
	const [duration, setDuration] = React.useState(500);
	const [delay, setDelay] = React.useState(250);
	const [headTextColor, setHeadTextColor] = React.useState('#ffffff');
	const [rowsBackgroundColor, setRowsBackgroundColor] = React.useState([
		'#0e7490',
		'#0369a1',
	]);
	const [rowBackgroundColor, setRowBackgroundColor] = React.useState('#0e7490');
	const [headBackgroundColor, setHeadBackgroundColor] =
		React.useState('#60a5fa');
	const [striped, setStriped] = React.useState(true);
	const mockData = Array.from({ length: 10 }).map((_, index) => ({
		name: '张三11' + (index + 1),
		age: '21',
		address: '广东省深圳市',
		date: '2023-01-01 12:00:00',
	}));
	const [data, setData] = useState<any[]>(mockData);
	useEffect(() => {
		setTimeout(() => {
			setData([
				...Array.from({ length: 6 }).map((_, index) => ({
					name: '张三222' + (index + 1),
					age: '21',
					address: '广东省深圳市',
					date: '2023-01-01 12:00:00',
				})),
			]);
		}, 2000);
	}, []);
	return (
		<>
			<div>
				<h3>颜色</h3>
				<Space>
					<div>
						<Switch checked={striped} onChange={() => setStriped(!striped)} />
						<span>是否为有条纹的</span>
					</div>
					<div>
						<Space>
							<ColorPicker
								value={headBackgroundColor}
								onChange={(e: any) => {
									setHeadBackgroundColor('#' + e.toHex());
								}}
							/>
							<span>表头背景颜色</span>
						</Space>
					</div>
					{!striped ? (
						<div>
							<Space>
								<ColorPicker
									value={rowBackgroundColor}
									onChange={(e: any) => {
										setRowBackgroundColor('#' + e.toHex());
									}}
								/>
								<span>行背景颜色</span>
							</Space>
						</div>
					) : (
						<>
							<div>
								<Space>
									<ColorPicker
										value={rowsBackgroundColor[0]}
										onChange={(e: any) => {
											rowsBackgroundColor[0] = '#' + e.toHex();
											setRowsBackgroundColor([...rowsBackgroundColor]);
										}}
									/>
									<span>行背景颜色(奇数行)</span>
								</Space>
							</div>
							<div>
								<Space>
									<ColorPicker
										value={rowsBackgroundColor[1]}
										onChange={(e: any) => {
											rowsBackgroundColor[1] = '#' + e.toHex();
											setRowsBackgroundColor([...rowsBackgroundColor]);
										}}
									/>
									<span>行背景颜色(偶数行)</span>
								</Space>
							</div>
						</>
					)}
					<div>
						<Space>
							<ColorPicker
								value={rowTextColor}
								onChange={(e: any) => {
									setRowTextColor('#' + e.toHex());
								}}
							/>
							<span>行文字颜色</span>
						</Space>
					</div>
					<div>
						<Space>
							<ColorPicker
								value={headTextColor}
								onChange={(e: any) => {
									setHeadTextColor('#' + e.toHex());
								}}
							/>
							<span>表头文字颜色</span>
						</Space>
					</div>
				</Space>
			</div>
			<div>
				<h3>时间</h3>
				<Space>
					<div>
						<Input
							value={waitTime}
							type={'number'}
							onChange={(e) => setWaitTime(+e.target.value)}
						/>
						<span>轮播时间间隔 (毫秒)</span>
					</div>
					<div>
						<Input
							value={duration}
							type={'number'}
							onChange={(e) => setDuration(+e.target.value)}
						/>
						<span>滚动动画执行时长 (毫秒)</span>
					</div>
					<div>
						<Input
							value={delay}
							type={'number'}
							onChange={(e) => setDelay(+e.target.value)}
						/>
						<span>延时停留时长 (毫秒)</span>
					</div>
				</Space>
			</div>
			<p>&nbsp;</p>
			<ScrollTable
				style={{ height: 400 }}
				isAutoPlay={true}
				duration={duration}
				delay={delay}
				striped={striped}
				waitTime={waitTime}
				hoverPause={true}
				rowTextColor={rowTextColor}
				headTextColor={headTextColor}
				headBackgroundColor={headBackgroundColor}
				rowBackgroundColor={striped ? rowsBackgroundColor : rowBackgroundColor}
				onClick={(record, index) => {
					console.log(record, index);
				}}
				dataSource={data}
				columns={[
					{
						title: '排序',
						specialColumn: 'sort',
					},
					{
						title: '姓名',
						width: '450px',
						dataIndex: 'name',
						align: 'center',
						headAlign: 'center',
						render: (text) => {
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
									<span>{text}</span>
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
				emptyText={'暂无数据'}
			/>
		</>
	);
};

export default Demo1;
