export interface TailorProps {
    /**
     * 要裁剪的图片路径
     */
    src: string;
    /**
     * 文件名称
     * default : 文件
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
    /**
     * 缩放边界边缘的颜色
     * default : transparent
     */
    sideColor?: string;
    /**
     * 缩放区域的颜色
     * default : #f00000
     */
    areaColor?: string;
    /**
     * 缩放区域的透明度
     * default : 0.1
     */
    areaAlpha?: number;
}
export declare enum DragPointDirection {
    tl = "tl",
    tr = "tr",
    bl = "bl",
    br = "br"
}
export declare enum DragSideDirection {
    top = "top",
    bottom = "bottom",
    left = "left",
    right = "right"
}
