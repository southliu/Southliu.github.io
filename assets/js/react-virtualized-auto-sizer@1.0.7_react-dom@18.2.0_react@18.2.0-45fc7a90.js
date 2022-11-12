import{r as O}from"./react@18.2.0-9cdefec6.js";var x=function(a,t){if(!(a instanceof t))throw new TypeError("Cannot call a class as a function")},D=function(){function a(t,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(t,n,r){return n&&a(t.prototype,n),r&&a(t,r),t}}(),j=Object.assign||function(a){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(a[r]=n[r])}return a},q=function(a,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof t);a.prototype=Object.create(t&&t.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(a,t):a.__proto__=t)},W=function(a,t){if(!a)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t&&(typeof t=="object"||typeof t=="function")?t:a},M=function(){function a(t,n){var r=[],i=!0,h=!1,c=void 0;try{for(var u=t[Symbol.iterator](),l;!(i=(l=u.next()).done)&&(r.push(l.value),!(n&&r.length===n));i=!0);}catch(f){h=!0,c=f}finally{try{!i&&u.return&&u.return()}finally{if(h)throw c}}return r}return function(t,n){if(Array.isArray(t))return t;if(Symbol.iterator in Object(t))return a(t,n);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),d=void 0;typeof window<"u"?d=window:typeof self<"u"?d=self:d=global;var S=null,A=null,C=20,R=d.clearTimeout,H=d.setTimeout,N=d.cancelAnimationFrame||d.mozCancelAnimationFrame||d.webkitCancelAnimationFrame,I=d.requestAnimationFrame||d.mozRequestAnimationFrame||d.webkitRequestAnimationFrame;N==null||I==null?(S=R,A=function(t){return H(t,C)}):(S=function(t){var n=M(t,2),r=n[0],i=n[1];N(r),R(i)},A=function(t){var n=I(function(){R(r),t()}),r=H(function(){N(n),t()},C);return[n,r]});function P(a){var t=void 0,n=void 0,r=void 0,i=void 0,h=void 0,c=void 0,u=void 0,l=typeof document<"u"&&document.attachEvent;if(!l){c=function(e){var s=e.__resizeTriggers__,o=s.firstElementChild,_=s.lastElementChild,y=o.firstElementChild;_.scrollLeft=_.scrollWidth,_.scrollTop=_.scrollHeight,y.style.width=o.offsetWidth+1+"px",y.style.height=o.offsetHeight+1+"px",o.scrollLeft=o.scrollWidth,o.scrollTop=o.scrollHeight},h=function(e){return e.offsetWidth!==e.__resizeLast__.width||e.offsetHeight!==e.__resizeLast__.height},u=function(e){if(!(e.target.className&&typeof e.target.className.indexOf=="function"&&e.target.className.indexOf("contract-trigger")<0&&e.target.className.indexOf("expand-trigger")<0)){var s=this;c(this),this.__resizeRAF__&&S(this.__resizeRAF__),this.__resizeRAF__=A(function(){h(s)&&(s.__resizeLast__.width=s.offsetWidth,s.__resizeLast__.height=s.offsetHeight,s.__resizeListeners__.forEach(function(y){y.call(s,e)}))})}};var f=!1,p="";r="animationstart";var z="Webkit Moz O ms".split(" "),w="webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(" "),v="";{var g=document.createElement("fakeelement");if(g.style.animationName!==void 0&&(f=!0),f===!1){for(var m=0;m<z.length;m++)if(g.style[z[m]+"AnimationName"]!==void 0){v=z[m],p="-"+v.toLowerCase()+"-",r=w[m],f=!0;break}}}n="resizeanim",t="@"+p+"keyframes "+n+" { from { opacity: 0; } to { opacity: 0; } } ",i=p+"animation: 1ms "+n+"; "}var E=function(e){if(!e.getElementById("detectElementResize")){var s=(t||"")+".resize-triggers { "+(i||"")+'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',o=e.head||e.getElementsByTagName("head")[0],_=e.createElement("style");_.id="detectElementResize",_.type="text/css",a!=null&&_.setAttribute("nonce",a),_.styleSheet?_.styleSheet.cssText=s:_.appendChild(e.createTextNode(s)),o.appendChild(_)}},L=function(e,s){if(l)e.attachEvent("onresize",s);else{if(!e.__resizeTriggers__){var o=e.ownerDocument,_=d.getComputedStyle(e);_&&_.position==="static"&&(e.style.position="relative"),E(o),e.__resizeLast__={},e.__resizeListeners__=[],(e.__resizeTriggers__=o.createElement("div")).className="resize-triggers";var y=o.createElement("div");y.className="expand-trigger",y.appendChild(o.createElement("div"));var F=o.createElement("div");F.className="contract-trigger",e.__resizeTriggers__.appendChild(y),e.__resizeTriggers__.appendChild(F),e.appendChild(e.__resizeTriggers__),c(e),e.addEventListener("scroll",u,!0),r&&(e.__resizeTriggers__.__animationListener__=function(k){k.animationName===n&&c(e)},e.__resizeTriggers__.addEventListener(r,e.__resizeTriggers__.__animationListener__))}e.__resizeListeners__.push(s)}},T=function(e,s){if(l)e.detachEvent("onresize",s);else if(e.__resizeListeners__.splice(e.__resizeListeners__.indexOf(s),1),!e.__resizeListeners__.length){e.removeEventListener("scroll",u,!0),e.__resizeTriggers__.__animationListener__&&(e.__resizeTriggers__.removeEventListener(r,e.__resizeTriggers__.__animationListener__),e.__resizeTriggers__.__animationListener__=null);try{e.__resizeTriggers__=!e.removeChild(e.__resizeTriggers__)}catch{}}};return{addResizeListener:L,removeResizeListener:T}}var U=function(a){q(t,a);function t(){var n,r,i,h;x(this,t);for(var c=arguments.length,u=Array(c),l=0;l<c;l++)u[l]=arguments[l];return h=(r=(i=W(this,(n=t.__proto__||Object.getPrototypeOf(t)).call.apply(n,[this].concat(u))),i),i.state={height:i.props.defaultHeight||0,width:i.props.defaultWidth||0},i._onResize=function(){var f=i.props,p=f.disableHeight,z=f.disableWidth,w=f.onResize;if(i._parentNode){var v=i._parentNode.offsetHeight||0,g=i._parentNode.offsetWidth||0,m=window.getComputedStyle(i._parentNode)||{},E=parseInt(m.paddingLeft,10)||0,L=parseInt(m.paddingRight,10)||0,T=parseInt(m.paddingTop,10)||0,b=parseInt(m.paddingBottom,10)||0,e=v-T-b,s=g-E-L;(!p&&i.state.height!==e||!z&&i.state.width!==s)&&(i.setState({height:v-T-b,width:g-E-L}),w({height:v,width:g}))}},i._setRef=function(f){i._autoSizer=f},r),W(i,h)}return D(t,[{key:"componentDidMount",value:function(){var r=this.props.nonce;this._autoSizer&&this._autoSizer.parentNode&&this._autoSizer.parentNode.ownerDocument&&this._autoSizer.parentNode.ownerDocument.defaultView&&this._autoSizer.parentNode instanceof this._autoSizer.parentNode.ownerDocument.defaultView.HTMLElement&&(this._parentNode=this._autoSizer.parentNode,this._detectElementResize=P(r),this._detectElementResize.addResizeListener(this._parentNode,this._onResize),this._onResize())}},{key:"componentWillUnmount",value:function(){this._detectElementResize&&this._parentNode&&this._detectElementResize.removeResizeListener(this._parentNode,this._onResize)}},{key:"render",value:function(){var r=this.props,i=r.children,h=r.className,c=r.disableHeight,u=r.disableWidth,l=r.style,f=this.state,p=f.height,z=f.width,w={overflow:"visible"},v={},g=!1;return c||(p===0&&(g=!0),w.height=0,v.height=p),u||(z===0&&(g=!0),w.width=0,v.width=z),O.createElement("div",{className:h,ref:this._setRef,style:j({},w,l)},!g&&i(v))}}]),t}(O.PureComponent);U.defaultProps={onResize:function(){},disableHeight:!1,disableWidth:!1,style:{}};export{U as A};
