(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[345],{2711:function(e){var t;t=function(){return function(e){function t(o){if(a[o])return a[o].exports;var n=a[o]={exports:{},id:o,loaded:!1};return e[o].call(n.exports,n,n.exports,t),n.loaded=!0,n.exports}var a={};return t.m=e,t.c=a,t.p="dist/",t(0)}([function(e,t,a){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o])}return e},i=(o(a(1)),a(6)),s=o(i),r=o(a(7)),c=o(a(8)),d=o(a(9)),l=o(a(10)),u=o(a(11)),b=o(a(14)),f=[],m=!1,p={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},v=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e&&(m=!0),m)return f=(0,u.default)(f,p),(0,l.default)(f,p.once),f},x=function(){f=(0,b.default)(),v()},h=function(){f.forEach(function(e,t){e.node.removeAttribute("data-aos"),e.node.removeAttribute("data-aos-easing"),e.node.removeAttribute("data-aos-duration"),e.node.removeAttribute("data-aos-delay")})};e.exports={init:function(e){p=n(p,e),f=(0,b.default)();var t,a=document.all&&!window.atob;return!0===(t=p.disable)||"mobile"===t&&d.default.mobile()||"phone"===t&&d.default.phone()||"tablet"===t&&d.default.tablet()||"function"==typeof t&&!0===t()||a?h():(p.disableMutationObserver||c.default.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),p.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",p.easing),document.querySelector("body").setAttribute("data-aos-duration",p.duration),document.querySelector("body").setAttribute("data-aos-delay",p.delay),"DOMContentLoaded"===p.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1?v(!0):"load"===p.startEvent?window.addEventListener(p.startEvent,function(){v(!0)}):document.addEventListener(p.startEvent,function(){v(!0)}),window.addEventListener("resize",(0,r.default)(v,p.debounceDelay,!0)),window.addEventListener("orientationchange",(0,r.default)(v,p.debounceDelay,!0)),window.addEventListener("scroll",(0,s.default)(function(){(0,l.default)(f,p.once)},p.throttleDelay)),p.disableMutationObserver||c.default.ready("[data-aos]",x),f)},refresh:v,refreshHard:x}},function(e,t){},,,,,function(e,t){(function(t){"use strict";function a(e){var t=void 0===e?"undefined":n(e);return!!e&&("object"==t||"function"==t)}function o(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":n(t))||t&&"object"==(void 0===t?"undefined":n(t))&&v.call(t)==r)return s;if(a(e)){var t,o="function"==typeof e.valueOf?e.valueOf():e;e=a(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;var i=l.test(e=e.replace(c,""));return i||u.test(e)?b(e.slice(2),i?2:8):d.test(e)?s:+e}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i="Expected a function",s=NaN,r="[object Symbol]",c=/^\s+|\s+$/g,d=/^[-+]0x[0-9a-f]+$/i,l=/^0b[01]+$/i,u=/^0o[0-7]+$/i,b=parseInt,f="object"==(void 0===t?"undefined":n(t))&&t&&t.Object===Object&&t,m="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,p=f||m||Function("return this")(),v=Object.prototype.toString,x=Math.max,h=Math.min,j=function(){return p.Date.now()};e.exports=function(e,t,n){var s=!0,r=!0;if("function"!=typeof e)throw TypeError(i);return a(n)&&(s="leading"in n?!!n.leading:s,r="trailing"in n?!!n.trailing:r),function(e,t,n){function s(t){var a=u,o=b;return u=b=void 0,g=t,m=e.apply(o,a)}function r(e){var a=e-v,o=e-g;return void 0===v||a>=t||a<0||w&&o>=f}function c(){var e,a,o,n=j();return r(n)?d(n):void(p=setTimeout(c,(e=n-v,a=n-g,o=t-e,w?h(o,f-a):o)))}function d(e){return p=void 0,N&&u?s(e):(u=b=void 0,m)}function l(){var e,a=j(),o=r(a);if(u=arguments,b=this,v=a,o){if(void 0===p)return g=e=v,p=setTimeout(c,t),y?s(e):m;if(w)return p=setTimeout(c,t),s(v)}return void 0===p&&(p=setTimeout(c,t)),m}var u,b,f,m,p,v,g=0,y=!1,w=!1,N=!0;if("function"!=typeof e)throw TypeError(i);return t=o(t)||0,a(n)&&(y=!!n.leading,f=(w="maxWait"in n)?x(o(n.maxWait)||0,t):f,N="trailing"in n?!!n.trailing:N),l.cancel=function(){void 0!==p&&clearTimeout(p),g=0,u=v=b=p=void 0},l.flush=function(){return void 0===p?m:d(j())},l}(e,t,{leading:s,maxWait:t,trailing:r})}}).call(t,function(){return this}())},function(e,t){(function(t){"use strict";function a(e){var t=void 0===e?"undefined":n(e);return!!e&&("object"==t||"function"==t)}function o(e){if("number"==typeof e)return e;if("symbol"==(void 0===(t=e)?"undefined":n(t))||t&&"object"==(void 0===t?"undefined":n(t))&&p.call(t)==s)return i;if(a(e)){var t,o="function"==typeof e.valueOf?e.valueOf():e;e=a(o)?o+"":o}if("string"!=typeof e)return 0===e?e:+e;var b=d.test(e=e.replace(r,""));return b||l.test(e)?u(e.slice(2),b?2:8):c.test(e)?i:+e}var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=NaN,s="[object Symbol]",r=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,d=/^0b[01]+$/i,l=/^0o[0-7]+$/i,u=parseInt,b="object"==(void 0===t?"undefined":n(t))&&t&&t.Object===Object&&t,f="object"==("undefined"==typeof self?"undefined":n(self))&&self&&self.Object===Object&&self,m=b||f||Function("return this")(),p=Object.prototype.toString,v=Math.max,x=Math.min,h=function(){return m.Date.now()};e.exports=function(e,t,n){function i(t){var a=l,o=u;return l=u=void 0,j=t,f=e.apply(o,a)}function s(e){var a=e-p,o=e-j;return void 0===p||a>=t||a<0||y&&o>=b}function r(){var e,a,o,n=h();return s(n)?c(n):void(m=setTimeout(r,(e=n-p,a=n-j,o=t-e,y?x(o,b-a):o)))}function c(e){return m=void 0,w&&l?i(e):(l=u=void 0,f)}function d(){var e,a=h(),o=s(a);if(l=arguments,u=this,p=a,o){if(void 0===m)return j=e=p,m=setTimeout(r,t),g?i(e):f;if(y)return m=setTimeout(r,t),i(p)}return void 0===m&&(m=setTimeout(r,t)),f}var l,u,b,f,m,p,j=0,g=!1,y=!1,w=!0;if("function"!=typeof e)throw TypeError("Expected a function");return t=o(t)||0,a(n)&&(g=!!n.leading,b=(y="maxWait"in n)?v(o(n.maxWait)||0,t):b,w="trailing"in n?!!n.trailing:w),d.cancel=function(){void 0!==m&&clearTimeout(m),j=0,l=p=u=m=void 0},d.flush=function(){return void 0===m?f:c(h())},d}}).call(t,function(){return this}())},function(e,t){"use strict";function a(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(e){e&&e.forEach(function(e){var t=Array.prototype.slice.call(e.addedNodes),a=Array.prototype.slice.call(e.removedNodes);if(function e(t){var a=void 0,o=void 0;for(a=0;a<t.length;a+=1)if((o=t[a]).dataset&&o.dataset.aos||o.children&&e(o.children))return!0;return!1}(t.concat(a)))return n()})}Object.defineProperty(t,"__esModule",{value:!0});var n=function(){};t.default={isSupported:function(){return!!a()},ready:function(e,t){var i=window.document,s=new(a())(o);n=t,s.observe(i.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}}},function(e,t){"use strict";function a(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var a=0;a<t.length;a++){var o=t[a];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,a,o){return a&&e(t.prototype,a),o&&e(t,o),t}}(),n=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,i=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,s=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,r=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,c=function(){function e(){!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,e)}return o(e,[{key:"phone",value:function(){var e=a();return!(!n.test(e)&&!i.test(e.substr(0,4)))}},{key:"mobile",value:function(){var e=a();return!(!s.test(e)&&!r.test(e.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),e}();t.default=new c},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=function(e,t,a){var o=e.node.getAttribute("data-aos-once");t>e.position?e.node.classList.add("aos-animate"):void 0===o||"false"!==o&&(a||"true"===o)||e.node.classList.remove("aos-animate")};t.default=function(e,t){var o=window.pageYOffset,n=window.innerHeight;e.forEach(function(e,i){a(e,n+o,t)})}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=(o=a(12))&&o.__esModule?o:{default:o};t.default=function(e,t){return e.forEach(function(e,a){e.node.classList.add("aos-init"),e.position=(0,n.default)(e.node,t.offset)}),e}},function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o,n=(o=a(13))&&o.__esModule?o:{default:o};t.default=function(e,t){var a=0,o=0,i=window.innerHeight,s={offset:e.getAttribute("data-aos-offset"),anchor:e.getAttribute("data-aos-anchor"),anchorPlacement:e.getAttribute("data-aos-anchor-placement")};switch(s.offset&&!isNaN(s.offset)&&(o=parseInt(s.offset)),s.anchor&&document.querySelectorAll(s.anchor)&&(e=document.querySelectorAll(s.anchor)[0]),a=(0,n.default)(e).top,s.anchorPlacement){case"top-bottom":break;case"center-bottom":a+=e.offsetHeight/2;break;case"bottom-bottom":a+=e.offsetHeight;break;case"top-center":a+=i/2;break;case"bottom-center":a+=i/2+e.offsetHeight;break;case"center-center":a+=i/2+e.offsetHeight/2;break;case"top-top":a+=i;break;case"bottom-top":a+=e.offsetHeight+i;break;case"center-top":a+=e.offsetHeight/2+i}return s.anchorPlacement||s.offset||isNaN(t)||(o=t),a+o}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){for(var t=0,a=0;e&&!isNaN(e.offsetLeft)&&!isNaN(e.offsetTop);)t+=e.offsetLeft-("BODY"!=e.tagName?e.scrollLeft:0),a+=e.offsetTop-("BODY"!=e.tagName?e.scrollTop:0),e=e.offsetParent;return{top:a,left:t}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return e=e||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(e,function(e){return{node:e}})}}])},e.exports=t()},5353:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product",function(){return a(823)}])},823:function(e,t,a){"use strict";a.r(t);var o=a(5893),n=a(1822),i=a.n(n),s=a(2711),r=a.n(s),c=a(7294);t.default=()=>((0,c.useEffect)(()=>{r().init({})},[]),(0,o.jsxs)("div",{className:"jsx-68b81b097adbfac6",children:[(0,o.jsx)(i(),{id:"68b81b097adbfac6",children:"{}#menu-product{color:rgb(15,167,172)}"}),(0,o.jsx)("section",{className:"jsx-68b81b097adbfac6 product-main",children:(0,o.jsx)("div",{className:"jsx-68b81b097adbfac6 scroll-slide-product"})}),(0,o.jsx)("section",{className:"jsx-68b81b097adbfac6 product-sub1",children:(0,o.jsxs)("div",{className:"jsx-68b81b097adbfac6 sub1-doc",children:["Flomon은 기업의 다양한 장치와 외부 데이터들을 안전하게 연결하여 데이터를 수집하고 모니터링하며, 궁극적으로 기업의 새로운 인사이트를 얻을 수 있도록 지원하는 지능형 IoT 플랫폼입니다.",(0,o.jsx)("br",{className:"jsx-68b81b097adbfac6"}),"브라우저 기반 Flow Engine과 간편한 AI 진단 설계를 통해 복잡한 IT, IoT 환경에 빠르게 적용시켜 끊임없이 변화하는 비즈니스 요구사항에 완벽하게 적응할 수 있습니다."]})}),(0,o.jsxs)("section",{className:"jsx-68b81b097adbfac6 product-sub2",children:[(0,o.jsx)("div",{className:"jsx-68b81b097adbfac6 container-flomon-symbol",children:(0,o.jsx)("img",{src:"/images/flomon-symbol-gray.png",className:"jsx-68b81b097adbfac6 flomon-symbol"})}),(0,o.jsxs)("div",{className:"jsx-68b81b097adbfac6 sub2-doc-connect",children:[(0,o.jsx)("img",{src:"/images/ic-connect.png",className:"jsx-68b81b097adbfac6 sub2-icon"}),(0,o.jsx)("div",{className:"jsx-68b81b097adbfac6 doc-head",children:"CONNECTIVITY"}),(0,o.jsx)("div",{className:"jsx-68b81b097adbfac6 doc-title",children:"연결은 쉽게, 처리는 빠르게"}),(0,o.jsxs)("div",{className:"jsx-68b81b097adbfac6 doc-sub",children:["Flomon은 산업현장에 존재하는 인터페이스와의 연결을",(0,o.jsx)("br",{className:"jsx-68b81b097adbfac6"}),"쉽게 하기 위해 다양한 내장된 노드를 제공합니다.",(0,o.jsx)("br",{className:"jsx-68b81b097adbfac6"}),"노드를 이용해 장치와 데이터를 쉽게 연결하고",(0,o.jsx)("br",{className:"jsx-68b81b097adbfac6"}),"수집부터 분석, AI 진단까지 빠른 처리를 할 수 있습니다."]})]}),(0,o.jsxs)("div",{className:"jsx-68b81b097adbfac6 sub2-doc-widget",children:[(0,o.jsx)("img",{src:"/images/ic-widget.png",className:"jsx-68b81b097adbfac6 sub2-icon"}),(0,o.jsx)("div",{className:"jsx-68b81b097adbfac6 doc-head",children:"WIDGET DASHBOARD"}),(0,o.jsx)("div",{className:"jsx-68b81b097adbfac6 doc-title",children:"데이터는 직관적으로"}),(0,o.jsxs)("div",{className:"jsx-68b81b097adbfac6 doc-sub",children:["위젯 기반의 대시보드는 고급 데이터 분석을 손쉽게 할 수 ",(0,o.jsx)("br",{className:"jsx-68b81b097adbfac6"}),"있도록 도와줍니다. AI 분석 결과와 실시간으로 변하는 데이터를",(0,o.jsx)("br",{className:"jsx-68b81b097adbfac6"}),"시각화 하여 많은 양의 데이터를 쉽게 이해할 수 있습니다."]})]}),(0,o.jsxs)("div",{className:"jsx-68b81b097adbfac6 sub2-doc-noti",children:[(0,o.jsx)("img",{src:"/images/ic-noti.png",className:"jsx-68b81b097adbfac6 sub2-icon"}),(0,o.jsx)("div",{className:"jsx-68b81b097adbfac6 doc-head",children:"NOTIFICATION"}),(0,o.jsx)("div",{className:"jsx-68b81b097adbfac6 doc-title",children:"알림도 실시간으로"}),(0,o.jsxs)("div",{className:"jsx-68b81b097adbfac6 doc-sub",children:["기본적으로 탑재된 알림 관리 기능은 사용자가 쉽게",(0,o.jsx)("br",{className:"jsx-68b81b097adbfac6"})," 설정하여 다양한 도구를 통해 실시간 통지를 받을 수 있습니다.",(0,o.jsx)("br",{className:"jsx-68b81b097adbfac6"}),"또한, 서비스 관점의 알림을 정의할 수 있도록하여",(0,o.jsx)("br",{className:"jsx-68b81b097adbfac6"}),"복잡한 상황의 알림도 설정할 수 있습니다."]})]}),(0,o.jsxs)("div",{className:"jsx-68b81b097adbfac6 sub2-doc-set",children:[(0,o.jsx)("img",{src:"/images/ic-setting.png",className:"jsx-68b81b097adbfac6 sub2-icon"}),(0,o.jsx)("div",{className:"jsx-68b81b097adbfac6 doc-head",children:"SETTING"}),(0,o.jsx)("div",{className:"jsx-68b81b097adbfac6 doc-title",children:"기타 관리"}),(0,o.jsxs)("div",{className:"jsx-68b81b097adbfac6 doc-sub",children:["Flomon은 사용자에 대한 권한 및 보안과 같은 추가적인 관리",(0,o.jsx)("br",{className:"jsx-68b81b097adbfac6"}),"기능을 기본적으로 내장하고 있습니다. 라이선스 관리를",(0,o.jsx)("br",{className:"jsx-68b81b097adbfac6"}),"포함한 시스템 설정부터 사용자 권한을 부여하는 접근제어까지",(0,o.jsx)("br",{className:"jsx-68b81b097adbfac6"}),"다양한 설정이 가능합니다."]})]})]}),(0,o.jsxs)("section",{className:"jsx-68b81b097adbfac6 product-sub3",children:[(0,o.jsx)("div",{className:"jsx-68b81b097adbfac6 container-monitor-video",children:(0,o.jsx)("video",{src:"./videos/product-ex.mp4",muted:!0,autoPlay:!0,loop:!0,playsInline:!0,className:"jsx-68b81b097adbfac6 monitor-video"})}),(0,o.jsxs)("div",{className:"jsx-68b81b097adbfac6 container-sub3-doc",children:[(0,o.jsxs)("div",{className:"jsx-68b81b097adbfac6 sub3-doc-flow",children:[(0,o.jsx)("div",{className:"jsx-68b81b097adbfac6 doc-head",children:"FLOW ENGINE"}),(0,o.jsx)("div",{className:"jsx-68b81b097adbfac6 doc-title",children:"직접 만드는 FLOW"}),(0,o.jsx)("div",{className:"jsx-68b81b097adbfac6 doc-sub",children:"Flomon에 탑재되어 있는 Flow Engine은 브라우저에서 코딩없이 데이터 가공 과정을 작성할 수 있습니다. 내장된 노드들을 이용하여 다양한 데이터를 수집하고, 이를 변환하여 사용자가 쉽게 분석할 수 있도록 도와줍니다. 또한 Jupyter Notebook이 탑재되어 데이터를 쉽게 가공할 수 있으며, 내장된 AI 노드를 통해 다양한 알고리즘을 적용하여 다른 AI 서비스와 융\xb7복합 할 수 있습니다."})]}),(0,o.jsxs)("div",{className:"jsx-68b81b097adbfac6 sub3-doc-monitor",children:[(0,o.jsx)("div",{className:"jsx-68b81b097adbfac6 doc-head",children:"MONITORING"}),(0,o.jsx)("div",{className:"jsx-68b81b097adbfac6 doc-title",children:"실시간 모니터링"}),(0,o.jsx)("div",{className:"jsx-68b81b097adbfac6 doc-sub",children:"쉽게 데이터 그룹을 관리하고 성능, 비용, 알람 정보 등을 조회할 수 있습니다. 초 단위부터 연 단위까지 모니터링 할 기간을 유연하게 선택하여 빠르게 데이터에 접근할 수 있고, 다른 화면으로 이동하여도 고정되어 데이터 분석 연속성을 보장합니다."})]})]})]}),(0,o.jsxs)("section",{className:"jsx-68b81b097adbfac6 product-end",children:[(0,o.jsx)("img",{src:"/images/flomon-color.png",className:"jsx-68b81b097adbfac6 logo-flomon-end"}),(0,o.jsx)("p",{className:"jsx-68b81b097adbfac6",children:"데이터를 효율적으로 관리해보세요."})]})]}))}},function(e){e.O(0,[822,888,774,179],function(){return e(e.s=5353)}),_N_E=e.O()}]);