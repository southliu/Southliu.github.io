var e,r={exports:{}},t={},o=Symbol.for("react.element"),n=Symbol.for("react.portal"),f=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),u=Symbol.for("react.provider"),i=Symbol.for("react.context"),a=Symbol.for("react.server_context"),l=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),m=Symbol.for("react.suspense_list"),p=Symbol.for("react.memo"),S=Symbol.for("react.lazy"),b=Symbol.for("react.offscreen");function d(e){if("object"==typeof e&&null!==e){var r=e.$$typeof;switch(r){case o:switch(e=e.type){case f:case s:case c:case y:case m:return e;default:switch(e=e&&e.$$typeof){case a:case i:case l:case S:case p:case u:return e;default:return r}}case n:return r}}}e=Symbol.for("react.module.reference"),t.ContextConsumer=i,t.ContextProvider=u,t.Element=o,t.ForwardRef=l,t.Fragment=f,t.Lazy=S,t.Memo=p,t.Portal=n,t.Profiler=s,t.StrictMode=c,t.Suspense=y,t.SuspenseList=m,t.isAsyncMode=function(){return!1},t.isConcurrentMode=function(){return!1},t.isContextConsumer=function(e){return d(e)===i},t.isContextProvider=function(e){return d(e)===u},t.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===o},t.isForwardRef=function(e){return d(e)===l},t.isFragment=function(e){return d(e)===f},t.isLazy=function(e){return d(e)===S},t.isMemo=function(e){return d(e)===p},t.isPortal=function(e){return d(e)===n},t.isProfiler=function(e){return d(e)===s},t.isStrictMode=function(e){return d(e)===c},t.isSuspense=function(e){return d(e)===y},t.isSuspenseList=function(e){return d(e)===m},t.isValidElementType=function(r){return"string"==typeof r||"function"==typeof r||r===f||r===s||r===c||r===y||r===m||r===b||"object"==typeof r&&null!==r&&(r.$$typeof===S||r.$$typeof===p||r.$$typeof===u||r.$$typeof===i||r.$$typeof===l||r.$$typeof===e||void 0!==r.getModuleId)},t.typeOf=d,r.exports=t;var $=r.exports;export{$ as r};
