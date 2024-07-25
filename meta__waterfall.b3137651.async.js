(self.webpackChunkmuddyrain=self.webpackChunkmuddyrain||[]).push([[579],{72370:function(n,e,t){"use strict";t.r(e),t.d(e,{demos:function(){return D}});var m=t(15009),r=t.n(m),o=t(99289),v=t.n(o),a=t(67294),x=t(48757),D={"waterfall-demo-demo1":{component:a.memo(a.lazy(function(){return t.e(786).then(t.bind(t,66799))})),asset:{type:"BLOCK",id:"waterfall-demo-demo1",refAtomIds:["waterfall"],dependencies:{"index.tsx":{type:"FILE",value:t(74466).Z},antd:{type:"NPM",value:"5.19.3"},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:t(77140).Z},"../data.ts":{type:"FILE",value:t(95864).Z},"./type.ts":{type:"FILE",value:t(87094).Z},"../hooks.ts":{type:"FILE",value:t(85335).Z},"./index.module.less":{type:"FILE",value:t(66668).Z},"./useScrollTopBottom.tsx":{type:"FILE",value:t(58265).Z},"./useExportExcel.tsx":{type:"FILE",value:t(38833).Z},"react-dom":{type:"NPM",value:"18.3.1"},"./template.ts":{type:"FILE",value:t(17513).Z}},entry:"index.tsx",description:"demo"},context:{antd:t(93989),react:t(67294),"../index.tsx":t(2661),"../data.ts":t(3533),"./type.ts":t(60606),"../hooks.ts":t(92088),"./index.module.less":t(9087),"./useScrollTopBottom.tsx":t(67511),"./useExportExcel.tsx":t(90092),"react-dom/server":t(97762),"./template.ts":t(73513)},renderOpts:{compile:function(){var I=v()(r()().mark(function y(){var i,d=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.e(335).then(t.bind(t,37335));case 2:return s.abrupt("return",(i=s.sent).default.apply(i,d));case 3:case"end":return s.stop()}},y)}));function p(){return I.apply(this,arguments)}return p}()}},"waterfall-demo-demo2":{component:a.memo(a.lazy(function(){return t.e(786).then(t.bind(t,70041))})),asset:{type:"BLOCK",id:"waterfall-demo-demo2",refAtomIds:["waterfall"],dependencies:{"index.tsx":{type:"FILE",value:t(31089).Z},antd:{type:"NPM",value:"5.19.3"},react:{type:"NPM",value:"18.3.1"},"../index.tsx":{type:"FILE",value:t(77140).Z},"./type.ts":{type:"FILE",value:t(87094).Z},"../hooks.ts":{type:"FILE",value:t(85335).Z},"./index.module.less":{type:"FILE",value:t(66668).Z},"./useScrollTopBottom.tsx":{type:"FILE",value:t(58265).Z},"./useExportExcel.tsx":{type:"FILE",value:t(38833).Z},"react-dom":{type:"NPM",value:"18.3.1"},"./template.ts":{type:"FILE",value:t(17513).Z}},entry:"index.tsx",description:"demo"},context:{antd:t(93989),react:t(67294),"../index.tsx":t(2661),"./type.ts":t(60606),"../hooks.ts":t(92088),"./index.module.less":t(9087),"./useScrollTopBottom.tsx":t(67511),"./useExportExcel.tsx":t(90092),"react-dom/server":t(97762),"./template.ts":t(73513)},renderOpts:{compile:function(){var I=v()(r()().mark(function y(){var i,d=arguments;return r()().wrap(function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,t.e(335).then(t.bind(t,37335));case 2:return s.abrupt("return",(i=s.sent).default.apply(i,d));case 3:case"end":return s.stop()}},y)}));function p(){return I.apply(this,arguments)}return p}()}}}},92088:function(n,e,t){"use strict";t.r(e),t.d(e,{useExportExcel:function(){return m.default},useScrollTopBottom:function(){return r.default}});var m=t(90092),r=t(67511)},90092:function(n,e,t){"use strict";t.r(e);var m=t(52677),r=t.n(m),o=t(97762),v=t(73513),a="data:application/vnd.ms-excel;base64,",x=function(){var I=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"\u6587\u4EF6",p=function(d,L){var s={worksheet:L,table:d},h=function(_){return window.btoa(unescape(encodeURIComponent(_)))},T=document.createElement("a"),R=function(_,U){return _.replace(/{(\w+)}/g,function(P,O){return U[O]})};T.setAttribute("href",a+h(R(v.template,s))),T.setAttribute("download",L),T.click()},y=function(d,L){for(var s=d.length,h=L.length,T="<thead><tr>",R=0;R<s;R++){var E;T+="<th>"+((E=d[R])===null||E===void 0?void 0:E.title)+"</th>"}T+="</tr></thead>";for(var _="<tbody>",U=0;U<h;U++){_+="<tr>";for(var P=L[U],O=0;O<s;O++){var Z,N,b=(Z=d[O])===null||Z===void 0?void 0:Z.dataIndex,$=(N=d[O])===null||N===void 0?void 0:N.render;if(b){var w=$?$(P[b],P,O):P[b],j=P[b];if(j&&r()(j)==="object"&&"$$typeof"in j&&j.type==="img"){var K=j.props,et=K.width,z=K.height;_+='<td style="width:'.concat(et,"px;height:").concat(z,'px;text-align: center; vertical-align: middle"><div style="display:inline">').concat((0,o.renderToString)(P[b]),"</div></td>")}else if(r()(w)==="object"&&"$$typeof"in w){var k=document.createElement("div");k.innerHTML=o.renderToString(w),_+='<td style="text-align:center">'+k.textContent+"</td>"}else _+='<td style="text-align:center">'+w+"</td>"}}_+="</tr>"}_+="</tbody>";var G=T+_;p(G,I)};return{exportExcel:y}};e.default=x},73513:function(n,e,t){"use strict";t.r(e),t.d(e,{template:function(){return m}});var m='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'},67511:function(n,e,t){"use strict";t.r(e),t.d(e,{DIRECTION_SCROLL_ENUM:function(){return r}});var m=t(67294),r=function(v){return v.DOWN="down",v.UP="up",v}({}),o=function(a){var x=a.threshold,D=x===void 0?10:x,I=a.onTop,p=a.onBottom,y=a.element,i=y===void 0?document.documentElement:y,d=(0,m.useRef)(0),L=(0,m.useRef)(),s=function(){var T=i.scrollTop||document.body.scrollTop,R=i.clientHeight||document.body.clientHeight,E=i.scrollHeight||document.body.scrollHeight,_=r.DOWN;d.current>T&&(_=r.UP),_===r.DOWN?T+R+D>=E&&(L.current||(L.current=setTimeout(function(){p==null||p(),L.current=null},500))):T<=D&&(I==null||I()),d.current=T};(0,m.useEffect)(function(){if(i)return i.addEventListener("scroll",s),function(){i.removeEventListener("scroll",s)}},[i])};e.default=o},3533:function(n,e,t){"use strict";t.r(e),t.d(e,{getData:function(){return a}});var m=t(15009),r=t.n(m),o=t(99289),v=t.n(o),a=function(){var x=v()(r()().mark(function D(){return r()().wrap(function(p){for(;;)switch(p.prev=p.next){case 0:return p.next=2,fetch("https://dog.ceo/api/breed/hound/images/random/10").then(function(y){return y.json()});case 2:return p.abrupt("return",p.sent);case 3:case"end":return p.stop()}},D)}));return function(){return x.apply(this,arguments)}}()},2661:function(n,e,t){"use strict";t.r(e);var m=t(52677),r=t.n(m),o=t(15009),v=t.n(o),a=t(99289),x=t.n(a),D=t(97857),I=t.n(D),p=t(64599),y=t.n(p),i=t(19632),d=t.n(i),L=t(5574),s=t.n(L),h=t(67294),T=t(92088),R=t(9087),E=t(85893),_=t(60606),U=t.n(_),P={};for(var O in _)O!=="default"&&(P[O]=function(N){return _[N]}.bind(0,O));t.d(e,P);var Z=function(b){var $=b.spacing,w=$===void 0?10:$,j=b.width,K=j===void 0?200:j,et=b.renderItem,z=b.renderKey,k=b.dataSource,G=k===void 0?[]:k,nt=b.onScrollCallback,lt=b.loadingIcon,xt=lt===void 0?(0,E.jsx)("div",{className:R.default.waterfall_loading}):lt,it=b.loadingText,It=it===void 0?"Loading...":it,st=b.threshold,yt=st===void 0?30:st,ut=b.loading,rt=ut===void 0?!1:ut,X=(0,h.useRef)(null),B=(0,h.useRef)(null),at=(0,h.useRef)(0),W=(0,h.useRef)(K),J=(0,h.useRef)(w),bt=(0,h.useState)(rt),ct=s()(bt,2),mt=ct[0],Y=ct[1],Et=(0,h.useState)(+new Date),pt=s()(Et,2),St=pt[0],Tt=pt[1],H=(0,h.useRef)(!0),ot=(0,h.useRef)(!1),Q=(0,h.useRef)([]),V=(0,h.useRef)([]),Rt=function(){var l=Math.min.apply(Math,d()(Q.current)),f=Q.current.findIndex(function(u){return u===l});return{height:l,index:f}},ft=function(l){var f=0,u=Rt(),g=u.index,S=u.height;return g===0?f=g*W.current:f=g*(W.current+J.current),Q.current[g]+=l+J.current,{top:S,left:f}},ht=function(){if(!(!B.current||!X.current)){var l=X.current.clientWidth;at.current=Math.floor(l/(W.current+J.current))}},dt=function(){if(!(!B.current||!X.current)){Q.current=Array.from({length:at.current}).map(function(){return 0}),B.current.style.width=at.current*(W.current+J.current)+"px";var l=y()(V.current),f;try{for(l.s();!(f=l.n()).done;){var u=f.value;if(!u.isLoad)return;var g=u.width/u.height,S=W.current/g,A=ft(S),C=A.top,F=A.left;u.top=C,u.left=F,u.height=S,u.width=W.current}}catch(tt){l.e(tt)}finally{l.f()}var q=Math.max.apply(Math,d()(Q.current));B.current.style.height=q+"px",Tt(+new Date)}},gt=function(l){return l.map(function(f){if("url"in f)return I()(I()({},f),{},{left:0,top:0,isLoad:!1,height:0,isError:!1,errorInfo:"",width:W.current});throw new Error("The data source must be an array of objects containing the `url` field")})},Dt=function(l){return new Promise(function(f,u){var g=new Image;g.src=l.url,g.className=R.default.waterfall_false_image,g.width=W.current,document.body.appendChild(g),g.addEventListener("load",function(){var S=ft(g.height),A=S.left,C=S.top;f({left:A,top:C,height:g.height}),document.body.removeChild(g)}),g.onerror=function(S){Y(!1),u(S)}})},vt=function(l){H.current=!1;var f=function(){var u=x()(v()().mark(function g(){var S,A,C,F,q,tt,_t;return v()().wrap(function(c){for(;;)switch(c.prev=c.next){case 0:if(B.current){c.next=2;break}return c.abrupt("return");case 2:ht(),S=y()(l),c.prev=4,S.s();case 6:if((A=S.n()).done){c.next=31;break}return C=A.value,Y(!0),c.prev=9,c.next=12,Dt(C);case 12:F=c.sent,q=F.left,tt=F.top,_t=F.height,C.left=q,C.top=tt,C.height=_t,C.isLoad=!0,c.next=26;break;case 22:c.prev=22,c.t0=c.catch(9),C.isLoad=!1,C.errorInfo=c.t0;case 26:V.current=[].concat(d()(V.current),[C]),dt(),Y(!1);case 29:c.next=6;break;case 31:c.next=36;break;case 33:c.prev=33,c.t1=c.catch(4),S.e(c.t1);case 36:return c.prev=36,S.f(),c.finish(36);case 39:H.current=!0;case 40:case"end":return c.stop()}},g,null,[[4,33,36,39],[9,22]])}));return function(){return u.apply(this,arguments)}}();f()};(0,h.useEffect)(function(){if(G.length&&!ot.current&&H.current){var M=gt(G);M.length&&(vt(d()(M)),ot.current=!0)}},[G,ot.current,H]),(0,T.useScrollTopBottom)({threshold:yt,element:X.current,onBottom:function(){if(H.current){var l=nt==null?void 0:nt();dt(),l instanceof Promise?l.then(function(f){var u=gt(f);vt(d()(u))}):Array.isArray(l)?console.log("array"):console.error(new Error("The data returned by onScrollBottom is not a promise or array"))}}}),(0,h.useLayoutEffect)(function(){B.current&&(mt||(W.current=K,J.current=w,Y(rt),ht(),dt()))},[K,w,H.current,rt]);var Lt=(0,h.useMemo)(function(){return V.current},[V.current,St]);return(0,E.jsxs)("div",{className:R.default.wrapper_container,ref:X,children:[(0,E.jsx)("div",{className:R.default.waterfall_container,ref:B,children:Lt.map(function(M,l){var f,u=et(M,l);return r()((f=u)===null||f===void 0?void 0:f.$$typeof)!=="symbol"&&(u=(0,E.jsx)(E.Fragment,{children:u})),h.cloneElement(u,{key:(z==null?void 0:z(M,l))||l})})}),mt&&(0,E.jsxs)("div",{className:R.default.waterfall_loading_box,children:[xt,(0,E.jsx)("div",{className:R.default.waterfall_loading_text,children:It})]})]})};e.default=Z},60606:function(){},9087:function(n,e,t){"use strict";t.r(e),e.default={wrapper_container:"TMdB62Fro8FHXqM_aSCI",waterfall_container:"CC09gRbAlX41rj9Rd8k9",waterfall_image:"pX7EqiXoMRcphm_1ppkB",waterfall_loading_box:"U_uWWPcvHo8TFZ3G89v0",waterfall_loading:"wMp7uFQvBtQi9Ye5Y4mk",spin:"K0YiVALiVAEcDS1BBh_c",waterfall_loading_text:"V_kPmiOIQrE7CxyNpF11",waterfall_false_image:"Scp3CAmMYTOAW3I2_uMg"}},87277:function(n,e,t){"use strict";t.r(e),t.d(e,{texts:function(){return r}});var m=t(48757);const r=[{value:`import { Waterfall } from "muddyrain"

export default function (){
  return (<Waterfall dataSource={[{url:'xxx.jpg'},{url:'xxx.jpg'}]} />)
}
`,paraId:0,tocIndex:2},{value:"\u6CE8\u610F: \u7011\u5E03\u6D41\u7684\u6EDA\u52A8\u4E8B\u4EF6\u5FC5\u987B\u4E3A\u9875\u9762\u89C6\u53E3\u6700\u5E95\u90E8\u624D\u89E6\u53D1\u3002",paraId:1,tocIndex:3},{value:"\u53C2\u6570",paraId:2,tocIndex:3},{value:"\u8BF4\u660E",paraId:2,tocIndex:3},{value:"\u7C7B\u578B",paraId:2,tocIndex:3},{value:"\u63CF\u8FF0\u4FE1\u606F",paraId:2,tocIndex:3},{value:"\u9ED8\u8BA4\u503C",paraId:2,tocIndex:3},{value:"width",paraId:2,tocIndex:3},{value:"\u56FE\u7247\u5BBD\u5EA6",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"200",paraId:2,tocIndex:3},{value:"spacing",paraId:2,tocIndex:3},{value:"\u5143\u7D20\u95F4\u8DDD",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"10",paraId:2,tocIndex:3},{value:"renderItem",paraId:2,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u6570\u636E",paraId:2,tocIndex:3},{value:"(data: ",paraId:2,tocIndex:3},{value:"RenderDataSource",paraId:3,tocIndex:3},{value:", index: number) => React.ReactNode",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"renderKey",paraId:2,tocIndex:3},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3Key",paraId:2,tocIndex:3},{value:"(data: ",paraId:2,tocIndex:3},{value:"RenderDataSource",paraId:4,tocIndex:3},{value:", index: number) => string",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"index",paraId:2,tocIndex:3},{value:"dataSource",paraId:2,tocIndex:3},{value:"\u6570\u636E\u6E90",paraId:2,tocIndex:3},{value:"DataSource",paraId:5,tocIndex:3},{value:"[]",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"Required",paraId:2,tocIndex:3},{value:"threshold",paraId:2,tocIndex:3},{value:"\u4E34\u754C\u70B9",paraId:2,tocIndex:3},{value:"number",paraId:2,tocIndex:3},{value:"\u6EDA\u52A8\u8DDD\u79BB\u4E8B\u4EF6\u7684\u4E34\u754C\u70B9",paraId:2,tocIndex:3},{value:"30",paraId:2,tocIndex:3},{value:"onScrollCallback",paraId:2,tocIndex:3},{value:"\u6EDA\u52A8\u5E95\u90E8\u76D1\u542C",paraId:2,tocIndex:3},{value:"() => Promise<",paraId:2,tocIndex:3},{value:"DataSource",paraId:6,tocIndex:3},{value:"[]> | ",paraId:2,tocIndex:3},{value:"DataSource",paraId:7,tocIndex:3},{value:"[]",paraId:2,tocIndex:3},{value:"\u9700\u8FD4\u56DE\u6570\u636E\u6216promise\u7C7B\u578B\u7684\u6570\u636E",paraId:2,tocIndex:3},{value:"-",paraId:2,tocIndex:3},{value:"RenderDataSource\u7C7B\u578B",paraId:8,tocIndex:4},{value:"\u7C7B\u578B",paraId:8,tocIndex:4},{value:"\u63CF\u8FF0\u4FE1\u606F",paraId:8,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:8,tocIndex:4},{value:"left",paraId:8,tocIndex:4},{value:"number",paraId:8,tocIndex:4},{value:"\u8DDD\u79BB\u5DE6\u8FB9\u7684\u8DDD\u79BB",paraId:8,tocIndex:4},{value:"0",paraId:8,tocIndex:4},{value:"top",paraId:8,tocIndex:4},{value:"number",paraId:8,tocIndex:4},{value:"\u8DDD\u79BB\u4E0A\u8FB9\u7684\u8DDD\u79BB",paraId:8,tocIndex:4},{value:"0",paraId:8,tocIndex:4},{value:"url",paraId:8,tocIndex:4},{value:"string",paraId:8,tocIndex:4},{value:"\u56FE\u7247\u5730\u5740",paraId:8,tocIndex:4},{value:"required",paraId:8,tocIndex:4},{value:"isLoad",paraId:8,tocIndex:4},{value:"boolean",paraId:8,tocIndex:4},{value:"\u662F\u5426\u52A0\u8F7D\u5B8C\u6BD5",paraId:8,tocIndex:4},{value:"false",paraId:8,tocIndex:4},{value:"isError",paraId:8,tocIndex:4},{value:"boolean",paraId:8,tocIndex:4},{value:"\u662F\u5426\u52A0\u8F7D\u62A5\u9519",paraId:8,tocIndex:4},{value:"false",paraId:8,tocIndex:4},{value:"errorInfo",paraId:8,tocIndex:4},{value:"string | Event",paraId:8,tocIndex:4},{value:"\u62A5\u9519\u4FE1\u606F",paraId:8,tocIndex:4},{value:"-",paraId:8,tocIndex:4},{value:"width",paraId:8,tocIndex:4},{value:"number",paraId:8,tocIndex:4},{value:"\u56FE\u7247\u5BBD\u5EA6",paraId:8,tocIndex:4},{value:"0",paraId:8,tocIndex:4},{value:"height",paraId:8,tocIndex:4},{value:"number",paraId:8,tocIndex:4},{value:"\u56FE\u7247\u9AD8\u5EA6",paraId:8,tocIndex:4},{value:"0",paraId:8,tocIndex:4},{value:"DataSource\u7C7B\u578B",paraId:9,tocIndex:5},{value:"\u7C7B\u578B",paraId:9,tocIndex:5},{value:"\u63CF\u8FF0\u4FE1\u606F",paraId:9,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:9,tocIndex:5},{value:"url",paraId:9,tocIndex:5},{value:"string",paraId:9,tocIndex:5},{value:"\u56FE\u7247\u5730\u5740",paraId:9,tocIndex:5},{value:"required",paraId:9,tocIndex:5}]},85335:function(n,e){"use strict";e.Z=`export { default as useExportExcel } from './useExportExcel';
export { default as useScrollTopBottom } from './useScrollTopBottom';
`},38833:function(n,e){"use strict";e.Z=`import { TablerProps } from '@/tabler';
import ReactDOMServer, { renderToString } from 'react-dom/server';
import { template } from './template';
const uri = 'data:application/vnd.ms-excel;base64,';

const useExportExcel = (fileName = '\u6587\u4EF6') => {
	const exportToExcel = (table: string, name: string) => {
		// \u7F16\u7801\u8981\u7528utf-8\u4E0D\u7136\u9ED8\u8BA4gbk\u4F1A\u51FA\u73B0\u4E2D\u6587\u4E71\u7801
		const ctx = {
			worksheet: name,
			table,
		};
		const base64 = function (s: string) {
			return window.btoa(unescape(encodeURIComponent(s)));
		};
		const link = document.createElement('a');
		const formateContent = (s: string, c: typeof ctx) => {
			return s.replace(/{(\\w+)}/g, (m, p: keyof typeof ctx) => {
				return c[p];
			});
		};
		link.setAttribute('href', uri + base64(formateContent(template, ctx)));
		link.setAttribute('download', name);
		link.click();
	};
	const exportExcel = (
		column: TablerProps['columns'],
		tbodyData: Record<string, any>[]
	) => {
		const th_len = column.length; // \u8868\u5934\u7684\u957F\u5EA6
		const tb_len = tbodyData.length; // \u8BB0\u5F55\u6761\u6570
		let thead = '<thead><tr>';
		for (let i = 0; i < th_len; i++) {
			thead += '<th>' + column[i]?.title + '</th>';
		}
		thead += '</tr></thead>';

		let tbody = '<tbody>';
		for (let i = 0; i < tb_len; i++) {
			tbody += '<tr>';
			const row = tbodyData[i]; // \u83B7\u53D6\u6BCF\u4E00\u884C\u6570\u636E
			for (let i = 0; i < th_len; i++) {
				const key = column[i]?.dataIndex as string;
				const render = column[i]?.render;
				if (key) {
					const text = render ? render(row[key], row, i) : row[key];
					const cell = row[key];
					// \u5982\u679C\u662Freact\u5143\u7D20\u4E14\u4E3A img \u5143\u7D20
					if (
						cell &&
						typeof cell === 'object' &&
						'$$typeof' in cell &&
						cell['type'] === 'img'
					) {
						const { width, height } = cell.props as HTMLImageElement;
						tbody += \`<td style="width:\${width}px;height:\${height}px;text-align: center; vertical-align: middle"><div style="display:inline">\${renderToString(
							row[key] as JSX.Element
						)}</div></td>\`;
					} else {
						// render \u8FD4\u56DE\u51FA\u6765\u7684\u662F element \u5BF9\u8C61
						if (typeof text === 'object' && '$$typeof' in text) {
							const container = document.createElement('div');
							container.innerHTML = ReactDOMServer.renderToString(text);
							tbody +=
								'<td style="text-align:center">' +
								container.textContent +
								'</td>';
						} else {
							tbody += '<td style="text-align:center">' + text + '</td>';
						}
					}
				}
			}
			tbody += '</tr>';
		}
		tbody += '</tbody>';
		const table = thead + tbody;
		// \u5BFC\u51FA\u8868\u683C
		exportToExcel(table, fileName);
	};
	return {
		exportExcel,
	};
};

export default useExportExcel;
`},17513:function(n,e){"use strict";e.Z=`export const template =
	'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>';
`},58265:function(n,e){"use strict";e.Z=`import { useEffect, useRef } from 'react';
export enum DIRECTION_SCROLL_ENUM {
	DOWN = 'down',
	UP = 'up',
}

const useScrollTopBottom = ({
	threshold = 10,
	onTop,
	onBottom,
	element = document.documentElement,
}: {
	threshold?: number;
	onTop?: () => void;
	element?: HTMLElement;
	onBottom?: () => void;
}) => {
	const beforeScrollTop = useRef<number>(0);
	const timer = useRef<NodeJS.Timeout | null>();

	/**
	 * \u5904\u7406\u7A97\u53E3\u6EDA\u52A8
	 */
	const handleWindowScroll = () => {
		// \u8DDD\u9876\u90E8
		let scrollTop = element.scrollTop || document.body.scrollTop;
		// \u53EF\u89C6\u533A\u9AD8\u5EA6
		let clientHeight = element.clientHeight || document.body.clientHeight;
		// \u6EDA\u52A8\u6761\u603B\u9AD8\u5EA6
		let scrollHeight = element.scrollHeight || document.body.scrollHeight;
		// \u786E\u5B9A\u6EDA\u52A8\u65B9\u5411
		let direction = DIRECTION_SCROLL_ENUM.DOWN;
		if (beforeScrollTop.current > scrollTop) {
			direction = DIRECTION_SCROLL_ENUM.UP;
		}
		// \u901A\u8FC7\u6EDA\u52A8\u65B9\u5411\u5224\u65AD\u662F\u89E6\u5E95\u8FD8\u662F\u89E6\u9876
		if (direction === DIRECTION_SCROLL_ENUM.DOWN) {
			if (scrollTop + clientHeight + threshold >= scrollHeight) {
				if (!timer.current) {
					timer.current = setTimeout(() => {
						onBottom?.();
						timer.current = null;
					}, 500);
				}
			}
		} else {
			// \u6EDA\u52A8\u5230\u9876\u90E8
			if (scrollTop <= threshold) {
				onTop?.();
			}
		}
		beforeScrollTop.current = scrollTop;
	};

	useEffect(() => {
		if (!element) return;
		element.addEventListener('scroll', handleWindowScroll);
		return () => {
			element.removeEventListener('scroll', handleWindowScroll);
		};
	}, [element]);
};

export default useScrollTopBottom;
`},95864:function(n,e){"use strict";e.Z=`export const getData = async () => {
	return await fetch('https://dog.ceo/api/breed/hound/images/random/10').then(
		(res) => {
			return res.json();
		}
	);
};
`},74466:function(n,e){"use strict";e.Z=`import { Image, Slider, Space } from 'antd';
import React, { FC, useEffect, useState } from 'react';
import { getData } from '../data';
import Waterfall from '../index';
const Demo1: FC = () => {
	const [width, setWidth] = useState(234);
	const [spacing, setSpacing] = useState(15);
	const [loading, setLoading] = useState(false);
	const [data, setData] = useState<any[]>([]);
	useEffect(() => {
		setLoading(true);
		setTimeout(() => {
			setData(
				[
					'https://images.dog.ceo/breeds/hound-afghan/n02088094_1479.jpg',
					'https://images.dog.ceo/breeds/hound-basset/n02088238_10140.jpg',
					'https://images.dog.ceo/breeds/hound-basset/n02088238_3359.jpg',
					'https://images.dog.ceo/breeds/hound-blood/n02088466_5432.jpg',
					'https://images.dog.ceo/breeds/hound-english/n02089973_1907.jpg',
					'https://images.dog.ceo/breeds/hound-english/n02089973_811.jpg',
					'https://images.dog.ceo/breeds/hound-english/n02089973_99.jpg',
					'https://images.dog.ceo/breeds/hound-ibizan/n02091244_2709.jpg',
					'https://images.dog.ceo/breeds/hound-ibizan/n02091244_2760.jpg',
					'https://images.dog.ceo/breeds/hound-ibizan/n02091244_589.jpg',
				] || []
			);
			setLoading(false);
		}, 250);
	}, []);
	return (
		<>
			<Space>
				<Space>
					<span>\u56FE\u7247\u5BBD\u5EA6</span>
					<Slider
						style={{ width: '400px' }}
						value={width}
						tooltip={{
							open: true,
						}}
						min={100}
						max={1000}
						onChange={(value: number) => {
							setWidth(value);
						}}
					/>
				</Space>
				<Space>
					<span>\u95F4\u8DDD</span>
					<Slider
						style={{ width: '400px' }}
						value={spacing}
						tooltip={{
							open: true,
						}}
						min={0}
						max={50}
						onChange={(value: number) => {
							setSpacing(value);
						}}
					/>
				</Space>
			</Space>
			<Waterfall
				width={width}
				spacing={spacing}
				loading={loading}
				dataSource={data.map((image) => ({ url: image }))}
				onScrollCallback={() => {
					setLoading(true);
					return getData().then((res) => {
						setLoading(false);
						return (res?.message || []).map((item: any) => ({
							url: item,
						}));
					});
				}}
				renderItem={(data) => {
					const { url, left, top, width, height } = data;
					return (
						<div
							style={{
								transform: 'translate3d(' + left + 'px, ' + top + 'px, 0)',
								width,
								height,
								position: 'absolute',
								backgroundColor: 'white',
								boxShadow: '0 0 5px #cccccc',
								padding: '10px',
								boxSizing: 'border-box',
								borderRadius: '10px',
							}}
						>
							<Image
								wrapperStyle={{ width: '100%', height: '100%' }}
								style={{ width: '100%', height: '100%' }}
								src={url}
								alt=""
							/>
						</div>
					);
				}}
			/>
		</>
	);
};

export default Demo1;
`},31089:function(n,e){"use strict";e.Z=`import { Image } from 'antd';
import React, { FC, useState } from 'react';
import Waterfall from '../index';
const Demo2: FC = () => {
	const [data] = useState<any[]>([
		'https://muddyrain-oss.oss-cn-hangzhou.aliyuncs.com/package_assets/waterfall_1.jpg',
		'image2',
		'https://muddyrain-oss.oss-cn-hangzhou.aliyuncs.com/package_assets/waterfall_2.jpg',
	]);
	return (
		<>
			<Waterfall
				dataSource={data.map((image) => ({ url: image }))}
				renderItem={(data) => {
					const { url, left, top, width, height, isLoad } = data;
					return (
						isLoad && (
							<div
								style={{
									transform: 'translate3d(' + left + 'px, ' + top + 'px, 0)',
									width,
									height,
									position: 'absolute',
									backgroundColor: 'white',
									boxShadow: '0 0 5px #cccccc',
									padding: '10px',
									boxSizing: 'border-box',
									borderRadius: '10px',
								}}
							>
								<Image
									wrapperStyle={{ width: '100%', height: '100%' }}
									style={{ width: '100%', height: '100%' }}
									src={url}
									alt=""
								/>
							</div>
						)
					);
				}}
			/>
		</>
	);
};

export default Demo2;
`},66668:function(n,e){"use strict";e.Z=`.wrapper_container {
  .waterfall_container {
    position: relative;
    margin: 0 auto;


    .waterfall_image {
      position: absolute;
    }
  }

  .waterfall_loading_box {
    display: flex;
    align-items: center;
    justify-content: center;

    .waterfall_loading {
      border: 5px solid #f3f3f3;
      border-top: 5px solid #3498db;
      border-radius: 50%;
      width: 30px;
      height: 30px;
      animation: spin 2s linear infinite;
    }

    .waterfall_loading_text {
      margin-left: 10px;
    }
  }


  width: 100%;
  margin: 0 auto;
  height: 800px;
  overflow-y: auto;
}

.waterfall_false_image {
  position: absolute;
  opacity: 0;
  left: 0;
  top: 0;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}`},77140:function(n,e){"use strict";e.Z=`import React, {
	FC,
	ReactElement,
	useEffect,
	useLayoutEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { useScrollTopBottom } from '../hooks';
import styles from './index.module.less';
import { DataSourceType, RenderDataSource, WaterfallProps } from './type.d';

const Waterfall: FC<WaterfallProps> = ({
	spacing: _spacing = 10,
	width: _imageWidth = 200,
	renderItem,
	renderKey,
	dataSource = [],
	onScrollCallback,
	loadingIcon = <div className={styles.waterfall_loading} />,
	loadingText = 'Loading...',
	threshold = 30,
	loading: _loading = false,
}) => {
	// \u6700\u5916\u5C42\u5BB9\u5668
	const wrapperRef = useRef<HTMLDivElement>(null);
	// \u56FE\u7247\u5BB9\u5668
	const containerRef = useRef<HTMLDivElement>(null);
	// \u5217\u6570\u91CF
	const columnNumber = useRef<number>(0);
	// \u8BB0\u5F55\u56FE\u7247\u5BBD\u5EA6
	const imageWidth = useRef<number>(_imageWidth);
	const spacing = useRef<number>(_spacing);
	// \u52A0\u8F7D\u4E2D
	const [loading, setLoading] = useState<boolean>(_loading);
	// \u662F\u5426\u6E32\u67D3\u5B8C\u6BD5
	const [updater, setUpdater] = useState(+new Date());
	// \u662F\u5426\u52A0\u8F7D\u6570\u636E
	const isCanLoad = useRef<boolean>(true);
	const isInitFinish = useRef<boolean>(false);
	// \u7EDF\u8BA1\u9AD8\u5EA6\u7EC4
	const heights = useRef<number[]>([]);
	// \u6570\u636E\u5217\u8868
	const dataList = useRef<RenderDataSource[]>([]);
	// \u8BA1\u7B97\u6700\u5C0F\u9AD8\u5EA6
	const getMinHeight = () => {
		const height = Math.min(...heights.current);
		const index = heights.current.findIndex((item) => item === height);
		return {
			height,
			index,
		};
	};
	// \u8BA1\u7B97\u5B9A\u4F4D
	const computedPosition = (imageHeight: number) => {
		let left = 0;
		const { index: heightIndex, height } = getMinHeight();
		if (heightIndex === 0) {
			left = heightIndex * imageWidth.current;
		} else {
			left = heightIndex * (imageWidth.current + spacing.current);
		}
		heights.current[heightIndex] += imageHeight + spacing.current;
		return {
			top: height,
			left,
		};
	};
	// \u8BA1\u7B97\u5217
	const computedColumns = () => {
		if (!containerRef.current || !wrapperRef.current) return;
		const width = wrapperRef.current.clientWidth;
		columnNumber.current = Math.floor(
			width / (imageWidth.current + spacing.current)
		);
	};
	// \u8BA1\u7B97\u5BB9\u5668\u5C3A\u5BF8
	const computedContainerSize = () => {
		if (!containerRef.current || !wrapperRef.current) return;
		// \u7EDF\u8BA1\u9AD8\u5EA6
		heights.current = Array.from({ length: columnNumber.current }).map(() => 0);
		containerRef.current.style.width =
			columnNumber.current * (imageWidth.current + spacing.current) + 'px';
		for (const item of dataList.current) {
			if (!item.isLoad) return;
			const proportion = item.width / item.height;
			const newHeight = imageWidth.current / proportion;
			const { top, left } = computedPosition(newHeight);
			item.top = top;
			item.left = left;
			item.height = newHeight;
			item.width = imageWidth.current;
		}
		const maxHeight = Math.max(...heights.current);
		containerRef.current.style.height = maxHeight + 'px';
		setUpdater(+new Date());
	};
	// \u539F\u6570\u636E\u8F6C\u4E3A\u6E32\u67D3\u6570\u636E
	const dataSourceToRenderSource = (dataSource: DataSourceType[]) => {
		return dataSource.map((item) => {
			if ('url' in item) {
				return {
					...item,
					left: 0,
					top: 0,
					isLoad: false,
					height: 0,
					isError: false,
					errorInfo: '',
					width: imageWidth.current,
				} as RenderDataSource;
			} else {
				throw new Error(
					'The data source must be an array of objects containing the \`url\` field'
				);
			}
		});
	};
	const loadImage = (item: (typeof dataSource)[number]) => {
		return new Promise<{ left: number; top: number; height: number }>(
			(resolve, reject) => {
				const image = new Image();
				image.src = item.url;
				image.className = styles.waterfall_false_image;
				image.width = imageWidth.current;
				document.body.appendChild(image);
				image.addEventListener('load', () => {
					const { left, top } = computedPosition(image.height);
					resolve({
						left,
						top,
						height: image.height,
					});
					document.body.removeChild(image);
				});
				image.onerror = (event) => {
					setLoading(false);
					reject(event);
				};
			}
		);
	};
	// \u8BA1\u7B97\u56FE\u7247\u6570\u636E
	const computedImages = (data: RenderDataSource[]) => {
		isCanLoad.current = false;
		const loadList = async () => {
			if (!containerRef.current) return;
			computedColumns();
			for (const item of data) {
				setLoading(true);
				try {
					const { left, top, height } = await loadImage(item);
					item.left = left;
					item.top = top;
					item.height = height;
					item.isLoad = true;
				} catch (error) {
					item.isLoad = false;
					item.errorInfo = error as string | Event;
				}
				dataList.current = [...dataList.current, item];
				computedContainerSize();
				setLoading(false);
			}
			isCanLoad.current = true;
		};
		loadList();
	};
	// \u76D1\u542C\u521D\u59CB\u5316
	useEffect(() => {
		if (dataSource.length && !isInitFinish.current && isCanLoad.current) {
			const _data = dataSourceToRenderSource(dataSource);
			if (_data.length) {
				computedImages([..._data]);
				isInitFinish.current = true;
			}
		}
	}, [dataSource, isInitFinish.current, isCanLoad]);
	useScrollTopBottom({
		threshold,
		element: wrapperRef.current as HTMLDivElement,
		onBottom() {
			if (!isCanLoad.current) return;
			const res = onScrollCallback?.();
			computedContainerSize();
			// \u8FD4\u56DE\u4E3Apromise \u6570\u636E
			if (res instanceof Promise) {
				res.then((res) => {
					const _data = dataSourceToRenderSource(res);
					computedImages([..._data]);
				});
			} else if (Array.isArray(res)) {
				console.log('array');
			} else {
				console.error(
					new Error(
						'The data returned by onScrollBottom is not a promise or array'
					)
				);
			}
		},
	});

	// \u521D\u59CB\u5316\u9875\u9762\u5E03\u5C40
	useLayoutEffect(() => {
		if (!containerRef.current) return;
		if (loading) return;
		imageWidth.current = _imageWidth;
		spacing.current = _spacing;
		setLoading(_loading);
		computedColumns();
		computedContainerSize();
	}, [_imageWidth, _spacing, isCanLoad.current, _loading]);

	const list = useMemo(() => {
		return dataList.current;
	}, [dataList.current, updater]);
	return (
		<div className={styles.wrapper_container} ref={wrapperRef}>
			<div className={styles.waterfall_container} ref={containerRef}>
				{list.map((item, index) => {
					let element = renderItem(item, index) as any;
					if (typeof element?.$$typeof !== 'symbol') {
						element = <>{element}</>;
					}
					return React.cloneElement(element as ReactElement, {
						key: renderKey?.(item, index) || index,
					});
				})}
			</div>
			{loading && (
				<div className={styles.waterfall_loading_box}>
					{loadingIcon}
					<div className={styles.waterfall_loading_text}>{loadingText}</div>
				</div>
			)}
		</div>
	);
};

export default Waterfall;

export * from './type.d';
`},87094:function(n,e){"use strict";e.Z=`export interface RenderDataSource {
	/**
	 * @description \u8DDD\u79BB\u5DE6\u8FB9\u7684\u8DDD\u79BB
	 * @type \`number\`
	 * @default 0
	 */
	left: number;
	/**
	 * @description \u8DDD\u79BB\u4E0A\u8FB9\u7684\u8DDD\u79BB
	 * @type \`number\`
	 * @default 0
	 */
	top: number;
	/**
	 * @description \u56FE\u7247\u5730\u5740
	 * @type \`string\`
	 * @required
	 */
	url: string;
	/**
	 * @description \u662F\u5426\u52A0\u8F7D\u5B8C\u6BD5
	 * @type \`boolean\`
	 * @default \`false\`
	 */
	isLoad: boolean;
	/**
	 * @description \u662F\u5426\u52A0\u8F7D\u62A5\u9519
	 * @type \`boolean\`
	 * @default \`false\`
	 */
	isError: boolean;
	/**
	 * @description \u62A5\u9519\u4FE1\u606F
	 * @type \`object\`
	 * @default \`-\`
	 */
	errorInfo: string | Event;
	/**
	 * @description \u56FE\u7247\u5BBD\u5EA6
	 * @type \`number\`
	 * @default 0
	 */
	width: number;
	/**
	 * @description \u56FE\u7247\u9AD8\u5EA6
	 * @type \`number\`
	 * @default 0
	 */
	height: number;
	[key: string]: any;
}
export interface DataSourceType {
	/**
	 * @description \u56FE\u7247\u5730\u5740
	 * @type \`string\`
	 * @required
	 */
	url: string;
	[key: string]: any;
}
export interface WaterfallProps {
	/**
	 * @description \u56FE\u7247\u5BBD\u5EA6
	 * @type \`number\`
	 * @default 200
	 */
	width?: number;
	/**
	 * @description \u5143\u7D20\u95F4\u8DDD
	 * @type \`number\`
	 * @default 10
	 */
	spacing?: number;
	/**
	 * @description \u52A0\u8F7D\u4E2D
	 * @type \`boolean\`
	 * @default false
	 */
	loading?: boolean;
	/**
	 * @description Loading\u56FE\u6807
	 * @type \`ReactNode\`
	 * @default Loading\u5143\u7D20
	 */
	loadingIcon?: React.ReactNode;
	/**
	 * @description Loading\u6587\u672C
	 * @type \`ReactNode | string\`
	 * @default \`Loading...\`
	 */
	loadingText?: React.ReactNode | string;
	/**
	 * @description \u81EA\u5B9A\u4E49\u6E32\u67D3\u6570\u636E
	 * @type \`(data: RenderDataSource, index: number) => React.ReactNode\`
	 * @required
	 */
	renderItem: (data: RenderDataSource, index: number) => React.ReactNode;
	/**
	 * @description \u81EA\u5B9A\u4E49\u6E32\u67D3Key
	 * @type \`(data: RenderDataSource, index: number) => string\`
	 * @default \`index\`
	 */
	renderKey?: (data: RenderDataSource, index: number) => string;
	/**
	 * @description \u6570\u636E\u6E90
	 * @type \`DataSourceType[]\` -> \`{ url:string }[]\`
	 * @required
	 */
	dataSource: DataSourceType[];
	/**
	 * @description \u4E34\u754C\u70B9 - \u6EDA\u52A8\u8DDD\u79BB\u4E8B\u4EF6\u7684\u4E34\u754C\u70B9
	 * @type \`number\`
	 * @default 30
	 */
	threshold?: number;
	/**
	 * @description \u6EDA\u52A8\u5E95\u90E8\u76D1\u542C - \u9700\u8FD4\u56DE\u6570\u636E\u6216promise\u7C7B\u578B\u7684\u6570\u636E
	 * @type \`() => Promise<DataSourceType[]> | DataSourceType[]\`
	 * @default \`void\`
	 */
	onScrollCallback?: () => Promise<DataSourceType[]> | DataSourceType[];
}
`},96446:function(n,e,t){var m=t(37923);function r(o){if(Array.isArray(o))return m(o)}n.exports=r,n.exports.__esModule=!0,n.exports.default=n.exports},64599:function(n,e,t){var m=t(96263);function r(o,v){var a=typeof Symbol!="undefined"&&o[Symbol.iterator]||o["@@iterator"];if(!a){if(Array.isArray(o)||(a=m(o))||v&&o&&typeof o.length=="number"){a&&(o=a);var x=0,D=function(){};return{s:D,n:function(){return x>=o.length?{done:!0}:{done:!1,value:o[x++]}},e:function(d){throw d},f:D}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var I=!0,p=!1,y;return{s:function(){a=a.call(o)},n:function(){var d=a.next();return I=d.done,d},e:function(d){p=!0,y=d},f:function(){try{!I&&a.return!=null&&a.return()}finally{if(p)throw y}}}}n.exports=r,n.exports.__esModule=!0,n.exports.default=n.exports},96936:function(n){function e(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports},88619:function(n){function e(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}n.exports=e,n.exports.__esModule=!0,n.exports.default=n.exports},19632:function(n,e,t){var m=t(96446),r=t(96936),o=t(96263),v=t(88619);function a(x){return m(x)||r(x)||o(x)||v()}n.exports=a,n.exports.__esModule=!0,n.exports.default=n.exports}}]);
