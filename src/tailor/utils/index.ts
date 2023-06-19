export const handleMovieBr = (
	element: HTMLDivElement,
	dragElement: HTMLDivElement,
	canvasElement: HTMLCanvasElement
) => {
	element.addEventListener('mousedown', (e) => {
		e.stopPropagation();
		const { width, height } = dragElement.getBoundingClientRect();
		// 记录鼠标的起始位置
		const startX = e.clientX;
		const startY = e.clientY;
		document.onmousemove = (e) => {
			let distanceX = e.clientX - startX;
			let distanceY = e.clientY - startY;
			dragElement.style.width = width + distanceX + 'px';
			dragElement.style.height = height + distanceY + 'px';
		};
	});
	element.addEventListener('mouseup', () => {
		document.onmousemove = null;
		const { left: canvasLeft, top: canvasTop } =
			canvasElement.getBoundingClientRect();
		const { left: dragLeft, top: dragTop } =
			dragElement.getBoundingClientRect();
		console.log(canvasLeft, canvasTop);
		console.log(dragLeft, dragTop);
	});
};

export const handleMovieBl = (
	element: HTMLDivElement,
	dragElement: HTMLDivElement
) => {
	element.addEventListener('mousedown', (e) => {
		e.stopPropagation();
		const { width, height } = dragElement.getBoundingClientRect();
		// 记录鼠标的起始位置
		const startX = e.clientX;
		const startY = e.clientY;
		document.onmousemove = (e) => {
			let distanceX = e.clientX - startX;
			let distanceY = e.clientY - startY;
			dragElement.style.width = width - distanceX + 'px';
			dragElement.style.height = height + distanceY + 'px';
		};
	});
	element.addEventListener('mouseup', () => {
		document.onmousemove = null;
	});
};
