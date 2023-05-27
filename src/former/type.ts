import type {
	Cascader,
	Checkbox,
	DatePicker,
	Form as AForm,
	FormItemProps,
	Input,
	Radio,
	Select,
	Switch,
	TimePicker,
	TreeSelect,
} from 'antd';
import React from 'react';

export interface FormerProps {
	dataSource: {
		label: string;
		key: string | number;
		view: keyof Elements | React.FC;
	}[];
}

interface AntdElementProps {
	Select?: typeof Select;
	Input?: typeof Input;
	TextArea?: typeof Input.TextArea;
	Switch?: typeof Switch;
	DatePicker?: typeof DatePicker;
	TimePicker?: typeof TimePicker;
	Checkbox?: typeof Checkbox;
	Radio?: typeof Radio;
	Cascader?: typeof Cascader;
	CheckboxGroup?: typeof Checkbox.Group;
	TreeSelect?: typeof TreeSelect;
	RadioGroup?: typeof Radio.Group;
}

type Elements = Partial<Record<keyof AntdElementProps, any>>;

export type CreateFormerProps = (
	Form: typeof AForm,
	options?: {
		elements: Elements;
		rules?: FormItemProps['rules'];
	}
) => React.FC<FormerProps>;
