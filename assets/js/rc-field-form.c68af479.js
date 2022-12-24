import{r as F}from"./react.017637b6.js";import{d as G,b as E,e as V,q as re,m as _,f as ee,g as de,h as Ce,i as Te,j as Ae,a as fe,k as Ie,_ as ge,c as B}from"./@babel_runtime.0b96ec9f.js";import{a as H,z as Ue,A as Le,t as We}from"./rc-util.5bddd7c5.js";import{S as je}from"./async-validator.dee29e8b.js";var K="RC_FORM_INTERNAL_HOOKS",x=function(){H(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},J=F.exports.createContext({getFieldValue:x,getFieldsValue:x,getFieldError:x,getFieldWarning:x,getFieldsError:x,isFieldsTouched:x,isFieldTouched:x,isFieldValidating:x,isFieldsValidating:x,resetFields:x,setFields:x,setFieldValue:x,setFieldsValue:x,validateFields:x,submit:x,getInternalHooks:function(){return x(),{dispatch:x,initEntityValue:x,registerField:x,useSubscribe:x,setInitialValues:x,destroyForm:x,setCallbacks:x,registerWatch:x,getFields:x,setValidateMessages:x,setPreserve:x,getInitialValue:x}}});function ae(u){return u==null?[]:Array.isArray(u)?u:[u]}var S="'${name}' is not a valid ${type}",ke={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:S,method:S,array:S,object:S,number:S,date:S,boolean:S,integer:S,float:S,regexp:S,email:S,url:S,hex:S},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}};function te(u){return Array.isArray(u)?_e(u):G(u)==="object"&&u!==null?He(u):u}function He(u){if(Object.getPrototypeOf(u)===Object.prototype){var a={};for(var r in u)a[r]=te(u[r]);return a}return u}function _e(u){return u.map(function(a){return te(a)})}function M(u){return ae(u)}function j(u,a){var r=Ue(u,a);return r}function W(u,a,r){var t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1,e=Le(u,a,r,t);return e}function ye(u,a){var r={};return a.forEach(function(t){var e=j(u,t);r=W(r,t,e)}),r}function Y(u,a){return u&&u.some(function(r){return Re(r,a)})}function Ve(u){return G(u)==="object"&&u!==null&&Object.getPrototypeOf(u)===Object.prototype}function xe(u,a){var r=Array.isArray(u)?E(u):V({},u);return a&&Object.keys(a).forEach(function(t){var e=r[t],n=a[t],l=Ve(e)&&Ve(n);r[t]=l?xe(e,n||{}):te(n)}),r}function Z(u){for(var a=arguments.length,r=new Array(a>1?a-1:0),t=1;t<a;t++)r[t-1]=arguments[t];return r.reduce(function(e,n){return xe(e,n)},u)}function Re(u,a){return!u||!a||u.length!==a.length?!1:u.every(function(r,t){return a[t]===r})}function De(u,a){if(u===a)return!0;if(!u&&a||u&&!a||!u||!a||G(u)!=="object"||G(a)!=="object")return!1;var r=Object.keys(u),t=Object.keys(a),e=new Set([].concat(r,t));return E(e).every(function(n){var l=u[n],c=a[n];return typeof l=="function"&&typeof c=="function"?!0:l===c})}function ze(u){var a=arguments.length<=1?void 0:arguments[1];return a&&a.target&&G(a.target)==="object"&&u in a.target?a.target[u]:a}function Pe(u,a,r){var t=u.length;if(a<0||a>=t||r<0||r>=t)return u;var e=u[a],n=a-r;return n>0?[].concat(E(u.slice(0,r)),[e],E(u.slice(r,a)),E(u.slice(a+1,t))):n<0?[].concat(E(u.slice(0,a)),E(u.slice(a+1,r+1)),[e],E(u.slice(r+1,t))):u}var Ke=je;function qe(u,a){return u.replace(/\$\{\w+\}/g,function(r){var t=r.slice(2,-1);return a[t]})}var be="CODE_LOGIC_ERROR";function se(u,a,r,t,e){return ue.apply(this,arguments)}function ue(){return ue=re(_().mark(function u(a,r,t,e,n){var l,c,o,i,s,d,f,y,p;return _().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return l=V({},t),delete l.ruleIndex,l.validator&&(c=l.validator,l.validator=function(){try{return c.apply(void 0,arguments)}catch(m){return console.error(m),Promise.reject(be)}}),o=null,l&&l.type==="array"&&l.defaultField&&(o=l.defaultField,delete l.defaultField),i=new Ke(ee({},a,[l])),s=Z({},ke,e.validateMessages),i.messages(s),d=[],g.prev=9,g.next=12,Promise.resolve(i.validate(ee({},a,r),V({},e)));case 12:g.next=17;break;case 14:g.prev=14,g.t0=g.catch(9),g.t0.errors&&(d=g.t0.errors.map(function(m,v){var w=m.message,P=w===be?s.default:w;return F.exports.isValidElement(P)?F.exports.cloneElement(P,{key:"error_".concat(v)}):P}));case 17:if(!(!d.length&&o)){g.next=22;break}return g.next=20,Promise.all(r.map(function(m,v){return se("".concat(a,".").concat(v),m,o,e,n)}));case 20:return f=g.sent,g.abrupt("return",f.reduce(function(m,v){return[].concat(E(m),E(v))},[]));case 22:return y=V(V({},t),{},{name:a,enum:(t.enum||[]).join(", ")},n),p=d.map(function(m){return typeof m=="string"?qe(m,y):m}),g.abrupt("return",p);case 25:case"end":return g.stop()}},u,null,[[9,14]])})),ue.apply(this,arguments)}function Ge(u,a,r,t,e,n){var l=u.join("."),c=r.map(function(s,d){var f=s.validator,y=V(V({},s),{},{ruleIndex:d});return f&&(y.validator=function(p,h,g){var m=!1,v=function(){for(var R=arguments.length,b=new Array(R),$=0;$<R;$++)b[$]=arguments[$];Promise.resolve().then(function(){H(!m,"Your validator function has already return a promise. `callback` will be ignored."),m||g.apply(void 0,b)})},w=f(p,h,v);m=w&&typeof w.then=="function"&&typeof w.catch=="function",H(m,"`callback` is deprecated. Please return a promise instead."),m&&w.then(function(){g()}).catch(function(P){g(P||" ")})}),y}).sort(function(s,d){var f=s.warningOnly,y=s.ruleIndex,p=d.warningOnly,h=d.ruleIndex;return!!f==!!p?y-h:f?1:-1}),o;if(e===!0)o=new Promise(function(){var s=re(_().mark(function d(f,y){var p,h,g;return _().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:p=0;case 1:if(!(p<c.length)){v.next=12;break}return h=c[p],v.next=5,se(l,a,h,t,n);case 5:if(g=v.sent,!g.length){v.next=9;break}return y([{errors:g,rule:h}]),v.abrupt("return");case 9:p+=1,v.next=1;break;case 12:f([]);case 13:case"end":return v.stop()}},d)}));return function(d,f){return s.apply(this,arguments)}}());else{var i=c.map(function(s){return se(l,a,s,t,n).then(function(d){return{errors:d,rule:s}})});o=(e?Ye(i):Je(i)).then(function(s){return Promise.reject(s)})}return o.catch(function(s){return s}),o}function Je(u){return oe.apply(this,arguments)}function oe(){return oe=re(_().mark(function u(a){return _().wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",Promise.all(a).then(function(e){var n,l=(n=[]).concat.apply(n,E(e));return l}));case 1:case"end":return t.stop()}},u)})),oe.apply(this,arguments)}function Ye(u){return le.apply(this,arguments)}function le(){return le=re(_().mark(function u(a){var r;return _().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r=0,e.abrupt("return",new Promise(function(n){a.forEach(function(l){l.then(function(c){c.errors.length&&n([c]),r+=1,r===a.length&&n([])})})}));case 2:case"end":return e.stop()}},u)})),le.apply(this,arguments)}var Be=["name"],T=[];function Ee(u,a,r,t,e,n){return typeof u=="function"?u(a,r,"source"in n?{source:n.source}:{}):t!==e}var ve=function(u){Te(r,u);var a=Ae(r);function r(t){var e;if(fe(this,r),e=a.call(this,t),e.state={resetCount:0},e.cancelRegisterFunc=null,e.mounted=!1,e.touched=!1,e.dirty=!1,e.validatePromise=null,e.prevValidating=void 0,e.errors=T,e.warnings=T,e.cancelRegister=function(){var o=e.props,i=o.preserve,s=o.isListField,d=o.name;e.cancelRegisterFunc&&e.cancelRegisterFunc(s,i,M(d)),e.cancelRegisterFunc=null},e.getNamePath=function(){var o=e.props,i=o.name,s=o.fieldContext,d=s.prefixName,f=d===void 0?[]:d;return i!==void 0?[].concat(E(f),E(i)):[]},e.getRules=function(){var o=e.props,i=o.rules,s=i===void 0?[]:i,d=o.fieldContext;return s.map(function(f){return typeof f=="function"?f(d):f})},e.refresh=function(){!e.mounted||e.setState(function(o){var i=o.resetCount;return{resetCount:i+1}})},e.triggerMetaEvent=function(o){var i=e.props.onMetaChange;i==null||i(V(V({},e.getMeta()),{},{destroy:o}))},e.onStoreChange=function(o,i,s){var d=e.props,f=d.shouldUpdate,y=d.dependencies,p=y===void 0?[]:y,h=d.onReset,g=s.store,m=e.getNamePath(),v=e.getValue(o),w=e.getValue(g),P=i&&Y(i,m);switch(s.type==="valueUpdate"&&s.source==="external"&&v!==w&&(e.touched=!0,e.dirty=!0,e.validatePromise=null,e.errors=T,e.warnings=T,e.triggerMetaEvent()),s.type){case"reset":if(!i||P){e.touched=!1,e.dirty=!1,e.validatePromise=null,e.errors=T,e.warnings=T,e.triggerMetaEvent(),h==null||h(),e.refresh();return}break;case"remove":{if(f){e.reRender();return}break}case"setField":{if(P){var R=s.data;"touched"in R&&(e.touched=R.touched),"validating"in R&&!("originRCField"in R)&&(e.validatePromise=R.validating?Promise.resolve([]):null),"errors"in R&&(e.errors=R.errors||T),"warnings"in R&&(e.warnings=R.warnings||T),e.dirty=!0,e.triggerMetaEvent(),e.reRender();return}if(f&&!m.length&&Ee(f,o,g,v,w,s)){e.reRender();return}break}case"dependenciesUpdate":{var b=p.map(M);if(b.some(function($){return Y(s.relatedFields,$)})){e.reRender();return}break}default:if(P||(!p.length||m.length||f)&&Ee(f,o,g,v,w,s)){e.reRender();return}break}f===!0&&e.reRender()},e.validateRules=function(o){var i=e.getNamePath(),s=e.getValue(),d=Promise.resolve().then(function(){if(!e.mounted)return[];var f=e.props,y=f.validateFirst,p=y===void 0?!1:y,h=f.messageVariables,g=o||{},m=g.triggerName,v=e.getRules();m&&(v=v.filter(function(P){return P}).filter(function(P){var R=P.validateTrigger;if(!R)return!0;var b=ae(R);return b.includes(m)}));var w=Ge(i,s,v,o,p,h);return w.catch(function(P){return P}).then(function(){var P=arguments.length>0&&arguments[0]!==void 0?arguments[0]:T;if(e.validatePromise===d){var R;e.validatePromise=null;var b=[],$=[];(R=P.forEach)===null||R===void 0||R.call(P,function(C){var k=C.rule.warningOnly,N=C.errors,U=N===void 0?T:N;k?$.push.apply($,E(U)):b.push.apply(b,E(U))}),e.errors=b,e.warnings=$,e.triggerMetaEvent(),e.reRender()}}),w});return e.validatePromise=d,e.dirty=!0,e.errors=T,e.warnings=T,e.triggerMetaEvent(),e.reRender(),d},e.isFieldValidating=function(){return!!e.validatePromise},e.isFieldTouched=function(){return e.touched},e.isFieldDirty=function(){if(e.dirty||e.props.initialValue!==void 0)return!0;var o=e.props.fieldContext,i=o.getInternalHooks(K),s=i.getInitialValue;return s(e.getNamePath())!==void 0},e.getErrors=function(){return e.errors},e.getWarnings=function(){return e.warnings},e.isListField=function(){return e.props.isListField},e.isList=function(){return e.props.isList},e.isPreserve=function(){return e.props.preserve},e.getMeta=function(){e.prevValidating=e.isFieldValidating();var o={touched:e.isFieldTouched(),validating:e.prevValidating,errors:e.errors,warnings:e.warnings,name:e.getNamePath()};return o},e.getOnlyChild=function(o){if(typeof o=="function"){var i=e.getMeta();return V(V({},e.getOnlyChild(o(e.getControlled(),i,e.props.fieldContext))),{},{isFunction:!0})}var s=We(o);return s.length!==1||!F.exports.isValidElement(s[0])?{child:s,isFunction:!1}:{child:s[0],isFunction:!1}},e.getValue=function(o){var i=e.props.fieldContext.getFieldsValue,s=e.getNamePath();return j(o||i(!0),s)},e.getControlled=function(){var o=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=e.props,s=i.trigger,d=i.validateTrigger,f=i.getValueFromEvent,y=i.normalize,p=i.valuePropName,h=i.getValueProps,g=i.fieldContext,m=d!==void 0?d:g.validateTrigger,v=e.getNamePath(),w=g.getInternalHooks,P=g.getFieldsValue,R=w(K),b=R.dispatch,$=e.getValue(),C=h||function(O){return ee({},p,O)},k=o[s],N=V(V({},o),C($));N[s]=function(){e.touched=!0,e.dirty=!0,e.triggerMetaEvent();for(var O,D=arguments.length,A=new Array(D),L=0;L<D;L++)A[L]=arguments[L];f?O=f.apply(void 0,A):O=ze.apply(void 0,[p].concat(A)),y&&(O=y(O,$,P(!0))),b({type:"updateValue",namePath:v,value:O}),k&&k.apply(void 0,A)};var U=ae(m||[]);return U.forEach(function(O){var D=N[O];N[O]=function(){D&&D.apply(void 0,arguments);var A=e.props.rules;A&&A.length&&b({type:"validateField",namePath:v,triggerName:O})}}),N},t.fieldContext){var n=t.fieldContext.getInternalHooks,l=n(K),c=l.initEntityValue;c(Ie(e))}return e}return ge(r,[{key:"componentDidMount",value:function(){var e=this.props,n=e.shouldUpdate,l=e.fieldContext;if(this.mounted=!0,l){var c=l.getInternalHooks,o=c(K),i=o.registerField;this.cancelRegisterFunc=i(this)}n===!0&&this.reRender()}},{key:"componentWillUnmount",value:function(){this.cancelRegister(),this.triggerMetaEvent(!0),this.mounted=!1}},{key:"reRender",value:function(){!this.mounted||this.forceUpdate()}},{key:"render",value:function(){var e=this.state.resetCount,n=this.props.children,l=this.getOnlyChild(n),c=l.child,o=l.isFunction,i;return o?i=c:F.exports.isValidElement(c)?i=F.exports.cloneElement(c,this.getControlled(c.props)):(H(!c,"`children` of Field is not validate ReactElement."),i=c),F.exports.createElement(F.exports.Fragment,{key:e},i)}}]),r}(F.exports.Component);ve.contextType=J;ve.defaultProps={trigger:"onChange",valuePropName:"value"};function $e(u){var a=u.name,r=de(u,Be),t=F.exports.useContext(J),e=a!==void 0?M(a):void 0,n="keep";return r.isListField||(n="_".concat((e||[]).join("_"))),F.exports.createElement(ve,Ce({key:n,name:e},r,{fieldContext:t}))}var Qe=F.exports.createContext(null),Xe=function(a){var r=a.name,t=a.initialValue,e=a.children,n=a.rules,l=a.validateTrigger,c=F.exports.useContext(J),o=F.exports.useRef({keys:[],id:0}),i=o.current,s=F.exports.useMemo(function(){var p=M(c.prefixName)||[];return[].concat(E(p),E(M(r)))},[c.prefixName,r]),d=F.exports.useMemo(function(){return V(V({},c),{},{prefixName:s})},[c,s]),f=F.exports.useMemo(function(){return{getKey:function(h){var g=s.length,m=h[g];return[i.keys[m],h.slice(g+1)]}}},[s]);if(typeof e!="function")return H(!1,"Form.List only accepts function as children."),null;var y=function(h,g,m){var v=m.source;return v==="internal"?!1:h!==g};return F.exports.createElement(Qe.Provider,{value:f},F.exports.createElement(J.Provider,{value:d},F.exports.createElement($e,{name:[],shouldUpdate:y,rules:n,validateTrigger:l,initialValue:t,isList:!0},function(p,h){var g=p.value,m=g===void 0?[]:g,v=p.onChange,w=c.getFieldValue,P=function(){var C=w(s||[]);return C||[]},R={add:function(C,k){var N=P();k>=0&&k<=N.length?(i.keys=[].concat(E(i.keys.slice(0,k)),[i.id],E(i.keys.slice(k))),v([].concat(E(N.slice(0,k)),[C],E(N.slice(k))))):(i.keys=[].concat(E(i.keys),[i.id]),v([].concat(E(N),[C]))),i.id+=1},remove:function(C){var k=P(),N=new Set(Array.isArray(C)?C:[C]);N.size<=0||(i.keys=i.keys.filter(function(U,O){return!N.has(O)}),v(k.filter(function(U,O){return!N.has(O)})))},move:function(C,k){if(C!==k){var N=P();C<0||C>=N.length||k<0||k>=N.length||(i.keys=Pe(i.keys,C,k),v(Pe(N,C,k)))}}},b=m||[];return Array.isArray(b)||(b=[]),e(b.map(function($,C){var k=i.keys[C];return k===void 0&&(i.keys[C]=i.id,k=i.keys[C],i.id+=1),{name:C,key:k,isListField:!0}}),R,h)})))};function Ze(u){var a=!1,r=u.length,t=[];return u.length?new Promise(function(e,n){u.forEach(function(l,c){l.catch(function(o){return a=!0,o}).then(function(o){r-=1,t[c]=o,!(r>0)&&(a&&n(t),e(t))})})}):Promise.resolve([])}var Ne="__@field_split__";function ie(u){return u.map(function(a){return"".concat(G(a),":").concat(a)}).join(Ne)}var q=function(){function u(){fe(this,u),this.kvs=new Map}return ge(u,[{key:"set",value:function(r,t){this.kvs.set(ie(r),t)}},{key:"get",value:function(r){return this.kvs.get(ie(r))}},{key:"update",value:function(r,t){var e=this.get(r),n=t(e);n?this.set(r,n):this.delete(r)}},{key:"delete",value:function(r){this.kvs.delete(ie(r))}},{key:"map",value:function(r){return E(this.kvs.entries()).map(function(t){var e=B(t,2),n=e[0],l=e[1],c=n.split(Ne);return r({key:c.map(function(o){var i=o.match(/^([^:]*):(.*)$/),s=B(i,3),d=s[1],f=s[2];return d==="number"?Number(f):f}),value:l})})}},{key:"toJSON",value:function(){var r={};return this.map(function(t){var e=t.key,n=t.value;return r[e.join(".")]=n,null}),r}}]),u}(),er=["name","errors"],rr=ge(function u(a){var r=this;fe(this,u),this.formHooked=!1,this.forceRootUpdate=void 0,this.subscribable=!0,this.store={},this.fieldEntities=[],this.initialValues={},this.callbacks={},this.validateMessages=null,this.preserve=null,this.lastValidatePromise=null,this.getForm=function(){return{getFieldValue:r.getFieldValue,getFieldsValue:r.getFieldsValue,getFieldError:r.getFieldError,getFieldWarning:r.getFieldWarning,getFieldsError:r.getFieldsError,isFieldsTouched:r.isFieldsTouched,isFieldTouched:r.isFieldTouched,isFieldValidating:r.isFieldValidating,isFieldsValidating:r.isFieldsValidating,resetFields:r.resetFields,setFields:r.setFields,setFieldValue:r.setFieldValue,setFieldsValue:r.setFieldsValue,validateFields:r.validateFields,submit:r.submit,_init:!0,getInternalHooks:r.getInternalHooks}},this.getInternalHooks=function(t){return t===K?(r.formHooked=!0,{dispatch:r.dispatch,initEntityValue:r.initEntityValue,registerField:r.registerField,useSubscribe:r.useSubscribe,setInitialValues:r.setInitialValues,destroyForm:r.destroyForm,setCallbacks:r.setCallbacks,setValidateMessages:r.setValidateMessages,getFields:r.getFields,setPreserve:r.setPreserve,getInitialValue:r.getInitialValue,registerWatch:r.registerWatch}):(H(!1,"`getInternalHooks` is internal usage. Should not call directly."),null)},this.useSubscribe=function(t){r.subscribable=t},this.prevWithoutPreserves=null,this.setInitialValues=function(t,e){if(r.initialValues=t||{},e){var n,l=Z({},t,r.store);(n=r.prevWithoutPreserves)===null||n===void 0||n.map(function(c){var o=c.key;l=W(l,o,j(t,o))}),r.prevWithoutPreserves=null,r.updateStore(l)}},this.destroyForm=function(){var t=new q;r.getFieldEntities(!0).forEach(function(e){r.isMergedPreserve(e.isPreserve())||t.set(e.getNamePath(),!0)}),r.prevWithoutPreserves=t},this.getInitialValue=function(t){var e=j(r.initialValues,t);return t.length?te(e):e},this.setCallbacks=function(t){r.callbacks=t},this.setValidateMessages=function(t){r.validateMessages=t},this.setPreserve=function(t){r.preserve=t},this.watchList=[],this.registerWatch=function(t){return r.watchList.push(t),function(){r.watchList=r.watchList.filter(function(e){return e!==t})}},this.notifyWatch=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(r.watchList.length){var e=r.getFieldsValue();r.watchList.forEach(function(n){n(e,t)})}},this.timeoutId=null,this.warningUnhooked=function(){},this.updateStore=function(t){r.store=t},this.getFieldEntities=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return t?r.fieldEntities.filter(function(e){return e.getNamePath().length}):r.fieldEntities},this.getFieldsMap=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=new q;return r.getFieldEntities(t).forEach(function(n){var l=n.getNamePath();e.set(l,n)}),e},this.getFieldEntitiesForNamePathList=function(t){if(!t)return r.getFieldEntities(!0);var e=r.getFieldsMap(!0);return t.map(function(n){var l=M(n);return e.get(l)||{INVALIDATE_NAME_PATH:M(n)}})},this.getFieldsValue=function(t,e){if(r.warningUnhooked(),t===!0&&!e)return r.store;var n=r.getFieldEntitiesForNamePathList(Array.isArray(t)?t:null),l=[];return n.forEach(function(c){var o,i="INVALIDATE_NAME_PATH"in c?c.INVALIDATE_NAME_PATH:c.getNamePath();if(!(!t&&((o=c.isListField)===null||o===void 0?void 0:o.call(c))))if(!e)l.push(i);else{var s="getMeta"in c?c.getMeta():null;e(s)&&l.push(i)}}),ye(r.store,l.map(M))},this.getFieldValue=function(t){r.warningUnhooked();var e=M(t);return j(r.store,e)},this.getFieldsError=function(t){r.warningUnhooked();var e=r.getFieldEntitiesForNamePathList(t);return e.map(function(n,l){return n&&!("INVALIDATE_NAME_PATH"in n)?{name:n.getNamePath(),errors:n.getErrors(),warnings:n.getWarnings()}:{name:M(t[l]),errors:[],warnings:[]}})},this.getFieldError=function(t){r.warningUnhooked();var e=M(t),n=r.getFieldsError([e])[0];return n.errors},this.getFieldWarning=function(t){r.warningUnhooked();var e=M(t),n=r.getFieldsError([e])[0];return n.warnings},this.isFieldsTouched=function(){r.warningUnhooked();for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var l=e[0],c=e[1],o,i=!1;e.length===0?o=null:e.length===1?Array.isArray(l)?(o=l.map(M),i=!1):(o=null,i=l):(o=l.map(M),i=c);var s=r.getFieldEntities(!0),d=function(g){return g.isFieldTouched()};if(!o)return i?s.every(d):s.some(d);var f=new q;o.forEach(function(h){f.set(h,[])}),s.forEach(function(h){var g=h.getNamePath();o.forEach(function(m){m.every(function(v,w){return g[w]===v})&&f.update(m,function(v){return[].concat(E(v),[h])})})});var y=function(g){return g.some(d)},p=f.map(function(h){var g=h.value;return g});return i?p.every(y):p.some(y)},this.isFieldTouched=function(t){return r.warningUnhooked(),r.isFieldsTouched([t])},this.isFieldsValidating=function(t){r.warningUnhooked();var e=r.getFieldEntities();if(!t)return e.some(function(l){return l.isFieldValidating()});var n=t.map(M);return e.some(function(l){var c=l.getNamePath();return Y(n,c)&&l.isFieldValidating()})},this.isFieldValidating=function(t){return r.warningUnhooked(),r.isFieldsValidating([t])},this.resetWithFieldInitialValue=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=new q,n=r.getFieldEntities(!0);n.forEach(function(o){var i=o.props.initialValue,s=o.getNamePath();if(i!==void 0){var d=e.get(s)||new Set;d.add({entity:o,value:i}),e.set(s,d)}});var l=function(i){i.forEach(function(s){var d=s.props.initialValue;if(d!==void 0){var f=s.getNamePath(),y=r.getInitialValue(f);if(y!==void 0)H(!1,"Form already set 'initialValues' with path '".concat(f.join("."),"'. Field can not overwrite it."));else{var p=e.get(f);if(p&&p.size>1)H(!1,"Multiple Field with path '".concat(f.join("."),"' set 'initialValue'. Can not decide which one to pick."));else if(p){var h=r.getFieldValue(f);(!t.skipExist||h===void 0)&&r.updateStore(W(r.store,f,E(p)[0].value))}}}})},c;t.entities?c=t.entities:t.namePathList?(c=[],t.namePathList.forEach(function(o){var i=e.get(o);if(i){var s;(s=c).push.apply(s,E(E(i).map(function(d){return d.entity})))}})):c=n,l(c)},this.resetFields=function(t){r.warningUnhooked();var e=r.store;if(!t){r.updateStore(Z({},r.initialValues)),r.resetWithFieldInitialValue(),r.notifyObservers(e,null,{type:"reset"}),r.notifyWatch();return}var n=t.map(M);n.forEach(function(l){var c=r.getInitialValue(l);r.updateStore(W(r.store,l,c))}),r.resetWithFieldInitialValue({namePathList:n}),r.notifyObservers(e,n,{type:"reset"}),r.notifyWatch(n)},this.setFields=function(t){r.warningUnhooked();var e=r.store,n=[];t.forEach(function(l){var c=l.name;l.errors;var o=de(l,er),i=M(c);n.push(i),"value"in o&&r.updateStore(W(r.store,i,o.value)),r.notifyObservers(e,[i],{type:"setField",data:l})}),r.notifyWatch(n)},this.getFields=function(){var t=r.getFieldEntities(!0),e=t.map(function(n){var l=n.getNamePath(),c=n.getMeta(),o=V(V({},c),{},{name:l,value:r.getFieldValue(l)});return Object.defineProperty(o,"originRCField",{value:!0}),o});return e},this.initEntityValue=function(t){var e=t.props.initialValue;if(e!==void 0){var n=t.getNamePath(),l=j(r.store,n);l===void 0&&r.updateStore(W(r.store,n,e))}},this.isMergedPreserve=function(t){var e=t!==void 0?t:r.preserve;return e??!0},this.registerField=function(t){r.fieldEntities.push(t);var e=t.getNamePath();if(r.notifyWatch([e]),t.props.initialValue!==void 0){var n=r.store;r.resetWithFieldInitialValue({entities:[t],skipExist:!0}),r.notifyObservers(n,[t.getNamePath()],{type:"valueUpdate",source:"internal"})}return function(l,c){var o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];if(r.fieldEntities=r.fieldEntities.filter(function(d){return d!==t}),!r.isMergedPreserve(c)&&(!l||o.length>1)){var i=l?void 0:r.getInitialValue(e);if(e.length&&r.getFieldValue(e)!==i&&r.fieldEntities.every(function(d){return!Re(d.getNamePath(),e)})){var s=r.store;r.updateStore(W(s,e,i,!0)),r.notifyObservers(s,[e],{type:"remove"}),r.triggerDependenciesUpdate(s,e)}}r.notifyWatch([e])}},this.dispatch=function(t){switch(t.type){case"updateValue":{var e=t.namePath,n=t.value;r.updateValue(e,n);break}case"validateField":{var l=t.namePath,c=t.triggerName;r.validateFields([l],{triggerName:c});break}}},this.notifyObservers=function(t,e,n){if(r.subscribable){var l=V(V({},n),{},{store:r.getFieldsValue(!0)});r.getFieldEntities().forEach(function(c){var o=c.onStoreChange;o(t,e,l)})}else r.forceRootUpdate()},this.triggerDependenciesUpdate=function(t,e){var n=r.getDependencyChildrenFields(e);return n.length&&r.validateFields(n),r.notifyObservers(t,n,{type:"dependenciesUpdate",relatedFields:[e].concat(E(n))}),n},this.updateValue=function(t,e){var n=M(t),l=r.store;r.updateStore(W(r.store,n,e)),r.notifyObservers(l,[n],{type:"valueUpdate",source:"internal"}),r.notifyWatch([n]);var c=r.triggerDependenciesUpdate(l,n),o=r.callbacks.onValuesChange;if(o){var i=ye(r.store,[n]);o(i,r.getFieldsValue())}r.triggerOnFieldsChange([n].concat(E(c)))},this.setFieldsValue=function(t){r.warningUnhooked();var e=r.store;if(t){var n=Z(r.store,t);r.updateStore(n)}r.notifyObservers(e,null,{type:"valueUpdate",source:"external"}),r.notifyWatch()},this.setFieldValue=function(t,e){r.setFields([{name:t,value:e}])},this.getDependencyChildrenFields=function(t){var e=new Set,n=[],l=new q;r.getFieldEntities().forEach(function(o){var i=o.props.dependencies;(i||[]).forEach(function(s){var d=M(s);l.update(d,function(){var f=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Set;return f.add(o),f})})});var c=function o(i){var s=l.get(i)||new Set;s.forEach(function(d){if(!e.has(d)){e.add(d);var f=d.getNamePath();d.isFieldDirty()&&f.length&&(n.push(f),o(f))}})};return c(t),n},this.triggerOnFieldsChange=function(t,e){var n=r.callbacks.onFieldsChange;if(n){var l=r.getFields();if(e){var c=new q;e.forEach(function(i){var s=i.name,d=i.errors;c.set(s,d)}),l.forEach(function(i){i.errors=c.get(i.name)||i.errors})}var o=l.filter(function(i){var s=i.name;return Y(t,s)});n(o,l)}},this.validateFields=function(t,e){r.warningUnhooked();var n=!!t,l=n?t.map(M):[],c=[];r.getFieldEntities(!0).forEach(function(s){if(n||l.push(s.getNamePath()),(e==null?void 0:e.recursive)&&n){var d=s.getNamePath();d.every(function(p,h){return t[h]===p||t[h]===void 0})&&l.push(d)}if(!(!s.props.rules||!s.props.rules.length)){var f=s.getNamePath();if(!n||Y(l,f)){var y=s.validateRules(V({validateMessages:V(V({},ke),r.validateMessages)},e));c.push(y.then(function(){return{name:f,errors:[],warnings:[]}}).catch(function(p){var h,g=[],m=[];return(h=p.forEach)===null||h===void 0||h.call(p,function(v){var w=v.rule.warningOnly,P=v.errors;w?m.push.apply(m,E(P)):g.push.apply(g,E(P))}),g.length?Promise.reject({name:f,errors:g,warnings:m}):{name:f,errors:g,warnings:m}}))}}});var o=Ze(c);r.lastValidatePromise=o,o.catch(function(s){return s}).then(function(s){var d=s.map(function(f){var y=f.name;return y});r.notifyObservers(r.store,d,{type:"validateFinish"}),r.triggerOnFieldsChange(d,s)});var i=o.then(function(){return r.lastValidatePromise===o?Promise.resolve(r.getFieldsValue(l)):Promise.reject([])}).catch(function(s){var d=s.filter(function(f){return f&&f.errors.length});return Promise.reject({values:r.getFieldsValue(l),errorFields:d,outOfDate:r.lastValidatePromise!==o})});return i.catch(function(s){return s}),i},this.submit=function(){r.warningUnhooked(),r.validateFields().then(function(t){var e=r.callbacks.onFinish;if(e)try{e(t)}catch(n){console.error(n)}}).catch(function(t){var e=r.callbacks.onFinishFailed;e&&e(t)})},this.forceRootUpdate=a});function Me(u){var a=F.exports.useRef(),r=F.exports.useState({}),t=B(r,2),e=t[1];if(!a.current)if(u)a.current=u;else{var n=function(){e({})},l=new rr(n);a.current=l.getForm()}return[a.current]}var ce=F.exports.createContext({triggerFormChange:function(){},triggerFormFinish:function(){},registerForm:function(){},unregisterForm:function(){}}),tr=function(a){var r=a.validateMessages,t=a.onFormChange,e=a.onFormFinish,n=a.children,l=F.exports.useContext(ce),c=F.exports.useRef({});return F.exports.createElement(ce.Provider,{value:V(V({},l),{},{validateMessages:V(V({},l.validateMessages),r),triggerFormChange:function(i,s){t&&t(i,{changedFields:s,forms:c.current}),l.triggerFormChange(i,s)},triggerFormFinish:function(i,s){e&&e(i,{values:s,forms:c.current}),l.triggerFormFinish(i,s)},registerForm:function(i,s){i&&(c.current=V(V({},c.current),{},ee({},i,s))),l.registerForm(i,s)},unregisterForm:function(i){var s=V({},c.current);delete s[i],c.current=s,l.unregisterForm(i)}})},n)},nr=["name","initialValues","fields","form","preserve","children","component","validateMessages","validateTrigger","onValuesChange","onFieldsChange","onFinish","onFinishFailed"],ir=function(a,r){var t=a.name,e=a.initialValues,n=a.fields,l=a.form,c=a.preserve,o=a.children,i=a.component,s=i===void 0?"form":i,d=a.validateMessages,f=a.validateTrigger,y=f===void 0?"onChange":f,p=a.onValuesChange,h=a.onFieldsChange,g=a.onFinish,m=a.onFinishFailed,v=de(a,nr),w=F.exports.useContext(ce),P=Me(l),R=B(P,1),b=R[0],$=b.getInternalHooks(K),C=$.useSubscribe,k=$.setInitialValues,N=$.setCallbacks,U=$.setValidateMessages,O=$.setPreserve,D=$.destroyForm;F.exports.useImperativeHandle(r,function(){return b}),F.exports.useEffect(function(){return w.registerForm(t,b),function(){w.unregisterForm(t)}},[w,b,t]),U(V(V({},w.validateMessages),d)),N({onValuesChange:p,onFieldsChange:function(I){if(w.triggerFormChange(t,I),h){for(var z=arguments.length,Fe=new Array(z>1?z-1:0),X=1;X<z;X++)Fe[X-1]=arguments[X];h.apply(void 0,[I].concat(Fe))}},onFinish:function(I){w.triggerFormFinish(t,I),g&&g(I)},onFinishFailed:m}),O(c);var A=F.exports.useRef(null);k(e,!A.current),A.current||(A.current=!0),F.exports.useEffect(function(){return D},[]);var L,he=typeof o=="function";if(he){var Oe=b.getFieldsValue(!0);L=o(Oe,b)}else L=o;C(!he);var me=F.exports.useRef();F.exports.useEffect(function(){De(me.current||[],n||[])||b.setFields(n||[]),me.current=n},[n,b]);var Se=F.exports.useMemo(function(){return V(V({},b),{},{validateTrigger:y})},[b,y]),pe=F.exports.createElement(J.Provider,{value:Se},L);return s===!1?pe:F.exports.createElement(s,Ce({},v,{onSubmit:function(I){I.preventDefault(),I.stopPropagation(),b.submit()},onReset:function(I){var z;I.preventDefault(),b.resetFields(),(z=v.onReset)===null||z===void 0||z.call(v,I)}}),pe)};function we(u){try{return JSON.stringify(u)}catch{return Math.random()}}function ar(){for(var u=arguments.length,a=new Array(u),r=0;r<u;r++)a[r]=arguments[r];var t=a[0],e=t===void 0?[]:t,n=a[1],l=F.exports.useState(),c=B(l,2),o=c[0],i=c[1],s=F.exports.useMemo(function(){return we(o)},[o]),d=F.exports.useRef(s);d.current=s;var f=F.exports.useContext(J),y=n||f,p=y&&y._init,h=M(e),g=F.exports.useRef(h);return g.current=h,F.exports.useEffect(function(){if(!!p){var m=y.getFieldsValue,v=y.getInternalHooks,w=v(K),P=w.registerWatch,R=P(function($){var C=j($,g.current),k=we(C);d.current!==k&&(d.current=k,i(C))}),b=j(m(),g.current);return i(b),R}},[p]),o}var sr=F.exports.forwardRef(ir),Q=sr;Q.FormProvider=tr;Q.Field=$e;Q.List=Xe;Q.useForm=Me;Q.useWatch=ar;export{J as C,tr as F,Qe as L,Q as R,$e as W,Xe as a,ar as b,Me as u};