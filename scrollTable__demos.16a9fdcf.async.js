"use strict";(self.webpackChunkmuddyrain=self.webpackChunkmuddyrain||[]).push([[676],{65022:function(Oe,k,n){n.r(k),n.d(k,{default:function(){return he}});var o=n(67294),ae=n(97857),y=n.n(ae),ne=n(19632),p=n.n(ne),oe=n(5574),ue=n.n(oe),ce=n(87083),se=n(26038),le=n(69808),g=n.n(le),Je=n(73363),l={scrollTable_container:"qNr7ZcDRBkv7l3SfCHU0",head:"Zpe2B2J4YqkAsVHoynIq",head_item:"gT7h6U64W_8BAjiJsyna",wrapper:"_E4y0FaKusJur80ZSlJ4",body:"wwtwQhxZ4My3kCsgj0LE",row:"hBLf0pzLgLCFzI1LmGb4",row_item:"DBOshhHLgAAjKM5v203y","ellipsis-line":"S4NLfCrVzgcBZQgscTZV"},a=n(85893),ie=function(t,u,d){var v=t.dataIndex&&u[t.dataIndex];return t.ellipsis?(0,a.jsx)(ce.ZP,{placement:t.ellipsisPlacement||"top",content:(0,a.jsx)("div",{className:t.ellipsisClassName,children:v}),children:(0,a.jsx)("span",{className:l["ellipsis-line"],children:v})}):t.render?t.render(u[t.dataIndex],u,d):v},de=function(t){var u=t.columns,d=t.dataSource,v=t.isAutoPlay,me=v===void 0?!0:v,b=t.className,ye=b===void 0?"":b,I=t.headClassName,ge=I===void 0?"":I,H=t.rowClassName,pe=H===void 0?"":H,Z=t.headStyle,Ce=Z===void 0?{}:Z,O=t.rowStyle,we=O===void 0?{}:O,J=t.headSpacing,xe=J===void 0?[10,15]:J,E=t.rowSpacing,Se=E===void 0?[10,15]:E,W=t.headBackgroundColor,Re=W===void 0?g().blue[400]:W,Me=t.rowBackgroundColor,Y=t.striped,z=Y===void 0?!0:Y,F=t.duration,je=F===void 0?1e3:F,V=t.delay,Be=V===void 0?250:V,K=t.waitTime,Ne=K===void 0?2e3:K,Ae=t.rowScrollHeight,Q=t.hoverPause,Te=Q===void 0?!1:Q,C=t.onClick,w=t.onMouseOver,x=t.onMouseMove,S=t.onMouseLeave,$e=t.style,R=Me||(z?[g().cyan[700],g().sky[700]]:g().cyan[700]),M=(0,o.useRef)(),i=(0,o.useRef)(null),j=(0,o.useRef)(null),h=(0,o.useRef)(null),B=(0,o.useRef)(0),N=(0,o.useRef)(me),A=(0,o.useRef)(d.length),T=(0,o.useRef)([]),U=(0,o.useRef)(!1),$=(0,o.useRef)(0),Le=(0,o.useState)(d),G=ue()(Le,2),X=G[0],Pe=G[1],L=(0,o.useRef)(0),q=function(){if(h.current){var e=h.current.getBoundingClientRect(),c=e.height;$.current=c}},_=function(e){if(Array.isArray(e)){if(e.length===2)return"".concat(e[0],"px ").concat(e[1],"px");if(e.length===4)return"".concat(e[0],"px ").concat(e[1],"px ").concat(e[2],"px ").concat(e[3],"px")}return typeof e=="string"?"".concat(e):typeof e=="number"?"".concat(e,"px"):""},ke=function(){function e(He,Ze){for(var P=[],re=0;re<Ze;re++)P=[].concat(p()(P),p()(He));Pe(p()(P))}if(j.current){var c=j.current,f=c.getBoundingClientRect(),m=f.height,s=Math.ceil(m/$.current),Ie=Math.ceil(s/A.current);s>A.current&&e(X,Ie+1),q()}},De=function(){if(i.current){var e=i.current,c=e.getBoundingClientRect(),f=c.width;T.current=Array.from({length:u.length}).map(function(){return f/u.length})}},ee=function r(){N.current&&(M.current=setTimeout(function(){if(i.current&&h.current){var e=i.current;B.current+=Ae||$.current,L.current+=1,se.ZP.to(i.current.style,{duration:je/1e3,delay:Be/1e3,transform:"translateY(-".concat(B.current,"px)"),onComplete:function(){L.current<A.current||(e.style.transform="translateY(0px)",B.current=0,L.current=0),r()}})}},Ne))},be=function(e){return z?e%2===0?R[0]:R[1]:R},te=function(e){switch(e){case"left":return"flex-start";case"center":return"center";case"right":return"flex-end";default:return"flex-start"}};return(0,o.useLayoutEffect)(function(){U.current||(De(),q(),U.current=!0,ke(),ee())},[i.current,h.current]),(0,o.useEffect)(function(){return function(){clearTimeout(M.current)}},[]),(0,a.jsxs)("div",{className:"".concat(l.scrollTable_container," ").concat(ye),style:$e,onMouseOver:function(){Te&&(N.current=!1,clearTimeout(M.current))},onMouseLeave:function(){N.current=!0,ee()},children:[(0,a.jsx)("div",{className:"".concat(l.head," ").concat(ge),style:y()({backgroundColor:Re},Ce),children:u.map(function(r,e){return(0,a.jsx)("div",{className:l.head_item,style:{width:r.width||T.current[e],padding:_(xe),justifyContent:te(r.headAlign||"left")},children:r.title},e)})}),(0,a.jsx)("div",{className:l.wrapper,ref:j,children:(0,a.jsx)("div",{className:l.body,ref:i,style:{transform:"translateY(0px)"},children:X.map(function(r,e){return(0,a.jsx)("div",y()(y()({className:"".concat(l.row," ").concat(pe),style:y()({backgroundColor:be(e)},we)},e===0?{ref:h}:{}),{},{children:u.map(function(c,f){return(0,a.jsx)("div",{className:l.row_item,style:{width:c.width||T.current[f],padding:_(Se),justifyContent:te(c.align||"left"),cursor:c.cursor},onClick:function(s){C==null||C(r,e,s)},onMouseOver:function(s){w==null||w(r,e,s)},onMouseMove:function(s){x==null||x(r,e,s)},onMouseLeave:function(s){S==null||S(r,e,s)},children:ie(c,r,e)},f)})}),e)})})})]})},ve=de,fe=function(){return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(ve,{style:{height:400},isAutoPlay:!0,duration:200,waitTime:1e3,hoverPause:!0,onClick:function(u,d){console.log(u,d)},dataSource:Array.from({length:5}).map(function(t,u){return{name:"\u9648\u5B50\u6DB5"+(u+1),age:"21",address:"\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02",date:"2023-01-01 12:00:00"}}),columns:[{title:"\u59D3\u540D",width:"450px",dataIndex:"name",align:"center",headAlign:"center",render:function(){return(0,a.jsxs)("div",{style:{width:"100%",height:50,display:"flex",alignItems:"center"},children:[(0,a.jsx)("img",{src:"https://p3-passport.byteimg.com/img/user-avatar/09e00df42d9bfe86f3b0c7c8cdbf1c84~100x100.awebp",alt:""}),(0,a.jsx)("span",{children:"\u9648\u5B50\u6DB5"})]})}},{title:"\u5E74\u9F84",dataIndex:"age",render:function(u){return u+"\u5C81"}},{title:"\u5730\u5740",dataIndex:"address",ellipsis:!0,cursor:"pointer"},{title:"\u65E5\u671F",dataIndex:"date"}]})})},he=fe}}]);
