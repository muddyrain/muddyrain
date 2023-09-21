import { Button, Col, FormItemProps, Row, Space } from 'antd';
import React, { Fragment, useState } from 'react';
import styles from './index.module.less';
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
		form: _form,
		column = 3,
		labelCol = 6,
		wrapperCol = 16,
		onFinish,
		onSubmit,
		onReset,
		onFinishFailed,
		style,
		className,
		submitText = '提交',
		resetText = '重置',
		submitProps,
		resetProps,
		actionMode = 'wrapper',
		renderAction,
		layout = 'grid',
		wrapperClassName = '',
		itemClassName = '',
	}) => {
		const colSpan = Math.floor(24 / column);
		const [formData, setFormData] = useState({});
		const [initForm] = Form.useForm();
		const $form = _form || initForm;
		const DataSources = (_dataSource: DataSourceItem[]) =>
			_dataSource.map((item, index) => {
				const formItemProps = {
					label: item.label,
					...item.itemProps,
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
					_visible = item.visible($form.getFieldValue(item.key), index);
				}

				if (_visible) {
					const Item = (
						<Form.Item
							hidden={item.hide}
							initialValue={item.initialValue}
							style={{ width: item.width }}
							rules={[
								{
									required: item.required,
									message: item.requiredMsg || `${item.label}不能为空`,
								},
								...formItemRules,
							]}
							{...(item.onlyEntryNumber && {
								getValueFromEvent: (e) => e.target.value.replace(/[^\d]/g, ''),
							})}
							name={item.key}
							{...formItemProps}
							className={`${styles.form_item} ${itemClassName} ${item.className} ${formItemProps.className}`}
						>
							<Element
								placeholder={item.placeholder || prefixPlaceholder + item.label}
								{...(item.allowClear && {
									allowClear: item.allowClear,
								})}
								{...(item[item.view as keyof AntdElementTypesProps] || {})}
								{...item?.viewProps}
							/>
						</Form.Item>
					);
					if (layout === 'grid') {
						return (
							<Col key={item.key} span={item.span || colSpan}>
								{Item}
							</Col>
						);
					} else {
						return <Fragment key={item.key}>{Item}</Fragment>;
					}
				}
				return null;
			});

		const ActionButtons = () => {
			if (renderAction) {
				return renderAction(
					() => {
						$form.validateFields().then((values) => {
							onSubmit?.(values);
						});
					},
					() => {
						$form.resetFields();
						onReset?.();
					}
				);
			} else {
				return !!(submitText || resetText) ? (
					<Space>
						{submitText && (
							<Button type="primary" htmlType="submit" {...(submitProps || {})}>
								{submitText}
							</Button>
						)}
						{resetText && (
							<Button
								type="default"
								htmlType="reset"
								{...resetProps}
								onClick={() => {
									$form.resetFields();
									onReset?.();
								}}
							>
								{resetText}
							</Button>
						)}
					</Space>
				) : (
					<></>
				);
			}
		};
		return (
			<Form
				form={$form}
				style={style}
				className={className}
				onFinish={(values) => {
					onSubmit?.(values);
					onFinish?.(values);
				}}
				onFinishFailed={onFinishFailed}
				onValuesChange={() => {
					setFormData($form.getFieldsValue());
				}}
				labelCol={{ span: labelCol }}
				wrapperCol={{ span: wrapperCol }}
			>
				{layout === 'grid' ? (
					<Row gutter={15}>
						{Array.isArray(dataSource)
							? DataSources(dataSource)
							: DataSources(dataSource(formData))}
						{actionMode === 'inner' && <ActionButtons />}
					</Row>
				) : (
					<div
						className={`${styles.layout_flex_container} ${wrapperClassName}`}
					>
						{
							<>
								{Array.isArray(dataSource)
									? DataSources(dataSource)
									: DataSources(dataSource(formData))}
								{actionMode === 'inner' && <ActionButtons />}
							</>
						}
					</div>
				)}

				{actionMode === 'wrapper' && <ActionButtons />}
			</Form>
		);
	};
	Former.displayName = 'Former';
	Former.useForm = Form.useForm;
	return Former;
};
export default createFormer;
