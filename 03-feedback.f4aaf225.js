function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o=/^\s+|\s+$/g,r=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,u=/^0o[0-7]+$/i,a=parseInt,f="object"==typeof n&&n&&n.Object===Object&&n,c="object"==typeof self&&self&&self.Object===Object&&self,l=f||c||Function("return this")(),s=Object.prototype.toString,d=Math.max,v=Math.min,g=function(){return l.Date.now()};function p(e,t,n){var o,r,i,u,a,f,c=0,l=!1,s=!1,p=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function b(t){var n=o,i=r;return o=r=void 0,c=t,u=e.apply(i,n)}function j(e){return c=e,a=setTimeout(h,t),l?b(e):u}function T(e){var n=e-f;return void 0===f||n>=t||n<0||s&&e-c>=i}function h(){var e=g();if(T(e))return w(e);a=setTimeout(h,function(e){var n=t-(e-f);return s?v(n,i-(e-c)):n}(e))}function w(e){return a=void 0,p&&o?b(e):(o=r=void 0,u)}function x(){var e=g(),n=T(e);if(o=arguments,r=this,f=e,n){if(void 0===a)return j(f);if(s)return a=setTimeout(h,t),b(f)}return void 0===a&&(a=setTimeout(h,t)),u}return t=y(t)||0,m(n)&&(l=!!n.leading,i=(s="maxWait"in n)?d(y(n.maxWait)||0,t):i,p="trailing"in n?!!n.trailing:p),x.cancel=function(){void 0!==a&&clearTimeout(a),c=0,o=f=r=a=void 0},x.flush=function(){return void 0===a?u:w(g())},x}function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==s.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=i.test(e);return n||u.test(e)?a(e.slice(2),n?2:8):r.test(e)?NaN:+e}t=function(e,t,n){var o=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return m(n)&&(o="leading"in n?!!n.leading:o,r="trailing"in n?!!n.trailing:r),p(e,t,{leading:o,maxWait:t,trailing:r})};const b=document.querySelector(".feedback-form"),j=document.querySelector("input");document.querySelector("textarea");b.addEventListener("submit",(function(e){e.preventDefault(),e.currentTarget.reset(),localStorage.removeItem("feedback-form-state")})),j.addEventListener("input",e(t)((function(e){localStorage.setItem("feedback-form-state",e.target.value),console.log(e.target.value)}),500)),b.addEventListener("input",(function(e){console.log(e.target.value)})),function(){const e=localStorage.getItem("feedback-form-state");console.log(e),e&&(console.log("yes"),j.value=e)}();
//# sourceMappingURL=03-feedback.f4aaf225.js.map
