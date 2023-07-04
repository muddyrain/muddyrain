export interface RenderDataSource {
	left: number;
	top: number;
	url: string;
	isLoad: boolean;
	width: number;
	height: number;
	[key: string]: any;
}
export interface DataSourceType {
	url: string;
	[key: string]: any;
}
export interface WaterfallProps {
	/**
	 * @description 水平间距
	 * @default 10
	 */
	width?: number;
	/**
	 * @description 元素间距
	 * @default 10
	 */
	spacing?: number;
	/**
	 * @
	 */
	renderItem: (data: renderDataSource, index: number) => React.ReactNode;
	renderKey?: (data: renderDataSource, index: number) => string | string;
	dataSource: DataSourceType[];
}
