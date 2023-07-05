import { Image } from 'antd';
import React, { FC, useState } from 'react';
import Waterfall from '../index';
const Demo2: FC = () => {
	const [data] = useState<any[]>([
		'https://muddyrain-oss.oss-cn-hangzhou.aliyuncs.com/package_assets/waterfall_1.jpg',
		'image2',
		'https://muddyrain-oss.oss-cn-hangzhou.aliyuncs.com/package_assets/waterfall_2.jpg',
	]);
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
