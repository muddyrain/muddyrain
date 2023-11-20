import {
	ButtonProps,
	CascaderProps,
	CheckboxProps,
	DatePickerProps,
	RadioGroupProps,
	SelectProps,
	TimePickerProps,
	TreeSelectProps,
} from 'antd';
import { CheckboxGroupProps } from 'antd/es/checkbox';
import { RangePickerProps } from 'antd/es/date-picker';
import { InputProps, TextAreaProps } from 'antd/es/input';
import { FC } from 'react';

interface InputViewProps {
	view: 'Input';
	viewProps?: InputProps;
}
interface SelectViewProps {
	view: 'Select';
	viewProps?: SelectProps;
}
interface ButtonViewProps {
	view: 'Button';
	viewProps?: ButtonProps;
}
interface TextAreaViewProps {
	view: 'TextArea';
	viewProps?: TextAreaProps;
}
interface DatePickerViewProps {
	view: 'DatePicker';
	viewProps?: DatePickerProps;
}
interface TimePickerViewProps {
	view: 'TimePicker';
	viewProps?: TimePickerProps;
}
interface RangePickerViewProps {
	view: 'RangePicker';
	viewProps?: RangePickerProps;
}
interface CascaderViewProps {
	view: 'Cascader';
	viewProps?: CascaderProps;
}
interface CheckboxGroupViewProps {
	view: 'CheckboxGroup';
	viewProps?: CheckboxGroupProps;
}
interface TreeSelectViewProps {
	view: 'TreeSelect';
	viewProps?: TreeSelectProps;
}
interface RangePickerViewProps {
	view: 'RangePicker';
	viewProps?: RangePickerProps;
}
interface RadioGroupViewProps {
	view: 'RadioGroup';
	viewProps?: RadioGroupProps;
}
interface CustomViewProps {
	view: FC<any>;
	viewProps?: Parameters<CustomViewProps['view']>[0];
}
export type ElementViewTypes =
	| InputViewProps
	| RangePickerViewProps
	| ButtonViewProps
	| SelectViewProps
	| TextAreaViewProps
	| DatePickerViewProps
	| TimePickerViewProps
	| CascaderViewProps
	| CheckboxGroupViewProps
	| TreeSelectViewProps
	| RangePickerViewProps
	| RadioGroupViewProps
	| CustomViewProps;

/**
 * antd 元素类型props
 */
export interface AntdElementTypesProps {
	/**
	 * @deprecated This property will be deprecated in the next version. Please use the newProperty instead.
	 */
	Input?: InputProps;
	/**
	 * @deprecated This property will be deprecated in the next version. Please use the newProperty instead.
	 */
	Button?: ButtonProps;
	/**
	 * @deprecated This property will be deprecated in the next version. Please use the newProperty instead.
	 */
	Select?: SelectProps;
	/**
	 * @deprecated This property will be deprecated in the next version. Please use the newProperty instead.
	 */
	Checkbox?: CheckboxProps;
	/**
	 * @deprecated This property will be deprecated in the next version. Please use the newProperty instead.
	 */
	TextArea?: TextAreaProps;
	/**
	 * @deprecated This property will be deprecated in the next version. Please use the newProperty instead.
	 */
	DatePicker?: DatePickerProps;
	/**
	 * @deprecated This property will be deprecated in the next version. Please use the newProperty instead.
	 */
	TimePicker?: TimePickerProps;
	/**
	 * @deprecated This property will be deprecated in the next version. Please use the newProperty instead.
	 */
	Cascader?: CascaderProps;
	/**
	 * @deprecated This property will be deprecated in the next version. Please use the newProperty instead.
	 */
	CheckboxGroup?: CheckboxGroupProps;
	/**
	 * @deprecated This property will be deprecated in the next version. Please use the newProperty instead.
	 */
	TreeSelect?: TreeSelectProps;
	/**
	 * @deprecated This property will be deprecated in the next version. Please use the newProperty instead.
	 */
	RadioGroup?: RadioGroupProps;
	/**
	 * @deprecated This property will be deprecated in the next version. Please use the newProperty instead.
	 */
	RangePicker?: RangePickerProps;
}
