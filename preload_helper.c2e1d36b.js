!function(){"use strict";var t="/muddyrain/".replace(/([^/])$/,"$1/"),e=location.pathname,n=e.startsWith(t)&&decodeURI("/".concat(e.slice(t.length)));if(n){var a=document,c=a.head,r=a.createElement.bind(a),i=function(t,e,n){var a,c=e.r[t]||(null===(a=Object.entries(e.r).find((function(e){var n=e[0];return new RegExp("^".concat(n.replace(/\/:[^/]+/g,"/[^/]+").replace("/*","/.+"),"$")).test(t)})))||void 0===a?void 0:a[1]);return null==c?void 0:c.map((function(t){var a=e.f[t][1],c=e.f[t][0];return{type:c.split(".").pop(),url:"".concat(n.publicPath).concat(c),attrs:[["data-".concat(e.b),"".concat(e.p,":").concat(a)]]}}))}(n,{"p":"muddyrain","b":"webpack","f":[["nm__dumi__dist__client__pages__Demo__index.578aa5c0.chunk.css",9],["nm__dumi__dist__client__pages__Demo__index.887a5c31.async.js",9],["nm__dumi__dist__client__pages__404.8b85f2d9.chunk.css",65],["nm__dumi__dist__client__pages__404.acab0b4b.async.js",65],["tailor__index.md.f9b613e0.async.js",114],["waterfall__index.md.7cf4ce47.async.js",236],["nm__dumi__theme-default__layouts__DocLayout__index.813a3a21.async.js",519],["scrollTable__index.md.ba701925.async.js",663],["former__index.md.356b9f4c.async.js",759],["776.e8c51481.chunk.css",776],["776.325bdc37.async.js",776],["docs__guide__index.md.5501b8a5.async.js",825],["dumi__tmp-production__dumi__theme__ContextWrapper.2d732739.async.js",923],["tabler__index.md.fcfd931f.async.js",928],["docs__index.md.33944b60.async.js",935],["dialog__index.md.34f05528.async.js",949],["docs__hooks__index.md.11a70308.async.js",973]],"r":{"/*":[2,3,6,9,10,12],"/":[14,6,9,10,12],"/guide":[11,6,9,10,12],"/hooks":[16,6,9,10,12],"/~demos/:id":[0,1,12],"/components/dialog":[15,6,9,10,12],"/components/former":[8,6,9,10,12],"/components/scroll-table":[7,6,9,10,12],"/components/tabler":[13,6,9,10,12],"/components/tailor":[4,6,9,10,12],"/components/waterfall":[5,6,9,10,12]}},{publicPath:"/muddyrain/"});null==i||i.forEach((function(t){var e,n=t.type,a=t.url;if("js"===n)(e=r("script")).src=a,e.async=!0;else{if("css"!==n)return;(e=r("link")).href=a,e.rel="preload",e.as="style"}t.attrs.forEach((function(t){e.setAttribute(t[0],t[1]||"")})),c.appendChild(e)}))}}();