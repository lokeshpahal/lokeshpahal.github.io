/* jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/ */
jQuery.easing.jswing=jQuery.easing.swing;
jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,a,c,b,d){return jQuery.easing[jQuery.easing.def](e,a,c,b,d)},easeInQuad:function(e,a,c,b,d){return b*(a/=d)*a+c},easeOutQuad:function(e,a,c,b,d){return-b*(a/=d)*(a-2)+c},easeInOutQuad:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a+c;return-b/2*(--a*(a-2)-1)+c},easeInCubic:function(e,a,c,b,d){return b*(a/=d)*a*a+c},easeOutCubic:function(e,a,c,b,d){return b*((a=a/d-1)*a*a+1)+c},easeInOutCubic:function(e,a,c,b,d){if((a/=d/2)<1)return b/
2*a*a*a+c;return b/2*((a-=2)*a*a+2)+c},easeInQuart:function(e,a,c,b,d){return b*(a/=d)*a*a*a+c},easeOutQuart:function(e,a,c,b,d){return-b*((a=a/d-1)*a*a*a-1)+c},easeInOutQuart:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a+c;return-b/2*((a-=2)*a*a*a-2)+c},easeInQuint:function(e,a,c,b,d){return b*(a/=d)*a*a*a*a+c},easeOutQuint:function(e,a,c,b,d){return b*((a=a/d-1)*a*a*a*a+1)+c},easeInOutQuint:function(e,a,c,b,d){if((a/=d/2)<1)return b/2*a*a*a*a*a+c;return b/2*((a-=2)*a*a*a*a+2)+c},easeInSine:function(e,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 a,c,b,d){return-b*Math.cos(a/d*(Math.PI/2))+b+c},easeOutSine:function(e,a,c,b,d){return b*Math.sin(a/d*(Math.PI/2))+c},easeInOutSine:function(e,a,c,b,d){return-b/2*(Math.cos(Math.PI*a/d)-1)+c},easeInExpo:function(e,a,c,b,d){return a==0?c:b*Math.pow(2,10*(a/d-1))+c},easeOutExpo:function(e,a,c,b,d){return a==d?c+b:b*(-Math.pow(2,-10*a/d)+1)+c},easeInOutExpo:function(e,a,c,b,d){if(a==0)return c;if(a==d)return c+b;if((a/=d/2)<1)return b/2*Math.pow(2,10*(a-1))+c;return b/2*(-Math.pow(2,-10*--a)+2)+c},
    easeInCirc:function(e,a,c,b,d){return-b*(Math.sqrt(1-(a/=d)*a)-1)+c},easeOutCirc:function(e,a,c,b,d){return b*Math.sqrt(1-(a=a/d-1)*a)+c},easeInOutCirc:function(e,a,c,b,d){if((a/=d/2)<1)return-b/2*(Math.sqrt(1-a*a)-1)+c;return b/2*(Math.sqrt(1-(a-=2)*a)+1)+c},easeInElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);return-(g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f))+c},easeOutElastic:function(e,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d)==1)return c+b;f||(f=d*0.3);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);return g*Math.pow(2,-10*a)*Math.sin((a*d-e)*2*Math.PI/f)+b+c},easeInOutElastic:function(e,a,c,b,d){e=1.70158;var f=0,g=b;if(a==0)return c;if((a/=d/2)==2)return c+b;f||(f=d*0.3*1.5);if(g<Math.abs(b)){g=b;e=f/4}else e=f/(2*Math.PI)*Math.asin(b/g);if(a<1)return-0.5*g*Math.pow(2,10*(a-=1))*Math.sin((a*d-e)*2*Math.PI/f)+c;return g*Math.pow(2,-10*(a-=1))*Math.sin((a*
    d-e)*2*Math.PI/f)*0.5+b+c},easeInBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;return b*(a/=d)*a*((f+1)*a-f)+c},easeOutBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;return b*((a=a/d-1)*a*((f+1)*a+f)+1)+c},easeInOutBack:function(e,a,c,b,d,f){if(f==undefined)f=1.70158;if((a/=d/2)<1)return b/2*a*a*(((f*=1.525)+1)*a-f)+c;return b/2*((a-=2)*a*(((f*=1.525)+1)*a+f)+2)+c},easeInBounce:function(e,a,c,b,d){return b-jQuery.easing.easeOutBounce(e,d-a,0,b,d)+c},easeOutBounce:function(e,a,c,b,d){return(a/=
        d)<1/2.75?b*7.5625*a*a+c:a<2/2.75?b*(7.5625*(a-=1.5/2.75)*a+0.75)+c:a<2.5/2.75?b*(7.5625*(a-=2.25/2.75)*a+0.9375)+c:b*(7.5625*(a-=2.625/2.75)*a+0.984375)+c},easeInOutBounce:function(e,a,c,b,d){if(a<d/2)return jQuery.easing.easeInBounce(e,a*2,0,b,d)*0.5+c;return jQuery.easing.easeOutBounce(e,a*2-d,0,b,d)*0.5+b*0.5+c}});

/*!
 Colorbox 1.6.1
 license: MIT
 http://www.jacklmoore.com/colorbox
 */
