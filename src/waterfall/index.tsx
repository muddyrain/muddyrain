import React, {
	FC,
	ReactElement,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import { useScrollTopBottom } from '../hooks';
import styles from './index.module.less';
import { DataSourceType, RenderDataSource, WaterfallProps } from './type.d';

const Waterfall: FC<WaterfallProps> = ({
	spacing = 10,
	width: _imageWidth = 200,
	renderItem,
	renderKey,
	dataSource = [],
	onScrollCallback,
	threshold = 10,
}) => {
	// 最外层容器
	const wrapperRef = useRef<HTMLDivElement>(null);
	// 图片容器
	const containerRef = useRef<HTMLDivElement>(null);
	// 列数量
	const columnNumber = useRef<number>(0);
	// 记录图片宽度
	const imageWidth = useRef<number>(_imageWidth);
	// 加载中
	const [loading, setLoading] = useState<boolean>(false);
	// 是否加载数据
	const isCanLoad = useRef<boolean>(true);
	const isInitFinish = useRef<boolean>(false);
	const [updater, setUpdater] = useState(+new Date());
	// 统计高度组
	const heights = useRef<number[]>([]);
	// 数据列表
	const dataList = useRef<RenderDataSource[]>([]);
	// 计算最小高度
	const getMinHeight = () => {
		const height = Math.min(...heights.current);
		const index = heights.current.findIndex((item) => item === height);
		return {
			height,
			index,
		};
	};
	// 计算定位
	const computedPosition = (imageHeight: number) => {
		let left = 0;
		const { index: heightIndex, height } = getMinHeight();
		if (heightIndex === 0) {
			left = heightIndex * imageWidth.current;
		} else {
			left = heightIndex * (imageWidth.current + spacing);
		}
		heights.current[heightIndex] += imageHeight + spacing;
		return {
			top: height,
			left,
		};
	};
	// 计算列
	const computedColumns = () => {
		if (!containerRef.current || !wrapperRef.current) return;
		const { width } = wrapperRef.current.getBoundingClientRect();
		columnNumber.current = Math.floor(width / (imageWidth.current + spacing));
	};
	// 计算容器高度
	const computedContainerHeight = () => {
		if (!containerRef.current) return;
		const maxHeight = Math.max(...heights.current);
		containerRef.current.style.height = maxHeight + 'px';
	};
	// 计算容器宽度
	const computedContainerWidth = () => {
		if (!containerRef.current || !wrapperRef.current) return;
		if (!isCanLoad.current) return;
		// 统计高度
		heights.current = Array.from({ length: columnNumber.current }).map(() => 0);
		containerRef.current.style.width =
			columnNumber.current * (imageWidth.current + spacing) + 'px';
		for (const item of dataList.current) {
			if (!item.isLoad) return;
			const proportion = item.width / item.height;
			const newHeight = imageWidth.current / proportion;
			item.width = imageWidth.current;
			const { top, left } = computedPosition(newHeight);
			item.top = top;
			item.left = left;
			item.height = newHeight;
		}
		computedContainerHeight();
	};
	// 原数据转为渲染数据
	const dataSourceToRenderSource = (dataSource: DataSourceType[]) => {
		return dataSource.map((item) => {
			if ('url' in item) {
				return {
					...item,
					left: 0,
					top: 0,
					isLoad: false,
					height: 0,
					isError: false,
					errorInfo: '',
					width: imageWidth.current,
				} as RenderDataSource;
			} else {
				throw new Error(
					'The data source must be an array of objects containing the `url` field'
				);
			}
		});
	};
	const loadImage = (item: (typeof dataSource)[number]) => {
		return new Promise<{ left: number; top: number; height: number }>(
			(resolve, reject) => {
				const image = document.createElement('img');
				image.src = item.url;
				image.className = styles.waterfall_false_image;
				image.width = imageWidth.current;
				document.body.appendChild(image);
				image.onload = () => {
					const { left, top } = computedPosition(image.height);
					resolve({
						left,
						top,
						height: image.height,
					});
					document.body.removeChild(image);
				};
				image.onerror = (event) => {
					reject(event);
				};
			}
		);
	};
	// 计算图片数据
	const computedImages = (data: RenderDataSource[]) => {
		isCanLoad.current = false;
		const loadList = async () => {
			for (const item of data) {
				setLoading(true);
				try {
					const { left, top, height } = await loadImage(item);
					item.left = left;
					item.top = top;
					item.height = height;
					item.isLoad = true;
				} catch (error) {
					item.isLoad = false;
					item.errorInfo = error as string | Event;
				}
				dataList.current = [...dataList.current, item];
				setUpdater(+new Date());
				setLoading(false);
				computedContainerHeight();
			}
			isCanLoad.current = true;
			computedContainerWidth();
		};
		loadList();
	};
	// 监听初始化
	useEffect(() => {
		if (dataSource.length && !isInitFinish.current && isCanLoad.current) {
			const _data = dataSourceToRenderSource(dataSource);
			if (_data.length) {
				computedImages([..._data]);
				isInitFinish.current = true;
			}
		}
	}, [dataSource, isInitFinish.current, isCanLoad]);
	// 监听页面宽度变化
	useEffect(() => {
		imageWidth.current = _imageWidth;
	}, [_imageWidth]);
	useScrollTopBottom({
		threshold,
		element: wrapperRef.current as HTMLDivElement,
		onBottom() {
			if (!isCanLoad.current) return;
			const res = onScrollCallback?.();
			computedContainerWidth();
			// 返回为promise 数据
			if (res instanceof Promise) {
				res.then((res) => {
					const _data = dataSourceToRenderSource(res);
					computedImages([..._data]);
				});
			} else if (Array.isArray(res)) {
				console.log('array');
			} else {
				console.error(
					new Error(
						'The data returned by onScrollBottom is not a promise or array'
					)
				);
			}
		},
	});

	// 初始化页面布局
	useLayoutEffect(() => {
		if (!containerRef.current) return;
		computedColumns();
		computedContainerWidth();
	}, [_imageWidth, spacing, isCanLoad.current, updater]);
	return (
		<div className={styles.wrapper_container} ref={wrapperRef}>
			<div className={styles.waterfall_container} ref={containerRef}>
				{dataList.current.map((item, index) => {
					let element = renderItem(item, index) as any;
					if (typeof element?.$$typeof !== 'symbol') {
						element = <>{element}</>;
					}
					return React.cloneElement(element as ReactElement, {
						key: renderKey?.(item, index) || index,
					});
				})}
			</div>
			{loading && <div className={styles.waterfall_loading}></div>}
		</div>
	);
};

export default Waterfall;
