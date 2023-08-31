import{b as W,n as Ce,g as ce,e as H,c as R,d as Ke,f as Je}from"./@babel_runtime.c8088fcd.js";import{r as t}from"./react.76efb1e3.js";import{c as j}from"./classnames.82ff248b.js";import{a9 as wt,Z,j as It,W as et,m as Mt,aa as Lt,_ as tt}from"./rc-util.644b3d3a.js";import{C as At}from"./rc-motion.2ceeb80c.js";import{R as at}from"./rc-resize-observer.438dc091.js";import{D as Bt}from"./rc-dropdown.2e9cd17f.js";import{E as Dt,M as Kt}from"./rc-menu.8424c90c.js";const xe=t.createContext(null);var ft=t.forwardRef(function(e,a){var r=e.prefixCls,i=e.className,o=e.style,n=e.id,c=e.active,s=e.tabKey,l=e.children;return t.createElement("div",{id:n&&"".concat(n,"-panel-").concat(s),role:"tabpanel",tabIndex:c?0:-1,"aria-labelledby":n&&"".concat(n,"-tab-").concat(s),"aria-hidden":!c,style:o,className:j(r,c&&"".concat(r,"-active"),i),ref:a},l)}),zt=["key","forceRender","style","className"];function $t(e){var a=e.id,r=e.activeKey,i=e.animated,o=e.tabPosition,n=e.destroyInactiveTabPane,c=t.useContext(xe),s=c.prefixCls,l=c.tabs,y=i.tabPane,g="".concat(s,"-tabpane");return t.createElement("div",{className:j("".concat(s,"-content-holder"))},t.createElement("div",{className:j("".concat(s,"-content"),"".concat(s,"-content-").concat(o),W({},"".concat(s,"-content-animated"),y))},l.map(function(u){var S=u.key,w=u.forceRender,E=u.style,I=u.className,L=Ce(u,zt),N=S===r;return t.createElement(At,ce({key:S,visible:N,forceRender:w,removeOnLeave:!!n,leavedClassName:"".concat(g,"-hidden")},i.tabPaneMotion),function(M,A){var U=M.style,K=M.className;return t.createElement(ft,ce({},L,{prefixCls:g,id:a,tabKey:S,animated:y,active:N,style:H(H({},E),U),className:j(I,K),ref:A}))})})))}var nt={width:0,height:0,left:0,top:0};function Ot(e,a,r){return t.useMemo(function(){for(var i,o=new Map,n=a.get((i=e[0])===null||i===void 0?void 0:i.key)||nt,c=n.left+n.width,s=0;s<e.length;s+=1){var l=e[s].key,y=a.get(l);if(!y){var g;y=a.get((g=e[s-1])===null||g===void 0?void 0:g.key)||nt}var u=o.get(l)||H({},y);u.right=c-u.left-u.width,o.set(l,u)}return o},[e.map(function(i){return i.key}).join("_"),a,r])}function rt(e,a){var r=t.useRef(e),i=t.useState({}),o=R(i,2),n=o[1];function c(s){var l=typeof s=="function"?s(r.current):s;l!==r.current&&a(l,r.current),r.current=l,n({})}return[r.current,c]}var Wt=.1,ot=.01,Ee=20,it=Math.pow(.995,Ee);function Ut(e,a){var r=t.useState(),i=R(r,2),o=i[0],n=i[1],c=t.useState(0),s=R(c,2),l=s[0],y=s[1],g=t.useState(0),u=R(g,2),S=u[0],w=u[1],E=t.useState(),I=R(E,2),L=I[0],N=I[1],M=t.useRef();function A(h){var x=h.touches[0],d=x.screenX,T=x.screenY;n({x:d,y:T}),window.clearInterval(M.current)}function U(h){if(o){h.preventDefault();var x=h.touches[0],d=x.screenX,T=x.screenY;n({x:d,y:T});var v=d-o.x,p=T-o.y;a(v,p);var G=Date.now();y(G),w(G-l),N({x:v,y:p})}}function K(){if(o&&(n(null),N(null),L)){var h=L.x/S,x=L.y/S,d=Math.abs(h),T=Math.abs(x);if(Math.max(d,T)<Wt)return;var v=h,p=x;M.current=window.setInterval(function(){if(Math.abs(v)<ot&&Math.abs(p)<ot){window.clearInterval(M.current);return}v*=it,p*=it,a(v*Ee,p*Ee)},Ee)}}var P=t.useRef();function C(h){var x=h.deltaX,d=h.deltaY,T=0,v=Math.abs(x),p=Math.abs(d);v===p?T=P.current==="x"?x:d:v>p?(T=x,P.current="x"):(T=d,P.current="y"),a(-T,-T)&&h.preventDefault()}var z=t.useRef(null);z.current={onTouchStart:A,onTouchMove:U,onTouchEnd:K,onWheel:C},t.useEffect(function(){function h(v){z.current.onTouchStart(v)}function x(v){z.current.onTouchMove(v)}function d(v){z.current.onTouchEnd(v)}function T(v){z.current.onWheel(v)}return document.addEventListener("touchmove",x,{passive:!1}),document.addEventListener("touchend",d,{passive:!1}),e.current.addEventListener("touchstart",h,{passive:!1}),e.current.addEventListener("wheel",T),function(){document.removeEventListener("touchmove",x),document.removeEventListener("touchend",d)}},[])}function vt(e){var a=t.useState(0),r=R(a,2),i=r[0],o=r[1],n=t.useRef(0),c=t.useRef();return c.current=e,wt(function(){var s;(s=c.current)===null||s===void 0||s.call(c)},[i]),function(){n.current===i&&(n.current+=1,o(n.current))}}function Vt(e){var a=t.useRef([]),r=t.useState({}),i=R(r,2),o=i[1],n=t.useRef(typeof e=="function"?e():e),c=vt(function(){var l=n.current;a.current.forEach(function(y){l=y(l)}),a.current=[],n.current=l,o({})});function s(l){a.current.push(l),c()}return[n.current,s]}var ct={width:0,height:0,left:0,top:0,right:0};function Ft(e,a,r,i,o,n,c){var s=c.tabs,l=c.tabPosition,y=c.rtl,g,u,S;return["top","bottom"].includes(l)?(g="width",u=y?"right":"left",S=Math.abs(r)):(g="height",u="top",S=-r),t.useMemo(function(){if(!s.length)return[0,0];for(var w=s.length,E=w,I=0;I<w;I+=1){var L=e.get(s[I].key)||ct;if(L[u]+L[g]>S+a){E=I-1;break}}for(var N=0,M=w-1;M>=0;M-=1){var A=e.get(s[M].key)||ct;if(A[u]<S){N=M+1;break}}return N>=E?[0,0]:[N,E]},[e,a,i,o,n,S,l,s.map(function(w){return w.key}).join("_"),y])}function st(e){var a;return e instanceof Map?(a={},e.forEach(function(r,i){a[i]=r})):a=e,JSON.stringify(a)}var _t="TABS_DQ";function mt(e){return String(e).replace(/"/g,_t)}function bt(e,a,r,i){return!(!r||i||e===!1||e===void 0&&(a===!1||a===null))}function Ht(e,a){var r=e.prefixCls,i=e.editable,o=e.locale,n=e.style;return!i||i.showAdd===!1?null:t.createElement("button",{ref:a,type:"button",className:"".concat(r,"-nav-add"),style:n,"aria-label":(o==null?void 0:o.addAriaLabel)||"Add tab",onClick:function(s){i.onEdit("add",{event:s})}},i.addIcon||"+")}const pt=t.forwardRef(Ht);var lt=t.forwardRef(function(e,a){var r=e.position,i=e.prefixCls,o=e.extra;if(!o)return null;var n,c={};return Ke(o)==="object"&&!t.isValidElement(o)?c=o:c.right=o,r==="right"&&(n=c.right),r==="left"&&(n=c.left),n?t.createElement("div",{className:"".concat(i,"-extra-content"),ref:a},n):null});function jt(e,a){var r=e.prefixCls,i=e.id,o=e.tabs,n=e.locale,c=e.mobile,s=e.moreIcon,l=s===void 0?"More":s,y=e.moreTransitionName,g=e.style,u=e.className,S=e.editable,w=e.tabBarGutter,E=e.rtl,I=e.removeAriaLabel,L=e.onTabClick,N=e.getPopupContainer,M=e.popupClassName,A=t.useState(!1),U=R(A,2),K=U[0],P=U[1],C=t.useState(null),z=R(C,2),h=z[0],x=z[1],d="".concat(i,"-more-popup"),T="".concat(r,"-dropdown"),v=h!==null?"".concat(d,"-").concat(h):null,p=n==null?void 0:n.dropdownAriaLabel;function G(m,B){m.preventDefault(),m.stopPropagation(),S.onEdit("remove",{key:B,event:m})}var de=t.createElement(Dt,{onClick:function(B){var _=B.key,O=B.domEvent;L(_,O),P(!1)},prefixCls:"".concat(T,"-menu"),id:d,tabIndex:-1,role:"listbox","aria-activedescendant":v,selectedKeys:[h],"aria-label":p!==void 0?p:"expanded dropdown"},o.map(function(m){var B=m.closable,_=m.disabled,O=m.closeIcon,V=m.key,ee=m.label,q=bt(B,O,S,_);return t.createElement(Kt,{key:V,id:"".concat(d,"-").concat(V),role:"option","aria-controls":i&&"".concat(i,"-panel-").concat(V),disabled:_},t.createElement("span",null,ee),q&&t.createElement("button",{type:"button","aria-label":I||"remove",tabIndex:0,className:"".concat(T,"-menu-item-remove"),onClick:function(le){le.stopPropagation(),G(le,V)}},O||S.removeIcon||"×"))}));function J(m){for(var B=o.filter(function(q){return!q.disabled}),_=B.findIndex(function(q){return q.key===h})||0,O=B.length,V=0;V<O;V+=1){_=(_+m+O)%O;var ee=B[_];if(!ee.disabled){x(ee.key);return}}}function F(m){var B=m.which;if(!K){[Z.DOWN,Z.SPACE,Z.ENTER].includes(B)&&(P(!0),m.preventDefault());return}switch(B){case Z.UP:J(-1),m.preventDefault();break;case Z.DOWN:J(1),m.preventDefault();break;case Z.ESC:P(!1);break;case Z.SPACE:case Z.ENTER:h!==null&&L(h,m);break}}t.useEffect(function(){var m=document.getElementById(v);m&&m.scrollIntoView&&m.scrollIntoView(!1)},[h]),t.useEffect(function(){K||x(null)},[K]);var Q=W({},E?"marginRight":"marginLeft",w);o.length||(Q.visibility="hidden",Q.order=1);var fe=j(W({},"".concat(T,"-rtl"),E)),oe=c?null:t.createElement(Bt,{prefixCls:T,overlay:de,trigger:["hover"],visible:o.length?K:!1,transitionName:y,onVisibleChange:P,overlayClassName:j(fe,M),mouseEnterDelay:.1,mouseLeaveDelay:.1,getPopupContainer:N},t.createElement("button",{type:"button",className:"".concat(r,"-nav-more"),style:Q,tabIndex:-1,"aria-hidden":"true","aria-haspopup":"listbox","aria-controls":d,id:"".concat(i,"-more"),"aria-expanded":K,onKeyDown:F},l));return t.createElement("div",{className:j("".concat(r,"-nav-operations"),u),style:g,ref:a},oe,t.createElement(pt,{prefixCls:r,locale:n,editable:S}))}const Gt=t.memo(t.forwardRef(jt),function(e,a){return a.tabMoving});function Xt(e){var a,r=e.prefixCls,i=e.id,o=e.active,n=e.tab,c=n.key,s=n.label,l=n.disabled,y=n.closeIcon,g=e.closable,u=e.renderWrapper,S=e.removeAriaLabel,w=e.editable,E=e.onClick,I=e.onFocus,L=e.style,N="".concat(r,"-tab"),M=bt(g,y,w,l);function A(P){l||E(P)}function U(P){P.preventDefault(),P.stopPropagation(),w.onEdit("remove",{key:c,event:P})}var K=t.createElement("div",{key:c,"data-node-key":mt(c),className:j(N,(a={},W(a,"".concat(N,"-with-remove"),M),W(a,"".concat(N,"-active"),o),W(a,"".concat(N,"-disabled"),l),a)),style:L,onClick:A},t.createElement("div",{role:"tab","aria-selected":o,id:i&&"".concat(i,"-tab-").concat(c),className:"".concat(N,"-btn"),"aria-controls":i&&"".concat(i,"-panel-").concat(c),"aria-disabled":l,tabIndex:l?null:0,onClick:function(C){C.stopPropagation(),A(C)},onKeyDown:function(C){[Z.SPACE,Z.ENTER].includes(C.which)&&(C.preventDefault(),A(C))},onFocus:I},s),M&&t.createElement("button",{type:"button","aria-label":S||"remove",tabIndex:0,className:"".concat(N,"-remove"),onClick:function(C){C.stopPropagation(),U(C)}},y||w.removeIcon||"×"));return u?u(K):K}var ue=function(a){var r=a.current||{},i=r.offsetWidth,o=i===void 0?0:i,n=r.offsetHeight,c=n===void 0?0:n;return[o,c]},ge=function(a,r){return a[r?0:1]};function Yt(e,a){var r,i=t.useContext(xe),o=i.prefixCls,n=i.tabs,c=e.className,s=e.style,l=e.id,y=e.animated,g=e.activeKey,u=e.rtl,S=e.extra,w=e.editable,E=e.locale,I=e.tabPosition,L=e.tabBarGutter,N=e.children,M=e.onTabClick,A=e.onTabScroll,U=t.useRef(),K=t.useRef(),P=t.useRef(),C=t.useRef(),z=t.useRef(),h=t.useRef(),x=t.useRef(),d=I==="top"||I==="bottom",T=rt(0,function(b,f){d&&A&&A({direction:b>f?"left":"right"})}),v=R(T,2),p=v[0],G=v[1],de=rt(0,function(b,f){!d&&A&&A({direction:b>f?"top":"bottom"})}),J=R(de,2),F=J[0],Q=J[1],fe=t.useState([0,0]),oe=R(fe,2),m=oe[0],B=oe[1],_=t.useState([0,0]),O=R(_,2),V=O[0],ee=O[1],q=t.useState([0,0]),se=R(q,2),le=se[0],Te=se[1],ke=t.useState([0,0]),ve=R(ke,2),Re=ve[0],Ne=ve[1],k=Vt(new Map),te=R(k,2),me=te[0],ht=te[1],he=Ot(n,me,V[0]),Pe=ge(m,d),be=ge(V,d),we=ge(le,d),ze=ge(Re,d),$e=Pe<be+we,X=$e?Pe-ze:Pe-we,yt="".concat(o,"-nav-operations-hidden"),ae=0,ie=0;d&&u?(ae=0,ie=Math.max(0,be-X)):(ae=Math.min(0,X-be),ie=0);function Ie(b){return b<ae?ae:b>ie?ie:b}var Oe=t.useRef(),St=t.useState(),We=R(St,2),ye=We[0],Ue=We[1];function Me(){Ue(Date.now())}function Le(){window.clearTimeout(Oe.current)}Ut(C,function(b,f){function D($,re){$(function(Y){var Pt=Ie(Y+re);return Pt})}return $e?(d?D(G,b):D(Q,f),Le(),Me(),!0):!1}),t.useEffect(function(){return Le(),ye&&(Oe.current=window.setTimeout(function(){Ue(0)},100)),Le},[ye]);var gt=Ft(he,X,d?p:F,be,we,ze,H(H({},e),{},{tabs:n})),Ve=R(gt,2),Et=Ve[0],Ct=Ve[1],Fe=It(function(){var b=arguments.length>0&&arguments[0]!==void 0?arguments[0]:g,f=he.get(b)||{width:0,height:0,left:0,right:0,top:0};if(d){var D=p;u?f.right<p?D=f.right:f.right+f.width>p+X&&(D=f.right+f.width-X):f.left<-p?D=-f.left:f.left+f.width>-p+X&&(D=-(f.left+f.width-X)),Q(0),G(Ie(D))}else{var $=F;f.top<-F?$=-f.top:f.top+f.height>-F+X&&($=-(f.top+f.height-X)),G(0),Q(Ie($))}}),Se={};I==="top"||I==="bottom"?Se[u?"marginRight":"marginLeft"]=L:Se.marginTop=L;var _e=n.map(function(b,f){var D=b.key;return t.createElement(Xt,{id:l,prefixCls:o,key:D,tab:b,style:f===0?void 0:Se,closable:b.closable,editable:w,active:D===g,renderWrapper:N,removeAriaLabel:E==null?void 0:E.removeAriaLabel,onClick:function(re){M(D,re)},onFocus:function(){Fe(D),Me(),C.current&&(u||(C.current.scrollLeft=0),C.current.scrollTop=0)}})}),He=function(){return ht(function(){var f=new Map;return n.forEach(function(D){var $,re=D.key,Y=($=z.current)===null||$===void 0?void 0:$.querySelector('[data-node-key="'.concat(mt(re),'"]'));Y&&f.set(re,{width:Y.offsetWidth,height:Y.offsetHeight,left:Y.offsetLeft,top:Y.offsetTop})}),f})};t.useEffect(function(){He()},[n.map(function(b){return b.key}).join("_")]);var Ae=vt(function(){var b=ue(U),f=ue(K),D=ue(P);B([b[0]-f[0]-D[0],b[1]-f[1]-D[1]]);var $=ue(x);Te($);var re=ue(h);Ne(re);var Y=ue(z);ee([Y[0]-$[0],Y[1]-$[1]]),He()}),xt=n.slice(0,Et),Tt=n.slice(Ct+1),je=[].concat(Je(xt),Je(Tt)),kt=t.useState(),Ge=R(kt,2),Rt=Ge[0],Nt=Ge[1],ne=he.get(g),Xe=t.useRef();function Ye(){et.cancel(Xe.current)}t.useEffect(function(){var b={};return ne&&(d?(u?b.right=ne.right:b.left=ne.left,b.width=ne.width):(b.top=ne.top,b.height=ne.height)),Ye(),Xe.current=et(function(){Nt(b)}),Ye},[ne,d,u]),t.useEffect(function(){Fe()},[g,ae,ie,st(ne),st(he),d]),t.useEffect(function(){Ae()},[u]);var Ze=!!je.length,pe="".concat(o,"-nav-wrap"),Be,De,Qe,qe;return d?u?(De=p>0,Be=p!==ie):(Be=p<0,De=p!==ae):(Qe=F<0,qe=F!==ae),t.createElement(at,{onResize:Ae},t.createElement("div",{ref:Mt(a,U),role:"tablist",className:j("".concat(o,"-nav"),c),style:s,onKeyDown:function(){Me()}},t.createElement(lt,{ref:K,position:"left",extra:S,prefixCls:o}),t.createElement("div",{className:j(pe,(r={},W(r,"".concat(pe,"-ping-left"),Be),W(r,"".concat(pe,"-ping-right"),De),W(r,"".concat(pe,"-ping-top"),Qe),W(r,"".concat(pe,"-ping-bottom"),qe),r)),ref:C},t.createElement(at,{onResize:Ae},t.createElement("div",{ref:z,className:"".concat(o,"-nav-list"),style:{transform:"translate(".concat(p,"px, ").concat(F,"px)"),transition:ye?"none":void 0}},_e,t.createElement(pt,{ref:x,prefixCls:o,locale:E,editable:w,style:H(H({},_e.length===0?void 0:Se),{},{visibility:Ze?"hidden":null})}),t.createElement("div",{className:j("".concat(o,"-ink-bar"),W({},"".concat(o,"-ink-bar-animated"),y.inkBar)),style:Rt})))),t.createElement(Gt,ce({},e,{removeAriaLabel:E==null?void 0:E.removeAriaLabel,ref:h,prefixCls:o,tabs:je,className:!Ze&&yt,tabMoving:!!ye})),t.createElement(lt,{ref:P,position:"right",extra:S,prefixCls:o})))}const ut=t.forwardRef(Yt);var Zt=["renderTabBar"],Qt=["label","key"];function qt(e){var a=e.renderTabBar,r=Ce(e,Zt),i=t.useContext(xe),o=i.tabs;if(a){var n=H(H({},r),{},{panes:o.map(function(c){var s=c.label,l=c.key,y=Ce(c,Qt);return t.createElement(ft,ce({tab:s,key:l,tabKey:l},y))})});return a(n,ut)}return t.createElement(ut,r)}function Jt(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{inkBar:!0,tabPane:!1},a;return e===!1?a={inkBar:!1,tabPane:!1}:e===!0?a={inkBar:!0,tabPane:!1}:a=H({inkBar:!0},Ke(e)==="object"?e:{}),a.tabPaneMotion&&a.tabPane===void 0&&(a.tabPane=!0),!a.tabPaneMotion&&a.tabPane&&(a.tabPane=!1),a}var ea=["id","prefixCls","className","items","direction","activeKey","defaultActiveKey","editable","animated","tabPosition","tabBarGutter","tabBarStyle","tabBarExtraContent","locale","moreIcon","moreTransitionName","destroyInactiveTabPane","renderTabBar","onChange","onTabClick","onTabScroll","getPopupContainer","popupClassName"],dt=0;function ta(e,a){var r,i=e.id,o=e.prefixCls,n=o===void 0?"rc-tabs":o,c=e.className,s=e.items,l=e.direction,y=e.activeKey,g=e.defaultActiveKey,u=e.editable,S=e.animated,w=e.tabPosition,E=w===void 0?"top":w,I=e.tabBarGutter,L=e.tabBarStyle,N=e.tabBarExtraContent,M=e.locale,A=e.moreIcon,U=e.moreTransitionName,K=e.destroyInactiveTabPane,P=e.renderTabBar,C=e.onChange,z=e.onTabClick,h=e.onTabScroll,x=e.getPopupContainer,d=e.popupClassName,T=Ce(e,ea),v=t.useMemo(function(){return(s||[]).filter(function(k){return k&&Ke(k)==="object"&&"key"in k})},[s]),p=l==="rtl",G=Jt(S),de=t.useState(!1),J=R(de,2),F=J[0],Q=J[1];t.useEffect(function(){Q(Lt())},[]);var fe=tt(function(){var k;return(k=v[0])===null||k===void 0?void 0:k.key},{value:y,defaultValue:g}),oe=R(fe,2),m=oe[0],B=oe[1],_=t.useState(function(){return v.findIndex(function(k){return k.key===m})}),O=R(_,2),V=O[0],ee=O[1];t.useEffect(function(){var k=v.findIndex(function(me){return me.key===m});if(k===-1){var te;k=Math.max(0,Math.min(V,v.length-1)),B((te=v[k])===null||te===void 0?void 0:te.key)}ee(k)},[v.map(function(k){return k.key}).join("_"),m,V]);var q=tt(null,{value:i}),se=R(q,2),le=se[0],Te=se[1];t.useEffect(function(){i||(Te("rc-tabs-".concat(dt)),dt+=1)},[]);function ke(k,te){z==null||z(k,te);var me=k!==m;B(k),me&&(C==null||C(k))}var ve={id:le,activeKey:m,animated:G,tabPosition:E,rtl:p,mobile:F},Re,Ne=H(H({},ve),{},{editable:u,locale:M,moreIcon:A,moreTransitionName:U,tabBarGutter:I,onTabClick:ke,onTabScroll:h,extra:N,style:L,panes:null,getPopupContainer:x,popupClassName:d});return t.createElement(xe.Provider,{value:{tabs:v,prefixCls:n}},t.createElement("div",ce({ref:a,id:i,className:j(n,"".concat(n,"-").concat(E),(r={},W(r,"".concat(n,"-mobile"),F),W(r,"".concat(n,"-editable"),u),W(r,"".concat(n,"-rtl"),p),r),c)},T),Re,t.createElement(qt,ce({},Ne,{renderTabBar:P})),t.createElement($t,ce({destroyInactiveTabPane:K},ve,{animated:G}))))}var ua=t.forwardRef(ta);export{ua as F};