import{c as e}from"./classnames@2.5.1.C42auVll.js";import{r as n,e as t}from"./react@18.2.0.BNo5BOs9.js";import{f as a,b as o,h as r,d as l,c as s,e as c,g as u}from"./@babel_runtime@7.24.4.BmQrySDS.js";import{B as i,y as f}from"./rc-util@5.39.1_react-dom@18.2.0_react@18.2.0.BMjVa3px.js";function d(e,n,t){var a=n.cloneNode(!0),o=Object.create(e,{target:{value:a},currentTarget:{value:a}});return a.value=t,"number"==typeof n.selectionStart&&"number"==typeof n.selectionEnd&&(a.selectionStart=n.selectionStart,a.selectionEnd=n.selectionEnd),o}function p(e,n,t,a){if(t){var o=n;"click"!==n.type?"file"===e.type||void 0===a?t(o):t(o=d(n,e,a)):t(o=d(n,e,""))}}function m(e,n){if(e){e.focus(n);var t=(n||{}).cursor;if(t){var a=e.value.length;switch(t){case"start":e.setSelectionRange(0,0);break;case"end":e.setSelectionRange(a,a);break;default:e.setSelectionRange(0,a)}}}}var v=function(s){var c,u,i=s.inputElement,f=s.children,d=s.prefixCls,p=s.prefix,m=s.suffix,v=s.addonBefore,x=s.addonAfter,g=s.className,h=s.style,y=s.disabled,w=s.readOnly,E=s.focused,C=s.triggerFocus,N=s.allowClear,b=s.value,S=s.handleReset,R=s.hidden,F=s.classes,B=s.classNames,j=s.dataAttrs,W=s.styles,k=s.components,A=null!=f?f:i,D=(null==k?void 0:k.affixWrapper)||"span",I=(null==k?void 0:k.groupWrapper)||"span",z=(null==k?void 0:k.wrapper)||"span",K=(null==k?void 0:k.groupAddon)||"span",L=n.useRef(null),P=function(e){return!!(e.prefix||e.suffix||e.allowClear)}(s),_=n.cloneElement(A,{value:b,className:e(A.props.className,!P&&(null==B?void 0:B.variant))||null});if(P){var M,O=null;if(N){var T,V=!y&&!w&&b,H="".concat(d,"-clear-icon"),q="object"===a(N)&&null!=N&&N.clearIcon?N.clearIcon:"✖";O=t.createElement("span",{onClick:S,onMouseDown:function(e){return e.preventDefault()},className:e(H,(T={},o(T,"".concat(H,"-hidden"),!V),o(T,"".concat(H,"-has-suffix"),!!m),T)),role:"button",tabIndex:-1},q)}var G="".concat(d,"-affix-wrapper"),J=e(G,(o(M={},"".concat(d,"-disabled"),y),o(M,"".concat(G,"-disabled"),y),o(M,"".concat(G,"-focused"),E),o(M,"".concat(G,"-readonly"),w),o(M,"".concat(G,"-input-with-clear-btn"),m&&N&&b),M),null==F?void 0:F.affixWrapper,null==B?void 0:B.affixWrapper,null==B?void 0:B.variant),Q=(m||N)&&t.createElement("span",{className:e("".concat(d,"-suffix"),null==B?void 0:B.suffix),style:null==W?void 0:W.suffix},O,m);_=t.createElement(D,r({className:J,style:null==W?void 0:W.affixWrapper,onClick:function(e){var n;null!==(n=L.current)&&void 0!==n&&n.contains(e.target)&&(null==C||C())}},null==j?void 0:j.affixWrapper,{ref:L}),p&&t.createElement("span",{className:e("".concat(d,"-prefix"),null==B?void 0:B.prefix),style:null==W?void 0:W.prefix},p),_,Q)}if(function(e){return!(!e.addonBefore&&!e.addonAfter)}(s)){var U="".concat(d,"-group"),X="".concat(U,"-addon"),Y="".concat(U,"-wrapper"),Z=e("".concat(d,"-wrapper"),U,null==F?void 0:F.wrapper,null==B?void 0:B.wrapper),$=e(Y,o({},"".concat(Y,"-disabled"),y),null==F?void 0:F.group,null==B?void 0:B.groupWrapper);_=t.createElement(I,{className:$},t.createElement(z,{className:Z},v&&t.createElement(K,{className:X},v),_,x&&t.createElement(K,{className:X},x)))}return t.cloneElement(_,{className:e(null===(c=_.props)||void 0===c?void 0:c.className,g)||null,style:l(l({},null===(u=_.props)||void 0===u?void 0:u.style),h),hidden:R})},x=["show"];function g(e,t){return n.useMemo((function(){var n={};t&&(n.show="object"===a(t)&&t.formatter?t.formatter:!!t);var o=n=l(l({},n),e),r=o.show,c=s(o,x);return l(l({},c),{},{show:!!r,showFormatter:"function"==typeof r?r:void 0,strategy:c.strategy||function(e){return e.length}})}),[e,t])}var h=["autoComplete","onChange","onFocus","onBlur","onPressEnter","onKeyDown","prefixCls","disabled","htmlSize","className","maxLength","suffix","showCount","count","type","classes","classNames","styles","onCompositionStart","onCompositionEnd"],y=n.forwardRef((function(a,d){var x=a.autoComplete,y=a.onChange,w=a.onFocus,E=a.onBlur,C=a.onPressEnter,N=a.onKeyDown,b=a.prefixCls,S=void 0===b?"rc-input":b,R=a.disabled,F=a.htmlSize,B=a.className,j=a.maxLength,W=a.suffix,k=a.showCount,A=a.count,D=a.type,I=void 0===D?"text":D,z=a.classes,K=a.classNames,L=a.styles,P=a.onCompositionStart,_=a.onCompositionEnd,M=s(a,h),O=n.useState(!1),T=c(O,2),V=T[0],H=T[1],q=n.useRef(!1),G=n.useRef(null),J=function(e){G.current&&m(G.current,e)},Q=i(a.defaultValue,{value:a.value}),U=c(Q,2),X=U[0],Y=U[1],Z=null==X?"":String(X),$=n.useState(null),ee=c($,2),ne=ee[0],te=ee[1],ae=g(A,k),oe=ae.max||j,re=ae.strategy(Z),le=!!oe&&re>oe;n.useImperativeHandle(d,(function(){return{focus:J,blur:function(){var e;null===(e=G.current)||void 0===e||e.blur()},setSelectionRange:function(e,n,t){var a;null===(a=G.current)||void 0===a||a.setSelectionRange(e,n,t)},select:function(){var e;null===(e=G.current)||void 0===e||e.select()},input:G.current}})),n.useEffect((function(){H((function(e){return(!e||!R)&&e}))}),[R]);var se=function(e,n,t){var a,o,r=n;if(!q.current&&ae.exceedFormatter&&ae.max&&ae.strategy(n)>ae.max)n!==(r=ae.exceedFormatter(n,{max:ae.max}))&&te([(null===(a=G.current)||void 0===a?void 0:a.selectionStart)||0,(null===(o=G.current)||void 0===o?void 0:o.selectionEnd)||0]);else if("compositionEnd"===t.source)return;Y(r),G.current&&p(G.current,e,y,r)};n.useEffect((function(){var e;ne&&(null===(e=G.current)||void 0===e||e.setSelectionRange.apply(e,u(ne)))}),[ne]);var ce,ue=function(e){se(e,e.target.value,{source:"change"})},ie=function(e){q.current=!1,se(e,e.currentTarget.value,{source:"compositionEnd"}),null==_||_(e)},fe=function(e){C&&"Enter"===e.key&&C(e),null==N||N(e)},de=function(e){H(!0),null==w||w(e)},pe=function(e){H(!1),null==E||E(e)},me=le&&"".concat(S,"-out-of-range");return t.createElement(v,r({},M,{prefixCls:S,className:e(B,me),handleReset:function(e){Y(""),J(),G.current&&p(G.current,e,y)},value:Z,focused:V,triggerFocus:J,suffix:function(){var n=Number(oe)>0;if(W||ae.show){var a=ae.showFormatter?ae.showFormatter({value:Z,count:re,maxLength:oe}):"".concat(re).concat(n?" / ".concat(oe):"");return t.createElement(t.Fragment,null,ae.show&&t.createElement("span",{className:e("".concat(S,"-show-count-suffix"),o({},"".concat(S,"-show-count-has-suffix"),!!W),null==K?void 0:K.count),style:l({},null==L?void 0:L.count)},a),W)}return null}(),disabled:R,classes:z,classNames:K,styles:L}),(ce=f(a,["prefixCls","onPressEnter","addonBefore","addonAfter","prefix","suffix","allowClear","defaultValue","showCount","count","classes","htmlSize","styles","classNames"]),t.createElement("input",r({autoComplete:x},ce,{onChange:ue,onFocus:de,onBlur:pe,onKeyDown:fe,className:e(S,o({},"".concat(S,"-disabled"),R),null==K?void 0:K.input),style:null==L?void 0:L.input,ref:G,size:F,type:I,onCompositionStart:function(e){q.current=!0,null==P||P(e)},onCompositionEnd:ie}))))}));export{v as B,y as I,p as r,m as t,g as u};
