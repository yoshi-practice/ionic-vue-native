(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-04b6b8a3"],{"0790":function(e,t,n){"use strict";n.d(t,"b",function(){return o}),n.d(t,"a",function(){return i}),n.d(t,"c",function(){return s});
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
var r=function(e,t){return r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])},r(e,t)};function o(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}function i(e,t,n,r){return new(n||(n=Promise))(function(o,i){function s(e){try{a(r.next(e))}catch(t){i(t)}}function c(e){try{a(r["throw"](e))}catch(t){i(t)}}function a(e){e.done?o(e.value):new n(function(t){t(e.value)}).then(s,c)}a((r=r.apply(e,t||[])).next())})}function s(e,t){var n,r,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(e){return function(t){return a([e,t])}}function a(i){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,r&&(o=2&i[0]?r["return"]:i[0]?r["throw"]||((o=r["return"])&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(o=s.trys,!(o=o.length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}}},"0951":function(e,t,n){"use strict";n.r(t),n.d(t,"IonReorder",function(){return s}),n.d(t,"IonReorderGroup",function(){return c});var r=n("0790"),o=n("7018"),i=n("1c79"),s=function(){function e(){}return e.prototype.render=function(){return Object(o["b"])("slot",null,Object(o["b"])("ion-icon",{name:"reorder",lazy:!1,class:"reorder-icon"}))},Object.defineProperty(e,"is",{get:function(){return"ion-reorder"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return"[slot].sc-ion-reorder-md-h{display:none;line-height:0;z-index:100}.reorder-icon.sc-ion-reorder-md{display:block;font-size:31px;opacity:.3}"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),e}(),c=function(){function e(){this.lastToIndex=-1,this.cachedHeights=[],this.scrollElTop=0,this.scrollElBottom=0,this.scrollElInitial=0,this.containerTop=0,this.containerBottom=0,this.activated=!1,this.disabled=!0}return e.prototype.disabledChanged=function(){this.gesture&&this.gesture.setDisabled(this.disabled)},e.prototype.componentDidLoad=function(){return r["a"](this,void 0,void 0,function(){var e,t,o,i=this;return r["c"](this,function(r){switch(r.label){case 0:return e=this.el.closest("ion-content"),e?[4,e.componentOnReady()]:[3,3];case 1:return r.sent(),t=this,[4,e.getScrollElement()];case 2:t.scrollEl=r.sent(),r.label=3;case 3:return o=this,[4,n.e("chunk-67df06db").then(n.bind(null,"da33"))];case 4:return o.gesture=r.sent().createGesture({el:this.doc.body,queue:this.queue,gestureName:"reorder",gesturePriority:90,threshold:0,direction:"y",passive:!1,canStart:function(e){return i.canStart(e)},onStart:function(e){return i.onStart(e)},onMove:function(e){return i.onMove(e)},onEnd:function(){return i.onEnd()}}),this.disabledChanged(),[2]}})})},e.prototype.componentDidUnload=function(){this.onEnd()},e.prototype.canStart=function(e){if(this.selectedItemEl)return!1;var t=e.event.target,n=t.closest("ion-reorder");if(!n)return!1;var r=l(n,this.el);return r?(e.data=r,!0):(console.error("reorder node not found"),!1)},e.prototype.onStart=function(e){e.event.preventDefault();var t=this.selectedItemEl=e.data,n=this.cachedHeights;n.length=0;var r=this.el,o=r.children;if(o&&0!==o.length){for(var s=0,c=0;c<o.length;c++){var l=o[c];s+=l.offsetHeight,n.push(s),l.$ionIndex=c}var d=this.el.getBoundingClientRect();if(this.containerTop=d.top,this.containerBottom=d.bottom,this.scrollEl){var h=this.scrollEl.getBoundingClientRect();this.scrollElInitial=this.scrollEl.scrollTop,this.scrollElTop=h.top+u,this.scrollElBottom=h.bottom-u}else this.scrollElInitial=0,this.scrollElTop=0,this.scrollElBottom=0;this.lastToIndex=a(t),this.selectedItemHeight=t.offsetHeight,this.activated=!0,t.classList.add(f),Object(i["e"])()}},e.prototype.onMove=function(e){var t=this.selectedItemEl;if(t){var n=this.autoscroll(e.currentY),r=this.containerTop-n,o=this.containerBottom-n,s=Math.max(r,Math.min(e.currentY,o)),c=n+s-e.startY,l=s-r,u=this.itemIndexForTop(l);if(u!==this.lastToIndex){var d=a(t);this.lastToIndex=u,Object(i["c"])(),this.reorderMove(d,u)}t.style.transform="translateY("+c+"px)"}},e.prototype.onEnd=function(){var e=this;this.activated=!1;var t=this.selectedItemEl;if(t){var n=this.el.children,r=this.lastToIndex,o=a(t),s=o<r?n[r+1]:n[r];this.el.insertBefore(t,s);for(var c=n.length,l=0;l<c;l++)n[l].style["transform"]="";var u=function(){e.selectedItemEl&&(e.selectedItemEl.style.transition="",e.selectedItemEl.classList.remove(f),e.selectedItemEl=void 0)};r===o?(t.style.transition="transform 200ms ease-in-out",setTimeout(u,200)):(u(),this.ionItemReorder.emit({from:o,to:r})),Object(i["d"])()}},e.prototype.itemIndexForTop=function(e){var t=this.cachedHeights,n=0;for(n=0;n<t.length;n++)if(t[n]>e)break;return n},e.prototype.reorderMove=function(e,t){for(var n=this.selectedItemHeight,r=this.el.children,o=0;o<r.length;o++){var i=r[o].style,s="";o>e&&o<=t?s="translateY("+-n+"px)":o<e&&o>=t&&(s="translateY("+n+"px)"),i["transform"]=s}},e.prototype.autoscroll=function(e){if(!this.scrollEl)return 0;var t=0;return e<this.scrollElTop?t=-d:e>this.scrollElBottom&&(t=d),0!==t&&this.scrollEl.scrollBy(0,t),this.scrollEl.scrollTop-this.scrollElInitial},e.prototype.hostData=function(){return{class:{"reorder-enabled":!this.disabled,"reorder-list-active":this.activated}}},Object.defineProperty(e,"is",{get:function(){return"ion-reorder-group"},enumerable:!0,configurable:!0}),Object.defineProperty(e,"properties",{get:function(){return{activated:{state:!0},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},queue:{context:"queue"}}},enumerable:!0,configurable:!0}),Object.defineProperty(e,"events",{get:function(){return[{name:"ionItemReorder",method:"ionItemReorder",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(e,"style",{get:function(){return".reorder-list-active>*{-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;will-change:transform}.reorder-enabled{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.reorder-enabled ion-reorder{display:block;cursor:-webkit-grab;cursor:grab;pointer-events:all;-ms-touch-action:none;touch-action:none}.reorder-selected,.reorder-selected ion-reorder{cursor:-webkit-grabbing;cursor:grabbing}.reorder-selected{position:relative;-webkit-transition:none!important;transition:none!important;-webkit-box-shadow:0 0 10px rgba(0,0,0,.4);box-shadow:0 0 10px rgba(0,0,0,.4);opacity:.8;z-index:100}.reorder-visible ion-reorder .reorder-icon{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}"},enumerable:!0,configurable:!0}),e}();function a(e){return e["$ionIndex"]}function l(e,t){var n,r=0;while(e&&r<6){if(n=e.parentNode,n===t)return e;e=n,r++}}var u=60,d=10,f="reorder-selected"},"1c79":function(e,t,n){"use strict";n.d(t,"a",function(){return o}),n.d(t,"b",function(){return i}),n.d(t,"c",function(){return a}),n.d(t,"d",function(){return l}),n.d(t,"e",function(){return c}),n.d(t,"f",function(){return s}),n.d(t,"g",function(){return p}),n.d(t,"h",function(){return d}),n.d(t,"i",function(){return b}),n.d(t,"j",function(){return u}),n.d(t,"k",function(){return f});var r=n("0790");function o(e,t,n,o,i){return r["a"](this,void 0,void 0,function(){var s;return r["c"](this,function(r){switch(r.label){case 0:if(e)return[2,e.attachViewToDom(t,n,i,o)];if("string"!==typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return s="string"===typeof n?t.ownerDocument.createElement(n):n,o&&o.forEach(function(e){return s.classList.add(e)}),i&&Object.assign(s,i),t.appendChild(s),s.componentOnReady?[4,s.componentOnReady()]:[3,2];case 1:r.sent(),r.label=2;case 2:return[2,s]}})})}function i(e,t){if(t){if(e){var n=t.parentElement;return e.removeViewFromDom(n,t)}t.remove()}return Promise.resolve()}function s(){var e=window.TapticEngine;e&&e.selection()}function c(){var e=window.TapticEngine;e&&e.gestureSelectionStart()}function a(){var e=window.TapticEngine;e&&e.gestureSelectionChanged()}function l(){var e=window.TapticEngine;e&&e.gestureSelectionEnd()}function u(e,t){return null!==t.closest(e)}function d(e){var t;return"string"===typeof e&&e.length>0?(t={"ion-color":!0},t["ion-color-"+e]=!0,t):void 0}function f(e,t){var n;return n={},n[t]=!0,n[t+"-"+e]=!!e,n}function h(e){if(void 0!==e){var t=Array.isArray(e)?e:e.split(" ");return t.filter(function(e){return null!=e}).map(function(e){return e.trim()}).filter(function(e){return""!==e})}return[]}function p(e){var t={};return h(e).forEach(function(e){return t[e]=!0}),t}function b(e,t,n,o){return r["a"](this,void 0,void 0,function(){var i;return r["c"](this,function(r){switch(r.label){case 0:return null==t||"#"===t[0]||-1!==t.indexOf("://")?[3,2]:(i=e.document.querySelector("ion-router"),i?(null!=n&&n.preventDefault(),[4,i.componentOnReady()]):[3,2]);case 1:return r.sent(),[2,i.push(t,o)];case 2:return[2,!1]}})})}}}]);
//# sourceMappingURL=chunk-04b6b8a3.d37cea11.js.map