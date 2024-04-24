import{e,b as t,h as n,d as a}from"./@babel_runtime@7.24.4.BmQrySDS.js";import{c as o}from"./classnames@2.5.1.C42auVll.js";import{K as l,B as r,A as c}from"./rc-util@5.39.1_react-dom@18.2.0_react@18.2.0.BMjVa3px.js";import{e as i,r as u}from"./react@18.2.0.BNo5BOs9.js";var s={items_per_page:"/ page",jump_to:"Go to",jump_to_confirm:"confirm",page:"Page",prev_page:"Previous Page",next_page:"Next Page",prev_5:"Previous 5 Pages",next_5:"Next 5 Pages",prev_3:"Previous 3 Pages",next_3:"Next 3 Pages",page_size:"Page Size"},p={items_per_page:"条/页",jump_to:"跳至",jump_to_confirm:"确定",page:"页",prev_page:"上一页",next_page:"下一页",prev_5:"向前 5 页",next_5:"向后 5 页",prev_3:"向前 3 页",next_3:"向后 3 页",page_size:"页码"},m=["10","20","50","100"],f=function(t){var n=t.pageSizeOptions,a=void 0===n?m:n,o=t.locale,r=t.changeSize,c=t.pageSize,u=t.goButton,s=t.quickGo,p=t.rootPrefixCls,f=t.selectComponentClass,d=t.selectPrefixCls,v=t.disabled,g=t.buildOptionText,N=i.useState(""),b=e(N,2),h=b[0],x=b[1],E=function(){return!h||Number.isNaN(h)?void 0:Number(h)},y="function"==typeof g?g:function(e){return"".concat(e," ").concat(o.items_per_page)},C=function(e){""!==h&&(e.keyCode!==l.ENTER&&"click"!==e.type||(x(""),null==s||s(E())))},_="".concat(p,"-options");if(!r&&!s)return null;var k=null,P=null,S=null;if(r&&f){var j=(a.some((function(e){return e.toString()===c.toString()}))?a:a.concat([c.toString()]).sort((function(e,t){return(Number.isNaN(Number(e))?0:Number(e))-(Number.isNaN(Number(t))?0:Number(t))}))).map((function(e,t){return i.createElement(f.Option,{key:t,value:e.toString()},y(e))}));k=i.createElement(f,{disabled:v,prefixCls:d,showSearch:!1,className:"".concat(_,"-size-changer"),optionLabelProp:"children",popupMatchSelectWidth:!1,value:(c||a[0]).toString(),onChange:function(e){null==r||r(Number(e))},getPopupContainer:function(e){return e.parentNode},"aria-label":o.page_size,defaultOpen:!1},j)}return s&&(u&&(S="boolean"==typeof u?i.createElement("button",{type:"button",onClick:C,onKeyUp:C,disabled:v,className:"".concat(_,"-quick-jumper-button")},o.jump_to_confirm):i.createElement("span",{onClick:C,onKeyUp:C},u)),P=i.createElement("div",{className:"".concat(_,"-quick-jumper")},o.jump_to,i.createElement("input",{disabled:v,type:"text",value:h,onChange:function(e){x(e.target.value)},onKeyUp:C,onBlur:function(e){u||""===h||(x(""),e.relatedTarget&&(e.relatedTarget.className.indexOf("".concat(p,"-item-link"))>=0||e.relatedTarget.className.indexOf("".concat(p,"-item"))>=0)||null==s||s(E()))},"aria-label":o.page}),o.page,S)),i.createElement("li",{className:_},k,P)},d=function(e){var n,a=e.rootPrefixCls,l=e.page,r=e.active,c=e.className,u=e.showTitle,s=e.onClick,p=e.onKeyPress,m=e.itemRender,f="".concat(a,"-item"),d=o(f,"".concat(f,"-").concat(l),(t(n={},"".concat(f,"-active"),r),t(n,"".concat(f,"-disabled"),!l),n),c),v=m(l,"page",i.createElement("a",{rel:"nofollow"},l));return v?i.createElement("li",{title:u?String(l):null,className:d,onClick:function(){s(l)},onKeyDown:function(e){p(e,s,l)},tabIndex:0},v):null},v=function(e,t,n){return n};function g(){}function N(e){var t=Number(e);return"number"==typeof t&&!Number.isNaN(t)&&isFinite(t)&&Math.floor(t)===t}function b(e,t,n){var a=void 0===e?t:e;return Math.floor((n-1)/a)+1}var h=function(s){var m,h=s.prefixCls,x=void 0===h?"rc-pagination":h,E=s.selectPrefixCls,y=void 0===E?"rc-select":E,C=s.className,_=s.selectComponentClass,k=s.current,P=s.defaultCurrent,S=void 0===P?1:P,j=s.total,w=void 0===j?0:j,z=s.pageSize,K=s.defaultPageSize,T=void 0===K?10:K,O=s.onChange,I=void 0===O?g:O,D=s.hideOnSinglePage,M=s.showPrevNextJumpers,R=void 0===M||M,U=s.showQuickJumper,B=s.showLessItems,q=s.showTitle,V=void 0===q||q,G=s.onShowSizeChange,W=void 0===G?g:G,A=s.locale,J=void 0===A?p:A,L=s.style,F=s.totalBoundaryShowSizeChanger,Q=void 0===F?50:F,H=s.disabled,X=s.simple,Y=s.showTotal,Z=s.showSizeChanger,$=s.pageSizeOptions,ee=s.itemRender,te=void 0===ee?v:ee,ne=s.jumpPrevIcon,ae=s.jumpNextIcon,oe=s.prevIcon,le=s.nextIcon,re=i.useRef(null),ce=r(10,{value:z,defaultValue:T}),ie=e(ce,2),ue=ie[0],se=ie[1],pe=r(1,{value:k,defaultValue:S,postState:function(e){return Math.max(1,Math.min(e,b(void 0,ue,w)))}}),me=e(pe,2),fe=me[0],de=me[1],ve=i.useState(fe),ge=e(ve,2),Ne=ge[0],be=ge[1];u.useEffect((function(){be(fe)}),[fe]);var he=Math.max(1,fe-(B?3:5)),xe=Math.min(b(void 0,ue,w),fe+(B?3:5));function Ee(e,t){var n=e||i.createElement("button",{type:"button","aria-label":t,className:"".concat(x,"-item-link")});return"function"==typeof e&&(n=i.createElement(e,a({},s))),n}function ye(e){var t=e.target.value,n=b(void 0,ue,w);return""===t?t:Number.isNaN(Number(t))?Ne:t>=n?n:Number(t)}var Ce=w>ue&&U;function _e(e){var t=ye(e);switch(t!==Ne&&be(t),e.keyCode){case l.ENTER:ke(t);break;case l.UP:ke(t-1);break;case l.DOWN:ke(t+1)}}function ke(e){if(function(e){return N(e)&&e!==fe&&N(w)&&w>0}(e)&&!H){var t=b(void 0,ue,w),n=e;return e>t?n=t:e<1&&(n=1),n!==Ne&&be(n),de(n),null==I||I(n,ue),n}return fe}var Pe=fe>1,Se=fe<b(void 0,ue,w),je=null!=Z?Z:w>Q;function we(){Pe&&ke(fe-1)}function ze(){Se&&ke(fe+1)}function Ke(){ke(he)}function Te(){ke(xe)}function Oe(e,t){if("Enter"===e.key||e.charCode===l.ENTER||e.keyCode===l.ENTER){for(var n=arguments.length,a=new Array(n>2?n-2:0),o=2;o<n;o++)a[o-2]=arguments[o];t.apply(void 0,a)}}function Ie(e){"click"!==e.type&&e.keyCode!==l.ENTER||ke(Ne)}var De=null,Me=c(s,{aria:!0,data:!0}),Re=Y&&i.createElement("li",{className:"".concat(x,"-total-text")},Y(w,[0===w?0:(fe-1)*ue+1,fe*ue>w?w:fe*ue])),Ue=null,Be=b(void 0,ue,w);if(D&&w<=ue)return null;var qe=[],Ve={rootPrefixCls:x,onClick:ke,onKeyPress:Oe,showTitle:V,itemRender:te,page:-1},Ge=fe-1>0?fe-1:0,We=fe+1<Be?fe+1:Be,Ae=U&&U.goButton,Je=Ae,Le=null;X&&(Ae&&(Je="boolean"==typeof Ae?i.createElement("button",{type:"button",onClick:Ie,onKeyUp:Ie},J.jump_to_confirm):i.createElement("span",{onClick:Ie,onKeyUp:Ie},Ae),Je=i.createElement("li",{title:V?"".concat(J.jump_to).concat(fe,"/").concat(Be):null,className:"".concat(x,"-simple-pager")},Je)),Le=i.createElement("li",{title:V?"".concat(fe,"/").concat(Be):null,className:"".concat(x,"-simple-pager")},i.createElement("input",{type:"text",value:Ne,disabled:H,onKeyDown:function(e){e.keyCode!==l.UP&&e.keyCode!==l.DOWN||e.preventDefault()},onKeyUp:_e,onChange:_e,onBlur:function(e){ke(ye(e))},size:3}),i.createElement("span",{className:"".concat(x,"-slash")},"/"),Be));var Fe=B?1:2;if(Be<=3+2*Fe){Be||qe.push(i.createElement(d,n({},Ve,{key:"noPager",page:1,className:"".concat(x,"-item-disabled")})));for(var Qe=1;Qe<=Be;Qe+=1)qe.push(i.createElement(d,n({},Ve,{key:Qe,page:Qe,active:fe===Qe})))}else{var He=B?J.prev_3:J.prev_5,Xe=B?J.next_3:J.next_5,Ye=te(he,"jump-prev",Ee(ne,"prev page")),Ze=te(xe,"jump-next",Ee(ae,"next page"));R&&(De=Ye?i.createElement("li",{title:V?He:null,key:"prev",onClick:Ke,tabIndex:0,onKeyDown:function(e){Oe(e,Ke)},className:o("".concat(x,"-jump-prev"),t({},"".concat(x,"-jump-prev-custom-icon"),!!ne))},Ye):null,Ue=Ze?i.createElement("li",{title:V?Xe:null,key:"next",onClick:Te,tabIndex:0,onKeyDown:function(e){Oe(e,Te)},className:o("".concat(x,"-jump-next"),t({},"".concat(x,"-jump-next-custom-icon"),!!ae))},Ze):null);var $e=Math.max(1,fe-Fe),et=Math.min(fe+Fe,Be);fe-1<=Fe&&(et=1+2*Fe),Be-fe<=Fe&&($e=Be-2*Fe);for(var tt=$e;tt<=et;tt+=1)qe.push(i.createElement(d,n({},Ve,{key:tt,page:tt,active:fe===tt})));if(fe-1>=2*Fe&&3!==fe&&(qe[0]=i.cloneElement(qe[0],{className:o("".concat(x,"-item-after-jump-prev"),qe[0].props.className)}),qe.unshift(De)),Be-fe>=2*Fe&&fe!==Be-2){var nt=qe[qe.length-1];qe[qe.length-1]=i.cloneElement(nt,{className:o("".concat(x,"-item-before-jump-next"),nt.props.className)}),qe.push(Ue)}1!==$e&&qe.unshift(i.createElement(d,n({},Ve,{key:1,page:1}))),et!==Be&&qe.push(i.createElement(d,n({},Ve,{key:Be,page:Be})))}var at,ot=(at=te(Ge,"prev",Ee(oe,"prev page")),i.isValidElement(at)?i.cloneElement(at,{disabled:!Pe}):at);if(ot){var lt=!Pe||!Be;ot=i.createElement("li",{title:V?J.prev_page:null,onClick:we,tabIndex:lt?null:0,onKeyDown:function(e){Oe(e,we)},className:o("".concat(x,"-prev"),t({},"".concat(x,"-disabled"),lt)),"aria-disabled":lt},ot)}var rt,ct,it,ut=(rt=te(We,"next",Ee(le,"next page")),i.isValidElement(rt)?i.cloneElement(rt,{disabled:!Se}):rt);ut&&(X?(ct=!Se,it=Pe?0:null):it=(ct=!Se||!Be)?null:0,ut=i.createElement("li",{title:V?J.next_page:null,onClick:ze,tabIndex:it,onKeyDown:function(e){Oe(e,ze)},className:o("".concat(x,"-next"),t({},"".concat(x,"-disabled"),ct)),"aria-disabled":ct},ut));var st=o(x,C,(t(m={},"".concat(x,"-simple"),X),t(m,"".concat(x,"-disabled"),H),m));return i.createElement("ul",n({className:st,style:L,ref:re},Me),Re,ot,X?Le:qe,ut,i.createElement(f,{locale:J,rootPrefixCls:x,disabled:H,selectComponentClass:_,selectPrefixCls:y,changeSize:je?function(e){var t=b(e,ue,w),n=fe>t&&0!==t?t:fe;se(e),be(n),null==W||W(fe,e),de(n),null==I||I(n,e)}:null,pageSize:ue,pageSizeOptions:$,quickGo:Ce?ke:null,goButton:Je}))};export{h as P,p as a,s as l};
