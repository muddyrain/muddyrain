"use strict";(self.webpackChunkmuddyrain=self.webpackChunkmuddyrain||[]).push([[447],{49698:function(Oe,k,t){t.r(k),t.d(k,{default:function(){return se}});var X=t(27424),p=t.n(X),R=t(15867),i=t(67294),Y=t(42122),n=t.n(Y),w=t(70215),q=t.n(w),_=t(60658),ee=t(61193),te=t.n(ee),o=t(85893),ne=["className","style","title","onOpen","visible","isDrag","okText","openText","cancelText","width","children","okButtonProps","cancelButtonProps","openButtonProps","onOk","onCancel","afterClose","footer","renderOpenButton","changeVisible"],oe=function(e){switch(e){case"small":return 480;case"default":return 600;case"medium":return 680;case"large":return 880;default:return e}},le=function(e){var c=e.className,j=c===void 0?"":c,d=e.style,h=d===void 0?{}:d,g=e.title,V=g===void 0?"\u5F39\u6846\u6807\u9898":g,s=e.onOpen,W=e.visible,B=W===void 0?!1:W,F=e.isDrag,ue=F===void 0?!0:F,N=e.okText,E=N===void 0?"\u786E\u5B9A":N,M=e.openText,ae=M===void 0?"\u6253\u5F00":M,Z=e.cancelText,A=Z===void 0?"\u53D6\u6D88":Z,H=e.width,ce=H===void 0?"medium":H,de=e.children,U=e.okButtonProps,m=U===void 0?{}:U,z=e.cancelButtonProps,x=z===void 0?{}:z,G=e.openButtonProps,ve=G===void 0?{}:G,S=e.onOk,C=e.onCancel,fe=e.afterClose,b=e.footer,O=e.renderOpenButton,P=e.changeVisible,pe=q()(e,ne),T=(0,i.useRef)(null),he=(0,i.useState)(B),I=p()(he,2),$=I[0],r=I[1],ge=(0,i.useState)(!0),J=p()(ge,2),K=J[0],L=J[1],me=(0,i.useState)({left:0,top:0,bottom:0,right:0}),Q=p()(me,2),xe=Q[0],be=Q[1],ye=function(){var u=Object.prototype.toString.call(O);return u==="[object Function]"?O&&O(function(){s==null||s(),r(!0)}):(0,o.jsx)(R.ZP,n()(n()({},ve),{},{onClick:function(){s==null||s(),r(!0)},children:ae}))};(0,i.useEffect)(function(){P==null||P($)},[$]),(0,i.useEffect)(function(){r(B)},[B]);var je=function(u,a){var v,y=window.document.documentElement,Se=y.clientWidth,Ce=y.clientHeight,f=(v=T.current)===null||v===void 0?void 0:v.getBoundingClientRect();f&&be({left:-f.left+a.x,right:Se-(f.right-a.x),top:-f.top+a.y,bottom:Ce-(f.bottom-a.y)})},Be={modalRender:function(u){return(0,o.jsx)(te(),{disabled:K,bounds:xe,nodeRef:T,onStart:function(v,y){return je(v,y)},children:(0,o.jsx)("div",{ref:T,children:u})})},title:(0,o.jsx)("div",{style:{width:"100%",cursor:"move"},onMouseOver:function(){K&&L(!1)},onMouseOut:function(){L(!0)},children:V})};return(0,o.jsxs)(o.Fragment,{children:[ye(),(0,o.jsx)(_.Z,n()(n()(n()(n()({className:j,destroyOnClose:!0,style:h,width:oe(ce),open:$,okText:E,okButtonProps:n()(n()({},m),{},{style:n()({display:E?"inline-block":"none"},(m==null?void 0:m.style)||{})}),onOk:function(){var u=S==null?void 0:S(function(){return r(!1)});u||r(!1)},cancelText:A,cancelButtonProps:n()(n()({},x),{},{style:n()({display:A?"inline-block":"none"},(x==null?void 0:x.style)||{})}),onCancel:function(){r(!1),C==null||C()},afterClose:fe},function(){var l=Object.prototype.toString.call(b);return l==="[object Undefined]"?{}:l==="[object Function]"?{footer:b&&b(function(){r(!1)})}:{footer:b}}()),ue?Be:{title:V}),pe),{},{children:de}))]})},ie=le,re=function(){var e=(0,i.useState)(!1),c=p()(e,2),j=c[0],d=c[1];return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(ie,{visible:j,openText:"\u6253\u5F00",changeVisible:function(g){d(g)},footer:function(){return null},children:["\u54C8\u54C8\u54C8",(0,o.jsx)(R.ZP,{onClick:function(){console.log("\u5173\u95ED"),d(!1)},children:"\u5173\u95ED"})]})})},se=re}}]);
