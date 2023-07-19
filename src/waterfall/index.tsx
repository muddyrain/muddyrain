import React, {
	FC,
	ReactElement,
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { useScrollTopBottom } from '../hooks';
import styles from './index.module.less';
import { DataSourceType, RenderDataSource, WaterfallProps } from './type.d';

const Waterfall: FC<WaterfallProps> = ({
	spacing: _spacing = 10,
	width: _imageWidth = 200,
	renderItem,
	renderKey,
	dataSource = [],
	onScrollCallback,
	loadingIcon = <div className={styles.waterfall_loading} />,
	loadingText = 'Loading...',
	threshold = 30,
	loading: _loading = false,
}) => {
	// 最外层容器
	const wrapperRef = useRef<HTMLDivElement>(null);
	// 图片容器
	const containerRef = useRef<HTMLDivElement>(null);
	// 列数量
	const columnNumber = useRef<number>(0);
	// 记录图片宽度
	const imageWidth = useRef<number>(_imageWidth);
	const spacing = useRef<number>(_spacing);
	// 加载中
	const [loading, setLoading] = useState<boolean>(_loading);
	// 是否渲染完毕
	const [updater, setUpdater] = useState(+new Date());
	// 是否加载数据
	const isCanLoad = useRef<boolean>(true);
	const isInitFinish = useRef<boolean>(false);
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
			left = heightIndex * (imageWidth.current + spacing.current);
		}
		heights.current[heightIndex] += imageHeight + spacing.current;
		return {
			top: height,
			left,
		};
	};
	// 计算列
	const computedColumns = () => {
		if (!containerRef.current || !wrapperRef.current) return;
		const width = wrapperRef.current.clientWidth;
		columnNumber.current = Math.floor(
			width / (imageWidth.current + spacing.current)
		);
	};
	// 计算容器尺寸
	const computedContainerSize = () => {
		if (!containerRef.current || !wrapperRef.current) return;
		// 统计高度
		heights.current = Array.from({ length: columnNumber.current }).map(() => 0);
		containerRef.current.style.width =
			columnNumber.current * (imageWidth.current + spacing.current) + 'px';
		for (const item of dataList.current) {
			if (!item.isLoad) return;
			const proportion = item.width / item.height;
			const newHeight = imageWidth.current / proportion;
			const { top, left } = computedPosition(newHeight);
			item.top = top;
			item.left = left;
			item.height = newHeight;
			item.width = imageWidth.current;
		}
		const maxHeight = Math.max(...heights.current);
		containerRef.current.style.height = maxHeight + 'px';
		setUpdater(+new Date());
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
				const image = new Image();
				image.src = item.url;
				image.className = styles.waterfall_false_image;
				image.width = imageWidth.current;
				document.body.appendChild(image);
				image.addEventListener('load', () => {
					const { left, top } = computedPosition(image.height);
					resolve({
						left,
						top,
						height: image.height,
					});
					document.body.removeChild(image);
				});
				image.onerror = (event) => {
					setLoading(false);
					reject(event);
				};
			}
		);
	};
	// 计算图片数据
	const computedImages = (data: RenderDataSource[]) => {
		isCanLoad.current = false;
		const loadList = async () => {
			if (!containerRef.current) return;
			computedColumns();
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
				computedContainerSize();
				setLoading(false);
			}
			isCanLoad.current = true;
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
	useScrollTopBottom({
		threshold,
		element: wrapperRef.current as HTMLDivElement,
		onBottom() {
			if (!isCanLoad.current) return;
			const res = onScrollCallback?.();
			computedContainerSize();
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
		if (loading) return;
		imageWidth.current = _imageWidth;
		spacing.current = _spacing;
		setLoading(_loading);
		computedColumns();
		computedContainerSize();
	}, [_imageWidth, _spacing, isCanLoad.current, _loading]);

	const list = useMemo(() => {
		return dataList.current;
	}, [dataList.current, updater]);
	return (
		<div className={styles.wrapper_container} ref={wrapperRef}>
			<div className={styles.waterfall_container} ref={containerRef}>
				{list.map((item, index) => {
					let element = renderItem(item, index) as any;
					if (typeof element?.$$typeof !== 'symbol') {
						element = <>{element}</>;
					}
					return React.cloneElement(element as ReactElement, {
						key: renderKey?.(item, index) || index,
					});
				})}
			</div>
			{loading && (
				<div className={styles.waterfall_loading_box}>
					{loadingIcon}
					<div className={styles.waterfall_loading_text}>{loadingText}</div>
				</div>
			)}
		</div>
	);
};

export default Waterfall;

export * from './type.d';
