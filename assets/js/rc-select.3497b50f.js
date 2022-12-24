import{r as n}from"./react.017637b6.js";import"./react-is.06befcb0.js";import{c as Ue}from"./classnames.96a48171.js";import{c as oe,e as Q,d as ht,f as ne,h as ze,g as Je,l as on,b as Ee}from"./@babel_runtime.0b96ec9f.js";import{w as an,j as rn,x as ut,K as C,a as un,B as ln,d as cn,h as pt,b as sn,c as dn,t as fn,e as vn,o as pn}from"./rc-util.5bddd7c5.js";import{F as mn}from"./rc-overflow.84f05d95.js";import{T as gn}from"./rc-trigger.9536237c.js";import{L as hn}from"./rc-virtual-list.1aa9ec46.js";var At=n.exports.createContext(null);function bn(){return n.exports.useContext(At)}function Sn(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:10,e=n.exports.useState(!1),a=oe(e,2),o=a[0],i=a[1],r=n.exports.useRef(null),l=function(){window.clearTimeout(r.current)};n.exports.useEffect(function(){return l},[]);var p=function(h,S){l(),r.current=window.setTimeout(function(){i(h),S&&S()},t)};return[o,p,l]}function _t(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:250,e=n.exports.useRef(null),a=n.exports.useRef(null);n.exports.useEffect(function(){return function(){window.clearTimeout(a.current)}},[]);function o(i){(i||e.current===null)&&(e.current=i),window.clearTimeout(a.current),a.current=window.setTimeout(function(){e.current=null},t)}return[function(){return e.current},o]}function xn(t,e,a,o){var i=n.exports.useRef(null);i.current={open:e,triggerOpen:a,customizedTrigger:o},n.exports.useEffect(function(){function r(l){var p;if(!((p=i.current)!==null&&p!==void 0&&p.customizedTrigger)){var c=l.target;c.shadowRoot&&l.composed&&(c=l.composedPath()[0]||c),i.current.open&&t().filter(function(h){return h}).every(function(h){return!h.contains(c)&&h!==c})&&i.current.triggerOpen(!1)}}return window.addEventListener("mousedown",r),function(){return window.removeEventListener("mousedown",r)}},[])}var lt=function(e){var a=e.className,o=e.customizeIcon,i=e.customizeIconProps,r=e.onMouseDown,l=e.onClick,p=e.children,c;return typeof o=="function"?c=o(i):c=o,n.exports.createElement("span",{className:a,onMouseDown:function(S){S.preventDefault(),r&&r(S)},style:{userSelect:"none",WebkitUserSelect:"none"},unselectable:"on",onClick:l,"aria-hidden":!0},c!==void 0?c:n.exports.createElement("span",{className:Ue(a.split(/\s+/).map(function(h){return"".concat(h,"-icon")}))},p))},wn=function(e,a){var o,i,r=e.prefixCls,l=e.id,p=e.inputElement,c=e.disabled,h=e.tabIndex,S=e.autoFocus,u=e.autoComplete,m=e.editable,s=e.activeDescendantId,x=e.value,N=e.maxLength,z=e.onKeyDown,O=e.onMouseDown,A=e.onChange,F=e.onPaste,q=e.onCompositionStart,Y=e.onCompositionEnd,j=e.open,le=e.attrs,V=p||n.exports.createElement("input",null),K=V,G=K.ref,U=K.props,X=U.onKeyDown,$=U.onChange,Z=U.onMouseDown,J=U.onCompositionStart,D=U.onCompositionEnd,M=U.style;return an(!("maxLength"in V.props)),V=n.exports.cloneElement(V,Q(Q(Q({type:"search"},U),{},{id:l,ref:rn(a,G),disabled:c,tabIndex:h,autoComplete:u||"off",autoFocus:S,className:Ue("".concat(r,"-selection-search-input"),(o=V)===null||o===void 0||(i=o.props)===null||i===void 0?void 0:i.className),role:"combobox","aria-expanded":j,"aria-haspopup":"listbox","aria-owns":"".concat(l,"_list"),"aria-autocomplete":"list","aria-controls":"".concat(l,"_list"),"aria-activedescendant":s},le),{},{value:m?x:"",maxLength:N,readOnly:!m,unselectable:m?null:"on",style:Q(Q({},M),{},{opacity:m?null:0}),onKeyDown:function(P){z(P),X&&X(P)},onMouseDown:function(P){O(P),Z&&Z(P)},onChange:function(P){A(P),$&&$(P)},onCompositionStart:function(P){q(P),J&&J(P)},onCompositionEnd:function(P){Y(P),D&&D(P)},onPaste:F})),V},bt=n.exports.forwardRef(wn);bt.displayName="Input";function Ft(t){return Array.isArray(t)?t:t!==void 0?[t]:[]}var Cn=typeof window<"u"&&window.document&&window.document.documentElement,yn=Cn;function In(t){return t!=null}function Ot(t){return["string","number"].includes(ht(t))}function Lt(t){var e=void 0;return t&&(Ot(t.title)?e=t.title.toString():Ot(t.label)&&(e=t.label.toString())),e}function En(t,e){yn?n.exports.useLayoutEffect(t,e):n.exports.useEffect(t,e)}function Dn(t){var e;return(e=t.key)!==null&&e!==void 0?e:t.value}var Mt=function(e){e.preventDefault(),e.stopPropagation()},Rn=function(e){var a=e.id,o=e.prefixCls,i=e.values,r=e.open,l=e.searchValue,p=e.autoClearSearchValue,c=e.inputRef,h=e.placeholder,S=e.disabled,u=e.mode,m=e.showSearch,s=e.autoFocus,x=e.autoComplete,N=e.activeDescendantId,z=e.tabIndex,O=e.removeIcon,A=e.maxTagCount,F=e.maxTagTextLength,q=e.maxTagPlaceholder,Y=q===void 0?function(B){return"+ ".concat(B.length," ...")}:q,j=e.tagRender,le=e.onToggleOpen,V=e.onRemove,K=e.onInputChange,G=e.onInputPaste,U=e.onInputKeyDown,X=e.onInputMouseDown,$=e.onInputCompositionStart,Z=e.onInputCompositionEnd,J=n.exports.useRef(null),D=n.exports.useState(0),M=oe(D,2),R=M[0],P=M[1],pe=n.exports.useState(!1),ce=oe(pe,2),Le=ce[0],ee=ce[1],I="".concat(o,"-selection"),f=r||u==="multiple"&&p===!1||u==="tags"?l:"",E=u==="tags"||u==="multiple"&&p===!1||m&&(r||Le);En(function(){P(J.current.scrollWidth)},[f]);function L(B,ue,re,me,ge){return n.exports.createElement("span",{className:Ue("".concat(I,"-item"),ne({},"".concat(I,"-item-disabled"),re)),title:Lt(B)},n.exports.createElement("span",{className:"".concat(I,"-item-content")},ue),me&&n.exports.createElement(lt,{className:"".concat(I,"-item-remove"),onMouseDown:Mt,onClick:ge,customizeIcon:O},"×"))}function T(B,ue,re,me,ge){var we=function(k){Mt(k),le(!r)};return n.exports.createElement("span",{onMouseDown:we},j({label:ue,value:B,disabled:re,closable:me,onClose:ge}))}function _(B){var ue=B.disabled,re=B.label,me=B.value,ge=!S&&!ue,we=re;if(typeof F=="number"&&(typeof re=="string"||typeof re=="number")){var de=String(we);de.length>F&&(we="".concat(de.slice(0,F),"..."))}var k=function(Se){Se&&Se.stopPropagation(),V(B)};return typeof j=="function"?T(me,we,ue,ge,k):L(B,we,ue,ge,k)}function ae(B){var ue=typeof Y=="function"?Y(B):Y;return L({title:ue},ue,!1)}var se=n.exports.createElement("div",{className:"".concat(I,"-search"),style:{width:R},onFocus:function(){ee(!0)},onBlur:function(){ee(!1)}},n.exports.createElement(bt,{ref:c,open:r,prefixCls:o,id:a,inputElement:null,disabled:S,autoFocus:s,autoComplete:x,editable:E,activeDescendantId:N,value:f,onKeyDown:U,onMouseDown:X,onChange:K,onPaste:G,onCompositionStart:$,onCompositionEnd:Z,tabIndex:z,attrs:ut(e,!0)}),n.exports.createElement("span",{ref:J,className:"".concat(I,"-search-mirror"),"aria-hidden":!0},f," ")),De=n.exports.createElement(mn,{prefixCls:"".concat(I,"-overflow"),data:i,renderItem:_,renderRest:ae,suffix:se,itemKey:Dn,maxCount:A});return n.exports.createElement(n.exports.Fragment,null,De,!i.length&&!f&&n.exports.createElement("span",{className:"".concat(I,"-placeholder")},h))},On=function(e){var a=e.inputElement,o=e.prefixCls,i=e.id,r=e.inputRef,l=e.disabled,p=e.autoFocus,c=e.autoComplete,h=e.activeDescendantId,S=e.mode,u=e.open,m=e.values,s=e.placeholder,x=e.tabIndex,N=e.showSearch,z=e.searchValue,O=e.activeValue,A=e.maxLength,F=e.onInputKeyDown,q=e.onInputMouseDown,Y=e.onInputChange,j=e.onInputPaste,le=e.onInputCompositionStart,V=e.onInputCompositionEnd,K=n.exports.useState(!1),G=oe(K,2),U=G[0],X=G[1],$=S==="combobox",Z=$||N,J=m[0],D=z||"";$&&O&&!U&&(D=O),n.exports.useEffect(function(){$&&X(!1)},[$,O]);var M=S!=="combobox"&&!u&&!N?!1:!!D,R=Lt(J),P=function(){if(J)return null;var ce=M?{visibility:"hidden"}:void 0;return n.exports.createElement("span",{className:"".concat(o,"-selection-placeholder"),style:ce},s)};return n.exports.createElement(n.exports.Fragment,null,n.exports.createElement("span",{className:"".concat(o,"-selection-search")},n.exports.createElement(bt,{ref:r,prefixCls:o,id:i,open:u,inputElement:a,disabled:l,autoFocus:p,autoComplete:c,editable:Z,activeDescendantId:h,value:D,onKeyDown:F,onMouseDown:q,onChange:function(ce){X(!0),Y(ce)},onPaste:j,onCompositionStart:le,onCompositionEnd:V,tabIndex:x,attrs:ut(e,!0),maxLength:$?A:void 0})),!$&&J&&!M&&n.exports.createElement("span",{className:"".concat(o,"-selection-item"),title:R},J.label),P())};function Mn(t){return![C.ESC,C.SHIFT,C.BACKSPACE,C.TAB,C.WIN_KEY,C.ALT,C.META,C.WIN_KEY_RIGHT,C.CTRL,C.SEMICOLON,C.EQUALS,C.CAPS_LOCK,C.CONTEXT_MENU,C.F1,C.F2,C.F3,C.F4,C.F5,C.F6,C.F7,C.F8,C.F9,C.F10,C.F11,C.F12].includes(t)}var Pn=function(e,a){var o=n.exports.useRef(null),i=n.exports.useRef(!1),r=e.prefixCls,l=e.open,p=e.mode,c=e.showSearch,h=e.tokenWithEnter,S=e.autoClearSearchValue,u=e.onSearch,m=e.onSearchSubmit,s=e.onToggleOpen,x=e.onInputKeyDown,N=e.domRef;n.exports.useImperativeHandle(a,function(){return{focus:function(){o.current.focus()},blur:function(){o.current.blur()}}});var z=_t(0),O=oe(z,2),A=O[0],F=O[1],q=function(M){var R=M.which;(R===C.UP||R===C.DOWN)&&M.preventDefault(),x&&x(M),R===C.ENTER&&p==="tags"&&!i.current&&!l&&(m==null||m(M.target.value)),Mn(R)&&s(!0)},Y=function(){F(!0)},j=n.exports.useRef(null),le=function(M){u(M,!0,i.current)!==!1&&s(!0)},V=function(){i.current=!0},K=function(M){i.current=!1,p!=="combobox"&&le(M.target.value)},G=function(M){var R=M.target.value;if(h&&j.current&&/[\r\n]/.test(j.current)){var P=j.current.replace(/[\r\n]+$/,"").replace(/\r\n/g," ").replace(/[\r\n]/g," ");R=R.replace(P,j.current)}j.current=null,le(R)},U=function(M){var R=M.clipboardData,P=R.getData("text");j.current=P},X=function(M){var R=M.target;if(R!==o.current){var P=document.body.style.msTouchAction!==void 0;P?setTimeout(function(){o.current.focus()}):o.current.focus()}},$=function(M){var R=A();M.target!==o.current&&!R&&p!=="combobox"&&M.preventDefault(),(p!=="combobox"&&(!c||!R)||!l)&&(l&&S!==!1&&u("",!0,!1),s())},Z={inputRef:o,onInputKeyDown:q,onInputMouseDown:Y,onInputChange:G,onInputPaste:U,onInputCompositionStart:V,onInputCompositionEnd:K},J=p==="multiple"||p==="tags"?n.exports.createElement(Rn,ze({},e,Z)):n.exports.createElement(On,ze({},e,Z));return n.exports.createElement("div",{ref:N,className:"".concat(r,"-selector"),onClick:X,onMouseDown:$},J)},kt=n.exports.forwardRef(Pn);kt.displayName="Selector";var Nn=["prefixCls","disabled","visible","children","popupElement","containerWidth","animation","transitionName","dropdownStyle","dropdownClassName","direction","placement","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","getPopupContainer","empty","getTriggerDOMNode","onPopupVisibleChange","onPopupMouseEnter"],Vn=function(e){var a=e===!0?0:1;return{bottomLeft:{points:["tl","bl"],offset:[0,4],overflow:{adjustX:a,adjustY:1}},bottomRight:{points:["tr","br"],offset:[0,4],overflow:{adjustX:a,adjustY:1}},topLeft:{points:["bl","tl"],offset:[0,-4],overflow:{adjustX:a,adjustY:1}},topRight:{points:["br","tr"],offset:[0,-4],overflow:{adjustX:a,adjustY:1}}}},Tn=function(e,a){var o=e.prefixCls;e.disabled;var i=e.visible,r=e.children,l=e.popupElement,p=e.containerWidth,c=e.animation,h=e.transitionName,S=e.dropdownStyle,u=e.dropdownClassName,m=e.direction,s=m===void 0?"ltr":m,x=e.placement,N=e.dropdownMatchSelectWidth,z=e.dropdownRender,O=e.dropdownAlign,A=e.getPopupContainer,F=e.empty,q=e.getTriggerDOMNode,Y=e.onPopupVisibleChange,j=e.onPopupMouseEnter,le=Je(e,Nn),V="".concat(o,"-dropdown"),K=l;z&&(K=z(l));var G=n.exports.useMemo(function(){return Vn(N)},[N]),U=c?"".concat(V,"-").concat(c):h,X=n.exports.useRef(null);n.exports.useImperativeHandle(a,function(){return{getPopupElement:function(){return X.current}}});var $=Q({minWidth:p},S);return typeof N=="number"?$.width=N:N&&($.width=p),n.exports.createElement(gn,ze({},le,{showAction:Y?["click"]:[],hideAction:Y?["click"]:[],popupPlacement:x||(s==="rtl"?"bottomRight":"bottomLeft"),builtinPlacements:G,prefixCls:V,popupTransitionName:U,popup:n.exports.createElement("div",{ref:X,onMouseEnter:j},K),popupAlign:O,popupVisible:i,getPopupContainer:A,popupClassName:Ue(u,ne({},"".concat(V,"-empty"),F)),popupStyle:$,getTriggerDOMNode:q,onPopupVisibleChange:Y}),r)},Kt=n.exports.forwardRef(Tn);Kt.displayName="SelectTrigger";function Pt(t,e){var a=t.key,o;return"value"in t&&(o=t.value),a??(o!==void 0?o:"rc-index-key-".concat(e))}function $t(t,e){var a=t||{},o=a.label,i=a.value,r=a.options;return{label:o||(e?"children":"label"),value:i||"value",options:r||"options"}}function An(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=e.fieldNames,o=e.childrenAsData,i=[],r=$t(a,!1),l=r.label,p=r.value,c=r.options;function h(S,u){S.forEach(function(m){var s=m[l];if(u||!(c in m)){var x=m[p];i.push({key:Pt(m,i.length),groupOption:u,data:m,label:s,value:x})}else{var N=s;N===void 0&&o&&(N=m.label),i.push({key:Pt(m,i.length),group:!0,data:m,label:N}),h(m[c],!0)}})}return h(t,!1),i}function mt(t){var e=Q({},t);return"props"in e||Object.defineProperty(e,"props",{get:function(){return un(!1,"Return type is option instead of Option instance. Please read value directly instead of reading from `props`."),e}}),e}function _n(t,e){if(!e||!e.length)return null;var a=!1;function o(r,l){var p=on(l),c=p[0],h=p.slice(1);if(!c)return[r];var S=r.split(c);return a=a||S.length>1,S.reduce(function(u,m){return[].concat(Ee(u),Ee(o(m,h)))},[]).filter(function(u){return u})}var i=o(t,e);return a?i:null}var Fn=["id","prefixCls","className","showSearch","tagRender","direction","omitDomProps","displayValues","onDisplayValuesChange","emptyOptions","notFoundContent","onClear","mode","disabled","loading","getInputElement","getRawInputElement","open","defaultOpen","onDropdownVisibleChange","activeValue","onActiveValueChange","activeDescendantId","searchValue","autoClearSearchValue","onSearch","onSearchSplit","tokenSeparators","allowClear","showArrow","inputIcon","clearIcon","OptionList","animation","transitionName","dropdownStyle","dropdownClassName","dropdownMatchSelectWidth","dropdownRender","dropdownAlign","placement","getPopupContainer","showAction","onFocus","onBlur","onKeyUp","onKeyDown","onMouseDown"],Ln=["value","onChange","removeIcon","placeholder","autoFocus","maxTagCount","maxTagTextLength","maxTagPlaceholder","choiceTransitionName","onInputKeyDown","onPopupScroll","tabIndex"];function gt(t){return t==="tags"||t==="multiple"}var kn=n.exports.forwardRef(function(t,e){var a,o,i=t.id,r=t.prefixCls,l=t.className,p=t.showSearch,c=t.tagRender,h=t.direction,S=t.omitDomProps,u=t.displayValues,m=t.onDisplayValuesChange,s=t.emptyOptions,x=t.notFoundContent,N=x===void 0?"Not Found":x,z=t.onClear,O=t.mode,A=t.disabled,F=t.loading,q=t.getInputElement,Y=t.getRawInputElement,j=t.open,le=t.defaultOpen,V=t.onDropdownVisibleChange,K=t.activeValue,G=t.onActiveValueChange,U=t.activeDescendantId,X=t.searchValue,$=t.autoClearSearchValue,Z=t.onSearch,J=t.onSearchSplit,D=t.tokenSeparators,M=t.allowClear,R=t.showArrow,P=t.inputIcon,pe=t.clearIcon,ce=t.OptionList,Le=t.animation,ee=t.transitionName,I=t.dropdownStyle,f=t.dropdownClassName,E=t.dropdownMatchSelectWidth,L=t.dropdownRender,T=t.dropdownAlign,_=t.placement,ae=t.getPopupContainer,se=t.showAction,De=se===void 0?[]:se,B=t.onFocus,ue=t.onBlur,re=t.onKeyUp,me=t.onKeyDown,ge=t.onMouseDown,we=Je(t,Fn),de=gt(O),k=(p!==void 0?p:de)||O==="combobox",he=Q({},we);Ln.forEach(function(w){delete he[w]}),S==null||S.forEach(function(w){delete he[w]});var Se=n.exports.useState(!1),Te=oe(Se,2),Oe=Te[0],Qe=Te[1];n.exports.useEffect(function(){Qe(ln())},[]);var Ce=n.exports.useRef(null),Me=n.exports.useRef(null),ke=n.exports.useRef(null),Ae=n.exports.useRef(null),ye=n.exports.useRef(null),ct=Sn(),Xe=oe(ct,3),qe=Xe[0],Ke=Xe[1],st=Xe[2];n.exports.useImperativeHandle(e,function(){var w,g;return{focus:(w=Ae.current)===null||w===void 0?void 0:w.focus,blur:(g=Ae.current)===null||g===void 0?void 0:g.blur,scrollTo:function(be){var te;return(te=ye.current)===null||te===void 0?void 0:te.scrollTo(be)}}});var Ie=n.exports.useMemo(function(){var w;if(O!=="combobox")return X;var g=(w=u[0])===null||w===void 0?void 0:w.value;return typeof g=="string"||typeof g=="number"?String(g):""},[X,O,u]),ot=O==="combobox"&&typeof q=="function"&&q()||null,Pe=typeof Y=="function"&&Y(),at=cn(Me,Pe==null||(a=Pe.props)===null||a===void 0?void 0:a.ref),rt=pt(void 0,{defaultValue:le,value:j}),je=oe(rt,2),Ze=je[0],et=je[1],ie=Ze,it=!N&&s;(A||it&&ie&&O==="combobox")&&(ie=!1);var $e=it?!1:ie,d=n.exports.useCallback(function(w){var g=w!==void 0?w:!ie;A||(et(g),ie!==g&&(V==null||V(g)))},[A,ie,et,V]),b=n.exports.useMemo(function(){return(D||[]).some(function(w){return[`
`,`\r
`].includes(w)})},[D]),v=function(g,ve,be){var te=!0,xe=g;G==null||G(null);var Re=be?null:_n(g,D);return O!=="combobox"&&Re&&(xe="",J==null||J(Re),d(!1),te=!1),Z&&Ie!==xe&&Z(xe,{source:ve?"typing":"effect"}),te},y=function(g){!g||!g.trim()||Z(g,{source:"submit"})};n.exports.useEffect(function(){!ie&&!de&&O!=="combobox"&&v("",!1,!1)},[ie]),n.exports.useEffect(function(){Ze&&A&&et(!1),A&&Ke(!1)},[A]);var W=_t(),H=oe(W,2),_e=H[0],Ne=H[1],Ge=function(g){var ve=_e(),be=g.which;if(be===C.ENTER&&(O!=="combobox"&&g.preventDefault(),ie||d(!0)),Ne(!!Ie),be===C.BACKSPACE&&!ve&&de&&!Ie&&u.length){for(var te=Ee(u),xe=null,Re=te.length-1;Re>=0;Re-=1){var nt=te[Re];if(!nt.disabled){te.splice(Re,1),xe=nt;break}}xe&&m(te,{type:"remove",values:[xe]})}for(var Be=arguments.length,Ye=new Array(Be>1?Be-1:0),He=1;He<Be;He++)Ye[He-1]=arguments[He];if(ie&&ye.current){var Rt;(Rt=ye.current).onKeyDown.apply(Rt,[g].concat(Ye))}me==null||me.apply(void 0,[g].concat(Ye))},fe=function(g){for(var ve=arguments.length,be=new Array(ve>1?ve-1:0),te=1;te<ve;te++)be[te-1]=arguments[te];if(ie&&ye.current){var xe;(xe=ye.current).onKeyUp.apply(xe,[g].concat(be))}re==null||re.apply(void 0,[g].concat(be))},We=function(g){var ve=u.filter(function(be){return be!==g});m(ve,{type:"remove",values:[g]})},tt=n.exports.useRef(!1),dt=function(){Ke(!0),A||(B&&!tt.current&&B.apply(void 0,arguments),De.includes("focus")&&d(!0)),tt.current=!0},St=function(){Ke(!1,function(){tt.current=!1,d(!1)}),!A&&(Ie&&(O==="tags"?Z(Ie,{source:"submit"}):O==="multiple"&&Z("",{source:"blur"})),ue&&ue.apply(void 0,arguments))},Ve=[];n.exports.useEffect(function(){return function(){Ve.forEach(function(w){return clearTimeout(w)}),Ve.splice(0,Ve.length)}},[]);var Fe=function(g){var ve,be=g.target,te=(ve=ke.current)===null||ve===void 0?void 0:ve.getPopupElement();if(te&&te.contains(be)){var xe=setTimeout(function(){var Ye=Ve.indexOf(xe);if(Ye!==-1&&Ve.splice(Ye,1),st(),!Oe&&!te.contains(document.activeElement)){var He;(He=Ae.current)===null||He===void 0||He.focus()}});Ve.push(xe)}for(var Re=arguments.length,nt=new Array(Re>1?Re-1:0),Be=1;Be<Re;Be++)nt[Be-1]=arguments[Be];ge==null||ge.apply(void 0,[g].concat(nt))},Gt=n.exports.useState(null),xt=oe(Gt,2),wt=xt[0],Xt=xt[1],Yt=n.exports.useState({}),Jt=oe(Yt,2),Qt=Jt[1];function qt(){Qt({})}sn(function(){if($e){var w,g=Math.ceil((w=Ce.current)===null||w===void 0?void 0:w.offsetWidth);wt!==g&&!Number.isNaN(g)&&Xt(g)}},[$e]);var Ct;Pe&&(Ct=function(g){d(g)}),xn(function(){var w;return[Ce.current,(w=ke.current)===null||w===void 0?void 0:w.getPopupElement()]},$e,d,!!Pe);var Zt=n.exports.useMemo(function(){return Q(Q({},t),{},{notFoundContent:N,open:ie,triggerOpen:$e,id:i,showSearch:k,multiple:de,toggleOpen:d})},[t,N,$e,ie,i,k,de,d]),yt=R!==void 0?R:F||!de&&O!=="combobox",It;yt&&(It=n.exports.createElement(lt,{className:Ue("".concat(r,"-arrow"),ne({},"".concat(r,"-arrow-loading"),F)),customizeIcon:P,customizeIconProps:{loading:F,searchValue:Ie,open:ie,focused:qe,showSearch:k}}));var Et,en=function(){var g;z==null||z(),(g=Ae.current)===null||g===void 0||g.focus(),m([],{type:"clear",values:u}),v("",!1,!1)};!A&&M&&(u.length||Ie)&&!(O==="combobox"&&Ie==="")&&(Et=n.exports.createElement(lt,{className:"".concat(r,"-clear"),onMouseDown:en,customizeIcon:pe},"×"));var tn=n.exports.createElement(ce,{ref:ye}),nn=Ue(r,l,(o={},ne(o,"".concat(r,"-focused"),qe),ne(o,"".concat(r,"-multiple"),de),ne(o,"".concat(r,"-single"),!de),ne(o,"".concat(r,"-allow-clear"),M),ne(o,"".concat(r,"-show-arrow"),yt),ne(o,"".concat(r,"-disabled"),A),ne(o,"".concat(r,"-loading"),F),ne(o,"".concat(r,"-open"),ie),ne(o,"".concat(r,"-customize-input"),ot),ne(o,"".concat(r,"-show-search"),k),o)),Dt=n.exports.createElement(Kt,{ref:ke,disabled:A,prefixCls:r,visible:$e,popupElement:tn,containerWidth:wt,animation:Le,transitionName:ee,dropdownStyle:I,dropdownClassName:f,direction:h,dropdownMatchSelectWidth:E,dropdownRender:L,dropdownAlign:T,placement:_,getPopupContainer:ae,empty:s,getTriggerDOMNode:function(){return Me.current},onPopupVisibleChange:Ct,onPopupMouseEnter:qt},Pe?n.exports.cloneElement(Pe,{ref:at}):n.exports.createElement(kt,ze({},t,{domRef:Me,prefixCls:r,inputElement:ot,ref:Ae,id:i,showSearch:k,autoClearSearchValue:$,mode:O,activeDescendantId:U,tagRender:c,values:u,open:ie,onToggleOpen:d,activeValue:K,searchValue:Ie,onSearch:v,onSearchSubmit:y,onRemove:We,tokenWithEnter:b}))),ft;return Pe?ft=Dt:ft=n.exports.createElement("div",ze({className:nn},he,{ref:Ce,onMouseDown:Fe,onKeyDown:Ge,onKeyUp:fe,onFocus:dt,onBlur:St}),qe&&!ie&&n.exports.createElement("span",{style:{width:0,height:0,position:"absolute",overflow:"hidden",opacity:0},"aria-live":"polite"},"".concat(u.map(function(w){var g=w.label,ve=w.value;return["number","string"].includes(ht(g))?g:ve}).join(", "))),Dt,It,Et),n.exports.createElement(At.Provider,{value:Zt},ft)});const Kn=function(t,e){var a=n.exports.useRef({values:new Map,options:new Map}),o=n.exports.useMemo(function(){var r=a.current,l=r.values,p=r.options,c=t.map(function(u){if(u.label===void 0){var m;return Q(Q({},u),{},{label:(m=l.get(u.value))===null||m===void 0?void 0:m.label})}return u}),h=new Map,S=new Map;return c.forEach(function(u){h.set(u.value,u),S.set(u.value,e.get(u.value)||p.get(u.value))}),a.current.values=h,a.current.options=S,c},[t,e]),i=n.exports.useCallback(function(r){return e.get(r)||a.current.options.get(r)},[e]);return[o,i]};function vt(t,e){return Ft(t).join("").toUpperCase().includes(e)}const $n=function(t,e,a,o,i){return n.exports.useMemo(function(){if(!a||o===!1)return t;var r=e.options,l=e.label,p=e.value,c=[],h=typeof o=="function",S=a.toUpperCase(),u=h?o:function(s,x){return i?vt(x[i],S):x[r]?vt(x[l!=="children"?l:"label"],S):vt(x[p],S)},m=h?function(s){return mt(s)}:function(s){return s};return t.forEach(function(s){if(s[r]){var x=u(a,m(s));if(x)c.push(s);else{var N=s[r].filter(function(z){return u(a,m(z))});N.length&&c.push(Q(Q({},s),{},ne({},r,N)))}return}u(a,m(s))&&c.push(s)}),c},[t,o,i,a,e])};var Nt=0,Wn=dn();function Bn(){var t;return Wn?(t=Nt,Nt+=1):t="TEST_OR_SSR",t}function Hn(t){var e=n.exports.useState(),a=oe(e,2),o=a[0],i=a[1];return n.exports.useEffect(function(){i("rc_select_".concat(Bn()))},[]),t||o}var Un=["children","value"],zn=["children"];function jn(t){var e=t,a=e.key,o=e.props,i=o.children,r=o.value,l=Je(o,Un);return Q({key:a,value:r!==void 0?r:a,children:i},l)}function Wt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;return fn(t).map(function(a,o){if(!n.exports.isValidElement(a)||!a.type)return null;var i=a,r=i.type.isSelectOptGroup,l=i.key,p=i.props,c=p.children,h=Je(p,zn);return e||!r?jn(a):Q(Q({key:"__RC_SELECT_GRP__".concat(l===null?o:l,"__"),label:l},h),{},{options:Wt(c)})}).filter(function(a){return a})}function Gn(t,e,a,o,i){return n.exports.useMemo(function(){var r=t,l=!t;l&&(r=Wt(e));var p=new Map,c=new Map,h=function(m,s,x){x&&typeof x=="string"&&m.set(s[x],s)};function S(u){for(var m=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1,s=0;s<u.length;s+=1){var x=u[s];!x[a.options]||m?(p.set(x[a.value],x),h(c,x,a.label),h(c,x,o),h(c,x,i)):S(x[a.options],!0)}}return S(r),{options:r,valueOptions:p,labelOptions:c}},[t,e,a,o,i])}function Vt(t){var e=n.exports.useRef();e.current=t;var a=n.exports.useCallback(function(){return e.current.apply(e,arguments)},[]);return a}var Bt=function(){return null};Bt.isSelectOptGroup=!0;var Ht=function(){return null};Ht.isSelectOption=!0;function Xn(){return/(mac\sos|macintosh)/i.test(navigator.appVersion)}var Ut=n.exports.createContext(null),Yn=["disabled","title","children","style","className"];function Tt(t){return typeof t=="string"||typeof t=="number"}var Jn=function(e,a){var o=bn(),i=o.prefixCls,r=o.id,l=o.open,p=o.multiple,c=o.mode,h=o.searchValue,S=o.toggleOpen,u=o.notFoundContent,m=o.onPopupScroll,s=n.exports.useContext(Ut),x=s.flattenOptions,N=s.onActiveValue,z=s.defaultActiveFirstOption,O=s.onSelect,A=s.menuItemSelectedIcon,F=s.rawValues,q=s.fieldNames,Y=s.virtual,j=s.listHeight,le=s.listItemHeight,V="".concat(i,"-item"),K=vn(function(){return x},[l,x],function(I,f){return f[0]&&I[1]!==f[1]}),G=n.exports.useRef(null),U=function(f){f.preventDefault()},X=function(f){G.current&&G.current.scrollTo(typeof f=="number"?{index:f}:f)},$=function(f){for(var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1,L=K.length,T=0;T<L;T+=1){var _=(f+T*E+L)%L,ae=K[_],se=ae.group,De=ae.data;if(!se&&!De.disabled)return _}return-1},Z=n.exports.useState(function(){return $(0)}),J=oe(Z,2),D=J[0],M=J[1],R=function(f){var E=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;M(f);var L={source:E?"keyboard":"mouse"},T=K[f];if(!T){N(null,-1,L);return}N(T.value,f,L)};n.exports.useEffect(function(){R(z!==!1?$(0):-1)},[K.length,h]);var P=n.exports.useCallback(function(I){return F.has(I)&&c!=="combobox"},[c,Ee(F).toString(),F.size]);n.exports.useEffect(function(){var I=setTimeout(function(){if(!p&&l&&F.size===1){var E=Array.from(F)[0],L=K.findIndex(function(T){var _=T.data;return _.value===E});L!==-1&&(R(L),X(L))}});if(l){var f;(f=G.current)===null||f===void 0||f.scrollTo(void 0)}return function(){return clearTimeout(I)}},[l,h]);var pe=function(f){f!==void 0&&O(f,{selected:!F.has(f)}),p||S(!1)};if(n.exports.useImperativeHandle(a,function(){return{onKeyDown:function(f){var E=f.which,L=f.ctrlKey;switch(E){case C.N:case C.P:case C.UP:case C.DOWN:{var T=0;if(E===C.UP?T=-1:E===C.DOWN?T=1:Xn()&&L&&(E===C.N?T=1:E===C.P&&(T=-1)),T!==0){var _=$(D+T,T);X(_),R(_,!0)}break}case C.ENTER:{var ae=K[D];ae&&!ae.data.disabled?pe(ae.value):pe(void 0),l&&f.preventDefault();break}case C.ESC:S(!1),l&&f.stopPropagation()}},onKeyUp:function(){},scrollTo:function(f){X(f)}}}),K.length===0)return n.exports.createElement("div",{role:"listbox",id:"".concat(r,"_list"),className:"".concat(V,"-empty"),onMouseDown:U},u);var ce=Object.keys(q).map(function(I){return q[I]}),Le=function(f){return f.label},ee=function(f){var E=K[f];if(!E)return null;var L=E.data||{},T=L.value,_=E.group,ae=ut(L,!0),se=Le(E);return E?n.exports.createElement("div",ze({"aria-label":typeof se=="string"&&!_?se:null},ae,{key:f,role:_?"presentation":"option",id:"".concat(r,"_list_").concat(f),"aria-selected":P(T)}),T):null};return n.exports.createElement(n.exports.Fragment,null,n.exports.createElement("div",{role:"listbox",id:"".concat(r,"_list"),style:{height:0,width:0,overflow:"hidden"}},ee(D-1),ee(D),ee(D+1)),n.exports.createElement(hn,{itemKey:"key",ref:G,data:K,height:j,itemHeight:le,fullHeight:!1,onMouseDown:U,onScroll:m,virtual:Y},function(I,f){var E,L=I.group,T=I.groupOption,_=I.data,ae=I.label,se=I.value,De=_.key;if(L){var B,ue=(B=_.title)!==null&&B!==void 0?B:Tt(ae)?ae.toString():void 0;return n.exports.createElement("div",{className:Ue(V,"".concat(V,"-group")),title:ue},ae!==void 0?ae:De)}var re=_.disabled,me=_.title;_.children;var ge=_.style,we=_.className,de=Je(_,Yn),k=pn(de,ce),he=P(se),Se="".concat(V,"-option"),Te=Ue(V,Se,we,(E={},ne(E,"".concat(Se,"-grouped"),T),ne(E,"".concat(Se,"-active"),D===f&&!re),ne(E,"".concat(Se,"-disabled"),re),ne(E,"".concat(Se,"-selected"),he),E)),Oe=Le(I),Qe=!A||typeof A=="function"||he,Ce=typeof Oe=="number"?Oe:Oe||se,Me=Tt(Ce)?Ce.toString():void 0;return me!==void 0&&(Me=me),n.exports.createElement("div",ze({},ut(k),{"aria-selected":he,className:Te,title:Me,onMouseMove:function(){D===f||re||R(f)},onClick:function(){re||pe(se)},style:ge}),n.exports.createElement("div",{className:"".concat(Se,"-content")},Ce),n.exports.isValidElement(A)||he,Qe&&n.exports.createElement(lt,{className:"".concat(V,"-option-state"),customizeIcon:A,customizeIconProps:{isSelected:he}},he?"✓":null))}))},zt=n.exports.forwardRef(Jn);zt.displayName="OptionList";var Qn=["id","mode","prefixCls","backfill","fieldNames","inputValue","searchValue","onSearch","autoClearSearchValue","onSelect","onDeselect","dropdownMatchSelectWidth","filterOption","filterSort","optionFilterProp","optionLabelProp","options","children","defaultActiveFirstOption","menuItemSelectedIcon","virtual","listHeight","listItemHeight","value","defaultValue","labelInValue","onChange"],qn=["inputValue"];function Zn(t){return!t||ht(t)!=="object"}var eo=n.exports.forwardRef(function(t,e){var a=t.id,o=t.mode,i=t.prefixCls,r=i===void 0?"rc-select":i,l=t.backfill,p=t.fieldNames,c=t.inputValue,h=t.searchValue,S=t.onSearch,u=t.autoClearSearchValue,m=u===void 0?!0:u,s=t.onSelect,x=t.onDeselect,N=t.dropdownMatchSelectWidth,z=N===void 0?!0:N,O=t.filterOption,A=t.filterSort,F=t.optionFilterProp,q=t.optionLabelProp,Y=t.options,j=t.children,le=t.defaultActiveFirstOption,V=t.menuItemSelectedIcon,K=t.virtual,G=t.listHeight,U=G===void 0?200:G,X=t.listItemHeight,$=X===void 0?20:X,Z=t.value,J=t.defaultValue,D=t.labelInValue,M=t.onChange,R=Je(t,Qn),P=Hn(a),pe=gt(o),ce=!!(!Y&&j),Le=n.exports.useMemo(function(){return O===void 0&&o==="combobox"?!1:O},[O,o]),ee=n.exports.useMemo(function(){return $t(p,ce)},[JSON.stringify(p),ce]),I=pt("",{value:h!==void 0?h:c,postState:function(b){return b||""}}),f=oe(I,2),E=f[0],L=f[1],T=Gn(Y,j,ee,F,q),_=T.valueOptions,ae=T.labelOptions,se=T.options,De=n.exports.useCallback(function(d){var b=Ft(d);return b.map(function(v){var y,W,H,_e,Ne;if(Zn(v))y=v;else{var Ge;H=v.key,W=v.label,y=(Ge=v.value)!==null&&Ge!==void 0?Ge:H}var fe=_.get(y);if(fe){var We;W===void 0&&(W=fe==null?void 0:fe[q||ee.label]),H===void 0&&(H=(We=fe==null?void 0:fe.key)!==null&&We!==void 0?We:y),_e=fe==null?void 0:fe.disabled,Ne=fe==null?void 0:fe.title}return{label:W,value:y,key:H,disabled:_e,title:Ne}})},[ee,q,_]),B=pt(J,{value:Z}),ue=oe(B,2),re=ue[0],me=ue[1],ge=n.exports.useMemo(function(){var d,b=De(re);return o==="combobox"&&!((d=b[0])!==null&&d!==void 0&&d.value)?[]:b},[re,De,o]),we=Kn(ge,_),de=oe(we,2),k=de[0],he=de[1],Se=n.exports.useMemo(function(){if(!o&&k.length===1){var d=k[0];if(d.value===null&&(d.label===null||d.label===void 0))return[]}return k.map(function(b){var v;return Q(Q({},b),{},{label:(v=b.label)!==null&&v!==void 0?v:b.value})})},[o,k]),Te=n.exports.useMemo(function(){return new Set(k.map(function(d){return d.value}))},[k]);n.exports.useEffect(function(){if(o==="combobox"){var d,b=(d=k[0])===null||d===void 0?void 0:d.value;L(In(b)?String(b):"")}},[k]);var Oe=Vt(function(d,b){var v,y=b??d;return v={},ne(v,ee.value,d),ne(v,ee.label,y),v}),Qe=n.exports.useMemo(function(){if(o!=="tags")return se;var d=Ee(se),b=function(y){return _.has(y)};return Ee(k).sort(function(v,y){return v.value<y.value?-1:1}).forEach(function(v){var y=v.value;b(y)||d.push(Oe(y,v.label))}),d},[Oe,se,_,k,o]),Ce=$n(Qe,ee,E,Le,F),Me=n.exports.useMemo(function(){return o!=="tags"||!E||Ce.some(function(d){return d[F||"value"]===E})?Ce:[Oe(E)].concat(Ee(Ce))},[Oe,F,o,Ce,E]),ke=n.exports.useMemo(function(){return A?Ee(Me).sort(function(d,b){return A(d,b)}):Me},[Me,A]),Ae=n.exports.useMemo(function(){return An(ke,{fieldNames:ee,childrenAsData:ce})},[ke,ee,ce]),ye=function(b){var v=De(b);if(me(v),M&&(v.length!==k.length||v.some(function(H,_e){var Ne;return((Ne=k[_e])===null||Ne===void 0?void 0:Ne.value)!==(H==null?void 0:H.value)}))){var y=D?v:v.map(function(H){return H.value}),W=v.map(function(H){return mt(he(H.value))});M(pe?y:y[0],pe?W:W[0])}},ct=n.exports.useState(null),Xe=oe(ct,2),qe=Xe[0],Ke=Xe[1],st=n.exports.useState(0),Ie=oe(st,2),ot=Ie[0],Pe=Ie[1],at=le!==void 0?le:o!=="combobox",rt=n.exports.useCallback(function(d,b){var v=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},y=v.source,W=y===void 0?"keyboard":y;Pe(b),l&&o==="combobox"&&d!==null&&W==="keyboard"&&Ke(String(d))},[l,o]),je=function(b,v,y){var W=function(){var Ve,Fe=he(b);return[D?{label:Fe==null?void 0:Fe[ee.label],value:b,key:(Ve=Fe==null?void 0:Fe.key)!==null&&Ve!==void 0?Ve:b}:b,mt(Fe)]};if(v&&s){var H=W(),_e=oe(H,2),Ne=_e[0],Ge=_e[1];s(Ne,Ge)}else if(!v&&x&&y!=="clear"){var fe=W(),We=oe(fe,2),tt=We[0],dt=We[1];x(tt,dt)}},Ze=Vt(function(d,b){var v,y=pe?b.selected:!0;y?v=pe?[].concat(Ee(k),[d]):[d]:v=k.filter(function(W){return W.value!==d}),ye(v),je(d,y),o==="combobox"?Ke(""):(!gt||m)&&(L(""),Ke(""))}),et=function(b,v){ye(b);var y=v.type,W=v.values;(y==="remove"||y==="clear")&&W.forEach(function(H){je(H.value,!1,y)})},ie=function(b,v){if(L(b),Ke(null),v.source==="submit"){var y=(b||"").trim();if(y){var W=Array.from(new Set([].concat(Ee(Te),[y])));ye(W),je(y,!0),L("")}return}v.source!=="blur"&&(o==="combobox"&&ye(b),S==null||S(b))},it=function(b){var v=b;o!=="tags"&&(v=b.map(function(W){var H=ae.get(W);return H==null?void 0:H.value}).filter(function(W){return W!==void 0}));var y=Array.from(new Set([].concat(Ee(Te),Ee(v))));ye(y),y.forEach(function(W){je(W,!0)})},$e=n.exports.useMemo(function(){var d=K!==!1&&z!==!1;return Q(Q({},T),{},{flattenOptions:Ae,onActiveValue:rt,defaultActiveFirstOption:at,onSelect:Ze,menuItemSelectedIcon:V,rawValues:Te,fieldNames:ee,virtual:d,listHeight:U,listItemHeight:$,childrenAsData:ce})},[T,Ae,rt,at,Ze,V,Te,ee,K,z,U,$,ce]);return n.exports.createElement(Ut.Provider,{value:$e},n.exports.createElement(kn,ze({},R,{id:P,prefixCls:r,ref:e,omitDomProps:qn,mode:o,displayValues:Se,onDisplayValuesChange:et,searchValue:E,onSearch:ie,autoClearSearchValue:m,onSearchSplit:it,dropdownMatchSelectWidth:z,OptionList:zt,emptyOptions:!Ae.length,activeValue:qe,activeDescendantId:"".concat(P,"_list_").concat(ot)})))}),jt=eo;jt.Option=Ht;jt.OptGroup=Bt;export{kn as B,Ht as O,jt as T,Bt as a,Hn as b,bn as u};