"use strict";(self.webpackChunkmuddyrain=self.webpackChunkmuddyrain||[]).push([[676],{65022:function(Ke,ge,u){u.r(ge),u.d(ge,{default:function(){return Pe}});var Te=u(19632),R=u.n(Te),Me=u(5574),l=u.n(Me),m=u(42075),Ze=u(72269),S=u(34198),ee=u(89847),n=u(67294),Ae=u(97857),N=u.n(Ae),Fe=u(87083),Ne=u(26038),De=u(69808),D=u.n(De),Qe=u(73363),f={scrollTable_container:"qNr7ZcDRBkv7l3SfCHU0",head:"Zpe2B2J4YqkAsVHoynIq",head_item:"gT7h6U64W_8BAjiJsyna",wrapper:"_E4y0FaKusJur80ZSlJ4",body:"wwtwQhxZ4My3kCsgj0LE",row:"hBLf0pzLgLCFzI1LmGb4",row_item:"DBOshhHLgAAjKM5v203y","ellipsis-line":"S4NLfCrVzgcBZQgscTZV",tt:"s9buWbDp4U3F59c9SYBH"},e=u(85893),He=function(r,i,j){var C=r.dataIndex&&i[r.dataIndex],x=r.render?r.render(C,i,j):C;if(r.ellipsis){var g;return(0,e.jsx)(Fe.ZP,{placement:r.ellipsisPlacement||"top",content:(0,e.jsx)("div",{className:r.ellipsisClassName,children:C}),children:r.render?n.cloneElement(x,{className:"".concat(f["ellipsis-line"]," ").concat(x==null||(g=x.props)===null||g===void 0?void 0:g.className)}):(0,e.jsx)("span",{className:f["ellipsis-line"],children:C})})}else return x},ke=function(r){var i=r.columns,j=r.dataSource,C=r.isAutoPlay,x=C===void 0?!0:C,g=r.className,H=g===void 0?"":g,k=r.headClassName,te=k===void 0?"":k,w=r.rowClassName,E=w===void 0?"":w,L=r.headStyle,re=L===void 0?{}:L,B=r.rowStyle,P=B===void 0?{}:B,b=r.headSpacing,ae=b===void 0?[10,15]:b,$=r.rowSpacing,I=$===void 0?[10,15]:$,O=r.headBackgroundColor,ne=O===void 0?D().blue[400]:O,J=r.rowBackgroundColor,d=r.headTextColor,W=d===void 0?"white":d,Y=r.rowTextColor,z=Y===void 0?"white":Y,T=r.striped,U=T===void 0?!0:T,V=r.duration,K=V===void 0?1e3:V,M=r.delay,oe=M===void 0?250:M,Q=r.waitTime,G=Q===void 0?2e3:Q,y=r.rowScrollHeight,X=r.hoverPause,s=X===void 0?!1:X,a=r.onClick,Z=r.onMouseOver,ue=r.onMouseMove,se=r.onMouseLeave,be=r.style,ce=J||(U?[D().cyan[700],D().sky[700]]:D().cyan[700]),A=(0,n.useRef)(),h=(0,n.useRef)(null),le=(0,n.useRef)(null),ie=(0,n.useRef)(null),de=(0,n.useRef)(0),he=(0,n.useRef)(x),q=(0,n.useRef)(j.length),pe=(0,n.useRef)([]),ve=(0,n.useRef)([]),je=(0,n.useRef)(!1),fe=(0,n.useRef)(0),Ie=(0,n.useState)(j),ye=l()(Ie,2),Se=ye[0],Oe=ye[1],_=(0,n.useRef)(0),Ce=function(){if(h.current){var t=pe.current[_.current],c=t.getBoundingClientRect(),p=c.height;fe.current=p}},Re=function(t){if(Array.isArray(t)){if(t.length===2)return"".concat(t[0],"px ").concat(t[1],"px");if(t.length===4)return"".concat(t[0],"px ").concat(t[1],"px ").concat(t[2],"px ").concat(t[3],"px")}return typeof t=="string"?"".concat(t):typeof t=="number"?"".concat(t,"px"):""},Je=function(){function t(Ue,Ve){for(var xe=[],$e=0;$e<Ve;$e++)xe=[].concat(R()(xe),R()(Ue));Oe(R()(xe))}if(le.current){var c=le.current,p=c.getBoundingClientRect(),F=p.height,v=Math.ceil(F/fe.current),ze=Math.ceil(v/q.current);v>q.current&&t(Se,ze+1),Ce()}},We=function(){if(h.current){var t=h.current,c=t.getBoundingClientRect(),p=c.width;ve.current=Array.from({length:i.length}).map(function(){return p/i.length})}},we=function o(){he.current&&(A.current&&clearTimeout(A.current),A.current=setTimeout(function(){if(h.current&&ie.current){var t=h.current;Ce(),de.current+=y||fe.current,_.current+=1,Ne.ZP.to(h.current.style,{duration:K/1e3,delay:oe/1e3,transform:"translateY(-".concat(de.current,"px)"),onComplete:function(){_.current<q.current||(t.style.transform="translateY(0px)",de.current=0,_.current=0),o()}})}},G))},Ye=function(t){return U?t%2===0?ce[0]:ce[1]:ce},Be=function(t){switch(t){case"left":return"flex-start";case"center":return"center";case"right":return"flex-end";default:return"flex-start"}};return(0,n.useLayoutEffect)(function(){je.current||h.current&&(We(),pe.current=Array.from(h.current.children).slice(0,q.current),Ce(),je.current=!0,Je(),we())},[h.current,ie.current]),(0,n.useEffect)(function(){return function(){clearTimeout(A.current)}},[]),(0,e.jsxs)("div",{className:"".concat(f.scrollTable_container," ").concat(H),style:be,onMouseOver:function(){s&&(he.current=!1,clearTimeout(A.current))},onMouseLeave:function(){he.current=!0,we()},children:[(0,e.jsx)("div",{className:"".concat(f.head," ").concat(te),style:N()({backgroundColor:ne},re),children:i.map(function(o,t){return(0,e.jsx)("div",{className:f.head_item,style:{width:o.width||ve.current[t],padding:Re(ae),justifyContent:Be(o.headAlign||"left"),color:W},children:o.title},t)})}),(0,e.jsx)("div",{className:f.wrapper,ref:le,children:(0,e.jsx)("div",{className:f.body,ref:h,style:{transform:"translateY(0px)"},children:Se.map(function(o,t){return(0,e.jsx)("div",N()(N()({className:"".concat(f.row," ").concat(E),style:N()({backgroundColor:Ye(t)},P)},t===0?{ref:ie}:{}),{},{children:i.map(function(c,p){return(0,e.jsx)("div",{className:f.row_item,style:{width:c.width||ve.current[p],padding:Re(I),justifyContent:Be(c.align||"left"),cursor:c.cursor,color:z},onClick:function(v){a==null||a(o,t,v)},onMouseOver:function(v){Z==null||Z(o,t,v)},onMouseMove:function(v){ue==null||ue(o,t,v)},onMouseLeave:function(v){se==null||se(o,t,v)},children:He(c,o,t)},p)})}),t)})})})]})},Ee=ke,Le=function(){var r=n.useState("#ffffff"),i=l()(r,2),j=i[0],C=i[1],x=n.useState(2e3),g=l()(x,2),H=g[0],k=g[1],te=n.useState(1e3),w=l()(te,2),E=w[0],L=w[1],re=n.useState(250),B=l()(re,2),P=B[0],b=B[1],ae=n.useState("#ffffff"),$=l()(ae,2),I=$[0],O=$[1],ne=n.useState(["#0e7490","#0369a1"]),J=l()(ne,2),d=J[0],W=J[1],Y=n.useState("#0e7490"),z=l()(Y,2),T=z[0],U=z[1],V=n.useState("#60a5fa"),K=l()(V,2),M=K[0],oe=K[1],Q=n.useState(!0),G=l()(Q,2),y=G[0],X=G[1];return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"\u989C\u8272"}),(0,e.jsxs)(m.Z,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)(Ze.Z,{checked:y,onChange:function(){return X(!y)}}),(0,e.jsx)("span",{children:"\u662F\u5426\u4E3A\u6709\u6761\u7EB9\u7684"})]}),(0,e.jsx)("div",{children:(0,e.jsxs)(m.Z,{children:[(0,e.jsx)(S.Z,{value:M,onChange:function(a){oe("#"+a.toHex())}}),(0,e.jsx)("span",{children:"\u8868\u5934\u80CC\u666F\u989C\u8272"})]})}),y?(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{children:(0,e.jsxs)(m.Z,{children:[(0,e.jsx)(S.Z,{value:d[0],onChange:function(a){d[0]="#"+a.toHex(),W(R()(d))}}),(0,e.jsx)("span",{children:"\u884C\u80CC\u666F\u989C\u8272(\u5947\u6570\u884C)"})]})}),(0,e.jsx)("div",{children:(0,e.jsxs)(m.Z,{children:[(0,e.jsx)(S.Z,{value:d[1],onChange:function(a){d[1]="#"+a.toHex(),W(R()(d))}}),(0,e.jsx)("span",{children:"\u884C\u80CC\u666F\u989C\u8272(\u5076\u6570\u884C)"})]})})]}):(0,e.jsx)("div",{children:(0,e.jsxs)(m.Z,{children:[(0,e.jsx)(S.Z,{value:T,onChange:function(a){U("#"+a.toHex())}}),(0,e.jsx)("span",{children:"\u884C\u80CC\u666F\u989C\u8272"})]})}),(0,e.jsx)("div",{children:(0,e.jsxs)(m.Z,{children:[(0,e.jsx)(S.Z,{value:j,onChange:function(a){C("#"+a.toHex())}}),(0,e.jsx)("span",{children:"\u884C\u6587\u5B57\u989C\u8272"})]})}),(0,e.jsx)("div",{children:(0,e.jsxs)(m.Z,{children:[(0,e.jsx)(S.Z,{value:I,onChange:function(a){O("#"+a.toHex())}}),(0,e.jsx)("span",{children:"\u8868\u5934\u6587\u5B57\u989C\u8272"})]})})]})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)("h3",{children:"\u65F6\u95F4"}),(0,e.jsxs)(m.Z,{children:[(0,e.jsxs)("div",{children:[(0,e.jsx)(ee.Z,{value:H,type:"number",onChange:function(a){return k(+a.target.value)}}),(0,e.jsx)("span",{children:"\u8F6E\u64AD\u65F6\u95F4\u95F4\u9694 (\u6BEB\u79D2)"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(ee.Z,{value:E,type:"number",onChange:function(a){return L(+a.target.value)}}),(0,e.jsx)("span",{children:"\u6EDA\u52A8\u52A8\u753B\u6267\u884C\u65F6\u957F (\u6BEB\u79D2)"})]}),(0,e.jsxs)("div",{children:[(0,e.jsx)(ee.Z,{value:P,type:"number",onChange:function(a){return b(+a.target.value)}}),(0,e.jsx)("span",{children:"\u5EF6\u65F6\u505C\u7559\u65F6\u957F (\u6BEB\u79D2)"})]})]})]}),(0,e.jsx)("p",{children:"\xA0"}),(0,e.jsx)(Ee,{style:{height:400},isAutoPlay:!0,duration:E,delay:P,striped:y,waitTime:H,hoverPause:!0,rowTextColor:j,headTextColor:I,headBackgroundColor:M,rowBackgroundColor:y?d:T,onClick:function(a,Z){console.log(a,Z)},dataSource:Array.from({length:5}).map(function(s,a){return{name:"\u9648\u5B50\u6DB5"+(a+1),age:"21",address:"\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02",date:"2023-01-01 12:00:00"}}),columns:[{title:"\u59D3\u540D",width:"450px",dataIndex:"name",align:"center",headAlign:"center",render:function(a){return(0,e.jsxs)("div",{style:{width:"100%",height:50,display:"flex",alignItems:"center"},children:[(0,e.jsx)("img",{src:"https://p3-passport.byteimg.com/img/user-avatar/09e00df42d9bfe86f3b0c7c8cdbf1c84~100x100.awebp",alt:""}),(0,e.jsx)("span",{children:a})]})}},{title:"\u5E74\u9F84",dataIndex:"age",render:function(a){return a+"\u5C81"}},{title:"\u5730\u5740",dataIndex:"address",ellipsis:!0,cursor:"pointer"},{title:"\u65E5\u671F",dataIndex:"date"}]})]})},Pe=Le}}]);
