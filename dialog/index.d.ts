import { ButtonProps } from 'antd';
import React, { FC } from 'react';
declare type SizeProps = 'default' | 'small' | 'medium' | 'large';
interface DialogProps {
    /**
     * 类名
     */
    className?: string;
    /**
     * 样式
     */
    style?: React.CSSProperties;
    /**
     * 子节点
     */
    children?: React.ReactNode | JSX.Element;
    /** 标题 */
    title?: string;
    /** 显示 */
    visible?: boolean;
    /** 宽度 */
    width?: SizeProps | number;
    /** 打开按钮文字 */
    openText?: React.ReactNode;
    /** 确定按钮文字 */
    okText?: React.ReactNode;
    /** 取消按钮文字 */
    cancelText?: React.ReactNode;
    /** 确定按钮配置项 */
    okButtonProps?: ButtonProps;
    /** 取消按钮配置项 */
    cancelButtonProps?: ButtonProps;
    /** 打开按钮配置项 */
    openButtonProps?: ButtonProps;
    /** 打开之前的操作 */
    onOpen?: () => void;
    /** 点击确定之后的操作 hide:Function类型(手动关闭弹框) 返回值: boolean类型(是否自动关闭) */
    onOk?: (hide: () => void) => boolean;
    /** 关闭之后的操作 */
    onCancel?: () => void;
    /** 关闭之前的操作 */
    afterClose?: () => void;
    /** 自定义footer */
    footer?: (close: () => void) => React.ReactNode | React.ReactNode | any;
    /** 自定义渲染打开按钮 */
    renderOpenButton?: (int: () => void) => void;
    /** 监听显示 */
    changeVisible?: (bool: boolean) => void;
}
declare const Dialog: FC<DialogProps>;
export default Dialog;
