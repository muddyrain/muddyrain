/**
 * title: 基础用法
 * description: 可以存储多个数据，通过state 获取、dispatch 修改
 */

import { Button, Form, Input } from 'antd';
import React from 'react';
import createFormer from '../index';

const Test = ({ onChange }: any) => <input type="text" onChange={onChange} />;
const Former = createFormer(Form, {
	elements: { Input: Input },
});
const Demo = () => {
	const [$form] = Former.useForm();
	return (
		<div>
			<Former
				form={$form}
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
			<Button
				onClick={() => {
					console.log($form.getFieldsValue());
				}}
			>
				点我
			</Button>
		</div>
	);
};
export default Demo;
