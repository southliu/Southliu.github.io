import{k as sr}from"./@babel_runtime.8927ffbd.js";var oe={},or={get exports(){return oe},set exports(r){oe=r}},L={},ur={get exports(){return L},set exports(r){L=r}},He=function(e,t){return function(){for(var n=new Array(arguments.length),a=0;a<n.length;a++)n[a]=arguments[a];return e.apply(t,n)}},fr=He,fe=Object.prototype.toString,le=function(r){return function(e){var t=fe.call(e);return r[t]||(r[t]=t.slice(8,-1).toLowerCase())}}(Object.create(null));function A(r){return r=r.toLowerCase(),function(t){return le(t)===r}}function ce(r){return Array.isArray(r)}function F(r){return typeof r>"u"}function lr(r){return r!==null&&!F(r)&&r.constructor!==null&&!F(r.constructor)&&typeof r.constructor.isBuffer=="function"&&r.constructor.isBuffer(r)}var Je=A("ArrayBuffer");function cr(r){var e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(r):e=r&&r.buffer&&Je(r.buffer),e}function dr(r){return typeof r=="string"}function hr(r){return typeof r=="number"}function Ve(r){return r!==null&&typeof r=="object"}function g(r){if(le(r)!=="object")return!1;var e=Object.getPrototypeOf(r);return e===null||e===Object.prototype}var pr=A("Date"),vr=A("File"),mr=A("Blob"),Er=A("FileList");function de(r){return fe.call(r)==="[object Function]"}function Rr(r){return Ve(r)&&de(r.pipe)}function yr(r){var e="[object FormData]";return r&&(typeof FormData=="function"&&r instanceof FormData||fe.call(r)===e||de(r.toString)&&r.toString()===e)}var wr=A("URLSearchParams");function br(r){return r.trim?r.trim():r.replace(/^\s+|\s+$/g,"")}function Or(){return typeof navigator<"u"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window<"u"&&typeof document<"u"}function he(r,e){if(!(r===null||typeof r>"u"))if(typeof r!="object"&&(r=[r]),ce(r))for(var t=0,i=r.length;t<i;t++)e.call(null,r[t],t,r);else for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&e.call(null,r[n],n,r)}function ue(){var r={};function e(n,a){g(r[a])&&g(n)?r[a]=ue(r[a],n):g(n)?r[a]=ue({},n):ce(n)?r[a]=n.slice():r[a]=n}for(var t=0,i=arguments.length;t<i;t++)he(arguments[t],e);return r}function Ar(r,e,t){return he(e,function(n,a){t&&typeof n=="function"?r[a]=fr(n,t):r[a]=n}),r}function Sr(r){return r.charCodeAt(0)===65279&&(r=r.slice(1)),r}function xr(r,e,t,i){r.prototype=Object.create(e.prototype,i),r.prototype.constructor=r,t&&Object.assign(r.prototype,t)}function Cr(r,e,t){var i,n,a,s={};e=e||{};do{for(i=Object.getOwnPropertyNames(r),n=i.length;n-- >0;)a=i[n],s[a]||(e[a]=r[a],s[a]=!0);r=Object.getPrototypeOf(r)}while(r&&(!t||t(r,e))&&r!==Object.prototype);return e}function Tr(r,e,t){r=String(r),(t===void 0||t>r.length)&&(t=r.length),t-=e.length;var i=r.indexOf(e,t);return i!==-1&&i===t}function Pr(r){if(!r)return null;var e=r.length;if(F(e))return null;for(var t=new Array(e);e-- >0;)t[e]=r[e];return t}var Nr=function(r){return function(e){return r&&e instanceof r}}(typeof Uint8Array<"u"&&Object.getPrototypeOf(Uint8Array)),v={isArray:ce,isArrayBuffer:Je,isBuffer:lr,isFormData:yr,isArrayBufferView:cr,isString:dr,isNumber:hr,isObject:Ve,isPlainObject:g,isUndefined:F,isDate:pr,isFile:vr,isBlob:mr,isFunction:de,isStream:Rr,isURLSearchParams:wr,isStandardBrowserEnv:Or,forEach:he,merge:ue,extend:Ar,trim:br,stripBOM:Sr,inherits:xr,toFlatObject:Cr,kindOf:le,kindOfTest:A,endsWith:Tr,toArray:Pr,isTypedArray:Nr,isFileList:Er},T=v;function ye(r){return encodeURIComponent(r).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var We=function(e,t,i){if(!t)return e;var n;if(i)n=i(t);else if(T.isURLSearchParams(t))n=t.toString();else{var a=[];T.forEach(t,function(f,d){f===null||typeof f>"u"||(T.isArray(f)?d=d+"[]":f=[f],T.forEach(f,function(h){T.isDate(h)?h=h.toISOString():T.isObject(h)&&(h=JSON.stringify(h)),a.push(ye(d)+"="+ye(h))}))}),n=a.join("&")}if(n){var s=e.indexOf("#");s!==-1&&(e=e.slice(0,s)),e+=(e.indexOf("?")===-1?"?":"&")+n}return e},_r=v;function $(){this.handlers=[]}$.prototype.use=function(e,t,i){return this.handlers.push({fulfilled:e,rejected:t,synchronous:i?i.synchronous:!1,runWhen:i?i.runWhen:null}),this.handlers.length-1};$.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};$.prototype.forEach=function(e){_r.forEach(this.handlers,function(i){i!==null&&e(i)})};var Dr=$,qr=v,Ur=function(e,t){qr.forEach(e,function(n,a){a!==t&&a.toUpperCase()===t.toUpperCase()&&(e[t]=n,delete e[a])})},V,we;function _(){if(we)return V;we=1;var r=v;function e(n,a,s,o,f){Error.call(this),this.message=n,this.name="AxiosError",a&&(this.code=a),s&&(this.config=s),o&&(this.request=o),f&&(this.response=f)}r.inherits(e,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}}});var t=e.prototype,i={};return["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED"].forEach(function(n){i[n]={value:n}}),Object.defineProperties(e,i),Object.defineProperty(t,"isAxiosError",{value:!0}),e.from=function(n,a,s,o,f,d){var c=Object.create(t);return r.toFlatObject(n,c,function(u){return u!==Error.prototype}),e.call(c,n.message,a,s,o,f),c.name=n.name,d&&Object.assign(c,d),c},V=e,V}var ze={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},w=v;function gr(r,e){e=e||new FormData;var t=[];function i(a){return a===null?"":w.isDate(a)?a.toISOString():w.isArrayBuffer(a)||w.isTypedArray(a)?typeof Blob=="function"?new Blob([a]):Buffer.from(a):a}function n(a,s){if(w.isPlainObject(a)||w.isArray(a)){if(t.indexOf(a)!==-1)throw Error("Circular reference detected in "+s);t.push(a),w.forEach(a,function(f,d){if(!w.isUndefined(f)){var c=s?s+"."+d:d,h;if(f&&!s&&typeof f=="object"){if(w.endsWith(d,"{}"))f=JSON.stringify(f);else if(w.endsWith(d,"[]")&&(h=w.toArray(f))){h.forEach(function(u){!w.isUndefined(u)&&e.append(c,i(u))});return}}n(f,c)}}),t.pop()}else e.append(s,i(a))}return n(r),e}var Xe=gr,W,be;function Br(){if(be)return W;be=1;var r=_();return W=function(t,i,n){var a=n.config.validateStatus;!n.status||!a||a(n.status)?t(n):i(new r("Request failed with status code "+n.status,[r.ERR_BAD_REQUEST,r.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))},W}var z,Oe;function Lr(){if(Oe)return z;Oe=1;var r=v;return z=r.isStandardBrowserEnv()?function(){return{write:function(i,n,a,s,o,f){var d=[];d.push(i+"="+encodeURIComponent(n)),r.isNumber(a)&&d.push("expires="+new Date(a).toGMTString()),r.isString(s)&&d.push("path="+s),r.isString(o)&&d.push("domain="+o),f===!0&&d.push("secure"),document.cookie=d.join("; ")},read:function(i){var n=document.cookie.match(new RegExp("(^|;\\s*)("+i+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(i){this.write(i,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),z}var Fr=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},$r=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e},jr=Fr,Ir=$r,Ke=function(e,t){return e&&!jr(t)?Ir(e,t):t},X,Ae;function kr(){if(Ae)return X;Ae=1;var r=v,e=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];return X=function(i){var n={},a,s,o;return i&&r.forEach(i.split(`
`),function(d){if(o=d.indexOf(":"),a=r.trim(d.substr(0,o)).toLowerCase(),s=r.trim(d.substr(o+1)),a){if(n[a]&&e.indexOf(a)>=0)return;a==="set-cookie"?n[a]=(n[a]?n[a]:[]).concat([s]):n[a]=n[a]?n[a]+", "+s:s}}),n},X}var K,Se;function Mr(){if(Se)return K;Se=1;var r=v;return K=r.isStandardBrowserEnv()?function(){var t=/(msie|trident)/i.test(navigator.userAgent),i=document.createElement("a"),n;function a(s){var o=s;return t&&(i.setAttribute("href",o),o=i.href),i.setAttribute("href",o),{href:i.href,protocol:i.protocol?i.protocol.replace(/:$/,""):"",host:i.host,search:i.search?i.search.replace(/^\?/,""):"",hash:i.hash?i.hash.replace(/^#/,""):"",hostname:i.hostname,port:i.port,pathname:i.pathname.charAt(0)==="/"?i.pathname:"/"+i.pathname}}return n=a(window.location.href),function(o){var f=r.isString(o)?a(o):o;return f.protocol===n.protocol&&f.host===n.host}}():function(){return function(){return!0}}(),K}var Q,xe;function j(){if(xe)return Q;xe=1;var r=_(),e=v;function t(i){r.call(this,i??"canceled",r.ERR_CANCELED),this.name="CanceledError"}return e.inherits(t,r,{__CANCEL__:!0}),Q=t,Q}var Y,Ce;function Hr(){return Ce||(Ce=1,Y=function(e){var t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}),Y}var G,Te;function Pe(){if(Te)return G;Te=1;var r=v,e=Br(),t=Lr(),i=We,n=Ke,a=kr(),s=Mr(),o=ze,f=_(),d=j(),c=Hr();return G=function(u){return new Promise(function(tr,S){var D=u.data,q=u.headers,U=u.responseType,x;function me(){u.cancelToken&&u.cancelToken.unsubscribe(x),u.signal&&u.signal.removeEventListener("abort",x)}r.isFormData(D)&&r.isStandardBrowserEnv()&&delete q["Content-Type"];var l=new XMLHttpRequest;if(u.auth){var nr=u.auth.username||"",ir=u.auth.password?unescape(encodeURIComponent(u.auth.password)):"";q.Authorization="Basic "+btoa(nr+":"+ir)}var M=n(u.baseURL,u.url);l.open(u.method.toUpperCase(),i(M,u.params,u.paramsSerializer),!0),l.timeout=u.timeout;function Ee(){if(l){var y="getAllResponseHeaders"in l?a(l.getAllResponseHeaders()):null,C=!U||U==="text"||U==="json"?l.responseText:l.response,O={data:C,status:l.status,statusText:l.statusText,headers:y,config:u,request:l};e(function(J){tr(J),me()},function(J){S(J),me()},O),l=null}}if("onloadend"in l?l.onloadend=Ee:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(Ee)},l.onabort=function(){l&&(S(new f("Request aborted",f.ECONNABORTED,u,l)),l=null)},l.onerror=function(){S(new f("Network Error",f.ERR_NETWORK,u,l,l)),l=null},l.ontimeout=function(){var C=u.timeout?"timeout of "+u.timeout+"ms exceeded":"timeout exceeded",O=u.transitional||o;u.timeoutErrorMessage&&(C=u.timeoutErrorMessage),S(new f(C,O.clarifyTimeoutError?f.ETIMEDOUT:f.ECONNABORTED,u,l)),l=null},r.isStandardBrowserEnv()){var Re=(u.withCredentials||s(M))&&u.xsrfCookieName?t.read(u.xsrfCookieName):void 0;Re&&(q[u.xsrfHeaderName]=Re)}"setRequestHeader"in l&&r.forEach(q,function(C,O){typeof D>"u"&&O.toLowerCase()==="content-type"?delete q[O]:l.setRequestHeader(O,C)}),r.isUndefined(u.withCredentials)||(l.withCredentials=!!u.withCredentials),U&&U!=="json"&&(l.responseType=u.responseType),typeof u.onDownloadProgress=="function"&&l.addEventListener("progress",u.onDownloadProgress),typeof u.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",u.onUploadProgress),(u.cancelToken||u.signal)&&(x=function(y){l&&(S(!y||y&&y.type?new d:y),l.abort(),l=null)},u.cancelToken&&u.cancelToken.subscribe(x),u.signal&&(u.signal.aborted?x():u.signal.addEventListener("abort",x))),D||(D=null);var H=c(M);if(H&&["http","https","file"].indexOf(H)===-1){S(new f("Unsupported protocol "+H+":",f.ERR_BAD_REQUEST,u));return}l.send(D)})},G}var Z,Ne;function Jr(){return Ne||(Ne=1,Z=null),Z}var p=v,_e=Ur,De=_(),Vr=ze,Wr=Xe,zr={"Content-Type":"application/x-www-form-urlencoded"};function qe(r,e){!p.isUndefined(r)&&p.isUndefined(r["Content-Type"])&&(r["Content-Type"]=e)}function Xr(){var r;return(typeof XMLHttpRequest<"u"||typeof process<"u"&&Object.prototype.toString.call(process)==="[object process]")&&(r=Pe()),r}function Kr(r,e,t){if(p.isString(r))try{return(e||JSON.parse)(r),p.trim(r)}catch(i){if(i.name!=="SyntaxError")throw i}return(t||JSON.stringify)(r)}var I={transitional:Vr,adapter:Xr(),transformRequest:[function(e,t){if(_e(t,"Accept"),_e(t,"Content-Type"),p.isFormData(e)||p.isArrayBuffer(e)||p.isBuffer(e)||p.isStream(e)||p.isFile(e)||p.isBlob(e))return e;if(p.isArrayBufferView(e))return e.buffer;if(p.isURLSearchParams(e))return qe(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString();var i=p.isObject(e),n=t&&t["Content-Type"],a;if((a=p.isFileList(e))||i&&n==="multipart/form-data"){var s=this.env&&this.env.FormData;return Wr(a?{"files[]":e}:e,s&&new s)}else if(i||n==="application/json")return qe(t,"application/json"),Kr(e);return e}],transformResponse:[function(e){var t=this.transitional||I.transitional,i=t&&t.silentJSONParsing,n=t&&t.forcedJSONParsing,a=!i&&this.responseType==="json";if(a||n&&p.isString(e)&&e.length)try{return JSON.parse(e)}catch(s){if(a)throw s.name==="SyntaxError"?De.from(s,De.ERR_BAD_RESPONSE,this,null,this.response):s}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:Jr()},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};p.forEach(["delete","get","head"],function(e){I.headers[e]={}});p.forEach(["post","put","patch"],function(e){I.headers[e]=p.merge(zr)});var pe=I,Qr=v,Yr=pe,Gr=function(e,t,i){var n=this||Yr;return Qr.forEach(i,function(s){e=s.call(n,e,t)}),e},ee,Ue;function Qe(){return Ue||(Ue=1,ee=function(e){return!!(e&&e.__CANCEL__)}),ee}var ge=v,re=Gr,Zr=Qe(),et=pe,rt=j();function te(r){if(r.cancelToken&&r.cancelToken.throwIfRequested(),r.signal&&r.signal.aborted)throw new rt}var tt=function(e){te(e),e.headers=e.headers||{},e.data=re.call(e,e.data,e.headers,e.transformRequest),e.headers=ge.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),ge.forEach(["delete","get","head","post","put","patch","common"],function(n){delete e.headers[n]});var t=e.adapter||et.adapter;return t(e).then(function(n){return te(e),n.data=re.call(e,n.data,n.headers,e.transformResponse),n},function(n){return Zr(n)||(te(e),n&&n.response&&(n.response.data=re.call(e,n.response.data,n.response.headers,e.transformResponse))),Promise.reject(n)})},E=v,Ye=function(e,t){t=t||{};var i={};function n(c,h){return E.isPlainObject(c)&&E.isPlainObject(h)?E.merge(c,h):E.isPlainObject(h)?E.merge({},h):E.isArray(h)?h.slice():h}function a(c){if(E.isUndefined(t[c])){if(!E.isUndefined(e[c]))return n(void 0,e[c])}else return n(e[c],t[c])}function s(c){if(!E.isUndefined(t[c]))return n(void 0,t[c])}function o(c){if(E.isUndefined(t[c])){if(!E.isUndefined(e[c]))return n(void 0,e[c])}else return n(void 0,t[c])}function f(c){if(c in t)return n(e[c],t[c]);if(c in e)return n(void 0,e[c])}var d={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:f};return E.forEach(Object.keys(e).concat(Object.keys(t)),function(h){var u=d[h]||a,R=u(h);E.isUndefined(R)&&u!==f||(i[h]=R)}),i},ne,Be;function Ge(){return Be||(Be=1,ne={version:"0.27.2"}),ne}var nt=Ge().version,b=_(),ve={};["object","boolean","number","function","string","symbol"].forEach(function(r,e){ve[r]=function(i){return typeof i===r||"a"+(e<1?"n ":" ")+r}});var Le={};ve.transitional=function(e,t,i){function n(a,s){return"[Axios v"+nt+"] Transitional option '"+a+"'"+s+(i?". "+i:"")}return function(a,s,o){if(e===!1)throw new b(n(s," has been removed"+(t?" in "+t:"")),b.ERR_DEPRECATED);return t&&!Le[s]&&(Le[s]=!0,console.warn(n(s," has been deprecated since v"+t+" and will be removed in the near future"))),e?e(a,s,o):!0}};function it(r,e,t){if(typeof r!="object")throw new b("options must be an object",b.ERR_BAD_OPTION_VALUE);for(var i=Object.keys(r),n=i.length;n-- >0;){var a=i[n],s=e[a];if(s){var o=r[a],f=o===void 0||s(o,a,r);if(f!==!0)throw new b("option "+a+" must be "+f,b.ERR_BAD_OPTION_VALUE);continue}if(t!==!0)throw new b("Unknown option "+a,b.ERR_BAD_OPTION)}}var at={assertOptions:it,validators:ve},Ze=v,st=We,Fe=Dr,$e=tt,k=Ye,ot=Ke,er=at,P=er.validators;function N(r){this.defaults=r,this.interceptors={request:new Fe,response:new Fe}}N.prototype.request=function(e,t){typeof e=="string"?(t=t||{},t.url=e):t=e||{},t=k(this.defaults,t),t.method?t.method=t.method.toLowerCase():this.defaults.method?t.method=this.defaults.method.toLowerCase():t.method="get";var i=t.transitional;i!==void 0&&er.assertOptions(i,{silentJSONParsing:P.transitional(P.boolean),forcedJSONParsing:P.transitional(P.boolean),clarifyTimeoutError:P.transitional(P.boolean)},!1);var n=[],a=!0;this.interceptors.request.forEach(function(R){typeof R.runWhen=="function"&&R.runWhen(t)===!1||(a=a&&R.synchronous,n.unshift(R.fulfilled,R.rejected))});var s=[];this.interceptors.response.forEach(function(R){s.push(R.fulfilled,R.rejected)});var o;if(!a){var f=[$e,void 0];for(Array.prototype.unshift.apply(f,n),f=f.concat(s),o=Promise.resolve(t);f.length;)o=o.then(f.shift(),f.shift());return o}for(var d=t;n.length;){var c=n.shift(),h=n.shift();try{d=c(d)}catch(u){h(u);break}}try{o=$e(d)}catch(u){return Promise.reject(u)}for(;s.length;)o=o.then(s.shift(),s.shift());return o};N.prototype.getUri=function(e){e=k(this.defaults,e);var t=ot(e.baseURL,e.url);return st(t,e.params,e.paramsSerializer)};Ze.forEach(["delete","get","head","options"],function(e){N.prototype[e]=function(t,i){return this.request(k(i||{},{method:e,url:t,data:(i||{}).data}))}});Ze.forEach(["post","put","patch"],function(e){function t(i){return function(a,s,o){return this.request(k(o||{},{method:e,headers:i?{"Content-Type":"multipart/form-data"}:{},url:a,data:s}))}}N.prototype[e]=t(),N.prototype[e+"Form"]=t(!0)});var ut=N,ie,je;function ft(){if(je)return ie;je=1;var r=j();function e(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var i;this.promise=new Promise(function(s){i=s});var n=this;this.promise.then(function(a){if(n._listeners){var s,o=n._listeners.length;for(s=0;s<o;s++)n._listeners[s](a);n._listeners=null}}),this.promise.then=function(a){var s,o=new Promise(function(f){n.subscribe(f),s=f}).then(a);return o.cancel=function(){n.unsubscribe(s)},o},t(function(s){n.reason||(n.reason=new r(s),i(n.reason))})}return e.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},e.prototype.subscribe=function(i){if(this.reason){i(this.reason);return}this._listeners?this._listeners.push(i):this._listeners=[i]},e.prototype.unsubscribe=function(i){if(this._listeners){var n=this._listeners.indexOf(i);n!==-1&&this._listeners.splice(n,1)}},e.source=function(){var i,n=new e(function(s){i=s});return{token:n,cancel:i}},ie=e,ie}var ae,Ie;function lt(){return Ie||(Ie=1,ae=function(e){return function(i){return e.apply(null,i)}}),ae}var se,ke;function ct(){if(ke)return se;ke=1;var r=v;return se=function(t){return r.isObject(t)&&t.isAxiosError===!0},se}var Me=v,dt=He,B=ut,ht=Ye,pt=pe;function rr(r){var e=new B(r),t=dt(B.prototype.request,e);return Me.extend(t,B.prototype,e),Me.extend(t,e),t.create=function(n){return rr(ht(r,n))},t}var m=rr(pt);m.Axios=B;m.CanceledError=j();m.CancelToken=ft();m.isCancel=Qe();m.VERSION=Ge().version;m.toFormData=Xe;m.AxiosError=_();m.Cancel=m.CanceledError;m.all=function(e){return Promise.all(e)};m.spread=lt();m.isAxiosError=ct();ur.exports=m;L.default=m;(function(r){r.exports=L})(or);const mt=sr(oe);export{mt as a};
