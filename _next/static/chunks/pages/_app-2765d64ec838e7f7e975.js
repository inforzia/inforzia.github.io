(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{7544:function(e,t,n){e.exports=n(3857)},2167:function(e,t,n){"use strict";var r=n(3038),o=n(862);t.default=void 0;var c=o(n(7294)),i=n(9414),u=n(4651),a=n(7426),l={};function s(e,t,n,r){if(e&&(0,i.isLocalURL)(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;l[t+"%"+n+(o?"%"+o:"")]=!0}}var f=function(e){var t,n=!1!==e.prefetch,o=(0,u.useRouter)(),f=c.default.useMemo((function(){var t=(0,i.resolveHref)(o,e.href,!0),n=r(t,2),c=n[0],u=n[1];return{href:c,as:e.as?(0,i.resolveHref)(o,e.as):u||c}}),[o,e.href,e.as]),p=f.href,d=f.as,h=e.children,m=e.replace,v=e.shallow,y=e.scroll,b=e.locale;"string"===typeof h&&(h=c.default.createElement("a",null,h));var j=(t=c.Children.only(h))&&"object"===typeof t&&t.ref,g=(0,a.useIntersection)({rootMargin:"200px"}),x=r(g,2),w=x[0],O=x[1],P=c.default.useCallback((function(e){w(e),j&&("function"===typeof j?j(e):"object"===typeof j&&(j.current=e))}),[j,w]);(0,c.useEffect)((function(){var e=O&&n&&(0,i.isLocalURL)(p),t="undefined"!==typeof b?b:o&&o.locale,r=l[p+"%"+d+(t?"%"+t:"")];e&&!r&&s(o,p,d,{locale:t})}),[d,p,O,b,n,o]);var N={ref:P,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,c,u,a){("A"!==e.currentTarget.nodeName||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,i.isLocalURL)(n))&&(e.preventDefault(),null==u&&r.indexOf("#")>=0&&(u=!1),t[o?"replace":"push"](n,r,{shallow:c,locale:a,scroll:u}))}(e,o,p,d,m,v,y,b)},onMouseEnter:function(e){(0,i.isLocalURL)(p)&&(t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),s(o,p,d,{priority:!0}))}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var E="undefined"!==typeof b?b:o&&o.locale,_=o&&o.isLocaleDomain&&(0,i.getDomainLocale)(d,E,o&&o.locales,o&&o.domainLocales);N.href=_||(0,i.addBasePath)((0,i.addLocale)(d,E,o&&o.defaultLocale))}return c.default.cloneElement(t,N)};t.default=f},7426:function(e,t,n){"use strict";var r=n(3038);t.__esModule=!0,t.useIntersection=function(e){var t=e.rootMargin,n=e.disabled||!i,a=(0,o.useRef)(),l=(0,o.useState)(!1),s=r(l,2),f=s[0],p=s[1],d=(0,o.useCallback)((function(e){a.current&&(a.current(),a.current=void 0),n||f||e&&e.tagName&&(a.current=function(e,t,n){var r=function(e){var t=e.rootMargin||"",n=u.get(t);if(n)return n;var r=new Map,o=new IntersectionObserver((function(e){e.forEach((function(e){var t=r.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return u.set(t,n={id:t,observer:o,elements:r}),n}(n),o=r.id,c=r.observer,i=r.elements;return i.set(e,t),c.observe(e),function(){i.delete(e),c.unobserve(e),0===i.size&&(c.disconnect(),u.delete(o))}}(e,(function(e){return e&&p(e)}),{rootMargin:t}))}),[n,t,f]);return(0,o.useEffect)((function(){if(!i&&!f){var e=(0,c.requestIdleCallback)((function(){return p(!0)}));return function(){return(0,c.cancelIdleCallback)(e)}}}),[f]),[d,f]};var o=n(7294),c=n(3447),i="undefined"!==typeof IntersectionObserver;var u=new Map},3857:function(e,t,n){"use strict";var r=n(7757),o=n(4575),c=n(3913),i=n(2205),u=n(8585),a=n(9754),l=n(8926);function s(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=a(e);if(t){var o=a(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return u(this,n)}}var f=n(5318);t.default=void 0;var p=f(n(7294)),d=n(4755);function h(e){return m.apply(this,arguments)}function m(){return(m=l(r.mark((function e(t){var n,o,c;return r.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.Component,o=t.ctx,e.next=3,(0,d.loadGetInitialProps)(n,o);case 3:return c=e.sent,e.abrupt("return",{pageProps:c});case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}d.AppInitialProps,d.NextWebVitalsMetric;var v=function(e){i(n,e);var t=s(n);function n(){return o(this,n),t.apply(this,arguments)}return c(n,[{key:"render",value:function(){var e=this.props,t=e.Component,n=e.pageProps;return p.default.createElement(t,n)}}]),n}(p.default.Component);t.default=v,v.origGetInitialProps=h,v.getInitialProps=h},7166:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return x}});var r=n(5893);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return!t||"object"!==l(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var p=n(7544),d=n(1664),h=n(1163),m=n(7294),v=function(){var e=(0,m.useState)(0),t=e[0],n=e[1],o=function(){n(window.scrollY||document.documentElement.scrollTop)};return(0,m.useEffect)((function(){window.addEventListener("scroll",o)})),(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("header",{className:t<100?"":"header-change",children:(0,r.jsxs)("div",{className:"wrapper-header",children:[(0,r.jsx)("img",{className:"logo-header",src:t<100?"./images/logo-inforzia-w.png":"./images/logo-inforzia.png",onClick:function(){return h.default.push("/")}}),(0,r.jsx)("nav",{className:"menu",children:(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{className:"menu-item",children:(0,r.jsx)(d.default,{href:"/",children:(0,r.jsx)("a",{className:t<100?"menu-color-w":"menu-color",id:"menu-index",children:"\ud648"})})}),(0,r.jsx)("li",{className:"menu-item",children:(0,r.jsx)(d.default,{href:"/introduce",children:(0,r.jsx)("a",{className:t<100?"menu-color-w":"menu-color",id:"menu-introduce",children:"\uc778\ud3ec\uc9c0\uc544"})})}),(0,r.jsx)("li",{className:"menu-item",children:(0,r.jsx)(d.default,{href:"/product",children:(0,r.jsx)("a",{className:t<100?"menu-color-w":"menu-color",id:"menu-product",children:"\uc81c\ud488"})})}),(0,r.jsx)("li",{className:"menu-item",children:(0,r.jsx)(d.default,{href:"/service",children:(0,r.jsx)("a",{className:t<100?"menu-color-w":"menu-color",id:"menu-service",children:"\uc11c\ube44\uc2a4"})})})]})})]})})})},y=function(){return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("footer",{children:(0,r.jsxs)("div",{className:"wrapper-footer",children:[(0,r.jsx)("div",{className:"wrapper-footer-logo",children:(0,r.jsx)("img",{className:"footer-logo",src:"./images/logo.png"})}),(0,r.jsx)("div",{className:"info-footer",children:(0,r.jsxs)("ul",{className:"info-list",children:[(0,r.jsx)("li",{children:"(\uc8fc)\uc778\ud3ec\uc9c0\uc544"}),(0,r.jsx)("li",{children:(0,r.jsx)("address",{className:"company-address",children:"\uc8fc\uc18c : \uacbd\uae30\ub3c4 \uc218\uc6d0\uc2dc \uc601\ud1b5\uad6c \uad11\uad50\ub85c 107, \ubcf4\uc721\ub3d9 107\ud638"})}),(0,r.jsx)("li",{children:"\ub300\ud45c\uc804\ud654 : 02-6959-2540"}),(0,r.jsxs)("li",{children:["\uc774\uba54\uc77c :"," ",(0,r.jsx)("a",{href:"mailto:inforzia@inforzia.io",className:"mail-link",children:"inforzia@inforzia.io"})]}),(0,r.jsx)("li",{id:"copyright",children:"Copyright 2021 Inforzia, Corp. All Rights Reserved."})]})})]})})})};n(7306),n(9201),n(7880),n(3278),n(7158),n(3425),n(7244),n(8325);function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function j(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function g(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=f(e);if(t){var o=f(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return s(this,n)}}var x=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}(s,e);var t,n,o,l=g(s);function s(){return i(this,s),l.apply(this,arguments)}return t=s,(n=[{key:"render",value:function(){var e=this.props,t=e.Component,n=c(e,["Component"]);return(0,r.jsxs)("div",{children:[(0,r.jsx)(v,{}),(0,r.jsx)(t,j({},n)),(0,r.jsx)(y,{})]})}}])&&u(t.prototype,n),o&&u(t,o),s}(p.default)},6363:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n(7166)}])},7306:function(){},7880:function(){},3425:function(){},9201:function(){},3278:function(){},7158:function(){},8325:function(){},7244:function(){},1664:function(e,t,n){e.exports=n(2167)},1163:function(e,t,n){e.exports=n(4651)}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6363),t(4651)}));var n=e.O();_N_E=n}]);