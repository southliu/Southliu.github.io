function r(r,t){var o="function"==typeof Symbol&&r[Symbol.iterator];if(!o)return r;var n,e,c=o.call(r),a=[];try{for(;(void 0===t||t-- >0)&&!(n=c.next()).done;)a.push(n.value)}catch(l){e={error:l}}finally{try{n&&!n.done&&(o=c.return)&&o.call(c)}finally{if(e)throw e.error}}return a}function t(r,t,o){if(o||2===arguments.length)for(var n,e=0,c=t.length;e<c;e++)!n&&e in t||(n||(n=Array.prototype.slice.call(t,0,e)),n[e]=t[e]);return r.concat(n||Array.prototype.slice.call(t))}"function"==typeof SuppressedError&&SuppressedError;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var o=function(r,t){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(r,t){r.__proto__=t}||function(r,t){for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o])})(r,t)};function n(r,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=r}o(r,t),r.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}export{t as _,r as a,n as b};
