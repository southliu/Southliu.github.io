import{r as f,R as N}from"./react.c6268275.js";import{i as P,a as T}from"./@wangeditor_editor.cb6a1aca.js";/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var g=function(){return g=Object.assign||function(e){for(var r,o=1,a=arguments.length;o<a;o++)for(var n in r=arguments[o])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},g.apply(this,arguments)};function x(e,r){var o=typeof Symbol=="function"&&e[Symbol.iterator];if(!o)return e;var a,n,c=o.call(e),u=[];try{for(;(r===void 0||r-- >0)&&!(a=c.next()).done;)u.push(a.value)}catch(i){n={error:i}}finally{try{a&&!a.done&&(o=c.return)&&o.call(c)}finally{if(n)throw n.error}}return u}function z(e){var r=e.defaultContent,o=r===void 0?[]:r,a=e.onCreated,n=e.defaultHtml,c=n===void 0?"":n,u=e.value,i=u===void 0?"":u,d=e.onChange,s=e.defaultConfig,v=s===void 0?{}:s,h=e.mode,S=h===void 0?"default":h,p=e.style,w=p===void 0?{}:p,H=e.className,m=f.useRef(null),C=x(f.useState(null),2),y=C[0],E=C[1],b=x(f.useState(""),2),O=b[0],R=b[1],j=function(t){a&&a(t);var l=v.onCreated;l&&l(t)},D=function(t){R(t.getHtml()),d&&d(t);var l=v.onChange;l&&l(t)},A=function(t){var l=v.onDestroyed;E(null),l&&l(t)};return f.useEffect(function(){if(y!=null&&i!==O)try{y.setHtml(i)}catch(t){console.error(t)}},[i]),f.useEffect(function(){var t;if(m.current!=null&&y==null&&!(!((t=m.current)===null||t===void 0)&&t.getAttribute("data-w-e-textarea"))){var l=P({selector:m.current,config:g(g({},v),{onCreated:j,onChange:D,onDestroyed:A}),content:o,html:c||i,mode:S});E(l)}},[y]),N.createElement("div",{style:w,ref:m,className:H})}function B(e){var r=e.editor,o=e.defaultConfig,a=o===void 0?{}:o,n=e.mode,c=n===void 0?"default":n,u=e.style,i=u===void 0?{}:u,d=e.className,s=f.useRef(null);return f.useEffect(function(){s.current!=null&&r!=null&&T({editor:r,selector:s.current,config:a,mode:c})},[r]),N.createElement("div",{style:i,ref:s,className:d})}export{B as c,z as u};
