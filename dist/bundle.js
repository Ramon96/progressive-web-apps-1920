!function(e){var n={};function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:r})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(t.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var o in e)t.d(r,o,function(n){return e[n]}.bind(null,o));return r},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=0)}([function(e,n,t){"use strict";t.r(n);var r=function(){caches.open("pwa-cache25").then(e=>e.keys().then(e=>e)).then(e=>e.filter(e=>{if(!(e.url.includes(".png")||e.url.includes(".css")||e.url.includes(".json")||e.url.includes(".js")))return e.url})).then(e=>{const n=document.getElementById("url");e.map(e=>{console.log(e.url);const t=document.createElement("li");t.innerHTML=`<a href="${e.url}">${e.url}</a>`,n.appendChild(t)})})};!function(){const e=e=>{const t=n.value;fetch(window.location.href+"&champion="+t+"&pwa=true").then(e=>e.text()).then(e=>{document.querySelector("main").innerHTML=e})},n=document.getElementsByTagName("select")[0],t=document.querySelector("#filtersubmit"),o=document.getElementById("share"),l=document.getElementById("onlinestatus");if(o){const e=window.document.title,n=window.document.location.href;navigator.share&&(o.classList.remove("hidden"),o.addEventListener("click",()=>{navigator.share({title:`${e}`,url:`${n}`}).then(()=>{console.log("Share succes")})}))}t&&t.classList.add("hidden"),n&&n.addEventListener("change",e),navigator.onLine?console.log("online"):(console.log("offline"),l.classList.add("visible")),document.querySelector("#url")&&r()}()}]);