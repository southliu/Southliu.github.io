import{c as M,f as P,r as m,h as T}from"./@babel_runtime.494ad229.js";import{r as c}from"./react.fd625a73.js";import{c as j}from"./classnames.2e4736b8.js";import{j as R,K as p}from"./rc-util.10e30ffd.js";var A=["prefixCls","className","checked","defaultChecked","disabled","loadingIcon","checkedChildren","unCheckedChildren","onClick","onChange","onKeyDown"],F=c.forwardRef(function(e,f){var d,u=e.prefixCls,n=u===void 0?"rc-switch":u,v=e.className,g=e.checked,w=e.defaultChecked,i=e.disabled,N=e.loadingIcon,y=e.checkedChildren,b=e.unCheckedChildren,t=e.onClick,l=e.onChange,r=e.onKeyDown,x=M(e,A),I=R(!1,{value:g,defaultValue:w}),k=P(I,2),o=k[0],K=k[1];function h(a,C){var s=o;return i||(s=a,K(s),l==null||l(s,C)),s}function E(a){a.which===p.LEFT?h(!1,a):a.which===p.RIGHT&&h(!0,a),r==null||r(a)}function S(a){var C=h(!o,a);t==null||t(C,a)}var D=j(n,v,(d={},m(d,"".concat(n,"-checked"),o),m(d,"".concat(n,"-disabled"),i),d));return c.createElement("button",T({},x,{type:"button",role:"switch","aria-checked":o,disabled:i,className:D,ref:f,onKeyDown:E,onClick:S}),N,c.createElement("span",{className:"".concat(n,"-inner")},c.createElement("span",{className:"".concat(n,"-inner-checked")},y),c.createElement("span",{className:"".concat(n,"-inner-unchecked")},b)))});F.displayName="Switch";export{F as S};
