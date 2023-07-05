import { Button, Image, Slider, Space } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { getData } from '../data';
import Waterfall from '../index';

const Demo1: FC = () => {
	const [width, setWidth] = useState(160);
	const [spacing, setSpacing] = useState(15);
	const [data, setData] = useState<any[]>([]);

	useEffect(() => {
		getData().then((res) => {
			setData(res?.message || []);
		});
	}, []);
	return (
		<>
			<Space>
				<Button
					onClick={() => {
						getData().then((res) => {
							setData([...data, ...(res?.message || [])]);
						});
					}}
				>
					加载数据
				</Button>
			</Space>
			<Space>
				<Space>
					<span>图片宽度</span>
					<Slider
						style={{ width: '400px' }}
						value={width}
						tooltip={{
							open: true,
						}}
						min={100}
						max={1000}
						onChange={(value: number) => {
							setWidth(value);
						}}
					/>
				</Space>
				<Space>
					<span>间距</span>
					<Slider
						style={{ width: '400px' }}
						value={spacing}
						tooltip={{
							open: true,
						}}
						min={0}
						max={50}
						onChange={(value: number) => {
							setSpacing(value);
						}}
					/>
				</Space>
			</Space>
			<Waterfall
				width={width}
				spacing={spacing}
				dataSource={data.map((image) => ({ url: image }))}
				renderItem={(data) => {
					const { url, left, top, width, height } = data;
					return (
						<div
							style={{
								transform: 'translate3d(' + left + 'px, ' + top + 'px, 0)',
								width,
								height,
								position: 'absolute',
								backgroundColor: 'white',
								boxShadow: '0 0 5px #cccccc',
								padding: '10px',
								boxSizing: 'border-box',
								borderRadius: '10px',
							}}
						>
							<Image
								wrapperStyle={{ width: '100%', height: '100%' }}
								style={{ width: '100%', height: '100%' }}
								src={url}
								alt=""
							/>
						</div>
					);
				}}
			/>
		</>
	);
};

export default Demo1;
