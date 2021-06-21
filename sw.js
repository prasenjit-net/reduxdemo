!function(){function e(e,t,r,s){Object.defineProperty(e,t,{get:r,set:s,enumerable:!0,configurable:!0})}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},s={},a=t.parcelRequire3dd2;null==a&&((a=function(e){if(e in r)return r[e].exports;if(e in s){let t=s[e];delete s[e];let a={id:e,exports:{}};return r[e]=a,t.call(a.exports,a,a.exports),a.exports}var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}).register=function(e,t){s[e]=t},t.parcelRequire3dd2=a),a.register("3UKPW",(function(e,t){a("dUh2I");var r=a("4IsYs");a("dwpZB");var s=a("jQ8Hs"),n=a("3eJHW");a("38L1y");var i=a("an5zT");a("dwpZB");s=a("jQ8Hs"),n=a("3eJHW");a("93Usv");var o=a("go3ri");r.registerRoute((({request:e})=>"script"===e.destination||"style"===e.destination),new s.StaleWhileRevalidate({cacheName:"script-style"})),r.registerRoute((({request:e})=>"image"===e.destination),new n.CacheFirst({cacheName:"images",plugins:[new i.CacheableResponsePlugin({statuses:[0,200]}),new o.ExpirationPlugin({maxEntries:60,maxAgeSeconds:2592e3})]})),r.registerRoute((e=>{if(console.log("🚀 ~ file: sw.js ~ line 33 ~ context",e),"document"===e.request.destination)return!0}),new s.StaleWhileRevalidate({cacheName:"pages"}))})),a.register("dUh2I",(function(t,r){e(t.exports,"registerRoute",(()=>a("4IsYs").registerRoute)),a("aQPbw")})),a.register("aQPbw",(function(t,r){e(t.exports,"registerRoute",(()=>a("4IsYs").registerRoute));a("23fEB"),a("9qtrp"),a("4IsYs"),a("ccxL4"),a("5n4mV"),a("g0Sgo"),a("ky1gq");a("lg3OY")})),a.register("23fEB",(function(e,t){a("i5vw2"),a("7IMeQ");var r=a("ccxL4");a("lg3OY");r.Route})),a.register("i5vw2",(function(e,t){a("h3wmx");a("1G9By")})),a.register("h3wmx",(function(t,r){e(t.exports,"WorkboxError",(()=>n));var s=a("dpcbN");a("1G9By");class n extends Error{constructor(e,t){super(s.messageGenerator(e,t)),this.name=e,this.details=t}}})),a.register("dpcbN",(function(t,r){e(t.exports,"messageGenerator",(()=>s));a("5fIVh");a("1G9By");const s=(e,...t)=>{let r=e;return t.length>0&&(r+=` :: ${JSON.stringify(t)}`),r}})),a.register("5fIVh",(function(t,r){e(t.exports,"messages",(()=>s)),a("1G9By");const s={"invalid-value":({paramName:e,validValueDescription:t,value:r})=>{if(!e||!t)throw new Error("Unexpected input to 'invalid-value' error.");return`The '${e}' parameter was given a value with an unexpected value. ${t} Received a value of ${JSON.stringify(r)}.`},"not-an-array":({moduleName:e,className:t,funcName:r,paramName:s})=>{if(!(e&&t&&r&&s))throw new Error("Unexpected input to 'not-an-array' error.");return`The parameter '${s}' passed into '${e}.${t}.${r}()' must be an array.`},"incorrect-type":({expectedType:e,paramName:t,moduleName:r,className:s,funcName:a})=>{if(!(e&&t&&r&&a))throw new Error("Unexpected input to 'incorrect-type' error.");return`The parameter '${t}' passed into '${r}.${s?s+".":""}${a}()' must be of type ${e}.`},"incorrect-class":({expectedClass:e,paramName:t,moduleName:r,className:s,funcName:a,isReturnValueProblem:n})=>{if(!e||!r||!a)throw new Error("Unexpected input to 'incorrect-class' error.");return n?`The return value from '${r}.${s?s+".":""}${a}()' must be an instance of class ${e.name}.`:`The parameter '${t}' passed into '${r}.${s?s+".":""}${a}()' must be an instance of class ${e.name}.`},"missing-a-method":({expectedMethod:e,paramName:t,moduleName:r,className:s,funcName:a})=>{if(!(e&&t&&r&&s&&a))throw new Error("Unexpected input to 'missing-a-method' error.");return`${r}.${s}.${a}() expected the '${t}' parameter to expose a '${e}' method.`},"add-to-cache-list-unexpected-type":({entry:e})=>`An unexpected entry was passed to 'workbox-precaching.PrecacheController.addToCacheList()' The entry '${JSON.stringify(e)}' isn't supported. You must supply an array of strings with one or more characters, objects with a url property or Request objects.`,"add-to-cache-list-conflicting-entries":({firstEntry:e,secondEntry:t})=>{if(!e||!t)throw new Error("Unexpected input to 'add-to-cache-list-duplicate-entries' error.");return`Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${e._entryId} but different revision details. Workbox is unable to cache and version the asset correctly. Please remove one of the entries.`},"plugin-error-request-will-fetch":({thrownError:e})=>{if(!e)throw new Error("Unexpected input to 'plugin-error-request-will-fetch', error.");return`An error was thrown by a plugins 'requestWillFetch()' method. The thrown error message was: '${e.message}'.`},"invalid-cache-name":({cacheNameId:e,value:t})=>{if(!e)throw new Error("Expected a 'cacheNameId' for error 'invalid-cache-name'");return`You must provide a name containing at least one character for setCacheDetails({${e}: '...'}). Received a value of '${JSON.stringify(t)}'`},"unregister-route-but-not-found-with-method":({method:e})=>{if(!e)throw new Error("Unexpected input to 'unregister-route-but-not-found-with-method' error.");return`The route you're trying to unregister was not  previously registered for the method type '${e}'.`},"unregister-route-route-not-registered":()=>"The route you're trying to unregister was not previously registered.","queue-replay-failed":({name:e})=>`Replaying the background sync queue '${e}' failed.`,"duplicate-queue-name":({name:e})=>`The Queue name '${e}' is already being used. All instances of backgroundSync.Queue must be given unique names.`,"expired-test-without-max-age":({methodName:e,paramName:t})=>`The '${e}()' method can only be used when the '${t}' is used in the constructor.`,"unsupported-route-type":({moduleName:e,className:t,funcName:r,paramName:s})=>`The supplied '${s}' parameter was an unsupported type. Please check the docs for ${e}.${t}.${r} for valid input types.`,"not-array-of-class":({value:e,expectedClass:t,moduleName:r,className:s,funcName:a,paramName:n})=>`The supplied '${n}' parameter must be an array of '${t}' objects. Received '${JSON.stringify(e)},'. Please check the call to ${r}.${s}.${a}() to fix the issue.`,"max-entries-or-age-required":({moduleName:e,className:t,funcName:r})=>`You must define either config.maxEntries or config.maxAgeSecondsin ${e}.${t}.${r}`,"statuses-or-headers-required":({moduleName:e,className:t,funcName:r})=>`You must define either config.statuses or config.headersin ${e}.${t}.${r}`,"invalid-string":({moduleName:e,funcName:t,paramName:r})=>{if(!r||!e||!t)throw new Error("Unexpected input to 'invalid-string' error.");return`When using strings, the '${r}' parameter must start with 'http' (for cross-origin matches) or '/' (for same-origin matches). Please see the docs for ${e}.${t}() for more info.`},"channel-name-required":()=>"You must provide a channelName to construct a BroadcastCacheUpdate instance.","invalid-responses-are-same-args":()=>"The arguments passed into responsesAreSame() appear to be invalid. Please ensure valid Responses are used.","expire-custom-caches-only":()=>"You must provide a 'cacheName' property when using the expiration plugin with a runtime caching strategy.","unit-must-be-bytes":({normalizedRangeHeader:e})=>{if(!e)throw new Error("Unexpected input to 'unit-must-be-bytes' error.");return`The 'unit' portion of the Range header must be set to 'bytes'. The Range header provided was "${e}"`},"single-range-only":({normalizedRangeHeader:e})=>{if(!e)throw new Error("Unexpected input to 'single-range-only' error.");return`Multiple ranges are not supported. Please use a  single start value, and optional end value. The Range header provided was "${e}"`},"invalid-range-values":({normalizedRangeHeader:e})=>{if(!e)throw new Error("Unexpected input to 'invalid-range-values' error.");return`The Range header is missing both start and end values. At least one of those values is needed. The Range header provided was "${e}"`},"no-range-header":()=>"No Range header was found in the Request provided.","range-not-satisfiable":({size:e,start:t,end:r})=>`The start (${t}) and end (${r}) values in the Range are not satisfiable by the cached response, which is ${e} bytes.`,"attempt-to-cache-non-get-request":({url:e,method:t})=>`Unable to cache '${e}' because it is a '${t}' request and only 'GET' requests can be cached.`,"cache-put-with-no-response":({url:e})=>`There was an attempt to cache '${e}' but the response was not defined.`,"no-response":({url:e,error:t})=>{let r=`The strategy could not generate a response for '${e}'.`;return t&&(r+=` The underlying error is ${t}.`),r},"bad-precaching-response":({url:e,status:t})=>`The precaching request for '${e}' failed`+(t?` with an HTTP status of ${t}.`:"."),"non-precached-url":({url:e})=>`createHandlerBoundToURL('${e}') was called, but that URL is not precached. Please pass in a URL that is precached instead.`,"add-to-cache-list-conflicting-integrities":({url:e})=>`Two of the entries passed to 'workbox-precaching.PrecacheController.addToCacheList()' had the URL ${e} with different integrity values. Please remove one of them.`,"missing-precache-entry":({cacheName:e,url:t})=>`Unable to find a precached response in ${e} for ${t}.`,"cross-origin-copy-response":({origin:e})=>`workbox-core.copyResponse() can only be used with same-origin responses. It was passed a response with origin ${e}.`}})),a.register("1G9By",(function(e,t){"use strict";try{self["workbox:core:6.1.5"]&&_()}catch(e){}})),a.register("7IMeQ",(function(t,r){e(t.exports,"logger",(()=>s)),a("1G9By");const s=null})),a.register("ccxL4",(function(t,r){e(t.exports,"Route",(()=>i)),a("i5vw2");var s=a("lIPK0"),n=a("2VV1b");a("lg3OY");class i{constructor(e,t,r=s.defaultMethod){this.handler=n.normalizeHandler(t),this.match=e,this.method=r}setCatchHandler(e){this.catchHandler=n.normalizeHandler(e)}}})),a.register("lIPK0",(function(t,r){e(t.exports,"defaultMethod",(()=>s)),a("lg3OY");const s="GET"})),a.register("lg3OY",(function(e,t){"use strict";try{self["workbox:routing:6.1.5"]&&_()}catch(e){}})),a.register("2VV1b",(function(t,r){e(t.exports,"normalizeHandler",(()=>s)),a("i5vw2"),a("lg3OY");const s=e=>e&&"object"==typeof e?e:{handle:e}})),a.register("9qtrp",(function(t,r){e(t.exports,"RegExpRoute",(()=>n)),a("i5vw2"),a("7IMeQ");var s=a("ccxL4");a("lg3OY");class n extends s.Route{constructor(e,t,r){super((({url:t})=>{const r=e.exec(t.href);if(r&&(t.origin===location.origin||0===r.index))return r.slice(1)}),t,r)}}})),a.register("4IsYs",(function(t,r){e(t.exports,"registerRoute",(()=>c)),a("7IMeQ");var s=a("h3wmx"),n=a("ccxL4"),i=a("9qtrp"),o=a("jrrxd");function c(e,t,r){let a;if("string"==typeof e){const s=new URL(e,location.href),i=({url:e})=>e.href===s.href;a=new n.Route(i,t,r)}else if(e instanceof RegExp)a=new i.RegExpRoute(e,t,r);else if("function"==typeof e)a=new n.Route(e,t,r);else{if(!(e instanceof n.Route))throw new s.WorkboxError("unsupported-route-type",{moduleName:"workbox-routing",funcName:"registerRoute",paramName:"capture"});a=e}return o.getOrCreateDefaultRouter().registerRoute(a),a}a("lg3OY")})),a.register("jrrxd",(function(t,r){e(t.exports,"getOrCreateDefaultRouter",(()=>i));var s=a("5n4mV");let n;a("lg3OY");const i=()=>(n||(n=new s.Router,n.addFetchListener(),n.addCacheListener()),n)})),a.register("5n4mV",(function(t,r){e(t.exports,"Router",(()=>o)),a("i5vw2"),a("iY70M");var s=a("lIPK0");a("7IMeQ");var n=a("2VV1b"),i=a("h3wmx");a("lg3OY");class o{constructor(){this._routes=new Map,this._defaultHandlerMap=new Map}get routes(){return this._routes}addFetchListener(){self.addEventListener("fetch",(e=>{const{request:t}=e,r=this.handleRequest({request:t,event:e});r&&e.respondWith(r)}))}addCacheListener(){self.addEventListener("message",(e=>{if(e.data&&"CACHE_URLS"===e.data.type){const{payload:t}=e.data,r=Promise.all(t.urlsToCache.map((t=>{"string"==typeof t&&(t=[t]);const r=new Request(...t);return this.handleRequest({request:r,event:e})})));e.waitUntil(r),e.ports&&e.ports[0]&&r.then((()=>e.ports[0].postMessage(!0)))}}))}handleRequest({request:e,event:t}){const r=new URL(e.url,location.href);if(!r.protocol.startsWith("http"))return;const s=r.origin===location.origin,{params:a,route:n}=this.findMatchingRoute({event:t,request:e,sameOrigin:s,url:r});let i=n&&n.handler;const o=e.method;if(!i&&this._defaultHandlerMap.has(o)&&(i=this._defaultHandlerMap.get(o)),!i)return;let c;try{c=i.handle({url:r,request:e,event:t,params:a})}catch(e){c=Promise.reject(e)}const u=n&&n.catchHandler;return c instanceof Promise&&(this._catchHandler||u)&&(c=c.catch((async s=>{if(u)try{return await u.handle({url:r,request:e,event:t,params:a})}catch(e){s=e}if(this._catchHandler)return this._catchHandler.handle({url:r,request:e,event:t});throw s}))),c}findMatchingRoute({url:e,sameOrigin:t,request:r,event:s}){const a=this._routes.get(r.method)||[];for(const n of a){let a;const i=n.match({url:e,sameOrigin:t,request:r,event:s});if(i)return a=i,(Array.isArray(i)&&0===i.length||i.constructor===Object&&0===Object.keys(i).length||"boolean"==typeof i)&&(a=void 0),{route:n,params:a}}return{}}setDefaultHandler(e,t=s.defaultMethod){this._defaultHandlerMap.set(t,n.normalizeHandler(e))}setCatchHandler(e){this._catchHandler=n.normalizeHandler(e)}registerRoute(e){this._routes.has(e.method)||this._routes.set(e.method,[]),this._routes.get(e.method).push(e)}unregisterRoute(e){if(!this._routes.has(e.method))throw new i.WorkboxError("unregister-route-but-not-found-with-method",{method:e.method});const t=this._routes.get(e.method).indexOf(e);if(!(t>-1))throw new i.WorkboxError("unregister-route-route-not-registered");this._routes.get(e.method).splice(t,1)}}})),a.register("iY70M",(function(t,r){e(t.exports,"getFriendlyURL",(()=>s)),a("1G9By");const s=e=>new URL(String(e),location.href).href.replace(new RegExp(`^${location.origin}`),"")})),a.register("g0Sgo",(function(e,t){a("jrrxd");a("lg3OY")})),a.register("ky1gq",(function(e,t){a("jrrxd");a("lg3OY")})),a.register("dwpZB",(function(t,r){e(t.exports,"StaleWhileRevalidate",(()=>a("jQ8Hs").StaleWhileRevalidate)),e(t.exports,"CacheFirst",(()=>a("3eJHW").CacheFirst)),a("7jiH6")})),a.register("7jiH6",(function(t,r){e(t.exports,"CacheFirst",(()=>a("3eJHW").CacheFirst)),e(t.exports,"StaleWhileRevalidate",(()=>a("jQ8Hs").StaleWhileRevalidate));a("3eJHW"),a("dy163"),a("djzVB"),a("g5Aed"),a("jQ8Hs"),a("6ntsz"),a("fcHue");a("7WuTy")})),a.register("3eJHW",(function(t,r){e(t.exports,"CacheFirst",(()=>i)),a("i5vw2"),a("7IMeQ");var s=a("h3wmx"),n=a("6ntsz");a("5K77Y"),a("7WuTy");class i extends n.Strategy{async _handle(e,t){let r,a=await t.cacheMatch(e);if(!a)try{a=await t.fetchAndCachePut(e)}catch(e){r=e}if(!a)throw new s.WorkboxError("no-response",{url:e.url,error:r});return a}}})),a.register("6ntsz",(function(t,r){e(t.exports,"Strategy",(()=>o));var s=a("jzX23"),n=a("h3wmx");a("7IMeQ"),a("iY70M");var i=a("fcHue");a("7WuTy");class o{constructor(e={}){this.cacheName=s.cacheNames.getRuntimeName(e.cacheName),this.plugins=e.plugins||[],this.fetchOptions=e.fetchOptions,this.matchOptions=e.matchOptions}handle(e){const[t]=this.handleAll(e);return t}handleAll(e){e instanceof FetchEvent&&(e={event:e,request:e.request});const t=e.event,r="string"==typeof e.request?new Request(e.request):e.request,s="params"in e?e.params:void 0,a=new i.StrategyHandler(this,{event:t,request:r,params:s}),n=this._getResponse(a,r,t);return[n,this._awaitComplete(n,a,r,t)]}async _getResponse(e,t,r){let s;await e.runCallbacks("handlerWillStart",{event:r,request:t});try{if(s=await this._handle(t,e),!s||"error"===s.type)throw new n.WorkboxError("no-response",{url:t.url})}catch(a){for(const n of e.iterateCallbacks("handlerDidError"))if(s=await n({error:a,event:r,request:t}),s)break;if(!s)throw a}for(const a of e.iterateCallbacks("handlerWillRespond"))s=await a({event:r,request:t,response:s});return s}async _awaitComplete(e,t,r,s){let a,n;try{a=await e}catch(e){}try{await t.runCallbacks("handlerDidRespond",{event:s,request:r,response:a}),await t.doneWaiting()}catch(e){n=e}if(await t.runCallbacks("handlerDidComplete",{event:s,request:r,response:a,error:n}),t.destroy(),n)throw n}}})),a.register("jzX23",(function(t,r){e(t.exports,"cacheNames",(()=>i)),a("1G9By");const s={googleAnalytics:"googleAnalytics",precache:"precache-v2",prefix:"workbox",runtime:"runtime",suffix:"undefined"!=typeof registration?registration.scope:""},n=e=>[s.prefix,e,s.suffix].filter((e=>e&&e.length>0)).join("-"),i={updateDetails:e=>{(e=>{for(const t of Object.keys(s))e(t)})((t=>{"string"==typeof e[t]&&(s[t]=e[t])}))},getGoogleAnalyticsName:e=>e||n(s.googleAnalytics),getPrecacheName:e=>e||n(s.precache),getPrefix:()=>s.prefix,getRuntimeName:e=>e||n(s.runtime),getSuffix:()=>s.suffix}})),a.register("fcHue",(function(t,r){e(t.exports,"StrategyHandler",(()=>l)),a("i5vw2");var s=a("5fyBx"),n=a("gnxO6"),i=a("eiLAR"),o=a("iY70M");a("7IMeQ");var c=a("6va74"),u=a("h3wmx");function h(e){return"string"==typeof e?new Request(e):e}a("7WuTy");class l{constructor(e,t){this._cacheKeys={},Object.assign(this,t),this.event=t.event,this._strategy=e,this._handlerDeferred=new n.Deferred,this._extendLifetimePromises=[],this._plugins=[...e.plugins],this._pluginStateMap=new Map;for(const e of this._plugins)this._pluginStateMap.set(e,{});this.event.waitUntil(this._handlerDeferred.promise)}async fetch(e){const{event:t}=this;let r=h(e);if("navigate"===r.mode&&t instanceof FetchEvent&&t.preloadResponse){const e=await t.preloadResponse;if(e)return e}const s=this.hasCallback("fetchDidFail")?r.clone():null;try{for(const e of this.iterateCallbacks("requestWillFetch"))r=await e({request:r.clone(),event:t})}catch(e){throw new u.WorkboxError("plugin-error-request-will-fetch",{thrownError:e})}const a=r.clone();try{let e;e=await fetch(r,"navigate"===r.mode?void 0:this._strategy.fetchOptions);for(const r of this.iterateCallbacks("fetchDidSucceed"))e=await r({event:t,request:a,response:e});return e}catch(e){throw s&&await this.runCallbacks("fetchDidFail",{error:e,event:t,originalRequest:s.clone(),request:a.clone()}),e}}async fetchAndCachePut(e){const t=await this.fetch(e),r=t.clone();return this.waitUntil(this.cachePut(e,r)),t}async cacheMatch(e){const t=h(e);let r;const{cacheName:s,matchOptions:a}=this._strategy,n=await this.getCacheKey(t,"read"),i={...a,cacheName:s};r=await caches.match(n,i);for(const e of this.iterateCallbacks("cachedResponseWillBeUsed"))r=await e({cacheName:s,matchOptions:a,cachedResponse:r,request:n,event:this.event})||void 0;return r}async cachePut(e,t){const r=h(e);await c.timeout(0);const a=await this.getCacheKey(r,"write");if(!t)throw new u.WorkboxError("cache-put-with-no-response",{url:o.getFriendlyURL(a.url)});const n=await this._ensureResponseSafeToCache(t);if(!n)return!1;const{cacheName:l,matchOptions:d}=this._strategy,p=await self.caches.open(l),g=this.hasCallback("cacheDidUpdate"),f=g?await s.cacheMatchIgnoreParams(p,a.clone(),["__WB_REVISION__"],d):null;try{await p.put(a,g?n.clone():n)}catch(e){throw"QuotaExceededError"===e.name&&await i.executeQuotaErrorCallbacks(),e}for(const e of this.iterateCallbacks("cacheDidUpdate"))await e({cacheName:l,oldResponse:f,newResponse:n.clone(),request:a,event:this.event});return!0}async getCacheKey(e,t){if(!this._cacheKeys[t]){let r=e;for(const e of this.iterateCallbacks("cacheKeyWillBeUsed"))r=h(await e({mode:t,request:r,event:this.event,params:this.params}));this._cacheKeys[t]=r}return this._cacheKeys[t]}hasCallback(e){for(const t of this._strategy.plugins)if(e in t)return!0;return!1}async runCallbacks(e,t){for(const r of this.iterateCallbacks(e))await r(t)}*iterateCallbacks(e){for(const t of this._strategy.plugins)if("function"==typeof t[e]){const r=this._pluginStateMap.get(t),s=s=>{const a={...s,state:r};return t[e](a)};yield s}}waitUntil(e){return this._extendLifetimePromises.push(e),e}async doneWaiting(){let e;for(;e=this._extendLifetimePromises.shift();)await e}destroy(){this._handlerDeferred.resolve()}async _ensureResponseSafeToCache(e){let t=e,r=!1;for(const e of this.iterateCallbacks("cacheWillUpdate"))if(t=await e({request:this.request,response:t,event:this.event})||void 0,r=!0,!t)break;return r||t&&200!==t.status&&(t=void 0),t}}})),a.register("5fyBx",(function(t,r){function s(e,t){const r=new URL(e);for(const e of t)r.searchParams.delete(e);return r.href}async function n(e,t,r,a){const n=s(t.url,r);if(t.url===n)return e.match(t,a);const i={...a,ignoreSearch:!0},o=await e.keys(t,i);for(const t of o){if(n===s(t.url,r))return e.match(t,a)}}e(t.exports,"cacheMatchIgnoreParams",(()=>n)),a("1G9By")})),a.register("gnxO6",(function(t,r){e(t.exports,"Deferred",(()=>s)),a("1G9By");class s{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}})),a.register("eiLAR",(function(t,r){e(t.exports,"executeQuotaErrorCallbacks",(()=>n)),a("7IMeQ");var s=a("51Mp9");async function n(){for(const e of s.quotaErrorCallbacks)await e()}a("1G9By")})),a.register("51Mp9",(function(t,r){e(t.exports,"quotaErrorCallbacks",(()=>s)),a("1G9By");const s=new Set})),a.register("6va74",(function(t,r){function s(e){return new Promise((t=>setTimeout(t,e)))}e(t.exports,"timeout",(()=>s)),a("1G9By")})),a.register("7WuTy",(function(e,t){"use strict";try{self["workbox:strategies:6.1.5"]&&_()}catch(e){}})),a.register("5K77Y",(function(e,t){a("7IMeQ"),a("iY70M");a("7WuTy")})),a.register("dy163",(function(e,t){a("i5vw2"),a("7IMeQ");a("h3wmx");var r=a("6ntsz");a("5K77Y"),a("7WuTy");r.Strategy})),a.register("djzVB",(function(e,t){a("i5vw2"),a("7IMeQ");a("h3wmx"),a("1CV6X");var r=a("6ntsz");a("5K77Y"),a("7WuTy");r.Strategy})),a.register("1CV6X",(function(t,r){e(t.exports,"cacheOkAndOpaquePlugin",(()=>s)),a("7WuTy");const s={cacheWillUpdate:async({response:e})=>200===e.status||0===e.status?e:null}})),a.register("g5Aed",(function(e,t){a("i5vw2"),a("7IMeQ");a("6va74"),a("h3wmx");var r=a("6ntsz");a("5K77Y"),a("7WuTy");r.Strategy})),a.register("jQ8Hs",(function(t,r){e(t.exports,"StaleWhileRevalidate",(()=>o)),a("i5vw2"),a("7IMeQ");var s=a("h3wmx"),n=a("1CV6X"),i=a("6ntsz");a("5K77Y"),a("7WuTy");class o extends i.Strategy{constructor(e){super(e),this.plugins.some((e=>"cacheWillUpdate"in e))||this.plugins.unshift(n.cacheOkAndOpaquePlugin)}async _handle(e,t){const r=t.fetchAndCachePut(e).catch((()=>{}));let a,n=await t.cacheMatch(e);if(n);else try{n=await r}catch(e){a=e}if(!n)throw new s.WorkboxError("no-response",{url:e.url,error:a});return n}}})),a.register("38L1y",(function(t,r){e(t.exports,"CacheableResponsePlugin",(()=>a("an5zT").CacheableResponsePlugin)),a("28W47")})),a.register("28W47",(function(t,r){e(t.exports,"CacheableResponsePlugin",(()=>a("an5zT").CacheableResponsePlugin));a("lcmOM"),a("an5zT");a("5tEkG")})),a.register("lcmOM",(function(t,r){e(t.exports,"CacheableResponse",(()=>s)),a("i5vw2"),a("h3wmx"),a("iY70M"),a("7IMeQ"),a("5tEkG");class s{constructor(e={}){this._statuses=e.statuses,this._headers=e.headers}isResponseCacheable(e){let t=!0;return this._statuses&&(t=this._statuses.includes(e.status)),this._headers&&t&&(t=Object.keys(this._headers).some((t=>e.headers.get(t)===this._headers[t]))),t}}})),a.register("5tEkG",(function(e,t){"use strict";try{self["workbox:cacheable-response:6.1.5"]&&_()}catch(e){}})),a.register("an5zT",(function(t,r){e(t.exports,"CacheableResponsePlugin",(()=>n));var s=a("lcmOM");a("5tEkG");class n{constructor(e){this.cacheWillUpdate=async({response:e})=>this._cacheableResponse.isResponseCacheable(e)?e:null,this._cacheableResponse=new s.CacheableResponse(e)}}})),a.register("93Usv",(function(t,r){e(t.exports,"ExpirationPlugin",(()=>a("go3ri").ExpirationPlugin)),a("e9t64")})),a.register("e9t64",(function(t,r){e(t.exports,"ExpirationPlugin",(()=>a("go3ri").ExpirationPlugin));a("hQwNd"),a("go3ri");a("ji2mt")})),a.register("hQwNd",(function(t,r){e(t.exports,"CacheExpiration",(()=>i)),a("i5vw2");var s=a("7cxzO");a("7IMeQ"),a("h3wmx");var n=a("jmL5i");a("ji2mt");class i{constructor(e,t={}){this._isRunning=!1,this._rerunRequested=!1,this._maxEntries=t.maxEntries,this._maxAgeSeconds=t.maxAgeSeconds,this._matchOptions=t.matchOptions,this._cacheName=e,this._timestampModel=new n.CacheTimestampsModel(e)}async expireEntries(){if(this._isRunning)return void(this._rerunRequested=!0);this._isRunning=!0;const e=this._maxAgeSeconds?Date.now()-1e3*this._maxAgeSeconds:0,t=await this._timestampModel.expireEntries(e,this._maxEntries),r=await self.caches.open(this._cacheName);for(const e of t)await r.delete(e,this._matchOptions);this._isRunning=!1,this._rerunRequested&&(this._rerunRequested=!1,s.dontWaitFor(this.expireEntries()))}async updateTimestamp(e){await this._timestampModel.setTimestamp(e,Date.now())}async isURLExpired(e){if(this._maxAgeSeconds){return await this._timestampModel.getTimestamp(e)<Date.now()-1e3*this._maxAgeSeconds}return!1}async delete(){this._rerunRequested=!1,await this._timestampModel.expireEntries(1/0)}}})),a.register("7cxzO",(function(t,r){function s(e){e.then((()=>{}))}e(t.exports,"dontWaitFor",(()=>s)),a("1G9By")})),a.register("jmL5i",(function(t,r){e(t.exports,"CacheTimestampsModel",(()=>c));var s=a("3wT6c"),n=a("a5rwZ");a("ji2mt");const i="cache-entries",o=e=>{const t=new URL(e,location.href);return t.hash="",t.href};class c{constructor(e){this._cacheName=e,this._db=new s.DBWrapper("workbox-expiration",1,{onupgradeneeded:e=>this._handleUpgrade(e)})}_handleUpgrade(e){const t=e.target.result.createObjectStore(i,{keyPath:"id"});t.createIndex("cacheName","cacheName",{unique:!1}),t.createIndex("timestamp","timestamp",{unique:!1}),n.deleteDatabase(this._cacheName)}async setTimestamp(e,t){const r={url:e=o(e),timestamp:t,cacheName:this._cacheName,id:this._getId(e)};await this._db.put(i,r)}async getTimestamp(e){return(await this._db.get(i,this._getId(e))).timestamp}async expireEntries(e,t){const r=await this._db.transaction(i,"readwrite",((r,s)=>{const a=r.objectStore(i).index("timestamp").openCursor(null,"prev"),n=[];let o=0;a.onsuccess=()=>{const r=a.result;if(r){const s=r.value;s.cacheName===this._cacheName&&(e&&s.timestamp<e||t&&o>=t?n.push(r.value):o++),r.continue()}else s(n)}})),s=[];for(const e of r)await this._db.delete(i,e.id),s.push(e.url);return s}_getId(e){return this._cacheName+"|"+o(e)}}})),a.register("3wT6c",(function(t,r){e(t.exports,"DBWrapper",(()=>s)),a("1G9By");class s{constructor(e,t,{onupgradeneeded:r,onversionchange:s}={}){this._db=null,this._name=e,this._version=t,this._onupgradeneeded=r,this._onversionchange=s||(()=>this.close())}get db(){return this._db}async open(){if(!this._db)return this._db=await new Promise(((e,t)=>{let r=!1;setTimeout((()=>{r=!0,t(new Error("The open request was blocked and timed out"))}),this.OPEN_TIMEOUT);const s=indexedDB.open(this._name,this._version);s.onerror=()=>t(s.error),s.onupgradeneeded=e=>{r?(s.transaction.abort(),s.result.close()):"function"==typeof this._onupgradeneeded&&this._onupgradeneeded(e)},s.onsuccess=()=>{const t=s.result;r?t.close():(t.onversionchange=this._onversionchange.bind(this),e(t))}})),this}async getKey(e,t){return(await this.getAllKeys(e,t,1))[0]}async getAll(e,t,r){return await this.getAllMatching(e,{query:t,count:r})}async getAllKeys(e,t,r){return(await this.getAllMatching(e,{query:t,count:r,includeKeys:!0})).map((e=>e.key))}async getAllMatching(e,{index:t,query:r=null,direction:s="next",count:a,includeKeys:n=!1}={}){return await this.transaction([e],"readonly",((i,o)=>{const c=i.objectStore(e),u=t?c.index(t):c,h=[],l=u.openCursor(r,s);l.onsuccess=()=>{const e=l.result;e?(h.push(n?e:e.value),a&&h.length>=a?o(h):e.continue()):o(h)}}))}async transaction(e,t,r){return await this.open(),await new Promise(((s,a)=>{const n=this._db.transaction(e,t);n.onabort=()=>a(n.error),n.oncomplete=()=>s(),r(n,(e=>s(e)))}))}async _call(e,t,r,...s){return await this.transaction([t],r,((r,a)=>{const n=r.objectStore(t),i=n[e].apply(n,s);i.onsuccess=()=>a(i.result)}))}close(){this._db&&(this._db.close(),this._db=null)}}s.prototype.OPEN_TIMEOUT=2e3;const n={readonly:["get","count","getKey","getAll","getAllKeys"],readwrite:["add","put","clear","delete"]};for(const[e,t]of Object.entries(n))for(const r of t)r in IDBObjectStore.prototype&&(s.prototype[r]=async function(t,...s){return await this._call(r,t,e,...s)})})),a.register("a5rwZ",(function(t,r){e(t.exports,"deleteDatabase",(()=>s)),a("1G9By");const s=async e=>{await new Promise(((t,r)=>{const s=indexedDB.deleteDatabase(e);s.onerror=()=>{r(s.error)},s.onblocked=()=>{r(new Error("Delete blocked"))},s.onsuccess=()=>{t()}}))}})),a.register("ji2mt",(function(e,t){"use strict";try{self["workbox:expiration:6.1.5"]&&_()}catch(e){}})),a.register("go3ri",(function(t,r){e(t.exports,"ExpirationPlugin",(()=>u)),a("i5vw2");var s=a("jzX23"),n=a("7cxzO");a("iY70M"),a("7IMeQ");var i=a("2DJLx"),o=a("h3wmx"),c=a("hQwNd");a("ji2mt");class u{constructor(e={}){this.cachedResponseWillBeUsed=async({event:e,request:t,cacheName:r,cachedResponse:s})=>{if(!s)return null;const a=this._isResponseDateFresh(s),i=this._getCacheExpiration(r);n.dontWaitFor(i.expireEntries());const o=i.updateTimestamp(t.url);if(e)try{e.waitUntil(o)}catch(e){}return a?s:null},this.cacheDidUpdate=async({cacheName:e,request:t})=>{const r=this._getCacheExpiration(e);await r.updateTimestamp(t.url),await r.expireEntries()},this._config=e,this._maxAgeSeconds=e.maxAgeSeconds,this._cacheExpirations=new Map,e.purgeOnQuotaError&&i.registerQuotaErrorCallback((()=>this.deleteCacheAndMetadata()))}_getCacheExpiration(e){if(e===s.cacheNames.getRuntimeName())throw new o.WorkboxError("expire-custom-caches-only");let t=this._cacheExpirations.get(e);return t||(t=new c.CacheExpiration(e,this._config),this._cacheExpirations.set(e,t)),t}_isResponseDateFresh(e){if(!this._maxAgeSeconds)return!0;const t=this._getDateHeaderTimestamp(e);if(null===t)return!0;return t>=Date.now()-1e3*this._maxAgeSeconds}_getDateHeaderTimestamp(e){if(!e.headers.has("date"))return null;const t=e.headers.get("date"),r=new Date(t).getTime();return isNaN(r)?null:r}async deleteCacheAndMetadata(){for(const[e,t]of this._cacheExpirations)await self.caches.delete(e),await t.delete();this._cacheExpirations=new Map}}})),a.register("2DJLx",(function(t,r){e(t.exports,"registerQuotaErrorCallback",(()=>n)),a("7IMeQ"),a("i5vw2");var s=a("51Mp9");function n(e){s.quotaErrorCallbacks.add(e)}a("1G9By")})),a("3UKPW")}();
//# sourceMappingURL=sw.js.map
