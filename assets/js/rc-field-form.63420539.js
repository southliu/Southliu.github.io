import{r as F}from"./react.bfbbfd99.js";import{e as q,c as b,f as V,s as re,t as _,b as ee,r as de,g as Ce,m as Ae,n as Ie,a as fe,u as xe,_ as ge,d as B}from"./@babel_runtime.3e487d10.js";import{A as H,C as Ue,D as Le,t as We}from"./rc-util.4aaadd18.js";import{S as je}from"./async-validator.dee29e8b.js";var z="RC_FORM_INTERNAL_HOOKS",R=function(){H(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},J=F.createContext({getFieldValue:R,getFieldsValue:R,getFieldError:R,getFieldWarning:R,getFieldsError:R,isFieldsTouched:R,isFieldTouched:R,isFieldValidating:R,isFieldsValidating:R,resetFields:R,setFields:R,setFieldValue:R,setFieldsValue:R,validateFields:R,submit:R,getInternalHooks:function(){return R(),{dispatch:R,initEntityValue:R,registerField:R,useSubscribe:R,setInitialValues:R,destroyForm:R,setCallbacks:R,registerWatch:R,getFields:R,setValidateMessages:R,setPreserve:R,getInitialValue:R}}});function ae(u){return u==null?[]:Array.isArray(u)?u:[u]}var T="'${name}' is not a valid ${type}",ke={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:T,method:T,array:T,object:T,number:T,date:T,boolean:T,integer:T,float:T,regexp:T,email:T,url:T,hex:T},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}};function te(u){return Array.isArray(u)?_e(u):q(u)==="object"&&u!==null?He(u):u}function He(u){if(Object.getPrototypeOf(u)===Object.prototype){var a={};for(var r in u)a[r]=te(u[r]);return a}return u}function _e(u){return u.map(function(a){return te(a)})}function O(u){return ae(u)}function j(u,a){var r=Ue(u,a);return r}function W(u,a,r){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,e=Le(u,a,r,t);return e}function ye(u,a){var r={};return a.forEach(function(t){var e=j(u,t);r=W(r,t,e)}),r}function Y(u,a){return u&&u.some(function(r){return $e(r,a)})}function Ve(u){return q(u)==="object"&&u!==null&&Object.getPrototypeOf(u)===Object.prototype}function Re(u,a){var r=Array.isArray(u)?b(u):V({},u);return a&&Object.keys(a).forEach(function(t){var e=r[t],n=a[t],o=Ve(e)&&Ve(n);r[t]=o?Re(e,n||{}):te(n)}),r}function Z(u){for(var a=arguments.length,r=new Array(a>1?a-1:0),t=1;t<a;t++)r[t-1]=arguments[t];return r.reduce(function(e,n){return Re(e,n)},u)}function $e(u,a){return!u||!a||u.length!==a.length?!1:u.every(function(r,t){return a[t]===r})}function De(u,a){if(u===a)return!0;if(!u&&a||u&&!a||!u||!a||q(u)!=="object"||q(a)!=="object")return!1;var r=Object.keys(u),t=Object.keys(a),e=new Set([].concat(r,t));return b(e).every(function(n){var o=u[n],c=a[n];return typeof o=="function"&&typeof c=="function"?!0:o===c})}function Ke(u){var a=arguments.length<=1?void 0:arguments[1];return a&&a.target&&q(a.target)==="object"&&u in a.target?a.target[u]:a}function Pe(u,a,r){var t=u.length;if(a<0||a>=t||r<0||r>=t)return u;var e=u[a],n=a-r;return n>0?[].concat(b(u.slice(0,r)),[e],b(u.slice(r,a)),b(u.slice(a+1,t))):n<0?[].concat(b(u.slice(0,a)),b(u.slice(a+1,r+1)),[e],b(u.slice(r+1,t))):u}var ze=je;function Ge(u,a){return u.replace(/\$\{\w+\}/g,function(r){var t=r.slice(2,-1);return a[t]})}var Ee="CODE_LOGIC_ERROR";function se(u,a,r,t,e){return ue.apply(this,arguments)}function ue(){return ue=re(_().mark(function u(a,r,t,e,n){var o,c,l,i,s,d,f,y,p;return _().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return o=V({},t),delete o.ruleIndex,o.validator&&(c=o.validator,o.validator=function(){try{return c.apply(void 0,arguments)}catch(m){return console.error(m),Promise.reject(Ee)}}),l=null,o&&o.type==="array"&&o.defaultField&&(l=o.defaultField,delete o.defaultField),i=new ze(ee({},a,[o])),s=Z({},ke,e.validateMessages),i.messages(s),d=[],g.prev=9,g.next=12,Promise.resolve(i.validate(ee({},a,r),V({},e)));case 12:g.next=17;break;case 14:g.prev=14,g.t0=g.catch(9),g.t0.errors&&(d=g.t0.errors.map(function(m,v){var w=m.message,P=w===Ee?s.default:w;return F.isValidElement(P)?F.cloneElement(P,{key:"error_".concat(v)}):P}));case 17:if(!(!d.length&&l)){g.next=22;break}return g.next=20,Promise.all(r.map(function(m,v){return se("".concat(a,".").concat(v),m,l,e,n)}));case 20:return f=g.sent,g.abrupt("return",f.reduce(function(m,v){return[].concat(b(m),b(v))},[]));case 22:return y=V(V({},t),{},{name:a,enum:(t.enum||[]).join(", ")},n),p=d.map(function(m){return typeof m=="string"?Ge(m,y):m}),g.abrupt("return",p);case 25:case"end":return g.stop()}},u,null,[[9,14]])})),ue.apply(this,arguments)}function qe(u,a,r,t,e,n){var o=u.join("."),c=r.map(function(s,d){var f=s.validator,y=V(V({},s),{},{ruleIndex:d});return f&&(y.validator=function(p,h,g){var m=!1,v=function(){for(var $=arguments.length,E=new Array($),N=0;N<$;N++)E[N]=arguments[N];Promise.resolve().then(function(){H(!m,"Your validator function has already return a promise. `callback` will be ignored."),m||g.apply(void 0,E)})},w=f(p,h,v);m=w&&typeof w.then=="function"&&typeof w.catch=="function",H(m,"`callback` is deprecated. Please return a promise instead."),m&&w.then(function(){g()}).catch(function(P){g(P||" ")})}),y}).sort(function(s,d){var f=s.warningOnly,y=s.ruleIndex,p=d.warningOnly,h=d.ruleIndex;return!!f==!!p?y-h:f?1:-1}),l;if(e===!0)l=new Promise(function(){var s=re(_().mark(function d(f,y){var p,h,g;return _().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:p=0;case 1:if(!(p<c.length)){v.next=12;break}return h=c[p],v.next=5,se(o,a,h,t,n);case 5:if(g=v.sent,!g.length){v.next=9;break}return y([{errors:g,rule:h}]),v.abrupt("return");case 9:p+=1,v.next=1;break;case 12:f([]);case 13:case"end":return v.stop()}},d)}));return function(d,f){return s.apply(this,arguments)}}());else{var i=c.map(function(s){return se(o,a,s,t,n).then(function(d){return{errors:d,rule:s}})});l=(e?Ye(i):Je(i)).then(function(s){return Promise.reject(s)})}return l.catch(function(s){return s}),l}function Je(u){return le.apply(this,arguments)}function le(){return le=re(_().mark(function u(a){return _().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all(a).then(function(e){var n,o=(n=[]).concat.apply(n,b(e));return o}));case 1:case"end":return t.stop()}},u)})),le.apply(this,arguments)}function Ye(u){return oe.apply(this,arguments)}function oe(){return oe=re(_().mark(function u(a){var r;return _().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=0,e.abrupt("return",new Promise(function(n){a.forEach(function(o){o.then(function(c){c.errors.length&&n([c]),r+=1,r===a.length&&n([])})})}));case 2:case"end":return e.stop()}},u)})),oe.apply(this,arguments)}var Be=["name"],A=[];function be(u,a,r,t,e,n){return typeof u=="function"?u(a,r,"source"in n?{source:n.source}:{}):t!==e}var ve=function(u){Ae(r,u);var a=Ie(r);function r(t){var e;if(fe(this,r),e=a.call(this,t),e.state={resetCount:0},e.cancelRegisterFunc=null,e.mounted=!1,e.touched=!1,e.dirty=!1,e.validatePromise=null,e.prevValidating=void 0,e.errors=A,e.warnings=A,e.cancelRegister=function(){var l=e.props,i=l.preserve,s=l.isListField,d=l.name;e.cancelRegisterFunc&&e.cancelRegisterFunc(s,i,O(d)),e.cancelRegisterFunc=null},e.getNamePath=function(){var l=e.props,i=l.name,s=l.fieldContext,d=s.prefixName,f=d===void 0?[]:d;return i!==void 0?[].concat(b(f),b(i)):[]},e.getRules=function(){var l=e.props,i=l.rules,s=i===void 0?[]:i,d=l.fieldContext;return s.map(function(f){return typeof f=="function"?f(d):f})},e.refresh=function(){!e.mounted||e.setState(function(l){var i=l.resetCount;return{resetCount:i+1}})},e.triggerMetaEvent=function(l){var i=e.props.onMetaChange;i==null||i(V(V({},e.getMeta()),{},{destroy:l}))},e.onStoreChange=function(l,i,s){var d=e.props,f=d.shouldUpdate,y=d.dependencies,p=y===void 0?[]:y,h=d.onReset,g=s.store,m=e.getNamePath(),v=e.getValue(l),w=e.getValue(g),P=i&&Y(i,m);switch(s.type==="valueUpdate"&&s.source==="external"&&v!==w&&(e.touched=!0,e.dirty=!0,e.validatePromise=null,e.errors=A,e.warnings=A,e.triggerMetaEvent()),s.type){case"reset":if(!i||P){e.touched=!1,e.dirty=!1,e.validatePromise=null,e.errors=A,e.warnings=A,e.triggerMetaEvent(),h==null||h(),e.refresh();return}break;case"remove":{if(f){e.reRender();return}break}case"setField":{if(P){var $=s.data;"touched"in $&&(e.touched=$.touched),"validating"in $&&!("originRCField"in $)&&(e.validatePromise=$.validating?Promise.resolve([]):null),"errors"in $&&(e.errors=$.errors||A),"warnings"in $&&(e.warnings=$.warnings||A),e.dirty=!0,e.triggerMetaEvent(),e.reRender();return}if(f&&!m.length&&be(f,l,g,v,w,s)){e.reRender();return}break}case"dependenciesUpdate":{var E=p.map(O);if(E.some(function(N){return Y(s.relatedFields,N)})){e.reRender();return}break}default:if(P||(!p.length||m.length||f)&&be(f,l,g,v,w,s)){e.reRender();return}break}f===!0&&e.reRender()},e.validateRules=function(l){var i=e.getNamePath(),s=e.getValue(),d=Promise.resolve().then(function(){if(!e.mounted)return[];var f=e.props,y=f.validateFirst,p=y===void 0?!1:y,h=f.messageVariables,g=l||{},m=g.triggerName,v=e.getRules();m&&(v=v.filter(function(P){return P}).filter(function(P){var $=P.validateTrigger;if(!$)return!0;var E=ae($);return E.includes(m)}));var w=qe(i,s,v,l,p,h);return w.catch(function(P){return P}).then(function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:A;if(e.validatePromise===d){var $;e.validatePromise=null;var E=[],N=[];($=P.forEach)===null||$===void 0||$.call(P,function(C){var k=C.rule.warningOnly,M=C.errors,U=M===void 0?A:M;k?N.push.apply(N,b(U)):E.push.apply(E,b(U))}),e.errors=E,e.warnings=N,e.triggerMetaEvent(),e.reRender()}}),w});return e.validatePromise=d,e.dirty=!0,e.errors=A,e.warnings=A,e.triggerMetaEvent(),e.reRender(),d},e.isFieldValidating=function(){return!!e.validatePromise},e.isFieldTouched=function(){return e.touched},e.isFieldDirty=function(){if(e.dirty||e.props.initialValue!==void 0)return!0;var l=e.props.fieldContext,i=l.getInternalHooks(z),s=i.getInitialValue;return s(e.getNamePath())!==void 0},e.getErrors=function(){return e.errors},e.getWarnings=function(){return e.warnings},e.isListField=function(){return e.props.isListField},e.isList=function(){return e.props.isList},e.isPreserve=function(){return e.props.preserve},e.getMeta=function(){e.prevValidating=e.isFieldValidating();var l={touched:e.isFieldTouched(),validating:e.prevValidating,errors:e.errors,warnings:e.warnings,name:e.getNamePath()};return l},e.getOnlyChild=function(l){if(typeof l=="function"){var i=e.getMeta();return V(V({},e.getOnlyChild(l(e.getControlled(),i,e.props.fieldContext))),{},{isFunction:!0})}var s=We(l);return s.length!==1||!F.isValidElement(s[0])?{child:s,isFunction:!1}:{child:s[0],isFunction:!1}},e.getValue=function(l){var i=e.props.fieldContext.getFieldsValue,s=e.getNamePath();return j(l||i(!0),s)},e.getControlled=function(){var l=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.props,s=i.trigger,d=i.validateTrigger,f=i.getValueFromEvent,y=i.normalize,p=i.valuePropName,h=i.getValueProps,g=i.fieldContext,m=d!==void 0?d:g.validateTrigger,v=e.getNamePath(),w=g.getInternalHooks,P=g.getFieldsValue,$=w(z),E=$.dispatch,N=e.getValue(),C=h||function(S){return ee({},p,S)},k=l[s],M=V(V({},l),C(N));M[s]=function(){e.touched=!0,e.dirty=!0,e.triggerMetaEvent();for(var S,D=arguments.length,I=new Array(D),L=0;L<D;L++)I[L]=arguments[L];f?S=f.apply(void 0,I):S=Ke.apply(void 0,[p].concat(I)),y&&(S=y(S,N,P(!0))),E({type:"updateValue",namePath:v,value:S}),k&&k.apply(void 0,I)};var U=ae(m||[]);return U.forEach(function(S){var D=M[S];M[S]=function(){D&&D.apply(void 0,arguments);var I=e.props.rules;I&&I.length&&E({type:"validateField",namePath:v,triggerName:S})}}),M},t.fieldContext){var n=t.fieldContext.getInternalHooks,o=n(z),c=o.initEntityValue;c(xe(e))}return e}return ge(r,[{key:"componentDidMount",value:function(){var e=this.props,n=e.shouldUpdate,o=e.fieldContext;if(this.mounted=!0,o){var c=o.getInternalHooks,l=c(z),i=l.registerField;this.cancelRegisterFunc=i(this)}n===!0&&this.reRender()}},{key:"componentWillUnmount",value:function(){this.cancelRegister(),this.triggerMetaEvent(!0),this.mounted=!1}},{key:"reRender",value:function(){!this.mounted||this.forceUpdate()}},{key:"render",value:function(){var e=this.state.resetCount,n=this.props.children,o=this.getOnlyChild(n),c=o.child,l=o.isFunction,i;return l?i=c:F.isValidElement(c)?i=F.cloneElement(c,this.getControlled(c.props)):(H(!c,"`children` of Field is not validate ReactElement."),i=c),F.createElement(F.Fragment,{key:e},i)}}]),r}(F.Component);ve.contextType=J;ve.defaultProps={trigger:"onChange",valuePropName:"value"};function Ne(u){var a=u.name,r=de(u,Be),t=F.useContext(J),e=a!==void 0?O(a):void 0,n="keep";return r.isListField||(n="_".concat((e||[]).join("_"))),F.createElement(ve,Ce({key:n,name:e},r,{fieldContext:t}))}var Qe=F.createContext(null),Xe=function(a){var r=a.name,t=a.initialValue,e=a.children,n=a.rules,o=a.validateTrigger,c=F.useContext(J),l=F.useRef({keys:[],id:0}),i=l.current,s=F.useMemo(function(){var p=O(c.prefixName)||[];return[].concat(b(p),b(O(r)))},[c.prefixName,r]),d=F.useMemo(function(){return V(V({},c),{},{prefixName:s})},[c,s]),f=F.useMemo(function(){return{getKey:function(h){var g=s.length,m=h[g];return[i.keys[m],h.slice(g+1)]}}},[s]);if(typeof e!="function")return H(!1,"Form.List only accepts function as children."),null;var y=function(h,g,m){var v=m.source;return v==="internal"?!1:h!==g};return F.createElement(Qe.Provider,{value:f},F.createElement(J.Provider,{value:d},F.createElement(Ne,{name:[],shouldUpdate:y,rules:n,validateTrigger:o,initialValue:t,isList:!0},function(p,h){var g=p.value,m=g===void 0?[]:g,v=p.onChange,w=c.getFieldValue,P=function(){var C=w(s||[]);return C||[]},$={add:function(C,k){var M=P();k>=0&&k<=M.length?(i.keys=[].concat(b(i.keys.slice(0,k)),[i.id],b(i.keys.slice(k))),v([].concat(b(M.slice(0,k)),[C],b(M.slice(k))))):(i.keys=[].concat(b(i.keys),[i.id]),v([].concat(b(M),[C]))),i.id+=1},remove:function(C){var k=P(),M=new Set(Array.isArray(C)?C:[C]);M.size<=0||(i.keys=i.keys.filter(function(U,S){return!M.has(S)}),v(k.filter(function(U,S){return!M.has(S)})))},move:function(C,k){if(C!==k){var M=P();C<0||C>=M.length||k<0||k>=M.length||(i.keys=Pe(i.keys,C,k),v(Pe(M,C,k)))}}},E=m||[];return Array.isArray(E)||(E=[]),e(E.map(function(N,C){var k=i.keys[C];return k===void 0&&(i.keys[C]=i.id,k=i.keys[C],i.id+=1),{name:C,key:k,isListField:!0}}),$,h)})))};function Ze(u){var a=!1,r=u.length,t=[];return u.length?new Promise(function(e,n){u.forEach(function(o,c){o.catch(function(l){return a=!0,l}).then(function(l){r-=1,t[c]=l,!(r>0)&&(a&&n(t),e(t))})})}):Promise.resolve([])}var Me="__@field_split__";function ie(u){return u.map(function(a){return"".concat(q(a),":").concat(a)}).join(Me)}var G=function(){function u(){fe(this,u),this.kvs=new Map}return ge(u,[{key:"set",value:function(r,t){this.kvs.set(ie(r),t)}},{key:"get",value:function(r){return this.kvs.get(ie(r))}},{key:"update",value:function(r,t){var e=this.get(r),n=t(e);n?this.set(r,n):this.delete(r)}},{key:"delete",value:function(r){this.kvs.delete(ie(r))}},{key:"map",value:function(r){return b(this.kvs.entries()).map(function(t){var e=B(t,2),n=e[0],o=e[1],c=n.split(Me);return r({key:c.map(function(l){var i=l.match(/^([^:]*):(.*)$/),s=B(i,3),d=s[1],f=s[2];return d==="number"?Number(f):f}),value:o})})}},{key:"toJSON",value:function(){var r={};return this.map(function(t){var e=t.key,n=t.value;return r[e.join(".")]=n,null}),r}}]),u}(),er=["name","errors"],rr=ge(function u(a){var r=this;fe(this,u),this.formHooked=!1,this.forceRootUpdate=void 0,this.subscribable=!0,this.store={},this.fieldEntities=[],this.initialValues={},this.callbacks={},this.validateMessages=null,this.preserve=null,this.lastValidatePromise=null,this.getForm=function(){return{getFieldValue:r.getFieldValue,getFieldsValue:r.getFieldsValue,getFieldError:r.getFieldError,getFieldWarning:r.getFieldWarning,getFieldsError:r.getFieldsError,isFieldsTouched:r.isFieldsTouched,isFieldTouched:r.isFieldTouched,isFieldValidating:r.isFieldValidating,isFieldsValidating:r.isFieldsValidating,resetFields:r.resetFields,setFields:r.setFields,setFieldValue:r.setFieldValue,setFieldsValue:r.setFieldsValue,validateFields:r.validateFields,submit:r.submit,_init:!0,getInternalHooks:r.getInternalHooks}},this.getInternalHooks=function(t){return t===z?(r.formHooked=!0,{dispatch:r.dispatch,initEntityValue:r.initEntityValue,registerField:r.registerField,useSubscribe:r.useSubscribe,setInitialValues:r.setInitialValues,destroyForm:r.destroyForm,setCallbacks:r.setCallbacks,setValidateMessages:r.setValidateMessages,getFields:r.getFields,setPreserve:r.setPreserve,getInitialValue:r.getInitialValue,registerWatch:r.registerWatch}):(H(!1,"`getInternalHooks` is internal usage. Should not call directly."),null)},this.useSubscribe=function(t){r.subscribable=t},this.prevWithoutPreserves=null,this.setInitialValues=function(t,e){if(r.initialValues=t||{},e){var n,o=Z({},t,r.store);(n=r.prevWithoutPreserves)===null||n===void 0||n.map(function(c){var l=c.key;o=W(o,l,j(t,l))}),r.prevWithoutPreserves=null,r.updateStore(o)}},this.destroyForm=function(){var t=new G;r.getFieldEntities(!0).forEach(function(e){r.isMergedPreserve(e.isPreserve())||t.set(e.getNamePath(),!0)}),r.prevWithoutPreserves=t},this.getInitialValue=function(t){var e=j(r.initialValues,t);return t.length?te(e):e},this.setCallbacks=function(t){r.callbacks=t},this.setValidateMessages=function(t){r.validateMessages=t},this.setPreserve=function(t){r.preserve=t},this.watchList=[],this.registerWatch=function(t){return r.watchList.push(t),function(){r.watchList=r.watchList.filter(function(e){return e!==t})}},this.notifyWatch=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(r.watchList.length){var e=r.getFieldsValue();r.watchList.forEach(function(n){n(e,t)})}},this.timeoutId=null,this.warningUnhooked=function(){},this.updateStore=function(t){r.store=t},this.getFieldEntities=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return t?r.fieldEntities.filter(function(e){return e.getNamePath().length}):r.fieldEntities},this.getFieldsMap=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=new G;return r.getFieldEntities(t).forEach(function(n){var o=n.getNamePath();e.set(o,n)}),e},this.getFieldEntitiesForNamePathList=function(t){if(!t)return r.getFieldEntities(!0);var e=r.getFieldsMap(!0);return t.map(function(n){var o=O(n);return e.get(o)||{INVALIDATE_NAME_PATH:O(n)}})},this.getFieldsValue=function(t,e){if(r.warningUnhooked(),t===!0&&!e)return r.store;var n=r.getFieldEntitiesForNamePathList(Array.isArray(t)?t:null),o=[];return n.forEach(function(c){var l,i="INVALIDATE_NAME_PATH"in c?c.INVALIDATE_NAME_PATH:c.getNamePath();if(!(!t&&((l=c.isListField)===null||l===void 0?void 0:l.call(c))))if(!e)o.push(i);else{var s="getMeta"in c?c.getMeta():null;e(s)&&o.push(i)}}),ye(r.store,o.map(O))},this.getFieldValue=function(t){r.warningUnhooked();var e=O(t);return j(r.store,e)},this.getFieldsError=function(t){r.warningUnhooked();var e=r.getFieldEntitiesForNamePathList(t);return e.map(function(n,o){return n&&!("INVALIDATE_NAME_PATH"in n)?{name:n.getNamePath(),errors:n.getErrors(),warnings:n.getWarnings()}:{name:O(t[o]),errors:[],warnings:[]}})},this.getFieldError=function(t){r.warningUnhooked();var e=O(t),n=r.getFieldsError([e])[0];return n.errors},this.getFieldWarning=function(t){r.warningUnhooked();var e=O(t),n=r.getFieldsError([e])[0];return n.warnings},this.isFieldsTouched=function(){r.warningUnhooked();for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var o=e[0],c=e[1],l,i=!1;e.length===0?l=null:e.length===1?Array.isArray(o)?(l=o.map(O),i=!1):(l=null,i=o):(l=o.map(O),i=c);var s=r.getFieldEntities(!0),d=function(g){return g.isFieldTouched()};if(!l)return i?s.every(d):s.some(d);var f=new G;l.forEach(function(h){f.set(h,[])}),s.forEach(function(h){var g=h.getNamePath();l.forEach(function(m){m.every(function(v,w){return g[w]===v})&&f.update(m,function(v){return[].concat(b(v),[h])})})});var y=function(g){return g.some(d)},p=f.map(function(h){var g=h.value;return g});return i?p.every(y):p.some(y)},this.isFieldTouched=function(t){return r.warningUnhooked(),r.isFieldsTouched([t])},this.isFieldsValidating=function(t){r.warningUnhooked();var e=r.getFieldEntities();if(!t)return e.some(function(o){return o.isFieldValidating()});var n=t.map(O);return e.some(function(o){var c=o.getNamePath();return Y(n,c)&&o.isFieldValidating()})},this.isFieldValidating=function(t){return r.warningUnhooked(),r.isFieldsValidating([t])},this.resetWithFieldInitialValue=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=new G,n=r.getFieldEntities(!0);n.forEach(function(l){var i=l.props.initialValue,s=l.getNamePath();if(i!==void 0){var d=e.get(s)||new Set;d.add({entity:l,value:i}),e.set(s,d)}});var o=function(i){i.forEach(function(s){var d=s.props.initialValue;if(d!==void 0){var f=s.getNamePath(),y=r.getInitialValue(f);if(y!==void 0)H(!1,"Form already set 'initialValues' with path '".concat(f.join("."),"'. Field can not overwrite it."));else{var p=e.get(f);if(p&&p.size>1)H(!1,"Multiple Field with path '".concat(f.join("."),"' set 'initialValue'. Can not decide which one to pick."));else if(p){var h=r.getFieldValue(f);(!t.skipExist||h===void 0)&&r.updateStore(W(r.store,f,b(p)[0].value))}}}})},c;t.entities?c=t.entities:t.namePathList?(c=[],t.namePathList.forEach(function(l){var i=e.get(l);if(i){var s;(s=c).push.apply(s,b(b(i).map(function(d){return d.entity})))}})):c=n,o(c)},this.resetFields=function(t){r.warningUnhooked();var e=r.store;if(!t){r.updateStore(Z({},r.initialValues)),r.resetWithFieldInitialValue(),r.notifyObservers(e,null,{type:"reset"}),r.notifyWatch();return}var n=t.map(O);n.forEach(function(o){var c=r.getInitialValue(o);r.updateStore(W(r.store,o,c))}),r.resetWithFieldInitialValue({namePathList:n}),r.notifyObservers(e,n,{type:"reset"}),r.notifyWatch(n)},this.setFields=function(t){r.warningUnhooked();var e=r.store,n=[];t.forEach(function(o){var c=o.name;o.errors;var l=de(o,er),i=O(c);n.push(i),"value"in l&&r.updateStore(W(r.store,i,l.value)),r.notifyObservers(e,[i],{type:"setField",data:o})}),r.notifyWatch(n)},this.getFields=function(){var t=r.getFieldEntities(!0),e=t.map(function(n){var o=n.getNamePath(),c=n.getMeta(),l=V(V({},c),{},{name:o,value:r.getFieldValue(o)});return Object.defineProperty(l,"originRCField",{value:!0}),l});return e},this.initEntityValue=function(t){var e=t.props.initialValue;if(e!==void 0){var n=t.getNamePath(),o=j(r.store,n);o===void 0&&r.updateStore(W(r.store,n,e))}},this.isMergedPreserve=function(t){var e=t!==void 0?t:r.preserve;return e??!0},this.registerField=function(t){r.fieldEntities.push(t);var e=t.getNamePath();if(r.notifyWatch([e]),t.props.initialValue!==void 0){var n=r.store;r.resetWithFieldInitialValue({entities:[t],skipExist:!0}),r.notifyObservers(n,[t.getNamePath()],{type:"valueUpdate",source:"internal"})}return function(o,c){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];if(r.fieldEntities=r.fieldEntities.filter(function(d){return d!==t}),!r.isMergedPreserve(c)&&(!o||l.length>1)){var i=o?void 0:r.getInitialValue(e);if(e.length&&r.getFieldValue(e)!==i&&r.fieldEntities.every(function(d){return!$e(d.getNamePath(),e)})){var s=r.store;r.updateStore(W(s,e,i,!0)),r.notifyObservers(s,[e],{type:"remove"}),r.triggerDependenciesUpdate(s,e)}}r.notifyWatch([e])}},this.dispatch=function(t){switch(t.type){case"updateValue":{var e=t.namePath,n=t.value;r.updateValue(e,n);break}case"validateField":{var o=t.namePath,c=t.triggerName;r.validateFields([o],{triggerName:c});break}}},this.notifyObservers=function(t,e,n){if(r.subscribable){var o=V(V({},n),{},{store:r.getFieldsValue(!0)});r.getFieldEntities().forEach(function(c){var l=c.onStoreChange;l(t,e,o)})}else r.forceRootUpdate()},this.triggerDependenciesUpdate=function(t,e){var n=r.getDependencyChildrenFields(e);return n.length&&r.validateFields(n),r.notifyObservers(t,n,{type:"dependenciesUpdate",relatedFields:[e].concat(b(n))}),n},this.updateValue=function(t,e){var n=O(t),o=r.store;r.updateStore(W(r.store,n,e)),r.notifyObservers(o,[n],{type:"valueUpdate",source:"internal"}),r.notifyWatch([n]);var c=r.triggerDependenciesUpdate(o,n),l=r.callbacks.onValuesChange;if(l){var i=ye(r.store,[n]);l(i,r.getFieldsValue())}r.triggerOnFieldsChange([n].concat(b(c)))},this.setFieldsValue=function(t){r.warningUnhooked();var e=r.store;if(t){var n=Z(r.store,t);r.updateStore(n)}r.notifyObservers(e,null,{type:"valueUpdate",source:"external"}),r.notifyWatch()},this.setFieldValue=function(t,e){r.setFields([{name:t,value:e}])},this.getDependencyChildrenFields=function(t){var e=new Set,n=[],o=new G;r.getFieldEntities().forEach(function(l){var i=l.props.dependencies;(i||[]).forEach(function(s){var d=O(s);o.update(d,function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Set;return f.add(l),f})})});var c=function l(i){var s=o.get(i)||new Set;s.forEach(function(d){if(!e.has(d)){e.add(d);var f=d.getNamePath();d.isFieldDirty()&&f.length&&(n.push(f),l(f))}})};return c(t),n},this.triggerOnFieldsChange=function(t,e){var n=r.callbacks.onFieldsChange;if(n){var o=r.getFields();if(e){var c=new G;e.forEach(function(i){var s=i.name,d=i.errors;c.set(s,d)}),o.forEach(function(i){i.errors=c.get(i.name)||i.errors})}var l=o.filter(function(i){var s=i.name;return Y(t,s)});n(l,o)}},this.validateFields=function(t,e){r.warningUnhooked();var n=!!t,o=n?t.map(O):[],c=[];r.getFieldEntities(!0).forEach(function(s){if(n||o.push(s.getNamePath()),(e==null?void 0:e.recursive)&&n){var d=s.getNamePath();d.every(function(p,h){return t[h]===p||t[h]===void 0})&&o.push(d)}if(!(!s.props.rules||!s.props.rules.length)){var f=s.getNamePath();if(!n||Y(o,f)){var y=s.validateRules(V({validateMessages:V(V({},ke),r.validateMessages)},e));c.push(y.then(function(){return{name:f,errors:[],warnings:[]}}).catch(function(p){var h,g=[],m=[];return(h=p.forEach)===null||h===void 0||h.call(p,function(v){var w=v.rule.warningOnly,P=v.errors;w?m.push.apply(m,b(P)):g.push.apply(g,b(P))}),g.length?Promise.reject({name:f,errors:g,warnings:m}):{name:f,errors:g,warnings:m}}))}}});var l=Ze(c);r.lastValidatePromise=l,l.catch(function(s){return s}).then(function(s){var d=s.map(function(f){var y=f.name;return y});r.notifyObservers(r.store,d,{type:"validateFinish"}),r.triggerOnFieldsChange(d,s)});var i=l.then(function(){return r.lastValidatePromise===l?Promise.resolve(r.getFieldsValue(o)):Promise.reject([])}).catch(function(s){var d=s.filter(function(f){return f&&f.errors.length});return Promise.reject({values:r.getFieldsValue(o),errorFields:d,outOfDate:r.lastValidatePromise!==l})});return i.catch(function(s){return s}),i},this.submit=function(){r.warningUnhooked(),r.validateFields().then(function(t){var e=r.callbacks.onFinish;if(e)try{e(t)}catch(n){console.error(n)}}).catch(function(t){var e=r.callbacks.onFinishFailed;e&&e(t)})},this.forceRootUpdate=a});function Oe(u){var a=F.useRef(),r=F.useState({}),t=B(r,2),e=t[1];if(!a.current)if(u)a.current=u;else{var n=function(){e({})},o=new rr(n);a.current=o.getForm()}return[a.current]}var ce=F.createContext({triggerFormChange:function(){},triggerFormFinish:function(){},registerForm:function(){},unregisterForm:function(){}}),tr=function(a){var r=a.validateMessages,t=a.onFormChange,e=a.onFormFinish,n=a.children,o=F.useContext(ce),c=F.useRef({});return F.createElement(ce.Provider,{value:V(V({},o),{},{validateMessages:V(V({},o.validateMessages),r),triggerFormChange:function(i,s){t&&t(i,{changedFields:s,forms:c.current}),o.triggerFormChange(i,s)},triggerFormFinish:function(i,s){e&&e(i,{values:s,forms:c.current}),o.triggerFormFinish(i,s)},registerForm:function(i,s){i&&(c.current=V(V({},c.current),{},ee({},i,s))),o.registerForm(i,s)},unregisterForm:function(i){var s=V({},c.current);delete s[i],c.current=s,o.unregisterForm(i)}})},n)},nr=["name","initialValues","fields","form","preserve","children","component","validateMessages","validateTrigger","onValuesChange","onFieldsChange","onFinish","onFinishFailed"],ir=function(a,r){var t=a.name,e=a.initialValues,n=a.fields,o=a.form,c=a.preserve,l=a.children,i=a.component,s=i===void 0?"form":i,d=a.validateMessages,f=a.validateTrigger,y=f===void 0?"onChange":f,p=a.onValuesChange,h=a.onFieldsChange,g=a.onFinish,m=a.onFinishFailed,v=de(a,nr),w=F.useContext(ce),P=Oe(o),$=B(P,1),E=$[0],N=E.getInternalHooks(z),C=N.useSubscribe,k=N.setInitialValues,M=N.setCallbacks,U=N.setValidateMessages,S=N.setPreserve,D=N.destroyForm;F.useImperativeHandle(r,function(){return E}),F.useEffect(function(){return w.registerForm(t,E),function(){w.unregisterForm(t)}},[w,E,t]),U(V(V({},w.validateMessages),d)),M({onValuesChange:p,onFieldsChange:function(x){if(w.triggerFormChange(t,x),h){for(var K=arguments.length,Fe=new Array(K>1?K-1:0),X=1;X<K;X++)Fe[X-1]=arguments[X];h.apply(void 0,[x].concat(Fe))}},onFinish:function(x){w.triggerFormFinish(t,x),g&&g(x)},onFinishFailed:m}),S(c);var I=F.useRef(null);k(e,!I.current),I.current||(I.current=!0),F.useEffect(function(){return D},[]);var L,he=typeof l=="function";if(he){var Se=E.getFieldsValue(!0);L=l(Se,E)}else L=l;C(!he);var me=F.useRef();F.useEffect(function(){De(me.current||[],n||[])||E.setFields(n||[]),me.current=n},[n,E]);var Te=F.useMemo(function(){return V(V({},E),{},{validateTrigger:y})},[E,y]),pe=F.createElement(J.Provider,{value:Te},L);return s===!1?pe:F.createElement(s,Ce({},v,{onSubmit:function(x){x.preventDefault(),x.stopPropagation(),E.submit()},onReset:function(x){var K;x.preventDefault(),E.resetFields(),(K=v.onReset)===null||K===void 0||K.call(v,x)}}),pe)};function we(u){try{return JSON.stringify(u)}catch{return Math.random()}}function ar(){for(var u=arguments.length,a=new Array(u),r=0;r<u;r++)a[r]=arguments[r];var t=a[0],e=t===void 0?[]:t,n=a[1],o=F.useState(),c=B(o,2),l=c[0],i=c[1],s=F.useMemo(function(){return we(l)},[l]),d=F.useRef(s);d.current=s;var f=F.useContext(J),y=n||f,p=y&&y._init,h=O(e),g=F.useRef(h);return g.current=h,F.useEffect(function(){if(!!p){var m=y.getFieldsValue,v=y.getInternalHooks,w=v(z),P=w.registerWatch,$=P(function(N){var C=j(N,g.current),k=we(C);d.current!==k&&(d.current=k,i(C))}),E=j(m(),g.current);return i(E),$}},[p]),l}var sr=F.forwardRef(ir),Q=sr;Q.FormProvider=tr;Q.Field=Ne;Q.List=Xe;Q.useForm=Oe;Q.useWatch=ar;export{J as C,tr as F,Qe as L,Q as R,Ne as W,Xe as a,ar as b,Oe as u};
