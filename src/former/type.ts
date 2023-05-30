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
import rules from './rules';
interface DataSourceItem extends AntdElementTypesProps {
	/**
	 * 标签 `string`
	 */
	label: string;
	/**
	 * 输出值的`key`值 `string`|`number`
	 */
	key: string | number;
	/**
	 * 初始值 - `any`
	 */
	initialValue?: any;
	/**
	 * 必选项提示文本 - `string`
	 * default: `xxx不能为空`
	 */
	requiredMsg?: string;
	/**
	 * 前缀占位字符 - `string`
	 * default: `请输入/请选择xxx`
	 */
	placeholder?: string;
	/**
	 * 仅支持输入数字 - `boolean`
	 * default: `false`
	 */
	onlyEntryNumber?: boolean;
	/**
	 * 支持清除 - `boolean`
	 * default: `false`
	 */
	allowClear?: boolean;
	/**
	 * 展示元素
	 *
	 * ①: 可选择性的 `Antd Form Components`
	 *
	 * ②: 自定义函数式组件 `React.FC`
	 */
	view: keyof AntdElementProps | React.FC;
	/**
	 * 前缀占位符 - `string`
	 *
	 * default: `请输入`| `请选择`
	 */
	prefixPlaceholder?: string;
	/**
	 * 是否为必填 `boolean`
	 */
	required?: boolean;
	/**
	 * 是否隐藏保留 key 关键字的隐藏状态 - `boolean`
	 */
	hide?: boolean;
	/**
	 *  是否显示(销毁 key 关键字的隐藏状态 - `boolean`
	 */
	visible?: boolean | ((record: any, index: number) => boolean);
	/**
	 * 校验规则
	 *
	 * 类型为 - `string[] | Rule[]`
	 *
	 * 字符串为自定义类型 - 必须是 自定义rules内的 否则不生效
	 *
	 * 对象则为标准 `FormItem` 规则
	 */
	rules?: (keyof typeof rules)[] | FormItemProps['rules'] | string[];
	/**
	 * 宽度 `number`
	 */
	width?: number;
	/**
	 * Col 布局 `number`
	 * default: `8`
	 */
	span?: number;
}
export interface FormerProps {
	form: FormInstance;
	/**
	 * Col 布局 `number`
	 * default: `3`
	 */
	column?: number;
	/**
	 * 数据源 `DataSourceItem`
	 * default: `[]`
	 */
	dataSource: DataSourceItem[];
	/**
	 * 容器布局 `number`
	 * default: `18`
	 */
	wrapperCol?: number;
	/**
	 * 标签布局 `number`
	 * default: `6`
	 */
	labelCol?: number;
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

export type Rules = {
	[key: string]: {
		/**
		 * 正则表达式 `RegExp`
		 */
		pattern: RegExp;
		/**
		 * 提示消息 `string`
		 */
		message: string;
	};
};
export type CreateFormerProps = (
	Form: typeof AForm,
	options?: {
		elements: AntdElementProps;
		rules?: Rules;
	}
) => React.FC<FormerProps> & {
	useForm: () => [FormInstance];
};
