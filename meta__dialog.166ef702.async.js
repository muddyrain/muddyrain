"use strict";(self.webpackChunkmuddyrain=self.webpackChunkmuddyrain||[]).push([[578],{91219:function(_,a,t){t.r(a),t.d(a,{demos:function(){return O}});var m=t(15009),n=t.n(m),y=t(99289),p=t.n(y),x=t(67294),k=t(72647),O={"dialog-demo-demo1":{component:x.memo(x.lazy(function(){return t.e(447).then(t.bind(t,83775))})),asset:{type:"BLOCK",id:"dialog-demo-demo1",refAtomIds:["dialog"],dependencies:{"index.tsx":{type:"FILE",value:t(63886).Z},antd:{type:"NPM",value:"5.19.3"},react:{type:"NPM",value:"18.3.1"},"...tsx":{type:"FILE",value:t(68956).Z},"react-draggable":{type:"NPM",value:"4.4.6"}},entry:"index.tsx"},context:{antd:t(93989),react:t(67294),"...tsx":t(33244),"react-draggable":t(61193)},renderOpts:{compile:function(){var B=p()(n()().mark(function D(){var f,o=arguments;return n()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,t.e(335).then(t.bind(t,37335));case 2:return l.abrupt("return",(f=l.sent).default.apply(f,o));case 3:case"end":return l.stop()}},D)}));function r(){return B.apply(this,arguments)}return r}()}}}},33244:function(_,a,t){t.r(a);var m=t(97857),n=t.n(m),y=t(5574),p=t.n(y),x=t(13769),k=t.n(x),O=t(14726),B=t(85576),r=t(67294),D=t(61193),f=t.n(D),o=t(85893),W=["className","style","title","onOpen","visible","isDrag","okText","openText","cancelText","width","children","okButtonProps","cancelButtonProps","openButtonProps","onOk","onCancel","afterClose","footer","renderOpenButton","changeVisible"],l=function(e){switch(e){case"small":return 480;case"default":return 600;case"medium":return 680;case"large":return 880;default:return e}},nt=function(e){var N=e.className,ot=N===void 0?"":N,L=e.style,dt=L===void 0?{}:L,A=e.title,U=A===void 0?"\u5F39\u6846\u6807\u9898":A,i=e.onOpen,K=e.visible,R=K===void 0?!1:K,V=e.isDrag,rt=V===void 0?!0:V,$=e.okText,w=$===void 0?"\u786E\u5B9A":$,F=e.openText,lt=F===void 0?"\u6253\u5F00":F,Z=e.cancelText,z=Z===void 0?"\u53D6\u6D88":Z,H=e.width,ut=H===void 0?"medium":H,it=e.children,J=e.okButtonProps,b=J===void 0?{}:J,X=e.cancelButtonProps,g=X===void 0?{}:X,G=e.openButtonProps,st=G===void 0?{}:G,E=e.onOk,T=e.onCancel,ct=e.afterClose,h=e.footer,C=e.renderOpenButton,M=e.changeVisible,pt=k()(e,W),j=(0,r.useRef)(null),vt=(0,r.useState)(R),Q=p()(vt,2),S=Q[0],u=Q[1],It=(0,r.useState)(!0),Y=p()(It,2),q=Y[0],tt=Y[1],_t=(0,r.useState)({left:0,top:0,bottom:0,right:0}),et=p()(_t,2),mt=et[0],xt=et[1],ft=function(){var s=Object.prototype.toString.call(C);return s==="[object Function]"?C&&C(function(){i==null||i(),u(!0)}):(0,o.jsx)(O.ZP,n()(n()({},st),{},{onClick:function(){i==null||i(),u(!0)},children:lt}))};(0,r.useEffect)(function(){M==null||M(S)},[S]),(0,r.useEffect)(function(){u(R)},[R]);var bt=function(s,c){var v,P=window.document.documentElement,ht=P.clientWidth,Pt=P.clientHeight,I=(v=j.current)===null||v===void 0?void 0:v.getBoundingClientRect();I&&xt({left:-I.left+c.x,right:ht-(I.right-c.x),top:-I.top+c.y,bottom:Pt-(I.bottom-c.y)})},gt={modalRender:function(s){return(0,o.jsx)(f(),{disabled:q,bounds:mt,nodeRef:j,onStart:function(v,P){return bt(v,P)},children:(0,o.jsx)("div",{ref:j,children:s})})},title:(0,o.jsx)("div",{style:{width:"100%",cursor:"move"},onMouseOver:function(){q&&tt(!1)},onMouseOut:function(){tt(!0)},children:U})};return(0,o.jsxs)(o.Fragment,{children:[ft(),(0,o.jsx)(B.Z,n()(n()(n()(n()({className:ot,destroyOnClose:!0,style:dt,width:l(ut),open:S,okText:w,okButtonProps:n()(n()({},b),{},{style:n()({display:w?"inline-block":"none"},(b==null?void 0:b.style)||{})}),onOk:function(){var s=E==null?void 0:E(function(){return u(!1)});s||u(!1)},cancelText:z,cancelButtonProps:n()(n()({},g),{},{style:n()({display:z?"inline-block":"none"},(g==null?void 0:g.style)||{})}),onCancel:function(){u(!1),T==null||T()},afterClose:ct},function(){var d=Object.prototype.toString.call(h);return d==="[object Undefined]"?{}:d==="[object Function]"?{footer:h&&h(function(){u(!1)})}:{footer:h}}()),rt?gt:{title:U}),pt),{},{children:it}))]})};a.default=nt},38762:function(_,a,t){t.r(a),t.d(a,{texts:function(){return n}});var m=t(72647);const n=[{value:`import { Dialog } from "muddyrain"

export default function (){
  return (<Dialog openText="\u6253\u5F00">\u54C8\u54C8\u54C8</Dialog>)
}
`,paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u63CF\u8FF0\u4FE1\u606F",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"className",paraId:1,tocIndex:2},{value:"\u7C7B\u540D",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"style",paraId:1,tocIndex:2},{value:"\u6837\u5F0F",paraId:1,tocIndex:2},{value:"React.CSSProperties",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"children",paraId:1,tocIndex:2},{value:"\u5B50\u8282\u70B9",paraId:1,tocIndex:2},{value:"React.ReactNode",paraId:1,tocIndex:2},{value:"JSX.Element",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"title",paraId:1,tocIndex:2},{value:"\u6807\u9898",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"\u5F39\u6846\u6807\u9898",paraId:1,tocIndex:2},{value:"isDrag",paraId:1,tocIndex:2},{value:"\u662F\u5426\u62D6\u62FD",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"true",paraId:1,tocIndex:2},{value:"width",paraId:1,tocIndex:2},{value:"\u5BBD\u5EA6",paraId:1,tocIndex:2},{value:"SizeProps",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"openText",paraId:1,tocIndex:2},{value:"\u6253\u5F00\u6309\u94AE\u6587\u5B57",paraId:1,tocIndex:2},{value:"React.ReactNode",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"\u6253\u5F00",paraId:1,tocIndex:2},{value:"okText",paraId:1,tocIndex:2},{value:"\u786E\u5B9A\u6309\u94AE\u6587\u5B57",paraId:1,tocIndex:2},{value:"React.ReactNode",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"\u786E\u5B9A",paraId:1,tocIndex:2},{value:"cancelText",paraId:1,tocIndex:2},{value:"\u53D6\u6D88\u6309\u94AE\u6587\u5B57",paraId:1,tocIndex:2},{value:"React.ReactNode",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"\u53D6\u6D88",paraId:1,tocIndex:2},{value:"okButtonProps",paraId:1,tocIndex:2},{value:"\u786E\u5B9A\u6309\u94AE\u914D\u7F6E\u9879",paraId:1,tocIndex:2},{value:"ButtonProps",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"{}",paraId:1,tocIndex:2},{value:"cancelButtonProps",paraId:1,tocIndex:2},{value:"\u53D6\u6D88\u6309\u94AE\u914D\u7F6E\u9879",paraId:1,tocIndex:2},{value:"ButtonProps",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"{}",paraId:1,tocIndex:2},{value:"openButtonProps",paraId:1,tocIndex:2},{value:"\u6253\u5F00\u6309\u94AE\u914D\u7F6E\u9879",paraId:1,tocIndex:2},{value:"ButtonProps",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"{}",paraId:1,tocIndex:2},{value:"onOpen",paraId:1,tocIndex:2},{value:"\u6253\u5F00\u4E4B\u524D\u7684\u64CD\u4F5C",paraId:1,tocIndex:2},{value:"() => void",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"onOk",paraId:1,tocIndex:2},{value:"\u70B9\u51FB\u786E\u5B9A\u4E4B\u540E\u7684\u64CD\u4F5C",paraId:1,tocIndex:2},{value:"(hide: () => void) => boolean",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"onCancel",paraId:1,tocIndex:2},{value:"\u5173\u95ED\u4E4B\u540E\u7684\u64CD\u4F5C",paraId:1,tocIndex:2},{value:"() => void ",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"afterClose",paraId:1,tocIndex:2},{value:"\u5173\u95ED\u4E4B\u524D\u7684\u64CD\u4F5C",paraId:1,tocIndex:2},{value:"() => void",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"footer",paraId:1,tocIndex:2},{value:"\u81EA\u5B9A\u4E49footer",paraId:1,tocIndex:2},{value:"(close: () => void) => React.ReactNode  React.ReactNode  any",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"renderOpenButton",paraId:1,tocIndex:2},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u6253\u5F00\u6309\u94AE",paraId:1,tocIndex:2},{value:"(int: () => void) => void",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"changeVisible",paraId:1,tocIndex:2},{value:"\u76D1\u542C\u663E\u793A",paraId:1,tocIndex:2},{value:"(bool: boolean) => void",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2}]},63886:function(_,a){a.Z=`import { Button } from 'antd';
import React, { useState } from 'react';
import Dialog from '..';

const Demo1 = () => {
	const [visible, setVisible] = useState(false);
	return (
		<>
			<Dialog
				visible={visible}
				openText="\u6253\u5F00"
				changeVisible={(value) => {
					setVisible(value);
				}}
				footer={() => null}
			>
				\u54C8\u54C8\u54C8
				<Button
					onClick={() => {
						console.log('\u5173\u95ED');
						setVisible(false);
					}}
				>
					\u5173\u95ED
				</Button>
			</Dialog>
		</>
	);
};

export default Demo1;
`},68956:function(_,a){a.Z=`import { Button, ButtonProps, Modal } from 'antd';
import React, { FC, useEffect, useRef, useState } from 'react';
import type { DraggableData, DraggableEvent } from 'react-draggable';
import Draggable from 'react-draggable';
// \u5C3A\u5BF8\u5927\u5C0F\u7C7B\u578B
export type SizeProps = 'default' | 'small' | 'medium' | 'large';
export interface DialogProps {
	/**
	 * \u7C7B\u540D
	 */
	className?: string;
	/**
	 * \u6837\u5F0F
	 */
	style?: React.CSSProperties;
	/**
	 * \u5B50\u8282\u70B9
	 */
	children?: React.ReactNode | JSX.Element;
	/** \u6807\u9898 */
	title?: React.ReactNode | JSX.Element;
	/** \u663E\u793A */
	visible?: boolean;
	/** \u662F\u5426\u62D6\u62FD */
	isDrag?: boolean;
	/** \u5BBD\u5EA6 */
	width?: SizeProps | number;
	/** \u6253\u5F00\u6309\u94AE\u6587\u5B57 */
	openText?: React.ReactNode;
	/** \u786E\u5B9A\u6309\u94AE\u6587\u5B57 */
	okText?: React.ReactNode;
	/** \u53D6\u6D88\u6309\u94AE\u6587\u5B57 */
	cancelText?: React.ReactNode;
	/** \u786E\u5B9A\u6309\u94AE\u914D\u7F6E\u9879 */
	okButtonProps?: ButtonProps;
	/** \u53D6\u6D88\u6309\u94AE\u914D\u7F6E\u9879 */
	cancelButtonProps?: ButtonProps;
	/** \u6253\u5F00\u6309\u94AE\u914D\u7F6E\u9879 */
	openButtonProps?: ButtonProps;
	/** \u6253\u5F00\u4E4B\u524D\u7684\u64CD\u4F5C */
	onOpen?: () => void;
	/** \u70B9\u51FB\u786E\u5B9A\u4E4B\u540E\u7684\u64CD\u4F5C hide:Function\u7C7B\u578B(\u624B\u52A8\u5173\u95ED\u5F39\u6846) \u8FD4\u56DE\u503C: boolean\u7C7B\u578B(\u662F\u5426\u81EA\u52A8\u5173\u95ED) */
	onOk?: (hide: () => void) => boolean;
	/** \u5173\u95ED\u4E4B\u540E\u7684\u64CD\u4F5C */
	onCancel?: () => void;
	/** \u5173\u95ED\u4E4B\u524D\u7684\u64CD\u4F5C */
	afterClose?: () => void;
	/** \u81EA\u5B9A\u4E49footer */
	footer?: (close: () => void) => React.ReactNode | React.ReactNode | any;
	/** \u81EA\u5B9A\u4E49\u6E32\u67D3\u6253\u5F00\u6309\u94AE */
	renderOpenButton?: (int: () => void) => void;
	/** \u76D1\u542C\u663E\u793A */
	changeVisible?: (bool: boolean) => void;
	[key: string]: any;
}

// \u5904\u7406\u6846\u67B6\u5BBD\u5EA6
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
	title = '\u5F39\u6846\u6807\u9898',
	onOpen,
	visible: _visible = false,
	isDrag = true,
	okText = '\u786E\u5B9A',
	openText = '\u6253\u5F00',
	cancelText = '\u53D6\u6D88',
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
	// \u5904\u7406\u6253\u5F00\u6309\u94AE
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
			{/* \u5F39\u7A97 */}
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
					const blocker = onOk?.(() => setVisible(false)); // \u62E6\u622A\u5668
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
`}}]);
