"use strict";(self.webpackChunkmuddyrain=self.webpackChunkmuddyrain||[]).push([[172],{79907:function(m,o,t){t.r(o),t.d(o,{demos:function(){return P}});var T=t(15009),p=t.n(T),B=t(99289),f=t.n(B),R=t(67294),Y=t(30792),P={"scrolltable-demo-demo1":{component:R.memo(R.lazy(function(){return t.e(676).then(t.bind(t,23842))})),asset:{type:"BLOCK",id:"scrolltable-demo-demo1",refAtomIds:["scrollTable"],dependencies:{"index.tsx":{type:"FILE",value:t(38281).Z},antd:{type:"NPM",value:"5.19.2"},react:{type:"NPM",value:"18.3.1"},"...tsx":{type:"FILE",value:t(26096).Z},"@tippyjs/react":{type:"NPM",value:"4.2.6"},gsap:{type:"NPM",value:"3.12.5"},tailwindcss:{type:"NPM",value:"3.4.5"},"tippy.js":{type:"NPM",value:"6.3.7"},"./type.ts":{type:"FILE",value:t(67931).Z},"./index.module.less":{type:"FILE",value:t(32856).Z}},entry:"index.tsx",description:"demo"},context:{antd:t(93989),react:t(67294),"...tsx":t(64660),"@tippyjs/react":t(87083),gsap:t(26038),"tailwindcss/colors":t(69808),"tippy.js/dist/tippy.css":t(73363),"./type.ts":t(76412),"./index.module.less":t(26169)},renderOpts:{compile:function(){var D=f()(p()().mark(function k(){var I,X=arguments;return p()().wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,t.e(335).then(t.bind(t,37335));case 2:return l.abrupt("return",(I=l.sent).default.apply(I,X));case 3:case"end":return l.stop()}},k)}));function d(){return D.apply(this,arguments)}return d}()}}}},64660:function(m,o,t){t.r(o);var T=t(97857),p=t.n(T),B=t(19632),f=t.n(B),R=t(5574),Y=t.n(R),P=t(87083),D=t(26038),d=t(67294),k=t(69808),I=t.n(k),X=t(73363),s=t(26169),l=t(85893),yt=function(e,x,c){var g=function(b){return e.render?e.render(b,x,c):b},y=e.dataIndex&&x[e.dataIndex];if(e.specialColumn==="sort")return g(c+1);if(e.ellipsis){var h,C=g(y);return(0,l.jsx)(P.default,{placement:e.ellipsisPlacement||"top",content:(0,l.jsx)("div",{className:e.ellipsisClassName,children:y}),children:e.render?d.cloneElement(C,{className:"".concat(s.default["ellipsis-line"]," ").concat(C==null||(h=C.props)===null||h===void 0?void 0:h.className)}):(0,l.jsx)("span",{className:s.default["ellipsis-line"],children:y})})}else return g(y)},ht=function(e){var x=e.columns,c=e.dataSource,g=e.isAutoPlay,y=g===void 0?!0:g,h=e.className,C=h===void 0?"":h,A=e.headClassName,b=A===void 0?"":A,G=e.rowClassName,_t=G===void 0?"":G,V=e.headStyle,wt=V===void 0?{}:V,Q=e.rowStyle,St=Q===void 0?{}:Q,q=e.headSpacing,Tt=q===void 0?[10,15]:q,tt=e.rowSpacing,Rt=tt===void 0?[10,15]:tt,nt=e.headBackgroundColor,bt=nt===void 0?I().blue[400]:nt,Mt=e.rowBackgroundColor,et=e.headTextColor,Et=et===void 0?"white":et,at=e.rowTextColor,Bt=at===void 0?"white":at,rt=e.striped,ot=rt===void 0?!0:rt,dt=e.duration,Pt=dt===void 0?1e3:dt,lt=e.delay,Dt=lt===void 0?250:lt,ut=e.waitTime,N=ut===void 0?2e3:ut,kt=e.rowScrollHeight,ct=e.hoverPause,At=ct===void 0?!1:ct,L=e.onClick,O=e.onMouseOver,H=e.onMouseMove,j=e.onMouseLeave,Nt=e.style,Lt=e.emptyText,Ot=Mt||(ot?[I().cyan[700],I().sky[700]]:I().cyan[700]),M=(0,d.useRef)(),u=(0,d.useRef)(null),W=(0,d.useRef)(null),$=(0,d.useRef)(null),K=(0,d.useRef)(0),U=(0,d.useRef)(y),_=(0,d.useRef)(c.length),st=(0,d.useRef)([]),J=(0,d.useRef)([]),Z=(0,d.useRef)(0),Ht=(0,d.useState)(c),it=Y()(Ht,2),pt=it[0],It=it[1],E=(0,d.useRef)(0),z=function(){if(u.current){var n=st.current[E.current];if(n){var r=n.getBoundingClientRect(),v=r.height;Z.current=v}}},vt=function(n){if(Array.isArray(n)){if(n.length===2)return"".concat(n[0],"px ").concat(n[1],"px");if(n.length===4)return"".concat(n[0],"px ").concat(n[1],"px ").concat(n[2],"px ").concat(n[3],"px")}return typeof n=="string"?"".concat(n):typeof n=="number"?"".concat(n,"px"):""},jt=function(){function n(Jt,Zt){for(var F=[],gt=0;gt<Zt;gt++)F=[].concat(f()(F),f()(Jt));It(function(){return f()(F)})}if(W.current){var r=W.current,v=r.getBoundingClientRect(),S=v.height,i=Math.ceil(S/Z.current),Ut=Math.ceil(i/_.current);i>_.current?n(c,Ut+1):n(c,2),z()}},mt=function(){if(u.current){var n=u.current,r=n.getBoundingClientRect(),v=r.width;J.current=Array.from({length:x.length}).map(function(){return v/x.length})}},w=function(){clearTimeout(M.current),M.current=void 0},Wt=function(n){if(u.current&&$.current){var r=u.current;w(),z(),K.current+=kt||Z.current,E.current+=1,D.default.to(u.current.style,{duration:Pt/1e3,delay:Dt/1e3,transform:"translateY(-".concat(K.current,"px)"),onComplete:function(){E.current<_.current||(r.style.transform="translateY(0px)",K.current=0,E.current=0),n()}})}},xt=function a(){U.current&&(M.current&&w(),M.current=setTimeout(function(){Wt(a)},N))},$t=function(n){var r=Ot;return ot?(Array.isArray(r)&&r.length===2||(console.warn("`ScrollTable` \u5982\u679C\u8BBE\u7F6E\u4E86 `striped` \u4E3A\u6761\u7EB9\u72B6,\u90A3\u4E48\u53EA\u652F\u6301\u4E24\u79CD\u989C\u8272,\u4E3A\u4FDD\u8BC1\u6E32\u67D3\u6548\u679C,\u8BF7\u4F7F\u7528\u4E24\u79CD\u989C\u8272\u6570\u7EC4[color,color]"),r=[I().cyan[700],I().sky[700]]),n%2===0?r[0]:r[1]):Array.isArray(r)?(console.warn("`ScrollTable` \u5F53\u524D\u72B6\u6001\u4E3A\u6B63\u5E38\u989C\u8272,\u4EC5\u652F\u63011\u79CD\u989C\u8272,\u4E3A\u4FDD\u8BC1\u6E32\u67D3\u6548\u679C,\u8BF7\u4F7F\u75281\u79CD\u989C\u8272-color"),r[0]):r},ft=function(n){switch(n){case"left":return"flex-start";case"center":return"center";case"right":return"flex-end";default:return"flex-start"}},Kt=function(){mt(),window.addEventListener("resize",function(){mt()})};return(0,d.useEffect)(function(){if(N<1e3)throw new Error("`ScrollTable` waitTime \u6700\u5C0F\u4E3A1000\u6BEB\u79D2")},[N]),(0,d.useEffect)(function(){var a;if(u.current&&c.length){w(),_.current=c.length,It(function(){return f()(c)});var n=function(){u.current&&(st.current=Array.from(u.current.children).slice(0,_.current),z(),jt(),xt())};(a=u.current.children)!==null&&a!==void 0&&a.length?(w(),n()):new MutationObserver(function(r){u.current&&r.length&&n()}).observe(u.current,{childList:!0})}},[u,c]),(0,d.useLayoutEffect)(function(){Kt()},[$.current]),(0,l.jsxs)("div",{className:"".concat(s.default.scrollTable_container," ").concat(C),style:Nt,onMouseOver:function(){At&&(w(),U.current=!1)},onMouseLeave:function(){U.current=!0,xt()},children:[(0,l.jsx)("div",{className:"".concat(s.default.head," ").concat(b),style:p()({backgroundColor:bt},wt),children:x.map(function(a,n){return(0,l.jsx)("div",{className:s.default.head_item,style:{width:a.width||J.current[n],padding:vt(Tt),justifyContent:ft(a.headAlign||"left"),color:Et},children:a.title},n)})}),(0,l.jsx)("div",{className:s.default.wrapper,ref:W,children:(0,l.jsx)("div",{className:s.default.body,ref:u,style:{transform:"translateY(0px)"},children:pt.length?pt.map(function(a,n){return(0,l.jsx)("div",p()(p()({className:"".concat(s.default.row," ").concat(_t),style:p()({backgroundColor:$t(n)},St)},n===0?{ref:$}:{}),{},{children:x.map(function(r,v){return(0,l.jsx)("div",{className:s.default.row_item,style:{width:r.width||J.current[v],padding:vt(Rt),justifyContent:ft(r.align||"left"),cursor:r.cursor,color:Bt},onClick:function(i){L==null||L(a,n,i)},onMouseOver:function(i){O==null||O(a,n,i)},onMouseMove:function(i){H==null||H(a,n,i)},onMouseLeave:function(i){j==null||j(a,n,i)},children:yt(r,a,n%_.current)},v)})}),n)}):Lt})})]})};o.default=ht},76412:function(m,o,t){t.r(o)},26169:function(m,o,t){t.r(o),o.default={scrollTable_container:"qNr7ZcDRBkv7l3SfCHU0",head:"Zpe2B2J4YqkAsVHoynIq",head_item:"gT7h6U64W_8BAjiJsyna",wrapper:"_E4y0FaKusJur80ZSlJ4",body:"wwtwQhxZ4My3kCsgj0LE",row:"hBLf0pzLgLCFzI1LmGb4",row_item:"DBOshhHLgAAjKM5v203y","ellipsis-line":"S4NLfCrVzgcBZQgscTZV",tt:"s9buWbDp4U3F59c9SYBH"}},12115:function(m,o,t){t.r(o),t.d(o,{texts:function(){return p}});var T=t(30792);const p=[{value:`<ScrollTable
  style={{ height: 400 }}
  isAutoPlay={true}
  duration={200}
  waitTime={1000}
  hoverPause={true}
  onClick={(record, index) => {
    console.log(record, index);
  }}
  dataSource={Array.from({ length: 5 }).map((_, index) => ({
    name: '\u5F20\u4E09' + (index + 1),
    age: '21',
    address: '\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02',
    date: '2023-01-01 12:00:00',
  }))}
  columns={[
    {
      title: '\u59D3\u540D',
      width: '450px',
      dataIndex: 'name',
      align: 'center',
      headAlign: 'center',
      render: () => {
        return (
          <div
            style={{
              width: '100%',
              height: 50,
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <img
              src="https://p3-passport.byteimg.com/img/user-avatar/09e00df42d9bfe86f3b0c7c8cdbf1c84~100x100.awebp"
              alt=""
            />
            <span>\u5F20\u4E09</span>
          </div>
        );
      },
    },
    {
      title: '\u5E74\u9F84',
      dataIndex: 'age',
      render(text) {
        return text + '\u5C81';
      },
    },
    {
      title: '\u5730\u5740',
      dataIndex: 'address',
      ellipsis: true,
      cursor: 'pointer',
    },
    {
      title: '\u65E5\u671F',
      dataIndex: 'date',
    },
  ]}
/>
`,paraId:0,tocIndex:1},{value:"\u53C2\u6570",paraId:1,tocIndex:2},{value:"\u8BF4\u660E",paraId:1,tocIndex:2},{value:"\u7C7B\u578B",paraId:1,tocIndex:2},{value:"\u63CF\u8FF0\u4FE1\u606F",paraId:1,tocIndex:2},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:2},{value:"columns",paraId:1,tocIndex:2},{value:"\u8868\u683C\u5217\u7684\u914D\u7F6E\u63CF\u8FF0\uFF0C\u5177\u4F53\u9879\u89C1\u4E0B\u8868",paraId:1,tocIndex:2},{value:"ColumnType",paraId:2,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"className",paraId:1,tocIndex:2},{value:"\u7C7B\u540D",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"''",paraId:1,tocIndex:2},{value:"style",paraId:1,tocIndex:2},{value:"\u6837\u5F0F",paraId:1,tocIndex:2},{value:"React.CSSProperties",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"{}",paraId:1,tocIndex:2},{value:"headClassName",paraId:1,tocIndex:2},{value:"\u8868\u5934\u5BB9\u5668\u7C7B\u540D",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"''",paraId:1,tocIndex:2},{value:"rowClassName",paraId:1,tocIndex:2},{value:"\u884C\u5BB9\u5668\u7C7B\u540D",paraId:1,tocIndex:2},{value:"string",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"''",paraId:1,tocIndex:2},{value:"emptyText",paraId:1,tocIndex:2},{value:"\u7A7A\u767D\u5185\u5BB9",paraId:1,tocIndex:2},{value:"React.ReactNode | JSX.Element",paraId:1,tocIndex:2},{value:"\u6570\u636E\u4E3A\u7A7A\u663E\u793A\u5185\u5BB9",paraId:1,tocIndex:2},{value:"''",paraId:1,tocIndex:2},{value:"headStyle",paraId:1,tocIndex:2},{value:"\u8868\u5934\u5BB9\u5668\u6837\u5F0F",paraId:1,tocIndex:2},{value:"React.CSSProperties",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"{}",paraId:1,tocIndex:2},{value:"rowStyle",paraId:1,tocIndex:2},{value:"\u884C\u5BB9\u5668\u6837\u5F0F",paraId:1,tocIndex:2},{value:"React.CSSProperties",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"{}",paraId:1,tocIndex:2},{value:"isAutoPlay",paraId:1,tocIndex:2},{value:"\u662F\u5426\u81EA\u52A8\u64AD\u653E",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"true",paraId:1,tocIndex:2},{value:"headSpacing",paraId:1,tocIndex:2},{value:"\u8868\u5934\u6BCF\u5217\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"SpacingType",paraId:3,tocIndex:2},{value:"\u5185\u7528\u4E8E padding \u5C5E\u6027",paraId:1,tocIndex:2},{value:"[10,15]",paraId:1,tocIndex:2},{value:"headSpacing",paraId:1,tocIndex:2},{value:"\u8868\u5934\u6BCF\u5217\u95F4\u8DDD",paraId:1,tocIndex:2},{value:"SpacingType",paraId:4,tocIndex:2},{value:"\u5185\u7528\u4E8E padding \u5C5E\u6027",paraId:1,tocIndex:2},{value:"[10,15]",paraId:1,tocIndex:2},{value:"headBackgroundColor",paraId:1,tocIndex:2},{value:"\u8868\u5934\u80CC\u666F\u989C\u8272",paraId:1,tocIndex:2},{value:"backgroundColor(string) | backgroundColor(string)[] ",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"blue-400 (tailwind \u989C\u8272)",paraId:1,tocIndex:2},{value:"rowBackgroundColor",paraId:1,tocIndex:2},{value:"\u884C\u80CC\u666F\u989C\u8272",paraId:1,tocIndex:2},{value:"backgroundColor(string)",paraId:1,tocIndex:2},{value:"\u6709\u6761\u7EB9\u7684:   [cyan-700,sky-700][\u5947\u6570,\u5076\u6570]",paraId:1,tocIndex:2},{value:"cyan-700 (tailwind \u989C\u8272)",paraId:1,tocIndex:2},{value:"headTextColor",paraId:1,tocIndex:2},{value:"\u8868\u5934\u6587\u5B57\u989C\u8272",paraId:1,tocIndex:2},{value:"color(string)",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"white",paraId:1,tocIndex:2},{value:"rowTextColor",paraId:1,tocIndex:2},{value:"\u884C\u6587\u5B57\u989C\u8272",paraId:1,tocIndex:2},{value:"color(string)",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"white",paraId:1,tocIndex:2},{value:"striped",paraId:1,tocIndex:2},{value:"\u6709\u6761\u7EB9\u7684",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"true",paraId:1,tocIndex:2},{value:"duration",paraId:1,tocIndex:2},{value:"\u6EDA\u52A8\u52A8\u753B\u6267\u884C\u65F6\u957F (\u6BEB\u79D2)",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"1000",paraId:1,tocIndex:2},{value:"delay",paraId:1,tocIndex:2},{value:"\u5EF6\u65F6\u505C\u7559\u65F6\u957F (\u6BEB\u79D2)",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"250",paraId:1,tocIndex:2},{value:"waitTime",paraId:1,tocIndex:2},{value:"\u8F6E\u64AD\u65F6\u95F4\u95F4\u9694 (\u6BEB\u79D2)",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"2000",paraId:1,tocIndex:2},{value:"rowScrollHeight",paraId:1,tocIndex:2},{value:"\u6BCF\u884C\u6EDA\u52A8\u884C\u9AD8",paraId:1,tocIndex:2},{value:"number",paraId:1,tocIndex:2},{value:"\u6839\u636E\u7B2C\u4E00\u884C\u6570\u636E\u81EA\u52A8\u8BA1\u7B97 \u5982\u679C\u6DFB\u52A0\u5219\u8986\u76D6",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"hoverPause",paraId:1,tocIndex:2},{value:"\u60AC\u6D6E\u6682\u505C",paraId:1,tocIndex:2},{value:"boolean",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"false",paraId:1,tocIndex:2},{value:"onClick",paraId:1,tocIndex:2},{value:"\u70B9\u51FB\u4E8B\u4EF6",paraId:1,tocIndex:2},{value:"MouseEventHandler",paraId:5,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"onMouseOver",paraId:1,tocIndex:2},{value:"\u9F20\u6807\u8FDB\u5165\u4E8B\u4EF6",paraId:1,tocIndex:2},{value:"MouseEventHandler",paraId:6,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"onMouseLeave",paraId:1,tocIndex:2},{value:"\u9F20\u6807\u79BB\u5F00\u4E8B\u4EF6",paraId:1,tocIndex:2},{value:"MouseEventHandler",paraId:7,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"onMouseMove",paraId:1,tocIndex:2},{value:"\u9F20\u6807\u79FB\u52A8\u4E8B\u4EF6",paraId:1,tocIndex:2},{value:"MouseEventHandler",paraId:8,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"-",paraId:1,tocIndex:2},{value:"SpacingType\u7C7B\u578B",paraId:9,tocIndex:3},{value:"\u63CF\u8FF0\u4FE1\u606F",paraId:9,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:3},{value:"[number | string, number | string]",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"[10,15]",paraId:9,tocIndex:3},{value:"[number | string, number | string, number | string, number | string]",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"[10,15,10,15]",paraId:9,tocIndex:3},{value:"number",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"string",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"-",paraId:9,tocIndex:3},{value:"MouseEventHandler\u7C7B\u578B",paraId:10,tocIndex:4},{value:"\u63CF\u8FF0\u4FE1\u606F",paraId:10,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:10,tocIndex:4},{value:"(record: any,index: number,event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void",paraId:10,tocIndex:4},{value:"-",paraId:10,tocIndex:4},{value:"-",paraId:10,tocIndex:4},{value:"ColumnType \u7C7B\u578B",paraId:11,tocIndex:5},{value:"\u53C2\u6570",paraId:12,tocIndex:5},{value:"\u8BF4\u660E",paraId:12,tocIndex:5},{value:"\u7C7B\u578B",paraId:12,tocIndex:5},{value:"\u63CF\u8FF0\u4FE1\u606F",paraId:12,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:12,tocIndex:5},{value:"className",paraId:12,tocIndex:5},{value:"\u7C7B\u540D",paraId:12,tocIndex:5},{value:"string",paraId:12,tocIndex:5},{value:"-",paraId:12,tocIndex:5},{value:"''",paraId:12,tocIndex:5},{value:"dataIndex",paraId:12,tocIndex:5},{value:"\u5217\u6570\u636E\u5728\u6570\u636E\u9879\u4E2D\u5BF9\u5E94\u7684\u8DEF\u5F84",paraId:12,tocIndex:5},{value:"string",paraId:12,tocIndex:5},{value:"-",paraId:12,tocIndex:5},{value:"''",paraId:12,tocIndex:5},{value:"ellipsis",paraId:12,tocIndex:5},{value:"\u8D85\u8FC7\u5BBD\u5EA6\u5C06\u81EA\u52A8\u7701\u7565",paraId:12,tocIndex:5},{value:"boolean",paraId:12,tocIndex:5},{value:"-",paraId:12,tocIndex:5},{value:"false",paraId:12,tocIndex:5},{value:"render",paraId:12,tocIndex:5},{value:"\u751F\u6210\u590D\u6742\u6570\u636E\u7684\u6E32\u67D3\u51FD\u6570\uFF0C\u53C2\u6570\u5206\u522B\u4E3A\u5F53\u524D\u884C\u7684\u503C\uFF0C\u5F53\u524D\u884C\u6570\u636E\uFF0C\u884C\u7D22\u5F15",paraId:12,tocIndex:5},{value:"`(text: any,record: any,index: number) => string",paraId:12,tocIndex:5},{value:"React.ReactNode",paraId:12,tocIndex:5},{value:"JSX.Element`",paraId:12,tocIndex:5},{value:"title",paraId:12,tocIndex:5},{value:"\u5217\u5934\u663E\u793A\u6587\u5B57",paraId:12,tocIndex:5},{value:"string",paraId:12,tocIndex:5},{value:"-",paraId:12,tocIndex:5},{value:"-",paraId:12,tocIndex:5},{value:"width",paraId:12,tocIndex:5},{value:"\u5217\u5BBD\u5EA6",paraId:12,tocIndex:5},{value:"boolean",paraId:12,tocIndex:5},{value:"\u6BCF\u5217\u81EA\u52A8\u5E73\u5747\u5360\u6BD4\u5BBD\u5EA6",paraId:12,tocIndex:5},{value:"-",paraId:12,tocIndex:5},{value:"align",paraId:12,tocIndex:5},{value:"\u884C\u6570\u636E\u5BF9\u9F50\u65B9\u5F0F",paraId:12,tocIndex:5},{value:"AlignType",paraId:13,tocIndex:5},{value:"-",paraId:12,tocIndex:5},{value:"'left'",paraId:12,tocIndex:5},{value:"headAlign",paraId:12,tocIndex:5},{value:"\u8868\u5934\u5BF9\u9F50\u65B9\u5F0F",paraId:12,tocIndex:5},{value:"AlignType",paraId:14,tocIndex:5},{value:"-",paraId:12,tocIndex:5},{value:"'left'",paraId:12,tocIndex:5},{value:"ellipsisClassName",paraId:12,tocIndex:5},{value:"\u7701\u7565\u5143\u7D20\u7C7B\u540D",paraId:12,tocIndex:5},{value:"string",paraId:12,tocIndex:5},{value:"-",paraId:12,tocIndex:5},{value:"-",paraId:12,tocIndex:5},{value:"ellipsisPlacement",paraId:12,tocIndex:5},{value:"\u7701\u7565\u65B9\u5411",paraId:12,tocIndex:5},{value:"Placement",paraId:12,tocIndex:5},{value:"-",paraId:12,tocIndex:5},{value:"'top'",paraId:12,tocIndex:5},{value:"cursor",paraId:12,tocIndex:5},{value:"\u6307\u9488",paraId:12,tocIndex:5},{value:"cursor",paraId:12,tocIndex:5},{value:"css-cursor",paraId:12,tocIndex:5},{value:"'auto'",paraId:12,tocIndex:5},{value:"specialColumn",paraId:12,tocIndex:5},{value:"\u7279\u6B8A\u5217",paraId:12,tocIndex:5},{value:"'none' | 'sort'",paraId:12,tocIndex:5},{value:"\u7279\u6B8A\u5217-\u6392\u5E8F",paraId:12,tocIndex:5},{value:"'none'",paraId:12,tocIndex:5},{value:"AlignType\u7C7B\u578B",paraId:15,tocIndex:6},{value:"\u63CF\u8FF0\u4FE1\u606F",paraId:15,tocIndex:6},{value:"left",paraId:15,tocIndex:6},{value:"\u5DE6\u5BF9\u9F50",paraId:15,tocIndex:6},{value:"center",paraId:15,tocIndex:6},{value:"\u5C45\u4E2D",paraId:15,tocIndex:6},{value:"right",paraId:15,tocIndex:6},{value:"\u53F3\u5BF9\u9F50",paraId:15,tocIndex:6}]},38281:function(m,o){o.Z=`import { ColorPicker, Input, Space, Switch } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import ScrollTable from '..';
const Demo1: FC = () => {
	const [rowTextColor, setRowTextColor] = React.useState('#ffffff');
	const [waitTime, setWaitTime] = React.useState(1000);
	const [duration, setDuration] = React.useState(500);
	const [delay, setDelay] = React.useState(250);
	const [headTextColor, setHeadTextColor] = React.useState('#ffffff');
	const [rowsBackgroundColor, setRowsBackgroundColor] = React.useState([
		'#0e7490',
		'#0369a1',
	]);
	const [rowBackgroundColor, setRowBackgroundColor] = React.useState('#0e7490');
	const [headBackgroundColor, setHeadBackgroundColor] =
		React.useState('#60a5fa');
	const [striped, setStriped] = React.useState(true);
	const mockData = Array.from({ length: 10 }).map((_, index) => ({
		name: '\u5F20\u4E0911' + (index + 1),
		age: '21',
		address: '\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02',
		date: '2023-01-01 12:00:00',
	}));
	const [data, setData] = useState<any[]>(mockData);
	useEffect(() => {
		setTimeout(() => {
			setData([
				...Array.from({ length: 6 }).map((_, index) => ({
					name: '\u5F20\u4E09222' + (index + 1),
					age: '21',
					address: '\u5E7F\u4E1C\u7701\u6DF1\u5733\u5E02',
					date: '2023-01-01 12:00:00',
				})),
			]);
		}, 2000);
	}, []);
	return (
		<>
			<div>
				<h3>\u989C\u8272</h3>
				<Space>
					<div>
						<Switch checked={striped} onChange={() => setStriped(!striped)} />
						<span>\u662F\u5426\u4E3A\u6709\u6761\u7EB9\u7684</span>
					</div>
					<div>
						<Space>
							<ColorPicker
								value={headBackgroundColor}
								onChange={(e: any) => {
									setHeadBackgroundColor('#' + e.toHex());
								}}
							/>
							<span>\u8868\u5934\u80CC\u666F\u989C\u8272</span>
						</Space>
					</div>
					{!striped ? (
						<div>
							<Space>
								<ColorPicker
									value={rowBackgroundColor}
									onChange={(e: any) => {
										setRowBackgroundColor('#' + e.toHex());
									}}
								/>
								<span>\u884C\u80CC\u666F\u989C\u8272</span>
							</Space>
						</div>
					) : (
						<>
							<div>
								<Space>
									<ColorPicker
										value={rowsBackgroundColor[0]}
										onChange={(e: any) => {
											rowsBackgroundColor[0] = '#' + e.toHex();
											setRowsBackgroundColor([...rowsBackgroundColor]);
										}}
									/>
									<span>\u884C\u80CC\u666F\u989C\u8272(\u5947\u6570\u884C)</span>
								</Space>
							</div>
							<div>
								<Space>
									<ColorPicker
										value={rowsBackgroundColor[1]}
										onChange={(e: any) => {
											rowsBackgroundColor[1] = '#' + e.toHex();
											setRowsBackgroundColor([...rowsBackgroundColor]);
										}}
									/>
									<span>\u884C\u80CC\u666F\u989C\u8272(\u5076\u6570\u884C)</span>
								</Space>
							</div>
						</>
					)}
					<div>
						<Space>
							<ColorPicker
								value={rowTextColor}
								onChange={(e: any) => {
									setRowTextColor('#' + e.toHex());
								}}
							/>
							<span>\u884C\u6587\u5B57\u989C\u8272</span>
						</Space>
					</div>
					<div>
						<Space>
							<ColorPicker
								value={headTextColor}
								onChange={(e: any) => {
									setHeadTextColor('#' + e.toHex());
								}}
							/>
							<span>\u8868\u5934\u6587\u5B57\u989C\u8272</span>
						</Space>
					</div>
				</Space>
			</div>
			<div>
				<h3>\u65F6\u95F4</h3>
				<Space>
					<div>
						<Input
							value={waitTime}
							type={'number'}
							onChange={(e) => setWaitTime(+e.target.value)}
						/>
						<span>\u8F6E\u64AD\u65F6\u95F4\u95F4\u9694 (\u6BEB\u79D2)</span>
					</div>
					<div>
						<Input
							value={duration}
							type={'number'}
							onChange={(e) => setDuration(+e.target.value)}
						/>
						<span>\u6EDA\u52A8\u52A8\u753B\u6267\u884C\u65F6\u957F (\u6BEB\u79D2)</span>
					</div>
					<div>
						<Input
							value={delay}
							type={'number'}
							onChange={(e) => setDelay(+e.target.value)}
						/>
						<span>\u5EF6\u65F6\u505C\u7559\u65F6\u957F (\u6BEB\u79D2)</span>
					</div>
				</Space>
			</div>
			<p>&nbsp;</p>
			<ScrollTable
				style={{ height: 400 }}
				isAutoPlay={true}
				duration={duration}
				delay={delay}
				striped={striped}
				waitTime={waitTime}
				hoverPause={true}
				rowTextColor={rowTextColor}
				headTextColor={headTextColor}
				headBackgroundColor={headBackgroundColor}
				rowBackgroundColor={striped ? rowsBackgroundColor : rowBackgroundColor}
				onClick={(record, index) => {
					console.log(record, index);
				}}
				dataSource={data}
				columns={[
					{
						title: '\u6392\u5E8F',
						specialColumn: 'sort',
					},
					{
						title: '\u59D3\u540D',
						width: '450px',
						dataIndex: 'name',
						align: 'center',
						headAlign: 'center',
						render: (text) => {
							return (
								<div
									style={{
										width: '100%',
										height: 50,
										display: 'flex',
										alignItems: 'center',
									}}
								>
									<img
										src="https://p3-passport.byteimg.com/img/user-avatar/09e00df42d9bfe86f3b0c7c8cdbf1c84~100x100.awebp"
										alt=""
									/>
									<span>{text}</span>
								</div>
							);
						},
					},
					{
						title: '\u5E74\u9F84',
						dataIndex: 'age',
						render(text) {
							return text + '\u5C81';
						},
					},
					{
						title: '\u5730\u5740',
						dataIndex: 'address',
						ellipsis: true,
						cursor: 'pointer',
					},
					{
						title: '\u65E5\u671F',
						dataIndex: 'date',
					},
				]}
				emptyText={'\u6682\u65E0\u6570\u636E'}
			/>
		</>
	);
};

export default Demo1;
`},32856:function(m,o){o.Z=`.scrollTable_container {
  .head {
    .head_item {
      box-sizing: border-box;
      display: flex;
      align-items: center;
      overflow: hidden;
    }

    display: flex;
  }

  .wrapper {
    .body {
      .row {
        .row_item {
          box-sizing: border-box;
          display: flex;
          align-items: center;
          overflow: hidden;
        }

        display: flex;
      }

      height: 100%;
      display: flex;
      flex-direction: column;
    }

    overflow: hidden;
    flex: 1;
  }

  display: flex;
  flex-direction: column;
}


.ellipsis-line {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.tt {
  color: pink
}`},26096:function(m,o){o.Z=`import Tippy from '@tippyjs/react';
import gsap from 'gsap';
import React, { FC, useEffect, useLayoutEffect, useRef, useState } from 'react';
import colors from 'tailwindcss/colors';
import 'tippy.js/dist/tippy.css';
import styles from './index.module.less';
import type {
	AlignType,
	ColumnType,
	DataSourceType,
	ScrollTableProps,
	SpacingType,
} from './type';

/**
 * \u5904\u7406\u6E32\u67D3\u884C\u6570\u636E
 */
const handleRenderRowData = (
	column: ColumnType,
	item: DataSourceType[number],
	index: number
): React.ReactNode => {
	const returnRender = (text: React.ReactNode): any => {
		return column.render ? column.render(text, item, index) : text;
	};
	const text = column.dataIndex && (item[column.dataIndex] as string);
	// \u7279\u6B8A\u5217\u5904\u7406
	if (column.specialColumn === 'sort') {
		return returnRender(index + 1);
	}
	if (column.ellipsis) {
		const renderText = returnRender(text);
		return (
			<Tippy
				placement={column.ellipsisPlacement || 'top'}
				content={<div className={column.ellipsisClassName}>{text}</div>}
			>
				{column.render ? (
					React.cloneElement(renderText, {
						className: \`\${styles['ellipsis-line']} \${renderText?.props?.className}\`,
					})
				) : (
					<span className={styles['ellipsis-line']}>{text}</span>
				)}
			</Tippy>
		);
	} else {
		return returnRender(text);
	}
};

const ScrollTable: FC<ScrollTableProps> = ({
	columns,
	dataSource,
	isAutoPlay = true,
	className = '',
	headClassName = '',
	rowClassName = '',
	headStyle = {},
	rowStyle = {},
	headSpacing = [10, 15],
	rowSpacing = [10, 15],
	headBackgroundColor = colors['blue']['400'],
	rowBackgroundColor: _rowBackgroundColor,
	headTextColor = 'white',
	rowTextColor = 'white',
	striped = true,
	duration = 1000,
	delay = 250,
	waitTime = 2000,
	rowScrollHeight,
	hoverPause = false,
	onClick,
	onMouseOver,
	onMouseMove,
	onMouseLeave,
	style,
	emptyText,
}) => {
	const rowBackgroundColor =
		_rowBackgroundColor ||
		(striped
			? [colors['cyan']['700'], colors['sky']['700']]
			: colors['cyan']['700']);
	const timer = useRef<NodeJS.Timer>();
	// \u8868\u683C\u8EAB\u4F53\u5143\u7D20
	const tableBodyRef = useRef<HTMLDivElement>(null);
	// \u8868\u683C\u5916\u90E8\u5143\u7D20
	const tableWrapperRef = useRef<HTMLDivElement>(null);
	// \u884C\u5143\u7D20
	const rowRef = useRef<HTMLDivElement>(null);
	const scrollHeight = useRef(0);
	// \u662F\u5426\u64AD\u653E
	const isPlay = useRef(isAutoPlay);
	const dataLength = useRef(dataSource.length);
	const childrenElements = useRef<Element[]>([]);
	const widths = useRef<number[]>([]);
	const rowHeight = useRef(0);
	const [data, setData] = useState<DataSourceType>(dataSource);
	// \u5F53\u524D\u6EDA\u52A8\u7684\u7D22\u5F15
	const currentScrollIndex = useRef(0);
	/**
	 * \u8BA1\u7B97\u884C\u7684\u9AD8\u5EA6
	 */
	const computedRowHeight = () => {
		if (!tableBodyRef.current) return;
		const targetElement = childrenElements.current[currentScrollIndex.current];
		if (targetElement) {
			const { height } = targetElement.getBoundingClientRect();
			rowHeight.current = height;
		}
	};
	/**
	 * \u8BA1\u7B97\u95F4\u8DDD
	 */
	const computedSpacing = (spacing: SpacingType): string => {
		if (Array.isArray(spacing)) {
			if (spacing.length === 2) {
				return \`\${spacing[0]}px \${spacing[1]}px\`;
			}
			if (spacing.length === 4) {
				return \`\${spacing[0]}px \${spacing[1]}px \${spacing[2]}px \${spacing[3]}px\`;
			}
		}
		if (typeof spacing === 'string') {
			return \`\${spacing}\`;
		}
		if (typeof spacing === 'number') {
			return \`\${spacing}px\`;
		}
		return \`\`;
	};
	/**
	 * \u8BA1\u7B97\u6570\u636E\u6E90
	 */
	const computedData = () => {
		/**
		 * \u8FED\u4EE3\u6570\u636E
		 */
		function iterateData(data: DataSourceType, num: number) {
			let _data: DataSourceType = [];
			for (let i = 0; i < num; i++) {
				_data = [..._data, ...data];
			}
			setData(() => [..._data]);
		}

		if (tableWrapperRef.current) {
			const targetElement = tableWrapperRef.current as HTMLDivElement;
			const { height } = targetElement.getBoundingClientRect();
			// \u627F\u8F7D\u4E2A\u6570
			const CarryingNumber = Math.ceil(height / rowHeight.current);
			// \u627F\u8F7D\u9700\u6C42\u5C42\u53E0\u6B21\u6570
			const needsNumber = Math.ceil(CarryingNumber / dataLength.current);
			if (CarryingNumber > dataLength.current) {
				iterateData(dataSource, needsNumber + 1);
			} else {
				iterateData(dataSource, 2);
			}
			computedRowHeight();
		}
	};
	/**
	 * \u8BA1\u7B97\u8868\u683C\u5BBD\u5EA6
	 */
	const computedWidth = () => {
		if (tableBodyRef.current) {
			const targetElement = tableBodyRef.current as HTMLDivElement;
			const { width } = targetElement.getBoundingClientRect();
			widths.current = Array.from({ length: columns.length }).map(
				() => width / columns.length
			);
		}
	};
	/**
	 * \u6E05\u9664\u5B9A\u65F6\u5668
	 */
	const clearTimer = () => {
		clearTimeout(timer.current);
		timer.current = undefined;
	};
	const computedTransform = (startMove: () => void) => {
		if (tableBodyRef.current && rowRef.current) {
			const targetElement = tableBodyRef.current as HTMLDivElement;
			clearTimer();
			// \u91CD\u65B0\u8BA1\u7B97\u4E0B\u4E00\u4E2A\u884C\u9AD8
			computedRowHeight();
			scrollHeight.current += rowScrollHeight || rowHeight.current;
			currentScrollIndex.current += 1;
			gsap.to(tableBodyRef.current.style, {
				duration: duration / 1e3,
				delay: delay / 1e3,
				transform: \`translateY(-\${scrollHeight.current}px)\`,
				onComplete() {
					// \u5982\u679C\u5F53\u524D\u6EDA\u52A8\u7684\u7D22\u5F15\u5C0F\u4E8E\u6570\u636E\u603B\u957F\u5EA6
					if (currentScrollIndex.current < dataLength.current) {
						startMove();
					} else {
						targetElement.style.transform = \`translateY(0px)\`;
						scrollHeight.current = 0;
						currentScrollIndex.current = 0;
						startMove();
					}
				},
			});
		}
	};
	// \u5F00\u59CB\u8FD0\u52A8
	const startMove = () => {
		if (!isPlay.current) return;
		if (timer.current) {
			clearTimer();
		}
		timer.current = setTimeout(() => {
			computedTransform(startMove);
		}, waitTime);
	};
	// \u8BA1\u7B97\u884C\u80CC\u666F\u989C\u8272
	const computedRowBackgroundColor = (index: number) => {
		let _rowBackgroundColor = rowBackgroundColor;
		if (striped) {
			if (
				!(
					Array.isArray(_rowBackgroundColor) && _rowBackgroundColor.length === 2
				)
			) {
				console.warn(
					'\`ScrollTable\` \u5982\u679C\u8BBE\u7F6E\u4E86 \`striped\` \u4E3A\u6761\u7EB9\u72B6,\u90A3\u4E48\u53EA\u652F\u6301\u4E24\u79CD\u989C\u8272,\u4E3A\u4FDD\u8BC1\u6E32\u67D3\u6548\u679C,\u8BF7\u4F7F\u7528\u4E24\u79CD\u989C\u8272\u6570\u7EC4[color,color]'
				);
				_rowBackgroundColor = [colors['cyan']['700'], colors['sky']['700']];
			}
			if (index % 2 === 0) {
				return _rowBackgroundColor[0];
			} else {
				return _rowBackgroundColor[1];
			}
		} else {
			if (Array.isArray(_rowBackgroundColor)) {
				console.warn(
					'\`ScrollTable\` \u5F53\u524D\u72B6\u6001\u4E3A\u6B63\u5E38\u989C\u8272,\u4EC5\u652F\u63011\u79CD\u989C\u8272,\u4E3A\u4FDD\u8BC1\u6E32\u67D3\u6548\u679C,\u8BF7\u4F7F\u75281\u79CD\u989C\u8272-color'
				);
				return _rowBackgroundColor[0];
			} else {
				return _rowBackgroundColor as string;
			}
		}
	};
	const computedJustify = (align: AlignType) => {
		switch (align) {
			case 'left':
				return 'flex-start';
			case 'center':
				return 'center';
			case 'right':
				return 'flex-end';
			default:
				return 'flex-start';
		}
	};
	/**
	 * \u76D1\u542C\u7A97\u53E3\u65F6\u95F4
	 */
	const listenWindowSize = () => {
		computedWidth();
		window.addEventListener('resize', () => {
			computedWidth();
		});
	};
	useEffect(() => {
		if (waitTime < 1000) {
			throw new Error('\`ScrollTable\` waitTime \u6700\u5C0F\u4E3A1000\u6BEB\u79D2');
		}
	}, [waitTime]);
	useEffect(() => {
		if (!tableBodyRef.current) return;
		if (!dataSource.length) return;
		clearTimer();
		dataLength.current = dataSource.length;
		setData(() => [...dataSource]);
		const initAnimation = () => {
			if (!tableBodyRef.current) return;
			childrenElements.current = Array.from(
				tableBodyRef.current.children
			).slice(0, dataLength.current);
			computedRowHeight();
			computedData();
			startMove();
		};
		if (tableBodyRef.current.children?.length) {
			clearTimer();
			initAnimation();
		} else {
			new MutationObserver((list) => {
				if (!tableBodyRef.current) return;
				if (list.length) {
					initAnimation();
				}
			}).observe(tableBodyRef.current, {
				childList: true,
			});
		}
	}, [tableBodyRef, dataSource]);
	useLayoutEffect(() => {
		listenWindowSize();
	}, [rowRef.current]);
	return (
		<div
			className={\`\${styles.scrollTable_container} \${className}\`}
			style={style}
			onMouseOver={() => {
				if (hoverPause) {
					clearTimer();
					isPlay.current = false;
				}
			}}
			onMouseLeave={() => {
				isPlay.current = true;
				startMove();
			}}
		>
			<div
				className={\`\${styles.head} \${headClassName}\`}
				style={{ backgroundColor: headBackgroundColor, ...headStyle }}
			>
				{columns.map((column, columnIndex) => (
					<div
						key={columnIndex}
						className={styles.head_item}
						style={{
							width: column.width || widths.current[columnIndex],
							padding: computedSpacing(headSpacing),
							justifyContent: computedJustify(column.headAlign || 'left'),
							color: headTextColor,
						}}
					>
						{column.title}
					</div>
				))}
			</div>
			<div className={styles.wrapper} ref={tableWrapperRef}>
				<div
					className={styles.body}
					ref={tableBodyRef}
					style={{ transform: 'translateY(0px)' }}
				>
					{data.length
						? data.map((item, index) => (
								<div
									className={\`\${styles.row} \${rowClassName}\`}
									style={{
										backgroundColor: computedRowBackgroundColor(index),
										...rowStyle,
									}}
									key={index}
									{...(index === 0 ? { ref: rowRef } : {})}
								>
									{columns.map((column, columnIndex) => {
										return (
											<div
												key={columnIndex}
												className={styles.row_item}
												style={{
													width: column.width || widths.current[columnIndex],
													padding: computedSpacing(rowSpacing),
													justifyContent: computedJustify(
														column.align || 'left'
													),
													cursor: column.cursor,
													color: rowTextColor,
												}}
												onClick={(e) => {
													onClick?.(item, index, e);
												}}
												onMouseOver={(e) => {
													onMouseOver?.(item, index, e);
												}}
												onMouseMove={(e) => {
													onMouseMove?.(item, index, e);
												}}
												onMouseLeave={(e) => {
													onMouseLeave?.(item, index, e);
												}}
											>
												{handleRenderRowData(
													column,
													item,
													index % dataLength.current
												)}
											</div>
										);
									})}
								</div>
						  ))
						: emptyText}
				</div>
			</div>
		</div>
	);
};

export default ScrollTable;
export * from './type.d';
`},67931:function(m,o){o.Z=`import React from 'react';
import { Placement } from 'tippy.js';
export type AlignType = 'left' | 'center' | 'right';
export interface ColumnType {
	/**
	 * \u5217\u6837\u5F0F\u7C7B\u540D
	 *
	 * default : -
	 */
	className?: string;
	/**
	 * \u5217\u6570\u636E\u5728\u6570\u636E\u9879\u4E2D\u5BF9\u5E94\u7684\u8DEF\u5F84
	 *
	 * default : -
	 */
	dataIndex?: string;
	/**
	 * \u8D85\u8FC7\u5BBD\u5EA6\u5C06\u81EA\u52A8\u7701\u7565
	 *
	 * default : false
	 */
	ellipsis?: boolean;
	/**
	 * \u751F\u6210\u590D\u6742\u6570\u636E\u7684\u6E32\u67D3\u51FD\u6570\uFF0C\u53C2\u6570\u5206\u522B\u4E3A\u5F53\u524D\u884C\u7684\u503C\uFF0C\u5F53\u524D\u884C\u6570\u636E\uFF0C\u884C\u7D22\u5F15
	 *
	 * default : -
	 */
	render?: (
		text: any,
		record: any,
		index: number
	) => string | React.ReactNode | JSX.Element;
	/**
	 * \u5217\u5934\u663E\u793A\u6587\u5B57
	 *
	 * default : -
	 */
	title: React.ReactNode;
	/**
	 * \u5217\u5BBD\u5EA6
	 *
	 * default : -
	 */
	width?: number | string;
	/**
	 * \u884C\u6570\u636E\u5BF9\u9F50\u65B9\u5F0F
	 *
	 * default : left
	 */
	align?: AlignType;
	/**
	 * \u8868\u5934\u5BF9\u9F50\u65B9\u5F0F
	 *
	 * default : left
	 */
	headAlign?: AlignType;
	/**
	 * \u7701\u7565\u5143\u7D20\u7C7B\u540D
	 */
	ellipsisClassName?: string;
	/**
	 * \u7701\u7565\u65B9\u5411
	 *
	 * default : top
	 */
	ellipsisPlacement?: Placement;
	/**
	 * \u6307\u9488
	 *
	 * default : auto
	 */
	cursor?: React.CSSProperties['cursor'];
	/**
	 * \u7279\u6B8A\u5217
	 *
	 * \u65E0 | \u6392\u5E8F
	 *
	 * default : none
	 */
	specialColumn?: 'none' | 'sort';
}

/**
 * \u6570\u636E\u6E90\u7C7B\u578B
 */
export type DataSourceType = any[];
/**
 * \u95F4\u8DDD\u7C7B\u578B
 */
export type SpacingType =
	| [number | string, number | string]
	| [number | string, number | string, number | string, number | string]
	| number
	| string;

type MouseEventHandler = (
	record: any,
	index: number,
	event: React.MouseEvent<HTMLDivElement, MouseEvent>
) => void;
export interface ScrollTableProps {
	/**
	 * \u8868\u683C\u5217\u7684\u914D\u7F6E\u63CF\u8FF0\uFF0C\u5177\u4F53\u9879\u89C1\u4E0B\u8868
	 */
	columns: ColumnType[];
	/**
	 * \u8868\u683C\u6570\u636E
	 */
	dataSource: DataSourceType;
	/**
	 * \u6570\u636E\u4E3A\u7A7A\u663E\u793A\u5185\u5BB9
	 * default : null
	 */
	emptyText?: React.ReactNode | JSX.Element;
	/**
	 * \u662F\u5426\u81EA\u52A8\u64AD\u653E
	 * default : true
	 */
	isAutoPlay?: boolean;
	/**
	 * \u7C7B\u540D
	 */
	className?: string;
	/**
	 * \u6837\u5F0F
	 */
	style?: React.CSSProperties;
	/**
	 * \u8868\u5934\u5BB9\u5668\u7C7B\u540D
	 */
	headClassName?: string;
	/**
	 * \u884C\u5BB9\u5668\u7C7B\u540D
	 */
	rowClassName?: string;
	/**
	 * \u8868\u5934\u5BB9\u5668\u6837\u5F0F
	 */
	headStyle?: React.CSSProperties;
	/**
	 * \u884C\u5BB9\u5668\u6837\u5F0F
	 */
	rowStyle?: React.CSSProperties;
	/**
	 * \u8868\u5934\u6BCF\u5217\u95F4\u8DDD
	 *
	 * \u5185\u7528\u4E8E padding \u5C5E\u6027
	 *
	 * default : [10,15]
	 */
	headSpacing?: SpacingType;
	/**
	 * \u884C\u6BCF\u5217\u95F4\u8DDD
	 *
	 * \u5185\u7528\u4E8E padding \u5C5E\u6027
	 *
	 * default : [10,15]
	 */
	rowSpacing?: SpacingType;
	/**
	 * \u8868\u5934\u80CC\u666F\u989C\u8272
	 *
	 * default : blue-400
	 */
	headBackgroundColor?: React.CSSProperties['backgroundColor'];
	/**
	 * \u884C\u80CC\u666F\u989C\u8272
	 *
	 * \u6709\u6761\u7EB9\u7684: [cyan-700,sky-700]
	 *
	 * default : cyan-700
	 */
	rowBackgroundColor?:
		| React.CSSProperties['backgroundColor']
		| React.CSSProperties['backgroundColor'][];
	/**
	 * \u8868\u5934\u6587\u5B57\u989C\u8272
	 *
	 * default : white
	 */
	headTextColor?: React.CSSProperties['color'];
	/**
	 * \u884C\u6587\u5B57\u989C\u8272
	 *
	 * default : white
	 */
	rowTextColor?: React.CSSProperties['color'];
	/**
	 * \u6709\u6761\u7EB9\u7684
	 *
	 * default : true
	 */
	striped?: boolean;
	/**
	 * \u6EDA\u52A8\u52A8\u753B\u6267\u884C\u65F6\u957F (\u6BEB\u79D2)
	 *
	 * default : 1000
	 */
	duration?: number;
	/**
	 * \u5EF6\u65F6\u505C\u7559\u65F6\u957F (\u6BEB\u79D2)
	 *
	 * default : 250
	 */
	delay?: number;
	/**
	 * \u8F6E\u64AD\u65F6\u95F4\u95F4\u9694 (\u6BEB\u79D2)
	 *
	 * default : 2000
	 */
	waitTime?: number;
	/**
	 * \u6BCF\u884C\u6EDA\u52A8\u884C\u9AD8
	 *
	 * \u6839\u636E\u7B2C\u4E00\u884C\u6570\u636E\u81EA\u52A8\u8BA1\u7B97 \u5982\u679C\u6DFB\u52A0\u5219\u8986\u76D6
	 *
	 * default : -
	 */
	rowScrollHeight?: number;

	/**
	 * \u60AC\u6D6E\u6682\u505C
	 *
	 * default : false
	 */
	hoverPause?: boolean;

	/**
	 * \u70B9\u51FB\u4E8B\u4EF6
	 *
	 * default : -
	 */
	onClick?: MouseEventHandler;

	/**
	 * \u9F20\u6807\u8FDB\u5165\u4E8B\u4EF6
	 *
	 * default : -
	 */
	onMouseOver?: MouseEventHandler;
	/**
	 * \u9F20\u6807\u79BB\u5F00\u4E8B\u4EF6
	 *
	 * default : -
	 */
	onMouseLeave?: MouseEventHandler;
	/**
	 * \u9F20\u6807\u79FB\u52A8\u4E8B\u4EF6
	 *
	 * default : -
	 */
	onMouseMove?: MouseEventHandler;
}
`}}]);
