import{b as e,c as t,a as r,_ as n,g as u,f as o,k as a}from"./@babel_runtime@7.26.9.Bt-OOtGO.js";import{r as i}from"./react@19.0.0.C56gzhl-.js";import{s as f,l as c,h as s,O as l,y as h}from"./rc-util@5.44.4_react-dom@19.0.0_react@19.0.0.iKXSQ1s6.js";import{i as d}from"./resize-observer-polyfill@1.5.1.CzGuHLZU.js";var v=i.createContext(null);var m=new Map;var g=new d((function(e){e.forEach((function(e){var t,r=e.target;null===(t=m.get(r))||void 0===t||t.forEach((function(e){return e(r)}))}))}));var p=function(u){e(a,u);var o=t(a);function a(){return r(this,a),o.apply(this,arguments)}return n(a,[{key:"render",value:function(){return this.props.children}}]),a}(i.Component);function R(e,t){var r=e.children,n=e.disabled,a=i.useRef(null),h=i.useRef(null),d=i.useContext(v),R="function"==typeof r,b=R?r(a):r,w=i.useRef({width:-1,height:-1,offsetWidth:-1,offsetHeight:-1}),y=!R&&i.isValidElement(b)&&f(b),E=y?c(b):null,C=s(E,a),k=function(){var e;return l(a.current)||(a.current&&"object"===o(a.current)?l(null===(e=a.current)||void 0===e?void 0:e.nativeElement):null)||l(h.current)};i.useImperativeHandle(t,(function(){return k()}));var H=i.useRef(e);H.current=e;var j=i.useCallback((function(e){var t=H.current,r=t.onResize,n=t.data,o=e.getBoundingClientRect(),a=o.width,i=o.height,f=e.offsetWidth,c=e.offsetHeight,s=Math.floor(a),l=Math.floor(i);if(w.current.width!==s||w.current.height!==l||w.current.offsetWidth!==f||w.current.offsetHeight!==c){var h={width:s,height:l,offsetWidth:f,offsetHeight:c};w.current=h;var v=f===Math.round(a)?a:f,m=c===Math.round(i)?i:c,g=u(u({},h),{},{offsetWidth:v,offsetHeight:m});null==d||d(g,e,n),r&&Promise.resolve().then((function(){r(g,e)}))}}),[]);return i.useEffect((function(){var e,t,r=k();return r&&!n&&(e=r,t=j,m.has(e)||(m.set(e,new Set),g.observe(e)),m.get(e).add(t)),function(){return function(e,t){m.has(e)&&(m.get(e).delete(t),m.get(e).size||(g.unobserve(e),m.delete(e)))}(r,j)}}),[a.current,n]),i.createElement(p,{ref:h},y?i.cloneElement(b,{ref:C}):b)}var b=i.forwardRef(R);function w(e,t){var r=e.children;return("function"==typeof r?[r]:h(r)).map((function(r,n){var u=(null==r?void 0:r.key)||"".concat("rc-observer-key","-").concat(n);return i.createElement(b,a({},e,{key:u,ref:0===n?t:void 0}),r)}))}var y=i.forwardRef(w);y.Collection=function(e){var t=e.children,r=e.onBatchResize,n=i.useRef(0),u=i.useRef([]),o=i.useContext(v),a=i.useCallback((function(e,t,a){n.current+=1;var i=n.current;u.current.push({size:e,element:t,data:a}),Promise.resolve().then((function(){i===n.current&&(null==r||r(u.current),u.current=[])})),null==o||o(e,t,a)}),[r,o]);return i.createElement(v.Provider,{value:a},t)};export{y as R};
