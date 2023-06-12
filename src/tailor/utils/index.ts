/**
 * 获取ratio
 * @param context
 */
export const getPixelRatio = (context: any & CanvasRenderingContext2D) => {
	const backingStore =
		context.backingStorePixelRatio ||
		context.webkitBackingStorePixelRatio ||
		context.mozBackingStorePixelRatio ||
		context.msBackingStorePixelRatio ||
		context.oBackingStorePixelRatio ||
		1;
	return (window.devicePixelRatio || 1) / backingStore;
};
