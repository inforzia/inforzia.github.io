(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[423],{2711:function(e){e.exports=function(e){function t(i){if(n[i])return n[i].exports;var a=n[i]={exports:{},id:i,loaded:!1};return e[i].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var n={};return t.m=e,t.c=n,t.p="dist/",t(0)}([function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},o=(i(n(1)),n(6)),s=i(o),r=i(n(7)),c=i(n(8)),u=i(n(9)),d=i(n(10)),l=i(n(11)),f=i(n(14)),m=[],p=!1,b={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){if(arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(p=!0),p)return m=(0,l.default)(m,b),(0,d.default)(m,b.once),m},g=function(){m=(0,f.default)(),v()},x=function(){m.forEach((function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")}))},j=function(e){return!0===e||"mobile"===e&&u.default.mobile()||"phone"===e&&u.default.phone()||"tablet"===e&&u.default.tablet()||"function"==typeof e&&!0===e()},h=function(e){b=a(b,e),m=(0,f.default)();var t=document.all&&!window.atob;return j(b.disable)||t?x():(b.disableMutationObserver||c.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),b.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",b.easing),document.querySelector("body").setAttribute("data-aos-duration",b.duration),document.querySelector("body").setAttribute("data-aos-delay",b.delay),"DOMContentLoaded"===b.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===b.startEvent?window.addEventListener(b.startEvent,(function(){v(!0)})):document.addEventListener(b.startEvent,(function(){v(!0)})),window.addEventListener("resize",(0,r.default)(v,b.debounceDelay,!0)),window.addEventListener("orientationchange",(0,r.default)(v,b.debounceDelay,!0)),window.addEventListener("scroll",(0,s.default)((function(){(0,d.default)(m,b.once)}),b.throttleDelay)),b.disableMutationObserver||c.default.ready("[data-aos]",g),m)};e.exports={init:h,refresh:v,refreshHard:g}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function n(e,t,n){function i(t){var n=b,i=v;return b=v=void 0,k=t,x=e.apply(i,n)}function o(e){return k=e,j=setTimeout(d,t),O?i(e):x}function s(e){var n=t-(e-h);return _?w(n,g-(e-k)):n}function c(e){var n=e-h;return void 0===h||n>=t||n<0||_&&e-k>=g}function d(){var e=N();return c(e)?l(e):void(j=setTimeout(d,s(e)))}function l(e){return j=void 0,M&&b?i(e):(b=v=void 0,x)}function f(){void 0!==j&&clearTimeout(j),k=0,b=h=v=j=void 0}function m(){return void 0===j?x:l(N())}function p(){var e=N(),n=c(e);if(b=arguments,v=this,h=e,n){if(void 0===j)return o(h);if(_)return j=setTimeout(d,t),i(h)}return void 0===j&&(j=setTimeout(d,t)),x}var b,v,g,x,j,h,k=0,O=!1,_=!1,M=!0;if("function"!=typeof e)throw new TypeError(u);return t=r(t)||0,a(n)&&(O=!!n.leading,g=(_="maxWait"in n)?y(r(n.maxWait)||0,t):g,M="trailing"in n?!!n.trailing:M),p.cancel=f,p.flush=m,p}function i(e,t,i){var o=!0,s=!0;if("function"!=typeof e)throw new TypeError(u);return a(i)&&(o="leading"in i?!!i.leading:o,s="trailing"in i?!!i.trailing:s),n(e,t,{leading:o,maxWait:t,trailing:s})}function a(e){var t="undefined"==typeof e?"undefined":c(e);return!!e&&("object"==t||"function"==t)}function o(e){return!!e&&"object"==("undefined"==typeof e?"undefined":c(e))}function s(e){return"symbol"==("undefined"==typeof e?"undefined":c(e))||o(e)&&h.call(e)==l}function r(e){if("number"==typeof e)return e;if(s(e))return d;if(a(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=a(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(f,"");var n=p.test(e);return n||b.test(e)?v(e.slice(2),n?2:8):m.test(e)?d:+e}var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u="Expected a function",d=NaN,l="[object Symbol]",f=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,p=/^0b[01]+$/i,b=/^0o[0-7]+$/i,v=parseInt,g="object"==("undefined"==typeof t?"undefined":c(t))&&t&&t.Object===Object&&t,x="object"==("undefined"==typeof self?"undefined":c(self))&&self&&self.Object===Object&&self,j=g||x||Function("return this")(),h=Object.prototype.toString,y=Math.max,w=Math.min,N=function(){return j.Date.now()};e.exports=i}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function n(e,t,n){function a(t){var n=b,i=v;return b=v=void 0,k=t,x=e.apply(i,n)}function o(e){return k=e,j=setTimeout(d,t),O?a(e):x}function r(e){var n=t-(e-N);return _?y(n,g-(e-k)):n}function u(e){var n=e-N;return void 0===N||n>=t||n<0||_&&e-k>=g}function d(){var e=w();return u(e)?l(e):void(j=setTimeout(d,r(e)))}function l(e){return j=void 0,M&&b?a(e):(b=v=void 0,x)}function f(){void 0!==j&&clearTimeout(j),k=0,b=N=v=j=void 0}function m(){return void 0===j?x:l(w())}function p(){var e=w(),n=u(e);if(b=arguments,v=this,N=e,n){if(void 0===j)return o(N);if(_)return j=setTimeout(d,t),a(N)}return void 0===j&&(j=setTimeout(d,t)),x}var b,v,g,x,j,N,k=0,O=!1,_=!1,M=!0;if("function"!=typeof e)throw new TypeError(c);return t=s(t)||0,i(n)&&(O=!!n.leading,g=(_="maxWait"in n)?h(s(n.maxWait)||0,t):g,M="trailing"in n?!!n.trailing:M),p.cancel=f,p.flush=m,p}function i(e){var t="undefined"==typeof e?"undefined":r(e);return!!e&&("object"==t||"function"==t)}function a(e){return!!e&&"object"==("undefined"==typeof e?"undefined":r(e))}function o(e){return"symbol"==("undefined"==typeof e?"undefined":r(e))||a(e)&&j.call(e)==d}function s(e){if("number"==typeof e)return e;if(o(e))return u;if(i(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=i(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var n=m.test(e);return n||p.test(e)?b(e.slice(2),n?2:8):f.test(e)?u:+e}var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c="Expected a function",u=NaN,d="[object Symbol]",l=/^\s+|\s+$/g,f=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,p=/^0o[0-7]+$/i,b=parseInt,v="object"==("undefined"==typeof t?"undefined":r(t))&&t&&t.Object===Object&&t,g="object"==("undefined"==typeof self?"undefined":r(self))&&self&&self.Object===Object&&self,x=v||g||Function("return this")(),j=Object.prototype.toString,h=Math.max,y=Math.min,w=function(){return x.Date.now()};e.exports=n}).call(t,function(){return this}())},function(e,t){"use strict";function n(e){var t=void 0,i=void 0;for(t=0;t<e.length;t+=1){if((i=e[t]).dataset&&i.dataset.aos)return!0;if(i.children&&n(i.children))return!0}return!1}function i(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function a(){return!!i()}function o(e,t){var n=window.document,a=new(i())(s);r=t,a.observe(n.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function s(e){e&&e.forEach((function(e){var t=Array.prototype.slice.call(e.addedNodes),i=Array.prototype.slice.call(e.removedNodes);if(n(t.concat(i)))return r()}))}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){};t.default={isSupported:a,ready:o}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),o=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,s=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,r=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=function(){function e(){n(this,e)}return a(e,[{key:"phone",value:function(){var e=i();return!(!o.test(e)&&!s.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=i();return!(!r.test(e)&&!c.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new u},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e,t,n){var i=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):"undefined"!=typeof i&&("false"===i||!n&&"true"!==i)&&e.node.classList.remove("aos-animate")},i=function(e,t){var i=window.pageYOffset,a=window.innerHeight;e.forEach((function(e,o){n(e,a+i,t)}))};t.default=i},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(12)),o=function(e,t){return e.forEach((function(e,n){e.node.classList.add("aos-init"),e.position=(0,a.default)(e.node,t.offset)})),e};t.default=o},function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=i(n(13)),o=function(e,t){var n=0,i=0,o=window.innerHeight,s={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(s.offset&&!isNaN(s.offset)&&(i=parseInt(s.offset)),s.anchor&&document.querySelectorAll(s.anchor)&&(e=document.querySelectorAll(s.anchor)[0]),n=(0,a.default)(e).top,s.anchorPlacement){case"top-bottom":break;case"center-bottom":n+=e.offsetHeight/2;break;case"bottom-bottom":n+=e.offsetHeight;break;case"top-center":n+=o/2;break;case"bottom-center":n+=o/2+e.offsetHeight;break;case"center-center":n+=o/2+e.offsetHeight/2;break;case"top-top":n+=o;break;case"bottom-top":n+=e.offsetHeight+o;break;case"center-top":n+=e.offsetHeight/2+o}return s.anchorPlacement||s.offset||isNaN(t)||(i=t),n+i};t.default=o},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){for(var t=0,n=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),n+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:n,left:t}};t.default=n},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,(function(e){return{node:e}}))};t.default=n}])},3201:function(e,t,n){"use strict";n.r(t);var i=n(5893),a=n(5988),o=n(2711),s=n.n(o),r=n(7294);t.default=function(){var e=(0,r.useState)(!1),t=e[0],n=e[1],o=(0,r.useState)(!1),c=o[0],u=o[1],d=(0,r.useState)(!1),l=d[0],f=d[1];return(0,r.useEffect)((function(){s().init({once:!0,offset:100,duration:1e3})}),[]),(0,i.jsxs)("div",{className:"jsx-2735104876",children:[(0,i.jsx)(a.default,{id:"2735104876",children:["#menu-service{color:rgb(15,167,172);}"]}),(0,i.jsxs)("section",{className:"jsx-2735104876 service-main",children:[(0,i.jsxs)("div",{"data-aos":"fade-down",className:"jsx-2735104876 title-service-main",children:["\ub370\uc774\ud130\ub97c ",(0,i.jsx)("span",{className:"jsx-2735104876",children:"\uc9c1\uad00\uc801"}),"\uc73c\ub85c \ubcf4\uace0",(0,i.jsx)("br",{className:"jsx-2735104876"}),"\ub354 ",(0,i.jsx)("span",{className:"jsx-2735104876",children:"\ud6a8\uc728\uc801"}),"\uc73c\ub85c \uad00\ub9ac\ud574\ubcf4\uc138\uc694."]}),(0,i.jsx)("div",{className:"jsx-2735104876 scroll-slide"})]}),(0,i.jsxs)("section",{className:"jsx-2735104876 service-sub1",children:[(0,i.jsxs)("div",{className:"jsx-2735104876 container-bigdata",children:[(0,i.jsx)("img",{onMouseOver:function(){return n(!0)},onMouseOut:function(){return n(!1)},src:t?"./images/service-bigdata-bw.png":"./images/service-bigdata.png",className:"jsx-2735104876 img-service-bigdata"}),(0,i.jsxs)("div",{className:"jsx-2735104876 bigdata-doc",children:[(0,i.jsx)("div",{className:"jsx-2735104876 doc-head",children:"BIGDATA"}),(0,i.jsx)("div",{className:"jsx-2735104876 doc-title",children:"IoT Platform"}),(0,i.jsxs)("div",{className:"jsx-2735104876 doc-sub",children:["\ube45\ub370\uc774\ud130\ub97c \uae30\ubc18\uc73c\ub85c\ud55c IoT \ud50c\ub7ab\ud3fc",(0,i.jsx)("br",{className:"jsx-2735104876"})," \uae30\uc220\uc744 \ud1b5\ud574 \uac01\uc885\uc13c\uc11c \ubc0f \uc11c\ub85c \ub2e4\ub978 \uae30\uae30\uc640",(0,i.jsx)("br",{className:"jsx-2735104876"}),"\uc0c1\ud638\uc6b4\uc6a9\uc774 \uac00\ub2a5\ud55c \uc11c\ube44\uc2a4\ub97c \uc81c\uacf5\ud558\uba70",(0,i.jsx)("br",{className:"jsx-2735104876"})," \ub300\uc6a9\ub7c9 \ub370\uc774\ud130 \ucc98\ub9ac\uc640 \ub2e4\uc591\ud55c \uc0b0\uc5c5\uc6a9",(0,i.jsx)("br",{className:"jsx-2735104876"}),"\ud504\ub85c\ud1a0\ucf5c\uc744 \uc9c0\uc6d0\ud569\ub2c8\ub2e4."]})]})]}),(0,i.jsxs)("div",{className:"jsx-2735104876 container-connect",children:[(0,i.jsx)("img",{onMouseOver:function(){return u(!0)},onMouseOut:function(){return u(!1)},src:c?"./images/service-connect-bw.png":"./images/service-connect.png",className:"jsx-2735104876 img-service-connect"}),(0,i.jsxs)("div",{className:"jsx-2735104876 connet-doc",children:[(0,i.jsx)("div",{className:"jsx-2735104876 doc-head",children:"CONNECTIVITY"}),(0,i.jsx)("div",{className:"jsx-2735104876 doc-title",children:"\uc13c\uc11c \ub370\uc774\ud130 \uc5f0\uacc4 \ubc0f \ubd84\uc11d"}),(0,i.jsxs)("div",{className:"jsx-2735104876 doc-sub",children:["\uc0b0\uc5c5 \ud604\uc7a5\uc758 \uac01\uc885 \uc13c\uc11c\ub098 \uc218\uc2e0\uae30\uc758",(0,i.jsx)("br",{className:"jsx-2735104876"}),"\ub370\uc774\ud130\ub97c \uc218\uc9d1\ud558\uace0 \uac01 \ub514\ubc14\uc774\uc2a4\uc5d0 \ub9de\ub294",(0,i.jsx)("br",{className:"jsx-2735104876"}),"\ucd5c\uc801\ud654\ub41c \uc778\ud130\ud398\uc774\uc2a4\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4.",(0,i.jsx)("br",{className:"jsx-2735104876"}),"\uc11c\ub85c \ub2e4\ub978 \ubd84\uc57c\uc758 \ub2e4\uc591\ud55c \uae30\uae30\ub4e4\uacfc\uc758",(0,i.jsx)("br",{className:"jsx-2735104876"}),"\uc5f0\uacb0\uc744 \ud1b5\ud574 \ub2e4\uc591\ud55c \uc11c\ube44\uc2a4\ub97c \ub9cc\ub4e4 \uc218",(0,i.jsx)("br",{className:"jsx-2735104876"})," \uc788\uc2b5\ub2c8\ub2e4."]})]})]}),(0,i.jsxs)("div",{className:"jsx-2735104876 container-visual",children:[(0,i.jsx)("img",{onMouseOver:function(){return f(!0)},onMouseOut:function(){return f(!1)},src:l?"./images/service-visual-bw.png":"./images/service-visual.png",className:"jsx-2735104876 img-service-visual"}),(0,i.jsxs)("div",{className:"jsx-2735104876 visual-doc",children:[(0,i.jsx)("div",{className:"jsx-2735104876 doc-head",children:"VISUALIZE"}),(0,i.jsx)("div",{className:"jsx-2735104876 doc-title",children:"\uc0ac\uc6a9\uc790 \uc911\uc2ec \uc2dc\uac01\ud654"}),(0,i.jsxs)("div",{className:"jsx-2735104876 doc-sub",children:["\ud2b8\ub80c\ub514\ud55c UI\ub97c \ud1b5\ud574 \ub370\uc774\ud130\ub97c \uc9c1\uad00\uc801\uc73c\ub85c",(0,i.jsx)("br",{className:"jsx-2735104876"}),"\ubcfc \uc218 \uc788\uace0, \ub2e4\uc591\ud55c \uc2dc\uac01\ud654\ub97c \uc81c\uacf5\ud558\uae30",(0,i.jsx)("br",{className:"jsx-2735104876"}),"\uc704\ud574 \uc704\uc82f \uae30\ubc18 \uc0ac\uc6a9\uc790 \ud3b8\uc9d1 \ub300\uc2dc\ubcf4\ub4dc\ub97c ",(0,i.jsx)("br",{className:"jsx-2735104876"}),"\uc9c0\uc6d0\ud569\ub2c8\ub2e4."]})]})]})]}),(0,i.jsx)("section",{className:"jsx-2735104876 service-sub2",children:(0,i.jsxs)("div",{className:"jsx-2735104876 container-custom",children:[(0,i.jsx)("img",{src:"./images/service-customizing.png",className:"jsx-2735104876 img-service-custom"}),(0,i.jsxs)("div",{className:"jsx-2735104876 custom-doc",children:[(0,i.jsx)("div",{className:"jsx-2735104876 doc-head",children:"CUSTOMIZING"}),(0,i.jsx)("div",{className:"jsx-2735104876 doc-title",children:"\uace0\uac1d \ub9de\ucda4\ud615 \uc11c\ube44\uc2a4 \uc81c\uacf5"}),(0,i.jsxs)("div",{className:"jsx-2735104876 doc-sub",children:["\uc778\ud3ec\uc9c0\uc544\ub294 \ub300\uc6a9\ub7c9 \ub370\uc774\ud130 \ucc98\ub9ac \ubc0f \uad00\ub9ac \ub178\ud558\uc6b0\uc640 AI \uc54c\uace0\ub9ac\uc998 \ud1b5\ud569 \uae30\uc220\ub825\uc73c\ub85c",(0,i.jsx)("br",{className:"jsx-2735104876"}),"\uace0\uac1d\uc5d0\uac8c \uac00\uc7a5 \uc54c\ub9de\uc740 \uc194\ub8e8\uc158\uc744 \uc81c\uacf5\ud569\ub2c8\ub2e4. ",(0,i.jsx)("br",{className:"jsx-2735104876"}),(0,i.jsx)("br",{className:"jsx-2735104876"}),"\uc790\uccb4 \uac1c\ubc1c\ud55c \ud50c\ub85c\uc6b0 \uc5d4\uc9c4\uacfc \uc704\uc82f \ub300\uc2dc\ubcf4\ub4dc\ub294 \ub370\uc774\ud130\ub97c \uc27d\uac8c \ubd84\uc11d\ud558\uace0 \ud6a8\uc728\uc801\uc778 \uad00\ub9ac\uac00",(0,i.jsx)("br",{className:"jsx-2735104876"}),"\uac00\ub2a5\ud558\uac8c \ud558\uba70 \uc0ac\uc6a9\uc790 \ub9de\ucda4\ud615 \ud654\uba74 \uad6c\uc131\uc740 \uc81c\uc870 \uc124\ube44\ub4e4\uc5d0 \ub300\ud55c \uc9c4\ub2e8 \ubc0f \uc608\uce21,",(0,i.jsx)("br",{className:"jsx-2735104876"}),"\uc9c0\ub2a5\ud615 \uc6d0\uaca9 \uad00\uc81c\uc640 \uc790\ub3d9 \uc81c\uc5b4 \ub4f1 \ub9ce\uc740 \ubc29\uba74\uc5d0\uc11c \ud65c\uc6a9\ub429\ub2c8\ub2e4."]})]})]})}),(0,i.jsxs)("section",{className:"jsx-2735104876 section-partner",children:[(0,i.jsx)("div",{className:"jsx-2735104876 doc-head",children:"PARTNERS"}),(0,i.jsx)("div",{className:"jsx-2735104876 doc-title",children:"\uc778\ud3ec\uc9c0\uc544\uc640 \ud568\uaed8"}),(0,i.jsxs)("div",{className:"jsx-2735104876 container-partner",children:[(0,i.jsx)("img",{src:"./images/partner-kangwonLand.png",className:"jsx-2735104876 img-partner"}),(0,i.jsx)("img",{src:"./images/partner-hyundaiYachts.png",className:"jsx-2735104876 img-partner"}),(0,i.jsx)("img",{src:"./images/partner-kdn.png",className:"jsx-2735104876 img-partner"}),(0,i.jsx)("img",{src:"./images/partner-coweaver.png",className:"jsx-2735104876 img-partner"}),(0,i.jsx)("img",{src:"./images/partner-wappLab.png",className:"jsx-2735104876 img-partner"}),(0,i.jsx)("img",{src:"./images/partner-cslee.png",className:"jsx-2735104876 img-partner"}),(0,i.jsx)("img",{src:"./images/partner-futureICT.png",className:"jsx-2735104876 img-partner"}),(0,i.jsx)("img",{src:"./images/partner-nkia.png",className:"jsx-2735104876 img-partner"})]})]})]})}},3922:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/service",function(){return n(3201)}])}},function(e){e.O(0,[988,774,888,179],(function(){return t=3922,e(e.s=t);var t}));var t=e.O();_N_E=t}]);