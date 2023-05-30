import { Col, FormItemProps, Row } from 'antd';
import React, { useState } from 'react';
import CustomRules from './rules';
import type {
	AntdElementTypesProps,
	CreateFormerProps,
	DataSourceItem,
} from './type';

const createFormer: CreateFormerProps = (
	Form,
	options = { elements: {}, rules: {} }
) => {
	const { elements, rules: _rules } = options;
	// Merge custom rules with created rules
	const rules = { ...CustomRules, ..._rules };

	const Former: ReturnType<CreateFormerProps> = ({
		dataSource,
		form,
		column = 3,
		labelCol = 6,
		wrapperCol = 16,
	}) => {
		const colSpan = Math.floor(24 / column);
		const [formData, setFormData] = useState({});

		const DataSources = (_dataSource: DataSourceItem[]) =>
			_dataSource.map((item, index) => {
				const formItemProps = {
					label: item.label,
				};
				// If this View is not registered in elements, an error will be reported
				if (typeof item.view === 'string' && !(item.view in elements)) {
					throw new Error(
						`The ${item.view} component is Not registered in elements`
					);
				}
				const Element =
					typeof item.view === 'function'
						? item.view
						: (elements[item.view] as any);

				// prefix placeholder
				const checksPlaceholderList = ['Select', 'TreeSelect', 'Cascader'];
				let prefixPlaceholder = item.prefixPlaceholder || '请输入';
				if (typeof item.view === 'string') {
					if (checksPlaceholderList.includes(item.view)) {
						prefixPlaceholder = '请选择';
					}
				}
				const formItemRules =
					(item.rules?.map((rule) => {
						if (typeof rule === 'string' && rule in rules) {
							return rules[rule as keyof typeof rules];
						} else {
							return rule;
						}
					}) as FormItemProps['rules']) || [];
				/**
				 * 是否显示 且移除key在表单中
				 */
				let _visible = true;
				if (typeof item.visible === 'boolean') {
					_visible = item.visible === undefined ? true : !!item.visible;
				} else if (typeof item.visible === 'function' && item.visible) {
					_visible = item.visible(form.getFieldValue(item.key), index);
				}

				if (_visible) {
					return (
						<Col key={item.key} span={item.span || colSpan}>
							<Form.Item
								hidden={item.hide}
								initialValue={item.initialValue}
								style={{ width: item.width || '100%' }}
								rules={[
									{
										required: item.required,
										message: item.requiredMsg || `${item.label}不能为空`,
									},
									...formItemRules,
								]}
								{...(item.onlyEntryNumber && {
									getValueFromEvent: (e) =>
										e.target.value.replace(/[^\d]/g, ''),
								})}
								name={item.key}
								{...formItemProps}
							>
								<Element
									placeholder={
										item.placeholder || prefixPlaceholder + item.label
									}
									{...(item.allowClear && {
										allowClear: item.allowClear,
									})}
									{...(item[item.view as keyof AntdElementTypesProps] || {})}
								/>
							</Form.Item>
						</Col>
					);
				}
				return null;
			});

		return (
			<Form
				form={form}
				onValuesChange={() => {
					setFormData(form.getFieldsValue());
				}}
				labelCol={{ span: labelCol }}
				wrapperCol={{ span: wrapperCol }}
			>
				<Row gutter={15}>
					{Array.isArray(dataSource)
						? DataSources(dataSource)
						: DataSources(dataSource(formData))}
				</Row>
			</Form>
		);
	};
	Former.displayName = 'Former';
	Former.useForm = Form.useForm;
	return Former;
};
export default createFormer;
