import { DragDirection } from '../types';

export const handleMoveDragElement = (
	element: HTMLDivElement,
	dragElement: HTMLDivElement,
	canvasElement: HTMLCanvasElement,
	onMouseUp?: () => void
) => {
	element.addEventListener('mousedown', (e) => {
		e.stopPropagation();
		const { width, height } = dragElement.getBoundingClientRect();
		// 记录鼠标的起始位置
		const startX = e.clientX;
		const startY = e.clientY;
		const startLeft = parseInt(dragElement.style.left) || 0;
		const startTop = parseInt(dragElement.style.top) || 0;
		const { width: startWidth, height: startHeight } =
			dragElement.getBoundingClientRect();
		const { width: pointWidth, height: pointHeight } =
			element.getBoundingClientRect();
		const {
			top: canvasTop,
			left: canvasLeft,
			width: canvasWidth,
			height: canvasHeight,
		} = canvasElement.getBoundingClientRect();
		document.onmousemove = (e) => {
			switch (element.role as DragDirection) {
				case DragDirection.br: {
					const distanceX = e.clientX - startX;
					const distanceY = e.clientY - startY;
					// 起始x轴位置 - 图形距离视口的left值 小于 图形的宽度
					if (e.x - canvasLeft < canvasWidth) {
						dragElement.style.width = width + distanceX + 'px';
					} else {
						dragElement.style.width = canvasWidth - startLeft + 'px';
					}
					// 起始y轴位置 - 图形距离视口的top值 小于 图形的高度
					if (e.y - canvasTop < canvasHeight) {
						dragElement.style.height = height + distanceY + 'px';
					} else {
						dragElement.style.height = canvasHeight - startTop + 'px';
					}
					break;
				}
				case DragDirection.bl: {
					let distanceX = e.clientX - startX;
					let distanceY = e.clientY - startY;
					if (e.y - canvasTop < canvasHeight) {
						dragElement.style.height = height + distanceY + 'px';
					} else {
						dragElement.style.height = canvasHeight - startTop + 'px';
					}
					// 记录鼠标的起始位置 和 移动的位置 大于 0
					if (startLeft + distanceX > 0) {
						// 记录鼠标的起始位置 和 移动的位置  小于 当前选中区最右侧的位置
						if (startLeft + distanceX < e.x - canvasLeft + width - distanceX) {
							dragElement.style.left = startLeft + distanceX + 'px';
						}
						if (width - distanceX < canvasElement.width) {
							dragElement.style.width = width - distanceX + 'px';
						}
					} else {
						dragElement.style.left = 0 + 'px';
						dragElement.style.width =
							e.x - canvasLeft + width - distanceX + 'px';
					}
					break;
				}
				default:
					break;
			}
		};
	});
	element.addEventListener('mouseup', () => {
		document.onmousemove = null;
		onMouseUp?.();
	});
};
