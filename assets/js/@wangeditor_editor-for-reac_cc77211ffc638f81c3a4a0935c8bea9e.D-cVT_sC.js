import{r as e,e as t}from"./react@19.1.1.DAMsdXqD.js";import{a as r,i as n}from"./@wangeditor_editor@5.1.23.Bf8STHT_.js";
/*! *****************************************************************************
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
***************************************************************************** */var o=function(){return o=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},o.apply(this,arguments)};function a(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),l=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)l.push(n.value)}catch(u){o={error:u}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return l}function l(r){var l=r.defaultContent,u=void 0===l?[]:l,i=r.onCreated,f=r.defaultHtml,c=void 0===f?"":f,d=r.value,s=void 0===d?"":d,v=r.onChange,m=r.defaultConfig,y=void 0===m?{}:m,g=r.mode,h=void 0===g?"default":g,p=r.style,C=void 0===p?{}:p,b=r.className,E=e.useRef(null),j=a(e.useState(null),2),w=j[0],N=j[1],S=a(e.useState(""),2),x=S[0],H=S[1],O=function(e){i&&i(e);var t=y.onCreated;t&&t(e)},D=function(e){H(e.getHtml()),v&&v(e);var t=y.onChange;t&&t(e)},R=function(e){var t=y.onDestroyed;N(null),t&&t(e)};return e.useEffect(function(){if(null!=w&&s!==x)try{w.setHtml(s)}catch(e){}},[s]),e.useEffect(function(){var e;if(null!=E.current&&null==w&&!(null===(e=E.current)||void 0===e?void 0:e.getAttribute("data-w-e-textarea"))){var t=n({selector:E.current,config:o(o({},y),{onCreated:O,onChange:D,onDestroyed:R}),content:u,html:c||s,mode:h});N(t)}},[w]),t.createElement("div",{style:C,ref:E,className:b})}function u(n){var o=n.editor,a=n.defaultConfig,l=void 0===a?{}:a,u=n.mode,i=void 0===u?"default":u,f=n.style,c=void 0===f?{}:f,d=n.className,s=e.useRef(null);return e.useEffect(function(){null!=s.current&&null!=o&&r({editor:o,selector:s.current,config:l,mode:i})},[o]),t.createElement("div",{style:c,ref:s,className:d})}export{u as c,l as u};
