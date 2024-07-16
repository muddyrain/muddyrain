(self.webpackChunkmuddyrain=self.webpackChunkmuddyrain||[]).push([[130],{85086:function(a,n,t){"use strict";t.r(n),t.d(n,{demos:function(){return _}});var u=t(15009),s=t.n(u),I=t(99289),o=t.n(I),p=t(67294),m=t(24520),_={"former-demo-demo1":{component:p.memo(p.lazy(function(){return t.e(543).then(t.bind(t,47185))})),asset:{type:"BLOCK",id:"former-demo-demo1",refAtomIds:["former"],dependencies:{"index.tsx":{type:"FILE",value:t(16854).Z},react:{type:"NPM",value:"18.3.1"},"./demo.css":{type:"FILE",value:t(62090).Z},"../former.tsx":{type:"FILE",value:t(26690).Z},antd:{type:"NPM",value:"5.19.2"},"./former.module.less":{type:"FILE",value:t(90365).Z},"./rules.ts":{type:"FILE",value:t(41415).Z}},entry:"index.tsx",description:"\u52A0\u88C5\u8FC7\u7684form\u8868\u5355\u7EC4\u4EF6\uFF0C\u62E5\u6709\u5168\u65B0\u7684\u7C7B\u578B\u652F\u6301\u7CFB\u7EDF",title:"\u57FA\u7840\u7528\u6CD5"},context:{react:t(67294),"./demo.css":t(16809),"../former.tsx":t(55457),antd:t(93989),"./former.module.less":t(52001),"./rules.ts":t(94226)},renderOpts:{compile:function(){var C=o()(s()().mark(function c(){var i,g=arguments;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,t.e(335).then(t.bind(t,37335));case 2:return d.abrupt("return",(i=d.sent).default.apply(i,g));case 3:case"end":return d.stop()}},c)}));function x(){return C.apply(this,arguments)}return x}()}},"former-demo-demo2":{component:p.memo(p.lazy(function(){return t.e(543).then(t.bind(t,9452))})),asset:{type:"BLOCK",id:"former-demo-demo2",refAtomIds:["former"],dependencies:{"index.tsx":{type:"FILE",value:t(91835).Z},antd:{type:"NPM",value:"5.19.2"},react:{type:"NPM",value:"18.3.1"},"./demo.css":{type:"FILE",value:t(62090).Z},"../former.tsx":{type:"FILE",value:t(26690).Z},"./rules.ts":{type:"FILE",value:t(41415).Z},"./former.module.less":{type:"FILE",value:t(90365).Z}},entry:"index.tsx",description:"\u52A0\u88C5\u8FC7\u7684form\u8868\u5355\u7EC4\u4EF6\uFF0C\u62E5\u6709\u5168\u65B0\u7684\u7C7B\u578B\u652F\u6301\u7CFB\u7EDF",title:"\u884C\u5185\u5E03\u5C40"},context:{antd:t(93989),react:t(67294),"./demo.css":t(16809),"../former.tsx":t(55457),"./rules.ts":t(94226),"./former.module.less":t(52001)},renderOpts:{compile:function(){var C=o()(s()().mark(function c(){var i,g=arguments;return s()().wrap(function(d){for(;;)switch(d.prev=d.next){case 0:return d.next=2,t.e(335).then(t.bind(t,37335));case 2:return d.abrupt("return",(i=d.sent).default.apply(i,g));case 3:case"end":return d.stop()}},c)}));function x(){return C.apply(this,arguments)}return x}()}}}},55457:function(a,n,t){"use strict";t.r(n);var u=t(19632),s=t.n(u),I=t(97857),o=t.n(I),p=t(5574),m=t.n(p),_=t(14726),C=t(3303),x=t(84567),c=t(65019),i=t(38289),g=t(55742),D=t(34041),d=t(59847),E=t(65520),dt=t(15746),st=t(42075),ut=t(71230),L=t(67294),it=t(52001),j=t(94226),l=t(85893),N={Button:_.ZP,Cascader:C.Z,Checkbox:x.Z,CheckboxGroup:x.Z.Group,DatePicker:c.default,Input:i.Z,Password:i.Z.Password,RadioGroup:g.ZP.Group,RangePicker:c.default.RangePicker,Select:D.default,TextArea:i.Z.TextArea,TimePicker:c.default.TimePicker,TreeSelect:d.Z},K=function(r){var y=r.dataSource,It=r.form,U=r.column,pt=U===void 0?3:U,W=r.labelCol,mt=W===void 0?6:W,k=r.wrapperCol,ct=k===void 0?16:k,z=r.itemGap,V=z===void 0?16:z,T=r.onFinish,f=r.onSubmit,b=r.onReset,vt=r.onFinishFailed,xt=r.style,yt=r.className,G=r.submitText,S=G===void 0?"":G,X=r.resetText,M=X===void 0?"":X,ft=r.submitProps,bt=r.resetProps,H=r.actionMode,$=H===void 0?"wrapper":H,J=r.renderAction,Q=r.layout,P=Q===void 0?"grid":Q,Y=r.labelClassName,Pt=Y===void 0?"":Y,q=r.labelStyle,ht=q===void 0?{}:q,tt=r.itemClassName,_t=tt===void 0?"":tt,Ct=Math.floor(24/pt),gt=(0,L.useState)({}),et=m()(gt,2),nt=et[0],Ft=et[1],Et=E.Z.useForm(),At=m()(Et,1),Dt=At[0],h=It||Dt,at=P==="inline"||P==="flex",A=function(v){return v.map(function(e,R){var B,rt=o()({label:e.label},e.itemProps);if(typeof e.view=="string"&&!(e.view in N))throw new Error("The ".concat(e.view," component is Not registered in elements"));var Tt=typeof e.view=="function"?e.view:N[e.view],St=["Select","TreeSelect","Cascader"],ot=e.prefixPlaceholder||"\u8BF7\u8F93\u5165";typeof e.view=="string"&&St.includes(e.view)&&(ot="\u8BF7\u9009\u62E9");var Mt=((B=e.rules)===null||B===void 0?void 0:B.map(function(F){return typeof F=="string"&&F in j.default?j.default[F]:F}))||[],Z=!0;if(typeof e.visible=="boolean"?Z=e.visible===void 0?!0:!!e.visible:typeof e.visible=="function"&&e.visible&&(Z=e.visible(h.getFieldValue(e.key||""),R)),Z){var lt=(0,l.jsx)(E.Z.Item,o()(o()(o()({hidden:e.hide,initialValue:e.initialValue,style:o()(o()({},at?{display:"inline-block",marginBottom:V,marginRight:V}:{}),e.width?{width:e.width}:{}),rules:[{required:e.required,message:e.requiredMsg||"".concat(e.label,"\u4E0D\u80FD\u4E3A\u7A7A")}].concat(s()(Mt))},e.onlyEntryNumber&&{getValueFromEvent:function($t){return $t.target.value.replace(/[^\d]/g,"")}}),{},{name:e.key},rt),{},{label:e.label?(0,l.jsx)("div",{className:e.labelClassName||Pt||"",style:e.labelStyle||ht||{},children:e.label}):void 0,className:"".concat(_t," ").concat(e.className," ").concat(rt.className),children:(0,l.jsx)(Tt,o()(o()(o()({placeholder:e.placeholder||ot+e.label},e.allowClear&&{allowClear:e.allowClear}),e[e.view]||{}),e==null?void 0:e.viewProps))}));return P==="grid"?(0,l.jsx)(dt.Z,{span:e.span||Ct,children:lt},e.key||R):(0,l.jsx)(L.Fragment,{children:lt},e.key||R)}return null})},w=function(){return J?J(function(){h.validateFields().then(function(v){f==null||f(v)})},function(){h.resetFields(),b==null||b()}):S||M?(0,l.jsxs)(st.Z,{children:[S&&(0,l.jsx)(_.ZP,o()(o()({type:"primary",htmlType:"submit"},ft||{}),{},{children:S})),M&&(0,l.jsx)(_.ZP,o()(o()({type:"default",htmlType:"reset"},bt),{},{onClick:function(){h.resetFields(),b==null||b()},children:M}))]}):(0,l.jsx)(l.Fragment,{})};return(0,l.jsxs)(E.Z,o()(o()({form:h,style:xt,className:"".concat(it.default.former_container," ").concat(yt),onFinish:function(v){f==null||f(v),T==null||T(v)},onFinishFailed:vt,onValuesChange:function(){Ft(h.getFieldsValue())},layout:at?"inline":"horizontal"},P==="grid"&&{labelCol:{span:mt},wrapperCol:{span:ct}}),{},{children:[P==="grid"?(0,l.jsxs)(ut.Z,{gutter:15,children:[Array.isArray(y)?A(y):A(y(nt)),$==="inner"&&(0,l.jsx)(w,{})]}):(0,l.jsxs)(l.Fragment,{children:[Array.isArray(y)?A(y):A(y(nt)),$==="inner"&&(0,l.jsx)(w,{})]}),$==="wrapper"&&P==="grid"&&(0,l.jsx)(w,{})]}))};n.default=K,K.useForm=E.Z.useForm},94226:function(a,n,t){"use strict";t.r(n);var u={username:{pattern:/^[a-zA-Z][a-zA-Z0-9_]{3,16}$/,message:"\u8BF7\u8F93\u5165\u5B57\u6BCD\u5F00\u5934\u76844\u523016\u4F4D\u7528\u6237\u540D\uFF0C\u652F\u6301\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF"},password:{pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*?_-]{6,20}$/,message:"\u8BF7\u8F93\u5165\u81F3\u5C11\u5305\u542B1\u4E2A\u5B57\u6BCD\u30011\u4E2A\u6570\u5B57\u76846~20\u4F4D\u5BC6\u7801"},mobile:{pattern:/(^[0][1-9]{2,3}-[0-9]{5,10}$)|(^0?(1[3-9])[0-9]{9}$)/,message:"\u624B\u673A\u53F7\u4E0D\u6B63\u786E"},captcha:{pattern:/^[a-zA-Z\d]{6}$/,message:"\u9A8C\u8BC1\u7801\u4E0D\u6B63\u786E"},mail:{pattern:/^[.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message:"\u90AE\u7BB1\u4E0D\u6B63\u786E"},text:{pattern:/^[A-Za-z0-9_\u4e00-\u9fa5]+$/,message:"\u652F\u6301\u4E2D\u6587\u3001\u82F1\u6587\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF"},identityCard:{pattern:/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/,message:"\u8EAB\u4EFD\u8BC1\u53F7\u4E0D\u6B63\u786E"},mobileTelephone:{pattern:/^([0][1-9]{2,3}-[0-9]{5,10}$)|(^0?(1[3-9])[0-9]{9})|(0\d{2,3}-)?(\d{7,8})$/,message:"\u56FA\u8BDD\u6216\u624B\u673A\u53F7\u4E0D\u6B63\u786E"},telephone:{pattern:/^(0\d{2,3}-)?(\d{7,8})$/,message:"\u56FA\u8BDD\u53F7\u7801\u4E0D\u6B63\u786E"},positiveInteger:{pattern:/(^[1-9]$)|(^[1-9][\d]+$)/,message:"\u8BF7\u8F93\u5165\u6B63\u6574\u6570"},integer:{pattern:/(^[0-9]$)|(^[1-9][\d]+$)/,message:"\u8BF7\u8F93\u5165\u6574\u6570"},amount:{pattern:/^(?!0*\.0*$)\d{1,16}(\.\d{1,2})?$/,message:"\u8BF7\u8F93\u5165\u5C0F\u6570\u4F4D\u4E0D\u8D85\u8FC72\u4F4D\u7684\u6B63\u6574\u6570"},bankCard:{pattern:/^([1-9]{1})(\d{12,18})$/,message:"\u94F6\u884C\u5361\u53F7\u4E0D\u6B63\u786E"},postalCode:{pattern:/^[0-8][0-7]\d{4}$/,message:"\u90AE\u653F\u7F16\u7801\u4E0D\u6B63\u786E"}};n.default=u},16809:function(a,n,t){"use strict";t.r(n)},52001:function(a,n,t){"use strict";t.r(n),n.default={former_container:"HKKdnOjeMSkLU1UTjJzD"}},91342:function(a,n,t){"use strict";t.r(n),t.d(n,{texts:function(){return s}});var u=t(24520);const s=[{value:"\u53C2\u6570",paraId:0,tocIndex:4},{value:"\u8BF4\u660E",paraId:0,tocIndex:4},{value:"\u7C7B\u578B",paraId:0,tocIndex:4},{value:"\u63CF\u8FF0\u4FE1\u606F",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u503C",paraId:0,tocIndex:4},{value:"className",paraId:0,tocIndex:4},{value:"\u7C7B\u540D",paraId:0,tocIndex:4},{value:"string",paraId:0,tocIndex:4},{value:"react - className",paraId:0,tocIndex:4},{value:"''",paraId:0,tocIndex:4},{value:"itemClassName",paraId:0,tocIndex:4},{value:"item\u7C7B\u540D",paraId:0,tocIndex:4},{value:"string",paraId:0,tocIndex:4},{value:"item \u7C7B\u540D",paraId:0,tocIndex:4},{value:"''",paraId:0,tocIndex:4},{value:"labelClassName",paraId:0,tocIndex:4},{value:"label\u7C7B\u540D",paraId:0,tocIndex:4},{value:"string",paraId:0,tocIndex:4},{value:"label\u7C7B\u540D",paraId:0,tocIndex:4},{value:"''",paraId:0,tocIndex:4},{value:"labelStyle",paraId:0,tocIndex:4},{value:"label\u6837\u5F0F",paraId:0,tocIndex:4},{value:"React.CSSProperties",paraId:0,tocIndex:4},{value:"label\u6837\u5F0F",paraId:0,tocIndex:4},{value:"{}",paraId:0,tocIndex:4},{value:"layout",paraId:0,tocIndex:4},{value:"\u5E03\u5C40\u65B9\u5F0F",paraId:0,tocIndex:4},{value:"grid | flex | inline",paraId:0,tocIndex:4},{value:"\u6805\u683C\u5E03\u5C40 | \u884C\u5185\u5E03\u5C40",paraId:0,tocIndex:4},{value:"grid",paraId:0,tocIndex:4},{value:"itemGap",paraId:0,tocIndex:4},{value:"\u95F4\u8DDD",paraId:0,tocIndex:4},{value:"number",paraId:0,tocIndex:4},{value:"\u4EC5\u5728 layout \u4E3A ",paraId:0,tocIndex:4},{value:"flex",paraId:0,tocIndex:4},{value:" | ",paraId:0,tocIndex:4},{value:"inline",paraId:0,tocIndex:4},{value:" \u65F6\u751F\u6548",paraId:0,tocIndex:4},{value:"16",paraId:0,tocIndex:4},{value:"style",paraId:0,tocIndex:4},{value:"\u6837\u5F0F",paraId:0,tocIndex:4},{value:"React.CSSProperties",paraId:0,tocIndex:4},{value:"react - style",paraId:0,tocIndex:4},{value:"{}",paraId:0,tocIndex:4},{value:"onSubmit",paraId:0,tocIndex:4},{value:"\u63D0\u4EA4\u8868\u5355\u4E14\u6570\u636E\u9A8C\u8BC1\u6210\u529F\u540E\u56DE\u8C03\u4E8B\u4EF6",paraId:0,tocIndex:4},{value:"FormProps['onFinish']",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"undefined",paraId:0,tocIndex:4},{value:"onReset",paraId:0,tocIndex:4},{value:"\u91CD\u7F6E\u8868\u5355\u540E\u56DE\u8C03\u4E8B\u4EF6",paraId:0,tocIndex:4},{value:"() => void",paraId:0,tocIndex:4},{value:"\u91CD\u7F6E\u8868\u5355\u540E\u56DE\u8C03\u4E8B\u4EF6",paraId:0,tocIndex:4},{value:"undefined",paraId:0,tocIndex:4},{value:"onFinish",paraId:0,tocIndex:4},{value:"\u63D0\u4EA4\u8868\u5355\u4E14\u6570\u636E\u9A8C\u8BC1\u6210\u529F\u540E\u56DE\u8C03\u4E8B\u4EF6",paraId:0,tocIndex:4},{value:"FormProps['onFinish']",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"undefined",paraId:0,tocIndex:4},{value:"onFinishFailed",paraId:0,tocIndex:4},{value:"\u63D0\u4EA4\u8868\u5355\u4E14\u6570\u636E\u9A8C\u8BC1\u5931\u8D25\u540E\u56DE\u8C03\u4E8B\u4EF6",paraId:0,tocIndex:4},{value:"FormProps['onFinishFailed']",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"undefined",paraId:0,tocIndex:4},{value:"form",paraId:0,tocIndex:4},{value:"Form \u5B9E\u4F8B",paraId:0,tocIndex:4},{value:"FormInstance",paraId:0,tocIndex:4},{value:"\u9ED8\u8BA4\u5185\u90E8\u521B\u5EFA\u5B9E\u4F8B\uFF0C\u5982\u8C03\u7528\u53EF\u81EA\u521B\u5EFA\u5B9E\u4F8B ",paraId:0,tocIndex:4},{value:"const [$form] = Fromer.useFrom()",paraId:0,tocIndex:4},{value:"Form->FormInstance",paraId:0,tocIndex:4},{value:"column",paraId:0,tocIndex:4},{value:"Col \u5E03\u5C40",paraId:0,tocIndex:4},{value:"number",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"3",paraId:0,tocIndex:4},{value:"dataSource",paraId:0,tocIndex:4},{value:"\u6570\u636E\u6E90",paraId:0,tocIndex:4},{value:"DataSourceItem[]  ((data: any) => DataSourceItem[])",paraId:0,tocIndex:4},{value:"-",paraId:0,tocIndex:4},{value:"[]",paraId:0,tocIndex:4},{value:"wrapperCol",paraId:0,tocIndex:4},{value:"\u5BB9\u5668\u5E03\u5C40",paraId:0,tocIndex:4},{value:"number",paraId:0,tocIndex:4},{value:"\u4EC5\u5728 layout \u4E3A ",paraId:0,tocIndex:4},{value:"grid",paraId:0,tocIndex:4},{value:" \u65F6\u751F\u6548",paraId:0,tocIndex:4},{value:"16",paraId:0,tocIndex:4},{value:"labelCol",paraId:0,tocIndex:4},{value:"\u6807\u7B7E\u5E03\u5C40",paraId:0,tocIndex:4},{value:"number",paraId:0,tocIndex:4},{value:"\u4EC5\u5728 layout \u4E3A ",paraId:0,tocIndex:4},{value:"grid",paraId:0,tocIndex:4},{value:" \u65F6\u751F\u6548",paraId:0,tocIndex:4},{value:"6",paraId:0,tocIndex:4},{value:"submitText",paraId:0,tocIndex:4},{value:"\u63D0\u4EA4\u6309\u94AE\u6587\u672C",paraId:0,tocIndex:4},{value:"string  null",paraId:0,tocIndex:4},{value:"\u5982\u679C\u503C\u4E3A ",paraId:0,tocIndex:4},{value:"null",paraId:0,tocIndex:4},{value:" \u5219\u4E0D\u663E\u793A\u8BE5\u6309\u94AE",paraId:0,tocIndex:4},{value:"''",paraId:0,tocIndex:4},{value:"resetText",paraId:0,tocIndex:4},{value:"\u91CD\u7F6E\u6309\u94AE\u6587\u672C",paraId:0,tocIndex:4},{value:"string  null",paraId:0,tocIndex:4},{value:"\u5982\u679C\u503C\u4E3A ",paraId:0,tocIndex:4},{value:"null",paraId:0,tocIndex:4},{value:" \u5219\u4E0D\u663E\u793A\u8BE5\u6309\u94AE",paraId:0,tocIndex:4},{value:"''",paraId:0,tocIndex:4},{value:"submitProps",paraId:0,tocIndex:4},{value:"\u63D0\u4EA4\u6309\u94AE\u7684props",paraId:0,tocIndex:4},{value:"ButtonProps",paraId:0,tocIndex:4},{value:"\u6309\u94AE\u7684\u53C2\u6570 - \u6E90\u81EA antd button",paraId:0,tocIndex:4},{value:"{}",paraId:0,tocIndex:4},{value:"itemProps",paraId:0,tocIndex:4},{value:"FormItem\u7684props",paraId:0,tocIndex:4},{value:"FormItemProps",paraId:0,tocIndex:4},{value:"\u8868\u5355\u9879\u7684\u53C2\u6570 - \u6E90\u81EA antd FormItem",paraId:0,tocIndex:4},{value:"{label:'\u81EA\u5B9A\u4E49'}",paraId:0,tocIndex:4},{value:"resetProps",paraId:0,tocIndex:4},{value:"\u91CD\u7F6E\u6309\u94AE\u7684props",paraId:0,tocIndex:4},{value:"ButtonProps",paraId:0,tocIndex:4},{value:"\u6309\u94AE\u7684\u53C2\u6570 - \u6E90\u81EA antd button",paraId:0,tocIndex:4},{value:"{}",paraId:0,tocIndex:4},{value:"actionMode",paraId:0,tocIndex:4},{value:"\u64CD\u4F5C\u6309\u94AE\u6A21\u5F0F",paraId:0,tocIndex:4},{value:"inner  wrapper",paraId:0,tocIndex:4},{value:"type -> `'inner'",paraId:0,tocIndex:4},{value:"'wrapper'`",paraId:0,tocIndex:4},{value:"renderAction",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u64CD\u4F5C\u6309\u94AE",paraId:0,tocIndex:4},{value:"((submit: () => void, reset: () => void) => JSX.Element)",paraId:0,tocIndex:4},{value:"\u81EA\u5B9A\u4E49\u6E32\u67D3\u7684\u6309\u94AE\u7EC4\uFF0C\u9700\u8FD4\u56DEJSX\u5143\u7D20\u5BF9\u8C61",paraId:0,tocIndex:4},{value:"undefined",paraId:0,tocIndex:4},{value:"\u53C2\u6570",paraId:1,tocIndex:5},{value:"\u8BF4\u660E",paraId:1,tocIndex:5},{value:"\u7C7B\u578B",paraId:1,tocIndex:5},{value:"\u63CF\u8FF0\u4FE1\u606F",paraId:1,tocIndex:5},{value:"\u9ED8\u8BA4\u503C",paraId:1,tocIndex:5},{value:"label",paraId:1,tocIndex:5},{value:"\u6807\u7B7E",paraId:1,tocIndex:5},{value:"string ",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"\u5FC5\u586B",paraId:1,tocIndex:5},{value:"key",paraId:1,tocIndex:5},{value:"\u8F93\u51FA\u503C\u7684",paraId:1,tocIndex:5},{value:"key",paraId:1,tocIndex:5},{value:"\u503C",paraId:1,tocIndex:5},{value:"string  number ",paraId:1,tocIndex:5},{value:"key",paraId:1,tocIndex:5},{value:"\u5FC5\u586B",paraId:1,tocIndex:5},{value:"initialValue",paraId:1,tocIndex:5},{value:"\u521D\u59CB\u503C",paraId:1,tocIndex:5},{value:"any ",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"''",paraId:1,tocIndex:5},{value:"requiredMsg",paraId:1,tocIndex:5},{value:"\u5FC5\u9009\u9879\u63D0\u793A\u6587\u672C",paraId:1,tocIndex:5},{value:"string ",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"xxx\u4E3A\u5FC5\u586B",paraId:1,tocIndex:5},{value:"placeholder",paraId:1,tocIndex:5},{value:"\u524D\u7F00\u5360\u4F4D\u5B57\u7B26",paraId:1,tocIndex:5},{value:"string ",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"\u8BF7\u8F93\u5165/\u8BF7\u9009\u62E9xxxx",paraId:1,tocIndex:5},{value:"onlyEntryNumber",paraId:1,tocIndex:5},{value:"\u4EC5\u652F\u6301\u8F93\u5165\u6570\u5B57",paraId:1,tocIndex:5},{value:"boolean ",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"false",paraId:1,tocIndex:5},{value:"allowClear",paraId:1,tocIndex:5},{value:"\u652F\u6301\u6E05\u9664",paraId:1,tocIndex:5},{value:"boolean ",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"false",paraId:1,tocIndex:5},{value:"view",paraId:1,tocIndex:5},{value:"\u5C55\u793A\u5143\u7D20",paraId:1,tocIndex:5},{value:"keyof AntdElementProps |  React.FC<{value: T; onChange: (value: T) => void; }> ",paraId:1,tocIndex:5},{value:"\u53EF\u9009\u62E9\u6027\u7684 antd \u8868\u5355\u7EC4\u4EF6 \u6216\u8005 \u81EA\u5B9A\u4E49 \u51FD\u6570\u7EC4\u4EF6",paraId:1,tocIndex:5},{value:"\u5FC5\u586B",paraId:1,tocIndex:5},{value:"viewProps",paraId:1,tocIndex:5},{value:"\u89C6\u56FE\u7EC4\u4EF6\u53C2\u6570",paraId:1,tocIndex:5},{value:"object",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"\u81EA\u5B9A\u4E49\u7EC4\u4EF6\u53C2\u6570",paraId:1,tocIndex:5},{value:"labelClassName",paraId:1,tocIndex:5},{value:"label\u7C7B\u540D",paraId:1,tocIndex:5},{value:"string",paraId:1,tocIndex:5},{value:"label\u7C7B\u540D",paraId:1,tocIndex:5},{value:"''",paraId:1,tocIndex:5},{value:"labelStyle",paraId:1,tocIndex:5},{value:"label\u6837\u5F0F",paraId:1,tocIndex:5},{value:"React.CSSProperties",paraId:1,tocIndex:5},{value:"label\u6837\u5F0F",paraId:1,tocIndex:5},{value:"{}",paraId:1,tocIndex:5},{value:"prefixPlaceholder",paraId:1,tocIndex:5},{value:"\u524D\u7F00\u5360\u4F4D\u7B26",paraId:1,tocIndex:5},{value:"string ",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"'\u8BF7\u8F93\u5165/\u8BF7\u9009\u62E9'",paraId:1,tocIndex:5},{value:"required",paraId:1,tocIndex:5},{value:"\u662F\u5426\u4E3A\u5FC5\u586B",paraId:1,tocIndex:5},{value:"boolean ",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"false",paraId:1,tocIndex:5},{value:"hide",paraId:1,tocIndex:5},{value:"\u662F\u5426\u9690\u85CF",paraId:1,tocIndex:5},{value:"boolean ",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"false",paraId:1,tocIndex:5},{value:"visible",paraId:1,tocIndex:5},{value:"\u662F\u5426\u663E\u793A",paraId:1,tocIndex:5},{value:"boolean  ((record: any, index: number) => boolean) ",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"true",paraId:1,tocIndex:5},{value:"rules",paraId:1,tocIndex:5},{value:"\u6821\u9A8C\u89C4\u5219",paraId:1,tocIndex:5},{value:"(keyof typeof rules)[]  FormItemProps['rules']  string[] ",paraId:1,tocIndex:5},{value:"\u5B57\u7B26\u4E32\u4E3A\u81EA\u5B9A\u4E49\u7C7B\u578B - \u5FC5\u987B\u662F \u81EA\u5B9A\u4E49rules\u5185\u7684 \u5426\u5219\u4E0D\u751F\u6548 \u5BF9\u8C61\u5219\u4E3A\u6807\u51C6 ",paraId:1,tocIndex:5},{value:"FormItem",paraId:1,tocIndex:5},{value:" \u89C4\u5219",paraId:1,tocIndex:5},{value:"[]",paraId:1,tocIndex:5},{value:"width",paraId:1,tocIndex:5},{value:"\u5BBD\u5EA6",paraId:1,tocIndex:5},{value:"number | string ",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"'auto'",paraId:1,tocIndex:5},{value:"span",paraId:1,tocIndex:5},{value:"Col \u5E03\u5C40",paraId:1,tocIndex:5},{value:"number ",paraId:1,tocIndex:5},{value:"-",paraId:1,tocIndex:5},{value:"8",paraId:1,tocIndex:5}]},62090:function(a,n){"use strict";n.Z=""},16854:function(a,n){"use strict";n.Z=`import React from 'react';
import Former from '../former';
import './demo.css';

const Demo = () => {
	const [$form] = Former.useForm();

	return (
		<div>
			<Former
				form={$form}
				layout="grid"
				labelCol={8}
				actionMode="wrapper"
				onSubmit={(e) => {
					console.log(e);
				}}
				itemClassName="demo_item"
				dataSource={() => {
					return [
						{
							label: '\u7528\u6237\u540D',
							key: 'username',
							view: 'Input',
							viewProps: {
								placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u540D',
							},
						},
						{
							label: '\u5BC6\u7801',
							key: 'password',
							view: 'Password',
							viewProps: {},
						},
						{
							label: '\u6570\u5B571',
							key: 'num1',
							view: 'Input',
							viewProps: {
								type: 'number',
								allowClear: true,
							},
						},
						{
							label: '\u6570\u5B572',
							key: 'num2',
							view: 'Input',
							viewProps: {
								type: 'number',
								allowClear: true,
							},
						},
						{
							label: '\u6027\u522B',
							key: 'sex',
							view: 'Select',
							viewProps: {
								options: [],
								style: {
									width: '100%',
								},
							},
						},
						{
							view: 'Button',
							viewProps: {
								type: 'primary',
								children: '\u67E5\u8BE2',
								onClick() {
									console.log('\u67E5\u8BE2');
									console.log($form.getFieldsValue());
								},
							},
						},
					];
				}}
			/>
		</div>
	);
};
export default Demo;
`},91835:function(a,n){"use strict";n.Z=`import { Form } from 'antd';
import React, { FC } from 'react';

import Former from '../former';
import './demo.css';

const C: FC<{
	name: string;
	num: number;
}> = (props) => {
	console.log('props', props);
	return <div>\u81EA\u5B9A\u4E49{props.name}</div>;
};

const Demo = () => {
	const [$form] = Form.useForm();

	return (
		<div>
			<Former
				form={$form}
				layout="flex"
				resetText={null}
				itemGap={16}
				actionMode="wrapper"
				onSubmit={(e) => {
					console.log(e);
				}}
				itemClassName="demo_item"
				labelStyle={{
					width: 200,
				}}
				dataSource={(values) => {
					return [
						{
							label: '\u7528\u6237\u540D',
							key: 'username',
							view: 'Input',
							viewProps: {
								placeholder: '\u8BF7\u8F93\u5165\u7528\u6237\u540D',
							},
						},
						{
							label: '\u5BC6\u7801',
							key: 'password',
							view: 'Input',
							viewProps: {
								type: 'password',
								allowClear: true,
							},
						},
						{
							label: '\u6570\u5B571',
							key: 'num1',
							view: 'Input',
							viewProps: {
								type: 'number',
								allowClear: true,
							},
						},
						{
							label: '\u6570\u5B572',
							key: 'num2',
							view: 'Input',
							viewProps: {
								type: 'number',
								allowClear: true,
							},
						},
						{
							label: '\u6027\u522B',
							key: 'sex',
							view: 'Select',
							viewProps: {
								options: [],
								style: {
									width: 120,
								},
							},
						},
						{
							view: 'Button',
							viewProps: {
								type: 'primary',
								children: '\u67E5\u8BE2',
								onClick() {
									console.log('\u67E5\u8BE2');
									console.log($form.getFieldsValue());
								},
							},
						},
						{
							view: 'Button',
							viewProps: {
								type: 'primary',
								children: '\u91CD\u7F6E',
							},
						},
						{
							label: '\u81EA\u5B9A\u4E49123123',
							key: 'a',
							view: C,
							viewProps: {
								num: 1,
								name: values.username,
							} as Parameters<typeof C>[0],
						},
					];
				}}
			/>
		</div>
	);
};
export default Demo;
`},90365:function(a,n){"use strict";n.Z=`:global(.ant-form-inline).former_container {
  :global {
    .ant-form-item {
      .ant-form-item-row {
        .ant-form-item-label {
          flex-shrink: 0;
        }
      }
    }
  }
}
`},26690:function(a,n){"use strict";n.Z=`import {
	Button,
	Cascader,
	Checkbox,
	Col,
	DatePicker,
	Form,
	FormItemProps,
	Input,
	Radio,
	Row,
	Select,
	Space,
	TreeSelect,
} from 'antd';
import React, { FC, Fragment, useState } from 'react';
import { AntdElementTypesProps } from './ElementViewType';
import styles from './former.module.less';
import rules from './rules';
import type { DataSourceItemType, FormerProps } from './type';
type InternalFormType = FC<FormerProps>;
type CompoundedComponent = InternalFormType & {
	useForm: typeof Form.useForm;
};
const elements = {
	Button: Button,
	Cascader: Cascader,
	Checkbox: Checkbox,
	CheckboxGroup: Checkbox.Group,
	DatePicker: DatePicker,
	Input: Input,
	Password: Input.Password,
	RadioGroup: Radio.Group,
	RangePicker: DatePicker.RangePicker,
	Select: Select,
	TextArea: Input.TextArea,
	TimePicker: DatePicker.TimePicker,
	TreeSelect: TreeSelect,
};

const Former: CompoundedComponent = ({
	dataSource,
	form: _form,
	column = 3,
	labelCol = 6,
	wrapperCol = 16,
	itemGap = 16,
	onFinish,
	onSubmit,
	onReset,
	onFinishFailed,
	style,
	className,
	submitText = '',
	resetText = '',
	submitProps,
	resetProps,
	actionMode = 'wrapper',
	renderAction,
	layout = 'grid',
	labelClassName = '',
	labelStyle = {},
	itemClassName = '',
}) => {
	const colSpan = Math.floor(24 / column);
	const [formData, setFormData] = useState({});
	const [initForm] = Form.useForm();
	const $form = _form || initForm;
	const isInlineLayout = layout === 'inline' || layout === 'flex';
	const DataSources = (_dataSource: DataSourceItemType[]) =>
		_dataSource.map((item, index) => {
			const formItemProps = {
				label: item.label,
				...item.itemProps,
			};
			// If this View is not registered in elements, an error will be reported
			if (typeof item.view === 'string' && !(item.view in elements)) {
				throw new Error(
					\`The \${item.view} component is Not registered in elements\`
				);
			}
			const Element =
				typeof item.view === 'function'
					? item.view
					: (elements[item.view] as any);

			// prefix placeholder
			const checksPlaceholderList = ['Select', 'TreeSelect', 'Cascader'];
			let prefixPlaceholder = item.prefixPlaceholder || '\u8BF7\u8F93\u5165';
			if (typeof item.view === 'string') {
				if (checksPlaceholderList.includes(item.view)) {
					prefixPlaceholder = '\u8BF7\u9009\u62E9';
				}
			}
			const formItemRules =
				(item.rules?.map((rule) => {
					if (typeof rule === 'string' && rule in rules) {
						return rules[rule as keyof typeof rules];
					} else {
						return rule;
					}
				}) as FormItemProps['rules']) || [];
			/**
			 * \u662F\u5426\u663E\u793A \u4E14\u79FB\u9664key\u5728\u8868\u5355\u4E2D
			 */
			let _visible = true;
			if (typeof item.visible === 'boolean') {
				_visible = item.visible === undefined ? true : !!item.visible;
			} else if (typeof item.visible === 'function' && item.visible) {
				_visible = item.visible($form.getFieldValue(item.key || ''), index);
			}

			if (_visible) {
				const Item = (
					<Form.Item
						hidden={item.hide}
						initialValue={item.initialValue}
						style={{
							...(isInlineLayout
								? {
										display: 'inline-block',
										marginBottom: itemGap,
										marginRight: itemGap,
								  }
								: {}),
							...(item.width ? { width: item.width } : {}),
						}}
						rules={[
							{
								required: item.required,
								message: item.requiredMsg || \`\${item.label}\u4E0D\u80FD\u4E3A\u7A7A\`,
							},
							...formItemRules,
						]}
						{...(item.onlyEntryNumber && {
							getValueFromEvent: (e) => e.target.value.replace(/[^\\d]/g, ''),
						})}
						name={item.key}
						{...formItemProps}
						label={
							item.label ? (
								<div
									className={item.labelClassName || labelClassName || ''}
									style={item.labelStyle || labelStyle || {}}
								>
									{item.label}
								</div>
							) : undefined
						}
						className={\`\${itemClassName} \${item.className} \${formItemProps.className}\`}
					>
						<Element
							placeholder={item.placeholder || prefixPlaceholder + item.label}
							{...(item.allowClear && {
								allowClear: item.allowClear,
							})}
							{...(item[item.view as keyof AntdElementTypesProps] || {})}
							{...item?.viewProps}
						/>
					</Form.Item>
				);
				if (layout === 'grid') {
					return (
						<Col
							key={(item.key as string) || index}
							span={item.span || colSpan}
						>
							{Item}
						</Col>
					);
				} else {
					return (
						<Fragment key={(item.key as string) || index}>{Item}</Fragment>
					);
				}
			}
			return null;
		});

	const ActionButtons = () => {
		if (renderAction) {
			return renderAction(
				() => {
					$form.validateFields().then((values) => {
						onSubmit?.(values);
					});
				},
				() => {
					$form.resetFields();
					onReset?.();
				}
			);
		} else {
			return !!(submitText || resetText) ? (
				<Space>
					{submitText && (
						<Button type="primary" htmlType="submit" {...(submitProps || {})}>
							{submitText}
						</Button>
					)}
					{resetText && (
						<Button
							type="default"
							htmlType="reset"
							{...resetProps}
							onClick={() => {
								$form.resetFields();
								onReset?.();
							}}
						>
							{resetText}
						</Button>
					)}
				</Space>
			) : (
				<></>
			);
		}
	};
	return (
		<Form
			form={$form}
			style={style}
			className={\`\${styles.former_container} \${className}\`}
			onFinish={(values) => {
				onSubmit?.(values);
				onFinish?.(values);
			}}
			onFinishFailed={onFinishFailed}
			onValuesChange={() => {
				setFormData($form.getFieldsValue());
			}}
			layout={isInlineLayout ? 'inline' : 'horizontal'}
			{...(layout === 'grid' && {
				labelCol: { span: labelCol },
				wrapperCol: { span: wrapperCol },
			})}
		>
			{layout === 'grid' ? (
				<Row gutter={15}>
					{Array.isArray(dataSource)
						? DataSources(dataSource)
						: DataSources(dataSource(formData))}
					{actionMode === 'inner' && <ActionButtons />}
				</Row>
			) : (
				<>
					{Array.isArray(dataSource)
						? DataSources(dataSource)
						: DataSources(dataSource(formData))}
					{actionMode === 'inner' && <ActionButtons />}
				</>
			)}

			{actionMode === 'wrapper' && layout === 'grid' && <ActionButtons />}
		</Form>
	);
};
export default Former;

Former.useForm = Form.useForm;
`},41415:function(a,n){"use strict";n.Z=`const rules = {
	username: {
		pattern: /^[a-zA-Z][a-zA-Z0-9_]{3,16}$/,
		message: '\u8BF7\u8F93\u5165\u5B57\u6BCD\u5F00\u5934\u76844\u523016\u4F4D\u7528\u6237\u540D\uFF0C\u652F\u6301\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF',
	},
	password: {
		pattern: /^(?=.*[A-Za-z])(?=.*\\d)[A-Za-z\\d!@#$%^&*?_-]{6,20}$/,
		message: '\u8BF7\u8F93\u5165\u81F3\u5C11\u5305\u542B1\u4E2A\u5B57\u6BCD\u30011\u4E2A\u6570\u5B57\u76846~20\u4F4D\u5BC6\u7801',
	},
	mobile: {
		pattern: /(^[0][1-9]{2,3}-[0-9]{5,10}$)|(^0?(1[3-9])[0-9]{9}$)/,
		message: '\u624B\u673A\u53F7\u4E0D\u6B63\u786E',
	},
	captcha: {
		pattern: /^[a-zA-Z\\d]{6}$/,
		message: '\u9A8C\u8BC1\u7801\u4E0D\u6B63\u786E',
	},
	mail: {
		pattern: /^[.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\\.[a-zA-Z0-9_-]+)+$/,
		message: '\u90AE\u7BB1\u4E0D\u6B63\u786E',
	},
	text: {
		pattern: /^[A-Za-z0-9_\\u4e00-\\u9fa5]+$/,
		message: '\u652F\u6301\u4E2D\u6587\u3001\u82F1\u6587\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF',
	},
	identityCard: {
		pattern:
			/(^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$)|(^[1-9]\\d{5}\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}$)/,
		message: '\u8EAB\u4EFD\u8BC1\u53F7\u4E0D\u6B63\u786E',
	},
	mobileTelephone: {
		pattern:
			/^([0][1-9]{2,3}-[0-9]{5,10}$)|(^0?(1[3-9])[0-9]{9})|(0\\d{2,3}-)?(\\d{7,8})$/,
		message: '\u56FA\u8BDD\u6216\u624B\u673A\u53F7\u4E0D\u6B63\u786E',
	},
	telephone: {
		pattern: /^(0\\d{2,3}-)?(\\d{7,8})$/,
		message: '\u56FA\u8BDD\u53F7\u7801\u4E0D\u6B63\u786E',
	},
	positiveInteger: {
		pattern: /(^[1-9]$)|(^[1-9][\\d]+$)/,
		message: '\u8BF7\u8F93\u5165\u6B63\u6574\u6570',
	},
	integer: {
		pattern: /(^[0-9]$)|(^[1-9][\\d]+$)/,
		message: '\u8BF7\u8F93\u5165\u6574\u6570',
	},
	amount: {
		pattern: /^(?!0*\\.0*$)\\d{1,16}(\\.\\d{1,2})?$/,
		message: '\u8BF7\u8F93\u5165\u5C0F\u6570\u4F4D\u4E0D\u8D85\u8FC72\u4F4D\u7684\u6B63\u6574\u6570',
	},
	bankCard: {
		pattern: /^([1-9]{1})(\\d{12,18})$/,
		message: '\u94F6\u884C\u5361\u53F7\u4E0D\u6B63\u786E',
	},
	postalCode: {
		pattern: /^[0-8][0-7]\\d{4}$/,
		message: '\u90AE\u653F\u7F16\u7801\u4E0D\u6B63\u786E',
	},
};

export default rules;
`},96446:function(a,n,t){var u=t(37923);function s(I){if(Array.isArray(I))return u(I)}a.exports=s,a.exports.__esModule=!0,a.exports.default=a.exports},96936:function(a){function n(t){if(typeof Symbol!="undefined"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}a.exports=n,a.exports.__esModule=!0,a.exports.default=a.exports},88619:function(a){function n(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}a.exports=n,a.exports.__esModule=!0,a.exports.default=a.exports},19632:function(a,n,t){var u=t(96446),s=t(96936),I=t(96263),o=t(88619);function p(m){return u(m)||s(m)||I(m)||o()}a.exports=p,a.exports.__esModule=!0,a.exports.default=a.exports}}]);
