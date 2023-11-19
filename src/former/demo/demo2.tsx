/**
 * title: 行内布局
 * description: 加装过的form表单组件，拥有全新的类型支持系统
 */

import { Form } from 'antd';
import React, { FC } from 'react';

import Former from '../former';
import './demo.css';

const C: FC<{
	name: string;
	num: number;
}> = (props) => {
	console.log('props', props);
	return <div>自定义{props.name}</div>;
};

const Demo = () => {
	const [$form] = Form.useForm();

	return (
		<div>
			<Former
				form={$form}
				layout="flex"
				resetText={null}
				itemGap={16}
				actionMode="wrapper"
				onSubmit={(e) => {
					console.log(e);
				}}
				itemClassName="demo_item"
				dataSource={(values) => {
					return [
						{
							label: '用户名',
							key: 'username',
							view: 'Input',
							viewProps: {
								placeholder: '请输入用户名',
							},
						},
						{
							label: '密码',
							key: 'password',
							view: 'Input',
							viewProps: {
								type: 'password',
								allowClear: true,
							},
						},
						{
							label: '数字1',
							key: 'num1',
							view: 'Input',
							viewProps: {
								type: 'number',
								allowClear: true,
							},
						},
						{
							label: '数字2',
							key: 'num2',
							view: 'Input',
							viewProps: {
								type: 'number',
								allowClear: true,
							},
						},
						{
							label: '性别',
							key: 'sex',
							view: 'Select',
							viewProps: {
								options: [],
								style: {
									width: 120,
								},
							},
						},
						{
							view: 'Button',
							viewProps: {
								type: 'primary',
								children: '查询',
								onClick() {
									console.log('查询');
									console.log($form.getFieldsValue());
								},
							},
						},
						{
							view: 'Button',
							viewProps: {
								type: 'primary',
								children: '重置',
							},
						},
						{
							label: '自定义123123',
							key: 'a',
							view: C,
							viewProps: {
								num: 1,
								name: values.username,
							} as Parameters<typeof C>[0],
						},
					];
				}}
			/>
		</div>
	);
};
export default Demo;