(function(t,e,i){function n(i,n,o){var r=e.createElement(i);return n&&(r.id=Z+n),o&&(r.style.cssText=o),t(r)}function o(){return i.innerHeight?i.innerHeight:t(i).height()}function r(e,i){i!==Object(i)&&(i={}),this.cache={},this.el=e,this.value=function(e){var n;return void 0===this.cache[e]&&(n=t(this.el).attr("data-cbox-"+e),void 0!==n?this.cache[e]=n:void 0!==i[e]?this.cache[e]=i[e]:void 0!==X[e]&&(this.cache[e]=X[e])),this.cache[e]},this.get=function(e){var i=this.value(e);return t.isFunction(i)?i.call(this.el,this):i}}function h(t){var e=W.length,i=(A+t)%e;return 0>i?e+i:i}function a(t,e){return Math.round((/%/.test(t)?("x"===e?E.width():o())/100:1)*parseInt(t,10))}function s(t,e){return t.get("photo")||t.get("photoRegex").test(e)}function l(t,e){return t.get("retinaUrl")&&i.devicePixelRatio>1?e.replace(t.get("photoRegex"),t.get("retinaSuffix")):e}function d(t){"contains"in y[0]&&!y[0].contains(t.target)&&t.target!==v[0]&&(t.stopPropagation(),y.focus())}function c(t){c.str!==t&&(y.add(v).removeClass(c.str).addClass(t),c.str=t)}function g(e){A=0,e&&e!==!1&&"nofollow"!==e?(W=t("."+te).filter(function(){var i=t.data(this,Y),n=new r(this,i);return n.get("rel")===e}),A=W.index(_.el),-1===A&&(W=W.add(_.el),A=W.length-1)):W=t(_.el)}function u(i){t(e).trigger(i),ae.triggerHandler(i)}function f(i){var o;if(!G){if(o=t(i).data(Y),_=new r(i,o),g(_.get("rel")),!$){$=q=!0,c(_.get("className")),y.css({visibility:"hidden",display:"block",opacity:""}),I=n(se,"LoadedContent","width:0; height:0; overflow:hidden; visibility:hidden"),b.css({width:"",height:""}).append(I),j=T.height()+k.height()+b.outerHeight(!0)-b.height(),D=C.width()+H.width()+b.outerWidth(!0)-b.width(),N=I.outerHeight(!0),z=I.outerWidth(!0);var h=a(_.get("initialWidth"),"x"),s=a(_.get("initialHeight"),"y"),l=_.get("maxWidth"),f=_.get("maxHeight");_.w=(l!==!1?Math.min(h,a(l,"x")):h)-z-D,_.h=(f!==!1?Math.min(s,a(f,"y")):s)-N-j,I.css({width:"",height:_.h}),J.position(),u(ee),_.get("onOpen"),O.add(S).hide(),y.focus(),_.get("trapFocus")&&e.addEventListener&&(e.addEventListener("focus",d,!0),ae.one(re,function(){e.removeEventListener("focus",d,!0)})),_.get("returnFocus")&&ae.one(re,function(){t(_.el).focus()})}var p=parseFloat(_.get("opacity"));v.css({opacity:p===p?p:"",cursor:_.get("overlayClose")?"pointer":"",visibility:"visible"}).show(),_.get("closeButton")?B.html(_.get("close")).appendTo(b):B.appendTo("<div/>"),w()}}function p(){y||(V=!1,E=t(i),y=n(se).attr({id:Y,"class":t.support.opacity===!1?Z+"IE":"",role:"dialog",tabindex:"-1"}).hide(),v=n(se,"Overlay").hide(),M=t([n(se,"LoadingOverlay")[0],n(se,"LoadingGraphic")[0]]),x=n(se,"Wrapper"),b=n(se,"Content").append(S=n(se,"Title"),F=n(se,"Current"),P=t('<button type="button"/>').attr({id:Z+"Previous"}),K=t('<button type="button"/>').attr({id:Z+"Next"}),R=n("button","Slideshow"),M),B=t('<button type="button"/>').attr({id:Z+"Close"}),x.append(n(se).append(n(se,"TopLeft"),T=n(se,"TopCenter"),n(se,"TopRight")),n(se,!1,"clear:left").append(C=n(se,"MiddleLeft"),b,H=n(se,"MiddleRight")),n(se,!1,"clear:left").append(n(se,"BottomLeft"),k=n(se,"BottomCenter"),n(se,"BottomRight"))).find("div div").css({"float":"left"}),L=n(se,!1,"position:absolute; width:9999px; visibility:hidden; display:none; max-width:none;"),O=K.add(P).add(F).add(R)),e.body&&!y.parent().length&&t(e.body).append(v,y.append(x,L))}function m(){function i(t){t.which>1||t.shiftKey||t.altKey||t.metaKey||t.ctrlKey||(t.preventDefault(),f(this))}return y?(V||(V=!0,K.click(function(){J.next()}),P.click(function(){J.prev()}),B.click(function(){J.close()}),v.click(function(){_.get("overlayClose")&&J.close()}),t(e).bind("keydown."+Z,function(t){var e=t.keyCode;$&&_.get("escKey")&&27===e&&(t.preventDefault(),J.close()),$&&_.get("arrowKey")&&W[1]&&!t.altKey&&(37===e?(t.preventDefault(),P.click()):39===e&&(t.preventDefault(),K.click()))}),t.isFunction(t.fn.on)?t(e).on("click."+Z,"."+te,i):t("."+te).live("click."+Z,i)),!0):!1}function w(){var e,o,r,h=J.prep,d=++le;if(q=!0,U=!1,u(he),u(ie),_.get("onLoad"),_.h=_.get("height")?a(_.get("height"),"y")-N-j:_.get("innerHeight")&&a(_.get("innerHeight"),"y"),_.w=_.get("width")?a(_.get("width"),"x")-z-D:_.get("innerWidth")&&a(_.get("innerWidth"),"x"),_.mw=_.w,_.mh=_.h,_.get("maxWidth")&&(_.mw=a(_.get("maxWidth"),"x")-z-D,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.get("maxHeight")&&(_.mh=a(_.get("maxHeight"),"y")-N-j,_.mh=_.h&&_.h<_.mh?_.h:_.mh),e=_.get("href"),Q=setTimeout(function(){M.show()},100),_.get("inline")){var c=t(e);r=t("<div>").hide().insertBefore(c),ae.one(he,function(){r.replaceWith(c)}),h(c)}else _.get("iframe")?h(" "):_.get("html")?h(_.get("html")):s(_,e)?(e=l(_,e),U=_.get("createImg"),t(U).addClass(Z+"Photo").bind("error."+Z,function(){h(n(se,"Error").html(_.get("imgError")))}).one("load",function(){d===le&&setTimeout(function(){var e;_.get("retinaImage")&&i.devicePixelRatio>1&&(U.height=U.height/i.devicePixelRatio,U.width=U.width/i.devicePixelRatio),_.get("scalePhotos")&&(o=function(){U.height-=U.height*e,U.width-=U.width*e},_.mw&&U.width>_.mw&&(e=(U.width-_.mw)/U.width,o()),_.mh&&U.height>_.mh&&(e=(U.height-_.mh)/U.height,o())),_.h&&(U.style.marginTop=Math.max(_.mh-U.height,0)/2+"px"),W[1]&&(_.get("loop")||W[A+1])&&(U.style.cursor="pointer",t(U).bind("click."+Z,function(){J.next()})),U.style.width=U.width+"px",U.style.height=U.height+"px",h(U)},1)}),U.src=e):e&&L.load(e,_.get("data"),function(e,i){d===le&&h("error"===i?n(se,"Error").html(_.get("xhrError")):t(this).contents())})}var v,y,x,b,T,C,H,k,W,E,I,L,M,S,F,R,K,P,B,O,_,j,D,N,z,A,U,$,q,G,Q,J,V,X={html:!1,photo:!1,iframe:!1,inline:!1,transition:"elastic",speed:300,fadeOut:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,opacity:.9,preloading:!0,className:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0,closeButton:!0,fastIframe:!0,open:!1,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",photoRegex:/\.(gif|png|jp(e|g|eg)|bmp|ico|webp|jxr|svg)((#|\?).*)?$/i,retinaImage:!1,retinaUrl:!1,retinaSuffix:"@2x.$1",current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",returnFocus:!0,trapFocus:!0,onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,rel:function(){return this.rel},href:function(){return t(this).attr("href")},title:function(){return this.title},createImg:function(){var e=new Image,i=t(this).data("cbox-img-attrs");return"object"==typeof i&&t.each(i,function(t,i){e[t]=i}),e},createIframe:function(){var i=e.createElement("iframe"),n=t(this).data("cbox-iframe-attrs");return"object"==typeof n&&t.each(n,function(t,e){i[t]=e}),"frameBorder"in i&&(i.frameBorder=0),"allowTransparency"in i&&(i.allowTransparency="true"),i.name=(new Date).getTime(),i.allowFullScreen=!0,i}},Y="colorbox",Z="cbox",te=Z+"Element",ee=Z+"_open",ie=Z+"_load",ne=Z+"_complete",oe=Z+"_cleanup",re=Z+"_closed",he=Z+"_purge",ae=t("<a/>"),se="div",le=0,de={},ce=function(){function t(){clearTimeout(h)}function e(){(_.get("loop")||W[A+1])&&(t(),h=setTimeout(J.next,_.get("slideshowSpeed")))}function i(){R.html(_.get("slideshowStop")).unbind(s).one(s,n),ae.bind(ne,e).bind(ie,t),y.removeClass(a+"off").addClass(a+"on")}function n(){t(),ae.unbind(ne,e).unbind(ie,t),R.html(_.get("slideshowStart")).unbind(s).one(s,function(){J.next(),i()}),y.removeClass(a+"on").addClass(a+"off")}function o(){r=!1,R.hide(),t(),ae.unbind(ne,e).unbind(ie,t),y.removeClass(a+"off "+a+"on")}var r,h,a=Z+"Slideshow_",s="click."+Z;return function(){r?_.get("slideshow")||(ae.unbind(oe,o),o()):_.get("slideshow")&&W[1]&&(r=!0,ae.one(oe,o),_.get("slideshowAuto")?i():n(),R.show())}}();t[Y]||(t(p),J=t.fn[Y]=t[Y]=function(e,i){var n,o=this;return e=e||{},t.isFunction(o)&&(o=t("<a/>"),e.open=!0),o[0]?(p(),m()&&(i&&(e.onComplete=i),o.each(function(){var i=t.data(this,Y)||{};t.data(this,Y,t.extend(i,e))}).addClass(te),n=new r(o[0],e),n.get("open")&&f(o[0])),o):o},J.position=function(e,i){function n(){T[0].style.width=k[0].style.width=b[0].style.width=parseInt(y[0].style.width,10)-D+"px",b[0].style.height=C[0].style.height=H[0].style.height=parseInt(y[0].style.height,10)-j+"px"}var r,h,s,l=0,d=0,c=y.offset();if(E.unbind("resize."+Z),y.css({top:-9e4,left:-9e4}),h=E.scrollTop(),s=E.scrollLeft(),_.get("fixed")?(c.top-=h,c.left-=s,y.css({position:"fixed"})):(l=h,d=s,y.css({position:"absolute"})),d+=_.get("right")!==!1?Math.max(E.width()-_.w-z-D-a(_.get("right"),"x"),0):_.get("left")!==!1?a(_.get("left"),"x"):Math.round(Math.max(E.width()-_.w-z-D,0)/2),l+=_.get("bottom")!==!1?Math.max(o()-_.h-N-j-a(_.get("bottom"),"y"),0):_.get("top")!==!1?a(_.get("top"),"y"):Math.round(Math.max(o()-_.h-N-j,0)/2),y.css({top:c.top,left:c.left,visibility:"visible"}),x[0].style.width=x[0].style.height="9999px",r={width:_.w+z+D,height:_.h+N+j,top:l,left:d},e){var g=0;t.each(r,function(t){return r[t]!==de[t]?(g=e,void 0):void 0}),e=g}de=r,e||y.css(r),y.dequeue().animate(r,{duration:e||0,complete:function(){n(),q=!1,x[0].style.width=_.w+z+D+"px",x[0].style.height=_.h+N+j+"px",_.get("reposition")&&setTimeout(function(){E.bind("resize."+Z,J.position)},1),t.isFunction(i)&&i()},step:n})},J.resize=function(t){var e;$&&(t=t||{},t.width&&(_.w=a(t.width,"x")-z-D),t.innerWidth&&(_.w=a(t.innerWidth,"x")),I.css({width:_.w}),t.height&&(_.h=a(t.height,"y")-N-j),t.innerHeight&&(_.h=a(t.innerHeight,"y")),t.innerHeight||t.height||(e=I.scrollTop(),I.css({height:"auto"}),_.h=I.height()),I.css({height:_.h}),e&&I.scrollTop(e),J.position("none"===_.get("transition")?0:_.get("speed")))},J.prep=function(i){function o(){return _.w=_.w||I.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function a(){return _.h=_.h||I.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if($){var d,g="none"===_.get("transition")?0:_.get("speed");I.remove(),I=n(se,"LoadedContent").append(i),I.hide().appendTo(L.show()).css({width:o(),overflow:_.get("scrolling")?"auto":"hidden"}).css({height:a()}).prependTo(b),L.hide(),t(U).css({"float":"none"}),c(_.get("className")),d=function(){function i(){t.support.opacity===!1&&y[0].style.removeAttribute("filter")}var n,o,a=W.length;$&&(o=function(){clearTimeout(Q),M.hide(),u(ne),_.get("onComplete")},S.html(_.get("title")).show(),I.show(),a>1?("string"==typeof _.get("current")&&F.html(_.get("current").replace("{current}",A+1).replace("{total}",a)).show(),K[_.get("loop")||a-1>A?"show":"hide"]().html(_.get("next")),P[_.get("loop")||A?"show":"hide"]().html(_.get("previous")),ce(),_.get("preloading")&&t.each([h(-1),h(1)],function(){var i,n=W[this],o=new r(n,t.data(n,Y)),h=o.get("href");h&&s(o,h)&&(h=l(o,h),i=e.createElement("img"),i.src=h)})):O.hide(),_.get("iframe")?(n=_.get("createIframe"),_.get("scrolling")||(n.scrolling="no"),t(n).attr({src:_.get("href"),"class":Z+"Iframe"}).one("load",o).appendTo(I),ae.one(he,function(){n.src="//about:blank"}),_.get("fastIframe")&&t(n).trigger("load")):o(),"fade"===_.get("transition")?y.fadeTo(g,1,i):i())},"fade"===_.get("transition")?y.fadeTo(g,0,function(){J.position(0,d)}):J.position(g,d)}},J.next=function(){!q&&W[1]&&(_.get("loop")||W[A+1])&&(A=h(1),f(W[A]))},J.prev=function(){!q&&W[1]&&(_.get("loop")||A)&&(A=h(-1),f(W[A]))},J.close=function(){$&&!G&&(G=!0,$=!1,u(oe),_.get("onCleanup"),E.unbind("."+Z),v.fadeTo(_.get("fadeOut")||0,0),y.stop().fadeTo(_.get("fadeOut")||0,0,function(){y.hide(),v.hide(),u(he),I.remove(),setTimeout(function(){G=!1,u(re),_.get("onClosed")},1)}))},J.remove=function(){y&&(y.stop(),t[Y].close(),y.stop(!1,!0).remove(),v.remove(),G=!1,y=null,t("."+te).removeData(Y).removeClass(te),t(e).unbind("click."+Z).unbind("keydown."+Z))},J.element=function(){return t(_.el)},J.settings=X)})(jQuery,document,window);

if (window.location.href.indexOf("jacek", 0) !== -1 || window.location.href.indexOf("jacekjeznach", 0) !== -1) {

    !function (e, t, i, o) {
        "use strict";
        function n(e) {
            this.elem = e,
                this._init()
        }
        function a(t) {
            this.elem = e(t)
        }
        function s(e) {
            var t = this;
            t.base = e
        }
        function r(e) {
            var t = this;
            t.base = e
        }
        var u = i,
            d = t,
            l = (e(u), e(d), "magicWall"),
            m = "magicwall",
            c = {
                loading: "." + m + "-loading",
                hover: "." + m + "-hover",
                wrap: "." + m + "-wrap",
                thumb: "." + m + "-thumb",
                grid: "." + m + "-grid",
                gridItem: "." + m + "-grid-item"
            },
            p = function () {
                var e = t.getComputedStyle(i.documentElement, ""),
                    o = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || "" === e.OLink && ["", "o"])[1],
                    n = "WebKit|Moz|MS|O".match(new RegExp("(" + o + ")", "i"))[1];
                return {
                    dom: n,
                    lowercase: o,
                    css: "-" + o + "-",
                    js: o[0].toUpperCase() + o.substr(1)
                }
            } (); !
            function () {
                var n, a;
                return n = i.createElement("p"),
                    n.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                    i.body.insertBefore(n, i.body.lastChild),
                    a = t.getComputedStyle(n).getPropertyValue("transform"),
                    e(n).remove(),
                    a !== o ? "none" !== a: !1
            } (),
            n.prototype = {
                _init: function () {
                    var e = this;
                    e._addCssProps()
                },
                _raf: function () {
                    return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.msRequestAnimationFrame || t.oRequestAnimationFrame ||
                    function (e) {
                        return t.setTimeout(e, 1e3 / 60)
                    }
                } (),
                _caf: function () {
                    return t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.msCancelAnimationFrame || t.oCancelAnimationFrame ||
                    function (e) {
                        t.clearTimeout(e)
                    }
                } (),
                _easing: {
                    swing: function (e, t, i, o, n) {
                        return - o * (t /= n) * (t - 2) + i
                    }
                },
                _prefix: function () {
                    var e = t.getComputedStyle(i.documentElement, ""),
                        o = (Array.prototype.slice.call(e).join("").match(/-(moz|webkit|ms)-/) || "" === e.OLink && ["", "o"])[1],
                        n = "WebKit|Moz|MS|O".match(new RegExp("(" + o + ")", "i"))[1];
                    return {
                        dom: n,
                        lowercase: o,
                        css: "-" + o + "-",
                        js: o[0].toUpperCase() + o.substr(1)
                    }
                } (),
                _has3d: function () {
                    var n, a;
                    return n = i.createElement("p"),
                        n.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                        i.body.insertBefore(n, i.body.lastChild),
                        a = t.getComputedStyle(n).getPropertyValue("transform"),
                        e(n).remove(),
                        a !== o ? "none" !== a: !1
                } (),
                _addCssProps: function () {
                    for (var e = this, t = [{
                        publicName: "x",
                        privateName: "_x",
                        defaultValue: 0
                    },
                        {
                            publicName: "y",
                            privateName: "_y",
                            defaultValue: 0
                        },
                        {
                            publicName: "z",
                            privateName: "_z",
                            defaultValue: 0
                        },
                        {
                            publicName: "rotX",
                            privateName: "_rx",
                            defaultValue: 0
                        },
                        {
                            publicName: "rotY",
                            privateName: "_ry",
                            defaultValue: 0
                        },
                        {
                            publicName: "rotZ",
                            privateName: "_rz",
                            defaultValue: 0
                        },
                        {
                            publicName: "originX",
                            privateName: "_ox",
                            defaultValue: .5
                        },
                        {
                            publicName: "originY",
                            privateName: "_oy",
                            defaultValue: .5
                        },
                        {
                            publicName: "scaleX",
                            privateName: "_scx",
                            defaultValue: 1
                        },
                        {
                            publicName: "scaleY",
                            privateName: "_scy",
                            defaultValue: 1
                        },
                        {
                            publicName: "opacity",
                            privateName: "_op",
                            defaultValue: 1
                        }], i = 0, n = t.length; n > i; i++) e[t[i].publicName] = function (t) {
                        return function (i) {
                            return i === o ? e[t.privateName] !== o ? e[t.privateName] : t.defaultValue: (e[t.privateName] = i, e)
                        }
                    } (t[i])
                },
                _animate: function (e) {
                    function i() {
                        n = o._getValue(e.from, e.to, a, s, e.easing),
                        e.callback && e.callback(n, a, s, e.callbackParams),
                        e.onUpdate && e.onUpdate(n, a, s, e.onUpdateParams),
                            a == s ? (e.complete && e.complete(), e.onComplete && e.onComplete()) : e.context[e.id] = o._raf.call(t, function () {
                                i()
                            }),
                            a = Math.min(s, a + 1e3 / 60)
                    }
                    var o = this,
                        n = e.from,
                        a = -e.delay || 0,
                        s = e.duration ? e.duration: 1e3;
                    e.context[e.id] && o._caf.call(t, e.context[e.id]),
                    e.callback && e.callback(n, a, s, e.callbackParams),
                    e.onUpdate && e.onUpdate(n, a, s, e.onUpdateParams),
                        i()
                },
                _getValue: function (t, i, o, n, a) {
                    var s, r = this;
                    return s = e.easing && e.easing[a] ? e.easing[a] : r._easing.swing,
                        s(null, Math.max(0, o), t, i - t, n)
                },
                _doFromTo: function (t, i, o, n) {
                    var a, s = this,
                        r = t || i,
                        u = s.elem instanceof jQuery;
                    o = e.extend(!0, {},
                        o);
                    for (a in r) o = e.extend(!0, {},
                        o),
                        o.id = a + "Tween",
                        o.context = s,
                        o.from = [(t || {})[a], u ? s[a]() : s.elem[a]]["to" == n ? 1 : 0],
                        o.to = [(i || {})[a], u ? s[a]() : s.elem[a]]["from" == n ? 1 : 0],
                        o.callback = function (e) {
                            return function (t) {
                                u ? (s[e](t), s.update()) : s.elem[e] = t
                            }
                        } (a),
                        s[a + "TweenProps"] = o,
                        s._animate(o);
                    return s
                },
                set: function (e, t) {
                    var i = this;
                    e = e.split(",");
                    for (var o in e) i[e[o]](t);
                    return i
                },
                to: function (e, t) {
                    var i = this;
                    return i._doFromTo(null, e, t, "to"),
                        i
                },
                from: function (e, t) {
                    var i = this;
                    return i._doFromTo(e, null, t, "from"),
                        i
                },
                fromTo: function (e, t, i) {
                    var o = this;
                    return o._doFromTo(e, t, i, "fromTo"),
                        o
                },
                stop: function (e, i) {
                    var o = this;
                    e = e.split(",");
                    for (var n in e) i && o[e[n] + "TweenProps"] && o[e[n]](o[e[n] + "TweenProps"].to),
                        o._caf.call(t, o[e[n] + "Tween"]);
                    return o
                },
                end: function (e) {
                    var t = this;
                    return t.stop(e, !0),
                        t
                },
                update: function () {
                    var e, t = this,
                        i = [];
                    return i.push("translate3d(" + t.x() + "px, " + t.y() + "px, " + t.z() + "px)"),
                        i.push("rotateX(" + t.rotX() + "deg)"),
                        i.push("rotateY(" + t.rotY() + "deg)"),
                        i.push("rotateZ(" + t.rotZ() + "deg)"),
                        i.push("scaleX(" + t.scaleX() + ")"),
                        i.push("scaleY(" + t.scaleY() + ")"),
                        e = {},
                        e[t._prefix.css + "transform"] = i.join(" "),
                        e[t._prefix.css + "transform-origin"] = 100 * t.originX() + "% " + 100 * t.originY() + "%",
                        e.opacity = t.opacity(),
                        t.elem.css(e),
                        t
                }
            },
            e.fn[l] = function (t) {
                var i = Array.prototype.slice.call(arguments, 1);
                return e(this).each(function () {
                    var o = e(this).data("_" + l + "Instance");
                    ("string" != typeof t || o) && (o = o || new a(this), o.init(t, i), e(this).data("_" + l + "Instance", o))
                })
            },
            e.fn[l].options = {
                service: !1,
                jsonUrl: !1,
                appKey: !1,
                userID: !1,
                photoSetID: !1,
                photoCount: 50,
                photoSize: 2,
                maxItemWidth: 240,
                maxItemHeight: 160,
                columnsCount: !1,
                rowsCount: !1,
                minColumnsCount: 1,
                minRowsCount: 1,
                maxColumnsCount: !1,
                maxRowsCount: !1,
                thumbSizing: "cover",
                perspective: 600,
                delay: 1e3,
                loadingMode: "normal",
                paused: !1,
                useCache: !0,
                preloadBeforeSwitch: !1,
                animations: "*",
                excludedAnimations: "",
                pauseOnHover: !1,
                fixedClass: "fixed",
                breakpoints: !1,
                autoUpdateOnResize: 50,
                duration: 600,
                easing: "easeInOutCubic",
                rollInXDuration: !1,
                rollInXEasing: !1,
                rollInYDuration: !1,
                rollInYEasing: !1,
                rollOutXDuration: !1,
                rollOutXEasing: !1,
                rollOutYDuration: !1,
                rollOutYEasing: !1,
                flipXDuration: !1,
                flipXEasing: !1,
                flipYDuration: !1,
                flipYEasing: !1,
                slideXDuration: !1,
                slideXEasing: !1,
                slideYDuration: !1,
                slideYEasing: !1,
                slideRowDuration: !1,
                slideRowEasing: !1,
                slideColumnDuration: !1,
                slideColumnEasing: !1,
                fadeDuration: !1,
                fadeEasing: !1
            },
            e.fn[l].services = {
                _json: {
                    getURL: function (e) {
                        return e.jsonUrl || ""
                    },
                    processJSON: function (e) {
                        var t = e.photos,
                            i = 0,
                            o = [];
                        if (t) {
                            for (; i < t.length; i++) o.push(t[i].image_url);
                            return o
                        }
                        return ! 1
                    }
                },
                _flickr: {
                    getURL: function (e) {
                        var t = "http://api.flickr.com/services/rest/?method=";
                        return e.userID ? t += "flickr.people.getPublicPhotos&user_id=" + e.userID: e.photoSetID && (t += "flickr.photosets.getPhotos&media=photos&photoset_id=" + e.photoSetID),
                            t += "&format=json&nojsoncallback=1&per_page=" + e.photoCount + "&api_key=" + e.appKey
                    },
                    processJSON: function (e, t) {
                        var i = e.photos || e.photoset,
                            o = 0,
                            n = [],
                            a = ["q", "m", "n", "z"];
                        if (i) {
                            for (i = i.photo; o < i.length; o++) n.push("http://farm" + i[o].farm + ".static.flickr.com/" + i[o].server + "/" + i[o].id + "_" + i[o].secret + "_" + a[t.photoSize - 1] + ".jpg");
                            return n
                        }
                        return ! 1
                    }
                },
                _500px: {
                    getURL: function (e) {
                        return "https://api.500px.com/v1/photos?feature=user&username=" + e.userID + "&rpp=" + e.photoCount + "&image_size=" + e.photoSize + "&consumer_key=" + e.appKey
                    },
                    processJSON: function (e) {
                        var t = e.photos,
                            i = 0,
                            o = [];
                        if (t) {
                            for (; i < t.length; i++) o.push(t[i].image_url);
                            return o
                        }
                        return ! 1
                    }
                },
                _instagram: {
                    getURL: function (e) {
                        return "https://api.instagram.com/v1/users/" + e.userID + "/media/recent?count=" + e.photoCount + "&client_id=" + e.appKey + "&callback=?"
                    },
                    processJSON: function (e, t) {
                        var i = e.data,
                            o = 0,
                            n = [],
                            a = ["thumbnail", "thumbnail", "low_resolution", "standard_resolution"];
                        if (i) {
                            for (; o < i.length; o++) n.push(i[o].images[a[t.photoSize - 1]].url);
                            return n
                        }
                        return ! 1
                    }
                }
            },
            a.prototype = {
                init: function (i, n) {
                    var a = this;
                    if (a.api(i, n)) return a;
                    a.originalHTML = a.elem.clone(!0, !0),
                        a.manager = new s(a),
                        a.userOptions = e.extend(!0, {},
                            e.fn[l].options, i);
                    for (var r in e.fn[l].options) a.elem.data(r.toLowerCase()) !== o && (a.userOptions[r] = a.elem.data(r.toLowerCase()));
                    return a.updateOptions(),
                        a.setupStart(),
                        t.s = a,
                        a
                },
                updateOptions: function () {
                    var e, t, i, o, n = this,
                        a = n.elem.outerWidth();
                    for (e = n.userOptions.breakpoints ? n.userOptions.breakpoints.split(",") : [], i = e.length, t = 0; i > t; t++) a <= e[t] && n.userOptions["options_" + e[t]] && (o = n.userOptions["options_" + e[t]]);
                    return n.setOptions(o || n.userOptions),
                        n
                },
                setOptions: function (t) {
                    var i = this;
                    return i.options = e.extend(!0, {},
                        e.fn[l].options, t || i.options),
                        i
                },
                setupStart: function () {
                    var t = this;
                    return t.updateItemsList(),
                        t.elem.on("mouseover", c.grid + "," + c.gridItem, function () {
                            e(this).addClass(c.hover.slice(1))
                        }).on("mouseout", c.grid + "," + c.gridItem, function () {
                            e(this).removeClass(c.hover.slice(1)),
                            "all" == t.options.pauseOnHover && t.manager.reset()
                        }),
                        t.options.service ? t.loadJSON(t.options.service) : t.setupComplete(),
                        t
                },
                updateItemsList: function () {
                    var e = this;
                    return e.itemsList = e.elem.find(c.grid),
                        e.items = e.itemsList.children(),
                        e
                },
                loadJSON: function (t) {
                    var i = this,
                        o = i.options,
                        n = "_" + t,
                        a = e.fn[l].services[n].getURL(o);
                    return i.elem.addClass(c.loading.slice(1)),
                        e.getJSON(a, function (t) {
                            i.elem.removeClass(c.loading.slice(1)),
                                i.buildDOMItems(e.fn[l].services[n].processJSON(t, o)),
                                i.setupComplete()
                        }),
                        i
                },
                buildDOMItems: function (t) {
                    var i, o = this,
                        n = 0;
                    for (i = o.items.eq(0).clone(), i.length || (i = e("<li/>")), o.itemsList.empty(); n < t.length; n++) o.itemsList.append(i.clone().attr("data-thumb", t[n]));
                    return o.updateItemsList(),
                        o
                },
                setupComplete: function () {
                    var i = this;
                    return i.buildItems(i.items),
                        i.gridBuild(),
                        i.loadItems(),
                        i.manager.init(),
                    i.options.autoUpdateOnResize !== !1 && i.options.autoUpdateOnResize > 0 && e(t).resize(function () {
                        clearTimeout(i.autoUpdateOnResizeTimer),
                            i.autoUpdateOnResizeTimer = setTimeout(function () {
                                    i.update()
                                },
                                i.options.autoUpdateOnResize)
                    }),
                        i
                },
                buildItems: function (t) {
                    var i = this;
                    return t.each(function () {
                        var t = new r(i);
                        t.init(e(this)),
                            t.setIndex(e(this).index())
                    }),
                        i
                },
                gridBuild: function () {
                    var e = this,
                        t = 0;
                    for (e.gridCalculations(), e.items.removeClass(c.gridItem.slice(1)); t < e.xCount * e.yCount; t++) e.items.filter("[data-index=" + t + "]").addClass(c.gridItem.slice(1));
                    return e.gridLayout(),
                        e
                },
                gridCalculations: function () {
                    var e, t, i, o, n = this,
                        a = n.elem.width(),
                        s = n.elem.height();
                    return n.options.columnsCount ? n.xCount = n.options.columnsCount: (e = Math.floor(a / n.options.maxItemWidth), t = Math.ceil(a / n.options.maxItemWidth), n.xCount = a / e > n.options.maxItemWidth ? t: e, n.xCount = Math.max(n.options.minColumnsCount || 1, n.xCount), n.options.maxColumnsCount && (n.xCount = Math.min(n.options.maxColumnsCount, n.xCount))),
                        n.options.rowsCount ? n.yCount = n.options.rowsCount: (i = Math.floor(s / n.options.maxItemHeight), o = Math.ceil(s / n.options.maxItemHeight), n.yCount = s / i > n.options.maxItemHeight ? o: i, n.yCount = Math.max(n.options.minRowsCount || 1, n.yCount), n.options.maxRowsCount && (n.yCount = Math.min(n.options.maxRowsCount, n.yCount))),
                        n.itemWidth = Math.ceil(a / n.xCount),
                        n.itemHeight = Math.ceil(s / n.yCount),
                        n
                },
                gridLayout: function () {
                    var t, i, o, n, a = this;
                    return o = a.items.hide().filter(c.gridItem),
                        o.each(function () {
                            n = a.getItemObject(e(this)),
                                t = n.index % a.xCount,
                                i = Math.floor(n.index / a.xCount),
                                n.setPosition(t, i).elem.show()
                        }),
                        a
                },
                loadItems: function (t) {
                    function i(e) {
                        o = e <= r.length - 1,
                        o && (n = a.getItemObject(r.eq(e)), n.loaded ? o && i(e + 1) : (n.elem.bind("loaded." + m, function () {
                            i(e + 1)
                        }), o && !n.loading && n.load()))
                    }
                    var o, n, a = this,
                        s = t || 0,
                        r = a.items.filter(c.gridItem);
                    return r.length,
                        "normal" == a.options.loadingMode ? r.each(function () {
                            a.getItemObject(e(this)).load()
                        }) : i(s),
                        a
                },
                excludeAnimations: function (e) {
                    var t, i = this,
                        o = [],
                        n = 0;
                    if (!i.options.excludedAnimations) return e;
                    for (t = i.options.excludedAnimations.split(","); n < e.length; n++) - 1 == t.indexOf(e[n]) && o.push(e[n]);
                    return o
                },
                parseAnimationOptions: function (t) {
                    var i, o = this,
                        n = ["flipX", "flipY", "rollInX", "rollInY", "rollOutX", "rollOutY", "slideX", "slideY", "slideRow", "slideColumn", "fade"];
                    return t.animation ? i = t.animation: "*" == o.options.animations ? (i = o.excludeAnimations(n), i = (Math.random() < .5 ? "": "-") + i[Math.floor(Math.random() * i.length)]) : (o.selectedAnimations && o.selectedAnimations.length || (o.selectedAnimations = o.options.animations.split(":")), i = o.excludeAnimations("*" == o.selectedAnimations[0] ? n: o.selectedAnimations[0].split(",")), i = i[Math.floor(Math.random() * i.length)], o.selectedAnimations.splice(0, 1)),
                    -1 == n.indexOf(i.replace("-", "")) && (i = "fade"),
                        e.extend(!0, t, {
                            animation: i,
                            type: i.replace(/[XY-]/g, ""),
                            dir: 0 == i.indexOf("-", 0) ? -1 : 1,
                            axis: i.replace(/[^XY]/g, ""),
                            duration: t.duration || o.options[i.replace("-", "") + "Duration"] || o.options.duration,
                            easing: t.easing || o.options[i.replace("-", "") + "Easing"] || o.options.easing
                        })
                },
                switchItems: function (e, t, i, n, a) {
                    var s, r, u, d, l = this;
                    return d = l.parseAnimationOptions({
                        animation: i,
                        duration: n,
                        easing: a
                    }),
                        l.updateItemsList(),
                        l.g = r = l.items.filter(c.gridItem),
                        l.h = u = l.items.not(r),
                        "all" == l.options.pauseOnHover && l.itemsList.hasClass(c.hover.slice(1)) ? !1 : ("item" == l.options.pauseOnHover && (r = l.excludeFromSwitch(r, c.hover, d)), r = l.excludeFromSwitch(r, "." + l.options.fixedClass, d), r.length && u.length ? (e === o && (e = r.eq(Math.floor(Math.random() * r.length)).attr("data-index")), t === o && (t = u.eq(Math.floor(Math.random() * u.length)).attr("data-index")), s = l.getItemObject(l.getItem(t)), l.options.preloadBeforeSwitch && s.loaded !== !0 ? (s.elem.bind("loaded." + m, function () {
                            s.elem.unbind("loaded." + m),
                                l.doSwitchItems(e, t, d)
                        }), s.load()) : l.doSwitchItems(e, t, d), void 0) : l.manager.reset())
                },
                excludeFromSwitch: function (t, i, o) {
                    var n, a, s = this;
                    return t.filter(i).each(function () {
                        if ("rollOut" == o.type && (t = t.not(s.getItem(e(this).attr("data-index") - o.dir * ("X" == o.axis ? 1 : s.xCount)))), "slideRow" == o.type || "slideColumn" == o.type) for (n = s.getItemObject(e(this)), a = 0; a < ("slideRow" == o.type ? s.xCount: s.yCount); a++) t = t.not(s.getItem(s.getIndex("slideRow" == o.type ? a: n.px, "slideRow" == o.type ? n.py: a)));
                        t = t.not(e(this))
                    }),
                        t
                },
                doSwitchItems: function (e, t, i) {
                    var o, n, a, s, r, u, d, l = this;
                    o = l.getItem(e),
                        n = l.getItem(t),
                        s = l.getItemObject(o),
                        r = l.getItemObject(n),
                        o.css("z-index", 9999),
                        n.css("z-index", 9998),
                        i.onComplete = function () {
                            o.hide(),
                                s.reset(),
                                l.update()
                        };
                    var m = 180 * Math.atan(.5 * ("Y" == i.axis ? l.itemHeight: l.itemWidth) / l.options.perspective) / Math.PI;
                    switch (i.type) {
                        case "flip":
                            l.swapItems(s, r),
                                r.setPosition(s.px, s.py).load().elem.show(),
                                d = 0,
                                i.onUpdate = function (e) {
                                    return function (t) {
                                        Math.abs(t) >= 90 && 0 == d && (d = 1, e.elem.hide()),
                                            r.css3d["rot" + i.axis](t - 180 * i.dir).update()
                                    }
                                } (s),
                                s.css3d.fromTo({
                                    X: {
                                        rotX: 0
                                    },
                                    Y: {
                                        rotY: 0
                                    }
                                } [i.axis], {
                                    X: {
                                        rotX: 180 * i.dir
                                    },
                                    Y: {
                                        rotY: 180 * i.dir
                                    }
                                } [i.axis], i);
                            break;
                        case "rollIn":
                            o.css("z-index", 9998),
                                n.css("z-index", 9999),
                                r.setPosition(s.px, s.py).load().elem.show(),
                                l.swapItems(s, r),
                                i.delay = .25 * i.duration,
                                r.css3d["origin" + i.axis](i.dir > 0 ? 0 : 1).fromTo({
                                    X: {
                                        rotY: i.dir * (90 + m)
                                    },
                                    Y: {
                                        rotX: -i.dir * (90 + m)
                                    }
                                } [i.axis], {
                                    X: {
                                        rotY: 0
                                    },
                                    Y: {
                                        rotX: 0
                                    }
                                } [i.axis], i),
                                delete i.onUpdate,
                                delete i.onComplete,
                                r.css3d.fromTo({
                                        opacity: 0
                                    },
                                    {
                                        opacity: 1
                                    },
                                    i),
                                i.delay = 0,
                                s.css3d["origin" + i.axis](i.dir > 0 ? 1 : 0).fromTo({
                                    X: {
                                        rotY: 0
                                    },
                                    Y: {
                                        rotX: 0
                                    }
                                } [i.axis], {
                                    X: {
                                        rotY: -i.dir * (90 + m)
                                    },
                                    Y: {
                                        rotX: i.dir * (90 + m)
                                    }
                                } [i.axis], i),
                                s.css3d.fromTo({
                                        opacity: 1
                                    },
                                    {
                                        opacity: 0
                                    },
                                    i);
                            break;
                        case "rollOut":
                            r.setPosition(s.px, s.py).load().elem.show(),
                            {
                                X: s.px > 0 && i.dir < 0 || s.px < l.xCount - 1 && i.dir > 0,
                                Y: s.py > 0 && i.dir < 0 || s.py < l.yCount - 1 && i.dir > 0
                            } [i.axis] && (a = l.getItem(l.getIndex({
                                X: s.px + i.dir,
                                Y: s.px
                            } [i.axis], {
                                X: s.py,
                                Y: s.py + i.dir
                            } [i.axis])), u = l.getItemObject(a)),
                                l.swapItems(s, r),
                            a && l.swapItems(s, u),
                                d = 0,
                                i.onUpdate = function (e) {
                                    return function (t) {
                                        a ? Math.abs(t) >= 90 - m && 0 == d && (d = 1, e.css3d["scale" + i.axis]( - 1)["origin" + i.axis](i.dir > 0 ? 0 : 1)[i.axis.toLowerCase()]({
                                            X: l.itemWidth * i.dir,
                                            Y: l.itemHeight * i.dir
                                        } [i.axis]).update()) : e.css3d.opacity(1 - Math.max(0, (t - 40) / 80)).update()
                                    }
                                } (s),
                                s.css3d["origin" + i.axis](i.dir > 0 ? 1 : 0).fromTo({
                                    X: {
                                        rotY: 0
                                    },
                                    Y: {
                                        rotX: 0
                                    }
                                } [i.axis], {
                                    X: {
                                        rotY: i.dir * (a ? 180 : 120)
                                    },
                                    Y: {
                                        rotX: -i.dir * (a ? 180 : 120)
                                    }
                                } [i.axis], i),
                            a && (o = a, s = u);
                            break;
                        case "slide":
                            l.swapItems(s, r),
                                o.css("overflow", "hidden"),
                                n.css("overflow", "hidden"),
                                r.setPosition(s.px, s.py).load().elem.show(),
                                s.css3d.fromTo({
                                    X: {
                                        x: 0
                                    },
                                    Y: {
                                        y: 0
                                    }
                                } [i.axis], {
                                    X: {
                                        x: (i.dir > 0 ? 1 : -1) * l.itemWidth
                                    },
                                    Y: {
                                        y: (i.dir > 0 ? 1 : -1) * l.itemHeight
                                    }
                                } [i.axis], i),
                                r.css3d.fromTo({
                                    X: {
                                        x: (i.dir > 0 ? -1 : 1) * l.itemWidth
                                    },
                                    Y: {
                                        y: (i.dir > 0 ? -1 : 1) * l.itemHeight
                                    }
                                } [i.axis], {
                                    X: {
                                        x: 0
                                    },
                                    Y: {
                                        y: 0
                                    }
                                } [i.axis], i);
                            break;
                        case "slideRow":
                            for (o = l.getItem(l.getIndex(i.dir > 0 ? l.xCount - 1 : 0, s.py)), s = l.getItemObject(o), o.css("overflow", "hidden"), n.css("overflow", "hidden"), l.swapItems(s, r), d = 0; d < l.xCount - 1; d++) {
                                var p = l.getItem(r.index + (i.dir > 0 ? -1 : 1) * (d + 1)),
                                    h = l.getItemObject(p);
                                h.setIndex(h.index + (i.dir > 0 ? 1 : -1))
                            }
                            r.setIndex(r.index + (i.dir > 0 ? -1 : 1) * (l.xCount - 1)),
                                r.setPosition(i.dir > 0 ? 0 : l.xCount - 1, s.py).load().elem.show(),
                                i.onUpdate = function (e) {
                                    for (d = 0; d < l.xCount - 1; d++) {
                                        var t = l.getItem(r.index + (i.dir > 0 ? 1 : -1) * (d + 1)),
                                            o = l.getItemObject(t);
                                        o.css3d.x(e).update()
                                    }
                                    r.css3d.x(e + (i.dir > 0 ? -1 : 1) * l.itemWidth).update()
                                },
                                s.css3d.to({
                                        x: (i.dir > 0 ? 1 : -1) * l.itemWidth
                                    },
                                    i);
                            break;
                        case "slideColumn":
                            for (o = l.getItem(l.getIndex(s.px, i.dir > 0 ? l.yCount - 1 : 0)), s = l.getItemObject(o), o.css("overflow", "hidden"), n.css("overflow", "hidden"), l.swapItems(s, r), d = 0; d < l.yCount - 1; d++) {
                                var p = l.getItem(r.index + (i.dir > 0 ? -1 : 1) * (d + 1) * l.xCount),
                                    h = l.getItemObject(p);
                                h.setIndex(h.index + (i.dir > 0 ? 1 : -1) * l.xCount)
                            }
                            r.setIndex(r.index + (i.dir > 0 ? -1 : 1) * l.xCount * (l.yCount - 1)),
                                r.setPosition(r.index % l.xCount, i.dir > 0 ? 0 : l.yCount - 1).load().elem.show(),
                                i.onUpdate = function (e) {
                                    for (d = 0; d < l.yCount - 1; d++) {
                                        var t = l.getItem(r.index + (i.dir > 0 ? 1 : -1) * (d + 1) * l.xCount),
                                            o = l.getItemObject(t);
                                        o.css3d.y(e).update()
                                    }
                                    r.css3d.y(e + (i.dir > 0 ? -1 : 1) * l.itemHeight).update()
                                },
                                s.css3d.to({
                                        y: (i.dir > 0 ? 1 : -1) * l.itemHeight
                                    },
                                    i);
                            break;
                        default:
                        case "fade":
                            l.swapItems(s, r),
                                r.setPosition(s.px, s.py).load().elem.show(),
                                s.css3d.fromTo({
                                        opacity: 1
                                    },
                                    {
                                        opacity: 0
                                    },
                                    i)
                    }
                    return o.removeClass(c.gridItem.slice(1)),
                        n.addClass(c.gridItem.slice(1)),
                        l
                },
                swapItems: function (e, t) {
                    var i, o = this;
                    return i = e.index,
                        e.setIndex(t.index),
                        t.setIndex(i),
                        o
                },
                appendItems: function (t) {
                    var i = this,
                        o = e(t).appendTo(i.items.parent());
                    return i.updateItemsList(),
                        i.buildItems(o),
                        i.update(),
                        i
                },
                removeItems: function (t) {
                    var i = this;
                    return e(t).remove(),
                        i.updateItemsList(),
                        i.update(),
                        i
                },
                resetItems: function () {
                    var t = this;
                    return t.items.each(function () {
                        t.getItemObject(e(this)).reset()
                    }),
                        t
                },
                getItem: function (e) {
                    return this.items.filter("[data-index='" + e + "']")
                },
                getItemObject: function (e) {
                    return e.get(0)["_" + l + "Item"]
                },
                getIndex: function (e, t) {
                    return t * this.xCount + e
                },
                update: function () {
                    var e = this;
                    return e.updateOptions(),
                        e.resetItems(),
                        e.manager.reset(),
                        e.gridBuild(),
                        e.loadItems(),
                        e
                },
                destroy: function () {
                    var e = this;
                    return e.manager.stop(),
                        e.elem.replaceWith(e.originalHTML),
                        e
                },
                api: function (t, i) {
                    var o = this;
                    if ("string" == typeof t) {
                        switch (t) {
                            case "appendItems":
                                o.appendItems(i[0]);
                                break;
                            case "removeItems":
                                o.removeItems(i[0]);
                                break;
                            case "update":
                                o.update();
                                break;
                            case "destroy":
                                o.destroy();
                                break;
                            case "start":
                                o.manager.start();
                                break;
                            case "stop":
                                o.manager.stop();
                                break;
                            case "switchItem":
                                o.switchItems(i[0], !1, i[1], i[2], i[3]);
                                break;
                            case "option":
                                var n = {};
                                "string" == typeof i[0] ? n[i[0]] = i[1] : n = i[0],
                                    o.userOptions = e.extend(!0, {},
                                        o.userOptions, n),
                                    o.update()
                        }
                        return ! 0
                    }
                    return ! 1
                }
            },
            s.prototype = {
                init: function () {
                    var e = this;
                    return e.paused = e.base.options.paused,
                    e.paused || e.start(),
                        e
                },
                reset: function () {
                    var e = this,
                        t = e.paused;
                    return e.stop(),
                    t || e.start(),
                        e
                },
                start: function () {
                    var e = this;
                    return e.stop().tick(),
                        e.paused = !1,
                        e
                },
                stop: function () {
                    var e = this;
                    return e.paused = !0,
                        clearTimeout(e.timer),
                        e
                },
                tick: function () {
                    var e = this,
                        t = e.base.options;
                    e.timer = setTimeout(function () {
                            e.paused || e.base.switchItems()
                        },
                        t.delay)
                }
            },
            r.prototype = {
                init: function (t) {
                    var i = this;
                    return i.elem = e(t),
                        i.elem.get(0)["_" + l + "Item"] = i,
                        i.elem.css(p.css + "perspective", i.base.options.perspective),
                        i.elem.on("mouseenter", {
                                t: i
                            },
                            i.handleMouseOver),
                        i.elem.on("mouseleave", {
                                t: i
                            },
                            i.handleMouseOut),
                        i.elem.on("touchend", {
                                t: i
                            },
                            i.handleTouchEnd),
                        i.content = i.elem.wrapInner(e("<div/>").addClass(c.wrap.slice(1))).children().eq(0),
                        i.css3d = new n(i.content),
                        i
                },
                handleMouseOver: function (e) {
                    var t = e.data.t;
                    t.mouseEvents && t.elem.addClass(c.hover).siblings().removeClass(c.hover)
                },
                handleMouseOut: function (e) {
                    var t = e.data.t;
                    t.mouseEvents && t.elem.removeClass(c.hover)
                },
                handleTouchEnd: function (e) {
                    var t = e.data.t;
                    if (t.mouseEvents) return t.elem.hasClass(c.hover) ? void 0 : (e.preventDefault(), t.handleMouseOver(e), !1)
                },
                load: function () {
                    var t = this,
                        i = t.elem.data("thumb"),
                        o = new Image;
                    return t.loading || t.loaded || !i ? (t.loaded && t.elem.trigger("loaded." + m).unbind("loaded." + m), t) : (t.loading = !0, t.elem.addClass(c.loading.slice(1)), o.onload = function () {
                        t.content.append(e("<div/>").addClass(c.thumb.slice(1)).css({
                            "background-image": "url(" + (i + (t.base.options.useCache ? "": "?sid=" + Math.floor(9e10 * Math.random()))) + ")",
                            "background-position": "center center",
                            "background-repeat": "no-repeat",
                            "background-size": t.base.options.thumbSizing
                        }).fadeTo(0, 0).fadeTo(300, 1)),
                            t.loading = !1,
                            t.loaded = !0,
                            t.elem.removeClass(c.loading.slice(1)),
                            t.elem.trigger("loaded." + m).unbind("loaded." + m)
                    },
                        o.src = i, t)
                },
                setPosition: function (e, t) {
                    var i = this;
                    return i.px = e,
                        i.py = t,
                        i.update(),
                        i
                },
                setIndex: function (e) {
                    var t = this;
                    return t.index = e,
                        t.elem.attr("data-index", e),
                        t
                },
                update: function () {
                    var e = this;
                    return e.elem.css({
                        width: e.base.itemWidth,
                        height: e.base.itemHeight,
                        left: e.px * e.base.itemWidth,
                        top: e.py * e.base.itemHeight
                    }),
                        e
                },
                reset: function () {
                    var e = this;
                    return e.elem.css({
                        "z-index": 0,
                        overflow: "visible"
                    }),
                        e.css3d.stop("x,y,z,rotX,rotY,rotZ,originX,originY,scaleX,scaleY,opacity").set("x,y,z,rotX,rotY,rotZ", 0).set("originX,originY", .5).set("scaleX,scaleY", 1).opacity(1).update(),
                        e
                }
            }
    } (jQuery, window, document)
}