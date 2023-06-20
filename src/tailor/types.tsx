export interface TailorProps {
	/**
	 * 要裁剪的图片路径
	 */
	src: string;
	/**
	 * 文件名称
	 */
	filename?: string;
	/**
	 * @param {string} image 返回的裁剪后的图片
	 * @return {void} 无
	 */
	onFinish?: (image: string) => void;
	/**
	 * 是否显示预览
	 * default : true
	 */
	isShowReview?: boolean;
	/**
	 * 是否显示下载
	 * default : true
	 */
	isShowDownload?: boolean;
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
