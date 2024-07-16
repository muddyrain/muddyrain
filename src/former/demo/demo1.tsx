/**
 * title: 基础用法
 * description: 加装过的form表单组件，拥有全新的类型支持系统
 */

import React from 'react';
import Former from '../former';
import './demo.css';

const Demo = () => {
	const [$form] = Former.useForm();

	return (
		<div>
			<Former
				form={$form}
				layout="grid"
				labelCol={8}
				actionMode="wrapper"
				onSubmit={(e) => {
					console.log(e);
				}}
				itemClassName="demo_item"
				dataSource={() => {
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
							view: 'Password',
							viewProps: {},
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
									width: '100%',
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
					];
				}}
			/>
		</div>
	);
};
export default Demo;
