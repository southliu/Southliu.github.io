import{c as s,e as j}from"./@babel_runtime@7.19.0-130d17ca.js";import{r as o}from"./react@18.2.0-44b760b7.js";import{r as z}from"./react-dom@18.2.0_react@18.2.0-a4d36ec3.js";import{c as _,a as C,g as A,u as B,r as b,s as M,b as O}from"./rc-util@5.24.4_biqbaboplfbrettd7655fr4n2y-26f345e3.js";import{j as W}from"./@ant-design_icons@4.7.0_biqbaboplfbrettd7655fr4n2y-a11e4fd7.js";var L=o.exports.createContext(null),w=[];function N(e,t){var a=o.exports.useState(function(){if(!_())return null;var n=document.createElement("div");return n}),f=s(a,1),r=f[0],u=o.exports.useContext(L),l=o.exports.useState(w),c=s(l,2),d=c[0],v=c[1],R=u||function(n){v(function(S){var i=[n].concat(j(S));return i})};function p(){r.parentElement||document.body.appendChild(r)}function m(){var n;(n=r.parentElement)===null||n===void 0||n.removeChild(r)}return C(function(){return e?u?u(p):p():m(),m},[e]),C(function(){d.length&&(d.forEach(function(n){return n()}),v(w))},[d]),[r,R]}function Y(){return document.body.scrollHeight>(window.innerHeight||document.documentElement.clientHeight)&&window.innerWidth>document.body.offsetWidth}var F="rc-util-locker-".concat(Date.now()),D=0;function G(e){var t=!!e,a=o.exports.useState(function(){return D+=1,"".concat(F,"_").concat(D)}),f=s(a,1),r=f[0];C(function(){if(t){var u=A(),l=Y();B(`
html body {
  overflow-y: hidden;
  `.concat(l?"width: calc(100% - ".concat(u,"px);"):"",`
}`),r)}else b(r);return function(){b(r)}},[t,r])}var P=!1;function J(e){return typeof e=="boolean"&&(P=e),P}var k=function(t){return t===!1?!1:!_()||!t?null:typeof t=="string"?document.querySelector(t):typeof t=="function"?t():t},te=o.exports.forwardRef(function(e,t){var a=e.open,f=e.autoLock,r=e.getContainer;e.debug;var u=e.autoDestroy,l=u===void 0?!0:u,c=e.children,d=o.exports.useState(a),v=s(d,2),R=v[0],p=v[1],m=R||a;o.exports.useEffect(function(){(l||a)&&p(a)},[a,l]);var n=o.exports.useState(function(){return k(r)}),S=s(n,2),i=S[0],q=S[1];o.exports.useEffect(function(){var y=k(r);q(y!=null?y:null)});var I=N(m&&!i),g=s(I,2),E=g[0],Q=g[1],h=i!=null?i:E;G(f&&a&&_()&&(h===E||h===document.body));var $=null;if(c&&M(c)&&t){var H=c;$=H.ref}var T=O($,t);if(!m||!_()||i===void 0)return null;var U=h===!1||J(),x=c;return t&&(x=o.exports.cloneElement(c,{ref:T})),W(L.Provider,{value:Q,children:U?x:z.exports.createPortal(x,h)})});export{te as P};