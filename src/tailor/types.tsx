export interface TailorProps {
	title?: string;
	src: string;
}

export interface CanvasState {
	ctx?: CanvasRenderingContext2D;
	pixelRatio?: number;
	imageSize: {
		width: number;
		height: number;
	};
	initSize: {
		width: number;
		height: number;
	};
	imageScale: number;
	image: HTMLImageElement;
}

export type CanvasStateKey = keyof CanvasState;
