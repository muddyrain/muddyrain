"use strict";(self.webpackChunkmuddyrain=self.webpackChunkmuddyrain||[]).push([[543],{18487:function(B,i,a){a.r(i);var P=a(5574),b=a.n(P),A=a(67294),o=a(36397),F=a(16809),v=a(85893),s=function(){var c=o.Z.useForm(),u=b()(c,1),n=u[0];return(0,v.jsx)("div",{children:(0,v.jsx)(o.Z,{form:n,layout:"grid",labelCol:8,actionMode:"wrapper",onSubmit:function(d){console.log(d)},itemClassName:"demo_item",dataSource:function(){return[{label:"\u7528\u6237\u540D",key:"username",view:"Input",viewProps:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}},{label:"\u5BC6\u7801",key:"password",view:"Input",viewProps:{type:"password",allowClear:!0}},{label:"\u6570\u5B571",key:"num1",view:"Input",viewProps:{type:"number",allowClear:!0}},{label:"\u6570\u5B572",key:"num2",view:"Input",viewProps:{type:"number",allowClear:!0}},{label:"\u6027\u522B",key:"sex",view:"Select",viewProps:{options:[],style:{width:"100%"}}},{view:"Button",viewProps:{type:"primary",children:"\u67E5\u8BE2",onClick:function(){console.log("\u67E5\u8BE2"),console.log(n.getFieldsValue())}}}]}})})};i.default=s},49444:function(B,i,a){a.r(i);var P=a(5574),b=a.n(P),A=a(25796),o=a(67294),F=a(36397),v=a(16809),s=a(85893),w=function(n){return console.log("props",n),(0,s.jsxs)("div",{children:["\u81EA\u5B9A\u4E49",n.name]})},c=function(){var n=A.Z.useForm(),g=b()(n,1),d=g[0];return(0,s.jsx)("div",{children:(0,s.jsx)(F.Z,{form:d,layout:"flex",resetText:null,itemGap:16,actionMode:"wrapper",onSubmit:function(t){console.log(t)},itemClassName:"demo_item",labelStyle:{width:200},dataSource:function(t){return[{label:"\u7528\u6237\u540D",key:"username",view:"Input",viewProps:{placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D"}},{label:"\u5BC6\u7801",key:"password",view:"Input",viewProps:{type:"password",allowClear:!0}},{label:"\u6570\u5B571",key:"num1",view:"Input",viewProps:{type:"number",allowClear:!0}},{label:"\u6570\u5B572",key:"num2",view:"Input",viewProps:{type:"number",allowClear:!0}},{label:"\u6027\u522B",key:"sex",view:"Select",viewProps:{options:[],style:{width:120}}},{view:"Button",viewProps:{type:"primary",children:"\u67E5\u8BE2",onClick:function(){console.log("\u67E5\u8BE2"),console.log(d.getFieldsValue())}}},{view:"Button",viewProps:{type:"primary",children:"\u91CD\u7F6E"}},{label:"\u81EA\u5B9A\u4E49123123",key:"a",view:w,viewProps:{num:1,name:t.username}}]}})})};i.default=c},36397:function(B,i,a){a.d(i,{Z:function(){return ve}});var P=a(19632),b=a.n(P),A=a(97857),o=a.n(A),F=a(5574),v=a.n(F),s=a(15867),w=a(3303),c=a(84567),u=a(97019),n=a(50719),g=a(78045),d=a(34041),x=a(59847),t=a(25796),R=a(15746),ie=a(78957),ue=a(71230),N=a(67294),de={former_container:"HKKdnOjeMSkLU1UTjJzD"},me={username:{pattern:/^[a-zA-Z][a-zA-Z0-9_]{3,16}$/,message:"\u8BF7\u8F93\u5165\u5B57\u6BCD\u5F00\u5934\u76844\u523016\u4F4D\u7528\u6237\u540D\uFF0C\u652F\u6301\u5B57\u6BCD\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF"},password:{pattern:/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d!@#$%^&*?_-]{6,20}$/,message:"\u8BF7\u8F93\u5165\u81F3\u5C11\u5305\u542B1\u4E2A\u5B57\u6BCD\u30011\u4E2A\u6570\u5B57\u76846~20\u4F4D\u5BC6\u7801"},mobile:{pattern:/(^[0][1-9]{2,3}-[0-9]{5,10}$)|(^0?(1[3-9])[0-9]{9}$)/,message:"\u624B\u673A\u53F7\u4E0D\u6B63\u786E"},captcha:{pattern:/^[a-zA-Z\d]{6}$/,message:"\u9A8C\u8BC1\u7801\u4E0D\u6B63\u786E"},mail:{pattern:/^[.a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/,message:"\u90AE\u7BB1\u4E0D\u6B63\u786E"},text:{pattern:/^[A-Za-z0-9_\u4e00-\u9fa5]+$/,message:"\u652F\u6301\u4E2D\u6587\u3001\u82F1\u6587\u3001\u6570\u5B57\u3001\u4E0B\u5212\u7EBF"},identityCard:{pattern:/(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/,message:"\u8EAB\u4EFD\u8BC1\u53F7\u4E0D\u6B63\u786E"},mobileTelephone:{pattern:/^([0][1-9]{2,3}-[0-9]{5,10}$)|(^0?(1[3-9])[0-9]{9})|(0\d{2,3}-)?(\d{7,8})$/,message:"\u56FA\u8BDD\u6216\u624B\u673A\u53F7\u4E0D\u6B63\u786E"},telephone:{pattern:/^(0\d{2,3}-)?(\d{7,8})$/,message:"\u56FA\u8BDD\u53F7\u7801\u4E0D\u6B63\u786E"},positiveInteger:{pattern:/(^[1-9]$)|(^[1-9][\d]+$)/,message:"\u8BF7\u8F93\u5165\u6B63\u6574\u6570"},integer:{pattern:/(^[0-9]$)|(^[1-9][\d]+$)/,message:"\u8BF7\u8F93\u5165\u6574\u6570"},amount:{pattern:/^(?!0*\.0*$)\d{1,16}(\.\d{1,2})?$/,message:"\u8BF7\u8F93\u5165\u5C0F\u6570\u4F4D\u4E0D\u8D85\u8FC72\u4F4D\u7684\u6B63\u6574\u6570"},bankCard:{pattern:/^([1-9]{1})(\d{12,18})$/,message:"\u94F6\u884C\u5361\u53F7\u4E0D\u6B63\u786E"},postalCode:{pattern:/^[0-8][0-7]\d{4}$/,message:"\u90AE\u653F\u7F16\u7801\u4E0D\u6B63\u786E"}},L=me,l=a(85893),K={Button:s.ZP,Cascader:w.Z,Checkbox:c.Z,CheckboxGroup:c.Z.Group,DatePicker:u.Z,Input:n.Z,RadioGroup:g.ZP.Group,RangePicker:u.Z.RangePicker,Select:d.Z,TextArea:n.Z.TextArea,TimePicker:u.Z.TimePicker,TreeSelect:x.Z},U=function(r){var p=r.dataSource,ce=r.form,W=r.column,pe=W===void 0?3:W,z=r.labelCol,ye=z===void 0?6:z,k=r.wrapperCol,fe=k===void 0?16:k,V=r.itemGap,G=V===void 0?16:V,D=r.onFinish,y=r.onSubmit,f=r.onReset,he=r.onFinishFailed,Ce=r.style,Pe=r.className,H=r.submitText,_=H===void 0?"":H,J=r.resetText,T=J===void 0?"":J,be=r.submitProps,ge=r.resetProps,X=r.actionMode,j=X===void 0?"wrapper":X,Q=r.renderAction,Y=r.layout,h=Y===void 0?"grid":Y,q=r.labelClassName,Ee=q===void 0?"":q,ee=r.labelStyle,Ae=ee===void 0?{}:ee,ae=r.itemClassName,Fe=ae===void 0?"":ae,we=Math.floor(24/pe),$e=(0,N.useState)({}),re=v()($e,2),oe=re[0],xe=re[1],De=t.Z.useForm(),_e=v()(De,1),Te=_e[0],C=ce||Te,le=h==="inline"||h==="flex",$=function(m){return m.map(function(e,S){var O,ne=o()({label:e.label},e.itemProps);if(typeof e.view=="string"&&!(e.view in K))throw new Error("The ".concat(e.view," component is Not registered in elements"));var je=typeof e.view=="function"?e.view:K[e.view],Ze=["Select","TreeSelect","Cascader"],se=e.prefixPlaceholder||"\u8BF7\u8F93\u5165";typeof e.view=="string"&&Ze.includes(e.view)&&(se="\u8BF7\u9009\u62E9");var Me=((O=e.rules)===null||O===void 0?void 0:O.map(function(E){return typeof E=="string"&&E in L?L[E]:E}))||[],I=!0;if(typeof e.visible=="boolean"?I=e.visible===void 0?!0:!!e.visible:typeof e.visible=="function"&&e.visible&&(I=e.visible(C.getFieldValue(e.key||""),S)),I){var te=(0,l.jsx)(t.Z.Item,o()(o()(o()({hidden:e.hide,initialValue:e.initialValue,style:o()(o()({},le?{display:"inline-block",marginBottom:G,marginRight:G}:{}),e.width?{width:e.width}:{}),rules:[{required:e.required,message:e.requiredMsg||"".concat(e.label,"\u4E0D\u80FD\u4E3A\u7A7A")}].concat(b()(Me))},e.onlyEntryNumber&&{getValueFromEvent:function(Se){return Se.target.value.replace(/[^\d]/g,"")}}),{},{name:e.key},ne),{},{label:e.label?(0,l.jsx)("div",{className:e.labelClassName||Ee||"",style:e.labelStyle||Ae||{},children:e.label}):void 0,className:"".concat(Fe," ").concat(e.className," ").concat(ne.className),children:(0,l.jsx)(je,o()(o()(o()({placeholder:e.placeholder||se+e.label},e.allowClear&&{allowClear:e.allowClear}),e[e.view]||{}),e==null?void 0:e.viewProps))}));return h==="grid"?(0,l.jsx)(R.Z,{span:e.span||we,children:te},e.key||S):(0,l.jsx)(N.Fragment,{children:te},e.key||S)}return null})},Z=function(){return Q?Q(function(){C.validateFields().then(function(m){y==null||y(m)})},function(){C.resetFields(),f==null||f()}):_||T?(0,l.jsxs)(ie.Z,{children:[_&&(0,l.jsx)(s.ZP,o()(o()({type:"primary",htmlType:"submit"},be||{}),{},{children:_})),T&&(0,l.jsx)(s.ZP,o()(o()({type:"default",htmlType:"reset"},ge),{},{onClick:function(){C.resetFields(),f==null||f()},children:T}))]}):(0,l.jsx)(l.Fragment,{})};return(0,l.jsxs)(t.Z,o()(o()({form:C,style:Ce,className:"".concat(de.former_container," ").concat(Pe),onFinish:function(m){y==null||y(m),D==null||D(m)},onFinishFailed:he,onValuesChange:function(){xe(C.getFieldsValue())},layout:le?"inline":"horizontal"},h==="grid"&&{labelCol:{span:ye},wrapperCol:{span:fe}}),{},{children:[h==="grid"?(0,l.jsxs)(ue.Z,{gutter:15,children:[Array.isArray(p)?$(p):$(p(oe)),j==="inner"&&(0,l.jsx)(Z,{})]}):(0,l.jsxs)(l.Fragment,{children:[Array.isArray(p)?$(p):$(p(oe)),j==="inner"&&(0,l.jsx)(Z,{})]}),j==="wrapper"&&h==="grid"&&(0,l.jsx)(Z,{})]}))},ve=U;U.useForm=t.Z.useForm},16809:function(){}}]);
