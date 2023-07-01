import { ColorPicker, Space, Switch } from 'antd';
import React, { FC } from 'react';
import Tailor from '..';
import image1 from '../images/1.png';
import image2 from '../images/2.png';
import image3 from '../images/3.png';

const Demo1: FC = () => {
	const [isShowDownload, setIsShowDownload] = React.useState(true);
	const [isShowReview, setIsShowReview] = React.useState(true);
	const [areaColor, setAreaColor] = React.useState('#f00000');
	const [areaAlpha, setAreaAlpha] = React.useState(0.25);

	return (
		<div className="flex">
			<h2>小于容器尺寸</h2>
			<Space>
				<div>
					<Switch
						checked={isShowReview}
						onChange={() => setIsShowReview(!isShowReview)}
					/>
					<span>是否显示预览</span>
				</div>
				<div>
					<Switch
						checked={isShowDownload}
						onChange={() => setIsShowDownload(!isShowDownload)}
					/>
					<span>是否显示下载</span>
				</div>
				<Space>
					<ColorPicker
						value={areaColor}
						onChange={(e: any) => {
							setAreaColor('#' + e.toHex());
							setAreaAlpha(e.metaColor.roundA);
						}}
					/>
					<span>区域颜色</span>
				</Space>
			</Space>

			<Tailor
				isShowDownload={isShowDownload}
				isShowReview={isShowReview}
				areaColor={areaColor}
				areaAlpha={areaAlpha}
				src={image1}
			></Tailor>
			<h2>大于宽度容器尺寸</h2>
			<Tailor src={image2}></Tailor>
			<h2>大于高度容器尺寸</h2>
			<Tailor src={image3}></Tailor>
		</div>
	);
};

export default Demo1;
