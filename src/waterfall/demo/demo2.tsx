import { Image } from 'antd';
import React, { FC, useState } from 'react';
import image1 from '../images/1.jpg';
import image3 from '../images/3.jpg';
import Waterfall from '../index';
const Demo2: FC = () => {
	const [data] = useState<any[]>([image1, 'image2', image3]);
	return (
		<>
			<Waterfall
				dataSource={data.map((image) => ({ url: image }))}
				renderItem={(data) => {
					const { url, left, top, width, height, isLoad } = data;
					return (
						isLoad && (
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
						)
					);
				}}
			/>
		</>
	);
};

export default Demo2;
