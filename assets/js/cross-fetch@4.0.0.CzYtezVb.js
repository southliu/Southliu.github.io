import{p as t}from"./@babel_runtime@7.24.4.BmQrySDS.js";var e,r={exports:{}};function o(){return e||(e=1,function(e,r){var o,n="undefined"!=typeof globalThis&&globalThis||"undefined"!=typeof self&&self||void 0!==t&&t,i=function(){function t(){this.fetch=!1,this.DOMException=n.DOMException}return t.prototype=n,new t}();o=i,function(t){var e=void 0!==o&&o||"undefined"!=typeof self&&self||void 0!==e&&e,r="URLSearchParams"in e,n="Symbol"in e&&"iterator"in Symbol,i="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(t){return!1}}(),s="FormData"in e,a="ArrayBuffer"in e;if(a)var h=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],f=ArrayBuffer.isView||function(t){return t&&h.indexOf(Object.prototype.toString.call(t))>-1};function u(t){if("string"!=typeof t&&(t=String(t)),/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t)||""===t)throw new TypeError('Invalid character in header field name: "'+t+'"');return t.toLowerCase()}function c(t){return"string"!=typeof t&&(t=String(t)),t}function d(t){var e={next:function(){var e=t.shift();return{done:void 0===e,value:e}}};return n&&(e[Symbol.iterator]=function(){return e}),e}function p(t){this.map={},t instanceof p?t.forEach((function(t,e){this.append(e,t)}),this):Array.isArray(t)?t.forEach((function(t){this.append(t[0],t[1])}),this):t&&Object.getOwnPropertyNames(t).forEach((function(e){this.append(e,t[e])}),this)}function y(t){if(t.bodyUsed)return Promise.reject(new TypeError("Already read"));t.bodyUsed=!0}function l(t){return new Promise((function(e,r){t.onload=function(){e(t.result)},t.onerror=function(){r(t.error)}}))}function b(t){var e=new FileReader,r=l(e);return e.readAsArrayBuffer(t),r}function m(t){if(t.slice)return t.slice(0);var e=new Uint8Array(t.byteLength);return e.set(new Uint8Array(t)),e.buffer}function w(){return this.bodyUsed=!1,this._initBody=function(t){var e;this.bodyUsed=this.bodyUsed,this._bodyInit=t,t?"string"==typeof t?this._bodyText=t:i&&Blob.prototype.isPrototypeOf(t)?this._bodyBlob=t:s&&FormData.prototype.isPrototypeOf(t)?this._bodyFormData=t:r&&URLSearchParams.prototype.isPrototypeOf(t)?this._bodyText=t.toString():a&&i&&(e=t)&&DataView.prototype.isPrototypeOf(e)?(this._bodyArrayBuffer=m(t.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):a&&(ArrayBuffer.prototype.isPrototypeOf(t)||f(t))?this._bodyArrayBuffer=m(t):this._bodyText=t=Object.prototype.toString.call(t):this._bodyText="",this.headers.get("content-type")||("string"==typeof t?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):r&&URLSearchParams.prototype.isPrototypeOf(t)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},i&&(this.blob=function(){var t=y(this);if(t)return t;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){if(this._bodyArrayBuffer){var t=y(this);return t||(ArrayBuffer.isView(this._bodyArrayBuffer)?Promise.resolve(this._bodyArrayBuffer.buffer.slice(this._bodyArrayBuffer.byteOffset,this._bodyArrayBuffer.byteOffset+this._bodyArrayBuffer.byteLength)):Promise.resolve(this._bodyArrayBuffer))}return this.blob().then(b)}),this.text=function(){var t,e,r,o=y(this);if(o)return o;if(this._bodyBlob)return t=this._bodyBlob,e=new FileReader,r=l(e),e.readAsText(t),r;if(this._bodyArrayBuffer)return Promise.resolve(function(t){for(var e=new Uint8Array(t),r=new Array(e.length),o=0;o<e.length;o++)r[o]=String.fromCharCode(e[o]);return r.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},s&&(this.formData=function(){return this.text().then(T)}),this.json=function(){return this.text().then(JSON.parse)},this}p.prototype.append=function(t,e){t=u(t),e=c(e);var r=this.map[t];this.map[t]=r?r+", "+e:e},p.prototype.delete=function(t){delete this.map[u(t)]},p.prototype.get=function(t){return t=u(t),this.has(t)?this.map[t]:null},p.prototype.has=function(t){return this.map.hasOwnProperty(u(t))},p.prototype.set=function(t,e){this.map[u(t)]=c(e)},p.prototype.forEach=function(t,e){for(var r in this.map)this.map.hasOwnProperty(r)&&t.call(e,this.map[r],r,this)},p.prototype.keys=function(){var t=[];return this.forEach((function(e,r){t.push(r)})),d(t)},p.prototype.values=function(){var t=[];return this.forEach((function(e){t.push(e)})),d(t)},p.prototype.entries=function(){var t=[];return this.forEach((function(e,r){t.push([r,e])})),d(t)},n&&(p.prototype[Symbol.iterator]=p.prototype.entries);var v=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function E(t,e){if(!(this instanceof E))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');var r,o,n=(e=e||{}).body;if(t instanceof E){if(t.bodyUsed)throw new TypeError("Already read");this.url=t.url,this.credentials=t.credentials,e.headers||(this.headers=new p(t.headers)),this.method=t.method,this.mode=t.mode,this.signal=t.signal,n||null==t._bodyInit||(n=t._bodyInit,t.bodyUsed=!0)}else this.url=String(t);if(this.credentials=e.credentials||this.credentials||"same-origin",!e.headers&&this.headers||(this.headers=new p(e.headers)),this.method=(r=e.method||this.method||"GET",o=r.toUpperCase(),v.indexOf(o)>-1?o:r),this.mode=e.mode||this.mode||null,this.signal=e.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&n)throw new TypeError("Body not allowed for GET or HEAD requests");if(this._initBody(n),!("GET"!==this.method&&"HEAD"!==this.method||"no-store"!==e.cache&&"no-cache"!==e.cache)){var i=/([?&])_=[^&]*/;i.test(this.url)?this.url=this.url.replace(i,"$1_="+(new Date).getTime()):this.url+=(/\?/.test(this.url)?"&":"?")+"_="+(new Date).getTime()}}function T(t){var e=new FormData;return t.trim().split("&").forEach((function(t){if(t){var r=t.split("="),o=r.shift().replace(/\+/g," "),n=r.join("=").replace(/\+/g," ");e.append(decodeURIComponent(o),decodeURIComponent(n))}})),e}function A(t,e){if(!(this instanceof A))throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');e||(e={}),this.type="default",this.status=void 0===e.status?200:e.status,this.ok=this.status>=200&&this.status<300,this.statusText=void 0===e.statusText?"":""+e.statusText,this.headers=new p(e.headers),this.url=e.url||"",this._initBody(t)}E.prototype.clone=function(){return new E(this,{body:this._bodyInit})},w.call(E.prototype),w.call(A.prototype),A.prototype.clone=function(){return new A(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new p(this.headers),url:this.url})},A.error=function(){var t=new A(null,{status:0,statusText:""});return t.type="error",t};var _=[301,302,303,307,308];A.redirect=function(t,e){if(-1===_.indexOf(e))throw new RangeError("Invalid status code");return new A(null,{status:e,headers:{location:t}})},t.DOMException=e.DOMException;try{new t.DOMException}catch(x){t.DOMException=function(t,e){this.message=t,this.name=e;var r=Error(t);this.stack=r.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function g(r,o){return new Promise((function(n,s){var h=new E(r,o);if(h.signal&&h.signal.aborted)return s(new t.DOMException("Aborted","AbortError"));var f=new XMLHttpRequest;function u(){f.abort()}f.onload=function(){var t,e,r={status:f.status,statusText:f.statusText,headers:(t=f.getAllResponseHeaders()||"",e=new p,t.replace(/\r?\n[\t ]+/g," ").split("\r").map((function(t){return 0===t.indexOf("\n")?t.substr(1,t.length):t})).forEach((function(t){var r=t.split(":"),o=r.shift().trim();if(o){var n=r.join(":").trim();e.append(o,n)}})),e)};r.url="responseURL"in f?f.responseURL:r.headers.get("X-Request-URL");var o="response"in f?f.response:f.responseText;setTimeout((function(){n(new A(o,r))}),0)},f.onerror=function(){setTimeout((function(){s(new TypeError("Network request failed"))}),0)},f.ontimeout=function(){setTimeout((function(){s(new TypeError("Network request failed"))}),0)},f.onabort=function(){setTimeout((function(){s(new t.DOMException("Aborted","AbortError"))}),0)},f.open(h.method,function(t){try{return""===t&&e.location.href?e.location.href:t}catch(r){return t}}(h.url),!0),"include"===h.credentials?f.withCredentials=!0:"omit"===h.credentials&&(f.withCredentials=!1),"responseType"in f&&(i?f.responseType="blob":a&&h.headers.get("Content-Type")&&-1!==h.headers.get("Content-Type").indexOf("application/octet-stream")&&(f.responseType="arraybuffer")),!o||"object"!=typeof o.headers||o.headers instanceof p?h.headers.forEach((function(t,e){f.setRequestHeader(e,t)})):Object.getOwnPropertyNames(o.headers).forEach((function(t){f.setRequestHeader(t,c(o.headers[t]))})),h.signal&&(h.signal.addEventListener("abort",u),f.onreadystatechange=function(){4===f.readyState&&h.signal.removeEventListener("abort",u)}),f.send(void 0===h._bodyInit?null:h._bodyInit)}))}g.polyfill=!0,e.fetch||(e.fetch=g,e.Headers=p,e.Request=E,e.Response=A),t.Headers=p,t.Request=E,t.Response=A,t.fetch=g}({}),i.fetch.ponyfill=!0,delete i.fetch.polyfill;var s=n.fetch?n:i;(r=s.fetch).default=s.fetch,r.fetch=s.fetch,r.Headers=s.Headers,r.Request=s.Request,r.Response=s.Response,e.exports=r}(r,r.exports)),r.exports}export{o as r};
