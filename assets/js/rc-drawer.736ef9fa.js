import{d,f as te,h as J,b as Q}from"./@babel_runtime.494ad229.js";import{r as a}from"./react.fd625a73.js";import{P as de}from"./@rc-component_portal.1543fce3.js";import{c as I}from"./classnames.2e4736b8.js";import{C as U}from"./rc-motion.29d125eb.js";import{b as ue,K as Y}from"./rc-util.10e30ffd.js";var fe=function(t){var u=t.prefixCls,s=t.className,c=t.style,i=t.children,l=t.containerRef;return a.createElement(a.Fragment,null,a.createElement("div",{className:I("".concat(u,"-content"),s),style:d({},c),"aria-modal":"true",role:"dialog",ref:l},i))},Z=a.createContext(null);function ee(e){return typeof e=="string"&&String(Number(e))===e?(ue(!1,"Invalid value type of `width` or `height` which should be number type instead."),Number(e)):e}var ae={width:0,height:0,overflow:"hidden",outline:"none",position:"absolute"};function me(e){var t,u,s,c,i=e.prefixCls,l=e.open,f=e.placement,S=e.inline,b=e.push,x=e.forceRender,E=e.autoFocus,p=e.keyboard,K=e.rootClassName,D=e.rootStyle,g=e.zIndex,P=e.className,A=e.style,h=e.motion,R=e.width,w=e.height,M=e.children,$=e.contentWrapperStyle,O=e.mask,N=e.maskClosable,z=e.maskMotion,T=e.maskClassName,V=e.maskStyle,_=e.afterOpenChange,C=e.onClose,j=a.useRef(),W=a.useRef(),B=a.useRef(),ne=function(o){var y=o.keyCode,k=o.shiftKey;switch(y){case Y.TAB:{if(y===Y.TAB){if(!k&&document.activeElement===B.current){var L;(L=W.current)===null||L===void 0||L.focus({preventScroll:!0})}else if(k&&document.activeElement===W.current){var X;(X=B.current)===null||X===void 0||X.focus({preventScroll:!0})}}break}case Y.ESC:{C&&p&&C(o);break}}};a.useEffect(function(){if(l&&E){var n;(n=j.current)===null||n===void 0||n.focus({preventScroll:!0})}},[l,E]);var re=a.useState(!1),H=te(re,2),le=H[0],q=H[1],r=a.useContext(Z),F;b===!1?F={distance:0}:b===!0?F={}:F=b||{};var m=(t=(u=(s=F)===null||s===void 0?void 0:s.distance)!==null&&u!==void 0?u:r==null?void 0:r.pushDistance)!==null&&t!==void 0?t:180,oe=a.useMemo(function(){return{pushDistance:m,push:function(){q(!0)},pull:function(){q(!1)}}},[m]);a.useEffect(function(){if(l){var n;r==null||(n=r.push)===null||n===void 0||n.call(r)}else{var o;r==null||(o=r.pull)===null||o===void 0||o.call(r)}},[l]),a.useEffect(function(){return function(){var n;r==null||(n=r.pull)===null||n===void 0||n.call(r)}},[]);var ie=O&&a.createElement(U,J({key:"mask"},z,{visible:l}),function(n,o){var y=n.className,k=n.style;return a.createElement("div",{className:I("".concat(i,"-mask"),y,T),style:d(d({},k),V),onClick:N&&l?C:void 0,ref:o})}),se=typeof h=="function"?h(f):h,v={};if(le&&m)switch(f){case"top":v.transform="translateY(".concat(m,"px)");break;case"bottom":v.transform="translateY(".concat(-m,"px)");break;case"left":v.transform="translateX(".concat(m,"px)");break;default:v.transform="translateX(".concat(-m,"px)");break}f==="left"||f==="right"?v.width=ee(R):v.height=ee(w);var ce=a.createElement(U,J({key:"panel"},se,{visible:l,forceRender:x,onVisibleChanged:function(o){_==null||_(o)},removeOnLeave:!1,leavedClassName:"".concat(i,"-content-wrapper-hidden")}),function(n,o){var y=n.className,k=n.style;return a.createElement("div",{className:I("".concat(i,"-content-wrapper"),y),style:d(d(d({},v),k),$)},a.createElement(fe,{containerRef:o,prefixCls:i,className:P,style:A},M))}),G=d({},D);return g&&(G.zIndex=g),a.createElement(Z.Provider,{value:oe},a.createElement("div",{className:I(i,"".concat(i,"-").concat(f),K,(c={},Q(c,"".concat(i,"-open"),l),Q(c,"".concat(i,"-inline"),S),c)),style:G,tabIndex:-1,ref:j,onKeyDown:ne},ie,a.createElement("div",{tabIndex:0,ref:W,style:ae,"aria-hidden":"true","data-sentinel":"start"}),ce,a.createElement("div",{tabIndex:0,ref:B,style:ae,"aria-hidden":"true","data-sentinel":"end"})))}var ge=function(t){var u=t.open,s=u===void 0?!1:u,c=t.prefixCls,i=c===void 0?"rc-drawer":c,l=t.placement,f=l===void 0?"right":l,S=t.autoFocus,b=S===void 0?!0:S,x=t.keyboard,E=x===void 0?!0:x,p=t.width,K=p===void 0?378:p,D=t.mask,g=D===void 0?!0:D,P=t.maskClosable,A=P===void 0?!0:P,h=t.getContainer,R=t.forceRender,w=t.afterOpenChange,M=t.destroyOnClose,$=a.useState(!1),O=te($,2),N=O[0],z=O[1],T=function(C){z(C),w==null||w(C)};if(!R&&!N&&!s&&M)return null;var V=d(d({},t),{},{open:s,prefixCls:i,placement:f,autoFocus:b,keyboard:E,width:K,mask:g,maskClosable:A,inline:h===!1,afterOpenChange:T});return a.createElement(de,{open:s||R||N,autoDestroy:!1,getContainer:h,autoLock:g&&(s||N)},a.createElement(me,V))};export{ge as D};
