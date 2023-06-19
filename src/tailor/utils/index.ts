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
					let targetHeight = 0;
					let targetWidth = 0;
					if (width + distanceX <= canvasWidth) {
						targetWidth = width + distanceX;
					} else {
						targetWidth = canvasWidth;
					}
					if (height + distanceY <= canvasWidth) {
						targetHeight = height + distanceY;
					} else {
						targetHeight = canvasHeight;
					}
					if (startLeft <= targetWidth) {
						dragElement.style.width = targetWidth - startLeft + 'px';
					}
					if (startTop <= targetHeight) {
						dragElement.style.height = targetHeight - startTop + 'px';
					}
					break;
				}
				case DragDirection.bl: {
					let distanceX = e.clientX - startX;
					let distanceY = e.clientY - startY;
					dragElement.style.height = height + distanceY + 'px';
					if (width - distanceX < canvasElement.width) {
						dragElement.style.width = width - distanceX + 'px';
					}
					if (startLeft + distanceX > 0) {
						dragElement.style.left = startLeft + distanceX + 'px';
					} else {
						dragElement.style.left = 0 + 'px';
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
