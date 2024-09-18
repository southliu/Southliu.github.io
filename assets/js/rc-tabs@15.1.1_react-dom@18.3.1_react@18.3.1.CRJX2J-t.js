import{h as e,g as t,f as n,d as a,j as r,i as o,k as i}from"./@babel_runtime@7.25.4.Dq1HoS87.js";import{c}from"./classnames@2.5.1.KNnhpGSy.js";import{q as l,J as u,K as s,d as f,f as d,m as v,B as m}from"./rc-util@5.43.0_react-dom@18.3.1_react@18.3.1.BmHc6FYQ.js";import{r as b,e as p}from"./react@18.3.1.BUluQGWx.js";import{R as h}from"./rc-resize-observer@1.4.0_react-dom@18.3.1_react@18.3.1.DUxgL-xq.js";import{D as y}from"./rc-dropdown@4.2.0_react-dom@18.3.1_react@18.3.1.BG4-aKcc.js";import{E as g,M as E}from"./rc-menu@9.14.1_react-dom@18.3.1_react@18.3.1.Bgpdoid8.js";import{C as k}from"./rc-motion@2.9.2_react-dom@18.3.1_react@18.3.1.Bn5pWNWS.js";const C=b.createContext(null);var x={width:0,height:0,left:0,top:0};function w(t,n){var a=b.useRef(t),r=b.useState({}),o=e(r,2)[1];return[a.current,function(e){var t="function"==typeof e?e(a.current):e;t!==a.current&&n(t,a.current),a.current=t,o({})}]}var N=Math.pow(.995,20);function P(t){var n=b.useState(0),a=e(n,2),r=a[0],o=a[1],i=b.useRef(0),c=b.useRef();return c.current=t,u((function(){var e;null===(e=c.current)||void 0===e||e.call(c)}),[r]),function(){i.current===r&&(i.current+=1,o(i.current))}}var R={width:0,height:0,left:0,top:0,right:0};function T(e){var t;return e instanceof Map?(t={},e.forEach((function(e,n){t[n]=e}))):t=e,JSON.stringify(t)}function S(e){return String(e).replace(/"/g,"TABS_DQ")}function M(e,t,n,a){return!(!n||a||!1===e||void 0===e&&(!1===t||null===t))}var B=b.forwardRef((function(e,t){var n=e.prefixCls,a=e.editable,r=e.locale,o=e.style;return a&&!1!==a.showAdd?b.createElement("button",{ref:t,type:"button",className:"".concat(n,"-nav-add"),style:o,"aria-label":(null==r?void 0:r.addAriaLabel)||"Add tab",onClick:function(e){a.onEdit("add",{event:e})}},a.addIcon||"+"):null})),I=b.forwardRef((function(e,t){var a,r=e.position,o=e.prefixCls,i=e.extra;if(!i)return null;var c={};return"object"!==n(i)||b.isValidElement(i)?c.right=i:c=i,"right"===r&&(a=c.right),"left"===r&&(a=c.left),a?b.createElement("div",{className:"".concat(o,"-extra-content"),ref:t},a):null})),L=b.forwardRef((function(t,n){var o=t.prefixCls,i=t.id,l=t.tabs,u=t.locale,f=t.mobile,d=t.more,v=void 0===d?{}:d,m=t.style,p=t.className,h=t.editable,k=t.tabBarGutter,C=t.rtl,x=t.removeAriaLabel,w=t.onTabClick,N=t.getPopupContainer,P=t.popupClassName,R=b.useState(!1),T=e(R,2),S=T[0],I=T[1],L=b.useState(null),D=e(L,2),j=D[0],A=D[1],_=v.icon,K=void 0===_?"More":_,W="".concat(i,"-more-popup"),z="".concat(o,"-dropdown"),X=null!==j?"".concat(W,"-").concat(j):null,O=null==u?void 0:u.dropdownAriaLabel;var G=b.createElement(g,{onClick:function(e){var t=e.key,n=e.domEvent;w(t,n),I(!1)},prefixCls:"".concat(z,"-menu"),id:W,tabIndex:-1,role:"listbox","aria-activedescendant":X,selectedKeys:[j],"aria-label":void 0!==O?O:"expanded dropdown"},l.map((function(e){var t=e.closable,n=e.disabled,a=e.closeIcon,r=e.key,o=e.label,c=M(t,a,h,n);return b.createElement(E,{key:r,id:"".concat(W,"-").concat(r),role:"option","aria-controls":i&&"".concat(i,"-panel-").concat(r),disabled:n},b.createElement("span",null,o),c&&b.createElement("button",{type:"button","aria-label":x||"remove",tabIndex:0,className:"".concat(z,"-menu-item-remove"),onClick:function(e){e.stopPropagation(),function(e,t){e.preventDefault(),e.stopPropagation(),h.onEdit("remove",{key:t,event:e})}(e,r)}},a||h.removeIcon||"×"))})));function V(e){for(var t=l.filter((function(e){return!e.disabled})),n=t.findIndex((function(e){return e.key===j}))||0,a=t.length,r=0;r<a;r+=1){var o=t[n=(n+e+a)%a];if(!o.disabled)return void A(o.key)}}b.useEffect((function(){var e=document.getElementById(X);e&&e.scrollIntoView&&e.scrollIntoView(!1)}),[j]),b.useEffect((function(){S||A(null)}),[S]);var Y=a({},C?"marginRight":"marginLeft",k);l.length||(Y.visibility="hidden",Y.order=1);var F=c(a({},"".concat(z,"-rtl"),C)),q=f?null:b.createElement(y,r({prefixCls:z,overlay:G,visible:!!l.length&&S,onVisibleChange:I,overlayClassName:c(F,P),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:N},v),b.createElement("button",{type:"button",className:"".concat(o,"-nav-more"),style:Y,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":W,id:"".concat(i,"-more"),"aria-expanded":S,onKeyDown:function(e){var t=e.which;if(S)switch(t){case s.UP:V(-1),e.preventDefault();break;case s.DOWN:V(1),e.preventDefault();break;case s.ESC:I(!1);break;case s.SPACE:case s.ENTER:null!==j&&w(j,e)}else[s.DOWN,s.SPACE,s.ENTER].includes(t)&&(I(!0),e.preventDefault())}},K));return b.createElement("div",{className:c("".concat(o,"-nav-operations"),p),style:m,ref:n},q,b.createElement(B,{prefixCls:o,locale:u,editable:h}))}));const D=b.memo(L,(function(e,t){return t.tabMoving}));var j=function(e){var t=e.prefixCls,n=e.id,r=e.active,o=e.tab,i=o.key,l=o.label,u=o.disabled,f=o.closeIcon,d=o.icon,v=e.closable,m=e.renderWrapper,p=e.removeAriaLabel,h=e.editable,y=e.onClick,g=e.onFocus,E=e.style,k="".concat(t,"-tab"),C=M(v,f,h,u);function x(e){u||y(e)}var w=b.useMemo((function(){return d&&"string"==typeof l?b.createElement("span",null,l):l}),[l,d]),N=b.createElement("div",{key:i,"data-node-key":S(i),className:c(k,a(a(a({},"".concat(k,"-with-remove"),C),"".concat(k,"-active"),r),"".concat(k,"-disabled"),u)),style:E,onClick:x},b.createElement("div",{role:"tab","aria-selected":r,id:n&&"".concat(n,"-tab-").concat(i),className:"".concat(k,"-btn"),"aria-controls":n&&"".concat(n,"-panel-").concat(i),"aria-disabled":u,tabIndex:u?null:0,onClick:function(e){e.stopPropagation(),x(e)},onKeyDown:function(e){[s.SPACE,s.ENTER].includes(e.which)&&(e.preventDefault(),x(e))},onFocus:g},d&&b.createElement("span",{className:"".concat(k,"-icon")},d),l&&w),C&&b.createElement("button",{type:"button","aria-label":p||"remove",tabIndex:0,className:"".concat(k,"-remove"),onClick:function(e){var t;e.stopPropagation(),(t=e).preventDefault(),t.stopPropagation(),h.onEdit("remove",{key:i,event:t})}},f||h.removeIcon||"×"));return m?m(N):N},A=function(e){var t=e.current||{},n=t.offsetWidth,a=void 0===n?0:n,r=t.offsetHeight,o=void 0===r?0:r;if(e.current){var i=e.current.getBoundingClientRect(),c=i.width,l=i.height;if(Math.abs(c-a)<1)return[c,l]}return[a,o]},_=function(e,t){return e[t?0:1]},K=b.forwardRef((function(n,i){var u=n.className,s=n.style,v=n.id,m=n.animated,y=n.activeKey,g=n.rtl,E=n.extra,k=n.editable,M=n.locale,L=n.tabPosition,K=n.tabBarGutter,W=n.children,z=n.onTabClick,X=n.onTabScroll,O=n.indicator,G=b.useContext(C),V=G.prefixCls,Y=G.tabs,F=b.useRef(null),q=b.useRef(null),H=b.useRef(null),J=b.useRef(null),Q=b.useRef(null),U=b.useRef(null),Z=b.useRef(null),$="top"===L||"bottom"===L,ee=w(0,(function(e,t){$&&X&&X({direction:e>t?"left":"right"})})),te=e(ee,2),ne=te[0],ae=te[1],re=w(0,(function(e,t){!$&&X&&X({direction:e>t?"top":"bottom"})})),oe=e(re,2),ie=oe[0],ce=oe[1],le=b.useState([0,0]),ue=e(le,2),se=ue[0],fe=ue[1],de=b.useState([0,0]),ve=e(de,2),me=ve[0],be=ve[1],pe=b.useState([0,0]),he=e(pe,2),ye=he[0],ge=he[1],Ee=b.useState([0,0]),ke=e(Ee,2),Ce=ke[0],xe=ke[1],we=function(t){var n=b.useRef([]),a=b.useState({}),r=e(a,2)[1],o=b.useRef("function"==typeof t?t():t),i=P((function(){var e=o.current;n.current.forEach((function(t){e=t(e)})),n.current=[],o.current=e,r({})}));return[o.current,function(e){n.current.push(e),i()}]}(new Map),Ne=e(we,2),Pe=Ne[0],Re=Ne[1],Te=function(e,n,a){return b.useMemo((function(){for(var a,r=new Map,o=n.get(null===(a=e[0])||void 0===a?void 0:a.key)||x,i=o.left+o.width,c=0;c<e.length;c+=1){var l,u=e[c].key,s=n.get(u);s||(s=n.get(null===(l=e[c-1])||void 0===l?void 0:l.key)||x);var f=r.get(u)||t({},s);f.right=i-f.left-f.width,r.set(u,f)}return r}),[e.map((function(e){return e.key})).join("_"),n,a])}(Y,Pe,me[0]),Se=_(se,$),Me=_(me,$),Be=_(ye,$),Ie=_(Ce,$),Le=Se<Me+Be,De=Le?Se-Ie:Se-Be,je="".concat(V,"-nav-operations-hidden"),Ae=0,_e=0;function Ke(e){return e<Ae?Ae:e>_e?_e:e}$&&g?(Ae=0,_e=Math.max(0,Me-De)):(Ae=Math.min(0,De-Me),_e=0);var We=b.useRef(null),ze=b.useState(),Xe=e(ze,2),Oe=Xe[0],Ge=Xe[1];function Ve(){Ge(Date.now())}function Ye(){We.current&&clearTimeout(We.current)}!function(t,n){var a=b.useState(),r=e(a,2),o=r[0],i=r[1],c=b.useState(0),l=e(c,2),u=l[0],s=l[1],f=b.useState(0),d=e(f,2),v=d[0],m=d[1],p=b.useState(),h=e(p,2),y=h[0],g=h[1],E=b.useRef(),k=b.useRef(),C=b.useRef(null);C.current={onTouchStart:function(e){var t=e.touches[0],n=t.screenX,a=t.screenY;i({x:n,y:a}),window.clearInterval(E.current)},onTouchMove:function(e){if(o){e.preventDefault();var t=e.touches[0],a=t.screenX,r=t.screenY;i({x:a,y:r});var c=a-o.x,l=r-o.y;n(c,l);var f=Date.now();s(f),m(f-u),g({x:c,y:l})}},onTouchEnd:function(){if(o&&(i(null),g(null),y)){var e=y.x/v,t=y.y/v,a=Math.abs(e),r=Math.abs(t);if(Math.max(a,r)<.1)return;var c=e,l=t;E.current=window.setInterval((function(){Math.abs(c)<.01&&Math.abs(l)<.01?window.clearInterval(E.current):n(20*(c*=N),20*(l*=N))}),20)}},onWheel:function(e){var t=e.deltaX,a=e.deltaY,r=0,o=Math.abs(t),i=Math.abs(a);o===i?r="x"===k.current?t:a:o>i?(r=t,k.current="x"):(r=a,k.current="y"),n(-r,-r)&&e.preventDefault()}},b.useEffect((function(){function e(e){C.current.onTouchMove(e)}function n(e){C.current.onTouchEnd(e)}return document.addEventListener("touchmove",e,{passive:!1}),document.addEventListener("touchend",n,{passive:!0}),t.current.addEventListener("touchstart",(function(e){C.current.onTouchStart(e)}),{passive:!0}),t.current.addEventListener("wheel",(function(e){C.current.onWheel(e)}),{passive:!1}),function(){document.removeEventListener("touchmove",e),document.removeEventListener("touchend",n)}}),[])}(J,(function(e,t){function n(e,t){e((function(e){return Ke(e+t)}))}return!!Le&&($?n(ae,e):n(ce,t),Ye(),Ve(),!0)})),b.useEffect((function(){return Ye(),Oe&&(We.current=setTimeout((function(){Ge(0)}),100)),Ye}),[Oe]);var Fe=function(e,t,n,a,r,o,i){var c,l,u,s=i.tabs,f=i.tabPosition,d=i.rtl;return["top","bottom"].includes(f)?(c="width",l=d?"right":"left",u=Math.abs(n)):(c="height",l="top",u=-n),b.useMemo((function(){if(!s.length)return[0,0];for(var n=s.length,a=n,r=0;r<n;r+=1){var o=e.get(s[r].key)||R;if(o[l]+o[c]>u+t){a=r-1;break}}for(var i=0,f=n-1;f>=0;f-=1)if((e.get(s[f].key)||R)[l]<u){i=f+1;break}return i>=a?[0,0]:[i,a]}),[e,t,a,r,o,u,f,s.map((function(e){return e.key})).join("_"),d])}(Te,De,$?ne:ie,Me,Be,Ie,t(t({},n),{},{tabs:Y})),qe=e(Fe,2),He=qe[0],Je=qe[1],Qe=f((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=Te.get(e)||{width:0,height:0,left:0,right:0,top:0};if($){var n=ne;g?t.right<ne?n=t.right:t.right+t.width>ne+De&&(n=t.right+t.width-De):t.left<-ne?n=-t.left:t.left+t.width>-ne+De&&(n=-(t.left+t.width-De)),ce(0),ae(Ke(n))}else{var a=ie;t.top<-ie?a=-t.top:t.top+t.height>-ie+De&&(a=-(t.top+t.height-De)),ae(0),ce(Ke(a))}})),Ue={};"top"===L||"bottom"===L?Ue[g?"marginRight":"marginLeft"]=K:Ue.marginTop=K;var Ze=Y.map((function(e,t){var n=e.key;return b.createElement(j,{id:v,prefixCls:V,key:n,tab:e,style:0===t?void 0:Ue,closable:e.closable,editable:k,active:n===y,renderWrapper:W,removeAriaLabel:null==M?void 0:M.removeAriaLabel,onClick:function(e){z(n,e)},onFocus:function(){Qe(n),Ve(),J.current&&(g||(J.current.scrollLeft=0),J.current.scrollTop=0)}})})),$e=function(){return Re((function(){var t,n=new Map,a=null===(t=Q.current)||void 0===t?void 0:t.getBoundingClientRect();return Y.forEach((function(t){var r,o=t.key,i=null===(r=Q.current)||void 0===r?void 0:r.querySelector('[data-node-key="'.concat(S(o),'"]'));if(i){var c=function(e,t){var n=e.offsetWidth,a=e.offsetHeight,r=e.offsetTop,o=e.offsetLeft,i=e.getBoundingClientRect(),c=i.width,l=i.height,u=i.x,s=i.y;return Math.abs(c-n)<1?[c,l,u-t.x,s-t.y]:[n,a,o,r]}(i,a),l=e(c,4),u=l[0],s=l[1],f=l[2],d=l[3];n.set(o,{width:u,height:s,left:f,top:d})}})),n}))};b.useEffect((function(){$e()}),[Y.map((function(e){return e.key})).join("_")]);var et=P((function(){var e=A(F),t=A(q),n=A(H);fe([e[0]-t[0]-n[0],e[1]-t[1]-n[1]]);var a=A(Z);ge(a);var r=A(U);xe(r);var o=A(Q);be([o[0]-a[0],o[1]-a[1]]),$e()})),tt=Y.slice(0,He),nt=Y.slice(Je+1),at=[].concat(o(tt),o(nt)),rt=Te.get(y),ot=function(t){var n=t.activeTabOffset,a=t.horizontal,r=t.rtl,o=t.indicator,i=void 0===o?{}:o,c=i.size,u=i.align,s=void 0===u?"center":u,f=b.useState(),d=e(f,2),v=d[0],m=d[1],h=b.useRef(),y=p.useCallback((function(e){return"function"==typeof c?c(e):"number"==typeof c?c:e}),[c]);function g(){l.cancel(h.current)}return b.useEffect((function(){var e={};if(n)if(a){e.width=y(n.width);var t=r?"right":"left";"start"===s&&(e[t]=n[t]),"center"===s&&(e[t]=n[t]+n.width/2,e.transform=r?"translateX(50%)":"translateX(-50%)"),"end"===s&&(e[t]=n[t]+n.width,e.transform="translateX(-100%)")}else e.height=y(n.height),"start"===s&&(e.top=n.top),"center"===s&&(e.top=n.top+n.height/2,e.transform="translateY(-50%)"),"end"===s&&(e.top=n.top+n.height,e.transform="translateY(-100%)");return g(),h.current=l((function(){m(e)})),g}),[n,a,r,s,y]),{style:v}}({activeTabOffset:rt,horizontal:$,indicator:O,rtl:g}),it=ot.style;b.useEffect((function(){Qe()}),[y,Ae,_e,T(rt),T(Te),$]),b.useEffect((function(){et()}),[g]);var ct,lt,ut,st,ft=!!at.length,dt="".concat(V,"-nav-wrap");return $?g?(lt=ne>0,ct=ne!==_e):(ct=ne<0,lt=ne!==Ae):(ut=ie<0,st=ie!==Ae),b.createElement(h,{onResize:et},b.createElement("div",{ref:d(i,F),role:"tablist",className:c("".concat(V,"-nav"),u),style:s,onKeyDown:function(){Ve()}},b.createElement(I,{ref:q,position:"left",extra:E,prefixCls:V}),b.createElement(h,{onResize:et},b.createElement("div",{className:c(dt,a(a(a(a({},"".concat(dt,"-ping-left"),ct),"".concat(dt,"-ping-right"),lt),"".concat(dt,"-ping-top"),ut),"".concat(dt,"-ping-bottom"),st)),ref:J},b.createElement(h,{onResize:et},b.createElement("div",{ref:Q,className:"".concat(V,"-nav-list"),style:{transform:"translate(".concat(ne,"px, ").concat(ie,"px)"),transition:Oe?"none":void 0}},Ze,b.createElement(B,{ref:Z,prefixCls:V,locale:M,editable:k,style:t(t({},0===Ze.length?void 0:Ue),{},{visibility:ft?"hidden":null})}),b.createElement("div",{className:c("".concat(V,"-ink-bar"),a({},"".concat(V,"-ink-bar-animated"),m.inkBar)),style:it}))))),b.createElement(D,r({},n,{removeAriaLabel:null==M?void 0:M.removeAriaLabel,ref:U,prefixCls:V,tabs:at,className:!ft&&je,tabMoving:!!Oe})),b.createElement(I,{ref:H,position:"right",extra:E,prefixCls:V})))})),W=b.forwardRef((function(e,t){var n=e.prefixCls,a=e.className,r=e.style,o=e.id,i=e.active,l=e.tabKey,u=e.children;return b.createElement("div",{id:o&&"".concat(o,"-panel-").concat(l),role:"tabpanel",tabIndex:i?0:-1,"aria-labelledby":o&&"".concat(o,"-tab-").concat(l),"aria-hidden":!i,style:r,className:c(n,i&&"".concat(n,"-active"),a),ref:t},u)})),z=["renderTabBar"],X=["label","key"],O=function(e){var n=e.renderTabBar,a=i(e,z),o=b.useContext(C).tabs;return n?n(t(t({},a),{},{panes:o.map((function(e){var t=e.label,n=e.key,a=i(e,X);return b.createElement(W,r({tab:t,key:n,tabKey:n},a))}))}),K):b.createElement(K,a)},G=["key","forceRender","style","className","destroyInactiveTabPane"],V=function(e){var n=e.id,o=e.activeKey,l=e.animated,u=e.tabPosition,s=e.destroyInactiveTabPane,f=b.useContext(C),d=f.prefixCls,v=f.tabs,m=l.tabPane,p="".concat(d,"-tabpane");return b.createElement("div",{className:c("".concat(d,"-content-holder"))},b.createElement("div",{className:c("".concat(d,"-content"),"".concat(d,"-content-").concat(u),a({},"".concat(d,"-content-animated"),m))},v.map((function(e){var a=e.key,u=e.forceRender,f=e.style,d=e.className,v=e.destroyInactiveTabPane,h=i(e,G),y=a===o;return b.createElement(k,r({key:a,visible:y,forceRender:u,removeOnLeave:!(!s&&!v),leavedClassName:"".concat(p,"-hidden")},l.tabPaneMotion),(function(e,o){var i=e.style,l=e.className;return b.createElement(W,r({},h,{prefixCls:p,id:n,tabKey:a,animated:m,active:y,style:t(t({},f),i),className:c(d,l),ref:o}))}))}))))};var Y=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","more","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName","indicator"],F=0,q=b.forwardRef((function(o,l){var u=o.id,s=o.prefixCls,f=void 0===s?"rc-tabs":s,d=o.className,p=o.items,h=o.direction,y=o.activeKey,g=o.defaultActiveKey,E=o.editable,k=o.animated,x=o.tabPosition,w=void 0===x?"top":x,N=o.tabBarGutter,P=o.tabBarStyle,R=o.tabBarExtraContent,T=o.locale,S=o.more,M=o.destroyInactiveTabPane,B=o.renderTabBar,I=o.onChange,L=o.onTabClick,D=o.onTabScroll,j=o.getPopupContainer,A=o.popupClassName,_=o.indicator,K=i(o,Y),W=b.useMemo((function(){return(p||[]).filter((function(e){return e&&"object"===n(e)&&"key"in e}))}),[p]),z="rtl"===h,X=function(){var e,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{inkBar:!0,tabPane:!1};return(e=!1===a?{inkBar:!1,tabPane:!1}:!0===a?{inkBar:!0,tabPane:!1}:t({inkBar:!0},"object"===n(a)?a:{})).tabPaneMotion&&void 0===e.tabPane&&(e.tabPane=!0),!e.tabPaneMotion&&e.tabPane&&(e.tabPane=!1),e}(k),G=b.useState(!1),q=e(G,2),H=q[0],J=q[1];b.useEffect((function(){J(v())}),[]);var Q=m((function(){var e;return null===(e=W[0])||void 0===e?void 0:e.key}),{value:y,defaultValue:g}),U=e(Q,2),Z=U[0],$=U[1],ee=b.useState((function(){return W.findIndex((function(e){return e.key===Z}))})),te=e(ee,2),ne=te[0],ae=te[1];b.useEffect((function(){var e,t=W.findIndex((function(e){return e.key===Z}));-1===t&&(t=Math.max(0,Math.min(ne,W.length-1)),$(null===(e=W[t])||void 0===e?void 0:e.key));ae(t)}),[W.map((function(e){return e.key})).join("_"),Z,ne]);var re=m(null,{value:u}),oe=e(re,2),ie=oe[0],ce=oe[1];b.useEffect((function(){u||(ce("rc-tabs-".concat(F)),F+=1)}),[]);var le={id:ie,activeKey:Z,animated:X,tabPosition:w,rtl:z,mobile:H},ue=t(t({},le),{},{editable:E,locale:T,more:S,tabBarGutter:N,onTabClick:function(e,t){null==L||L(e,t);var n=e!==Z;$(e),n&&(null==I||I(e))},onTabScroll:D,extra:R,style:P,panes:null,getPopupContainer:j,popupClassName:A,indicator:_});return b.createElement(C.Provider,{value:{tabs:W,prefixCls:f}},b.createElement("div",r({ref:l,id:u,className:c(f,"".concat(f,"-").concat(w),a(a(a({},"".concat(f,"-mobile"),H),"".concat(f,"-editable"),E),"".concat(f,"-rtl"),z),d)},K),b.createElement(O,r({},ue,{renderTabBar:B})),b.createElement(V,r({destroyInactiveTabPane:M},le,{animated:X}))))}));export{q as T};
