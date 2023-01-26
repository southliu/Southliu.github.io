import{b as R,h as ee,c as We,f as B,g as Ae}from"./@babel_runtime.494ad229.js";import{r as t}from"./react.fd625a73.js";import{c as ne}from"./classnames.2e4736b8.js";import{C as je,b as Ye,h as Ie,D as X,m as ze,K as F}from"./rc-util.10e30ffd.js";import{n as De,t as Ce,g as N,a as Ee,v as Ge,b as Z}from"./@rc-component_mini-decimal.51d88c32.js";var Je=200,Qe=600;function Xe(e){var l=e.prefixCls,o=e.upNode,h=e.downNode,v=e.upDisabled,m=e.downDisabled,g=e.onStep,c=t.useRef(),p=t.useRef();p.current=g;var b=function(E,O){E.preventDefault(),p.current(O);function _(){p.current(O),c.current=setTimeout(_,Je)}c.current=setTimeout(_,Qe)},s=function(){clearTimeout(c.current)};if(t.useEffect(function(){return s},[]),je())return null;var f="".concat(l,"-handler"),d=ne(f,"".concat(f,"-up"),R({},"".concat(f,"-up-disabled"),v)),C=ne(f,"".concat(f,"-down"),R({},"".concat(f,"-down-disabled"),m)),y={unselectable:"on",role:"button",onMouseUp:s,onMouseLeave:s};return t.createElement("div",{className:"".concat(f,"-wrap")},t.createElement("span",ee({},y,{onMouseDown:function(E){b(E,!0)},"aria-label":"Increase Value","aria-disabled":v,className:d}),o||t.createElement("span",{unselectable:"on",className:"".concat(l,"-handler-up-inner")})),t.createElement("span",ee({},y,{onMouseDown:function(E){b(E,!1)},"aria-label":"Decrease Value","aria-disabled":m,className:C}),h||t.createElement("span",{unselectable:"on",className:"".concat(l,"-handler-down-inner")})))}function Re(e){var l=typeof e=="number"?De(e):Ce(e).fullStr,o=l.includes(".");return o?Ce(l.replace(/(\d)\.(\d)/g,"$1$2.")).fullStr:e+"0"}function Ze(e,l){var o=t.useRef(null);function h(){try{var m=e.selectionStart,g=e.selectionEnd,c=e.value,p=c.substring(0,m),b=c.substring(g);o.current={start:m,end:g,value:c,beforeTxt:p,afterTxt:b}}catch{}}function v(){if(e&&o.current&&l)try{var m=e.value,g=o.current,c=g.beforeTxt,p=g.afterTxt,b=g.start,s=m.length;if(m.endsWith(p))s=m.length-o.current.afterTxt.length;else if(m.startsWith(c))s=c.length;else{var f=c[b-1],d=m.indexOf(f,b-1);d!==-1&&(s=d+1)}e.setSelectionRange(s,s)}catch(C){Ye(!1,"Something warning of cursor restore. Please fire issue about this: ".concat(C.message))}}return[h,v]}const en=function(){var e=t.useRef(0),l=function(){Ie.cancel(e.current)};return t.useEffect(function(){return l},[]),function(o){l(),e.current=Ie(function(){o()})}};var nn=["prefixCls","className","style","min","max","step","defaultValue","value","disabled","readOnly","upHandler","downHandler","keyboard","controls","stringMode","parser","formatter","precision","decimalSeparator","onChange","onInput","onPressEnter","onStep"],he=function(l,o){return l||o.isEmpty()?o.toString():o.toNumber()},ye=function(l){var o=N(l);return o.isInvalidate()?null:o},an=t.forwardRef(function(e,l){var o,h=e.prefixCls,v=h===void 0?"rc-input-number":h,m=e.className,g=e.style,c=e.min,p=e.max,b=e.step,s=b===void 0?1:b,f=e.defaultValue,d=e.value,C=e.disabled,y=e.readOnly,M=e.upHandler,E=e.downHandler,O=e.keyboard,_=e.controls,we=_===void 0?!0:_,ae=e.stringMode,k=e.parser,U=e.formatter,D=e.precision,w=e.decimalSeparator,L=e.onChange,W=e.onInput,A=e.onPressEnter,j=e.onStep,Ve=We(e,nn),re="".concat(v,"-input"),q=t.useRef(null),xe=t.useState(!1),te=B(xe,2),ue=te[0],oe=te[1],I=t.useRef(!1),K=t.useRef(!1),P=t.useRef(!1),Me=t.useState(function(){return N(d??f)}),ie=B(Me,2),i=ie[0],se=ie[1];function _e(a){d===void 0&&se(a)}var Y=t.useCallback(function(a,n){if(!n)return D>=0?D:Math.max(Ee(a),Ee(s))},[D,s]),z=t.useCallback(function(a){var n=String(a);if(k)return k(n);var u=n;return w&&(u=u.replace(w,".")),u.replace(/[^\w.-]+/g,"")},[k,w]),le=t.useRef(""),ce=t.useCallback(function(a,n){if(U)return U(a,{userTyping:n,input:String(le.current)});var u=typeof a=="number"?De(a):a;if(!n){var r=Y(u,n);if(Ge(u)&&(w||r>=0)){var S=w||".";u=Z(u,S,r)}}return u},[U,Y,w]),Ue=t.useState(function(){var a=f??d;return i.isInvalidate()&&["string","number"].includes(Ae(a))?Number.isNaN(a)?"":a:ce(i.toString(),!1)}),fe=B(Ue,2),$=fe[0],de=fe[1];le.current=$;function T(a,n){de(ce(a.isInvalidate()?a.toString(!1):a.toString(!n),n))}var V=t.useMemo(function(){return ye(p)},[p,D]),x=t.useMemo(function(){return ye(c)},[c,D]),ve=t.useMemo(function(){return!V||!i||i.isInvalidate()?!1:V.lessEquals(i)},[V,i]),me=t.useMemo(function(){return!x||!i||i.isInvalidate()?!1:i.lessEquals(x)},[x,i]),Ke=Ze(q.current,ue),pe=B(Ke,2),Pe=pe[0],$e=pe[1],ge=function(n){return V&&!n.lessEquals(V)?V:x&&!x.lessEquals(n)?x:null},G=function(n){return!ge(n)},J=function(n,u){var r=n,S=G(r)||r.isEmpty();if(!r.isEmpty()&&!u&&(r=ge(r)||r,S=!0),!y&&!C&&S){var H=r.toString(),Q=Y(H,u);return Q>=0&&(r=N(Z(H,".",Q)),G(r)||(r=N(Z(H,".",Q,!0)))),r.equals(i)||(_e(r),L==null||L(r.isEmpty()?null:he(ae,r)),d===void 0&&T(r,u)),r}return i},Te=en(),be=function a(n){if(Pe(),de(n),!K.current){var u=z(n),r=N(u);r.isNaN()||J(r,!0)}W==null||W(n),Te(function(){var S=n;k||(S=n.replace(/。/g,".")),S!==n&&a(S)})},He=function(){K.current=!0},Oe=function(){K.current=!1,be(q.current.value)},ke=function(n){be(n.target.value)},Se=function(n){var u;if(!(n&&ve||!n&&me)){I.current=!1;var r=N(P.current?Re(s):s);n||(r=r.negate());var S=(i||N(0)).add(r.toString()),H=J(S,!1);j==null||j(he(ae,H),{offset:P.current?Re(s):s,type:n?"up":"down"}),(u=q.current)===null||u===void 0||u.focus()}},Ne=function(n){var u=N(z($)),r=u;u.isNaN()?r=i:r=J(u,n),d!==void 0?T(i,!1):r.isNaN()||T(r,!1)},qe=function(){I.current=!0},Be=function(n){var u=n.which,r=n.shiftKey;I.current=!0,r?P.current=!0:P.current=!1,u===F.ENTER&&(K.current||(I.current=!1),Ne(!1),A==null||A(n)),O!==!1&&!K.current&&[F.UP,F.DOWN].includes(u)&&(Se(F.UP===u),n.preventDefault())},Fe=function(){I.current=!1,P.current=!1},Le=function(){Ne(!1),oe(!1),I.current=!1};return X(function(){i.isInvalidate()||T(i,!1)},[D]),X(function(){var a=N(d);se(a);var n=N(z($));(!a.equals(n)||!I.current||U)&&T(a,I.current)},[d]),X(function(){U&&$e()},[$]),t.createElement("div",{className:ne(v,m,(o={},R(o,"".concat(v,"-focused"),ue),R(o,"".concat(v,"-disabled"),C),R(o,"".concat(v,"-readonly"),y),R(o,"".concat(v,"-not-a-number"),i.isNaN()),R(o,"".concat(v,"-out-of-range"),!i.isInvalidate()&&!G(i)),o)),style:g,onFocus:function(){oe(!0)},onBlur:Le,onKeyDown:Be,onKeyUp:Fe,onCompositionStart:He,onCompositionEnd:Oe,onBeforeInput:qe},we&&t.createElement(Xe,{prefixCls:v,upNode:M,downNode:E,upDisabled:ve,downDisabled:me,onStep:Se}),t.createElement("div",{className:"".concat(re,"-wrap")},t.createElement("input",ee({autoComplete:"off",role:"spinbutton","aria-valuemin":c,"aria-valuemax":p,"aria-valuenow":i.isInvalidate()?null:i.toString(),step:s},Ve,{ref:ze(q,l),className:re,value:$,onChange:ke,disabled:C,readOnly:y}))))});an.displayName="InputNumber";export{an as I};
