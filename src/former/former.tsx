import React from 'react';
import { AntdElementTypesProps, CreateFormerProps } from './type';

/**
 *
 */

const createFormer: CreateFormerProps = (
	Form,
	options = { elements: {}, rules: [] }
) => {
	const { elements } = options;
	const Former: ReturnType<CreateFormerProps> = ({ dataSource, form }) => {
		return (
			<Form form={form}>
				{dataSource.map((item) => {
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
					return (
						<Form.Item name={item.key} key={item.key} {...formItemProps}>
							<Element
								placeholder={prefixPlaceholder + item.label}
								{...(item[item.view as keyof AntdElementTypesProps] || {})}
							/>
						</Form.Item>
					);
				})}
			</Form>
		);
	};
	Former.displayName = 'Former';
	Former.useForm = Form.useForm;
	return Former;
};
export default createFormer;
