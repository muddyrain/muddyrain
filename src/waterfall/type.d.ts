export interface RenderDataSource {
	/**
	 * @description 距离左边的距离
	 * @type `number`
	 * @default 0
	 */
	left: number;
	/**
	 * @description 距离上边的距离
	 * @type `number`
	 * @default 0
	 */
	top: number;
	/**
	 * @description 图片地址
	 * @type `string`
	 * @required
	 */
	url: string;
	/**
	 * @description 是否加载完毕
	 * @type `boolean`
	 * @default `false`
	 */
	isLoad: boolean;
	/**
	 * @description 是否加载报错
	 * @type `boolean`
	 * @default `false`
	 */
	isError: boolean;
	/**
	 * @description 报错信息
	 * @type `object`
	 * @default `-`
	 */
	errorInfo: string | Event;
	/**
	 * @description 图片宽度
	 * @type `number`
	 * @default 0
	 */
	width: number;
	/**
	 * @description 图片高度
	 * @type `number`
	 * @default 0
	 */
	height: number;
	[key: string]: any;
}
export interface DataSourceType {
	/**
	 * @description 图片地址
	 * @type `string`
	 * @required
	 */
	url: string;
	[key: string]: any;
}
export interface WaterfallProps {
	/**
	 * @description 图片宽度
	 * @type `number`
	 * @default 200
	 */
	width?: number;
	/**
	 * @description 元素间距
	 * @type `number`
	 * @default 10
	 */
	spacing?: number;
	/**
	 * @description 自定义渲染数据
	 * @type `(data: RenderDataSource, index: number) => React.ReactNode`
	 * @required
	 */
	renderItem: (data: RenderDataSource, index: number) => React.ReactNode;
	/**
	 * @description 自定义渲染Key
	 * @type `(data: RenderDataSource, index: number) => string`
	 * @default `index`
	 */
	renderKey?: (data: RenderDataSource, index: number) => string;
	/**
	 * @description 数据源
	 * @type `DataSourceType[]` -> `{ url:string }[]`
	 * @required
	 */
	dataSource: DataSourceType[];
	/**
	 * @description 临界点 - 滚动距离事件的临界点
	 * @type `number`
	 * @default 10
	 */
	threshold?: number;
	/**
	 * @description 滚动顶部监听 - 需返回数据或promise类型的数据
	 * @type `() => Promise<DataSourceType[]> | DataSourceType[]`
	 * @default `void`
	 */
	onScrollTop?: () => Promise<DataSourceType[]> | DataSourceType[];
	/**
	 * @description 滚动底部监听 - 需返回数据或promise类型的数据
	 * @type `() => Promise<DataSourceType[]> | DataSourceType[]`
	 * @default `void`
	 */
	onScrollBottom?: () => Promise<DataSourceType[]> | DataSourceType[];
}
