export interface TailorProps {
	title?: string;
	src: string;
}

export interface CanvasState {
	ctx?: CanvasRenderingContext2D;
	pixelRatio: number;
	imageSize: {
		width: number;
		height: number;
	};
	initSize: {
		width: number;
		height: number;
	};
	canvasSize: {
		width: number;
		height: number;
	};
	mousePosi: number[][];
	initMousePosi: {
		x: number;
		y: number;
	};
	imageScale: number;
	image: HTMLImageElement;
	canChangeSelect: boolean;
}

export type CanvasStateKey = keyof CanvasState;
