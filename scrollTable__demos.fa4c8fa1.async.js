"use strict";(self.webpackChunkmuddyrain=self.webpackChunkmuddyrain||[]).push([[676],{99638:function(Xe,ye,s){s.r(ye),s.d(ye,{default:function(){return We}});var Fe=s(19632),j=s.n(Fe),Ne=s(5574),d=s.n(Ne),p=s(78957),ke=s(72269),R=s(73459),oe=s(50719),a=s(67294),De=s(97857),O=s.n(De),Ee=s(87083),He=s(26038),be=s(69808),B=s.n(be),qe=s(73363),C={scrollTable_container:"qNr7ZcDRBkv7l3SfCHU0",head:"Zpe2B2J4YqkAsVHoynIq",head_item:"gT7h6U64W_8BAjiJsyna",wrapper:"_E4y0FaKusJur80ZSlJ4",body:"wwtwQhxZ4My3kCsgj0LE",row:"hBLf0pzLgLCFzI1LmGb4",row_item:"DBOshhHLgAAjKM5v203y","ellipsis-line":"S4NLfCrVzgcBZQgscTZV",tt:"s9buWbDp4U3F59c9SYBH"},e=s(85893),Le=function(r,h,l){var y=function(T){return r.render?r.render(T,h,l):T},S=r.dataIndex&&h[r.dataIndex];if(r.specialColumn==="sort")return y(l+1);if(r.ellipsis){var g,x=y(S);return(0,e.jsx)(Ee.ZP,{placement:r.ellipsisPlacement||"top",content:(0,e.jsx)("div",{className:r.ellipsisClassName,children:S}),children:r.render?a.cloneElement(x,{className:"".concat(C["ellipsis-line"]," ").concat(x==null||(g=x.props)===null||g===void 0?void 0:g.className)}):(0,e.jsx)("span",{className:C["ellipsis-line"],children:S})})}else return y(S)},Pe=function(r){var h=r.columns,l=r.dataSource,y=r.isAutoPlay,S=y===void 0?!0:y,g=r.className,x=g===void 0?"":g,Z=r.headClassName,T=Z===void 0?"":Z,F=r.rowClassName,W=F===void 0?"":F,z=r.headStyle,ue=z===void 0?{}:z,N=r.rowStyle,J=N===void 0?{}:N,Y=r.headSpacing,se=Y===void 0?[10,15]:Y,k=r.rowSpacing,U=k===void 0?[10,15]:k,V=r.headBackgroundColor,ce=V===void 0?B().blue[400]:V,K=r.rowBackgroundColor,v=r.headTextColor,Q=v===void 0?"white":v,G=r.rowTextColor,X=G===void 0?"white":G,D=r.striped,q=D===void 0?!0:D,_=r.duration,ee=_===void 0?1e3:_,E=r.delay,le=E===void 0?250:E,te=r.waitTime,$=te===void 0?2e3:te,w=r.rowScrollHeight,re=r.hoverPause,ie=re===void 0?!1:re,H=r.onClick,A=r.onMouseOver,b=r.onMouseMove,L=r.onMouseLeave,c=r.style,n=r.emptyText,de=K||(q?[B().cyan[700],B().sky[700]]:B().cyan[700]),ne=(0,a.useRef)(),i=(0,a.useRef)(null),he=(0,a.useRef)(null),ve=(0,a.useRef)(null),fe=(0,a.useRef)(0),Ce=(0,a.useRef)(S),M=(0,a.useRef)(l.length),je=(0,a.useRef)([]),ge=(0,a.useRef)([]),xe=(0,a.useRef)(0),ze=(0,a.useState)(l),we=d()(ze,2),Re=we[0],Be=we[1],ae=(0,a.useRef)(0),me=function(){if(i.current){var t=je.current[ae.current];if(t){var u=t.getBoundingClientRect(),m=u.height;xe.current=m}}},Te=function(t){if(Array.isArray(t)){if(t.length===2)return"".concat(t[0],"px ").concat(t[1],"px");if(t.length===4)return"".concat(t[0],"px ").concat(t[1],"px ").concat(t[2],"px ").concat(t[3],"px")}return typeof t=="string"?"".concat(t):typeof t=="number"?"".concat(t,"px"):""},Je=function(){function t(Qe,Ge){for(var pe=[],Ze=0;Ze<Ge;Ze++)pe=[].concat(j()(pe),j()(Qe));Be(function(){return j()(pe)})}if(he.current){var u=he.current,m=u.getBoundingClientRect(),I=m.height,f=Math.ceil(I/xe.current),Ke=Math.ceil(f/M.current);f>M.current?t(l,Ke+1):t(l,2),me()}},$e=function(){if(i.current){var t=i.current,u=t.getBoundingClientRect(),m=u.width;ge.current=Array.from({length:h.length}).map(function(){return m/h.length})}},P=function(){clearTimeout(ne.current),ne.current=void 0},Ye=function(t){if(i.current&&ve.current){var u=i.current;P(),me(),fe.current+=w||xe.current,ae.current+=1,He.ZP.to(i.current.style,{duration:ee/1e3,delay:le/1e3,transform:"translateY(-".concat(fe.current,"px)"),onComplete:function(){ae.current<M.current||(u.style.transform="translateY(0px)",fe.current=0,ae.current=0),t()}})}},Ae=function o(){Ce.current&&(ne.current&&P(),ne.current=setTimeout(function(){Ye(o)},$))},Ue=function(t){var u=de;return q?(Array.isArray(u)&&u.length===2||(console.warn("`ScrollTable` \u5982\u679C\u8BBE\u7F6E\u4E86 `striped` \u4E3A\u6761\u7EB9\u72B6,\u90A3\u4E48\u53EA\u652F\u6301\u4E24\u79CD\u989C\u8272,\u4E3A\u4FDD\u8BC1\u6E32\u67D3\u6548\u679C,\u8BF7\u4F7F\u7528\u4E24\u79CD\u989C\u8272\u6570\u7EC4[color,color]"),u=[B().cyan[700],B().sky[700]]),t%2===0?u[0]:u[1]):Array.isArray(u)?(console.warn("`ScrollTable` \u5F53\u524D\u72B6\u6001\u4E3A\u6B63\u5E38\u989C\u8272,\u4EC5\u652F\u63011\u79CD\u989C\u8272,\u4E3A\u4FDD\u8BC1\u6E32\u67D3\u6548\u679C,\u8BF7\u4F7F\u75281\u79CD\u989C\u8272-color"),u[0]):u},Me=function(t){switch(t){case"left":return"flex-start";case"center":return"center";case"right":return"flex-end";default:return"flex-start"}},Ve=function(){$e(),window.addEventListener("resize",function(){$e()})};return(0,a.useEffect)(function(){if($<1e3)throw new Error("`ScrollTable` waitTime \u6700\u5C0F\u4E3A1000\u6BEB\u79D2")},[$]),(0,a.useEffect)(function(){var o;if(i.current&&l.length){P(),M.current=l.length,Be(function(){return j()(l)});var t=function(){i.current&&(je.current=Array.from(i.current.children).slice(0,M.current),me(),Je(),Ae())};(o=i.current.children)!==null&&o!==void 0&&o.length?(P(),t()):new MutationObserver(function(u){i.current&&u.length&&t()}).observe(i.current,{childList:!0})}},[i,l]),(0,a.useLayoutEffect)(function(){Ve()},[ve.current]),(0,e.jsxs)("div",{className:"".concat(C.scrollTable_container," ").concat(x),style:c,onMouseOver:function(){ie&&(P(),Ce.current=!1)},onMouseLeave:function(){Ce.current=!0,Ae()},children:[(0,e.jsx)("div",{className:"".concat(C.head," ").concat(T),style:O()({backgroundColor:ce},ue),children:h.map(function(o,t){return(0,e.jsx)("div",{className:C.head_item,style:{width:o.width||ge.current[t],padding:Te(se),justifyContent:Me(o.headAlign||"left"),color:Q},children:o.title},t)})}),(0,e.jsx)("div",{className:C.wrapper,ref:he,children:(0,e.jsx)("div",{className:C.body,ref:i,style:{transform:"translateY(0px)"},children:Re.length?Re.map(function(o,t){return(0,e.jsx)("div",O()(O()({className:"".concat(C.row," ").concat(W),style:O()({backgroundColor:Ue(t)},J)},t===0?{ref:ve}:{}),{},{children:h.map(function(u,m){return(0,e.jsx)("div",{className:C.row_item,style:{width:u.width||ge.current[m],padding:Te(U),justifyContent:Me(u.align||"left"),cursor:u.cursor,color:X},onClick:function(f){H==null||H(o,t,f)},onMouseOver:function(f){A==null||A(o,t,f)},onMouseMove:function(f){b==null||b(o,t,f)},onMouseLeave:function(f){L==null||L(o,t,f)},children:Le(u,o,t%M.current)},m)})}),t)}):n})})]})},Ie=Pe,Oe=function(){var r=a.useState("#ffffff"),h=d()(r,2),l=h[0],y=h[1],S=a.useState(1e3),g=d()(S,2),x=g[0],Z=g[1],T=a.useState(500),F=d()(T,2),W=F[0],z=F[1],ue=a.useState(250),N=d()(ue,2),J=N[0],Y=N[1],se=a.useState("#ffffff"),k=d()(se,2),U=k[0],V=k[1],ce=a.useState(["#0e7490","#0369a1"]),K=d()(ce,2),v=K[0],Q=K[1],G=a.useState("#0e7490"),X=d()(G,2),D=X[0],q=X[1],_=a.useState("#60a5fa"),ee=d()(_,2),E=ee[0],le=ee[1],te=a.useState(!0),$=d()(te,2),w=$[0],re=$[1],ie=Array.from({length:10}).map(function(c,n){return{name:"\u5F20\u4E0911"+(n+1),age:"21",address:"\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02",date:"2023-01-01 12:00:00"}}),H=(0,a.useState)(ie),A=d()(H,2),b=A[0],L=A[1];return(0,a.useEffect)(function(){setTimeout(function(){L(j()(Array.from({length:6}).map(function(c,n){return{name:"\u5F20\u4E09222"+(n+1),age:"21",address:"\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02",date:"2023-01-01 12:00:00"}})))},2e3)},[]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"\u989C\u8272"}),(0,e.jsxs)(p.Z,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)(ke.Z,{checked:w,onChange:function(){return re(!w)}}),(0,e.jsx)("span",{children:"\u662F\u5426\u4E3A\u6709\u6761\u7EB9\u7684"})]}),(0,e.jsx)("div",{children:(0,e.jsxs)(p.Z,{children:[(0,e.jsx)(R.Z,{value:E,onChange:function(n){le("#"+n.toHex())}}),(0,e.jsx)("span",{children:"\u8868\u5934\u80CC\u666F\u989C\u8272"})]})}),w?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{children:(0,e.jsxs)(p.Z,{children:[(0,e.jsx)(R.Z,{value:v[0],onChange:function(n){v[0]="#"+n.toHex(),Q(j()(v))}}),(0,e.jsx)("span",{children:"\u884C\u80CC\u666F\u989C\u8272(\u5947\u6570\u884C)"})]})}),(0,e.jsx)("div",{children:(0,e.jsxs)(p.Z,{children:[(0,e.jsx)(R.Z,{value:v[1],onChange:function(n){v[1]="#"+n.toHex(),Q(j()(v))}}),(0,e.jsx)("span",{children:"\u884C\u80CC\u666F\u989C\u8272(\u5076\u6570\u884C)"})]})})]}):(0,e.jsx)("div",{children:(0,e.jsxs)(p.Z,{children:[(0,e.jsx)(R.Z,{value:D,onChange:function(n){q("#"+n.toHex())}}),(0,e.jsx)("span",{children:"\u884C\u80CC\u666F\u989C\u8272"})]})}),(0,e.jsx)("div",{children:(0,e.jsxs)(p.Z,{children:[(0,e.jsx)(R.Z,{value:l,onChange:function(n){y("#"+n.toHex())}}),(0,e.jsx)("span",{children:"\u884C\u6587\u5B57\u989C\u8272"})]})}),(0,e.jsx)("div",{children:(0,e.jsxs)(p.Z,{children:[(0,e.jsx)(R.Z,{value:U,onChange:function(n){V("#"+n.toHex())}}),(0,e.jsx)("span",{children:"\u8868\u5934\u6587\u5B57\u989C\u8272"})]})})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"\u65F6\u95F4"}),(0,e.jsxs)(p.Z,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)(oe.Z,{value:x,type:"number",onChange:function(n){return Z(+n.target.value)}}),(0,e.jsx)("span",{children:"\u8F6E\u64AD\u65F6\u95F4\u95F4\u9694 (\u6BEB\u79D2)"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(oe.Z,{value:W,type:"number",onChange:function(n){return z(+n.target.value)}}),(0,e.jsx)("span",{children:"\u6EDA\u52A8\u52A8\u753B\u6267\u884C\u65F6\u957F (\u6BEB\u79D2)"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(oe.Z,{value:J,type:"number",onChange:function(n){return Y(+n.target.value)}}),(0,e.jsx)("span",{children:"\u5EF6\u65F6\u505C\u7559\u65F6\u957F (\u6BEB\u79D2)"})]})]})]}),(0,e.jsx)("p",{children:"\xA0"}),(0,e.jsx)(Ie,{style:{height:400},isAutoPlay:!0,duration:W,delay:J,striped:w,waitTime:x,hoverPause:!0,rowTextColor:l,headTextColor:U,headBackgroundColor:E,rowBackgroundColor:w?v:D,onClick:function(n,de){console.log(n,de)},dataSource:b,columns:[{title:"\u6392\u5E8F",specialColumn:"sort"},{title:"\u59D3\u540D",width:"450px",dataIndex:"name",align:"center",headAlign:"center",render:function(n){return(0,e.jsxs)("div",{style:{width:"100%",height:50,display:"flex",alignItems:"center"},children:[(0,e.jsx)("img",{src:"https://p3-passport.byteimg.com/img/user-avatar/09e00df42d9bfe86f3b0c7c8cdbf1c84~100x100.awebp",alt:""}),(0,e.jsx)("span",{children:n})]})}},{title:"\u5E74\u9F84",dataIndex:"age",render:function(n){return n+"\u5C81"}},{title:"\u5730\u5740",dataIndex:"address",ellipsis:!0,cursor:"pointer"},{title:"\u65E5\u671F",dataIndex:"date"}],emptyText:"\u6682\u65E0\u6570\u636E"})]})},We=Oe}}]);
