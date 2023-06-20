import React, { FC } from 'react';
import Tailor from '..';
import image1 from '../images/1.png';
import image2 from '../images/2.png';
import image3 from '../images/3.png';

const Demo1: FC = () => {
	return (
		<div className="flex">
			<h2>小于容器尺寸</h2>
			<Tailor isShowDownload={false} isShowReview={false} src={image1}></Tailor>
			<h2>大于宽度容器尺寸</h2>
			<Tailor src={image2}></Tailor>
			<h2>大于高度容器尺寸</h2>
			<Tailor src={image3}></Tailor>
		</div>
	);
};

export default Demo1;
