import{b as J,c as Q,a as k,d as U}from"./@babel_runtime@7.19.0-130d17ca.js";import{r as s}from"./react@18.2.0-9cdefec6.js";import{T as Z}from"./rc-trigger@5.3.1_biqbaboplfbrettd7655fr4n2y-964d0d78.js";import{c as F}from"./classnames@2.3.2-d75d9a59.js";import{e as $,x as ee,K as S}from"./rc-util@5.24.4_biqbaboplfbrettd7655fr4n2y-ae37cd3a.js";import{j as R,b as te,F as ne}from"./@ant-design_icons@4.7.0_biqbaboplfbrettd7655fr4n2y-770bcbdb.js";var d={adjustX:1,adjustY:1},g=[0,0],ie={topLeft:{points:["bl","tl"],overflow:d,offset:[0,-4],targetOffset:g},topCenter:{points:["bc","tc"],overflow:d,offset:[0,-4],targetOffset:g},topRight:{points:["br","tr"],overflow:d,offset:[0,-4],targetOffset:g},bottomLeft:{points:["tl","bl"],overflow:d,offset:[0,4],targetOffset:g},bottomCenter:{points:["tc","bc"],overflow:d,offset:[0,4],targetOffset:g},bottomRight:{points:["tr","br"],overflow:d,offset:[0,4],targetOffset:g}},re=S.ESC,ae=S.TAB;function oe(e){var m=e.visible,b=e.setTriggerVisible,u=e.triggerRef,p=e.onVisibleChange,c=e.autoFocus,f=s.useRef(!1),C=function(){if(m&&u.current){var n,r,a,o;(n=u.current)===null||n===void 0||(r=n.triggerRef)===null||r===void 0||(a=r.current)===null||a===void 0||(o=a.focus)===null||o===void 0||o.call(a),b(!1),typeof p=="function"&&p(!1)}},y=function(){var n,r,a,o,O=ee((n=u.current)===null||n===void 0||(r=n.popupRef)===null||r===void 0||(a=r.current)===null||a===void 0||(o=a.getElement)===null||o===void 0?void 0:o.call(a)),v=O[0];return v!=null&&v.focus?(v.focus(),f.current=!0,!0):!1},h=function(n){switch(n.keyCode){case re:C();break;case ae:{var r=!1;f.current||(r=y()),r?n.preventDefault():C();break}}};s.useEffect(function(){return m?(window.addEventListener("keydown",h),c&&$(y,3),function(){window.removeEventListener("keydown",h),f.current=!1}):function(){f.current=!1}},[m])}var le=["arrow","prefixCls","transitionName","animation","align","placement","placements","getPopupContainer","showAction","hideAction","overlayClassName","overlayStyle","visible","trigger","autoFocus"];function se(e,m){var b=e.arrow,u=b===void 0?!1:b,p=e.prefixCls,c=p===void 0?"rc-dropdown":p,f=e.transitionName,C=e.animation,y=e.align,h=e.placement,w=h===void 0?"bottomLeft":h,n=e.placements,r=n===void 0?ie:n,a=e.getPopupContainer,o=e.showAction,O=e.hideAction,v=e.overlayClassName,j=e.overlayStyle,L=e.visible,P=e.trigger,T=P===void 0?["hover"]:P,W=e.autoFocus,D=J(e,le),K=s.useState(),V=Q(K,2),_=V[0],A=V[1],N="visible"in e?L:_,E=s.useRef(null);s.useImperativeHandle(m,function(){return E.current}),oe({visible:N,setTriggerVisible:A,triggerRef:E,onVisibleChange:e.onVisibleChange,autoFocus:W});var B=function(){var t=e.overlay,i;return typeof t=="function"?i=t():i=t,i},H=function(t){var i=e.onOverlayClick;A(!1),i&&i(t)},I=function(t){var i=e.onVisibleChange;A(t),typeof i=="function"&&i(t)},x=function(){var t=B();return te(ne,{children:[u&&R("div",{className:"".concat(c,"-arrow")}),t]})},X=function(){var t=e.overlay;return typeof t=="function"?x:x()},Y=function(){var t=e.minOverlayWidthMatchTrigger,i=e.alignPoint;return"minOverlayWidthMatchTrigger"in e?t:!i},q=function(){var t=e.openClassName;return t!==void 0?t:"".concat(c,"-open")},z=function(){var t=e.children,i=t.props?t.props:{},G=F(i.className,q());return N&&t?s.cloneElement(t,{className:G}):t},M=O;return!M&&T.indexOf("contextMenu")!==-1&&(M=["click"]),R(Z,{...k(k({builtinPlacements:r},D),{},{prefixCls:c,ref:E,popupClassName:F(v,U({},"".concat(c,"-show-arrow"),u)),popupStyle:j,action:T,showAction:o,hideAction:M||[],popupPlacement:w,popupAlign:y,popupTransitionName:f,popupAnimation:C,popupVisible:N,stretch:Y()?"minWidth":"",popup:X(),onPopupVisibleChange:I,onPopupClick:H,getPopupContainer:a}),children:z()})}const me=s.forwardRef(se);export{me as D};
