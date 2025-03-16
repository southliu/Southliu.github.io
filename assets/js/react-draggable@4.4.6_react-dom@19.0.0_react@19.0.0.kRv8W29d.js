import{b as t}from"./classnames@2.5.1.nkqM0Cxh.js";import{a as e}from"./react@19.0.0.C56gzhl-.js";import{r as n}from"./prop-types@15.8.1.Bx5UHif0.js";import{b as r}from"./react-dom@19.0.0_react@19.0.0.BNMklCqC.js";import{r as o}from"./clsx@1.2.1.CisZca9u.js";var a,i={exports:{}},s={},l={},u={};function c(){if(a)return u;return a=1,Object.defineProperty(u,"__esModule",{value:!0}),u.dontSetMe=function(t,e,n){if(t[e])return new Error("Invalid prop ".concat(e," passed to ").concat(n," - do not set this, set it on the child."))},u.findInArray=function(t,e){for(let n=0,r=t.length;n<r;n++)if(e.apply(e,[t[n],n,t]))return t[n]},u.int=function(t){return parseInt(t,10)},u.isFunction=function(t){return"function"==typeof t||"[object Function]"===Object.prototype.toString.call(t)},u.isNum=function(t){return"number"==typeof t&&!isNaN(t)},u}var d,f,p={};function g(){if(f)return l;f=1,Object.defineProperty(l,"__esModule",{value:!0}),l.addClassName=i,l.addEvent=function(t,e,n,r){if(!t)return;const o={capture:!0,...r};t.addEventListener?t.addEventListener(e,n,o):t.attachEvent?t.attachEvent("on"+e,n):t["on"+e]=n},l.addUserSelectStyles=function(t){if(!t)return;let e=t.getElementById("react-draggable-style-el");e||(e=t.createElement("style"),e.type="text/css",e.id="react-draggable-style-el",e.innerHTML=".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n",e.innerHTML+=".react-draggable-transparent-selection *::selection {all: inherit;}\n",t.getElementsByTagName("head")[0].appendChild(e));t.body&&i(t.body,"react-draggable-transparent-selection")},l.createCSSTransform=function(t,n){const r=a(t,n,"px");return{[(0,e.browserPrefixToKey)("transform",e.default)]:r}},l.createSVGTransform=function(t,e){return a(t,e,"")},l.getTouch=function(e,n){return e.targetTouches&&(0,t.findInArray)(e.targetTouches,(t=>n===t.identifier))||e.changedTouches&&(0,t.findInArray)(e.changedTouches,(t=>n===t.identifier))},l.getTouchIdentifier=function(t){if(t.targetTouches&&t.targetTouches[0])return t.targetTouches[0].identifier;if(t.changedTouches&&t.changedTouches[0])return t.changedTouches[0].identifier},l.getTranslation=a,l.innerHeight=function(e){let n=e.clientHeight;const r=e.ownerDocument.defaultView.getComputedStyle(e);return n-=(0,t.int)(r.paddingTop),n-=(0,t.int)(r.paddingBottom),n},l.innerWidth=function(e){let n=e.clientWidth;const r=e.ownerDocument.defaultView.getComputedStyle(e);return n-=(0,t.int)(r.paddingLeft),n-=(0,t.int)(r.paddingRight),n},l.matchesSelector=o,l.matchesSelectorAndParentsTo=function(t,e,n){let r=t;do{if(o(r,e))return!0;if(r===n)return!1;r=r.parentNode}while(r);return!1},l.offsetXYFromParent=function(t,e,n){const r=e===e.ownerDocument.body?{left:0,top:0}:e.getBoundingClientRect(),o=(t.clientX+e.scrollLeft-r.left)/n,a=(t.clientY+e.scrollTop-r.top)/n;return{x:o,y:a}},l.outerHeight=function(e){let n=e.clientHeight;const r=e.ownerDocument.defaultView.getComputedStyle(e);return n+=(0,t.int)(r.borderTopWidth),n+=(0,t.int)(r.borderBottomWidth),n},l.outerWidth=function(e){let n=e.clientWidth;const r=e.ownerDocument.defaultView.getComputedStyle(e);return n+=(0,t.int)(r.borderLeftWidth),n+=(0,t.int)(r.borderRightWidth),n},l.removeClassName=s,l.removeEvent=function(t,e,n,r){if(!t)return;const o={capture:!0,...r};t.removeEventListener?t.removeEventListener(e,n,o):t.detachEvent?t.detachEvent("on"+e,n):t["on"+e]=null},l.removeUserSelectStyles=function(t){if(!t)return;try{if(t.body&&s(t.body,"react-draggable-transparent-selection"),t.selection)t.selection.empty();else{const e=(t.defaultView||window).getSelection();e&&"Caret"!==e.type&&e.removeAllRanges()}}catch(e){}};var t=c(),e=function(t,e){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var r=n(e);if(r&&r.has(t))return r.get(t);var o={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in t)if("default"!==i&&Object.prototype.hasOwnProperty.call(t,i)){var s=a?Object.getOwnPropertyDescriptor(t,i):null;s&&(s.get||s.set)?Object.defineProperty(o,i,s):o[i]=t[i]}o.default=t,r&&r.set(t,o);return o}(function(){if(d)return p;d=1,Object.defineProperty(p,"__esModule",{value:!0}),p.browserPrefixToKey=n,p.browserPrefixToStyle=function(t,e){return e?"-".concat(e.toLowerCase(),"-").concat(t):t},p.default=void 0,p.getPrefix=e;const t=["Moz","Webkit","O","ms"];function e(){var e;let r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"transform";if("undefined"==typeof window)return"";const o=null===(e=window.document)||void 0===e||null===(e=e.documentElement)||void 0===e?void 0:e.style;if(!o)return"";if(r in o)return"";for(let a=0;a<t.length;a++)if(n(r,t[a])in o)return t[a];return""}function n(t,e){return e?"".concat(e).concat(function(t){let e="",n=!0;for(let r=0;r<t.length;r++)n?(e+=t[r].toUpperCase(),n=!1):"-"===t[r]?n=!0:e+=t[r];return e}(t)):t}return p.default=e(),p}());function n(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,r=new WeakMap;return(n=function(t){return t?r:e})(t)}let r="";function o(e,n){return r||(r=(0,t.findInArray)(["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"],(function(n){return(0,t.isFunction)(e[n])}))),!!(0,t.isFunction)(e[r])&&e[r](n)}function a(t,e,n){let{x:r,y:o}=t,a="translate(".concat(r).concat(n,",").concat(o).concat(n,")");if(e){const t="".concat("string"==typeof e.x?e.x:e.x+n),r="".concat("string"==typeof e.y?e.y:e.y+n);a="translate(".concat(t,", ").concat(r,")")+a}return a}function i(t,e){t.classList?t.classList.add(e):t.className.match(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)")))||(t.className+=" ".concat(e))}function s(t,e){t.classList?t.classList.remove(e):t.className=t.className.replace(new RegExp("(?:^|\\s)".concat(e,"(?!\\S)"),"g"),"")}return l}var h,m={};function y(){if(h)return m;h=1,Object.defineProperty(m,"__esModule",{value:!0}),m.canDragX=function(t){return"both"===t.props.axis||"x"===t.props.axis},m.canDragY=function(t){return"both"===t.props.axis||"y"===t.props.axis},m.createCoreData=function(e,r,o){const a=!(0,t.isNum)(e.lastX),i=n(e);return a?{node:i,deltaX:0,deltaY:0,lastX:r,lastY:o,x:r,y:o}:{node:i,deltaX:r-e.lastX,deltaY:o-e.lastY,lastX:e.lastX,lastY:e.lastY,x:r,y:o}},m.createDraggableData=function(t,e){const n=t.props.scale;return{node:e.node,x:t.state.x+e.deltaX/n,y:t.state.y+e.deltaY/n,deltaX:e.deltaX/n,deltaY:e.deltaY/n,lastX:t.state.x,lastY:t.state.y}},m.getBoundPosition=function(r,o,a){if(!r.props.bounds)return[o,a];let{bounds:i}=r.props;i="string"==typeof i?i:function(t){return{left:t.left,top:t.top,right:t.right,bottom:t.bottom}}(i);const s=n(r);if("string"==typeof i){const{ownerDocument:n}=s,r=n.defaultView;let o;if(o="parent"===i?s.parentNode:n.querySelector(i),!(o instanceof r.HTMLElement))throw new Error('Bounds selector "'+i+'" could not find an element.');const a=o,l=r.getComputedStyle(s),u=r.getComputedStyle(a);i={left:-s.offsetLeft+(0,t.int)(u.paddingLeft)+(0,t.int)(l.marginLeft),top:-s.offsetTop+(0,t.int)(u.paddingTop)+(0,t.int)(l.marginTop),right:(0,e.innerWidth)(a)-(0,e.outerWidth)(s)-s.offsetLeft+(0,t.int)(u.paddingRight)-(0,t.int)(l.marginRight),bottom:(0,e.innerHeight)(a)-(0,e.outerHeight)(s)-s.offsetTop+(0,t.int)(u.paddingBottom)-(0,t.int)(l.marginBottom)}}(0,t.isNum)(i.right)&&(o=Math.min(o,i.right));(0,t.isNum)(i.bottom)&&(a=Math.min(a,i.bottom));(0,t.isNum)(i.left)&&(o=Math.max(o,i.left));(0,t.isNum)(i.top)&&(a=Math.max(a,i.top));return[o,a]},m.getControlPosition=function(t,r,o){const a="number"==typeof r?(0,e.getTouch)(t,r):null;if("number"==typeof r&&!a)return null;const i=n(o),s=o.props.offsetParent||i.offsetParent||i.ownerDocument.body;return(0,e.offsetXYFromParent)(a||t,s,o.props.scale)},m.snapToGrid=function(t,e,n){const r=Math.round(e/t[0])*t[0],o=Math.round(n/t[1])*t[1];return[r,o]};var t=c(),e=g();function n(t){const e=t.findDOMNode();if(!e)throw new Error("<DraggableCore>: Unmounted during event!");return e}return m}var b,v,D,S,w={},x={};function M(){if(b)return x;return b=1,Object.defineProperty(x,"__esModule",{value:!0}),x.default=function(){},x}function P(){if(v)return w;v=1,Object.defineProperty(w,"__esModule",{value:!0}),w.default=void 0;var t=function(t,e){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=f(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var i=o?Object.getOwnPropertyDescriptor(t,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=t[a]}r.default=t,n&&n.set(t,r);return r}(e()),o=d(n()),a=d(r()),i=g(),s=y(),l=c(),u=d(M());function d(t){return t&&t.__esModule?t:{default:t}}function f(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(f=function(t){return t?n:e})(t)}function p(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}const h={start:"touchstart",move:"touchmove",stop:"touchend"},m={start:"mousedown",move:"mousemove",stop:"mouseup"};let b=m,D=class extends t.Component{constructor(){super(...arguments),p(this,"dragging",!1),p(this,"lastX",NaN),p(this,"lastY",NaN),p(this,"touchIdentifier",null),p(this,"mounted",!1),p(this,"handleDragStart",(t=>{if(this.props.onMouseDown(t),!this.props.allowAnyClick&&"number"==typeof t.button&&0!==t.button)return!1;const e=this.findDOMNode();if(!e||!e.ownerDocument||!e.ownerDocument.body)throw new Error("<DraggableCore> not mounted on DragStart!");const{ownerDocument:n}=e;if(this.props.disabled||!(t.target instanceof n.defaultView.Node)||this.props.handle&&!(0,i.matchesSelectorAndParentsTo)(t.target,this.props.handle,e)||this.props.cancel&&(0,i.matchesSelectorAndParentsTo)(t.target,this.props.cancel,e))return;"touchstart"===t.type&&t.preventDefault();const r=(0,i.getTouchIdentifier)(t);this.touchIdentifier=r;const o=(0,s.getControlPosition)(t,r,this);if(null==o)return;const{x:a,y:l}=o,c=(0,s.createCoreData)(this,a,l);(0,u.default)("DraggableCore: handleDragStart: %j",c),(0,u.default)("calling",this.props.onStart);!1!==this.props.onStart(t,c)&&!1!==this.mounted&&(this.props.enableUserSelectHack&&(0,i.addUserSelectStyles)(n),this.dragging=!0,this.lastX=a,this.lastY=l,(0,i.addEvent)(n,b.move,this.handleDrag),(0,i.addEvent)(n,b.stop,this.handleDragStop))})),p(this,"handleDrag",(t=>{const e=(0,s.getControlPosition)(t,this.touchIdentifier,this);if(null==e)return;let{x:n,y:r}=e;if(Array.isArray(this.props.grid)){let t=n-this.lastX,e=r-this.lastY;if([t,e]=(0,s.snapToGrid)(this.props.grid,t,e),!t&&!e)return;n=this.lastX+t,r=this.lastY+e}const o=(0,s.createCoreData)(this,n,r);(0,u.default)("DraggableCore: handleDrag: %j",o);if(!1!==this.props.onDrag(t,o)&&!1!==this.mounted)this.lastX=n,this.lastY=r;else try{this.handleDragStop(new MouseEvent("mouseup"))}catch(a){const t=document.createEvent("MouseEvents");t.initMouseEvent("mouseup",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),this.handleDragStop(t)}})),p(this,"handleDragStop",(t=>{if(!this.dragging)return;const e=(0,s.getControlPosition)(t,this.touchIdentifier,this);if(null==e)return;let{x:n,y:r}=e;if(Array.isArray(this.props.grid)){let t=n-this.lastX||0,e=r-this.lastY||0;[t,e]=(0,s.snapToGrid)(this.props.grid,t,e),n=this.lastX+t,r=this.lastY+e}const o=(0,s.createCoreData)(this,n,r);if(!1===this.props.onStop(t,o)||!1===this.mounted)return!1;const a=this.findDOMNode();a&&this.props.enableUserSelectHack&&(0,i.removeUserSelectStyles)(a.ownerDocument),(0,u.default)("DraggableCore: handleDragStop: %j",o),this.dragging=!1,this.lastX=NaN,this.lastY=NaN,a&&((0,u.default)("DraggableCore: Removing handlers"),(0,i.removeEvent)(a.ownerDocument,b.move,this.handleDrag),(0,i.removeEvent)(a.ownerDocument,b.stop,this.handleDragStop))})),p(this,"onMouseDown",(t=>(b=m,this.handleDragStart(t)))),p(this,"onMouseUp",(t=>(b=m,this.handleDragStop(t)))),p(this,"onTouchStart",(t=>(b=h,this.handleDragStart(t)))),p(this,"onTouchEnd",(t=>(b=h,this.handleDragStop(t))))}componentDidMount(){this.mounted=!0;const t=this.findDOMNode();t&&(0,i.addEvent)(t,h.start,this.onTouchStart,{passive:!1})}componentWillUnmount(){this.mounted=!1;const t=this.findDOMNode();if(t){const{ownerDocument:e}=t;(0,i.removeEvent)(e,m.move,this.handleDrag),(0,i.removeEvent)(e,h.move,this.handleDrag),(0,i.removeEvent)(e,m.stop,this.handleDragStop),(0,i.removeEvent)(e,h.stop,this.handleDragStop),(0,i.removeEvent)(t,h.start,this.onTouchStart,{passive:!1}),this.props.enableUserSelectHack&&(0,i.removeUserSelectStyles)(e)}}findDOMNode(){var t,e;return null!==(t=this.props)&&void 0!==t&&t.nodeRef?null===(e=this.props)||void 0===e||null===(e=e.nodeRef)||void 0===e?void 0:e.current:a.default.findDOMNode(this)}render(){return t.cloneElement(t.Children.only(this.props.children),{onMouseDown:this.onMouseDown,onMouseUp:this.onMouseUp,onTouchEnd:this.onTouchEnd})}};return w.default=D,p(D,"displayName","DraggableCore"),p(D,"propTypes",{allowAnyClick:o.default.bool,children:o.default.node.isRequired,disabled:o.default.bool,enableUserSelectHack:o.default.bool,offsetParent:function(t,e){if(t[e]&&1!==t[e].nodeType)throw new Error("Draggable's offsetParent must be a DOM Node.")},grid:o.default.arrayOf(o.default.number),handle:o.default.string,cancel:o.default.string,nodeRef:o.default.object,onStart:o.default.func,onDrag:o.default.func,onStop:o.default.func,onMouseDown:o.default.func,scale:o.default.number,className:l.dontSetMe,style:l.dontSetMe,transform:l.dontSetMe}),p(D,"defaultProps",{allowAnyClick:!1,disabled:!1,enableUserSelectHack:!0,onStart:function(){},onDrag:function(){},onStop:function(){},onMouseDown:function(){},scale:1}),w}function O(){return D||(D=1,function(t){Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"DraggableCore",{enumerable:!0,get:function(){return p.default}}),t.default=void 0;var a=function(t,e){if(t&&t.__esModule)return t;if(null===t||"object"!=typeof t&&"function"!=typeof t)return{default:t};var n=b(e);if(n&&n.has(t))return n.get(t);var r={},o=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in t)if("default"!==a&&Object.prototype.hasOwnProperty.call(t,a)){var i=o?Object.getOwnPropertyDescriptor(t,a):null;i&&(i.get||i.set)?Object.defineProperty(r,a,i):r[a]=t[a]}r.default=t,n&&n.set(t,r);return r}(e()),i=m(n()),s=m(r()),l=m(o),u=g(),d=y(),f=c(),p=m(P()),h=m(M());function m(t){return t&&t.__esModule?t:{default:t}}function b(t){if("function"!=typeof WeakMap)return null;var e=new WeakMap,n=new WeakMap;return(b=function(t){return t?n:e})(t)}function v(){return v=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},v.apply(this,arguments)}function D(t,e,n){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}class S extends a.Component{static getDerivedStateFromProps(t,e){let{position:n}=t,{prevPropsPosition:r}=e;return!n||r&&n.x===r.x&&n.y===r.y?null:((0,h.default)("Draggable: getDerivedStateFromProps %j",{position:n,prevPropsPosition:r}),{x:n.x,y:n.y,prevPropsPosition:{...n}})}constructor(t){super(t),D(this,"onDragStart",((t,e)=>{(0,h.default)("Draggable: onDragStart: %j",e);if(!1===this.props.onStart(t,(0,d.createDraggableData)(this,e)))return!1;this.setState({dragging:!0,dragged:!0})})),D(this,"onDrag",((t,e)=>{if(!this.state.dragging)return!1;(0,h.default)("Draggable: onDrag: %j",e);const n=(0,d.createDraggableData)(this,e),r={x:n.x,y:n.y,slackX:0,slackY:0};if(this.props.bounds){const{x:t,y:e}=r;r.x+=this.state.slackX,r.y+=this.state.slackY;const[o,a]=(0,d.getBoundPosition)(this,r.x,r.y);r.x=o,r.y=a,r.slackX=this.state.slackX+(t-r.x),r.slackY=this.state.slackY+(e-r.y),n.x=r.x,n.y=r.y,n.deltaX=r.x-this.state.x,n.deltaY=r.y-this.state.y}if(!1===this.props.onDrag(t,n))return!1;this.setState(r)})),D(this,"onDragStop",((t,e)=>{if(!this.state.dragging)return!1;if(!1===this.props.onStop(t,(0,d.createDraggableData)(this,e)))return!1;(0,h.default)("Draggable: onDragStop: %j",e);const n={dragging:!1,slackX:0,slackY:0};if(Boolean(this.props.position)){const{x:t,y:e}=this.props.position;n.x=t,n.y=e}this.setState(n)})),this.state={dragging:!1,dragged:!1,x:t.position?t.position.x:t.defaultPosition.x,y:t.position?t.position.y:t.defaultPosition.y,prevPropsPosition:{...t.position},slackX:0,slackY:0,isElementSVG:!1},t.position&&!t.onDrag&&t.onStop}componentDidMount(){void 0!==window.SVGElement&&this.findDOMNode()instanceof window.SVGElement&&this.setState({isElementSVG:!0})}componentWillUnmount(){this.setState({dragging:!1})}findDOMNode(){var t,e;return null!==(t=null===(e=this.props)||void 0===e||null===(e=e.nodeRef)||void 0===e?void 0:e.current)&&void 0!==t?t:s.default.findDOMNode(this)}render(){const{axis:t,bounds:e,children:n,defaultPosition:r,defaultClassName:o,defaultClassNameDragging:i,defaultClassNameDragged:s,position:c,positionOffset:f,scale:g,...h}=this.props;let m={},y=null;const b=!Boolean(c)||this.state.dragging,D=c||r,S={x:(0,d.canDragX)(this)&&b?this.state.x:D.x,y:(0,d.canDragY)(this)&&b?this.state.y:D.y};this.state.isElementSVG?y=(0,u.createSVGTransform)(S,f):m=(0,u.createCSSTransform)(S,f);const w=(0,l.default)(n.props.className||"",o,{[i]:this.state.dragging,[s]:this.state.dragged});return a.createElement(p.default,v({},h,{onStart:this.onDragStart,onDrag:this.onDrag,onStop:this.onDragStop}),a.cloneElement(a.Children.only(n),{className:w,style:{...n.props.style,...m},transform:y}))}}t.default=S,D(S,"displayName","Draggable"),D(S,"propTypes",{...p.default.propTypes,axis:i.default.oneOf(["both","x","y","none"]),bounds:i.default.oneOfType([i.default.shape({left:i.default.number,right:i.default.number,top:i.default.number,bottom:i.default.number}),i.default.string,i.default.oneOf([!1])]),defaultClassName:i.default.string,defaultClassNameDragging:i.default.string,defaultClassNameDragged:i.default.string,defaultPosition:i.default.shape({x:i.default.number,y:i.default.number}),positionOffset:i.default.shape({x:i.default.oneOfType([i.default.number,i.default.string]),y:i.default.oneOfType([i.default.number,i.default.string])}),position:i.default.shape({x:i.default.number,y:i.default.number}),className:f.dontSetMe,style:f.dontSetMe,transform:f.dontSetMe}),D(S,"defaultProps",{...p.default.defaultProps,axis:"both",bounds:!1,defaultClassName:"react-draggable",defaultClassNameDragging:"react-draggable-dragging",defaultClassNameDragged:"react-draggable-dragged",defaultPosition:{x:0,y:0},scale:1})}(s)),s}function N(){if(S)return i.exports;S=1;const{default:t,DraggableCore:e}=O();return i.exports=t,i.exports.default=t,i.exports.DraggableCore=e,i.exports}const T=t(N());export{T as D,N as r};
