$(document).ready(function(){function e(e){return e=e.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g,function(e){return'<a href="'+e+'"  target="_blank">'+e+"</a>"}),e=e.replace(/\B@([_a-z0-9]+)/gi,function(e){return'<a href="http://twitter.com/'+e.substring(1)+'" style="font-weight:lighter;" target="_blank">'+e.charAt(0)+e.substring(1)+"</a>"}),e=e.replace(/\B#([_a-z0-9]+)/gi,function(e){return'<a href="https://twitter.com/search?q='+e.substring(1)+'" style="font-weight:lighter;" target="_blank">'+e.charAt(0)+e.substring(1)+"</a>"})}function t(e){var t=e.split(" ");return e=t[1]+" "+t[2]}$(".nav-home").hide(),$(window).scroll(function(){$(document).scrollTop()>400?$(".nav-home").slideDown(200,"easeInExpo"):$(".nav-home").slideUp(200,"easeOutExpo")}),$(".click-down, .click-down-home").on("click",function(){$("html,body").animate({scrollTop:$(".hero-home, .project-hero").next("section").offset().top-30},"easeInExpo")});var n=1,r=!1,o=!0,i=!0,a=!0,c="",s="";s+='<div id="loading-container"><img src="images/ajax-loader.gif" width="32" height="32" alt="tweet loader" /></div>',$("#twitter-feed").html(c+s),$.getJSON("http://ellendykes.dev:8888/get-tweets.php",function(s){for(var l="",u=1,f=0;f<s.length;f++){var d=(s[f].user.name,s[f].user.screen_name),p=(s[f].user.profile_image_url_https,s[f].text),m=!1,h=!1,g=s[f].id_str;"@"==s[f].text.substr(0,1)&&(h=!0),(1==o||0==m&&0==o)&&(1==r||0==r&&0==h)&&s[f].text.length>1&&n>=u&&(1==i&&(p=e(p)),1==u&&(l+=c),l+='<div class="twitter-article" id="tw'+u+'">',l+='<div class="twitter-text"><span class="tweet-time"><a href="https://twitter.com/'+d+"/status/"+g+'" target="_blank">'+t(s[f].created_at)+"</a></span><p>"+p+'</p><p><img src="img/twitter-bird-red.png"/><span class="tweetprofilelink"><a href="https://twitter.com/'+d+'" target="_blank">@'+d+"</a></span><br/></p>",l+="</div>",l+="</div>",u++)}$("#twitter-feed").html(l),1==a&&($(".twitter-article").hover(function(){$(this).find("#twitter-actions").css({display:"block",opacity:0,"margin-top":-20}),$(this).find("#twitter-actions").animate({opacity:1,"margin-top":0},200)},function(){$(this).find("#twitter-actions").animate({opacity:0,"margin-top":-20},120,function(){$(this).css("display","none")})}),$("#twitter-actions a").click(function(){var e=$(this).attr("href");return window.open(e,"tweet action window","width=580,height=500"),!1}))}).error(function(e){var t="";t=0===e.status?"Connection problem. Check file path and www vs non-www in getJSON request":404==e.status?"Requested page not found. [404]":500==e.status?"Internal Server Error [500].":"parsererror"===exception?"Requested JSON parse failed.":"timeout"===exception?"Time out error.":"abort"===exception?"Ajax request aborted.":"Uncaught Error.\n"+e.responseText,alert("error: "+t)})}),window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function o(e,t){return r(S.join(e+";")+(t||""))}function i(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function c(e,t){for(var r in e){var o=e[r];if(!a(o,"-")&&b[o]!==n)return"pfx"==t?o:!0}return!1}function s(e,t,r){for(var o in e){var a=t[e[o]];if(a!==n)return r===!1?e[o]:i(a,"function")?a.bind(r||t):a}return!1}function l(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),o=(e+" "+C.join(r+" ")+r).split(" ");return i(t,"string")||i(t,"undefined")?c(o,t):(o=(e+" "+T.join(r+" ")+r).split(" "),s(o,t,n))}function u(){m.input=function(n){for(var r=0,o=n.length;o>r;r++)M[n[r]]=n[r]in w;return M.list&&(M.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),M}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),m.inputtypes=function(e){for(var r,o,i,a=0,c=e.length;c>a;a++)w.setAttribute("type",o=e[a]),r="text"!==w.type,r&&(w.value=x,w.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(o)&&w.style.WebkitAppearance!==n?(g.appendChild(w),i=t.defaultView,r=i.getComputedStyle&&"textfield"!==i.getComputedStyle(w,null).WebkitAppearance&&0!==w.offsetHeight,g.removeChild(w)):/^(search|tel)$/.test(o)||(r=/^(url|email)$/.test(o)?w.checkValidity&&w.checkValidity()===!1:w.value!=x)),N[e[a]]=!!r;return N}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var f,d,p="2.6.2",m={},h=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,w=t.createElement("input"),x=":)",E={}.toString,S=" -webkit- -moz- -o- -ms- ".split(" "),k="Webkit Moz O ms",C=k.split(" "),T=k.toLowerCase().split(" "),$={svg:"http://www.w3.org/2000/svg"},j={},N={},M={},P=[],A=P.slice,O=function(e,n,r,o){var i,a,c,s,l=t.createElement("div"),u=t.body,f=u||t.createElement("body");if(parseInt(r,10))for(;r--;)c=t.createElement("div"),c.id=o?o[r]:v+(r+1),l.appendChild(c);return i=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),l.id=v,(u?l:f).innerHTML+=i,f.appendChild(l),u||(f.style.background="",f.style.overflow="hidden",s=g.style.overflow,g.style.overflow="hidden",g.appendChild(f)),a=n(l,e),u?l.parentNode.removeChild(l):(f.parentNode.removeChild(f),g.style.overflow=s),!!a},_=function(t){var n=e.matchMedia||e.msMatchMedia;if(n)return n(t).matches;var r;return O("@media "+t+" { #"+v+" { position: absolute; } }",function(t){r="absolute"==(e.getComputedStyle?getComputedStyle(t,null):t.currentStyle).position}),r},z=function(){function e(e,o){o=o||t.createElement(r[e]||"div"),e="on"+e;var a=e in o;return a||(o.setAttribute||(o=t.createElement("div")),o.setAttribute&&o.removeAttribute&&(o.setAttribute(e,""),a=i(o[e],"function"),i(o[e],"undefined")||(o[e]=n),o.removeAttribute(e))),o=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),D={}.hasOwnProperty;d=i(D,"undefined")||i(D.call,"undefined")?function(e,t){return t in e&&i(e.constructor.prototype[t],"undefined")}:function(e,t){return D.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=A.call(arguments,1),r=function(){if(this instanceof r){var o=function(){};o.prototype=t.prototype;var i=new o,a=t.apply(i,n.concat(A.call(arguments)));return Object(a)===a?a:i}return t.apply(e,n.concat(A.call(arguments)))};return r}),j.flexbox=function(){return l("flexWrap")},j.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},j.canvastext=function(){return!!m.canvas&&!!i(t.createElement("canvas").getContext("2d").fillText,"function")},j.webgl=function(){return!!e.WebGLRenderingContext},j.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:O(["@media (",S.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},j.geolocation=function(){return"geolocation"in navigator},j.postmessage=function(){return!!e.postMessage},j.websqldatabase=function(){return!!e.openDatabase},j.indexedDB=function(){return!!l("indexedDB",e)},j.hashchange=function(){return z("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},j.history=function(){return!!e.history&&!!history.pushState},j.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},j.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},j.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(b.backgroundColor,"rgba")},j.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(b.backgroundColor,"rgba")||a(b.backgroundColor,"hsla")},j.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},j.backgroundsize=function(){return l("backgroundSize")},j.borderimage=function(){return l("borderImage")},j.borderradius=function(){return l("borderRadius")},j.boxshadow=function(){return l("boxShadow")},j.textshadow=function(){return""===t.createElement("div").style.textShadow},j.opacity=function(){return o("opacity:.55"),/^0.55$/.test(b.opacity)},j.cssanimations=function(){return l("animationName")},j.csscolumns=function(){return l("columnCount")},j.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+S.join(n+e)).slice(0,-e.length)),a(b.backgroundImage,"gradient")},j.cssreflections=function(){return l("boxReflect")},j.csstransforms=function(){return!!l("transform")},j.csstransforms3d=function(){var e=!!l("perspective");return e&&"webkitPerspective"in g.style&&O("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t){e=9===t.offsetLeft&&3===t.offsetHeight}),e},j.csstransitions=function(){return l("transition")},j.fontface=function(){var e;return O('@font-face {font-family:"font";src:url("https://")}',function(n,r){var o=t.getElementById("smodernizr"),i=o.sheet||o.styleSheet,a=i?i.cssRules&&i.cssRules[0]?i.cssRules[0].cssText:i.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},j.generatedcontent=function(){var e;return O(["#",v,"{font:0/0 a}#",v,':after{content:"',x,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},j.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},j.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},j.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},j.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},j.webworkers=function(){return!!e.Worker},j.applicationcache=function(){return!!e.applicationCache},j.svg=function(){return!!t.createElementNS&&!!t.createElementNS($.svg,"svg").createSVGRect},j.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==$.svg},j.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(E.call(t.createElementNS($.svg,"animate")))},j.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(E.call(t.createElementNS($.svg,"clipPath")))};for(var L in j)d(j,L)&&(f=L.toLowerCase(),m[f]=j[L](),P.push((m[f]?"":"no-")+f));return m.input||u(),m.addTest=function(e,t){if("object"==typeof e)for(var r in e)d(e,r)&&m.addTest(r,e[r]);else{if(e=e.toLowerCase(),m[e]!==n)return m;t="function"==typeof t?t():t,"undefined"!=typeof h&&h&&(g.className+=" "+(t?"":"no-")+e),m[e]=t}return m},r(""),y=w=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=v.elements;return"string"==typeof e?e.split(" "):e}function o(e){var t=g[e[m]];return t||(t={},h++,e[m]=h,g[h]=t),t}function i(e,n,r){if(n||(n=t),u)return n.createElement(e);r||(r=o(n));var i;return i=r.cache[e]?r.cache[e].cloneNode():p.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),i.canHaveChildren&&!d.test(e)?r.frag.appendChild(i):i}function a(e,n){if(e||(e=t),u)return e.createDocumentFragment();n=n||o(e);for(var i=n.frag.cloneNode(),a=0,c=r(),s=c.length;s>a;a++)i.createElement(c[a]);return i}function c(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return v.shivMethods?i(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/\w+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(v,t.frag)}function s(e){e||(e=t);var r=o(e);return v.shivCSS&&!l&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),u||c(e,r),e}var l,u,f=e.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,p=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",h=0,g={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",l="hidden"in e,u=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){l=!0,u=!0}}();var v={elements:f.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:f.shivCSS!==!1,supportsUnknownElements:u,shivMethods:f.shivMethods!==!1,type:"default",shivDocument:s,createElement:i,createDocumentFragment:a};e.html5=v,s(t)}(this,t),m._version=p,m._prefixes=S,m._domPrefixes=T,m._cssomPrefixes=C,m.mq=_,m.hasEvent=z,m.testProp=function(e){return c([e])},m.testAllProps=l,m.testStyles=O,m.prefixed=function(e,t,n){return t?l(e,t,n):l(e,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(h?" js "+P.join(" "):""),m}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function o(e){return"string"==typeof e}function i(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function c(){var e=v.shift();y=1,e?e.t?m(function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),c()):y=0}function s(e,n,r,o,i,s,l){function u(t){if(!p&&a(f.readyState)&&(b.r=p=1,!y&&c(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&m(function(){x.removeChild(f)},50);for(var r in T[n])T[n].hasOwnProperty(r)&&T[n][r].onload()}}var l=l||d.errorTimeout,f=t.createElement(e),p=0,g=0,b={t:r,s:n,e:i,a:s,x:l};1===T[n]&&(g=1,T[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){u.call(this,g)},v.splice(o,0,b),"img"!=e&&(g||2===T[n]?(x.insertBefore(f,w?null:h),m(u,l)):T[n].push(f))}function l(e,t,n,r,i){return y=0,t=t||"j",o(e)?s("c"==t?S:E,e,t,this.i++,n,r,i):(v.splice(this.i++,0,e),1==v.length&&c()),this}function u(){var e=d;return e.loader={load:l,i:0},e}var f,d,p=t.documentElement,m=e.setTimeout,h=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in p.style,w=b&&!!t.createRange().compareNode,x=w?p:h.parentNode,p=e.opera&&"[object Opera]"==g.call(e.opera),p=!!t.attachEvent&&!p,E=b?"object":p?"script":"img",S=p?"script":E,k=Array.isArray||function(e){return"[object Array]"==g.call(e)},C=[],T={},$={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};d=function(e){function t(e){var t,n,r,e=e.split("!"),o=C.length,i=e.pop(),a=e.length,i={url:i,origUrl:i,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=$[r.shift()])&&(i=t(i,r));for(n=0;o>n;n++)i=C[n](i);return i}function a(e,o,i,a,c){var s=t(e),l=s.autoCallback;s.url.split(".").pop().split("?").shift(),s.bypass||(o&&(o=r(o)?o:o[e]||o[a]||o[e.split("/").pop().split("?")[0]]),s.instead?s.instead(e,o,i,a,c):(T[s.url]?s.noexec=!0:T[s.url]=1,i.load(s.url,s.forceCSS||!s.forceJS&&"css"==s.url.split(".").pop().split("?").shift()?"c":n,s.noexec,s.attrs,s.timeout),(r(o)||r(l))&&i.load(function(){u(),o&&o(s.origUrl,c,a),l&&l(s.origUrl,c,a),T[s.url]=2})))}function c(e,t){function n(e,n){if(e){if(o(e))n||(f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}),a(e,f,t,0,l);else if(Object(e)===e)for(s in c=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(s)&&(!n&&!--c&&(r(f)?f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}:f[s]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(d[s])),a(e[s],f,t,s,l))}else!n&&p()}var c,s,l=!!e.test,u=e.load||e.both,f=e.callback||i,d=f,p=e.complete||i;n(l?e.yep:e.nope,!!u),u&&n(u)}var s,l,f=this.yepnope.loader;if(o(e))a(e,0,f,0);else if(k(e))for(s=0;s<e.length;s++)l=e[s],o(l)?a(l,0,f,0):k(l)?d(l):Object(l)===l&&c(l,f);else Object(e)===e&&c(e,f)},d.addPrefix=function(e,t){$[e]=t},d.addFilter=function(e){C.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=u(),e.yepnope.executeStack=c,e.yepnope.injectJs=function(e,n,r,o,s,l){var u,f,p=t.createElement("script"),o=o||d.errorTimeout;p.src=e;for(f in r)p.setAttribute(f,r[f]);n=l?c:n||i,p.onreadystatechange=p.onload=function(){!u&&a(p.readyState)&&(u=1,n(),p.onload=p.onreadystatechange=null)},m(function(){u||(u=1,n(1))},o),s?p.onload():h.parentNode.insertBefore(p,h)},e.yepnope.injectCss=function(e,n,r,o,a,s){var l,o=t.createElement("link"),n=s?c:n||i;o.href=e,o.rel="stylesheet",o.type="text/css";for(l in r)o.setAttribute(l,r[l]);a||(h.parentNode.insertBefore(o,h),m(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},function(){for(var e,t=function(){},n=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeStamp","trace","warn"],r=n.length,o=window.console=window.console||{};r--;)e=n[r],o[e]||(o[e]=t)}();