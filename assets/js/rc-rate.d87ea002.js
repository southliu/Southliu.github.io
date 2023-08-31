import{n as He,c as _,b as ee,g as Ie}from"./@babel_runtime.c8088fcd.js";import{c as ne}from"./classnames.82ff248b.js";import{N as V,L as ae,M as Se}from"./rc-util.644b3d3a.js";import{e as i,r as xe}from"./react.76efb1e3.js";function _e(e,l){var r=e.disabled,n=e.prefixCls,c=e.character,g=e.characterRender,f=e.index,D=e.count,v=e.value,h=e.allowHalf,R=e.focused,m=e.onHover,H=e.onClick,E=function(C){m(C,f)},k=function(C){H(C,f)},F=function(C){C.keyCode===V.ENTER&&H(C,f)},b=f+1,o=new Set([n]);v===0&&f===0&&R?o.add("".concat(n,"-focused")):h&&v+.5>=b&&v<b?(o.add("".concat(n,"-half")),o.add("".concat(n,"-active")),R&&o.add("".concat(n,"-focused"))):(b<=v?o.add("".concat(n,"-full")):o.add("".concat(n,"-zero")),b===v&&R&&o.add("".concat(n,"-focused")));var I=typeof c=="function"?c(e):c,w=i.createElement("li",{className:ne(Array.from(o)),ref:l},i.createElement("div",{onClick:r?null:k,onKeyDown:r?null:F,onMouseMove:r?null:E,role:"radio","aria-checked":v>f?"true":"false","aria-posinset":f+1,"aria-setsize":D,tabIndex:r?-1:0},i.createElement("div",{className:"".concat(n,"-first")},I),i.createElement("div",{className:"".concat(n,"-second")},I)));return g&&(w=g(w,e)),w}const Ve=i.forwardRef(_e);function ke(){var e=xe.useRef({});function l(n){return e.current[n]}function r(n){return function(c){e.current[n]=c}}return[l,r]}function De(e){var l=e.pageXOffset,r="scrollLeft";if(typeof l!="number"){var n=e.document;l=n.documentElement[r],typeof l!="number"&&(l=n.body[r])}return l}function Ee(e){var l,r,n=e.ownerDocument,c=n.body,g=n&&n.documentElement,f=e.getBoundingClientRect();return l=f.left,r=f.top,l-=g.clientLeft||c.clientLeft||0,r-=g.clientTop||c.clientTop||0,{left:l,top:r}}function Fe(e){var l=Ee(e),r=e.ownerDocument,n=r.defaultView||r.parentWindow;return l.left+=De(n),l.left}var Le=["prefixCls","className","defaultValue","value","count","allowHalf","allowClear","character","characterRender","disabled","direction","tabIndex","autoFocus","onHoverChange","onChange","onFocus","onBlur","onKeyDown","onMouseLeave"];function Me(e,l){var r,n=e.prefixCls,c=n===void 0?"rc-rate":n,g=e.className,f=e.defaultValue,D=e.value,v=e.count,h=v===void 0?5:v,R=e.allowHalf,m=R===void 0?!1:R,H=e.allowClear,E=H===void 0?!0:H,k=e.character,F=k===void 0?"★":k,b=e.characterRender,o=e.disabled,I=e.direction,w=I===void 0?"ltr":I,S=e.tabIndex,C=S===void 0?0:S,te=e.autoFocus,y=e.onHoverChange,L=e.onChange,M=e.onFocus,N=e.onBlur,K=e.onKeyDown,$=e.onMouseLeave,re=He(e,Le),oe=ke(),P=_(oe,2),le=P[0],ue=P[1],T=i.useRef(null),W=function(){if(!o){var a;(a=T.current)===null||a===void 0||a.focus()}};i.useImperativeHandle(l,function(){return{focus:W,blur:function(){if(!o){var a;(a=T.current)===null||a===void 0||a.blur()}}}});var ce=ae(f||0,{value:D}),X=_(ce,2),B=X[0],ie=X[1],fe=ae(null),z=_(fe,2),de=z[0],A=z[1],G=function(a,s){var u=w==="rtl",t=a+1;if(m){var Y=le(a),Z=Fe(Y),p=Y.clientWidth;(u&&s-Z>p/2||!u&&s-Z<p/2)&&(t-=.5)}return t},x=function(a){ie(a),L==null||L(a)},se=i.useState(!1),O=_(se,2),ve=O[0],j=O[1],me=function(){j(!0),M==null||M()},Ce=function(){j(!1),N==null||N()},ge=i.useState(null),q=_(ge,2),J=q[0],Q=q[1],we=function(a,s){var u=G(s,a.pageX);u!==de&&(Q(u),A(null)),y==null||y(u)},U=function(a){o||(Q(null),A(null),y==null||y(void 0)),a&&($==null||$(a))},he=function(a,s){var u=G(s,a.pageX),t=!1;E&&(t=u===B),U(),x(t?0:u),A(t?u:null)},Re=function(a){var s=a.keyCode,u=w==="rtl",t=B;s===V.RIGHT&&t<h&&!u?(m?t+=.5:t+=1,x(t),a.preventDefault()):s===V.LEFT&&t>0&&!u||s===V.RIGHT&&t>0&&u?(m?t-=.5:t-=1,x(t),a.preventDefault()):s===V.LEFT&&t<h&&u&&(m?t+=.5:t+=1,x(t),a.preventDefault()),K==null||K(a)};i.useEffect(function(){te&&!o&&W()},[]);var be=new Array(h).fill(0).map(function(d,a){return i.createElement(Ve,{ref:ue(a),index:a,count:h,disabled:o,prefixCls:"".concat(c,"-star"),allowHalf:m,value:J===null?B:J,onClick:he,onHover:we,key:d||a,character:F,characterRender:b,focused:ve})}),ye=ne(c,g,(r={},ee(r,"".concat(c,"-disabled"),o),ee(r,"".concat(c,"-rtl"),w==="rtl"),r));return i.createElement("ul",Ie({className:ye,onMouseLeave:U,tabIndex:o?-1:C,onFocus:o?null:me,onBlur:o?null:Ce,onKeyDown:o?null:Re,ref:T,role:"radiogroup"},Se(re,{aria:!0,data:!0,attr:!0})),be)}const Be=i.forwardRef(Me);export{Be as R};