import { useEffect, useRef } from 'react';
export enum DIRECTION_SCROLL_ENUM {
	DOWN = 'down',
	UP = 'up',
}

const useScrollTopBottom = ({
	threshold = 10,
	onTop,
	onBottom,
	element = document.documentElement,
}: {
	threshold?: number;
	onTop?: () => void;
	element?: HTMLElement;
	onBottom?: () => void;
}) => {
	const beforeScrollTop = useRef<number>(0);
	const timer = useRef<NodeJS.Timeout | null>();

	/**
	 * 处理窗口滚动
	 */
	const handleWindowScroll = () => {
		// 距顶部
		let scrollTop = element.scrollTop || document.body.scrollTop;
		// 可视区高度
		let clientHeight = element.clientHeight || document.body.clientHeight;
		// 滚动条总高度
		let scrollHeight = element.scrollHeight || document.body.scrollHeight;
		// 确定滚动方向
		let direction = DIRECTION_SCROLL_ENUM.DOWN;
		if (beforeScrollTop.current > scrollTop) {
			direction = DIRECTION_SCROLL_ENUM.UP;
		}
		// 通过滚动方向判断是触底还是触顶
		if (direction === DIRECTION_SCROLL_ENUM.DOWN) {
			// 滚动触底
			if (clientHeight !== scrollHeight) {
				if (scrollTop + clientHeight + threshold >= scrollHeight) {
					if (!timer.current) {
						timer.current = setTimeout(() => {
							onBottom?.();
							timer.current = null;
						}, 500);
					}
				}
			}
		} else {
			// 滚动到顶部
			if (scrollTop <= threshold) {
				onTop?.();
			}
		}
		beforeScrollTop.current = scrollTop;
	};

	useEffect(() => {
		if (!element) return;
		window.addEventListener('scroll', handleWindowScroll);
		return () => {
			window.removeEventListener('scroll', handleWindowScroll);
		};
	}, [element]);
};

export default useScrollTopBottom;
