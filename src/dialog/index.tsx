import { Button, ButtonProps, Modal } from 'antd';
import React, { FC, useEffect, useRef, useState } from 'react';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';
// 尺寸大小类型
export type SizeProps = 'default' | 'small' | 'medium' | 'large';
export interface DialogProps {
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
	title?: React.ReactNode | JSX.Element;
	/** 显示 */
	visible?: boolean;
	/** 是否拖拽 */
	isDrag?: boolean;
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
	[key: string]: any;
}

// 处理框架宽度
const procedureWidth = (width: SizeProps | number) => {
	switch (width) {
		case 'small':
			return 480;
		case 'default':
			return 600;
		case 'medium':
			return 680;
		case 'large':
			return 880;
		default:
			return width;
	}
};

const Dialog: FC<DialogProps> = ({
	className = '',
	style = {},
	title = '弹框标题',
	onOpen,
	visible: _visible = false,
	isDrag = true,
	okText = '确定',
	openText = '打开',
	cancelText = '取消',
	width = 'medium',
	children,
	okButtonProps = {},
	cancelButtonProps = {},
	openButtonProps = {},
	onOk,
	onCancel,
	afterClose,
	footer,
	renderOpenButton,
	changeVisible,
	...props
}) => {
	const draggleRef = useRef<HTMLDivElement>(null);
	const [visible, setVisible] = useState(_visible);
	const [disabled, setDisabled] = useState(true);
	const [bounds, setBounds] = useState({
		left: 0,
		top: 0,
		bottom: 0,
		right: 0,
	});
	// 处理打开按钮
	const procedureOpenButton = () => {
		const type = Object.prototype.toString.call(renderOpenButton);
		if (type === '[object Function]') {
			return (
				renderOpenButton &&
				renderOpenButton(() => {
					onOpen?.();
					setVisible(true);
				})
			);
		} else {
			return (
				<Button
					{...openButtonProps}
					onClick={() => {
						onOpen?.();
						setVisible(true);
					}}
				>
					{openText}
				</Button>
			);
		}
	};
	useEffect(() => {
		changeVisible?.(visible);
	}, [visible]);
	useEffect(() => {
		setVisible(_visible);
	}, [_visible]);

	const onStart = (_event: DraggableEvent, uiData: DraggableData) => {
		const { clientWidth, clientHeight } = window.document.documentElement;
		const targetRect = draggleRef.current?.getBoundingClientRect();
		if (!targetRect) {
			return;
		}
		setBounds({
			left: -targetRect.left + uiData.x,
			right: clientWidth - (targetRect.right - uiData.x),
			top: -targetRect.top + uiData.y,
			bottom: clientHeight - (targetRect.bottom - uiData.y),
		});
	};
	const dragProps = {
		modalRender: (modal: React.ReactNode) => (
			<Draggable
				disabled={disabled}
				bounds={bounds}
				nodeRef={draggleRef}
				onStart={(event, uiData) => onStart(event, uiData)}
			>
				<div ref={draggleRef}>{modal}</div>
			</Draggable>
		),
		title: (
			<div
				style={{
					width: '100%',
					cursor: 'move',
				}}
				onMouseOver={() => {
					if (disabled) {
						setDisabled(false);
					}
				}}
				onMouseOut={() => {
					setDisabled(true);
				}}
			>
				{title}
			</div>
		),
	};
	return (
		<>
			{procedureOpenButton()}
			{/* 弹窗 */}
			<Modal
				className={className}
				destroyOnClose
				style={style}
				width={procedureWidth(width!)}
				open={visible}
				okText={okText}
				okButtonProps={{
					...okButtonProps,
					style: {
						display: okText ? 'inline-block' : 'none',
						...(okButtonProps?.style || {}),
					},
				}}
				onOk={() => {
					const blocker = onOk?.(() => setVisible(false)); // 拦截器
					if (!blocker) {
						setVisible(false);
					}
				}}
				cancelText={cancelText}
				cancelButtonProps={{
					...cancelButtonProps,
					style: {
						display: cancelText ? 'inline-block' : 'none',
						...(cancelButtonProps?.style || {}),
					},
				}}
				onCancel={() => {
					setVisible(false);
					onCancel?.();
				}}
				afterClose={afterClose}
				{...(() => {
					const type = Object.prototype.toString.call(footer);
					if (type === '[object Undefined]') {
						return {};
					} else if (type === '[object Function]') {
						return {
							footer:
								footer &&
								footer(() => {
									setVisible(false);
								}),
						};
					} else {
						return { footer };
					}
				})()}
				{...(isDrag ? dragProps : { title: title })}
				{...props}
			>
				{children}
			</Modal>
		</>
	);
};

export default Dialog;
