(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[423],{2711:function(e){e.exports=function(e){function t(n){if(i[n])return i[n].exports;var o=i[n]={exports:{},id:n,loaded:!1};return e[n].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=e,t.c=i,t.p="dist/",t(0)}([function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}return e},a=(n(i(1)),i(6)),r=n(a),s=n(i(7)),c=n(i(8)),l=n(i(9)),d=n(i(10)),u=n(i(11)),f=n(i(14)),p=[],m=!1,x={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},g=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(m=!0),m)return p=(0,u.default)(p,x),(0,d.default)(p,x.once),p},b=function(){p=(0,f.default)(),g()},v=function(){p.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},h=function(e){return!0===e||"mobile"===e&&l.default.mobile()||"phone"===e&&l.default.phone()||"tablet"===e&&l.default.tablet()||"function"==typeof e&&!0===e()},j=function(e){x=o(x,e),p=(0,f.default)();var t=document.all&&!window.atob;return h(x.disable)||t?v():(x.disableMutationObserver||c.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),x.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",x.easing),document.querySelector("body").setAttribute("data-aos-duration",x.duration),document.querySelector("body").setAttribute("data-aos-delay",x.delay),"DOMContentLoaded"===x.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?g(!0):"load"===x.startEvent?window.addEventListener(x.startEvent,(function(){g(!0)})):document.addEventListener(x.startEvent,(function(){g(!0)})),window.addEventListener("resize",(0,s.default)(g,x.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(g,x.debounceDelay,!0)),window.addEventListener("scroll",(0,r.default)((function(){(0,d.default)(p,x.once)}),x.throttleDelay)),x.disableMutationObserver||c.default.ready("[data-aos]",b),p)};e.exports={init:j,refresh:g,refreshHard:b}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function i(e,t,i){function n(t){var i=x,n=g;return x=g=void 0,N=t,v=e.apply(n,i)}function a(e){return N=e,h=setTimeout(d,t),O?n(e):v}function r(e){var i=t-(e-j);return z?w(i,b-(e-N)):i}function c(e){var i=e-j;return void 0===j||i>=t||i<0||z&&e-N>=b}function d(){var e=k();return c(e)?u(e):void(h=setTimeout(d,r(e)))}function u(e){return h=void 0,S&&x?n(e):(x=g=void 0,v)}function f(){void 0!==h&&clearTimeout(h),N=0,x=j=g=h=void 0}function p(){return void 0===h?v:u(k())}function m(){var e=k(),i=c(e);if(x=arguments,g=this,j=e,i){if(void 0===h)return a(j);if(z)return h=setTimeout(d,t),n(j)}return void 0===h&&(h=setTimeout(d,t)),v}var x,g,b,v,h,j,N=0,O=!1,z=!1,S=!0;if("function"!=typeof e)throw new TypeError(l);return t=s(t)||0,o(i)&&(O=!!i.leading,b=(z="maxWait"in i)?y(s(i.maxWait)||0,t):b,S="trailing"in i?!!i.trailing:S),m.cancel=f,m.flush=p,m}function n(e,t,n){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError(l);return o(n)&&(a="leading"in n?!!n.leading:a,r="trailing"in n?!!n.trailing:r),i(e,t,{leading:a,maxWait:t,trailing:r})}function o(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||a(e)&&j.call(e)==u}function s(e){if("number"==typeof e)return e;if(r(e))return d;if(o(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=o(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var i=m.test(e);return i||x.test(e)?g(e.slice(2),i?2:8):p.test(e)?d:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l="Expected a function",d=NaN,u="[object Symbol]",f=/^\s+|\s+$/g,p=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,x=/^0o[0-7]+$/i,g=parseInt,b="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,v="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=b||v||Function("return this")(),j=Object.prototype.toString,y=Math.max,w=Math.min,k=function(){return h.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function i(e,t,i){function o(t){var i=x,n=g;return x=g=void 0,N=t,v=e.apply(n,i)}function a(e){return N=e,h=setTimeout(d,t),O?o(e):v}function s(e){var i=t-(e-k);return z?y(i,b-(e-N)):i}function l(e){var i=e-k;return void 0===k||i>=t||i<0||z&&e-N>=b}function d(){var e=w();return l(e)?u(e):void(h=setTimeout(d,s(e)))}function u(e){return h=void 0,S&&x?o(e):(x=g=void 0,v)}function f(){void 0!==h&&clearTimeout(h),N=0,x=k=g=h=void 0}function p(){return void 0===h?v:u(w())}function m(){var e=w(),i=l(e);if(x=arguments,g=this,k=e,i){if(void 0===h)return a(k);if(z)return h=setTimeout(d,t),o(k)}return void 0===h&&(h=setTimeout(d,t)),v}var x,g,b,v,h,k,N=0,O=!1,z=!1,S=!0;if("function"!=typeof e)throw new TypeError(c);return t=r(t)||0,n(i)&&(O=!!i.leading,b=(z="maxWait"in i)?j(r(i.maxWait)||0,t):b,S="trailing"in i?!!i.trailing:S),m.cancel=f,m.flush=p,m}function n(e){var t="undefined"==typeof e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function o(e){return!!e&&"object"==("undefined"==typeof e?"undefined":s(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":s(e))||o(e)&&h.call(e)==d}function r(e){if("number"==typeof e)return e;if(a(e))return l;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var i=p.test(e);return i||m.test(e)?x(e.slice(2),i?2:8):f.test(e)?l:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",l=NaN,d="[object Symbol]",u=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,m=/^0o[0-7]+$/i,x=parseInt,g="object"==("undefined"==typeof t?"undefined":s(t))&&t&&t.Object===Object&&t,b="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,v=g||b||Function("return this")(),h=Object.prototype.toString,j=Math.max,y=Math.min,w=function(){return v.Date.now()};e.exports=i}).call(t,function(){return this}())},function(e,t){"use strict";function i(e){var t=void 0,n=void 0;for(t=0;t<e.length;t+=1){if((n=e[t]).dataset&&n.dataset.aos)return!0;if(n.children&&i(n.children))return!0}return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!n()}function a(e,t){var i=window.document,o=new(n())(r);s=t,o.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function r(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(i(t.concat(n)))return s()}))}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){};t.default={isSupported:o,ready:a}},function(e,t){"use strict";function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,l=function(){function e(){i(this,e)}return o(e,[{key:"phone",value:function(){var e=n();return!(!a.test(e)&&!r.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!s.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e,t,i){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof n&&("false"===n||!i&&"true"!==n)&&e.node.classList.remove("aos-animate")},n=function(e,t){var n=window.pageYOffset,o=window.innerHeight;e.forEach((function(e,a){i(e,o+n,t)}))};t.default=n},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(i(12)),a=function(e,t){return e.forEach((function(e,i){e.node.classList.add("aos-init"),e.position=(0,o.default)(e.node,t.offset)})),e};t.default=a},function(e,t,i){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=n(i(13)),a=function(e,t){var i=0,n=0,a=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(n=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),i=(0,o.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":i+=e.offsetHeight/2;break;case"bottom-bottom":i+=e.offsetHeight;break;case"top-center":i+=a/2;break;case"bottom-center":i+=a/2+e.offsetHeight;break;case"center-center":i+=a/2+e.offsetHeight/2;break;case"top-top":i+=a;break;case"bottom-top":i+=e.offsetHeight+a;break;case"center-top":i+=e.offsetHeight/2+a}return r.anchorPlacement||r.offset||isNaN(t)||(n=t),i+n};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){for(var t=0,i=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),i+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:i,left:t}};t.default=i},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=i}])},3201:function(e,t,i){"use strict";i.r(t);var n=i(5893),o=i(5988),a=i(2711),r=i.n(a),s=i(7294);t.default=function(){var e=(0,s.useState)(!1),t=e[0],i=e[1],a=(0,s.useState)(!1),c=a[0],l=a[1],d=(0,s.useState)(!1),u=d[0],f=d[1];return(0,s.useEffect)((function(){r().init({once:!0,offset:100,duration:1e3})}),[]),(0,n.jsxs)("div",{className:"jsx-2691104632",children:[(0,n.jsx)(o.default,{id:"2735104876",children:["#menu-service{color:rgb(15,167,172);}"]}),(0,n.jsx)(o.default,{id:"1690561693",children:[".main-title-service.jsx-2691104632{top:48%;left:38%;position:absolute;color:white;font-size:2.3vw;text-align:center;font-weight:0;}",".section-service-platform.jsx-2691104632,.section-service-visual.jsx-2691104632{height:38vw;text-align:center;position:relative;}",".section-service-custom.jsx-2691104632{height:38vw;text-align:center;overflow:hidden;background-image:linear-gradient( to bottom, rgba(255,255,255,1), rgba(255,255,255,0.8), rgba(255,255,255,0.8) ), url(./images/service-custom.jpg);background-size:100%;margin-top:10vw;}",".section-partner.jsx-2691104632{padding:50px 300px 126px 300px;text-align:center;max-width:1920px;margin-top:100px;}",".doc-platform.jsx-2691104632{position:absolute;left:14vw;top:15vw;}",".doc-visual.jsx-2691104632{position:absolute;left:50vw;top:10vw;}",".doc-custom.jsx-2691104632{position:relative;top:10vw;}",".platform-title.jsx-2691104632,.visual-title.jsx-2691104632,.custom-title.jsx-2691104632{font-weight:bold;font-size:1.5vw;margin-bottom:2vw;}",".platform-sub.jsx-2691104632,.visual-sub.jsx-2691104632,.custom-sub.jsx-2691104632{font-size:1.1vw;}",".partner-title.jsx-2691104632{font-weight:bold;font-size:2vw;margin-bottom:0.5vw;}",".partner-sub.jsx-2691104632{font-size:1vw;color:gray;}",".img-platform.jsx-2691104632{position:absolute;width:32vw;right:14vw;top:10vw;}",".img-visual.jsx-2691104632{position:absolute;width:32vw;left:15vw;top:5vw;}",".scroll-slide.jsx-2691104632{position:absolute;top:90%;left:50%;width:30px;height:30px;margin-left:-12px;border-left:2px solid #fff;border-bottom:2px solid #fff;-webkit-transform:rotate(-45deg);-webkit-transform:rotate(-45deg);-ms-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-animation:slide 1.5s infinite;-webkit-animation:slide-jsx-2691104632 1.5s infinite;animation:slide-jsx-2691104632 1.5s infinite;box-sizing:border-box;}","@-webkit-keyframes slide{0%.jsx-2691104632{-webkit-transform:rotate(-45deg) translate(0,0);opacity:0;}50%.jsx-2691104632{opacity:1;}100%.jsx-2691104632{-webkit-transform:rotate(-45deg) translate(-20px,20px);opacity:0;}}","@-webkit-keyframes slide-jsx-2691104632{0%{-webkit-transform:rotate(-45deg) translate(0,0);-ms-transform:rotate(-45deg) translate(0,0);transform:rotate(-45deg) translate(0,0);opacity:0;}50%{opacity:1;}100%{-webkit-transform:rotate(-45deg) translate(-20px,20px);-ms-transform:rotate(-45deg) translate(-20px,20px);transform:rotate(-45deg) translate(-20px,20px);opacity:0;}}","@keyframes slide-jsx-2691104632{0%{-webkit-transform:rotate(-45deg) translate(0,0);-ms-transform:rotate(-45deg) translate(0,0);transform:rotate(-45deg) translate(0,0);opacity:0;}50%{opacity:1;}100%{-webkit-transform:rotate(-45deg) translate(-20px,20px);-ms-transform:rotate(-45deg) translate(-20px,20px);transform:rotate(-45deg) translate(-20px,20px);opacity:0;}}",".list_partner.jsx-2691104632{width:1300px;margin:0 auto;padding:0px 0px 160px;}",".partner-img.jsx-2691104632{position:absolute;top:0;right:0;left:0;bottom:0;width:100%;margin:auto;}",".wrapper-partner.jsx-2691104632{position:relative;height:140px;margin:0;padding:0;}"]}),(0,n.jsx)("img",{style:{height:"100vh",width:"100%",objectFit:"cover",zIndex:-99,filter:"brightness(75%) contrast(85%)"},src:"./images/main-service.jpg",className:"jsx-2691104632"}),(0,n.jsxs)("div",{className:"jsx-2691104632 main-wrapper-service",children:[(0,n.jsxs)("div",{"data-aos":"fade-down",className:"jsx-2691104632 main-title-service",children:["\ub370\uc774\ud130\ub97c ",(0,n.jsx)("strong",{className:"jsx-2691104632",children:"\uc9c1\uad00\uc801"}),"\uc73c\ub85c \ubcf4\uace0",(0,n.jsx)("br",{className:"jsx-2691104632"}),"\ub354 ",(0,n.jsx)("strong",{className:"jsx-2691104632",children:"\ud6a8\uc728\uc801"}),"\uc73c\ub85c \uad00\ub9ac\ud574\ubcf4\uc138\uc694."]}),(0,n.jsx)("span",{className:"jsx-2691104632 scroll-slide"})]}),(0,n.jsxs)("div",{style:{maxWidth:"1920px",height:"870px",margin:"0 auto",display:"flex",justifyContent:"center"},className:"jsx-2691104632",children:[(0,n.jsxs)("div",{style:{width:"315px",height:"720px",margin:"150px 84px 0 84px",textAlign:"center"},className:"jsx-2691104632",children:[(0,n.jsx)("img",{onMouseOver:function(){return i(!0)},onMouseOut:function(){return i(!1)},src:t?"./images/service-bigdata-bw.png":"./images/service-bigdata.png",style:{width:"305px",height:"305px",borderRadius:"70%"},className:"jsx-2691104632"}),(0,n.jsx)("div",{style:{color:"#067",fontSize:"16px",fontWeight:"bold",marginTop:"25px"},className:"jsx-2691104632",children:"BIGDATA"}),(0,n.jsx)("div",{style:{color:"#4c4c4c",fontSize:"30px",fontWeight:"bold",marginBottom:"20px"},className:"jsx-2691104632",children:"IoT Platform"}),(0,n.jsxs)("div",{style:{color:"#4c4c4c",fontSize:"18px"},className:"jsx-2691104632",children:["\ube45\ub370\uc774\ud130\ub97c \uae30\ubc18\uc73c\ub85c\ud55c IoT \ud50c\ub7ab\ud3fc",(0,n.jsx)("br",{className:"jsx-2691104632"})," \uae30\uc220\uc744 \ud1b5\ud574 \uac01\uc885\uc13c\uc11c \ubc0f \uc11c\ub85c \ub2e4\ub978 \uae30\uae30\uc640",(0,n.jsx)("br",{className:"jsx-2691104632"}),"\uc0c1\ud638\uc6b4\uc6a9\uc774 \uac00\ub2a5\ud55c \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud558\uba70",(0,n.jsx)("br",{className:"jsx-2691104632"})," \ub300\uc6a9\ub7c9 \ub370\uc774\ud130 \ucc98\ub9ac\uc640 \ub2e4\uc591\ud55c \uc0b0\uc5c5\uc6a9",(0,n.jsx)("br",{className:"jsx-2691104632"}),"\ud504\ub85c\ud1a0\ucf5c\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."]})]}),(0,n.jsxs)("div",{style:{width:"315px",height:"720px",margin:"150px 84px 0 84px",textAlign:"center"},className:"jsx-2691104632",children:[(0,n.jsx)("img",{onMouseOver:function(){return l(!0)},onMouseOut:function(){return l(!1)},src:c?"./images/service-connect-bw.png":"./images/service-connect.png",style:{width:"305px",height:"305px",borderRadius:"70%"},className:"jsx-2691104632"}),(0,n.jsx)("div",{style:{color:"#067",fontSize:"16px",fontWeight:"bold",marginTop:"25px"},className:"jsx-2691104632",children:"CONNECTION"}),(0,n.jsx)("div",{style:{color:"#4c4c4c",fontSize:"30px",fontWeight:"bold",marginBottom:"20px"},className:"jsx-2691104632",children:"\uc13c\uc11c \ub370\uc774\ud130 \uc5f0\uacc4 \ubc0f \ubd84\uc11d"}),(0,n.jsxs)("div",{style:{color:"#4c4c4c",fontSize:"18px"},className:"jsx-2691104632",children:["\uc0b0\uc5c5 \ud604\uc7a5\uc758 \uac01\uc885 \uc13c\uc11c\ub098 \uc218\uc2e0\uae30\uc758",(0,n.jsx)("br",{className:"jsx-2691104632"}),"\ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\uace0 \uac01 \ub514\ubc14\uc774\uc2a4\uc5d0 \ub9de\ub294",(0,n.jsx)("br",{className:"jsx-2691104632"}),"\ucd5c\uc801\ud654\ub41c \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.",(0,n.jsx)("br",{className:"jsx-2691104632"}),"\uc11c\ub85c \ub2e4\ub978 \ubd84\uc57c\uc758 \ub2e4\uc591\ud55c \uae30\uae30\ub4e4\uacfc\uc758",(0,n.jsx)("br",{className:"jsx-2691104632"}),"\uc5f0\uacb0\uc744 \ud1b5\ud574 \ub2e4\uc591\ud55c \uc11c\ube44\uc2a4\ub97c \ub9cc\ub4e4 \uc218",(0,n.jsx)("br",{className:"jsx-2691104632"})," \uc788\uc2b5\ub2c8\ub2e4."]})]}),(0,n.jsxs)("div",{style:{width:"315px",height:"720px",margin:"150px 84px 0 84px",textAlign:"center"},className:"jsx-2691104632",children:[(0,n.jsx)("img",{onMouseOver:function(){return f(!0)},onMouseOut:function(){return f(!1)},src:u?"./images/service-visual-bw.png":"./images/service-visual.png",style:{width:"305px",height:"305px",borderRadius:"70%"},className:"jsx-2691104632"}),(0,n.jsx)("div",{style:{color:"#067",fontSize:"16px",fontWeight:"bold",marginTop:"25px"},className:"jsx-2691104632",children:"VISUALIZE"}),(0,n.jsx)("div",{style:{color:"#4c4c4c",fontSize:"30px",fontWeight:"bold",marginBottom:"20px"},className:"jsx-2691104632",children:"\uc0ac\uc6a9\uc790 \uc911\uc2ec \uc2dc\uac01\ud654"}),(0,n.jsxs)("div",{style:{color:"#4c4c4c",fontSize:"18px"},className:"jsx-2691104632",children:["\ud2b8\ub80c\ub514\ud55c UI\ub97c \ud1b5\ud574 \ub370\uc774\ud130\ub97c \uc9c1\uad00\uc801\uc73c\ub85c",(0,n.jsx)("br",{className:"jsx-2691104632"}),"\ubcfc \uc218 \uc788\uace0, \ub2e4\uc591\ud55c \uc2dc\uac01\ud654\ub97c \uc81c\uacf5\ud558\uae30",(0,n.jsx)("br",{className:"jsx-2691104632"}),"\uc704\ud574 \uc704\uc82f \uae30\ubc18 \uc0ac\uc6a9\uc790 \ud3b8\uc9d1 \ub300\uc2dc\ubcf4\ub4dc\ub97c ",(0,n.jsx)("br",{className:"jsx-2691104632"}),"\uc9c0\uc6d0\ud569\ub2c8\ub2e4."]})]})]}),(0,n.jsxs)("div",{style:{maxWidth:"1920px",height:"700px",position:"relative",margin:"0 auto"},className:"jsx-2691104632",children:[(0,n.jsx)("img",{src:"./images/service-customizing.png",style:{width:"990px",height:"660px",margin:"21px 0px 19px 101px "},className:"jsx-2691104632"}),(0,n.jsxs)("div",{style:{width:"630px",height:"250px",position:"absolute",top:"227px",right:"335px",textAlign:"center"},className:"jsx-2691104632",children:[(0,n.jsx)("div",{style:{color:"#067",fontSize:"16px",fontWeight:"bold"},className:"jsx-2691104632",children:"CUSTOMIZING"}),(0,n.jsx)("div",{style:{color:"#4c4c4c",fontSize:"30px",fontWeight:"bold",marginBottom:"20px"},className:"jsx-2691104632",children:"\uace0\uac1d \ub9de\ucda4\ud615 \uc11c\ube44\uc2a4 \uc81c\uacf5"}),(0,n.jsxs)("div",{style:{color:"#4c4c4c",fontSize:"18px"},className:"jsx-2691104632",children:["\uc778\ud3ec\uc9c0\uc544\ub294 \ub300\uc6a9\ub7c9 \ub370\uc774\ud130 \ucc98\ub9ac \ubc0f \uad00\ub9ac \ub178\ud558\uc6b0\uc640 AI \uc54c\uace0\ub9ac\uc998 \ud1b5\ud569 \uae30\uc220\ub825\uc73c\ub85c",(0,n.jsx)("br",{className:"jsx-2691104632"}),"\uace0\uac1d\uc5d0\uac8c \uac00\uc7a5 \uc54c\ub9de\uc740 \uc194\ub8e8\uc158\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. ",(0,n.jsx)("br",{className:"jsx-2691104632"}),(0,n.jsx)("br",{className:"jsx-2691104632"}),"\uc790\uccb4 \uac1c\ubc1c\ud55c \ud50c\ub85c\uc6b0 \uc5d4\uc9c4\uacfc \uc704\uc82f \ub300\uc2dc\ubcf4\ub4dc\ub294 \ub370\uc774\ud130\ub97c \uc27d\uac8c \ubd84\uc11d\ud558\uace0 \ud6a8\uc728\uc801\uc778 \uad00\ub9ac\uac00",(0,n.jsx)("br",{className:"jsx-2691104632"}),"\uac00\ub2a5\ud558\uac8c \ud558\uba70 \uc0ac\uc6a9\uc790 \ub9de\ucda4\ud615 \ud654\uba74 \uad6c\uc131\uc740 \uc81c\uc870 \uc124\ube44\ub4e4\uc5d0 \ub300\ud55c \uc9c4\ub2e8 \ubc0f \uc608\uce21,",(0,n.jsx)("br",{className:"jsx-2691104632"}),"\uc9c0\ub2a5\ud615 \uc6d0\uaca9 \uad00\uc81c\uc640 \uc790\ub3d9 \uc81c\uc5b4 \ub4f1 \ub9ce\uc740 \ubc29\uba74\uc5d0\uc11c \ud65c\uc6a9\ub429\ub2c8\ub2e4."]})]})]}),(0,n.jsxs)("div",{style:{maxWidth:"1920px"},className:"jsx-2691104632 section-partner",children:[(0,n.jsx)("div",{style:{color:"#067",fontSize:"16px",fontWeight:"bold"},className:"jsx-2691104632",children:"PARTNERS"}),(0,n.jsx)("div",{style:{color:"#4c4c4c",fontSize:"30px",fontWeight:"bold",marginBottom:"50px"},className:"jsx-2691104632",children:"\uc778\ud3ec\uc9c0\uc544\uc640 \ud568\uaed8"}),(0,n.jsxs)("div",{style:{maxWidth:"1300px",margin:"0 auto"},className:"jsx-2691104632",children:[(0,n.jsx)("img",{src:"./images/partner-kangwonLand.png",style:{width:"305px",height:"305px",border:"solid 1px rgba(198, 198, 198, 0.38)",margin:"5px"},className:"jsx-2691104632"}),(0,n.jsx)("img",{src:"./images/partner-hyundaiYachts.png",style:{width:"305px",height:"305px",border:"solid 1px rgba(198, 198, 198, 0.38)",margin:"5px"},className:"jsx-2691104632"}),(0,n.jsx)("img",{src:"./images/partner-kdn.png",style:{width:"305px",height:"305px",border:"solid 1px rgba(198, 198, 198, 0.38)",margin:"5px"},className:"jsx-2691104632"}),(0,n.jsx)("img",{src:"./images/partner-coweaver.png",style:{width:"305px",height:"305px",border:"solid 1px rgba(198, 198, 198, 0.38)",margin:"5px"},className:"jsx-2691104632"}),(0,n.jsx)("img",{src:"./images/partner-wappLab.png",style:{width:"305px",height:"305px",border:"solid 1px rgba(198, 198, 198, 0.38)",margin:"5px"},className:"jsx-2691104632"}),(0,n.jsx)("img",{src:"./images/partner-cslee.png",style:{width:"305px",height:"305px",border:"solid 1px rgba(198, 198, 198, 0.38)",margin:"5px"},className:"jsx-2691104632"}),(0,n.jsx)("img",{src:"./images/partner-futureICT.png",style:{width:"305px",height:"305px",border:"solid 1px rgba(198, 198, 198, 0.38)",margin:"5px"},className:"jsx-2691104632"}),(0,n.jsx)("img",{src:"./images/partner-nkia.png",style:{width:"305px",height:"305px",border:"solid 1px rgba(198, 198, 198, 0.38)",margin:"5px"},className:"jsx-2691104632"})]})]})]})}},3922:function(e,t,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/service",function(){return i(3201)}])}},function(e){e.O(0,[774,888,179],(function(){return t=3922,e(e.s=t);var t}));var t=e.O();_N_E=t}]);