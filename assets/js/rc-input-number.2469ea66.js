import{b as E,g as L,n as De,c as W,d as je}from"./@babel_runtime.c8088fcd.js";import{n as he,t as ye,g as I,a as Re,v as Ye,b as re}from"./@rc-component_mini-decimal.660c0332.js";import{c as ue}from"./classnames.82ff248b.js";import{B as ze,t as Ge}from"./rc-input.bea61526.js";import{r}from"./react.76efb1e3.js";import{d as Je,t as j,R as Qe,v as Ve,S as te}from"./rc-util.644b3d3a.js";function Xe(e,i){var u=r.useRef(null);function R(){try{var v=e.selectionStart,g=e.selectionEnd,c=e.value,N=c.substring(0,v),p=c.substring(g);u.current={start:v,end:g,value:c,beforeTxt:N,afterTxt:p}}catch{}}function d(){if(e&&u.current&&i)try{var v=e.value,g=u.current,c=g.beforeTxt,N=g.afterTxt,p=g.start,l=v.length;if(v.endsWith(N))l=v.length-u.current.afterTxt.length;else if(v.startsWith(c))l=c.length;else{var b=c[p-1],f=v.indexOf(b,p-1);f!==-1&&(l=f+1)}e.setSelectionRange(l,l)}catch(m){Je(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(m.message))}}return[R,d]}var Ze=200,ea=600;function aa(e){var i=e.prefixCls,u=e.upNode,R=e.downNode,d=e.upDisabled,v=e.downDisabled,g=e.onStep,c=r.useRef(),N=r.useRef([]),p=r.useRef();p.current=g;var l=function(){clearTimeout(c.current)},b=function(C,h){C.preventDefault(),l(),p.current(h);function $(){p.current(h),c.current=setTimeout($,Ze)}c.current=setTimeout($,ea)};r.useEffect(function(){return function(){l(),N.current.forEach(function(y){return j.cancel(y)})}},[]);var f=Qe();if(f)return null;var m="".concat(i,"-handler"),x=ue(m,"".concat(m,"-up"),E({},"".concat(m,"-up-disabled"),d)),B=ue(m,"".concat(m,"-down"),E({},"".concat(m,"-down-disabled"),v)),A=function(){return N.current.push(j(l))},D={unselectable:"on",role:"button",onMouseUp:A,onMouseLeave:A};return r.createElement("div",{className:"".concat(m,"-wrap")},r.createElement("span",L({},D,{onMouseDown:function(C){b(C,!0)},"aria-label":"Increase Value","aria-disabled":d,className:x}),u||r.createElement("span",{unselectable:"on",className:"".concat(i,"-handler-up-inner")})),r.createElement("span",L({},D,{onMouseDown:function(C){b(C,!1)},"aria-label":"Decrease Value","aria-disabled":v,className:B}),R||r.createElement("span",{unselectable:"on",className:"".concat(i,"-handler-down-inner")})))}function we(e){var i=typeof e=="number"?he(e):ye(e).fullStr,u=i.includes(".");return u?ye(i.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}const na=function(){var e=r.useRef(0),i=function(){j.cancel(e.current)};return r.useEffect(function(){return i},[]),function(u){i(),e.current=j(function(){u()})}};var ra=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","controls","classNames","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep"],ta=["disabled","style","prefixCls","value","prefix","suffix","addonBefore","addonAfter","classes","className","classNames"],Ce=function(i,u){return i||u.isEmpty()?u.toString():u.toNumber()},Ee=function(i){var u=I(i);return u.isInvalidate()?null:u},ua=r.forwardRef(function(e,i){var u,R=e.prefixCls,d=R===void 0?"rc-input-number":R,v=e.className,g=e.style,c=e.min,N=e.max,p=e.step,l=p===void 0?1:p,b=e.defaultValue,f=e.value,m=e.disabled,x=e.readOnly,B=e.upHandler,A=e.downHandler,D=e.keyboard,y=e.controls,C=y===void 0?!0:y,h=e.classNames,$=e.stringMode,O=e.parser,F=e.formatter,V=e.precision,M=e.decimalSeparator,Y=e.onChange,z=e.onInput,G=e.onPressEnter,J=e.onStep,Me=De(e,ra),se="".concat(d,"-input"),T=r.useRef(null),_e=r.useState(!1),oe=W(_e,2),le=oe[0],ie=oe[1],w=r.useRef(!1),K=r.useRef(!1),q=r.useRef(!1),Ue=r.useState(function(){return I(f??b)}),ce=W(Ue,2),o=ce[0],fe=ce[1];function Be(n){f===void 0&&fe(n)}var Q=r.useCallback(function(n,a){if(!a)return V>=0?V:Math.max(Re(n),Re(l))},[V,l]),X=r.useCallback(function(n){var a=String(n);if(O)return O(a);var s=a;return M&&(s=s.replace(M,".")),s.replace(/[^\w.-]+/g,"")},[O,M]),Z=r.useRef(""),de=r.useCallback(function(n,a){if(F)return F(n,{userTyping:a,input:String(Z.current)});var s=typeof n=="number"?he(n):n;if(!a){var t=Q(s,a);if(Ye(s)&&(M||t>=0)){var S=M||".";s=re(s,S,t)}}return s},[F,Q,M]),Ae=r.useState(function(){var n=b??f;return o.isInvalidate()&&["string","number"].includes(je(n))?Number.isNaN(n)?"":n:de(o.toString(),!1)}),ve=W(Ae,2),P=ve[0],me=ve[1];Z.current=P;function k(n,a){me(de(n.isInvalidate()?n.toString(!1):n.toString(!a),a))}var _=r.useMemo(function(){return Ee(N)},[N,V]),U=r.useMemo(function(){return Ee(c)},[c,V]),pe=r.useMemo(function(){return!_||!o||o.isInvalidate()?!1:_.lessEquals(o)},[_,o]),ge=r.useMemo(function(){return!U||!o||o.isInvalidate()?!1:o.lessEquals(U)},[U,o]),$e=Xe(T.current,le),Ne=W($e,2),Fe=Ne[0],Ke=Ne[1],be=function(a){return _&&!a.lessEquals(_)?_:U&&!U.lessEquals(a)?U:null},ee=function(a){return!be(a)},ae=function(a,s){var t=a,S=ee(t)||t.isEmpty();if(!t.isEmpty()&&!s&&(t=be(t)||t,S=!0),!x&&!m&&S){var H=t.toString(),ne=Q(H,s);return ne>=0&&(t=I(re(H,".",ne)),ee(t)||(t=I(re(H,".",ne,!0)))),t.equals(o)||(Be(t),Y==null||Y(t.isEmpty()?null:Ce($,t)),f===void 0&&k(t,s)),t}return o},Pe=na(),Se=function n(a){if(Fe(),Z.current=a,me(a),!K.current){var s=X(a),t=I(s);t.isNaN()||ae(t,!0)}z==null||z(a),Pe(function(){var S=a;O||(S=a.replace(/。/g,".")),S!==a&&n(S)})},ke=function(){K.current=!0},He=function(){K.current=!1,Se(T.current.value)},Oe=function(a){Se(a.target.value)},Ie=function(a){var s;if(!(a&&pe||!a&&ge)){w.current=!1;var t=I(q.current?we(l):l);a||(t=t.negate());var S=(o||I(0)).add(t.toString()),H=ae(S,!1);J==null||J(Ce($,H),{offset:q.current?we(l):l,type:a?"up":"down"}),(s=T.current)===null||s===void 0||s.focus()}},xe=function(a){var s=I(X(P)),t=s;s.isNaN()?t=o:t=ae(s,a),f!==void 0?k(o,!1):t.isNaN()||k(t,!1)},Te=function(){w.current=!0},qe=function(a){var s=a.key,t=a.shiftKey;w.current=!0,q.current=t,s==="Enter"&&(K.current||(w.current=!1),xe(!1),G==null||G(a)),D!==!1&&!K.current&&["Up","ArrowUp","Down","ArrowDown"].includes(s)&&(Ie(s==="Up"||s==="ArrowUp"),a.preventDefault())},We=function(){w.current=!1,q.current=!1},Le=function(){xe(!1),ie(!1),w.current=!1};return te(function(){o.isInvalidate()||k(o,!1)},[V]),te(function(){var n=I(f);fe(n);var a=I(X(P));(!n.equals(a)||!w.current||F)&&k(n,w.current)},[f]),te(function(){F&&Ke()},[P]),r.createElement("div",{className:ue(d,h==null?void 0:h.input,v,(u={},E(u,"".concat(d,"-focused"),le),E(u,"".concat(d,"-disabled"),m),E(u,"".concat(d,"-readonly"),x),E(u,"".concat(d,"-not-a-number"),o.isNaN()),E(u,"".concat(d,"-out-of-range"),!o.isInvalidate()&&!ee(o)),u)),style:g,onFocus:function(){ie(!0)},onBlur:Le,onKeyDown:qe,onKeyUp:We,onCompositionStart:ke,onCompositionEnd:He,onBeforeInput:Te},C&&r.createElement(aa,{prefixCls:d,upNode:B,downNode:A,upDisabled:pe,downDisabled:ge,onStep:Ie}),r.createElement("div",{className:"".concat(se,"-wrap")},r.createElement("input",L({autoComplete:"off",role:"spinbutton","aria-valuemin":c,"aria-valuemax":N,"aria-valuenow":o.isInvalidate()?null:o.toString(),step:l},Me,{ref:Ve(T,i),className:se,value:P,onChange:Oe,disabled:m,readOnly:x}))))}),sa=r.forwardRef(function(e,i){var u=e.disabled,R=e.style,d=e.prefixCls,v=e.value,g=e.prefix,c=e.suffix,N=e.addonBefore,p=e.addonAfter,l=e.classes,b=e.className,f=e.classNames,m=De(e,ta),x=r.useRef(null),B=function(D){x.current&&Ge(x.current,D)};return r.createElement(ze,{inputElement:r.createElement(ua,L({prefixCls:d,disabled:u,classNames:f,ref:Ve(x,i)},m)),className:b,triggerFocus:B,prefixCls:d,value:v,disabled:u,style:R,prefix:g,suffix:c,addonAfter:p,addonBefore:N,classes:l,classNames:f,components:{affixWrapper:"div",groupWrapper:"div",wrapper:"div",groupAddon:"div"}})});sa.displayName="InputNumber";export{sa as I};