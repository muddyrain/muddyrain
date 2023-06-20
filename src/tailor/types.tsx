export interface TailorProps {
	title?: string;
	src: string;
	name?: string;
}

export enum DragDirection {
	tl = 'tl',
	tr = 'tr',
	bl = 'bl',
	br = 'br',
	top = 'top',
	bottom = 'bottom',
	left = 'left',
	right = 'right',
}
