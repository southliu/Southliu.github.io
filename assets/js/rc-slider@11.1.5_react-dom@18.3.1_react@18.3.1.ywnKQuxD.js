import{k as e,j as n,d as t,g as a,h as r,i as l,f as u}from"./@babel_runtime@7.25.4.Bu2As08a.js";import{c as o}from"./classnames@2.5.1.D1aycfQv.js";import{K as c,d as i,B as s,i as d,b as f}from"./rc-util@5.43.0_react-dom@18.3.1_react@18.3.1.CDZ9iH-v.js";import{r as v}from"./react@18.3.1.B8wSySjr.js";import{r as m}from"./react-dom@18.3.1_react@18.3.1.DWAyjvPq.js";function g(e,n,t){return(e-n)/(t-n)}function h(e,n,t,a){var r=g(n,t,a),l={};switch(e){case"rtl":l.right="".concat(100*r,"%"),l.transform="translateX(50%)";break;case"btt":l.bottom="".concat(100*r,"%"),l.transform="translateY(50%)";break;case"ttb":l.top="".concat(100*r,"%"),l.transform="translateY(-50%)";break;default:l.left="".concat(100*r,"%"),l.transform="translateX(-50%)"}return l}function p(e,n){return Array.isArray(e)?e[n]:e}var b=v.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0,keyboard:!0,styles:{},classNames:{}}),x=v.createContext({}),y=["prefixCls","value","valueIndex","onStartMove","onDelete","style","render","dragging","draggingDelete","onOffsetChange","onChangeComplete","onFocus","onMouseEnter"],C=v.forwardRef((function(r,l){var u,i=r.prefixCls,s=r.value,d=r.valueIndex,f=r.onStartMove,m=r.onDelete,g=r.style,x=r.render,C=r.dragging,E=r.draggingDelete,k=r.onOffsetChange,M=r.onChangeComplete,S=r.onFocus,D=r.onMouseEnter,F=e(r,y),w=v.useContext(b),N=w.min,H=w.max,L=w.direction,I=w.disabled,R=w.keyboard,P=w.range,O=w.tabIndex,A=w.ariaLabelForHandle,T=w.ariaLabelledByForHandle,j=w.ariaValueTextFormatterForHandle,B=w.styles,V=w.classNames,_="".concat(i,"-handle"),X=function(e){I||f(e,d)},Y=h(L,s,N,H),G={};null!==d&&(G={tabIndex:I?null:p(O,d),role:"slider","aria-valuemin":N,"aria-valuemax":H,"aria-valuenow":s,"aria-disabled":I,"aria-label":p(A,d),"aria-labelledby":p(T,d),"aria-valuetext":null===(u=p(j,d))||void 0===u?void 0:u(s),"aria-orientation":"ltr"===L||"rtl"===L?"horizontal":"vertical",onMouseDown:X,onTouchStart:X,onFocus:function(e){null==S||S(e,d)},onMouseEnter:function(e){D(e,d)},onKeyDown:function(e){if(!I&&R){var n=null;switch(e.which||e.keyCode){case c.LEFT:n="ltr"===L||"btt"===L?-1:1;break;case c.RIGHT:n="ltr"===L||"btt"===L?1:-1;break;case c.UP:n="ttb"!==L?1:-1;break;case c.DOWN:n="ttb"!==L?-1:1;break;case c.HOME:n="min";break;case c.END:n="max";break;case c.PAGE_UP:n=2;break;case c.PAGE_DOWN:n=-2;break;case c.BACKSPACE:case c.DELETE:m(d)}null!==n&&(e.preventDefault(),k(n,d))}},onKeyUp:function(e){switch(e.which||e.keyCode){case c.LEFT:case c.RIGHT:case c.UP:case c.DOWN:case c.HOME:case c.END:case c.PAGE_UP:case c.PAGE_DOWN:null==M||M()}}});var U=v.createElement("div",n({ref:l,className:o(_,t(t(t({},"".concat(_,"-").concat(d+1),null!==d&&P),"".concat(_,"-dragging"),C),"".concat(_,"-dragging-delete"),E),V.handle),style:a(a(a({},Y),g),B.handle)},G,F));return x&&(U=x(U,{index:d,prefixCls:i,value:s,dragging:C,draggingDelete:E})),U})),E=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","activeHandleRender","draggingIndex","draggingDelete","onFocus"],k=v.forwardRef((function(t,l){var u=t.prefixCls,o=t.style,c=t.onStartMove,i=t.onOffsetChange,s=t.values,d=t.handleRender,f=t.activeHandleRender,g=t.draggingIndex,h=t.draggingDelete,b=t.onFocus,x=e(t,E),y=v.useRef({}),k=v.useState(!1),M=r(k,2),S=M[0],D=M[1],F=v.useState(-1),w=r(F,2),N=w[0],H=w[1],L=function(e){H(e),D(!0)};v.useImperativeHandle(l,(function(){return{focus:function(e){var n;null===(n=y.current[e])||void 0===n||n.focus()},hideHelp:function(){m.flushSync((function(){D(!1)}))}}}));var I=a({prefixCls:u,onStartMove:c,onOffsetChange:i,render:d,onFocus:function(e,n){L(n),null==b||b(e)},onMouseEnter:function(e,n){L(n)}},x);return v.createElement(v.Fragment,null,s.map((function(e,t){var a=g===t;return v.createElement(C,n({ref:function(e){e?y.current[t]=e:delete y.current[t]},dragging:a,draggingDelete:a&&h,style:p(o,t),key:t,value:e,valueIndex:t},I))})),f&&S&&v.createElement(C,n({key:"a11y"},I,{value:s[N],valueIndex:null,dragging:-1!==g,draggingDelete:h,render:f,style:{pointerEvents:"none"},tabIndex:null,"aria-hidden":!0})))})),M=function(e){var n=e.prefixCls,r=e.style,l=e.children,u=e.value,c=e.onClick,i=v.useContext(b),s=i.min,d=i.max,f=i.direction,m=i.includedStart,g=i.includedEnd,p=i.included,x="".concat(n,"-text"),y=h(f,u,s,d);return v.createElement("span",{className:o(x,t({},"".concat(x,"-active"),p&&m<=u&&u<=g)),style:a(a({},y),r),onMouseDown:function(e){e.stopPropagation()},onClick:function(){c(u)}},l)},S=function(e){var n=e.prefixCls,t=e.marks,a=e.onClick,r="".concat(n,"-mark");return t.length?v.createElement("div",{className:r},t.map((function(e){var n=e.value,t=e.style,l=e.label;return v.createElement(M,{key:n,prefixCls:r,style:t,value:n,onClick:a},l)}))):null},D=function(e){var n=e.prefixCls,r=e.value,l=e.style,u=e.activeStyle,c=v.useContext(b),i=c.min,s=c.max,d=c.direction,f=c.included,m=c.includedStart,g=c.includedEnd,p="".concat(n,"-dot"),x=f&&m<=r&&r<=g,y=a(a({},h(d,r,i,s)),"function"==typeof l?l(r):l);return x&&(y=a(a({},y),"function"==typeof u?u(r):u)),v.createElement("span",{className:o(p,t({},"".concat(p,"-active"),x)),style:y})},F=function(e){var n=e.prefixCls,t=e.marks,a=e.dots,r=e.style,l=e.activeStyle,u=v.useContext(b),o=u.min,c=u.max,i=u.step,s=v.useMemo((function(){var e=new Set;if(t.forEach((function(n){e.add(n.value)})),a&&null!==i)for(var n=o;n<=c;)e.add(n),n+=i;return Array.from(e)}),[o,c,i,a,t]);return v.createElement("div",{className:"".concat(n,"-step")},s.map((function(e){return v.createElement(D,{prefixCls:n,key:e,value:e,style:r,activeStyle:l})})))},w=function(e){var n=e.prefixCls,r=e.style,l=e.start,u=e.end,c=e.index,i=e.onStartMove,s=e.replaceCls,d=v.useContext(b),f=d.direction,m=d.min,h=d.max,p=d.disabled,x=d.range,y=d.classNames,C="".concat(n,"-track"),E=g(l,m,h),k=g(u,m,h),M=function(e){!p&&i&&i(e,-1)},S={};switch(f){case"rtl":S.right="".concat(100*E,"%"),S.width="".concat(100*k-100*E,"%");break;case"btt":S.bottom="".concat(100*E,"%"),S.height="".concat(100*k-100*E,"%");break;case"ttb":S.top="".concat(100*E,"%"),S.height="".concat(100*k-100*E,"%");break;default:S.left="".concat(100*E,"%"),S.width="".concat(100*k-100*E,"%")}var D=s||o(C,t(t({},"".concat(C,"-").concat(c+1),null!==c&&x),"".concat(n,"-track-draggable"),i),y.track);return v.createElement("div",{className:D,style:a(a({},S),r),onMouseDown:M,onTouchStart:M})},N=function(e){var n=e.prefixCls,t=e.style,r=e.values,l=e.startPoint,u=e.onStartMove,c=v.useContext(b),i=c.included,s=c.range,d=c.min,f=c.styles,m=c.classNames,g=v.useMemo((function(){if(!s){if(0===r.length)return[];var e=null!=l?l:d,n=r[0];return[{start:Math.min(e,n),end:Math.max(e,n)}]}for(var t=[],a=0;a<r.length-1;a+=1)t.push({start:r[a],end:r[a+1]});return t}),[r,s,l,d]);if(!i)return null;var h=m.tracks||f.tracks?v.createElement(w,{index:null,prefixCls:n,start:g[0].start,end:g[g.length-1].end,replaceCls:o(m.tracks,"".concat(n,"-tracks")),style:f.tracks}):null;return v.createElement(v.Fragment,null,h,g.map((function(e,r){var l=e.start,o=e.end;return v.createElement(w,{index:r,prefixCls:n,style:a(a({},p(t,r)),f.track),start:l,end:o,key:r,onStartMove:u})})))};function H(e){var n="touches"in e?e.touches[0]:e;return{pageX:n.pageX,pageY:n.pageY}}var L=v.forwardRef((function(e,n){var c=e.prefixCls,m=void 0===c?"rc-slider":c,g=e.className,h=e.style,p=e.classNames,y=e.styles,C=e.disabled,E=void 0!==C&&C,M=e.keyboard,D=void 0===M||M,w=e.autoFocus,L=e.onFocus,I=e.onBlur,R=e.min,P=void 0===R?0:R,O=e.max,A=void 0===O?100:O,T=e.step,j=void 0===T?1:T,B=e.value,V=e.defaultValue,_=e.range,X=e.count,Y=e.onChange,G=e.onBeforeChange,U=e.onAfterChange,K=e.onChangeComplete,W=e.allowCross,z=void 0===W||W,q=e.pushable,J=void 0!==q&&q,Q=e.reverse,Z=e.vertical,$=e.included,ee=void 0===$||$,ne=e.startPoint,te=e.trackStyle,ae=e.handleStyle,re=e.railStyle,le=e.dotStyle,ue=e.activeDotStyle,oe=e.marks,ce=e.dots,ie=e.handleRender,se=e.activeHandleRender,de=e.track,fe=e.tabIndex,ve=void 0===fe?0:fe,me=e.ariaLabelForHandle,ge=e.ariaLabelledByForHandle,he=e.ariaValueTextFormatterForHandle,pe=v.useRef(null),be=v.useRef(null),xe=v.useMemo((function(){return Z?Q?"ttb":"btt":Q?"rtl":"ltr"}),[Q,Z]),ye=function(e){return v.useMemo((function(){if(!0===e||!e)return[!!e,!1,!1,0];var n=e.editable,t=e.draggableTrack;return[!0,n,!n&&t,e.minCount||0,e.maxCount]}),[e])}(_),Ce=r(ye,5),Ee=Ce[0],ke=Ce[1],Me=Ce[2],Se=Ce[3],De=Ce[4],Fe=v.useMemo((function(){return isFinite(P)?P:0}),[P]),we=v.useMemo((function(){return isFinite(A)?A:100}),[A]),Ne=v.useMemo((function(){return null!==j&&j<=0?1:j}),[j]),He=v.useMemo((function(){return"boolean"==typeof J?!!J&&Ne:J>=0&&J}),[J,Ne]),Le=v.useMemo((function(){return Object.keys(oe||{}).map((function(e){var n=oe[e],t={value:Number(e)};return n&&"object"===u(n)&&!v.isValidElement(n)&&("label"in n||"style"in n)?(t.style=n.style,t.label=n.label):t.label=n,t})).filter((function(e){var n=e.label;return n||"number"==typeof n})).sort((function(e,n){return e.value-n.value}))}),[oe]),Ie=function(e,n,t,a,r,u){var o=v.useCallback((function(t){return Math.max(e,Math.min(n,t))}),[e,n]),c=v.useCallback((function(a){if(null!==t){var r=e+Math.round((o(a)-e)/t)*t,l=function(e){return(String(e).split(".")[1]||"").length},u=Math.max(l(t),l(n),l(e)),c=Number(r.toFixed(u));return e<=c&&c<=n?c:null}return null}),[t,e,n,o]),i=v.useCallback((function(r){var l=o(r),u=a.map((function(e){return e.value}));null!==t&&u.push(c(r)),u.push(e,n);var i=u[0],s=n-e;return u.forEach((function(e){var n=Math.abs(l-e);n<=s&&(i=e,s=n)})),i}),[e,n,a,t,o,c]),s=function r(u,o,i){var s=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit";if("number"==typeof o){var d,f=u[i],v=f+o,m=[];a.forEach((function(e){m.push(e.value)})),m.push(e,n),m.push(c(f));var g=o>0?1:-1;"unit"===s?m.push(c(f+g*t)):m.push(c(v)),m=m.filter((function(e){return null!==e})).filter((function(e){return o<0?e<=f:e>=f})),"unit"===s&&(m=m.filter((function(e){return e!==f})));var h="unit"===s?f:v;d=m[0];var p=Math.abs(d-h);if(m.forEach((function(e){var n=Math.abs(e-h);n<p&&(d=e,p=n)})),void 0===d)return o<0?e:n;if("dist"===s)return d;if(Math.abs(o)>1){var b=l(u);return b[i]=d,r(b,o-g,i,s)}return d}return"min"===o?e:"max"===o?n:void 0},d=function(e,n,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",r=e[t],l=s(e,n,t,a);return{value:l,changed:l!==r}},f=function(e){return null===u&&0===e||"number"==typeof u&&e<u};return[i,function(e,n,t){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"unit",l=e.map(i),o=l[t],c=s(l,n,t,a);if(l[t]=c,!1===r){var v=u||0;t>0&&l[t-1]!==o&&(l[t]=Math.max(l[t],l[t-1]+v)),t<l.length-1&&l[t+1]!==o&&(l[t]=Math.min(l[t],l[t+1]-v))}else if("number"==typeof u||null===u){for(var m=t+1;m<l.length;m+=1)for(var g=!0;f(l[m]-l[m-1])&&g;){var h=d(l,1,m);l[m]=h.value,g=h.changed}for(var p=t;p>0;p-=1)for(var b=!0;f(l[p]-l[p-1])&&b;){var x=d(l,-1,p-1);l[p-1]=x.value,b=x.changed}for(var y=l.length-1;y>0;y-=1)for(var C=!0;f(l[y]-l[y-1])&&C;){var E=d(l,-1,y-1);l[y-1]=E.value,C=E.changed}for(var k=0;k<l.length-1;k+=1)for(var M=!0;f(l[k+1]-l[k])&&M;){var S=d(l,1,k+1);l[k+1]=S.value,M=S.changed}}return{value:l[t],values:l}}]}(Fe,we,Ne,Le,z,He),Re=r(Ie,2),Pe=Re[0],Oe=Re[1],Ae=s(V,{value:B}),Te=r(Ae,2),je=Te[0],Be=Te[1],Ve=v.useMemo((function(){var e=null==je?[]:Array.isArray(je)?je:[je],n=r(e,1)[0],t=null===je?[]:[void 0===n?Fe:n];if(Ee){if(t=l(e),X||void 0===je){var a=X>=0?X+1:2;for(t=t.slice(0,a);t.length<a;){var u;t.push(null!==(u=t[t.length-1])&&void 0!==u?u:Fe)}}t.sort((function(e,n){return e-n}))}return t.forEach((function(e,n){t[n]=Pe(e)})),t}),[je,Ee,Fe,X,Pe]),_e=function(e){return Ee?e:e[0]},Xe=i((function(e){var n=l(e).sort((function(e,n){return e-n}));Y&&!d(n,Ve,!0)&&Y(_e(n)),Be(n)})),Ye=i((function(e){e&&pe.current.hideHelp();var n=_e(Ve);null==U||U(n),f(!U,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),null==K||K(n)})),Ge=function(e,n,t,a,u,o,c,s,d,f,m){var g=v.useState(null),h=r(g,2),p=h[0],b=h[1],y=v.useState(-1),C=r(y,2),E=C[0],k=C[1],M=v.useState(!1),S=r(M,2),D=S[0],F=S[1],w=v.useState(t),N=r(w,2),L=N[0],I=N[1],R=v.useState(t),P=r(R,2),O=P[0],A=P[1],T=v.useRef(null),j=v.useRef(null),B=v.useContext(x),V=B.onDragStart,_=B.onDragChange;v.useLayoutEffect((function(){-1===E&&I(t)}),[t,E]),v.useEffect((function(){return function(){document.removeEventListener("mousemove",T.current),document.removeEventListener("mouseup",j.current),document.removeEventListener("touchmove",T.current),document.removeEventListener("touchend",j.current)}}),[]);var X=function(e,n,t){void 0!==n&&b(n),I(e);var a=e;t&&(a=e.filter((function(e,n){return n!==E}))),c(a),_&&_({rawValues:e,deleteIndex:t?E:-1,draggingIndex:E,draggingValue:n})},Y=i((function(e,n,t){if(-1===e){var r=O[0],c=O[O.length-1],i=a-r,s=u-c,f=n*(u-a);f=Math.max(f,i),f=Math.min(f,s);var v=o(r+f);f=v-r;var m=O.map((function(e){return e+f}));X(m)}else{var g=(u-a)*n,h=l(L);h[e]=O[e];var p=d(h,g,e,"dist");X(p.values,p.value,t)}})),G=v.useMemo((function(){var e=l(t).sort((function(e,n){return e-n})),n=l(L).sort((function(e,n){return e-n})),a={};n.forEach((function(e){a[e]=(a[e]||0)+1})),e.forEach((function(e){a[e]=(a[e]||0)-1}));var r=f?1:0;return Object.values(a).reduce((function(e,n){return e+Math.abs(n)}),0)<=r?L:t}),[t,L,f]);return[E,p,D,G,function(a,r,l){a.stopPropagation();var u=l||t,o=u[r];k(r),b(o),A(u),I(u),F(!1);var c=H(a),i=c.pageX,d=c.pageY,v=!1;V&&V({rawValues:u,draggingIndex:r,draggingValue:o});var g=function(t){t.preventDefault();var a,l,u=H(t),o=u.pageX,c=u.pageY,s=o-i,g=c-d,h=e.current.getBoundingClientRect(),p=h.width,b=h.height;switch(n){case"btt":a=-g/b,l=s;break;case"ttb":a=g/b,l=s;break;case"rtl":a=-s/p,l=g;break;default:a=s/p,l=g}v=!!f&&Math.abs(l)>130&&m<L.length,F(v),Y(r,a,v)},h=function e(n){n.preventDefault(),document.removeEventListener("mouseup",e),document.removeEventListener("mousemove",g),document.removeEventListener("touchend",e),document.removeEventListener("touchmove",g),T.current=null,j.current=null,s(v),k(-1),F(!1)};document.addEventListener("mouseup",h),document.addEventListener("mousemove",g),document.addEventListener("touchend",h),document.addEventListener("touchmove",g),T.current=g,j.current=h}]}(be,xe,Ve,Fe,we,Pe,Xe,Ye,Oe,ke,Se),Ue=r(Ge,5),Ke=Ue[0],We=Ue[1],ze=Ue[2],qe=Ue[3],Je=Ue[4],Qe=function(e,n){if(!E){var t=l(Ve),a=0,r=0,u=we-Fe;Ve.forEach((function(n,t){var l=Math.abs(e-n);l<=u&&(u=l,a=t),n<e&&(r=t)}));var o=a;ke&&0!==u&&(!De||Ve.length<De)?(t.splice(r+1,0,e),o=r+1):t[a]=e,Ee&&!Ve.length&&void 0===X&&t.push(e);var c,i,s=_e(t);if(null==G||G(s),Xe(t),n)null===(c=document.activeElement)||void 0===c||null===(i=c.blur)||void 0===i||i.call(c),pe.current.focus(o),Je(n,o,t);else null==U||U(s),f(!U,"[rc-slider] `onAfterChange` is deprecated. Please use `onChangeComplete` instead."),null==K||K(s)}},Ze=v.useState(null),$e=r(Ze,2),en=$e[0],nn=$e[1];v.useEffect((function(){if(null!==en){var e=Ve.indexOf(en);e>=0&&pe.current.focus(e)}nn(null)}),[en]);var tn=v.useMemo((function(){return(!Me||null!==Ne)&&Me}),[Me,Ne]),an=i((function(e,n){Je(e,n),null==G||G(_e(Ve))})),rn=-1!==Ke;v.useEffect((function(){if(!rn){var e=Ve.lastIndexOf(We);pe.current.focus(e)}}),[rn]);var ln=v.useMemo((function(){return l(qe).sort((function(e,n){return e-n}))}),[qe]),un=v.useMemo((function(){return Ee?[ln[0],ln[ln.length-1]]:[Fe,ln[0]]}),[ln,Ee,Fe]),on=r(un,2),cn=on[0],sn=on[1];v.useImperativeHandle(n,(function(){return{focus:function(){pe.current.focus(0)},blur:function(){var e,n=document.activeElement;null!==(e=be.current)&&void 0!==e&&e.contains(n)&&(null==n||n.blur())}}})),v.useEffect((function(){w&&pe.current.focus(0)}),[]);var dn=v.useMemo((function(){return{min:Fe,max:we,direction:xe,disabled:E,keyboard:D,step:Ne,included:ee,includedStart:cn,includedEnd:sn,range:Ee,tabIndex:ve,ariaLabelForHandle:me,ariaLabelledByForHandle:ge,ariaValueTextFormatterForHandle:he,styles:y||{},classNames:p||{}}}),[Fe,we,xe,E,D,Ne,ee,cn,sn,Ee,ve,me,ge,he,y,p]);return v.createElement(b.Provider,{value:dn},v.createElement("div",{ref:be,className:o(m,g,t(t(t(t({},"".concat(m,"-disabled"),E),"".concat(m,"-vertical"),Z),"".concat(m,"-horizontal"),!Z),"".concat(m,"-with-marks"),Le.length)),style:h,onMouseDown:function(e){e.preventDefault();var n,t=be.current.getBoundingClientRect(),a=t.width,r=t.height,l=t.left,u=t.top,o=t.bottom,c=t.right,i=e.clientX,s=e.clientY;switch(xe){case"btt":n=(o-s)/r;break;case"ttb":n=(s-u)/r;break;case"rtl":n=(c-i)/a;break;default:n=(i-l)/a}Qe(Pe(Fe+n*(we-Fe)),e)}},v.createElement("div",{className:o("".concat(m,"-rail"),null==p?void 0:p.rail),style:a(a({},re),null==y?void 0:y.rail)}),!1!==de&&v.createElement(N,{prefixCls:m,style:te,values:Ve,startPoint:ne,onStartMove:tn?an:void 0}),v.createElement(F,{prefixCls:m,marks:Le,dots:ce,style:le,activeStyle:ue}),v.createElement(k,{ref:pe,prefixCls:m,style:ae,values:qe,draggingIndex:Ke,draggingDelete:ze,onStartMove:an,onOffsetChange:function(e,n){if(!E){var t=Oe(Ve,e,n);null==G||G(_e(Ve)),Xe(t.values),nn(t.value)}},onFocus:L,onBlur:I,handleRender:ie,activeHandleRender:se,onChangeComplete:Ye,onDelete:ke?function(e){if(!(E||!ke||Ve.length<=Se)){var n=l(Ve);n.splice(e,1),null==G||G(_e(n)),Xe(n);var t=Math.max(0,e-1);pe.current.hideHelp(),pe.current.focus(t)}}:void 0}),v.createElement(S,{prefixCls:m,marks:Le,onClick:Qe})))}));export{L as S};
