(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-67df06db","chunk-2d228893"],{"81f8":function(t,e,r){"use strict";r.d(e,"a",function(){return a});var i=function(){function t(t){this.doc=t,this.gestureId=0,this.requestedStart=new Map,this.disabledGestures=new Map,this.disabledScroll=new Set}return t.prototype.createGesture=function(t){return new n(this,this.newID(),t.name,t.priority||0,!!t.disableScroll)},t.prototype.createBlocker=function(t){return void 0===t&&(t={}),new s(this,this.newID(),t.disable,!!t.disableScroll)},t.prototype.start=function(t,e,r){return this.canStart(t)?(this.requestedStart.set(e,r),!0):(this.requestedStart.delete(e),!1)},t.prototype.capture=function(t,e,r){if(!this.start(t,e,r))return!1;var i=this.requestedStart,n=-1e4;if(i.forEach(function(t){n=Math.max(n,t)}),n===r){this.capturedId=e,i.clear();var s=new CustomEvent("ionGestureCaptured",{detail:t});return this.doc.body.dispatchEvent(s),!0}return i.delete(e),!1},t.prototype.release=function(t){this.requestedStart.delete(t),this.capturedId===t&&(this.capturedId=void 0)},t.prototype.disableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0===r&&(r=new Set,this.disabledGestures.set(t,r)),r.add(e)},t.prototype.enableGesture=function(t,e){var r=this.disabledGestures.get(t);void 0!==r&&r.delete(e)},t.prototype.disableScroll=function(t){this.disabledScroll.add(t),1===this.disabledScroll.size&&this.doc.body.classList.add(o)},t.prototype.enableScroll=function(t){this.disabledScroll.delete(t),0===this.disabledScroll.size&&this.doc.body.classList.remove(o)},t.prototype.canStart=function(t){return void 0===this.capturedId&&!this.isDisabled(t)},t.prototype.isCaptured=function(){return void 0!==this.capturedId},t.prototype.isScrollDisabled=function(){return this.disabledScroll.size>0},t.prototype.isDisabled=function(t){var e=this.disabledGestures.get(t);return!!(e&&e.size>0)},t.prototype.newID=function(){return this.gestureId++,this.gestureId},t}(),n=function(){function t(t,e,r,i,n){this.id=e,this.name=r,this.priority=i,this.disableScroll=n,this.ctrl=t}return t.prototype.canStart=function(){return!!this.ctrl&&this.ctrl.canStart(this.name)},t.prototype.start=function(){return!!this.ctrl&&this.ctrl.start(this.name,this.id,this.priority)},t.prototype.capture=function(){if(!this.ctrl)return!1;var t=this.ctrl.capture(this.name,this.id,this.priority);return t&&this.disableScroll&&this.ctrl.disableScroll(this.id),t},t.prototype.release=function(){this.ctrl&&(this.ctrl.release(this.id),this.disableScroll&&this.ctrl.enableScroll(this.id))},t.prototype.destroy=function(){this.release(),this.ctrl=void 0},t}(),s=function(){function t(t,e,r,i){this.id=e,this.disable=r,this.disableScroll=i,this.ctrl=t}return t.prototype.block=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var r=e[t];this.ctrl.disableGesture(r,this.id)}this.disableScroll&&this.ctrl.disableScroll(this.id)}},t.prototype.unblock=function(){if(this.ctrl){if(this.disable)for(var t=0,e=this.disable;t<e.length;t++){var r=e[t];this.ctrl.enableGesture(r,this.id)}this.disableScroll&&this.ctrl.enableScroll(this.id)}},t.prototype.destroy=function(){this.unblock(),this.ctrl=void 0},t}(),o="backdrop-no-scroll",a=new i(document)},da33:function(t,e,r){"use strict";r.r(e),r.d(e,"createGesture",function(){return d});var i,n=r("81f8");function s(t){if(void 0===i)try{var e=Object.defineProperty({},"passive",{get:function(){i=!0}});t.addEventListener("optsTest",function(){},e)}catch(r){i=!1}return!!i}function o(t,e,r,i){var n,o,a=s(t)?{capture:!!i.capture,passive:!!i.passive}:!!i.capture;return t["__zone_symbol__addEventListener"]?(n="__zone_symbol__addEventListener",o="__zone_symbol__removeEventListener"):(n="addEventListener",o="removeEventListener"),t[n](e,r,a),function(){t[o](e,r,a)}}var a=2e3;function c(t,e,r,i,n){var s,c,l,d,h,p,f,v=0;function b(i){v=Date.now()+a,e(i)&&(!c&&r&&(c=o(t,"touchmove",r,n)),l||(l=o(t,"touchend",S,n)),d||(d=o(t,"touchcancel",S,n)))}function y(i){v>Date.now()?console.debug("mousedown event dropped because of previous touch"):e(i)&&(!p&&r&&(p=o(u(t),"mousemove",r,n)),f||(f=o(u(t),"mouseup",m,n)))}function S(t){w(),i&&i(t)}function m(t){X(),i&&i(t)}function w(){c&&c(),l&&l(),d&&d(),c=l=d=void 0}function X(){p&&p(),f&&f(),p=f=void 0}function Y(){w(),X()}function g(e){e?(s&&s(),h&&h(),s=h=void 0,Y()):(s||(s=o(t,"touchstart",b,n)),h||(h=o(t,"mousedown",y,n)))}function D(){g(!0),i=r=e=void 0}return{setDisabled:g,stop:Y,destroy:D}}function u(t){return t instanceof Document?t:t.ownerDocument}function l(t,e,r){var i=r*(Math.PI/180),n="x"===t,s=Math.cos(i),o=e*e,a=0,c=0,u=!1,l=0;return{start:function(t,e){a=t,c=e,l=0,u=!0},detect:function(t,e){if(!u)return!1;var r=t-a,i=e-c,d=r*r+i*i;if(d<o)return!1;var h=Math.sqrt(d),p=(n?r:i)/h;return l=p>s?1:p<-s?-1:0,u=!1,!0},isGesture:function(){return 0!==l},getDirection:function(){return l}}}function d(t){var e=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},t),r=e.canStart,i=e.onWillStart,s=e.onStart,o=e.onEnd,a=e.notCaptured,u=e.onMove,d=e.threshold,v=e.queue,b={type:"pan",startX:0,startY:0,startTimeStamp:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,timeStamp:0,event:void 0,data:void 0},y=c(e.el,D,G,q,{capture:!1}),S=l(e.direction,e.threshold,e.maxAngle),m=n["a"].createGesture({name:t.gestureName,priority:t.gesturePriority,disableScroll:t.disableScroll}),w=!1,X=!1,Y=!0,g=!1;function D(t){var e=f(t);return!(X||!Y)&&(p(t,b),b.startX=b.currentX,b.startY=b.currentY,b.startTimeStamp=b.timeStamp=e,b.velocityX=b.velocityY=b.deltaX=b.deltaY=0,b.event=t,(!r||!1!==r(b))&&(m.release(),!!m.start()&&(X=!0,0===d?I():(S.start(b.startX,b.startY),!0))))}function G(t){w?!g&&Y&&(g=!0,h(b,t),v.write(_)):(h(b,t),S.detect(b.currentX,b.currentY)&&(S.isGesture()&&I()||k()))}function _(){w&&(g=!1,u&&u(b))}function I(){return!(m&&!m.capture())&&(w=!0,Y=!1,b.startX=b.currentX,b.startY=b.currentY,b.startTimeStamp=b.timeStamp,i?i(b).then(E):E(),!0)}function E(){s&&s(b),Y=!0}function k(){L(),y.stop(),a&&a(b)}function L(){w=!1,X=!1,g=!1,Y=!0,m.release()}function q(t){var e=w,r=Y;L(),r&&(h(b,t),e?o&&o(b):a&&a(b))}return{setDisabled:function(t){y.setDisabled(t)},destroy:function(){m.destroy(),y.destroy()}}}function h(t,e){var r=t.currentX,i=t.currentY,n=t.timeStamp;p(e,t);var s=t.currentX,o=t.currentY,a=t.timeStamp=f(e),c=a-n;if(c>0&&c<100){var u=(s-r)/c,l=(o-i)/c;t.velocityX=.7*u+.3*t.velocityX,t.velocityY=.7*l+.3*t.velocityY}t.deltaX=s-t.startX,t.deltaY=o-t.startY,t.event=e}function p(t,e){var r=0,i=0;if(t){var n=t.changedTouches;if(n&&n.length>0){var s=n[0];r=s.clientX,i=s.clientY}else void 0!==t.pageX&&(r=t.pageX,i=t.pageY)}e.currentX=r,e.currentY=i}function f(t){return t.timeStamp||Date.now()}}}]);
//# sourceMappingURL=chunk-67df06db.72007b1f.js.map