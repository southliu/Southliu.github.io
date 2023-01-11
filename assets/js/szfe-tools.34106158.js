import{B as p,C as ae,D as ie,E as fe,F as ee,q as g}from"./@babel_runtime.3e487d10.js";var _={},h={},T;function re(){if(T)return h;T=1,Object.defineProperty(h,"__esModule",{value:!0}),h.default=void 0;var e=function(t){return t instanceof Array},r=e;return h.default=r,h}var S;function pe(){if(S)return _;S=1;var e=p();Object.defineProperty(_,"__esModule",{value:!0}),_.default=void 0;var r=e(ae()),o=e(re()),t=function s(d){return d.reduce(function(f,n){return[].concat((0,r.default)(f),(0,r.default)((0,o.default)(n)?s(n):[n]))},[])},l=t;return _.default=l,_}var A={},F={},U;function te(){if(U)return F;U=1,Object.defineProperty(F,"__esModule",{value:!0}),F.default=e;function e(r){return typeof r=="string"}return F}var b={},C;function x(){if(C)return b;C=1,Object.defineProperty(b,"__esModule",{value:!0}),b.default=void 0;var e=function(t){return typeof t>"u"},r=e;return b.default=r,b}var q={},y={},z;function oe(){if(z)return y;z=1,Object.defineProperty(y,"__esModule",{value:!0}),y.default=void 0;var e=function(t){return t!==t},r=e;return y.default=r,y}var B;function de(){if(B)return q;B=1;var e=p();Object.defineProperty(q,"__esModule",{value:!0}),q.default=void 0;var r=e(oe()),o=function(s){return typeof s=="number"&&!(0,r.default)(s)},t=o;return q.default=t,q}var G;function se(){if(G)return A;G=1;var e=p();Object.defineProperty(A,"__esModule",{value:!0}),A.default=l;var r=e(te()),o=e(x()),t=e(de());function l(s){var d=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],f=arguments.length>2?arguments[2]:void 0;try{(0,t.default)(d)&&(d=String(d));var n=((0,r.default)(d)?d.split("."):d).reduce(function(u,a){return u[a]},s);return(0,o.default)(n)?f:n}catch{return f}}return A}var O={},j={},V;function ue(){if(V)return j;V=1,Object.defineProperty(j,"__esModule",{value:!0}),j.default=void 0;var e=function(t){return typeof t=="function"},r=e;return j.default=r,j}var K;function le(){if(K)return O;K=1;var e=p();Object.defineProperty(O,"__esModule",{value:!0}),O.default=void 0;var r=e(te()),o=e(ue()),t=e(se()),l=function(f){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];n=(0,r.default)(n)?n.split("."):n;for(var u=(0,t.default)(f,n),a=(0,t.default)(f,n.slice(0,-1)),i=arguments.length,v=new Array(i>2?i-2:0),c=2;c<i;c++)v[c-2]=arguments[c];return(0,o.default)(u)?u.call.apply(u,[a].concat(v)):u},s=l;return O.default=s,O}var R={},H;function ge(){if(H)return R;H=1,Object.defineProperty(R,"__esModule",{value:!0}),R.default=void 0;var e=function(t){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:16,s;return function(){for(var d=this,f=arguments.length,n=new Array(f),u=0;u<f;u++)n[u]=arguments[u];return clearTimeout(s),s=setTimeout(function(){t.apply(d,n)},l),s}},r=e;return R.default=r,R}var M={},J;function me(){if(J)return M;J=1;var e=p();Object.defineProperty(M,"__esModule",{value:!0}),M.default=void 0;var r=e(ie()),o=e(fe()),t=e(ue()),l=e(x());function s(n,u){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);u&&(i=i.filter(function(v){return Object.getOwnPropertyDescriptor(n,v).enumerable})),a.push.apply(a,i)}return a}function d(n){for(var u=1;u<arguments.length;u++){var a=arguments[u]!=null?arguments[u]:{};u%2?s(Object(a),!0).forEach(function(i){(0,r.default)(n,i,a[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(a,i))})}return n}var f=function n(){var u=this;(0,o.default)(this,n),this.listeners={},this.getEventMap=function(a){return u.listeners[a]||(u.listeners[a]=new Map),u.listeners[a]},this.on=function(a,i){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},c=v.once,m=c===void 0?!1:c;return(0,t.default)(i)?(u.getEventMap(a).set(i,m?function(){i.apply(void 0,arguments),u.off(a,i)}:i),u):(console.error("[EventBus Error] listener is not a function"),u)},this.once=function(a,i){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return u.on(a,i,d(d({},v),{},{once:!0}))},this.off=function(a,i){var v=u.getEventMap(a);return(0,l.default)(i)?v.clear():v.delete(i),u},this.emit=function(a){for(var i=arguments.length,v=new Array(i>1?i-1:0),c=1;c<i;c++)v[c-1]=arguments[c];return u.getEventMap(a).forEach(function(m){return m.apply(void 0,v)})}};return M.default=f,M}var P={},L;function _e(){if(L)return P;L=1,Object.defineProperty(P,"__esModule",{value:!0}),P.default=void 0;var e=function(t){return Promise.resolve().then(t)},r=e;return P.default=r,P}var N={},E={},Q;function ne(){if(Q)return E;Q=1,Object.defineProperty(E,"__esModule",{value:!0}),E.default=void 0;var e=function(t){return t===null},r=e;return E.default=r,E}var W;function he(){if(W)return N;W=1;var e=p();Object.defineProperty(N,"__esModule",{value:!0}),N.default=void 0;var r=e(x()),o=e(ne()),t=function(d){return!((0,r.default)(d)||(0,o.default)(d))},l=t;return N.default=l,N}var w={},X;function be(){if(X)return w;X=1,Object.defineProperty(w,"__esModule",{value:!0}),w.default=void 0;var e=function(t){var l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},s=l.disable,d=s===void 0?function(){return!1}:s,f=new Map,n=function(a){if(f.has(a))return f.get(a);for(var i=arguments.length,v=new Array(i>1?i-1:0),c=1;c<i;c++)v[c-1]=arguments[c];var m=t.call.apply(t,[this,a].concat(v));return d.call(this,{cache:f,key:a,result:m,drop:function(){return f.delete(a)}})||f.set(a,m),m};return n.cache=f,n},r=e;return w.default=r,w}var I={},Y;function qe(){if(Y)return I;Y=1;var e=p();Object.defineProperty(I,"__esModule",{value:!0}),I.default=void 0;var r=e(ee()),o=e(re()),t=e(ne()),l=function(f){return(0,r.default)(f)==="object"&&!((0,o.default)(f)||(0,t.default)(f))},s=l;return I.default=s,I}var $={},Z;function ye(){if(Z)return $;Z=1;var e=p();Object.defineProperty($,"__esModule",{value:!0}),$.default=void 0;var r=e(x()),o=e(le()),t=function(){for(var d=arguments.length,f=new Array(d),n=0;n<d;n++)f[n]=arguments[n];return f.reduce(function(u,a){return(0,r.default)(u)?(0,o.default)(a):(0,o.default)(u)},void 0)},l=t;return $.default=l,$}var D={},k;function Oe(){if(k)return D;k=1;var e=p();Object.defineProperty(D,"__esModule",{value:!0}),D.default=void 0;var r=e(ee()),o=function(){return typeof window<"u"?window:typeof self<"u"?self:typeof g<"u"?g:Function("return this")()},t=o(),l=function(){return(typeof g>"u"?"undefined":(0,r.default)(g))!=="object"||!g||g.Math!==Math||g.Array!==Array?t:g},s=l(),d=s;return D.default=d,D}export{se as a,le as b,ge as c,ue as d,me as e,_e as f,te as g,he as h,be as i,x as j,qe as k,ye as l,re as m,Oe as n,pe as r};
