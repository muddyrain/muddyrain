import React from 'react';
import { CreateFormerProps } from './type';
const createFormer: CreateFormerProps = (
	Form,
	options = { elements: {}, rules: [] }
) => {
	const { elements } = options;

	return ({ dataSource }) => {
		return (
			<Form>
				{dataSource.map((item) => {
					const formItemProps = {
						label: item.label,
					};
					if (typeof item.view === 'function') {
						const Element = item.view;
						return (
							<Form.Item key={item.key} {...formItemProps}>
								<Element />
							</Form.Item>
						);
					} else {
						if (!(item.view in elements)) {
							throw new Error(
								`The ${item.view} component is Not registered in elements`
							);
						}
						const Element = elements[item.view];
						return (
							<Form.Item key={item.key} {...formItemProps}>
								{<Element />}
							</Form.Item>
						);
					}
				})}
			</Form>
		);
	};
};
export default createFormer;
