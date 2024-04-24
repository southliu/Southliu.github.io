import{r as e}from"./react@18.2.0.BNo5BOs9.js";import{c as t}from"./react-draggable@4.4.6_react-dom@18.2.0_react@18.2.0.Dg3x2hNN.js";import{r}from"./prop-types@15.8.1.DWAhyubz.js";var n,a={exports:{}},o={},i={__esModule:!0,cloneElement:function(e,t){t.style&&e.props.style&&(t.style=u(u({},e.props.style),t.style));t.className&&e.props.className&&(t.className=e.props.className+" "+t.className);return s.default.cloneElement(e,t)}},s=(n=e)&&n.__esModule?n:{default:n};function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){p(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c={__esModule:!0,resizableProps:void 0},f=function(e){return e&&e.__esModule?e:{default:e}}(r());var d={axis:f.default.oneOf(["both","x","y","none"]),className:f.default.string,children:f.default.element.isRequired,draggableOpts:f.default.shape({allowAnyClick:f.default.bool,cancel:f.default.string,children:f.default.node,disabled:f.default.bool,enableUserSelectHack:f.default.bool,offsetParent:f.default.node,grid:f.default.arrayOf(f.default.number),handle:f.default.string,nodeRef:f.default.object,onStart:f.default.func,onDrag:f.default.func,onStop:f.default.func,onMouseDown:f.default.func,scale:f.default.number}),height:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n,a=t[0];return"both"===a.axis||"y"===a.axis?(n=f.default.number).isRequired.apply(n,t):f.default.number.apply(f.default,t)},handle:f.default.oneOfType([f.default.node,f.default.func]),handleSize:f.default.arrayOf(f.default.number),lockAspectRatio:f.default.bool,maxConstraints:f.default.arrayOf(f.default.number),minConstraints:f.default.arrayOf(f.default.number),onResizeStop:f.default.func,onResizeStart:f.default.func,onResize:f.default.func,resizeHandles:f.default.arrayOf(f.default.oneOf(["s","w","e","n","sw","nw","se","ne"])),transformScale:f.default.number,width:function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];var n,a=t[0];return"both"===a.axis||"x"===a.axis?(n=f.default.number).isRequired.apply(n,t):f.default.number.apply(f.default,t)}};c.resizableProps=d,o.__esModule=!0,o.default=void 0;var h=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=m(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(e),b=t,y=i,g=c,O=["children","className","draggableOpts","width","height","handle","handleSize","lockAspectRatio","axis","minConstraints","maxConstraints","onResize","onResizeStop","onResizeStart","resizeHandles","transformScale"];function m(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(m=function(e){return e?r:t})(e)}function v(){return v=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},v.apply(this,arguments)}function w(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?w(Object(r),!0).forEach((function(t){z(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):w(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function z(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function R(e,t){return(R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var P=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).handleRefs={},t.lastHandleRect=null,t.slack=null,t}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,R(t,r);var a=n.prototype;return a.componentWillUnmount=function(){this.resetData()},a.resetData=function(){this.lastHandleRect=this.slack=null},a.runConstraints=function(e,t){var r=this.props,n=r.minConstraints,a=r.maxConstraints,o=r.lockAspectRatio;if(!n&&!a&&!o)return[e,t];if(o){var i=this.props.width/this.props.height,s=e-this.props.width,l=t-this.props.height;Math.abs(s)>Math.abs(l*i)?t=e/i:e=t*i}var u=e,p=t,c=this.slack||[0,0],f=c[0],d=c[1];return e+=f,t+=d,n&&(e=Math.max(n[0],e),t=Math.max(n[1],t)),a&&(e=Math.min(a[0],e),t=Math.min(a[1],t)),this.slack=[f+(u-e),d+(p-t)],[e,t]},a.resizeHandler=function(e,t){var r=this;return function(n,a){var o=a.node,i=a.deltaX,s=a.deltaY;"onResizeStart"===e&&r.resetData();var l=("both"===r.props.axis||"x"===r.props.axis)&&"n"!==t&&"s"!==t,u=("both"===r.props.axis||"y"===r.props.axis)&&"e"!==t&&"w"!==t;if(l||u){var p=t[0],c=t[t.length-1],f=o.getBoundingClientRect();if(null!=r.lastHandleRect){if("w"===c)i+=f.left-r.lastHandleRect.left;if("n"===p)s+=f.top-r.lastHandleRect.top}r.lastHandleRect=f,"w"===c&&(i=-i),"n"===p&&(s=-s);var d=r.props.width+(l?i/r.props.transformScale:0),h=r.props.height+(u?s/r.props.transformScale:0),b=r.runConstraints(d,h);d=b[0],h=b[1];var y=d!==r.props.width||h!==r.props.height,g="function"==typeof r.props[e]?r.props[e]:null;g&&!("onResize"===e&&!y)&&(null==n.persist||n.persist(),g(n,{node:o,size:{width:d,height:h},handle:t})),"onResizeStop"===e&&r.resetData()}}},a.renderResizeHandle=function(e,t){var r=this.props.handle;if(!r)return h.createElement("span",{className:"react-resizable-handle react-resizable-handle-"+e,ref:t});if("function"==typeof r)return r(e,t);var n=j({ref:t},"string"==typeof r.type?{}:{handleAxis:e});return h.cloneElement(r,n)},a.render=function(){var e=this,t=this.props,r=t.children,n=t.className,a=t.draggableOpts;t.width,t.height,t.handle,t.handleSize,t.lockAspectRatio,t.axis,t.minConstraints,t.maxConstraints,t.onResize,t.onResizeStop,t.onResizeStart;var o=t.resizeHandles;t.transformScale;var i=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(t,O);return(0,y.cloneElement)(r,j(j({},i),{},{className:(n?n+" ":"")+"react-resizable",children:[].concat(r.props.children,o.map((function(t){var r,n=null!=(r=e.handleRefs[t])?r:e.handleRefs[t]=h.createRef();return h.createElement(b.DraggableCore,v({},a,{nodeRef:n,key:"resizableHandle-"+t,onStop:e.resizeHandler("onResizeStop",t),onStart:e.resizeHandler("onResizeStart",t),onDrag:e.resizeHandler("onResize",t)}),e.renderResizeHandle(t,n))})))}))},n}(h.Component);o.default=P,P.propTypes=g.resizableProps,P.defaultProps={axis:"both",handleSize:[20,20],lockAspectRatio:!1,minConstraints:[20,20],maxConstraints:[1/0,1/0],resizeHandles:["se"],transformScale:1};var S={__esModule:!0,default:void 0},x=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=M(t);if(r&&r.has(e))return r.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var o in e)if("default"!==o&&Object.prototype.hasOwnProperty.call(e,o)){var i=a?Object.getOwnPropertyDescriptor(e,o):null;i&&(i.get||i.set)?Object.defineProperty(n,o,i):n[o]=e[o]}n.default=e,r&&r.set(e,n);return n}(e),_=C(r()),k=C(o),D=c,H=["handle","handleSize","onResize","onResizeStart","onResizeStop","draggableOpts","minConstraints","maxConstraints","lockAspectRatio","axis","width","height","resizeHandles","style","transformScale"];function C(e){return e&&e.__esModule?e:{default:e}}function M(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,r=new WeakMap;return(M=function(e){return e?r:t})(e)}function E(){return E=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},E.apply(this,arguments)}function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function N(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){W(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function W(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function T(e,t){return(T=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e})(e,t)}var q=function(e){var t,r;function n(){for(var t,r=arguments.length,n=new Array(r),a=0;a<r;a++)n[a]=arguments[a];return(t=e.call.apply(e,[this].concat(n))||this).state={width:t.props.width,height:t.props.height,propsWidth:t.props.width,propsHeight:t.props.height},t.onResize=function(e,r){var n=r.size;t.props.onResize?(null==e.persist||e.persist(),t.setState(n,(function(){return t.props.onResize&&t.props.onResize(e,r)}))):t.setState(n)},t}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,T(t,r),n.getDerivedStateFromProps=function(e,t){return t.propsWidth!==e.width||t.propsHeight!==e.height?{width:e.width,height:e.height,propsWidth:e.width,propsHeight:e.height}:null},n.prototype.render=function(){var e=this.props,t=e.handle,r=e.handleSize;e.onResize;var n=e.onResizeStart,a=e.onResizeStop,o=e.draggableOpts,i=e.minConstraints,s=e.maxConstraints,l=e.lockAspectRatio,u=e.axis;e.width,e.height;var p=e.resizeHandles,c=e.style,f=e.transformScale,d=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,H);return x.createElement(k.default,{axis:u,draggableOpts:o,handle:t,handleSize:r,height:this.state.height,lockAspectRatio:l,maxConstraints:s,minConstraints:i,onResizeStart:n,onResize:this.onResize,onResizeStop:a,resizeHandles:p,transformScale:f,width:this.state.width},x.createElement("div",E({},d,{style:N(N({},c),{},{width:this.state.width+"px",height:this.state.height+"px"})})))},n}(x.Component);S.default=q,q.propTypes=N(N({},D.resizableProps),{},{children:_.default.element}),a.exports=function(){throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")};var U=a.exports.Resizable=o.default;a.exports.ResizableBox=S.default;export{U as R};
