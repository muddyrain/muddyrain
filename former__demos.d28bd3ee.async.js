(self.webpackChunkmuddyrain=self.webpackChunkmuddyrain||[]).push([[543],{5047:function(r,o,e){"use strict";e.r(o),e.d(o,{default:function(){return k}});var u=e(5574),d=e.n(u),i=e(67759),v=e(89847),b=e(34041),t=e(35006),Z=e(68351),P=e(13689),F=e(84567),w=e(59847),$=e(55742),N=e(67294),z=e(66450),A=e(85893),n=function(s){var c=s.onChange,f=s.value;return(0,N.useEffect)(function(){c("12")},[]),(0,A.jsx)("input",{type:"text",value:f,onChange:function(m){c(m.target.value)}})},T=(0,z.default)(i.Z,{elements:{Input:v.Z,Select:b.Z,DatePicker:t.Z,TimePicker:Z.Z,TextArea:v.Z.TextArea,Cascader:P.Z,CheckboxGroup:F.Z.Group,TreeSelect:w.Z,RadioGroup:$.ZP.Group,RangePicker:t.Z.RangePicker}}),M=function(){var s=T.useForm(),c=d()(s,1),f=c[0];return(0,A.jsx)("div",{children:(0,A.jsx)(T,{form:f,layout:"grid",resetText:null,actionMode:"wrapper",onSubmit:function(m){console.log(m)},dataSource:function(){return[{key:"a",label:"\u7528\u6237\u540D",view:"Input",initialValue:"",placeholder:"\u6389\u6BDB",requiredMsg:"\u54D2\u54D2\u54D2",onlyEntryNumber:!0,rules:["integer"],required:!0,Input:{}},{key:"b",label:"\u9009\u62E9\u5668",view:"Select",allowClear:!0,Select:{options:[{value:"\u5317\u4EAC",label:"\u5317\u4EAC"},{value:"\u4E0A\u6D77",label:"\u4E0A\u6D77"},{value:"\u676D\u5DDE",label:"\u676D\u5DDE"}]}},{key:"c",label:"\u65E5\u671F\u9009\u62E9\u5668",view:"DatePicker",Select:{placeholder:"\u8BF7\u8F93\u5165\u9009\u62E9\u5668"}},{key:"d",label:"\u65F6\u95F4\u9009\u62E9\u5668",view:"TimePicker",Select:{placeholder:"\u8BF7\u8F93\u5165\u9009\u62E9\u5668"}},{key:"ranger",label:"\u65F6\u95F4\u9009\u62E9\u5668",view:"RangePicker",RangePicker:{showTime:!0}},{key:"e",label:"\u7EA7\u8054\u9009\u62E9\u5668",view:"Cascader",Cascader:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"japan",label:"West Lake"}]}]}]}},{key:"f",label:"\u590D\u9009\u6846\u7EC4",view:"CheckboxGroup",CheckboxGroup:{options:[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}]}},{key:"g",label:"\u5355\u9009\u6846\u7EC4",view:"RadioGroup",RadioGroup:{options:[{label:"Apple",value:"Apple"},{label:"Pear",value:"Pear"},{label:"Orange",value:"Orange"}]}},{key:"h",label:"\u6587\u672C\u6846",view:"TextArea"},{key:"i",label:"\u6811\u5F62\u9009\u62E9",view:"TreeSelect",TreeSelect:{treeData:[{value:"parent 1",title:"parent 1",children:[{value:"parent 1-0",title:"parent 1-0",children:[{value:"leaf1",title:"leaf1"},{value:"leaf2",title:"leaf2"}]}]}]}},{key:"a2",label:"\u7528\u6237\u540D",view:n,initialValue:"12312312"}]}})})},k=M},66450:function(r,o,e){"use strict";e.r(o),e.d(o,{default:function(){return k}});var u=e(19632),d=e.n(u),i=e(5574),v=e.n(i),b=e(97857),t=e.n(b),Z=e(15746),P=e(42075),F=e(71577),w=e(71230),$=e(67294),N={layout_flex_container:"W8TKEKoe1_UOy98MmBHK"},z={username:{pattern:/^[a-zA-Z][a-zA-Z0-9_]{3,16}$/,message:"\u8BF7\u8F93\u5165\u5B57\u6BCD\u5F00\u5934\u76844\u523016\u4F4D\u7528\u6237\u540D\uFF0C\u652F\u6301\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF"},password:{pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*?_-]{6,20}$/,message:"\u8BF7\u8F93\u5165\u81F3\u5C11\u5305\u542B1\u4E2A\u5B57\u6BCD\u30011\u4E2A\u6570\u5B57\u76846~20\u4F4D\u5BC6\u7801"},mobile:{pattern:/(^[0][1-9]{2,3}-[0-9]{5,10}$)|(^0?(1[3-9])[0-9]{9}$)/,message:"\u624B\u673A\u53F7\u4E0D\u6B63\u786E"},captcha:{pattern:/^[a-zA-Z\d]{6}$/,message:"\u9A8C\u8BC1\u7801\u4E0D\u6B63\u786E"},mail:{pattern:/^[.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message:"\u90AE\u7BB1\u4E0D\u6B63\u786E"},text:{pattern:/^[A-Za-z0-9_\u4e00-\u9fa5]+$/,message:"\u652F\u6301\u4E2D\u6587\u3001\u82F1\u6587\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF"},identityCard:{pattern:/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/,message:"\u8EAB\u4EFD\u8BC1\u53F7\u4E0D\u6B63\u786E"},mobileTelephone:{pattern:/^([0][1-9]{2,3}-[0-9]{5,10}$)|(^0?(1[3-9])[0-9]{9})|(0\d{2,3}-)?(\d{7,8})$/,message:"\u56FA\u8BDD\u6216\u624B\u673A\u53F7\u4E0D\u6B63\u786E"},telephone:{pattern:/^(0\d{2,3}-)?(\d{7,8})$/,message:"\u56FA\u8BDD\u53F7\u7801\u4E0D\u6B63\u786E"},positiveInteger:{pattern:/(^[1-9]$)|(^[1-9][\d]+$)/,message:"\u8BF7\u8F93\u5165\u6B63\u6574\u6570"},integer:{pattern:/(^[0-9]$)|(^[1-9][\d]+$)/,message:"\u8BF7\u8F93\u5165\u6574\u6570"},amount:{pattern:/^(?!0*\.0*$)\d{1,16}(\.\d{1,2})?$/,message:"\u8BF7\u8F93\u5165\u5C0F\u6570\u4F4D\u4E0D\u8D85\u8FC72\u4F4D\u7684\u6B63\u6574\u6570"},bankCard:{pattern:/^([1-9]{1})(\d{12,18})$/,message:"\u94F6\u884C\u5361\u53F7\u4E0D\u6B63\u786E"},postalCode:{pattern:/^[0-8][0-7]\d{4}$/,message:"\u90AE\u653F\u7F16\u7801\u4E0D\u6B63\u786E"}},A=z,n=e(85893),T=function(s){var c=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{elements:{},rules:{}},f=c.elements,S=c.rules,m=t()(t()({},A),S),D=function(l){var y=l.dataSource,oe=l.form,K=l.column,se=K===void 0?3:K,L=l.labelCol,ie=L===void 0?6:L,U=l.wrapperCol,ue=U===void 0?16:U,E=l.onFinish,h=l.onSubmit,g=l.onReset,de=l.onFinishFailed,ve=l.style,ce=l.className,X=l.submitText,I=X===void 0?"\u63D0\u4EA4":X,J=l.resetText,R=J===void 0?"\u91CD\u7F6E":J,pe=l.submitProps,fe=l.resetProps,Q=l.actionMode,V=Q===void 0?"wrapper":Q,Y=l.renderAction,q=l.layout,_=q===void 0?"grid":q,ee=l.wrapperClassName,me=ee===void 0?"":ee,ye=Math.floor(24/se),he=(0,$.useState)({}),ae=v()(he,2),re=ae[0],ge=ae[1],xe=s.useForm(),be=v()(xe,1),Ae=be[0],x=oe||Ae,j=function(p){return p.map(function(a,Ce){var H,te=t()({label:a.label},a.itemProps);if(typeof a.view=="string"&&!(a.view in f))throw new Error("The ".concat(a.view," component is Not registered in elements"));var Fe=typeof a.view=="function"?a.view:f[a.view],$e=["Select","TreeSelect","Cascader"],ne=a.prefixPlaceholder||"\u8BF7\u8F93\u5165";typeof a.view=="string"&&$e.includes(a.view)&&(ne="\u8BF7\u9009\u62E9");var Te=((H=a.rules)===null||H===void 0?void 0:H.map(function(C){return typeof C=="string"&&C in m?m[C]:C}))||[],W=!0;if(typeof a.visible=="boolean"?W=a.visible===void 0?!0:!!a.visible:typeof a.visible=="function"&&a.visible&&(W=a.visible(x.getFieldValue(a.key),Ce)),W){var le=(0,n.jsx)(s.Item,t()(t()(t()({hidden:a.hide,initialValue:a.initialValue,style:{width:a.width||"auto"},rules:[{required:a.required,message:a.requiredMsg||"".concat(a.label,"\u4E0D\u80FD\u4E3A\u7A7A")}].concat(d()(Te))},a.onlyEntryNumber&&{getValueFromEvent:function(Se){return Se.target.value.replace(/[^\d]/g,"")}}),{},{name:a.key},te),{},{className:"".concat(a.className," ").concat(te.className),children:(0,n.jsx)(Fe,t()(t()({placeholder:a.placeholder||ne+a.label},a.allowClear&&{allowClear:a.allowClear}),a[a.view]||{}))}));return _==="grid"?(0,n.jsx)(Z.Z,{span:a.span||ye,children:le},a.key):(0,n.jsx)($.Fragment,{children:le},a.key)}return null})},G=function(){return Y?Y(function(){x.validateFields().then(function(p){h==null||h(p)})},function(){x.resetFields(),g==null||g()}):I||R?(0,n.jsxs)(P.Z,{children:[I&&(0,n.jsx)(F.ZP,t()(t()({type:"primary",htmlType:"submit"},pe||{}),{},{children:I})),R&&(0,n.jsx)(F.ZP,t()(t()({type:"default",htmlType:"reset"},fe),{},{onClick:function(){x.resetFields(),g==null||g()},children:R}))]}):(0,n.jsx)(n.Fragment,{})};return(0,n.jsxs)(s,{form:x,style:ve,className:ce,onFinish:function(p){h==null||h(p),E==null||E(p)},onFinishFailed:de,onValuesChange:function(){ge(x.getFieldsValue())},labelCol:{span:ie},wrapperCol:{span:ue},children:[_==="grid"?(0,n.jsxs)(w.Z,{gutter:15,children:[Array.isArray(y)?j(y):j(y(re)),V==="inner"&&(0,n.jsx)(G,{})]}):(0,n.jsx)("div",{className:"".concat(N.layout_flex_container," ").concat(me),children:(0,n.jsxs)(n.Fragment,{children:[Array.isArray(y)?j(y):j(y(re)),V==="inner"&&(0,n.jsx)(G,{})]})}),V==="wrapper"&&(0,n.jsx)(G,{})]})};return D.displayName="Former",D.useForm=s.useForm,D},M=T,k=M},96446:function(r,o,e){var u=e(37923);function d(i){if(Array.isArray(i))return u(i)}r.exports=d,r.exports.__esModule=!0,r.exports.default=r.exports},96936:function(r){function o(e){if(typeof Symbol!="undefined"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}r.exports=o,r.exports.__esModule=!0,r.exports.default=r.exports},88619:function(r){function o(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}r.exports=o,r.exports.__esModule=!0,r.exports.default=r.exports},19632:function(r,o,e){var u=e(96446),d=e(96936),i=e(96263),v=e(88619);function b(t){return u(t)||d(t)||i(t)||v()}r.exports=b,r.exports.__esModule=!0,r.exports.default=r.exports}}]);
