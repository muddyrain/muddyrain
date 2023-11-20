import {
	Button,
	Cascader,
	Checkbox,
	Col,
	DatePicker,
	Form,
	FormItemProps,
	Input,
	Radio,
	Row,
	Select,
	Space,
	TreeSelect,
} from 'antd';
import React, { FC, Fragment, useState } from 'react';
import { AntdElementTypesProps } from './ElementViewType';
import rules from './rules';
import type { DataSourceItemType, FormerProps } from './type';

type InternalFormType = FC<FormerProps>;
type CompoundedComponent = InternalFormType & {
	useForm: typeof Form.useForm;
};
const elements = {
	Button: Button,
	Cascader: Cascader,
	Checkbox: Checkbox,
	CheckboxGroup: Checkbox.Group,
	DatePicker: DatePicker,
	Input: Input,
	RadioGroup: Radio.Group,
	RangePicker: DatePicker.RangePicker,
	Select: Select,
	TextArea: Input.TextArea,
	TimePicker: DatePicker.TimePicker,
	TreeSelect: TreeSelect,
};

const Former: CompoundedComponent = ({
	dataSource,
	form: _form,
	column = 3,
	labelCol = 6,
	wrapperCol = 16,
	itemGap = 16,
	onFinish,
	onSubmit,
	onReset,
	onFinishFailed,
	style,
	className,
	submitText = '',
	resetText = '',
	submitProps,
	resetProps,
	actionMode = 'wrapper',
	renderAction,
	layout = 'grid',
	itemClassName = '',
}) => {
	const colSpan = Math.floor(24 / column);
	const [formData, setFormData] = useState({});
	const [initForm] = Form.useForm();
	const $form = _form || initForm;
	const isInlineLayout = layout === 'inline' || layout === 'flex';
	const DataSources = (_dataSource: DataSourceItemType[]) =>
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
				_visible = item.visible($form.getFieldValue(item.key || ''), index);
			}

			if (_visible) {
				const Item = (
					<Form.Item
						hidden={item.hide}
						initialValue={item.initialValue}
						style={{
							...(isInlineLayout
								? {
										display: 'inline-block',
										marginBottom: itemGap,
										marginRight: itemGap,
								  }
								: {}),
							...(item.width ? { width: item.width } : {}),
						}}
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
						className={`${itemClassName} ${item.className} ${formItemProps.className}`}
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
						<Col
							key={(item.key as string) || index}
							span={item.span || colSpan}
						>
							{Item}
						</Col>
					);
				} else {
					return (
						<Fragment key={(item.key as string) || index}>{Item}</Fragment>
					);
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
			layout={isInlineLayout ? 'inline' : 'horizontal'}
			{...(layout === 'grid' && {
				labelCol: { span: labelCol },
				wrapperCol: { span: wrapperCol },
			})}
		>
			{layout === 'grid' ? (
				<Row gutter={15}>
					{Array.isArray(dataSource)
						? DataSources(dataSource)
						: DataSources(dataSource(formData))}
					{actionMode === 'inner' && <ActionButtons />}
				</Row>
			) : (
				<>
					{Array.isArray(dataSource)
						? DataSources(dataSource)
						: DataSources(dataSource(formData))}
					{actionMode === 'inner' && <ActionButtons />}
				</>
			)}

			{actionMode === 'wrapper' && layout === 'grid' && <ActionButtons />}
		</Form>
	);
};
export default Former;

Former.useForm = Form.useForm;
