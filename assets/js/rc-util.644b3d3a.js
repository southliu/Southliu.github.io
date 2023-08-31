import{e as O,r as m,R as Qe}from"./react.76efb1e3.js";import{r as b}from"./react-is.4e9f7c39.js";import{d as p,e as S,f as Y,C as ze,c as h,x as Re,y as R}from"./@babel_runtime.c8088fcd.js";import{R as C,a as Ye}from"./react-dom.9f2c8c46.js";function re(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[];return O.Children.forEach(e,function(t){t==null&&!n.keepEmpty||(Array.isArray(t)?r=r.concat(re(t)):b.isFragment(t)&&t.props?r=r.concat(re(t.props.children,n)):r.push(t))}),r}var H={},Ze=function(n){};function Xe(e,n){}function Je(e,n){}function en(){H={}}function Ce(e,n,r){!n&&!H[r]&&(e(!1,r),H[r]=!0)}function _(e,n){Ce(Xe,e,n)}function nn(e,n){Ce(Je,e,n)}_.preMessage=Ze;_.resetWarned=en;_.noteOnce=nn;function rn(e,n,r){var t=m.useRef({});return(!("value"in t.current)||r(t.current.condition,n))&&(t.current.value=e(),t.current.condition=n),t.current.value}function tn(e,n){typeof e=="function"?e(n):p(e)==="object"&&e&&"current"in e&&(e.current=n)}function an(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var t=n.filter(function(a){return a});return t.length<=1?t[0]:function(a){n.forEach(function(i){tn(i,a)})}}function dr(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return rn(function(){return an.apply(void 0,n)},n,function(t,a){return t.length===a.length&&t.every(function(i,u){return i===a[u]})})}function vr(e){var n,r,t=b.isMemo(e)?e.type.type:e.type;return!(typeof t=="function"&&!((n=t.prototype)!==null&&n!==void 0&&n.render)||typeof e=="function"&&!((r=e.prototype)!==null&&r!==void 0&&r.render))}function un(e){return e instanceof HTMLElement||e instanceof SVGElement}function mr(e){return un(e)?e:e instanceof O.Component?C.findDOMNode(e):null}function gr(e,n){var r=S({},e);return Array.isArray(n)&&n.forEach(function(t){delete r[t]}),r}var Te=function(n){return+setTimeout(n,16)},Oe=function(n){return clearTimeout(n)};typeof window<"u"&&"requestAnimationFrame"in window&&(Te=function(n){return window.requestAnimationFrame(n)},Oe=function(n){return window.cancelAnimationFrame(n)});var te=0,Z=new Map;function be(e){Z.delete(e)}var on=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;te+=1;var t=te;function a(i){if(i===0)be(t),n();else{var u=Te(function(){a(i-1)});Z.set(t,u)}}return a(r),t};on.cancel=function(e){var n=Z.get(e);return be(n),Oe(n)};function sn(e,n,r){var t=m.useRef({});return(!("value"in t.current)||r(t.current.condition,n))&&(t.current.value=e(),t.current.condition=n),t.current.value}var W={},cn=function(n){};function fn(e,n){}function ln(e,n){}function dn(){W={}}function _e(e,n,r){!n&&!W[r]&&(e(!1,r),W[r]=!0)}function U(e,n){_e(fn,e,n)}function vn(e,n){_e(ln,e,n)}U.preMessage=cn;U.resetWarned=dn;U.noteOnce=vn;function pr(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,t=new Set;function a(i,u){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,s=t.has(i);if(U(!s,"Warning: There may be circular references"),s)return!1;if(i===u)return!0;if(r&&o>1)return!1;t.add(i);var l=o+1;if(Array.isArray(i)){if(!Array.isArray(u)||i.length!==u.length)return!1;for(var d=0;d<i.length;d++)if(!a(i[d],u[d],l))return!1;return!0}if(i&&u&&p(i)==="object"&&p(u)==="object"){var v=Object.keys(i);return v.length!==Object.keys(u).length?!1:v.every(function(g){return a(i[g],u[g],l)})}return!1}return a(e,n)}function X(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function mn(e,n){if(!e)return!1;if(e.contains)return e.contains(n);for(var r=n;r;){if(r===e)return!0;r=r.parentNode}return!1}var ae="data-rc-order",ie="data-rc-priority",gn="rc-util-key",V=new Map;function Ue(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.mark;return n?n.startsWith("data-")?n:"data-".concat(n):gn}function L(e){if(e.attachTo)return e.attachTo;var n=document.querySelector("head");return n||document.body}function pn(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function Le(e){return Array.from((V.get(e)||e).children).filter(function(n){return n.tagName==="STYLE"})}function Ie(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!X())return null;var r=n.csp,t=n.prepend,a=n.priority,i=a===void 0?0:a,u=pn(t),o=u==="prependQueue",s=document.createElement("style");s.setAttribute(ae,u),o&&i&&s.setAttribute(ie,"".concat(i)),r!=null&&r.nonce&&(s.nonce=r==null?void 0:r.nonce),s.innerHTML=e;var l=L(n),d=l.firstChild;if(t){if(o){var v=Le(l).filter(function(g){if(!["prepend","prependQueue"].includes(g.getAttribute(ae)))return!1;var w=Number(g.getAttribute(ie)||0);return i>=w});if(v.length)return l.insertBefore(s,v[v.length-1].nextSibling),s}l.insertBefore(s,d)}else l.appendChild(s);return s}function Pe(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=L(n);return Le(r).find(function(t){return t.getAttribute(Ue(n))===e})}function Er(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=Pe(e,n);if(r){var t=L(n);t.removeChild(r)}}function En(e,n){var r=V.get(e);if(!r||!mn(document,r)){var t=Ie("",n),a=t.parentNode;V.set(e,a),e.removeChild(t)}}function hr(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=L(r);En(t,r);var a=Pe(n,r);if(a){var i,u;if((i=r.csp)!==null&&i!==void 0&&i.nonce&&a.nonce!==((u=r.csp)===null||u===void 0?void 0:u.nonce)){var o;a.nonce=(o=r.csp)===null||o===void 0?void 0:o.nonce}return a.innerHTML!==e&&(a.innerHTML=e),a}var s=Ie(e,r);return s.setAttribute(Ue(r),n),s}var ue=X()?m.useLayoutEffect:m.useEffect,hn=function(n,r){var t=m.useRef(!0);ue(function(){return n(t.current)},r),ue(function(){return t.current=!1,function(){t.current=!0}},[])},oe=function(n,r){hn(function(t){if(!t)return n()},r)};function B(e,n){for(var r=e,t=0;t<n.length;t+=1){if(r==null)return;r=r[n[t]]}return r}function De(e,n,r,t){if(!n.length)return r;var a=ze(n),i=a[0],u=a.slice(1),o;return!e&&typeof i=="number"?o=[]:Array.isArray(e)?o=Y(e):o=S({},e),t&&r===void 0&&u.length===1?delete o[i][u[0]]:o[i]=De(o[i],u,r,t),o}function $(e,n,r){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return n.length&&t&&r===void 0&&!B(e,n.slice(0,-1))?e:De(e,n,r,t)}function Sn(e){return p(e)==="object"&&e!==null&&Object.getPrototypeOf(e)===Object.prototype}function se(e){return Array.isArray(e)?[]:{}}function Sr(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var t=se(n[0]),a=new Set;return n.forEach(function(i){function u(o){var s=B(i,o),l=Array.isArray(s);if(l||Sn(s)){if(!a.has(s)){a.add(s);var d=B(t,o);l?t=$(t,o,[]):(!d||p(d)!=="object")&&(t=$(t,o,se(s))),Object.keys(s).forEach(function(v){u([].concat(Y(o),[v]))})}}else t=$(t,o,s)}u([])}),t}function ce(e){var n=m.useRef();n.current=e;var r=m.useCallback(function(){for(var t,a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return(t=n.current)===null||t===void 0?void 0:t.call.apply(t,[n].concat(i))},[]);return r}function Fe(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var j=Fe()?m.useLayoutEffect:m.useEffect,fe=function(n,r){var t=m.useRef(!0);j(function(){if(!t.current)return n()},r),j(function(){return t.current=!1,function(){t.current=!0}},[])};function le(e){var n=m.useRef(!1),r=m.useState(e),t=h(r,2),a=t[0],i=t[1];m.useEffect(function(){return n.current=!1,function(){n.current=!0}},[]);function u(o,s){s&&n.current||i(o)}return[a,u]}function K(e){return e!==void 0}function wr(e,n){var r=n||{},t=r.defaultValue,a=r.value,i=r.onChange,u=r.postState,o=le(function(){return K(a)?a:K(t)?typeof t=="function"?t():t:typeof e=="function"?e():e}),s=h(o,2),l=s[0],d=s[1],v=a!==void 0?a:l,g=u?u(v):v,w=ce(i),P=le([v]),N=h(P,2),y=N[0],D=N[1];fe(function(){var E=y[0];l!==E&&w(l,E)},[y]),fe(function(){K(a)||d(a)},[a]);var F=ce(function(E,M){d(E,M),D([v],M)});return[g,F]}function wn(e,n){if(!e)return!1;if(e.contains)return e.contains(n);for(var r=n;r;){if(r===e)return!0;r=r.parentNode}return!1}var de="data-rc-order",Nn="rc-util-key",q=new Map;function $e(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.mark;return n?n.startsWith("data-")?n:"data-".concat(n):Nn}function J(e){if(e.attachTo)return e.attachTo;var n=document.querySelector("head");return n||document.body}function yn(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function Ke(e){return Array.from((q.get(e)||e).children).filter(function(n){return n.tagName==="STYLE"})}function ke(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!Fe())return null;var r=n.csp,t=n.prepend,a=document.createElement("style");a.setAttribute(de,yn(t)),r!=null&&r.nonce&&(a.nonce=r==null?void 0:r.nonce),a.innerHTML=e;var i=J(n),u=i.firstChild;if(t){if(t==="queue"){var o=Ke(i).filter(function(s){return["prepend","prependQueue"].includes(s.getAttribute(de))});if(o.length)return i.insertBefore(a,o[o.length-1].nextSibling),a}i.insertBefore(a,u)}else i.appendChild(a);return a}function Mn(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=J(n);return Ke(r).find(function(t){return t.getAttribute($e(n))===e})}function An(e,n){var r=q.get(e);if(!r||!wn(document,r)){var t=ke("",n),a=t.parentNode;q.set(e,a),e.removeChild(t)}}function Nr(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=J(r);An(t,r);var a=Mn(n,r);if(a){var i,u;if((i=r.csp)!==null&&i!==void 0&&i.nonce&&a.nonce!==((u=r.csp)===null||u===void 0?void 0:u.nonce)){var o;a.nonce=(o=r.csp)===null||o===void 0?void 0:o.nonce}return a.innerHTML!==e&&(a.innerHTML=e),a}var s=ke(e,r);return s.setAttribute($e(r),n),s}function yr(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,t=new Set;function a(i,u){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,s=t.has(i);if(_(!s,"Warning: There may be circular references"),s)return!1;if(i===u)return!0;if(r&&o>1)return!1;t.add(i);var l=o+1;if(Array.isArray(i)){if(!Array.isArray(u)||i.length!==u.length)return!1;for(var d=0;d<i.length;d++)if(!a(i[d],u[d],l))return!1;return!0}if(i&&u&&p(i)==="object"&&p(u)==="object"){var v=Object.keys(i);return v.length!==Object.keys(u).length?!1:v.every(function(g){return a(i[g],u[g],l)})}return!1}return a(e,n)}function xe(e){var n;return e==null||(n=e.getRootNode)===null||n===void 0?void 0:n.call(e)}function Rn(e){return xe(e)!==(e==null?void 0:e.ownerDocument)}function Mr(e){return Rn(e)?xe(e):null}var Cn=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,Tn=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,On="".concat(Cn," ").concat(Tn).split(/[\s\n]+/),bn="aria-",_n="data-";function ve(e,n){return e.indexOf(n)===0}function Ar(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r;n===!1?r={aria:!0,data:!0,attr:!0}:n===!0?r={aria:!0}:r=S({},n);var t={};return Object.keys(e).forEach(function(a){(r.aria&&(a==="role"||ve(a,bn))||r.data&&ve(a,_n)||r.attr&&On.includes(a))&&(t[a]=e[a])}),t}var c={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(n){var r=n.keyCode;if(n.altKey&&!n.ctrlKey||n.metaKey||r>=c.F1&&r<=c.F12)return!1;switch(r){case c.ALT:case c.CAPS_LOCK:case c.CONTEXT_MENU:case c.CTRL:case c.DOWN:case c.END:case c.ESC:case c.HOME:case c.INSERT:case c.LEFT:case c.MAC_FF_META:case c.META:case c.NUMLOCK:case c.NUM_CENTER:case c.PAGE_DOWN:case c.PAGE_UP:case c.PAUSE:case c.PRINT_SCREEN:case c.RIGHT:case c.SHIFT:case c.UP:case c.WIN_KEY:case c.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(n){if(n>=c.ZERO&&n<=c.NINE||n>=c.NUM_ZERO&&n<=c.NUM_MULTIPLY||n>=c.A&&n<=c.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&n===0)return!0;switch(n){case c.SPACE:case c.QUESTION_MARK:case c.NUM_PLUS:case c.NUM_MINUS:case c.NUM_PERIOD:case c.NUM_DIVISION:case c.SEMICOLON:case c.DASH:case c.EQUALS:case c.COMMA:case c.PERIOD:case c.SLASH:case c.APOSTROPHE:case c.SINGLE_QUOTE:case c.OPEN_SQUARE_BRACKET:case c.BACKSLASH:case c.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}},A=S({},Ye),Un=A.version,Ln=A.render,In=A.unmountComponentAtNode,I;try{var Pn=Number((Un||"").split(".")[0]);Pn>=18&&(I=A.createRoot)}catch{}function me(e){var n=A.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;n&&p(n)==="object"&&(n.usingClientEntryPoint=e)}var T="__rc_react_root__";function Dn(e,n){me(!0);var r=n[T]||I(n);me(!1),r.render(e),n[T]=r}function Fn(e,n){Ln(e,n)}function Rr(e,n){if(I){Dn(e,n);return}Fn(e,n)}function $n(e){return G.apply(this,arguments)}function G(){return G=Re(R().mark(function e(n){return R().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.resolve().then(function(){var a;(a=n[T])===null||a===void 0||a.unmount(),delete n[T]}));case 1:case"end":return t.stop()}},e)})),G.apply(this,arguments)}function Kn(e){In(e)}function Cr(e){return Q.apply(this,arguments)}function Q(){return Q=Re(R().mark(function e(n){return R().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(I===void 0){t.next=2;break}return t.abrupt("return",$n(n));case 2:Kn(n);case 3:case"end":return t.stop()}},e)})),Q.apply(this,arguments)}const kn=function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var n=e.getBBox(),r=n.width,t=n.height;if(r||t)return!0}if(e.getBoundingClientRect){var a=e.getBoundingClientRect(),i=a.width,u=a.height;if(i||u)return!0}}return!1};function xn(e,n){typeof e=="function"?e(n):p(e)==="object"&&e&&"current"in e&&(e.current=n)}function Hn(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];var t=n.filter(function(a){return a});return t.length<=1?t[0]:function(a){n.forEach(function(i){xn(i,a)})}}function Tr(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];return sn(function(){return Hn.apply(void 0,n)},n,function(t,a){return t.length===a.length&&t.every(function(i,u){return i===a[u]})})}function Or(e){var n,r,t=b.isMemo(e)?e.type.type:e.type;return!(typeof t=="function"&&!((n=t.prototype)!==null&&n!==void 0&&n.render)||typeof e=="function"&&!((r=e.prototype)!==null&&r!==void 0&&r.render))}var k;function Wn(e){if(typeof document>"u")return 0;if(e||k===void 0){var n=document.createElement("div");n.style.width="100%",n.style.height="200px";var r=document.createElement("div"),t=r.style;t.position="absolute",t.top="0",t.left="0",t.pointerEvents="none",t.visibility="hidden",t.width="200px",t.height="150px",t.overflow="hidden",r.appendChild(n),document.body.appendChild(r);var a=n.offsetWidth;r.style.overflow="scroll";var i=n.offsetWidth;a===i&&(i=r.clientWidth),document.body.removeChild(r),k=a-i}return k}function ge(e){var n=e.match(/^(.*)px$/),r=Number(n==null?void 0:n[1]);return Number.isNaN(r)?Wn():r}function br(e){if(typeof document>"u"||!e||!(e instanceof Element))return{width:0,height:0};var n=getComputedStyle(e,"::-webkit-scrollbar"),r=n.width,t=n.height;return{width:ge(r),height:ge(t)}}function Vn(){var e=S({},Qe);return e.useId}var pe=0;function _r(e){var n=m.useState("ssr-id"),r=h(n,2),t=r[0],a=r[1],i=Vn(),u=i==null?void 0:i();return m.useEffect(function(){if(!i){var o=pe;pe+=1,a("rc_unique_".concat(o))}},[]),e||u||t}const Bn=function(){if(typeof navigator>"u"||typeof window>"u")return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e==null?void 0:e.substr(0,4))};var He=function(n){return+setTimeout(n,16)},We=function(n){return clearTimeout(n)};typeof window<"u"&&"requestAnimationFrame"in window&&(He=function(n){return window.requestAnimationFrame(n)},We=function(n){return window.cancelAnimationFrame(n)});var Ee=0,ee=new Map;function Ve(e){ee.delete(e)}var jn=function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;Ee+=1;var t=Ee;function a(i){if(i===0)Ve(t),n();else{var u=He(function(){a(i-1)});ee.set(t,u)}}return a(r),t};jn.cancel=function(e){var n=ee.get(e);return Ve(n),We(n)};function he(e){var n=m.useRef(!1),r=m.useState(e),t=h(r,2),a=t[0],i=t[1];m.useEffect(function(){return n.current=!1,function(){n.current=!0}},[]);function u(o,s){s&&n.current||i(o)}return[a,u]}function qn(e){return e instanceof HTMLElement||e instanceof SVGElement}function Ur(e){return qn(e)?e:e instanceof O.Component?C.findDOMNode(e):null}function Se(e){var n=m.useRef();n.current=e;var r=m.useCallback(function(){for(var t,a=arguments.length,i=new Array(a),u=0;u<a;u++)i[u]=arguments[u];return(t=n.current)===null||t===void 0?void 0:t.call.apply(t,[n].concat(i))},[]);return r}function we(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(kn(e)){var r=e.nodeName.toLowerCase(),t=["input","select","textarea","button"].includes(r)||e.isContentEditable||r==="a"&&!!e.getAttribute("href"),a=e.getAttribute("tabindex"),i=Number(a),u=null;return a&&!Number.isNaN(i)?u=i:t&&u===null&&(u=0),t&&e.disabled&&(u=null),u!==null&&(u>=0||n&&u<0)}return!1}function Lr(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r=Y(e.querySelectorAll("*")).filter(function(t){return we(t,n)});return we(e,n)&&r.unshift(e),r}const Ir=function(){if(typeof navigator>"u"||typeof window>"u")return!1;var e=navigator.userAgent||navigator.vendor||window.opera;return/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e==null?void 0:e.substr(0,4))};function x(e){return e!==void 0}function Pr(e,n){var r=n||{},t=r.defaultValue,a=r.value,i=r.onChange,u=r.postState,o=he(function(){return x(a)?a:x(t)?typeof t=="function"?t():t:typeof e=="function"?e():e}),s=h(o,2),l=s[0],d=s[1],v=a!==void 0?a:l,g=u?u(v):v,w=Se(i),P=he([v]),N=h(P,2),y=N[0],D=N[1];oe(function(){var E=y[0];l!==E&&w(l,E)},[y]),oe(function(){x(a)||d(a)},[a]);var F=Se(function(E,M){d(E,M),D([v],M)});return[g,F]}var f={MAC_ENTER:3,BACKSPACE:8,TAB:9,NUM_CENTER:12,ENTER:13,SHIFT:16,CTRL:17,ALT:18,PAUSE:19,CAPS_LOCK:20,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,PRINT_SCREEN:44,INSERT:45,DELETE:46,ZERO:48,ONE:49,TWO:50,THREE:51,FOUR:52,FIVE:53,SIX:54,SEVEN:55,EIGHT:56,NINE:57,QUESTION_MARK:63,A:65,B:66,C:67,D:68,E:69,F:70,G:71,H:72,I:73,J:74,K:75,L:76,M:77,N:78,O:79,P:80,Q:81,R:82,S:83,T:84,U:85,V:86,W:87,X:88,Y:89,Z:90,META:91,WIN_KEY_RIGHT:92,CONTEXT_MENU:93,NUM_ZERO:96,NUM_ONE:97,NUM_TWO:98,NUM_THREE:99,NUM_FOUR:100,NUM_FIVE:101,NUM_SIX:102,NUM_SEVEN:103,NUM_EIGHT:104,NUM_NINE:105,NUM_MULTIPLY:106,NUM_PLUS:107,NUM_MINUS:109,NUM_PERIOD:110,NUM_DIVISION:111,F1:112,F2:113,F3:114,F4:115,F5:116,F6:117,F7:118,F8:119,F9:120,F10:121,F11:122,F12:123,NUMLOCK:144,SEMICOLON:186,DASH:189,EQUALS:187,COMMA:188,PERIOD:190,SLASH:191,APOSTROPHE:192,SINGLE_QUOTE:222,OPEN_SQUARE_BRACKET:219,BACKSLASH:220,CLOSE_SQUARE_BRACKET:221,WIN_KEY:224,MAC_FF_META:224,WIN_IME:229,isTextModifyingKeyEvent:function(n){var r=n.keyCode;if(n.altKey&&!n.ctrlKey||n.metaKey||r>=f.F1&&r<=f.F12)return!1;switch(r){case f.ALT:case f.CAPS_LOCK:case f.CONTEXT_MENU:case f.CTRL:case f.DOWN:case f.END:case f.ESC:case f.HOME:case f.INSERT:case f.LEFT:case f.MAC_FF_META:case f.META:case f.NUMLOCK:case f.NUM_CENTER:case f.PAGE_DOWN:case f.PAGE_UP:case f.PAUSE:case f.PRINT_SCREEN:case f.RIGHT:case f.SHIFT:case f.UP:case f.WIN_KEY:case f.WIN_KEY_RIGHT:return!1;default:return!0}},isCharacterKey:function(n){if(n>=f.ZERO&&n<=f.NINE||n>=f.NUM_ZERO&&n<=f.NUM_MULTIPLY||n>=f.A&&n<=f.Z||window.navigator.userAgent.indexOf("WebKit")!==-1&&n===0)return!0;switch(n){case f.SPACE:case f.QUESTION_MARK:case f.NUM_PLUS:case f.NUM_MINUS:case f.NUM_PERIOD:case f.NUM_DIVISION:case f.SEMICOLON:case f.DASH:case f.EQUALS:case f.COMMA:case f.PERIOD:case f.SLASH:case f.APOSTROPHE:case f.SINGLE_QUOTE:case f.OPEN_SQUARE_BRACKET:case f.BACKSLASH:case f.CLOSE_SQUARE_BRACKET:return!0;default:return!1}}};function Ne(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=[];return O.Children.forEach(e,function(t){t==null&&!n.keepEmpty||(Array.isArray(t)?r=r.concat(Ne(t)):b.isFragment(t)&&t.props?r=r.concat(Ne(t.props.children,n)):r.push(t))}),r}function Dr(e,n){var r=S({},e);return Array.isArray(n)&&n.forEach(function(t){delete r[t]}),r}var Fr=function(){var n=m.useState(!1),r=h(n,2),t=r[0],a=r[1];return j(function(){a(Bn())},[]),t};function $r(e){var n=e.getBoundingClientRect(),r=document.documentElement;return{left:n.left+(window.pageXOffset||r.scrollLeft)-(r.clientLeft||document.body.clientLeft||0),top:n.top+(window.pageYOffset||r.scrollTop)-(r.clientTop||document.body.clientTop||0)}}function Kr(e,n,r,t){var a=C.unstable_batchedUpdates?function(u){C.unstable_batchedUpdates(r,u)}:r;return e!=null&&e.addEventListener&&e.addEventListener(n,a,t),{remove:function(){e!=null&&e.removeEventListener&&e.removeEventListener(n,a,t)}}}function kr(e,n){for(var r=e,t=0;t<n.length;t+=1){if(r==null)return;r=r[n[t]]}return r}const xr=function(e){if(!e)return!1;if(e instanceof Element){if(e.offsetParent)return!0;if(e.getBBox){var n=e.getBBox(),r=n.width,t=n.height;if(r||t)return!0}if(e.getBoundingClientRect){var a=e.getBoundingClientRect(),i=a.width,u=a.height;if(i||u)return!0}}return!1};var Be=function(n){if(X()&&window.document.documentElement){var r=Array.isArray(n)?n:[n],t=window.document.documentElement;return r.some(function(a){return a in t.style})}return!1},Gn=function(n,r){if(!Be(n))return!1;var t=document.createElement("div"),a=t.style[n];return t.style[n]=r,t.style[n]!==a};function Hr(e,n){return!Array.isArray(e)&&n!==void 0?Gn(e,n):Be(e)}var Qn=`accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,zn=`onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,Yn="".concat(Qn," ").concat(zn).split(/[\s\n]+/),Zn="aria-",Xn="data-";function ye(e,n){return e.indexOf(n)===0}function Wr(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,r;n===!1?r={aria:!0,data:!0,attr:!0}:n===!0?r={aria:!0}:r=S({},n);var t={};return Object.keys(e).forEach(function(a){(r.aria&&(a==="role"||ye(a,Zn))||r.data&&ye(a,Xn)||r.attr&&Yn.includes(a))&&(t[a]=e[a])}),t}var Me={};function Jn(e,n){}function er(e,n,r){!n&&!Me[r]&&(e(!1,r),Me[r]=!0)}function nr(e,n){er(Jn,e,n)}function rr(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function tr(e,n){if(!e)return!1;if(e.contains)return e.contains(n);for(var r=n;r;){if(r===e)return!0;r=r.parentNode}return!1}var Ae="data-rc-order",ar="rc-util-key",z=new Map;function je(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.mark;return n?n.startsWith("data-")?n:"data-".concat(n):ar}function ne(e){if(e.attachTo)return e.attachTo;var n=document.querySelector("head");return n||document.body}function ir(e){return e==="queue"?"prependQueue":e?"prepend":"append"}function qe(e){return Array.from((z.get(e)||e).children).filter(function(n){return n.tagName==="STYLE"})}function Ge(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!rr())return null;var r=n.csp,t=n.prepend,a=document.createElement("style");a.setAttribute(Ae,ir(t)),r!=null&&r.nonce&&(a.nonce=r==null?void 0:r.nonce),a.innerHTML=e;var i=ne(n),u=i.firstChild;if(t){if(t==="queue"){var o=qe(i).filter(function(s){return["prepend","prependQueue"].includes(s.getAttribute(Ae))});if(o.length)return i.insertBefore(a,o[o.length-1].nextSibling),a}i.insertBefore(a,u)}else i.appendChild(a);return a}function ur(e){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=ne(n);return qe(r).find(function(t){return t.getAttribute(je(n))===e})}function or(e,n){var r=z.get(e);if(!r||!tr(document,r)){var t=Ge("",n),a=t.parentNode;z.set(e,a),e.removeChild(t)}}function Vr(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=ne(r);or(t,r);var a=ur(n,r);if(a){var i,u;if(!((i=r.csp)===null||i===void 0)&&i.nonce&&a.nonce!==((u=r.csp)===null||u===void 0?void 0:u.nonce)){var o;a.nonce=(o=r.csp)===null||o===void 0?void 0:o.nonce}return a.innerHTML!==e&&(a.innerHTML=e),a}var s=Ge(e,r);return s.setAttribute(je(r),n),s}function Br(e,n,r){var t=m.useRef({});return(!("value"in t.current)||r(t.current.condition,n))&&(t.current.value=e(),t.current.condition=n),t.current.value}function jr(e,n){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,t=new Set;function a(i,u){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,s=t.has(i);if(nr(!s,"Warning: There may be circular references"),s)return!1;if(i===u)return!0;if(r&&o>1)return!1;t.add(i);var l=o+1;if(Array.isArray(i)){if(!Array.isArray(u)||i.length!==u.length)return!1;for(var d=0;d<i.length;d++)if(!a(i[d],u[d],l))return!1;return!0}if(i&&u&&p(i)==="object"&&p(u)==="object"){var v=Object.keys(i);return v.length!==Object.keys(u).length?!1:v.every(function(g){return a(i[g],u[g],l)})}return!1}return a(e,n)}export{sn as $,Bn as A,_r as B,Fe as C,rn as D,yr as E,Sr as F,Rr as G,Cr as H,re as I,gr as J,le as K,wr as L,Ar as M,c as N,wn as O,B as P,$ as Q,Fr as R,fe as S,Lr as T,mr as U,he as V,jn as W,nn as X,Xe as Y,f as Z,Pr as _,hn as a,kr as a0,xn as a1,Ne as a2,Kr as a3,$r as a4,xr as a5,br as a6,Hr as a7,Wr as a8,oe as a9,Ir as aa,U as ab,Dr as ac,Ur as ad,Br as b,X as c,_ as d,Nr as e,nr as f,Mr as g,Vr as h,jr as i,Se as j,pr as k,Wn as l,Tr as m,ce as n,un as o,kn as p,j as q,Er as r,Or as s,on as t,hr as u,an as v,fn as w,vr as x,tn as y,dr as z};