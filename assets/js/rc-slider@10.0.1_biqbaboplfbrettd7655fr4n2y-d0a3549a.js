import{b as qe,d as re,a as W,c as G,e as ae,_ as st}from"./@babel_runtime@7.19.0-130d17ca.js";import{r as i}from"./react@18.2.0-44b760b7.js";import{c as ke}from"./classnames@2.3.2-d75d9a59.js";import{s as vt}from"./shallowequal@1.1.0-be60d069.js";import{K as te,f as dt}from"./rc-util@5.24.4_biqbaboplfbrettd7655fr4n2y-26f345e3.js";import{j as p,F as ft,b as mt}from"./@ant-design_icons@4.7.0_biqbaboplfbrettd7655fr4n2y-e9f5044e.js";var ve=i.exports.createContext({min:0,max:0,direction:"ltr",step:1,includedStart:0,includedEnd:0,tabIndex:0});function Le(e,c,r){return(e-c)/(r-c)}function Pe(e,c,r,f){var o=Le(c,r,f),l={};switch(e){case"rtl":l.right="".concat(o*100,"%"),l.transform="translateX(50%)";break;case"btt":l.bottom="".concat(o*100,"%"),l.transform="translateY(50%)";break;case"ttb":l.top="".concat(o*100,"%"),l.transform="translateY(-50%)";break;default:l.left="".concat(o*100,"%"),l.transform="translateX(-50%)";break}return l}function he(e,c){return Array.isArray(e)?e[c]:e}var gt=["prefixCls","value","valueIndex","onStartMove","style","render","dragging","onOffsetChange"],ht=i.exports.forwardRef(function(e,c){var r,f,o=e.prefixCls,l=e.value,s=e.valueIndex,b=e.onStartMove,y=e.style,M=e.render,S=e.dragging,h=e.onOffsetChange,g=qe(e,gt),n=i.exports.useContext(ve),a=n.min,v=n.max,u=n.direction,m=n.disabled,t=n.range,x=n.tabIndex,P=n.ariaLabelForHandle,R=n.ariaLabelledByForHandle,T=n.ariaValueTextFormatterForHandle,k="".concat(o,"-handle"),F=function(X){m||b(X,s)},_=function(X){if(!m){var D=null;switch(X.which||X.keyCode){case te.LEFT:D=u==="ltr"||u==="btt"?-1:1;break;case te.RIGHT:D=u==="ltr"||u==="btt"?1:-1;break;case te.UP:D=u!=="ttb"?1:-1;break;case te.DOWN:D=u!=="ttb"?-1:1;break;case te.HOME:D="min";break;case te.END:D="max";break;case te.PAGE_UP:D=2;break;case te.PAGE_DOWN:D=-2;break}D!==null&&(X.preventDefault(),h(D,s))}},E=Pe(u,l,a,v),A=p("div",{ref:c,className:ke(k,(r={},re(r,"".concat(k,"-").concat(s+1),t),re(r,"".concat(k,"-dragging"),S),r)),style:W(W({},E),y),onMouseDown:F,onTouchStart:F,onKeyDown:_,tabIndex:m?null:he(x,s),role:"slider","aria-valuemin":a,"aria-valuemax":v,"aria-valuenow":l,"aria-disabled":m,"aria-label":he(P,s),"aria-labelledby":he(R,s),"aria-valuetext":(f=he(T,s))===null||f===void 0?void 0:f(l),...g});return M&&(A=M(A,{index:s,prefixCls:o,value:l,dragging:S})),A}),bt=["prefixCls","style","onStartMove","onOffsetChange","values","handleRender","draggingIndex"],xt=i.exports.forwardRef(function(e,c){var r=e.prefixCls,f=e.style,o=e.onStartMove,l=e.onOffsetChange,s=e.values,b=e.handleRender,y=e.draggingIndex,M=qe(e,bt),S=i.exports.useRef({});return i.exports.useImperativeHandle(c,function(){return{focus:function(g){var n;(n=S.current[g])===null||n===void 0||n.focus()}}}),p(ft,{children:s.map(function(h,g){return p(ht,{ref:function(a){a?S.current[g]=a:delete S.current[g]},dragging:y===g,prefixCls:r,style:he(f,g),value:h,valueIndex:g,onStartMove:o,onOffsetChange:l,render:b,...M},g)})})});function We(e){var c="touches"in e?e.touches[0]:e;return{pageX:c.pageX,pageY:c.pageY}}function Ct(e,c,r,f,o,l,s,b,y){var M=i.exports.useState(null),S=G(M,2),h=S[0],g=S[1],n=i.exports.useState(-1),a=G(n,2),v=a[0],u=a[1],m=i.exports.useState(r),t=G(m,2),x=t[0],P=t[1],R=i.exports.useState(r),T=G(R,2),k=T[0],F=T[1],_=i.exports.useRef(null),E=i.exports.useRef(null);i.exports.useEffect(function(){v===-1&&P(r)},[r,v]),i.exports.useEffect(function(){return function(){document.removeEventListener("mousemove",_.current),document.removeEventListener("mouseup",E.current),document.removeEventListener("touchmove",_.current),document.removeEventListener("touchend",E.current)}},[]);var A=function(L,N){x.some(function(Y,z){return Y!==L[z]})&&(N!==void 0&&g(N),P(L),s(L))},B=function(L,N){if(L===-1){var Y=k[0],z=k[k.length-1],be=f-Y,xe=o-z,j=N*(o-f);j=Math.max(j,be),j=Math.min(j,xe);var q=l(Y+j);j=q-Y;var ne=k.map(function(de){return de+j});A(ne)}else{var J=(o-f)*N,Q=ae(x);Q[L]=k[L];var oe=y(Q,J,L,"dist");A(oe.values,oe.value)}},X=i.exports.useRef(B);X.current=B;var D=function(L,N){L.stopPropagation();var Y=r[N];u(N),g(Y),F(r);var z=We(L),be=z.pageX,xe=z.pageY,j=function(J){J.preventDefault();var Q=We(J),oe=Q.pageX,de=Q.pageY,Ce=oe-be,ye=de-xe,V=e.current.getBoundingClientRect(),ue=V.width,ie=V.height,H;switch(c){case"btt":H=-ye/ie;break;case"ttb":H=ye/ie;break;case"rtl":H=-Ce/ue;break;default:H=Ce/ue}X.current(N,H)},q=function ne(J){J.preventDefault(),document.removeEventListener("mouseup",ne),document.removeEventListener("mousemove",j),document.removeEventListener("touchend",ne),document.removeEventListener("touchmove",j),_.current=null,E.current=null,u(-1),b()};document.addEventListener("mouseup",q),document.addEventListener("mousemove",j),document.addEventListener("touchend",q),document.addEventListener("touchmove",j),_.current=j,E.current=q},K=i.exports.useMemo(function(){var U=ae(r).sort(function(N,Y){return N-Y}),L=ae(x).sort(function(N,Y){return N-Y});return U.every(function(N,Y){return N===L[Y]})?x:r},[r,x]);return[v,h,K,D]}function yt(e){var c=e.prefixCls,r=e.style,f=e.start,o=e.end,l=e.index,s=e.onStartMove,b=i.exports.useContext(ve),y=b.direction,M=b.min,S=b.max,h=b.disabled,g=b.range,n="".concat(c,"-track"),a=Le(f,M,S),v=Le(o,M,S),u=function(x){!h&&s&&s(x,-1)},m={};switch(y){case"rtl":m.right="".concat(a*100,"%"),m.width="".concat(v*100-a*100,"%");break;case"btt":m.bottom="".concat(a*100,"%"),m.height="".concat(v*100-a*100,"%");break;case"ttb":m.top="".concat(a*100,"%"),m.height="".concat(v*100-a*100,"%");break;default:m.left="".concat(a*100,"%"),m.width="".concat(v*100-a*100,"%")}return p("div",{className:ke(n,g&&"".concat(n,"-").concat(l+1)),style:W(W({},m),r),onMouseDown:u,onTouchStart:u})}function St(e){var c=e.prefixCls,r=e.style,f=e.values,o=e.startPoint,l=e.onStartMove,s=i.exports.useContext(ve),b=s.included,y=s.range,M=s.min,S=i.exports.useMemo(function(){if(!y){if(f.length===0)return[];var h=o!=null?o:M,g=f[0];return[{start:Math.min(h,g),end:Math.max(h,g)}]}for(var n=[],a=0;a<f.length-1;a+=1)n.push({start:f[a],end:f[a+1]});return n},[f,y,o,M]);return b?S.map(function(h,g){var n=h.start,a=h.end;return p(yt,{index:g,prefixCls:c,style:he(r,g),start:n,end:a,onStartMove:l},g)}):null}function Mt(e){var c=e.prefixCls,r=e.style,f=e.children,o=e.value,l=e.onClick,s=i.exports.useContext(ve),b=s.min,y=s.max,M=s.direction,S=s.includedStart,h=s.includedEnd,g=s.included,n="".concat(c,"-text"),a=Pe(M,o,b,y);return p("span",{className:ke(n,re({},"".concat(n,"-active"),g&&S<=o&&o<=h)),style:W(W({},a),r),onMouseDown:function(u){u.stopPropagation()},onClick:function(){l(o)},children:f})}function kt(e){var c=e.prefixCls,r=e.marks,f=e.onClick,o="".concat(c,"-mark");return r.length?p("div",{className:o,children:r.map(function(l){var s=l.value,b=l.style,y=l.label;return p(Mt,{prefixCls:o,style:b,value:s,onClick:f,children:y},s)})}):null}function Rt(e){var c=e.prefixCls,r=e.value,f=e.style,o=e.activeStyle,l=i.exports.useContext(ve),s=l.min,b=l.max,y=l.direction,M=l.included,S=l.includedStart,h=l.includedEnd,g="".concat(c,"-dot"),n=M&&S<=r&&r<=h,a=W(W({},Pe(y,r,s,b)),typeof f=="function"?f(r):f);return n&&(a=W(W({},a),typeof o=="function"?o(r):o)),p("span",{className:ke(g,re({},"".concat(g,"-active"),n)),style:a})}function Et(e){var c=e.prefixCls,r=e.marks,f=e.dots,o=e.style,l=e.activeStyle,s=i.exports.useContext(ve),b=s.min,y=s.max,M=s.step,S=i.exports.useMemo(function(){var h=new Set;if(r.forEach(function(n){h.add(n.value)}),f&&M!==null)for(var g=b;g<=y;)h.add(g),g+=M;return Array.from(h)},[b,y,M,f,r]);return p("div",{className:"".concat(c,"-step"),children:S.map(function(h){return p(Rt,{prefixCls:c,value:h,style:o,activeStyle:l},h)})})}function $t(e,c,r,f,o,l){var s=i.exports.useCallback(function(n){var a=isFinite(n)?n:e;return a=Math.min(c,n),a=Math.max(e,a),a},[e,c]),b=i.exports.useCallback(function(n){if(r!==null){var a=e+Math.round((s(n)-e)/r)*r,v=function(x){return(String(x).split(".")[1]||"").length},u=Math.max(v(r),v(c),v(e)),m=Number(a.toFixed(u));return e<=m&&m<=c?m:null}return null},[r,e,c,s]),y=i.exports.useCallback(function(n){var a=s(n),v=f.map(function(t){return t.value});r!==null&&v.push(b(n)),v.push(e,c);var u=v[0],m=c-e;return v.forEach(function(t){var x=Math.abs(a-t);x<=m&&(u=t,m=x)}),u},[e,c,f,r,s,b]),M=function n(a,v,u){var m=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit";if(typeof v=="number"){var t,x=a[u],P=x+v,R=[];f.forEach(function(E){R.push(E.value)}),R.push(e,c),R.push(b(x));var T=v>0?1:-1;m==="unit"?R.push(b(x+T*r)):R.push(b(P)),R=R.filter(function(E){return E!==null}).filter(function(E){return v<0?E<=x:E>=x}),m==="unit"&&(R=R.filter(function(E){return E!==x}));var k=m==="unit"?x:P;t=R[0];var F=Math.abs(t-k);if(R.forEach(function(E){var A=Math.abs(E-k);A<F&&(t=E,F=A)}),t===void 0)return v<0?e:c;if(m==="dist")return t;if(Math.abs(v)>1){var _=ae(a);return _[u]=t,n(_,v-T,u,m)}return t}else{if(v==="min")return e;if(v==="max")return c}},S=function(a,v,u){var m=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",t=a[u],x=M(a,v,u,m);return{value:x,changed:x!==t}},h=function(a){return l===null&&a===0||typeof l=="number"&&a<l},g=function(a,v,u){var m=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"unit",t=a.map(y),x=t[u],P=M(t,v,u,m);if(t[u]=P,o===!1){var R=l||0;u>0&&t[u-1]!==x&&(t[u]=Math.max(t[u],t[u-1]+R)),u<t.length-1&&t[u+1]!==x&&(t[u]=Math.min(t[u],t[u+1]-R))}else if(typeof l=="number"||l===null){for(var T=u+1;T<t.length;T+=1)for(var k=!0;h(t[T]-t[T-1])&&k;){var F=S(t,1,T);t[T]=F.value,k=F.changed}for(var _=u;_>0;_-=1)for(var E=!0;h(t[_]-t[_-1])&&E;){var A=S(t,-1,_-1);t[_-1]=A.value,E=A.changed}for(var B=t.length-1;B>0;B-=1)for(var X=!0;h(t[B]-t[B-1])&&X;){var D=S(t,-1,B-1);t[B-1]=D.value,X=D.changed}for(var K=0;K<t.length-1;K+=1)for(var U=!0;h(t[K+1]-t[K])&&U;){var L=S(t,1,K+1);t[K+1]=L.value,U=L.changed}}return{value:t[u],values:t}};return[y,g]}var Ht=i.exports.forwardRef(function(e,c){var r,f=e.prefixCls,o=f===void 0?"rc-slider":f,l=e.className,s=e.style,b=e.disabled,y=b===void 0?!1:b,M=e.autoFocus,S=e.onFocus,h=e.onBlur,g=e.min,n=g===void 0?0:g,a=e.max,v=a===void 0?100:a,u=e.step,m=u===void 0?1:u,t=e.value,x=e.defaultValue,P=e.range,R=e.count,T=e.onChange,k=e.onBeforeChange,F=e.onAfterChange,_=e.allowCross,E=_===void 0?!0:_,A=e.pushable,B=A===void 0?!1:A,X=e.draggableTrack,D=e.reverse,K=e.vertical,U=e.included,L=U===void 0?!0:U,N=e.startPoint,Y=e.trackStyle,z=e.handleStyle,be=e.railStyle,xe=e.dotStyle,j=e.activeDotStyle,q=e.marks,ne=e.dots,J=e.handleRender,Q=e.tabIndex,oe=Q===void 0?0:Q,de=e.ariaLabelForHandle,Ce=e.ariaLabelledByForHandle,ye=e.ariaValueTextFormatterForHandle,V=i.exports.useRef(),ue=i.exports.useRef(),ie=i.exports.useMemo(function(){return K?D?"ttb":"btt":D?"rtl":"ltr"},[D,K]),H=i.exports.useMemo(function(){return isFinite(n)?n:0},[n]),fe=i.exports.useMemo(function(){return isFinite(v)?v:100},[v]),le=i.exports.useMemo(function(){return m!==null&&m<=0?1:m},[m]),ze=i.exports.useMemo(function(){return B===!0?le:B>=0?B:!1},[B,le]),Re=i.exports.useMemo(function(){var w=Object.keys(q||{});return w.map(function(C){var d=q[C],O={value:Number(C)};return d&&st(d)==="object"&&!i.exports.isValidElement(d)&&("label"in d||"style"in d)?(O.style=d.style,O.label=d.label):O.label=d,O}).filter(function(C){var d=C.label;return d||typeof d=="number"}).sort(function(C,d){return C.value-d.value})},[q]),Je=$t(H,fe,le,Re,E,ze),He=G(Je,2),Ee=He[0],Oe=He[1],Qe=dt(x,{value:t}),Te=G(Qe,2),Z=Te[0],Ve=Te[1],I=i.exports.useMemo(function(){var w=Z==null?[]:Array.isArray(Z)?Z:[Z],C=G(w,1),d=C[0],O=d===void 0?H:d,$=Z===null?[]:[O];if(P){if($=ae(w),R||Z===void 0){var ge=R>=0?R+1:2;for($=$.slice(0,ge);$.length<ge;){var se;$.push((se=$[$.length-1])!==null&&se!==void 0?se:H)}}$.sort(function(ee,Se){return ee-Se})}return $.forEach(function(ee,Se){$[Se]=Ee(ee)}),$},[Z,P,H,R,Ee]),$e=i.exports.useRef(I);$e.current=I;var ce=function(C){return P?C:C[0]},we=function(C){var d=ae(C).sort(function(O,$){return O-$});T&&!vt(d,$e.current)&&T(ce(d)),Ve(d)},Ne=function(C){if(!y){var d=0,O=fe-H;I.forEach(function(ge,se){var ee=Math.abs(C-ge);ee<=O&&(O=ee,d=se)});var $=ae(I);$[d]=C,P&&!I.length&&R===void 0&&$.push(C),k==null||k(ce($)),we($),F==null||F(ce($))}},Ze=function(C){C.preventDefault();var d=ue.current.getBoundingClientRect(),O=d.width,$=d.height,ge=d.left,se=d.top,ee=d.bottom,Se=d.right,Ie=C.clientX,Ge=C.clientY,Me;switch(ie){case"btt":Me=(ee-Ge)/$;break;case"ttb":Me=(Ge-se)/$;break;case"rtl":Me=(Se-Ie)/O;break;default:Me=(Ie-ge)/O}var ct=H+Me*(fe-H);Ne(Ee(ct))},et=i.exports.useState(null),pe=G(et,2),_e=pe[0],Be=pe[1],tt=function(C,d){if(!y){var O=Oe(I,C,d);k==null||k(ce(I)),we(O.values),F==null||F(ce(O.values)),Be(O.value)}};i.exports.useEffect(function(){if(_e!==null){var w=I.indexOf(_e);w>=0&&V.current.focus(w)}Be(null)},[_e]);var rt=i.exports.useMemo(function(){return X&&le===null?!1:X},[X,le]),at=function(){F==null||F(ce($e.current))},nt=Ct(ue,ie,I,H,fe,Ee,we,at,Oe),Fe=G(nt,4),Ae=Fe[0],ot=Fe[1],De=Fe[2],ut=Fe[3],Xe=function(C,d){ut(C,d),k==null||k(ce($e.current))},Ye=Ae!==-1;i.exports.useEffect(function(){if(!Ye){var w=I.lastIndexOf(ot);V.current.focus(w)}},[Ye]);var me=i.exports.useMemo(function(){return ae(De).sort(function(w,C){return w-C})},[De]),it=i.exports.useMemo(function(){return P?[me[0],me[me.length-1]]:[H,me[0]]},[me,P,H]),je=G(it,2),Ke=je[0],Ue=je[1];i.exports.useImperativeHandle(c,function(){return{focus:function(){V.current.focus(0)},blur:function(){var C=document,d=C.activeElement;ue.current.contains(d)&&(d==null||d.blur())}}}),i.exports.useEffect(function(){M&&V.current.focus(0)},[]);var lt=i.exports.useMemo(function(){return{min:H,max:fe,direction:ie,disabled:y,step:le,included:L,includedStart:Ke,includedEnd:Ue,range:P,tabIndex:oe,ariaLabelForHandle:de,ariaLabelledByForHandle:Ce,ariaValueTextFormatterForHandle:ye}},[H,fe,ie,y,le,L,Ke,Ue,P,oe,de,Ce,ye]);return p(ve.Provider,{value:lt,children:mt("div",{ref:ue,className:ke(o,l,(r={},re(r,"".concat(o,"-disabled"),y),re(r,"".concat(o,"-vertical"),K),re(r,"".concat(o,"-horizontal"),!K),re(r,"".concat(o,"-with-marks"),Re.length),r)),style:s,onMouseDown:Ze,children:[p("div",{className:"".concat(o,"-rail"),style:be}),p(St,{prefixCls:o,style:Y,values:me,startPoint:N,onStartMove:rt?Xe:null}),p(Et,{prefixCls:o,marks:Re,dots:ne,style:xe,activeStyle:j}),p(xt,{ref:V,prefixCls:o,style:z,values:De,draggingIndex:Ae,onStartMove:Xe,onOffsetChange:tt,onFocus:S,onBlur:h,handleRender:J}),p(kt,{prefixCls:o,marks:Re,onClick:Ne})]})})});export{Ht as S};
