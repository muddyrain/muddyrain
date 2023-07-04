import React, {
	FC,
	Fragment,
	ReactElement,
	useEffect,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import styles from './index.module.less';
import { RenderDataSource, WaterfallProps } from './type.d';

const Waterfall: FC<WaterfallProps> = ({
	spacing = 10,
	width: imageWidth = 200,
	renderItem,
	dataSource = [],
}) => {
	// 最外层容器
	const wrapperRef = useRef<HTMLDivElement>(null);
	// 图片容器
	const containerRef = useRef<HTMLDivElement>(null);
	// 列数量
	const columnNumber = useRef<number>(0);
	// 统计高度组
	const heights = useRef<number[]>([]);
	const [data, setData] = useState<RenderDataSource[]>(
		dataSource.map((item) => ({
			...item,
			left: 0,
			top: 0,
			isLoad: false,
			height: 0,
			width: imageWidth,
		}))
	);
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
			left = heightIndex * imageWidth;
		} else {
			left = heightIndex * (imageWidth + spacing);
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
		columnNumber.current = Math.floor(width / (imageWidth + spacing));
	};
	const computedContainerWidth = () => {
		if (!containerRef.current || !wrapperRef.current) return;
		// 统计高度
		heights.current = Array.from({ length: columnNumber.current }).map(() => 0);
		containerRef.current.style.width =
			columnNumber.current * imageWidth + spacing + 'px';
		for (const item of data) {
			if (!item.isLoad) return;
			const proportion = item.width / item.height;
			const newHeight = imageWidth / proportion;
			item.width = imageWidth;
			const { top, left } = computedPosition(newHeight);
			item.top = top;
			item.left = left;
			item.height = newHeight;
		}
		setData([...data]);
	};
	const computedImages = (data: RenderDataSource[]) => {
		const loadImage = (item: (typeof data)[number]) => {
			return new Promise<{ left: number; top: number; height: number }>(
				(resolve, reject) => {
					const image = document.createElement('img');
					image.src = item.url;
					image.className = styles.waterfall_false_image;
					image.width = imageWidth;
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
			if (!containerRef.current) return;
			for (const item of data) {
				const { left, top, height } = await loadImage(item);
				item.left = left;
				item.top = top;
				item.height = height;
				item.isLoad = true;
			}
			const maxHeight = Math.max(...heights.current);
			containerRef.current.style.height = maxHeight + 'px';
			setData([...data]);
		};
		loadList();
	};
	useEffect(() => {
		computedImages(data);
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
	}, [imageWidth]);
	return (
		<div className={styles.wrapper_container} ref={wrapperRef}>
			<div className={styles.waterfall_container} ref={containerRef}>
				{data.map((item, index) => {
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
