(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d3751ab"],{"0790":function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"c",function(){return a});
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
var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},i(t,e)};function r(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function o(t,e,n,i){return new(n||(n=Promise))(function(r,o){function a(t){try{u(i.next(t))}catch(e){o(e)}}function c(t){try{u(i["throw"](t))}catch(e){o(e)}}function u(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(a,c)}u((i=i.apply(t,e||[])).next())})}function a(t,e){var n,i,r,o,a={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:c(0),throw:c(1),return:c(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function c(t){return function(e){return u([t,e])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(a)try{if(n=1,i&&(r=2&o[0]?i["return"]:o[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,i=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(r=a.trys,!(r=r.length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){a.label=o[1];break}if(6===o[0]&&a.label<r[1]){a.label=r[1],r=o;break}if(r&&a.label<r[2]){a.label=r[2],a.ops.push(o);break}r[2]&&a.ops.pop(),a.trys.pop();continue}o=e.call(t,a)}catch(c){o=[6,c],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}},"1c79":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return u}),n.d(e,"d",function(){return l}),n.d(e,"e",function(){return c}),n.d(e,"f",function(){return a}),n.d(e,"g",function(){return p}),n.d(e,"h",function(){return d}),n.d(e,"i",function(){return b}),n.d(e,"j",function(){return s}),n.d(e,"k",function(){return h});var i=n("0790");function r(t,e,n,r,o){return i["a"](this,void 0,void 0,function(){var a;return i["c"](this,function(i){switch(i.label){case 0:if(t)return[2,t.attachViewToDom(e,n,o,r)];if("string"!==typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");return a="string"===typeof n?e.ownerDocument.createElement(n):n,r&&r.forEach(function(t){return a.classList.add(t)}),o&&Object.assign(a,o),e.appendChild(a),a.componentOnReady?[4,a.componentOnReady()]:[3,2];case 1:i.sent(),i.label=2;case 2:return[2,a]}})})}function o(t,e){if(e){if(t){var n=e.parentElement;return t.removeViewFromDom(n,e)}e.remove()}return Promise.resolve()}function a(){var t=window.TapticEngine;t&&t.selection()}function c(){var t=window.TapticEngine;t&&t.gestureSelectionStart()}function u(){var t=window.TapticEngine;t&&t.gestureSelectionChanged()}function l(){var t=window.TapticEngine;t&&t.gestureSelectionEnd()}function s(t,e){return null!==e.closest(t)}function d(t){var e;return"string"===typeof t&&t.length>0?(e={"ion-color":!0},e["ion-color-"+t]=!0,e):void 0}function h(t,e){var n;return n={},n[e]=!0,n[e+"-"+t]=!!t,n}function f(t){if(void 0!==t){var e=Array.isArray(t)?t:t.split(" ");return e.filter(function(t){return null!=t}).map(function(t){return t.trim()}).filter(function(t){return""!==t})}return[]}function p(t){var e={};return f(t).forEach(function(t){return e[t]=!0}),e}function b(t,e,n,r){return i["a"](this,void 0,void 0,function(){var o;return i["c"](this,function(i){switch(i.label){case 0:return null==e||"#"===e[0]||-1!==e.indexOf("://")?[3,2]:(o=t.document.querySelector("ion-router"),o?(null!=n&&n.preventDefault(),[4,o.componentOnReady()]):[3,2]);case 1:return i.sent(),[2,o.push(e,r)];case 2:return[2,!1]}})})}},"4c94":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return s}),n.d(e,"d",function(){return a}),n.d(e,"e",function(){return f}),n.d(e,"f",function(){return c}),n.d(e,"g",function(){return p}),n.d(e,"h",function(){return h}),n.d(e,"i",function(){return l}),n.d(e,"j",function(){return u}),n.d(e,"k",function(){return b}),n.d(e,"l",function(){return d}),n.d(e,"m",function(){return v});var i={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)"};function r(t,e){if(void 0===e||""===e)return!0;var n=i[e];return t.matchMedia(n).matches}function o(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function a(t){return!!t.shadowRoot&&!!t.attachShadow}function c(t,e,n,i){if(a(t)){var r=t.querySelector("input.aux-input");r||(r=t.ownerDocument.createElement("input"),r.type="hidden",r.classList.add("aux-input"),t.appendChild(r)),r.disabled=i,r.name=e,r.value=n}}function u(t,e,n){return Math.max(t,Math.min(e,n))}function l(t,e){if(!t){var n="ASSERT: "+e;throw console.error(n),new Error(n)}}function s(t){return t.timeStamp||Date.now()}function d(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function h(t,e){var n="rtl"===t.document.dir;switch(e){case"start":return n;case"end":return!n;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function f(t){return p(t,0)}function p(t,e){var n=t._original||t;return{_original:t,emit:b(n.emit.bind(n),e)}}function b(t,e){var n;return void 0===e&&(e=0),function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];clearTimeout(n),n=setTimeout.apply(void 0,[t,e].concat(i))}}var m={ipad:x,iphone:k,ios:C,android:O,phablet:S,tablet:E,cordova:P,capacitor:F,electron:z,pwa:T,mobile:I,desktop:j,hybrid:B};function y(t){return g(t)}function v(t,e){return y(t).includes(e)}function g(t){t.Ionic=t.Ionic||{};var e=t.Ionic.platforms;if(null==e){e=t.Ionic.platforms=w(t);var n=t.document.documentElement.classList;e.forEach(function(t){return n.add("plt-"+t)})}return e}function w(t){return Object.keys(m).filter(function(e){return m[e](t)})}function x(t){return D(t,/iPad/i)}function k(t){return D(t,/iPhone/i)}function C(t){return D(t,/iPad|iPhone|iPod/i)}function O(t){return D(t,/android|sink/i)}function S(t){var e=t.innerWidth,n=t.innerHeight,i=Math.min(e,n),r=Math.max(e,n);return i>390&&i<520&&r>620&&r<800}function E(t){var e=t.innerWidth,n=t.innerHeight,i=Math.min(e,n),r=Math.max(e,n);return i>460&&i<820&&r>780&&r<1400}function I(t){return M(t,"(any-pointer:coarse)")}function j(t){return!I(t)}function B(t){return P(t)||F(t)}function P(t){var e=t;return!!(e["cordova"]||e["phonegap"]||e["PhoneGap"])}function F(t){var e=t,n=e["Capacitor"];return!(!n||!n.isNative)}function z(t){return D(t,/electron/)}function T(t){return t.matchMedia("(display-mode: standalone)").matches}function D(t,e){return e.test(t.navigator.userAgent)}function M(t,e){return t.matchMedia(e).matches}},c0af:function(t,e,n){"use strict";n.r(e),n.d(e,"IonTextarea",function(){return a});var i=n("7018"),r=n("4c94"),o=n("1c79"),a=function(){function t(){this.inputId="ion-input-"+c++,this.didBlurAfterEdit=!1,this.hasFocus=!1,this.autocapitalize="none",this.autofocus=!1,this.clearOnEdit=!1,this.debounce=0,this.disabled=!1,this.name=this.inputId,this.readonly=!1,this.required=!1,this.spellcheck=!1,this.value=""}return t.prototype.debounceChanged=function(){this.ionChange=Object(r["g"])(this.ionChange,this.debounce)},t.prototype.disabledChanged=function(){this.emitStyle()},t.prototype.valueChanged=function(){var t=this,e=t.nativeInput,n=t.value;e.value!==n&&(e.value=n),this.ionChange.emit({value:n})},t.prototype.componentDidLoad=function(){this.ionStyle=Object(r["e"])(this.ionStyle),this.debounceChanged(),this.emitStyle()},t.prototype.focus=function(){this.nativeInput&&this.nativeInput.focus()},t.prototype.emitStyle=function(){this.ionStyle.emit({interactive:!0,textarea:!0,input:!0,"interactive-disabled":this.disabled,"has-value":this.hasValue(),"has-focus":this.hasFocus})},t.prototype.onInput=function(t){this.value=this.nativeInput.value,this.emitStyle(),this.ionInput.emit(t)},t.prototype.onFocus=function(){this.hasFocus=!0,this.focusChange(),this.ionFocus.emit()},t.prototype.onBlur=function(){this.hasFocus=!1,this.focusChange(),this.ionBlur.emit()},t.prototype.onKeyDown=function(){this.checkClearOnEdit()},t.prototype.checkClearOnEdit=function(){this.clearOnEdit&&(this.didBlurAfterEdit&&this.hasValue()&&(this.value=""),this.didBlurAfterEdit=!1)},t.prototype.focusChange=function(){this.clearOnEdit&&!this.hasFocus&&this.hasValue()&&(this.didBlurAfterEdit=!0),this.emitStyle()},t.prototype.hasValue=function(){return""!==this.value},t.prototype.hostData=function(){return{class:Object.assign({},Object(o["h"])(this.color))}},t.prototype.render=function(){var t=this;return Object(r["f"])(this.el,this.name,this.value,this.disabled),Object(i["b"])("textarea",{class:"native-textarea",ref:function(e){return t.nativeInput=e},autoCapitalize:this.autocapitalize,autoFocus:this.autofocus,disabled:this.disabled,maxLength:this.maxlength,minLength:this.minlength,name:this.name,placeholder:this.placeholder,readOnly:this.readonly,required:this.required,spellCheck:this.spellcheck,cols:this.cols,rows:this.rows,wrap:this.wrap,onInput:this.onInput.bind(this),onBlur:this.onBlur.bind(this),onFocus:this.onFocus.bind(this),onKeyDown:this.onKeyDown.bind(this)},this.value)},Object.defineProperty(t,"is",{get:function(){return"ion-textarea"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{autocapitalize:{type:String,attr:"autocapitalize"},autofocus:{type:Boolean,attr:"autofocus"},clearOnEdit:{type:Boolean,attr:"clear-on-edit",mutable:!0},color:{type:String,attr:"color"},cols:{type:Number,attr:"cols"},debounce:{type:Number,attr:"debounce",watchCallbacks:["debounceChanged"]},disabled:{type:Boolean,attr:"disabled",watchCallbacks:["disabledChanged"]},el:{elementRef:!0},focus:{method:!0},hasFocus:{state:!0},maxlength:{type:Number,attr:"maxlength"},minlength:{type:Number,attr:"minlength"},mode:{type:String,attr:"mode"},name:{type:String,attr:"name"},placeholder:{type:String,attr:"placeholder"},readonly:{type:Boolean,attr:"readonly"},required:{type:Boolean,attr:"required"},rows:{type:Number,attr:"rows"},spellcheck:{type:Boolean,attr:"spellcheck"},value:{type:String,attr:"value",mutable:!0,watchCallbacks:["valueChanged"]},wrap:{type:String,attr:"wrap"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionChange",method:"ionChange",bubbles:!0,cancelable:!0,composed:!0},{name:"ionInput",method:"ionInput",bubbles:!0,cancelable:!0,composed:!0},{name:"ionStyle",method:"ionStyle",bubbles:!0,cancelable:!0,composed:!0},{name:"ionBlur",method:"ionBlur",bubbles:!0,cancelable:!0,composed:!0},{name:"ionFocus",method:"ionFocus",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-textarea-ios-h{--background:initial;--color:currentColor;--placeholder-color:currentColor;--placeholder-font-style:inherit;--placeholder-font-weight:inherit;--placeholder-opacity:.5;--padding-top:0;--padding-end:0;--padding-bottom:0;--padding-start:0;--border-radius:0;display:block;position:relative;-webkit-box-flex:1;-ms-flex:1;flex:1;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;background:var(--background);color:var(--color);font-family:var(--ion-font-family,inherit);--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:0;font-size:inherit}.ion-color.sc-ion-textarea-ios-h{background:initial;color:var(--ion-color-base)}.in-item.sc-ion-textarea-ios-h{position:static}.native-textarea.sc-ion-textarea-ios{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;border-radius:var(--border-radius);margin:0;padding:var(--padding-top) var(--padding-end) var(--padding-bottom) var(--padding-start);display:block;width:100%;height:100%;border:0;outline:0;background:0 0;-webkit-box-sizing:border-box;box-sizing:border-box;resize:none;-webkit-appearance:none;-moz-appearance:none;appearance:none}.native-textarea.sc-ion-textarea-ios::-webkit-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios:-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::-ms-input-placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea.sc-ion-textarea-ios::placeholder{color:var(--placeholder-color);font-family:inherit;font-style:var(--placeholder-font-style);font-weight:var(--placeholder-font-weight);opacity:var(--placeholder-opacity)}.native-textarea[disabled].sc-ion-textarea-ios{opacity:.4}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"ios"},enumerable:!0,configurable:!0}),t}(),c=0}}]);
//# sourceMappingURL=chunk-6d3751ab.bc6ac3a5.js.map