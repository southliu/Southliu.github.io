import{r as e}from"./react@18.3.1.B8wSySjr.js";import{g as t,m as n,n as r,i,d as a,f as s,b as o,c as u,a as l,e as c,_ as d,k as f,j as g,h as v}from"./@babel_runtime@7.25.4.Bu2As08a.js";import{b as h,p as m,F as p,G as F,i as y,x as V}from"./rc-util@5.43.0_react-dom@18.3.1_react@18.3.1.CqmaNc-_.js";import{S as b}from"./@rc-component_async-validator@5.0.4.BaFtF5Iz.js";var E="RC_FORM_INTERNAL_HOOKS",k=function(){h(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},P=e.createContext({getFieldValue:k,getFieldsValue:k,getFieldError:k,getFieldWarning:k,getFieldsError:k,isFieldsTouched:k,isFieldTouched:k,isFieldValidating:k,isFieldsValidating:k,resetFields:k,setFields:k,setFieldValue:k,setFieldsValue:k,validateFields:k,submit:k,getInternalHooks:function(){return k(),{dispatch:k,initEntityValue:k,registerField:k,useSubscribe:k,setInitialValues:k,destroyForm:k,setCallbacks:k,registerWatch:k,getFields:k,setValidateMessages:k,setPreserve:k,getInitialValue:k}}}),w=e.createContext(null);function C(e){return null==e?[]:Array.isArray(e)?e:[e]}var x="'${name}' is not a valid ${type}",M={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:x,method:x,array:x,object:x,number:x,date:x,boolean:x,integer:x,float:x,regexp:x,email:x,url:x,hex:x},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}},N=b;function R(e,t){return e.replace(/\\?\$\{\w+\}/g,(function(e){if(e.startsWith("\\"))return e.slice(1);var n=e.slice(2,-1);return t[n]}))}var I="CODE_LOGIC_ERROR";function $(e,t,n,r,i){return A.apply(this,arguments)}function A(){return A=n(r().mark((function n(s,o,u,l,c){var d,f,g,v,h,p,F,y,V;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return delete(d=t({},u)).ruleIndex,N.warning=function(){},d.validator&&(f=d.validator,d.validator=function(){try{return f.apply(void 0,arguments)}catch(e){return Promise.reject(I)}}),g=null,d&&"array"===d.type&&d.defaultField&&(g=d.defaultField,delete d.defaultField),v=new N(a({},s,[d])),h=m(M,l.validateMessages),v.messages(h),p=[],n.prev=10,n.next=13,Promise.resolve(v.validate(a({},s,o),t({},l)));case 13:n.next=18;break;case 15:n.prev=15,n.t0=n.catch(10),n.t0.errors&&(p=n.t0.errors.map((function(t,n){var r=t.message,i=r===I?h.default:r;return e.isValidElement(i)?e.cloneElement(i,{key:"error_".concat(n)}):i})));case 18:if(p.length||!g){n.next=23;break}return n.next=21,Promise.all(o.map((function(e,t){return $("".concat(s,".").concat(t),e,g,l,c)})));case 21:return F=n.sent,n.abrupt("return",F.reduce((function(e,t){return[].concat(i(e),i(t))}),[]));case 23:return y=t(t({},u),{},{name:s,enum:(u.enum||[]).join(", ")},c),V=p.map((function(e){return"string"==typeof e?R(e,y):e})),n.abrupt("return",V);case 26:case"end":return n.stop()}}),n,null,[[10,15]])}))),A.apply(this,arguments)}function L(e,i,a,s,o,u){var l,c=e.join("."),d=a.map((function(e,n){var r=e.validator,i=t(t({},e),{},{ruleIndex:n});return r&&(i.validator=function(e,t,n){var i=!1,a=r(e,t,(function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];Promise.resolve().then((function(){h(!i,"Your validator function has already return a promise. `callback` will be ignored."),i||n.apply(void 0,t)}))}));i=a&&"function"==typeof a.then&&"function"==typeof a.catch,h(i,"`callback` is deprecated. Please return a promise instead."),i&&a.then((function(){n()})).catch((function(e){n(e||" ")}))}),i})).sort((function(e,t){var n=e.warningOnly,r=e.ruleIndex,i=t.warningOnly,a=t.ruleIndex;return!!n==!!i?r-a:n?1:-1}));if(!0===o)l=new Promise(function(){var e=n(r().mark((function e(t,n){var a,o,l;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=0;case 1:if(!(a<d.length)){e.next=12;break}return o=d[a],e.next=5,$(c,i,o,s,u);case 5:if(!(l=e.sent).length){e.next=9;break}return n([{errors:l,rule:o}]),e.abrupt("return");case 9:a+=1,e.next=1;break;case 12:t([]);case 13:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}());else{var f=d.map((function(e){return $(c,i,e,s,u).then((function(t){return{errors:t,rule:e}}))}));l=(o?function(e){return S.apply(this,arguments)}(f):function(e){return O.apply(this,arguments)}(f)).then((function(e){return Promise.reject(e)}))}return l.catch((function(e){return e})),l}function O(){return(O=n(r().mark((function e(t){return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",Promise.all(t).then((function(e){var t;return(t=[]).concat.apply(t,i(e))})));case 1:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function S(){return(S=n(r().mark((function e(t){var n;return r().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=0,e.abrupt("return",new Promise((function(e){t.forEach((function(r){r.then((function(r){r.errors.length&&e([r]),(n+=1)===t.length&&e([])}))}))})));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function U(e){return C(e)}function T(e,t){var n={};return t.forEach((function(t){var r=p(e,t);n=F(n,t,r)})),n}function W(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return e&&e.some((function(e){return _(t,e,n)}))}function _(e,t){return!(!e||!t)&&(!(!(arguments.length>2&&void 0!==arguments[2]&&arguments[2])&&e.length!==t.length)&&t.every((function(t,n){return e[n]===t})))}function j(e){var t=arguments.length<=1?void 0:arguments[1];return t&&t.target&&"object"===s(t.target)&&e in t.target?t.target[e]:t}function D(e,t,n){var r=e.length;if(t<0||t>=r||n<0||n>=r)return e;var a=e[t],s=t-n;return s>0?[].concat(i(e.slice(0,n)),[a],i(e.slice(n,t)),i(e.slice(t+1,r))):s<0?[].concat(i(e.slice(0,t)),i(e.slice(t+1,n+1)),[a],i(e.slice(n+1,r))):e}var H=["name"],q=[];function z(e,t,n,r,i,a){return"function"==typeof e?e(t,n,"source"in a?{source:a.source}:{}):r!==i}var G=function(s){o(g,s);var f=u(g);function g(s){var o;(l(this,g),o=f.call(this,s),a(c(o),"state",{resetCount:0}),a(c(o),"cancelRegisterFunc",null),a(c(o),"mounted",!1),a(c(o),"touched",!1),a(c(o),"dirty",!1),a(c(o),"validatePromise",void 0),a(c(o),"prevValidating",void 0),a(c(o),"errors",q),a(c(o),"warnings",q),a(c(o),"cancelRegister",(function(){var e=o.props,t=e.preserve,n=e.isListField,r=e.name;o.cancelRegisterFunc&&o.cancelRegisterFunc(n,t,U(r)),o.cancelRegisterFunc=null})),a(c(o),"getNamePath",(function(){var e=o.props,t=e.name,n=e.fieldContext.prefixName;return void 0!==t?[].concat(i(void 0===n?[]:n),i(t)):[]})),a(c(o),"getRules",(function(){var e=o.props,t=e.rules,n=void 0===t?[]:t,r=e.fieldContext;return n.map((function(e){return"function"==typeof e?e(r):e}))})),a(c(o),"refresh",(function(){o.mounted&&o.setState((function(e){return{resetCount:e.resetCount+1}}))})),a(c(o),"metaCache",null),a(c(o),"triggerMetaEvent",(function(e){var n=o.props.onMetaChange;if(n){var r=t(t({},o.getMeta()),{},{destroy:e});y(o.metaCache,r)||n(r),o.metaCache=r}else o.metaCache=null})),a(c(o),"onStoreChange",(function(e,t,n){var r=o.props,i=r.shouldUpdate,a=r.dependencies,s=void 0===a?[]:a,u=r.onReset,l=n.store,c=o.getNamePath(),d=o.getValue(e),f=o.getValue(l),g=t&&W(t,c);switch("valueUpdate"!==n.type||"external"!==n.source||y(d,f)||(o.touched=!0,o.dirty=!0,o.validatePromise=null,o.errors=q,o.warnings=q,o.triggerMetaEvent()),n.type){case"reset":if(!t||g)return o.touched=!1,o.dirty=!1,o.validatePromise=void 0,o.errors=q,o.warnings=q,o.triggerMetaEvent(),null==u||u(),void o.refresh();break;case"remove":if(i&&z(i,e,l,d,f,n))return void o.reRender();break;case"setField":var v=n.data;if(g)return"touched"in v&&(o.touched=v.touched),"validating"in v&&!("originRCField"in v)&&(o.validatePromise=v.validating?Promise.resolve([]):null),"errors"in v&&(o.errors=v.errors||q),"warnings"in v&&(o.warnings=v.warnings||q),o.dirty=!0,o.triggerMetaEvent(),void o.reRender();if("value"in v&&W(t,c,!0))return void o.reRender();if(i&&!c.length&&z(i,e,l,d,f,n))return void o.reRender();break;case"dependenciesUpdate":if(s.map(U).some((function(e){return W(n.relatedFields,e)})))return void o.reRender();break;default:if(g||(!s.length||c.length||i)&&z(i,e,l,d,f,n))return void o.reRender()}!0===i&&o.reRender()})),a(c(o),"validateRules",(function(e){var t=o.getNamePath(),a=o.getValue(),s=e||{},u=s.triggerName,l=s.validateOnly,c=void 0!==l&&l,d=Promise.resolve().then(n(r().mark((function n(){var s,l,c,f,g,v,h;return r().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o.mounted){n.next=2;break}return n.abrupt("return",[]);case 2:if(s=o.props,l=s.validateFirst,c=void 0!==l&&l,f=s.messageVariables,g=s.validateDebounce,v=o.getRules(),u&&(v=v.filter((function(e){return e})).filter((function(e){var t=e.validateTrigger;return!t||C(t).includes(u)}))),!g||!u){n.next=10;break}return n.next=8,new Promise((function(e){setTimeout(e,g)}));case 8:if(o.validatePromise===d){n.next=10;break}return n.abrupt("return",[]);case 10:return(h=L(t,a,v,e,c,f)).catch((function(e){return e})).then((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:q;if(o.validatePromise===d){var t;o.validatePromise=null;var n=[],r=[];null===(t=e.forEach)||void 0===t||t.call(e,(function(e){var t=e.rule.warningOnly,a=e.errors,s=void 0===a?q:a;t?r.push.apply(r,i(s)):n.push.apply(n,i(s))})),o.errors=n,o.warnings=r,o.triggerMetaEvent(),o.reRender()}})),n.abrupt("return",h);case 13:case"end":return n.stop()}}),n)}))));return c||(o.validatePromise=d,o.dirty=!0,o.errors=q,o.warnings=q,o.triggerMetaEvent(),o.reRender()),d})),a(c(o),"isFieldValidating",(function(){return!!o.validatePromise})),a(c(o),"isFieldTouched",(function(){return o.touched})),a(c(o),"isFieldDirty",(function(){return!(!o.dirty&&void 0===o.props.initialValue)||void 0!==(0,o.props.fieldContext.getInternalHooks(E).getInitialValue)(o.getNamePath())})),a(c(o),"getErrors",(function(){return o.errors})),a(c(o),"getWarnings",(function(){return o.warnings})),a(c(o),"isListField",(function(){return o.props.isListField})),a(c(o),"isList",(function(){return o.props.isList})),a(c(o),"isPreserve",(function(){return o.props.preserve})),a(c(o),"getMeta",(function(){return o.prevValidating=o.isFieldValidating(),{touched:o.isFieldTouched(),validating:o.prevValidating,errors:o.errors,warnings:o.warnings,name:o.getNamePath(),validated:null===o.validatePromise}})),a(c(o),"getOnlyChild",(function(n){if("function"==typeof n){var r=o.getMeta();return t(t({},o.getOnlyChild(n(o.getControlled(),r,o.props.fieldContext))),{},{isFunction:!0})}var i=V(n);return 1===i.length&&e.isValidElement(i[0])?{child:i[0],isFunction:!1}:{child:i,isFunction:!1}})),a(c(o),"getValue",(function(e){var t=o.props.fieldContext.getFieldsValue,n=o.getNamePath();return p(e||t(!0),n)})),a(c(o),"getControlled",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=o.props,r=n.name,i=n.trigger,s=n.validateTrigger,u=n.getValueFromEvent,l=n.normalize,c=n.valuePropName,d=n.getValueProps,f=n.fieldContext,g=void 0!==s?s:f.validateTrigger,v=o.getNamePath(),h=f.getInternalHooks,m=f.getFieldsValue,p=h(E).dispatch,F=o.getValue(),y=d||function(e){return a({},c,e)},V=e[i],b=void 0!==r?y(F):{},k=t(t({},e),b);return k[i]=function(){var e;o.touched=!0,o.dirty=!0,o.triggerMetaEvent();for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];e=u?u.apply(void 0,n):j.apply(void 0,[c].concat(n)),l&&(e=l(e,F,m(!0))),p({type:"updateValue",namePath:v,value:e}),V&&V.apply(void 0,n)},C(g||[]).forEach((function(e){var t=k[e];k[e]=function(){t&&t.apply(void 0,arguments);var n=o.props.rules;n&&n.length&&p({type:"validateField",namePath:v,triggerName:e})}})),k})),s.fieldContext)&&(0,(0,s.fieldContext.getInternalHooks)(E).initEntityValue)(c(o));return o}return d(g,[{key:"componentDidMount",value:function(){var e=this.props,t=e.shouldUpdate,n=e.fieldContext;if(this.mounted=!0,n){var r=(0,n.getInternalHooks)(E).registerField;this.cancelRegisterFunc=r(this)}!0===t&&this.reRender()}},{key:"componentWillUnmount",value:function(){this.cancelRegister(),this.triggerMetaEvent(!0),this.mounted=!1}},{key:"reRender",value:function(){this.mounted&&this.forceUpdate()}},{key:"render",value:function(){var t,n=this.state.resetCount,r=this.props.children,i=this.getOnlyChild(r),a=i.child;return i.isFunction?t=a:e.isValidElement(a)?t=e.cloneElement(a,this.getControlled(a.props)):(h(!a,"`children` of Field is not validate ReactElement."),t=a),e.createElement(e.Fragment,{key:n},t)}}]),g}(e.Component);function J(t){var n=t.name,r=f(t,H),i=e.useContext(P),a=e.useContext(w),s=void 0!==n?U(n):void 0,o="keep";return r.isListField||(o="_".concat((s||[]).join("_"))),e.createElement(G,g({key:o,name:s,isListField:!!a},r,{fieldContext:i}))}function K(n){var r=n.name,a=n.initialValue,s=n.children,o=n.rules,u=n.validateTrigger,l=n.isListField,c=e.useContext(P),d=e.useContext(w),f=e.useRef({keys:[],id:0}).current,g=e.useMemo((function(){var e=U(c.prefixName)||[];return[].concat(i(e),i(U(r)))}),[c.prefixName,r]),v=e.useMemo((function(){return t(t({},c),{},{prefixName:g})}),[c,g]),m=e.useMemo((function(){return{getKey:function(e){var t=g.length,n=e[t];return[f.keys[n],e.slice(t+1)]}}}),[g]);if("function"!=typeof s)return h(!1,"Form.List only accepts function as children."),null;return e.createElement(w.Provider,{value:m},e.createElement(P.Provider,{value:v},e.createElement(J,{name:[],shouldUpdate:function(e,t,n){return"internal"!==n.source&&e!==t},rules:o,validateTrigger:u,initialValue:a,isList:!0,isListField:null!=l?l:!!d},(function(e,t){var n=e.value,r=void 0===n?[]:n,a=e.onChange,o=c.getFieldValue,u=function(){return o(g||[])||[]},l={add:function(e,t){var n=u();t>=0&&t<=n.length?(f.keys=[].concat(i(f.keys.slice(0,t)),[f.id],i(f.keys.slice(t))),a([].concat(i(n.slice(0,t)),[e],i(n.slice(t))))):(f.keys=[].concat(i(f.keys),[f.id]),a([].concat(i(n),[e]))),f.id+=1},remove:function(e){var t=u(),n=new Set(Array.isArray(e)?e:[e]);n.size<=0||(f.keys=f.keys.filter((function(e,t){return!n.has(t)})),a(t.filter((function(e,t){return!n.has(t)}))))},move:function(e,t){if(e!==t){var n=u();e<0||e>=n.length||t<0||t>=n.length||(f.keys=D(f.keys,e,t),a(D(n,e,t)))}}},d=r||[];return Array.isArray(d)||(d=[]),s(d.map((function(e,t){var n=f.keys[t];return void 0===n&&(f.keys[t]=f.id,n=f.keys[t],f.id+=1),{name:t,key:n,isListField:!0}})),l,t)}))))}a(G,"contextType",P),a(G,"defaultProps",{trigger:"onChange",valuePropName:"value"});var Y="__@field_split__";function B(e){return e.map((function(e){return"".concat(s(e),":").concat(e)})).join(Y)}var Q=function(){function e(){l(this,e),a(this,"kvs",new Map)}return d(e,[{key:"set",value:function(e,t){this.kvs.set(B(e),t)}},{key:"get",value:function(e){return this.kvs.get(B(e))}},{key:"update",value:function(e,t){var n=t(this.get(e));n?this.set(e,n):this.delete(e)}},{key:"delete",value:function(e){this.kvs.delete(B(e))}},{key:"map",value:function(e){return i(this.kvs.entries()).map((function(t){var n=v(t,2),r=n[0],i=n[1],a=r.split(Y);return e({key:a.map((function(e){var t=e.match(/^([^:]*):(.*)$/),n=v(t,3),r=n[1],i=n[2];return"number"===r?Number(i):i})),value:i})}))}},{key:"toJSON",value:function(){var e={};return this.map((function(t){var n=t.key,r=t.value;return e[n.join(".")]=r,null})),e}}]),e}(),X=["name"],Z=d((function e(n){var r=this;l(this,e),a(this,"formHooked",!1),a(this,"forceRootUpdate",void 0),a(this,"subscribable",!0),a(this,"store",{}),a(this,"fieldEntities",[]),a(this,"initialValues",{}),a(this,"callbacks",{}),a(this,"validateMessages",null),a(this,"preserve",null),a(this,"lastValidatePromise",null),a(this,"getForm",(function(){return{getFieldValue:r.getFieldValue,getFieldsValue:r.getFieldsValue,getFieldError:r.getFieldError,getFieldWarning:r.getFieldWarning,getFieldsError:r.getFieldsError,isFieldsTouched:r.isFieldsTouched,isFieldTouched:r.isFieldTouched,isFieldValidating:r.isFieldValidating,isFieldsValidating:r.isFieldsValidating,resetFields:r.resetFields,setFields:r.setFields,setFieldValue:r.setFieldValue,setFieldsValue:r.setFieldsValue,validateFields:r.validateFields,submit:r.submit,_init:!0,getInternalHooks:r.getInternalHooks}})),a(this,"getInternalHooks",(function(e){return e===E?(r.formHooked=!0,{dispatch:r.dispatch,initEntityValue:r.initEntityValue,registerField:r.registerField,useSubscribe:r.useSubscribe,setInitialValues:r.setInitialValues,destroyForm:r.destroyForm,setCallbacks:r.setCallbacks,setValidateMessages:r.setValidateMessages,getFields:r.getFields,setPreserve:r.setPreserve,getInitialValue:r.getInitialValue,registerWatch:r.registerWatch}):(h(!1,"`getInternalHooks` is internal usage. Should not call directly."),null)})),a(this,"useSubscribe",(function(e){r.subscribable=e})),a(this,"prevWithoutPreserves",null),a(this,"setInitialValues",(function(e,t){if(r.initialValues=e||{},t){var n,i=m(e,r.store);null===(n=r.prevWithoutPreserves)||void 0===n||n.map((function(t){var n=t.key;i=F(i,n,p(e,n))})),r.prevWithoutPreserves=null,r.updateStore(i)}})),a(this,"destroyForm",(function(e){if(e)r.updateStore({});else{var t=new Q;r.getFieldEntities(!0).forEach((function(e){r.isMergedPreserve(e.isPreserve())||t.set(e.getNamePath(),!0)})),r.prevWithoutPreserves=t}})),a(this,"getInitialValue",(function(e){var t=p(r.initialValues,e);return e.length?m(t):t})),a(this,"setCallbacks",(function(e){r.callbacks=e})),a(this,"setValidateMessages",(function(e){r.validateMessages=e})),a(this,"setPreserve",(function(e){r.preserve=e})),a(this,"watchList",[]),a(this,"registerWatch",(function(e){return r.watchList.push(e),function(){r.watchList=r.watchList.filter((function(t){return t!==e}))}})),a(this,"notifyWatch",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];if(r.watchList.length){var t=r.getFieldsValue(),n=r.getFieldsValue(!0);r.watchList.forEach((function(r){r(t,n,e)}))}})),a(this,"timeoutId",null),a(this,"warningUnhooked",(function(){})),a(this,"updateStore",(function(e){r.store=e})),a(this,"getFieldEntities",(function(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]?r.fieldEntities.filter((function(e){return e.getNamePath().length})):r.fieldEntities})),a(this,"getFieldsMap",(function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=new Q;return r.getFieldEntities(e).forEach((function(e){var n=e.getNamePath();t.set(n,e)})),t})),a(this,"getFieldEntitiesForNamePathList",(function(e){if(!e)return r.getFieldEntities(!0);var t=r.getFieldsMap(!0);return e.map((function(e){var n=U(e);return t.get(n)||{INVALIDATE_NAME_PATH:U(e)}}))})),a(this,"getFieldsValue",(function(e,t){var n,i,a;if(r.warningUnhooked(),!0===e||Array.isArray(e)?(n=e,i=t):e&&"object"===s(e)&&(a=e.strict,i=e.filter),!0===n&&!i)return r.store;var o=r.getFieldEntitiesForNamePathList(Array.isArray(n)?n:null),u=[];return o.forEach((function(e){var t,r,s,o,l="INVALIDATE_NAME_PATH"in e?e.INVALIDATE_NAME_PATH:e.getNamePath();if(a){if(null!==(s=(o=e).isList)&&void 0!==s&&s.call(o))return}else if(!n&&null!==(t=(r=e).isListField)&&void 0!==t&&t.call(r))return;if(i){var c="getMeta"in e?e.getMeta():null;i(c)&&u.push(l)}else u.push(l)})),T(r.store,u.map(U))})),a(this,"getFieldValue",(function(e){r.warningUnhooked();var t=U(e);return p(r.store,t)})),a(this,"getFieldsError",(function(e){return r.warningUnhooked(),r.getFieldEntitiesForNamePathList(e).map((function(t,n){return t&&!("INVALIDATE_NAME_PATH"in t)?{name:t.getNamePath(),errors:t.getErrors(),warnings:t.getWarnings()}:{name:U(e[n]),errors:[],warnings:[]}}))})),a(this,"getFieldError",(function(e){r.warningUnhooked();var t=U(e);return r.getFieldsError([t])[0].errors})),a(this,"getFieldWarning",(function(e){r.warningUnhooked();var t=U(e);return r.getFieldsError([t])[0].warnings})),a(this,"isFieldsTouched",(function(){r.warningUnhooked();for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var a,s=t[0],o=t[1],u=!1;0===t.length?a=null:1===t.length?Array.isArray(s)?(a=s.map(U),u=!1):(a=null,u=s):(a=s.map(U),u=o);var l=r.getFieldEntities(!0),c=function(e){return e.isFieldTouched()};if(!a)return u?l.every((function(e){return c(e)||e.isList()})):l.some(c);var d=new Q;a.forEach((function(e){d.set(e,[])})),l.forEach((function(e){var t=e.getNamePath();a.forEach((function(n){n.every((function(e,n){return t[n]===e}))&&d.update(n,(function(t){return[].concat(i(t),[e])}))}))}));var f=function(e){return e.some(c)},g=d.map((function(e){return e.value}));return u?g.every(f):g.some(f)})),a(this,"isFieldTouched",(function(e){return r.warningUnhooked(),r.isFieldsTouched([e])})),a(this,"isFieldsValidating",(function(e){r.warningUnhooked();var t=r.getFieldEntities();if(!e)return t.some((function(e){return e.isFieldValidating()}));var n=e.map(U);return t.some((function(e){var t=e.getNamePath();return W(n,t)&&e.isFieldValidating()}))})),a(this,"isFieldValidating",(function(e){return r.warningUnhooked(),r.isFieldsValidating([e])})),a(this,"resetWithFieldInitialValue",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=new Q,n=r.getFieldEntities(!0);n.forEach((function(e){var n=e.props.initialValue,r=e.getNamePath();if(void 0!==n){var i=t.get(r)||new Set;i.add({entity:e,value:n}),t.set(r,i)}}));var a;e.entities?a=e.entities:e.namePathList?(a=[],e.namePathList.forEach((function(e){var n,r=t.get(e);r&&(n=a).push.apply(n,i(i(r).map((function(e){return e.entity}))))}))):a=n,a.forEach((function(n){if(void 0!==n.props.initialValue){var a=n.getNamePath();if(void 0!==r.getInitialValue(a))h(!1,"Form already set 'initialValues' with path '".concat(a.join("."),"'. Field can not overwrite it."));else{var s=t.get(a);if(s&&s.size>1)h(!1,"Multiple Field with path '".concat(a.join("."),"' set 'initialValue'. Can not decide which one to pick."));else if(s){var o=r.getFieldValue(a);n.isListField()||e.skipExist&&void 0!==o||r.updateStore(F(r.store,a,i(s)[0].value))}}}}))})),a(this,"resetFields",(function(e){r.warningUnhooked();var t=r.store;if(!e)return r.updateStore(m(r.initialValues)),r.resetWithFieldInitialValue(),r.notifyObservers(t,null,{type:"reset"}),void r.notifyWatch();var n=e.map(U);n.forEach((function(e){var t=r.getInitialValue(e);r.updateStore(F(r.store,e,t))})),r.resetWithFieldInitialValue({namePathList:n}),r.notifyObservers(t,n,{type:"reset"}),r.notifyWatch(n)})),a(this,"setFields",(function(e){r.warningUnhooked();var t=r.store,n=[];e.forEach((function(e){var i=e.name,a=f(e,X),s=U(i);n.push(s),"value"in a&&r.updateStore(F(r.store,s,a.value)),r.notifyObservers(t,[s],{type:"setField",data:e})})),r.notifyWatch(n)})),a(this,"getFields",(function(){return r.getFieldEntities(!0).map((function(e){var n=e.getNamePath(),i=e.getMeta(),a=t(t({},i),{},{name:n,value:r.getFieldValue(n)});return Object.defineProperty(a,"originRCField",{value:!0}),a}))})),a(this,"initEntityValue",(function(e){var t=e.props.initialValue;if(void 0!==t){var n=e.getNamePath();void 0===p(r.store,n)&&r.updateStore(F(r.store,n,t))}})),a(this,"isMergedPreserve",(function(e){var t=void 0!==e?e:r.preserve;return null==t||t})),a(this,"registerField",(function(e){r.fieldEntities.push(e);var t=e.getNamePath();if(r.notifyWatch([t]),void 0!==e.props.initialValue){var n=r.store;r.resetWithFieldInitialValue({entities:[e],skipExist:!0}),r.notifyObservers(n,[e.getNamePath()],{type:"valueUpdate",source:"internal"})}return function(n,i){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(r.fieldEntities=r.fieldEntities.filter((function(t){return t!==e})),!r.isMergedPreserve(i)&&(!n||a.length>1)){var s=n?void 0:r.getInitialValue(t);if(t.length&&r.getFieldValue(t)!==s&&r.fieldEntities.every((function(e){return!_(e.getNamePath(),t)}))){var o=r.store;r.updateStore(F(o,t,s,!0)),r.notifyObservers(o,[t],{type:"remove"}),r.triggerDependenciesUpdate(o,t)}}r.notifyWatch([t])}})),a(this,"dispatch",(function(e){switch(e.type){case"updateValue":var t=e.namePath,n=e.value;r.updateValue(t,n);break;case"validateField":var i=e.namePath,a=e.triggerName;r.validateFields([i],{triggerName:a})}})),a(this,"notifyObservers",(function(e,n,i){if(r.subscribable){var a=t(t({},i),{},{store:r.getFieldsValue(!0)});r.getFieldEntities().forEach((function(t){(0,t.onStoreChange)(e,n,a)}))}else r.forceRootUpdate()})),a(this,"triggerDependenciesUpdate",(function(e,t){var n=r.getDependencyChildrenFields(t);return n.length&&r.validateFields(n),r.notifyObservers(e,n,{type:"dependenciesUpdate",relatedFields:[t].concat(i(n))}),n})),a(this,"updateValue",(function(e,t){var n=U(e),a=r.store;r.updateStore(F(r.store,n,t)),r.notifyObservers(a,[n],{type:"valueUpdate",source:"internal"}),r.notifyWatch([n]);var s=r.triggerDependenciesUpdate(a,n),o=r.callbacks.onValuesChange;o&&o(T(r.store,[n]),r.getFieldsValue());r.triggerOnFieldsChange([n].concat(i(s)))})),a(this,"setFieldsValue",(function(e){r.warningUnhooked();var t=r.store;if(e){var n=m(r.store,e);r.updateStore(n)}r.notifyObservers(t,null,{type:"valueUpdate",source:"external"}),r.notifyWatch()})),a(this,"setFieldValue",(function(e,t){r.setFields([{name:e,value:t}])})),a(this,"getDependencyChildrenFields",(function(e){var t=new Set,n=[],i=new Q;r.getFieldEntities().forEach((function(e){(e.props.dependencies||[]).forEach((function(t){var n=U(t);i.update(n,(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Set;return t.add(e),t}))}))}));return function e(r){(i.get(r)||new Set).forEach((function(r){if(!t.has(r)){t.add(r);var i=r.getNamePath();r.isFieldDirty()&&i.length&&(n.push(i),e(i))}}))}(e),n})),a(this,"triggerOnFieldsChange",(function(e,t){var n=r.callbacks.onFieldsChange;if(n){var i=r.getFields();if(t){var a=new Q;t.forEach((function(e){var t=e.name,n=e.errors;a.set(t,n)})),i.forEach((function(e){e.errors=a.get(e.name)||e.errors}))}var s=i.filter((function(t){var n=t.name;return W(e,n)}));s.length&&n(s,i)}})),a(this,"validateFields",(function(e,n){var a,s;r.warningUnhooked(),Array.isArray(e)||"string"==typeof e||"string"==typeof n?(a=e,s=n):s=e;var o=!!a,u=o?a.map(U):[],l=[],c=String(Date.now()),d=new Set,f=s||{},g=f.recursive,v=f.dirty;r.getFieldEntities(!0).forEach((function(e){if(o||u.push(e.getNamePath()),e.props.rules&&e.props.rules.length&&(!v||e.isFieldDirty())){var n=e.getNamePath();if(d.add(n.join(c)),!o||W(u,n,g)){var a=e.validateRules(t({validateMessages:t(t({},M),r.validateMessages)},s));l.push(a.then((function(){return{name:n,errors:[],warnings:[]}})).catch((function(e){var t,r=[],a=[];return null===(t=e.forEach)||void 0===t||t.call(e,(function(e){var t=e.rule.warningOnly,n=e.errors;t?a.push.apply(a,i(n)):r.push.apply(r,i(n))})),r.length?Promise.reject({name:n,errors:r,warnings:a}):{name:n,errors:r,warnings:a}})))}}}));var h=function(e){var t=!1,n=e.length,r=[];return e.length?new Promise((function(i,a){e.forEach((function(e,s){e.catch((function(e){return t=!0,e})).then((function(e){n-=1,r[s]=e,n>0||(t&&a(r),i(r))}))}))})):Promise.resolve([])}(l);r.lastValidatePromise=h,h.catch((function(e){return e})).then((function(e){var t=e.map((function(e){return e.name}));r.notifyObservers(r.store,t,{type:"validateFinish"}),r.triggerOnFieldsChange(t,e)}));var m=h.then((function(){return r.lastValidatePromise===h?Promise.resolve(r.getFieldsValue(u)):Promise.reject([])})).catch((function(e){var t=e.filter((function(e){return e&&e.errors.length}));return Promise.reject({values:r.getFieldsValue(u),errorFields:t,outOfDate:r.lastValidatePromise!==h})}));m.catch((function(e){return e}));var p=u.filter((function(e){return d.has(e.join(c))}));return r.triggerOnFieldsChange(p),m})),a(this,"submit",(function(){r.warningUnhooked(),r.validateFields().then((function(e){var t=r.callbacks.onFinish;if(t)try{t(e)}catch(n){}})).catch((function(e){var t=r.callbacks.onFinishFailed;t&&t(e)}))})),this.forceRootUpdate=n}));function ee(t){var n=e.useRef(),r=e.useState({}),i=v(r,2)[1];if(!n.current)if(t)n.current=t;else{var a=new Z((function(){i({})}));n.current=a.getForm()}return[n.current]}var te=e.createContext({triggerFormChange:function(){},triggerFormFinish:function(){},registerForm:function(){},unregisterForm:function(){}}),ne=function(n){var r=n.validateMessages,i=n.onFormChange,s=n.onFormFinish,o=n.children,u=e.useContext(te),l=e.useRef({});return e.createElement(te.Provider,{value:t(t({},u),{},{validateMessages:t(t({},u.validateMessages),r),triggerFormChange:function(e,t){i&&i(e,{changedFields:t,forms:l.current}),u.triggerFormChange(e,t)},triggerFormFinish:function(e,t){s&&s(e,{values:t,forms:l.current}),u.triggerFormFinish(e,t)},registerForm:function(e,n){e&&(l.current=t(t({},l.current),{},a({},e,n))),u.registerForm(e,n)},unregisterForm:function(e){var n=t({},l.current);delete n[e],l.current=n,u.unregisterForm(e)}})},o)},re=["name","initialValues","fields","form","preserve","children","component","validateMessages","validateTrigger","onValuesChange","onFieldsChange","onFinish","onFinishFailed","clearOnDestroy"],ie=function(n,r){var a=n.name,o=n.initialValues,u=n.fields,l=n.form,c=n.preserve,d=n.children,h=n.component,m=void 0===h?"form":h,p=n.validateMessages,F=n.validateTrigger,y=void 0===F?"onChange":F,V=n.onValuesChange,b=n.onFieldsChange,k=n.onFinish,C=n.onFinishFailed,x=n.clearOnDestroy,M=f(n,re),N=e.useRef(null),R=e.useContext(te),I=ee(l),$=v(I,1)[0],A=$.getInternalHooks(E),L=A.useSubscribe,O=A.setInitialValues,S=A.setCallbacks,U=A.setValidateMessages,T=A.setPreserve,W=A.destroyForm;e.useImperativeHandle(r,(function(){return t(t({},$),{},{nativeElement:N.current})})),e.useEffect((function(){return R.registerForm(a,$),function(){R.unregisterForm(a)}}),[R,$,a]),U(t(t({},R.validateMessages),p)),S({onValuesChange:V,onFieldsChange:function(e){if(R.triggerFormChange(a,e),b){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];b.apply(void 0,[e].concat(n))}},onFinish:function(e){R.triggerFormFinish(a,e),k&&k(e)},onFinishFailed:C}),T(c);var _,j=e.useRef(null);O(o,!j.current),j.current||(j.current=!0),e.useEffect((function(){return function(){return W(x)}}),[]);var D="function"==typeof d;D?_=d($.getFieldsValue(!0),$):_=d;L(!D);var H=e.useRef();e.useEffect((function(){(function(e,t){if(e===t)return!0;if(!e&&t||e&&!t)return!1;if(!e||!t||"object"!==s(e)||"object"!==s(t))return!1;var n=Object.keys(e),r=Object.keys(t),a=new Set([].concat(n,r));return i(a).every((function(n){var r=e[n],i=t[n];return"function"==typeof r&&"function"==typeof i||r===i}))})(H.current||[],u||[])||$.setFields(u||[]),H.current=u}),[u,$]);var q=e.useMemo((function(){return t(t({},$),{},{validateTrigger:y})}),[$,y]),z=e.createElement(w.Provider,{value:null},e.createElement(P.Provider,{value:q},_));return!1===m?z:e.createElement(m,g({},M,{ref:N,onSubmit:function(e){e.preventDefault(),e.stopPropagation(),$.submit()},onReset:function(e){var t;e.preventDefault(),$.resetFields(),null===(t=M.onReset)||void 0===t||t.call(M,e)}}),z)};function ae(e){try{return JSON.stringify(e)}catch(t){return Math.random()}}function se(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];var i=n[0],a=n[1],s=void 0===a?{}:a,o=function(e){return e&&!!e._init}(s)?{form:s}:s,u=o.form,l=e.useState(),c=v(l,2),d=c[0],f=c[1],g=e.useMemo((function(){return ae(d)}),[d]),h=e.useRef(g);h.current=g;var m=e.useContext(P),F=u||m,y=F&&F._init,V=U(i),b=e.useRef(V);return b.current=V,e.useEffect((function(){if(y){var e=F.getFieldsValue,t=(0,F.getInternalHooks)(E).registerWatch,n=function(e,t){var n=o.preserve?t:e;return"function"==typeof i?i(n):p(n,b.current)},r=t((function(e,t){var r=n(e,t),i=ae(r);h.current!==i&&(h.current=i,f(r))})),a=n(e(),e(!0));return d!==a&&f(a),r}}),[y]),d}var oe=e.forwardRef(ie);oe.FormProvider=ne,oe.Field=J,oe.List=K,oe.useForm=ee,oe.useWatch=se;export{P as C,ne as F,w as L,oe as R,J as W,K as a,se as b,ee as u};