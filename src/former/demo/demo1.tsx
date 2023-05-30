/**
 * title: 基础用法
 * description: 可以存储多个数据，通过state 获取、dispatch 修改
 */

import {
	Cascader,
	Checkbox,
	DatePicker,
	Form,
	Input,
	Radio,
	Select,
	TimePicker,
	TreeSelect,
} from 'antd';
import React from 'react';
import createFormer from '../index';

const Test = ({ onChange }: any) => <input type="text" onChange={onChange} />;
const Former = createFormer(Form, {
	elements: {
		Input,
		Select,
		DatePicker,
		TimePicker,
		TextArea: Input.TextArea,
		Cascader,
		CheckboxGroup: Checkbox.Group,
		TreeSelect,
		RadioGroup: Radio.Group,
	},
});
const Demo = () => {
	const [$form] = Former.useForm();

	return (
		<div>
			<Former
				form={$form}
				column={3}
				resetText={null}
				actionMode="wrapper"
				onSubmit={(e) => {
					console.log(e);
				}}
				dataSource={(data) => {
					console.log(data);
					return [
						{
							key: 'a',
							label: '用户名',
							view: 'Input',
							initialValue: '',
							placeholder: '掉毛',
							requiredMsg: '哒哒哒',
							onlyEntryNumber: true,
							rules: ['integer'],
							required: true,
							Input: {
								// placeholder: '请输入用户名自定义',
							},
						},
						{
							key: 'b',
							label: '选择器',
							view: 'Select',
							allowClear: true,
							Select: {
								options: [
									{ value: '北京', label: '北京' },
									{ value: '上海', label: '上海' },
									{ value: '杭州', label: '杭州' },
								],
							},
						},
						{
							key: 'c',
							label: '日期选择器',
							view: 'DatePicker',
							Select: {
								placeholder: '请输入选择器',
							},
						},
						{
							key: 'd',
							label: '时间选择器',
							view: 'TimePicker',
							Select: {
								placeholder: '请输入选择器',
							},
						},
						{
							key: 'e',
							label: '级联选择器',
							view: 'Cascader',
							Cascader: {
								options: [
									{
										value: 'zhejiang',
										label: 'Zhejiang',
										children: [
											{
												value: 'hangzhou',
												label: 'Hangzhou',
												children: [
													{
														value: 'japan',
														label: 'West Lake',
													},
												],
											},
										],
									},
								],
							},
						},
						{
							key: 'f',
							label: '复选框组',
							view: 'CheckboxGroup',
							CheckboxGroup: {
								options: [
									{ label: 'Apple', value: 'Apple' },
									{ label: 'Pear', value: 'Pear' },
									{ label: 'Orange', value: 'Orange' },
								],
							},
						},
						{
							key: 'g',
							label: '单选框组',
							view: 'RadioGroup',
							RadioGroup: {
								options: [
									{ label: 'Apple', value: 'Apple' },
									{ label: 'Pear', value: 'Pear' },
									{ label: 'Orange', value: 'Orange' },
								],
							},
						},
						{
							key: 'h',
							label: '文本框',
							view: 'TextArea',
						},
						{
							key: 'i',
							label: '树形选择',
							view: 'TreeSelect',
							TreeSelect: {
								treeData: [
									{
										value: 'parent 1',
										title: 'parent 1',
										children: [
											{
												value: 'parent 1-0',
												title: 'parent 1-0',
												children: [
													{
														value: 'leaf1',
														title: 'leaf1',
													},
													{
														value: 'leaf2',
														title: 'leaf2',
													},
												],
											},
										],
									},
								],
							},
						},
						{
							key: 'a2',
							label: '用户名',
							view: Test,
						},
					];
				}}
			/>
		</div>
	);
};
export default Demo;
