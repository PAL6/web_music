(function(e){function t(t){for(var a,c,u=t[0],i=t[1],s=t[2],d=0,l=[];d<u.length;d++)c=u[d],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&l.push(r[c][0]),r[c]=0;for(a in i)Object.prototype.hasOwnProperty.call(i,a)&&(e[a]=i[a]);f&&f(t);while(l.length)l.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],a=!0,c=1;c<n.length;c++){var u=n[c];0!==r[u]&&(a=!1)}a&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var a={},c={app:0},r={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0b9212":"c884d208","chunk-2d0b9b65":"ab088ce2","chunk-2d0c071f":"7a09e3a4","chunk-2d0c0fc6":"ef866071","chunk-2d0c1d1e":"c5eed363","chunk-2d0cc3d7":"56d4c138","chunk-2d0df492":"e09adaac","chunk-2d0e5713":"149d4c35","chunk-2d21a596":"923fcb7d","chunk-2d2288a2":"c344dddb","chunk-3418b287":"22a28734","chunk-d45deabe":"2a80bb72"}[e]+".js"}function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-3418b287":1,"chunk-d45deabe":1};c[e]?t.push(c[e]):0!==c[e]&&n[e]&&t.push(c[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-2d0b9212":"31d6cfe0","chunk-2d0b9b65":"31d6cfe0","chunk-2d0c071f":"31d6cfe0","chunk-2d0c0fc6":"31d6cfe0","chunk-2d0c1d1e":"31d6cfe0","chunk-2d0cc3d7":"31d6cfe0","chunk-2d0df492":"31d6cfe0","chunk-2d0e5713":"31d6cfe0","chunk-2d21a596":"31d6cfe0","chunk-2d2288a2":"31d6cfe0","chunk-3418b287":"e71f7fe0","chunk-d45deabe":"dc45b654"}[e]+".css",r=i.p+a,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var s=o[u],d=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(d===a||d===r))return t()}var l=document.getElementsByTagName("style");for(u=0;u<l.length;u++){s=l[u],d=s.getAttribute("data-href");if(d===a||d===r)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||r,o=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=a,delete c[e],f.parentNode.removeChild(f),n(o)},f.href=r;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){c[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=o);var s,d=document.createElement("script");d.charset="utf-8",d.timeout=120,i.nc&&d.setAttribute("nonce",i.nc),d.src=u(e);var l=new Error;s=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+a+": "+c+")",l.name="ChunkLoadError",l.type=a,l.request=c,n[1](l)}r[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:d})}),12e4);d.onerror=d.onload=s,document.head.appendChild(d)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var f=d;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"02de":function(e,t,n){},"3aff":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{staticClass:"nav"},[n("div",{staticClass:"nav1"},[n("div",{staticClass:"logo"},[n("van-icon",{staticClass:"app_logo",attrs:{name:"diamond-o"}}),n("h1",{staticClass:"app_name"},[e._v("众享Music")])],1),n("div",{staticClass:"nav_bar"},[n("router-link",{staticClass:"tab",attrs:{to:"/","active-class":"active"}},[e._v("发现音乐")]),n("router-link",{staticClass:"tab",attrs:{to:"/myMusic","active-class":"active"}},[e._v("我的音乐")]),n("router-link",{staticClass:"tab",attrs:{to:"/friend","active-class":"active"}},[e._v("朋友")]),n("router-link",{staticClass:"tab",attrs:{to:"/market","active-class":"active"}},[e._v("商场")]),n("router-link",{staticClass:"tab",attrs:{to:"/musician","active-class":"active"}},[e._v("音乐人")]),n("router-link",{staticClass:"tab",attrs:{to:"/downloadApp","active-class":"active"}},[e._v("下载客户端")])],1),n("div",{staticClass:"search"},[n("van-search",{staticClass:"query",attrs:{placeholder:"请输入搜索关键词","input-align":"left",shape:"round",background:"#242424"},model:{value:e.value,callback:function(t){e.value=t},expression:"value"}})],1),n("a",{staticClass:"center",attrs:{href:"#"}},[e._v("创作者中心")]),n("a",{staticClass:"login",attrs:{href:"#"}},[e._v("登录")])])]),n("router-view"),n("Footer")],1)},r=[],o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},u=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"footer"},[n("div",{staticClass:"content"},[n("h3",[e._v("开发者:======>>>>>>OnlyMyself")])])])}],i={name:"Footer"},s=i,d=(n("aac5"),n("2877")),l=Object(d["a"])(s,o,u,!1,null,"1a68a010",null),f=l.exports,h={components:{Footer:f},data:function(){return{value:""}}},p=h,m=(n("a56c"),Object(d["a"])(p,c,r,!1,null,"1731e509",null)),b=m.exports,v=(n("d3b7"),n("8c4f"));a["a"].use(v["a"]);var k=function(){return n.e("chunk-d45deabe").then(n.bind(null,"bb51"))},g=function(){return n.e("chunk-2d0c071f").then(n.bind(null,"428c"))},y=function(){return n.e("chunk-2d0c0fc6").then(n.bind(null,"43b3"))},_=function(){return n.e("chunk-2d0b9212").then(n.bind(null,"3241"))},C=function(){return n.e("chunk-2d21a596").then(n.bind(null,"baab"))},w=function(){return n.e("chunk-2d0cc3d7").then(n.bind(null,"4ca3"))},O=function(){return n.e("chunk-3418b287").then(n.bind(null,"8249"))},S=function(){return n.e("chunk-2d0df492").then(n.bind(null,"88ea"))},j=function(){return n.e("chunk-2d2288a2").then(n.bind(null,"da2a"))},E=function(){return n.e("chunk-2d0b9b65").then(n.bind(null,"33b1"))},M=function(){return n.e("chunk-2d0c1d1e").then(n.bind(null,"4859"))},x=function(){return n.e("chunk-2d0e5713").then(n.bind(null,"9501"))},P=[{path:"/",name:"Home",component:k,children:[{path:"/recommend",name:"Recommend",component:O},{path:"/rank",name:"Rank",component:S},{path:"/songList",name:"SongList",component:j},{path:"/hostStatic",name:"HostStation",component:E},{path:"/singer",name:"Singer",component:M},{path:"/newDisc",name:"NewDisc",component:x}],redirect:"/recommend"},{path:"/myMusic",name:"MyMusic",component:g},{path:"/friend",name:"Friend",component:y},{path:"/market",name:"Market",component:_},{path:"/musician",name:"Musician",component:C},{path:"/downloadApp",name:"DownloadApp",component:w}],A=new v["a"]({routes:P,module:history}),T=A,L=n("2f62");a["a"].use(L["a"]);var N=new L["a"].Store({state:{},mutations:{},actions:{},modules:{}}),D=(n("3aff"),n("b970"));n("157a");a["a"].use(D["a"]),a["a"].config.productionTip=!1,new a["a"]({router:T,store:N,render:function(e){return e(b)}}).$mount("#app")},"93db":function(e,t,n){},a56c:function(e,t,n){"use strict";n("93db")},aac5:function(e,t,n){"use strict";n("02de")}});
//# sourceMappingURL=app.b53a551e.js.map