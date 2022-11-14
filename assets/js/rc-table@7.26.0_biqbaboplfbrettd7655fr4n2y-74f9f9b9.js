import{c as U,_ as je,b as Ne,a as C,d as $,e as te}from"./@babel_runtime@7.19.0-130d17ca.js";import{r as a}from"./react@18.2.0-9cdefec6.js";import{h as Pt,a as Un,s as Bt,t as Ot,n as De,g as zn,G as Wn,c as zt,C as Fn,p as Wt,H as Kn,I as Ft,w as Kt,v as At}from"./rc-util@5.24.4_biqbaboplfbrettd7655fr4n2y-ae37cd3a.js";import{c as ue}from"./classnames@2.3.2-d75d9a59.js";import{s as cn}from"./shallowequal@1.1.0-be60d069.js";import{R as un}from"./rc-resize-observer@1.2.0_biqbaboplfbrettd7655fr4n2y-463eae24.js";import{j as m,b as ce,F as Ue}from"./@ant-design_icons@4.7.0_biqbaboplfbrettd7655fr4n2y-770bcbdb.js";function Dt(e){return null}function Vt(e){return null}var Ut="RC_TABLE_KEY";function jn(e){return e==null?[]:Array.isArray(e)?e:[e]}function Xn(e,n){if(!n&&typeof n!="number")return e;for(var t=jn(n),r=e,o=0;o<t.length;o+=1){if(!r)return null;var i=t[o];r=r[i]}return r}function Xe(e){var n=[],t={};return e.forEach(function(r){for(var o=r||{},i=o.key,s=o.dataIndex,c=i||jn(s).join("-")||Ut;t[c];)c="".concat(c,"_next");t[c]=!0,n.push(c)}),n}function an(e){return e!=null}var Yn=a.createContext(!1);function jt(){var e=a.createContext(null),n=function(r){var o=r.value,i=r.children,s=a.useRef(o);s.current=o;var c=a.useState(function(){return{getValue:function(){return s.current},listeners:new Set}}),l=U(c,1),d=l[0];return Un(function(){d.listeners.forEach(function(f){f(o)})},[o]),m(e.Provider,{value:d,children:i})};return{Context:e,Provider:n}}function Xt(e,n){var t=Pt(n),r=a.useContext(e==null?void 0:e.Context),o=r||{},i=o.listeners,s=o.getValue,c=a.useState(function(){return t(r?s():null)}),l=U(c,2),d=l[0],f=l[1];return Un(function(){if(!r)return;function u(p){f(function(v){var x=t(p);return cn(v,x)?v:x})}return i.add(u),function(){i.delete(u)}},[r]),d}var Gn=jt(),Ye=a.createContext(null),_n=a.createContext({renderWithProps:!1}),Yt=["colSpan","rowSpan","style","className"];function Gt(e,n,t,r){var o=e+n-1;return e<=r&&o>=t}function _t(e){return e&&je(e)==="object"&&!Array.isArray(e)&&!a.isValidElement(e)}function qt(e){return typeof e=="string"?!0:Bt(e)}var Jt=function(n){var t=n.ellipsis,r=n.rowType,o=n.children,i,s=t===!0?{showTitle:!0}:t;return s&&(s.showTitle||r==="header")&&(typeof o=="string"||typeof o=="number"?i=o.toString():a.isValidElement(o)&&typeof o.props.children=="string"&&(i=o.props.children)),i};function Qt(e,n){var t,r,o,i=e.prefixCls,s=e.className,c=e.record,l=e.index,d=e.renderIndex,f=e.dataIndex,u=e.render,p=e.children,v=e.component,x=v===void 0?"td":v,b=e.colSpan,y=e.rowSpan,E=e.fixLeft,k=e.fixRight,z=e.firstFixLeft,V=e.lastFixLeft,T=e.firstFixRight,M=e.lastFixRight,W=e.appendNode,P=e.additionalProps,B=P===void 0?{}:P,F=e.ellipsis,K=e.align,w=e.rowType,H=e.isSticky,S=e.hovering,O=e.onHover,R="".concat(i,"-cell"),N=a.useContext(_n),g=a.useContext(Yn),j=a.useContext(Ye),_=j.allColumnsFixedLeft,ae=a.useMemo(function(){if(an(p))return[p];var ve=Xn(c,f),I=ve,Y=void 0;if(u){var me=u(ve,c,d);_t(me)?(I=me.children,Y=me.props,N.renderWithProps=!0):I=me}return[I,Y]},[N.renderWithProps?Math.random():0,p,f,N,c,u,d]),Q=U(ae,2),fe=Q[0],G=Q[1],re=fe;je(re)==="object"&&!Array.isArray(re)&&!a.isValidElement(re)&&(re=null),F&&(V||T)&&(re=m("span",{className:"".concat(R,"-content"),children:re}));var Z=G||{},xe=Z.colSpan,Ce=Z.rowSpan,Re=Z.style,Me=Z.className,be=Ne(Z,Yt),X=(t=xe!==void 0?xe:b)!==null&&t!==void 0?t:1,q=(r=Ce!==void 0?Ce:y)!==null&&r!==void 0?r:1;if(X===0||q===0)return null;var A={},J=typeof E=="number"&&g,le=typeof k=="number"&&g;J&&(A.position="sticky",A.left=E),le&&(A.position="sticky",A.right=k);var ee={};K&&(ee.textAlign=K);var Se=function(I){var Y;c&&O(l,l+q-1),B==null||(Y=B.onMouseEnter)===null||Y===void 0||Y.call(B,I)},ge=function(I){var Y;c&&O(-1,-1),B==null||(Y=B.onMouseLeave)===null||Y===void 0||Y.call(B,I)},Ee=Jt({rowType:w,ellipsis:F,children:fe}),Pe=C(C(C({title:Ee},be),B),{},{colSpan:X!==1?X:null,rowSpan:q!==1?q:null,className:ue(R,s,(o={},$(o,"".concat(R,"-fix-left"),J&&g),$(o,"".concat(R,"-fix-left-first"),z&&g),$(o,"".concat(R,"-fix-left-last"),V&&g),$(o,"".concat(R,"-fix-left-all"),V&&_&&g),$(o,"".concat(R,"-fix-right"),le&&g),$(o,"".concat(R,"-fix-right-first"),T&&g),$(o,"".concat(R,"-fix-right-last"),M&&g),$(o,"".concat(R,"-ellipsis"),F),$(o,"".concat(R,"-with-append"),W),$(o,"".concat(R,"-fix-sticky"),(J||le)&&H&&g),$(o,"".concat(R,"-row-hover"),!G&&S),o),B.className,Me),style:C(C(C(C({},B.style),ee),A),Re),onMouseEnter:Se,onMouseLeave:ge,ref:qt(x)?n:null});return ce(x,{...Pe,children:[W,re]})}var qn=a.forwardRef(Qt);qn.displayName="Cell";var Zt=["expanded","className","hovering"],er=a.memo(qn,function(e,n){return n.shouldCellUpdate?Zt.every(function(t){return e[t]===n[t]})&&!n.shouldCellUpdate(n.record,e.record):cn(e,n)}),$e=a.forwardRef(function(e,n){var t=e.index,r=e.additionalProps,o=r===void 0?{}:r,i=e.colSpan,s=e.rowSpan,c=o.colSpan,l=o.rowSpan,d=i!=null?i:c,f=s!=null?s:l,u=Xt(Gn,function(x){var b=Gt(t,f||1,x==null?void 0:x.startRow,x==null?void 0:x.endRow);return{onHover:x==null?void 0:x.onHover,hovering:b}}),p=u.onHover,v=u.hovering;return m(er,{...e,colSpan:d,rowSpan:f,hovering:v,ref:n,onHover:p})});$e.displayName="WrappedCell";var de=a.createContext(null);function dn(e,n,t,r,o){var i=t[e]||{},s=t[n]||{},c,l;i.fixed==="left"?c=r.left[e]:s.fixed==="right"&&(l=r.right[n]);var d=!1,f=!1,u=!1,p=!1,v=t[n+1],x=t[e-1];if(o==="rtl"){if(c!==void 0){var b=x&&x.fixed==="left";p=!b}else if(l!==void 0){var y=v&&v.fixed==="right";u=!y}}else if(c!==void 0){var E=v&&v.fixed==="left";d=!E}else if(l!==void 0){var k=x&&x.fixed==="right";f=!k}return{fixLeft:c,fixRight:l,lastFixLeft:d,firstFixRight:f,lastFixRight:u,firstFixLeft:p,isSticky:r.isSticky}}function Jn(e){var n=e.cells,t=e.stickyOffsets,r=e.flattenColumns,o=e.rowComponent,i=e.cellComponent,s=e.onHeaderRow,c=e.index,l=a.useContext(de),d=l.prefixCls,f=l.direction,u;s&&(u=s(n.map(function(v){return v.column}),c));var p=Xe(n.map(function(v){return v.column}));return m(o,{...u,children:n.map(function(v,x){var b=v.column,y=dn(v.colStart,v.colEnd,r,t,f),E;return b&&b.onHeaderCell&&(E=v.column.onHeaderCell(b)),a.createElement($e,{...v,ellipsis:b.ellipsis,align:b.align,component:i,prefixCls:d,key:p[x],...y,additionalProps:E,rowType:"header"})})})}Jn.displayName="HeaderRow";function nr(e){var n=[];function t(s,c){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0;n[l]=n[l]||[];var d=c,f=s.filter(Boolean).map(function(u){var p={key:u.key,className:u.className||"",children:u.title,column:u,colStart:d},v=1,x=u.children;return x&&x.length>0&&(v=t(x,d,l+1).reduce(function(b,y){return b+y},0),p.hasSubColumns=!0),"colSpan"in u&&(v=u.colSpan),"rowSpan"in u&&(p.rowSpan=u.rowSpan),p.colSpan=v,p.colEnd=p.colStart+v-1,n[l].push(p),d+=v,v});return f}t(e,0);for(var r=n.length,o=function(c){n[c].forEach(function(l){!("rowSpan"in l)&&!l.hasSubColumns&&(l.rowSpan=r-c)})},i=0;i<r;i+=1)o(i);return n}function An(e){var n=e.stickyOffsets,t=e.columns,r=e.flattenColumns,o=e.onHeaderRow,i=a.useContext(de),s=i.prefixCls,c=i.getComponent,l=a.useMemo(function(){return nr(t)},[t]),d=c(["header","wrapper"],"thead"),f=c(["header","row"],"tr"),u=c(["header","cell"],"th");return m(d,{className:"".concat(s,"-thead"),children:l.map(function(p,v){var x=m(Jn,{flattenColumns:r,cells:p,stickyOffsets:n,rowComponent:f,cellComponent:u,onHeaderRow:o,index:v},v);return x})})}var Qn=a.createContext(null);function Zn(e){var n=e.prefixCls,t=e.children,r=e.component,o=e.cellComponent,i=e.className,s=e.expanded,c=e.colSpan,l=e.isEmpty,d=a.useContext(de),f=d.scrollbarSize,u=a.useContext(Qn),p=u.fixHeader,v=u.fixColumn,x=u.componentWidth,b=u.horizonScroll;return a.useMemo(function(){var y=t;return(l?b:v)&&(y=m("div",{style:{width:x-(p?f:0),position:"sticky",left:0,overflow:"hidden"},className:"".concat(n,"-expanded-row-fixed"),children:x!==0&&y})),m(r,{className:i,style:{display:s?null:"none"},children:m($e,{component:o,prefixCls:n,colSpan:c,children:y})})},[t,r,i,s,c,l,f,x,v,p,b])}var et=a.createContext(null);function nt(e){var n=e.className,t=e.style,r=e.record,o=e.index,i=e.renderIndex,s=e.rowKey,c=e.rowExpandable,l=e.expandedKeys,d=e.onRow,f=e.indent,u=f===void 0?0:f,p=e.rowComponent,v=e.cellComponent,x=e.childrenColumnName,b=a.useContext(de),y=b.prefixCls,E=b.fixedInfoList,k=a.useContext(Ye),z=k.flattenColumns,V=k.expandableType,T=k.expandRowByClick,M=k.onTriggerExpand,W=k.rowClassName,P=k.expandedRowClassName,B=k.indentSize,F=k.expandIcon,K=k.expandedRowRender,w=k.expandIconColumnIndex,H=a.useState(!1),S=U(H,2),O=S[0],R=S[1],N=l&&l.has(e.recordKey);a.useEffect(function(){N&&R(!0)},[N]);var g=V==="row"&&(!c||c(r)),j=V==="nest",_=x&&r&&r[x],ae=g||j,Q=a.useRef(M);Q.current=M;var fe=function(){Q.current.apply(Q,arguments)},G=d==null?void 0:d(r,o),re=function(q){var A;T&&ae&&fe(r,q);for(var J=arguments.length,le=new Array(J>1?J-1:0),ee=1;ee<J;ee++)le[ee-1]=arguments[ee];G==null||(A=G.onClick)===null||A===void 0||A.call.apply(A,[G,q].concat(le))},Z;typeof W=="string"?Z=W:typeof W=="function"&&(Z=W(r,o,u));var xe=Xe(z),Ce=m(p,{...G,"data-row-key":s,className:ue(n,"".concat(y,"-row"),"".concat(y,"-row-level-").concat(u),Z,G&&G.className),style:C(C({},t),G?G.style:null),onClick:re,children:z.map(function(X,q){var A=X.render,J=X.dataIndex,le=X.className,ee=xe[q],Se=E[q],ge;q===(w||0)&&j&&(ge=ce(Ue,{children:[m("span",{style:{paddingLeft:"".concat(B*u,"px")},className:"".concat(y,"-row-indent indent-level-").concat(u)}),F({prefixCls:y,expanded:N,expandable:_,record:r,onExpand:fe})]}));var Ee;return X.onCell&&(Ee=X.onCell(r,o)),m($e,{className:le,ellipsis:X.ellipsis,align:X.align,component:v,prefixCls:y,record:r,index:o,renderIndex:i,dataIndex:J,render:A,shouldCellUpdate:X.shouldCellUpdate,expanded:ge&&N,...Se,appendNode:ge,additionalProps:Ee},ee)})}),Re;if(g&&(O||N)){var Me=K(r,o,u+1,N),be=P&&P(r,o,u);Re=m(Zn,{expanded:N,className:ue("".concat(y,"-expanded-row"),"".concat(y,"-expanded-row-level-").concat(u+1),be),prefixCls:y,component:p,cellComponent:v,colSpan:z.length,isEmpty:!1,children:Me})}return ce(Ue,{children:[Ce,Re]})}nt.displayName="BodyRow";function tt(e,n,t,r,o,i){var s=[];s.push({record:e,indent:n,index:i});var c=o(e),l=r==null?void 0:r.has(c);if(e&&Array.isArray(e[t])&&l)for(var d=0;d<e[t].length;d+=1){var f=tt(e[t][d],n+1,t,r,o,d);s.push.apply(s,te(f))}return s}function tr(e,n,t,r){var o=a.useMemo(function(){if(t!=null&&t.size){for(var i=[],s=0;s<(e==null?void 0:e.length);s+=1){var c=e[s];i.push.apply(i,te(tt(c,0,n,t,r,s)))}return i}return e==null?void 0:e.map(function(l,d){return{record:l,indent:0,index:d}})},[e,n,t,r]);return o}function rr(e){var n=e.columnKey,t=e.onColumnResize,r=a.useRef();return a.useEffect(function(){r.current&&t(n,r.current.offsetWidth)},[]),m(un,{data:n,children:m("td",{ref:r,style:{padding:0,border:0,height:0},children:m("div",{style:{height:0,overflow:"hidden"},children:"\xA0"})})})}function or(e){var n=e.prefixCls,t=e.columnsKey,r=e.onColumnResize;return m("tr",{"aria-hidden":"true",className:"".concat(n,"-measure-row"),style:{height:0,fontSize:0},children:m(un.Collection,{onBatchResize:function(i){i.forEach(function(s){var c=s.data,l=s.size;r(c,l.offsetWidth)})},children:t.map(function(o){return m(rr,{columnKey:o,onColumnResize:r},o)})})})}function ar(e){var n=e.data,t=e.getRowKey,r=e.measureColumnWidth,o=e.expandedKeys,i=e.onRow,s=e.rowExpandable,c=e.emptyNode,l=e.childrenColumnName,d=a.useContext(et),f=d.onColumnResize,u=a.useContext(de),p=u.prefixCls,v=u.getComponent,x=a.useContext(Ye),b=x.flattenColumns,y=tr(n,l,o,t),E=a.useRef({renderWithProps:!1}),k=a.useState(-1),z=U(k,2),V=z[0],T=z[1],M=a.useState(-1),W=U(M,2),P=W[0],B=W[1],F=a.useCallback(function(w,H){T(w),B(H)},[]),K=a.useMemo(function(){var w=v(["body","wrapper"],"tbody"),H=v(["body","row"],"tr"),S=v(["body","cell"],"td"),O;n.length?O=y.map(function(N,g){var j=N.record,_=N.indent,ae=N.index,Q=t(j,g);return m(nt,{rowKey:Q,record:j,recordKey:Q,index:g,renderIndex:ae,rowComponent:H,cellComponent:S,expandedKeys:o,onRow:i,getRowKey:t,rowExpandable:s,childrenColumnName:l,indent:_},Q)}):O=m(Zn,{expanded:!0,className:"".concat(p,"-placeholder"),prefixCls:p,component:H,cellComponent:S,colSpan:b.length,isEmpty:!0,children:c});var R=Xe(b);return ce(w,{className:"".concat(p,"-tbody"),children:[r&&m(or,{prefixCls:p,columnsKey:R,onColumnResize:f}),O]})},[n,p,i,r,o,t,v,c,b,l,f,s,y]);return m(_n.Provider,{value:E.current,children:m(Gn.Provider,{value:{startRow:V,endRow:P,onHover:F},children:K})})}var rt=a.memo(ar);rt.displayName="Body";var lr=["expandable"],ot="RC_TABLE_INTERNAL_COL_DEFINE";function ir(e){var n=e.expandable,t=Ne(e,lr),r;return"expandable"in e?r=C(C({},t),n):r=t,r.showExpandColumn===!1&&(r.expandIconColumnIndex=-1),r}var we={},sr=["children"],cr=["fixed"];function at(e){return Ot(e).filter(function(n){return a.isValidElement(n)}).map(function(n){var t=n.key,r=n.props,o=r.children,i=Ne(r,sr),s=C({key:t},i);return o&&(s.children=at(o)),s})}function ln(e){return e.reduce(function(n,t){var r=t.fixed,o=r===!0?"left":r,i=t.children;return i&&i.length>0?[].concat(te(n),te(ln(i).map(function(s){return C({fixed:o},s)}))):[].concat(te(n),[C(C({},t),{},{fixed:o})])},[])}function ur(e){return e.map(function(n){var t=n.fixed,r=Ne(n,cr),o=t;return t==="left"?o="right":t==="right"&&(o="left"),C({fixed:o},r)})}function dr(e,n){var t=e.prefixCls,r=e.columns,o=e.children,i=e.expandable,s=e.expandedKeys,c=e.columnTitle,l=e.getRowKey,d=e.onTriggerExpand,f=e.expandIcon,u=e.rowExpandable,p=e.expandIconColumnIndex,v=e.direction,x=e.expandRowByClick,b=e.columnWidth,y=e.fixed,E=a.useMemo(function(){return r||at(o)},[r,o]),k=a.useMemo(function(){if(i){var T,M=E.slice();if(!M.includes(we)){var W=p||0;W>=0&&M.splice(W,0,we)}var P=M.indexOf(we);M=M.filter(function(w,H){return w!==we||H===P});var B=E[P],F;(y==="left"||y)&&!p?F="left":(y==="right"||y)&&p===E.length?F="right":F=B?B.fixed:null;var K=(T={},$(T,ot,{className:"".concat(t,"-expand-icon-col"),columnType:"EXPAND_COLUMN"}),$(T,"title",c),$(T,"fixed",F),$(T,"className","".concat(t,"-row-expand-icon-cell")),$(T,"width",b),$(T,"render",function(H,S,O){var R=l(S,O),N=s.has(R),g=u?u(S):!0,j=f({prefixCls:t,expanded:N,expandable:g,record:S,onExpand:d});return x?m("span",{onClick:function(ae){return ae.stopPropagation()},children:j}):j}),T);return M.map(function(w){return w===we?K:w})}return E.filter(function(w){return w!==we})},[i,E,l,s,f,v]),z=a.useMemo(function(){var T=k;return n&&(T=n(T)),T.length||(T=[{render:function(){return null}}]),T},[n,k,v]),V=a.useMemo(function(){return v==="rtl"?ur(ln(z)):ln(z)},[z,v]);return[z,V]}function lt(e){var n=a.useRef(e),t=a.useState({}),r=U(t,2),o=r[1],i=a.useRef(null),s=a.useRef([]);function c(l){s.current.push(l);var d=Promise.resolve();i.current=d,d.then(function(){if(i.current===d){var f=s.current,u=n.current;s.current=[],f.forEach(function(p){n.current=p(n.current)}),i.current=null,u!==n.current&&o({})}})}return a.useEffect(function(){return function(){i.current=null}},[]),[n.current,c]}function fr(e){var n=a.useRef(e||null),t=a.useRef();function r(){window.clearTimeout(t.current)}function o(s){n.current=s,r(),t.current=window.setTimeout(function(){n.current=null,t.current=void 0},100)}function i(){return n.current}return a.useEffect(function(){return r},[]),[o,i]}function vr(e,n,t){var r=a.useMemo(function(){for(var o=[],i=[],s=0,c=0,l=0;l<n;l+=1)if(t==="rtl"){i[l]=c,c+=e[l]||0;var d=n-l-1;o[d]=s,s+=e[d]||0}else{o[l]=s,s+=e[l]||0;var f=n-l-1;i[f]=c,c+=e[f]||0}return{left:o,right:i}},[e,n,t]);return r}var mr=["columnType"];function it(e){for(var n=e.colWidths,t=e.columns,r=e.columCount,o=[],i=r||t.length,s=!1,c=i-1;c>=0;c-=1){var l=n[c],d=t&&t[c],f=d&&d[ot];if(l||f||s){var u=f||{};u.columnType;var p=Ne(u,mr);o.unshift(m("col",{style:{width:l},...p},c)),s=!0}}return m("colgroup",{children:o})}function Dn(e){var n=e.className,t=e.children;return m("div",{className:n,children:t})}var st=a.createContext({});function pr(e){var n=e.className,t=e.index,r=e.children,o=e.colSpan,i=o===void 0?1:o,s=e.rowSpan,c=e.align,l=a.useContext(de),d=l.prefixCls,f=l.direction,u=a.useContext(st),p=u.scrollColumnIndex,v=u.stickyOffsets,x=u.flattenColumns,b=t+i-1,y=b+1===p?i+1:i,E=dn(t,t+y-1,x,v,f);return m($e,{className:n,index:t,component:"td",prefixCls:d,record:null,dataIndex:null,align:c,colSpan:y,rowSpan:s,render:function(){return r},...E})}var xr=["children"];function Cr(e){var n=e.children,t=Ne(e,xr);return m("tr",{...t,children:n})}function Ge(e){var n=e.children;return n}Ge.Row=Cr;Ge.Cell=pr;function Ve(e){var n=e.children,t=e.stickyOffsets,r=e.flattenColumns,o=a.useContext(de),i=o.prefixCls,s=r.length-1,c=r[s],l=a.useMemo(function(){return{stickyOffsets:t,flattenColumns:r,scrollColumnIndex:c!=null&&c.scrollbar?s:null}},[c,r,s,t]);return m(st.Provider,{value:l,children:m("tfoot",{className:"".concat(i,"-summary"),children:n})})}var hr=Ge;function yr(e){var n,t=e.prefixCls,r=e.record,o=e.onExpand,i=e.expanded,s=e.expandable,c="".concat(t,"-row-expand-icon");if(!s)return m("span",{className:ue(c,"".concat(t,"-row-spaced"))});var l=function(f){o(r,f),f.stopPropagation()};return m("span",{className:ue(c,(n={},$(n,"".concat(t,"-row-expanded"),i),$(n,"".concat(t,"-row-collapsed"),!i),n)),onClick:l})}function Rr(e,n,t){var r=[];function o(i){(i||[]).forEach(function(s,c){r.push(n(s,c)),o(s[t])})}return o(e),r}var Sr=function(n,t){var r,o,i=n.scrollBodyRef,s=n.onScroll,c=n.offsetScroll,l=n.container,d=a.useContext(de),f=d.prefixCls,u=((r=i.current)===null||r===void 0?void 0:r.scrollWidth)||0,p=((o=i.current)===null||o===void 0?void 0:o.clientWidth)||0,v=u&&p*(p/u),x=a.useRef(),b=lt({scrollLeft:0,isHiddenScrollBar:!1}),y=U(b,2),E=y[0],k=y[1],z=a.useRef({delta:0,x:0}),V=a.useState(!1),T=U(V,2),M=T[0],W=T[1],P=function(){W(!1)},B=function(S){S.persist(),z.current.delta=S.pageX-E.scrollLeft,z.current.x=0,W(!0),S.preventDefault()},F=function(S){var O,R=S||((O=window)===null||O===void 0?void 0:O.event),N=R.buttons;if(!M||N===0){M&&W(!1);return}var g=z.current.x+S.pageX-z.current.x-z.current.delta;g<=0&&(g=0),g+v>=p&&(g=p-v),s({scrollLeft:g/p*(u+2)}),z.current.x=S.pageX},K=function(){if(!!i.current){var S=Wn(i.current).top,O=S+i.current.offsetHeight,R=l===window?document.documentElement.scrollTop+window.innerHeight:Wn(l).top+l.clientHeight;O-zn()<=R||S>=R-c?k(function(N){return C(C({},N),{},{isHiddenScrollBar:!0})}):k(function(N){return C(C({},N),{},{isHiddenScrollBar:!1})})}},w=function(S){k(function(O){return C(C({},O),{},{scrollLeft:S/u*p||0})})};return a.useImperativeHandle(t,function(){return{setScrollLeft:w}}),a.useEffect(function(){var H=De(document.body,"mouseup",P,!1),S=De(document.body,"mousemove",F,!1);return K(),function(){H.remove(),S.remove()}},[v,M]),a.useEffect(function(){var H=De(l,"scroll",K,!1),S=De(window,"resize",K,!1);return function(){H.remove(),S.remove()}},[l]),a.useEffect(function(){E.isHiddenScrollBar||k(function(H){var S=i.current;return S?C(C({},H),{},{scrollLeft:S.scrollLeft/S.scrollWidth*S.clientWidth}):H})},[E.isHiddenScrollBar]),u<=p||!v||E.isHiddenScrollBar?null:m("div",{style:{height:zn(),width:p,bottom:c},className:"".concat(f,"-sticky-scroll"),children:m("div",{onMouseDown:B,ref:x,className:ue("".concat(f,"-sticky-scroll-bar"),$({},"".concat(f,"-sticky-scroll-bar-active"),M)),style:{width:"".concat(v,"px"),transform:"translate3d(".concat(E.scrollLeft,"px, 0, 0)")}})})};const gr=a.forwardRef(Sr);var Vn=zt()?window:null;function wr(e,n){var t=je(e)==="object"?e:{},r=t.offsetHeader,o=r===void 0?0:r,i=t.offsetSummary,s=i===void 0?0:i,c=t.offsetScroll,l=c===void 0?0:c,d=t.getContainer,f=d===void 0?function(){return Vn}:d,u=f()||Vn;return a.useMemo(function(){var p=!!e;return{isSticky:p,stickyClassName:p?"".concat(n,"-sticky-holder"):"",offsetHeader:o,offsetSummary:s,offsetScroll:l,container:u}},[l,o,s,n,u])}var Nr=["className","noData","columns","flattenColumns","colWidths","columCount","stickyOffsets","direction","fixHeader","stickyTopOffset","stickyBottomOffset","stickyClassName","onScroll","maxContentScroll","children"];function br(e,n){return a.useMemo(function(){for(var t=[],r=0;r<n;r+=1){var o=e[r];if(o!==void 0)t[r]=o;else return null}return t},[e.join("_"),n])}var sn=a.forwardRef(function(e,n){var t=e.className,r=e.noData,o=e.columns,i=e.flattenColumns,s=e.colWidths,c=e.columCount,l=e.stickyOffsets,d=e.direction,f=e.fixHeader,u=e.stickyTopOffset,p=e.stickyBottomOffset,v=e.stickyClassName,x=e.onScroll,b=e.maxContentScroll,y=e.children,E=Ne(e,Nr),k=a.useContext(de),z=k.prefixCls,V=k.scrollbarSize,T=k.isSticky,M=T&&!f?0:V,W=a.useRef(null),P=a.useCallback(function(R){Fn(n,R),Fn(W,R)},[]);a.useEffect(function(){var R;function N(g){var j=g.currentTarget,_=g.deltaX;_&&(x({currentTarget:j,scrollLeft:j.scrollLeft+_}),g.preventDefault())}return(R=W.current)===null||R===void 0||R.addEventListener("wheel",N),function(){var g;(g=W.current)===null||g===void 0||g.removeEventListener("wheel",N)}},[]);var B=a.useMemo(function(){return i.every(function(R){return R.width>=0})},[i]),F=i[i.length-1],K={fixed:F?F.fixed:null,scrollbar:!0,onHeaderCell:function(){return{className:"".concat(z,"-cell-scrollbar")}}},w=a.useMemo(function(){return M?[].concat(te(o),[K]):o},[M,o]),H=a.useMemo(function(){return M?[].concat(te(i),[K]):i},[M,i]),S=a.useMemo(function(){var R=l.right,N=l.left;return C(C({},l),{},{left:d==="rtl"?[].concat(te(N.map(function(g){return g+M})),[0]):N,right:d==="rtl"?R:[].concat(te(R.map(function(g){return g+M})),[0]),isSticky:T})},[M,l,T]),O=br(s,c);return m("div",{style:C({overflow:"hidden"},T?{top:u,bottom:p}:{}),ref:P,className:ue(t,$({},v,!!v)),children:ce("table",{style:{tableLayout:"fixed",visibility:r||O?null:"hidden"},children:[(!r||!b||B)&&m(it,{colWidths:O?[].concat(te(O),[M]):[],columCount:c+1,columns:H}),y(C(C({},E),{},{stickyOffsets:S,columns:w,flattenColumns:H}))]})})});sn.displayName="FixedHolder";var Er=[],kr={},on="rc-table-internal-hook",Lr=a.memo(function(e){var n=e.children;return n},function(e,n){return cn(e.props,n.props)?e.pingLeft!==n.pingLeft||e.pingRight!==n.pingRight:!1});function He(e){var n,t=e.prefixCls,r=e.className,o=e.rowClassName,i=e.style,s=e.data,c=e.rowKey,l=e.scroll,d=e.tableLayout,f=e.direction,u=e.title,p=e.footer,v=e.summary,x=e.id,b=e.showHeader,y=e.components,E=e.emptyText,k=e.onRow,z=e.onHeaderRow,V=e.internalHooks,T=e.transformColumns,M=e.internalRefs,W=e.sticky,P=s||Er,B=!!P.length,F=a.useCallback(function(h,L){return Xn(y||{},h)||L},[y]),K=a.useMemo(function(){return typeof c=="function"?c:function(h){var L=h&&h[c];return L}},[c]),w=ir(e),H=w.expandIcon,S=w.expandedRowKeys,O=w.defaultExpandedRowKeys,R=w.defaultExpandAllRows,N=w.expandedRowRender,g=w.columnTitle,j=w.onExpand,_=w.onExpandedRowsChange,ae=w.expandRowByClick,Q=w.rowExpandable,fe=w.expandIconColumnIndex,G=w.expandedRowClassName,re=w.childrenColumnName,Z=w.indentSize,xe=H||yr,Ce=re||"children",Re=a.useMemo(function(){return N?"row":e.expandable&&V===on&&e.expandable.__PARENT_RENDER_ICON__||P.some(function(h){return h&&je(h)==="object"&&h[Ce]})?"nest":!1},[!!N,P]),Me=a.useState(function(){return O||(R?Rr(P,K,Ce):[])}),be=U(Me,2),X=be[0],q=be[1],A=a.useMemo(function(){return new Set(S||X||[])},[S,X]),J=a.useCallback(function(h){var L=K(h,P.indexOf(h)),D,ne=A.has(L);ne?(A.delete(L),D=te(A)):D=[].concat(te(A),[L]),q(D),j&&j(!ne,h),_&&_(D)},[K,A,P,j,_]),le=a.useState(0),ee=U(le,2),Se=ee[0],ge=ee[1],Ee=dr(C(C(C({},e),w),{},{expandable:!!N,columnTitle:g,expandedKeys:A,getRowKey:K,onTriggerExpand:J,expandIcon:xe,expandIconColumnIndex:fe,direction:f}),V===on?T:null),Pe=U(Ee,2),ve=Pe[0],I=Pe[1],Y=a.useMemo(function(){return{columns:ve,flattenColumns:I}},[ve,I]),me=a.useRef(),fn=a.useRef(),ie=a.useRef(),vn=a.useRef(),mn=a.useRef(),ct=a.useState(!1),pn=U(ct,2),xn=pn[0],Be=pn[1],ut=a.useState(!1),Cn=U(ut,2),hn=Cn[0],Oe=Cn[1],dt=lt(new Map),yn=U(dt,2),ft=yn[0],vt=yn[1],mt=Xe(I),Rn=mt.map(function(h){return ft.get(h)}),Sn=a.useMemo(function(){return Rn},[Rn.join("_")]),ke=vr(Sn,I.length,f),oe=l&&an(l.y),se=l&&an(l.x)||Boolean(w.fixed),Ie=se&&I.some(function(h){var L=h.fixed;return L}),gn=a.useRef(),Le=wr(W,t),he=Le.isSticky,pt=Le.offsetHeader,xt=Le.offsetSummary,Ct=Le.offsetScroll,ht=Le.stickyClassName,yt=Le.container,pe=v==null?void 0:v(P),ze=(oe||he)&&a.isValidElement(pe)&&pe.type===Ge&&pe.props.fixed,_e,We,qe;oe&&(We={overflowY:"scroll",maxHeight:l.y}),se&&(_e={overflowX:"auto"},oe||(We={overflowY:"hidden"}),qe={width:(l==null?void 0:l.x)===!0?"auto":l==null?void 0:l.x,minWidth:"100%"});var wn=a.useCallback(function(h,L){Wt(me.current)&&vt(function(D){if(D.get(h)!==L){var ne=new Map(D);return ne.set(h,L),ne}return D})},[]),Rt=fr(null),Nn=U(Rt,2),St=Nn[0],bn=Nn[1];function Fe(h,L){!L||(typeof L=="function"?L(h):L.scrollLeft!==h&&(L.scrollLeft=h))}var Te=function(L){var D=L.currentTarget,ne=L.scrollLeft,Ht=f==="rtl",ye=typeof ne=="number"?ne:D.scrollLeft,On=D||kr;if(!bn()||bn()===On){var nn;St(On),Fe(ye,fn.current),Fe(ye,ie.current),Fe(ye,mn.current),Fe(ye,(nn=gn.current)===null||nn===void 0?void 0:nn.setScrollLeft)}if(D){var tn=D.scrollWidth,rn=D.clientWidth;if(tn===rn){Be(!1),Oe(!1);return}Ht?(Be(-ye<tn-rn),Oe(-ye>0)):(Be(ye>0),Oe(ye<tn-rn))}},En=function(){se&&ie.current?Te({currentTarget:ie.current}):(Be(!1),Oe(!1))},gt=function(L){var D=L.width;D!==Se&&(En(),ge(me.current?me.current.offsetWidth:D))},kn=a.useRef(!1);a.useEffect(function(){kn.current&&En()},[se,s,ve.length]),a.useEffect(function(){kn.current=!0},[]);var wt=a.useState(0),Ln=U(wt,2),Ke=Ln[0],Tn=Ln[1],Nt=a.useState(!0),Mn=U(Nt,2),bt=Mn[0],Et=Mn[1];a.useEffect(function(){ie.current instanceof Element?Tn(Kn(ie.current).width):Tn(Kn(vn.current).width),Et(Ft("position","sticky"))},[]),a.useEffect(function(){V===on&&M&&(M.body.current=ie.current)});var In=F(["table"],"table"),Ae=a.useMemo(function(){return d||(Ie?(l==null?void 0:l.x)==="max-content"?"auto":"fixed":oe||he||I.some(function(h){var L=h.ellipsis;return L})?"fixed":"auto")},[oe,Ie,I,d,he]),Je,Qe={colWidths:Sn,columCount:I.length,stickyOffsets:ke,onHeaderRow:z,fixHeader:oe,scroll:l},kt=a.useMemo(function(){return B?null:typeof E=="function"?E():E},[B,E]),$n=m(rt,{data:P,measureColumnWidth:oe||se||he,expandedKeys:A,rowExpandable:Q,getRowKey:K,onRow:k,emptyNode:kt,childrenColumnName:Ce}),Hn=m(it,{colWidths:I.map(function(h){var L=h.width;return L}),columns:I}),Pn=F(["body"]);if(oe||he){var Ze;typeof Pn=="function"?(Ze=Pn(P,{scrollbarSize:Ke,ref:ie,onScroll:Te}),Qe.colWidths=I.map(function(h,L){var D=h.width,ne=L===ve.length-1?D-Ke:D;return typeof ne=="number"&&!Number.isNaN(ne)?ne:(Kt(!1,"When use `components.body` with render props. Each column should have a fixed `width` value."),0)})):Ze=m("div",{style:C(C({},_e),We),onScroll:Te,ref:ie,className:ue("".concat(t,"-body")),children:ce(In,{style:C(C({},qe),{},{tableLayout:Ae}),children:[Hn,$n,!ze&&pe&&m(Ve,{stickyOffsets:ke,flattenColumns:I,children:pe})]})});var Bn=C(C(C({noData:!P.length,maxContentScroll:se&&l.x==="max-content"},Qe),Y),{},{direction:f,stickyClassName:ht,onScroll:Te});Je=ce(Ue,{children:[b!==!1&&m(sn,{...Bn,stickyTopOffset:pt,className:"".concat(t,"-header"),ref:fn,children:function(h){return ce(Ue,{children:[m(An,{...h}),ze==="top"&&m(Ve,{...h,children:pe})]})}}),Ze,ze&&ze!=="top"&&m(sn,{...Bn,stickyBottomOffset:xt,className:"".concat(t,"-summary"),ref:mn,children:function(h){return m(Ve,{...h,children:pe})}}),he&&m(gr,{ref:gn,offsetScroll:Ct,scrollBodyRef:ie,onScroll:Te,container:yt})]})}else Je=m("div",{style:C(C({},_e),We),className:ue("".concat(t,"-content")),onScroll:Te,ref:ie,children:ce(In,{style:C(C({},qe),{},{tableLayout:Ae}),children:[Hn,b!==!1&&m(An,{...Qe,...Y}),$n,pe&&m(Ve,{stickyOffsets:ke,flattenColumns:I,children:pe})]})});var Lt=At(e,{aria:!0,data:!0}),en=m("div",{className:ue(t,r,(n={},$(n,"".concat(t,"-rtl"),f==="rtl"),$(n,"".concat(t,"-ping-left"),xn),$(n,"".concat(t,"-ping-right"),hn),$(n,"".concat(t,"-layout-fixed"),d==="fixed"),$(n,"".concat(t,"-fixed-header"),oe),$(n,"".concat(t,"-fixed-column"),Ie),$(n,"".concat(t,"-scroll-horizontal"),se),$(n,"".concat(t,"-has-fix-left"),I[0]&&I[0].fixed),$(n,"".concat(t,"-has-fix-right"),I[I.length-1]&&I[I.length-1].fixed==="right"),n)),style:i,id:x,ref:me,...Lt,children:ce(Lr,{pingLeft:xn,pingRight:hn,props:C(C({},e),{},{stickyOffsets:ke,mergedExpandedKeys:A}),children:[u&&m(Dn,{className:"".concat(t,"-title"),children:u(P)}),m("div",{ref:vn,className:"".concat(t,"-container"),children:Je}),p&&m(Dn,{className:"".concat(t,"-footer"),children:p(P)})]})});se&&(en=m(un,{onResize:gt,children:en}));var Tt=a.useMemo(function(){return{prefixCls:t,getComponent:F,scrollbarSize:Ke,direction:f,fixedInfoList:I.map(function(h,L){return dn(L,L,I,ke,f)}),isSticky:he}},[t,F,Ke,f,I,ke,he]),Mt=a.useMemo(function(){return C(C({},Y),{},{tableLayout:Ae,rowClassName:o,expandedRowClassName:G,expandIcon:xe,expandableType:Re,expandRowByClick:ae,expandedRowRender:N,onTriggerExpand:J,expandIconColumnIndex:fe,indentSize:Z,allColumnsFixedLeft:Y.flattenColumns.every(function(h){return h.fixed==="left"})})},[Y,Ae,o,G,xe,Re,ae,N,J,fe,Z]),It=a.useMemo(function(){return{componentWidth:Se,fixHeader:oe,fixColumn:Ie,horizonScroll:se}},[Se,oe,Ie,se]),$t=a.useMemo(function(){return{onColumnResize:wn}},[wn]);return m(Yn.Provider,{value:bt,children:m(de.Provider,{value:Tt,children:m(Ye.Provider,{value:Mt,children:m(Qn.Provider,{value:It,children:m(et.Provider,{value:$t,children:en})})})})})}He.EXPAND_COLUMN=we;He.Column=Vt;He.ColumnGroup=Dt;He.Summary=hr;He.defaultProps={rowKey:"key",prefixCls:"rc-table",emptyText:function(){return"No Data"}};export{hr as F,ot as I,He as T,on as a,at as c};
