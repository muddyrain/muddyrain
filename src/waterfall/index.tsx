import React, {
	FC,
	Fragment,
	ReactElement,
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
	// 计算列
	const computedColumns = () => {
		if (!containerRef.current || !wrapperRef.current) return;
		const { width } = wrapperRef.current.getBoundingClientRect();
		columnNumber.current = Math.floor(width / (imageWidth + spacing));
		// 统计高度
		heights.current = Array.from({ length: columnNumber.current }).map(() => 0);
		containerRef.current.style.width =
			columnNumber.current * imageWidth + spacing + 'px';
	};
	const computedImages = (data: RenderDataSource[]) => {
		const loadImage = (item: (typeof data)[number]) => {
			return new Promise<{ left: number; top: number }>((resolve, reject) => {
				const image = document.createElement('img');
				image.src = item.url;
				image.className = styles.waterfall_false_image;
				image.width = imageWidth;

				document.body.appendChild(image);
				image.onload = () => {
					let left = 0;
					const { index: heightIndex, height } = getMinHeight();
					if (heightIndex === 0) {
						left = heightIndex * imageWidth;
					} else {
						left = heightIndex * (imageWidth + spacing);
					}
					heights.current[heightIndex] += image.height + spacing;
					resolve({
						left: left,
						top: height,
					});
					document.body.removeChild(image);
				};
				image.onerror = () => {
					console.log('error');
					reject();
				};
			});
		};
		const loadList = async () => {
			if (!containerRef.current) return;
			for (const item of data) {
				const { left, top } = await loadImage(item);
				item.left = left;
				item.top = top;
				item.isLoad = true;
			}
			const maxHeight = Math.max(...heights.current);
			containerRef.current.style.height = maxHeight + 'px';
			setData([...data]);
		};
		loadList();
	};
	useLayoutEffect(() => {
		if (!containerRef.current) return;
		computedImages(data);
		computedColumns();
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
