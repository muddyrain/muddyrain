import type {
	Cascader,
	CascaderProps,
	Checkbox,
	DatePicker,
	DatePickerProps,
	Form as AForm,
	FormInstance,
	FormItemProps,
	Input,
	InputProps,
	Radio,
	RadioGroupProps,
	Select,
	SelectProps,
	TimePicker,
	TimePickerProps,
	TreeSelect,
	TreeSelectProps,
} from 'antd';
import { CheckboxGroupProps } from 'antd/es/checkbox';
import { TextAreaProps } from 'antd/es/input';
import React from 'react';

interface DataSourceItem extends AntdElementTypesProps {
	label: string;
	key: string | number;
	view: keyof AntdElementProps | React.FC;
	prefixPlaceholder?: string;
}
export interface FormerProps {
	form: FormInstance;
	dataSource: DataSourceItem[];
}
/**
 * antd 元素类型props
 */
export interface AntdElementTypesProps {
	Select?: SelectProps;
	Input?: InputProps;
	TextArea?: TextAreaProps;
	DatePicker?: DatePickerProps;
	TimePicker?: TimePickerProps;
	Cascader?: CascaderProps;
	CheckboxGroup?: CheckboxGroupProps;
	TreeSelect?: TreeSelectProps;
	RadioGroup?: RadioGroupProps;
}
/**
 * antd 元素类型
 */
export interface AntdElementProps {
	Select?: typeof Select;
	Input?: typeof Input;
	TextArea?: typeof Input.TextArea;
	DatePicker?: typeof DatePicker;
	TimePicker?: typeof TimePicker;
	Cascader?: typeof Cascader;
	CheckboxGroup?: typeof Checkbox.Group;
	TreeSelect?: typeof TreeSelect;
	RadioGroup?: typeof Radio.Group;
}

export type CreateFormerProps = (
	Form: typeof AForm,
	options?: {
		elements: AntdElementProps;
		rules?: FormItemProps['rules'];
	}
) => React.FC<FormerProps> & {
	useForm: () => [FormInstance];
};
