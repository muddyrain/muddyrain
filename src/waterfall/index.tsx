import React, {
	FC,
	Fragment,
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
	spacing = 10,
	width: _imageWidth = 200,
	renderItem,
	dataSource = [],
	onScrollTop = () => null,
	onScrollBottom = () => null,
}) => {
	// 最外层容器
	const wrapperRef = useRef<HTMLDivElement>(null);
	// 图片容器
	const containerRef = useRef<HTMLDivElement>(null);
	// 列数量
	const columnNumber = useRef<number>(0);
	const imageWidth = useRef<number>(_imageWidth);
	const [isInitData, setIsInitData] = useState<boolean>(false);
	// 统计高度组
	const heights = useRef<number[]>([]);
	const [updater, setUpdater] = useState(+new Date());
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
		// 统计高度
		heights.current = Array.from({ length: columnNumber.current }).map(() => 0);
		containerRef.current.style.width =
			columnNumber.current * imageWidth.current + spacing + 'px';
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
		setUpdater(+new Date());
	};
	const dataSourceToRenderSource = (dataSource: DataSourceType[]) => {
		return dataSource.map((item) => {
			if ('url' in item) {
				return {
					...item,
					left: 0,
					top: 0,
					isLoad: false,
					height: 0,
					width: imageWidth.current,
				};
			} else {
				throw new Error(
					'The data source must be an array of objects containing the `url` field'
				);
			}
		});
	};
	const computedImages = (data: RenderDataSource[]) => {
		const loadImage = (item: (typeof data)[number]) => {
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
					image.onerror = () => {
						console.log('error');
						reject();
					};
				}
			);
		};
		const loadList = async () => {
			for (const item of data) {
				const { left, top, height } = await loadImage(item);
				item.left = left;
				item.top = top;
				item.height = height;
				item.isLoad = true;
			}
			computedContainerHeight();
			dataList.current = [...dataList.current, ...data];
			setUpdater(+new Date());
		};
		loadList();
	};
	const list = useMemo(() => {
		return dataList.current;
	}, [updater]);
	useEffect(() => {
		if (dataSource.length && !isInitData) {
			const _data = dataSourceToRenderSource(dataSource);
			if (_data.length) {
				// 统计高度
				heights.current = Array.from({ length: columnNumber.current }).map(
					() => 0
				);
				computedImages([..._data]);
				setIsInitData(true);
			}
		}
	}, [dataSource, isInitData]);
	useScrollTopBottom({
		threshold: 10,
		onTop: () => {
			onScrollTop?.();
		},
		onBottom: () => {
			const res = onScrollBottom?.();
			computedContainerWidth();
			// 返回为promise 数据
			if (res instanceof Promise) {
				res.then((res) => {
					const _data = dataSourceToRenderSource(res);
					computedImages(_data);
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
	useEffect(() => {
		imageWidth.current = _imageWidth;
	}, [_imageWidth]);
	useEffect(() => {
		const handleWindowResize = () => {
			computedContainerWidth();
		};
		window.addEventListener('resize', handleWindowResize);
		return () => {
			window.removeEventListener('resize', handleWindowResize);
		};
	}, []);
	useLayoutEffect(() => {
		if (!containerRef.current) return;
		computedColumns();
		computedContainerWidth();
	}, [imageWidth.current, spacing]);
	return (
		<div className={styles.wrapper_container} ref={wrapperRef}>
			<div className={styles.waterfall_container} ref={containerRef}>
				{list.map((item, index) => {
					if (item.isLoad) {
						return React.cloneElement(renderItem(item, index) as ReactElement, {
							key: index,
						});
					} else {
						return <Fragment key={index}></Fragment>;
					}
				})}
			</div>
		</div>
	);
};

export default Waterfall;
