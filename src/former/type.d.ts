import type { ButtonProps, FormInstance, FormItemProps, FormProps } from 'antd';
import { NamePath } from 'antd/es/form/interface';
import { ReactNode } from 'react';
import type {
	AntdElementTypesProps,
	ElementViewTypes,
} from './ElementViewType';
import rules from './rules';
export type FormerCustomView<T> = React.FC<FormerView<T>>;
export type FormerView<T> = {
	value: T;
	onChange: (value: T) => void;
	[key: string]: any;
};

interface DataSourceItem extends AntdElementTypesProps {
	/**
	 * 标签 `string`
	 */
	label?: ReactNode;
	/**
	 * label 类名
	 */
	labelClassName?: string;
	/**
	 * label 样式
	 */
	labelStyle?: React.CSSProperties;
	/**
	 * 容器类名 `string`
	 */
	className?: string;
	/**
	 * 输出值的`key`值 `string`|`number`
	 */
	key?: NamePath;
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
	 * 宽度 `number` | `string`
	 *
	 * default : 100%
	 */
	width?: number | string;
	/**
	 * Col 布局 `number` - 栅格layout
	 * default: `8`
	 */
	span?: number;
	/**
	 * 项配置
	 * default: `{label:'自定义'}`
	 */
	itemProps?: FormItemProps;
}

type DataSourceItemType = DataSourceItem & ElementViewTypes;
export interface FormerProps {
	/**
	 * 类名
	 */
	className?: string;
	/**
	 * form Item 样式
	 */
	itemClassName?: string;
	/**
	 * label 类名
	 */
	labelClassName?: string;
	/**
	 * label 样式
	 */
	labelStyle?: React.CSSProperties;
	/**
	 * 布局方式
	 *
	 * default : 'grid'
	 *
	 * flex inline 同一种行内布局
	 */
	layout?: 'grid' | 'flex' | 'inline';
	/**
	 * itemGap 间距
	 *
	 * default : 16
	 *
	 * 仅在 layout 为 flex | inline 时生效
	 */
	itemGap?: number;
	/**
	 * 样式
	 */
	style?: React.CSSProperties;
	/**
	 * 提交表单且数据验证成功后回调事件
	 */
	onSubmit?: FormProps['onFinish'];
	/**
	 * 重置表单后回调事件
	 */
	onReset?: () => void;
	/**
	 * 提交表单且数据验证成功后回调事件
	 */
	onFinish?: FormProps['onFinish'];
	/**
	 * 提交表单且数据验证失败后回调事件
	 */
	onFinishFailed?: FormProps['onFinishFailed'];
	/**
	 * Form 实例 - `FormInstance`
	 * const [$form] = Fromer.useFrom()
	 */
	form?: FormInstance;
	/**
	 * Col 布局 `number`
	 * default: `3`
	 */
	column?: number;
	/**
	 * 数据源 `DataSourceItemType`
	 * default: `[]`
	 */
	dataSource: DataSourceItemType[] | ((data: any) => DataSourceItemType[]);
	/**
	 * 容器布局 `number`
	 * default: `16`
	 * 仅在 layout 为 grid 时生效
	 */
	wrapperCol?: number;
	/**
	 * 标签布局 `number`
	 * default: `6`
	 * 仅在 layout 为 grid 时生效
	 */
	labelCol?: number;
	/**
	 * 提交按钮文本 `string`
	 * 如果值为 `null` 则不显示该按钮
	 * default: `提交`
	 */
	submitText?: string | null;
	/**
	 * 重置按钮文本 `string`
	 * 如果值为 `null` 则不显示该按钮
	 * default: `重置`
	 */
	resetText?: string | null;
	/**
	 * 提交按钮的props - `ButtonProps`
	 * ButtonProps -> antd button props
	 */
	submitProps?: ButtonProps;
	/**
	 * 重置按钮的props - `ButtonProps`
	 * ButtonProps -> antd button props
	 */
	resetProps?: ButtonProps;
	/**
	 * 操作按钮模式
	 * type -> `'inner' | 'wrapper'`
	 * default: `wrapper`
	 */
	actionMode?: 'inner' | 'wrapper';
	/**
	 * 自定义渲染操作按钮
	 */
	renderAction?:
		| ((submit: () => void, reset: () => void) => JSX.Element)
		| null;
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
