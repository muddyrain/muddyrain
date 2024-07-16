(self.webpackChunkmuddyrain=self.webpackChunkmuddyrain||[]).push([[904],{44401:function(o,e,t){"use strict";t.r(e),t.d(e,{demos:function(){return i}});var s=t(67294),d=t(26211),i={}},97086:function(o,e,t){"use strict";t.r(e),t.d(e,{demos:function(){return c}});var s=t(15009),d=t.n(s),i=t(99289),p=t.n(i),b=t(67294),a=t(29876),c={"docs-hooks-demo-demo":{component:b.memo(b.lazy(function(){return t.e(433).then(t.bind(t,31512))})),asset:{type:"BLOCK",id:"docs-hooks-demo-demo",refAtomIds:[],dependencies:{"index.tsx":{type:"FILE",value:t(1242).Z},muddyrain:{type:"NPM",value:"1.13.1"},antd:{type:"NPM",value:"5.19.2"},react:{type:"NPM",value:"18.3.1"},"..tsx":{type:"FILE",value:t(38833).Z},"react-dom":{type:"NPM",value:"18.3.1"},"./template.ts":{type:"FILE",value:t(17513).Z}},entry:"index.tsx"},context:{"@/tabler":t(20588),antd:t(93989),react:t(67294),"..tsx":t(90092),"react-dom/server":t(97762),"./template.ts":t(73513)},renderOpts:{compile:function(){var W=p()(d()().mark(function D(){var O,h=arguments;return d()().wrap(function(f){for(;;)switch(f.prev=f.next){case 0:return f.next=2,t.e(335).then(t.bind(t,37335));case 2:return f.abrupt("return",(O=f.sent).default.apply(O,h));case 3:case"end":return f.stop()}},D)}));function R(){return W.apply(this,arguments)}return R}()}}}},11171:function(o,e,t){"use strict";t.r(e),t.d(e,{demos:function(){return i}});var s=t(67294),d=t(68537),i={}},90092:function(o,e,t){"use strict";t.r(e);var s=t(52677),d=t.n(s),i=t(97762),p=t(73513),b="data:application/vnd.ms-excel;base64,",a=function(){var W=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"\u6587\u4EF6",R=function(h,T){var f={worksheet:T,table:h},v=function(x){return window.btoa(unescape(encodeURIComponent(x)))},I=document.createElement("a"),S=function(x,j){return x.replace(/{(\w+)}/g,function(M,n){return j[n]})};I.setAttribute("href",b+v(S(p.template,f))),I.setAttribute("download",T),I.click()},D=function(h,T){for(var f=h.length,v=T.length,I="<thead><tr>",S=0;S<f;S++){var L;I+="<th>"+((L=h[S])===null||L===void 0?void 0:L.title)+"</th>"}I+="</tr></thead>";for(var x="<tbody>",j=0;j<v;j++){x+="<tr>";for(var M=T[j],n=0;n<f;n++){var l,g,_=(l=h[n])===null||l===void 0?void 0:l.dataIndex,E=(g=h[n])===null||g===void 0?void 0:g.render;if(_){var u=E?E(M[_],M,n):M[_],m=M[_];if(m&&d()(m)==="object"&&"$$typeof"in m&&m.type==="img"){var r=m.props,y=r.width,B=r.height;x+='<td style="width:'.concat(y,"px;height:").concat(B,'px;text-align: center; vertical-align: middle"><div style="display:inline">').concat((0,i.renderToString)(M[_]),"</div></td>")}else if(d()(u)==="object"&&"$$typeof"in u){var U=document.createElement("div");U.innerHTML=i.renderToString(u),x+='<td style="text-align:center">'+U.textContent+"</td>"}else x+='<td style="text-align:center">'+u+"</td>"}}x+="</tr>"}x+="</tbody>";var P=I+x;R(P,W)};return{exportExcel:D}};e.default=a},73513:function(o,e,t){"use strict";t.r(e),t.d(e,{template:function(){return s}});var s='<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>'},20588:function(o,e,t){"use strict";t.r(e);var s=t(19632),d=t.n(s),i=t(5574),p=t.n(i),b=t(97857),a=t.n(b),c=t(96638),W=t(42075),R=t(86738),D=t(14726),O=t(83062),h=t(7513),T=t(67294),f=t(70509),v=t(85893),I=function(n,l,g){return Array.isArray(n)?[a()({title:"\u64CD\u4F5C",width:l||200,align:"center",render:function(E,u,m){return(0,v.jsx)(W.Z,{style:{padding:"0 10px"},children:n.map(function(r,y){var B=r.key||y;return typeof r.visible=="function"&&!r.visible(u,m)||r.visible===!1?null:typeof(r==null?void 0:r.content)=="function"?(0,v.jsx)("div",{children:r==null?void 0:r.content(u,m)},B):r.confirm?(0,v.jsx)(R.Z,a()(a()({title:"\u63D0\u793A",description:typeof r.confirm=="string"?r.confirm:r.confirm(u,m),disabled:!!r.disabled,okText:"\u786E\u5B9A",cancelText:"\u53D6\u6D88",onConfirm:function(){var P;(P=r.onClick)===null||P===void 0||P.call(r,u,m)}},r.confirmProps),{},{children:(0,v.jsx)(D.ZP,a()(a()({disabled:!!r.disabled,loading:!!r.loading,type:"primary"},r.props),{},{children:r.content||""}))}),B):(0,v.jsx)(D.ZP,a()(a()({loading:!!r.loading,disabled:!!r.disabled,type:"primary",onClick:function(){var P;(P=r.onClick)===null||P===void 0||P.call(r,u,m)}},r.props),{},{children:r.content}),B)})})}},g)]:[]},S=function(n){var l=n.fixed,g=n.columns,_=n.scroll,E=0,u=function m(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];r.forEach(function(y){E=E+(Number(y==null?void 0:y.width)||0),y!=null&&y.children&&m(y.children)})};return u(g),l?{scroll:a()({x:E},_)}:{}},L=function(n,l){return[a()({title:n.sortTitle||"\u5E8F\u53F7",width:n.sortWidth||80,render:function(_,E,u){return l?u+1+(((l==null?void 0:l.current)||1)-1)*((l==null?void 0:l.pageSize)||10):u+1}},n.sortProps)]},x=function(n){return n.map(function(l){return a()(a()({},l),{},{render:function(_,E,u){var m,r=((m=l.render)===null||m===void 0?void 0:m.call(l,_,E,u))||_||"-";return typeof l.ellipsis=="boolean"&&l.ellipsis?(0,v.jsx)(O.Z,a()(a()({title:_},l.ellipsisProps),{},{children:(0,v.jsx)("div",{style:{width:"100%",textOverflow:"ellipsis",overflow:"hidden"},children:r})})):(0,v.jsx)(v.Fragment,{children:r})}})})},j=function(n){var l=n.columns,g=l===void 0?[]:l,_=n.dataSource,E=_===void 0?[]:_,u=n.actions,m=u===void 0?null:u,r=n.onPageChange,y=n.actionsWidth,B=n.actionsProps,U=n.fixed,P=U===void 0?!0:U,Z=n.showSort,V=Z===void 0?!0:Z,X=(0,c.Z)({current:1,pageSize:10}),F=p()(X,2),$=F[0],Y=F[1],A=T.useRef(null),Q=T.useState(0),z=p()(Q,2),G=z[0],q=z[1],J=typeof n.pagination=="boolean"?n.pagination:a()({current:$.current,pageSize:$.pageSize,total:E.length,showTotal:function(C){return"\u5171 ".concat(C," \u6761")},onChange:function(C,K){Y({current:C,pageSize:K}),r==null||r({page:C,size:K,pageSize:K})}},n.pagination),N=function(){if(A.current){var C,K=A.current.getBoundingClientRect(),tt=K.height,et=((C=A.current.querySelector(".ant-table-thead"))===null||C===void 0?void 0:C.clientHeight)||0,w=A.current.querySelector(".ant-pagination"),H=(w==null?void 0:w.clientHeight)||0;if(w){var nt=parseInt(window.getComputedStyle(w).marginTop),rt=parseInt(window.getComputedStyle(w).marginBottom);H=H+nt+rt}var ot=tt-et-H;q(ot)}};return(0,T.useEffect)(function(){if(A.current&&n.autoHeight){var k=new IntersectionObserver(function(C){C.forEach(function(K){K.isIntersecting&&N()})});return k.observe(A.current),window.addEventListener("resize",N),function(){window.removeEventListener("resize",N),k.disconnect()}}},[A.current,n.loading,n.dataSource,n.autoHeight]),(0,v.jsx)("div",{className:"".concat(f.default.tabler_container," ").concat(n.autoHeight?f.default.autoHeight:""),ref:A,children:(0,v.jsx)(h.Z,a()(a()(a()({},n),{},{className:"".concat(f.default.tabler)},S({fixed:P,scroll:n.scroll,columns:g})),{},{columns:[].concat(d()(V?L(n,J)||[]:[]),d()(x(g)||[]),d()(I(m,y,B)||[])),scroll:a()(a()({},n.autoHeight&&G?{y:G}:{}),n.scroll),pagination:J,dataSource:E}))})};e.default=j},70509:function(o,e,t){"use strict";t.r(e),e.default={tabler_container:"g6N8LsMxSEw1Tvv6FSbq",autoHeight:"Ycel2EdgRGwcoiNaMLq9",tabler:"fVD9OLL07IUTtpS1Gl6k"}},96638:function(o,e,t){"use strict";var s=t(97582),d=t(67294),i=t(92770),p=function(b){var a=(0,s.CR)((0,d.useState)(b),2),c=a[0],W=a[1],R=(0,d.useCallback)(function(D){W(function(O){var h=(0,i.mf)(D)?D(O):D;return h?(0,s.pi)((0,s.pi)({},O),h):O})},[]);return[c,R]};e.Z=p},92770:function(o,e,t){"use strict";t.d(e,{G7:function(){return a},HD:function(){return i},Kn:function(){return s},hj:function(){return b},jn:function(){return p},mf:function(){return d}});var s=function(c){return c!==null&&typeof c=="object"},d=function(c){return typeof c=="function"},i=function(c){return typeof c=="string"},p=function(c){return typeof c=="boolean"},b=function(c){return typeof c=="number"},a=function(c){return typeof c=="undefined"}},9978:function(o,e,t){"use strict";t.r(e),t.d(e,{texts:function(){return d}});var s=t(26211);const d=[{value:"muddyrain",paraId:0,tocIndex:0},{value:" \u662F\u4E00\u6B3E react hooks \u94A9\u5B50\u51FD\u6570\u5E93\uFF0C\u4E3A\u5F00\u53D1\u8005\u63D0\u4F9B\u4E00\u4E9B\u5FEB\u901F\u5F00\u53D1\u4E1A\u52A1\u529F\u80FD\u7684\u80FD\u529B\u3002",paraId:0,tocIndex:0},{value:`npm install muddyrain

# or

pnpm install muddyrain

# or

yarn add muddyrain
`,paraId:1,tocIndex:1},{value:`import { Former } from 'muddyrain';
`,paraId:2,tocIndex:2}]},69236:function(o,e,t){"use strict";t.r(e),t.d(e,{texts:function(){return d}});var s=t(29876);const d=[{value:"\u5185\u7F6E\u4E00\u4E9B hooks \u8FDB\u884C\u5FEB\u6377\u9879\u76EE\u5F00\u53D1\u3002",paraId:0,tocIndex:0},{value:"\u5BFC\u51FAexcel",paraId:1,tocIndex:1},{value:`import { useExportExcel } from "muddyrain"

const { exportExcel } = useExportExcel('\u6587\u4EF6\u540D\u79F0');

const handleClick = () => {
  exportExcel(columns, data);
}
`,paraId:2,tocIndex:1}]},51446:function(o,e,t){"use strict";t.r(e),t.d(e,{texts:function(){return d}});var s=t(68537);const d=[]},1242:function(o,e){"use strict";e.Z=`import Tabler from '@/tabler';
import { Button } from 'antd';
import React, { FC } from 'react';
import useExportExcel from '.';

const useExportExcelDemo: FC = () => {
	const data = [
		{
			id: 1,
			name: 'muddyrain',
			age: 18,
			address: '\u5317\u4EAC\u5E02\u671D\u9633\u533A',
			img: <img src="https://random.imagecdn.app/50/50" />,
		},
	];
	const columns = [
		{
			title: '\u59D3\u540D',
			dataIndex: 'name',
		},
		{
			title: '\u5E74\u9F84',
			dataIndex: 'age',
			render(text: any) {
				return (
					<div>
						<span>{text}</span>
						<p>{'\u5E74\u9F84'}</p>
					</div>
				);
			},
		},
		{
			title: '\u5730\u5740',
			dataIndex: 'address',
		},
	];
	const { exportExcel } = useExportExcel('\u8868\u683C\u6587\u4EF6');
	return (
		<div>
			<Button
				onClick={() => {
					exportExcel(columns, data);
				}}
			>
				\u5BFC\u51FA
			</Button>
			<Tabler rowKey="id" dataSource={data} columns={columns} />
		</div>
	);
};

export default useExportExcelDemo;
`},38833:function(o,e){"use strict";e.Z=`import { TablerProps } from '@/tabler';
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
`},17513:function(o,e){"use strict";e.Z=`export const template =
	'<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta charset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table>{table}</table></body></html>';
`},96446:function(o,e,t){var s=t(37923);function d(i){if(Array.isArray(i))return s(i)}o.exports=d,o.exports.__esModule=!0,o.exports.default=o.exports},96936:function(o){function e(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}o.exports=e,o.exports.__esModule=!0,o.exports.default=o.exports},88619:function(o){function e(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}o.exports=e,o.exports.__esModule=!0,o.exports.default=o.exports},19632:function(o,e,t){var s=t(96446),d=t(96936),i=t(96263),p=t(88619);function b(a){return s(a)||d(a)||i(a)||p()}o.exports=b,o.exports.__esModule=!0,o.exports.default=o.exports}}]);
