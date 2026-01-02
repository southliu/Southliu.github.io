System.register(["./react@18.3.1-legacy.BXLF4n4x.js","./@wangeditor_editor@5.1.23-legacy.DQTOOVQa.js"],function(e,t){"use strict";var n,r,o,l;return{setters:[function(e){n=e.r,r=e.e},function(e){o=e.a,l=e.i}],execute:function(){e({c:function(e){var t=e.editor,l=e.defaultConfig,a=void 0===l?{}:l,u=e.mode,i=void 0===u?"default":u,c=e.style,f=void 0===c?{}:c,s=e.className,d=n.useRef(null);return n.useEffect(function(){null!=d.current&&null!=t&&o({editor:t,selector:d.current,config:a,mode:i})},[t]),r.createElement("div",{style:f,ref:d,className:s})},u:function(e){var o=e.defaultContent,u=void 0===o?[]:o,i=e.onCreated,c=e.defaultHtml,f=void 0===c?"":c,s=e.value,d=void 0===s?"":s,v=e.onChange,y=e.defaultConfig,m=void 0===y?{}:y,g=e.mode,h=void 0===g?"default":g,C=e.style,p=void 0===C?{}:C,b=e.className,E=n.useRef(null),S=a(n.useState(null),2),j=S[0],w=S[1],N=a(n.useState(""),2),x=N[0],H=N[1],O=function(e){i&&i(e);var t=m.onCreated;t&&t(e)},D=function(e){H(e.getHtml()),v&&v(e);var t=m.onChange;t&&t(e)},R=function(e){var t=m.onDestroyed;w(null),t&&t(e)};return n.useEffect(function(){if(null!=j&&d!==x)try{j.setHtml(d)}catch(r){}},[d]),n.useEffect(function(){var e;if(null!=E.current&&null==j&&!(null===(e=E.current)||void 0===e?void 0:e.getAttribute("data-w-e-textarea"))){var n=l({selector:E.current,config:t(t({},m),{onCreated:O,onChange:D,onDestroyed:R}),content:u,html:f||d,mode:h});w(n)}},[j]),r.createElement("div",{style:p,ref:E,className:b})}});
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
			***************************************************************************** */
var t=function(){return t=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},t.apply(this,arguments)};function a(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,o,l=n.call(e),a=[];try{for(;(void 0===t||t-- >0)&&!(r=l.next()).done;)a.push(r.value)}catch(e){o={error:e}}finally{try{r&&!r.done&&(n=l.return)&&n.call(l)}finally{if(o)throw o.error}}return a}}}});
