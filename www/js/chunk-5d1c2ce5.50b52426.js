(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5d1c2ce5"],{"0790":function(t,n,e){"use strict";e.d(n,"b",function(){return o}),e.d(n,"a",function(){return i}),e.d(n,"c",function(){return u});
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0
THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.
See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var r=function(t,n){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)n.hasOwnProperty(e)&&(t[e]=n[e])},r(t,n)};function o(t,n){function e(){this.constructor=t}r(t,n),t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)}function i(t,n,e,r){return new(e||(e=Promise))(function(o,i){function u(t){try{c(r.next(t))}catch(n){i(n)}}function a(t){try{c(r["throw"](t))}catch(n){i(n)}}function c(t){t.done?o(t.value):new e(function(n){n(t.value)}).then(u,a)}c((r=r.apply(t,n||[])).next())})}function u(t,n){var e,r,o,i,u={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(t){return function(n){return c([t,n])}}function c(i){if(e)throw new TypeError("Generator is already executing.");while(u)try{if(e=1,r&&(o=2&i[0]?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return u.label++,{value:i[1],done:!1};case 5:u.label++,r=i[1],i=[0];continue;case 7:i=u.ops.pop(),u.trys.pop();continue;default:if(o=u.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){u=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){u.label=i[1];break}if(6===i[0]&&u.label<o[1]){u.label=o[1],o=i;break}if(o&&u.label<o[2]){u.label=o[2],u.ops.push(i);break}o[2]&&u.ops.pop(),u.trys.pop();continue}i=n.call(t,u)}catch(a){i=[6,a],r=0}finally{e=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}},"1c79":function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i}),e.d(n,"c",function(){return c}),e.d(n,"d",function(){return s}),e.d(n,"e",function(){return a}),e.d(n,"f",function(){return u}),e.d(n,"g",function(){return p}),e.d(n,"h",function(){return h}),e.d(n,"i",function(){return v}),e.d(n,"j",function(){return l}),e.d(n,"k",function(){return d});var r=e("0790");function o(t,n,e,o,i){return r["a"](this,void 0,void 0,function(){var u;return r["c"](this,function(r){switch(r.label){case 0:if(t)return[2,t.attachViewToDom(n,e,i,o)];if("string"!==typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");return u="string"===typeof e?n.ownerDocument.createElement(e):e,o&&o.forEach(function(t){return u.classList.add(t)}),i&&Object.assign(u,i),n.appendChild(u),u.componentOnReady?[4,u.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,u]}})})}function i(t,n){if(n){if(t){var e=n.parentElement;return t.removeViewFromDom(e,n)}n.remove()}return Promise.resolve()}function u(){var t=window.TapticEngine;t&&t.selection()}function a(){var t=window.TapticEngine;t&&t.gestureSelectionStart()}function c(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()}function s(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}function l(t,n){return null!==n.closest(t)}function h(t){var n;return"string"===typeof t&&t.length>0?(n={"ion-color":!0},n["ion-color-"+t]=!0,n):void 0}function d(t,n){var e;return e={},e[n]=!0,e[n+"-"+t]=!!t,e}function f(t){if(void 0!==t){var n=Array.isArray(t)?t:t.split(" ");return n.filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t})}return[]}function p(t){var n={};return f(t).forEach(function(t){return n[t]=!0}),n}function v(t,n,e,o){return r["a"](this,void 0,void 0,function(){var i;return r["c"](this,function(r){switch(r.label){case 0:return null==n||"#"===n[0]||-1!==n.indexOf("://")?[3,2]:(i=t.document.querySelector("ion-router"),i?(null!=e&&e.preventDefault(),[4,i.componentOnReady()]):[3,2]);case 1:return r.sent(),[2,i.push(n,o)];case 2:return[2,!1]}})})}},"4c94":function(t,n,e){"use strict";e.d(n,"a",function(){return o}),e.d(n,"b",function(){return i}),e.d(n,"c",function(){return l}),e.d(n,"d",function(){return u}),e.d(n,"e",function(){return f}),e.d(n,"f",function(){return a}),e.d(n,"g",function(){return p}),e.d(n,"h",function(){return d}),e.d(n,"i",function(){return s}),e.d(n,"j",function(){return c}),e.d(n,"k",function(){return v}),e.d(n,"l",function(){return h}),e.d(n,"m",function(){return b});var r={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)"};function o(t,n){if(void 0===n||""===n)return!0;var e=r[n];return t.matchMedia(e).matches}function i(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function u(t){return!!t.shadowRoot&&!!t.attachShadow}function a(t,n,e,r){if(u(t)){var o=t.querySelector("input.aux-input");o||(o=t.ownerDocument.createElement("input"),o.type="hidden",o.classList.add("aux-input"),t.appendChild(o)),o.disabled=r,o.name=n,o.value=e}}function c(t,n,e){return Math.max(t,Math.min(n,e))}function s(t,n){if(!t){var e="ASSERT: "+n;throw console.error(e),new Error(e)}}function l(t){return t.timeStamp||Date.now()}function h(t){if(t){var n=t.changedTouches;if(n&&n.length>0){var e=n[0];return{x:e.clientX,y:e.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function d(t,n){var e="rtl"===t.document.dir;switch(n){case"start":return e;case"end":return!e;default:throw new Error('"'+n+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function f(t){return p(t,0)}function p(t,n){var e=t._original||t;return{_original:t,emit:v(e.emit.bind(e),n)}}function v(t,n){var e;return void 0===n&&(n=0),function(){for(var r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];clearTimeout(e),e=setTimeout.apply(void 0,[t,n].concat(r))}}var m={ipad:R,iphone:C,ios:E,android:P,phablet:O,tablet:S,cordova:D,capacitor:L,electron:N,pwa:I,mobile:k,desktop:x,hybrid:j};function g(t){return w(t)}function b(t,n){return g(t).includes(n)}function w(t){t.Ionic=t.Ionic||{};var n=t.Ionic.platforms;if(null==n){n=t.Ionic.platforms=y(t);var e=t.document.documentElement.classList;n.forEach(function(t){return e.add("plt-"+t)})}return n}function y(t){return Object.keys(m).filter(function(n){return m[n](t)})}function R(t){return T(t,/iPad/i)}function C(t){return T(t,/iPhone/i)}function E(t){return T(t,/iPad|iPhone|iPod/i)}function P(t){return T(t,/android|sink/i)}function O(t){var n=t.innerWidth,e=t.innerHeight,r=Math.min(n,e),o=Math.max(n,e);return r>390&&r<520&&o>620&&o<800}function S(t){var n=t.innerWidth,e=t.innerHeight,r=Math.min(n,e),o=Math.max(n,e);return r>460&&r<820&&o>780&&o<1400}function k(t){return W(t,"(any-pointer:coarse)")}function x(t){return!k(t)}function j(t){return D(t)||L(t)}function D(t){var n=t;return!!(n["cordova"]||n["phonegap"]||n["PhoneGap"])}function L(t){var n=t,e=n["Capacitor"];return!(!e||!e.isNative)}function N(t){return T(t,/electron/)}function I(t){return t.matchMedia("(display-mode: standalone)").matches}function T(t,n){return n.test(t.navigator.userAgent)}function W(t,n){return t.matchMedia(n).matches}},7076:function(t,n,e){"use strict";e.d(n,"a",function(){return y}),e.d(n,"b",function(){return b}),e.d(n,"c",function(){return R}),e.d(n,"d",function(){return u});var r=e("0790"),o=function(){return e.e("chunk-2d221861").then(e.bind(null,"cb5a"))},i=function(){return e.e("chunk-2d0ce7f3").then(e.bind(null,"6069"))};function u(t){return new Promise(function(n,e){t.queue.write(function(){a(t),c(t).then(function(e){e.animation&&e.animation.destroy(),s(t),n(e)},function(n){s(t),e(n)})})})}function a(t){var n=t.enteringEl,e=t.leavingEl;C(n,e,t.direction),t.showGoBack?n.classList.add("can-go-back"):n.classList.remove("can-go-back"),R(n,!1),e&&R(e,!1)}function c(t){return r["a"](this,void 0,void 0,function(){var n,e;return r["c"](this,function(r){switch(r.label){case 0:return[4,l(t)];case 1:return n=r.sent(),e=n?h(n,t):d(t),[2,e]}})})}function s(t){var n=t.enteringEl,e=t.leavingEl;n.classList.remove("ion-page-invisible"),void 0!==e&&e.classList.remove("ion-page-invisible")}function l(t){return r["a"](this,void 0,void 0,function(){var n,e;return r["c"](this,function(r){switch(r.label){case 0:return t.leavingEl&&t.animated&&0!==t.duration?t.animationBuilder?[2,t.animationBuilder]:"ios"!==t.mode?[3,2]:[4,o()]:[2,void 0];case 1:return e=r.sent().iosTransitionAnimation,[3,4];case 2:return[4,i()];case 3:e=r.sent().mdTransitionAnimation,r.label=4;case 4:return n=e,[2,n]}})})}function h(t,n){return r["a"](this,void 0,void 0,function(){var e;return r["c"](this,function(r){switch(r.label){case 0:return[4,f(n,!0)];case 1:return r.sent(),[4,n.animationCtrl.create(t,n.baseEl,n)];case 2:return e=r.sent(),m(n.window,n.enteringEl,n.leavingEl),[4,v(e,n)];case 3:return r.sent(),e.hasCompleted&&g(n.window,n.enteringEl,n.leavingEl),[2,{hasCompleted:e.hasCompleted,animation:e}]}})})}function d(t){return r["a"](this,void 0,void 0,function(){var n,e;return r["c"](this,function(r){switch(r.label){case 0:return n=t.enteringEl,e=t.leavingEl,[4,f(t,!1)];case 1:return r.sent(),m(t.window,n,e),g(t.window,n,e),[2,{hasCompleted:!0}]}})})}function f(t,n){return r["a"](this,void 0,void 0,function(){var e,o;return r["c"](this,function(r){switch(r.label){case 0:return e=void 0!==t.deepWait?t.deepWait:n,o=e?[y(t.enteringEl),y(t.leavingEl)]:[w(t.enteringEl),w(t.leavingEl)],[4,Promise.all(o)];case 1:return r.sent(),[4,p(t.viewIsReady,t.enteringEl)];case 2:return r.sent(),[2]}})})}function p(t,n){return r["a"](this,void 0,void 0,function(){return r["c"](this,function(e){switch(e.label){case 0:return t?[4,t(n)]:[3,2];case 1:e.sent(),e.label=2;case 2:return[2]}})})}function v(t,n){var e=n.progressCallback,r=new Promise(function(n){return t.onFinish(n)});return e?(t.progressStart(),e(t)):t.play(),r}function m(t,n,e){b(t,e,"ionViewWillLeave"),b(t,n,"ionViewWillEnter")}function g(t,n,e){b(t,n,"ionViewDidEnter"),b(t,e,"ionViewDidLeave")}function b(t,n,e){if(n){var r=t.CustomEvent,o=new r(e,{bubbles:!1,cancelable:!1});n.dispatchEvent(o)}}function w(t){return t&&t.componentOnReady?t.componentOnReady():Promise.resolve()}function y(t){return r["a"](this,void 0,void 0,function(){var n,e;return r["c"](this,function(r){switch(r.label){case 0:return n=t,n?null==n.componentOnReady?[3,2]:[4,n.componentOnReady()]:[3,4];case 1:if(e=r.sent(),null!=e)return[2];r.label=2;case 2:return[4,Promise.all(Array.from(n.children).map(y))];case 3:r.sent(),r.label=4;case 4:return[2]}})})}function R(t,n){n?(t.setAttribute("aria-hidden","true"),t.classList.add("ion-page-hidden")):(t.hidden=!1,t.removeAttribute("aria-hidden"),t.classList.remove("ion-page-hidden"))}function C(t,n,e){void 0!==t&&(t.style.zIndex="back"===e?"99":"101"),void 0!==n&&(n.style.zIndex="100")}},c36c:function(t,n,e){"use strict";e.r(n),e.d(n,"IonRoute",function(){return c}),e.d(n,"IonRouteRedirect",function(){return s}),e.d(n,"IonRouter",function(){return B}),e.d(n,"IonRouterOutlet",function(){return q});var r=e("0790"),o=e("7018"),i=e("4c94"),u=e("1c79"),a=e("7076"),c=function(){function t(){this.url=""}return t.prototype.onUpdate=function(t){this.ionRouteDataChanged.emit(t)},t.prototype.onComponentProps=function(t,n){if(t!==n){var e=t?Object.keys(t):[],r=n?Object.keys(n):[];if(e.length===r.length)for(var o=0,i=e;o<i.length;o++){var u=i[o];if(t[u]!==n[u])return void this.onUpdate(t)}else this.onUpdate(t)}},t.prototype.componentDidLoad=function(){this.ionRouteDataChanged.emit()},t.prototype.componentDidUnload=function(){this.ionRouteDataChanged.emit()},Object.defineProperty(t,"is",{get:function(){return"ion-route"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{component:{type:String,attr:"component",watchCallbacks:["onUpdate"]},componentProps:{type:"Any",attr:"component-props",watchCallbacks:["onComponentProps"]},url:{type:String,attr:"url",watchCallbacks:["onUpdate"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteDataChanged",method:"ionRouteDataChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),t}(),s=function(){function t(){this.from=""}return t.prototype.propDidChange=function(){this.ionRouteRedirectChanged.emit()},t.prototype.componentDidLoad=function(){this.ionRouteRedirectChanged.emit()},t.prototype.componentDidUnload=function(){this.ionRouteRedirectChanged.emit()},Object.defineProperty(t,"is",{get:function(){return"ion-route-redirect"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{from:{type:String,attr:"from",watchCallbacks:["propDidChange"]},to:{type:String,attr:"to",watchCallbacks:["propDidChange"]}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteRedirectChanged",method:"ionRouteRedirectChanged",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),t}();function l(t){var n=t.filter(function(t){return t.length>0}).join("/");return"/"+n}function h(t){for(var n=[],e=0,r=t;e<r.length;e++)for(var o=r[e],i=0,u=o.path;i<u.length;i++){var a=u[i];if(":"===a[0]){var c=o.params&&o.params[a.slice(1)];if(!c)return null;n.push(c)}else""!==a&&n.push(a)}return n}function d(t,n,e,r,o,i){var u=l(v(n).concat(r));e&&(u="#"+u),1===o?t.pushState(i,"",u):t.replaceState(i,"",u)}function f(t,n){if(t.length>n.length)return null;if(t.length<=1&&""===t[0])return n;for(var e=0;e<t.length;e++)if(t[e].length>0&&t[e]!==n[e])return null;return n.length===t.length?[""]:n.slice(t.length)}function p(t,n,e){var r=t.pathname;if(e){var o=t.hash;r="#"===o[0]?o.slice(1):""}var i=v(n),u=v(r);return f(i,u)}function v(t){if(null==t)return[""];var n=t.split("/").map(function(t){return t.trim()}).filter(function(t){return t.length>0});return 0===n.length?[""]:n}function m(t){console.group("[ion-core] ROUTES["+t.length+"]");for(var n=function(t){var n=[];t.forEach(function(t){return n.push.apply(n,t.path)});var e=t.map(function(t){return t.id});console.debug("%c "+l(n),"font-weight: bold; padding-left: 20px","=>\t","("+e.join(", ")+")")},e=0,r=t;e<r.length;e++){var o=r[e];n(o)}console.groupEnd()}function g(t){console.group("[ion-core] REDIRECTS["+t.length+"]");for(var n=0,e=t;n<e.length;n++){var r=e[n];r.to&&console.debug("FROM: ","$c "+l(r.from),"font-weight: bold"," TO: ","$c "+l(r.to),"font-weight: bold")}console.groupEnd()}function b(t,n,e,o,i){return void 0===i&&(i=!1),r["a"](this,void 0,void 0,function(){var u,a,c,s;return r["c"](this,function(r){switch(r.label){case 0:return r.trys.push([0,6,,7]),u=C(t),o>=n.length||!u?[2,i]:[4,u.componentOnReady()];case 1:return r.sent(),a=n[o],[4,u.setRouteId(a.id,a.params,e)];case 2:return c=r.sent(),c.changed&&(e=0,i=!0),[4,b(c.element,n,e,o+1,i)];case 3:return i=r.sent(),c.markVisible?[4,c.markVisible()]:[3,5];case 4:r.sent(),r.label=5;case 5:return[2,i];case 6:return s=r.sent(),console.error(s),[2,!1];case 7:return[2]}})})}function w(t){return r["a"](this,void 0,void 0,function(){var n,e,o,i;return r["c"](this,function(r){switch(r.label){case 0:n=[],o=t,r.label=1;case 1:return e=C(o),e?[4,e.getRouteId()]:[3,3];case 2:return i=r.sent(),i?(o=i.element,i.element=void 0,n.push(i),[3,4]):[3,5];case 3:return[3,5];case 4:return[3,1];case 5:return[2,{ids:n,outlet:e}]}})})}function y(t){return C(t.document.body)?Promise.resolve():new Promise(function(n){t.addEventListener("ionNavWillLoad",n,{once:!0})})}var R=":not([no-router]) ion-nav, :not([no-router]) ion-tabs, :not([no-router]) ion-router-outlet";function C(t){if(t){if(t.matches(R))return t;var n=t.querySelector(R);return n||void 0}}function E(t,n){var e=n.from,r=n.to;if(void 0===r)return!1;if(e.length>t.length)return!1;for(var o=0;o<e.length;o++){var i=e[o];if("*"===i)return!0;if(i!==t[o])return!1}return e.length===t.length}function P(t,n){return n.find(function(n){return E(t,n)})}function O(t,n){for(var e=Math.min(t.length,n.length),r=0;r<e;r++)if(t[r].toLowerCase()!==n[r].id)break;return r}function S(t,n){for(var e,r=new L(t),o=!1,i=0;i<n.length;i++){var u=n[i].path;if(""===u[0])o=!0;else{for(var a=0,c=u;a<c.length;a++){var s=c[a],l=r.next();if(":"===s[0]){if(""===l)return null;e=e||[];var h=e[i]||(e[i]={});h[s.slice(1)]=l}else if(l!==s)return null}o=!1}}var d=!o||o===(""===r.next());return d?e?n.map(function(t,n){return{id:t.id,path:t.path,params:k(t.params,e[n])}}):n:null}function k(t,n){return!t&&n?n:t&&!n?t:t&&n?Object.assign({},t,n):void 0}function x(t,n){for(var e=null,r=0,o=t.map(function(t){return t.id}),i=0,u=n;i<u.length;i++){var a=u[i],c=O(o,a);c>r&&(e=a,r=c)}return e?e.map(function(n,e){return{id:n.id,path:n.path,params:k(n.params,t[e]&&t[e].params)}}):null}function j(t,n){for(var e=null,r=0,o=0,i=n;o<i.length;o++){var u=i[o],a=S(t,u);if(null!==a){var c=D(a);c>r&&(r=c,e=a)}}return e}function D(t){for(var n=1,e=1,r=0,o=t;r<o.length;r++)for(var i=o[r],u=0,a=i.path;u<a.length;u++){var c=a[u];":"===c[0]?n+=Math.pow(1,e):""!==c&&(n+=Math.pow(2,e)),e++}return n}var L=function(){function t(t){this.path=t.slice()}return t.prototype.next=function(){return this.path.length>0?this.path.shift():""},t}();function N(t){return Array.from(t.children).filter(function(t){return"ION-ROUTE-REDIRECT"===t.tagName}).map(function(t){var n=W(t,"to");return{from:v(W(t,"from")),to:null==n?void 0:v(n)}})}function I(t){return U(T(t))}function T(t,n){return void 0===n&&(n=t),Array.from(n.children).filter(function(t){return"ION-ROUTE"===t.tagName&&t.component}).map(function(n){var e=W(n,"component");if(null==e)throw new Error("component missing in ion-route");return{path:v(W(n,"url")),id:e.toLowerCase(),params:n.componentProps,children:T(t,n)}})}function W(t,n){return n in t?t[n]:t.hasAttribute(n)?t.getAttribute(n):null}function U(t){for(var n=[],e=0,r=t;e<r.length;e++){var o=r[e];A([],n,o)}return n}function A(t,n,e){var r=t.slice();if(r.push({id:e.id,path:e.path,params:e.params}),0!==e.children.length)for(var o=0,i=e.children;o<i.length;o++){var u=i[o];A(r,n,u)}else n.push(r)}var B=function(){function t(){this.previousPath=null,this.busy=!1,this.state=0,this.lastState=0,this.root="/",this.useHash=!0}return t.prototype.componentWillLoad=function(){return r["a"](this,void 0,void 0,function(){return r["c"](this,function(t){switch(t.label){case 0:return console.debug("[ion-router] router will load"),[4,y(this.win)];case 1:return t.sent(),console.debug("[ion-router] found nav"),[4,this.onRoutesChanged()];case 2:return t.sent(),[2]}})})},t.prototype.componentDidLoad=function(){this.win.addEventListener("ionRouteRedirectChanged",Object(i["k"])(this.onRedirectChanged.bind(this),10)),this.win.addEventListener("ionRouteDataChanged",Object(i["k"])(this.onRoutesChanged.bind(this),100))},t.prototype.onPopState=function(){var t=this.historyDirection(),n=this.getPath();return console.debug("[ion-router] URL changed -> update nav",n,t),this.writeNavStateRoot(n,t)},t.prototype.onBackButton=function(t){var n=this;t.detail.register(0,function(){return n.goBack()})},t.prototype.push=function(t,n){void 0===n&&(n="forward"),t.startsWith(".")&&(t=new URL(t,window.location.href).pathname),console.debug("[ion-router] URL pushed -> updating nav",t,n);var e=v(t),r=M[n];return this.setPath(e,r),this.writeNavStateRoot(e,r)},t.prototype.goBack=function(){return this.win.history.back(1),Promise.resolve(this.waitPromise)},t.prototype.printDebug=function(){console.debug("CURRENT PATH",this.getPath()),console.debug("PREVIOUS PATH",this.previousPath),m(I(this.el)),g(N(this.el))},t.prototype.navChanged=function(t){return r["a"](this,void 0,void 0,function(){var n,e,o,i,u,a;return r["c"](this,function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, navChanged was cancelled"),[2,!1]):[4,w(this.win.document.body)];case 1:return n=r.sent(),e=n.ids,o=n.outlet,i=I(this.el),u=x(e,i),u?(a=h(u),a?(console.debug("[ion-router] nav changed -> update URL",e,a),this.setPath(a,t),[4,this.safeWriteNavState(o,u,0,a,null,e.length)]):(console.warn("[ion-router] router could not match path because some required param is missing"),[2,!1])):(console.warn("[ion-router] no matching URL for ",e.map(function(t){return t.id})),[2,!1]);case 2:return r.sent(),[2,!0]}})})},t.prototype.onRedirectChanged=function(){var t=this.getPath();t&&P(t,N(this.el))&&this.writeNavStateRoot(t,0)},t.prototype.onRoutesChanged=function(){return this.writeNavStateRoot(this.getPath(),0)},t.prototype.historyDirection=function(){null===this.win.history.state&&(this.state++,this.win.history.replaceState(this.state,this.win.document.title,this.win.document.location.href));var t=this.win.history.state,n=this.lastState;return this.lastState=t,t>n?1:t<n?-1:0},t.prototype.writeNavStateRoot=function(t,n){return r["a"](this,void 0,void 0,function(){var e,o,i,u,a;return r["c"](this,function(r){return t?(e=N(this.el),o=P(t,e),i=null,o&&(this.setPath(o.to,n),i=o.from,t=o.to),u=I(this.el),a=j(t,u),a?[2,this.safeWriteNavState(this.win.document.body,a,n,t,i)]:(console.error("[ion-router] the path does not match any route"),[2,!1])):(console.error("[ion-router] URL is not part of the routing set"),[2,!1])})})},t.prototype.safeWriteNavState=function(t,n,e,o,i,u){return void 0===u&&(u=0),r["a"](this,void 0,void 0,function(){var a,c,s;return r["c"](this,function(r){switch(r.label){case 0:return[4,this.lock()];case 1:a=r.sent(),c=!1,r.label=2;case 2:return r.trys.push([2,4,,5]),[4,this.writeNavState(t,n,e,o,i,u)];case 3:return c=r.sent(),[3,5];case 4:return s=r.sent(),console.error(s),[3,5];case 5:return a(),[2,c]}})})},t.prototype.lock=function(){return r["a"](this,void 0,void 0,function(){var t,n;return r["c"](this,function(e){switch(e.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise(function(t){return n=t}),void 0===t?[3,2]:[4,t];case 1:e.sent(),e.label=2;case 2:return[2,n]}})})},t.prototype.writeNavState=function(t,n,e,o,i,u){return void 0===u&&(u=0),r["a"](this,void 0,void 0,function(){var a,c;return r["c"](this,function(r){switch(r.label){case 0:return this.busy?(console.warn("[ion-router] router is busy, transition was cancelled"),[2,!1]):(this.busy=!0,a=this.routeChangeEvent(o,i),a&&this.ionRouteWillChange.emit(a),[4,b(t,n,e,u)]);case 1:return c=r.sent(),this.busy=!1,c&&console.debug("[ion-router] route changed",o),a&&this.ionRouteDidChange.emit(a),[2,c]}})})},t.prototype.setPath=function(t,n){this.state++,d(this.win.history,this.root,this.useHash,t,n,this.state)},t.prototype.getPath=function(){return p(this.win.location,this.root,this.useHash)},t.prototype.routeChangeEvent=function(t,n){var e=this.previousPath,r=l(t);if(this.previousPath=r,r===e)return null;var o=n?l(n):null;return{from:e,redirectedFrom:o,to:r}},Object.defineProperty(t,"is",{get:function(){return"ion-router"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{config:{context:"config"},el:{elementRef:!0},goBack:{method:!0},navChanged:{method:!0},printDebug:{method:!0},push:{method:!0},queue:{context:"queue"},root:{type:String,attr:"root"},useHash:{type:Boolean,attr:"use-hash"},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionRouteWillChange",method:"ionRouteWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionRouteDidChange",method:"ionRouteDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"window:popstate",method:"onPopState"},{name:"document:ionBackButton",method:"onBackButton"}]},enumerable:!0,configurable:!0}),t}(),M={back:-1,root:0,forward:1},q=function(){function t(){this.animated=!0}return t.prototype.componentWillLoad=function(){this.ionNavWillLoad.emit()},t.prototype.componentDidUnload=function(){this.activeEl=this.activeComponent=void 0},t.prototype.setRoot=function(t,n,e){return r["a"](this,void 0,void 0,function(){var o,i;return r["c"](this,function(r){switch(r.label){case 0:return this.activeComponent===t?[2,!1]:(o=this.activeEl,[4,Object(u["a"])(this.delegate,this.el,t,["ion-page","ion-page-invisible"],n)]);case 1:return i=r.sent(),this.activeComponent=t,this.activeEl=i,[4,this.commit(i,o,e)];case 2:return r.sent(),[4,Object(u["b"])(this.delegate,o)];case 3:return r.sent(),[2,!0]}})})},t.prototype.commit=function(t,n,e){return r["a"](this,void 0,void 0,function(){var o,i,u;return r["c"](this,function(r){switch(r.label){case 0:return[4,this.lock()];case 1:o=r.sent(),i=!1,r.label=2;case 2:return r.trys.push([2,4,,5]),[4,this.transition(t,n,e)];case 3:return i=r.sent(),[3,5];case 4:return u=r.sent(),console.error(u),[3,5];case 5:return o(),[2,i]}})})},t.prototype.setRouteId=function(t,n,e){return r["a"](this,void 0,void 0,function(){var o;return r["c"](this,function(r){switch(r.label){case 0:return[4,this.setRoot(t,n,{duration:0===e?0:void 0,direction:-1===e?"back":"forward"})];case 1:return o=r.sent(),[2,{changed:o,element:this.activeEl}]}})})},t.prototype.getRouteId=function(){return r["a"](this,void 0,void 0,function(){var t;return r["c"](this,function(n){return t=this.activeEl,[2,t?{id:t.tagName,element:t}:void 0]})})},t.prototype.lock=function(){return r["a"](this,void 0,void 0,function(){var t,n;return r["c"](this,function(e){switch(e.label){case 0:return t=this.waitPromise,this.waitPromise=new Promise(function(t){return n=t}),void 0===t?[3,2]:[4,t];case 1:e.sent(),e.label=2;case 2:return[2,n]}})})},t.prototype.transition=function(t,n,e){return r["a"](this,void 0,void 0,function(){var o,i,u,c,s,l,h;return r["c"](this,function(r){switch(r.label){case 0:return n===t?[2,!1]:(this.ionNavWillChange.emit(),e=e||{},o=this,i=o.mode,u=o.queue,c=o.animationCtrl,s=o.win,l=o.el,h=this.animated&&this.config.getBoolean("animated",!0),[4,Object(a["d"])(Object.assign({mode:i,queue:u,animated:h,animationCtrl:c,window:s,enteringEl:t,leavingEl:n,baseEl:l},e))]);case 1:return r.sent(),this.ionNavDidChange.emit(),[2,!0]}})})},t.prototype.render=function(){return["ios"===this.mode&&Object(o["b"])("div",{class:"nav-decor"}),Object(o["b"])("slot",null)]},Object.defineProperty(t,"is",{get:function(){return"ion-router-outlet"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{animated:{type:Boolean,attr:"animated"},animationBuilder:{type:"Any",attr:"animation-builder"},animationCtrl:{connect:"ion-animation-controller"},commit:{method:!0},config:{context:"config"},delegate:{type:"Any",attr:"delegate"},el:{elementRef:!0},getRouteId:{method:!0},queue:{context:"queue"},setRoot:{method:!0},setRouteId:{method:!0},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionNavWillLoad",method:"ionNavWillLoad",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavWillChange",method:"ionNavWillChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionNavDidChange",method:"ionNavDidChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-router-outlet-h{left:0;right:0;top:0;bottom:0;position:absolute;contain:layout size style;overflow:hidden;z-index:0}.nav-decor.sc-ion-router-outlet{display:none}.show-decor.sc-ion-router-outlet-h   .nav-decor.sc-ion-router-outlet{left:0;right:0;top:0;bottom:0;display:block;position:absolute;background:#000;z-index:0;pointer-events:none}"},enumerable:!0,configurable:!0}),t}()}}]);
//# sourceMappingURL=chunk-5d1c2ce5.50b52426.js.map