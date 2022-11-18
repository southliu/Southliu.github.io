import{g as S,h as $,i as R,j,d as D,c as U,e as I,a as N,b as O}from"./@babel_runtime@7.19.0-130d17ca.js";import{r as M}from"./react@18.2.0-44b760b7.js";import{l as L,k as W}from"./rc-util@5.24.4_biqbaboplfbrettd7655fr4n2y-26f345e3.js";import{c as T}from"./classnames@2.3.2-d75d9a59.js";import{a as F}from"./rc-motion@2.6.2_biqbaboplfbrettd7655fr4n2y-efb9388b.js";import{R as V}from"./react-dom@18.2.0_react@18.2.0-a4d36ec3.js";import{b as q,j as y,F as z}from"./@ant-design_icons@4.7.0_biqbaboplfbrettd7655fr4n2y-e9f5044e.js";var _=function(k){S(m,k);var v=$(m);function m(){var e;R(this,m);for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return e=v.call.apply(v,[this].concat(r)),e.closeTimer=null,e.close=function(c){c&&c.stopPropagation(),e.clearCloseTimer();var l=e.props,u=l.onClose,s=l.noticeKey;u&&u(s)},e.startCloseTimer=function(){e.props.duration&&(e.closeTimer=window.setTimeout(function(){e.close()},e.props.duration*1e3))},e.clearCloseTimer=function(){e.closeTimer&&(clearTimeout(e.closeTimer),e.closeTimer=null)},e}return j(m,[{key:"componentDidMount",value:function(){this.startCloseTimer()}},{key:"componentDidUpdate",value:function(n){(this.props.duration!==n.duration||this.props.updateMark!==n.updateMark||this.props.visible!==n.visible&&this.props.visible)&&this.restartCloseTimer()}},{key:"componentWillUnmount",value:function(){this.clearCloseTimer()}},{key:"restartCloseTimer",value:function(){this.clearCloseTimer(),this.startCloseTimer()}},{key:"render",value:function(){var n=this,r=this.props,t=r.prefixCls,c=r.className,l=r.closable,u=r.closeIcon,s=r.style,p=r.onClick,a=r.children,i=r.holder,o="".concat(t,"-notice"),d=Object.keys(this.props).reduce(function(C,f){return(f.substr(0,5)==="data-"||f.substr(0,5)==="aria-"||f==="role")&&(C[f]=n.props[f]),C},{}),h=q("div",{className:T(o,c,D({},"".concat(o,"-closable"),l)),style:s,onMouseEnter:this.clearCloseTimer,onMouseLeave:this.startCloseTimer,onClick:p,...d,children:[y("div",{className:"".concat(o,"-content"),children:a}),l?y("a",{tabIndex:0,onClick:this.close,className:"".concat(o,"-close"),children:u||y("span",{className:"".concat(o,"-close-x")})}):null]});return i?V.createPortal(h,i):h}}]),m}(M.exports.Component);_.defaultProps={onClose:function(){},duration:1.5};function B(k){var v=M.exports.useRef({}),m=M.exports.useState([]),e=U(m,2),n=e[0],r=e[1];function t(c){var l=!0;k.add(c,function(u,s){var p=s.key;if(u&&(!v.current[p]||l)){var a=y(_,{...s,holder:u});v.current[p]=a,r(function(i){var o=i.findIndex(function(h){return h.key===s.key});if(o===-1)return[].concat(I(i),[a]);var d=I(i);return d[o]=a,d})}l=!1})}return[t,y(z,{children:n})]}var E=["getContainer"],w=0,G=Date.now();function K(){var k=w;return w+=1,"rcNotification_".concat(G,"_").concat(k)}var P=function(k){S(m,k);var v=$(m);function m(){var e;R(this,m);for(var n=arguments.length,r=new Array(n),t=0;t<n;t++)r[t]=arguments[t];return e=v.call.apply(v,[this].concat(r)),e.state={notices:[]},e.hookRefs=new Map,e.add=function(c,l){var u=c.key||K(),s=N(N({},c),{},{key:u}),p=e.props.maxCount;e.setState(function(a){var i=a.notices,o=i.map(function(h){return h.notice.key}).indexOf(u),d=i.concat();return o!==-1?d.splice(o,1,{notice:s,holderCallback:l}):(p&&i.length>=p&&(s.key=d[0].notice.key,s.updateMark=K(),s.userPassKey=u,d.shift()),d.push({notice:s,holderCallback:l})),{notices:d}})},e.remove=function(c){e.setState(function(l){var u=l.notices;return{notices:u.filter(function(s){var p=s.notice,a=p.key,i=p.userPassKey,o=i||a;return o!==c})}})},e.noticePropsMap={},e}return j(m,[{key:"getTransitionName",value:function(){var n=this.props,r=n.prefixCls,t=n.animation,c=this.props.transitionName;return!c&&t&&(c="".concat(r,"-").concat(t)),c}},{key:"render",value:function(){var n=this,r=this.state.notices,t=this.props,c=t.prefixCls,l=t.className,u=t.closeIcon,s=t.style,p=[];return r.forEach(function(a,i){var o=a.notice,d=a.holderCallback,h=i===r.length-1?o.updateMark:void 0,C=o.key,f=o.userPassKey,x=N(N(N({prefixCls:c,closeIcon:u},o),o.props),{},{key:C,noticeKey:f||C,updateMark:h,onClose:function(b){var g;n.remove(b),(g=o.onClose)===null||g===void 0||g.call(o)},onClick:o.onClick,children:o.content});p.push(C),n.noticePropsMap[C]={props:x,holderCallback:d}}),y("div",{className:T(c,l),style:s,children:y(F,{keys:p,motionName:this.getTransitionName(),onVisibleChanged:function(i,o){var d=o.key;i||delete n.noticePropsMap[d]},children:function(a){var i=a.key,o=a.className,d=a.style,h=a.visible,C=n.noticePropsMap[i],f=C.props,x=C.holderCallback;return x?y("div",{className:T(o,"".concat(c,"-hook-holder")),style:N({},d),ref:function(b){typeof i>"u"||(b?(n.hookRefs.set(i,b),x(b,f)):n.hookRefs.delete(i))}},i):y(_,{...f,className:T(o,f==null?void 0:f.className),style:N(N({},d),f==null?void 0:f.style),visible:h})}})})}}]),m}(M.exports.Component);P.newInstance=void 0;P.defaultProps={prefixCls:"rc-notification",animation:"fade",style:{top:65,left:"50%"}};P.newInstance=function(v,m){var e=v||{},n=e.getContainer,r=O(e,E),t=document.createElement("div");if(n){var c=n();c.appendChild(t)}else document.body.appendChild(t);var l=!1;function u(s){l||(l=!0,m({notice:function(a){s.add(a)},removeNotice:function(a){s.remove(a)},component:s,destroy:function(){W(t),t.parentNode&&t.parentNode.removeChild(t)},useNotification:function(){return B(s)}}))}L(y(P,{...r,ref:u}),t)};export{P as N,B as u};
