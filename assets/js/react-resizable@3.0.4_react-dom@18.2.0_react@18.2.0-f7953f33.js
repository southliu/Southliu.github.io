import{a as $}from"./react@18.2.0-9cdefec6.js";import{c as G}from"./react-draggable@4.4.5_react-dom@18.2.0_react@18.2.0-ea964961.js";import{r as k}from"./prop-types@15.8.1-20765e74.js";var W={exports:{}},R={},E={};E.__esModule=!0;E.cloneElement=ee;var J=Q($());function Q(e){return e&&e.__esModule?e:{default:e}}function T(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,t)}return a}function B(e){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?T(Object(a),!0).forEach(function(t){Z(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):T(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function Z(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function ee(e,n){return n.style&&e.props.style&&(n.style=B(B({},e.props.style),n.style)),n.className&&e.props.className&&(n.className=e.props.className+" "+n.className),J.default.cloneElement(e,n)}var z={};z.__esModule=!0;z.resizableProps=void 0;var o=te(k());function te(e){return e&&e.__esModule?e:{default:e}}var re={axis:o.default.oneOf(["both","x","y","none"]),className:o.default.string,children:o.default.element.isRequired,draggableOpts:o.default.shape({allowAnyClick:o.default.bool,cancel:o.default.string,children:o.default.node,disabled:o.default.bool,enableUserSelectHack:o.default.bool,offsetParent:o.default.node,grid:o.default.arrayOf(o.default.number),handle:o.default.string,nodeRef:o.default.object,onStart:o.default.func,onDrag:o.default.func,onStop:o.default.func,onMouseDown:o.default.func,scale:o.default.number}),height:o.default.number.isRequired,handle:o.default.oneOfType([o.default.node,o.default.func]),handleSize:o.default.arrayOf(o.default.number),lockAspectRatio:o.default.bool,maxConstraints:o.default.arrayOf(o.default.number),minConstraints:o.default.arrayOf(o.default.number),onResizeStop:o.default.func,onResizeStart:o.default.func,onResize:o.default.func,resizeHandles:o.default.arrayOf(o.default.oneOf(["s","w","e","n","sw","nw","se","ne"])),transformScale:o.default.number,width:o.default.number.isRequired};z.resizableProps=re;R.__esModule=!0;R.default=void 0;var y=oe($()),ne=G.exports,ae=E,ie=z,se=["children","className","draggableOpts","width","height","handle","handleSize","lockAspectRatio","axis","minConstraints","maxConstraints","onResize","onResizeStop","onResizeStart","resizeHandles","transformScale"];function I(e){if(typeof WeakMap!="function")return null;var n=new WeakMap,a=new WeakMap;return(I=function(r){return r?a:n})(e)}function oe(e,n){if(!n&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var a=I(n);if(a&&a.has(e))return a.get(e);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(t,i,s):t[i]=e[i]}return t.default=e,a&&a.set(e,t),t}function x(){return x=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},x.apply(this,arguments)}function le(e,n){if(e==null)return{};var a={},t=Object.keys(e),r,i;for(i=0;i<t.length;i++)r=t[i],!(n.indexOf(r)>=0)&&(a[r]=e[r]);return a}function A(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,t)}return a}function S(e){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?A(Object(a),!0).forEach(function(t){pe(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):A(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function pe(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function ue(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,H(e,n)}function H(e,n){return H=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t},H(e,n)}var j=function(e){ue(n,e);function n(){for(var t,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return t=e.call.apply(e,[this].concat(i))||this,t.handleRefs={},t.lastHandleRect=null,t.slack=null,t}var a=n.prototype;return a.componentWillUnmount=function(){this.resetData()},a.resetData=function(){this.lastHandleRect=this.slack=null},a.runConstraints=function(r,i){var s=this.props,l=s.minConstraints,p=s.maxConstraints,f=s.lockAspectRatio;if(!l&&!p&&!f)return[r,i];if(f){var c=this.props.width/this.props.height,u=r-this.props.width,d=i-this.props.height;Math.abs(u)>Math.abs(d*c)?i=r/c:r=i*c}var h=r,g=i,v=this.slack||[0,0],O=v[0],m=v[1];return r+=O,i+=m,l&&(r=Math.max(l[0],r),i=Math.max(l[1],i)),p&&(r=Math.min(p[0],r),i=Math.min(p[1],i)),this.slack=[O+(h-r),m+(g-i)],[r,i]},a.resizeHandler=function(r,i){var s=this;return function(l,p){var f=p.node,c=p.deltaX,u=p.deltaY;r==="onResizeStart"&&s.resetData();var d=(s.props.axis==="both"||s.props.axis==="x")&&i!=="n"&&i!=="s",h=(s.props.axis==="both"||s.props.axis==="y")&&i!=="e"&&i!=="w";if(!(!d&&!h)){var g=i[0],v=i[i.length-1],O=f.getBoundingClientRect();if(s.lastHandleRect!=null){if(v==="w"){var m=O.left-s.lastHandleRect.left;c+=m}if(g==="n"){var Y=O.top-s.lastHandleRect.top;u+=Y}}s.lastHandleRect=O,v==="w"&&(c=-c),g==="n"&&(u=-u);var b=s.props.width+(d?c/s.props.transformScale:0),P=s.props.height+(h?u/s.props.transformScale:0),q=s.runConstraints(b,P);b=q[0],P=q[1];var F=b!==s.props.width||P!==s.props.height,N=typeof s.props[r]=="function"?s.props[r]:null,V=r==="onResize"&&!F;N&&!V&&(l.persist==null||l.persist(),N(l,{node:f,size:{width:b,height:P},handle:i})),r==="onResizeStop"&&s.resetData()}}},a.renderResizeHandle=function(r,i){var s=this.props.handle;if(!s)return y.createElement("span",{className:"react-resizable-handle react-resizable-handle-"+r,ref:i});if(typeof s=="function")return s(r,i);var l=typeof s.type=="string",p=S({ref:i},l?{}:{handleAxis:r});return y.cloneElement(s,p)},a.render=function(){var r=this,i=this.props,s=i.children,l=i.className,p=i.draggableOpts;i.width,i.height,i.handle,i.handleSize,i.lockAspectRatio,i.axis,i.minConstraints,i.maxConstraints,i.onResize,i.onResizeStop,i.onResizeStart;var f=i.resizeHandles;i.transformScale;var c=le(i,se);return(0,ae.cloneElement)(s,S(S({},c),{},{className:(l?l+" ":"")+"react-resizable",children:[].concat(s.props.children,f.map(function(u){var d,h=(d=r.handleRefs[u])!=null?d:r.handleRefs[u]=y.createRef();return y.createElement(ne.DraggableCore,x({},p,{nodeRef:h,key:"resizableHandle-"+u,onStop:r.resizeHandler("onResizeStop",u),onStart:r.resizeHandler("onResizeStart",u),onDrag:r.resizeHandler("onResize",u)}),r.renderResizeHandle(u,h))}))}))},n}(y.Component);R.default=j;j.propTypes=ie.resizableProps;j.defaultProps={axis:"both",handleSize:[20,20],lockAspectRatio:!1,minConstraints:[20,20],maxConstraints:[1/0,1/0],resizeHandles:["se"],transformScale:1};var _={};_.__esModule=!0;_.default=void 0;var D=Oe($()),fe=L(k()),ce=L(R),de=z,he=["handle","handleSize","onResize","onResizeStart","onResizeStop","draggableOpts","minConstraints","maxConstraints","lockAspectRatio","axis","width","height","resizeHandles","style","transformScale"];function L(e){return e&&e.__esModule?e:{default:e}}function U(e){if(typeof WeakMap!="function")return null;var n=new WeakMap,a=new WeakMap;return(U=function(r){return r?a:n})(e)}function Oe(e,n){if(!n&&e&&e.__esModule)return e;if(e===null||typeof e!="object"&&typeof e!="function")return{default:e};var a=U(n);if(a&&a.has(e))return a.get(e);var t={},r=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(i!=="default"&&Object.prototype.hasOwnProperty.call(e,i)){var s=r?Object.getOwnPropertyDescriptor(e,i):null;s&&(s.get||s.set)?Object.defineProperty(t,i,s):t[i]=e[i]}return t.default=e,a&&a.set(e,t),t}function C(){return C=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var t in a)Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t])}return e},C.apply(this,arguments)}function K(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),a.push.apply(a,t)}return a}function w(e){for(var n=1;n<arguments.length;n++){var a=arguments[n]!=null?arguments[n]:{};n%2?K(Object(a),!0).forEach(function(t){ve(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):K(Object(a)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}function ve(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function ge(e,n){if(e==null)return{};var a={},t=Object.keys(e),r,i;for(i=0;i<t.length;i++)r=t[i],!(n.indexOf(r)>=0)&&(a[r]=e[r]);return a}function me(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,M(e,n)}function M(e,n){return M=Object.setPrototypeOf||function(t,r){return t.__proto__=r,t},M(e,n)}var X=function(e){me(n,e);function n(){for(var t,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return t=e.call.apply(e,[this].concat(i))||this,t.state={width:t.props.width,height:t.props.height,propsWidth:t.props.width,propsHeight:t.props.height},t.onResize=function(l,p){var f=p.size;t.props.onResize?(l.persist==null||l.persist(),t.setState(f,function(){return t.props.onResize&&t.props.onResize(l,p)})):t.setState(f)},t}n.getDerivedStateFromProps=function(r,i){return i.propsWidth!==r.width||i.propsHeight!==r.height?{width:r.width,height:r.height,propsWidth:r.width,propsHeight:r.height}:null};var a=n.prototype;return a.render=function(){var r=this.props,i=r.handle,s=r.handleSize;r.onResize;var l=r.onResizeStart,p=r.onResizeStop,f=r.draggableOpts,c=r.minConstraints,u=r.maxConstraints,d=r.lockAspectRatio,h=r.axis;r.width,r.height;var g=r.resizeHandles,v=r.style,O=r.transformScale,m=ge(r,he);return D.createElement(ce.default,{axis:h,draggableOpts:f,handle:i,handleSize:s,height:this.state.height,lockAspectRatio:d,maxConstraints:u,minConstraints:c,onResizeStart:l,onResize:this.onResize,onResizeStop:p,resizeHandles:g,transformScale:O,width:this.state.width},D.createElement("div",C({},m,{style:w(w({},v),{},{width:this.state.width+"px",height:this.state.height+"px"})})))},n}(D.Component);_.default=X;X.propTypes=w(w({},de.resizableProps),{},{children:fe.default.element});W.exports=function(){throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")};var be=W.exports.Resizable=R.default;W.exports.ResizableBox=_.default;export{be as R};
