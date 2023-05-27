/**
 * title: 基础用法
 * description: 可以存储多个数据，通过state 获取、dispatch 修改
 */

import { Form, Input } from 'antd';
import React from 'react';
import createFormer from '../index';

const Test = () => <input type="text" />;
const Former = createFormer(Form, {
	elements: { Input: Input },
});
const Demo = () => {
	return (
		<div>
			<Former
				dataSource={[
					{
						key: 'a',
						label: '用户名',
						view: 'Input',
					},
					{
						key: 'a2',
						label: '用户名',
						view: Test,
					},
				]}
			/>
		</div>
	);
};
export default Demo;
