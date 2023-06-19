export const handleMoveDragElement = (
	element: HTMLDivElement,
	dragElement: HTMLDivElement,
	onMouseUp?: () => void
) => {
	element.addEventListener('mousedown', (e) => {
		e.stopPropagation();
		const { width, height } = dragElement.getBoundingClientRect();
		// 记录鼠标的起始位置
		const startX = e.clientX;
		const startY = e.clientY;
		const startLeft = parseInt(dragElement.style.left);
		document.onmousemove = (e) => {
			let distanceX = e.clientX - startX;
			let distanceY = e.clientY - startY;
			dragElement.style.width = width + distanceX + 'px';
			dragElement.style.height = height + distanceY + 'px';
			console.log(element.role);
			if (element.role === 'bl') {
				dragElement.style.left = startLeft + distanceX + 'px';
			}
		};
	});
	element.addEventListener('mouseup', () => {
		document.onmousemove = null;
		onMouseUp?.();
	});
};
