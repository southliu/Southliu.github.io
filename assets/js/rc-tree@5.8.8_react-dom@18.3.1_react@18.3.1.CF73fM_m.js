import{g as e,k as t,i as n,f as o,d as r,j as a,b as d,c as i,a as s,e as l,_ as c,h as p,p as u}from"./@babel_runtime@7.25.4.Bu2As08a.js";import{c as f}from"./classnames@2.5.1.D1aycfQv.js";import{b as v,x as h,y,A as g,u as k,K}from"./rc-util@5.43.0_react-dom@18.3.1_react@18.3.1.CDZ9iH-v.js";import{r as N}from"./react@18.3.1.B8wSySjr.js";import{L as m}from"./rc-virtual-list@3.14.5_react-dom@18.3.1_react@18.3.1.CKaX4NFu.js";import{C as x}from"./rc-motion@2.9.2_react-dom@18.3.1_react@18.3.1.DgXt_ZYB.js";import"./react-is@18.3.1.D9jp0pkd.js";function E(e,t){return e[t]}var C=["children"];function b(e,t){return"".concat(e,"-").concat(t)}function D(e,t){return null!=e?e:t}function S(e){var t=e||{},n=t.title||"title";return{title:n,_title:t._title||[n],key:t.key||"key",children:t.children||"children"}}function w(n){return function n(o){return h(o).map((function(o){if(!function(e){return e&&e.type&&e.type.isTreeNode}(o))return v(!o,"Tree/TreeNode can only accept TreeNode as children."),null;var r=o.key,a=o.props,d=a.children,i=t(a,C),s=e({key:r},i),l=n(d);return l.length&&(s.children=l),s})).filter((function(e){return e}))}(n)}function O(e,t,o){var r=S(o),a=r._title,d=r.key,i=r.children,s=new Set(!0===t?[]:t),l=[];return function e(o){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return o.map((function(c,p){for(var u,f=b(r?r.pos:"0",p),v=D(c[d],f),h=0;h<a.length;h+=1){var g=a[h];if(void 0!==c[g]){u=c[g];break}}var k=Object.assign(y(c,[].concat(n(a),[d,i])),{title:u,key:v,parent:r,pos:f,children:null,data:c,isStart:[].concat(n(r?r.isStart:[]),[0===p]),isEnd:[].concat(n(r?r.isEnd:[]),[p===o.length-1])});return l.push(k),!0===t||s.has(v)?k.children=e(c[i]||[],k):k.children=[],k}))}(e),l}function P(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.initWrapper,a=t.processEntity,d=t.onProcessFinished,i=t.externalGetKey,s=t.childrenPropName,l=t.fieldNames,c=i||(arguments.length>2?arguments[2]:void 0),p={},u={},f={posEntities:p,keyEntities:u};return r&&(f=r(f)||f),function(e,t,r){var a,d=("object"===o(r)?r:{externalGetKey:r})||{},i=d.childrenPropName,s=d.externalGetKey,l=S(d.fieldNames),c=l.key,p=l.children,u=i||p;s?"string"==typeof s?a=function(e){return e[s]}:"function"==typeof s&&(a=function(e){return s(e)}):a=function(e,t){return D(e[c],t)},function o(r,d,i,s){var l=r?r[u]:e,c=r?b(i.pos,d):"0",p=r?[].concat(n(s),[r]):[];if(r){var f=a(r,c),v={node:r,index:d,pos:c,key:f,parentPos:i.node?i.pos:null,level:i.level+1,nodes:p};t(v)}l&&l.forEach((function(e,t){o(e,t,{node:r,pos:c,level:i?i.level+1:-1},p)}))}(null)}(e,(function(e){var t=e.node,n=e.index,o=e.pos,r=e.key,d=e.parentPos,i=e.level,s={node:t,nodes:e.nodes,index:n,key:r,pos:o,level:i},l=D(r,o);p[o]=s,u[l]=s,s.parent=p[d],s.parent&&(s.parent.children=s.parent.children||[],s.parent.children.push(s)),a&&a(s,f)}),{externalGetKey:c,childrenPropName:s,fieldNames:l}),d&&d(f),f}function L(e,t){var n=t.expandedKeys,o=t.selectedKeys,r=t.loadedKeys,a=t.loadingKeys,d=t.checkedKeys,i=t.halfCheckedKeys,s=t.dragOverNodeKey,l=t.dropPosition,c=E(t.keyEntities,e);return{eventKey:e,expanded:-1!==n.indexOf(e),selected:-1!==o.indexOf(e),loaded:-1!==r.indexOf(e),loading:-1!==a.indexOf(e),checked:-1!==d.indexOf(e),halfChecked:-1!==i.indexOf(e),pos:String(c?c.pos:""),dragOver:s===e&&0===l,dragOverGapTop:s===e&&-1===l,dragOverGapBottom:s===e&&1===l}}function T(t){var n=t.data,o=t.expanded,r=t.selected,a=t.checked,d=t.loaded,i=t.loading,s=t.halfChecked,l=t.dragOver,c=t.dragOverGapTop,p=t.dragOverGapBottom,u=t.pos,f=t.active,h=t.eventKey,y=e(e({},n),{},{expanded:o,selected:r,checked:a,loaded:d,loading:i,halfChecked:s,dragOver:l,dragOverGapTop:c,dragOverGapBottom:p,pos:u,active:f,key:h});return"props"in y||Object.defineProperty(y,"props",{get:function(){return v(!1,"Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`."),t}}),y}function M(e,t){var n=new Set;return e.forEach((function(e){t.has(e)||n.add(e)})),n}function A(e){var t=e||{},n=t.disabled,o=t.disableCheckbox,r=t.checkable;return!(!n&&!o)||!1===r}function I(e,t,n,o){var r,a=[];r=o||A;var d,i=new Set(e.filter((function(e){var t=!!E(n,e);return t||a.push(e),t}))),s=new Map,l=0;return Object.keys(n).forEach((function(e){var t=n[e],o=t.level,r=s.get(o);r||(r=new Set,s.set(o,r)),r.add(t),l=Math.max(l,o)})),v(!a.length,"Tree missing follow keys: ".concat(a.slice(0,100).map((function(e){return"'".concat(e,"'")})).join(", "))),d=!0===t?function(e,t,n,o){for(var r=new Set(e),a=new Set,d=0;d<=n;d+=1)(t.get(d)||new Set).forEach((function(e){var t=e.key,n=e.node,a=e.children,d=void 0===a?[]:a;r.has(t)&&!o(n)&&d.filter((function(e){return!o(e.node)})).forEach((function(e){r.add(e.key)}))}));for(var i=new Set,s=n;s>=0;s-=1)(t.get(s)||new Set).forEach((function(e){var t=e.parent,n=e.node;if(!o(n)&&e.parent&&!i.has(e.parent.key))if(o(e.parent.node))i.add(t.key);else{var d=!0,s=!1;(t.children||[]).filter((function(e){return!o(e.node)})).forEach((function(e){var t=e.key,n=r.has(t);d&&!n&&(d=!1),s||!n&&!a.has(t)||(s=!0)})),d&&r.add(t.key),s&&a.add(t.key),i.add(t.key)}}));return{checkedKeys:Array.from(r),halfCheckedKeys:Array.from(M(a,r))}}(i,s,l,r):function(e,t,n,o,r){for(var a=new Set(e),d=new Set(t),i=0;i<=o;i+=1)(n.get(i)||new Set).forEach((function(e){var t=e.key,n=e.node,o=e.children,i=void 0===o?[]:o;a.has(t)||d.has(t)||r(n)||i.filter((function(e){return!r(e.node)})).forEach((function(e){a.delete(e.key)}))}));d=new Set;for(var s=new Set,l=o;l>=0;l-=1)(n.get(l)||new Set).forEach((function(e){var t=e.parent,n=e.node;if(!r(n)&&e.parent&&!s.has(e.parent.key))if(r(e.parent.node))s.add(t.key);else{var o=!0,i=!1;(t.children||[]).filter((function(e){return!r(e.node)})).forEach((function(e){var t=e.key,n=a.has(t);o&&!n&&(o=!1),i||!n&&!d.has(t)||(i=!0)})),o||a.delete(t.key),i&&d.add(t.key),s.add(t.key)}}));return{checkedKeys:Array.from(a),halfCheckedKeys:Array.from(M(d,a))}}(i,t.halfCheckedKeys,s,l,r),d}var R=N.createContext(null),j=function(e){for(var t=e.prefixCls,n=e.level,o=e.isStart,a=e.isEnd,d="".concat(t,"-indent-unit"),i=[],s=0;s<n;s+=1)i.push(N.createElement("span",{key:s,className:f(d,r(r({},"".concat(d,"-start"),o[s]),"".concat(d,"-end"),a[s]))}));return N.createElement("span",{"aria-hidden":"true",className:"".concat(t,"-indent")},i)};const H=N.memo(j);var _=["eventKey","className","style","dragOver","dragOverGapTop","dragOverGapBottom","isLeaf","isStart","isEnd","expanded","selected","checked","halfChecked","loading","domRef","active","data","onMouseMove","selectable"],U="open",G="close",B=function(n){d(p,n);var o=i(p);function p(){var t;s(this,p);for(var n=arguments.length,a=new Array(n),d=0;d<n;d++)a[d]=arguments[d];return t=o.call.apply(o,[this].concat(a)),r(l(t),"state",{dragNodeHighlight:!1}),r(l(t),"selectHandle",void 0),r(l(t),"cacheIndent",void 0),r(l(t),"onSelectorClick",(function(e){(0,t.props.context.onNodeClick)(e,T(t.props)),t.isSelectable()?t.onSelect(e):t.onCheck(e)})),r(l(t),"onSelectorDoubleClick",(function(e){(0,t.props.context.onNodeDoubleClick)(e,T(t.props))})),r(l(t),"onSelect",(function(e){t.isDisabled()||(0,t.props.context.onNodeSelect)(e,T(t.props))})),r(l(t),"onCheck",(function(e){if(!t.isDisabled()){var n=t.props,o=n.disableCheckbox,r=n.checked,a=t.props.context.onNodeCheck;if(t.isCheckable()&&!o){var d=!r;a(e,T(t.props),d)}}})),r(l(t),"onMouseEnter",(function(e){(0,t.props.context.onNodeMouseEnter)(e,T(t.props))})),r(l(t),"onMouseLeave",(function(e){(0,t.props.context.onNodeMouseLeave)(e,T(t.props))})),r(l(t),"onContextMenu",(function(e){(0,t.props.context.onNodeContextMenu)(e,T(t.props))})),r(l(t),"onDragStart",(function(e){var n=t.props.context.onNodeDragStart;e.stopPropagation(),t.setState({dragNodeHighlight:!0}),n(e,l(t));try{e.dataTransfer.setData("text/plain","")}catch(o){}})),r(l(t),"onDragEnter",(function(e){var n=t.props.context.onNodeDragEnter;e.preventDefault(),e.stopPropagation(),n(e,l(t))})),r(l(t),"onDragOver",(function(e){var n=t.props.context.onNodeDragOver;e.preventDefault(),e.stopPropagation(),n(e,l(t))})),r(l(t),"onDragLeave",(function(e){var n=t.props.context.onNodeDragLeave;e.stopPropagation(),n(e,l(t))})),r(l(t),"onDragEnd",(function(e){var n=t.props.context.onNodeDragEnd;e.stopPropagation(),t.setState({dragNodeHighlight:!1}),n(e,l(t))})),r(l(t),"onDrop",(function(e){var n=t.props.context.onNodeDrop;e.preventDefault(),e.stopPropagation(),t.setState({dragNodeHighlight:!1}),n(e,l(t))})),r(l(t),"onExpand",(function(e){var n=t.props,o=n.loading,r=n.context.onNodeExpand;o||r(e,T(t.props))})),r(l(t),"setSelectHandle",(function(e){t.selectHandle=e})),r(l(t),"getNodeState",(function(){var e=t.props.expanded;return t.isLeaf()?null:e?U:G})),r(l(t),"hasChildren",(function(){var e=t.props.eventKey;return!!((E(t.props.context.keyEntities,e)||{}).children||[]).length})),r(l(t),"isLeaf",(function(){var e=t.props,n=e.isLeaf,o=e.loaded,r=t.props.context.loadData,a=t.hasChildren();return!1!==n&&(n||!r&&!a||r&&o&&!a)})),r(l(t),"isDisabled",(function(){var e=t.props.disabled;return!(!t.props.context.disabled&&!e)})),r(l(t),"isCheckable",(function(){var e=t.props.checkable,n=t.props.context.checkable;return!(!n||!1===e)&&n})),r(l(t),"syncLoadData",(function(e){var n=e.expanded,o=e.loading,r=e.loaded,a=t.props.context,d=a.loadData,i=a.onNodeLoad;o||d&&n&&!t.isLeaf()&&!r&&i(T(t.props))})),r(l(t),"isDraggable",(function(){var e=t.props,n=e.data,o=e.context.draggable;return!(!o||o.nodeDraggable&&!o.nodeDraggable(n))})),r(l(t),"renderDragHandler",(function(){var e=t.props.context,n=e.draggable,o=e.prefixCls;return null!=n&&n.icon?N.createElement("span",{className:"".concat(o,"-draggable-icon")},n.icon):null})),r(l(t),"renderSwitcherIconDom",(function(n){var o=t.props.switcherIcon,r=t.props.context.switcherIcon,a=o||r;return"function"==typeof a?a(e(e({},t.props),{},{isLeaf:n})):a})),r(l(t),"renderSwitcher",(function(){var e=t.props.expanded,n=t.props.context.prefixCls;if(t.isLeaf()){var o=t.renderSwitcherIconDom(!0);return!1!==o?N.createElement("span",{className:f("".concat(n,"-switcher"),"".concat(n,"-switcher-noop"))},o):null}var r=f("".concat(n,"-switcher"),"".concat(n,"-switcher_").concat(e?U:G)),a=t.renderSwitcherIconDom(!1);return!1!==a?N.createElement("span",{onClick:t.onExpand,className:r},a):null})),r(l(t),"renderCheckbox",(function(){var e=t.props,n=e.checked,o=e.halfChecked,r=e.disableCheckbox,a=t.props.context.prefixCls,d=t.isDisabled(),i=t.isCheckable();if(!i)return null;var s="boolean"!=typeof i?i:null;return N.createElement("span",{className:f("".concat(a,"-checkbox"),n&&"".concat(a,"-checkbox-checked"),!n&&o&&"".concat(a,"-checkbox-indeterminate"),(d||r)&&"".concat(a,"-checkbox-disabled")),onClick:t.onCheck},s)})),r(l(t),"renderIcon",(function(){var e=t.props.loading,n=t.props.context.prefixCls;return N.createElement("span",{className:f("".concat(n,"-iconEle"),"".concat(n,"-icon__").concat(t.getNodeState()||"docu"),e&&"".concat(n,"-icon_loading"))})})),r(l(t),"renderSelector",(function(){var e,n,o=t.state.dragNodeHighlight,r=t.props,a=r.title,d=void 0===a?"---":a,i=r.selected,s=r.icon,l=r.loading,c=r.data,p=t.props.context,u=p.prefixCls,v=p.showIcon,h=p.icon,y=p.loadData,g=p.titleRender,k=t.isDisabled(),K="".concat(u,"-node-content-wrapper");if(v){var m=s||h;e=m?N.createElement("span",{className:f("".concat(u,"-iconEle"),"".concat(u,"-icon__customize"))},"function"==typeof m?m(t.props):m):t.renderIcon()}else y&&l&&(e=t.renderIcon());n="function"==typeof d?d(c):g?g(c):d;var x=N.createElement("span",{className:"".concat(u,"-title")},n);return N.createElement("span",{ref:t.setSelectHandle,title:"string"==typeof d?d:"",className:f("".concat(K),"".concat(K,"-").concat(t.getNodeState()||"normal"),!k&&(i||o)&&"".concat(u,"-node-selected")),onMouseEnter:t.onMouseEnter,onMouseLeave:t.onMouseLeave,onContextMenu:t.onContextMenu,onClick:t.onSelectorClick,onDoubleClick:t.onSelectorDoubleClick},e,x,t.renderDropIndicator())})),r(l(t),"renderDropIndicator",(function(){var e=t.props,n=e.disabled,o=e.eventKey,r=t.props.context,a=r.draggable,d=r.dropLevelOffset,i=r.dropPosition,s=r.prefixCls,l=r.indent,c=r.dropIndicatorRender,p=r.dragOverNodeKey,u=r.direction,f=!n&&!!a&&p===o,v=null!=l?l:t.cacheIndent;return t.cacheIndent=l,f?c({dropPosition:i,dropLevelOffset:d,indent:v,prefixCls:s,direction:u}):null})),t}return c(p,[{key:"componentDidMount",value:function(){this.syncLoadData(this.props)}},{key:"componentDidUpdate",value:function(){this.syncLoadData(this.props)}},{key:"isSelectable",value:function(){var e=this.props.selectable,t=this.props.context.selectable;return"boolean"==typeof e?e:t}},{key:"render",value:function(){var e,n=this.props,o=n.eventKey,d=n.className,i=n.style,s=n.dragOver,l=n.dragOverGapTop,c=n.dragOverGapBottom,p=n.isLeaf,u=n.isStart,v=n.isEnd,h=n.expanded,y=n.selected,k=n.checked,K=n.halfChecked,m=n.loading,x=n.domRef,C=n.active;n.data;var b=n.onMouseMove,D=n.selectable,S=t(n,_),w=this.props.context,O=w.prefixCls,P=w.filterTreeNode,L=w.keyEntities,M=w.dropContainerKey,A=w.dropTargetKey,I=w.draggingNodeKey,R=this.isDisabled(),j=g(S,{aria:!0,data:!0}),U=(E(L,o)||{}).level,G=v[v.length-1],B=this.isDraggable(),F=!R&&B,W=I===o,q=void 0!==D?{"aria-selected":!!D}:void 0;return N.createElement("div",a({ref:x,className:f(d,"".concat(O,"-treenode"),(e={},r(r(r(r(r(r(r(r(r(r(e,"".concat(O,"-treenode-disabled"),R),"".concat(O,"-treenode-switcher-").concat(h?"open":"close"),!p),"".concat(O,"-treenode-checkbox-checked"),k),"".concat(O,"-treenode-checkbox-indeterminate"),K),"".concat(O,"-treenode-selected"),y),"".concat(O,"-treenode-loading"),m),"".concat(O,"-treenode-active"),C),"".concat(O,"-treenode-leaf-last"),G),"".concat(O,"-treenode-draggable"),B),"dragging",W),r(r(r(r(r(r(e,"drop-target",A===o),"drop-container",M===o),"drag-over",!R&&s),"drag-over-gap-top",!R&&l),"drag-over-gap-bottom",!R&&c),"filter-node",P&&P(T(this.props))))),style:i,draggable:F,"aria-grabbed":W,onDragStart:F?this.onDragStart:void 0,onDragEnter:B?this.onDragEnter:void 0,onDragOver:B?this.onDragOver:void 0,onDragLeave:B?this.onDragLeave:void 0,onDrop:B?this.onDrop:void 0,onDragEnd:B?this.onDragEnd:void 0,onMouseMove:b},q,j),N.createElement(H,{prefixCls:O,level:U,isStart:u,isEnd:v}),this.renderDragHandler(),this.renderSwitcher(),this.renderCheckbox(),this.renderSelector())}}]),p}(N.Component),F=function(e){return N.createElement(R.Consumer,null,(function(t){return N.createElement(B,a({},e,{context:t}))}))};function W(e,t){if(!e)return[];var n=e.slice(),o=n.indexOf(t);return o>=0&&n.splice(o,1),n}function q(e,t){var n=(e||[]).slice();return-1===n.indexOf(t)&&n.push(t),n}function V(e){return e.split("-")}function X(e,t){var n=[];return function e(){(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]).forEach((function(t){var o=t.key,r=t.children;n.push(o),e(r)}))}(E(t,e).children),n}function Y(e){if(e.parent){var t=V(e.pos);return Number(t[t.length-1])===e.parent.children.length-1}return!1}function z(e,t,n,o,r,a,d,i,s,l){var c,p=e.clientX,u=e.clientY,f=e.target.getBoundingClientRect(),v=f.top,h=f.height,y=(("rtl"===l?-1:1)*(((null==r?void 0:r.x)||0)-p)-12)/o,g=s.filter((function(e){var t;return null===(t=i[e])||void 0===t||null===(t=t.children)||void 0===t?void 0:t.length})),k=E(i,n.props.eventKey);if(u<v+h/2){var K=d.findIndex((function(e){return e.key===k.key})),N=d[K<=0?0:K-1].key;k=E(i,N)}var m=k.key,x=k,C=k.key,b=0,D=0;if(!g.includes(m))for(var S=0;S<y&&Y(k);S+=1)k=k.parent,D+=1;var w,O=t.props.data,P=k.node,L=!0;return w=V(k.pos),0===Number(w[w.length-1])&&0===k.level&&u<v+h/2&&a({dragNode:O,dropNode:P,dropPosition:-1})&&k.key===n.props.eventKey?b=-1:(x.children||[]).length&&g.includes(C)?a({dragNode:O,dropNode:P,dropPosition:0})?b=0:L=!1:0===D?y>-1.5?a({dragNode:O,dropNode:P,dropPosition:1})?b=1:L=!1:a({dragNode:O,dropNode:P,dropPosition:0})?b=0:a({dragNode:O,dropNode:P,dropPosition:1})?b=1:L=!1:a({dragNode:O,dropNode:P,dropPosition:1})?b=1:L=!1,{dropPosition:b,dropLevelOffset:D,dropTargetKey:k.key,dropTargetPos:k.pos,dragOverNodeKey:C,dropContainerKey:0===b?null:(null===(c=k.parent)||void 0===c?void 0:c.key)||null,dropAllowed:L}}function J(e,t){if(e)return t.multiple?e.slice():e.length?[e[0]]:e}function Q(e){if(!e)return null;var t;if(Array.isArray(e))t={checkedKeys:e,halfCheckedKeys:void 0};else{if("object"!==o(e))return v(!1,"`checkedKeys` is not an array or an object"),null;t={checkedKeys:e.checked||void 0,halfCheckedKeys:e.halfChecked||void 0}}return t}function Z(e,t){var o=new Set;function r(e){if(!o.has(e)){var n=E(t,e);if(n){o.add(e);var a=n.parent;n.node.disabled||a&&r(a.key)}}}return(e||[]).forEach((function(e){r(e)})),n(o)}F.displayName="TreeNode",F.isTreeNode=1;var $=["className","style","motion","motionNodes","motionType","onMotionStart","onMotionEnd","active","treeNodeRequiredProps"],ee=function(e,n){var o=e.className,r=e.style,d=e.motion,i=e.motionNodes,s=e.motionType,l=e.onMotionStart,c=e.onMotionEnd,v=e.active,h=e.treeNodeRequiredProps,y=t(e,$),g=N.useState(!0),K=p(g,2),m=K[0],E=K[1],C=N.useContext(R).prefixCls,b=i&&"hide"!==s;k((function(){i&&b!==m&&E(b)}),[i]);var D=N.useRef(!1),S=function(){i&&!D.current&&(D.current=!0,c())};!function(e,t){var n=N.useState(!1),o=p(n,2),r=o[0],a=o[1];k((function(){if(r)return e(),function(){t()}}),[r]),k((function(){return a(!0),function(){a(!1)}}),[])}((function(){i&&l()}),S);return i?N.createElement(x,a({ref:n,visible:m},d,{motionAppear:"show"===s,onVisibleChanged:function(e){b===e&&S()}}),(function(e,t){var n=e.className,o=e.style;return N.createElement("div",{ref:t,className:f("".concat(C,"-treenode-motion"),n),style:o},i.map((function(e){var t=Object.assign({},(u(e.data),e.data)),n=e.title,o=e.key,r=e.isStart,d=e.isEnd;delete t.children;var i=L(o,h);return N.createElement(F,a({},t,i,{title:n,active:v,data:e.data,key:o,isStart:r,isEnd:d}))})))})):N.createElement(F,a({domRef:n,className:o,style:r},y,{active:v}))};ee.displayName="MotionTreeNode";var te=N.forwardRef(ee);function ne(e,t,n){var o=e.findIndex((function(e){return e.key===n})),r=e[o+1],a=t.findIndex((function(e){return e.key===n}));if(r){var d=t.findIndex((function(e){return e.key===r.key}));return t.slice(a+1,d)}return t.slice(a+1)}var oe=["prefixCls","data","selectable","checkable","expandedKeys","selectedKeys","checkedKeys","loadedKeys","loadingKeys","halfCheckedKeys","keyEntities","disabled","dragging","dragOverNodeKey","dropPosition","motion","height","itemHeight","virtual","focusable","activeItem","focused","tabIndex","onKeyDown","onFocus","onBlur","onActiveChange","onListChangeStart","onListChangeEnd"],re={width:0,height:0,display:"flex",overflow:"hidden",opacity:0,border:0,padding:0,margin:0},ae=function(){},de="RC_TREE_MOTION_".concat(Math.random()),ie={key:de},se={key:de,level:0,index:0,pos:"0",node:ie,nodes:[ie]},le={parent:null,children:[],pos:se.pos,data:ie,title:null,key:de,isStart:[],isEnd:[]};function ce(e,t,n,o){return!1!==t&&n?e.slice(0,Math.ceil(n/o)+1):e}function pe(e){return D(e.key,e.pos)}var ue=N.forwardRef((function(e,n){var o=e.prefixCls,r=e.data;e.selectable,e.checkable;var d=e.expandedKeys,i=e.selectedKeys,s=e.checkedKeys,l=e.loadedKeys,c=e.loadingKeys,f=e.halfCheckedKeys,v=e.keyEntities,h=e.disabled,y=e.dragging,g=e.dragOverNodeKey,K=e.dropPosition,x=e.motion,E=e.height,C=e.itemHeight,b=e.virtual,S=e.focusable,w=e.activeItem,O=e.focused,P=e.tabIndex,T=e.onKeyDown,M=e.onFocus,A=e.onBlur,I=e.onActiveChange,R=e.onListChangeStart,j=e.onListChangeEnd,H=t(e,oe),_=N.useRef(null),U=N.useRef(null);N.useImperativeHandle(n,(function(){return{scrollTo:function(e){_.current.scrollTo(e)},getIndentWidth:function(){return U.current.offsetWidth}}}));var G=N.useState(d),B=p(G,2),F=B[0],W=B[1],q=N.useState(r),V=p(q,2),X=V[0],Y=V[1],z=N.useState(r),J=p(z,2),Q=J[0],Z=J[1],$=N.useState([]),ee=p($,2),ie=ee[0],se=ee[1],ue=N.useState(null),fe=p(ue,2),ve=fe[0],he=fe[1],ye=N.useRef(r);function ge(){var e=ye.current;Y(e),Z(e),se([]),he(null),j()}ye.current=r,k((function(){W(d);var e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=e.length,o=t.length;if(1!==Math.abs(n-o))return{add:!1,key:null};function r(e,t){var n=new Map;e.forEach((function(e){n.set(e,!0)}));var o=t.filter((function(e){return!n.has(e)}));return 1===o.length?o[0]:null}return n<o?{add:!0,key:r(e,t)}:{add:!1,key:r(t,e)}}(F,d);if(null!==e.key)if(e.add){var t=X.findIndex((function(t){return t.key===e.key})),n=ce(ne(X,r,e.key),b,E,C),o=X.slice();o.splice(t+1,0,le),Z(o),se(n),he("show")}else{var a=r.findIndex((function(t){return t.key===e.key})),i=ce(ne(r,X,e.key),b,E,C),s=r.slice();s.splice(a+1,0,le),Z(s),se(i),he("hide")}else X!==r&&(Y(r),Z(r))}),[d,r]),N.useEffect((function(){y||ge()}),[y]);var ke=x?Q:r,Ke={expandedKeys:d,selectedKeys:i,loadedKeys:l,loadingKeys:c,checkedKeys:s,halfCheckedKeys:f,dragOverNodeKey:g,dropPosition:K,keyEntities:v};return N.createElement(N.Fragment,null,O&&w&&N.createElement("span",{style:re,"aria-live":"assertive"},function(e){for(var t=String(e.data.key),n=e;n.parent;)n=n.parent,t="".concat(n.data.key," > ").concat(t);return t}(w)),N.createElement("div",null,N.createElement("input",{style:re,disabled:!1===S||h,tabIndex:!1!==S?P:null,onKeyDown:T,onFocus:M,onBlur:A,value:"",onChange:ae,"aria-label":"for screen reader"})),N.createElement("div",{className:"".concat(o,"-treenode"),"aria-hidden":!0,style:{position:"absolute",pointerEvents:"none",visibility:"hidden",height:0,overflow:"hidden",border:0,padding:0}},N.createElement("div",{className:"".concat(o,"-indent")},N.createElement("div",{ref:U,className:"".concat(o,"-indent-unit")}))),N.createElement(m,a({},H,{data:ke,itemKey:pe,height:E,fullHeight:!1,virtual:b,itemHeight:C,prefixCls:"".concat(o,"-list"),ref:_,onVisibleChange:function(e,t){var n=new Set(e);t.filter((function(e){return!n.has(e)})).some((function(e){return pe(e)===de}))&&ge()}}),(function(e){var t=e.pos,n=Object.assign({},(u(e.data),e.data)),o=e.title,r=e.key,d=e.isStart,i=e.isEnd,s=D(r,t);delete n.key,delete n.children;var l=L(s,Ke);return N.createElement(te,a({},n,l,{title:o,active:!!w&&r===w.key,pos:t,data:e.data,isStart:d,isEnd:i,motion:x,motionNodes:r===de?ie:null,motionType:ve,onMotionStart:R,onMotionEnd:ge,treeNodeRequiredProps:Ke,onMouseMove:function(){I(null)}}))})))}));ue.displayName="NodeList";var fe=function(t){d(u,t);var p=i(u);function u(){var t;s(this,u);for(var o=arguments.length,a=new Array(o),d=0;d<o;d++)a[d]=arguments[d];return t=p.call.apply(p,[this].concat(a)),r(l(t),"destroyed",!1),r(l(t),"delayedDragEnterLogic",void 0),r(l(t),"loadingRetryTimes",{}),r(l(t),"state",{keyEntities:{},indent:null,selectedKeys:[],checkedKeys:[],halfCheckedKeys:[],loadedKeys:[],loadingKeys:[],expandedKeys:[],draggingNodeKey:null,dragChildrenKeys:[],dropTargetKey:null,dropPosition:null,dropContainerKey:null,dropLevelOffset:null,dropTargetPos:null,dropAllowed:!0,dragOverNodeKey:null,treeData:[],flattenNodes:[],focused:!1,activeKey:null,listChanging:!1,prevProps:null,fieldNames:S()}),r(l(t),"dragStartMousePosition",null),r(l(t),"dragNode",void 0),r(l(t),"currentMouseOverDroppableNodeKey",null),r(l(t),"listRef",N.createRef()),r(l(t),"onNodeDragStart",(function(e,n){var o=t.state,r=o.expandedKeys,a=o.keyEntities,d=t.props.onDragStart,i=n.props.eventKey;t.dragNode=n,t.dragStartMousePosition={x:e.clientX,y:e.clientY};var s=W(r,i);t.setState({draggingNodeKey:i,dragChildrenKeys:X(i,a),indent:t.listRef.current.getIndentWidth()}),t.setExpandedKeys(s),window.addEventListener("dragend",t.onWindowDragEnd),null==d||d({event:e,node:T(n.props)})})),r(l(t),"onNodeDragEnter",(function(e,o){var r=t.state,a=r.expandedKeys,d=r.keyEntities,i=r.dragChildrenKeys,s=r.flattenNodes,c=r.indent,p=t.props,u=p.onDragEnter,f=p.onExpand,v=p.allowDrop,h=p.direction,y=o.props,g=y.pos,k=y.eventKey,K=l(t).dragNode;if(t.currentMouseOverDroppableNodeKey!==k&&(t.currentMouseOverDroppableNodeKey=k),K){var N=z(e,K,o,c,t.dragStartMousePosition,v,s,d,a,h),m=N.dropPosition,x=N.dropLevelOffset,C=N.dropTargetKey,b=N.dropContainerKey,D=N.dropTargetPos,S=N.dropAllowed,w=N.dragOverNodeKey;-1===i.indexOf(C)&&S?(t.delayedDragEnterLogic||(t.delayedDragEnterLogic={}),Object.keys(t.delayedDragEnterLogic).forEach((function(e){clearTimeout(t.delayedDragEnterLogic[e])})),K.props.eventKey!==o.props.eventKey&&(e.persist(),t.delayedDragEnterLogic[g]=window.setTimeout((function(){if(null!==t.state.draggingNodeKey){var r=n(a),i=E(d,o.props.eventKey);i&&(i.children||[]).length&&(r=q(a,o.props.eventKey)),"expandedKeys"in t.props||t.setExpandedKeys(r),null==f||f(r,{node:T(o.props),expanded:!0,nativeEvent:e.nativeEvent})}}),800)),K.props.eventKey!==C||0!==x?(t.setState({dragOverNodeKey:w,dropPosition:m,dropLevelOffset:x,dropTargetKey:C,dropContainerKey:b,dropTargetPos:D,dropAllowed:S}),null==u||u({event:e,node:T(o.props),expandedKeys:a})):t.resetDragState()):t.resetDragState()}else t.resetDragState()})),r(l(t),"onNodeDragOver",(function(e,n){var o=t.state,r=o.dragChildrenKeys,a=o.flattenNodes,d=o.keyEntities,i=o.expandedKeys,s=o.indent,c=t.props,p=c.onDragOver,u=c.allowDrop,f=c.direction,v=l(t).dragNode;if(v){var h=z(e,v,n,s,t.dragStartMousePosition,u,a,d,i,f),y=h.dropPosition,g=h.dropLevelOffset,k=h.dropTargetKey,K=h.dropContainerKey,N=h.dropAllowed,m=h.dropTargetPos,x=h.dragOverNodeKey;-1===r.indexOf(k)&&N&&(v.props.eventKey===k&&0===g?null===t.state.dropPosition&&null===t.state.dropLevelOffset&&null===t.state.dropTargetKey&&null===t.state.dropContainerKey&&null===t.state.dropTargetPos&&!1===t.state.dropAllowed&&null===t.state.dragOverNodeKey||t.resetDragState():y===t.state.dropPosition&&g===t.state.dropLevelOffset&&k===t.state.dropTargetKey&&K===t.state.dropContainerKey&&m===t.state.dropTargetPos&&N===t.state.dropAllowed&&x===t.state.dragOverNodeKey||t.setState({dropPosition:y,dropLevelOffset:g,dropTargetKey:k,dropContainerKey:K,dropTargetPos:m,dropAllowed:N,dragOverNodeKey:x}),null==p||p({event:e,node:T(n.props)}))}})),r(l(t),"onNodeDragLeave",(function(e,n){t.currentMouseOverDroppableNodeKey!==n.props.eventKey||e.currentTarget.contains(e.relatedTarget)||(t.resetDragState(),t.currentMouseOverDroppableNodeKey=null);var o=t.props.onDragLeave;null==o||o({event:e,node:T(n.props)})})),r(l(t),"onWindowDragEnd",(function(e){t.onNodeDragEnd(e,null,!0),window.removeEventListener("dragend",t.onWindowDragEnd)})),r(l(t),"onNodeDragEnd",(function(e,n){var o=t.props.onDragEnd;t.setState({dragOverNodeKey:null}),t.cleanDragState(),null==o||o({event:e,node:T(n.props)}),t.dragNode=null,window.removeEventListener("dragend",t.onWindowDragEnd)})),r(l(t),"onNodeDrop",(function(n,o){var r,a=arguments.length>2&&void 0!==arguments[2]&&arguments[2],d=t.state,i=d.dragChildrenKeys,s=d.dropPosition,l=d.dropTargetKey,c=d.dropTargetPos;if(d.dropAllowed){var p=t.props.onDrop;if(t.setState({dragOverNodeKey:null}),t.cleanDragState(),null!==l){var u=e(e({},L(l,t.getTreeNodeRequiredProps())),{},{active:(null===(r=t.getActiveItem())||void 0===r?void 0:r.key)===l,data:E(t.state.keyEntities,l).node}),f=-1!==i.indexOf(l);v(!f,"Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.");var h=V(c),y={event:n,node:T(u),dragNode:t.dragNode?T(t.dragNode.props):null,dragNodesKeys:[t.dragNode.props.eventKey].concat(i),dropToGap:0!==s,dropPosition:s+Number(h[h.length-1])};a||null==p||p(y),t.dragNode=null}}})),r(l(t),"cleanDragState",(function(){null!==t.state.draggingNodeKey&&t.setState({draggingNodeKey:null,dropPosition:null,dropContainerKey:null,dropTargetKey:null,dropLevelOffset:null,dropAllowed:!0,dragOverNodeKey:null}),t.dragStartMousePosition=null,t.currentMouseOverDroppableNodeKey=null})),r(l(t),"triggerExpandActionExpand",(function(n,o){var r=t.state,a=r.expandedKeys,d=r.flattenNodes,i=o.expanded,s=o.key;if(!(o.isLeaf||n.shiftKey||n.metaKey||n.ctrlKey)){var l=d.filter((function(e){return e.key===s}))[0],c=T(e(e({},L(s,t.getTreeNodeRequiredProps())),{},{data:l.data}));t.setExpandedKeys(i?W(a,s):q(a,s)),t.onNodeExpand(n,c)}})),r(l(t),"onNodeClick",(function(e,n){var o=t.props,r=o.onClick;"click"===o.expandAction&&t.triggerExpandActionExpand(e,n),null==r||r(e,n)})),r(l(t),"onNodeDoubleClick",(function(e,n){var o=t.props,r=o.onDoubleClick;"doubleClick"===o.expandAction&&t.triggerExpandActionExpand(e,n),null==r||r(e,n)})),r(l(t),"onNodeSelect",(function(e,n){var o=t.state.selectedKeys,r=t.state,a=r.keyEntities,d=r.fieldNames,i=t.props,s=i.onSelect,l=i.multiple,c=n.selected,p=n[d.key],u=!c,f=(o=u?l?q(o,p):[p]:W(o,p)).map((function(e){var t=E(a,e);return t?t.node:null})).filter((function(e){return e}));t.setUncontrolledState({selectedKeys:o}),null==s||s(o,{event:"select",selected:u,node:n,selectedNodes:f,nativeEvent:e.nativeEvent})})),r(l(t),"onNodeCheck",(function(e,o,r){var a,d=t.state,i=d.keyEntities,s=d.checkedKeys,l=d.halfCheckedKeys,c=t.props,p=c.checkStrictly,u=c.onCheck,f=o.key,v={event:"check",node:o,checked:r,nativeEvent:e.nativeEvent};if(p){var h=r?q(s,f):W(s,f);a={checked:h,halfChecked:W(l,f)},v.checkedNodes=h.map((function(e){return E(i,e)})).filter((function(e){return e})).map((function(e){return e.node})),t.setUncontrolledState({checkedKeys:h})}else{var y=I([].concat(n(s),[f]),!0,i),g=y.checkedKeys,k=y.halfCheckedKeys;if(!r){var K=new Set(g);K.delete(f);var N=I(Array.from(K),{checked:!1,halfCheckedKeys:k},i);g=N.checkedKeys,k=N.halfCheckedKeys}a=g,v.checkedNodes=[],v.checkedNodesPositions=[],v.halfCheckedKeys=k,g.forEach((function(e){var t=E(i,e);if(t){var n=t.node,o=t.pos;v.checkedNodes.push(n),v.checkedNodesPositions.push({node:n,pos:o})}})),t.setUncontrolledState({checkedKeys:g},!1,{halfCheckedKeys:k})}null==u||u(a,v)})),r(l(t),"onNodeLoad",(function(e){var n,o=e.key,r=E(t.state.keyEntities,o);if(null==r||null===(n=r.children)||void 0===n||!n.length){var a=new Promise((function(n,r){t.setState((function(a){var d=a.loadedKeys,i=void 0===d?[]:d,s=a.loadingKeys,l=void 0===s?[]:s,c=t.props,p=c.loadData,u=c.onLoad;return p&&-1===i.indexOf(o)&&-1===l.indexOf(o)?(p(e).then((function(){var r=q(t.state.loadedKeys,o);null==u||u(r,{event:"load",node:e}),t.setUncontrolledState({loadedKeys:r}),t.setState((function(e){return{loadingKeys:W(e.loadingKeys,o)}})),n()})).catch((function(e){if(t.setState((function(e){return{loadingKeys:W(e.loadingKeys,o)}})),t.loadingRetryTimes[o]=(t.loadingRetryTimes[o]||0)+1,t.loadingRetryTimes[o]>=10){var a=t.state.loadedKeys;v(!1,"Retry for `loadData` many times but still failed. No more retry."),t.setUncontrolledState({loadedKeys:q(a,o)}),n()}r(e)})),{loadingKeys:q(l,o)}):null}))}));return a.catch((function(){})),a}})),r(l(t),"onNodeMouseEnter",(function(e,n){var o=t.props.onMouseEnter;null==o||o({event:e,node:n})})),r(l(t),"onNodeMouseLeave",(function(e,n){var o=t.props.onMouseLeave;null==o||o({event:e,node:n})})),r(l(t),"onNodeContextMenu",(function(e,n){var o=t.props.onRightClick;o&&(e.preventDefault(),o({event:e,node:n}))})),r(l(t),"onFocus",(function(){var e=t.props.onFocus;t.setState({focused:!0});for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];null==e||e.apply(void 0,o)})),r(l(t),"onBlur",(function(){var e=t.props.onBlur;t.setState({focused:!1}),t.onActiveChange(null);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];null==e||e.apply(void 0,o)})),r(l(t),"getTreeNodeRequiredProps",(function(){var e=t.state;return{expandedKeys:e.expandedKeys||[],selectedKeys:e.selectedKeys||[],loadedKeys:e.loadedKeys||[],loadingKeys:e.loadingKeys||[],checkedKeys:e.checkedKeys||[],halfCheckedKeys:e.halfCheckedKeys||[],dragOverNodeKey:e.dragOverNodeKey,dropPosition:e.dropPosition,keyEntities:e.keyEntities}})),r(l(t),"setExpandedKeys",(function(e){var n=t.state,o=O(n.treeData,e,n.fieldNames);t.setUncontrolledState({expandedKeys:e,flattenNodes:o},!0)})),r(l(t),"onNodeExpand",(function(e,n){var o=t.state.expandedKeys,r=t.state,a=r.listChanging,d=r.fieldNames,i=t.props,s=i.onExpand,l=i.loadData,c=n.expanded,p=n[d.key];if(!a){var u=o.indexOf(p),f=!c;if(v(c&&-1!==u||!c&&-1===u,"Expand state not sync with index check"),o=f?q(o,p):W(o,p),t.setExpandedKeys(o),null==s||s(o,{node:n,expanded:f,nativeEvent:e.nativeEvent}),f&&l){var h=t.onNodeLoad(n);h&&h.then((function(){var e=O(t.state.treeData,o,d);t.setUncontrolledState({flattenNodes:e})})).catch((function(){var e=W(t.state.expandedKeys,p);t.setExpandedKeys(e)}))}}})),r(l(t),"onListChangeStart",(function(){t.setUncontrolledState({listChanging:!0})})),r(l(t),"onListChangeEnd",(function(){setTimeout((function(){t.setUncontrolledState({listChanging:!1})}))})),r(l(t),"onActiveChange",(function(e){var n=t.state.activeKey,o=t.props,r=o.onActiveChange,a=o.itemScrollOffset,d=void 0===a?0:a;n!==e&&(t.setState({activeKey:e}),null!==e&&t.scrollTo({key:e,offset:d}),null==r||r(e))})),r(l(t),"getActiveItem",(function(){var e=t.state,n=e.activeKey,o=e.flattenNodes;return null===n?null:o.find((function(e){return e.key===n}))||null})),r(l(t),"offsetActiveKey",(function(e){var n=t.state,o=n.flattenNodes,r=n.activeKey,a=o.findIndex((function(e){return e.key===r}));-1===a&&e<0&&(a=o.length);var d=o[a=(a+e+o.length)%o.length];if(d){var i=d.key;t.onActiveChange(i)}else t.onActiveChange(null)})),r(l(t),"onKeyDown",(function(n){var o=t.state,r=o.activeKey,a=o.expandedKeys,d=o.checkedKeys,i=o.fieldNames,s=t.props,l=s.onKeyDown,c=s.checkable,p=s.selectable;switch(n.which){case K.UP:t.offsetActiveKey(-1),n.preventDefault();break;case K.DOWN:t.offsetActiveKey(1),n.preventDefault()}var u=t.getActiveItem();if(u&&u.data){var f=t.getTreeNodeRequiredProps(),v=!1===u.data.isLeaf||!!(u.data[i.children]||[]).length,h=T(e(e({},L(r,f)),{},{data:u.data,active:!0}));switch(n.which){case K.LEFT:v&&a.includes(r)?t.onNodeExpand({},h):u.parent&&t.onActiveChange(u.parent.key),n.preventDefault();break;case K.RIGHT:v&&!a.includes(r)?t.onNodeExpand({},h):u.children&&u.children.length&&t.onActiveChange(u.children[0].key),n.preventDefault();break;case K.ENTER:case K.SPACE:!c||h.disabled||!1===h.checkable||h.disableCheckbox?c||!p||h.disabled||!1===h.selectable||t.onNodeSelect({},h):t.onNodeCheck({},h,!d.includes(r))}}null==l||l(n)})),r(l(t),"setUncontrolledState",(function(n){var o=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!t.destroyed){var a=!1,d=!0,i={};Object.keys(n).forEach((function(e){e in t.props?d=!1:(a=!0,i[e]=n[e])})),!a||o&&!d||t.setState(e(e({},i),r))}})),r(l(t),"scrollTo",(function(e){t.listRef.current.scrollTo(e)})),t}return c(u,[{key:"componentDidMount",value:function(){this.destroyed=!1,this.onUpdated()}},{key:"componentDidUpdate",value:function(){this.onUpdated()}},{key:"onUpdated",value:function(){var e=this.props,t=e.activeKey,n=e.itemScrollOffset,o=void 0===n?0:n;void 0!==t&&t!==this.state.activeKey&&(this.setState({activeKey:t}),null!==t&&this.scrollTo({key:t,offset:o}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("dragend",this.onWindowDragEnd),this.destroyed=!0}},{key:"resetDragState",value:function(){this.setState({dragOverNodeKey:null,dropPosition:null,dropLevelOffset:null,dropTargetKey:null,dropContainerKey:null,dropTargetPos:null,dropAllowed:!1})}},{key:"render",value:function(){var e,t=this.state,n=t.focused,d=t.flattenNodes,i=t.keyEntities,s=t.draggingNodeKey,l=t.activeKey,c=t.dropLevelOffset,p=t.dropContainerKey,u=t.dropTargetKey,v=t.dropPosition,h=t.dragOverNodeKey,y=t.indent,k=this.props,K=k.prefixCls,m=k.className,x=k.style,E=k.showLine,C=k.focusable,b=k.tabIndex,D=void 0===b?0:b,S=k.selectable,w=k.showIcon,O=k.icon,P=k.switcherIcon,L=k.draggable,T=k.checkable,M=k.checkStrictly,A=k.disabled,I=k.motion,j=k.loadData,H=k.filterTreeNode,_=k.height,U=k.itemHeight,G=k.virtual,B=k.titleRender,F=k.dropIndicatorRender,W=k.onContextMenu,q=k.onScroll,V=k.direction,X=k.rootClassName,Y=k.rootStyle,z=g(this.props,{aria:!0,data:!0});return L&&(e="object"===o(L)?L:"function"==typeof L?{nodeDraggable:L}:{}),N.createElement(R.Provider,{value:{prefixCls:K,selectable:S,showIcon:w,icon:O,switcherIcon:P,draggable:e,draggingNodeKey:s,checkable:T,checkStrictly:M,disabled:A,keyEntities:i,dropLevelOffset:c,dropContainerKey:p,dropTargetKey:u,dropPosition:v,dragOverNodeKey:h,indent:y,direction:V,dropIndicatorRender:F,loadData:j,filterTreeNode:H,titleRender:B,onNodeClick:this.onNodeClick,onNodeDoubleClick:this.onNodeDoubleClick,onNodeExpand:this.onNodeExpand,onNodeSelect:this.onNodeSelect,onNodeCheck:this.onNodeCheck,onNodeLoad:this.onNodeLoad,onNodeMouseEnter:this.onNodeMouseEnter,onNodeMouseLeave:this.onNodeMouseLeave,onNodeContextMenu:this.onNodeContextMenu,onNodeDragStart:this.onNodeDragStart,onNodeDragEnter:this.onNodeDragEnter,onNodeDragOver:this.onNodeDragOver,onNodeDragLeave:this.onNodeDragLeave,onNodeDragEnd:this.onNodeDragEnd,onNodeDrop:this.onNodeDrop}},N.createElement("div",{role:"tree",className:f(K,m,X,r(r(r({},"".concat(K,"-show-line"),E),"".concat(K,"-focused"),n),"".concat(K,"-active-focused"),null!==l)),style:Y},N.createElement(ue,a({ref:this.listRef,prefixCls:K,style:x,data:d,disabled:A,selectable:S,checkable:!!T,motion:I,dragging:null!==s,height:_,itemHeight:U,virtual:G,focusable:C,focused:n,tabIndex:D,activeItem:this.getActiveItem(),onFocus:this.onFocus,onBlur:this.onBlur,onKeyDown:this.onKeyDown,onActiveChange:this.onActiveChange,onListChangeStart:this.onListChangeStart,onListChangeEnd:this.onListChangeEnd,onContextMenu:W,onScroll:q},this.getTreeNodeRequiredProps(),z))))}}],[{key:"getDerivedStateFromProps",value:function(t,n){var o,a=n.prevProps,d={prevProps:t};function i(e){return!a&&e in t||a&&a[e]!==t[e]}var s=n.fieldNames;if(i("fieldNames")&&(s=S(t.fieldNames),d.fieldNames=s),i("treeData")?o=t.treeData:i("children")&&(v(!1,"`children` of Tree is deprecated. Please use `treeData` instead."),o=w(t.children)),o){d.treeData=o;var l=P(o,{fieldNames:s});d.keyEntities=e(r({},de,se),l.keyEntities)}var c,p=d.keyEntities||n.keyEntities;if(i("expandedKeys")||a&&i("autoExpandParent"))d.expandedKeys=t.autoExpandParent||!a&&t.defaultExpandParent?Z(t.expandedKeys,p):t.expandedKeys;else if(!a&&t.defaultExpandAll){var u=e({},p);delete u[de],d.expandedKeys=Object.keys(u).map((function(e){return u[e].key}))}else!a&&t.defaultExpandedKeys&&(d.expandedKeys=t.autoExpandParent||t.defaultExpandParent?Z(t.defaultExpandedKeys,p):t.defaultExpandedKeys);if(d.expandedKeys||delete d.expandedKeys,o||d.expandedKeys){var f=O(o||n.treeData,d.expandedKeys||n.expandedKeys,s);d.flattenNodes=f}if((t.selectable&&(i("selectedKeys")?d.selectedKeys=J(t.selectedKeys,t):!a&&t.defaultSelectedKeys&&(d.selectedKeys=J(t.defaultSelectedKeys,t))),t.checkable)&&(i("checkedKeys")?c=Q(t.checkedKeys)||{}:!a&&t.defaultCheckedKeys?c=Q(t.defaultCheckedKeys)||{}:o&&(c=Q(t.checkedKeys)||{checkedKeys:n.checkedKeys,halfCheckedKeys:n.halfCheckedKeys}),c)){var h=c,y=h.checkedKeys,g=void 0===y?[]:y,k=h.halfCheckedKeys,K=void 0===k?[]:k;if(!t.checkStrictly){var N=I(g,!0,p);g=N.checkedKeys,K=N.halfCheckedKeys}d.checkedKeys=g,d.halfCheckedKeys=K}return i("loadedKeys")&&(d.loadedKeys=t.loadedKeys),d}}]),u}(N.Component);r(fe,"defaultProps",{prefixCls:"rc-tree",showLine:!1,showIcon:!0,selectable:!0,multiple:!1,checkable:!1,disabled:!1,checkStrictly:!1,draggable:!1,defaultExpandParent:!0,autoExpandParent:!1,defaultExpandAll:!1,defaultExpandedKeys:[],defaultCheckedKeys:[],defaultSelectedKeys:[],dropIndicatorRender:function(e){var t=e.dropPosition,n=e.dropLevelOffset,o=e.indent,r={pointerEvents:"none",position:"absolute",right:0,backgroundColor:"red",height:2};switch(t){case-1:r.top=0,r.left=-n*o;break;case 1:r.bottom=0,r.left=-n*o;break;case 0:r.bottom=0,r.left=o}return N.createElement("div",{style:r})},allowDrop:function(){return!0},expandAction:!1}),r(fe,"TreeNode",F);export{F as C,fe as T,I as a,W as b,P as c,q as d,Z as e,S as f,w as g};
