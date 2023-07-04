import React, {
	FC,
	Fragment,
	ReactElement,
	useLayoutEffect,
	useRef,
	useState,
} from 'react';
import styles from './index.module.less';
import { renderDataSource, WaterfallProps } from './type.d';

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
	const [data, setData] = useState<renderDataSource[]>(
		dataSource.map((item) => ({
			...item,
			left: 0,
			top: 0,
			isLoad: false,
			isError: false,
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
	// // 创建图片元素
	// const createImages = () => {
	// 	images.map((item) => {
	// 		const image = new Image();
	// 		image.src = item;
	// 		image.className = styles.waterfall_image;
	// 		image.width = imageWidth;
	// 		containerRef.current?.appendChild(image);
	// 		image.onload = () => {
	// 			const { index, height } = getMinHeight();
	// 			image.style.top = height + 'px';
	// 			if (index === 0) {
	// 				image.style.left = index * imageWidth + 'px';
	// 			} else {
	// 				image.style.left = index * (imageWidth + spacing) + 'px';
	// 			}
	// 			heights.current[index] += image.height + spacing;
	// 		};
	// 		return item;
	// 	});
	// };

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
	const renderList = () => {
		const loadImage = (item: (typeof data)[number]) => {
			const image = new Image();
			image.src = item.url;
			image.className = styles.waterfall_image;
			image.width = imageWidth;
			image.style.objectFit = 'contain';
			containerRef.current?.appendChild(image);
			image.onload = () => {
				let left = 0;
				const { index: heightIndex, height } = getMinHeight();
				image.style.top = height + 'px';
				if (heightIndex === 0) {
					left = heightIndex * imageWidth;
				} else {
					left = heightIndex * (imageWidth + spacing);
				}
				console.log(image.width, image.height);
				item.top = height;
				item.left = left;
				image.style.top = height + 'px';
				image.style.left = left + 'px';
				heights.current[heightIndex] += image.height + spacing;
				item.isLoad = true;
				setData([...data]);
			};
			image.onerror = () => {
				item.isLoad = true;
				item.isError = true;
			};
		};
		return data.map((item, index) => {
			if (!item.isLoad) {
				loadImage(item);
				return <Fragment key={index}></Fragment>;
			} else {
				return React.cloneElement(renderItem({ ...item }) as ReactElement, {
					key: index,
				});
			}
		});
	};
	useLayoutEffect(() => {
		if (!containerRef.current) return;
		// containerRef.current.innerHTML = '';
		computedColumns();
		// createImages();
	}, [imageWidth]);
	return (
		<div className={styles.wrapper_container} ref={wrapperRef}>
			<div className={styles.waterfall_container} ref={containerRef}>
				{renderList()}
			</div>
		</div>
	);
};

export default Waterfall;
