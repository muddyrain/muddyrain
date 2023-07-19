import { DragPointDirection, DragSideDirection } from '../type.d';

export const handleMoveDragElement = (
	element: HTMLDivElement,
	dragElement: HTMLDivElement,
	canvasElement: HTMLCanvasElement,
	onMouseUp?: () => void
) => {
	element.addEventListener('mousedown', (e) => {
		e.stopPropagation();
		// 记录鼠标的起始位置
		const startX = e.clientX;
		const startY = e.clientY;
		const startLeft = parseInt(dragElement.style.left) || 0;
		const startTop = parseInt(dragElement.style.top) || 0;
		const { width: startWidth, height: startHeight } =
			dragElement.getBoundingClientRect();
		const {
			top: canvasTop,
			left: canvasLeft,
			width: canvasWidth,
			height: canvasHeight,
		} = canvasElement.getBoundingClientRect();
		document.onmousemove = (e) => {
			let distanceX = e.clientX - startX;
			let distanceY = e.clientY - startY;

			switch (element.role as DragSideDirection & DragPointDirection) {
				// 右下角
				case DragPointDirection.br: {
					// 起始x轴位置 - 图形距离视口的left值 小于 图形的宽度
					if (e.clientX - canvasLeft < canvasWidth) {
						dragElement.style.width = startWidth + distanceX + 'px';
					} else {
						dragElement.style.width = canvasWidth - startLeft + 'px';
					}
					// 起始y轴位置 - 图形距离视口的top值 小于 图形的高度
					if (e.clientY - canvasTop < canvasHeight) {
						dragElement.style.height = startHeight + distanceY + 'px';
					} else {
						dragElement.style.height = canvasHeight - startTop + 'px';
					}
					break;
				}
				// 左下角
				case DragPointDirection.bl: {
					if (e.y - canvasTop < canvasHeight) {
						dragElement.style.height = startHeight + distanceY + 'px';
					} else {
						dragElement.style.height = canvasHeight - startTop + 'px';
					}
					// 记录鼠标的起始位置 和 移动的位置 大于 0
					if (startLeft + distanceX > 0) {
						// 记录鼠标的起始位置 和 移动的位置  小于 当前选中区最右侧的位置
						if (
							startLeft + distanceX <
							e.x - canvasLeft + startWidth - distanceX
						) {
							dragElement.style.left = startLeft + distanceX + 'px';
						}
						if (startWidth - distanceX < canvasElement.width) {
							dragElement.style.width = startWidth - distanceX + 'px';
						}
					} else {
						dragElement.style.left = 0 + 'px';
						dragElement.style.width =
							e.x - canvasLeft + startWidth - distanceX + 'px';
					}
					break;
				}
				// 左上角
				case DragPointDirection.tl: {
					if (e.clientX <= startWidth + startX) {
						if (startLeft + distanceX >= 0) {
							dragElement.style.width = startWidth - distanceX + 'px';
							dragElement.style.left = startLeft + distanceX + 'px';
						} else {
							dragElement.style.left = 0 + 'px';
							dragElement.style.width =
								e.x - canvasLeft + startWidth - distanceX + 'px';
						}
					}
					if (e.clientY <= startHeight + startY) {
						if (startTop + distanceY >= 0) {
							dragElement.style.height = startHeight - distanceY + 'px';
							dragElement.style.top = startTop + distanceY + 'px';
						} else {
							dragElement.style.top = 0 + 'px';
							dragElement.style.height =
								e.y - canvasTop + startHeight - distanceY + 'px';
						}
					}
					break;
				}
				case DragPointDirection.tr: {
					// 起始x轴位置 - 图形距离视口的left值 小于 图形的宽度
					if (e.x - canvasLeft < canvasWidth) {
						dragElement.style.width = startWidth + distanceX + 'px';
					} else {
						dragElement.style.width = canvasWidth - startLeft + 'px';
					}
					if (e.clientY <= startHeight + startY) {
						if (startTop + distanceY >= 0) {
							dragElement.style.height = startHeight - distanceY + 'px';
							dragElement.style.top = startTop + distanceY + 'px';
						} else {
							dragElement.style.top = 0 + 'px';
							dragElement.style.height =
								e.y - canvasTop + startHeight - distanceY + 'px';
						}
					}
					break;
				}
				case DragSideDirection.top: {
					if (e.clientY <= startHeight + startY) {
						if (startTop + distanceY >= 0) {
							dragElement.style.height = startHeight - distanceY + 'px';
							dragElement.style.top = startTop + distanceY + 'px';
						} else {
							dragElement.style.top = 0 + 'px';
							dragElement.style.height =
								e.clientY - canvasTop + startHeight - distanceY + 'px';
						}
					}
					break;
				}
				case DragSideDirection.bottom: {
					if (e.clientY < canvasTop + canvasHeight) {
						dragElement.style.height = startHeight + distanceY + 'px';
					} else {
						dragElement.style.height = canvasHeight - startTop + 'px';
					}
					break;
				}
				case DragSideDirection.right: {
					if (e.clientX < canvasLeft + canvasWidth) {
						dragElement.style.width = startWidth + distanceX + 'px';
					} else {
						dragElement.style.width = canvasWidth - startLeft + 'px';
					}
					break;
				}
				case DragSideDirection.left: {
					if (e.clientX <= startWidth + startX) {
						if (startLeft + distanceX >= 0) {
							dragElement.style.width = startWidth - distanceX + 'px';
							dragElement.style.left = startLeft + distanceX + 'px';
						} else {
							dragElement.style.left = 0 + 'px';
							dragElement.style.width =
								e.clientX - canvasLeft + startWidth - distanceX + 'px';
						}
					}
					break;
				}
				default:
					break;
			}
		};
		element.addEventListener('mouseup', () => {
			document.onmousemove = null;
			onMouseUp?.();
		});
	});
};

/**
 * 判断是否为颜色
 * @param {string} strColor
 * @returns {boolean}
 */
function isValidColor(strColor: string) {
	let s = new Option().style;
	s.color = strColor;

	// return 'false' if color wasn't assigned
	return s.color === strColor.toLowerCase();
}

/**
 *
 * @param {string} hex  16进制颜色
 * @param {number} opacity   透明度
 * @returns rgba 颜色
 */
export function hexToRgba(_hex: string, opacity: number = 1) {
	let hex = _hex;
	if (hex.slice(0, 1) !== '#') {
		throw `The starting character must be #`;
	}
	if (hex.length === 3) {
		hex += '000';
	}
	if (isValidColor(hex)) {
		throw `${hex} is not a hex color.`;
	}
	return (
		'rgba(' +
		parseInt('0x' + hex.slice(1, 3)) +
		',' +
		parseInt('0x' + hex.slice(3, 5)) +
		',' +
		parseInt('0x' + hex.slice(5, 7)) +
		',' +
		opacity +
		')'
	);
}
