import{g as e,f as n,i as t,r,h as o,p as a,q as i}from"./@babel_runtime@7.25.4.Dq1HoS87.js";import{r as c,e as u,R as s}from"./react@18.3.1.BUluQGWx.js";import{r as l}from"./react-is@18.3.1.D9jp0pkd.js";import{R as f,a as d}from"./react-dom@18.3.1_react@18.3.1.Dx6OJjF6.js";function p(e,n){var t=Object.assign({},e);return Array.isArray(n)&&n.forEach((function(e){delete t[e]})),t}var v=function(e){return+setTimeout(e,16)},m=function(e){return clearTimeout(e)};"undefined"!=typeof window&&"requestAnimationFrame"in window&&(v=function(e){return window.requestAnimationFrame(e)},m=function(e){return window.cancelAnimationFrame(e)});var h=0,g=new Map;function E(e){g.delete(e)}var y=function(e){var n=h+=1;return function t(r){if(0===r)E(n),e();else{var o=v((function(){t(r-1)}));g.set(n,o)}}(arguments.length>1&&void 0!==arguments[1]?arguments[1]:1),n};function b(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}function w(e,n){if(!e)return!1;if(e.contains)return e.contains(n);for(var t=n;t;){if(t===e)return!0;t=t.parentNode}return!1}y.cancel=function(e){var n=g.get(e);return E(e),m(n)};var N="data-rc-order",A="data-rc-priority",S="rc-util-key",_=new Map;function C(){var e=(arguments.length>0&&void 0!==arguments[0]?arguments[0]:{}).mark;return e?e.startsWith("data-")?e:"data-".concat(e):S}function T(e){return e.attachTo?e.attachTo:document.querySelector("head")||document.body}function M(e){return Array.from((_.get(e)||e).children).filter((function(e){return"STYLE"===e.tagName}))}function O(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!b())return null;var t=n.csp,r=n.prepend,o=n.priority,a=void 0===o?0:o,i=function(e){return"queue"===e?"prependQueue":e?"prepend":"append"}(r),c="prependQueue"===i,u=document.createElement("style");u.setAttribute(N,i),c&&a&&u.setAttribute(A,"".concat(a)),null!=t&&t.nonce&&(u.nonce=null==t?void 0:t.nonce),u.innerHTML=e;var s=T(n),l=s.firstChild;if(r){if(c){var f=(n.styles||M(s)).filter((function(e){if(!["prepend","prependQueue"].includes(e.getAttribute(N)))return!1;var n=Number(e.getAttribute(A)||0);return a>=n}));if(f.length)return s.insertBefore(u,f[f.length-1].nextSibling),u}s.insertBefore(u,l)}else s.appendChild(u);return u}function R(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=T(n);return(n.styles||M(t)).find((function(t){return t.getAttribute(C(n))===e}))}function U(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=R(e,n);t&&T(n).removeChild(t)}function L(n,t){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},o=T(r),a=M(o),i=e(e({},r),{},{styles:a});!function(e,n){var t=_.get(e);if(!t||!w(document,t)){var r=O("",n),o=r.parentNode;_.set(e,o),e.removeChild(r)}}(o,i);var c=R(t,i);if(c){var u,s,l;if(null!==(u=i.csp)&&void 0!==u&&u.nonce&&c.nonce!==(null===(s=i.csp)||void 0===s?void 0:s.nonce))c.nonce=null===(l=i.csp)||void 0===l?void 0:l.nonce;return c.innerHTML!==n&&(c.innerHTML=n),c}var f=O(n,i);return f.setAttribute(C(i),t),f}function I(e,n,t){var r=c.useRef({});return"value"in r.current&&!t(r.current.condition,n)||(r.current.value=e(),r.current.condition=n),r.current.value}var k={};function P(e,n){}function F(e,n){}function x(e,n,t){n||k[t]||(e(!1,t),k[t]=!0)}function D(e,n){x(P,e,n)}function K(e,n){x(F,e,n)}function H(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2],o=new Set;return function e(t,a){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,c=o.has(t);if(D(!c,"Warning: There may be circular references"),c)return!1;if(t===a)return!0;if(r&&i>1)return!1;o.add(t);var u=i+1;if(Array.isArray(t)){if(!Array.isArray(a)||t.length!==a.length)return!1;for(var s=0;s<t.length;s++)if(!e(t[s],a[s],u))return!1;return!0}if(t&&a&&"object"===n(t)&&"object"===n(a)){var l=Object.keys(t);return l.length===Object.keys(a).length&&l.every((function(n){return e(t[n],a[n],u)}))}return!1}(e,t)}D.preMessage=function(e){},D.resetWarned=function(){k={}},D.noteOnce=K;var j=b()?c.useLayoutEffect:c.useEffect,W=function(e,n){var t=c.useRef(!0);j((function(){return e(t.current)}),n),j((function(){return t.current=!1,function(){t.current=!0}}),[])},B=function(e,n){W((function(n){if(!n)return e()}),n)};function G(e,n){for(var t=e,r=0;r<n.length;r+=1){if(null==t)return;t=t[n[r]]}return t}function q(n,o,a,i){if(!o.length)return a;var c,u=r(o),s=u[0],l=u.slice(1);return c=n||"number"!=typeof s?Array.isArray(n)?t(n):e({},n):[],i&&void 0===a&&1===l.length?delete c[s][l[0]]:c[s]=q(c[s],l,a,i),c}function Q(e,n,t){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return n.length&&r&&void 0===t&&!G(e,n.slice(0,-1))?e:q(e,n,t,r)}function z(e){return Array.isArray(e)?[]:{}}var V="undefined"==typeof Reflect?Object.keys:Reflect.ownKeys;function Y(){for(var e=arguments.length,r=new Array(e),o=0;o<e;o++)r[o]=arguments[o];var a=z(r[0]);return r.forEach((function(e){!function r(o,i){var c,u=new Set(i),s=G(e,o),l=Array.isArray(s);if(l||"object"===n(c=s)&&null!==c&&Object.getPrototypeOf(c)===Object.prototype){if(!u.has(s)){u.add(s);var f=G(a,o);l?a=Q(a,o,[]):f&&"object"===n(f)||(a=Q(a,o,z(s))),V(s).forEach((function(e){r([].concat(t(o),[e]),u)}))}}else a=Q(a,o,s)}([])})),a}function X(e){var n=c.useRef();n.current=e;var t=c.useCallback((function(){for(var e,t=arguments.length,r=new Array(t),o=0;o<t;o++)r[o]=arguments[o];return null===(e=n.current)||void 0===e?void 0:e.call.apply(e,[n].concat(r))}),[]);return t}function Z(e){var n=c.useRef(!1),t=c.useState(e),r=o(t,2),a=r[0],i=r[1];return c.useEffect((function(){return n.current=!1,function(){n.current=!0}}),[]),[a,function(e,t){t&&n.current||i(e)}]}function $(e){return void 0!==e}function J(e,n){var t=n||{},r=t.defaultValue,a=t.value,i=t.onChange,c=t.postState,u=Z((function(){return $(a)?a:$(r)?"function"==typeof r?r():r:"function"==typeof e?e():e})),s=o(u,2),l=s[0],f=s[1],d=void 0!==a?a:l,p=c?c(d):d,v=X(i),m=Z([d]),h=o(m,2),g=h[0],E=h[1];return B((function(){var e=g[0];l!==e&&v(l,e)}),[g]),B((function(){$(a)||f(a)}),[a]),[p,X((function(e,n){f(e,n),E([d],n)}))]}var ee=function(e,t){"function"==typeof e?e(t):"object"===n(e)&&e&&"current"in e&&(e.current=t)},ne=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=n.filter(Boolean);return r.length<=1?r[0]:function(e){n.forEach((function(n){ee(n,e)}))}},te=function(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return I((function(){return ne.apply(void 0,n)}),n,(function(e,n){return e.length!==n.length||e.every((function(e,t){return e!==n[t]}))}))},re=function(e){var n,t,r=l.isMemo(e)?e.type.type:e.type;return!!("function"!=typeof r||null!==(n=r.prototype)&&void 0!==n&&n.render||r.$$typeof===l.ForwardRef)&&!!("function"!=typeof e||null!==(t=e.prototype)&&void 0!==t&&t.render||e.$$typeof===l.ForwardRef)};function oe(e){return c.isValidElement(e)&&!l.isFragment(e)}var ae=function(e){return oe(e)&&re(e)};function ie(e){return e instanceof HTMLElement||e instanceof SVGElement}function ce(e){return e&&"object"===n(e)&&ie(e.nativeElement)?e.nativeElement:ie(e)?e:null}function ue(e){var n,t=ce(e);return t||(e instanceof u.Component?null===(n=f.findDOMNode)||void 0===n?void 0:n.call(f,e):null)}function se(e){var n=c.useReducer((function(e){return e+1}),0),t=o(n,2)[1],r=c.useRef(e);return[X((function(){return r.current})),X((function(e){r.current="function"==typeof e?e(r.current):e,t()}))]}function le(e){var n;return null==e||null===(n=e.getRootNode)||void 0===n?void 0:n.call(e)}function fe(e){return function(e){return le(e)instanceof ShadowRoot}(e)?le(e):null}Number(c.version.split(".")[0]);var de="".concat("accept acceptCharset accessKey action allowFullScreen allowTransparency\n    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge\n    charSet checked classID className colSpan cols content contentEditable contextMenu\n    controls coords crossOrigin data dateTime default defer dir disabled download draggable\n    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder\n    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity\n    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media\n    mediaGroup method min minLength multiple muted name noValidate nonce open\n    optimum pattern placeholder poster preload radioGroup readOnly rel required\n    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected\n    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style\n    summary tabIndex target title type useMap value width wmode wrap"," ").concat("onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown\n    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick\n    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown\n    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel\n    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough\n    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata\n    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError").split(/[\s\n]+/);function pe(e,n){return 0===e.indexOf(n)}function ve(n){var t,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];t=!1===r?{aria:!0,data:!0,attr:!0}:!0===r?{aria:!0}:e({},r);var o={};return Object.keys(n).forEach((function(e){(t.aria&&("role"===e||pe(e,"aria-"))||t.data&&pe(e,"data-")||t.attr&&de.includes(e))&&(o[e]=n[e])})),o}var me,he={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(e){var n=e.keyCode;if(e.altKey&&!e.ctrlKey||e.metaKey||n>=he.F1&&n<=he.F12)return!1;switch(n){case he.ALT:case he.CAPS_LOCK:case he.CONTEXT_MENU:case he.CTRL:case he.DOWN:case he.END:case he.ESC:case he.HOME:case he.INSERT:case he.LEFT:case he.MAC_FF_META:case he.META:case he.NUMLOCK:case he.NUM_CENTER:case he.PAGE_DOWN:case he.PAGE_UP:case he.PAUSE:case he.PRINT_SCREEN:case he.RIGHT:case he.SHIFT:case he.UP:case he.WIN_KEY:case he.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(e){if(e>=he.ZERO&&e<=he.NINE)return!0;if(e>=he.NUM_ZERO&&e<=he.NUM_MULTIPLY)return!0;if(e>=he.A&&e<=he.Z)return!0;if(-1!==window.navigator.userAgent.indexOf("WebKit")&&0===e)return!0;switch(e){case he.SPACE:case he.QUESTION_MARK:case he.NUM_PLUS:case he.NUM_MINUS:case he.NUM_PERIOD:case he.NUM_DIVISION:case he.SEMICOLON:case he.DASH:case he.EQUALS:case he.COMMA:case he.PERIOD:case he.SLASH:case he.APOSTROPHE:case he.SINGLE_QUOTE:case he.OPEN_SQUARE_BRACKET:case he.BACKSLASH:case he.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},ge=e({},d),Ee=ge.version,ye=ge.render,be=ge.unmountComponentAtNode;try{Number((Ee||"").split(".")[0])>=18&&(me=ge.createRoot)}catch(ze){}function we(e){var t=ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;t&&"object"===n(t)&&(t.usingClientEntryPoint=e)}var Ne="__rc_react_root__";function Ae(e,n){me?function(e,n){we(!0);var t=n[Ne]||me(n);we(!1),t.render(e),n[Ne]=t}(e,n):function(e,n){ye(e,n)}(e,n)}function Se(e){return _e.apply(this,arguments)}function _e(){return(_e=a(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.resolve().then((function(){var e;null===(e=n[Ne])||void 0===e||e.unmount(),delete n[Ne]})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function Ce(e){be(e)}function Te(e){return Me.apply(this,arguments)}function Me(){return(Me=a(i().mark((function e(n){return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===me){e.next=2;break}return e.abrupt("return",Se(n));case 2:Ce(n);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}const Oe=function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var n=e.getBBox(),t=n.width,r=n.height;if(t||r)return!0}if(e.getBoundingClientRect){var o=e.getBoundingClientRect(),a=o.width,i=o.height;if(a||i)return!0}}return!1};function Re(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=[];return u.Children.forEach(e,(function(e){(null!=e||n.keepEmpty)&&(Array.isArray(e)?t=t.concat(Re(e)):l.isFragment(e)&&e.props?t=t.concat(Re(e.props.children,n)):t.push(e))})),t}var Ue;function Le(e){var n="rc-scrollbar-measure-".concat(Math.random().toString(36).substring(7)),t=document.createElement("div");t.id=n;var r,o,a=t.style;if(a.position="absolute",a.left="0",a.top="0",a.width="100px",a.height="100px",a.overflow="scroll",e){var i=getComputedStyle(e);a.scrollbarColor=i.scrollbarColor,a.scrollbarWidth=i.scrollbarWidth;var c=getComputedStyle(e,"::-webkit-scrollbar"),u=parseInt(c.width,10),s=parseInt(c.height,10);try{var l=u?"width: ".concat(c.width,";"):"",f=s?"height: ".concat(c.height,";"):"";L("\n#".concat(n,"::-webkit-scrollbar {\n").concat(l,"\n").concat(f,"\n}"),n)}catch(ze){r=u,o=s}}document.body.appendChild(t);var d=e&&r&&!isNaN(r)?r:t.offsetWidth-t.clientWidth,p=e&&o&&!isNaN(o)?o:t.offsetHeight-t.clientHeight;return document.body.removeChild(t),U(n),{width:d,height:p}}function Ie(e){return"undefined"==typeof document?0:(void 0===Ue&&(Ue=Le()),Ue.width)}function ke(e){return"undefined"!=typeof document&&e&&e instanceof Element?Le(e):{width:0,height:0}}var Pe=0,Fe=e({},s).useId;const xe=Fe?function(e){var n=Fe();return e||n}:function(e){var n=c.useState("ssr-id"),t=o(n,2),r=t[0],a=t[1];return c.useEffect((function(){var e=Pe;Pe+=1,a("rc_unique_".concat(e))}),[]),e||r};var De=function(e){if(b()&&window.document.documentElement){var n=Array.isArray(e)?e:[e],t=window.document.documentElement;return n.some((function(e){return e in t.style}))}return!1};function Ke(e,n){return Array.isArray(e)||void 0===n?De(e):function(e,n){if(!De(e))return!1;var t=document.createElement("div"),r=t.style[e];return t.style[e]=n,t.style[e]!==r}(e,n)}const He=function(){if("undefined"==typeof navigator||"undefined"==typeof window)return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(null==e?void 0:e.substr(0,4))};function je(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(Oe(e)){var t=e.nodeName.toLowerCase(),r=["input","select","textarea","button"].includes(t)||e.isContentEditable||"a"===t&&!!e.getAttribute("href"),o=e.getAttribute("tabindex"),a=Number(o),i=null;return o&&!Number.isNaN(a)?i=a:r&&null===i&&(i=0),r&&e.disabled&&(i=null),null!==i&&(i>=0||n&&i<0)}return!1}function We(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=t(e.querySelectorAll("*")).filter((function(e){return je(e,n)}));return je(e,n)&&r.unshift(e),r}function Be(e,n){return"undefined"!=typeof Proxy&&e?new Proxy(e,{get:function(e,t){if(n[t])return n[t];var r=e[t];return"function"==typeof r?r.bind(e):r}}):e}var Ge=function(){var e=c.useState(!1),n=o(e,2),t=n[0],r=n[1];return W((function(){r(He())}),[]),t};function qe(e){var n=e.getBoundingClientRect(),t=document.documentElement;return{left:n.left+(window.pageXOffset||t.scrollLeft)-(t.clientLeft||document.body.clientLeft||0),top:n.top+(window.pageYOffset||t.scrollTop)-(t.clientTop||document.body.clientTop||0)}}function Qe(e,n,t,r){var o=f.unstable_batchedUpdates?function(e){f.unstable_batchedUpdates(t,e)}:t;return null!=e&&e.addEventListener&&e.addEventListener(n,o,r),{remove:function(){null!=e&&e.removeEventListener&&e.removeEventListener(n,o,r)}}}export{ve as A,J as B,ae as C,ce as D,w as E,G as F,Q as G,Ge as H,Be as I,B as J,he as K,We as L,se as M,ue as N,K as O,Qe as P,Ie as Q,qe as R,Ke as S,L as a,D as b,b as c,X as d,ke as e,te as f,fe as g,ne as h,H as i,ee as j,ie as k,Oe as l,He as m,xe as n,I as o,Y as p,y as q,U as r,re as s,Ae as t,W as u,Te as v,P as w,Re as x,p as y,Z as z};
