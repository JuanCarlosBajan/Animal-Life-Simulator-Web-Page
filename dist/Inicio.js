(()=>{"use strict";var n={140:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"footer {\r\n  width: 100%;\r\n  height: 70px;\r\n  margin-top: -0px;\r\n  background-color: #283618;\r\n  color: #fefae0;\r\n  font-family: Arial;\r\n  font-size: 20px;\r\n  font-weight: 900;\r\n  letter-spacing: -1px;\r\n  text-transform: uppercase;\r\n  text-align: center;\r\n  position: fixed;\r\n  bottom: 0;\r\n}\r\n",""]);const c=a},34:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"header{\r\n    width: 100%;\r\n    height: 70px;\r\n    margin-top: -0px;\r\n    background-color: #283618;\r\n    position: fixed;\r\n    top: 0;\r\n}\r\n\r\n.link {\r\n    color: #fefae0;\r\n    width: 150px;\r\n    font-family: Arial;\r\n    margin: 0 auto 0 auto;\r\n    font-size: 45px;\r\n    font-weight: 900;\r\n    letter-spacing: -2px;\r\n    text-transform: uppercase;\r\n    cursor: pointer;\r\n}",""]);const c=a},366:(n,r,e)=>{e.d(r,{Z:()=>c});var t=e(81),o=e.n(t),i=e(645),a=e.n(i)()(o());a.push([n.id,"html {\r\n  scroll-behavior: smooth;\r\n}\r\n\r\nbody{\r\n    background: #fefae0;\r\n    display: felx;\r\n    margin: 0px;\r\n    align-items: center;\r\n    justify-content: center;\r\n}\r\n\r\n\r\n.perspective-text {\r\n    color: #fefae0;\r\n    width: 425px;\r\n    height: 315px;\r\n    font-family: Arial;\r\n    font-size: 58px;\r\n    font-weight: 900;\r\n    letter-spacing: -2px;\r\n    text-transform: uppercase;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    padding-top: 20%;\r\n    z-index: -1;\r\n\r\n  }\r\n  \r\n  .perspective-line {\r\n    position: absolute;\r\n    height: 50px;\r\n    width: 365px;\r\n    overflow: hidden;\r\n    position: relative;\r\n    margin-left: -58px;\r\n    z-index: -1;\r\n  }\r\n  \r\n  p {\r\n    margin: 0;\r\n    height: 50px;\r\n    line-height: 50px;\r\n    transition: all 0.5s ease-in-out;\r\n  }\r\n  \r\n  .perspective-line:nth-child(odd) {\r\n    transform: skew(60deg, -30deg) scaleY(0.667);\r\n    color: #606c38;\r\n    text-align: center; \r\n  }\r\n  \r\n  .perspective-line:nth-child(even) {\r\n    transform: skew(0deg, -30deg) scaleY(1.337);\r\n  }\r\n  \r\n  .perspective-text:hover p {\r\n    transform: translate(0, -50px);\r\n  }\r\n  \r\n  .perspective-line:nth-child(1) {\r\n    left: 29px;\r\n  }\r\n  \r\n  .perspective-line:nth-child(2) {\r\n    left: 58px;\r\n    background: #283618;\r\n    text-align: center; \r\n  }\r\n  \r\n  .perspective-line:nth-child(3) {\r\n    left: 87px;\r\n    background: #fefae0;\r\n  }\r\n  \r\n  .perspective-line:nth-child(4) {\r\n    left: 116px;\r\n    background: #283618;\r\n  }\r\n  \r\n  .perspective-line:nth-child(5) {\r\n    left: 145px;\r\n  }\r\n  \r\n\r\nh1 { color: #606c38; \r\n    font-family: 'Raleway',sans-serif; \r\n    font-size: 62px; \r\n    font-weight: 800; \r\n    line-height: 72px; \r\n    margin: 150px 0 24px; \r\n    text-align: center; \r\n    text-transform: uppercase; \r\n}\r\n.text { color: #606c38;\r\n    font-family: 'Raleway',sans-serif; \r\n    font-size: 18px; \r\n    font-weight: 800; \r\n    line-height: 32px; \r\n    margin: 0 0 10px; \r\n    text-align: center; \r\n    text-transform: uppercase; \r\n}\r\n\r\n.personajes {\r\n  width: auto;\r\n  display: flex;\r\n  justify-content: center;\r\n}\r\n\r\nimg{\r\n  margin: 100px 20px 100px 20px;\r\n}\r\n\r\n.sender{\r\n  cursor: pointer;\r\n}\r\n\r\n",""]);const c=a},645:n=>{n.exports=function(n){var r=[];return r.toString=function(){return this.map((function(r){var e="",t=void 0!==r[5];return r[4]&&(e+="@supports (".concat(r[4],") {")),r[2]&&(e+="@media ".concat(r[2]," {")),t&&(e+="@layer".concat(r[5].length>0?" ".concat(r[5]):""," {")),e+=n(r),t&&(e+="}"),r[2]&&(e+="}"),r[4]&&(e+="}"),e})).join("")},r.i=function(n,e,t,o,i){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(t)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);t&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),e&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=e):p[2]=e),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),r.push(p))}},r}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var r=[];function e(n){for(var e=-1,t=0;t<r.length;t++)if(r[t].identifier===n){e=t;break}return e}function t(n,t){for(var i={},a=[],c=0;c<n.length;c++){var s=n[c],l=t.base?s[0]+t.base:s[0],p=i[l]||0,d="".concat(l," ").concat(p);i[l]=p+1;var u=e(d),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)r[u].references++,r[u].updater(f);else{var h=o(f,t);t.byIndex=c,r.splice(c,0,{identifier:d,updater:h,references:1})}a.push(d)}return a}function o(n,r){var e=r.domAPI(r);return e.update(n),function(r){if(r){if(r.css===n.css&&r.media===n.media&&r.sourceMap===n.sourceMap&&r.supports===n.supports&&r.layer===n.layer)return;e.update(n=r)}else e.remove()}}n.exports=function(n,o){var i=t(n=n||[],o=o||{});return function(n){n=n||[];for(var a=0;a<i.length;a++){var c=e(i[a]);r[c].references--}for(var s=t(n,o),l=0;l<i.length;l++){var p=e(i[l]);0===r[p].references&&(r[p].updater(),r.splice(p,1))}i=s}}},569:n=>{var r={};n.exports=function(n,e){var t=function(n){if(void 0===r[n]){var e=document.querySelector(n);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(n){e=null}r[n]=e}return r[n]}(n);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:n=>{n.exports=function(n){var r=document.createElement("style");return n.setAttributes(r,n.attributes),n.insert(r,n.options),r}},565:(n,r,e)=>{n.exports=function(n){var r=e.nc;r&&n.setAttribute("nonce",r)}},795:n=>{n.exports=function(n){var r=n.insertStyleElement(n);return{update:function(e){!function(n,r,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var i=e.sourceMap;i&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),r.styleTagTransform(t,n,r.options)}(r,n,e)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(r)}}}},589:n=>{n.exports=function(n,r){if(r.styleSheet)r.styleSheet.cssText=n;else{for(;r.firstChild;)r.removeChild(r.firstChild);r.appendChild(document.createTextNode(n))}}},208:(n,r,e)=>{n.exports=e.p+"6444c6c89f826a26300d.png"},524:(n,r,e)=>{n.exports=e.p+"f9894819ea3f6d9ce5b3.png"}},r={};function e(t){var o=r[t];if(void 0!==o)return o.exports;var i=r[t]={id:t,exports:{}};return n[t](i,i.exports,e),i.exports}e.n=n=>{var r=n&&n.__esModule?()=>n.default:()=>n;return e.d(r,{a:r}),r},e.d=(n,r)=>{for(var t in r)e.o(r,t)&&!e.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:r[t]})},e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),e.o=(n,r)=>Object.prototype.hasOwnProperty.call(n,r),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var r=e.g.document;if(!n&&r&&(r.currentScript&&(n=r.currentScript.src),!n)){var t=r.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{var n=e(379),r=e.n(n),t=e(795),o=e.n(t),i=e(569),a=e.n(i),c=e(565),s=e.n(c),l=e(216),p=e.n(l),d=e(589),u=e.n(d),f=e(140),h={};h.styleTagTransform=u(),h.setAttributes=s(),h.insert=a().bind(null,"head"),h.domAPI=o(),h.insertStyleElement=p(),r()(f.Z,h),f.Z&&f.Z.locals&&f.Z.locals;var m=e(34),g={};g.styleTagTransform=u(),g.setAttributes=s(),g.insert=a().bind(null,"head"),g.domAPI=o(),g.insertStyleElement=p(),r()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;var v=e(366),x={};x.styleTagTransform=u(),x.setAttributes=s(),x.insert=a().bind(null,"head"),x.domAPI=o(),x.insertStyleElement=p(),r()(v.Z,x),v.Z&&v.Z.locals&&v.Z.locals,window.onload=function(){document.body.insertAdjacentElement("afterbegin",(()=>{const n=document.createElement("header"),r=document.createElement("div");return r.id="lnk",r.className="link",r.innerHTML="Inicio",n.appendChild(r),r.addEventListener("click",(function(){"./Inicio.html"==window.location.pathname?window.scrollTo(0,700):window.location.replace("./Inicio.html")})),n})()),document.body.insertAdjacentElement("afterend",(()=>{const n=document.createElement("footer");return n.innerHTML="\n        @Copyright Juan Carlos Baján Castro 20109 - All Right Reserved.  \n    ",n})()),document.getElementById("personajes").innerHTML=`<img id="mono" class="sender" src="${e(208)}">\n    <img id="leon" class="sender" src="${e(524)}">`,y()};const y=()=>{document.getElementById("mono").addEventListener("click",(function(){window.location.replace("./Mono.html")})),document.getElementById("leon").addEventListener("click",(function(){window.location.replace("./Leon.html")}))}})()})();