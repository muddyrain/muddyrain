import { Slider, Space } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import image1 from '../images/1.jpg';
import image2 from '../images/2.jpg';
import image3 from '../images/3.jpg';
import image4 from '../images/4.jpg';
import image5 from '../images/5.jpg';
import image6 from '../images/6.jpg';
import image7 from '../images/7.jpg';
import Waterfall from '../index';
const images = [image1, image2, image3, image4, image5, image6, image7];
const Demo1: FC = () => {
	const [width, setWidth] = useState(200);
	useEffect(() => {
		setTimeout(() => {}, 2000);
	}, []);
	return (
		<>
			<Space>
				<div>
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
				</div>
			</Space>
			<Waterfall
				width={width}
				dataSource={images.map((image) => ({ url: image }))}
				renderItem={(data) => {
					const { url, left, top, width } = data;
					return (
						<div
							style={{
								transform: 'translate3d(' + left + 'px, ' + top + 'px, 0)',
								width,
								position: 'absolute',
							}}
						>
							<img style={{ width: '100%' }} src={url} alt="" />
						</div>
					);
				}}
			/>
		</>
	);
};

export default Demo1;
