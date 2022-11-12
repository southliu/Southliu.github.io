import{c as H,_ as N}from"./@babel_runtime@7.19.0-16d3a89d.js";import{r as n}from"./react@18.2.0-9cdefec6.js";import{j as O,k as V,f as k,l as q}from"./rc-util@5.24.4_react-dom@18.2.0_react@18.2.0-c033d194.js";import{a as D,b as I}from"./dom-align@1.12.3-747260cd.js";import{i as L}from"./lodash@4.17.21-9db853bc.js";import{i as S}from"./resize-observer-polyfill@1.5.1-1e2b0dc8.js";function G(r,e){return r===e?!0:!r||!e?!1:"pageX"in e&&"pageY"in e?r.pageX===e.pageX&&r.pageY===e.pageY:"clientX"in e&&"clientY"in e?r.clientX===e.clientX&&r.clientY===e.clientY:!1}function J(r,e){r!==document.activeElement&&O(e,r)&&typeof r.focus=="function"&&r.focus()}function _(r,e){var i=null,f=null;function a(g){var b=H(g,1),m=b[0].target;if(!!document.documentElement.contains(m)){var v=m.getBoundingClientRect(),z=v.width,l=v.height,u=Math.floor(z),o=Math.floor(l);(i!==u||f!==o)&&Promise.resolve().then(function(){e({width:u,height:o})}),i=u,f=o}}var c=new S(a);return r&&c.observe(r),function(){c.disconnect()}}const K=function(r,e){var i=n.useRef(!1),f=n.useRef(null);function a(){window.clearTimeout(f.current)}function c(g){if(a(),!i.current||g===!0){if(r()===!1)return;i.current=!0,f.current=window.setTimeout(function(){i.current=!1},e)}else f.current=window.setTimeout(function(){i.current=!1,c()},e)}return[c,function(){i.current=!1,a()}]};function M(r){return typeof r!="function"?null:r()}function C(r){return N(r)!=="object"||!r?null:r}var Q=function(e,i){var f=e.children,a=e.disabled,c=e.target,g=e.align,b=e.onAlign,m=e.monitorWindowResize,v=e.monitorBufferTime,z=v===void 0?0:v,l=n.useRef({}),u=n.useRef(),o=n.Children.only(f),R=n.useRef({});R.current.disabled=a,R.current.target=c,R.current.align=g,R.current.onAlign=b;var $=K(function(){var t=R.current,T=t.disabled,B=t.target,y=t.align,W=t.onAlign;if(!T&&B){var A=u.current,w,E=M(B),P=C(B);l.current.element=E,l.current.point=P,l.current.align=y;var j=document,F=j.activeElement;return E&&q(E)?w=D(A,E,y):P&&(w=I(A,P,y)),J(F,A),W&&w&&W(A,w),!0}return!1},z),X=H($,2),d=X[0],Y=X[1],h=n.useRef({cancel:function(){}}),p=n.useRef({cancel:function(){}});n.useEffect(function(){var t=M(c),T=C(c);u.current!==p.current.element&&(p.current.cancel(),p.current.element=u.current,p.current.cancel=_(u.current,d)),(l.current.element!==t||!G(l.current.point,T)||!L(l.current.align,g))&&(d(),h.current.element!==t&&(h.current.cancel(),h.current.element=t,h.current.cancel=_(t,d)))}),n.useEffect(function(){a?Y():d()},[a]);var s=n.useRef(null);return n.useEffect(function(){m?s.current||(s.current=V(window,"resize",d)):s.current&&(s.current.remove(),s.current=null)},[m]),n.useEffect(function(){return function(){h.current.cancel(),p.current.cancel(),s.current&&s.current.remove(),Y()}},[]),n.useImperativeHandle(i,function(){return{forceAlign:function(){return d(!0)}}}),n.isValidElement(o)&&(o=n.cloneElement(o,{ref:k(o.ref,u)})),o},U=n.forwardRef(Q);U.displayName="Align";export{U as R};
