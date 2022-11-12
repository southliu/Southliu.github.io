import{b as A,a as z,c as R}from"./@babel_runtime@7.19.0-16d3a89d.js";import{r as i}from"./react@18.2.0-9cdefec6.js";import{c as se}from"./classnames@2.3.2-d75d9a59.js";import{R as Ie}from"./rc-resize-observer@1.2.0_react-dom@18.2.0_react@18.2.0-f8c0c9ca.js";import{h as Ye,b as ge,g as qe}from"./rc-util@5.24.4_react-dom@18.2.0_react@18.2.0-c033d194.js";import{j as v,b as Je}from"./@ant-design_icons@4.7.0_react-dom@18.2.0_react@18.2.0-0d73ff6d.js";var Qe=["prefixCls","invalidate","item","renderItem","responsive","responsiveDisabled","registerSize","itemKey","className","style","children","display","order","component"],E=void 0;function Ze(e,d){var c=e.prefixCls,s=e.invalidate,o=e.item,a=e.renderItem,f=e.responsive,_=e.responsiveDisabled,l=e.registerSize,N=e.itemKey,C=e.className,g=e.style,H=e.children,Y=e.display,m=e.order,M=e.component,P=M===void 0?"div":M,U=A(e,Qe),S=f&&!Y;function O(b){l(N,b)}i.useEffect(function(){return function(){O(null)}},[]);var q=a&&o!==E?a(o):H,x;s||(x={opacity:S?0:1,height:S?0:E,overflowY:S?"hidden":E,order:f?m:E,pointerEvents:S?"none":E,position:S?"absolute":E});var k={};S&&(k["aria-hidden"]=!0);var y=v(P,{className:se(!s&&c,C),style:z(z({},x),g),...k,...U,ref:d,children:q});return f&&(y=v(Ie,{onResize:function(J){var F=J.offsetWidth;O(F)},disabled:_,children:y})),y}var K=i.forwardRef(Ze);K.displayName="Item";function et(){var e=Ye({}),d=R(e,2),c=d[1],s=i.useRef([]),o=0,a=0;function f(_){var l=o;o+=1,s.current.length<l+1&&(s.current[l]=_);var N=s.current[l];function C(g){s.current[l]=typeof g=="function"?g(s.current[l]):g,ge.cancel(a),a=ge(function(){c({},!0)})}return[N,C]}return f}var tt=["component"],rt=["className"],at=["className"],nt=function(d,c){var s=i.useContext(X);if(!s){var o=d.component,a=o===void 0?"div":o,f=A(d,tt);return v(a,{...f,ref:c})}var _=s.className,l=A(s,rt),N=d.className,C=A(d,at);return v(X.Provider,{value:null,children:v(K,{ref:c,className:se(_,N),...l,...C})})},we=i.forwardRef(nt);we.displayName="RawItem";var it=["prefixCls","data","renderItem","renderRawItem","itemKey","itemWidth","ssr","style","className","maxCount","renderRest","renderRawRest","suffix","component","itemComponent","onVisibleChange"],X=i.createContext(null),xe="responsive",be="invalidate";function st(e){return"+ ".concat(e.length," ...")}function lt(e,d){var c=e.prefixCls,s=c===void 0?"rc-overflow":c,o=e.data,a=o===void 0?[]:o,f=e.renderItem,_=e.renderRawItem,l=e.itemKey,N=e.itemWidth,C=N===void 0?10:N,g=e.ssr,H=e.style,Y=e.className,m=e.maxCount,M=e.renderRest,P=e.renderRawRest,U=e.suffix,S=e.component,O=S===void 0?"div":S,q=e.itemComponent,x=e.onVisibleChange,k=A(e,it),y=et(),b=g==="full",J=y(null),F=R(J,2),$=F[0],pe=F[1],I=$||0,Ee=y(new Map),le=R(Ee,2),oe=le[0],ze=le[1],Pe=y(0),de=R(Pe,2),Ue=de[0],We=de[1],De=y(0),fe=R(De,2),j=fe[0],Ae=fe[1],Ke=y(0),ue=R(Ke,2),T=ue[0],Me=ue[1],Oe=i.useState(null),ve=R(Oe,2),Q=ve[0],ce=ve[1],ke=i.useState(null),me=R(ke,2),V=me[0],Fe=me[1],p=i.useMemo(function(){return V===null&&b?Number.MAX_SAFE_INTEGER:V||0},[V,$]),$e=i.useState(!1),Se=R($e,2),je=Se[0],Te=Se[1],Z="".concat(s,"-item"),ye=Math.max(Ue,j),ee=m===xe,h=a.length&&ee,he=m===be,Ve=h||typeof m=="number"&&a.length>m,w=i.useMemo(function(){var t=a;return h?$===null&&b?t=a:t=a.slice(0,Math.min(a.length,I/C)):typeof m=="number"&&(t=a.slice(0,m)),t},[a,C,$,m,h]),te=i.useMemo(function(){return h?a.slice(p+1):a.slice(w.length)},[a,w,h,p]),L=i.useCallback(function(t,r){var n;return typeof l=="function"?l(t):(n=l&&(t==null?void 0:t[l]))!==null&&n!==void 0?n:r},[l]),Le=i.useCallback(f||function(t){return t},[f]);function G(t,r,n){V===t&&(r===void 0||r===Q)||(Fe(t),n||(Te(t<a.length-1),x==null||x(t)),r!==void 0&&ce(r))}function Ge(t,r){pe(r.clientWidth)}function Re(t,r){ze(function(n){var u=new Map(n);return r===null?u.delete(t):u.set(t,r),u})}function Xe(t,r){Ae(r),We(j)}function Be(t,r){Me(r)}function re(t){return oe.get(L(w[t],t))}qe(function(){if(I&&ye&&w){var t=T,r=w.length,n=r-1;if(!r){G(0,null);return}for(var u=0;u<r;u+=1){var D=re(u);if(b&&(D=D||0),D===void 0){G(u-1,void 0,!0);break}if(t+=D,n===0&&t<=I||u===n-1&&t+re(n)<=I){G(n,null);break}else if(t+ye>I){G(u-1,t-D-T+j);break}}U&&re(0)+T>I&&ce(null)}},[I,oe,j,T,L,w]);var _e=je&&!!te.length,Ne={};Q!==null&&h&&(Ne={position:"absolute",left:Q,top:0});var W={prefixCls:Z,responsive:h,component:q,invalidate:he},He=_?function(t,r){var n=L(t,r);return v(X.Provider,{value:z(z({},W),{},{order:r,item:t,itemKey:n,registerSize:Re,display:r<=p}),children:_(t,r)},n)}:function(t,r){var n=L(t,r);return i.createElement(K,{...W,order:r,key:n,item:t,renderItem:Le,itemKey:n,registerSize:Re,display:r<=p})},ae,Ce={order:_e?p:Number.MAX_SAFE_INTEGER,className:"".concat(Z,"-rest"),registerSize:Xe,display:_e};if(P)P&&(ae=v(X.Provider,{value:z(z({},W),Ce),children:P(te)}));else{var ne=M||st;ae=v(K,{...W,...Ce,children:typeof ne=="function"?ne(te):ne})}var ie=Je(O,{className:se(!he&&s,Y),style:H,ref:d,...k,children:[w.map(He),Ve?ae:null,U&&v(K,{...W,responsive:ee,responsiveDisabled:!h,order:p,className:"".concat(Z,"-suffix"),registerSize:Be,display:!0,style:Ne,children:U})]});return ee&&(ie=v(Ie,{onResize:Ge,disabled:!h,children:ie})),ie}var B=i.forwardRef(lt);B.displayName="Overflow";B.Item=we;B.RESPONSIVE=xe;B.INVALIDATE=be;export{B as F};
