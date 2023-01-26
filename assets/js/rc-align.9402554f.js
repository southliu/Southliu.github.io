import{f as A,g as D}from"./@babel_runtime.494ad229.js";import{a as I,b as k}from"./dom-align.529d0cdc.js";import{q as G,e as J,i as K,v as Q,m as U,n as Z}from"./rc-util.10e30ffd.js";import{R as t}from"./react.fd625a73.js";import{i as _}from"./resize-observer-polyfill.0f9f8adb.js";const x=function(n,e){var i=t.useRef(!1),o=t.useRef(null);function f(){window.clearTimeout(o.current)}function u(l){if(f(),!i.current||l===!0){if(n(l)===!1)return;i.current=!0,o.current=window.setTimeout(function(){i.current=!1},e)}else o.current=window.setTimeout(function(){i.current=!1,u()},e)}return[u,function(){i.current=!1,f()}]};function ee(n,e){return n===e?!0:!n||!e?!1:"pageX"in e&&"pageY"in e?n.pageX===e.pageX&&n.pageY===e.pageY:"clientX"in e&&"clientY"in e?n.clientX===e.clientX&&n.clientY===e.clientY:!1}function ne(n,e){n!==document.activeElement&&G(e,n)&&typeof n.focus=="function"&&n.focus()}function Y(n,e){var i=null,o=null;function f(l){var w=A(l,1),d=w[0].target;if(document.documentElement.contains(d)){var m=d.getBoundingClientRect(),E=m.width,c=m.height,s=Math.floor(E),a=Math.floor(c);(i!==s||o!==a)&&Promise.resolve().then(function(){e({width:s,height:a})}),i=s,o=a}}var u=new _(f);return n&&u.observe(n),function(){u.disconnect()}}function W(n){return typeof n!="function"?null:n()}function F(n){return D(n)!=="object"||!n?null:n}var te=function(e,i){var o=e.children,f=e.disabled,u=e.target,l=e.align,w=e.onAlign,d=e.monitorWindowResize,m=e.monitorBufferTime,E=m===void 0?0:m,c=t.useRef({}),s=t.useRef(),a=t.Children.only(o),v=t.useRef({});v.current.disabled=f,v.current.target=u,v.current.align=l,v.current.onAlign=w;var C=x(function(){var r=v.current,O=r.disabled,T=r.target,B=r.align,X=r.onAlign,R=s.current;if(!O&&T&&R){var h,p=W(T),y=F(T);c.current.element=p,c.current.point=y,c.current.align=B;var V=document,j=V.activeElement;return p&&Z(p)?h=I(R,p,B):y&&(h=k(R,y,B)),ne(j,R),X&&h&&X(R,h),!0}return!1},E),P=A(C,2),g=P[0],S=P[1],H=t.useState(),$=A(H,2),b=$[0],q=$[1],L=t.useState(),z=A(L,2),M=z[0],N=z[1];return J(function(){q(W(u)),N(F(u))}),t.useEffect(function(){(c.current.element!==b||!ee(c.current.point,M)||!K(c.current.align,l))&&g()}),t.useEffect(function(){var r=Y(s.current,g);return r},[s.current]),t.useEffect(function(){var r=Y(b,g);return r},[b]),t.useEffect(function(){f?S():g()},[f]),t.useEffect(function(){if(d){var r=Q(window,"resize",g);return r.remove}},[d]),t.useEffect(function(){return function(){S()}},[]),t.useImperativeHandle(i,function(){return{forceAlign:function(){return g(!0)}}}),t.isValidElement(a)&&(a=t.cloneElement(a,{ref:U(a.ref,s)})),a},re=t.forwardRef(te);re.displayName="Align";export{re as R};
