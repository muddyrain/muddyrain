import { Image, Slider, Space } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { getData } from '../data';
import Waterfall from '../index';
const Demo1: FC = () => {
	const [width, setWidth] = useState(234);
	const [spacing, setSpacing] = useState(15);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<any[]>([]);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setData(
				[
					'https://images.dog.ceo/breeds/hound-afghan/n02088094_1479.jpg',
					'https://images.dog.ceo/breeds/hound-basset/n02088238_10140.jpg',
					'https://images.dog.ceo/breeds/hound-basset/n02088238_3359.jpg',
					'https://images.dog.ceo/breeds/hound-blood/n02088466_5432.jpg',
					'https://images.dog.ceo/breeds/hound-english/n02089973_1907.jpg',
					'https://images.dog.ceo/breeds/hound-english/n02089973_811.jpg',
					'https://images.dog.ceo/breeds/hound-english/n02089973_99.jpg',
					'https://images.dog.ceo/breeds/hound-ibizan/n02091244_2709.jpg',
					'https://images.dog.ceo/breeds/hound-ibizan/n02091244_2760.jpg',
					'https://images.dog.ceo/breeds/hound-ibizan/n02091244_589.jpg',
				] || []
			);
			setLoading(false);
		}, 250);
	}, []);
	return (
		<>
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
				loading={loading}
				dataSource={data.map((image) => ({ url: image }))}
				onScrollCallback={() => {
					setLoading(true);
					return getData().then((res) => {
						setLoading(false);
						return (res?.message || []).map((item: any) => ({
							url: item,
						}));
					});
				}}
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
