(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5faad90c"],{"0790":function(t,e,n){"use strict";n.d(e,"b",function(){return r}),n.d(e,"a",function(){return o}),n.d(e,"c",function(){return s});
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
var i=function(t,e){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},i(t,e)};function r(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}function o(t,e,n,i){return new(n||(n=Promise))(function(r,o){function s(t){try{u(i.next(t))}catch(e){o(e)}}function a(t){try{u(i["throw"](t))}catch(e){o(e)}}function u(t){t.done?r(t.value):new n(function(e){e(t.value)}).then(s,a)}u((i=i.apply(t,e||[])).next())})}function s(t,e){var n,i,r,o,s={label:0,sent:function(){if(1&r[0])throw r[1];return r[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(t){return function(e){return u([t,e])}}function u(o){if(n)throw new TypeError("Generator is already executing.");while(s)try{if(n=1,i&&(r=2&o[0]?i["return"]:o[0]?i["throw"]||((r=i["return"])&&r.call(i),0):i.next)&&!(r=r.call(i,o[1])).done)return r;switch(i=0,r&&(o=[2&o[0],r.value]),o[0]){case 0:case 1:r=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,i=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(r=s.trys,!(r=r.length>0&&r[r.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!r||o[1]>r[0]&&o[1]<r[3])){s.label=o[1];break}if(6===o[0]&&s.label<r[1]){s.label=r[1],r=o;break}if(r&&s.label<r[2]){s.label=r[2],s.ops.push(o);break}r[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(a){o=[6,a],i=0}finally{n=r=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}}},2161:function(t,e,n){"use strict";n.r(e),n.d(e,"IonMenu",function(){return a}),n.d(e,"IonMenuButton",function(){return p}),n.d(e,"IonMenuController",function(){return v}),n.d(e,"IonMenuToggle",function(){return w});var i=n("0790"),r=n("7018"),o=n("81f8"),s=n("4c94"),a=function(){function t(){this.lastOnEnd=0,this.blocker=o["a"].createBlocker({disableScroll:!0}),this.isAnimating=!1,this._isOpen=!1,this.isPaneVisible=!1,this.isEndSide=!1,this.disabled=!1,this.side="start",this.swipeGesture=!0,this.maxEdgeStart=50}return t.prototype.typeChanged=function(t,e){var n=this.contentEl;n&&(void 0!==e&&n.classList.remove("menu-content-"+e),n.classList.add("menu-content-"+t),n.removeAttribute("style")),this.menuInnerEl&&this.menuInnerEl.removeAttribute("style"),this.animation=void 0},t.prototype.disabledChanged=function(){this.updateState(),this.ionMenuChange.emit({disabled:this.disabled,open:this._isOpen})},t.prototype.sideChanged=function(){this.isEndSide=Object(s["h"])(this.win,this.side)},t.prototype.swipeGestureChanged=function(){this.updateState()},t.prototype.componentWillLoad=function(){return i["a"](this,void 0,void 0,function(){var t;return i["c"](this,function(e){switch(e.label){case 0:return this.type=this.type||this.config.get("menuType","ios"===this.mode?"reveal":"overlay"),this.isServer?(this.disabled=!0,[3,3]):[3,1];case 1:return t=this,[4,this.lazyMenuCtrl.componentOnReady().then(function(t){return t._getInstance()})];case 2:t.menuCtrl=e.sent(),e.label=3;case 3:return[2]}})})},t.prototype.componentDidLoad=function(){return i["a"](this,void 0,void 0,function(){var t,e,r,o,s,a,u=this;return i["c"](this,function(i){switch(i.label){case 0:return this.isServer?[2]:(t=this.el,e=t.parentNode,r=void 0!==this.contentId?document.getElementById(this.contentId):e&&e.querySelector&&e.querySelector("[main]"),r&&r.tagName?(this.contentEl=r,r.classList.add("menu-content"),this.typeChanged(this.type,void 0),this.sideChanged(),o=!this.disabled,o&&(s=this.menuCtrl.getMenusSync(),o=!s.some(function(t){return t.side===u.side&&!t.disabled})),this.menuCtrl._register(this),this.ionMenuChange.emit({disabled:!o,open:this._isOpen}),a=this,[4,n.e("chunk-2d228893").then(n.bind(null,"da33"))]):(console.error('Menu: must have a "content" element to listen for drag events on.'),[2]));case 1:return a.gesture=i.sent().createGesture({el:this.doc,queue:this.queue,gestureName:"menu-swipe",gesturePriority:40,threshold:10,canStart:function(t){return u.canStart(t)},onWillStart:function(){return u.onWillStart()},onStart:function(){return u.onStart()},onMove:function(t){return u.onMove(t)},onEnd:function(t){return u.onEnd(t)}}),this.disabled=!o,this.updateState(),[2]}})})},t.prototype.componentDidUnload=function(){this.blocker.destroy(),this.menuCtrl._unregister(this),this.animation&&this.animation.destroy(),this.gesture&&this.gesture.destroy(),this.animation=void 0,this.contentEl=this.backdropEl=this.menuInnerEl=void 0},t.prototype.onSplitPaneChanged=function(t){this.isPaneVisible=t.detail.isPane(this.el),this.updateState()},t.prototype.onBackdropClick=function(t){if(this.lastOnEnd<t.timeStamp-100){var e=!!t.composedPath&&!t.composedPath().includes(this.menuInnerEl);e&&(t.preventDefault(),t.stopPropagation(),this.close())}},t.prototype.isOpen=function(){return Promise.resolve(this._isOpen)},t.prototype.isActive=function(){return Promise.resolve(this._isActive())},t.prototype.open=function(t){return void 0===t&&(t=!0),this.setOpen(!0,t)},t.prototype.close=function(t){return void 0===t&&(t=!0),this.setOpen(!1,t)},t.prototype.toggle=function(t){return void 0===t&&(t=!0),this.setOpen(!this._isOpen,t)},t.prototype.setOpen=function(t,e){return void 0===e&&(e=!0),this.menuCtrl._setOpen(this,t,e)},t.prototype._setOpen=function(t,e){return void 0===e&&(e=!0),i["a"](this,void 0,void 0,function(){return i["c"](this,function(n){switch(n.label){case 0:return!this._isActive()||this.isAnimating||t===this._isOpen?[2,this._isOpen]:(this.beforeAnimation(),[4,this.loadAnimation()]);case 1:return n.sent(),[4,this.startAnimation(t,e)];case 2:return n.sent(),this.afterAnimation(t),[2,t]}})})},t.prototype.loadAnimation=function(){return i["a"](this,void 0,void 0,function(){var t,e;return i["c"](this,function(n){switch(n.label){case 0:return t=this.menuInnerEl.offsetWidth,t===this.width&&void 0!==this.animation?[2]:(this.width=t,this.animation&&(this.animation.destroy(),this.animation=void 0),e=this,[4,this.menuCtrl._createAnimation(this.type,this)]);case 1:return e.animation=n.sent(),[2]}})})},t.prototype.startAnimation=function(t,e){return i["a"](this,void 0,void 0,function(){var n;return i["c"](this,function(i){switch(i.label){case 0:return n=this.animation.reverse(!t),e?[4,n.playAsync()]:[3,2];case 1:return i.sent(),[3,3];case 2:n.playSync(),i.label=3;case 3:return[2]}})})},t.prototype._isActive=function(){return!this.disabled&&!this.isPaneVisible},t.prototype.canSwipe=function(){return this.swipeGesture&&!this.isAnimating&&this._isActive()},t.prototype.canStart=function(t){return!!this.canSwipe()&&(!!this._isOpen||!this.menuCtrl.getOpenSync()&&c(this.win,t.currentX,this.isEndSide,this.maxEdgeStart))},t.prototype.onWillStart=function(){return this.beforeAnimation(),this.loadAnimation()},t.prototype.onStart=function(){this.isAnimating&&this.animation?this.animation.reverse(this._isOpen).progressStart():Object(s["i"])(!1,"isAnimating has to be true")},t.prototype.onMove=function(t){if(this.isAnimating&&this.animation){var e=u(t.deltaX,this._isOpen,this.isEndSide),n=e/this.width;this.animation.progressStep(n)}else Object(s["i"])(!1,"isAnimating has to be true")},t.prototype.onEnd=function(t){var e=this;if(this.isAnimating&&this.animation){var n=this._isOpen,i=this.isEndSide,r=u(t.deltaX,n,i),o=this.width,a=r/o,c=t.velocityX,d=o/2,l=c>=0&&(c>.2||t.deltaX>d),h=c<=0&&(c<-.2||t.deltaX<-d),p=n?i?l:h:i?h:l,f=!n&&p;n&&!p&&(f=!0);var m=p?1-a:a,b=m*o,y=0;if(b>5){var g=b/Math.abs(c);y=Math.min(g,300)}this.lastOnEnd=t.timeStamp,this.animation.onFinish(function(){return e.afterAnimation(f)},{clearExistingCallbacks:!0,oneTimeCallback:!0}).progressEnd(p,a,y)}else Object(s["i"])(!1,"isAnimating has to be true")},t.prototype.beforeAnimation=function(){Object(s["i"])(!this.isAnimating,"_before() should not be called while animating"),this.el.classList.add(d),this.backdropEl&&this.backdropEl.classList.add(l),this.blocker.block(),this.isAnimating=!0},t.prototype.afterAnimation=function(t){Object(s["i"])(this.isAnimating,"_before() should be called while animating"),this._isOpen=t,this.isAnimating=!1,this._isOpen||this.blocker.unblock(),this.enableListener(this,"body:click",t),t?(this.contentEl&&this.contentEl.classList.add(h),this.ionOpen.emit()):(this.el.classList.remove(d),this.contentEl&&this.contentEl.classList.remove(h),this.backdropEl&&this.backdropEl.classList.remove(l),this.ionClose.emit())},t.prototype.updateState=function(){var t=this._isActive();this.gesture&&this.gesture.setDisabled(!t||!this.swipeGesture),!t&&this._isOpen&&this.forceClosing(),!this.disabled&&this.menuCtrl&&this.menuCtrl._setActiveMenu(this),Object(s["i"])(!this.isAnimating,"can not be animating")},t.prototype.forceClosing=function(){Object(s["i"])(this._isOpen,"menu cannot be closed"),this.isAnimating=!0;var t=this.animation.reverse(!0);t.playSync(),this.afterAnimation(!1)},t.prototype.hostData=function(){var t,e=this,n=e.isEndSide,i=e.type,r=e.disabled,o=e.isPaneVisible;return{role:"complementary",class:(t={},t["menu-type-"+i]=!0,t["menu-enabled"]=!r,t["menu-side-end"]=n,t["menu-side-start"]=!n,t["menu-pane-visible"]=o,t)}},t.prototype.render=function(){var t=this;return[Object(r["b"])("div",{class:"menu-inner",ref:function(e){return t.menuInnerEl=e}},Object(r["b"])("slot",null)),Object(r["b"])("ion-backdrop",{ref:function(e){return t.backdropEl=e},class:"menu-backdrop",tappable:!1,stopPropagation:!1})]},Object.defineProperty(t,"is",{get:function(){return"ion-menu"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{close:{method:!0},config:{context:"config"},contentId:{type:String,attr:"content-id"},disabled:{type:Boolean,attr:"disabled",mutable:!0,watchCallbacks:["disabledChanged"]},doc:{context:"document"},el:{elementRef:!0},enableListener:{context:"enableListener"},isActive:{method:!0},isEndSide:{state:!0},isOpen:{method:!0},isPaneVisible:{state:!0},isServer:{context:"isServer"},lazyMenuCtrl:{connect:"ion-menu-controller"},maxEdgeStart:{type:Number,attr:"max-edge-start"},menuId:{type:String,attr:"menu-id"},open:{method:!0},queue:{context:"queue"},setOpen:{method:!0},side:{type:String,attr:"side",reflectToAttr:!0,watchCallbacks:["sideChanged"]},swipeGesture:{type:Boolean,attr:"swipe-gesture",watchCallbacks:["swipeGestureChanged"]},toggle:{method:!0},type:{type:String,attr:"type",mutable:!0,watchCallbacks:["typeChanged"]},win:{context:"window"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"events",{get:function(){return[{name:"ionOpen",method:"ionOpen",bubbles:!0,cancelable:!0,composed:!0},{name:"ionClose",method:"ionClose",bubbles:!0,cancelable:!0,composed:!0},{name:"ionMenuChange",method:"ionMenuChange",bubbles:!0,cancelable:!0,composed:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"body:ionSplitPaneVisible",method:"onSplitPaneChanged"},{name:"body:click",method:"onBackdropClick",capture:!0,disabled:!0}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-menu-md-h{--width:304px;--width-small:264px;--background:var(--ion-background-color, #fff);left:0;right:0;top:0;bottom:0;display:none;position:absolute;contain:strict}.show-menu.sc-ion-menu-md-h{display:block}.menu-inner.sc-ion-menu-md{left:0;right:auto;top:0;bottom:0;-webkit-transform:translate3d(-9999px,0,0);transform:translate3d(-9999px,0,0);display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;width:var(--width);height:100%;background:var(--background);contain:strict}.menu-side-start.sc-ion-menu-md-h   .menu-inner.sc-ion-menu-md{--ion-safe-area-right:0px;right:auto;left:0}.menu-side-end.sc-ion-menu-md-h   .menu-inner.sc-ion-menu-md{--ion-safe-area-left:0px;right:0;left:auto}ion-backdrop.sc-ion-menu-md{display:none;opacity:.01;z-index:-1}.menu-content.sc-ion-menu-md{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.menu-content-open.sc-ion-menu-md{cursor:pointer;-ms-touch-action:manipulation;touch-action:manipulation;pointer-events:none}@media (max-width:340px){.menu-inner.sc-ion-menu-md{width:var(--width-small)}}.menu-type-reveal.sc-ion-menu-md-h{z-index:0}.menu-type-reveal.show-menu.sc-ion-menu-md-h   .menu-inner.sc-ion-menu-md{-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}.menu-type-overlay.sc-ion-menu-md-h{z-index:80}.menu-type-overlay.sc-ion-menu-md-h   .show-backdrop.sc-ion-menu-md{display:block;cursor:pointer}.menu-pane-visible.sc-ion-menu-md-h   .menu-inner.sc-ion-menu-md{left:0;right:0;width:auto;-webkit-transform:none!important;transform:none!important;-webkit-box-shadow:none!important;box-shadow:none!important}.menu-pane-visible.sc-ion-menu-md-h   ion-backdrop.sc-ion-menu-md{display:hidden!important}.menu-type-overlay.sc-ion-menu-md-h   .menu-inner.sc-ion-menu-md{-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25)}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}();function u(t,e,n){return Math.max(0,e!==n?-t:t)}function c(t,e,n,i){return n?e>=t.innerWidth-i:e<=i}var d="show-menu",l="show-backdrop",h="menu-content-open",p=function(){function t(){this.autoHide=!0}return t.prototype.hostData=function(){return{"ion-activatable":!0,class:{button:!0}}},t.prototype.render=function(){var t=this.config.get("menuIcon","menu");return Object(r["b"])("ion-menu-toggle",{menu:this.menu,autoHide:this.autoHide},Object(r["b"])("button",{type:"button"},Object(r["b"])("slot",null,Object(r["b"])("ion-icon",{icon:t,mode:this.mode,color:this.color,lazy:!1})),"md"===this.mode&&Object(r["b"])("ion-ripple-effect",null)))},Object.defineProperty(t,"is",{get:function(){return"ion-menu-button"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{autoHide:{type:Boolean,attr:"auto-hide"},color:{type:String,attr:"color"},config:{context:"config"},menu:{type:String,attr:"menu"},mode:{type:String,attr:"mode"}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".sc-ion-menu-button-md-h{pointer-events:all;text-align:center;text-decoration:none;text-overflow:ellipsis;text-transform:none;white-space:nowrap;-webkit-font-kerning:none;font-kerning:none}button.sc-ion-menu-button-md{font-family:inherit;font-size:inherit;font-style:inherit;font-weight:inherit;letter-spacing:inherit;text-decoration:inherit;text-overflow:inherit;text-transform:inherit;text-align:inherit;white-space:inherit;color:inherit;margin:0;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:-webkit-box;display:-ms-flexbox;display:flex;position:relative;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-flow:row nowrap;flex-flow:row nowrap;-ms-flex-negative:0;flex-shrink:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:32px;border:0;outline:0;background:0 0;line-height:1;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:0;-webkit-appearance:none;-moz-appearance:none;appearance:none;padding:0 8px}ion-icon.sc-ion-menu-button-md{margin:0;padding:0;pointer-events:none;font-size:26px}"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"styleMode",{get:function(){return"md"},enumerable:!0,configurable:!0}),t}();function f(t){return Promise.resolve((new t).easing("cubic-bezier(0.0, 0.0, 0.2, 1)").easingReverse("cubic-bezier(0.4, 0.0, 0.6, 1)").duration(300))}var m=8;function b(t,e,n){var i,r,o=n.width+m;n.isEndSide?(i=o+"px",r="0px"):(i=-o+"px",r="0px");var s=(new t).addElement(n.menuInnerEl).fromTo("translateX",i,r),a=(new t).addElement(n.backdropEl).fromTo("opacity",.01,.3);return f(t).then(function(t){return t.add(s).add(a)})}function y(t,e,n){var i,r,o=n.width;n.isEndSide?(i=-o+"px",r=o+"px"):(i=o+"px",r=-o+"px");var s=(new t).addElement(n.menuInnerEl).fromTo("translateX",r,"0px"),a=(new t).addElement(n.contentEl).fromTo("translateX","0px",i),u=(new t).addElement(n.backdropEl).fromTo("opacity",.01,.2);return f(t).then(function(t){return t.add(s).add(u).add(a)})}function g(t,e,n){var i=n.width*(n.isEndSide?-1:1)+"px",r=(new t).addElement(n.contentEl).fromTo("translateX","0px",i);return f(t).then(function(t){return t.add(r)})}var v=function(){function t(){this.menus=[],this.menuAnimations=new Map,this.registerAnimation("reveal",g),this.registerAnimation("push",y),this.registerAnimation("overlay",b)}return t.prototype.open=function(t){return i["a"](this,void 0,void 0,function(){var e;return i["c"](this,function(n){switch(n.label){case 0:return[4,this.get(t)];case 1:return e=n.sent(),e?[2,e.open()]:[2,!1]}})})},t.prototype.close=function(t){return i["a"](this,void 0,void 0,function(){var e;return i["c"](this,function(n){switch(n.label){case 0:return[4,void 0!==t?this.get(t):this.getOpen()];case 1:return e=n.sent(),void 0!==e?[2,e.close()]:[2,!1]}})})},t.prototype.toggle=function(t){return i["a"](this,void 0,void 0,function(){var e;return i["c"](this,function(n){switch(n.label){case 0:return[4,this.get(t)];case 1:return e=n.sent(),e?[2,e.toggle()]:[2,!1]}})})},t.prototype.enable=function(t,e){return i["a"](this,void 0,void 0,function(){var n;return i["c"](this,function(i){switch(i.label){case 0:return[4,this.get(e)];case 1:return n=i.sent(),n&&(n.disabled=!t),[2,n]}})})},t.prototype.swipeGesture=function(t,e){return i["a"](this,void 0,void 0,function(){var n;return i["c"](this,function(i){switch(i.label){case 0:return[4,this.get(e)];case 1:return n=i.sent(),n&&(n.swipeGesture=t),[2,n]}})})},t.prototype.isOpen=function(t){return i["a"](this,void 0,void 0,function(){var e;return i["c"](this,function(n){switch(n.label){case 0:return null==t?[3,2]:[4,this.get(t)];case 1:return e=n.sent(),[2,void 0!==e&&e.isOpen()];case 2:return[4,this.getOpen()];case 3:return e=n.sent(),[2,void 0!==e]}})})},t.prototype.isEnabled=function(t){return i["a"](this,void 0,void 0,function(){var e;return i["c"](this,function(n){switch(n.label){case 0:return[4,this.get(t)];case 1:return e=n.sent(),e?[2,!e.disabled]:[2,!1]}})})},t.prototype.get=function(t){return i["a"](this,void 0,void 0,function(){var e,n;return i["c"](this,function(i){return"start"===t||"end"===t?(e=this.find(function(e){return e.side===t&&!e.disabled}),e?[2,e]:[2,this.find(function(e){return e.side===t})]):null!=t?[2,this.find(function(e){return e.menuId===t})]:(n=this.find(function(t){return!t.disabled}),n?[2,n]:[2,this.menus.length>0?this.menus[0].el:void 0])})})},t.prototype.getOpen=function(){return Promise.resolve(this.getOpenSync())},t.prototype.getMenus=function(){return Promise.resolve(this.getMenusSync())},t.prototype.isAnimating=function(){return Promise.resolve(this.isAnimatingSync())},t.prototype.registerAnimation=function(t,e){this.menuAnimations.set(t,e)},t.prototype._register=function(t){this.menus.indexOf(t)<0&&this.menus.push(t)},t.prototype._unregister=function(t){var e=this.menus.indexOf(t);e>-1&&this.menus.splice(e,1)},t.prototype._setActiveMenu=function(t){var e=t.side;this.menus.filter(function(n){return n.side===e&&n!==t}).forEach(function(t){return t.disabled=!0})},t.prototype._setOpen=function(t,e,n){return i["a"](this,void 0,void 0,function(){var r;return i["c"](this,function(i){switch(i.label){case 0:return this.isAnimatingSync()?[2,!1]:e?[4,this.getOpen()]:[3,3];case 1:return r=i.sent(),r&&t.el!==r?[4,r.setOpen(!1,!1)]:[3,3];case 2:i.sent(),i.label=3;case 3:return[2,t._setOpen(e,n)]}})})},t.prototype._getInstance=function(){return Promise.resolve(this)},t.prototype._createAnimation=function(t,e){var n=this.menuAnimations.get(t);return n?this.animationCtrl.create(n,null,e):Promise.reject("animation not registered")},t.prototype.getOpenSync=function(){return this.find(function(t){return t._isOpen})},t.prototype.getMenusSync=function(){return this.menus.map(function(t){return t.el})},t.prototype.isAnimatingSync=function(){return this.menus.some(function(t){return t.isAnimating})},t.prototype.find=function(t){var e=this.menus.find(t);if(void 0!==e)return e.el},Object.defineProperty(t,"is",{get:function(){return"ion-menu-controller"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{_createAnimation:{method:!0},_getInstance:{method:!0},_register:{method:!0},_setActiveMenu:{method:!0},_setOpen:{method:!0},_unregister:{method:!0},animationCtrl:{connect:"ion-animation-controller"},close:{method:!0},enable:{method:!0},get:{method:!0},getMenus:{method:!0},getOpen:{method:!0},isAnimating:{method:!0},isEnabled:{method:!0},isOpen:{method:!0},open:{method:!0},registerAnimation:{method:!0},swipeGesture:{method:!0},toggle:{method:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".ios .menu-content-reveal{-webkit-box-shadow:-8px 0 42px rgba(0,0,0,.08);box-shadow:-8px 0 42px rgba(0,0,0,.08)}.md .menu-content-push,.md .menu-content-reveal{-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25)}"},enumerable:!0,configurable:!0}),t}(),w=function(){function t(){this.visible=!1,this.autoHide=!0}return t.prototype.componentDidLoad=function(){return this.updateVisibility()},t.prototype.onClick=function(){return i["a"](this,void 0,void 0,function(){var t,e;return i["c"](this,function(n){switch(n.label){case 0:return[4,x(this.doc)];case 1:return t=n.sent(),t?[4,t.get(this.menu)]:[3,3];case 2:e=n.sent(),e&&t.toggle(this.menu),n.label=3;case 3:return[2]}})})},t.prototype.updateVisibility=function(){return i["a"](this,void 0,void 0,function(){var t,e,n;return i["c"](this,function(i){switch(i.label){case 0:return[4,x(this.doc)];case 1:return t=i.sent(),t?[4,t.get(this.menu)]:[3,5];case 2:return e=i.sent(),n=e,n?[4,e.isActive()]:[3,4];case 3:n=i.sent(),i.label=4;case 4:if(n)return this.visible=!0,[2];i.label=5;case 5:return this.visible=!1,[2]}})})},t.prototype.hostData=function(){var t=this.autoHide&&!this.visible;return{"aria-hidden":t?"true":null,class:{"menu-toggle-hidden":t}}},t.prototype.render=function(){return Object(r["b"])("slot",null)},Object.defineProperty(t,"is",{get:function(){return"ion-menu-toggle"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"encapsulation",{get:function(){return"shadow"},enumerable:!0,configurable:!0}),Object.defineProperty(t,"properties",{get:function(){return{autoHide:{type:Boolean,attr:"auto-hide"},doc:{context:"document"},menu:{type:String,attr:"menu"},visible:{state:!0}}},enumerable:!0,configurable:!0}),Object.defineProperty(t,"listeners",{get:function(){return[{name:"click",method:"onClick"},{name:"body:ionMenuChange",method:"updateVisibility"},{name:"body:ionSplitPaneVisible",method:"updateVisibility"}]},enumerable:!0,configurable:!0}),Object.defineProperty(t,"style",{get:function(){return".menu-toggle-hidden.sc-ion-menu-toggle-h{display:none}"},enumerable:!0,configurable:!0}),t}();function x(t){var e=t.querySelector("ion-menu-controller");return e?e.componentOnReady():Promise.resolve(void 0)}},"4c94":function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return o}),n.d(e,"c",function(){return d}),n.d(e,"d",function(){return s}),n.d(e,"e",function(){return p}),n.d(e,"f",function(){return a}),n.d(e,"g",function(){return f}),n.d(e,"h",function(){return h}),n.d(e,"i",function(){return c}),n.d(e,"j",function(){return u}),n.d(e,"k",function(){return m}),n.d(e,"l",function(){return l}),n.d(e,"m",function(){return g});var i={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)"};function r(t,e){if(void 0===e||""===e)return!0;var n=i[e];return t.matchMedia(n).matches}function o(t){"requestIdleCallback"in window?window.requestIdleCallback(t):setTimeout(t,32)}function s(t){return!!t.shadowRoot&&!!t.attachShadow}function a(t,e,n,i){if(s(t)){var r=t.querySelector("input.aux-input");r||(r=t.ownerDocument.createElement("input"),r.type="hidden",r.classList.add("aux-input"),t.appendChild(r)),r.disabled=i,r.name=e,r.value=n}}function u(t,e,n){return Math.max(t,Math.min(e,n))}function c(t,e){if(!t){var n="ASSERT: "+e;throw console.error(n),new Error(n)}}function d(t){return t.timeStamp||Date.now()}function l(t){if(t){var e=t.changedTouches;if(e&&e.length>0){var n=e[0];return{x:n.clientX,y:n.clientY}}if(void 0!==t.pageX)return{x:t.pageX,y:t.pageY}}return{x:0,y:0}}function h(t,e){var n="rtl"===t.document.dir;switch(e){case"start":return n;case"end":return!n;default:throw new Error('"'+e+'" is not a valid value for [side]. Use "start" or "end" instead.')}}function p(t){return f(t,0)}function f(t,e){var n=t._original||t;return{_original:t,emit:m(n.emit.bind(n),e)}}function m(t,e){var n;return void 0===e&&(e=0),function(){for(var i=[],r=0;r<arguments.length;r++)i[r]=arguments[r];clearTimeout(n),n=setTimeout.apply(void 0,[t,e].concat(i))}}var b={ipad:x,iphone:S,ios:k,android:O,phablet:A,tablet:E,cordova:M,capacitor:I,electron:C,pwa:G,mobile:P,desktop:_,hybrid:j};function y(t){return v(t)}function g(t,e){return y(t).includes(e)}function v(t){t.Ionic=t.Ionic||{};var e=t.Ionic.platforms;if(null==e){e=t.Ionic.platforms=w(t);var n=t.document.documentElement.classList;e.forEach(function(t){return n.add("plt-"+t)})}return e}function w(t){return Object.keys(b).filter(function(e){return b[e](t)})}function x(t){return T(t,/iPad/i)}function S(t){return T(t,/iPhone/i)}function k(t){return T(t,/iPad|iPhone|iPod/i)}function O(t){return T(t,/android|sink/i)}function A(t){var e=t.innerWidth,n=t.innerHeight,i=Math.min(e,n),r=Math.max(e,n);return i>390&&i<520&&r>620&&r<800}function E(t){var e=t.innerWidth,n=t.innerHeight,i=Math.min(e,n),r=Math.max(e,n);return i>460&&i<820&&r>780&&r<1400}function P(t){return q(t,"(any-pointer:coarse)")}function _(t){return!P(t)}function j(t){return M(t)||I(t)}function M(t){var e=t;return!!(e["cordova"]||e["phonegap"]||e["PhoneGap"])}function I(t){var e=t,n=e["Capacitor"];return!(!n||!n.isNative)}function C(t){return T(t,/electron/)}function G(t){return t.matchMedia("(display-mode: standalone)").matches}function T(t,e){return e.test(t.navigator.userAgent)}function q(t,e){return t.matchMedia(e).matches}},"81f8":function(t,e,n){"use strict";n.d(e,"a",function(){return a});var i=function(){function t(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new r(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new o(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,n){return this.canStart(t)?(this.requestedStart.set(e,n),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,n){if(!this.start(t,e,n))return!1;var i=this.requestedStart,r=-1e4;if(i.forEach(function(t){r=Math.max(r,t)}),r===n){this.capturedId=e,i.clear();var o=new CustomEvent("ionGestureCaptured",{detail:t});return this.doc.body.dispatchEvent(o),!0}return i.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0===n&&(n=new Set,this.disabledGestures.set(t,n)),n.add(e)},t.prototype.enableGesture=function(t,e){var n=this.disabledGestures.get(t);void 0!==n&&n.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add(s)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove(s)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),r=function(){function t(t,e,n,i,r){this.id=e,this.name=n,this.priority=i,this.disableScroll=r,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),o=function(){function t(t,e,n,i){this.id=e,this.disable=n,this.disableScroll=i,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var n=e[t];this.ctrl.disableGesture(n,this.id)}this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var n=e[t];this.ctrl.enableGesture(n,this.id)}this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),s="backdrop-no-scroll",a=new i(document)}}]);
//# sourceMappingURL=chunk-5faad90c.6aafa396.js.map