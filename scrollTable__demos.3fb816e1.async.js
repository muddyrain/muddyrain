"use strict";(self.webpackChunkmuddyrain=self.webpackChunkmuddyrain||[]).push([[676],{65022:function(Ke,xe,u){u.r(xe),u.d(xe,{default:function(){return Ee}});var $e=u(19632),y=u.n($e),Te=u(5574),i=u.n(Te),v=u(42075),Me=u(72269),j=u(34198),X=u(89847),n=u(67294),Ze=u(97857),F=u.n(Ze),Ae=u(87083),Fe=u(26038),Ne=u(69808),N=u.n(Ne),Qe=u(73363),f={scrollTable_container:"qNr7ZcDRBkv7l3SfCHU0",head:"Zpe2B2J4YqkAsVHoynIq",head_item:"gT7h6U64W_8BAjiJsyna",wrapper:"_E4y0FaKusJur80ZSlJ4",body:"wwtwQhxZ4My3kCsgj0LE",row:"hBLf0pzLgLCFzI1LmGb4",row_item:"DBOshhHLgAAjKM5v203y","ellipsis-line":"S4NLfCrVzgcBZQgscTZV"},e=u(85893),De=function(r,c,x){var C=r.dataIndex&&c[r.dataIndex];return r.ellipsis?(0,e.jsx)(Ae.ZP,{placement:r.ellipsisPlacement||"top",content:(0,e.jsx)("div",{className:r.ellipsisClassName,children:C}),children:(0,e.jsx)("span",{className:f["ellipsis-line"],children:C})}):r.render?r.render(c[r.dataIndex],c,x):C},ke=function(r){var c=r.columns,x=r.dataSource,C=r.isAutoPlay,q=C===void 0?!0:C,S=r.className,D=S===void 0?"":S,k=r.headClassName,_=k===void 0?"":k,R=r.rowClassName,H=R===void 0?"":R,L=r.headStyle,ee=L===void 0?{}:L,w=r.rowStyle,E=w===void 0?{}:w,P=r.headSpacing,te=P===void 0?[10,15]:P,B=r.rowSpacing,I=B===void 0?[10,15]:B,b=r.headBackgroundColor,re=b===void 0?N().blue[400]:b,O=r.rowBackgroundColor,d=r.headTextColor,J=d===void 0?"white":d,W=r.rowTextColor,Y=W===void 0?"white":W,$=r.striped,z=$===void 0?!0:$,V=r.duration,K=V===void 0?1e3:V,T=r.delay,ae=T===void 0?250:T,Q=r.waitTime,U=Q===void 0?2e3:Q,g=r.rowScrollHeight,G=r.hoverPause,s=G===void 0?!1:G,a=r.onClick,M=r.onMouseOver,ne=r.onMouseMove,oe=r.onMouseLeave,Pe=r.style,ue=O||(z?[N().cyan[700],N().sky[700]]:N().cyan[700]),se=(0,n.useRef)(),p=(0,n.useRef)(null),ce=(0,n.useRef)(null),Z=(0,n.useRef)(null),le=(0,n.useRef)(0),ie=(0,n.useRef)(q),de=(0,n.useRef)(x.length),he=(0,n.useRef)([]),pe=(0,n.useRef)(!1),ve=(0,n.useRef)(0),Ie=(0,n.useState)(x),je=i()(Ie,2),me=je[0],be=je[1],fe=(0,n.useRef)(0),ye=function(){if(Z.current){var t=Z.current.getBoundingClientRect(),l=t.height;ve.current=l}},Se=function(t){if(Array.isArray(t)){if(t.length===2)return"".concat(t[0],"px ").concat(t[1],"px");if(t.length===4)return"".concat(t[0],"px ").concat(t[1],"px ").concat(t[2],"px ").concat(t[3],"px")}return typeof t=="string"?"".concat(t):typeof t=="number"?"".concat(t,"px"):""},Oe=function(){function t(ze,Ve){for(var Ce=[],Be=0;Be<Ve;Be++)Ce=[].concat(y()(Ce),y()(ze));be(y()(Ce))}if(ce.current){var l=ce.current,m=l.getBoundingClientRect(),A=m.height,h=Math.ceil(A/ve.current),Ye=Math.ceil(h/de.current);h>de.current&&t(me,Ye+1),ye()}},Je=function(){if(p.current){var t=p.current,l=t.getBoundingClientRect(),m=l.width;he.current=Array.from({length:c.length}).map(function(){return m/c.length})}},Re=function o(){ie.current&&(se.current=setTimeout(function(){if(p.current&&Z.current){var t=p.current;le.current+=g||ve.current,fe.current+=1,Fe.ZP.to(p.current.style,{duration:K/1e3,delay:ae/1e3,transform:"translateY(-".concat(le.current,"px)"),onComplete:function(){fe.current<de.current||(t.style.transform="translateY(0px)",le.current=0,fe.current=0),o()}})}},U))},We=function(t){return z?t%2===0?ue[0]:ue[1]:ue},we=function(t){switch(t){case"left":return"flex-start";case"center":return"center";case"right":return"flex-end";default:return"flex-start"}};return(0,n.useLayoutEffect)(function(){pe.current||(Je(),ye(),pe.current=!0,Oe(),Re())},[p.current,Z.current]),(0,n.useEffect)(function(){return function(){clearTimeout(se.current)}},[]),(0,e.jsxs)("div",{className:"".concat(f.scrollTable_container," ").concat(D),style:Pe,onMouseOver:function(){s&&(ie.current=!1,clearTimeout(se.current))},onMouseLeave:function(){ie.current=!0,Re()},children:[(0,e.jsx)("div",{className:"".concat(f.head," ").concat(_),style:F()({backgroundColor:re},ee),children:c.map(function(o,t){return(0,e.jsx)("div",{className:f.head_item,style:{width:o.width||he.current[t],padding:Se(te),justifyContent:we(o.headAlign||"left"),color:J},children:o.title},t)})}),(0,e.jsx)("div",{className:f.wrapper,ref:ce,children:(0,e.jsx)("div",{className:f.body,ref:p,style:{transform:"translateY(0px)"},children:me.map(function(o,t){return(0,e.jsx)("div",F()(F()({className:"".concat(f.row," ").concat(H),style:F()({backgroundColor:We(t)},E)},t===0?{ref:Z}:{}),{},{children:c.map(function(l,m){return(0,e.jsx)("div",{className:f.row_item,style:{width:l.width||he.current[m],padding:Se(I),justifyContent:we(l.align||"left"),cursor:l.cursor,color:Y},onClick:function(h){a==null||a(o,t,h)},onMouseOver:function(h){M==null||M(o,t,h)},onMouseMove:function(h){ne==null||ne(o,t,h)},onMouseLeave:function(h){oe==null||oe(o,t,h)},children:De(l,o,t)},m)})}),t)})})})]})},He=ke,Le=function(){var r=n.useState("#ffffff"),c=i()(r,2),x=c[0],C=c[1],q=n.useState(2e3),S=i()(q,2),D=S[0],k=S[1],_=n.useState(1e3),R=i()(_,2),H=R[0],L=R[1],ee=n.useState(250),w=i()(ee,2),E=w[0],P=w[1],te=n.useState("#ffffff"),B=i()(te,2),I=B[0],b=B[1],re=n.useState(["#0e7490","#0369a1"]),O=i()(re,2),d=O[0],J=O[1],W=n.useState("#0e7490"),Y=i()(W,2),$=Y[0],z=Y[1],V=n.useState("#60a5fa"),K=i()(V,2),T=K[0],ae=K[1],Q=n.useState(!0),U=i()(Q,2),g=U[0],G=U[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"\u989C\u8272"}),(0,e.jsxs)(v.Z,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)(Me.Z,{checked:g,onChange:function(){return G(!g)}}),(0,e.jsx)("span",{children:"\u662F\u5426\u4E3A\u6709\u6761\u7EB9\u7684"})]}),(0,e.jsx)("div",{children:(0,e.jsxs)(v.Z,{children:[(0,e.jsx)(j.Z,{value:T,onChange:function(a){ae("#"+a.toHex())}}),(0,e.jsx)("span",{children:"\u8868\u5934\u80CC\u666F\u989C\u8272"})]})}),g?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{children:(0,e.jsxs)(v.Z,{children:[(0,e.jsx)(j.Z,{value:d[0],onChange:function(a){d[0]="#"+a.toHex(),J(y()(d))}}),(0,e.jsx)("span",{children:"\u884C\u80CC\u666F\u989C\u8272(\u5947\u6570\u884C)"})]})}),(0,e.jsx)("div",{children:(0,e.jsxs)(v.Z,{children:[(0,e.jsx)(j.Z,{value:d[1],onChange:function(a){d[1]="#"+a.toHex(),J(y()(d))}}),(0,e.jsx)("span",{children:"\u884C\u80CC\u666F\u989C\u8272(\u5076\u6570\u884C)"})]})})]}):(0,e.jsx)("div",{children:(0,e.jsxs)(v.Z,{children:[(0,e.jsx)(j.Z,{value:$,onChange:function(a){z("#"+a.toHex())}}),(0,e.jsx)("span",{children:"\u884C\u80CC\u666F\u989C\u8272"})]})}),(0,e.jsx)("div",{children:(0,e.jsxs)(v.Z,{children:[(0,e.jsx)(j.Z,{value:x,onChange:function(a){C("#"+a.toHex())}}),(0,e.jsx)("span",{children:"\u884C\u6587\u5B57\u989C\u8272"})]})}),(0,e.jsx)("div",{children:(0,e.jsxs)(v.Z,{children:[(0,e.jsx)(j.Z,{value:I,onChange:function(a){b("#"+a.toHex())}}),(0,e.jsx)("span",{children:"\u8868\u5934\u6587\u5B57\u989C\u8272"})]})})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"\u65F6\u95F4"}),(0,e.jsxs)(v.Z,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)(X.Z,{value:D,type:"number",onChange:function(a){return k(+a.target.value)}}),(0,e.jsx)("span",{children:"\u8F6E\u64AD\u65F6\u95F4\u95F4\u9694 (\u6BEB\u79D2)"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(X.Z,{value:H,type:"number",onChange:function(a){return L(+a.target.value)}}),(0,e.jsx)("span",{children:"\u6EDA\u52A8\u52A8\u753B\u6267\u884C\u65F6\u957F (\u6BEB\u79D2)"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(X.Z,{value:E,type:"number",onChange:function(a){return P(+a.target.value)}}),(0,e.jsx)("span",{children:"\u5EF6\u65F6\u505C\u7559\u65F6\u957F (\u6BEB\u79D2)"})]})]})]}),(0,e.jsx)("p",{children:"\xA0"}),(0,e.jsx)(He,{style:{height:400},isAutoPlay:!0,duration:H,delay:E,striped:g,waitTime:D,hoverPause:!0,rowTextColor:x,headTextColor:I,headBackgroundColor:T,rowBackgroundColor:g?d:$,onClick:function(a,M){console.log(a,M)},dataSource:Array.from({length:5}).map(function(s,a){return{name:"\u9648\u5B50\u6DB5"+(a+1),age:"21",address:"\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02",date:"2023-01-01 12:00:00"}}),columns:[{title:"\u59D3\u540D",width:"450px",dataIndex:"name",align:"center",headAlign:"center",render:function(){return(0,e.jsxs)("div",{style:{width:"100%",height:50,display:"flex",alignItems:"center"},children:[(0,e.jsx)("img",{src:"https://p3-passport.byteimg.com/img/user-avatar/09e00df42d9bfe86f3b0c7c8cdbf1c84~100x100.awebp",alt:""}),(0,e.jsx)("span",{children:"\u9648\u5B50\u6DB5"})]})}},{title:"\u5E74\u9F84",dataIndex:"age",render:function(a){return a+"\u5C81"}},{title:"\u5730\u5740",dataIndex:"address",ellipsis:!0,cursor:"pointer"},{title:"\u65E5\u671F",dataIndex:"date"}]})]})},Ee=Le}}]);
