import{g as M,c as P,r as m,h as T}from"./@babel_runtime.cff7d31a.js";import{r as c}from"./react.1ab83802.js";import{c as R}from"./classnames.96a48171.js";import{h as j,K as p}from"./rc-util.72bdd974.js";var A=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],F=c.exports.forwardRef(function(e,v){var o,u=e.prefixCls,n=u===void 0?"rc-switch":u,f=e.className,g=e.checked,w=e.defaultChecked,r=e.disabled,x=e.loadingIcon,N=e.checkedChildren,y=e.unCheckedChildren,d=e.onClick,i=e.onChange,l=e.onKeyDown,b=M(e,A),I=j(!1,{value:g,defaultValue:w}),k=P(I,2),s=k[0],K=k[1];function h(a,C){var t=s;return r||(t=a,K(t),i==null||i(t,C)),t}function E(a){a.which===p.LEFT?h(!1,a):a.which===p.RIGHT&&h(!0,a),l==null||l(a)}function S(a){var C=h(!s,a);d==null||d(C,a)}var D=R(n,f,(o={},m(o,"".concat(n,"-checked"),s),m(o,"".concat(n,"-disabled"),r),o));return c.exports.createElement("button",T({},b,{type:"button",role:"switch","aria-checked":s,disabled:r,className:D,ref:v,onKeyDown:E,onClick:S}),x,c.exports.createElement("span",{className:"".concat(n,"-inner")},c.exports.createElement("span",{className:"".concat(n,"-inner-checked")},N),c.exports.createElement("span",{className:"".concat(n,"-inner-unchecked")},y)))});F.displayName="Switch";export{F as S};
