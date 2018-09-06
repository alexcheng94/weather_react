"use strict";var precacheConfig=[["https://alexcheng94.github.io/weather_reactassets/icons/android-icon-144x144.png","900d4c483e69aeff90a56324af7f24ba"],["https://alexcheng94.github.io/weather_reactassets/icons/android-icon-192x192.png","6ed27f16ee516f25f39f6224b1e3f041"],["https://alexcheng94.github.io/weather_reactassets/icons/android-icon-36x36.png","cd7d2142d2badde61a556ae75954ea2f"],["https://alexcheng94.github.io/weather_reactassets/icons/android-icon-48x48.png","659b7be2bf5ae43f9dbbd92972fae057"],["https://alexcheng94.github.io/weather_reactassets/icons/android-icon-72x72.png","e3d0fb25bd5be1eb3b67a32722870822"],["https://alexcheng94.github.io/weather_reactassets/icons/android-icon-96x96.png","c989803af8170e6b14625804843ed15f"],["https://alexcheng94.github.io/weather_reactassets/icons/apple-icon-114x114.png","b12ce7385143144a6dda86095b51cf95"],["https://alexcheng94.github.io/weather_reactassets/icons/apple-icon-120x120.png","28a72e20e1470209c700ed03ebe0a233"],["https://alexcheng94.github.io/weather_reactassets/icons/apple-icon-144x144.png","900d4c483e69aeff90a56324af7f24ba"],["https://alexcheng94.github.io/weather_reactassets/icons/apple-icon-152x152.png","d359b775410c95293da85a0d48fa4aa3"],["https://alexcheng94.github.io/weather_reactassets/icons/apple-icon-180x180.png","03cd87d0a0f68c27a24888895059e5bc"],["https://alexcheng94.github.io/weather_reactassets/icons/apple-icon-57x57.png","ab05a10d1dc5c573ccb3ae49d809c106"],["https://alexcheng94.github.io/weather_reactassets/icons/apple-icon-60x60.png","c3f5bcc8f99166501c54222c4d5dbe97"],["https://alexcheng94.github.io/weather_reactassets/icons/apple-icon-72x72.png","e3d0fb25bd5be1eb3b67a32722870822"],["https://alexcheng94.github.io/weather_reactassets/icons/apple-icon-76x76.png","71fbba47d2fcc2fbced27565b6babe70"],["https://alexcheng94.github.io/weather_reactassets/icons/apple-icon-precomposed.png","4c69a97b543bc7e14f03b4269c9eb1ee"],["https://alexcheng94.github.io/weather_reactassets/icons/apple-icon.png","4c69a97b543bc7e14f03b4269c9eb1ee"],["https://alexcheng94.github.io/weather_reactassets/icons/browserconfig.xml","653d077300a12f09a69caeea7a8947f8"],["https://alexcheng94.github.io/weather_reactassets/icons/favicon-16x16.png","f2ff8ff99819c6e9b02fb1d6d99f0041"],["https://alexcheng94.github.io/weather_reactassets/icons/favicon-32x32.png","1238cc53f4189d4e9d97a53ea18aed0c"],["https://alexcheng94.github.io/weather_reactassets/icons/favicon-96x96.png","c989803af8170e6b14625804843ed15f"],["https://alexcheng94.github.io/weather_reactassets/icons/favicon.ico","52ff61c8714f2a4d0285d95732b52588"],["https://alexcheng94.github.io/weather_reactassets/icons/ms-icon-144x144.png","900d4c483e69aeff90a56324af7f24ba"],["https://alexcheng94.github.io/weather_reactassets/icons/ms-icon-150x150.png","d9306817e5557d2973d91c4dee989823"],["https://alexcheng94.github.io/weather_reactassets/icons/ms-icon-310x310.png","36bb7e6a9b5981155b6ee834357ad70d"],["https://alexcheng94.github.io/weather_reactassets/icons/ms-icon-70x70.png","37659eff2992d5fe786c40ba52173366"],["https://alexcheng94.github.io/weather_reactassets/icons/splash-screen.png","8b95d008c26e8608bf04f42349437dac"],["https://alexcheng94.github.io/weather_reactindex.html","b8de8f44010e2fdcd74647f8e6c0e2d0"],["https://alexcheng94.github.io/weather_reactindex_bundle.js","1bf34cf4fe82f70034c372d1a9278088"],["https://alexcheng94.github.io/weather_reactmanifest.json","eb46d9d5cb90113f5b9e77600f55c368"]],cacheName="sw-precache-v3-Weather-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var s=new URL(e);return n&&s.pathname.match(n)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),s=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));var n="https://alexcheng94.github.io/weather_reactindex.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted([],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});