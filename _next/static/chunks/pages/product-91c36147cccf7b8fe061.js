(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{2711:function(e){e.exports=function(e){function t(n){if(o[n])return o[n].exports;var i=o[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var o={};return t.m=e,t.c=o,t.p="dist/",t(0)}([function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(e[n]=o[n])}return e},a=(n(o(1)),o(6)),r=n(a),s=n(o(7)),c=n(o(8)),d=n(o(9)),u=n(o(10)),l=n(o(11)),f=n(o(14)),m=[],p=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(p=!0),p)return m=(0,l.default)(m,b),(0,u.default)(m,b.once),m},x=function(){m=(0,f.default)(),v()},j=function(){m.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},h=function(e){return!0===e||"mobile"===e&&d.default.mobile()||"phone"===e&&d.default.phone()||"tablet"===e&&d.default.tablet()||"function"==typeof e&&!0===e()},g=function(e){b=i(b,e),m=(0,f.default)();var t=document.all&&!window.atob;return h(b.disable)||t?j():(b.disableMutationObserver||c.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),"DOMContentLoaded"===b.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===b.startEvent?window.addEventListener(b.startEvent,(function(){v(!0)})):document.addEventListener(b.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,s.default)(v,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,s.default)(v,b.debounceDelay,!0)),window.addEventListener("scroll",(0,r.default)((function(){(0,u.default)(m,b.once)}),b.throttleDelay)),b.disableMutationObserver||c.default.ready("[data-aos]",x),m)};e.exports={init:g,refresh:v,refreshHard:x}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function o(e,t,o){function n(t){var o=b,n=v;return b=v=void 0,k=t,j=e.apply(n,o)}function a(e){return k=e,h=setTimeout(u,t),O?n(e):j}function r(e){var o=t-(e-g);return _?w(o,x-(e-k)):o}function c(e){var o=e-g;return void 0===g||o>=t||o<0||_&&e-k>=x}function u(){var e=N();return c(e)?l(e):void(h=setTimeout(u,r(e)))}function l(e){return h=void 0,z&&b?n(e):(b=v=void 0,j)}function f(){void 0!==h&&clearTimeout(h),k=0,b=g=v=h=void 0}function m(){return void 0===h?j:l(N())}function p(){var e=N(),o=c(e);if(b=arguments,v=this,g=e,o){if(void 0===h)return a(g);if(_)return h=setTimeout(u,t),n(g)}return void 0===h&&(h=setTimeout(u,t)),j}var b,v,x,j,h,g,k=0,O=!1,_=!1,z=!0;if("function"!=typeof e)throw new TypeError(d);return t=s(t)||0,i(o)&&(O=!!o.leading,x=(_="maxWait"in o)?y(s(o.maxWait)||0,t):x,z="trailing"in o?!!o.trailing:z),p.cancel=f,p.flush=m,p}function n(e,t,n){var a=!0,r=!0;if("function"!=typeof e)throw new TypeError(d);return i(n)&&(a="leading"in n?!!n.leading:a,r="trailing"in n?!!n.trailing:r),o(e,t,{leading:a,maxWait:t,trailing:r})}function i(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function r(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||a(e)&&g.call(e)==l}function s(e){if("number"==typeof e)return e;if(r(e))return u;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var o=p.test(e);return o||b.test(e)?v(e.slice(2),o?2:8):m.test(e)?u:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d="Expected a function",u=NaN,l="[object Symbol]",f=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,x="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,j="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,h=x||j||Function("return this")(),g=Object.prototype.toString,y=Math.max,w=Math.min,N=function(){return h.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function o(e,t,o){function i(t){var o=b,n=v;return b=v=void 0,k=t,j=e.apply(n,o)}function a(e){return k=e,h=setTimeout(u,t),O?i(e):j}function s(e){var o=t-(e-N);return _?y(o,x-(e-k)):o}function d(e){var o=e-N;return void 0===N||o>=t||o<0||_&&e-k>=x}function u(){var e=w();return d(e)?l(e):void(h=setTimeout(u,s(e)))}function l(e){return h=void 0,z&&b?i(e):(b=v=void 0,j)}function f(){void 0!==h&&clearTimeout(h),k=0,b=N=v=h=void 0}function m(){return void 0===h?j:l(w())}function p(){var e=w(),o=d(e);if(b=arguments,v=this,N=e,o){if(void 0===h)return a(N);if(_)return h=setTimeout(u,t),i(N)}return void 0===h&&(h=setTimeout(u,t)),j}var b,v,x,j,h,N,k=0,O=!1,_=!1,z=!0;if("function"!=typeof e)throw new TypeError(c);return t=r(t)||0,n(o)&&(O=!!o.leading,x=(_="maxWait"in o)?g(r(o.maxWait)||0,t):x,z="trailing"in o?!!o.trailing:z),p.cancel=f,p.flush=m,p}function n(e){var t="undefined"==typeof e?"undefined":s(e);return!!e&&("object"==t||"function"==t)}function i(e){return!!e&&"object"==("undefined"==typeof e?"undefined":s(e))}function a(e){return"symbol"==("undefined"==typeof e?"undefined":s(e))||i(e)&&h.call(e)==u}function r(e){if("number"==typeof e)return e;if(a(e))return d;if(n(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=n(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var o=m.test(e);return o||p.test(e)?b(e.slice(2),o?2:8):f.test(e)?d:+e}var s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",d=NaN,u="[object Symbol]",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,p=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":s(t))&&t&&t.Object===Object&&t,x="object"==("undefined"==typeof self?"undefined":s(self))&&self&&self.Object===Object&&self,j=v||x||Function("return this")(),h=Object.prototype.toString,g=Math.max,y=Math.min,w=function(){return j.Date.now()};e.exports=o}).call(t,function(){return this}())},function(e,t){"use strict";function o(e){var t=void 0,n=void 0;for(t=0;t<e.length;t+=1){if((n=e[t]).dataset&&n.dataset.aos)return!0;if(n.children&&o(n.children))return!0}return!1}function n(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function i(){return!!n()}function a(e,t){var o=window.document,i=new(n())(r);s=t,i.observe(o.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function r(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),n=Array.prototype.slice.call(e.removedNodes);if(o(t.concat(n)))return s()}))}Object.defineProperty(t,"__esModule",{value:!0});var s=function(){};t.default={isSupported:i,ready:a}},function(e,t){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function n(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var o=0;o<t.length;o++){var n=t[o];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,o,n){return o&&e(t.prototype,o),n&&e(t,n),t}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=function(){function e(){o(this,e)}return i(e,[{key:"phone",value:function(){var e=n();return!(!a.test(e)&&!r.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=n();return!(!s.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new d},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e,t,o){var n=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof n&&("false"===n||!o&&"true"!==n)&&e.node.classList.remove("aos-animate")},n=function(e,t){var n=window.pageYOffset,i=window.innerHeight;e.forEach((function(e,a){o(e,i+n,t)}))};t.default=n},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(o(12)),a=function(e,t){return e.forEach((function(e,o){e.node.classList.add("aos-init"),e.position=(0,i.default)(e.node,t.offset)})),e};t.default=a},function(e,t,o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(o(13)),a=function(e,t){var o=0,n=0,a=window.innerHeight,r={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(r.offset&&!isNaN(r.offset)&&(n=parseInt(r.offset)),r.anchor&&document.querySelectorAll(r.anchor)&&(e=document.querySelectorAll(r.anchor)[0]),o=(0,i.default)(e).top,r.anchorPlacement){case"top-bottom":break;case"center-bottom":o+=e.offsetHeight/2;break;case"bottom-bottom":o+=e.offsetHeight;break;case"top-center":o+=a/2;break;case"bottom-center":o+=a/2+e.offsetHeight;break;case"center-center":o+=a/2+e.offsetHeight/2;break;case"top-top":o+=a;break;case"bottom-top":o+=e.offsetHeight+a;break;case"center-top":o+=e.offsetHeight/2+a}return r.anchorPlacement||r.offset||isNaN(t)||(n=t),o+n};t.default=a},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){for(var t=0,o=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),o+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:o,left:t}};t.default=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=o}])},6339:function(e,t,o){"use strict";o.r(t);var n=o(5893),i=o(5988),a=o(2711),r=o.n(a),s=o(7294);t.default=function(){return(0,s.useEffect)((function(){r().init({once:!1,offset:100,duration:1e3})}),[]),(0,n.jsxs)("div",{className:"jsx-4028253733",children:[(0,n.jsx)(i.default,{id:"1471252230",children:["#menu-product{color:rgb(15,167,172);}"]}),(0,n.jsx)(i.default,{id:"787903818",children:[".main-wrapper-product.jsx-4028253733{background:url(./images/main-product.jpg);background-size:100% 100vh;width:100%;height:100vh;}",".main-title-product.jsx-4028253733{top:42%;right:42%;position:absolute;color:white;font-size:2vw;}",".logo-flomon.jsx-4028253733{top:47%;left:40%;position:absolute;width:20%;}",".section-product-title.jsx-4028253733{margin:50px;font-size:18px;}",".section-product-doc.jsx-4028253733{margin:50px;}",".section-product-end.jsx-4028253733{margin:50px;text-align:right;font-size:18px;}",".doc-char.jsx-4028253733{font-size:16px;color:gray;}",".doc-title.jsx-4028253733{font-size:28px;font-weight:bold;}",".doc-sub.jsx-4028253733{font-size:16px;}"]}),(0,n.jsxs)("div",{className:"jsx-4028253733 main-wrapper-product",children:[(0,n.jsx)("img",{src:"./images/flomon.png",className:"jsx-4028253733 logo-flomon"}),(0,n.jsx)("div",{className:"jsx-4028253733 main-title-product",children:(0,n.jsx)("p",{"data-aos":"fade-down",className:"jsx-4028253733",children:"\ub354 \ub611\ub611\ud574\uc9c4 Flow"})})]}),(0,n.jsxs)("div",{className:"jsx-4028253733 section-product-title",children:["Flomon\uc740 \uae30\uc5c5\uc5d0 \uc788\ub294 \ub2e4\uc591\ud55c \uc7a5\uce58\uc640 \uc678\ubd80 \ub370\uc774\ud130\ub4e4\uc744 \uc548\uc804\ud558\uac8c \uc5f0\uacb0\ud558\uc5ec ",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\uace0 \uc774\ub97c \ubaa8\ub2c8\ud130\ub9c1 \ud558\uba70, ",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\uad81\uadf9\uc801\uc73c\ub85c\ub294 \uae30\uc5c5\uc758 \uc0c8\ub85c\uc6b4 \uc778\uc0ac\uc774\ud2b8\ub97c \uc5bb\uc744 \uc218 \uc788\ub3c4\ub85d \uc9c0\uc6d0\ud558\ub294 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4. ",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\ube0c\ub77c\uc6b0\uc800 \uae30\ubc18 Flow Engine\uc744 \ud1b5\ud574 \ubcf5\uc7a1\ud55c IT, IoT \ud658\uacbd\uc5d0\ub3c4 \ube60\ub974\uac8c \uc801\uc6a9\uc2dc\ud0a4\uace0 ",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\ub04a\uc784\uc5c6\uc774 \ubcc0\ud654\ud558\ub294 \ube44\uc988\ub2c8\uc2a4 \uc694\uad6c\uc0ac\ud56d\uc5d0 \uc644\ubcbd\ud558\uac8c \uc801\uc751\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),(0,n.jsxs)("div",{className:"jsx-4028253733 section-product-doc",children:[(0,n.jsx)("div",{className:"jsx-4028253733 doc-char",children:"Connectivity"}),(0,n.jsx)("div",{className:"jsx-4028253733 doc-title",children:"\uc5f0\uacb0\uc740 \uc27d\uac8c, \ucc98\ub9ac\ub294 \ube60\ub974\uac8c"}),(0,n.jsxs)("div",{className:"jsx-4028253733 doc-sub",children:["\uc0b0\uc5c5\ud604\uc7a5\uc5d0 \uc874\uc7ac\ud558\ub294 \uc778\ud130\ud398\uc774\uc2a4\uc640\uc758 \uc5f0\uacb0\uc744 ",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\uc27d\uac8c \ud558\uae30 \uc704\ud574 \ub2e4\uc591\ud55c built-in \ub178\ub4dc\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4. ",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\ud604\uc7a5\uc5d0\uc11c \ube60\ub978 \ucc98\ub9ac\uac00 \ud544\uc694\ud55c \uacbd\uc6b0\uc5d0\ub294 flomon edge\ub97c \uc801\uc6a9\ud574 ",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\ub370\uc774\ud130 \ubd80\ud558 \uac10\uc18c \ubc0f \ubcf4\uc548\uc5d0 \ub300\uc751\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4."]})]}),(0,n.jsxs)("div",{className:"jsx-4028253733 section-product-doc",children:[(0,n.jsx)("div",{className:"jsx-4028253733 doc-char",children:"Widget Dashboard"}),(0,n.jsx)("div",{className:"jsx-4028253733 doc-title",children:"\ub370\uc774\ud130\ub294 \uc9c1\uad00\uc801\uc73c\ub85c"}),(0,n.jsxs)("div",{className:"jsx-4028253733 doc-sub",children:["\uc704\uc82f \uae30\ubc18 \ub300\uc2dc\ubcf4\ub4dc\ub97c \ud1b5\ud574\uc11c ",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\uc190\uc27d\uac8c \uace0\uae09 \ub370\uc774\ud130 \ubd84\uc11d\uc744 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,n.jsx)("br",{className:"jsx-4028253733"})," \ub9ce\uc740 \uc591\uc758 \ub370\uc774\ud130\ub3c4 \uc27d\uac8c \uc774\ud574\ud560 \uc218 \uc788\uc73c\uba70, ",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\uc2e4\uc2dc\uac04\uc73c\ub85c \ubcc0\ud558\ub294 \ub370\uc774\ud130\ub97c \ud45c\uc2dc\ud558\uace0 ",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\ub3d9\uc801\uc73c\ub85c \ub300\uc2dc\ubcf4\ub4dc\ub97c \uc0dd\uc131\ud558\uc5ec \ub2e4\ub978 \uc0ac\uc6a9\uc790\uc640 \uacf5\uc720\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]}),(0,n.jsxs)("div",{className:"jsx-4028253733 section-product-doc",children:[(0,n.jsx)("div",{className:"jsx-4028253733 doc-char",children:"Flow Engine"}),(0,n.jsx)("div",{className:"jsx-4028253733 doc-title",children:"\uc9c1\uc811 \ub9cc\ub4dc\ub294 Flow"}),(0,n.jsxs)("div",{className:"jsx-4028253733 doc-sub",children:["\ube0c\ub77c\uc6b0\uc800\ub97c \uae30\ubc18\uc73c\ub85c flow\ub97c \uc9c1\uc811 \uadf8\ub9b4 \uc218 \uc788\ub294 flow \uc5d4\uc9c4\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4.",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\uc0ac\uc6a9\uc790\uac00 \ub2e4\uc591\ud55c IT, IoT \ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\uace0",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\uc774\ub97c \ud544\ud130\ub9c1, \ubcc0\ud658\ud558\uc5ec \uc27d\uac8c \ubd84\uc11d\ud560 \uc218 \uc788\ub3c4\ub85d \ud569\ub2c8\ub2e4.",(0,n.jsx)("br",{className:"jsx-4028253733"})," \ub610\ud55c AI \ub178\ub4dc\ub97c \ud1b5\ud574 \ub2e4\uc591\ud55c \uc54c\uace0\ub9ac\uc998 \uc5f0\ub3d9\uc73c\ub85c ",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\ub370\uc774\ud130 \uae30\ubc18\uc758 \ucd5c\uc801 \uc81c\uc5b4 \uc5f0\ub3d9\uc774 \uac00\ub2a5\ud569\ub2c8\ub2e4."]})]}),(0,n.jsxs)("div",{className:"jsx-4028253733 section-product-doc",children:[(0,n.jsx)("div",{className:"jsx-4028253733 doc-char",children:"Monitoring"}),(0,n.jsx)("div",{className:"jsx-4028253733 doc-title",children:"\uc2e4\uc2dc\uac04 \ubaa8\ub2c8\ud130\ub9c1"}),(0,n.jsxs)("div",{className:"jsx-4028253733 doc-sub",children:["\ud2b8\ub9ac \uae30\ubc18\uc73c\ub85c \uc27d\uac8c \ub370\uc774\ud130 \uadf8\ub8f9\uc744 \uad00\ub9ac\ud558\uace0 ",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\uc131\ub2a5, \ube44\uc6a9, \uc54c\ub78c \uc815\ubcf4 \ub4f1\uc744 \uc870\ud68c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. ",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\ucd08 \ub2e8\uc704\ubd80\ud130 \uc5f0 \ub2e8\uc704\uae4c\uc9c0 \ubaa8\ub2c8\ud130\ub9c1 \ud560 \uae30\uac04\uc744 \uc720\uc5f0\ud558\uac8c \uc120\ud0dd\ud558\uc5ec",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\ube60\ub974\uac8c \ub370\uc774\ud130\uc5d0 \uc811\uadfc\ud560 \uc218 \uc788\uace0,",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\ub2e4\ub978 \ud654\uba74\uc73c\ub85c \uc774\ub3d9\ud558\uc5ec\ub3c4 \uace0\uc815\ub418\uc5b4 \ub370\uc774\ud130 \ubd84\uc11d \uc5f0\uc18d\uc131\uc744 \ubcf4\uc7a5\ud569\ub2c8\ub2e4."]})]}),(0,n.jsxs)("div",{className:"jsx-4028253733 section-product-doc",children:[(0,n.jsx)("div",{className:"jsx-4028253733 doc-char",children:"Notification"}),(0,n.jsx)("div",{className:"jsx-4028253733 doc-title",children:"\uc54c\ub9bc\ub3c4 \uc2e4\uc2dc\uac04\uc73c\ub85c"}),(0,n.jsxs)("div",{className:"jsx-4028253733 doc-sub",children:["\uae30\ubcf8\uc801\uc73c\ub85c \ud0d1\uc7ac\ub41c \uc54c\ub9bc \uad00\ub9ac \uae30\ub2a5\uc740 ",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\uc0ac\uc6a9\uc790\uac00 \uc27d\uac8c \uc124\uc815\ud558\uc5ec \ub2e4\uc591\ud55c \ub3c4\uad6c\ub97c \ud1b5\ud574",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\uc2e4\uc2dc\uac04 \ud1b5\uc9c0\ub97c \ubc1b\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,n.jsx)("br",{className:"jsx-4028253733"})," \ub610\ud55c \uc11c\ube44\uc2a4 \uad00\uc810\uc758 \uc54c\ub9bc\uc744 \uc815\uc758\ud560 \uc218 \uc788\ub3c4\ub85d\ud558\uc5ec ",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\ubcf5\uc7a1\ud55c \uc0c1\ud669\uc758 \uc54c\ub9bc\ub3c4 \uc124\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})]}),(0,n.jsxs)("div",{className:"jsx-4028253733 section-product-doc",children:[(0,n.jsx)("div",{className:"jsx-4028253733 doc-char",children:"Setting"}),(0,n.jsx)("div",{className:"jsx-4028253733 doc-title",children:"\uae30\ud0c0 \uad00\ub9ac"}),(0,n.jsxs)("div",{className:"jsx-4028253733 doc-sub",children:["\uc0ac\uc6a9\uc790\uc5d0 \ub300\ud55c \uad8c\ud55c \ubc0f \ubcf4\uc548\uacfc \uac19\uc740 ",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\ucd94\uac00\uc801\uc778 \ub2e4\uc591\ud55c \uad00\ub9ac \uae30\ub2a5\uc744 \uae30\ubcf8 \ub0b4\uc7a5\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4."]})]}),(0,n.jsxs)("div",{className:"jsx-4028253733 section-product-end",children:["Flomon\uc744 \ud1b5\ud574",(0,n.jsx)("br",{className:"jsx-4028253733"}),"\ub370\uc774\ud130\ub97c \ud6a8\uc728\uc801\uc73c\ub85c \uad00\ub9ac\ud574\ubcf4\uc138\uc694."]})]})}},4548:function(e,t,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product",function(){return o(6339)}])}},function(e){e.O(0,[774,888,179],(function(){return t=4548,e(e.s=t);var t}));var t=e.O();_N_E=t}]);