import{i as O,j as S,a as D,_ as L,f as k,g as $}from"./@babel_runtime.fb9bdd97.js";import{r as t}from"./react.c6268275.js";import{s as j,m as A,F as H,t as F}from"./rc-util.1ef88af6.js";import{i as K}from"./resize-observer-polyfill.0f9f8adb.js";var c=new Map;function T(e){e.forEach(function(i){var r,n=i.target;(r=c.get(n))===null||r===void 0||r.forEach(function(o){return o(n)})})}var M=new K(T);function V(e,i){c.has(e)||(c.set(e,new Set),M.observe(e)),c.get(e).add(i)}function X(e,i){c.has(e)&&(c.get(e).delete(i),c.get(e).size||(M.unobserve(e),c.delete(e)))}var Y=function(e){O(r,e);var i=S(r);function r(){return D(this,r),i.apply(this,arguments)}return L(r,[{key:"render",value:function(){return this.props.children}}]),r}(t.Component),m=t.createContext(null);function q(e){var i=e.children,r=e.onBatchResize,n=t.useRef(0),o=t.useRef([]),a=t.useContext(m),l=t.useCallback(function(f,u,v){n.current+=1;var d=n.current;o.current.push({size:f,element:u,data:v}),Promise.resolve().then(function(){d===n.current&&(r==null||r(o.current),o.current=[])}),a==null||a(f,u,v)},[r,a]);return t.createElement(m.Provider,{value:l},i)}function G(e){var i=e.children,r=e.disabled,n=t.useRef(null),o=t.useRef(null),a=t.useContext(m),l=typeof i=="function",f=l?i(n):i,u=t.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),v=!l&&t.isValidElement(f)&&j(f),d=v?f.ref:null,I=t.useMemo(function(){return A(d,n)},[d,n]),C=t.useRef(e);C.current=e;var b=t.useCallback(function(s){var z=C.current,E=z.onResize,P=z.data,_=s.getBoundingClientRect(),g=_.width,p=_.height,h=s.offsetWidth,R=s.offsetHeight,x=Math.floor(g),w=Math.floor(p);if(u.current.width!==x||u.current.height!==w||u.current.offsetWidth!==h||u.current.offsetHeight!==R){var y={width:x,height:w,offsetWidth:h,offsetHeight:R};u.current=y;var B=h===Math.round(g)?g:h,N=R===Math.round(p)?p:R,W=k(k({},y),{},{offsetWidth:B,offsetHeight:N});a==null||a(W,s,P),E&&Promise.resolve().then(function(){E(W,s)})}},[]);return t.useEffect(function(){var s=H(n.current)||H(o.current);return s&&!r&&V(s,b),function(){return X(s,b)}},[n.current,r]),t.createElement(Y,{ref:o},v?t.cloneElement(f,{ref:I}):f)}var J="rc-observer-key";function Q(e){var i=e.children,r=typeof i=="function"?[i]:F(i);return r.map(function(n,o){var a=(n==null?void 0:n.key)||"".concat(J,"-").concat(o);return t.createElement(G,$({},e,{key:a}),n)})}Q.Collection=q;export{Q as R};
