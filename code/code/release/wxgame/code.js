//第三方库的导入
// const THREE=require('./three.min.js');
var AV;
var interpreter;
var Stomp;
// const { Realtime, Event, TextMessage } = require('./realtime.weapp.min.js');
if (typeof require != 'undefined') // 保证在laya这边也正常运行不保错
{
    AV = require("./av-weapp-min.js");
    require("./ald-game.js");
    interpreter = require("./interpreter.js");
	Stomp=require("./stomp.js").Stomp;
}
var Laya=window.Laya=function(l,t){var c={__internals:[],__packages:{},__classmap:{Object:Object,Function:Function,Array:Array,String:String},__sysClass:{object:"Object",array:"Array",string:"String",dictionary:"Dictionary"},__propun:{writable:!0,enumerable:!1,configurable:!0},__presubstr:String.prototype.substr,__substr:function(t,e){return 1==arguments.length?c.__presubstr.call(this,t):c.__presubstr.call(this,t,0<e?e:this.length+e)},__init:function(t){t.forEach(function(t){t.__init$&&t.__init$()})},__isClass:function(t){return t&&(t.__isclass||t==Object||t==String||t==Array)},__newvec:function(t,e){var i=[];i.length=t;for(var n=0;n<t;n++)i[n]=e;return i},__extend:function(t,e){for(var i in e)if(e.hasOwnProperty(i)){var n=Object.getOwnPropertyDescriptor(e,i),s=n.get,r=n.set;s||r?s&&r?Object.defineProperty(t,i,n):(s&&Object.defineProperty(t,i,s),r&&Object.defineProperty(t,i,r)):t[i]=e[i]}function o(){c.un(this,"constructor",t)}o.prototype=e.prototype,t.prototype=new o,c.un(t.prototype,"__imps",c.__copy({},e.prototype.__imps))},__copy:function(t,e){if(!e)return null;for(var i in t=t||{},e)t[i]=e[i];return t},__package:function(t,e){if(!c.__packages[t]){c.__packages[t]=!0;var i=l,n=t.split(".");if(1<n.length)for(var s=0,r=n.length-1;s<r;s++){var o=i[n[s]];i=o||(i[n[s]]={})}i[n[n.length-1]]||(i[n[n.length-1]]=e||{})}},__hasOwnProperty:function(t,e){return e=e||this,Object.hasOwnProperty.call(e,t)||function t(e,i){if(Object.hasOwnProperty.call(i.prototype,e))return!0;var n=i.prototype.__super;return null==n?null:t(e,n)}(t,e.__class)},__typeof:function(t,e){if(!t||!e)return!1;if(e===String)return"string"==typeof t;if(e===Number)return"number"==typeof t;if(e.__interface__)e=e.__interface__;else if("string"!=typeof e)return t instanceof e;return t.__imps&&t.__imps[e]||t.__class==e},__as:function(t,e){return this.__typeof(t,e)?t:null},__int:function(t){return t?parseInt(t):0},interface:function(t,e){c.__package(t,{});var i=c.__internals,n=i[t]=i[t]||{self:t};if(e){var s=e.split(",");n.extend=[];for(var r=0;r<s.length;r++){var o=s[r];i[o]=i[o]||{self:o},n.extend.push(i[o])}}var a=l,h=t.split(".");for(r=0;r<h.length-1;r++)a=a[h[r]];a[h[h.length-1]]={__interface__:t}},class:function(t,e,i,n){if(i&&c.__extend(t,i),e)if(c.__package(e,t),c.__classmap[e]=t,0<e.indexOf(".")){if(0==e.indexOf("laya.")){var s=e.split(".");n=n||s[s.length-1],c[n]&&console.log("Warning!,this class["+n+"] already exist:",c[n]),c[n]=t}}else"Main"==e?l.Main=t:(c[e]&&console.log("Error!,this class["+e+"] already exist:",c[e]),c[e]=t);var r=c.un,o=t.prototype;r(o,"hasOwnProperty",c.__hasOwnProperty),r(o,"__class",t),r(o,"__super",i),r(o,"__className",e),r(t,"__super",i),r(t,"__className",e),r(t,"__isclass",!0),r(t,"super",function(t){this.__super.call(t)})},imps:function(t,e){if(!e)return null;var s=t.__imps||c.un(t,"__imps",{});function r(t){var e,i;if((e=c.__internals[t])&&(s[t]=!0,i=e.extend))for(var n=0;n<i.length;n++)r(i[n].self)}for(var i in e)r(i)},superSet:function(t,e,i,n){var s=t.prototype["_$set_"+i];s&&s.call(e,n)},superGet:function(t,e,i){var n=t.prototype["_$get_"+i];return n?n.call(e):null},getset:function(t,e,i,n,s){t?(n&&(e["_$GET_"+i]=n),s&&(e["_$SET_"+i]=s)):(n&&c.un(e,"_$get_"+i,n),s&&c.un(e,"_$set_"+i,s)),n&&s?Object.defineProperty(e,i,{get:n,set:s,enumerable:!1,configurable:!0}):(n&&Object.defineProperty(e,i,{get:n,enumerable:!1,configurable:!0}),s&&Object.defineProperty(e,i,{set:s,enumerable:!1,configurable:!0}))},static:function(i,n){for(var s=0,t=n.length;s<t;s+=2)if("length"==n[s])i.length=n[s+1].call(i);else{function e(){var e=n[s],t=n[s+1];Object.defineProperty(i,e,{get:function(){return delete this[e],this[e]=t.call(this)},set:function(t){delete this[e],this[e]=t},enumerable:!0,configurable:!0})}e()}},un:function(t,e,i){return i||(i=t[e]),c.__propun.value=i,Object.defineProperty(t,e,c.__propun),i},uns:function(e,t){t.forEach(function(t){c.un(e,t)})}};return l.console=l.console||{log:function(){}},l.trace=l.console.log,Error.prototype.throwError=function(){throw arguments},Object.defineProperty(Array.prototype,"fixed",{enumerable:!1}),c}(window,document);!function(t,e,i){i.un,i.uns,i.static,i.class,i.getset,i.__newvec}(window,document,Laya),function(r,e,b){b.un,b.uns;var h=b.static,p=b.class,c=b.getset;b.__newvec;b.interface("laya.runtime.IMarket"),b.interface("laya.filters.IFilter"),b.interface("laya.display.ILayout"),b.interface("laya.resource.IDispose"),b.interface("laya.runtime.IPlatform"),b.interface("laya.resource.IDestroy"),b.interface("laya.runtime.IConchNode"),b.interface("laya.filters.IFilterAction"),b.interface("laya.runtime.ICPlatformClass"),b.interface("laya.resource.ICreateResource"),b.interface("laya.runtime.IConchRenderObject"),b.interface("laya.runtime.IPlatformClass","laya.runtime.IPlatform");var A=(p(o,"laya.utils.RunDriver"),o.FILTER_ACTIONS=[],o.pixelRatio=-1,o._charSizeTestDiv=null,o.now=function(){return Date.now()},o.getWindow=function(){return r},o.getPixelRatio=function(){if(o.pixelRatio<0){var t=Q.context,e=t.backingStorePixelRatio||t.webkitBackingStorePixelRatio||t.mozBackingStorePixelRatio||t.msBackingStorePixelRatio||t.oBackingStorePixelRatio||t.backingStorePixelRatio||1;(o.pixelRatio=(Q.window.devicePixelRatio||1)/e)<1&&(o.pixelRatio=1)}return o.pixelRatio},o.getIncludeStr=function(t){return null},o.createShaderCondition=function(t){var e="(function() {return "+t+";})";return b._runScript(e)},o.fontMap=[],o.measureText=function(t,e){var i=o.hanzi.test(t);if(i&&o.fontMap[e])return o.fontMap[e];var n=Q.context;n.font=e;var s=n.measureText(t);return i&&(o.fontMap[e]=s),s},o.getWebGLContext=function(t){},o.beginFlush=function(){},o.endFinish=function(){},o.addToAtlas=null,o.flashFlushImage=function(t){},o.drawToCanvas=function(t,e,i,n,s,r){var o=Ht.create("2D"),a=new $(i,n,o);return V.renders[e]._fun(t,a,s,r),o},o.createParticleTemplate2D=null,o.createGLTextur=null,o.createWebGLContext2D=null,o.changeWebGLSize=function(t,e){},o.createRenderSprite=function(t,e){return new V(t,e)},o.createFilterAction=function(t){return new M},o.createGraphics=function(){return new _},o.clear=function(t){X._context.ctx.clear()},o.cancelLoadByUrl=function(t){},o.clearAtlas=function(t){},o.isAtlas=function(t){return!1},o.addTextureToAtlas=function(t){},o.getTexturePixels=function(t,e,i,n,s){return null},o.skinAniSprite=function(){return null},o.update3DLoop=function(){},h(o,["hanzi",function(){return this.hanzi=new RegExp("^[一-龥]$")}]),o);function o(){}c(1,b,"alertGlobalError",null,function(t){var r=0;Q.window.onerror=t?function(t,e,i,n,s){r++<5&&s&&alert("出错啦，请把此信息截图给研发商\n"+t+"\n"+s.stack||s)}:null}),b.init=function(t,e,i){for(var n=[],s=2,r=arguments.length;s<r;s++)n.push(arguments[s]);if(!b._isinit){ArrayBuffer.prototype.slice||(ArrayBuffer.prototype.slice=b._arrayBufferSlice),b._isinit=!0,Q.__init__(),j.__init__(),_.__init__(),b.timer=new gt,b.scaleTimer=new gt,b.loader=new Lt,xt.__init__(),s=0;for(var o=n.length;s<o;s++)n[s].enable&&n[s].enable();return d.__init__(),a.__init__(),K.__init__(),tt.beginCheck(),b._currentStage=b.stage=new Ut,b.stage.conchModel&&b.stage.conchModel.setRootNode(),b._getUrlPath(),b.render=new X(0,0),b.stage.size(t,e),V.__init__(),m.__init__(),x.instance.__init__(b.stage,X.canvas),$t.__init__(),N.autoStopMusic=!0,G.__init__(),X.canvas}},b._getUrlPath=function(){var t=Q.window.location,e=t.pathname;e=":"==e.charAt(2)?e.substring(1):e,Y.rootPath=Y.basePath=Y.getPath("file:"==t.protocol?e:t.protocol+"//"+t.host+t.pathname)},b._arrayBufferSlice=function(t,e){var i=new Uint8Array(this,t,e-t),n=new Uint8Array(i.length);return n.set(i),n.buffer},b._runScript=function(t){return Q.window[b._evcode](t)},b.stage=null,b.timer=null,b.scaleTimer=null,b.loader=null,b.version="1.8.3beta",b.render=null,b._currentStage=null,b._isinit=!1,b.MiniAdpter={init:function(){r.navigator&&r.navigator.userAgent&&-1<r.navigator.userAgent.indexOf("MiniGame")&&console.error("请先引用小游戏适配库laya.wxmini.js,详细教程：https://ldc.layabox.com/doc/?nav=zh-ts-5-0-0")}},h(b,["conchMarket",function(){return this.conchMarket=r.conch?conchMarket:null},"PlatformClass",function(){return this.PlatformClass=r.PlatformClass},"_evcode",function(){return this._evcode="e"+String.fromCharCode(118)+"al"}]);var g=(p(t,"Config"),t.WebGLTextCacheCount=500,t.atlasEnable=!1,t.showCanvasMark=!1,t.animationInterval=50,t.isAntialias=!1,t.isAlpha=!1,t.premultipliedAlpha=!0,t.isStencil=!0,t.preserveDrawingBuffer=!1,t.useRetinalCanvas=!1,t);function t(){}var l=function(){var h;function e(){this._events=null}p(e,"laya.events.EventDispatcher");var t=e.prototype;return t.hasListener=function(t){return!!(this._events&&this._events[t])},t.event=function(t,e){if(!this._events||!this._events[t])return!1;var i=this._events[t];if(i.run)i.once&&delete this._events[t],null!=e?i.runWith(e):i.run();else{for(var n=0,s=i.length;n<s;n++){var r=i[n];r&&(null!=e?r.runWith(e):r.run()),r&&!r.once||(i.splice(n,1),n--,s--)}0===i.length&&this._events&&delete this._events[t]}return!0},t.on=function(t,e,i,n){return this._createListener(t,e,i,n,!1)},t.once=function(t,e,i,n){return this._createListener(t,e,i,n,!0)},t._createListener=function(t,e,i,n,s,r){void 0===r&&(r=!0),r&&this.off(t,e,i,s);var o=h.create(e||this,i,n,s);this._events||(this._events={});var a=this._events;return a[t]?a[t].run?a[t]=[a[t],o]:a[t].push(o):a[t]=o,this},t.off=function(t,e,i,n){if(void 0===n&&(n=!1),!this._events||!this._events[t])return this;var s=this._events[t];if(null!=s)if(s.run)e&&s.caller!==e||s.method!==i||n&&!s.once||(delete this._events[t],s.recover());else{for(var r=0,o=0,a=s.length;o<a;o++){var h=s[o];h?!h||e&&h.caller!==e||h.method!==i||n&&!h.once||(r++,s[o]=null,h.recover()):r++}r===a&&delete this._events[t]}return this},t.offAll=function(t){var e=this._events;if(!e)return this;if(t)this._recoverHandlers(e[t]),delete e[t];else{for(var i in e)this._recoverHandlers(e[i]);this._events=null}return this},t._recoverHandlers=function(t){if(t)if(t.run)t.recover();else for(var e=t.length-1;-1<e;e--)t[e]&&(t[e].recover(),t[e]=null)},t.isMouseEvent=function(t){return e.MOUSE_EVENTS[t]},e.MOUSE_EVENTS={rightmousedown:!0,rightmouseup:!0,rightclick:!0,mousedown:!0,mouseup:!0,mousemove:!0,mouseover:!0,mouseout:!0,click:!0,doubleclick:!0},e.__init$=function(){function s(t,e,i,n){s.__super.call(this,t,e,i,n)}Object.defineProperty(laya.events.EventDispatcher.prototype,"_events",{enumerable:!1,writable:!0}),p(s,"",v),s.prototype.recover=function(){0<this._id&&(this._id=0,s._pool.push(this.clear()))},s.create=function(t,e,i,n){return void 0===n&&(n=!0),s._pool.length?s._pool.pop().setTo(t,e,i,n):new s(t,e,i,n)},s._pool=[],h=s},e}(),v=function(){function s(t,e,i,n){this.once=!1,void(this._id=0)===n&&(n=!1),this.setTo(t,e,i,n)}p(s,"laya.utils.Handler");var t=s.prototype;return t.setTo=function(t,e,i,n){return this._id=s._gid++,this.caller=t,this.method=e,this.args=i,this.once=n,this},t.run=function(){if(null==this.method)return null;var t=this._id,e=this.method.apply(this.caller,this.args);return this._id===t&&this.once&&this.recover(),e},t.runWith=function(t){if(null==this.method)return null;var e=this._id;if(null==t)var i=this.method.apply(this.caller,this.args);else i=this.args||t.unshift?this.args?this.method.apply(this.caller,this.args.concat(t)):this.method.apply(this.caller,t):this.method.call(this.caller,t);return this._id===e&&this.once&&this.recover(),i},t.clear=function(){return this.caller=null,this.method=null,this.args=null,this},t.recover=function(){0<this._id&&(this._id=0,s._pool.push(this.clear()))},s.create=function(t,e,i,n){return void 0===n&&(n=!0),s._pool.length?s._pool.pop().setTo(t,e,i,n):new s(t,e,i,n)},s._pool=[],s._gid=1,s}(),P=function(){function t(){this._texture=null,this._fontCharDic={},this._fontWidthMap={},this._complete=null,this._path=null,this._maxWidth=0,this._spaceWidth=10,this._padding=null,this.fontSize=12,this.autoScaleSize=!1,this.letterSpacing=0}p(t,"laya.display.BitmapFont");var e=t.prototype;return e.loadFont=function(t,e){this._path=t,this._complete=e,b.loader.load([{url:this._path,type:"xml"},{url:this._path.replace(".fnt",".png"),type:"image"}],v.create(this,this.onLoaded))},e.onLoaded=function(){this.parseFont(It.getRes(this._path),It.getRes(this._path.replace(".fnt",".png"))),this._complete&&this._complete.runWith(this._texture?this:null)},e.parseFont=function(t,e){if(null!=t&&null!=e){this._texture=e;var i=t.getElementsByTagName("info");if(!i[0].getAttributeNode)return this.parseFont2(t,e);this.fontSize=parseInt(i[0].getAttributeNode("size").nodeValue);var n,s=i[0].getAttributeNode("padding").nodeValue.split(",");this._padding=[parseInt(s[0]),parseInt(s[1]),parseInt(s[2]),parseInt(s[3])],n=t.getElementsByTagName("char");var r=0;for(r=0;r<n.length;r++){var o=n[r],a=parseInt(o.getAttributeNode("id").nodeValue),h=parseInt(o.getAttributeNode("xoffset").nodeValue)/1,l=parseInt(o.getAttributeNode("yoffset").nodeValue)/1,c=parseInt(o.getAttributeNode("xadvance").nodeValue)/1,u=new O;u.x=parseInt(o.getAttributeNode("x").nodeValue),u.y=parseInt(o.getAttributeNode("y").nodeValue),u.width=parseInt(o.getAttributeNode("width").nodeValue),u.height=parseInt(o.getAttributeNode("height").nodeValue);var _=Dt.create(e,u.x,u.y,u.width,u.height,h,l);this._maxWidth=Math.max(this._maxWidth,c+this.letterSpacing),this._fontCharDic[a]=_,this._fontWidthMap[a]=c}}},e.parseFont2=function(t,e){if(null!=t&&null!=e){this._texture=e;var i=t.getElementsByTagName("info");this.fontSize=parseInt(i[0].attributes.size.nodeValue);var n=i[0].attributes.padding.nodeValue.split(",");this._padding=[parseInt(n[0]),parseInt(n[1]),parseInt(n[2]),parseInt(n[3])];var s=t.getElementsByTagName("char"),r=0;for(r=0;r<s.length;r++){var o=s[r].attributes,a=parseInt(o.id.nodeValue),h=parseInt(o.xoffset.nodeValue)/1,l=parseInt(o.yoffset.nodeValue)/1,c=parseInt(o.xadvance.nodeValue)/1,u=new O;u.x=parseInt(o.x.nodeValue),u.y=parseInt(o.y.nodeValue),u.width=parseInt(o.width.nodeValue),u.height=parseInt(o.height.nodeValue);var _=Dt.create(e,u.x,u.y,u.width,u.height,h,l);this._maxWidth=Math.max(this._maxWidth,c+this.letterSpacing),this._fontCharDic[a]=_,this._fontWidthMap[a]=c}}},e.getCharTexture=function(t){return this._fontCharDic[t.charCodeAt(0)]},e.destroy=function(){if(this._texture){for(var t in this._fontCharDic){var e=this._fontCharDic[t];e&&e.destroy()}this._texture.destroy(),this._fontCharDic=null,this._fontWidthMap=null,this._texture=null}},e.setSpaceWidth=function(t){this._spaceWidth=t},e.getCharWidth=function(t){var e=t.charCodeAt(0);return this._fontWidthMap[e]?this._fontWidthMap[e]+this.letterSpacing:" "==t?this._spaceWidth+this.letterSpacing:0},e.getTextWidth=function(t){for(var e=0,i=0,n=t.length;i<n;i++)e+=this.getCharWidth(t.charAt(i));return e},e.getMaxWidth=function(){return this._maxWidth},e.getMaxHeight=function(){return this.fontSize},e.drawText=function(t,e,i,n,s,r){var o,a=this.getTextWidth(t),h=0;"center"===s&&(h=(r-a)/2),"right"===s&&(h=r-a);for(var l=0,c=0,u=t.length;c<u;c++)(o=this.getCharTexture(t.charAt(c)))&&(e.graphics.drawTexture(o,i+l+h,n),l+=this.getCharWidth(t.charAt(c)))},t}(),a=function(){function i(){this.alpha=1,this.visible=!0,this.scrollRect=null,this.blendMode=null,this._type=0,this._tf=i._TF_EMPTY}p(i,"laya.display.css.Style");var t=i.prototype;return t.getTransform=function(){return this._tf},t.setTransform=function(t){this._tf="none"!==t&&t?t:i._TF_EMPTY},t.setTranslateX=function(t){this._tf===i._TF_EMPTY&&(this._tf=new n),this._tf.translateX=t},t.setTranslateY=function(t){this._tf===i._TF_EMPTY&&(this._tf=new n),this._tf.translateY=t},t.setScaleX=function(t){this._tf===i._TF_EMPTY&&(this._tf=new n),this._tf.scaleX=t},t.setScale=function(t,e){this._tf===i._TF_EMPTY&&(this._tf=new n),this._tf.scaleX=t,this._tf.scaleY=e},t.setScaleY=function(t){this._tf===i._TF_EMPTY&&(this._tf=new n),this._tf.scaleY=t},t.setRotate=function(t){this._tf===i._TF_EMPTY&&(this._tf=new n),this._tf.rotate=t},t.setSkewX=function(t){this._tf===i._TF_EMPTY&&(this._tf=new n),this._tf.skewX=t},t.setSkewY=function(t){this._tf===i._TF_EMPTY&&(this._tf=new n),this._tf.skewY=t},t.destroy=function(){this.scrollRect=null},t.render=function(t,e,i,n){},t.getCSSStyle=function(){return Ct.EMPTY},t._enableLayout=function(){return!1},c(0,t,"scaleX",function(){return this._tf.scaleX},function(t){this.setScaleX(t)}),c(0,t,"transform",function(){return this.getTransform()},function(t){this.setTransform(t)}),c(0,t,"translateX",function(){return this._tf.translateX},function(t){this.setTranslateX(t)}),c(0,t,"translateY",function(){return this._tf.translateY},function(t){this.setTranslateY(t)}),c(0,t,"scaleY",function(){return this._tf.scaleY},function(t){this.setScaleY(t)}),c(0,t,"block",function(){return 0!=(1&this._type)}),c(0,t,"skewY",function(){return this._tf.skewY},function(t){this.setSkewY(t)}),c(0,t,"rotate",function(){return this._tf.rotate},function(t){this.setRotate(t)}),c(0,t,"skewX",function(){return this._tf.skewX},function(t){this.setSkewX(t)}),c(0,t,"paddingLeft",function(){return 0}),c(0,t,"paddingTop",function(){return 0}),c(0,t,"absolute",function(){return!0}),i.__init__=function(){i._TF_EMPTY=new n,i.EMPTY=new i},i.EMPTY=null,i._TF_EMPTY=null,i}(),d=function(){function e(t){this._type=0,this._weight=0,this._decoration=null,this._text=null,this.indent=0,this._color=st.create(e.defaultColor),this.family=e.defaultFamily,this.stroke=e._STROKE,this.size=e.defaultSize,t&&t!==e.EMPTY&&t.copyTo(this)}p(e,"laya.display.css.Font");var t=e.prototype;return t.set=function(t){this._text=null;for(var e=t.split(" "),i=0,n=e.length;i<n;i++){var s=e[i];switch(s){case"italic":this.italic=!0;continue;case"bold":this.bold=!0;continue}0<s.indexOf("px")&&(this.size=parseInt(s),this.family=e[i+1],i++)}},t.toString=function(){return this._text="",this.italic&&(this._text+="italic "),this.bold&&(this._text+="bold "),this._text+=this.size+"px "+this.family},t.copyTo=function(t){t._type=this._type,t._text=this._text,t._weight=this._weight,t._color=this._color,t.family=this.family,t.stroke=this.stroke!=e._STROKE?this.stroke.slice():e._STROKE,t.indent=this.indent,t.size=this.size},c(0,t,"password",function(){return 0!=(1024&this._type)},function(t){t?this._type|=1024:this._type&=-1025}),c(0,t,"color",function(){return this._color.strColor},function(t){this._color=st.create(t)}),c(0,t,"italic",function(){return 0!=(512&this._type)},function(t){t?this._type|=512:this._type&=-513}),c(0,t,"bold",function(){return 0!=(2048&this._type)},function(t){t?this._type|=2048:this._type&=-2049}),c(0,t,"weight",function(){return""+this._weight},function(t){var e=0;switch(t){case"normal":break;case"bold":this.bold=!0,e=700;break;case"bolder":e=800;break;case"lighter":e=100;break;default:e=parseInt(t)}this._weight=e,this._text=null}),c(0,t,"decoration",function(){return this._decoration?this._decoration.value:null},function(t){var e=t.split(" ");switch(this._decoration||(this._decoration={}),e[0]){case"_":this._decoration.type="underline";break;case"-":this._decoration.type="line-through";break;case"overline":this._decoration.type="overline";break;default:this._decoration.type=e[0]}e[1]&&(this._decoration.color=st.create(e)),this._decoration.value=t}),e.__init__=function(){e.EMPTY=new e(null)},e.EMPTY=null,e.defaultColor="#000000",e.defaultSize=12,e.defaultFamily="Arial",e.defaultFont="12px Arial",e._STROKE=[0,"#000000"],e._ITALIC=512,e._PASSWORD=1024,e._BOLD=2048,e}(),n=(p(i,"laya.display.css.TransformInfo"),i);function i(){this.translateX=0,this.translateY=0,this.scaleX=1,this.scaleY=1,this.rotate=0,this.skewX=0,this.skewY=0}var _=function(){function u(){if(this._one=null,this._cmds=null,this._render=this._renderEmpty,X.isConchNode){this._nativeObj=new r._conchGraphics,this.id=this._nativeObj.conchID}}p(u,"laya.display.Graphics");var t=u.prototype;return t.destroy=function(){this.clear(),this._graphicBounds&&this._graphicBounds.destroy(),this._graphicBounds=null,this._vectorgraphArray=null,this._sp&&(this._sp._renderType=0),this._sp=null},t.clear=function(t){void 0===t&&(t=!1);var e=0,i=0;if(t){var n=this._one;if(this._cmds){for(i=this._cmds.length,e=0;e<i;e++)!(n=this._cmds[e])||n.callee!==X._context._drawTexture&&n.callee!==X._context._drawTextureWithTransform||(n[0]=null,u._cache.push(n));this._cmds.length=0}else n&&(!n||n.callee!==X._context._drawTexture&&n.callee!==X._context._drawTextureWithTransform||(n[0]=null,u._cache.push(n)))}else this._cmds=null;if(this._one=null,this._render=this._renderEmpty,this._sp&&(this._sp._renderType&=-514),this._repaint(),this._vectorgraphArray){for(e=0,i=this._vectorgraphArray.length;e<i;e++)wt.getInstance().deleteShape(this._vectorgraphArray[e]);this._vectorgraphArray.length=0}},t._clearBoundsCache=function(){this._graphicBounds&&this._graphicBounds.reset()},t._initGraphicBounds=function(){this._graphicBounds||(this._graphicBounds=new s,this._graphicBounds._graphics=this)},t._repaint=function(){this._clearBoundsCache(),this._sp&&this._sp.repaint()},t._isOnlyOne=function(){return!this._cmds||0===this._cmds.length},t.getBounds=function(t){return void 0===t&&(t=!1),this._initGraphicBounds(),this._graphicBounds.getBounds(t)},t.getBoundPoints=function(t){return void 0===t&&(t=!1),this._initGraphicBounds(),this._graphicBounds.getBoundPoints(t)},t._addCmd=function(t){this._cmds=this._cmds||[],t.callee=t.shift(),this._cmds.push(t)},t.setFilters=function(t){this._saveToCmd(X._context._setFilters,t)},t.drawTexture=function(t,e,i,n,s,r,o){if(void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),void 0===s&&(s=0),void 0===o&&(o=1),!t||o<.01)return null;n||(n=t.sourceWidth),s||(s=t.sourceHeight),o=o<0?0:1<o?1:o;var a,h=!X.isWebGL&&(Q.onFirefox||Q.onEdge||Q.onIE||Q.onSafari)?.5:0,l=n/t.sourceWidth,c=s/t.sourceHeight;return n=t.width*l,s=t.height*c,t.loaded&&(n<=0||s<=0)?null:(e+=t.offsetX*l,i+=t.offsetY*c,this._sp&&(this._sp._renderType|=512),e-=h,i-=h,n+=2*h,s+=2*h,u._cache.length?((a=u._cache.pop())[0]=t,a[1]=e,a[2]=i,a[3]=n,a[4]=s,a[5]=r,a[6]=o):a=[t,e,i,n,s,r,o],a.callee=r||1!=o?X._context._drawTextureWithTransform:X._context._drawTexture,null!=this._one||r||1!=o?this._saveToCmd(a.callee,a):(this._one=a,this._render=this._renderOneImg),t.loaded||t.once("loaded",this,this._textureLoaded,[t,a]),this._repaint(),a)},t.cleanByTexture=function(t,e,i,n,s){if(void 0===n&&(n=0),void 0===s&&(s=0),!t)return this.clear();if(this._one&&this._render===this._renderOneImg){n||(n=t.sourceWidth),s||(s=t.sourceHeight);var r=n/t.sourceWidth,o=s/t.sourceHeight;n=t.width*r,s=t.height*o,e+=t.offsetX*r,i+=t.offsetY*o,this._one[0]=t,this._one[1]=e,this._one[2]=i,this._one[3]=n,this._one[4]=s,this._repaint()}else this.clear(),t&&this.drawTexture(t,e,i,n,s)},t.drawTextures=function(t,e){t&&this._saveToCmd(X._context._drawTextures,[t,e])},t.fillTexture=function(t,e,i,n,s,r,o){if(void 0===n&&(n=0),void 0===s&&(s=0),void 0===r&&(r="repeat"),t){var a=[t,e,i,n,s,r,o||k.EMPTY,{}];t.loaded||t.once("loaded",this,this._textureLoaded,[t,a]),this._saveToCmd(X._context._fillTexture,a)}},t._textureLoaded=function(t,e){e[3]=e[3]||t.width,e[4]=e[4]||t.height,this._repaint()},t.fillCircle=function(t,e,i,n,s,r,o){i.bitmap.enableMerageInAtlas=!1;var a=new Float32Array(2*(o+1)),h=new Float32Array(2*(o+1)),l=new Uint16Array(3*o),c=2*Math.PI/o,u=0;a[0]=n,a[1]=s,h[0]=n/i.width,h[1]=s/i.height;for(var _=2,d=0;d<o;d++){var f=r*Math.cos(u)+n,p=r*Math.sin(u)+s;a[_]=f,a[_+1]=p,h[_]=f/i.width,h[_+1]=p/i.height,u+=c,_+=2}for(d=_=0;d<o;d++)l[_++]=0,l[_++]=d+1,l[_++]=o+1<=d+2?1:d+2;this.drawTriangles(i,t,e,a,h,l)},t.drawTriangles=function(t,e,i,n,s,r,o,a,h,l){void 0===a&&(a=1),this._saveToCmd(X._context.drawTriangles,[t,e,i,n,s,r,o,a,h,l])},t._saveToCmd=function(t,e){return this._sp&&(this._sp._renderType|=512),null==this._one?(this._one=e,this._render=this._renderOne):(this._sp&&(this._sp._renderType&=-2),this._render=this._renderAll,0===(this._cmds||(this._cmds=[])).length&&this._cmds.push(this._one),this._cmds.push(e)),e.callee=t,this._repaint(),e},t.clipRect=function(t,e,i,n){this._saveToCmd(X._context._clipRect,[t,e,i,n])},t.fillText=function(t,e,i,n,s,r,o){void 0===o&&(o=0),this._saveToCmd(X._context._fillText,[t,e,i,n||d.defaultFont,s,r])},t.fillBorderText=function(t,e,i,n,s,r,o,a){this._saveToCmd(X._context._fillBorderText,[t,e,i,n||d.defaultFont,s,r,o,a])},t.strokeText=function(t,e,i,n,s,r,o){this._saveToCmd(X._context._strokeText,[t,e,i,n||d.defaultFont,s,r,o])},t.alpha=function(t){t=t<0?0:1<t?1:t,this._saveToCmd(X._context._alpha,[t])},t.setAlpha=function(t){t=t<0?0:1<t?1:t,this._saveToCmd(X._context._setAlpha,[t])},t.transform=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=0),this._saveToCmd(X._context._transform,[t,e,i])},t.rotate=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=0),this._saveToCmd(X._context._rotate,[t,e,i])},t.scale=function(t,e,i,n){void 0===i&&(i=0),void 0===n&&(n=0),this._saveToCmd(X._context._scale,[t,e,i,n])},t.translate=function(t,e){this._saveToCmd(X._context._translate,[t,e])},t.save=function(){this._saveToCmd(X._context._save,[])},t.restore=function(){this._saveToCmd(X._context._restore,[])},t.replaceText=function(t){this._repaint();var e=this._cmds;if(e){for(var i=e.length-1;-1<i;i--)if(this._isTextCmd(e[i].callee))return e[i][0].toUpperCase?e[i][0]=t:e[i][0].setText(t),!0}else if(this._one&&this._isTextCmd(this._one.callee))return this._one[0].toUpperCase?this._one[0]=t:this._one[0].setText(t),!0;return!1},t._isTextCmd=function(t){return t===X._context._fillText||t===X._context._fillBorderText||t===X._context._strokeText},t.replaceTextColor=function(t){this._repaint();var e=this._cmds;if(e)for(var i=e.length-1;-1<i;i--)this._isTextCmd(e[i].callee)&&(e[i][4]=t,e[i][0].toUpperCase||(e[i][0].changed=!0));else this._one&&this._isTextCmd(this._one.callee)&&(this._one[4]=t,this._one[0].toUpperCase||(this._one[0].changed=!0))},t.loadImage=function(t,e,i,n,s,r){var o=this;void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),void 0===s&&(s=0);var a=It.getRes(t);function h(t){t&&(o.drawTexture(t,e,i,n,s),null!=r&&r.call(o._sp,t))}a?h(a):b.loader.load(t,v.create(null,h),null,"image")},t._renderEmpty=function(t,e,i,n){},t._renderAll=function(t,e,i,n){for(var s,r=this._cmds,o=0,a=r.length;o<a;o++)(s=r[o]).callee.call(e,i,n,s)},t._renderOne=function(t,e,i,n){this._one.callee.call(e,i,n,this._one)},t._renderOneImg=function(t,e,i,n){this._one.callee.call(e,i,n,this._one),2305!==t._renderType&&(t._renderType|=1)},t.drawLine=function(t,e,i,n,s,r){void 0===r&&(r=1);var o=0;X.isWebGL&&(o=wt.getInstance().getId(),null==this._vectorgraphArray&&(this._vectorgraphArray=[]),this._vectorgraphArray.push(o));var a=r%2==0?0:.5,h=[t+a,e+a,i+a,n+a,s,r,o];this._saveToCmd(X._context._drawLine,h)},t.drawLines=function(t,e,i,n,s){void 0===s&&(s=1);var r=0;if(i&&!(i.length<4)){X.isWebGL&&(r=wt.getInstance().getId(),null==this._vectorgraphArray&&(this._vectorgraphArray=[]),this._vectorgraphArray.push(r));var o=s%2==0?0:.5,a=[t+o,e+o,i,n,s,r];this._saveToCmd(X._context._drawLines,a)}},t.drawCurves=function(t,e,i,n,s){void 0===s&&(s=1);var r=[t,e,i,n,s];this._saveToCmd(X._context._drawCurves,r)},t.drawRect=function(t,e,i,n,s,r,o){void 0===o&&(o=1);var a=r?o/2:0,h=r?o:0,l=[t+a,e+a,i-h,n-h,s,r,o];this._saveToCmd(X._context._drawRect,l)},t.drawCircle=function(t,e,i,n,s,r){void 0===r&&(r=1);var o=s?r/2:0,a=0;X.isWebGL&&(a=wt.getInstance().getId(),null==this._vectorgraphArray&&(this._vectorgraphArray=[]),this._vectorgraphArray.push(a));var h=[t,e,i-o,n,s,r,a];this._saveToCmd(X._context._drawCircle,h)},t.drawPie=function(t,e,i,n,s,r,o,a){void 0===a&&(a=1);var h=o?a/2:0,l=o?a:0,c=0;X.isWebGL&&(c=wt.getInstance().getId(),null==this._vectorgraphArray&&(this._vectorgraphArray=[]),this._vectorgraphArray.push(c));var u=[t+h,e+h,i-l,n,s,r,o,a,c];u[3]=vt.toRadian(n),u[4]=vt.toRadian(s),this._saveToCmd(X._context._drawPie,u)},t.drawPoly=function(t,e,i,n,s,r){void 0===r&&(r=1);var o=0,a=!1;X.isWebGL&&(o=wt.getInstance().getId(),null==this._vectorgraphArray&&(this._vectorgraphArray=[]),this._vectorgraphArray.push(o),a=!(6<i.length));var h=s?r%2==0?0:.5:0,l=[t+h,e+h,i,n,s,r,o,a];this._saveToCmd(X._context._drawPoly,l)},t.drawPath=function(t,e,i,n,s){var r=[t,e,i,n,s];this._saveToCmd(X._context._drawPath,r)},c(0,t,"cmds",function(){return this._cmds},function(t){this._sp&&(this._sp._renderType|=512),this._cmds=t,this._render=this._renderAll,this._repaint()}),u.__init__=function(){if(X.isConchNode){for(var t=laya.display.Graphics.prototype,e=Q.window.ConchGraphics.prototype,i=["clear","destroy","alpha","rotate","transform","scale","translate","save","restore","clipRect","blendMode","fillText","fillBorderText","_fands","drawRect","drawCircle","drawPie","drawPoly","drawPath","drawImageM","drawLine","drawLines","_drawPs","drawCurves","replaceText","replaceTextColor","_fillImage","fillTexture","setSkinMesh","drawParticle","drawImageS"],n=0,s=i.length;n<=s;n++){var r=i[n];t[r]=e[r]}t._saveToCmd=null,e.drawImageS&&(t.drawTextures=function(t,e){if(t&&t.loaded&&t.bitmap&&t.source){var i=t.uv,n=t.bitmap.width,s=t.bitmap.height;this.drawImageS(t.bitmap.source,i[0]*n,i[1]*s,(i[2]-i[0])*n,(i[5]-i[3])*s,t.offsetX,t.offsetY,t.width,t.height,e)}}),t.drawTexture=function(t,e,i,n,s,r,o){if(void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),void 0===s&&(s=0),void 0===o&&(o=1),t)if(t.loaded){if(t.loaded&&t.bitmap&&t.source&&(n||(n=t.sourceWidth),s||(s=t.sourceHeight),o=o<0?0:1<o?1:o,n=n-t.sourceWidth+t.width,s=s-t.sourceHeight+t.height,!(n<=0||s<=0))){e+=t.offsetX,i+=t.offsetY;var a=t.uv,h=t.bitmap.width,l=t.bitmap.height;a[4]<a[0]&&a[5]<a[1]?this.drawImageM(t.bitmap.source,a[4]*h,a[5]*l,(a[0]-a[4])*h,(a[1]-a[5])*l,e,i,n,s,r,o):this.drawImageM(t.bitmap.source,a[0]*h,a[1]*l,(a[2]-a[0])*h,(a[5]-a[3])*l,e,i,n,s,r,o),this._repaint()}}else t.once("loaded",this,function(){this.drawTexture(t,e,i,n,s,r)})},t.fillTexture=function(t,e,i,n,s,r,o){if(void 0===n&&(n=0),void 0===s&&(s=0),void 0===r&&(r="repeat"),t&&t.loaded){var a,h=X._context.ctx,l=t.bitmap.width,c=t.bitmap.height,u=t.uv;a=t.uv!=Dt.DEF_UV?h.createPattern(t.bitmap.source,r,u[0]*l,u[1]*c,(u[2]-u[0])*l,(u[5]-u[3])*c):h.createPattern(t.bitmap.source,r);var _=0,d=0;o&&(e+=o.x%t.width,i+=o.y%t.height,_-=o.x%t.width,d-=o.y%t.height),this._fillImage(a,e,i,_,d,n,s)}}}},u._cache=[],u}(),s=function(){function y(){this._cacheBoundsType=!1}p(y,"laya.display.GraphicsBounds");var t=y.prototype;return t.destroy=function(){this._graphics=null,this._temp=null,this._rstBoundPoints=null,this._bounds=null},t.reset=function(){this._temp&&(this._temp.length=0)},t.getBounds=function(t){return void 0===t&&(t=!1),this._bounds&&this._temp&&!(this._temp.length<1)&&t==this._cacheBoundsType||(this._bounds=O._getWrapRec(this.getBoundPoints(t),this._bounds)),this._cacheBoundsType=t,this._bounds},t.getBoundPoints=function(t){return void 0===t&&(t=!1),(!this._temp||this._temp.length<1||t!=this._cacheBoundsType)&&(this._temp=this._getCmdPoints(t)),this._cacheBoundsType=t,this._rstBoundPoints=vt.copyArray(this._rstBoundPoints,this._temp)},t._getCmdPoints=function(t){void 0===t&&(t=!1);var e,i,n=X._context,s=this._graphics.cmds;if((e=this._temp||(this._temp=[])).length=0,s||null==this._graphics._one||(y._tempCmds.length=0,y._tempCmds.push(this._graphics._one),s=y._tempCmds),!s)return e;(i=y._tempMatrixArrays).length=0;var r=y._initMatrix;r.identity();for(var o,a,h=y._tempMatrix,l=NaN,c=NaN,u=NaN,_=NaN,d=NaN,f=NaN,p=0,g=s.length;p<g;p++)if((o=s[p]).callee)switch(o.callee){case n._save:case 7:i.push(r),r=r.clone();break;case n._restore:case 8:r=i.pop();break;case n._scale:case 5:h.identity(),h.translate(-o[2],-o[3]),h.scale(o[0],o[1]),h.translate(o[2],o[3]),this._switchMatrix(r,h);break;case n._rotate:case 3:h.identity(),h.translate(-o[1],-o[2]),h.rotate(o[0]),h.translate(o[1],o[2]),this._switchMatrix(r,h);break;case n._translate:case 6:h.identity(),h.translate(o[0],o[1]),this._switchMatrix(r,h);break;case n._transform:case 4:h.identity(),h.translate(-o[1],-o[2]),h.concat(o[0]),h.translate(o[1],o[2]),this._switchMatrix(r,h);break;case 16:case 24:y._addPointArrToRst(e,O._getBoundPointS(o[0],o[1],o[2],o[3]),r);break;case 17:r.copyTo(h),h.concat(o[4]),y._addPointArrToRst(e,O._getBoundPointS(o[0],o[1],o[2],o[3]),h);break;case n._drawTexture:a=o[0],t?o[3]&&o[4]?y._addPointArrToRst(e,O._getBoundPointS(o[1],o[2],o[3],o[4]),r):(a=o[0],y._addPointArrToRst(e,O._getBoundPointS(o[1],o[2],a.width,a.height),r)):(l=(o[3]||a.sourceWidth)/a.width,c=(o[4]||a.sourceHeight)/a.height,u=l*a.sourceWidth,_=c*a.sourceHeight,d=0<a.offsetX?a.offsetX:0,f=0<a.offsetY?a.offsetY:0,d*=l,f*=c,y._addPointArrToRst(e,O._getBoundPointS(o[1]-d,o[2]-f,u,_),r));break;case n._fillTexture:o[3]&&o[4]?y._addPointArrToRst(e,O._getBoundPointS(o[1],o[2],o[3],o[4]),r):(a=o[0],y._addPointArrToRst(e,O._getBoundPointS(o[1],o[2],a.width,a.height),r));break;case n._drawTextureWithTransform:var m;m=o[5]?(r.copyTo(h),h.concat(o[5]),h):r,t?o[3]&&o[4]?y._addPointArrToRst(e,O._getBoundPointS(o[1],o[2],o[3],o[4]),m):(a=o[0],y._addPointArrToRst(e,O._getBoundPointS(o[1],o[2],a.width,a.height),m)):(a=o[0],l=(o[3]||a.sourceWidth)/a.width,c=(o[4]||a.sourceHeight)/a.height,u=l*a.sourceWidth,_=c*a.sourceHeight,d=0<a.offsetX?a.offsetX:0,f=0<a.offsetY?a.offsetY:0,d*=l,f*=c,y._addPointArrToRst(e,O._getBoundPointS(o[1]-d,o[2]-f,u,_),m));break;case n._drawRect:case 13:y._addPointArrToRst(e,O._getBoundPointS(o[0],o[1],o[2],o[3]),r);break;case n._drawCircle:case n._fillCircle:case 14:y._addPointArrToRst(e,O._getBoundPointS(o[0]-o[2],o[1]-o[2],o[2]+o[2],o[2]+o[2]),r);break;case n._drawLine:case 20:y._tempPoints.length=0;var v;v=.5*o[5],o[0]==o[2]?y._tempPoints.push(o[0]+v,o[1],o[2]+v,o[3],o[0]-v,o[1],o[2]-v,o[3]):o[1]==o[3]?y._tempPoints.push(o[0],o[1]+v,o[2],o[3]+v,o[0],o[1]-v,o[2],o[3]-v):y._tempPoints.push(o[0],o[1],o[2],o[3]),y._addPointArrToRst(e,y._tempPoints,r);break;case n._drawCurves:case 22:y._addPointArrToRst(e,E.I.getBezierPoints(o[2]),r,o[0],o[1]);break;case n._drawPoly:case n._drawLines:case 18:y._addPointArrToRst(e,o[2],r,o[0],o[1]);break;case n._drawPath:case 19:y._addPointArrToRst(e,this._getPathPoints(o[2]),r,o[0],o[1]);break;case n._drawPie:case 15:y._addPointArrToRst(e,this._getPiePoints(o[0],o[1],o[2],o[3],o[4]),r)}return 200<e.length?e=vt.copyArray(e,O._getWrapRec(e)._getBoundPoints()):8<e.length&&(e=I.scanPList(e)),e},t._switchMatrix=function(t,e){e.concat(t),e.copyTo(t)},t._getPiePoints=function(t,e,i,n,s){var r=y._tempPoints;y._tempPoints.length=0,r.push(t,e);var o=(s-n)%(2*Math.PI)/10,a=NaN,h=n;for(a=0;a<=10;a++)r.push(t+i*Math.cos(h),e+i*Math.sin(h)),h+=o;return r},t._getPathPoints=function(t){var e,i,n=0,s=y._tempPoints;for(s.length=0,e=t.length,n=0;n<e;n++)1<(i=t[n]).length&&(s.push(i[1],i[2]),3<i.length&&s.push(i[3],i[4]));return s},y._addPointArrToRst=function(t,e,i,n,s){void 0===n&&(n=0),void 0===s&&(s=0);var r,o=0;for(r=e.length,o=0;o<r;o+=2)y._addPointToRst(t,e[o]+n,e[o+1]+s,i)},y._addPointToRst=function(t,e,i,n){var s=k.TEMP;s.setTo(e||0,i||0),n.transformPoint(s),t.push(s.x,s.y)},y._tempPoints=[],y._tempMatrixArrays=[],y._tempCmds=[],h(y,["_tempMatrix",function(){return this._tempMatrix=new F},"_initMatrix",function(){return this._initMatrix=new F}]),y}(),u=function(){function t(){}p(t,"laya.events.Event");var e=t.prototype;return e.setTo=function(t,e,i){return this.type=t,this.currentTarget=e,this.target=i,this},e.stopPropagation=function(){this._stoped=!0},c(0,e,"stageY",function(){return b.stage.mouseY}),c(0,e,"charCode",function(){return this.nativeEvent.charCode}),c(0,e,"touches",function(){var t=this.nativeEvent.touches;if(t)for(var e=b.stage,i=0,n=t.length;i<n;i++){var s=t[i],r=k.TEMP;r.setTo(s.clientX,s.clientY),e._canvasTransform.invertTransformPoint(r),e.transform.invertTransformPoint(r),s.stageX=r.x,s.stageY=r.y}return t}),c(0,e,"keyLocation",function(){return this.nativeEvent.keyLocation}),c(0,e,"ctrlKey",function(){return this.nativeEvent.ctrlKey}),c(0,e,"altKey",function(){return this.nativeEvent.altKey}),c(0,e,"shiftKey",function(){return this.nativeEvent.shiftKey}),c(0,e,"stageX",function(){return b.stage.mouseX}),t.EMPTY=new t,t.MOUSE_DOWN="mousedown",t.MOUSE_UP="mouseup",t.CLICK="click",t.RIGHT_MOUSE_DOWN="rightmousedown",t.RIGHT_MOUSE_UP="rightmouseup",t.RIGHT_CLICK="rightclick",t.MOUSE_MOVE="mousemove",t.MOUSE_OVER="mouseover",t.MOUSE_OUT="mouseout",t.MOUSE_WHEEL="mousewheel",t.ROLL_OVER="mouseover",t.ROLL_OUT="mouseout",t.DOUBLE_CLICK="doubleclick",t.CHANGE="change",t.CHANGED="changed",t.RESIZE="resize",t.ADDED="added",t.REMOVED="removed",t.DISPLAY="display",t.UNDISPLAY="undisplay",t.ERROR="error",t.COMPLETE="complete",t.LOADED="loaded",t.PROGRESS="progress",t.INPUT="input",t.RENDER="render",t.OPEN="open",t.MESSAGE="message",t.CLOSE="close",t.KEY_DOWN="keydown",t.KEY_PRESS="keypress",t.KEY_UP="keyup",t.FRAME="enterframe",t.DRAG_START="dragstart",t.DRAG_MOVE="dragmove",t.DRAG_END="dragend",t.ENTER="enter",t.SELECT="select",t.BLUR="blur",t.FOCUS="focus",t.VISIBILITY_CHANGE="visibilitychange",t.FOCUS_CHANGE="focuschange",t.PLAYED="played",t.PAUSED="paused",t.STOPPED="stopped",t.START="start",t.END="end",t.ENABLE_CHANGED="enablechanged",t.ACTIVE_IN_HIERARCHY_CHANGED="activeinhierarchychanged",t.COMPONENT_ADDED="componentadded",t.COMPONENT_REMOVED="componentremoved",t.LAYER_CHANGED="layerchanged",t.HIERARCHY_LOADED="hierarchyloaded",t.RECOVERED="recovered",t.RELEASED="released",t.LINK="link",t.LABEL="label",t.FULL_SCREEN_CHANGE="fullscreenchange",t.DEVICE_LOST="devicelost",t.MESH_CHANGED="meshchanged",t.MATERIAL_CHANGED="materialchanged",t.WORLDMATRIX_NEEDCHANGE="worldmatrixneedchanged",t.ANIMATION_CHANGED="animationchanged",t.TRIGGER_ENTER="triggerenter",t.TRIGGER_STAY="triggerstay",t.TRIGGER_EXIT="triggerexit",t.TRAIL_FILTER_CHANGE="trailfilterchange",t.DOMINO_FILTER_CHANGE="dominofilterchange",t}();p(f,"laya.events.Keyboard"),f.NUMBER_0=48,f.NUMBER_1=49,f.NUMBER_2=50,f.NUMBER_3=51,f.NUMBER_4=52,f.NUMBER_5=53,f.NUMBER_6=54,f.NUMBER_7=55,f.NUMBER_8=56,f.NUMBER_9=57,f.A=65,f.B=66,f.C=67,f.D=68,f.E=69,f.F=70,f.G=71,f.H=72,f.I=73,f.J=74,f.K=75,f.L=76,f.M=77,f.N=78,f.O=79,f.P=80,f.Q=81,f.R=82,f.S=83,f.T=84,f.U=85,f.V=86,f.W=87,f.X=88,f.Y=89,f.Z=90,f.F1=112,f.F2=113,f.F3=114,f.F4=115,f.F5=116,f.F6=117,f.F7=118,f.F8=119,f.F9=120,f.F10=121,f.F11=122,f.F12=123,f.F13=124,f.F14=125,f.F15=126,f.NUMPAD=21,f.NUMPAD_0=96,f.NUMPAD_1=97,f.NUMPAD_2=98,f.NUMPAD_3=99,f.NUMPAD_4=100,f.NUMPAD_5=101,f.NUMPAD_6=102,f.NUMPAD_7=103,f.NUMPAD_8=104,f.NUMPAD_9=105,f.NUMPAD_ADD=107,f.NUMPAD_DECIMAL=110,f.NUMPAD_DIVIDE=111,f.NUMPAD_ENTER=108,f.NUMPAD_MULTIPLY=106,f.NUMPAD_SUBTRACT=109,f.SEMICOLON=186,f.EQUAL=187,f.COMMA=188,f.MINUS=189,f.PERIOD=190,f.SLASH=191,f.BACKQUOTE=192,f.LEFTBRACKET=219,f.BACKSLASH=220,f.RIGHTBRACKET=221,f.QUOTE=222,f.ALTERNATE=18,f.BACKSPACE=8,f.CAPS_LOCK=20,f.COMMAND=15,f.CONTROL=17,f.DELETE=46,f.ENTER=13,f.ESCAPE=27,f.PAGE_UP=33,f.PAGE_DOWN=34,f.END=35,f.HOME=36,f.LEFT=37,f.UP=38,f.RIGHT=39,f.DOWN=40,f.SHIFT=16,f.SPACE=32,f.TAB=9,f.INSERT=45;function f(){}var m=(p(y,"laya.events.KeyBoardManager"),y.__init__=function(){y._addEvent("keydown"),y._addEvent("keypress"),y._addEvent("keyup")},y._addEvent=function(e){Q.document.addEventListener(e,function(t){laya.events.KeyBoardManager._dispatch(t,e)},!0)},y._dispatch=function(t,e){if(y.enabled){y._event._stoped=!1,y._event.nativeEvent=t,y._event.keyCode=t.keyCode||t.which||t.charCode,"keydown"===e?y._pressKeys[y._event.keyCode]=!0:"keyup"===e&&(y._pressKeys[y._event.keyCode]=null);for(var i=b.stage.focus&&null!=b.stage.focus.event&&b.stage.focus.displayedInStage?b.stage.focus:b.stage,n=i;n;)n.event(e,y._event.setTo(e,n,i)),n=n.parent}},y.hasKeyDown=function(t){return y._pressKeys[t]},y._pressKeys={},y.enabled=!0,h(y,["_event",function(){return this._event=new u}]),y);function y(){}p(w,"laya.events.KeyLocation"),w.STANDARD=0,w.LEFT=1,w.RIGHT=2,w.NUM_PAD=3;function w(){}var x=function(){function c(){this.mouseX=0,this.mouseY=0,this.disableMouseEvent=!1,this.mouseDownTime=0,this.mouseMoveAccuracy=2,this._stage=null,this._target=null,this._lastMoveTimer=0,this._isLeftMouse=!1,this._eventList=[],this._touchIDs={},this._id=1,this._tTouchID=0,this._event=new u,this._matrix=new F,this._point=new k,this._rect=new O,this._prePoint=new k,this._curTouchID=NaN}p(c,"laya.events.MouseManager");var t=c.prototype;return t.__init__=function(t,e){var i=this;this._stage=t;var n=this,s=this._eventList;e.oncontextmenu=function(t){if(c.enabled)return!1},e.addEventListener("mousedown",function(t){c.enabled&&(Q.onIE||t.preventDefault(),s.push(t),n.mouseDownTime=Q.now())}),e.addEventListener("mouseup",function(t){c.enabled&&(t.preventDefault(),s.push(t),n.mouseDownTime=-Q.now())},!0),e.addEventListener("mousemove",function(t){if(c.enabled){t.preventDefault();var e=Q.now();if(e-n._lastMoveTimer<10)return;n._lastMoveTimer=e,s.push(t)}},!0),e.addEventListener("mouseout",function(t){c.enabled&&s.push(t)}),e.addEventListener("mouseover",function(t){c.enabled&&s.push(t)}),e.addEventListener("touchstart",function(t){c.enabled&&(s.push(t),c._isFirstTouch||$t.isInputting||t.preventDefault(),n.mouseDownTime=Q.now())}),e.addEventListener("touchend",function(t){c.enabled?(c._isFirstTouch||$t.isInputting||t.preventDefault(),c._isFirstTouch=!1,s.push(t),n.mouseDownTime=-Q.now()):i._curTouchID=NaN},!0),e.addEventListener("touchmove",function(t){c.enabled&&(t.preventDefault(),s.push(t))},!0),e.addEventListener("touchcancel",function(t){c.enabled?(t.preventDefault(),s.push(t)):i._curTouchID=NaN},!0),e.addEventListener("mousewheel",function(t){c.enabled&&s.push(t)}),e.addEventListener("DOMMouseScroll",function(t){c.enabled&&s.push(t)})},t.initEvent=function(t,e){var i,n=this;n._event._stoped=!1,n._event.nativeEvent=e||t,n._target=null,this._point.setTo(t.pageX||t.clientX,t.pageY||t.clientY),this._stage._canvasTransform.invertTransformPoint(this._point),n.mouseX=this._point.x,n.mouseY=this._point.y,n._event.touchId=t.identifier||0,this._tTouchID=n._event.touchId,(i=T.I._event)._stoped=!1,i.nativeEvent=n._event.nativeEvent,i.touchId=n._event.touchId},t.checkMouseWheel=function(t){this._event.delta=t.wheelDelta?.025*t.wheelDelta:-t.detail;for(var e=T.I.getLastOvers(),i=0,n=e.length;i<n;i++){var s=e[i];s.event("mousewheel",this._event.setTo("mousewheel",s,this._target))}},t.onMouseMove=function(t){T.I.onMouseMove(t,this._tTouchID)},t.onMouseDown=function(t){if($t.isInputting&&b.stage.focus&&b.stage.focus.focus&&!b.stage.focus.contains(this._target)){var e=b.stage.focus._tf||b.stage.focus,i=t._tf||t;i instanceof laya.display.Input&&i.multiline==e.multiline?e._focusOut():e.focus=!1}T.I.onMouseDown(t,this._tTouchID,this._isLeftMouse)},t.onMouseUp=function(t){T.I.onMouseUp(t,this._tTouchID,this._isLeftMouse)},t.check=function(t,e,i,n){this._point.setTo(e,i),t.fromParentPoint(this._point),e=this._point.x,i=this._point.y;var s=t.scrollRect;if(s&&(this._rect.setTo(s.x,s.y,s.width,s.height),!this._rect.contains(e,i)))return!1;if(!this.disableMouseEvent){if(t.hitTestPrior&&!t.mouseThrough&&!this.hitTest(t,e,i))return!1;for(var r=t._childs.length-1;-1<r;r--){var o=t._childs[r];if(!o.destroyed&&o.mouseEnabled&&o.visible&&this.check(o,e,i,n))return!0}}var a=!(!t.hitTestPrior||t.mouseThrough||this.disableMouseEvent)||this.hitTest(t,e,i);return a?(this._target=t,n.call(this,t)):n===this.onMouseUp&&t===this._stage&&(this._target=this._stage,n.call(this,this._target)),a},t.hitTest=function(t,e,i){var n=!1;if(t.scrollRect&&(e-=t.scrollRect.x,i-=t.scrollRect.y),t.hitArea instanceof laya.utils.HitArea)return t.hitArea.isHit(e,i);if(0<t.width&&0<t.height||t.mouseThrough||t.hitArea)if(t.mouseThrough)n=t.getGraphicBounds().contains(e,i);else{var s=this._rect;t.hitArea?s=t.hitArea:s.setTo(0,0,t.width,t.height),n=s.contains(e,i)}return n},t.runEvent=function(){var t=this._eventList.length;if(t){for(var e,i=this,n=0,s=0,r=0;n<t;){var o=this._eventList[n];switch("mousemove"!==o.type&&(this._prePoint.x=this._prePoint.y=-1e6),o.type){case"mousedown":this._touchIDs[0]=this._id++,c._isTouchRespond?c._isTouchRespond=!1:(i._isLeftMouse=0===o.button,i.initEvent(o),i.check(i._stage,i.mouseX,i.mouseY,i.onMouseDown));break;case"mouseup":i._isLeftMouse=0===o.button,i.initEvent(o),i.check(i._stage,i.mouseX,i.mouseY,i.onMouseUp);break;case"mousemove":Math.abs(this._prePoint.x-o.clientX)+Math.abs(this._prePoint.y-o.clientY)>=this.mouseMoveAccuracy&&(this._prePoint.x=o.clientX,this._prePoint.y=o.clientY,i.initEvent(o),i.check(i._stage,i.mouseX,i.mouseY,i.onMouseMove));break;case"touchstart":c._isTouchRespond=!0,i._isLeftMouse=!0;var a=o.changedTouches;for(s=0,r=a.length;s<r;s++)e=a[s],(c.multiTouchEnabled||isNaN(this._curTouchID))&&(this._curTouchID=e.identifier,this._id%200==0&&(this._touchIDs={}),this._touchIDs[e.identifier]=this._id++,i.initEvent(e,o),i.check(i._stage,i.mouseX,i.mouseY,i.onMouseDown));break;case"touchend":case"touchcancel":c._isTouchRespond=!0,i._isLeftMouse=!0;var h=o.changedTouches;for(s=0,r=h.length;s<r;s++)if(e=h[s],c.multiTouchEnabled||e.identifier==this._curTouchID){this._curTouchID=NaN,i.initEvent(e,o);i.check(i._stage,i.mouseX,i.mouseY,i.onMouseUp)||i.onMouseUp(null)}break;case"touchmove":var l=o.changedTouches;for(s=0,r=l.length;s<r;s++)e=l[s],!c.multiTouchEnabled&&e.identifier!=this._curTouchID||(i.initEvent(e,o),i.check(i._stage,i.mouseX,i.mouseY,i.onMouseMove));break;case"wheel":case"mousewheel":case"DOMMouseScroll":i.checkMouseWheel(o);break;case"mouseout":T.I.stageMouseOut();break;case"mouseover":i._stage.event("mouseover",i._event.setTo("mouseover",i._stage,i._stage))}n++}this._eventList.length=0}},c.enabled=!0,c.multiTouchEnabled=!0,c._isTouchRespond=!1,c._isFirstTouch=!0,h(c,["instance",function(){return this.instance=new c}]),c}(),T=function(){function f(){this.preOvers=[],this.preDowns=[],this.preRightDowns=[],this.enable=!0,this._lastClickTime=0,this._event=new u}p(f,"laya.events.TouchManager");var t=f.prototype;return t._clearTempArrs=function(){f._oldArr.length=0,f._newArr.length=0,f._tEleArr.length=0},t.getTouchFromArr=function(t,e){var i,n,s=0;for(i=e.length,s=0;s<i;s++)if((n=e[s]).id==t)return n;return null},t.removeTouchFromArr=function(t,e){var i=0;for(i=e.length-1;0<=i;i--)e[i].id==t&&e.splice(i,1)},t.createTouchO=function(t,e){var i;return(i=_t.getItem("TouchData")||{}).id=e,i.tar=t,i},t.onMouseDown=function(t,e,i){var n,s,r,o;void 0===i&&(i=!1),this.enable&&(n=this.getTouchFromArr(e,this.preOvers),r=this.getEles(t,null,f._tEleArr),n?n.tar=t:(s=this.createTouchO(t,e),this.preOvers.push(s)),Q.onMobile&&this.sendEvents(r,"mouseover"),o=i?this.preDowns:this.preRightDowns,(n=this.getTouchFromArr(e,o))?n.tar=t:(s=this.createTouchO(t,e),o.push(s)),this.sendEvents(r,i?"mousedown":"rightmousedown"),this._clearTempArrs())},t.sendEvents=function(t,e){var i,n,s,r=0;for(i=t.length,this._event._stoped=!1,n=t[0],r=0;r<i;r++){if((s=t[r]).destroyed)return;if(s.event(e,this._event.setTo(e,s,n)),this._event._stoped)break}},t.getEles=function(t,e,i){for(i?i.length=0:i=[];t&&t!=e;)i.push(t),t=t.parent;return i},t.checkMouseOutAndOverOfMove=function(t,e,i){if(void 0===i&&(i=0),e!=t){var n,s,r=0,o=0;if(e.contains(t))s=this.getEles(t,e,f._tEleArr),this.sendEvents(s,"mouseover");else if(t.contains(e))s=this.getEles(e,t,f._tEleArr),this.sendEvents(s,"mouseout");else{var a,h;(s=f._tEleArr).length=0,a=this.getEles(e,null,f._oldArr),h=this.getEles(t,null,f._newArr),o=a.length;var l=0;for(r=0;r<o;r++){if(n=a[r],0<=(l=h.indexOf(n))){h.splice(l,h.length-l);break}s.push(n)}0<s.length&&this.sendEvents(s,"mouseout"),0<h.length&&this.sendEvents(h,"mouseover")}}},t.onMouseMove=function(t,e){var i,n;this.enable&&((i=this.getTouchFromArr(e,this.preOvers))?(this.checkMouseOutAndOverOfMove(t,i.tar),i.tar=t,n=this.getEles(t,null,f._tEleArr)):(n=this.getEles(t,null,f._tEleArr),this.sendEvents(n,"mouseover"),this.preOvers.push(this.createTouchO(t,e))),this.sendEvents(n,"mousemove"),this._clearTempArrs())},t.getLastOvers=function(){return(f._tEleArr.length=0)<this.preOvers.length&&this.preOvers[0].tar?this.getEles(this.preOvers[0].tar,null,f._tEleArr):(f._tEleArr.push(b.stage),f._tEleArr)},t.stageMouseOut=function(){var t;t=this.getLastOvers(),this.preOvers.length=0,this.sendEvents(t,"mouseout")},t.onMouseUp=function(t,e,i){if(void 0===i&&(i=!1),this.enable){var n,s,r,o,a,h,l=0,c=0,u=Q.onMobile;if(s=this.getEles(t,null,f._tEleArr),this.sendEvents(s,i?"mouseup":"rightmouseup"),h=i?this.preDowns:this.preRightDowns,n=this.getTouchFromArr(e,h)){var _,d=Q.now();if(_=d-this._lastClickTime<300,this._lastClickTime=d,t==n.tar)a=s;else for(r=this.getEles(n.tar,null,f._oldArr),(a=f._newArr).length=0,c=r.length,l=0;l<c;l++)o=r[l],0<=s.indexOf(o)&&a.push(o);0<a.length&&this.sendEvents(a,i?"click":"rightclick"),i&&_&&this.sendEvents(a,"doubleclick"),this.removeTouchFromArr(e,h),n.tar=null,_t.recover("TouchData",n)}else;(n=this.getTouchFromArr(e,this.preOvers))&&u&&((a=this.getEles(n.tar,null,a))&&0<a.length&&this.sendEvents(a,"mouseout"),this.removeTouchFromArr(e,this.preOvers),n.tar=null,_t.recover("TouchData",n)),this._clearTempArrs()}},f._oldArr=[],f._newArr=[],f._tEleArr=[],h(f,["I",function(){return this.I=new f}]),f}(),C=function(){function t(){this._action=null}p(t,"laya.filters.Filter");var e=t.prototype;return b.imps(e,{"laya.filters.IFilter":!0}),e.callNative=function(t){},c(0,e,"type",function(){return-1}),c(0,e,"action",function(){return this._action}),t.BLUR=16,t.COLOR=32,t.GLOW=8,t._filterStart=null,t._filterEnd=null,t._EndTarget=null,t._recycleScope=null,t._filter=null,t._useSrc=null,t._endSrc=null,t._useOut=null,t._endOut=null,t}(),M=function(){function t(){this.data=null}p(t,"laya.filters.ColorFilterAction");var e=t.prototype;return b.imps(e,{"laya.filters.IFilterAction":!0}),e.apply=function(t){var e=t.ctx.ctx,i=t.ctx.ctx.canvas;if(0==i.width||0==i.height)return i;for(var n,s=e.getImageData(0,0,i.width,i.height),r=s.data,o=0,a=r.length;o<a;o+=4)n=this.getColor(r[o],r[o+1],r[o+2],r[o+3]),0!=r[o+3]&&(r[o]=n[0],r[o+1]=n[1],r[o+2]=n[2],r[o+3]=n[3]);return e.putImageData(s,0,0),t},e.getColor=function(t,e,i,n){var s=[];if(this.data._mat&&this.data._alpha){var r=this.data._mat,o=this.data._alpha;s[0]=r[0]*t+r[1]*e+r[2]*i+r[3]*n+o[0],s[1]=r[4]*t+r[5]*e+r[6]*i+r[7]*n+o[1],s[2]=r[8]*t+r[9]*e+r[10]*i+r[11]*n+o[2],s[3]=r[12]*t+r[13]*e+r[14]*i+r[15]*n+o[3]}return s},t}();p(S,"laya.maths.Arith"),S.formatR=function(t){return t>Math.PI&&(t-=2*Math.PI),t<-Math.PI&&(t+=2*Math.PI),t},S.isPOT=function(t,e){return 0<t&&0==(t&t-1)&&0<e&&0==(e&e-1)},S.setMatToArray=function(t,e){t.a,t.b,t.c,t.d,t.tx,t.ty,e[0]=t.a,e[1]=t.b,e[4]=t.c,e[5]=t.d,e[12]=t.tx,e[13]=t.ty};function S(){}var E=function(){function t(){this._controlPoints=[new k,new k,new k],this._calFun=this.getPoint2}p(t,"laya.maths.Bezier");var e=t.prototype;return e._switchPoint=function(t,e){var i=this._controlPoints.shift();i.setTo(t,e),this._controlPoints.push(i)},e.getPoint2=function(t,e){var i=this._controlPoints[0],n=this._controlPoints[1],s=this._controlPoints[2],r=Math.pow(1-t,2)*i.x+2*t*(1-t)*n.x+Math.pow(t,2)*s.x,o=Math.pow(1-t,2)*i.y+2*t*(1-t)*n.y+Math.pow(t,2)*s.y;e.push(r,o)},e.getPoint3=function(t,e){var i=this._controlPoints[0],n=this._controlPoints[1],s=this._controlPoints[2],r=this._controlPoints[3],o=Math.pow(1-t,3)*i.x+3*n.x*t*(1-t)*(1-t)+3*s.x*t*t*(1-t)+r.x*Math.pow(t,3),a=Math.pow(1-t,3)*i.y+3*n.y*t*(1-t)*(1-t)+3*s.y*t*t*(1-t)+r.y*Math.pow(t,3);e.push(o,a)},e.insertPoints=function(t,e){var i,n=NaN;for(i=1/(t=0<t?t:5),n=0;n<=1;n+=i)this._calFun(n,e)},e.getBezierPoints=function(t,e,i){void 0===e&&(e=5),void 0===i&&(i=2);var n,s,r=0;if((n=t.length)<2*(i+1))return[];switch(s=[],i){case 2:this._calFun=this.getPoint2;break;case 3:this._calFun=this.getPoint3;break;default:return[]}for(;this._controlPoints.length<=i;)this._controlPoints.push(new k);for(r=0;r<2*i;r+=2)this._switchPoint(t[r],t[r+1]);for(r=2*i;r<n;r+=2)this._switchPoint(t[r],t[r+1]),r/2%i==0&&this.insertPoints(e,s);return s},h(t,["I",function(){return this.I=new t}]),t}(),I=(p(L,"laya.maths.GrahamScan"),L.multiply=function(t,e,i){return(t.x-i.x)*(e.y-i.y)-(e.x-i.x)*(t.y-i.y)},L.dis=function(t,e){return(t.x-e.x)*(t.x-e.x)+(t.y-e.y)*(t.y-e.y)},L._getPoints=function(t,e,i){for(void 0===e&&(e=!1),L._mPointList||(L._mPointList=[]);L._mPointList.length<t;)L._mPointList.push(new k);return i||(i=[]),i.length=0,e?L.getFrom(i,L._mPointList,t):L.getFromR(i,L._mPointList,t),i},L.getFrom=function(t,e,i){var n=0;for(n=0;n<i;n++)t.push(e[n]);return t},L.getFromR=function(t,e,i){var n=0;for(n=0;n<i;n++)t.push(e.pop());return t},L.pListToPointList=function(t,e){void 0===e&&(e=!1);var i=0,n=t.length/2,s=L._getPoints(n,e,L._tempPointList);for(i=0;i<n;i++)s[i].setTo(t[i+i],t[i+i+1]);return s},L.pointListToPlist=function(t){var e,i=0,n=t.length,s=L._temPList;for(i=s.length=0;i<n;i++)e=t[i],s.push(e.x,e.y);return s},L.scanPList=function(t){return vt.copyArray(t,L.pointListToPlist(L.scan(L.pListToPointList(t,!0))))},L.scan=function(t){var e,i,n,s=0,r=0,o=0,a=t.length,h={};for((i=L._temArr).length=0,s=(a=t.length)-1;0<=s;s--)n=(e=t[s]).x+"_"+e.y,h.hasOwnProperty(n)||(h[n]=!0,i.push(e));for(a=i.length,vt.copyArray(t,i),s=1;s<a;s++)(t[s].y<t[o].y||t[s].y==t[o].y&&t[s].x<t[o].x)&&(o=s);for(e=t[0],t[0]=t[o],t[o]=e,s=1;s<a-1;s++){for(r=(o=s)+1;r<a;r++)(0<L.multiply(t[r],t[o],t[0])||0==L.multiply(t[r],t[o],t[0])&&L.dis(t[0],t[r])<L.dis(t[0],t[o]))&&(o=r);e=t[s],t[s]=t[o],t[o]=e}if((i=L._temArr).length=0,t.length<3)return vt.copyArray(i,t);for(i.push(t[0],t[1],t[2]),s=3;s<a;s++){for(;2<=i.length&&0<=L.multiply(t[s],i[i.length-1],i[i.length-2]);)i.pop();t[s]&&i.push(t[s])}return i},L._mPointList=null,L._tempPointList=[],L._temPList=[],L._temArr=[],L);function L(){}var R=(p(D,"laya.maths.MathUtil"),D.subtractVector3=function(t,e,i){i[0]=t[0]-e[0],i[1]=t[1]-e[1],i[2]=t[2]-e[2]},D.lerp=function(t,e,i){return t*(1-i)+e*i},D.scaleVector3=function(t,e,i){i[0]=t[0]*e,i[1]=t[1]*e,i[2]=t[2]*e},D.lerpVector3=function(t,e,i,n){var s=t[0],r=t[1],o=t[2];n[0]=s+i*(e[0]-s),n[1]=r+i*(e[1]-r),n[2]=o+i*(e[2]-o)},D.lerpVector4=function(t,e,i,n){var s=t[0],r=t[1],o=t[2],a=t[3];n[0]=s+i*(e[0]-s),n[1]=r+i*(e[1]-r),n[2]=o+i*(e[2]-o),n[3]=a+i*(e[3]-a)},D.slerpQuaternionArray=function(t,e,i,n,s,r,o){var a,h,l,c,u,_=t[e+0],d=t[e+1],f=t[e+2],p=t[e+3],g=i[n+0],m=i[n+1],v=i[n+2],y=i[n+3];return(h=_*g+d*m+f*v+p*y)<0&&(h=-h,g=-g,m=-m,v=-v,y=-y),u=1e-6<1-h?(a=Math.acos(h),l=Math.sin(a),c=Math.sin((1-s)*a)/l,Math.sin(s*a)/l):(c=1-s,s),r[o+0]=c*_+u*g,r[o+1]=c*d+u*m,r[o+2]=c*f+u*v,r[o+3]=c*p+u*y,r},D.getRotation=function(t,e,i,n){return Math.atan2(n-e,i-t)/Math.PI*180},D.sortBigFirst=function(t,e){return t==e?0:t<e?1:-1},D.sortSmallFirst=function(t,e){return t==e?0:t<e?-1:1},D.sortNumBigFirst=function(t,e){return parseFloat(e)-parseFloat(t)},D.sortNumSmallFirst=function(t,e){return parseFloat(t)-parseFloat(e)},D.sortByKey=function(i,t,e){var n;return void 0===t&&(t=!1),void 0===e&&(e=!0),n=t?e?D.sortNumBigFirst:D.sortBigFirst:e?D.sortNumSmallFirst:D.sortSmallFirst,function(t,e){return n(t[i],e[i])}},D);function D(){}var F=function(){function i(t,e,i,n,s,r){this.inPool=!1,this.bTransform=!1,void 0===t&&(t=1),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=1),void 0===s&&(s=0),void 0===r&&(r=0),this.a=t,this.b=e,this.c=i,this.d=n,this.tx=s,this.ty=r,this._checkTransform()}p(i,"laya.maths.Matrix");var t=i.prototype;return t.identity=function(){return this.a=this.d=1,this.b=this.tx=this.ty=this.c=0,this.bTransform=!1,this},t._checkTransform=function(){return this.bTransform=1!==this.a||0!==this.b||0!==this.c||1!==this.d},t.setTranslate=function(t,e){return this.tx=t,this.ty=e,this},t.translate=function(t,e){return this.tx+=t,this.ty+=e,this},t.scale=function(t,e){this.a*=t,this.d*=e,this.c*=t,this.b*=e,this.tx*=t,this.ty*=e,this.bTransform=!0},t.rotate=function(t){var e=Math.cos(t),i=Math.sin(t),n=this.a,s=this.c,r=this.tx;this.a=n*e-this.b*i,this.b=n*i+this.b*e,this.c=s*e-this.d*i,this.d=s*i+this.d*e,this.tx=r*e-this.ty*i,this.ty=r*i+this.ty*e,this.bTransform=!0},t.skew=function(t,e){var i=Math.tan(t),n=Math.tan(e),s=this.a,r=this.b;return this.a+=n*this.c,this.b+=n*this.d,this.c+=i*s,this.d+=i*r,this},t.invertTransformPoint=function(t){var e=this.a,i=this.b,n=this.c,s=this.d,r=this.tx,o=e*s-i*n,a=s/o,h=-i/o,l=-n/o,c=e/o,u=(n*this.ty-s*r)/o,_=-(e*this.ty-i*r)/o;return t.setTo(a*t.x+l*t.y+u,h*t.x+c*t.y+_)},t.transformPoint=function(t){return t.setTo(this.a*t.x+this.c*t.y+this.tx,this.b*t.x+this.d*t.y+this.ty)},t.transformPointN=function(t){return t.setTo(this.a*t.x+this.c*t.y,this.b*t.x+this.d*t.y)},t.transformPointArray=function(t,e){for(var i=t.length,n=0;n<i;n+=2){var s=t[n],r=t[n+1];e[n]=this.a*s+this.c*r+this.tx,e[n+1]=this.b*s+this.d*r+this.ty}return e},t.transformPointArrayScale=function(t,e){for(var i=t.length,n=0;n<i;n+=2){var s=t[n],r=t[n+1];e[n]=this.a*s+this.c*r,e[n+1]=this.b*s+this.d*r}return e},t.getScaleX=function(){return 0===this.b?this.a:Math.sqrt(this.a*this.a+this.b*this.b)},t.getScaleY=function(){return 0===this.c?this.d:Math.sqrt(this.c*this.c+this.d*this.d)},t.invert=function(){var t=this.a,e=this.b,i=this.c,n=this.d,s=this.tx,r=t*n-e*i;return this.a=n/r,this.b=-e/r,this.c=-i/r,this.d=t/r,this.tx=(i*this.ty-n*s)/r,this.ty=-(t*this.ty-e*s)/r,this},t.setTo=function(t,e,i,n,s,r){return this.a=t,this.b=e,this.c=i,this.d=n,this.tx=s,this.ty=r,this},t.concat=function(t){var e=this.a,i=this.c,n=this.tx;return this.a=e*t.a+this.b*t.c,this.b=e*t.b+this.b*t.d,this.c=i*t.a+this.d*t.c,this.d=i*t.b+this.d*t.d,this.tx=n*t.a+this.ty*t.c+t.tx,this.ty=n*t.b+this.ty*t.d+t.ty,this},t.scaleEx=function(t,e){var i=this.a,n=this.b,s=this.c,r=this.d;0!==n||0!==s?(this.a=t*i,this.b=t*n,this.c=e*s):(this.a=t*i,this.b=0*r,this.c=0*i),this.d=e*r,this.bTransform=!0},t.rotateEx=function(t){var e=Math.cos(t),i=Math.sin(t),n=this.a,s=this.b,r=this.c,o=this.d;0!==s||0!==r?(this.a=e*n+i*r,this.b=e*s+i*o,this.c=-i*n+e*r,this.d=-i*s+e*o):(this.a=e*n,this.b=i*o,this.c=-i*n,this.d=e*o),this.bTransform=!0},t.clone=function(){var t=i.create();return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t.bTransform=this.bTransform,t},t.copyTo=function(t){return t.a=this.a,t.b=this.b,t.c=this.c,t.d=this.d,t.tx=this.tx,t.ty=this.ty,t.bTransform=this.bTransform,t},t.toString=function(){return this.a+","+this.b+","+this.c+","+this.d+","+this.tx+","+this.ty},t.destroy=function(){if(!this.inPool){var t=i._cache;this.inPool=!0,t._length||(t._length=0),(t[t._length++]=this).a=this.d=1,this.b=this.c=this.tx=this.ty=0,this.bTransform=!1}},i.mul=function(t,e,i){var n=t.a,s=t.b,r=t.c,o=t.d,a=t.tx,h=t.ty,l=e.a,c=e.b,u=e.c,_=e.d,d=e.tx,f=e.ty;return 0!==c||0!==u?(i.a=n*l+s*u,i.b=n*c+s*_,i.c=r*l+o*u,i.d=r*c+o*_,i.tx=l*a+u*h+d,i.ty=c*a+_*h+f):(i.a=n*l,i.b=s*_,i.c=r*l,i.d=o*_,i.tx=l*a+d,i.ty=_*h+f),i},i.mul16=function(t,e,i){var n=t.a,s=t.b,r=t.c,o=t.d,a=t.tx,h=t.ty,l=e.a,c=e.b,u=e.c,_=e.d,d=e.tx,f=e.ty;return 0!==c||0!==u?(i[0]=n*l+s*u,i[1]=n*c+s*_,i[4]=r*l+o*u,i[5]=r*c+o*_,i[12]=l*a+u*h+d,i[13]=c*a+_*h+f):(i[0]=n*l,i[1]=s*_,i[4]=r*l,i[5]=o*_,i[12]=l*a+d,i[13]=_*h+f),i},i.mulPre=function(t,e,i,n,s,r,o,a){var h=t.a,l=t.b,c=t.c,u=t.d,_=t.tx,d=t.ty;return 0!==i||0!==n?(a.a=h*e+l*n,a.b=h*i+l*s,a.c=c*e+u*n,a.d=c*i+u*s,a.tx=e*_+n*d+r,a.ty=i*_+s*d+o):(a.a=h*e,a.b=l*s,a.c=c*e,a.d=u*s,a.tx=e*_+r,a.ty=s*d+o),a},i.mulPos=function(t,e,i,n,s,r,o,a){var h=t.a,l=t.b,c=t.c,u=t.d,_=t.tx,d=t.ty;return 0!==l||0!==c?(a.a=e*h+i*c,a.b=e*l+i*u,a.c=n*h+s*c,a.d=n*l+s*u,a.tx=h*r+c*o+_,a.ty=l*r+u*o+d):(a.a=e*h,a.b=i*u,a.c=n*h,a.d=s*u,a.tx=h*r+_,a.ty=u*o+d),a},i.preMul=function(t,e,i){var n=t.a,s=t.b,r=t.c,o=t.d,a=e.a,h=e.b,l=e.c,c=e.d,u=e.tx,_=e.ty;return i.a=a*n,i.b=i.c=0,i.d=c*o,i.tx=u*n+t.tx,i.ty=_*o+t.ty,0===h&&0===l&&0===s&&0===r||(i.a+=h*r,i.d+=l*s,i.b+=a*s+h*o,i.c+=l*n+c*r,i.tx+=_*r,i.ty+=u*s),i},i.preMulXY=function(t,e,i,n){var s=t.a,r=t.b,o=t.c,a=t.d;return n.a=s,n.b=r,n.c=o,n.d=a,n.tx=e*s+t.tx+i*o,n.ty=i*a+t.ty+e*r,n},i.create=function(){var t=i._cache,e=t._length?t[--t._length]:new i;return e.inPool=!1,e},i.EMPTY=new i,i.TEMP=new i,i._cache=[],i}(),k=function(){function t(t,e){void 0===t&&(t=0),void 0===e&&(e=0),this.x=t,this.y=e}p(t,"laya.maths.Point");var e=t.prototype;return e.setTo=function(t,e){return this.x=t,this.y=e,this},e.distance=function(t,e){return Math.sqrt((this.x-t)*(this.x-t)+(this.y-e)*(this.y-e))},e.toString=function(){return this.x+","+this.y},e.normalize=function(){var t=Math.sqrt(this.x*this.x+this.y*this.y);if(0<t){var e=1/t;this.x*=e,this.y*=e}},t.TEMP=new t,t.EMPTY=new t,t}(),O=function(){function l(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),this.x=t,this.y=e,this.width=i,this.height=n}p(l,"laya.maths.Rectangle");var t=l.prototype;return t.setTo=function(t,e,i,n){return this.x=t,this.y=e,this.width=i,this.height=n,this},t.copyFrom=function(t){return this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this},t.contains=function(t,e){return!(this.width<=0||this.height<=0)&&(t>=this.x&&t<this.right&&e>=this.y&&e<this.bottom)},t.intersects=function(t){return!(t.x>this.x+this.width||t.x+t.width<this.x||t.y>this.y+this.height||t.y+t.height<this.y)},t.intersection=function(t,e){return this.intersects(t)?(e||(e=new l),e.x=Math.max(this.x,t.x),e.y=Math.max(this.y,t.y),e.width=Math.min(this.right,t.right)-e.x,e.height=Math.min(this.bottom,t.bottom)-e.y,e):null},t.union=function(t,e){return e||(e=new l),this.clone(e),t.width<=0||t.height<=0?e:(e.addPoint(t.x,t.y),e.addPoint(t.right,t.bottom),this)},t.clone=function(t){return t||(t=new l),t.x=this.x,t.y=this.y,t.width=this.width,t.height=this.height,t},t.toString=function(){return this.x+","+this.y+","+this.width+","+this.height},t.equals=function(t){return!(!t||t.x!==this.x||t.y!==this.y||t.width!==this.width||t.height!==this.height)},t.addPoint=function(t,e){return this.x>t&&(this.width+=this.x-t,this.x=t),this.y>e&&(this.height+=this.y-e,this.y=e),this.width<t-this.x&&(this.width=t-this.x),this.height<e-this.y&&(this.height=e-this.y),this},t._getBoundPoints=function(){var t=l._temB;return(t.length=0)==this.width||0==this.height||t.push(this.x,this.y,this.x+this.width,this.y,this.x,this.y+this.height,this.x+this.width,this.y+this.height),t},t.isEmpty=function(){return this.width<=0||this.height<=0},c(0,t,"right",function(){return this.x+this.width}),c(0,t,"bottom",function(){return this.y+this.height}),l._getBoundPointS=function(t,e,i,n){var s=l._temA;return(s.length=0)==i||0==n||s.push(t,e,t+i,e,t,e+n,t+i,e+n),s},l._getWrapRec=function(t,e){if(!t||t.length<1)return e?e.setTo(0,0,0,0):l.TEMP.setTo(0,0,0,0);e=e||new l;var i,n,s,r,o,a=t.length,h=k.TEMP;for(s=o=-(n=r=99999),i=0;i<a;i+=2)h.x=t[i],h.y=t[i+1],n=n<h.x?n:h.x,r=r<h.y?r:h.y,s=s>h.x?s:h.x,o=o>h.y?o:h.y;return e.setTo(n,r,s-n,o-r)},l.EMPTY=new l,l.TEMP=new l,l._temB=[],l._temA=[],l}(),N=(p(B,"laya.media.SoundManager"),c(1,B,"useAudioMusic",function(){return B._useAudioMusic},function(t){B._useAudioMusic=t,B._musicClass=t?Mt:null}),c(1,B,"autoStopMusic",function(){return B._autoStopMusic},function(t){b.stage.off("blur",null,B._stageOnBlur),b.stage.off("focus",null,B._stageOnFocus),b.stage.off("visibilitychange",null,B._visibilityChange),(B._autoStopMusic=t)&&(b.stage.on("blur",null,B._stageOnBlur),b.stage.on("focus",null,B._stageOnFocus),b.stage.on("visibilitychange",null,B._visibilityChange))}),c(1,B,"muted",function(){return B._muted},function(t){t!=B._muted&&(t&&B.stopAllSound(),B.musicMuted=t,B._muted=t)}),c(1,B,"musicMuted",function(){return B._musicMuted},function(t){t!=B._musicMuted&&(t?(B._tMusic&&B._musicChannel&&!B._musicChannel.isStopped?X.isConchApp?B._musicChannel._audio&&(B._musicChannel._audio.muted=!0):B._musicChannel.pause():B._musicChannel=null,B._musicMuted=t):(B._musicMuted=t,B._tMusic&&B._musicChannel&&(X.isConchApp?B._musicChannel._audio&&(B._musicChannel._audio.muted=!1):B._musicChannel.resume())))}),c(1,B,"soundMuted",function(){return B._soundMuted},function(t){B._soundMuted=t}),B.addChannel=function(t){0<=B._channels.indexOf(t)||B._channels.push(t)},B.removeChannel=function(t){var e=0;for(e=B._channels.length-1;0<=e;e--)B._channels[e]==t&&B._channels.splice(e,1)},B.disposeSoundIfNotUsed=function(t){var e=0;for(e=B._channels.length-1;0<=e;e--)if(B._channels[e].url==t)return;B.destroySound(t)},B._visibilityChange=function(){b.stage.isVisibility?B._stageOnFocus():B._stageOnBlur()},B._stageOnBlur=function(){B._isActive=!1,B._musicChannel&&(B._musicChannel.isStopped||(B._blurPaused=!0,B._musicChannel.pause())),B.stopAllSound(),b.stage.once("mousedown",null,B._stageOnFocus)},B._recoverWebAudio=function(){Et.ctx&&"running"!=Et.ctx.state&&Et.ctx.resume&&Et.ctx.resume()},B._stageOnFocus=function(){B._isActive=!0,B._recoverWebAudio(),b.stage.off("mousedown",null,B._stageOnFocus),B._blurPaused&&B._musicChannel&&B._musicChannel.isStopped&&(B._blurPaused=!1,B._musicChannel.resume())},B.playSound=function(t,e,i,n,s){if(void 0===e&&(e=1),void 0===s&&(s=0),!B._isActive||!t)return null;if(B._muted)return null;if(B._recoverWebAudio(),(t=Y.formatURL(t))==B._tMusic){if(B._musicMuted)return null}else{if(X.isConchApp){var r=vt.getFileExtension(t);if("wav"!=r&&"ogg"!=r)return alert("The sound only supports wav or ogg format,for optimal performance reason,please refer to the official website document."),null}if(B._soundMuted)return null}var o,a;return Q.onMiniGame||Q.onKGMiniGame||(o=b.loader.getRes(t)),n||(n=B._soundClass),o||((o=new n).load(t),Q.onMiniGame||Q.onKGMiniGame||It.cacheRes(t,o)),(a=o.play(s,e))?(a.url=t,a.volume=t==B._tMusic?B.musicVolume:B.soundVolume,a.completeHandler=i,a):null},B.destroySound=function(t){var e=b.loader.getRes(t);e&&(It.clearRes(t),e.dispose())},B.playMusic=function(t,e,i,n){return void 0===e&&(e=0),void 0===n&&(n=0),t=Y.formatURL(t),B._tMusic=t,B._musicChannel&&B._musicChannel.stop(),B._musicChannel=B.playSound(t,e,i,B._musicClass,n)},B.stopSound=function(t){t=Y.formatURL(t);var e,i=0;for(i=B._channels.length-1;0<=i;i--)(e=B._channels[i]).url==t&&e.stop()},B.stopAll=function(){B._tMusic=null;var t=0;for(t=B._channels.length-1;0<=t;t--)B._channels[t].stop()},B.stopAllSound=function(){var t,e=0;for(e=B._channels.length-1;0<=e;e--)(t=B._channels[e]).url!=B._tMusic&&t.stop()},B.stopMusic=function(){B._musicChannel&&B._musicChannel.stop(),B._tMusic=null},B.setSoundVolume=function(t,e){if(e)e=Y.formatURL(e),B._setVolume(e,t);else{B.soundVolume=t;var i,n=0;for(n=B._channels.length-1;0<=n;n--)(i=B._channels[n]).url!=B._tMusic&&(i.volume=t)}},B.setMusicVolume=function(t){B.musicVolume=t,B._setVolume(B._tMusic,t)},B._setVolume=function(t,e){t=Y.formatURL(t);var i,n=0;for(n=B._channels.length-1;0<=n;n--)(i=B._channels[n]).url==t&&(i.volume=e)},B.musicVolume=1,B.soundVolume=1,B.playbackRate=1,B._useAudioMusic=!0,B._muted=!1,B._soundMuted=!1,B._musicMuted=!1,B._tMusic=null,B._musicChannel=null,B._channels=[],B._autoStopMusic=!1,B._blurPaused=!1,B._isActive=!0,B._soundClass=null,B._musicClass=null,B.autoReleaseSound=!0,B);function B(){}var W,G=(p(U,"laya.net.LocalStorage"),U.__init__=function(){U._baseClass||(U._baseClass=W).init(),U.items=U._baseClass.items,U.support=U._baseClass.support},U.setItem=function(t,e){U._baseClass.setItem(t,e)},U.getItem=function(t){return U._baseClass.getItem(t)},U.setJSON=function(t,e){U._baseClass.setJSON(t,e)},U.getJSON=function(t){return U._baseClass.getJSON(t)},U.removeItem=function(t){U._baseClass.removeItem(t)},U.clear=function(){U._baseClass.clear()},U._baseClass=null,U.items=null,U.support=!1,U.__init$=function(){function i(){}p(i,""),i.init=function(){try{i.support=!0,i.items=r.localStorage,i.setItem("laya","1"),i.removeItem("laya")}catch(t){i.support=!1}i.support||console.log("LocalStorage is not supprot or browser is private mode.")},i.setItem=function(t,e){try{i.support&&i.items.setItem(t,e)}catch(t){console.warn("set localStorage failed",t)}},i.getItem=function(t){return i.support?i.items.getItem(t):null},i.setJSON=function(t,e){try{i.support&&i.items.setItem(t,JSON.stringify(e))}catch(t){console.warn("set localStorage failed",t)}},i.getJSON=function(t){return JSON.parse(i.support?i.items.getItem(t):null)},i.removeItem=function(t){i.support&&i.items.removeItem(t)},i.clear=function(){i.support&&i.items.clear()},i.items=null,i.support=!1,W=i},U);function U(){}p(z,"laya.net.ResourceVersion"),z.enable=function(t,e,i){void 0===i&&(i=2),laya.net.ResourceVersion.type=i,b.loader.load(t,v.create(null,z.onManifestLoaded,[e]),null,"json"),Y.customFormat=z.addVersionPrefix},z.onManifestLoaded=function(t,e){z.manifest=e,t.run(),e||console.warn("资源版本清单文件不存在，不使用资源版本管理。忽略ERR_FILE_NOT_FOUND错误。")},z.addVersionPrefix=function(t){return z.manifest&&z.manifest[t]?2==z.type?z.manifest[t]:z.manifest[t]+"/"+t:t},z.FOLDER_VERSION=1,z.FILENAME_VERSION=2,z.manifest=null,z.type=1;function z(){}var H=function(){function t(){this.fontName=null,this.complete=null,this.err=null,this._fontTxt=null,this._url=null,this._div=null,this._txtWidth=NaN,this._http=null}p(t,"laya.net.TTFLoader");var e=t.prototype;return e.load=function(t){var e=(this._url=t).split(".ttf")[0].split("/");this.fontName=e[e.length-1],Q.window.conch?this._loadConch():Q.window.FontFace?this._loadWithFontFace():this._loadWithCSS()},e._loadConch=function(){this._http=new At,this._http.on("error",this,this._onErr),this._http.on("complete",this,this._onHttpLoaded),this._http.send(this._url,null,"get","arraybuffer")},e._onHttpLoaded=function(t){Q.window.conch.setFontFaceFromBuffer(this.fontName,t),this._clearHttp(),this._complete()},e._clearHttp=function(){this._http&&(this._http.off("error",this,this._onErr),this._http.off("complete",this,this._onHttpLoaded),this._http=null)},e._onErr=function(){this._clearHttp(),this.err&&(this.err.runWith("fail:"+this._url),this.err=null)},e._complete=function(){b.timer.clear(this,this._complete),b.timer.clear(this,this._checkComplete),this._div&&this._div.parentNode&&(this._div.parentNode.removeChild(this._div),this._div=null),this.complete&&(this.complete.runWith(this),this.complete=null)},e._checkComplete=function(){A.measureText("LayaTTFFont",this._fontTxt).width!=this._txtWidth&&this._complete()},e._loadWithFontFace=function(){var t=new Q.window.FontFace(this.fontName,"url('"+this._url+"')");Q.window.document.fonts.add(t);var e=this;t.loaded.then(function(){e._complete()}),t.load()},e._createDiv=function(){this._div=Q.createElement("div"),this._div.innerHTML="laya";var t=this._div.style;t.fontFamily=this.fontName,t.position="absolute",t.left="-100px",t.top="-100px",Q.document.body.appendChild(this._div)},e._loadWithCSS=function(){var t=this,e=Q.createElement("style");e.type="text/css",Q.document.body.appendChild(e),e.textContent="@font-face { font-family:'"+this.fontName+"'; src:url('"+this._url+"');}",this._fontTxt="40px "+this.fontName,this._txtWidth=A.measureText("LayaTTFFont",this._fontTxt).width;var i=this;e.onload=function(){b.timer.once(1e4,i,t._complete)},b.timer.loop(20,this,this._checkComplete),this._createDiv()},t._testString="LayaTTFFont",t}(),Y=function(){function n(t){this._url=null,this._path=null,this._url=n.formatURL(t),this._path=n.getPath(t)}p(n,"laya.net.URL");var t=n.prototype;return c(0,t,"path",function(){return this._path}),c(0,t,"url",function(){return this._url}),n.formatURL=function(t,e){if(!t)return"null path";if(0<t.indexOf(":"))return t;null!=n.customFormat&&(t=n.customFormat(t,e));var i=t.charAt(0);if("."===i)return n.formatRelativePath((e||n.basePath)+t);if("~"===i)return n.rootPath+t.substring(1);if("d"===i){if(0===t.indexOf("data:image"))return t}else if("/"===i)return t;return(e||n.basePath)+t},n.formatRelativePath=function(t){for(var e=t.split("/"),i=0,n=e.length;i<n;i++)".."==e[i]&&(e.splice(i-1,2),i-=2);return e.join("/")},n.isAbsolute=function(t){return 0<t.indexOf(":")||"/"==t.charAt(0)},n.getPath=function(t){var e=t.lastIndexOf("/");return 0<e?t.substr(0,e+1):""},n.getFileName=function(t){var e=t.lastIndexOf("/");return 0<e?t.substr(e+1):t},n.version={},n.basePath="",n.rootPath="",n.customFormat=function(t){var e=n.version[t];return!X.isConchApp&&e&&(t+="?v="+e),t},n}(),X=function(){function s(t,e){this._timeId=0;var i=s._mainCanvas.source.style;i.position="absolute",i.top=i.left="0px",i.background="#000000",s._mainCanvas.source.id="layaCanvas";var n=laya.renders.Render.isWebGL;s._mainCanvas.source.width=t,s._mainCanvas.source.height=e,n&&s.WebGL.init(s._mainCanvas,t,e),Q.onKGMiniGame||Q.container.appendChild(s._mainCanvas.source),(s._context=new $(t,e,n?null:s._mainCanvas)).ctx.setIsMainContext(),Q.window.requestAnimationFrame(function t(e){b.stage._loop();Q.window.requestAnimationFrame(t)}),b.stage.on("visibilitychange",this,this._onVisibilitychange)}p(s,"laya.renders.Render");var t=s.prototype;return t._onVisibilitychange=function(){b.stage.isVisibility?0!=this._timeId&&Q.window.clearInterval(this._timeId):this._timeId=Q.window.setInterval(this._enterFrame,1e3)},t._enterFrame=function(t){b.stage._loop()},c(1,s,"context",function(){return s._context}),c(1,s,"canvas",function(){return s._mainCanvas.source}),s._context=null,s._mainCanvas=null,s.WebGL=null,s.isConchNode=!1,s.isConchApp=!1,s.isConchWebGL=!1,s.isWebGL=!1,s.is3DMode=!1,s.optimizeTextureMemory=function(t,e){return!0},s.__init$=function(){r.ConchRenderType=r.ConchRenderType||1,r.ConchRenderType|=r.conch?4:0,s.isConchNode=5==(5&r.ConchRenderType),s.isConchApp=4==(4&r.ConchRenderType),s.isConchWebGL=6==r.ConchRenderType},s}(),$=function(){function o(t,e,i){this.x=0,this.y=0,this._drawTexture=function(t,e,i){i[0].loaded&&this.ctx.drawTexture(i[0],i[1],i[2],i[3],i[4],t,e)},this._fillTexture=function(t,e,i){i[0].loaded&&this.ctx.fillTexture(i[0],i[1]+t,i[2]+e,i[3],i[4],i[5],i[6],i[7])},this._drawTextureWithTransform=function(t,e,i){i[0].loaded&&this.ctx.drawTextureWithTransform(i[0],i[1],i[2],i[3],i[4],i[5],t,e,i[6])},this._fillQuadrangle=function(t,e,i){this.ctx.fillQuadrangle(i[0],i[1],i[2],i[3],i[4])},this._drawRect=function(t,e,i){var n=this.ctx;null!=i[4]&&(n.fillStyle=i[4],n.fillRect(t+i[0],e+i[1],i[2],i[3],null)),null!=i[5]&&(n.strokeStyle=i[5],n.lineWidth=i[6],n.strokeRect(t+i[0],e+i[1],i[2],i[3],i[6]))},this._drawPie=function(t,e,i){var n=this.ctx;X.isWebGL&&n.setPathId(i[8]),n.beginPath(),X.isWebGL?(n.movePath(i[0]+t,i[1]+e),n.moveTo(0,0)):n.moveTo(t+i[0],e+i[1]),n.arc(t+i[0],e+i[1],i[2],i[3],i[4]),n.closePath(),this._fillAndStroke(i[5],i[6],i[7],!0)},this._clipRect=function(t,e,i){this.ctx.clipRect(t+i[0],e+i[1],i[2],i[3])},this._fillRect=function(t,e,i){this.ctx.fillRect(t+i[0],e+i[1],i[2],i[3],i[4])},this._drawCircle=function(t,e,i){var n=this.ctx;X.isWebGL&&n.setPathId(i[6]),ft.drawCall++,n.beginPath(),X.isWebGL&&n.movePath(i[0]+t,i[1]+e),n.arc(i[0]+t,i[1]+e,i[2],0,o.PI2),n.closePath(),this._fillAndStroke(i[3],i[4],i[5],!0)},this._fillCircle=function(t,e,i){ft.drawCall++;var n=this.ctx;n.beginPath(),n.fillStyle=i[3],n.arc(i[0]+t,i[1]+e,i[2],0,o.PI2),n.fill()},this._setShader=function(t,e,i){this.ctx.setShader(i[0])},this._drawLine=function(t,e,i){var n=this.ctx;X.isWebGL&&n.setPathId(i[6]),n.beginPath(),n.strokeStyle=i[4],n.lineWidth=i[5],X.isWebGL?(n.movePath(t,e),n.moveTo(i[0],i[1]),n.lineTo(i[2],i[3])):(n.moveTo(t+i[0],e+i[1]),n.lineTo(t+i[2],e+i[3])),n.stroke()},this._drawLines=function(t,e,i){var n=this.ctx;X.isWebGL&&n.setPathId(i[5]),n.beginPath(),t+=i[0],e+=i[1],X.isWebGL&&n.movePath(t,e),n.strokeStyle=i[3],n.lineWidth=i[4];var s=i[2],r=2,o=s.length;if(X.isWebGL)for(n.moveTo(s[0],s[1]);r<o;)n.lineTo(s[r++],s[r++]);else for(n.moveTo(t+s[0],e+s[1]);r<o;)n.lineTo(t+s[r++],e+s[r++]);n.stroke()},this._drawLinesWebGL=function(t,e,i){this.ctx.drawLines(t+this.x+i[0],e+this.y+i[1],i[2],i[3],i[4])},this._drawCurves=function(t,e,i){this.ctx.drawCurves(t,e,i)},this._draw=function(t,e,i){i[0].call(null,this,t,e)},this._transformByMatrix=function(t,e,i){this.ctx.transformByMatrix(i[0])},this._setTransform=function(t,e,i){this.ctx.setTransform(i[0],i[1],i[2],i[3],i[4],i[5])},this._setTransformByMatrix=function(t,e,i){this.ctx.setTransformByMatrix(i[0])},this._save=function(t,e,i){this.ctx.save()},this._restore=function(t,e,i){this.ctx.restore()},this._translate=function(t,e,i){this.ctx.translate(i[0],i[1])},this._transform=function(t,e,i){this.ctx.translate(i[1]+t,i[2]+e);var n=i[0];this.ctx.transform(n.a,n.b,n.c,n.d,n.tx,n.ty),this.ctx.translate(-t-i[1],-e-i[2])},this._rotate=function(t,e,i){this.ctx.translate(i[1]+t,i[2]+e),this.ctx.rotate(i[0]),this.ctx.translate(-t-i[1],-e-i[2])},this._scale=function(t,e,i){this.ctx.translate(i[2]+t,i[3]+e),this.ctx.scale(i[0],i[1]),this.ctx.translate(-t-i[2],-e-i[3])},this._alpha=function(t,e,i){this.ctx.globalAlpha*=i[0]},this._setAlpha=function(t,e,i){this.ctx.globalAlpha=i[0]},this._fillText=function(t,e,i){this.ctx.fillText(i[0],i[1]+t,i[2]+e,i[3],i[4],i[5])},this._strokeText=function(t,e,i){this.ctx.strokeText(i[0],i[1]+t,i[2]+e,i[3],i[4],i[5],i[6])},this._fillBorderText=function(t,e,i){this.ctx.fillBorderText(i[0],i[1]+t,i[2]+e,i[3],i[4],i[5],i[6],i[7])},this._blendMode=function(t,e,i){this.ctx.globalCompositeOperation=i[0]},this._beginClip=function(t,e,i){this.ctx.beginClip&&this.ctx.beginClip(t+i[0],e+i[1],i[2],i[3])},this._setIBVB=function(t,e,i){this.ctx.setIBVB(i[0]+t,i[1]+e,i[2],i[3],i[4],i[5],i[6],i[7])},this._fillTrangles=function(t,e,i){this.ctx.fillTrangles(i[0],i[1]+t,i[2]+e,i[3],i[4])},this._drawPath=function(t,e,i){var n=this.ctx;X.isWebGL&&n.setPathId(-1),n.beginPath(),t+=i[0],e+=i[1],X.isWebGL&&n.movePath(t,e);for(var s=i[2],r=0,o=s.length;r<o;r++){var a=s[r];switch(a[0]){case"moveTo":X.isWebGL?n.moveTo(a[1],a[2]):n.moveTo(t+a[1],e+a[2]);break;case"lineTo":X.isWebGL?n.lineTo(a[1],a[2]):n.lineTo(t+a[1],e+a[2]);break;case"arcTo":X.isWebGL?n.arcTo(a[1],a[2],a[3],a[4],a[5]):n.arcTo(t+a[1],e+a[2],t+a[3],e+a[4],a[5]);break;case"closePath":n.closePath()}}var h=i[3];null!=h&&(n.fillStyle=h.fillStyle,n.fill());var l=i[4];null!=l&&(n.strokeStyle=l.strokeStyle,n.lineWidth=l.lineWidth||1,n.lineJoin=l.lineJoin,n.lineCap=l.lineCap,n.miterLimit=l.miterLimit,n.stroke())},this.drawPoly=function(t,e,i){this.ctx.drawPoly(t+this.x+i[0],e+this.y+i[1],i[2],i[3],i[4],i[5],i[6])},this._drawPoly=function(t,e,i){var n=this.ctx,s=i[2],r=2,o=s.length;if(X.isWebGL)for(n.setPathId(i[6]),n.beginPath(),t+=i[0],e+=i[1],n.movePath(t,e),n.moveTo(s[0],s[1]);r<o;)n.lineTo(s[r++],s[r++]);else for(n.beginPath(),t+=i[0],e+=i[1],n.moveTo(t+s[0],e+s[1]);r<o;)n.lineTo(t+s[r++],e+s[r++]);n.closePath(),this._fillAndStroke(i[3],i[4],i[5],i[7])},this._drawSkin=function(t,e,i){var n=i[0];if(n){var s=this.ctx;n.render(s,t,e)}},this._drawParticle=function(t,e,i){this.ctx.drawParticle(t+this.x,e+this.y,i[0])},this._setFilters=function(t,e,i){this.ctx.setFilters(i)},i?this.ctx=i.getContext("2d"):(i=Ht.create("3D"),this.ctx=A.createWebGLContext2D(i),i._setContext(this.ctx)),i.size(t,e),this.canvas=i}p(o,"laya.renders.RenderContext");var t=o.prototype;return t.destroy=function(){this.canvas&&(this.canvas.destroy(),this.canvas=null,this.ctx=null),this.ctx&&(this.ctx.destroy(),this.ctx=null)},t.drawTexture=function(t,e,i,n,s){t.loaded&&this.ctx.drawTexture(t,e,i,n,s,this.x,this.y)},t._drawTextures=function(t,e,i){i[0].loaded&&this.ctx.drawTextures(i[0],i[1],t+this.x,e+this.y)},t.drawTextureWithTransform=function(t,e,i,n,s,r,o){t.loaded&&this.ctx.drawTextureWithTransform(t,e,i,n,s,r,this.x,this.y,o)},t.fillQuadrangle=function(t,e,i,n,s){this.ctx.fillQuadrangle(t,e,i,n,s)},t.drawCanvas=function(t,e,i,n,s){this.ctx.drawCanvas(t,e+this.x,i+this.y,n,s)},t.drawRect=function(t,e,i,n,s,r){void 0===r&&(r=1);var o=this.ctx;o.strokeStyle=s,o.lineWidth=r,o.strokeRect(t+this.x,e+this.y,i,n,r)},t._fillAndStroke=function(t,e,i,n){void 0===n&&(n=!1);var s=this.ctx;null!=t&&(s.fillStyle=t,X.isWebGL?s.fill(n):s.fill()),null!=e&&0<i&&(s.strokeStyle=e,s.lineWidth=i,s.stroke())},t.clipRect=function(t,e,i,n){this.ctx.clipRect(t+this.x,e+this.y,i,n)},t.fillRect=function(t,e,i,n,s){this.ctx.fillRect(t+this.x,e+this.y,i,n,s)},t.drawCircle=function(t,e,i,n,s){void 0===s&&(s=1),ft.drawCall++;var r=this.ctx;r.beginPath(),r.strokeStyle=n,r.lineWidth=s,r.arc(t+this.x,e+this.y,i,0,o.PI2),r.stroke()},t.drawTriangles=function(t,e,i){if(X.isWebGL)this.ctx.drawTriangles(i[0],t+i[1],e+i[2],i[3],i[4],i[5],i[6],i[7],i[8],i[9]);else{var n=i[5],s=0,r=n.length,o=this.ctx;for(s=0;s<r;s+=3){var a=2*n[s],h=2*n[s+1],l=2*n[s+2];o.drawTriangle(i[0],i[3],i[4],a,h,l,i[6],!0)}}},t.fillCircle=function(t,e,i,n){ft.drawCall++;var s=this.ctx;s.beginPath(),s.fillStyle=n,s.arc(t+this.x,e+this.y,i,0,o.PI2),s.fill()},t.setShader=function(t){this.ctx.setShader(t)},t.drawLine=function(t,e,i,n,s,r){void 0===r&&(r=1);var o=this.ctx;o.beginPath(),o.strokeStyle=s,o.lineWidth=r,o.moveTo(this.x+t,this.y+e),o.lineTo(this.x+i,this.y+n),o.stroke()},t.clear=function(){this.ctx.clear()},t.transformByMatrix=function(t){this.ctx.transformByMatrix(t)},t.setTransform=function(t,e,i,n,s,r){this.ctx.setTransform(t,e,i,n,s,r)},t.setTransformByMatrix=function(t){this.ctx.setTransformByMatrix(t)},t.save=function(){this.ctx.save()},t.restore=function(){this.ctx.restore()},t.translate=function(t,e){this.ctx.translate(t,e)},t.transform=function(t,e,i,n,s,r){this.ctx.transform(t,e,i,n,s,r)},t.rotate=function(t){this.ctx.rotate(t)},t.scale=function(t,e){this.ctx.scale(t,e)},t.alpha=function(t){this.ctx.globalAlpha*=t},t.setAlpha=function(t){this.ctx.globalAlpha=t},t.fillWords=function(t,e,i,n,s,r){void 0===r&&(r=0),this.ctx.fillWords(t,e,i,n,s,r)},t.fillBorderWords=function(t,e,i,n,s,r,o){this.ctx.fillBorderWords(t,e,i,n,s,r,o)},t.fillText=function(t,e,i,n,s,r){this.ctx.fillText(t,e+this.x,i+this.y,n,s,r)},t.strokeText=function(t,e,i,n,s,r,o){this.ctx.strokeText(t,e+this.x,i+this.y,n,s,r,o)},t.blendMode=function(t){this.ctx.globalCompositeOperation=t},t.flush=function(){this.ctx.flush&&this.ctx.flush()},t.addRenderObject=function(t){this.ctx.addRenderObject(t)},t.beginClip=function(t,e,i,n){this.ctx.beginClip&&this.ctx.beginClip(t,e,i,n)},t.endClip=function(){this.ctx.endClip&&this.ctx.endClip()},t.fillTrangles=function(t,e,i){this.ctx.fillTrangles(i[0],i[1],i[2],i[3],4<i.length?i[4]:null)},o.PI2=2*Math.PI,o}(),V=function(){function o(t,e){switch(this._next=e||o.NORENDER,t){case 0:return void(this._fun=this._no);case 1:return void(this._fun=this._image);case 2:return void(this._fun=this._alpha);case 4:return void(this._fun=this._transform);case 8:return void(this._fun=this._blend);case 16:return void(this._fun=this._canvas);case 64:return void(this._fun=this._mask);case 128:return void(this._fun=this._clip);case 256:return void(this._fun=this._style);case 512:return void(this._fun=this._graphics);case 2048:return void(this._fun=this._childs);case 1024:return void(this._fun=this._custom);case 513:case 517:return void(this._fun=this._image2);case 32:return void(this._fun=C._filter);case 69905:return void(this._fun=o._initRenderFun)}this.onCreate(t)}p(o,"laya.renders.RenderSprite");var t=o.prototype;return t.onCreate=function(t){},t._style=function(t,e,i,n){t._style.render(t,e,i,n);var s=this._next;s._fun.call(s,t,e,i,n)},t._no=function(t,e,i,n){},t._custom=function(t,e,i,n){t.customRender(e,i,n);var s=t._style._tf;this._next._fun.call(this._next,t,e,i-s.translateX,n-s.translateY)},t._clip=function(t,e,i,n){var s=this._next;if(s!=o.NORENDER){var r=t._style.scrollRect;e.ctx.save(),e.ctx.clipRect(i,n,r.width,r.height),s._fun.call(s,t,e,i-r.x,n-r.y),e.ctx.restore()}},t._blend=function(t,e,i,n){var s=t._style;s.blendMode&&(e.ctx.globalCompositeOperation=s.blendMode);var r=this._next;r._fun.call(r,t,e,i,n),e.ctx.globalCompositeOperation="source-over"},t._mask=function(t,e,i,n){var s=this._next;s._fun.call(s,t,e,i,n);var r=t.mask;r&&(e.ctx.globalCompositeOperation="destination-in",(0<r.numChildren||!r.graphics._isOnlyOne())&&(r.cacheAsBitmap=!0),r.render(e,i-t.pivotX,n-t.pivotY)),e.ctx.globalCompositeOperation="source-over"},t._graphics=function(t,e,i,n){var s=t._style._tf;t._graphics&&t._graphics._render(t,e,i-s.translateX,n-s.translateY);var r=this._next;r._fun.call(r,t,e,i,n)},t._image=function(t,e,i,n){var s=t._style;e.ctx.drawTexture2(i,n,s._tf.translateX,s._tf.translateY,t.transform,s.alpha,s.blendMode,t._graphics._one)},t._image2=function(t,e,i,n){var s=t._style._tf;e.ctx.drawTexture2(i,n,s.translateX,s.translateY,t.transform,1,null,t._graphics._one)},t._alpha=function(t,e,i,n){var s;if(.01<(s=t._style.alpha)||t._needRepaint()){var r=e.ctx.globalAlpha;e.ctx.globalAlpha*=s;var o=this._next;o._fun.call(o,t,e,i,n),e.ctx.globalAlpha=r}},t._transform=function(t,e,i,n){var s=t.transform,r=this._next;s&&r!=o.NORENDER?(e.save(),e.transform(s.a,s.b,s.c,s.d,s.tx+i,s.ty+n),r._fun.call(r,t,e,0,0),e.restore()):r._fun.call(r,t,e,i,n)},t._childs=function(t,e,i,n){var s=t._style,r=s._tf;if(i=i-r.translateX+s.paddingLeft,n=n-r.translateY+s.paddingTop,s._calculation){var o=t._getWords();if(o){var a=s;a&&(a.stroke?e.fillBorderWords(o,i,n,a.font,a.color,a.strokeColor,a.stroke):e.fillWords(o,i,n,a.font,a.color,"none"!=a.textDecoration&&a.underLine?1:0))}}var h,l=t._childs,c=l.length;if(t.viewport||t.optimizeScrollRect&&t._style.scrollRect){var u=t.viewport||t._style.scrollRect,_=u.x,d=u.y,f=u.right,p=u.bottom,g=NaN,m=NaN;for(v=0;v<c;++v)(h=l[v]).visible&&(g=h._x)<f&&g+h.width>_&&(m=h._y)<p&&m+h.height>d&&h.render(e,i,n)}else for(var v=0;v<c;++v)(h=l[v])._style.visible&&h.render(e,i,n)},t._canvas=function(t,e,i,n){var s=t._$P.cacheCanvas;if(s){"bitmap"===s.type?ft.canvasBitmap++:ft.canvasNormal++;var r=s.ctx;if(t._needRepaint()||!r)this._canvas_repaint(t,e,i,n);else{var o=s._cacheRec;e.drawCanvas(r.canvas,i+o.x,n+o.y,o.width,o.height)}}else this._next._fun.call(this._next,t,e,i,n)},t._canvas_repaint=function(t,e,i,n){var s=t._$P.cacheCanvas,r=this._next;if(s){var o,a,h,l,c=s.ctx,u=t._needRepaint()||!c,_=s.type;if("bitmap"===_?ft.canvasBitmap++:ft.canvasNormal++,u){var d,f;s._cacheRec||(s._cacheRec=new O),X.isWebGL&&"bitmap"!==_?s._cacheRec.setTo(-t.pivotX,-t.pivotY,1,1):((l=t.getSelfBounds()).x=l.x-t.pivotX,l.y=l.y-t.pivotY,l.x=l.x-16,l.y=l.y-16,l.width=l.width+32,l.height=l.height+32,l.x=Math.floor(l.x+i)-i,l.y=Math.floor(l.y+n)-n,l.width=Math.floor(l.width),l.height=Math.floor(l.height),s._cacheRec.copyFrom(l)),l=s._cacheRec;var p,g=X.isWebGL?1:Q.pixelRatio*b.stage.clientScaleX,m=X.isWebGL?1:Q.pixelRatio*b.stage.clientScaleY;if(!X.isWebGL){var v,y=1,w=1;for(v=t;v&&v!=b.stage;)y*=v.scaleX,w*=v.scaleY,v=v.parent;X.isWebGL?(y<1&&(g*=y),w<1&&(m*=w)):(1<y&&(g*=y),1<w&&(m*=w))}if(t.scrollRect){var x=t.scrollRect;l.x-=x.x,l.y-=x.y}if(d=l.width*g,f=l.height*m,a=l.x,h=l.y,X.isWebGL&&"bitmap"===_&&(2048<d||2048<f))return console.warn("cache bitmap size larger than 2048,cache ignored"),s.ctx&&(_t.recover("RenderContext",s.ctx),s.ctx.canvas.size(0,0),s.ctx=null),void r._fun.call(r,t,e,i,n);if(c||(c=s.ctx=_t.getItem("RenderContext")||new $(d,f,Ht.create("AUTO"))),c.ctx.sprite=t,(o=c.canvas).clear(),o.width==d&&o.height==f||o.size(d,f),"bitmap"===_?o.context.asBitmap=!0:"normal"===_&&(o.context.asBitmap=!1),1!=g||1!=m){var T=c.ctx;T.save(),T.scale(g,m),!X.isConchWebGL&&X.isConchApp&&(p=t._$P.cf)&&T.setFilterMatrix&&T.setFilterMatrix(p._mat,p._alpha),r._fun.call(r,t,c,-a,-h),T.restore(),X.isConchApp&&!X.isConchWebGL||t._applyFilters()}else T=c.ctx,!X.isConchWebGL&&X.isConchApp&&(p=t._$P.cf)&&T.setFilterMatrix&&T.setFilterMatrix(p._mat,p._alpha),r._fun.call(r,t,c,-a,-h),X.isConchApp&&!X.isConchWebGL||t._applyFilters();t._$P.staticCache&&(s.reCache=!1),ft.canvasReCache++}else a=(l=s._cacheRec).x,h=l.y,o=c.canvas;e.drawCanvas(o,i+a,n+h,l.width,l.height)}else r._fun.call(r,t,c,i,n)},o.__init__=function(){var t,e,i=0;for(e=A.createRenderSprite(69905,null),t=o.renders.length=4096,i=0;i<t;i++)o.renders[i]=e;o.renders[0]=A.createRenderSprite(0,null),function(t,e){for(var i=0,n=0;n<t.length;n++)i|=t[n],o.renders[i]=e}([1,512,4,2],new o(1,null)),o.renders[513]=A.createRenderSprite(513,null),o.renders[517]=new o(517,null)},o._initRenderFun=function(t,e,i,n){var s=t._renderType;(o.renders[s]=o._getTypeRender(s))._fun(t,e,i,n)},o._getTypeRender=function(t){for(var e=null,i=2048;1<i;)i&t&&(e=A.createRenderSprite(i,e)),i>>=1;return e},o.IMAGE=1,o.ALPHA=2,o.TRANSFORM=4,o.BLEND=8,o.CANVAS=16,o.FILTERS=32,o.MASK=64,o.CLIP=128,o.STYLE=256,o.GRAPHICS=512,o.CUSTOM=1024,o.CHILDS=2048,o.INIT=69905,o.renders=[],o.NORENDER=new o(0,null),o}(),j=function(){function a(){this._repaint=!1}p(a,"laya.resource.Context");var t=a.prototype;return t.replaceReset=function(){var t,e,i=0;for(t=a.replaceKeys.length,i=0;i<t;i++)e=a.replaceKeys[i],this[a.newKeys[i]]=this[e]},t.replaceResotre=function(){this.__restore(),this.__reset()},t.setIsMainContext=function(){},t.drawTextures=function(t,e,i,n){ft.drawCall+=e.length/2;for(var s=t.width,r=t.height,o=0,a=e.length;o<a;o+=2)this.drawTexture(t,e[o],e[o+1],s,r,i,n)},t.drawCanvas=function(t,e,i,n,s){ft.drawCall++,this.drawImage(t.source,e,i,n,s)},t.fillRect=function(t,e,i,n,s){ft.drawCall++,s&&(this.fillStyle=s),this.__fillRect(t,e,i,n)},t.fillText=function(t,e,i,n,s,r){ft.drawCall++,3<arguments.length&&null!=n&&(this.font=n,this.fillStyle=s,this.textAlign=r,this.textBaseline="top"),this.__fillText(t,e,i)},t.fillBorderText=function(t,e,i,n,s,r,o,a){ft.drawCall++,this.font=n,this.fillStyle=s,this.textBaseline="top",this.strokeStyle=r,this.lineWidth=o,this.textAlign=a,this.__strokeText(t,e,i),this.__fillText(t,e,i)},t.strokeText=function(t,e,i,n,s,r,o){ft.drawCall++,3<arguments.length&&null!=n&&(this.font=n,this.strokeStyle=s,this.lineWidth=r,this.textAlign=o,this.textBaseline="top"),this.__strokeText(t,e,i)},t.transformByMatrix=function(t){this.transform(t.a,t.b,t.c,t.d,t.tx,t.ty)},t.setTransformByMatrix=function(t){this.setTransform(t.a,t.b,t.c,t.d,t.tx,t.ty)},t.clipRect=function(t,e,i,n){ft.drawCall++,this.beginPath(),this.rect(t,e,i,n),this.clip()},t.drawTexture=function(t,e,i,n,s,r,o){ft.drawCall++;var a=t.uv,h=t.bitmap.width,l=t.bitmap.height;this.drawImage(t.source,a[0]*h,a[1]*l,(a[2]-a[0])*h,(a[5]-a[3])*l,e+r,i+o,n,s)},t.drawTextureWithTransform=function(t,e,i,n,s,r,o,a,h){ft.drawCall++;var l=t.uv,c=t.bitmap.width,u=t.bitmap.height;this.save(),1!=h&&(this.globalAlpha*=h),r?(this.transform(r.a,r.b,r.c,r.d,r.tx+o,r.ty+a),this.drawImage(t.source,l[0]*c,l[1]*u,(l[2]-l[0])*c,(l[5]-l[3])*u,e,i,n,s)):this.drawImage(t.source,l[0]*c,l[1]*u,(l[2]-l[0])*c,(l[5]-l[3])*u,e+o,i+a,n,s),this.restore()},t.drawTexture2=function(t,e,i,n,s,r,o,a){var h=a[0];if(h.loaded&&h.bitmap&&h.source){ft.drawCall++;var l=1!==r;if(l){var c=this.globalAlpha;this.globalAlpha*=r}var u=h.uv,_=h.bitmap.width,d=h.bitmap.height;s?(this.save(),this.transform(s.a,s.b,s.c,s.d,s.tx+t,s.ty+e),this.drawImage(h.source,u[0]*_,u[1]*d,(u[2]-u[0])*_,(u[5]-u[3])*d,a[1]-i,a[2]-n,a[3],a[4]),this.restore()):this.drawImage(h.source,u[0]*_,u[1]*d,(u[2]-u[0])*_,(u[5]-u[3])*d,a[1]-i+t,a[2]-n+e,a[3],a[4]),l&&(this.globalAlpha=c)}},t.fillTexture=function(t,e,i,n,s,r,o,a){if(!a.pat){if(t.uv!=Dt.DEF_UV){var h=new Ht("2D");h.getContext("2d"),h.size(t.width,t.height),h.context.drawTexture(t,0,0,t.width,t.height,0,0),t=new Dt(h)}a.pat=this.createPattern(t.bitmap.source,r)}var l=e,c=i,u=0,_=0;o&&(l+=o.x%t.width,c+=o.y%t.height,u-=o.x%t.width,_-=o.y%t.height),this.translate(l,c),this.fillRect(u,_,n,s,a.pat),this.translate(-l,-c)},t.drawTriangle=function(t,e,i,n,s,r,o,a){var h=t.bitmap,l=h.source,c=t.width,u=t.height,_=h.width,d=h.height,f=i[n]*_,p=i[s]*_,g=i[r]*_,m=i[n+1]*d,v=i[s+1]*d,y=i[r+1]*d,w=e[n],x=e[s],T=e[r],b=e[n+1],C=e[s+1],M=e[r+1];if(a){var S=(w+x+T)/3,P=(b+C+M)/3,E=w-S,A=b-P,I=Math.sqrt(E*E+A*A);w=S+E/I*(I+1),b=P+A/I*(I+1),A=C-P,x=S+(E=x-S)/(I=Math.sqrt(E*E+A*A))*(I+1),C=P+A/I*(I+1),A=M-P,T=S+(E=T-S)/(I=Math.sqrt(E*E+A*A))*(I+1),M=P+A/I*(I+1)}this.save(),o&&this.transform(o.a,o.b,o.c,o.d,o.tx,o.ty),this.beginPath(),this.moveTo(w,b),this.lineTo(x,C),this.lineTo(T,M),this.closePath(),this.clip();var L=1/(f*v+m*g+p*y-v*g-m*p-f*y),R=w*v+m*T+x*y-v*T-m*x-w*y,D=f*x+w*g+p*T-x*g-w*p-f*T,F=f*v*T+m*x*g+w*p*y-w*v*g-m*p*T-f*x*y,k=b*v+m*M+C*y-v*M-m*C-b*y,O=f*C+b*g+p*M-C*g-b*p-f*M,N=f*v*M+m*C*g+b*p*y-b*v*g-m*p*M-f*C*y;this.transform(R*L,k*L,D*L,O*L,F*L,N*L),this.drawImage(l,t.uv[0]*_,t.uv[1]*d,c,u,t.uv[0]*_,t.uv[1]*d,c,u),this.restore()},t.flush=function(){return 0},t.fillWords=function(t,e,i,n,s,r){n&&(this.font=n),s&&(this.fillStyle=s);this.textBaseline="top",this.textAlign="left";for(var o=0,a=t.length;o<a;o++){var h=t[o];if(this.__fillText(h.char,h.x+e,h.y+i),1===r){var l=h.height,c=.5*h.style.letterSpacing;c||(c=0),this.beginPath(),this.strokeStyle=s,this.lineWidth=1,this.moveTo(e+h.x-c+.5,i+h.y+l+.5),this.lineTo(e+h.x+h.width+c+.5,i+h.y+l+.5),this.stroke()}}},t.fillBorderWords=function(t,e,i,n,s,r,o){n&&(this.font=n),s&&(this.fillStyle=s),this.textBaseline="top",this.lineWidth=o,this.textAlign="left",this.strokeStyle=r;for(var a=0,h=t.length;a<h;a++){var l=t[a];this.__strokeText(l.char,l.x+e,l.y+i),this.__fillText(l.char,l.x+e,l.y+i)}},t.destroy=function(){this.canvas.width=this.canvas.height=0},t.clear=function(){this.clearRect(0,0,this._canvas.width,this._canvas.height),this._repaint=!1},t.drawCurves=function(t,e,i){this.beginPath(),this.strokeStyle=i[3],this.lineWidth=i[4];var n=i[2];t+=i[0],e+=i[1],this.moveTo(t+n[0],e+n[1]);for(var s=2,r=n.length;s<r;)this.quadraticCurveTo(t+n[s++],e+n[s++],t+n[s++],e+n[s++]);this.stroke()},a.__init__=function(e){var i=laya.resource.Context.prototype;if(!(e=e||CanvasRenderingContext2D.prototype).inited){e.inited=!0,e.__fillText=e.fillText,e.__fillRect=e.fillRect,e.__strokeText=e.strokeText;["drawTextures","drawTriangle","fillWords","fillBorderWords","setIsMainContext","fillRect","strokeText","fillTexture","fillText","transformByMatrix","setTransformByMatrix","clipRect","drawTexture","drawTexture2","drawTextureWithTransform","flush","clear","destroy","drawCanvas","fillBorderText","drawCurves"].forEach(function(t){e[t]=i[t]})}},a.replaceCanvasGetSet=function(t,e){var i=Object.getOwnPropertyDescriptor(t,e);if(!i||!i.configurable)return!1;var n,s={};for(n in i)"set"!=n&&(s[n]=i[n]);var r=i.set;return s.set=function(t){r.call(this,t);var e=this.getContext("2d");e&&"__reset"in e&&e.__reset()},Object.defineProperty(t,e,s),!0},a.replaceGetSet=function(t,e){var i=Object.getOwnPropertyDescriptor(t,e);if(!i||!i.configurable)return!1;var n,s={};for(n in i)"set"!=n&&(s[n]=i[n]);var r=i.set,o="___"+e+"__";return a.newKeys.push(o),s.set=function(t){t!=this[o]&&(this[o]=t,r.call(this,t))},Object.defineProperty(t,e,s),!0},a._default=new a,a.newKeys=[],h(a,["replaceKeys",function(){return this.replaceKeys=["font","fillStyle","textBaseline"]}]),a}(),K=function(){function r(t){this._id=0,this._name=null,this._resources=null,this._memorySize=0,this._garbageCollectionRate=NaN,this._isOverflow=!1,this.autoRelease=!1,this.autoReleaseMaxSize=0,this._id=++r._uniqueIDCounter,this._name=t||"Content Manager",r._isResourceManagersSorted=!1,this._memorySize=0,this._isOverflow=!1,this.autoRelease=!1,this.autoReleaseMaxSize=536870912,this._garbageCollectionRate=.2,r._resourceManagers.push(this),this._resources=[]}p(r,"laya.resource.ResourceManager");var t=r.prototype;return b.imps(t,{"laya.resource.IDispose":!0}),t.getResourceByIndex=function(t){return this._resources[t]},t.getResourcesLength=function(){return this._resources.length},t.addResource=function(t){return t.resourceManager&&t.resourceManager.removeResource(t),-1===this._resources.indexOf(t)&&((t._resourceManager=this)._resources.push(t),this.addSize(t.memorySize),!0)},t.removeResource=function(t){var e=this._resources.indexOf(t);return-1!==e&&(this._resources.splice(e,1),t._resourceManager=null,this._memorySize-=t.memorySize,!0)},t.unload=function(){for(var t=this._resources.slice(0,this._resources.length),e=0;e<t.length;e++){t[e].destroy()}t.length=0},t.dispose=function(){if(this===r._systemResourceManager)throw new Error("systemResourceManager不能被释放！");r._resourceManagers.splice(r._resourceManagers.indexOf(this),1),r._isResourceManagersSorted=!1;for(var t=this._resources.slice(0,this._resources.length),e=0;e<t.length;e++){var i=t[e];i.resourceManager.removeResource(i),i.destroy()}t.length=0},t.addSize=function(t){t&&(this.autoRelease&&0<t&&this._memorySize+t>this.autoReleaseMaxSize&&this.garbageCollection((1-this._garbageCollectionRate)*this.autoReleaseMaxSize),this._memorySize+=t)},t.garbageCollection=function(t){var e=this._resources;(e=e.slice()).sort(function(t,e){if(!t||!e)throw new Error("a或b不能为空！");return t.released&&e.released?0:t.released?1:e.released?-1:t._lastUseFrameCount-e._lastUseFrameCount});for(var i=ft.loopCount,n=0,s=e.length;n<s;n++){var r=e[n];if(!(1<i-r._lastUseFrameCount))return void(this._memorySize>=t&&(this._isOverflow=!0));if(r.releaseResource(),this._memorySize<t)return void(this._isOverflow=!1)}},c(0,t,"id",function(){return this._id}),c(0,t,"name",function(){return this._name},function(t){!t&&""===t||this._name===t||(this._name=t,r._isResourceManagersSorted=!1)}),c(0,t,"memorySize",function(){return this._memorySize}),c(1,r,"systemResourceManager",function(){return r._systemResourceManager}),r.__init__=function(){r.currentResourceManager=r.systemResourceManager},r.getLoadedResourceManagerByIndex=function(t){return r._resourceManagers[t]},r.getLoadedResourceManagersCount=function(){return r._resourceManagers.length},r.recreateContentManagers=function(t){void 0===t&&(t=!1);for(var e=r.currentResourceManager,i=0;i<r._resourceManagers.length;i++){r.currentResourceManager=r._resourceManagers[i];for(var n=0;n<r.currentResourceManager._resources.length;n++)r.currentResourceManager._resources[n].releaseResource(t),r.currentResourceManager._resources[n].activeResource(t)}r.currentResourceManager=e},r.releaseContentManagers=function(t){void 0===t&&(t=!1);for(var e=r.currentResourceManager,i=0;i<r._resourceManagers.length;i++){r.currentResourceManager=r._resourceManagers[i];for(var n=0;n<r.currentResourceManager._resources.length;n++){var s=r.currentResourceManager._resources[n];s.released||s.releaseResource(t)}}r.currentResourceManager=e},r._uniqueIDCounter=0,r._isResourceManagersSorted=!1,r._resourceManagers=[],h(r,["_systemResourceManager",function(){return this._systemResourceManager=new r("System Resource Manager")},"currentResourceManager",function(){return this.currentResourceManager=r._systemResourceManager}]),r}();p(q,"laya.system.System"),q.changeDefinition=function(t,e){b[t]=e;var i=t+"=classObj";b._runScript(i)},q.__init__=function(){X.isConchApp&&(conch.disableConchResManager(),conch.disableConchAutoRestoreLostedDevice())};function q(){}var Q=(p(J,"laya.utils.Browser"),c(1,J,"pixelRatio",function(){return J.__init__(),-1<J.userAgent.indexOf("Mozilla/6.0(Linux; Android 6.0; HUAWEI NXT-AL10 Build/HUAWEINXT-AL10)")?2:A.getPixelRatio()}),c(1,J,"height",function(){return J.__init__(),(b.stage&&b.stage.canvasRotation?J.clientWidth:J.clientHeight)*J.pixelRatio}),c(1,J,"clientWidth",function(){return J.__init__(),J.window.innerWidth||J.document.body.clientWidth}),c(1,J,"window",function(){return J.__init__(),J._window}),c(1,J,"clientHeight",function(){return J.__init__(),J.window.innerHeight||J.document.body.clientHeight||J.document.documentElement.clientHeight}),c(1,J,"width",function(){return J.__init__(),(b.stage&&b.stage.canvasRotation?J.clientHeight:J.clientWidth)*J.pixelRatio}),c(1,J,"container",function(){return J.__init__(),J._container||((J._container=J.createElement("div")).id="layaContainer",J.document.body.appendChild(J._container)),J._container},function(t){J._container=t}),c(1,J,"document",function(){return J.__init__(),J._document}),J.__init__=function(){if(!J._window){J._window=A.getWindow(),J._document=J.window.document,J._window.addEventListener("message",function(t){laya.utils.Browser._onMessage(t)},!1),J.document.__createElement=J.document.createElement,r.requestAnimationFrame=r.requestAnimationFrame||r.webkitRequestAnimationFrame||r.mozRequestAnimationFrame||r.oRequestAnimationFrame||r.msRequestAnimationFrame||function(t){return r.setTimeout(t,1e3/60)};var t=r.document.body.style;t["-webkit-user-select"]="none",t["-webkit-tap-highlight-color"]="rgba(200,200,200,0)",J.userAgent=J.window.navigator.userAgent,J.onIOS=!!(J.u=J.userAgent).match(/\(i[^;]+;(U;)? CPU.+Mac OS X/),J.onMobile=-1<J.u.indexOf("Mobile"),J.onIPhone=-1<J.u.indexOf("iPhone"),J.onMac=-1<J.u.indexOf("Mac OS X"),J.onIPad=-1<J.u.indexOf("iPad"),J.onAndroid=-1<J.u.indexOf("Android")||-1<J.u.indexOf("Adr"),J.onWP=-1<J.u.indexOf("Windows Phone"),J.onQQBrowser=-1<J.u.indexOf("QQBrowser"),J.onMQQBrowser=-1<J.u.indexOf("MQQBrowser")||-1<J.u.indexOf("Mobile")&&-1<J.u.indexOf("QQ"),J.onIE=!!J.window.ActiveXObject||"ActiveXObject"in J.window,J.onWeiXin=-1<J.u.indexOf("MicroMessenger"),J.onPC=!J.onMobile,J.onSafari=-1<J.u.indexOf("Safari"),J.onFirefox=-1<J.u.indexOf("Firefox"),J.onEdge=-1<J.u.indexOf("Edge"),J.onMiniGame=-1<J.u.indexOf("MiniGame"),J.onTTMiniGame=-1<J.u.indexOf("TTGame"),J.onBDMiniGame=-1<J.u.indexOf("SwanGame"),-1<J.u.indexOf("OPPO")&&-1<J.u.indexOf("MiniGame")&&(J.onQGMiniGame=!0,J.onMiniGame=!1),J.onKGMiniGame=-1<J.u.indexOf("QuickGame"),J.onLimixiu=-1<J.u.indexOf("limixiu"),J.onIPhoneX=/iPhone/gi.test(J.window.navigator.userAgent)&&375==Math.min(J.clientHeight,J.clientWidth)&&812==Math.max(J.clientHeight,J.clientWidth),J.httpProtocol="http:"==J.window.location.protocol,J.onMiniGame&&null==J.window.focus&&console.error("请先初始化小游戏适配库，详细教程https://ldc.layabox.com/doc/?nav=zh-ts-5-0-0"),J.webAudioEnabled=!!(J.window.AudioContext||J.window.webkitAudioContext||J.window.mozAudioContext),J.soundType=J.webAudioEnabled?"WEBAUDIOSOUND":"AUDIOSOUND",Pt=J.webAudioEnabled?Et:Mt,J.webAudioEnabled&&Et.initWebAudio(),Mt._initMusicAudio(),J.enableTouch="ontouchstart"in r||r.DocumentTouch&&e instanceof DocumentTouch,r.focus(),N._soundClass=Pt,N._musicClass=Mt,X._mainCanvas=X._mainCanvas||Ht.create("2D"),J.canvas||(J.canvas=Ht.create("2D"),J.context=J.canvas.getContext("2d"))}},J._onMessage=function(t){if(t.data&&"size"==t.data.name){if(J.window.innerWidth=t.data.width,J.window.innerHeight=t.data.height,J.window.__innerHeight=t.data.clientHeight,!J.document.createEvent)return void console.warn("no document.createEvent");var e=J.document.createEvent("HTMLEvents");return e.initEvent("resize",!1,!1),void J.window.dispatchEvent(e)}},J.createElement=function(t){return J.__init__(),J.document.__createElement(t)},J.getElementById=function(t){return J.__init__(),J.document.getElementById(t)},J.removeElement=function(t){t&&t.parentNode&&t.parentNode.removeChild(t)},J.now=function(){return A.now()},J._window=null,J._document=null,J._container=null,J.userAgent=null,J.u=null,J.onIOS=!1,J.onMac=!1,J.onMobile=!1,J.onIPhone=!1,J.onIPad=!1,J.onAndroid=!1,J.onWP=!1,J.onQQBrowser=!1,J.onMQQBrowser=!1,J.onSafari=!1,J.onFirefox=!1,J.onEdge=!1,J.onIE=!1,J.onWeiXin=!1,J.onMiniGame=!1,J.onTTMiniGame=!1,J.onBDMiniGame=!1,J.onKGMiniGame=!1,J.onQGMiniGame=!1,J.onLimixiu=!1,J.onPC=!1,J.httpProtocol=!1,J.webAudioEnabled=!1,J.soundType=null,J.enableTouch=!1,J.canvas=null,J.context=null,J.onIPhoneX=!1,J.__init$=function(){},J);function J(){}var Z=function(){function e(t){this._xd_=!0,this._allocated_=8,this._pos_=0,this._length=0,t?(this._u8d_=new Uint8Array(t),this._d_=new DataView(this._u8d_.buffer),this._length=this._d_.byteLength):this.___resizeBuffer(this._allocated_)}p(e,"laya.utils.Byte");var t=e.prototype;return t.___resizeBuffer=function(e){try{var t=new Uint8Array(e);null!=this._u8d_&&(this._u8d_.length<=e?t.set(this._u8d_):t.set(this._u8d_.subarray(0,e))),this._u8d_=t,this._d_=new DataView(t.buffer)}catch(t){throw"___resizeBuffer err:"+e}},t.getString=function(){return this.rUTF(this.getUint16())},t.getFloat32Array=function(t,e){var i=t+e;i=i>this._length?this._length:i;var n=new Float32Array(this._d_.buffer.slice(t,i));return this._pos_=i,n},t.getUint8Array=function(t,e){var i=t+e;i=i>this._length?this._length:i;var n=new Uint8Array(this._d_.buffer.slice(t,i));return this._pos_=i,n},t.getInt16Array=function(t,e){var i=t+e;i=i>this._length?this._length:i;var n=new Int16Array(this._d_.buffer.slice(t,i));return this._pos_=i,n},t.getFloat32=function(){if(this._pos_+4>this._length)throw"getFloat32 error - Out of bounds";var t=this._d_.getFloat32(this._pos_,this._xd_);return this._pos_+=4,t},t.getFloat64=function(){if(this._pos_+8>this._length)throw"getFloat64 error - Out of bounds";var t=this._d_.getFloat64(this._pos_,this._xd_);return this._pos_+=8,t},t.writeFloat32=function(t){this.ensureWrite(this._pos_+4),this._d_.setFloat32(this._pos_,t,this._xd_),this._pos_+=4},t.writeFloat64=function(t){this.ensureWrite(this._pos_+8),this._d_.setFloat64(this._pos_,t,this._xd_),this._pos_+=8},t.getInt32=function(){if(this._pos_+4>this._length)throw"getInt32 error - Out of bounds";var t=this._d_.getInt32(this._pos_,this._xd_);return this._pos_+=4,t},t.getUint32=function(){if(this._pos_+4>this._length)throw"getUint32 error - Out of bounds";var t=this._d_.getUint32(this._pos_,this._xd_);return this._pos_+=4,t},t.writeInt32=function(t){this.ensureWrite(this._pos_+4),this._d_.setInt32(this._pos_,t,this._xd_),this._pos_+=4},t.writeUint32=function(t){this.ensureWrite(this._pos_+4),this._d_.setUint32(this._pos_,t,this._xd_),this._pos_+=4},t.getInt16=function(){if(this._pos_+2>this._length)throw"getInt16 error - Out of bounds";var t=this._d_.getInt16(this._pos_,this._xd_);return this._pos_+=2,t},t.getUint16=function(){if(this._pos_+2>this._length)throw"getUint16 error - Out of bounds";var t=this._d_.getUint16(this._pos_,this._xd_);return this._pos_+=2,t},t.writeUint16=function(t){this.ensureWrite(this._pos_+2),this._d_.setUint16(this._pos_,t,this._xd_),this._pos_+=2},t.writeInt16=function(t){this.ensureWrite(this._pos_+2),this._d_.setInt16(this._pos_,t,this._xd_),this._pos_+=2},t.getUint8=function(){if(this._pos_+1>this._length)throw"getUint8 error - Out of bounds";return this._d_.getUint8(this._pos_++)},t.writeUint8=function(t){this.ensureWrite(this._pos_+1),this._d_.setUint8(this._pos_,t),this._pos_++},t._getUInt8=function(t){return this._d_.getUint8(t)},t._getUint16=function(t){return this._d_.getUint16(t,this._xd_)},t._getMatrix=function(){return new F(this.getFloat32(),this.getFloat32(),this.getFloat32(),this.getFloat32(),this.getFloat32(),this.getFloat32())},t.rUTF=function(t){for(var e="",i=this._pos_+t,n=0,s=String.fromCharCode,r=this._u8d_;this._pos_<i;)(n=r[this._pos_++])<128?0!=n&&(e+=s(n)):e+=s(n<224?(63&n)<<6|127&r[this._pos_++]:n<240?(31&n)<<12|(127&r[this._pos_++])<<6|127&r[this._pos_++]:(15&n)<<18|(127&r[this._pos_++])<<12|r[this._pos_++]<<6&127|127&r[this._pos_++]),0;return e},t.getCustomString=function(t){for(var e="",i=0,n=0,s=String.fromCharCode,r=this._u8d_;0<t;)if((n=r[this._pos_])<128)e+=s(n),this._pos_++,t--;else for(i=n-128,this._pos_++,t-=i;0<i;)n=r[this._pos_++],e+=s(r[this._pos_++]<<8|n),i--;return e},t.clear=function(){this._pos_=0,this.length=0},t.__getBuffer=function(){return this._d_.buffer},t.writeUTFBytes=function(t){for(var e=0,i=(t+="").length;e<i;e++){var n=t.charCodeAt(e);n<=127?this.writeByte(n):n<=2047?(this.ensureWrite(this._pos_+2),this._u8d_.set([192|n>>6,128|63&n],this._pos_),this._pos_+=2):n<=65535?(this.ensureWrite(this._pos_+3),this._u8d_.set([224|n>>12,128|n>>6&63,128|63&n],this._pos_),this._pos_+=3):(this.ensureWrite(this._pos_+4),this._u8d_.set([240|n>>18,128|n>>12&63,128|n>>6&63,128|63&n],this._pos_),this._pos_+=4)}},t.writeUTFString=function(t){var e=this.pos;this.writeUint16(1),this.writeUTFBytes(t);var i=this.pos-e-2;if(65536<=i)throw"writeUTFString byte len more than 65536";this._d_.setUint16(e,i,this._xd_)},t.readUTFString=function(){return this.readUTFBytes(this.getUint16())},t.getUTFString=function(){return this.readUTFString()},t.readUTFBytes=function(t){if(void 0===t&&(t=-1),0==t)return"";var e=this.bytesAvailable;if(e<t)throw"readUTFBytes error - Out of bounds";return t=0<t?t:e,this.rUTF(t)},t.getUTFBytes=function(t){return void 0===t&&(t=-1),this.readUTFBytes(t)},t.writeByte=function(t){this.ensureWrite(this._pos_+1),this._d_.setInt8(this._pos_,t),this._pos_+=1},t.readByte=function(){if(this._pos_+1>this._length)throw"readByte error - Out of bounds";return this._d_.getInt8(this._pos_++)},t.getByte=function(){return this.readByte()},t.ensureWrite=function(t){this._length<t&&(this._length=t),this._allocated_<t&&(this.length=t)},t.writeArrayBuffer=function(t,e,i){if(void 0===e&&(e=0),void 0===i&&(i=0),e<0||i<0)throw"writeArrayBuffer error - Out of bounds";0==i&&(i=t.byteLength-e),this.ensureWrite(this._pos_+i);var n=new Uint8Array(t);this._u8d_.set(n.subarray(e,e+i),this._pos_),this._pos_+=i},t.readArrayBuffer=function(t){var e;return e=this._u8d_.buffer.slice(this._pos_,this._pos_+t),this._pos_=this._pos_+t,e},c(0,t,"buffer",function(){var t=this._d_.buffer;return t.byteLength==this.length?t:t.slice(0,this.length)}),c(0,t,"endian",function(){return this._xd_?"littleEndian":"bigEndian"},function(t){this._xd_="littleEndian"==t}),c(0,t,"length",function(){return this._length},function(t){this._allocated_<t?this.___resizeBuffer(this._allocated_=Math.floor(Math.max(t,2*this._allocated_))):this._allocated_>t&&this.___resizeBuffer(this._allocated_=t),this._length=t}),c(0,t,"pos",function(){return this._pos_},function(t){this._pos_=t}),c(0,t,"bytesAvailable",function(){return this._length-this._pos_}),e.getSystemEndian=function(){if(!e._sysEndian){var t=new ArrayBuffer(2);new DataView(t).setInt16(0,256,!0),e._sysEndian=256===new Int16Array(t)[0]?"littleEndian":"bigEndian"}return e._sysEndian},e.BIG_ENDIAN="bigEndian",e.LITTLE_ENDIAN="littleEndian",e._sysEndian=null,e}(),tt=(p(et,"laya.utils.CacheManager"),et.regCacheByFunction=function(t,e){var i;et.unRegCacheByFunction(t,e),i={tryDispose:t,getCacheList:e},et._cacheList.push(i)},et.unRegCacheByFunction=function(t,e){var i,n=0;for(i=et._cacheList.length,n=0;n<i;n++)if(et._cacheList[n].tryDispose==t&&et._cacheList[n].getCacheList==e)return void et._cacheList.splice(n,1)},et.forceDispose=function(){var t=0,e=et._cacheList.length;for(t=0;t<e;t++)et._cacheList[t].tryDispose(!0)},et.beginCheck=function(t){void 0===t&&(t=15e3),b.timer.loop(t,null,et._checkLoop)},et.stopCheck=function(){b.timer.clear(null,et._checkLoop)},et._checkLoop=function(){var t=et._cacheList;if(!(t.length<1)){var e,i=Q.now(),n=0;for(e=n=t.length;0<n&&(t[et._index=++et._index%e].tryDispose(!1),!(Q.now()-i>et.loopTimeLimit));)n--}},et.loopTimeLimit=2,et._cacheList=[],et._index=0,et);function et(){}var it=(p(nt,"laya.utils.ClassUtils"),nt.regClass=function(t,e){nt._classMap[t]=e},nt.getRegClass=function(t){return nt._classMap[t]},nt.getInstance=function(t){var e=nt.getClass(t);return e?new e:(console.warn("[error] Undefined class:",t),null)},nt.createByJson=function(t,e,i,n,s){"string"==typeof t&&(t=JSON.parse(t));var r=t.props;if(!e&&!(e=s?s.runWith(t):nt.getInstance(r.runtime||t.type)))return null;var o=t.child;if(o)for(var a=0,h=o.length;a<h;a++){var l=o[a];if("render"!==l.props.name&&"render"!==l.props.renderType||!e._$set_itemRender)if("Graphic"==l.type)nt.addGraphicsToSprite(l,e);else if(nt.isDrawType(l.type))nt.addGraphicToSprite(l,e,!0);else{var c=nt.createByJson(l,null,i,n,s);"Script"==l.type?c.hasOwnProperty("owner")?c.owner=e:c.hasOwnProperty("target")&&(c.target=e):"mask"==l.props.renderType?e.mask=c:e.addChild(c)}else e.itemRender=l}if(r)for(var u in r){var _=r[u];"var"===u&&i?i[_]=e:_ instanceof Array&&"function"==typeof e[u]?e[u].apply(e,_):e[u]=_}return n&&t.customProps&&n.runWith([e,t]),e.created&&e.created(),e},nt.addGraphicsToSprite=function(t,e){var i;if((i=t.child)&&!(i.length<1)){var n;n=nt._getGraphicsFromSprite(t,e);var s=0,r=0;t.props&&(s=nt._getObjVar(t.props,"x",0),r=nt._getObjVar(t.props,"y",0)),0!=s&&0!=r&&n.translate(s,r);var o,a=0;for(o=i.length,a=0;a<o;a++)nt._addGraphicToGraphics(i[a],n);0!=s&&0!=r&&n.translate(-s,-r)}},nt.addGraphicToSprite=function(t,e,i){var n;void 0===i&&(i=!1),n=i?nt._getGraphicsFromSprite(t,e):e.graphics,nt._addGraphicToGraphics(t,n)},nt._getGraphicsFromSprite=function(t,e){var i,n;if(!t||!t.props)return e.graphics;switch(n=t.props.renderType){case"hit":case"unHit":var s;e.hitArea||(e.hitArea=new lt),(s=e.hitArea)[n]||(s[n]=new _),i=s[n]}return i||(i=e.graphics),i},nt._getTransformData=function(t){var e;(t.hasOwnProperty("pivotX")||t.hasOwnProperty("pivotY"))&&(e=e||new F).translate(-nt._getObjVar(t,"pivotX",0),-nt._getObjVar(t,"pivotY",0));var i=nt._getObjVar(t,"scaleX",1),n=nt._getObjVar(t,"scaleY",1),s=nt._getObjVar(t,"rotation",0);return nt._getObjVar(t,"skewX",0),nt._getObjVar(t,"skewY",0),1==i&&1==n&&0==s||((e=e||new F).scale(i,n),e.rotate(.0174532922222222*s)),e},nt._addGraphicToGraphics=function(t,e){var i,n;if((i=t.props)&&(n=nt.DrawTypeDic[t.type])){var s,r;s=e;var o=nt._getParams(i,n[1],n[2],n[3]);!(r=nt._tM)&&1==nt._alpha||(s.save(),r&&s.transform(r),1!=nt._alpha&&s.alpha(nt._alpha)),s[n[0]].apply(s,o),!r&&1==nt._alpha||s.restore()}},nt._adptLineData=function(t){return t[2]=parseFloat(t[0])+parseFloat(t[2]),t[3]=parseFloat(t[1])+parseFloat(t[3]),t},nt._adptTextureData=function(t){return t[0]=It.getRes(t[0]),t},nt._adptLinesData=function(t){return t[2]=nt._getPointListByStr(t[2]),t},nt.isDrawType=function(t){return"Image"!=t&&nt.DrawTypeDic.hasOwnProperty(t)},nt._getParams=function(t,e,i,n){var s;void 0===i&&(i=0),(s=nt._temParam).length=e.length;var r,o,a=0;for(r=e.length,a=0;a<r;a++)s[a]=nt._getObjVar(t,e[a][0],e[a][1]);return nt._alpha=nt._getObjVar(t,"alpha",1),o=nt._getTransformData(t),nt._tM=o?(i||(i=0),o.translate(s[i],s[i+1]),s[i]=s[i+1]=0,o):null,n&&nt[n]&&(s=nt[n](s)),s},nt._getPointListByStr=function(t){var e,i,n=0;for(i=(e=t.split(",")).length,n=0;n<i;n++)e[n]=parseFloat(e[n]);return e},nt._getObjVar=function(t,e,i){return t.hasOwnProperty(e)?t[e]:i},nt._temParam=[],nt._classMap={Sprite:"laya.display.Sprite",Text:"laya.display.Text",Animation:"laya.display.Animation",Skeleton:"laya.ani.bone.Skeleton",Particle2D:"laya.particle.Particle2D",div:"laya.html.dom.HTMLDivElement",p:"laya.html.dom.HTMLElement",img:"laya.html.dom.HTMLImageElement",span:"laya.html.dom.HTMLElement",br:"laya.html.dom.HTMLBrElement",style:"laya.html.dom.HTMLStyleElement",font:"laya.html.dom.HTMLElement",a:"laya.html.dom.HTMLElement","#text":"laya.html.dom.HTMLElement"},nt.getClass=function(t){var e=nt._classMap[t]||t;return"string"==typeof e?b.__classmap[e]:e},nt._tM=null,nt._alpha=NaN,h(nt,["DrawTypeDic",function(){return this.DrawTypeDic={Rect:["drawRect",[["x",0],["y",0],["width",0],["height",0],["fillColor",null],["lineColor",null],["lineWidth",1]]],Circle:["drawCircle",[["x",0],["y",0],["radius",0],["fillColor",null],["lineColor",null],["lineWidth",1]]],Pie:["drawPie",[["x",0],["y",0],["radius",0],["startAngle",0],["endAngle",0],["fillColor",null],["lineColor",null],["lineWidth",1]]],Image:["drawTexture",[["x",0],["y",0],["width",0],["height",0]]],Texture:["drawTexture",[["skin",null],["x",0],["y",0],["width",0],["height",0]],1,"_adptTextureData"],FillTexture:["fillTexture",[["skin",null],["x",0],["y",0],["width",0],["height",0],["repeat",null]],1,"_adptTextureData"],FillText:["fillText",[["text",""],["x",0],["y",0],["font",null],["color",null],["textAlign",null]],1],Line:["drawLine",[["x",0],["y",0],["toX",0],["toY",0],["lineColor",null],["lineWidth",0]],0,"_adptLineData"],Lines:["drawLines",[["x",0],["y",0],["points",""],["lineColor",null],["lineWidth",0]],0,"_adptLinesData"],Curves:["drawCurves",[["x",0],["y",0],["points",""],["lineColor",null],["lineWidth",0]],0,"_adptLinesData"],Poly:["drawPoly",[["x",0],["y",0],["points",""],["fillColor",null],["lineColor",null],["lineWidth",1]],0,"_adptLinesData"]}}]),nt);function nt(){}var st=(p(rt,"laya.utils.Color"),rt._initDefault=function(){for(var t in rt._DEFAULT={},rt._COLOR_MAP)rt._SAVE[t]=rt._DEFAULT[t]=new rt(rt._COLOR_MAP[t]);return rt._DEFAULT},rt._initSaveMap=function(){for(var t in rt._SAVE_SIZE=0,rt._SAVE={},rt._DEFAULT)rt._SAVE[t]=rt._DEFAULT[t]},rt.create=function(t){var e=rt._SAVE[t+""];return null!=e?e:(rt._SAVE_SIZE<1e3||rt._initSaveMap(),rt._SAVE[t+""]=new rt(t))},rt._SAVE={},rt._SAVE_SIZE=0,rt._COLOR_MAP={white:"#FFFFFF",red:"#FF0000",green:"#00FF00",blue:"#0000FF",black:"#000000",yellow:"#FFFF00",gray:"#AAAAAA"},rt._DEFAULT=rt._initDefault(),rt._COLODID=1,rt);function rt(t){if(this._color=[],"string"==typeof t){null===(this.strColor=t)&&(t="#000000"),"#"==t.charAt(0)&&(t=t.substr(1));var e=t.length;if(3==e||4==e){for(var i="",n=0;n<e;n++)i+=t[n]+t[n];t=i}var s=this.numColor=parseInt(t,16);if(8==t.length)return void(this._color=[parseInt(t.substr(0,2),16)/255,((16711680&s)>>16)/255,((65280&s)>>8)/255,(255&s)/255])}else s=this.numColor=t,this.strColor=vt.toHexColor(s);this._color=[((16711680&s)>>16)/255,((65280&s)>>8)/255,(255&s)/255,1],this._color.__id=++rt._COLODID}!function(){function t(){this._values=[],this._keys=[]}p(t,"laya.utils.Dictionary");var e=t.prototype;e.set=function(t,e){var i=this.indexOf(t);0<=i?this._values[i]=e:(this._keys.push(t),this._values.push(e))},e.indexOf=function(t){var e=this._keys.indexOf(t);return 0<=e?e:(t="string"==typeof t?Number(t):"number"==typeof t?t.toString():t,this._keys.indexOf(t))},e.get=function(t){var e=this.indexOf(t);return e<0?null:this._values[e]},e.remove=function(t){var e=this.indexOf(t);return 0<=e&&(this._keys.splice(e,1),this._values.splice(e,1),!0)},e.clear=function(){this._values.length=0,this._keys.length=0},c(0,e,"values",function(){return this._values}),c(0,e,"keys",function(){return this._keys})}();var ot=function(){function t(){this.ratio=.92,this.maxOffset=60,this._dragging=!1,this._clickOnly=!0}p(t,"laya.utils.Dragging");var e=t.prototype;return e.start=function(t,e,i,n,s,r,o,a){void 0===a&&(a=.92),this.clearTimer(),this.target=t,this.area=e,this.hasInertia=i,this.elasticDistance=e?n:0,this.elasticBackTime=s,this.data=r,this._disableMouseEvent=o,this.ratio=a,this._parent=t.parent,this._clickOnly=!0,this._dragging=!0,this._elasticRateX=this._elasticRateY=1,this._lastX=this._parent.mouseX,this._lastY=this._parent.mouseY,b.stage.on("mouseup",this,this.onStageMouseUp),b.stage.on("mouseout",this,this.onStageMouseUp),b.timer.frameLoop(1,this,this.loop)},e.clearTimer=function(){b.timer.clear(this,this.loop),b.timer.clear(this,this.tweenMove),this._tween&&(this._tween.recover(),this._tween=null)},e.stop=function(){this._dragging&&(x.instance.disableMouseEvent=!1,b.stage.off("mouseup",this,this.onStageMouseUp),b.stage.off("mouseout",this,this.onStageMouseUp),this._dragging=!1,this.target&&this.area&&this.backToArea(),this.clear())},e.loop=function(){var t=this._parent.getMousePoint(),e=t.x,i=t.y,n=e-this._lastX,s=i-this._lastY;if(this._clickOnly){if(!(1<Math.abs(n*b.stage._canvasTransform.getScaleX())||1<Math.abs(s*b.stage._canvasTransform.getScaleY())))return;this._clickOnly=!1,this._offsets||(this._offsets=[]),this._offsets.length=0,this.target.event("dragstart",this.data),x.instance.disableMouseEvent=this._disableMouseEvent,this.target._set$P("$_MOUSEDOWN",!1)}else this._offsets.push(n,s);0==n&&0==s||(this._lastX=e,this._lastY=i,this.target.x+=n*this._elasticRateX,this.target.y+=s*this._elasticRateY,this.area&&this.checkArea(),this.target.event("dragmove",this.data))},e.checkArea=function(){if(this.elasticDistance<=0)this.backToArea();else{if(this.target.x<this.area.x)var t=this.area.x-this.target.x;else t=this.target.x>this.area.x+this.area.width?this.target.x-this.area.x-this.area.width:0;if(this._elasticRateX=Math.max(0,1-t/this.elasticDistance),this.target.y<this.area.y)var e=this.area.y-this.target.y;else e=this.target.y>this.area.y+this.area.height?this.target.y-this.area.y-this.area.height:0;this._elasticRateY=Math.max(0,1-e/this.elasticDistance)}},e.backToArea=function(){this.target.x=Math.min(Math.max(this.target.x,this.area.x),this.area.x+this.area.width),this.target.y=Math.min(Math.max(this.target.y,this.area.y),this.area.y+this.area.height)},e.onStageMouseUp=function(t){if(x.instance.disableMouseEvent=!1,b.stage.off("mouseup",this,this.onStageMouseUp),b.stage.off("mouseout",this,this.onStageMouseUp),b.timer.clear(this,this.loop),!this._clickOnly&&this.target)if(this.hasInertia){this._offsets.length<1&&this._offsets.push(this._parent.mouseX-this._lastX,this._parent.mouseY-this._lastY),this._offsetX=this._offsetY=0;for(var e=this._offsets.length,i=Math.min(e,6),n=this._offsets.length-i,s=e-1;n<s;s--)this._offsetY+=this._offsets[s--],this._offsetX+=this._offsets[s];this._offsetX=this._offsetX/i*2,this._offsetY=this._offsetY/i*2,Math.abs(this._offsetX)>this.maxOffset&&(this._offsetX=0<this._offsetX?this.maxOffset:-this.maxOffset),Math.abs(this._offsetY)>this.maxOffset&&(this._offsetY=0<this._offsetY?this.maxOffset:-this.maxOffset),b.timer.frameLoop(1,this,this.tweenMove)}else 0<this.elasticDistance?this.checkElastic():this.clear()},e.checkElastic=function(){var t=NaN,e=NaN;if(this.target.x<this.area.x?t=this.area.x:this.target.x>this.area.x+this.area.width&&(t=this.area.x+this.area.width),this.target.y<this.area.y?e=this.area.y:this.target.y>this.area.y+this.area.height&&(e=this.area.y+this.area.height),isNaN(t)&&isNaN(e))this.clear();else{var i={};isNaN(t)||(i.x=t),isNaN(e)||(i.y=e),this._tween=mt.to(this.target,i,this.elasticBackTime,at.sineOut,v.create(this,this.clear),0,!1,!1)}},e.tweenMove=function(){this._offsetX*=this.ratio*this._elasticRateX,this._offsetY*=this.ratio*this._elasticRateY,this.target.x+=this._offsetX,this.target.y+=this._offsetY,this.area&&this.checkArea(),this.target.event("dragmove",this.data),(Math.abs(this._offsetX)<1&&Math.abs(this._offsetY)<1||this._elasticRateX<.5||this._elasticRateY<.5)&&(b.timer.clear(this,this.tweenMove),0<this.elasticDistance?this.checkElastic():this.clear())},e.clear=function(){if(this.target){this.clearTimer();var t=this.target;this.target=null,this._parent=null,t.event("dragend",this.data)}},t}(),at=(p(ht,"laya.utils.Ease"),ht.linearNone=function(t,e,i,n){return i*t/n+e},ht.linearIn=function(t,e,i,n){return i*t/n+e},ht.linearInOut=function(t,e,i,n){return i*t/n+e},ht.linearOut=function(t,e,i,n){return i*t/n+e},ht.bounceIn=function(t,e,i,n){return i-ht.bounceOut(n-t,0,i,n)+e},ht.bounceInOut=function(t,e,i,n){return t<.5*n?.5*ht.bounceIn(2*t,0,i,n)+e:.5*ht.bounceOut(2*t-n,0,i,n)+.5*i+e},ht.bounceOut=function(t,e,i,n){return(t/=n)<1/2.75?i*(7.5625*t*t)+e:t<2/2.75?i*(7.5625*(t-=1.5/2.75)*t+.75)+e:t<2.5/2.75?i*(7.5625*(t-=2.25/2.75)*t+.9375)+e:i*(7.5625*(t-=2.625/2.75)*t+.984375)+e},ht.backIn=function(t,e,i,n,s){return void 0===s&&(s=1.70158),i*(t/=n)*t*((s+1)*t-s)+e},ht.backInOut=function(t,e,i,n,s){return void 0===s&&(s=1.70158),(t/=.5*n)<1?.5*i*(t*t*((1+(s*=1.525))*t-s))+e:i/2*((t-=2)*t*((1+(s*=1.525))*t+s)+2)+e},ht.backOut=function(t,e,i,n,s){return void 0===s&&(s=1.70158),i*((t=t/n-1)*t*((s+1)*t+s)+1)+e},ht.elasticIn=function(t,e,i,n,s,r){var o;return void 0===s&&(s=0),void 0===r&&(r=0),0==t?e:1==(t/=n)?e+i:(r||(r=.3*n),o=!s||0<i&&s<i||i<0&&s<-i?(s=i,r/4):r/ht.PI2*Math.asin(i/s),-s*Math.pow(2,10*(t-=1))*Math.sin((t*n-o)*ht.PI2/r)+e)},ht.elasticInOut=function(t,e,i,n,s,r){var o;return void 0===s&&(s=0),void 0===r&&(r=0),0==t?e:2==(t/=.5*n)?e+i:(r||(r=n*(.3*1.5)),o=!s||0<i&&s<i||i<0&&s<-i?(s=i,r/4):r/ht.PI2*Math.asin(i/s),t<1?s*Math.pow(2,10*(t-=1))*Math.sin((t*n-o)*ht.PI2/r)*-.5+e:s*Math.pow(2,-10*(t-=1))*Math.sin((t*n-o)*ht.PI2/r)*.5+i+e)},ht.elasticOut=function(t,e,i,n,s,r){var o;return void 0===s&&(s=0),void 0===r&&(r=0),0==t?e:1==(t/=n)?e+i:(r||(r=.3*n),o=!s||0<i&&s<i||i<0&&s<-i?(s=i,r/4):r/ht.PI2*Math.asin(i/s),s*Math.pow(2,-10*t)*Math.sin((t*n-o)*ht.PI2/r)+i+e)},ht.strongIn=function(t,e,i,n){return i*(t/=n)*t*t*t*t+e},ht.strongInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*i*t*t*t*t*t+e:.5*i*((t-=2)*t*t*t*t+2)+e},ht.strongOut=function(t,e,i,n){return i*((t=t/n-1)*t*t*t*t+1)+e},ht.sineInOut=function(t,e,i,n){return.5*-i*(Math.cos(Math.PI*t/n)-1)+e},ht.sineIn=function(t,e,i,n){return-i*Math.cos(t/n*ht.HALF_PI)+i+e},ht.sineOut=function(t,e,i,n){return i*Math.sin(t/n*ht.HALF_PI)+e},ht.quintIn=function(t,e,i,n){return i*(t/=n)*t*t*t*t+e},ht.quintInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*i*t*t*t*t*t+e:.5*i*((t-=2)*t*t*t*t+2)+e},ht.quintOut=function(t,e,i,n){return i*((t=t/n-1)*t*t*t*t+1)+e},ht.quartIn=function(t,e,i,n){return i*(t/=n)*t*t*t+e},ht.quartInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*i*t*t*t*t+e:.5*-i*((t-=2)*t*t*t-2)+e},ht.quartOut=function(t,e,i,n){return-i*((t=t/n-1)*t*t*t-1)+e},ht.cubicIn=function(t,e,i,n){return i*(t/=n)*t*t+e},ht.cubicInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*i*t*t*t+e:.5*i*((t-=2)*t*t+2)+e},ht.cubicOut=function(t,e,i,n){return i*((t=t/n-1)*t*t+1)+e},ht.quadIn=function(t,e,i,n){return i*(t/=n)*t+e},ht.quadInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*i*t*t+e:.5*-i*(--t*(t-2)-1)+e},ht.quadOut=function(t,e,i,n){return-i*(t/=n)*(t-2)+e},ht.expoIn=function(t,e,i,n){return 0==t?e:i*Math.pow(2,10*(t/n-1))+e-.001*i},ht.expoInOut=function(t,e,i,n){return 0==t?e:t==n?e+i:(t/=.5*n)<1?.5*i*Math.pow(2,10*(t-1))+e:.5*i*(2-Math.pow(2,-10*--t))+e},ht.expoOut=function(t,e,i,n){return t==n?e+i:i*(1-Math.pow(2,-10*t/n))+e},ht.circIn=function(t,e,i,n){return-i*(Math.sqrt(1-(t/=n)*t)-1)+e},ht.circInOut=function(t,e,i,n){return(t/=.5*n)<1?.5*-i*(Math.sqrt(1-t*t)-1)+e:.5*i*(Math.sqrt(1-(t-=2)*t)+1)+e},ht.circOut=function(t,e,i,n){return i*Math.sqrt(1-(t=t/n-1)*t)+e},ht.HALF_PI=.5*Math.PI,ht.PI2=2*Math.PI,ht);function ht(){}var lt=function(){function u(){this._hit=null,this._unHit=null}p(u,"laya.utils.HitArea");var t=u.prototype;return t.isHit=function(t,e){return!!u.isHitGraphic(t,e,this.hit)&&!u.isHitGraphic(t,e,this.unHit)},t.contains=function(t,e){return this.isHit(t,e)},c(0,t,"hit",function(){return this._hit||(this._hit=new _),this._hit},function(t){this._hit=t}),c(0,t,"unHit",function(){return this._unHit||(this._unHit=new _),this._unHit},function(t){this._unHit=t}),u.isHitGraphic=function(t,e,i){if(!i)return!1;var n;if(!(n=i.cmds)&&i._one&&((n=u._cmds).length=1,n[0]=i._one),!n)return!1;var s,r,o=0;for(s=n.length,o=0;o<s;o++)if(r=n[o]){var a=X._context;switch(r.callee){case a._translate:case 6:t-=r[0],e-=r[1]}if(u.isHitCmd(t,e,r))return!0}return!1},u.isHitCmd=function(t,e,i){if(!i)return!1;var n=X._context,s=!1;switch(i.callee){case n._drawRect:case 13:u._rec.setTo(i[0],i[1],i[2],i[3]),s=u._rec.contains(t,e);break;case n._drawCircle:case n._fillCircle:case 14:s=(t-=i[0])*t+(e-=i[1])*e<i[2]*i[2];break;case n._drawPoly:case 18:t-=i[0],e-=i[1],s=u.ptInPolygon(t,e,i[2])}return s},u.ptInPolygon=function(t,e,i){var n;(n=u._ptPoint).setTo(t,e);var s,r=0,o=NaN,a=NaN,h=NaN,l=NaN;s=i.length;for(var c=0;c<s;c+=2){if(o=i[c],a=i[c+1],h=i[(c+2)%s],a!=(l=i[(c+3)%s]))if(!(n.y<Math.min(a,l)))if(!(n.y>=Math.max(a,l)))(n.y-a)*(h-o)/(l-a)+o>n.x&&r++}return r%2==1},u._cmds=[],h(u,["_rec",function(){return this._rec=new O},"_ptPoint",function(){return this._ptPoint=new k}]),u}();(function(){function s(t,e,i,n){this.char=t,this.charNum=t.charCodeAt(0),this._x=this._y=0,this.width=e,this.height=i,this.style=n,this.isWord=!s._isWordRegExp.test(t)}p(s,"laya.utils.HTMLChar");var t=s.prototype;b.imps(t,{"laya.display.ILayout":!0}),t.setSprite=function(t){this._sprite=t},t.getSprite=function(){return this._sprite},t._isChar=function(){return!0},t._getCSSStyle=function(){return this.style},c(0,t,"width",function(){return this._w},function(t){this._w=t}),c(0,t,"x",function(){return this._x},function(t){this._sprite&&(this._sprite.x=t),this._x=t}),c(0,t,"y",function(){return this._y},function(t){this._sprite&&(this._sprite.y=t),this._y=t}),c(0,t,"height",function(){return this._h},function(t){this._h=t}),s._isWordRegExp=new RegExp("[\\w.]","")})(),p(ct,"laya.utils.Log"),ct.enable=function(){ct._logdiv||(ct._logdiv=Q.window.document.createElement("div"),Q.window.document.body.appendChild(ct._logdiv),ct._logdiv.style.cssText="pointer-events:none;border:white;overflow:hidden;z-index:1000000;background:rgba(100,100,100,0.6);color:white;position: absolute;left:0px;top:0px;width:50%;height:50%;")},ct.toggle=function(){var t=ct._logdiv.style;"1px"==t.width?t.width=t.height="50%":t.width=t.height="1px"},ct.print=function(t){ct._logdiv&&(ct.maxCount<=ct._count&&ct.clear(),ct._count++,ct._logdiv.innerText+=t+"\n",ct._logdiv.scrollTop=ct._logdiv.scrollHeight)},ct.clear=function(){ct._logdiv.innerText="",ct._count=0},ct._logdiv=null,ct._count=0,ct.maxCount=20;function ct(){}p(ut,"laya.utils.Mouse"),c(1,ut,"cursor",function(){return ut._style.cursor},function(t){ut._style.cursor=t}),ut.hide=function(){"none"!=ut.cursor&&(ut._preCursor=ut.cursor,ut.cursor="none")},ut.show=function(){"none"==ut.cursor&&(ut.cursor=ut._preCursor?ut._preCursor:"auto")},ut._preCursor=null,h(ut,["_style",function(){return this._style=Q.document.body.style}]);function ut(){}var _t=(p(dt,"laya.utils.Pool"),dt.getPoolBySign=function(t){return dt._poolDic[t]||(dt._poolDic[t]=[])},dt.clearBySign=function(t){dt._poolDic[t]&&(dt._poolDic[t].length=0)},dt.recover=function(t,e){e.__InPool||(e.__InPool=!0,dt.getPoolBySign(t).push(e))},dt.getItemByClass=function(t,e){var i=dt.getPoolBySign(t),n=i.length?i.pop():new e;return n.__InPool=!1,n},dt.getItemByCreateFun=function(t,e,i){var n=dt.getPoolBySign(t),s=n.length?n.pop():e.call(i);return s.__InPool=!1,s},dt.getItem=function(t){var e=dt.getPoolBySign(t),i=e.length?e.pop():null;return i&&(i.__InPool=!1),i},dt._poolDic={},dt.InPoolSign="__InPool",dt);function dt(){}!function(){function n(){this.sign=null,this.maxCount=1e3}p(n,"laya.utils.PoolCache");var t=n.prototype;t.getCacheList=function(){return _t.getPoolBySign(this.sign)},t.tryDispose=function(t){var e;(e=_t.getPoolBySign(this.sign)).length>this.maxCount&&e.splice(this.maxCount,e.length-this.maxCount)},n.addPoolCacheManager=function(t,e){var i;void 0===e&&(e=100),(i=new n).sign=t,i.maxCount=e,tt.regCacheByFunction(vt.bind(i.tryDispose,i),vt.bind(i.getCacheList,i))}}();var ft=(p(pt,"laya.utils.Stat"),c(1,pt,"onclick",null,function(t){pt._sp&&pt._sp.on("click",pt._sp,t),pt._canvas&&(pt._canvas.source.onclick=t,pt._canvas.source.style.pointerEvents="")}),pt.show=function(t,e){void 0===t&&(t=0),void 0===e&&(e=0),!X.isConchApp||X.isConchWebGL?(X.isConchWebGL||Q.onMiniGame||Q.onLimixiu||Q.onKGMiniGame||Q.onBDMiniGame||Q.onTTMiniGame||(pt._useCanvas=!0),pt._show=!0,pt._fpsData.length=60,pt._view[0]={title:"FPS(Canvas)",value:"_fpsStr",color:"yellow",units:"int"},pt._view[1]={title:"Sprite",value:"_spriteStr",color:"white",units:"int"},pt._view[2]={title:"DrawCall",value:"drawCall",color:"white",units:"int"},pt._view[3]={title:"CurMem",value:"currentMemorySize",color:"yellow",units:"M"},X.isWebGL?(pt._view[4]={title:"Shader",value:"shaderCall",color:"white",units:"int"},X.is3DMode?(pt._view[0].title="FPS(3D)",pt._view[5]={title:"TriFaces",value:"trianglesFaces",color:"white",units:"int"},pt._view[6]={title:"treeNodeColl",value:"treeNodeCollision",color:"white",units:"int"},pt._view[7]={title:"treeSpriteColl",value:"treeSpriteCollision",color:"white",units:"int"}):(pt._view[0].title="FPS(WebGL)",pt._view[5]={title:"Canvas",value:"_canvasStr",color:"white",units:"int"})):pt._view[4]={title:"Canvas",value:"_canvasStr",color:"white",units:"int"},pt._useCanvas?pt.createUIPre(t,e):pt.createUI(t,e),pt.enable()):Q.window.conch.showFPS&&Q.window.conch.showFPS(t,e)},pt.createUIPre=function(t,e){var i=Q.pixelRatio;pt._width=130*i,pt._vx=75*i,pt._height=i*(12*pt._view.length+3*i)+4,pt._fontSize=12*i;for(var n=0;n<pt._view.length;n++)pt._view[n].x=4,pt._view[n].y=n*pt._fontSize+2*i;pt._canvas||((pt._canvas=new Ht("2D")).size(pt._width,pt._height),(pt._ctx=pt._canvas.getContext("2d")).textBaseline="top",pt._ctx.font=pt._fontSize+"px Sans-serif",pt._canvas.source.style.cssText="pointer-events:none;background:rgba(150,150,150,0.8);z-index:100000;position: absolute;direction:ltr;left:"+t+"px;top:"+e+"px;width:"+pt._width/i+"px;height:"+pt._height/i+"px;"),pt._first=!0,pt.loop(),pt._first=!1,Q.onKGMiniGame||Q.container.appendChild(pt._canvas.source)},pt.createUI=function(t,e){var i=pt._sp,n=Q.pixelRatio;i||(i=new kt,(pt._leftText=new Gt).pos(5,5),pt._leftText.color="#ffffff",i.addChild(pt._leftText),(pt._txt=new Gt).pos(80*n,5),pt._txt.color="#ffffff",i.addChild(pt._txt),pt._sp=i),i.pos(t,e);for(var s="",r=0;r<pt._view.length;r++)s+=pt._view[r].title+"\n";pt._leftText.text=s;var o=138*n,a=n*(12*pt._view.length+3*n)+4;pt._txt.fontSize=pt._fontSize*n,pt._leftText.fontSize=pt._fontSize*n,i.size(o,a),i.graphics.clear(),i.graphics.setAlpha(.5),i.graphics.drawRect(0,0,o,a,"#999999"),i.graphics.setAlpha(1),pt.loop()},pt.enable=function(){b.timer.frameLoop(1,pt,pt.loop)},pt.hide=function(){pt._show=!1,b.timer.clear(pt,pt.loop),pt._canvas&&Q.removeElement(pt._canvas.source)},pt.clear=function(){pt.trianglesFaces=pt.drawCall=pt.shaderCall=pt.spriteCount=pt.spriteRenderUseCacheCount=pt.treeNodeCollision=pt.treeSpriteCollision=pt.canvasNormal=pt.canvasBitmap=pt.canvasReCache=0},pt.loop=function(){pt._count++;var t=Q.now();if(!(t-pt._timer<1e3)){var e=pt._count;if(pt.FPS=Math.round(1e3*e/(t-pt._timer)),pt._show){pt.trianglesFaces=Math.round(pt.trianglesFaces/e),pt.spriteCount=pt._useCanvas?(pt.drawCall=Math.round(pt.drawCall/e)-2,pt.shaderCall=Math.round(pt.shaderCall/e),Math.round(pt.spriteCount/e)-1):(pt.drawCall=Math.round(pt.drawCall/e)-2,pt.shaderCall=Math.round(pt.shaderCall/e)-4,Math.round(pt.spriteCount/e)-4),pt.spriteRenderUseCacheCount=Math.round(pt.spriteRenderUseCacheCount/e),pt.canvasNormal=Math.round(pt.canvasNormal/e),pt.canvasBitmap=Math.round(pt.canvasBitmap/e),pt.canvasReCache=Math.ceil(pt.canvasReCache/e),pt.treeNodeCollision=Math.round(pt.treeNodeCollision/e),pt.treeSpriteCollision=Math.round(pt.treeSpriteCollision/e);var i=0<pt.FPS?Math.floor(1e3/pt.FPS).toString():" ";pt._fpsStr=pt.FPS+(pt.renderSlow?" slow":"")+" "+i,pt._spriteStr=pt.spriteCount+(pt.spriteRenderUseCacheCount?"/"+pt.spriteRenderUseCacheCount:""),pt._canvasStr=pt.canvasReCache+"/"+pt.canvasNormal+"/"+pt.canvasBitmap,pt.currentMemorySize=K.systemResourceManager.memorySize,pt._useCanvas?pt.renderInfoPre():pt.renderInfo(),pt.clear()}pt._count=0,pt._timer=t}},pt.renderInfoPre=function(){if(pt._canvas){var t=pt._ctx;t.clearRect(pt._first?0:pt._vx,0,pt._width,pt._height);for(var e=0;e<pt._view.length;e++){var i=pt._view[e];pt._first&&(t.fillStyle="white",t.fillText(i.title,i.x,i.y,null,null,null)),t.fillStyle=i.color;var n=pt[i.value];"M"==i.units&&(n=Math.floor(n/1048576*100)/100+" M"),t.fillText(n+"",i.x+pt._vx,i.y,null,null,null)}}},pt.renderInfo=function(){for(var t="",e=0;e<pt._view.length;e++){var i=pt._view[e],n=pt[i.value];"M"==i.units&&(n=Math.floor(n/1048576*100)/100+" M"),"K"==i.units&&(n=Math.floor(n/1024*100)/100+" K"),t+=n+"\n"}pt._txt.text=t},pt.FPS=0,pt.loopCount=0,pt.shaderCall=0,pt.drawCall=0,pt.trianglesFaces=0,pt.spriteCount=0,pt.spriteRenderUseCacheCount=0,pt.treeNodeCollision=0,pt.treeSpriteCollision=0,pt.canvasNormal=0,pt.canvasBitmap=0,pt.canvasReCache=0,pt.renderSlow=!1,pt.currentMemorySize=0,pt._fpsStr=null,pt._canvasStr=null,pt._spriteStr=null,pt._fpsData=[],pt._timer=0,pt._count=0,pt._view=[],pt._fontSize=12,pt._txt=null,pt._leftText=null,pt._sp=null,pt._show=!1,pt._useCanvas=!1,pt._canvas=null,pt._ctx=null,pt._first=!1,pt._vx=NaN,pt._width=0,pt._height=100,pt);function pt(){}!function(){function t(){this._strsToID={},this._idToStrs=[],this._length=0}p(t,"laya.utils.StringKey");var e=t.prototype;e.add=function(t){var e=this._strsToID[t];return null!=e?e:(this._idToStrs[this._length]=t,this._strsToID[t]=this._length++)},e.getID=function(t){var e=this._strsToID[t];return null==e?-1:e},e.getName=function(t){var e=this._idToStrs[t];return null==e?void 0:e}}();var gt=function(){var h;function l(){this._delta=0,this.scale=1,this.currFrame=0,this._mid=1,this._map=[],this._laters=[],this._handlers=[],this._temp=[],this._count=0,this.currTimer=this._now(),this._lastTimer=this._now(),this._init()}p(l,"laya.utils.Timer");var t=l.prototype;return t._init=function(){b.timer&&b.timer.frameLoop(1,this,this._update)},t._now=function(){return Date.now()},t._update=function(){if(this.scale<=0)this._lastTimer=this._now();else{var t=this.currFrame=this.currFrame+this.scale,e=this._now();this._delta=(e-this._lastTimer)*this.scale;var i=this.currTimer=this.currTimer+this._delta;this._lastTimer=e;var n=this._handlers;for(o=this._count=0,a=n.length;o<a;o++)if(null!==(h=n[o]).method){var s=h.userFrame?t:i;if(s>=h.exeTime)if(h.repeat)if(h.jumpFrame)for(;s>=h.exeTime;)h.exeTime+=h.delay,h.run(!1);else h.exeTime+=h.delay,h.run(!1),s>h.exeTime&&(h.exeTime+=Math.ceil((s-h.exeTime)/h.delay)*h.delay);else h.run(!0)}else this._count++;(30<this._count||t%200==0)&&this._clearHandlers();for(var r=this._laters,o=0,a=r.length-1;o<=a;o++){var h=r[o];null!==h.method&&(this._map[h.key]=null,h.run(!1)),this._recoverHandler(h),o===a&&(a=r.length-1)}r.length=0}},t._clearHandlers=function(){for(var t=this._handlers,e=0,i=t.length;e<i;e++){var n=t[e];null!==n.method?this._temp.push(n):this._recoverHandler(n)}this._handlers=this._temp,this._temp=t,this._temp.length=0},t._recoverHandler=function(t){this._map[t.key]==t&&(this._map[t.key]=null),t.clear(),l._pool.push(t)},t._create=function(t,e,i,n,s,r,o){if(!i)return s.apply(n,r),null;if(o){var a=this._getHandler(n,s);if(a)return a.repeat=e,a.userFrame=t,a.delay=i,a.caller=n,a.method=s,a.args=r,a.exeTime=i+(t?this.currFrame:this.currTimer+this._now()-this._lastTimer),a}return(a=0<l._pool.length?l._pool.pop():new h).repeat=e,a.userFrame=t,a.delay=i,a.caller=n,a.method=s,a.args=r,a.exeTime=i+(t?this.currFrame:this.currTimer+this._now()-this._lastTimer)+1,this._indexHandler(a),this._handlers.push(a),a},t._indexHandler=function(t){var e=t.caller,i=t.method,n=e?e.$_GID||(e.$_GID=vt.getGID()):0,s=i.$_TID||(i.$_TID=1e5*this._mid++);t.key=n+s,this._map[t.key]=t},t.once=function(t,e,i,n,s){void 0===s&&(s=!0),this._create(!1,!1,t,e,i,n,s)},t.loop=function(t,e,i,n,s,r){void 0===s&&(s=!0),void 0===r&&(r=!1);var o=this._create(!1,!0,t,e,i,n,s);o&&(o.jumpFrame=r)},t.frameOnce=function(t,e,i,n,s){void 0===s&&(s=!0),this._create(!0,!1,t,e,i,n,s)},t.frameLoop=function(t,e,i,n,s){void 0===s&&(s=!0),this._create(!0,!0,t,e,i,n,s)},t.toString=function(){return"callLater:"+this._laters.length+" handlers:"+this._handlers.length+" pool:"+l._pool.length},t.clear=function(t,e){var i=this._getHandler(t,e);i&&(this._map[i.key]=null,i.key=0,i.clear())},t.clearAll=function(t){if(t)for(var e=0,i=this._handlers.length;e<i;e++){var n=this._handlers[e];n.caller===t&&(this._map[n.key]=null,n.key=0,n.clear())}},t._getHandler=function(t,e){var i=t?t.$_GID||(t.$_GID=vt.getGID()):0,n=e.$_TID||(e.$_TID=1e5*this._mid++);return this._map[i+n]},t.callLater=function(t,e,i){if(null==this._getHandler(t,e)){if(l._pool.length)var n=l._pool.pop();else n=new h;n.caller=t,n.method=e,n.args=i,this._indexHandler(n),this._laters.push(n)}},t.runCallLater=function(t,e){var i=this._getHandler(t,e);i&&null!=i.method&&(this._map[i.key]=null,i.run(!0))},t.runTimer=function(t,e){this.runCallLater(t,e)},c(0,t,"delta",function(){return this._delta}),l._pool=[],l.__init$=function(){h=function(){function t(){this.key=0,this.repeat=!1,this.delay=0,this.userFrame=!1,this.exeTime=0,this.caller=null,this.method=null,this.args=null,this.jumpFrame=!1}p(t,"");var e=t.prototype;return e.clear=function(){this.caller=null,this.method=null,this.args=null},e.run=function(t){var e=this.caller;if(e&&e.destroyed)return this.clear();var i=this.method,n=this.args;t&&this.clear(),null!=i&&(n?i.apply(e,n):i.call(e))},t}()},l}(),mt=function(){function u(){this.gid=0}p(u,"laya.utils.Tween");var t=u.prototype;return t.to=function(t,e,i,n,s,r,o){return void 0===r&&(r=0),void 0===o&&(o=!1),this._create(t,e,i,n,s,r,o,!0,!1,!0)},t.from=function(t,e,i,n,s,r,o){return void 0===r&&(r=0),void 0===o&&(o=!1),this._create(t,e,i,n,s,r,o,!1,!1,!0)},t._create=function(t,e,i,n,s,r,o,a,h,l){if(!t)throw new Error("Tween:target is null");this._target=t,this._duration=i,this._ease=n||e.ease||u.easeNone,this._complete=s||e.complete,this._delay=r,this._props=[],this._usedTimer=0,this._startTimer=Q.now(),this._usedPool=h,this._delayParam=null,this.update=e.update;var c=t.$_GID||(t.$_GID=vt.getGID());return u.tweenMap[c]?(o&&u.clearTween(t),u.tweenMap[c].push(this)):u.tweenMap[c]=[this],l?r<=0?this.firstStart(t,e,a):(this._delayParam=[t,e,a],b.scaleTimer.once(r,this,this.firstStart,this._delayParam)):this._initProps(t,e,a),this},t.firstStart=function(t,e,i){this._delayParam=null,t.destroyed?this.clear():(this._initProps(t,e,i),this._beginLoop())},t._initProps=function(t,e,i){for(var n in e)if("number"==typeof t[n]){var s=i?t[n]:e[n],r=i?e[n]:t[n];this._props.push([n,s,r-s]),i||(t[n]=s)}},t._beginLoop=function(){b.scaleTimer.frameLoop(1,this,this._doEase)},t._doEase=function(){this._updateEase(Q.now())},t._updateEase=function(t){var e=this._target;if(e){if(e.destroyed)return u.clearTween(e);var i=this._usedTimer=t-this._startTimer-this._delay;if(!(i<0)){if(i>=this._duration)return this.complete();for(var n=0<i?this._ease(i,0,1,this._duration):0,s=this._props,r=0,o=s.length;r<o;r++){var a=s[r];e[a[0]]=a[1]+n*a[2]}this.update&&this.update.run()}}},t.complete=function(){if(this._target){b.scaleTimer.runTimer(this,this.firstStart);for(var t=this._target,e=this._props,i=this._complete,n=0,s=e.length;n<s;n++){var r=e[n];t[r[0]]=r[1]+r[2]}this.update&&this.update.run(),this.clear(),i&&i.run()}},t.pause=function(){b.scaleTimer.clear(this,this._beginLoop),b.scaleTimer.clear(this,this._doEase),b.scaleTimer.clear(this,this.firstStart);var t;(t=Q.now()-this._startTimer-this._delay)<0&&(this._usedTimer=t)},t.setStartTime=function(t){this._startTimer=t},t.clear=function(){this._target&&(this._remove(),this._clear())},t._clear=function(){this.pause(),b.scaleTimer.clear(this,this.firstStart),this._complete=null,this._target=null,this._ease=null,this._props=null,this._delayParam=null,this._usedPool&&(this.update=null,_t.recover("tween",this))},t.recover=function(){this._usedPool=!0,this._clear()},t._remove=function(){var t=u.tweenMap[this._target.$_GID];if(t)for(var e=0,i=t.length;e<i;e++)if(t[e]===this){t.splice(e,1);break}},t.restart=function(){if(this.pause(),this._usedTimer=0,this._startTimer=Q.now(),this._delayParam)b.scaleTimer.once(this._delay,this,this.firstStart,this._delayParam);else{for(var t=this._props,e=0,i=t.length;e<i;e++){var n=t[e];this._target[n[0]]=n[1]}b.scaleTimer.once(this._delay,this,this._beginLoop)}},t.resume=function(){this._usedTimer>=this._duration||(this._startTimer=Q.now()-this._usedTimer-this._delay,this._delayParam?this._usedTimer<0?b.scaleTimer.once(-this._usedTimer,this,this.firstStart,this._delayParam):this.firstStart.apply(this,this._delayParam):this._beginLoop())},c(0,t,"progress",null,function(t){var e=t*this._duration;this._startTimer=Q.now()-this._delay-e}),u.to=function(t,e,i,n,s,r,o,a){return void 0===r&&(r=0),void 0===o&&(o=!1),void 0===a&&(a=!0),_t.getItemByClass("tween",u)._create(t,e,i,n,s,r,o,!0,a,!0)},u.from=function(t,e,i,n,s,r,o,a){return void 0===r&&(r=0),void 0===o&&(o=!1),void 0===a&&(a=!0),_t.getItemByClass("tween",u)._create(t,e,i,n,s,r,o,!1,a,!0)},u.clearAll=function(t){if(t&&t.$_GID){var e=u.tweenMap[t.$_GID];if(e){for(var i=0,n=e.length;i<n;i++)e[i]._clear();e.length=0}}},u.clear=function(t){t.clear()},u.clearTween=function(t){u.clearAll(t)},u.easeNone=function(t,e,i,n){return i*t/n+e},u.tweenMap={},u}(),vt=(p(yt,"laya.utils.Utils"),yt.toRadian=function(t){return t*yt._pi2},yt.toAngle=function(t){return t*yt._pi},yt.toHexColor=function(t){if(t<0||isNaN(t))return null;for(var e=t.toString(16);e.length<6;)e="0"+e;return"#"+e},yt.getGID=function(){return yt._gid++},yt.concatArray=function(t,e){if(!e)return t;if(!t)return e;var i=0,n=e.length;for(i=0;i<n;i++)t.push(e[i]);return t},yt.clearArray=function(t){return t&&(t.length=0),t},yt.copyArray=function(t,e){if(t||(t=[]),!e)return t;t.length=e.length;var i=0,n=e.length;for(i=0;i<n;i++)t[i]=e[i];return t},yt.getGlobalRecByPoints=function(t,e,i,n,s){var r,o;return r=new k(e,i),r=t.localToGlobal(r),o=new k(n,s),o=t.localToGlobal(o),O._getWrapRec([r.x,r.y,o.x,o.y])},yt.getGlobalPosAndScale=function(t){return yt.getGlobalRecByPoints(t,0,0,1,1)},yt.bind=function(t,e){return t.bind(e)},yt.measureText=function(t,e){return A.measureText(t,e)},yt.updateOrder=function(t){if(!t||t.length<2)return!1;for(var e,i=1,n=0,s=t.length,r=NaN;i<s;){for(e=t[n=i],r=t[n]._zOrder;-1<--n&&t[n]._zOrder>r;)t[n+1]=t[n];t[n+1]=e,i++}var o=e.parent.conchModel;if(o)if(null!=o.updateZOrder)o.updateZOrder();else{for(i=0;i<s;i++)o.removeChild(t[i].conchModel);for(i=0;i<s;i++)o.addChildAt(t[i].conchModel,i)}return!0},yt.transPointList=function(t,e,i){var n=0,s=t.length;for(n=0;n<s;n+=2)t[n]+=e,t[n+1]+=i},yt.parseInt=function(t,e){void 0===e&&(e=0);var i=Q.window.parseInt(t,e);return isNaN(i)?0:i},yt.getFileExtension=function(t){yt._extReg.lastIndex=t.lastIndexOf(".");var e=yt._extReg.exec(t);return e&&1<e.length?e[1].toLowerCase():null},yt.getTransformRelativeToWindow=function(t,e,i){var n=b.stage,s=laya.utils.Utils.getGlobalPosAndScale(t),r=n._canvasTransform.clone(),o=r.tx,a=r.ty;r.rotate(-Math.PI/180*b.stage.canvasDegree),r.scale(b.stage.clientScaleX,b.stage.clientScaleY);var h=b.stage.canvasDegree%180!=0,l=NaN,c=NaN;h?(l=i+s.y,c=e+s.x,l*=r.d,c*=r.a,90==b.stage.canvasDegree?(l=o-l,c+=a):(l+=o,c=a-c)):(l=e+s.x,c=i+s.y,l*=r.a,c*=r.d,l+=o,c+=a);var u=NaN,_=NaN;return _=h?(u=r.d*s.height,r.a*s.width):(u=r.a*s.width,r.d*s.height),{x:l,y:c,scaleX:u,scaleY:_}},yt.fitDOMElementInArea=function(t,e,i,n,s,r){t._fitLayaAirInitialized||(t._fitLayaAirInitialized=!0,t.style.transformOrigin=t.style.webKittransformOrigin="left top",t.style.position="absolute");var o=yt.getTransformRelativeToWindow(e,i,n);t.style.transform=t.style.webkitTransform="scale("+o.scaleX+","+o.scaleY+") rotate("+b.stage.canvasDegree+"deg)",t.style.width=s+"px",t.style.height=r+"px",t.style.left=o.x+"px",t.style.top=o.y+"px"},yt.isOkTextureList=function(t){if(!t)return!1;var e,i=0,n=t.length;for(i=0;i<n;i++)if(!(e=t[i])||!e.source)return!1;return!0},yt.isOKCmdList=function(t){if(!t)return!1;var e,i,n=0,s=t.length,r=X._context;for(n=0;n<s;n++)switch((e=t[n]).callee){case r._drawTexture:case r._fillTexture:case r._drawTextureWithTransform:if(!(i=e[0])||!i.source)return!1}return!0},yt._gid=1,yt._pi=180/Math.PI,yt._pi2=Math.PI/180,yt._extReg=/\.(\w+)\??/g,yt.parseXMLFromString=function(t){var e;if(t=t.replace(/>\s+</g,"><"),-1<(e=(new DOMParser).parseFromString(t,"text/xml")).firstChild.textContent.indexOf("This page contains the following errors"))throw new Error(e.firstChild.firstChild.textContent);return e},yt);function yt(){}var wt=function(){function t(){this.useDic={},this.shapeDic={},this.shapeLineDic={},this._id=0,this._checkKey=!1,this._freeIdArray=[],X.isWebGL&&tt.regCacheByFunction(vt.bind(this.startDispose,this),vt.bind(this.getCacheList,this))}p(t,"laya.utils.VectorGraphManager");var e=t.prototype;return e.getId=function(){return this._id++},e.addShape=function(t,e){this.shapeDic[t]=e,this.useDic[t]||(this.useDic[t]=!0)},e.addLine=function(t,e){this.shapeLineDic[t]=e,this.shapeLineDic[t]||(this.shapeLineDic[t]=!0)},e.getShape=function(t){this._checkKey&&null!=this.useDic[t]&&(this.useDic[t]=!0)},e.deleteShape=function(t){this.shapeDic[t]&&(this.shapeDic[t]=null,delete this.shapeDic[t]),this.shapeLineDic[t]&&(this.shapeLineDic[t]=null,delete this.shapeLineDic[t]),null!=this.useDic[t]&&delete this.useDic[t]},e.getCacheList=function(){var t,e=[];for(t in this.shapeDic)e.push(this.shapeDic[t]);for(t in this.shapeLineDic)e.push(this.shapeLineDic[t]);return e},e.startDispose=function(t){var e;for(e in this.useDic)this.useDic[e]=!1;this._checkKey=!0},e.endDispose=function(){if(this._checkKey){var t;for(t in this.useDic)this.useDic[t]||this.deleteShape(t);this._checkKey=!1}},t.getInstance=function(){return t.instance=t.instance||new t},t.instance=null,t}(),xt=function(){function n(){this._obj=null,this._obj=n.supportWeakMap?new Q.window.WeakMap:{},n.supportWeakMap||n._maps.push(this)}p(n,"laya.utils.WeakObject");var t=n.prototype;return t.set=function(t,e){if(null!=t)if(n.supportWeakMap){var i=t;"string"!=typeof t&&"number"!=typeof t||(i=n._keys[t])||(i=n._keys[t]={k:t}),this._obj.set(i,e)}else"string"==typeof t||"number"==typeof t?this._obj[t]=e:(t.$_GID||(t.$_GID=vt.getGID()),this._obj[t.$_GID]=e)},t.get=function(t){if(null==t)return null;if(n.supportWeakMap){var e="string"==typeof t||"number"==typeof t?n._keys[t]:t;return e?this._obj.get(e):null}return"string"==typeof t||"number"==typeof t?this._obj[t]:this._obj[t.$_GID]},t.del=function(t){if(null!=t)if(n.supportWeakMap){var e="string"==typeof t||"number"==typeof t?n._keys[t]:t;if(!e)return;this._obj.delete(e)}else"string"==typeof t||"number"==typeof t?delete this._obj[t]:delete this._obj[this._obj.$_GID]},t.has=function(t){if(null==t)return!1;if(n.supportWeakMap){var e="string"==typeof t||"number"==typeof t?n._keys[t]:t;return this._obj.has(e)}return"string"==typeof t||"number"==typeof t?null!=this._obj[t]:null!=this._obj[this._obj.$_GID]},n.__init__=function(){(n.supportWeakMap=null!=Q.window.WeakMap)||b.timer.loop(n.delInterval,null,n.clearCache)},n.clearCache=function(){for(var t=0,e=n._maps.length;t<e;t++){n._maps[t]._obj={}}},n.supportWeakMap=!1,n.delInterval=3e5,n._keys={},n._maps=[],h(n,["I",function(){return this.I=new n}]),n}(),Tt=function(){function t(){this.id=NaN,this.save=[],this.toUpperCase=null,this.changed=!1,this._text=null}p(t,"laya.utils.WordText");var e=t.prototype;return e.setText=function(t){this.changed=!0,this._text=t},e.toString=function(){return this._text},e.charCodeAt=function(t){return this._text?this._text.charCodeAt(t):NaN},e.charAt=function(t){return this._text?this._text.charAt(t):null},c(0,e,"length",function(){return this._text?this._text.length:0}),t}(),bt=function(t){function o(){this._bits=0,this._displayedInStage=!1,this._parent=null,this.conchModel=null,this.name="",this._destroyed=!1,o.__super.call(this),this._childs=o.ARRAY_EMPTY,this._$P=o.PROP_EMPTY,this.timer=b.scaleTimer,this.conchModel=X.isConchNode?this.createConchModel():null}p(o,"laya.display.Node",l);var e=o.prototype;return e._setBit=function(t,e){1==t&&this._getBit(t)!=e&&this._updateDisplayedInstage();e?this._bits|=t:this._bits&=~t},e._getBit=function(t){return 0!=(this._bits&t)},e._setUpNoticeChain=function(){this._getBit(1)&&this._setUpNoticeType(1)},e._setUpNoticeType=function(t){var e=this;for(e._setBit(t,!0),e=e.parent;e;){if(e._getBit(t))return;e._setBit(t,!0),e=e.parent}},e.on=function(t,e,i,n){return"display"!==t&&"undisplay"!==t||this._getBit(1)||this._setUpNoticeType(1),this._createListener(t,e,i,n,!1)},e.once=function(t,e,i,n){return"display"!==t&&"undisplay"!==t||this._getBit(1)||this._setUpNoticeType(1),this._createListener(t,e,i,n,!0)},e.createConchModel=function(){return null},e.destroy=function(t){void 0===t&&(t=!0),this._destroyed=!0,this._parent&&this._parent.removeChild(this),this._childs&&(t?this.destroyChildren():this.removeChildren()),this._childs=null,this._$P=null,this.offAll(),this.timer.clearAll(this)},e.destroyChildren=function(){if(this._childs)for(var t=this._childs.length-1;-1<t;t--)this._childs[t].destroy(!0)},e.addChild=function(t){if(!t||this.destroyed||t===this)return t;if(t.zOrder&&this._set$P("hasZorder",!0),t._parent===this){var e=this.getChildIndex(t);e!==this._childs.length-1&&(this._childs.splice(e,1),this._childs.push(t),this.conchModel&&(this.conchModel.removeChild(t.conchModel),this.conchModel.addChildAt(t.conchModel,this._childs.length-1)),this._childChanged())}else t.parent&&t.parent.removeChild(t),this._childs===o.ARRAY_EMPTY&&(this._childs=[]),this._childs.push(t),this.conchModel&&this.conchModel.addChildAt(t.conchModel,this._childs.length-1),(t.parent=this)._childChanged();return t},e.addChildren=function(t){for(var e=arguments,i=0,n=e.length;i<n;)this.addChild(e[i++])},e.addChildAt=function(t,e){if(!t||this.destroyed||t===this)return t;if(t.zOrder&&this._set$P("hasZorder",!0),0<=e&&e<=this._childs.length){if(t._parent===this){var i=this.getChildIndex(t);this._childs.splice(i,1),this._childs.splice(e,0,t),this.conchModel&&(this.conchModel.removeChild(t.conchModel),this.conchModel.addChildAt(t.conchModel,e)),this._childChanged()}else t.parent&&t.parent.removeChild(t),this._childs===o.ARRAY_EMPTY&&(this._childs=[]),this._childs.splice(e,0,t),this.conchModel&&this.conchModel.addChildAt(t.conchModel,e),t.parent=this;return t}throw new Error("appendChildAt:The index is out of bounds")},e.getChildIndex=function(t){return this._childs.indexOf(t)},e.getChildByName=function(t){var e=this._childs;if(e)for(var i=0,n=e.length;i<n;i++){var s=e[i];if(s.name===t)return s}return null},e._get$P=function(t){return this._$P[t]},e._set$P=function(t,e){return this.destroyed||(this._$P===o.PROP_EMPTY&&(this._$P={}),this._$P[t]=e),e},e.getChildAt=function(t){return this._childs[t]},e.setChildIndex=function(t,e){var i=this._childs;if(e<0||e>=i.length)throw new Error("setChildIndex:The index is out of bounds.");var n=this.getChildIndex(t);if(n<0)throw new Error("setChildIndex:node is must child of this object.");return i.splice(n,1),i.splice(e,0,t),this.conchModel&&(this.conchModel.removeChild(t.conchModel),this.conchModel.addChildAt(t.conchModel,e)),this._childChanged(),t},e._childChanged=function(t){},e.removeChild=function(t){if(!this._childs)return t;var e=this._childs.indexOf(t);return this.removeChildAt(e)},e.removeSelf=function(){return this._parent&&this._parent.removeChild(this),this},e.removeChildByName=function(t){var e=this.getChildByName(t);return e&&this.removeChild(e),e},e.removeChildAt=function(t){var e=this.getChildAt(t);return e&&(this._childs.splice(t,1),this.conchModel&&this.conchModel.removeChild(e.conchModel),e.parent=null),e},e.removeChildren=function(t,e){if(void 0===t&&(t=0),void 0===e&&(e=2147483647),this._childs&&0<this._childs.length){var i=this._childs;if(0===t&&r<=e){var n=i;this._childs=o.ARRAY_EMPTY}else n=i.splice(t,e-t);for(var s=0,r=n.length;s<r;s++)n[s].parent=null,this.conchModel&&this.conchModel.removeChild(n[s].conchModel)}return this},e.replaceChild=function(t,e){var i=this._childs.indexOf(e);return-1<i?(this._childs.splice(i,1,t),this.conchModel&&(this.conchModel.removeChild(e.conchModel),this.conchModel.addChildAt(t.conchModel,i)),e.parent=null,t.parent=this,t):null},e._updateDisplayedInstage=function(){var t;t=this;var e=b.stage;for(this._displayedInStage=!1;t;){if(t._getBit(1)){this._displayedInStage=t._displayedInStage;break}if(t==e||t._displayedInStage){this._displayedInStage=!0;break}t=t.parent}},e._setDisplay=function(t){this._displayedInStage!==t&&((this._displayedInStage=t)?this.event("display"):this.event("undisplay"))},e._displayChild=function(t,e){var i=t._childs;if(i)for(var n=0,s=i.length;n<s;n++){var r=i[n];r._getBit(1)&&(0<r._childs.length?this._displayChild(r,e):r._setDisplay(e))}t._setDisplay(e)},e.contains=function(t){if(t===this)return!0;for(;t;){if(t.parent===this)return!0;t=t.parent}return!1},e.timerLoop=function(t,e,i,n,s,r){void 0===s&&(s=!0),void 0===r&&(r=!1),this.timer.loop(t,e,i,n,s,r)},e.timerOnce=function(t,e,i,n,s){void 0===s&&(s=!0),this.timer._create(!1,!1,t,e,i,n,s)},e.frameLoop=function(t,e,i,n,s){void 0===s&&(s=!0),this.timer._create(!0,!0,t,e,i,n,s)},e.frameOnce=function(t,e,i,n,s){void 0===s&&(s=!0),this.timer._create(!0,!1,t,e,i,n,s)},e.clearTimer=function(t,e){this.timer.clear(t,e)},c(0,e,"numChildren",function(){return this._childs.length}),c(0,e,"destroyed",function(){return this._destroyed}),c(0,e,"parent",function(){return this._parent},function(t){this._parent!==t&&(t?(this._parent=t,this.event("added"),this._getBit(1)&&(this._setUpNoticeChain(),t.displayedInStage&&this._displayChild(this,!0)),t._childChanged(this)):(this.event("removed"),this._parent._childChanged(),this._getBit(1)&&this._displayChild(this,!1),this._parent=t))}),c(0,e,"displayedInStage",function(){return this._getBit(1)||this._setUpNoticeType(1),this._displayedInStage}),o.ARRAY_EMPTY=[],o.PROP_EMPTY={},o.NOTICE_DISPLAY=1,o.MOUSEENABLE=2,o}(),Ct=function(t){function _(t){this._bgground=null,this._border=null,this._rect=null,this.underLine=0,this.lineHeight=0,_.__super.call(this),this._padding=_._PADDING,this._spacing=_._SPACING,this._aligns=_._ALIGNS,this._font=d.EMPTY,this._ower=t}p(_,"laya.display.css.CSSStyle",t);var e=_.prototype;return e.destroy=function(){this._ower=null,this._font=null,this._rect=null},e.inherit=function(t){this._font=t._font,this._spacing=t._spacing===_._SPACING?_._SPACING:t._spacing.slice(),this.lineHeight=t.lineHeight},e._widthAuto=function(){return 0!=(262144&this._type)},e.widthed=function(t){return 0!=(8&this._type)},e._calculation=function(t,e){if(e.indexOf("%")<0)return!1;var n=this._ower,s=n.parent,r=this._rect;function o(t,e,i){return t*i[0]+e*i[1]+i[2]}function i(t){var e=s.width,i=n.width;r.width&&(n.width=o(e,i,r.width)),r.height&&(n.height=o(e,i,r.height)),r.left&&(n.x=o(e,i,r.left)),r.top&&(n.y=o(e,i,r.top))}null===r&&(s._getCSSStyle()._type|=524288,s.on("resize",this,i),this._rect=r={input:{}});var a=e.split(" ");return a[0]=parseFloat(a[0])/100,1==a.length?a[1]=a[2]=0:(a[1]=parseFloat(a[1])/100,a[2]=parseFloat(a[2])),r[t]=a,r.input[t]=e,i(),!0},e.heighted=function(t){return 0!=(8192&this._type)},e.size=function(t,e){var i=this._ower,n=!1;-1!==t&&t!=this._ower.width&&(this._type|=8,this._ower.width=t,n=!0),-1!==e&&e!=this._ower.height&&(this._type|=8192,this._ower.height=e,n=!0),n&&(i._layoutLater(),524288&this._type&&i.event("resize",this))},e._getAlign=function(){return this._aligns[0]},e._getValign=function(){return this._aligns[1]},e._getCssFloat=function(){return 0!=(32768&this._type)?32768:0},e._createFont=function(){return 4096&this._type?this._font:(this._type|=4096,this._font=new d(this._font))},e.render=function(t,e,i,n){var s=t.width,r=t.height;i-=t.pivotX,n-=t.pivotY,this._bgground&&null!=this._bgground.color&&e.ctx.fillRect(i,n,s,r,this._bgground.color),this._border&&this._border.color&&e.drawRect(i,n,s,r,this._border.color.strColor,this._border.size)},e.getCSSStyle=function(){return this},e.cssText=function(t){this.attrs(_.parseOneCSS(t,";"))},e.attrs=function(t){if(t)for(var e=0,i=t.length;e<i;e++){var n=t[e];this[n[0]]=n[1]}},e.setTransform=function(t){"none"===t?this._tf=a._TF_EMPTY:this.attrs(_.parseOneCSS(t,","))},e.translate=function(t,e){this._tf===a._TF_EMPTY&&(this._tf=new n),this._tf.translateX=t,this._tf.translateY=e},e.scale=function(t,e){this._tf===a._TF_EMPTY&&(this._tf=new n),this._tf.scaleX=t,this._tf.scaleY=e},e._enableLayout=function(){return 0==(2&this._type)&&0==(4&this._type)},c(0,e,"block",t.prototype._$get_block,function(t){t?this._type|=1:this._type&=-2}),c(0,e,"valign",function(){return _._valigndef[this._aligns[1]]},function(t){this._aligns===_._ALIGNS&&(this._aligns=[0,0,0]),this._aligns[1]=_._valigndef[t]}),c(0,e,"height",null,function(t){if(this._type|=8192,"string"==typeof t){if(this._calculation("height",t))return;t=parseInt(t)}this.size(-1,t)}),c(0,e,"width",null,function(t){if(this._type|=8,"string"==typeof t){var e=t.indexOf("auto");if(0<=e&&(this._type|=262144,t=t.substr(0,e)),this._calculation("width",t))return;t=parseInt(t)}this.size(t,-1)}),c(0,e,"fontWeight",function(){return this._font.weight},function(t){this._createFont().weight=t}),c(0,e,"left",null,function(t){var e=this._ower;if("string"==typeof t){if("center"===t?t="50% -50% 0":"right"===t&&(t="100% -100% 0"),this._calculation("left",t))return;t=parseInt(t)}e.x=t}),c(0,e,"_translate",null,function(t){this.translate(t[0],t[1])}),c(0,e,"absolute",function(){return 0!=(4&this._type)}),c(0,e,"top",null,function(t){var e=this._ower;if("string"==typeof t){if("middle"===t?t="50% -50% 0":"bottom"===t&&(t="100% -100% 0"),this._calculation("top",t))return;t=parseInt(t)}e.y=t}),c(0,e,"align",function(){return _._aligndef[this._aligns[0]]},function(t){this._aligns===_._ALIGNS&&(this._aligns=[0,0,0]),this._aligns[0]=_._aligndef[t]}),c(0,e,"bold",function(){return this._font.bold},function(t){this._createFont().bold=t}),c(0,e,"padding",function(){return this._padding},function(t){this._padding=t}),c(0,e,"leading",function(){return this._spacing[1]},function(t){"string"==typeof t&&(t=parseInt(t+"")),this._spacing===_._SPACING&&(this._spacing=[0,0]),this._spacing[1]=t}),c(0,e,"lineElement",function(){return 0!=(65536&this._type)},function(t){t?this._type|=65536:this._type&=-65537}),c(0,e,"cssFloat",function(){return 0!=(32768&this._type)?"right":"left"},function(t){this.lineElement=!1,"right"===t?this._type|=32768:this._type&=-32769}),c(0,e,"textDecoration",function(){return this._font.decoration},function(t){this._createFont().decoration=t}),c(0,e,"whiteSpace",function(){return 131072&this._type?"nowrap":""},function(t){"nowrap"===t&&(this._type|=131072),"none"===t&&(this._type&=-131073)}),c(0,e,"background",null,function(t){t?(this._bgground||(this._bgground={}),this._bgground.color=t,this._ower.conchModel&&this._ower.conchModel.bgColor(t),this._type|=16384,this._ower._renderType|=256):this._bgground=null}),c(0,e,"wordWrap",function(){return 0==(131072&this._type)},function(t){t?this._type&=-131073:this._type|=131072}),c(0,e,"color",function(){return this._font.color},function(t){this._createFont().color=t}),c(0,e,"password",function(){return this._font.password},function(t){this._createFont().password=t}),c(0,e,"backgroundColor",function(){return this._bgground?this._bgground.color:null},function(t){"none"===t?this._bgground=null:(this._bgground||(this._bgground={}),this._bgground.color=t),this._ower.conchModel&&this._ower.conchModel.bgColor(t),this._ower._renderType|=256}),c(0,e,"font",function(){return this._font.toString()},function(t){this._createFont().set(t)}),c(0,e,"weight",null,function(t){this._createFont().weight=t}),c(0,e,"letterSpacing",function(){return this._spacing[0]},function(t){"string"==typeof t&&(t=parseInt(t+"")),this._spacing===_._SPACING&&(this._spacing=[0,0]),this._spacing[0]=t}),c(0,e,"fontSize",function(){return this._font.size},function(t){this._createFont().size=t}),c(0,e,"italic",function(){return this._font.italic},function(t){this._createFont().italic=t}),c(0,e,"fontFamily",function(){return this._font.family},function(t){this._createFont().family=t}),c(0,e,"stroke",function(){return this._font.stroke[0]},function(t){this._createFont().stroke===d._STROKE&&(this._font.stroke=[0,"#000000"]),this._font.stroke[0]=t}),c(0,e,"strokeColor",function(){return this._font.stroke[1]},function(t){this._createFont().stroke===d._STROKE&&(this._font.stroke=[0,"#000000"]),this._font.stroke[1]=t}),c(0,e,"border",function(){return this._border?this._border.value:""},function(t){if("none"!=t){this._border||(this._border={});var e=(this._border.value=t).split(" ");if(this._border.color=st.create(e[e.length-1]),1==e.length)return this._border.size=1,void(this._border.type="solid");var i=0;0<e[0].indexOf("px")?(this._border.size=parseInt(e[0]),i++):this._border.size=1,this._border.type=e[i],this._ower._renderType|=256}else this._border=null}),c(0,e,"borderColor",function(){return this._border&&this._border.color?this._border.color.strColor:null},function(t){t?(this._border||(this._border={size:1,type:"solid"}),this._border.color=null==t?null:st.create(t),this._ower.conchModel&&this._ower.conchModel.border(this._border.color.strColor),this._ower._renderType|=256):this._border=null}),c(0,e,"position",function(){return 4&this._type?"absolute":""},function(t){"absolute"==t?this._type|=4:this._type&=-5}),c(0,e,"display",null,function(t){switch(t){case"":this._type&=-3,this.visible=!0;break;case"none":this._type|=2,this.visible=!1,this._ower._layoutLater()}}),c(0,e,"paddingLeft",function(){return this.padding[3]}),c(0,e,"paddingTop",function(){return this.padding[0]}),c(0,e,"_scale",null,function(t){this._ower.scale(t[0],t[1])}),c(0,e,"_rotate",null,function(t){this._ower.rotation=t}),_.parseOneCSS=function(t,e){for(var i,n=[],s=t.split(e),r=0,o=s.length;r<o;r++){var a=s[r],h=a.indexOf(":"),l=a.substr(0,h).replace(/^\s+|\s+$/g,"");if(0!=l.length){var c=a.substr(h+1).replace(/^\s+|\s+$/g,""),u=[l,c];switch(l){case"italic":case"bold":u[1]="true"==c;break;case"line-height":u[0]="lineHeight",u[1]=parseInt(c);break;case"font-size":u[0]="fontSize",u[1]=parseInt(c);break;case"padding":1<(i=c.split(" ")).length||(i[1]=i[2]=i[3]=i[0]),u[1]=[parseInt(i[0]),parseInt(i[1]),parseInt(i[2]),parseInt(i[3])];break;case"rotate":u[0]="_rotate",u[1]=parseFloat(c);break;case"scale":i=c.split(" "),u[0]="_scale",u[1]=[parseFloat(i[0]),parseFloat(i[1])];break;case"translate":i=c.split(" "),u[0]="_translate",u[1]=[parseInt(i[0]),parseInt(i[1])];break;default:(u[0]=_._CSSTOVALUE[l])||(u[0]=l)}n.push(u)}}return n},_.parseCSS=function(t,e){for(var i;null!=(i=_._parseCSSRegExp.exec(t));)_.styleSheets[i[1]]=_.parseOneCSS(i[2],";")},_.EMPTY=new _(null),_._CSSTOVALUE={"letter-spacing":"letterSpacing","line-spacing":"lineSpacing","white-space":"whiteSpace","line-height":"lineHeight","scale-x":"scaleX","scale-y":"scaleY","translate-x":"translateX","translate-y":"translateY","font-family":"fontFamily","font-weight":"fontWeight","vertical-align":"valign","text-decoration":"textDecoration","background-color":"backgroundColor","border-color":"borderColor",float:"cssFloat"},_._parseCSSRegExp=new RegExp("([.#]\\w+)\\s*{([\\s\\S]*?)}","g"),_._aligndef={left:0,center:1,right:2,0:"left",1:"center",2:"right"},_._valigndef={top:0,middle:1,bottom:2,0:"top",1:"middle",2:"bottom"},_.styleSheets={},_.ALIGN_CENTER=1,_.ALIGN_RIGHT=2,_.VALIGN_MIDDLE=1,_.VALIGN_BOTTOM=2,_._CSS_BLOCK=1,_._DISPLAY_NONE=2,_._ABSOLUTE=4,_._WIDTH_SET=8,_._PADDING=[0,0,0,0],_._RECT=[-1,-1,-1,-1],_._SPACING=[0,0],_._ALIGNS=[0,0,0],_.ADDLAYOUTED=512,_._NEWFONT=4096,_._HEIGHT_SET=8192,_._BACKGROUND_SET=16384,_._FLOAT_RIGHT=32768,_._LINE_ELEMENT=65536,_._NOWARP=131072,_._WIDTHAUTO=262144,_._LISTERRESZIE=524288,_}(a),Mt=function(t){function o(){this.url=null,this.audio=null,this.loaded=!1,o.__super.call(this)}p(o,"laya.media.h5audio.AudioSound",l);var e=o.prototype;return e.dispose=function(){var t=o._audioCache[this.url];_t.clearBySign("audio:"+this.url),t&&(X.isConchApp||(t.src=""),delete o._audioCache[this.url])},e.load=function(t){var e;if(t=Y.formatURL(t),(this.url=t)==N._tMusic?(o._initMusicAudio(),(e=o._musicAudio).src!=t&&(o._audioCache[e.src]=null,e=null)):e=o._audioCache[t],e&&2<=e.readyState)this.event("complete");else{e||(e=t==N._tMusic?(o._initMusicAudio(),o._musicAudio):Q.createElement("audio"),(o._audioCache[t]=e).src=t),e.addEventListener("canplaythrough",n),e.addEventListener("error",s);var i=this;(this.audio=e).load?e.load():s()}function n(){r(),i.loaded=!0,i.event("complete")}function s(){e.load=null,r(),i.event("error")}function r(){e.removeEventListener("canplaythrough",n),e.removeEventListener("error",s)}},e.play=function(t,e){if(void 0===t&&(t=0),void 0===e&&(e=0),!this.url)return null;var i,n;if(!(i=this.url==N._tMusic?o._musicAudio:o._audioCache[this.url]))return null;n=_t.getItem("audio:"+this.url),X.isConchApp?n||((n=Q.createElement("audio")).src=this.url):this.url==N._tMusic?(o._initMusicAudio(),(n=o._musicAudio).src=this.url):n=n||i.cloneNode(!0);var s=new Ot(n);return s.url=this.url,s.loops=e,s.startTime=t,s.play(),N.addChannel(s),s},c(0,e,"duration",function(){var t;return(t=o._audioCache[this.url])?t.duration:0}),o._initMusicAudio=function(){o._musicAudio||(o._musicAudio||(o._musicAudio=Q.createElement("audio")),X.isConchApp||Q.document.addEventListener("mousedown",o._makeMusicOK))},o._makeMusicOK=function(){Q.document.removeEventListener("mousedown",o._makeMusicOK),o._musicAudio.src?o._musicAudio.play():(o._musicAudio.src="",o._musicAudio.load())},o._audioCache={},o._musicAudio=null,o}(),St=function(t){function e(){this.url=null,this.loops=0,this.startTime=NaN,this.isStopped=!1,this.completeHandler=null,e.__super.call(this)}p(e,"laya.media.SoundChannel",l);var i=e.prototype;return i.play=function(){},i.stop=function(){},i.pause=function(){},i.resume=function(){},i.__runComplete=function(t){t&&t.run()},c(0,i,"volume",function(){return 1},function(t){}),c(0,i,"position",function(){return 0}),c(0,i,"duration",function(){return 0}),e}(),Pt=function(t){function e(){e.__super.call(this)}p(e,"laya.media.Sound",l);var i=e.prototype;return i.load=function(t){},i.play=function(t,e){return void 0===t&&(t=0),void 0===e&&(e=0),null},i.dispose=function(){},c(0,i,"duration",function(){return 0}),e}(),Et=function(t){function s(){this.url=null,this.loaded=!1,this.data=null,this.audioBuffer=null,this.__toPlays=null,this._disposed=!1,s.__super.call(this)}p(s,"laya.media.webaudio.WebAudioSound",l);var e=s.prototype;return e.load=function(t){var e=this;if(t=Y.formatURL(t),this.url=t,this.audioBuffer=s._dataCache[t],this.audioBuffer)this._loaded(this.audioBuffer);else if(s.e.on("loaded:"+t,this,this._loaded),s.e.on("err:"+t,this,this._err),!s.__loadingSound[t]){s.__loadingSound[t]=!0;var i=new Q.window.XMLHttpRequest;i.open("GET",t,!0),i.responseType="arraybuffer",i.onload=function(){e._disposed?e._removeLoadEvents():(e.data=i.response,s.buffs.push({buffer:e.data,url:e.url}),s.decode())},i.onerror=function(t){e._err()},i.send()}},e._err=function(){if(this._removeLoadEvents(),s.__loadingSound[this.url]=!1,this.event("error"),this.__toPlays){var t,e,i,n=0;for(t=(e=this.__toPlays).length,n=0;n<t;n++)(i=e[n])[2]&&!i[2].isStopped&&i[2].event("error");this.__toPlays.length=0}},e._loaded=function(t){this._removeLoadEvents(),this._disposed||(this.audioBuffer=t,s._dataCache[this.url]=this.audioBuffer,this.loaded=!0,this.event("complete"))},e._removeLoadEvents=function(){s.e.off("loaded:"+this.url,this,this._loaded),s.e.off("err:"+this.url,this,this._err)},e.__playAfterLoaded=function(){if(this.__toPlays){var t,e,i,n=0;for(t=(e=this.__toPlays).length,n=0;n<t;n++)(i=e[n])[2]&&!i[2].isStopped&&this.play(i[0],i[1],i[2]);this.__toPlays.length=0}},e.play=function(t,e,i){return void 0===t&&(t=0),void 0===e&&(e=0),i=i||new Nt,this.audioBuffer||this.url&&(this.__toPlays||(this.__toPlays=[]),this.__toPlays.push([t,e,i]),this.once("complete",this,this.__playAfterLoaded),this.load(this.url)),i.url=this.url,i.loops=e,i.audioBuffer=this.audioBuffer,i.startTime=t,i.play(),N.addChannel(i),i},e.dispose=function(){this._disposed=!0,delete s._dataCache[this.url],delete s.__loadingSound[this.url],this.audioBuffer=null,this.data=null,this.__toPlays=[]},c(0,e,"duration",function(){return this.audioBuffer?this.audioBuffer.duration:0}),s.decode=function(){s.buffs.length<=0||s.isDecoding||(s.isDecoding=!0,s.tInfo=s.buffs.shift(),s.ctx.decodeAudioData(s.tInfo.buffer,s._done,s._fail))},s._done=function(t){s.e.event("loaded:"+s.tInfo.url,t),s.isDecoding=!1,s.decode()},s._fail=function(){s.e.event("err:"+s.tInfo.url,null),s.isDecoding=!1,s.decode()},s._playEmptySound=function(){if(null!=s.ctx){var t=s.ctx.createBufferSource();t.buffer=s._miniBuffer,t.connect(s.ctx.destination),t.start(0,0,0)}},s._unlock=function(){s._unlocked||(s._playEmptySound(),"running"==s.ctx.state&&(Q.document.removeEventListener("mousedown",s._unlock,!0),Q.document.removeEventListener("touchend",s._unlock,!0),Q.document.removeEventListener("touchstart",s._unlock,!0),s._unlocked=!0))},s.initWebAudio=function(){"running"!=s.ctx.state&&(s._unlock(),Q.document.addEventListener("mousedown",s._unlock,!0),Q.document.addEventListener("touchend",s._unlock,!0),Q.document.addEventListener("touchstart",s._unlock,!0))},s._dataCache={},s.buffs=[],s.isDecoding=!1,s._unlocked=!1,s.tInfo=null,s.__loadingSound={},h(s,["window",function(){return this.window=Q.window},"webAudioEnabled",function(){return this.webAudioEnabled=s.window.AudioContext||s.window.webkitAudioContext||s.window.mozAudioContext},"ctx",function(){return this.ctx=s.webAudioEnabled?new(s.window.AudioContext||s.window.webkitAudioContext||s.window.mozAudioContext):void 0},"_miniBuffer",function(){return this._miniBuffer=s.ctx.createBuffer(1,1,22050)},"e",function(){return this.e=new l}]),s}(),At=function(t){function e(){this._responseType=null,this._data=null,e.__super.call(this),this._http=new Q.window.XMLHttpRequest}p(e,"laya.net.HttpRequest",l);var i=e.prototype;return i.send=function(t,e,i,n,s){void 0===i&&(i="get"),void 0===n&&(n="text"),this._responseType=n,this._data=null;var r=this,o=this._http;if(o.open(i,t,!0),s)for(var a=0;a<s.length;a++)o.setRequestHeader(s[a++],s[a]);else X.isConchApp||(e&&"string"!=typeof e?o.setRequestHeader("Content-Type","application/json"):o.setRequestHeader("Content-Type","application/x-www-form-urlencoded"));o.responseType="arraybuffer"!==n?"text":"arraybuffer",o.onerror=function(t){r._onError(t)},o.onabort=function(t){r._onAbort(t)},o.onprogress=function(t){r._onProgress(t)},o.onload=function(t){r._onLoad(t)},o.send(e)},i._onProgress=function(t){t&&t.lengthComputable&&this.event("progress",t.loaded/t.total)},i._onAbort=function(t){this.error("Request was aborted by user")},i._onError=function(t){this.error("Request failed Status:"+this._http.status+" text:"+this._http.statusText)},i._onLoad=function(t){var e=this._http,i=void 0!==e.status?e.status:200;200===i||204===i||0===i?this.complete():this.error("["+e.status+"]"+e.statusText+":"+e.responseURL)},i.error=function(t){this.clear(),this.event("error",t)},i.complete=function(){this.clear();var e=!0;try{"json"===this._responseType?this._data=JSON.parse(this._http.responseText):"xml"===this._responseType?this._data=vt.parseXMLFromString(this._http.responseText):this._data=this._http.response||this._http.responseText}catch(t){e=!1,this.error(t.message)}e&&this.event("complete",this._data instanceof Array?[this._data]:this._data)},i.clear=function(){var t=this._http;t.onerror=t.onabort=t.onprogress=t.onload=null},c(0,i,"url",function(){return this._http.responseURL}),c(0,i,"http",function(){return this._http}),c(0,i,"data",function(){return this._data}),e}(),It=function(t){function S(){this._data=null,this._class=null,this._url=null,this._type=null,this._cache=!1,this._http=null,this._customParse=!1,S.__super.call(this)}p(S,"laya.net.Loader",l);var e=S.prototype;return e.load=function(t,e,i,n,s){if(void 0===i&&(i=!0),void 0===s&&(s=!1),0===(this._url=t).indexOf("data:image")?this._type=e="image":(this._type=e||(e=this.getTypeFromUrl(t)),t=Y.formatURL(t)),this._cache=i,this._data=null,!s&&S.loadedMap[t])return this._data=S.loadedMap[t],this.event("progress",1),void this.event("complete",this._data);if(n&&S.setGroup(t,n),null!=S.parserMap[e])return this._customParse=!0,void(S.parserMap[e]instanceof laya.utils.Handler?S.parserMap[e].runWith(this):S.parserMap[e].call(null,this));if("image"===e||"htmlimage"===e||"nativeimage"===e)return this._loadImage(t);if("sound"===e)return this._loadSound(t);if("ttf"===e)return this._loadTTF(t);var r;switch(e){case"atlas":case"plf":r="json";break;case"font":r="xml";break;case"pkm":r="arraybuffer";break;default:r=e}S.preLoadedMap[t]?this.onLoaded(S.preLoadedMap[t]):(this._http||(this._http=new At,this._http.on("progress",this,this.onProgress),this._http.on("error",this,this.onError),this._http.on("complete",this,this.onLoaded)),this._http.send(t,null,"get",r))},e.getTypeFromUrl=function(t){var e=vt.getFileExtension(t);return e?S.typeMap[e]:(console.warn("Not recognize the resources suffix",t),"text")},e._loadTTF=function(t){t=Y.formatURL(t);var e=new H;e.complete=v.create(this,this.onLoaded),e.load(t)},e._loadImage=function(e){e=Y.formatURL(e);var i,t=this;function n(){i.onload=null,i.onerror=null,delete S.imgCache[e]}function s(){n(),t.onLoaded(i)}function r(){n(),t.event("error","Load image failed")}"nativeimage"===this._type?((i=new Q.window.Image).crossOrigin="",i.onload=s,i.onerror=r,i.src=e,S.imgCache[e]=i):new Vt.create(e,{onload:s,onerror:r,onCreate:function(t){i=t,S.imgCache[e]=t}})},e._loadSound=function(t){var e=new N._soundClass,i=this;function n(){e.offAll()}e.on("complete",this,function(){n(),i.onLoaded(e)}),e.on("error",this,function(){n(),e.dispose(),i.event("error","Load sound failed")}),e.load(t)},e.onProgress=function(t){"atlas"===this._type?this.event("progress",.3*t):this.event("progress",t)},e.onError=function(t){this.event("error",t)},e.onLoaded=function(t){var e=this._type;if("plf"==e)this.parsePLFData(t),this.complete(t);else if("image"===e){var i=new Dt(t);i.url=this._url,this.complete(i)}else if("sound"===e||"htmlimage"===e||"nativeimage"===e)this.complete(t);else if("atlas"===e){if(!t.src&&!t._setContext){if(!this._data){if((this._data=t).meta&&t.meta.image)for(var n=t.meta.image.split(","),s=0<=this._url.indexOf("/")?"/":"\\",r=this._url.lastIndexOf(s),o=0<=r?this._url.substr(0,r+1):"",a=0,h=n.length;a<h;a++)n[a]=o+n[a];else n=[this._url.replace(".json",".png")];n.reverse(),t.toLoads=n,t.pics=[]}return this.event("progress",.3+1/n.length*.6),this._loadImage(n.pop())}if(this._data.pics.push(t),0<this._data.toLoads.length)return this.event("progress",.3+1/this._data.toLoads.length*.6),this._loadImage(this._data.toLoads.pop());var l=this._data.frames,c=this._url.split("?")[0],u=this._data.meta&&this._data.meta.prefix?this._data.meta.prefix:c.substring(0,c.lastIndexOf("."))+"/",_=this._data.pics,d=Y.formatURL(this._url),f=S.atlasMap[d]||(S.atlasMap[d]=[]);f.dir=u;var p=1;if(this._data.meta&&this._data.meta.scale&&1!=this._data.meta.scale)for(var g in p=parseFloat(this._data.meta.scale),l){var m,v=l[g],y=_[v.frame.idx?v.frame.idx:0],w=Y.formatURL(u+g);y.scaleRate=p,m=Dt.create(y,v.frame.x,v.frame.y,v.frame.w,v.frame.h,v.spriteSourceSize.x,v.spriteSourceSize.y,v.sourceSize.w,v.sourceSize.h),S.cacheRes(w,m),m.url=w,f.push(w)}else for(g in l)y=_[(v=l[g]).frame.idx?v.frame.idx:0],w=Y.formatURL(u+g),S.cacheRes(w,Dt.create(y,v.frame.x,v.frame.y,v.frame.w,v.frame.h,v.spriteSourceSize.x,v.spriteSourceSize.y,v.sourceSize.w,v.sourceSize.h)),S.loadedMap[w].url=w,f.push(w);delete this._data.pics,this.complete(this._data)}else if("font"==e){if(!t.src)return this._data=t,this.event("progress",.5),this._loadImage(this._url.replace(".fnt",".png"));var x=new P;x.parseFont(this._data,t);var T=this._url.split(".fnt")[0].split("/"),b=T[T.length-1];Gt.registerBitmapFont(b,x),this._data=x,this.complete(this._data)}else if("pkm"==e){var C=Vt.create(t,this._url),M=new Dt(C);M.url=this._url,this.complete(M)}else this.complete(t)},e.parsePLFData=function(t){var e,i,n;for(e in t)switch(n=t[e],e){case"json":case"text":for(i in n)S.preLoadedMap[Y.formatURL(i)]=n[i];break;default:for(i in n)S.preLoadedMap[Y.formatURL(i)]=n[i]}},e.complete=function(t){this._data=t,this._customParse?this.event("loaded",t instanceof Array?[t]:t):(S._loaders.push(this),S._isWorking||S.checkNext())},e.endLoad=function(t){t&&(this._data=t),this._cache&&S.cacheRes(this._url,this._data),this.event("progress",1),this.event("complete",this.data instanceof Array?[this.data]:this.data)},c(0,e,"url",function(){return this._url}),c(0,e,"data",function(){return this._data}),c(0,e,"cache",function(){return this._cache}),c(0,e,"type",function(){return this._type}),S.checkNext=function(){S._isWorking=!0;for(var t=Q.now();S._startIndex<S._loaders.length;)if(Q.now(),S._loaders[S._startIndex].endLoad(),S._startIndex++,Q.now()-t>S.maxTimeOut)return console.warn("loader callback cost a long time:"+(Q.now()-t)+" url="+S._loaders[S._startIndex-1].url),void b.timer.frameOnce(1,null,S.checkNext);S._loaders.length=0,S._startIndex=0,S._isWorking=!1},S.clearRes=function(t,e){void 0===e&&(e=!1),t=Y.formatURL(t);var i=S.getAtlas(t);if(i){for(var n=0,s=i.length;n<s;n++){var r=i[n],o=S.getRes(r);delete S.loadedMap[r],o&&o.destroy(e)}i.length=0,delete S.atlasMap[t],delete S.loadedMap[t]}else{var a=S.loadedMap[t];a&&(delete S.loadedMap[t],a instanceof laya.resource.Texture&&a.bitmap&&a.destroy(e))}},S.clearTextureRes=function(t){t=Y.formatURL(t);var e=laya.net.Loader.getAtlas(t),i=e&&0<e.length?laya.net.Loader.getRes(e[0]):laya.net.Loader.getRes(t);i&&i.bitmap&&(X.isConchApp&&!X.isConchWebGL?i.bitmap.source.releaseTexture&&i.bitmap.source.releaseTexture():null==i.bitmap._atlaser&&i.bitmap.releaseResource(!0))},S.getRes=function(t){return S.loadedMap[Y.formatURL(t)]},S.getAtlas=function(t){return S.atlasMap[Y.formatURL(t)]},S.cacheRes=function(t,e){t=Y.formatURL(t),null!=S.loadedMap[t]?console.warn("Resources already exist,is repeated loading:",t):S.loadedMap[t]=e},S.setGroup=function(t,e){S.groupMap[e]||(S.groupMap[e]=[]),S.groupMap[e].push(t)},S.clearResByGroup=function(t){if(S.groupMap[t]){var e=S.groupMap[t],i=0,n=e.length;for(i=0;i<n;i++)S.clearRes(e[i]);e.length=0}},S.TEXT="text",S.JSON="json",S.XML="xml",S.BUFFER="arraybuffer",S.IMAGE="image",S.SOUND="sound",S.ATLAS="atlas",S.FONT="font",S.TTF="ttf",S.PLF="plf",S.PKM="pkm",S.typeMap={png:"image",jpg:"image",jpeg:"image",txt:"text",json:"json",xml:"xml",als:"atlas",atlas:"atlas",mp3:"sound",ogg:"sound",wav:"sound",part:"json",fnt:"font",pkm:"pkm",ttf:"ttf",plf:"plf",ani:"json",sk:"arraybuffer"},S.parserMap={},S.groupMap={},S.maxTimeOut=100,S.loadedMap={},S.preLoadedMap={},S.atlasMap={},S._loaders=[],S._isWorking=!1,S._startIndex=0,S.imgCache={},S}(),Lt=function(t){var _;function d(){this.retryNum=1,this.retryDelay=0,this.maxLoader=5,this._loaders=[],this._loaderCount=0,this._resInfos=[],this._infoPool=[],this._maxPriority=5,this._failRes={},d.__super.call(this);for(var t=0;t<this._maxPriority;t++)this._resInfos[t]=[]}p(d,"laya.net.LoaderManager",l);var e=d.prototype;return e.create=function(t,i,e,n,s,r,o,a){if(void 0===r&&(r=1),void 0===o&&(o=!0),t instanceof Array){var h=t,l=h.length,c=0;if(e)var u=v.create(e.caller,e.method,e.args,!1);for(var _=0;_<l;_++){var d=h[_];"string"==typeof d&&(d=h[_]={url:d}),d.progress=0}for(_=0;_<l;_++){d=h[_];var f=e?v.create(null,m,[d],!1):null,p=e||i?v.create(null,g,[d]):null;this._create(d.url,p,f,d.clas||n,d.params||s,d.priority||r,o,d.group||a)}function g(t,e){c++,t.progress=1,c===l&&i&&i.run()}function m(t,e){t.progress=e;for(var i=0,n=0;n<l;n++){i+=h[n].progress}var s=i/l;u.runWith(s)}return!0}return this._create(t,i,e,n,s,r,o,a)},e._create=function(e,i,t,n,s,r,o,a){void 0===r&&(r=1),void 0===o&&(o=!0);var h=Y.formatURL(e),l=this.getRes(h);if(l)!l.hasOwnProperty("loaded")||l.loaded?(t&&t.runWith(1),i&&i.run()):i&&b.loader._createListener(e,i.caller,i.method,i.args,!0,!1);else{var c=vt.getFileExtension(e),u=d.createMap[c];if(!u)throw new Error("LoaderManager:unknown file("+e+") extension with: "+c+".");n||(n=u[0]);var _=u[1];if("atlas"==c)this.load(e,i,t,_,r,o);else{n===Dt&&(_="htmlimage"),(l=n?new n:null).hasOwnProperty("_loaded")&&(l._loaded=!1),l._setUrl(e),a&&l._setGroup(a),this._createLoad(l,e,v.create(null,function(t){l&&!l.destroyed&&t&&l.onAsynLoaded.call(l,e,t,s),i&&i.run();b.loader.event(e)}),t,_,r,!1,a,!0),o&&this.cacheRes(h,l)}}return l},e.load=function(t,e,i,n,s,r,o,a){var h=this;if(void 0===s&&(s=1),void 0===r&&(r=!0),void 0===a&&(a=!1),t instanceof Array)return this._loadAssets(t,e,i,n,s,r,o);var l=It.getRes(t);if(null!=l)b.timer.frameOnce(1,null,function(){i&&i.runWith(1),e&&e.runWith(l),h._loaderCount||h.event("complete")});else{var c=d._resMap[t];c?(e&&c._createListener("complete",e.caller,e.method,e.args,!1,!1),i&&c._createListener("progress",i.caller,i.method,i.args,!1,!1)):((c=this._infoPool.length?this._infoPool.pop():new _).url=t,c.type=n,c.cache=r,c.group=o,c.ignoreCache=a,e&&c.on("complete",e.caller,e.method,e.args),i&&c.on("progress",i.caller,i.method,i.args),d._resMap[t]=c,s=s<this._maxPriority?s:this._maxPriority-1,this._resInfos[s].push(c),this._next())}return this},e._createLoad=function(t,e,i,n,s,r,o,a,h){var l=this;if(void 0===r&&(r=1),void 0===o&&(o=!0),void 0===h&&(h=!1),e instanceof Array)return this._loadAssets(e,i,n,s,r,o,a);var c=It.getRes(e);if(null!=c)b.timer.frameOnce(1,null,function(){n&&n.runWith(1),i&&i.runWith(c),l._loaderCount||l.event("complete")});else{var u=d._resMap[e];u?(i&&u._createListener("complete",i.caller,i.method,i.args,!1,!1),n&&u._createListener("progress",n.caller,n.method,n.args,!1,!1)):((u=this._infoPool.length?this._infoPool.pop():new _).url=e,u.clas=t,u.type=s,u.cache=o,u.group=a,u.ignoreCache=h,i&&u.on("complete",i.caller,i.method,i.args),n&&u.on("progress",n.caller,n.method,n.args),d._resMap[e]=u,r=r<this._maxPriority?r:this._maxPriority-1,this._resInfos[r].push(u),this._next())}return this},e._next=function(){if(!(this._loaderCount>=this.maxLoader)){for(var t=0;t<this._maxPriority;t++)for(var e=this._resInfos[t];0<e.length;){var i=e.shift();if(i)return this._doLoad(i)}this._loaderCount||this.event("complete")}},e._doLoad=function(e){this._loaderCount++;var i=this._loaders.length?this._loaders.pop():new It;i.on("complete",null,s),i.on("progress",null,function(t){e.event("progress",t)}),i.on("error",null,function(t){s(null)});var n=this;function s(t){i.offAll(),i._data=null,i._customParse=!1,n._loaders.push(i),n._endLoad(e,t instanceof Array?[t]:t),n._loaderCount--,n._next()}i._class=e.clas,i.load(e.url,e.type,e.cache,e.group,e.ignoreCache)},e._endLoad=function(t,e){var i=t.url;if(null==e){var n=this._failRes[i]||0;if(n<this.retryNum)return console.warn("[warn]Retry to load:",i),this._failRes[i]=n+1,void b.timer.once(this.retryDelay,this,this._addReTry,[t],!1);console.warn("[error]Failed to load:",i),this.event("error",i)}this._failRes[i]&&(this._failRes[i]=0),delete d._resMap[i],t.event("complete",e),t.offAll(),this._infoPool.push(t)},e._addReTry=function(t){this._resInfos[this._maxPriority-1].push(t),this._next()},e.clearRes=function(t,e){void 0===e&&(e=!1),It.clearRes(t,e)},e.getRes=function(t){return It.getRes(t)},e.cacheRes=function(t,e){It.cacheRes(t,e)},e.clearTextureRes=function(t){It.clearTextureRes(t)},e.setGroup=function(t,e){It.setGroup(t,e)},e.clearResByGroup=function(t){It.clearResByGroup(t)},e.clearUnLoaded=function(){for(var t=0;t<this._maxPriority;t++){for(var e=this._resInfos[t],i=e.length-1;-1<i;i--){var n=e[i];n&&(n.offAll(),this._infoPool.push(n))}e.length=0}this._loaderCount=0,d._resMap={}},e.cancelLoadByUrls=function(t){if(t)for(var e=0,i=t.length;e<i;e++)this.cancelLoadByUrl(t[e])},e.cancelLoadByUrl=function(t){for(var e=0;e<this._maxPriority;e++)for(var i=this._resInfos[e],n=i.length-1;-1<n;n--){var s=i[n];s&&s.url===t&&(i[n]=null,s.offAll(),this._infoPool.push(s))}d._resMap[t]&&delete d._resMap[t]},e._loadAssets=function(t,i,o,e,n,s,r){void 0===n&&(n=1),void 0===s&&(s=!0);for(var a=t.length,h=0,l=0,c=[],u=!0,_=0;_<a;_++){var d=t[_];"string"==typeof d&&(d={url:d,type:e,size:1,priority:n}),d.size||(d.size=1),d.progress=0,l+=d.size,c.push(d);var f=o?v.create(null,m,[d],!1):null,p=i||o?v.create(null,g,[d]):null;this.load(d.url,p,f,d.type,d.priority||1,s,d.group||r)}function g(t,e){h++,t.progress=1,e||(u=!1),h===a&&i&&i.runWith(u)}function m(t,e){if(null!=o){t.progress=e;for(var i=0,n=0;n<c.length;n++){var s=c[n];i+=s.size*s.progress}var r=i/l;o.runWith(r)}}return this},d.cacheRes=function(t,e){It.cacheRes(t,e)},d._resMap={},h(d,["createMap",function(){return this.createMap={atlas:[null,"atlas"]}}]),d.__init$=function(){function t(){this.url=null,this.type=null,this.cache=!1,this.group=null,this.ignoreCache=!1,this.clas=null,t.__super.call(this)}p(t,"",l),_=t},d}(),Rt=(function(t){function s(t){s.__super.call(this),t||(t=[.3,.59,.11,0,0,.3,.59,.11,0,0,.3,.59,.11,0,0,0,0,0,1,0]),this._mat=new Float32Array(16),this._alpha=new Float32Array(4);for(var e=0,i=0,n=0;n<20;n++)n%5!=4?this._mat[e++]=t[n]:this._alpha[i++]=t[n];this._action=A.createFilterAction(32),this._action.data=this}p(s,"laya.filters.ColorFilter",C);var e=s.prototype;b.imps(e,{"laya.filters.IFilter":!0}),e.callNative=function(t){t._$P.cf=this;t.conchModel&&t.conchModel.setFilterMatrix&&t.conchModel.setFilterMatrix(this._mat,this._alpha)},c(0,e,"type",function(){return 32}),c(0,e,"action",function(){return this._action})}(),function(t){function n(t,e,i){this._endian=null,this._stamp=NaN,this._socket=null,this._connected=!1,this._addInputPosition=0,this._input=null,this._output=null,this.timeout=0,this.objectEncoding=0,this.disableInput=!1,this._byteClass=null,this.protocols=[],void 0===e&&(e=0),n.__super.call(this),this._byteClass=i||Z,this.endian="bigEndian",this.timeout=2e4,this._addInputPosition=0,t&&0<e&&e<65535&&this.connect(t,e)}p(n,"laya.net.Socket",l);var e=n.prototype;e.connect=function(t,e){var i="ws://"+t+":"+e;i="https:"==Q.window.location.protocol?"wss://"+t+":"+e:"ws://"+t+":"+e,this.connectByUrl(i)},e.connectByUrl=function(t){var e=this;null!=this._socket&&this.close(),this._socket&&this.cleanSocket(),this.protocols&&0!=this.protocols.length?this._socket=new Q.window.WebSocket(t,this.protocols):this._socket=new Q.window.WebSocket(t),this._socket.binaryType="arraybuffer",this._output=new this._byteClass,this._output.endian=this.endian,this._input=new this._byteClass,this._input.endian=this.endian,this._addInputPosition=0,this._socket.onopen=function(t){e._onOpen(t)},this._socket.onmessage=function(t){e._onMessage(t)},this._socket.onclose=function(t){e._onClose(t)},this._socket.onerror=function(t){e._onError(t)}},e.cleanSocket=function(){try{this._socket.close()}catch(t){}this._connected=!1,this._socket.onopen=null,this._socket.onmessage=null,this._socket.onclose=null,this._socket.onerror=null,this._socket=null},e.close=function(){if(null!=this._socket)try{this._socket.close()}catch(t){}},e._onOpen=function(t){this._connected=!0,this.event("open",t)},e._onMessage=function(t){if(t&&t.data){var e=t.data;if(this.disableInput&&e)this.event("message",e);else{0<this._input.length&&this._input.bytesAvailable<1&&(this._input.clear(),this._addInputPosition=0);var i=this._input.pos;this._addInputPosition||(this._addInputPosition=0),this._input.pos=this._addInputPosition,e&&("string"==typeof e?this._input.writeUTFBytes(e):this._input.writeArrayBuffer(e),this._addInputPosition=this._input.pos,this._input.pos=i),this.event("message",e)}}},e._onClose=function(t){this._connected=!1,this.event("close",t)},e._onError=function(t){this.event("error",t)},e.send=function(t){this._socket.send(t)},e.flush=function(){if(this._output&&0<this._output.length){var e;try{this._socket&&this._socket.send(this._output.__getBuffer().slice(0,this._output.length))}catch(t){e=t}this._output.endian=this.endian,this._output.clear(),e&&this.event("error",e)}},c(0,e,"input",function(){return this._input}),c(0,e,"output",function(){return this._output}),c(0,e,"connected",function(){return this._connected}),c(0,e,"endian",function(){return this._endian},function(t){this._endian=t,null!=this._input&&(this._input.endian=t),null!=this._output&&(this._output.endian=t)}),n.LITTLE_ENDIAN="littleEndian",n.BIG_ENDIAN="bigEndian"}(),function(t){function s(){this.worker=null,s.__super.call(this);var e=this;this.worker=new Q.window.Worker(s.workerPath),this.worker.onmessage=function(t){e.workerMessage(t.data)}}p(s,"laya.net.WorkerLoader",l);var e=s.prototype;e.workerMessage=function(t){if(t)switch(t.type){case"Image":this.imageLoaded(t);break;case"Msg":this.event("image_msg",t.msg)}},e.imageLoaded=function(t){if(t&&t.buffer&&t.buffer.length<10)return s._enable=!1,this._myTrace("buffer lost when postmessage ,disable workerloader"),this.event(t.url,null),void this.event("image_err",t.url+"\n"+t.msg);if(!t.dataType)return this.event(t.url,null),void this.event("image_err",t.url+"\n"+t.msg);var e,i,n;switch(t.dataType){case"buffer":(n=(i=(e=new Ht("2D")).source.getContext("2d")).createImageData(t.width,t.height)).data.set(t.buffer),e.size(n.width,n.height),i.putImageData(n,0,0),e.memorySize=0;break;case"imagedata":i=(e=new Ht("2D")).source.getContext("2d"),n=t.imagedata,e.size(n.width,n.height),i.putImageData(n,0,0),n=t.imagedata,e.memorySize=0;break;case"imageBitmap":n=t.imageBitmap,X.isWebGL?e=n:(i=(e=new Ht("2D")).source.getContext("2d"),e.size(n.width,n.height),i.drawImage(n,0,0),e.src=t.url)}X.isWebGL&&(e=new laya.webgl.resource.WebGLImage(e,t.url)),this.event(t.url,e)},e._myTrace=function(t){var e=arguments,i=[],n=0,s=e.length;for(n=0;n<s;n++)i.push(e[n]);this.event("image_msg",i.join(" "))},e.loadImage=function(t){var e;(e={type:"load"}).url=t,this.worker.postMessage(e)},e._loadImage=function(e){var i=this;if(!s._enable||e.toLowerCase().indexOf(".png")<0)s._preLoadFun.call(i,e);else{e=Y.formatURL(e);var n=function(t){laya.net.WorkerLoader.I.off(e,i,n),t?i.onLoaded(t):s._preLoadFun.call(i,e)};laya.net.WorkerLoader.I.on(e,i,n),laya.net.WorkerLoader.I.loadImage(e)}},c(1,s,"enable",function(){return s._enable},function(t){s.disableJSDecode&&!Q.window.createImageBitmap||(s._enable=t)&&null==s._preLoadFun&&(s._enable=s.__init__())}),s.__init__=function(){return null==s._preLoadFun&&(!!Q.window.Worker&&(s._preLoadFun=It.prototype._loadImage,It.prototype._loadImage=s.prototype._loadImage,s.I||(s.I=new s),!0))},s.workerSupported=function(){return!!Q.window.Worker},s.IMAGE_LOADED="image_loaded",s.IMAGE_ERR="image_err",s.IMAGE_MSG="image_msg",s.I=null,s._preLoadFun=null,s._enable=!1,s.workerPath="libs/worker.js",s.disableJSDecode=!0}(),function(t){function a(){a.__super.call(this),this._$1__id=++a._uniqueIDCounter,this.__loaded=!0,this._destroyed=!1,this._referenceCount=0,(a._idResourcesMap[this.id]=this)._released=!0,this.lock=!1,this._memorySize=0,this._lastUseFrameCount=-1,K.currentResourceManager&&K.currentResourceManager.addResource(this)}p(a,"laya.resource.Resource",l);var e=a.prototype;return b.imps(e,{"laya.resource.ICreateResource":!0,"laya.resource.IDispose":!0}),e._setUrl=function(t){var e;this._url!==t&&(this._url&&((e=a._urlResourcesMap[this._url]).splice(e.indexOf(this),1),0===e.length&&delete a._urlResourcesMap[this._url]),t&&((e=a._urlResourcesMap[t])||(a._urlResourcesMap[t]=e=[]),e.push(this)),this._url=t)},e._getGroup=function(){return this._group},e._setGroup=function(t){var e;this._group!==t&&(this._group&&((e=a._groupResourcesMap[this._group]).splice(e.indexOf(this),1),0===e.length&&delete a._groupResourcesMap[this._group]),t&&((e=a._groupResourcesMap[t])||(a._groupResourcesMap[t]=e=[]),e.push(this)),this._group=t)},e._addReference=function(){this._referenceCount++},e._removeReference=function(){this._referenceCount--},e._clearReference=function(){this._referenceCount=0},e._endLoaded=function(){this.__loaded=!0,this.event("loaded",this)},e.recreateResource=function(){this.completeCreate()},e.disposeResource=function(){},e.activeResource=function(t){void 0===t&&(t=!1),this._lastUseFrameCount=ft.loopCount,!this._destroyed&&this.__loaded&&(this._released||t)&&this.recreateResource()},e.releaseResource=function(t){return void 0===t&&(t=!1),!(!t&&this.lock)&&(!(this._released&&!t)&&(this.disposeResource(),this._released=!0,this._lastUseFrameCount=-1,this.event("released",this),!0))},e.onAsynLoaded=function(t,e,i){throw new Error("Resource: must override this function!")},e.destroy=function(){var t;this._destroyed||(null!==this._resourceManager&&this._resourceManager.removeResource(this),this._destroyed=!0,this.lock=!1,this.releaseResource(),delete a._idResourcesMap[this.id],this._url&&((t=a._urlResourcesMap[this._url])&&(t.splice(t.indexOf(this),1),0===t.length&&delete a._urlResourcesMap[this.url]),It.clearRes(this._url),this.__loaded||A.cancelLoadByUrl(this._url)),this._group&&((t=a._groupResourcesMap[this._group]).splice(t.indexOf(this),1),0===t.length&&delete a._groupResourcesMap[this.url]))},e.completeCreate=function(){this._released=!1,this.event("recovered",this)},e.dispose=function(){this.destroy()},c(0,e,"memorySize",function(){return this._memorySize},function(t){var e=t-this._memorySize;this._memorySize=t,this.resourceManager&&this.resourceManager.addSize(e)}),c(0,e,"_loaded",null,function(t){this.__loaded=t}),c(0,e,"loaded",function(){return this.__loaded}),c(0,e,"id",function(){return this._$1__id}),c(0,e,"destroyed",function(){return this._destroyed}),c(0,e,"group",function(){return this._getGroup()},function(t){this._setGroup(t)}),c(0,e,"resourceManager",function(){return this._resourceManager}),c(0,e,"url",function(){return this._url}),c(0,e,"released",function(){return this._released}),c(0,e,"referenceCount",function(){return this._referenceCount}),a.getResourceByID=function(t){return a._idResourcesMap[t]},a.getResourceByURL=function(t,e){return void 0===e&&(e=0),a._urlResourcesMap[t][e]},a.getResourceCountByURL=function(t){return a._urlResourcesMap[t].length},a.destroyUnusedResources=function(t){var e;if(t){var i=a._groupResourcesMap[t];if(i)for(var n=i.slice(),s=0,r=n.length;s<r;s++)(e=n[s]).lock||0!==e._referenceCount||e.destroy()}else for(var o in a._idResourcesMap)(e=a._idResourcesMap[o]).lock||0!==e._referenceCount||e.destroy()},a._uniqueIDCounter=0,a._idResourcesMap={},a._urlResourcesMap={},a._groupResourcesMap={},a}()),Dt=function(t){function S(t,e){this.offsetX=0,this.offsetY=0,this.sourceWidth=0,this.sourceHeight=0,this._w=0,this._h=0,this._uvID=0,this._atlasID=-1,this.scaleRate=1,S.__super.call(this),t&&null!=t._addReference&&t._addReference(),this.setTo(t,e)}p(S,"laya.resource.Texture",l);var e=S.prototype;return e._setUrl=function(t){this.url=t},e.setTo=function(t,e){if(t instanceof r.HTMLElement){var i=Ht.create("2D",t);this.bitmap=i}else this.bitmap=t;if(this.uv=e||S.DEF_UV,t){this._w=t.width,this._h=t.height,this.sourceWidth=this.sourceWidth||this._w,this.sourceHeight=this.sourceHeight||this._h,this._loaded=0<this._w;var n=this;if(this._loaded)A.addToAtlas&&A.addToAtlas(n);else{var s=t;s instanceof laya.resource.HTMLImage&&s.image&&s.image.addEventListener("load",function(t){A.addToAtlas&&A.addToAtlas(n)},!1)}}},e.active=function(){this.bitmap&&this.bitmap.activeResource()},e.destroy=function(t){if(void 0===t&&(t=!1),this.bitmap&&0<this.bitmap.referenceCount){var e=this.bitmap;t?(X.isConchApp&&e.source&&e.source.conchDestroy&&this.bitmap.source.conchDestroy(),this.bitmap=null,e.dispose(),e._clearReference()):(e._removeReference(),0==e.referenceCount&&(X.isConchApp&&e.source&&e.source.conchDestroy&&this.bitmap.source.conchDestroy(),this.bitmap=null,e.dispose())),this.url&&this===b.loader.getRes(this.url)&&b.loader.clearRes(this.url,t),this._loaded=!1}},e.load=function(t){var e=this;this._loaded=!1,t=Y.customFormat(t);var i=this.bitmap||(this.bitmap=Vt.create(t));i&&i._addReference();var n=this;i.onload=function(){i.onload=null,n._loaded=!0,e.sourceWidth=e._w=i.width,e.sourceHeight=e._h=i.height,n.event("loaded",this),A.addToAtlas&&A.addToAtlas(n)}},e.addTextureToAtlas=function(t){A.addTextureToAtlas(this)},e.getPixels=function(t,e,i,n){if(X.isConchApp){var s=this.bitmap;if(s.source&&s.source.getImageData){var r=s.source.getImageData(t,e,i,n),o=new Uint8Array(r);return Array.from(o)}return null}return X.isWebGL?A.getTexturePixels(this,t,e,i,n):(Q.canvas.size(i,n),Q.canvas.clear(),Q.context.drawTexture(this,-t,-e,this.width,this.height,0,0),Q.context.getImageData(0,0,i,n).data)},e.onAsynLoaded=function(t,e){e&&e._addReference(),this.setTo(e,this.uv)},c(0,e,"source",function(){return this.bitmap?(this.bitmap.activeResource(),this.bitmap.source):null}),c(0,e,"loaded",function(){return this._loaded}),c(0,e,"released",function(){return!this.bitmap||this.bitmap.released}),c(0,e,"width",function(){return this._w?this._w:this.uv&&this.uv!==S.DEF_UV?(this.uv[2]-this.uv[0])*this.bitmap.width:this.bitmap.width},function(t){this._w=t,this.sourceWidth||(this.sourceWidth=t)}),c(0,e,"repeat",function(){return!X.isWebGL||!this.bitmap||this.bitmap.repeat},function(t){t&&X.isWebGL&&this.bitmap&&(this.bitmap.repeat=t)&&(this.bitmap.enableMerageInAtlas=!1)}),c(0,e,"height",function(){return this._h?this._h:this.uv&&this.uv!==S.DEF_UV?(this.uv[5]-this.uv[1])*this.bitmap.height:this.bitmap.height},function(t){this._h=t,this.sourceHeight||(this.sourceHeight=t)}),c(0,e,"isLinearSampling",function(){return!X.isWebGL||9728!=this.bitmap.minFifter},function(t){!t&&X.isWebGL&&(t||-1!=this.bitmap.minFifter||-1!=this.bitmap.magFifter||(this.bitmap.minFifter=9728,this.bitmap.magFifter=9728,this.bitmap.enableMerageInAtlas=!1))}),S.moveUV=function(t,e,i){for(var n=0;n<8;n+=2)i[n]+=t,i[n+1]+=e;return i},S.create=function(t,e,i,n,s,r,o,a,h){void 0===r&&(r=0),void 0===o&&(o=0),void 0===a&&(a=0),void 0===h&&(h=0);var l=t instanceof laya.resource.Texture,c=l?t.uv:S.DEF_UV,u=l?t.bitmap:t,_=A.isAtlas(u);if(_){var d=u._atlaser,f=t._atlasID;if(-1==f)throw new Error("create texture error");u=d._inAtlasTextureBitmapValue[f],c=d._inAtlasTextureOriUVValue[f]}var p=new S(u,null);u.width&&e+n>u.width&&(n=u.width-e),u.height&&i+s>u.height&&(s=u.height-i),p.width=n,p.height=s,p.offsetX=r,p.offsetY=o,p.sourceWidth=a||n,p.sourceHeight=h||s;var g=1/u.width,m=1/u.height;e*=g,i*=m,n*=g,s*=m;var v=p.uv[0],y=p.uv[1],w=p.uv[4],x=p.uv[5],T=w-v,b=x-y,C=S.moveUV(c[0],c[1],[e,i,e+n,i,e+n,i+s,e,i+s]);p.uv=[v+C[0]*T,y+C[1]*b,w-(1-C[2])*T,y+C[3]*b,w-(1-C[4])*T,x-(1-C[5])*b,v+C[6]*T,x-(1-C[7])*b],_&&p.addTextureToAtlas();var M=u.scaleRate;return M&&1!=M?(p.sourceWidth/=M,p.sourceHeight/=M,p.width/=M,p.height/=M,p.scaleRate=M,p.offsetX/=M,p.offsetY/=M):p.scaleRate=1,p},S.createFromTexture=function(t,e,i,n,s){var r=t.scaleRate;1!=r&&(e*=r,i*=r,n*=r,s*=r);var o=O.TEMP.setTo(e-t.offsetX,i-t.offsetY,n,s),a=o.intersection(S._rect1.setTo(0,0,t.width,t.height),S._rect2);if(!a)return null;var h=S.create(t,a.x,a.y,a.width,a.height,a.x-o.x,a.y-o.y,n,s);return h.bitmap._removeReference(),h},S.DEF_UV=[0,0,1,0,1,1,0,1],S.INV_UV=[0,1,1,1,1,0,0,0],S._rect1=new O,S._rect2=new O,S}(),Ft=function(t){var a;function r(){this._labelDic=null,this._tweenDic={},this._tweenDataList=[],this._endTweenDataList=null,this._currTime=0,this._lastTime=0,this._startTime=0,this._index=0,this._gidIndex=0,this._firstTweenDic={},this._startTimeSort=!1,this._endTimeSort=!1,this._loopKey=!1,this.scale=1,this._frameRate=60,this._frameIndex=0,this._total=0,r.__super.call(this)}p(r,"laya.utils.TimeLine",l);var e=r.prototype;return e.to=function(t,e,i,n,s){return void 0===s&&(s=0),this._create(t,e,i,n,s,!0)},e.from=function(t,e,i,n,s){return void 0===s&&(s=0),this._create(t,e,i,n,s,!1)},e._create=function(t,e,i,n,s,r){var o=_t.getItemByClass("tweenData",a);return o.isTo=r,o.type=0,o.target=t,o.duration=i,o.data=e,o.startTime=this._startTime+s,o.endTime=o.startTime+o.duration,o.ease=n,this._startTime=Math.max(o.endTime,this._startTime),this._tweenDataList.push(o),this._startTimeSort=!0,this._endTimeSort=!0,this},e.addLabel=function(t,e){var i=_t.getItemByClass("tweenData",a);return i.type=1,i.data=t,i.endTime=i.startTime=this._startTime+e,this._labelDic||(this._labelDic={}),this._labelDic[t]=i,this._tweenDataList.push(i),this},e.removeLabel=function(t){if(this._labelDic&&this._labelDic[t]){var e=this._labelDic[t];if(e){var i=this._tweenDataList.indexOf(e);-1<i&&this._tweenDataList.splice(i,1)}delete this._labelDic[t]}},e.gotoTime=function(t){if(null!=this._tweenDataList&&0!=this._tweenDataList.length){var e,i,n,s;for(var r in this._firstTweenDic)if(i=this._firstTweenDic[r])for(var o in i)i.diyTarget.hasOwnProperty(o)&&(i.diyTarget[o]=i[o]);for(r in this._tweenDic)(e=this._tweenDic[r]).clear(),delete this._tweenDic[r];if(this._index=0,this._gidIndex=0,this._currTime=t,this._lastTime=Q.now(),null==this._endTweenDataList||this._endTimeSort){this._endTimeSort=!1,this._endTweenDataList=n=this._tweenDataList.concat(),n.sort(function(t,e){return t.endTime>e.endTime?1:t.endTime<e.endTime?-1:0})}else n=this._endTweenDataList;for(var a=0,h=n.length;a<h;a++)if(0==(s=n[a]).type){if(!(t>=s.endTime))break;this._index=Math.max(this._index,a+1);var l=s.data;if(s.isTo)for(var c in l)s.target[c]=l[c]}for(a=0,h=this._tweenDataList.length;a<h;a++)0==(s=this._tweenDataList[a]).type&&t>=s.startTime&&t<s.endTime&&(this._index=Math.max(this._index,a+1),this._gidIndex++,(e=_t.getItemByClass("tween",mt))._create(s.target,s.data,s.duration,s.ease,v.create(this,this._animComplete,[this._gidIndex]),0,!1,s.isTo,!0,!1),e.setStartTime(this._currTime-(t-s.startTime)),e._updateEase(this._currTime),e.gid=this._gidIndex,this._tweenDic[this._gidIndex]=e)}},e.gotoLabel=function(t){if(null!=this._labelDic){var e=this._labelDic[t];e&&this.gotoTime(e.startTime)}},e.pause=function(){b.timer.clear(this,this._update)},e.resume=function(){this.play(this._currTime,this._loopKey)},e.play=function(t,e){if(void 0===t&&(t=0),void 0===e&&(e=!1),this._tweenDataList){if(this._startTimeSort){this._startTimeSort=!1,this._tweenDataList.sort(function(t,e){return t.startTime>e.startTime?1:t.startTime<e.startTime?-1:0});for(var i=0,n=this._tweenDataList.length;i<n;i++){var s=this._tweenDataList[i];if(null!=s&&0==s.type){var r=s.target,o=r.$_GID||(r.$_GID=vt.getGID()),a=null;for(var h in null==this._firstTweenDic[o]?((a={}).diyTarget=r,this._firstTweenDic[o]=a):a=this._firstTweenDic[o],s.data)null==a[h]&&(a[h]=r[h])}}}"string"==typeof t?this.gotoLabel(t):this.gotoTime(t),this._loopKey=e,this._lastTime=Q.now(),b.timer.frameLoop(1,this,this._update)}},e._update=function(){if(this._currTime>=this._startTime){if(!this._loopKey){for(var t in this._tweenDic)(e=this._tweenDic[t]).complete();return this._complete(),void this.pause()}if(this._complete(),!this._tweenDataList)return;this.gotoTime(0)}var e,i=Q.now(),n=i-this._lastTime,s=this._currTime+=n*this.scale;for(t in this._lastTime=i,this._tweenDic)(e=this._tweenDic[t])._updateEase(s);if(0!=this._tweenDataList.length&&this._index<this._tweenDataList.length){var r=this._tweenDataList[this._index];s>=r.startTime&&(this._index++,0==r.type?(this._gidIndex++,(e=_t.getItemByClass("tween",mt))._create(r.target,r.data,r.duration,r.ease,v.create(this,this._animComplete,[this._gidIndex]),0,!1,r.isTo,!0,!1),e.setStartTime(s),e.gid=this._gidIndex,(this._tweenDic[this._gidIndex]=e)._updateEase(s)):this.event("label",r.data))}},e._animComplete=function(t){this._tweenDic[t]&&delete this._tweenDic[t]},e._complete=function(){this.event("complete")},e.reset=function(){var t;if(this._labelDic)for(t in this._labelDic)delete this._labelDic[t];for(t in this._tweenDic)this._tweenDic[t].clear(),delete this._tweenDic[t];for(t in this._firstTweenDic)delete this._firstTweenDic[t];if(this._endTweenDataList=null,this._tweenDataList&&this._tweenDataList.length){var e,i=0;for(e=this._tweenDataList.length,i=0;i<e;i++)this._tweenDataList[i]&&this._tweenDataList[i].destroy()}this._tweenDataList.length=0,this._currTime=0,this._lastTime=0,this._startTime=0,this._index=0,this._gidIndex=0,this.scale=1,b.timer.clear(this,this._update)},e.destroy=function(){this.reset(),this._labelDic=null,this._tweenDic=null,this._tweenDataList=null,this._firstTweenDic=null},c(0,e,"index",function(){return this._frameIndex},function(t){this._frameIndex=t,this.gotoTime(this._frameIndex/this._frameRate*1e3)}),c(0,e,"total",function(){return this._total=Math.floor(this._startTime/1e3*this._frameRate),this._total}),r.to=function(t,e,i,n,s){return void 0===s&&(s=0),(new r).to(t,e,i,n,s)},r.from=function(t,e,i,n,s){return void 0===s&&(s=0),(new r).from(t,e,i,n,s)},r.__init$=function(){function t(){this.type=0,this.isTo=!0,this.startTime=NaN,this.endTime=NaN,this.target=null,this.duration=NaN,this.ease=null,this.data=null}p(t,""),t.prototype.destroy=function(){this.target=null,this.ease=null,this.data=null,this.isTo=!0,this.type=0,_t.recover("tweenData",this)},a=t},r}(),kt=function(s){function i(){this._transform=null,this._tfChanged=!1,this._x=0,this._y=0,this._width=0,this._height=0,this._repaint=1,this._mouseEnableState=0,this._zOrder=0,this._graphics=null,this._renderType=0,this._optimizeScrollRect=!1,this._texture=null,this.mouseThrough=!1,this.autoSize=!1,this.hitTestPrior=!1,this.viewport=null,i.__super.call(this),this._style=a.EMPTY}p(i,"laya.display.Sprite",s);var t=i.prototype;return b.imps(t,{"laya.display.ILayout":!0}),t.createConchModel=function(){return new ConchNode},t.destroy=function(t){void 0===t&&(t=!0),this._releaseMem(),s.prototype.destroy.call(this,t),this._style&&this._style.destroy(),this._transform&&this._transform.destroy(),this._transform=null,this._style=null,this._graphics=null},t.updateZOrder=function(){vt.updateOrder(this._childs)&&this.repaint()},t.reCache=function(){this._$P.cacheCanvas&&(this._$P.cacheCanvas.reCache=!0),this._repaint=1},t.setBounds=function(t){this._set$P("uBounds",t)},t.getBounds=function(){return this._$P.mBounds||this._set$P("mBounds",new O),O._getWrapRec(this._boundPointsToParent(),this._$P.mBounds)},t.getSelfBounds=function(){return this._$P.uBounds?this._$P.uBounds:(this._$P.mBounds||this._set$P("mBounds",new O),O._getWrapRec(this._getBoundPointsM(!1),this._$P.mBounds))},t._boundPointsToParent=function(t){void 0===t&&(t=!1);var e=0,i=0;this._style&&(e=this._style._tf.translateX,i=this._style._tf.translateY,t=t||0!==this._style._tf.rotate,this._style.scrollRect&&(e+=this._style.scrollRect.x,i+=this._style.scrollRect.y));var n=this._getBoundPointsM(t);if(!n||n.length<1)return n;if(8!=n.length&&(n=t?I.scanPList(n):O._getWrapRec(n,O.TEMP)._getBoundPoints()),!this.transform)return vt.transPointList(n,this._x-e,this._y-i),n;var s=k.TEMP,r=0,o=n.length;for(r=0;r<o;r+=2)s.x=n[r],s.y=n[r+1],this.toParentPoint(s),n[r]=s.x,n[r+1]=s.y;return n},t.getGraphicBounds=function(t){return void 0===t&&(t=!1),this._graphics?this._graphics.getBounds(t):O.TEMP.setTo(0,0,0,0)},t._getBoundPointsM=function(t){if(void 0===t&&(t=!1),this._$P.uBounds)return this._$P.uBounds._getBoundPoints();if(this._$P.temBM||this._set$P("temBM",[]),this.scrollRect){var e=vt.clearArray(this._$P.temBM),i=O.TEMP;return i.copyFrom(this.scrollRect),vt.concatArray(e,i._getBoundPoints()),e}for(var n,s,r,o=this._graphics?this._graphics.getBoundPoints():vt.clearArray(this._$P.temBM),a=0,h=(r=this._childs).length;a<h;a++)(n=r[a])instanceof laya.display.Sprite&&1==n.visible&&(s=n._boundPointsToParent(t))&&(o=o?vt.concatArray(o,s):s);return o},t.getStyle=function(){return this._style===a.EMPTY&&(this._style=new a),this._style},t.setStyle=function(t){this._style=t},t._adjustTransform=function(){this._tfChanged=!1;var t,e=this._style._tf,i=e.scaleX,n=e.scaleY;if(e.rotate||1!==i||1!==n||e.skewX||e.skewY){(t=this._transform||(this._transform=F.create())).bTransform=!0;var s=.0174532922222222*(e.rotate-e.skewX),r=.0174532922222222*(e.rotate+e.skewY),o=Math.cos(r),a=Math.sin(r),h=Math.sin(s),l=Math.cos(s);return t.a=i*o,t.b=i*a,t.c=-n*h,t.d=n*l,t.tx=t.ty=0,t}return this._transform&&this._transform.destroy(),this._transform=null,this._renderType&=-5,t},t.pos=function(t,e,i){if(void 0===i&&(i=!1),this._x!==t||this._y!==e){if(this.destroyed)return this;if(i){this._x=t,this._y=e,this.conchModel&&this.conchModel.pos(this._x,this._y);var n=this._parent;n&&0===n._repaint&&(n._repaint=1,n.parentRepaint()),this._$P.maskParent&&0===this._$P.maskParent._repaint&&(this._$P.maskParent._repaint=1,this._$P.maskParent.parentRepaint())}else this.x=t,this.y=e}return this},t.pivot=function(t,e){return this.pivotX=t,this.pivotY=e,this},t.size=function(t,e){return this.width=t,this.height=e,this},t.scale=function(t,e,i){void 0===i&&(i=!1);var n=this.getStyle(),s=n._tf;if(s.scaleX!=t||s.scaleY!=e){if(this.destroyed)return this;if(i){n.setScale(t,e),this._tfChanged=!0,this.conchModel&&this.conchModel.scale(t,e),this._renderType|=4;var r=this._parent;r&&0===r._repaint&&(r._repaint=1,r.parentRepaint())}else this.scaleX=t,this.scaleY=e}return this},t.skew=function(t,e){return this.skewX=t,this.skewY=e,this},t.render=function(t,e,i){ft.spriteCount++,V.renders[this._renderType]._fun(this,t,e+this._x,i+this._y),this._repaint=0},t.drawToCanvas=function(t,e,i,n){if(X.isConchNode){var s=Ht.create("2D");return new $(t,e,s).ctx.setCanvasType(1),this.conchModel.drawToCanvas(s.source,i,n),s}return A.drawToCanvas(this,this._renderType,t,e,i,n)},t.customRender=function(t,e,i){this._renderType|=1024},t._applyFilters=function(){var t;if(!X.isWebGL&&((t=this._$P.filters)&&!(t.length<1)))for(var e=0,i=t.length;e<i;e++)t[e].action.apply(this._$P.cacheCanvas)},t._isHaveGlowFilter=function(){var t,e=0;if(this.filters)for(e=0;e<this.filters.length;e++)if(8==this.filters[e].type)return!0;for(e=0,t=this._childs.length;e<t;e++)if(this._childs[e]._isHaveGlowFilter())return!0;return!1},t.localToGlobal=function(t,e){void 0===e&&(e=!1),!0===e&&(t=new k(t.x,t.y));for(var i=this;i&&i!=b.stage;)t=i.toParentPoint(t),i=i.parent;return t},t.globalToLocal=function(t,e){void 0===e&&(e=!1),e&&(t=new k(t.x,t.y));for(var i=this,n=[];i&&i!=b.stage;)n.push(i),i=i.parent;for(var s=n.length-1;0<=s;)t=(i=n[s]).fromParentPoint(t),s--;return t},t.toParentPoint=function(t){if(!t)return t;t.x-=this.pivotX,t.y-=this.pivotY,this.transform&&this._transform.transformPoint(t),t.x+=this._x,t.y+=this._y;var e=this._style.scrollRect;return e&&(t.x-=e.x,t.y-=e.y),t},t.fromParentPoint=function(t){if(!t)return t;t.x-=this._x,t.y-=this._y;var e=this._style.scrollRect;return e&&(t.x+=e.x,t.y+=e.y),this.transform&&this._transform.invertTransformPoint(t),t.x+=this.pivotX,t.y+=this.pivotY,t},t.on=function(t,e,i,n){return 1!==this._mouseEnableState&&this.isMouseEvent(t)?(this.mouseEnabled=!0,this._setBit(2,!0),this._parent&&this._$2__onDisplay(),this._createListener(t,e,i,n,!1)):s.prototype.on.call(this,t,e,i,n)},t.once=function(t,e,i,n){return 1!==this._mouseEnableState&&this.isMouseEvent(t)?(this.mouseEnabled=!0,this._setBit(2,!0),this._parent&&this._$2__onDisplay(),this._createListener(t,e,i,n,!0)):s.prototype.once.call(this,t,e,i,n)},t._$2__onDisplay=function(){if(1!==this._mouseEnableState){var t=this;for(t=t.parent;t&&1!==t._mouseEnableState&&!t._getBit(2);)t.mouseEnabled=!0,t._setBit(2,!0),t=t.parent}},t.loadImage=function(t,e,i,n,s,r){var o=this;return void 0===e&&(e=0),void 0===i&&(i=0),void 0===n&&(n=0),void 0===s&&(s=0),this.graphics.loadImage(t,e,i,n,s,function(t){o.destroyed||(o.size(e+(n||t.width),i+(s||t.height)),o.repaint(),r&&r.runWith(t))}),this},t.repaint=function(){this.conchModel&&this.conchModel.repaint&&this.conchModel.repaint(),0===this._repaint&&(this._repaint=1,this.parentRepaint()),this._$P&&this._$P.maskParent&&this._$P.maskParent.repaint()},t._needRepaint=function(){return 0!==this._repaint&&this._$P.cacheCanvas&&this._$P.cacheCanvas.reCache},t._childChanged=function(t){this._childs.length?this._renderType|=2048:this._renderType&=-2049,t&&this._get$P("hasZorder")&&b.timer.callLater(this,this.updateZOrder),this.repaint()},t.parentRepaint=function(){var t=this._parent;t&&0===t._repaint&&(t._repaint=1,t.parentRepaint())},t.startDrag=function(t,e,i,n,s,r,o){void 0===e&&(e=!1),void 0===i&&(i=0),void 0===n&&(n=300),void 0===r&&(r=!1),void 0===o&&(o=.92),this._$P.dragging||this._set$P("dragging",new ot),this._$P.dragging.start(this,t,e,i,n,s,r,o)},t.stopDrag=function(){this._$P.dragging&&this._$P.dragging.stop()},t._releaseMem=function(){if(this._$P){var t=this._$P.cacheCanvas;t&&t.ctx&&(_t.recover("RenderContext",t.ctx),t.ctx.canvas.size(0,0),t.ctx=null);var e=this._$P._filterCache;e&&(e.destroy(),e.recycle(),this._set$P("_filterCache",null)),this._$P._isHaveGlowFilter&&this._set$P("_isHaveGlowFilter",!1),this._$P._isHaveGlowFilter=null}},t._setDisplay=function(t){t||this._releaseMem(),s.prototype._setDisplay.call(this,t)},t.hitTestPoint=function(t,e){var i=this.globalToLocal(k.TEMP.setTo(t,e));return t=i.x,e=i.y,(this._$P.hitArea?this._$P.hitArea:0<this._width&&0<this._height?O.TEMP.setTo(0,0,this._width,this._height):this.getSelfBounds()).contains(t,e)},t.getMousePoint=function(){return this.globalToLocal(k.TEMP.setTo(b.stage.mouseX,b.stage.mouseY))},t._getWords=function(){return null},t._addChildsToLayout=function(n){var t=this._getWords();if(null==t&&0==this._childs.length)return!1;if(t)for(var e=0,i=t.length;e<i;e++)n.push(t[e]);return this._childs.forEach(function(t,e,i){t._style._enableLayout()&&t._addToLayout(n)}),!0},t._addToLayout=function(t){this._style.absolute||(this._style.block?t.push(this):this._addChildsToLayout(t)&&(this.x=this.y=0))},t._isChar=function(){return!1},t._getCSSStyle=function(){return this._style.getCSSStyle()},t._setAttributes=function(t,e){switch(t){case"x":this.x=parseFloat(e);break;case"y":this.y=parseFloat(e);break;case"width":this.width=parseFloat(e);break;case"height":this.height=parseFloat(e);break;default:this[t]=e}},t._layoutLater=function(){this.parent&&this.parent._layoutLater()},c(0,t,"optimizeScrollRect",function(){return this._optimizeScrollRect},function(t){this._optimizeScrollRect!=t&&(this._optimizeScrollRect=t,this.conchModel&&this.conchModel.optimizeScrollRect(t))}),c(0,t,"customRenderEnable",null,function(t){if(t&&(this._renderType|=1024,X.isConchNode)){i.CustomList.push(this);var e=new Ht("2d");e._setContext(new CanvasRenderingContext2D),this.customContext=new $(0,0,e),e.context.setCanvasType&&e.context.setCanvasType(2),this.conchModel.custom(e.context)}}),c(0,t,"cacheAsBitmap",function(){return"none"!==this.cacheAs},function(t){this.cacheAs=t?this._$P.hasFilter?"none":"normal":"none"}),c(0,t,"cacheAs",function(){return null==this._$P.cacheCanvas?"none":this._$P.cacheCanvas.type},function(t){var e=this._$P.cacheCanvas;if(t!==(e?e.type:"none")){if("none"!==t)this._getBit(1)||this._setUpNoticeType(1),e||(e=this._set$P("cacheCanvas",_t.getItemByClass("cacheCanvas",Object))),e.type=t,e.reCache=!0,this._renderType|=16,"bitmap"==t&&this.conchModel&&this.conchModel.cacheAs(1),this._set$P("cacheForFilters",!1);else if(this._$P._mask);else if(this._$P.hasFilter)this._set$P("cacheForFilters",!0);else{if(e){var i=e;i&&i.ctx&&(_t.recover("RenderContext",i.ctx),i.ctx.canvas.size(0,0),i.ctx=null),_t.recover("cacheCanvas",e)}this._$P.cacheCanvas=null,this._renderType&=-17,this.conchModel&&this.conchModel.cacheAs(0)}this.repaint()}}),c(0,t,"zOrder",function(){return this._zOrder},function(t){this._zOrder!=t&&(this._zOrder=t,this.conchModel&&this.conchModel.setZOrder&&this.conchModel.setZOrder(t),this._parent&&(t&&this._parent._set$P("hasZorder",!0),b.timer.callLater(this._parent,this.updateZOrder)))}),c(0,t,"rotation",function(){return this._style._tf.rotate},function(t){var e=this.getStyle();if(e._tf.rotate!==t){e.setRotate(t),this._tfChanged=!0,this.conchModel&&this.conchModel.rotate(t),this._renderType|=4;var i=this._parent;i&&0===i._repaint&&(i._repaint=1,i.parentRepaint())}}),c(0,t,"width",function(){return this.autoSize?this.getSelfBounds().width:this._width},function(t){this._width!==t&&(this._width=t,this.conchModel&&this.conchModel.size(t,this._height),this.repaint())}),c(0,t,"x",function(){return this._x},function(t){if(this._x!==t){if(this.destroyed)return;this._x=t,this.conchModel&&this.conchModel.pos(t,this._y);var e=this._parent;e&&0===e._repaint&&(e._repaint=1,e.parentRepaint()),this._$P.maskParent&&0===this._$P.maskParent._repaint&&(this._$P.maskParent._repaint=1,this._$P.maskParent.parentRepaint())}}),c(0,t,"globalScaleY",function(){for(var t=1,e=this;e&&e!==b.stage;)t*=e.scaleY,e=e.parent;return t}),c(0,t,"hitArea",function(){return this._$P.hitArea},function(t){this._set$P("hitArea",t)}),c(0,t,"staticCache",function(){return this._$P.staticCache},function(t){this._set$P("staticCache",t),t||this.reCache()}),c(0,t,"texture",function(){return this._texture},function(t){this._texture!=t&&(this._texture=t,this.graphics.cleanByTexture(t,0,0))}),c(0,t,"y",function(){return this._y},function(t){if(this._y!==t){if(this.destroyed)return;this._y=t,this.conchModel&&this.conchModel.pos(this._x,t);var e=this._parent;e&&0===e._repaint&&(e._repaint=1,e.parentRepaint()),this._$P.maskParent&&0===this._$P.maskParent._repaint&&(this._$P.maskParent._repaint=1,this._$P.maskParent.parentRepaint())}}),c(0,t,"height",function(){return this.autoSize?this.getSelfBounds().height:this._height},function(t){this._height!==t&&(this._height=t,this.conchModel&&this.conchModel.size(this._width,t),this.repaint())}),c(0,t,"blendMode",function(){return this._style.blendMode},function(t){this.getStyle().blendMode=t,this.conchModel&&this.conchModel.blendMode(t),t&&"source-over"!=t?this._renderType|=8:this._renderType&=-9,this.parentRepaint()}),c(0,t,"scaleX",function(){return this._style._tf.scaleX},function(t){var e=this.getStyle();if(e._tf.scaleX!==t){e.setScaleX(t),this._tfChanged=!0,this.conchModel&&this.conchModel.scale(t,e._tf.scaleY),this._renderType|=4;var i=this._parent;i&&0===i._repaint&&(i._repaint=1,i.parentRepaint())}}),c(0,t,"scaleY",function(){return this._style._tf.scaleY},function(t){var e=this.getStyle();if(e._tf.scaleY!==t){e.setScaleY(t),this._tfChanged=!0,this.conchModel&&this.conchModel.scale(e._tf.scaleX,t),this._renderType|=4;var i=this._parent;i&&0===i._repaint&&(i._repaint=1,i.parentRepaint())}}),c(0,t,"stage",function(){return b.stage}),c(0,t,"skewX",function(){return this._style._tf.skewX},function(t){var e=this.getStyle();if(e._tf.skewX!==t){e.setSkewX(t),this._tfChanged=!0,this.conchModel&&this.conchModel.skew(t,e._tf.skewY),this._renderType|=4;var i=this._parent;i&&0===i._repaint&&(i._repaint=1,i.parentRepaint())}}),c(0,t,"scrollRect",function(){return this._style.scrollRect},function(t){this.getStyle().scrollRect=t,this.repaint(),t?(this._renderType|=128,this.conchModel&&this.conchModel.scrollRect(t.x,t.y,t.width,t.height)):(this._renderType&=-129,this.conchModel&&(i.RUNTIMEVERION<"0.9.1"?this.conchModel.removeType(64):this.conchModel.removeType(128)))}),c(0,t,"skewY",function(){return this._style._tf.skewY},function(t){var e=this.getStyle();if(e._tf.skewY!==t){e.setSkewY(t),this._tfChanged=!0,this.conchModel&&this.conchModel.skew(e._tf.skewX,t),this._renderType|=4;var i=this._parent;i&&0===i._repaint&&(i._repaint=1,i.parentRepaint())}}),c(0,t,"transform",function(){return this._tfChanged?this._adjustTransform():this._transform},function(t){this._tfChanged=!1,(this._transform=t)&&(this._x=t.tx,this._y=t.ty,t.tx=t.ty=0,this.conchModel&&this.conchModel.transform(t.a,t.b,t.c,t.d,this._x,this._y)),t?this._renderType|=4:(this._renderType&=-5,this.conchModel&&this.conchModel.removeType(4)),this.parentRepaint()}),c(0,t,"pivotX",function(){return this._style._tf.translateX},function(t){this.getStyle().setTranslateX(t),this.conchModel&&this.conchModel.pivot(t,this._style._tf.translateY),this.repaint()}),c(0,t,"pivotY",function(){return this._style._tf.translateY},function(t){this.getStyle().setTranslateY(t),this.conchModel&&this.conchModel.pivot(this._style._tf.translateX,t),this.repaint()}),c(0,t,"alpha",function(){return this._style.alpha},function(t){this._style&&this._style.alpha!==t&&(t=t<0?0:1<t?1:t,this.getStyle().alpha=t,this.conchModel&&this.conchModel.alpha(t),1!==t?this._renderType|=2:this._renderType&=-3,this.parentRepaint())}),c(0,t,"visible",function(){return this._style.visible},function(t){this._style&&this._style.visible!==t&&(this.getStyle().visible=t,this.conchModel&&this.conchModel.visible(t),this.parentRepaint())}),c(0,t,"graphics",function(){return this._graphics||(this.graphics=A.createGraphics())},function(t){this._graphics&&(this._graphics._sp=null),(this._graphics=t)?(this._renderType&=-2,this._renderType|=512,(t._sp=this).conchModel&&this.conchModel.graphics(this._graphics)):(this._renderType&=-513,this._renderType&=-2,this.conchModel&&(i.RUNTIMEVERION<"0.9.1"?this.conchModel.removeType(256):this.conchModel.removeType(512))),this.repaint()}),c(0,t,"filters",function(){return this._$P.filters},function(t){t&&0===t.length&&(t=null),this._$P.filters!=t&&(this._set$P("filters",t?t.slice():null),X.isConchApp&&(this.conchModel&&(i.RUNTIMEVERION<"0.9.1"?this.conchModel.removeType(16):this.conchModel.removeType(32)),this._$P.filters&&1==this._$P.filters.length&&this._$P.filters[0].callNative(this)),X.isWebGL&&(t&&t.length?this._renderType|=32:this._renderType&=-33),t&&0<t.length?(this._getBit(1)||this._setUpNoticeType(1),X.isWebGL&&1==t.length&&t[0]instanceof laya.filters.ColorFilter||("bitmap"!=this.cacheAs&&(X.isConchNode||(this.cacheAs="bitmap"),this._set$P("cacheForFilters",!0)),this._set$P("hasFilter",!0))):(this._set$P("hasFilter",!1),this._$P.cacheForFilters&&"bitmap"==this.cacheAs&&(this.cacheAs="none")),this.repaint())}),c(0,t,"parent",s.prototype._$get_parent,function(t){b.superSet(bt,this,"parent",t),t&&this._getBit(2)&&this._$2__onDisplay()}),c(0,t,"mask",function(){return this._$P._mask},function(t){t&&this.mask&&this.mask._$P.maskParent||(t?(this.cacheAs="bitmap",this._set$P("_mask",t),t._set$P("maskParent",this)):(this.mask&&this.mask._set$P("maskParent",null),this._set$P("_mask",t),this.cacheAs="none"),this.conchModel&&this.conchModel.mask(t?t.conchModel:null),this._renderType|=64,this.parentRepaint())}),c(0,t,"mouseEnabled",function(){return 1<this._mouseEnableState},function(t){this._mouseEnableState=t?2:1}),c(0,t,"globalScaleX",function(){for(var t=1,e=this;e&&e!==b.stage;)t*=e.scaleX,e=e.parent;return t}),c(0,t,"mouseX",function(){return this.getMousePoint().x}),c(0,t,"mouseY",function(){return this.getMousePoint().y}),i.fromImage=function(t){return(new i).loadImage(t)},i.CustomList=[],h(i,["RUNTIMEVERION",function(){return this.RUNTIMEVERION=r.conch?conchConfig.getRuntimeVersion().substr(conchConfig.getRuntimeVersion().lastIndexOf("-")+1):""}]),i}(bt),Ot=function(t){function e(t){this._audio=null,this._onEnd=null,this._resumePlay=null,e.__super.call(this),this._onEnd=vt.bind(this.__onEnd,this),this._resumePlay=vt.bind(this.__resumePlay,this),t.addEventListener("ended",this._onEnd),this._audio=t}p(e,"laya.media.h5audio.AudioSoundChannel",St);var i=e.prototype;return i.__onEnd=function(){if(1==this.loops)return this.completeHandler&&(b.timer.once(10,this,this.__runComplete,[this.completeHandler],!1),this.completeHandler=null),this.stop(),void this.event("complete");0<this.loops&&this.loops--,this.startTime=0,this.play()},i.__resumePlay=function(){if(this._audio&&this._audio.removeEventListener("canplay",this._resumePlay),!this.isStopped)try{this._audio.currentTime=this.startTime,Q.container.appendChild(this._audio),this._audio.play()}catch(t){this.event("error")}},i.play=function(){if(this.isStopped=!1,this._audio){try{this._audio.playbackRate=N.playbackRate,this._audio.currentTime=this.startTime}catch(t){return void this._audio.addEventListener("canplay",this._resumePlay)}N.addChannel(this),Q.container.appendChild(this._audio),"play"in this._audio&&this._audio.play()}},i.stop=function(){this.isStopped=!0,N.removeChannel(this),this.completeHandler=null,this._audio&&("pause"in this._audio&&X.isConchApp&&this._audio.stop(),this._audio.pause(),this._audio.removeEventListener("ended",this._onEnd),this._audio.removeEventListener("canplay",this._resumePlay),Q.onIE||this._audio!=Mt._musicAudio&&_t.recover("audio:"+this.url,this._audio),Q.removeElement(this._audio),this._audio=null)},i.pause=function(){this.isStopped=!0,N.removeChannel(this),"pause"in this._audio&&this._audio.pause()},i.resume=function(){this._audio&&(this.isStopped=!1,N.addChannel(this),"play"in this._audio&&this._audio.play())},c(0,i,"position",function(){return this._audio?this._audio.currentTime:0}),c(0,i,"duration",function(){return this._audio?this._audio.duration:0}),c(0,i,"volume",function(){return this._audio?this._audio.volume:1},function(t){this._audio&&(this._audio.volume=t)}),e}(),Nt=function(t){function e(){this.audioBuffer=null,this.gain=null,this.bufferSource=null,this._currentTime=0,this._volume=1,this._startTime=0,this._pauseTime=0,this._onPlayEnd=null,this.context=Et.ctx,e.__super.call(this),this._onPlayEnd=vt.bind(this.__onPlayEnd,this),this.context.createGain?this.gain=this.context.createGain():this.gain=this.context.createGainNode()}p(e,"laya.media.webaudio.WebAudioSoundChannel",St);var i=e.prototype;return i.play=function(){if(N.addChannel(this),this.isStopped=!1,this._clearBufferSource(),this.audioBuffer){var t=this.context,e=this.gain,i=t.createBufferSource();(this.bufferSource=i).buffer=this.audioBuffer,i.connect(e),e&&e.disconnect(),e.connect(t.destination),i.onended=this._onPlayEnd,this.startTime>=this.duration&&(this.startTime=0),this._startTime=Q.now(),this.gain.gain.setTargetAtTime?this.gain.gain.setTargetAtTime(this._volume,this.context.currentTime,.001):this.gain.gain.value=this._volume,0==this.loops&&(i.loop=!0),i.playbackRate.setTargetAtTime?i.playbackRate.setTargetAtTime(N.playbackRate,this.context.currentTime,.001):i.playbackRate.value=N.playbackRate,i.start(0,this.startTime),this._currentTime=0}},i.__onPlayEnd=function(){if(1==this.loops)return this.completeHandler&&(b.timer.once(10,this,this.__runComplete,[this.completeHandler],!1),this.completeHandler=null),this.stop(),void this.event("complete");0<this.loops&&this.loops--,this.startTime=0,this.play()},i._clearBufferSource=function(){if(this.bufferSource){var t=this.bufferSource;t.stop?t.stop(0):t.noteOff(0),t.disconnect(0),t.onended=null,e._tryCleanFailed||this._tryClearBuffer(t),this.bufferSource=null}},i._tryClearBuffer=function(t){if(Q.onMac)try{t.buffer=Et._miniBuffer}catch(t){e._tryCleanFailed=!0}else try{t.buffer=null}catch(t){e._tryCleanFailed=!0}},i.stop=function(){this._clearBufferSource(),this.audioBuffer=null,this.gain&&this.gain.disconnect(),this.isStopped=!0,N.removeChannel(this),this.completeHandler=null,N.autoReleaseSound&&b.timer.once(5e3,null,N.disposeSoundIfNotUsed,[this.url],!1)},i.pause=function(){this.isStopped||(this._pauseTime=this.position),this._clearBufferSource(),this.gain&&this.gain.disconnect(),this.isStopped=!0,N.removeChannel(this),N.autoReleaseSound&&b.timer.once(5e3,null,N.disposeSoundIfNotUsed,[this.url],!1)},i.resume=function(){this.startTime=this._pauseTime,this.play()},c(0,i,"position",function(){return this.bufferSource?(Q.now()-this._startTime)/1e3+this.startTime:0}),c(0,i,"duration",function(){return this.audioBuffer?this.audioBuffer.duration:0}),c(0,i,"volume",function(){return this._volume},function(t){this.isStopped||(this._volume=t,this.gain.gain.setTargetAtTime?this.gain.gain.setTargetAtTime(t,this.context.currentTime,.001):this.gain.gain.value=t)}),e._tryCleanFailed=!1,e.SetTargetDelay=.001,e}(),Bt=function(t){function e(){e.__super.call(this),this._w=0,this._h=0}p(e,"laya.resource.Bitmap",Rt);var i=e.prototype;return c(0,i,"width",function(){return this._w}),c(0,i,"height",function(){return this._h}),c(0,i,"source",function(){return this._source}),e}(),Wt=function(e){function t(){this.loop=!1,this.wrapMode=0,this._index=0,this._count=0,this._isPlaying=!1,this._labels=null,this._isReverse=!1,this._frameRateChanged=!1,this._controlNode=null,this._actionName=null,t.__super.call(this),this._interval=g.animationInterval,this._setUpNoticeType(1)}p(t,"laya.display.AnimationPlayerBase",e);var i=t.prototype;return i.play=function(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=!0),void 0===i&&(i=""),void 0===n&&(n=!0),this._isPlaying=!0,this.index="string"==typeof t?this._getFrameByLabel(t):t,this.loop=e,this._actionName=i,this._isReverse=1==this.wrapMode,0<this.interval&&this.timerLoop(this.interval,this,this._frameLoop,null,!0,!0)},i._getFrameByLabel=function(t){var e=0;for(e=0;e<this._count;e++)if(this._labels[e]&&0<=this._labels[e].indexOf(t))return e;return 0},i._frameLoop=function(){if(this._isReverse){if(this._index--,this._index<0){if(!this.loop)return this._index=0,this.stop(),void this.event("complete");2==this.wrapMode?(this._index=0<this._count?1:0,this._isReverse=!1):this._index=this._count-1,this.event("complete")}}else if(this._index++,this._index>=this._count){if(!this.loop)return this._index--,this.stop(),void this.event("complete");2==this.wrapMode?(this._index=0<=this._count-2?this._count-2:0,this._isReverse=!0):this._index=0,this.event("complete")}this.index=this._index},i._setControlNode=function(t){this._controlNode&&(this._controlNode.off("display",this,this._checkResumePlaying),this._controlNode.off("undisplay",this,this._checkResumePlaying)),(this._controlNode=t)&&t!=this&&(t.on("display",this,this._checkResumePlaying),t.on("undisplay",this,this._checkResumePlaying))},i._setDisplay=function(t){e.prototype._setDisplay.call(this,t),this._checkResumePlaying()},i._checkResumePlaying=function(){this._isPlaying&&(this._controlNode.displayedInStage?this.play(this._index,this.loop,this._actionName):this.clearTimer(this,this._frameLoop))},i.stop=function(){this._isPlaying=!1,this.clearTimer(this,this._frameLoop)},i.addLabel=function(t,e){this._labels||(this._labels={}),this._labels[e]||(this._labels[e]=[]),this._labels[e].push(t)},i.removeLabel=function(t){if(t){if(this._labels)for(var e in this._labels)this._removeLabelFromLabelList(this._labels[e],t)}else this._labels=null},i._removeLabelFromLabelList=function(t,e){if(t)for(var i=t.length-1;0<=i;i--)t[i]==e&&t.splice(i,1)},i.gotoAndStop=function(t){this.index="string"==typeof t?this._getFrameByLabel(t):t,this.stop()},i._displayToIndex=function(t){},i.clear=function(){this.stop(),this._labels=null},c(0,i,"interval",function(){return this._interval},function(t){this._interval!=t&&(this._frameRateChanged=!0,this._interval=t,this._isPlaying&&0<t&&this.timerLoop(t,this,this._frameLoop,null,!0,!0))}),c(0,i,"isPlaying",function(){return this._isPlaying}),c(0,i,"index",function(){return this._index},function(t){if(this._index=t,this._displayToIndex(t),this._labels&&this._labels[t])for(var e=this._labels[t],i=0,n=e.length;i<n;i++)this.event("label",e[i])}),c(0,i,"count",function(){return this._count}),t.WRAP_POSITIVE=0,t.WRAP_REVERSE=1,t.WRAP_PINGPONG=2,t}(kt),Gt=function(e){function d(){this._clipPoint=null,this._currBitmapFont=null,this._text=null,this._isChanged=!1,this._textWidth=0,this._textHeight=0,this._lines=[],this._lineWidths=[],this._startX=NaN,this._startY=NaN,this._lastVisibleLineIndex=-1,this._words=null,this._charSize={},this.underline=!1,this._underlineColor=null,d.__super.call(this),this.overflow=d.VISIBLE,this._style=new Ct(this),this._style.wordWrap=!1}p(d,"laya.display.Text",e);var t=d.prototype;return t.destroy=function(t){void 0===t&&(t=!0),e.prototype.destroy.call(this,t),this._lines=null,this._words&&(this._words.length=0,this._words=null)},t._getBoundPointsM=function(t){void 0===t&&(t=!1);var e=O.TEMP;return e.setTo(0,0,this.width,this.height),e._getBoundPoints()},t.getGraphicBounds=function(t){void 0===t&&(t=!1);var e=O.TEMP;return e.setTo(0,0,this.width,this.height),e},t._getCSSStyle=function(){return this._style},t.lang=function(t,e,i,n,s,r,o,a,h,l,c){if(t=d.langPacks&&d.langPacks[t]?d.langPacks[t]:t,arguments.length<2)this._text=t;else{for(var u=0,_=arguments.length;u<_;u++)t=t.replace("{"+u+"}",arguments[u+1]);this._text=t}},t._isPassWordMode=function(){var t=this._style.password;return"prompt"in this&&this.prompt==this._text&&(t=!1),t},t._getPassWordTxt=function(t){var e;e="";for(var i=t.length;0<i;i--)e+="●";return e},t.renderText=function(t,e){var i=this.graphics;i.clear(!0);var n=(this.italic?"italic ":"")+(this.bold?"bold ":"")+this.fontSize+"px "+(Q.onIPhone&&laya.display.Text._fontFamilyMap[this.font]||this.font);Q.context.font=n;var s=this.padding,r=s[3],o="left",a=this._lines,h=this.leading+this._charSize.height,l=this._currBitmapFont;l&&(h=this.leading+l.getMaxHeight());var c=s[0];if(!l&&0<this._width&&this._textWidth<=this._width&&("right"==this.align?(o="right",r=this._width-s[1]):"center"==this.align&&(o="center",r=.5*this._width+s[3]-s[1])),0<this._height){var u=this._textHeight>this._height?"top":this.valign;"middle"===u?c=.5*(this._height-e*h)+s[0]-s[2]:"bottom"===u&&(c=this._height-e*h-s[2])}var _=this._style;if(l&&l.autoScaleSize)var d=l.fontSize/this.fontSize;if(this._clipPoint)if(i.save(),l&&l.autoScaleSize){var f=0,p=0;f=this._width?this._width-s[3]-s[1]:this._textWidth,p=this._height?this._height-s[0]-s[2]:this._textHeight,f*=d,p*=d,i.clipRect(s[3],s[0],f,p)}else i.clipRect(s[3],s[0],this._width?this._width-s[3]-s[1]:this._textWidth,this._height?this._height-s[0]-s[2]:this._textHeight);var g=_.password;"prompt"in this&&this.prompt==this._text&&(g=!1);for(var m=0,v=0,y=Math.min(this._lines.length,e+t)||1,w=t;w<y;w++){var x,T=a[w];if(g){var b=T.length;T="";for(var C=b;0<C;C--)T+="●"}if(void 0===T&&(T=""),m=r-(this._clipPoint?this._clipPoint.x:0),v=c+h*w-(this._clipPoint?this._clipPoint.y:0),this.underline&&this.drawUnderline(o,m,v,w),l){var M=this.width;l.autoScaleSize&&(M=this.width*d),l.drawText(T,this,m,v,this.align,M)}else X.isWebGL?(this._words||(this._words=[]),(x=this._words.length>w-t?this._words[w-t]:new Tt).setText(T)):x=T,_.stroke?i.fillBorderText(x,m,v,n,this.color,_.strokeColor,_.stroke,o):i.fillText(x,m,v,n,this.color,o)}if(l&&l.autoScaleSize){var S=1/d;this.scale(S,S)}this._clipPoint&&i.restore(),this._startX=r,this._startY=c},t.drawUnderline=function(t,e,i,n){var s=this._lineWidths[n];switch(t){case"center":e-=s/2;break;case"right":e-=s}i+=this._charSize.height,this._graphics.drawLine(e,i,e+s,i,this.underlineColor||this.color,1)},t.typeset=function(){if(this._isChanged=!1,!this._text)return this._clipPoint=null,this._textWidth=this._textHeight=0,void this.graphics.clear(!0);if(X.isConchApp){var t=""+this._getCSSStyle().font;this._getCSSStyle().stroke&&this._getCSSStyle().strokeColor&&(t+=" 1 "+this._getCSSStyle().strokeColor),Q.context.font=t}else Q.context.font=this._getCSSStyle().font;this._lines.length=0,this._lineWidths.length=0,this._isPassWordMode()?this.parseLines(this._getPassWordTxt(this._text)):this.parseLines(this._text),this.evalTextSize(),this.checkEnabledViewportOrNot()?this._clipPoint||(this._clipPoint=new k(0,0)):this._clipPoint=null;var e=this._lines.length;if(this.overflow!=d.VISIBLE){var i=this.overflow==d.HIDDEN?Math.floor:Math.ceil;e=Math.min(e,i((this.height-this.padding[0]-this.padding[2])/(this.leading+this._charSize.height)))}var n=this.scrollY/(this._charSize.height+this.leading)|0;this.renderText(n,e),this.repaint()},t.evalTextSize=function(){var t,e=NaN;t=Math.max.apply(this,this._lineWidths),e=this._currBitmapFont?this._lines.length*(this._currBitmapFont.getMaxHeight()+this.leading)+this.padding[0]+this.padding[2]:this._lines.length*(this._charSize.height+this.leading)+this.padding[0]+this.padding[2],t==this._textWidth&&e==this._textHeight||(this._textWidth=t,this._textHeight=e,this._width&&this._height||this.conchModel&&this.conchModel.size(this._width||this._textWidth,this._height||this._textHeight))},t.checkEnabledViewportOrNot=function(){return this.overflow==d.SCROLL&&(0<this._width&&this._textWidth>this._width||0<this._height&&this._textHeight>this._height)},t.changeText=function(t){this._text!==t&&(this.lang(t+""),this._graphics&&this._graphics.replaceText(this._text)||this.typeset())},t.parseLines=function(t){var e=this.wordWrap||this.overflow==d.HIDDEN;if(e)var i=this.getWordWrapWidth();if(this._currBitmapFont)this._charSize.width=this._currBitmapFont.getMaxWidth(),this._charSize.height=this._currBitmapFont.getMaxHeight();else{var n=Q.context.measureText(d._testWord);X.isConchApp&&0===n.width&&0===n.height&&(n=Q.context.measureText("W")),this._charSize.width=n.width,this._charSize.height=n.height||this.fontSize}for(var s=t.replace(/\r\n/g,"\n").split("\n"),r=0,o=s.length;r<o;r++){var a=s[r];e?this.parseLine(a,i):(this._lineWidths.push(this.getTextWidth(a)),this._lines.push(a))}},t.parseLine=function(t,e){Q.context;var i,n=this._lines,s=0,r=NaN,o=NaN,a=0;if((r=this.getTextWidth(t))<=e)return n.push(t),void this._lineWidths.push(r);r=this._charSize.width,0==(s=Math.floor(e/r))&&(s=1),o=r=this.getTextWidth(t.substring(0,s));for(var h=s,l=t.length;h<l;h++)if(e<(o+=r=this.getTextWidth(t.charAt(h))))if(this.wordWrap){var c=t.substring(a,h);if(c.charCodeAt(c.length-1)<255?(i=/(?:\w|-)+$/.exec(c))&&(h=i.index+a,0==i.index?h+=c.length:c=t.substring(a,h)):d.RightToLeft&&(i=/([\u0600-\u06FF])+$/.exec(c))&&(h=i.index+a,0==i.index?h+=c.length:c=t.substring(a,h)),n.push(c),this._lineWidths.push(o-r),!((a=h)+s<l)){n.push(t.substring(a,l)),this._lineWidths.push(this.getTextWidth(n[n.length-1])),a=-1;break}h+=s,o=r=this.getTextWidth(t.substring(a,h)),h--}else if(this.overflow==d.HIDDEN)return n.push(t.substring(0,h)),void this._lineWidths.push(this.getTextWidth(n[n.length-1]));this.wordWrap&&-1!=a&&(n.push(t.substring(a,l)),this._lineWidths.push(this.getTextWidth(n[n.length-1])))},t.getTextWidth=function(t){return this._currBitmapFont?this._currBitmapFont.getTextWidth(t):Q.context.measureText(t).width},t.getWordWrapWidth=function(){var t=this.padding,e=NaN;return(e=this._currBitmapFont&&this._currBitmapFont.autoScaleSize?this._width*(this._currBitmapFont.fontSize/this.fontSize):this._width)<=0&&(e=this.wordWrap?100:Q.width),e<=0&&(e=100),e-t[3]-t[1]},t.getCharPoint=function(t,e){this._isChanged&&b.timer.runCallLater(this,this.typeset);for(var i=0,n=this._lines,s=0,r=0,o=n.length;r<o;r++){if(t<(i+=n[r].length)){var a=r;break}s=i}var h=(this.italic?"italic ":"")+(this.bold?"bold ":"")+this.fontSize+"px "+this.font;Q.context.font=h;var l=this.getTextWidth(this._text.substring(s,t));return(e||new k).setTo(this._startX+l-(this._clipPoint?this._clipPoint.x:0),this._startY+a*(this._charSize.height+this.leading)-(this._clipPoint?this._clipPoint.y:0))},c(0,t,"width",function(){return this._width?this._width:this.textWidth+this.padding[1]+this.padding[3]},function(t){t!=this._width&&(b.superSet(kt,this,"width",t),this.isChanged=!0)}),c(0,t,"textWidth",function(){return this._isChanged&&b.timer.runCallLater(this,this.typeset),this._textWidth}),c(0,t,"height",function(){return this._height?this._height:this.textHeight},function(t){t!=this._height&&(b.superSet(kt,this,"height",t),this.isChanged=!0)}),c(0,t,"textHeight",function(){return this._isChanged&&b.timer.runCallLater(this,this.typeset),this._textHeight}),c(0,t,"padding",function(){return this._getCSSStyle().padding},function(t){this._getCSSStyle().padding=t,this.isChanged=!0}),c(0,t,"bold",function(){return this._getCSSStyle().bold},function(t){this._getCSSStyle().bold=t,this.isChanged=!0}),c(0,t,"text",function(){return this._text||""},function(t){this._text!==t&&(this.lang(t+""),this.isChanged=!0,this.event("change"))}),c(0,t,"color",function(){return this._getCSSStyle().color},function(t){this._getCSSStyle().color!=t&&(this._getCSSStyle().color=t,!this._isChanged&&this._graphics?this._graphics.replaceTextColor(this.color):this.isChanged=!0)}),c(0,t,"font",function(){return this._getCSSStyle().fontFamily},function(t){this._currBitmapFont&&(this._currBitmapFont=null,this.scale(1,1)),d._bitmapFonts&&d._bitmapFonts[t]&&(this._currBitmapFont=d._bitmapFonts[t]),this._getCSSStyle().fontFamily=t,this.isChanged=!0}),c(0,t,"fontSize",function(){return this._getCSSStyle().fontSize},function(t){this._getCSSStyle().fontSize=t,this.isChanged=!0}),c(0,t,"italic",function(){return this._getCSSStyle().italic},function(t){this._getCSSStyle().italic=t,this.isChanged=!0}),c(0,t,"align",function(){return this._getCSSStyle().align},function(t){this._getCSSStyle().align=t,this.isChanged=!0}),c(0,t,"valign",function(){return this._getCSSStyle().valign},function(t){this._getCSSStyle().valign=t,this.isChanged=!0}),c(0,t,"wordWrap",function(){return this._getCSSStyle().wordWrap},function(t){this._getCSSStyle().wordWrap=t,this.isChanged=!0}),c(0,t,"leading",function(){return this._getCSSStyle().leading},function(t){this._getCSSStyle().leading=t,this.isChanged=!0}),c(0,t,"bgColor",function(){return this._getCSSStyle().backgroundColor},function(t){this._getCSSStyle().backgroundColor=t,this.isChanged=!0}),c(0,t,"borderColor",function(){return this._getCSSStyle().borderColor},function(t){this._getCSSStyle().borderColor=t,this.isChanged=!0}),c(0,t,"stroke",function(){return this._getCSSStyle().stroke},function(t){this._getCSSStyle().stroke=t,this.isChanged=!0}),c(0,t,"strokeColor",function(){return this._getCSSStyle().strokeColor},function(t){this._getCSSStyle().strokeColor=t,this.isChanged=!0}),c(0,t,"isChanged",null,function(t){this._isChanged!==t&&(this._isChanged=t)&&b.timer.callLater(this,this.typeset)}),c(0,t,"scrollX",function(){return this._clipPoint?this._clipPoint.x:0},function(t){if(!(this.overflow!=d.SCROLL||this.textWidth<this._width)&&this._clipPoint){t=t<this.padding[3]?this.padding[3]:t;var e=this._textWidth-this._width;t=e<t?e:t;var i=this._height/(this._charSize.height+this.leading)|1;this._clipPoint.x=t,this.renderText(this._lastVisibleLineIndex,i)}}),c(0,t,"scrollY",function(){return this._clipPoint?this._clipPoint.y:0},function(t){if(!(this.overflow!=d.SCROLL||this.textHeight<this._height)&&this._clipPoint){t=t<this.padding[0]?this.padding[0]:t;var e=this._textHeight-this._height,i=(t=e<t?e:t)/(this._charSize.height+this.leading)|0;this._lastVisibleLineIndex=i;var n=1+(this._height/(this._charSize.height+this.leading)|0);this._clipPoint.y=t,this.renderText(i,n)}}),c(0,t,"maxScrollX",function(){return this.textWidth<this._width?0:this._textWidth-this._width}),c(0,t,"maxScrollY",function(){return this.textHeight<this._height?0:this._textHeight-this._height}),c(0,t,"lines",function(){return this._isChanged&&this.typeset(),this._lines}),c(0,t,"underlineColor",function(){return this._underlineColor},function(t){this._underlineColor=t,this._isChanged=!0,this.typeset()}),d.registerBitmapFont=function(t,e){d._bitmapFonts||(d._bitmapFonts={}),d._bitmapFonts[t]=e},d.unregisterBitmapFont=function(t,e){if(void 0===e&&(e=!0),d._bitmapFonts&&d._bitmapFonts[t]){var i=d._bitmapFonts[t];e&&i.destroy(),delete d._bitmapFonts[t]}},d.setTextRightToLeft=function(){var t;(t=Q.canvas.source.style).display="none",t.position="absolute",t.direction="rtl",X._mainCanvas.source.style.direction="rtl",laya.display.Text.RightToLeft=!0,Q.document.body.appendChild(Q.canvas.source)},d.supportFont=function(t){Q.context.font="10px sans-serif";var e=Q.context.measureText("abcji").width;Q.context.font="10px "+t;var i=Q.context.measureText("abcji").width;return console.log(e,i),e!==i},d._testWord="游",d.langPacks=null,d.VISIBLE="visible",d.SCROLL="scroll",d.HIDDEN="hidden",d.CharacterCache=!0,d.RightToLeft=!1,d._bitmapFonts=null,h(d,["_fontFamilyMap",function(){return this._fontFamilyMap={"报隶":"报隶-简","黑体":"黑体-简","楷体":"楷体-简","兰亭黑":"兰亭黑-简","隶变":"隶变-简","凌慧体":"凌慧体-简","翩翩体":"翩翩体-简","苹方":"苹方-简","手札体":"手札体-简","宋体":"宋体-简","娃娃体":"娃娃体-简","魏碑":"魏碑-简","行楷":"行楷-简","雅痞":"雅痞-简","圆体":"圆体-简"}}]),d}(kt),Ut=function(u){function o(){this.focus=null,this.designWidth=0,this.designHeight=0,this.canvasRotation=!1,this.canvasDegree=0,this.renderingEnabled=!0,this.screenAdaptationEnabled=!0,this._screenMode="none",this._scaleMode="noscale",this._alignV="top",this._alignH="left",this._bgColor="black",this._mouseMoveTime=0,this._renderCount=0,this._frameStartTime=NaN,this._isFocused=!1,this._isVisibility=!1,this._scenes=null,this._frameRate="fast",this.useRetinalCanvas=!1,o.__super.call(this),this.offset=new k,this._canvasTransform=new F,this._previousOrientation=Q.window.orientation;var e=this;this.transform=F.create(),this._scenes=[],this.mouseEnabled=!0,this.hitTestPrior=!0,this.autoSize=!1,this._displayedInStage=!0,this._isFocused=!0,this._isVisibility=!0,this.useRetinalCanvas=g.useRetinalCanvas;var t=Q.window,i=this;t.addEventListener("focus",function(){e._isFocused=!0,i.event("focus"),i.event("focuschange")}),t.addEventListener("blur",function(){e._isFocused=!1,i.event("blur"),i.event("focuschange"),i._isInputting()&&($t.inputElement.target.focus=!1)});var n="visibilityState",s="visibilitychange",r=t.document;void 0!==r.hidden?(s="visibilitychange",n="visibilityState"):void 0!==r.mozHidden?(s="mozvisibilitychange",n="mozVisibilityState"):void 0!==r.msHidden?(s="msvisibilitychange",n="msVisibilityState"):void 0!==r.webkitHidden&&(s="webkitvisibilitychange",n="webkitVisibilityState"),t.document.addEventListener(s,function(){"hidden"==Q.document[n]?i._setStageVisible(!1):i._setStageVisible(!0)}),t.document.addEventListener("qbrowserVisibilityChange",function(t){i._setStageVisible(!t.hidden)}),t.addEventListener("resize",function(){var t=Q.window.orientation;null!=t&&t!=e._previousOrientation&&i._isInputting()&&($t.inputElement.target.focus=!1),e._previousOrientation=t,i._isInputting()||i._resetCanvas()}),t.addEventListener("orientationchange",function(t){i._resetCanvas()}),this.on("mousemove",this,this._onmouseMove),Q.onMobile&&this.on("mousedown",this,this._onmouseMove)}p(o,"laya.display.Stage",u);var t=o.prototype;return t._setStageVisible=function(t){this._isVisibility!=t&&(this._isVisibility=t,this._isVisibility||this._isInputting()&&($t.inputElement.target.focus=!1),this.event("visibilitychange"))},t._isInputting=function(){return Q.onMobile&&$t.isInputting},t._changeCanvasSize=function(){this.setScreenSize(Q.clientWidth*Q.pixelRatio,Q.clientHeight*Q.pixelRatio)},t._resetCanvas=function(){if(this.screenAdaptationEnabled){var t=X._mainCanvas;t.source.style;t.size(1,1),b.timer.once(100,this,this._changeCanvasSize)}},t.setScreenSize=function(t,e){var i=!1;if("none"!==this._screenMode&&(i=(t/e<1?"vertical":"horizontal")!==this._screenMode)){var n=e;e=t,t=n}this.canvasRotation=i;var s=X._mainCanvas,r=s.source.style,o=this._canvasTransform.identity(),a=this._scaleMode,h=t/this.designWidth,l=e/this.designHeight,c=g.useRetinalCanvas?t:this.designWidth,u=g.useRetinalCanvas?e:this.designHeight,_=t,d=e,f=Q.pixelRatio;switch(this._width=this.designWidth,this._height=this.designHeight,a){case"noscale":h=l=1,_=this.designWidth,d=this.designHeight;break;case"showall":h=l=Math.min(h,l),c=_=Math.round(this.designWidth*h),u=d=Math.round(this.designHeight*l);break;case"noborder":h=l=Math.max(h,l),_=Math.round(this.designWidth*h),d=Math.round(this.designHeight*l);break;case"full":h=l=1,this._width=c=t,this._height=u=e;break;case"fixedwidth":l=h,this._height=u=Math.round(e/h);break;case"fixedheight":h=l,this._width=c=Math.round(t/l);break;case"fixedauto":t/e<this.designWidth/this.designHeight?(l=h,this._height=u=Math.round(e/h)):(h=l,this._width=c=Math.round(t/l))}this.conchModel&&this.conchModel.size(this._width,this._height),g.useRetinalCanvas&&(c=t,u=e),h*=this.scaleX,l*=this.scaleY,1===h&&1===l?this.transform.identity():(this.transform.a=this._formatData(h/(_/c)),this.transform.d=this._formatData(l/(d/u)),this.conchModel&&this.conchModel.scale(this.transform.a,this.transform.d)),s.size(c,u),A.changeWebGLSize(c,u),o.scale(_/c/f,d/u/f),"left"===this._alignH?this.offset.x=0:"right"===this._alignH?this.offset.x=(t-_)/f:this.offset.x=.5*(t-_)/f,"top"===this._alignV?this.offset.y=0:"bottom"===this._alignV?this.offset.y=(e-d)/f:this.offset.y=.5*(e-d)/f,this.offset.x=Math.round(this.offset.x),this.offset.y=Math.round(this.offset.y),o.translate(this.offset.x,this.offset.y),this.canvasDegree=0,i&&("horizontal"===this._screenMode?(o.rotate(Math.PI/2),o.translate(e/f,0),this.canvasDegree=90):(o.rotate(-Math.PI/2),o.translate(0,t/f),this.canvasDegree=-90)),o.a=this._formatData(o.a),o.d=this._formatData(o.d),o.tx=this._formatData(o.tx),o.ty=this._formatData(o.ty),r.transformOrigin=r.webkitTransformOrigin=r.msTransformOrigin=r.mozTransformOrigin=r.oTransformOrigin="0px 0px 0px",r.transform=r.webkitTransform=r.msTransform=r.mozTransform=r.oTransform="matrix("+o.toString()+")",o.translate(parseInt(r.left)||0,parseInt(r.top)||0),this.visible=!0,this._repaint=1,this.event("resize")},t._formatData=function(t){return Math.abs(t)<1e-6?0:Math.abs(1-t)<.001?0<t?1:-1:t},t.getMousePoint=function(){return k.TEMP.setTo(this.mouseX,this.mouseY)},t.repaint=function(){this._repaint=1},t.parentRepaint=function(){},t._loop=function(){return this.render(X.context,0,0),!0},t._onmouseMove=function(t){this._mouseMoveTime=Q.now()},t.getTimeFromFrameStart=function(){return Q.now()-this._frameStartTime},t.render=function(t,e,i){if("sleep"===this._frameRate&&!X.isConchApp){var n=Q.now();if(!(1e3<=n-this._frameStartTime))return;this._frameStartTime=n}if(this._renderCount++,X.isFlash&&this.repaint(),this._style.visible){this._frameStartTime=Q.now();var s="slow"!==("mouse"===this._frameRate?this._frameStartTime-this._mouseMoveTime<2e3?"fast":"slow":this._frameRate),r=this._renderCount%2==0;if(ft.renderSlow=!s,s||r||X.isConchApp){var o;ft.loopCount++,x.instance.runEvent(),b.timer._update(),A.update3DLoop();var a=0,h=0;if(X.isConchNode)for(a=0,h=this._scenes.length;a<h;a++)(o=this._scenes[a])&&o._updateSceneConch();else for(a=0,h=this._scenes.length;a<h;a++)(o=this._scenes[a])&&o._updateScene();if(X.isConchNode){var l=kt.CustomList;for(a=0,h=l.length;a<h;a++){var c=l[a];c.customRender(c.customContext,0,0)}return}}X.isConchNode||this.renderingEnabled&&(s||!r||X.isConchWebGL)&&(X.isWebGL?(t.clear(),u.prototype.render.call(this,t,e,i),ft._show&&ft._sp&&ft._sp.render(t,e,i),A.clear(this._bgColor),A.beginFlush(),t.flush(),A.endFinish(),wt.instance&&wt.getInstance().endDispose()):(A.clear(this._bgColor),u.prototype.render.call(this,t,e,i),ft._show&&ft._sp&&ft._sp.render(t,e,i)))}else this._renderCount%5==0&&(ft.loopCount++,x.instance.runEvent(),b.timer._update())},t._requestFullscreen=function(){var t=Q.document.documentElement;t.requestFullscreen?t.requestFullscreen():t.mozRequestFullScreen?t.mozRequestFullScreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen()},t._fullScreenChanged=function(){b.stage.event("fullscreenchange")},t.exitFullscreen=function(){var t=Q.document;t.exitFullscreen?t.exitFullscreen():t.mozCancelFullScreen?t.mozCancelFullScreen():t.webkitExitFullscreen&&t.webkitExitFullscreen()},c(0,t,"clientScaleX",function(){return this._transform?this._transform.getScaleX():1}),c(0,t,"desginHeight",function(){return console.debug("desginHeight已经弃用，请使用designHeight代替"),this.designHeight}),c(0,t,"frameRate",function(){return this._frameRate},function(t){if(this._frameRate=t,X.isConchApp)switch(this._frameRate){case"slow":Q.window.conch&&Q.window.conchConfig.setSlowFrame&&Q.window.conchConfig.setSlowFrame(!0);break;case"fast":Q.window.conch&&Q.window.conchConfig.setSlowFrame&&Q.window.conchConfig.setSlowFrame(!1);break;case"mouse":Q.window.conch&&Q.window.conchConfig.setMouseFrame&&Q.window.conchConfig.setMouseFrame(2e3);break;case"sleep":Q.window.conch&&Q.window.conchConfig.setLimitFPS&&Q.window.conchConfig.setLimitFPS(1);break;default:throw new Error("Stage:frameRate invalid.")}}),c(0,t,"clientScaleY",function(){return this._transform?this._transform.getScaleY():1}),c(0,t,"width",u.prototype._$get_width,function(t){this.designWidth=t,b.superSet(kt,this,"width",t),b.timer.callLater(this,this._changeCanvasSize)}),c(0,t,"alignH",function(){return this._alignH},function(t){this._alignH=t,b.timer.callLater(this,this._changeCanvasSize)}),c(0,t,"isFocused",function(){return this._isFocused}),c(0,t,"height",u.prototype._$get_height,function(t){this.designHeight=t,b.superSet(kt,this,"height",t),b.timer.callLater(this,this._changeCanvasSize)}),c(0,t,"transform",function(){return this._tfChanged&&this._adjustTransform(),this._transform=this._transform||F.create()},u.prototype._$set_transform),c(0,t,"isVisibility",function(){return this._isVisibility}),c(0,t,"desginWidth",function(){return console.debug("desginWidth已经弃用，请使用designWidth代替"),this.designWidth}),c(0,t,"scaleMode",function(){return this._scaleMode},function(t){this._scaleMode=t,b.timer.callLater(this,this._changeCanvasSize)}),c(0,t,"alignV",function(){return this._alignV},function(t){this._alignV=t,b.timer.callLater(this,this._changeCanvasSize)}),c(0,t,"bgColor",function(){return this._bgColor},function(t){this._bgColor=t,this.conchModel&&this.conchModel.bgColor(t),X.isWebGL&&(t?o._wgColor=st.create(t)._color:Q.onMiniGame||Q.onQGMiniGame||(o._wgColor=null)),Q.onLimixiu?o._wgColor=st.create(t)._color:X.canvas.style.background=t||"none"}),c(0,t,"mouseX",function(){return Math.round(x.instance.mouseX/this.clientScaleX)}),c(0,t,"mouseY",function(){return Math.round(x.instance.mouseY/this.clientScaleY)}),c(0,t,"screenMode",function(){return this._screenMode},function(t){this._screenMode=t}),c(0,t,"visible",u.prototype._$get_visible,function(t){this.visible!==t&&(b.superSet(kt,this,"visible",t),X._mainCanvas.source.style.visibility=t?"visible":"hidden")}),c(0,t,"fullScreenEnabled",null,function(t){var e=Q.document,i=X.canvas;t?(i.addEventListener("mousedown",this._requestFullscreen),i.addEventListener("touchstart",this._requestFullscreen),e.addEventListener("fullscreenchange",this._fullScreenChanged),e.addEventListener("mozfullscreenchange",this._fullScreenChanged),e.addEventListener("webkitfullscreenchange",this._fullScreenChanged),e.addEventListener("msfullscreenchange",this._fullScreenChanged)):(i.removeEventListener("mousedown",this._requestFullscreen),i.removeEventListener("touchstart",this._requestFullscreen),e.removeEventListener("fullscreenchange",this._fullScreenChanged),e.removeEventListener("mozfullscreenchange",this._fullScreenChanged),e.removeEventListener("webkitfullscreenchange",this._fullScreenChanged),e.removeEventListener("msfullscreenchange",this._fullScreenChanged))}),o.SCALE_NOSCALE="noscale",o.SCALE_EXACTFIT="exactfit",o.SCALE_SHOWALL="showall",o.SCALE_NOBORDER="noborder",o.SCALE_FULL="full",o.SCALE_FIXED_WIDTH="fixedwidth",o.SCALE_FIXED_HEIGHT="fixedheight",o.SCALE_FIXED_AUTO="fixedauto",o.ALIGN_LEFT="left",o.ALIGN_RIGHT="right",o.ALIGN_CENTER="center",o.ALIGN_TOP="top",o.ALIGN_MIDDLE="middle",o.ALIGN_BOTTOM="bottom",o.SCREEN_NONE="none",o.SCREEN_HORIZONTAL="horizontal",o.SCREEN_VERTICAL="vertical",o.FRAME_FAST="fast",o.FRAME_SLOW="slow",o.FRAME_MOUSE="mouse",o.FRAME_SLEEP="sleep",o.FRAME_MOUSE_THREDHOLD=2e3,h(o,["_wgColor",function(){return this._wgColor=[0,0,0,1]}]),o}(kt),zt=(function(t){function e(){this.url=null,this._channel=null,this._tar=null,this._playEvents=null,this._stopEvents=null,e.__super.call(this),this.visible=!1,this.on("added",this,this._onParentChange),this.on("removed",this,this._onParentChange)}p(e,"laya.media.SoundNode",kt);var i=e.prototype;i._onParentChange=function(){this.target=this.parent},i.play=function(t,e){void 0===t&&(t=1),isNaN(t)&&(t=1),this.url&&(this.stop(),this._channel=N.playSound(this.url,t,e))},i.stop=function(){this._channel&&!this._channel.isStopped&&this._channel.stop(),this._channel=null},i._setPlayAction=function(t,e,i,n){void 0===n&&(n=!0),this[i]&&t&&(n?t.on(e,this,this[i]):t.off(e,this,this[i]))},i._setPlayActions=function(t,e,i,n){if(void 0===n&&(n=!0),t&&e){var s,r=e.split(","),o=0;for(s=r.length,o=0;o<s;o++)this._setPlayAction(t,r[o],i,n)}},c(0,i,"playEvent",null,function(t){(this._playEvents=t)&&this._tar&&this._setPlayActions(this._tar,t,"play")}),c(0,i,"target",null,function(t){this._tar&&(this._setPlayActions(this._tar,this._playEvents,"play",!1),this._setPlayActions(this._tar,this._stopEvents,"stop",!1)),this._tar=t,this._tar&&(this._setPlayActions(this._tar,this._playEvents,"play",!0),this._setPlayActions(this._tar,this._stopEvents,"stop",!0))}),c(0,i,"stopEvent",null,function(t){(this._stopEvents=t)&&this._tar&&this._setPlayActions(this._tar,t,"stop")})}(),function(t){function e(){this._src=null,this._onload=null,this._onerror=null,e.__super.call(this)}p(e,"laya.resource.FileBitmap",Bt);var i=e.prototype;return c(0,i,"src",function(){return this._src},function(t){this._src=t}),c(0,i,"onload",null,function(t){}),c(0,i,"onerror",null,function(t){}),e}()),Ht=function(t){function i(t,e){this._is2D=!1,i.__super.call(this);var n=this;if(this._source=this,"2D"===t||"AUTO"===t&&!X.isWebGL){this._is2D=!0,this._source=e||Q.createElement("canvas"),this._w=this._source.width,this._h=this._source.height;var s=this;s.getContext=function(t,e){if(n._ctx)return n._ctx;var i=n._ctx=n._source.getContext(t,e);return i&&(i._canvas=s,X.isFlash||Q.onLimixiu||(i.size=function(t,e){})),i}}this.lock=!0}p(i,"laya.resource.HTMLCanvas",Bt);var e=i.prototype;return e.clear=function(){this._ctx&&this._ctx.clear()},e.destroy=function(){this._ctx&&this._ctx.destroy(),this._ctx=null,laya.resource.Resource.prototype.destroy.call(this)},e.release=function(){},e._setContext=function(t){this._ctx=t},e.getContext=function(t,e){return this._ctx?this._ctx:this._ctx=i._createContext(this)},e.getMemSize=function(){return 0},e.size=function(t,e){this._w==t&&this._h==e&&(!this._source||this._source.width==t&&this._source.height==e)||(this._w=t,this._h=e,this.memorySize=this._w*this._h*4,this._ctx&&this._ctx.size(t,e),this._source&&(this._source.height=e,this._source.width=t))},e.getCanvas=function(){return this._source},e.toBase64=function(t,e,i){if(this._source)if(X.isConchApp&&this._source.toBase64)this._source.toBase64(t,e,i);else{var n=this._source.toDataURL(t,e);i.call(this,n)}},c(0,e,"context",function(){return this._ctx}),c(0,e,"asBitmap",null,function(t){}),i.create=function(t,e){return new i(t,e)},i.TYPE2D="2D",i.TYPE3D="3D",i.TYPEAUTO="AUTO",i._createContext=null,i}();p(Yt,"laya.resource.HTMLSubImage",Bt),Yt.create=function(t,e,i,n,s,r,o,a){return void 0===a&&(a=!1),new Yt(t,e,i,n,s,r,o,a)};function Yt(t,e,i,n,s,r,o,a){throw Yt.__super.call(this),new Error("不允许new！")}!function(t){function u(){this._frames=null,this._url=null,u.__super.call(this),this._setControlNode(this)}p(u,"laya.display.Animation",t);var e=u.prototype;e.destroy=function(t){void 0===t&&(t=!0),this.stop(),laya.display.Sprite.prototype.destroy.call(this,t),this._frames=null,this._labels=null},e.play=function(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=!0),void 0===i&&(i=""),void 0===n&&(n=!0),i&&this._setFramesFromCache(i,n),this._isPlaying=!0,this.index="string"==typeof t?this._getFrameByLabel(t):t,this.loop=e,this._actionName=i,this._isReverse=1==this.wrapMode,this._frames&&0<this.interval&&this.timerLoop(this.interval,this,this._frameLoop,null,!0,!0)},e._setFramesFromCache=function(t,e){var i;return void 0===e&&(e=!1),this._url&&(t=this._url+"#"+t),t&&u.framesMap[t]?((i=u.framesMap[t])instanceof Array?(this._frames=u.framesMap[t],this._count=this._frames.length):(i.nodeRoot&&(u.framesMap[t]=this._parseGraphicAnimationByData(i),i=u.framesMap[t]),this._frames=i.frames,this._count=this._frames.length,this._frameRateChanged||(this._interval=i.interval),this._labels=this._copyLabels(i.labels)),!0):(e&&console.log("ani not found:",t),!1)},e._copyLabels=function(t){if(!t)return null;var e,i;for(i in e={},t)e[i]=vt.copyArray([],t[i]);return e},e._frameLoop=function(){this._style.visible&&.01<this._style.alpha&&t.prototype._frameLoop.call(this)},e._displayToIndex=function(t){this._frames&&(this.graphics=this._frames[t])},e.clear=function(){this.stop(),this.graphics=null,this._frames=null,this._labels=null},e.loadImages=function(t,e){return void 0===e&&(e=""),this._url="",this._setFramesFromCache(e)||(this.frames=u.framesMap[e]?u.framesMap[e]:u.createFrames(t,e)),this},e.loadAtlas=function(e,i,n){void 0===n&&(n=""),this._url="";var s=this;function t(t){e===t&&(s.frames=u.framesMap[n]?u.framesMap[n]:u.createFrames(e,n),i&&i.run())}return s._setFramesFromCache(n)||(It.getAtlas(e)?t(e):b.loader.load(e,v.create(null,t,[e]),null,"atlas")),this},e.loadAnimation=function(t,e,i){this._url=t;return this._actionName||(this._actionName=""),this._setFramesFromCache(this._actionName)?(this._setFramesFromCache(this._actionName,!0),this.index=0,e&&e.run()):!i||It.getAtlas(i)?this._loadAnimationData(t,e,i):b.loader.load(i,v.create(this,this._loadAnimationData,[t,e,i]),null,"atlas"),this},e._loadAnimationData=function(a,h,t){var l=this;if(!t||It.getAtlas(t)){var c=this;It.getRes(a)?e(a):b.loader.load(a,v.create(null,e,[a]),null,"json"),It.clearRes(a)}else console.warn("atlas load fail:"+t);function e(t){if(It.getRes(t)&&a===t){var e;if(u.framesMap[a+"#"])c._setFramesFromCache(l._actionName,!0),l.index=0,l._checkResumePlaying();else{var i=c._parseGraphicAnimation(It.getRes(a));if(!i)return;var n,s=i.animationList,r=0,o=s.length;for(r=0;r<o;r++)e=s[r],u.framesMap[a+"#"+e.name]=e,n||(n=e);n&&(u.framesMap[a+"#"]=n,c._setFramesFromCache(l._actionName,!0),l.index=0),l._checkResumePlaying()}h&&h.run()}}},e._parseGraphicAnimation=function(t){return jt.parseAnimationData(t)},e._parseGraphicAnimationByData=function(t){return jt.parseAnimationByData(t)},c(0,e,"frames",function(){return this._frames},function(t){(this._frames=t)&&(this._count=t.length,this._isPlaying?this.play(this._index,this.loop,this._actionName):this.index=this._index)}),c(0,e,"autoPlay",null,function(t){t?this.play():this.stop()}),c(0,e,"source",null,function(t){-1<t.indexOf(".ani")?this.loadAnimation(t):-1<t.indexOf(".json")||-1<t.indexOf("als")||-1<t.indexOf("atlas")?this.loadAtlas(t):this.loadImages(t.split(","))}),c(0,e,"autoAnimation",null,function(t){this.play(0,!0,t,!1)}),u.createFrames=function(t,e){var i,n,s=0,r=0;if("string"==typeof t){var o=It.getAtlas(t);if(o&&o.length)for(i=[],s=0,r=o.length;s<r;s++)(n=new A.createGraphics).drawTexture(It.getRes(o[s]),0,0),i.push(n)}else if(t instanceof Array)for(i=[],s=0,r=t.length;s<r;s++)(n=new A.createGraphics).loadImage(t[s],0,0),i.push(n);return e&&(u.framesMap[e]=i),i},u.clearCache=function(t){var e,i=u.framesMap,n=t+"#";for(e in i)e!==t&&0!=e.indexOf(n)||delete u.framesMap[e]},u.framesMap={}}(Wt);var Xt=function(t){function r(){this._targetDic=null,this._animationData=null,this._animationNewFrames=null,r.__super.call(this),null==r._sortIndexFun&&(r._sortIndexFun=R.sortByKey("index",!1,!0))}p(r,"laya.display.FrameAnimation",t);var e=r.prototype;return e._setUp=function(t,e){this._labels=null,this._animationNewFrames=null,this._targetDic=t,this._animationData=e,this.interval=1e3/e.frameRate,e.parsed?(this._count=e.count,this._labels=e.labels,this._animationNewFrames=e.animationNewFrames):(this._animationNewFrames=[],this._calculateDatas()),e.parsed=!0,e.labels=this._labels,e.count=this._count,e.animationNewFrames=this._animationNewFrames},e.clear=function(){t.prototype.clear.call(this),this._targetDic=null,this._animationData=null},e._displayToIndex=function(t){if(this._animationData){t<0&&(t=0),t>this._count&&(t=this._count);var e=this._animationData.nodes,i=0,n=e.length;for(i=0;i<n;i++)this._displayNodeToFrame(e[i],t)}},e._displayNodeToFrame=function(t,e,i){i||(i=this._targetDic);var n=i[t.target];if(n){var s,r,o,a=t.frames,h=t.keys,l=0,c=h.length;for(l=0;l<c;l++)o=(r=a[s=h[l]]).length>e?r[e]:r[r.length-1],n[s]=o}},e._calculateDatas=function(){if(this._animationData){var t,e=this._animationData.nodes,i=0,n=e.length;for(i=this._count=0;i<n;i++)t=e[i],this._calculateNodeKeyFrames(t);this._count+=1}},e._calculateNodeKeyFrames=function(t){var e,i,n=t.keyframes,s=t.target;for(e in t.frames||(t.frames={}),t.keys?t.keys.length=0:t.keys=[],t.initValues||(t.initValues={}),n)i=n[e],t.frames[e]||(t.frames[e]=[]),this._targetDic&&this._targetDic[s]&&(t.initValues[e]=this._targetDic[s][e]),i.sort(r._sortIndexFun),t.keys.push(e),this._calculateNodePropFrames(i,t.frames[e],e,s)},e.resetToInitState=function(){if(this._targetDic&&this._animationData){var t,e,i=this._animationData.nodes,n=0,s=i.length;for(n=0;n<s;n++)if(e=(t=i[n]).initValues){var r,o=this._targetDic[t.target];if(o)for(r in e)o[r]=e[r]}}},e._calculateNodePropFrames=function(t,e,i,n){var s=0,r=t.length-1;for(e.length=t[r].index+1,s=0;s<r;s++)this._dealKeyFrame(t[s]),this._calculateFrameValues(t[s],t[s+1],e);0==r&&(e[t[0].index]=t[0].value,this._animationNewFrames&&(this._animationNewFrames[t[0].index]=!0)),this._dealKeyFrame(t[s])},e._dealKeyFrame=function(t){t.label&&""!=t.label&&this.addLabel(t.label,t.index)},e._calculateFrameValues=function(t,e,i){var n,s=0,r=t.index,o=e.index,a=t.value,h=e.value-t.value,l=o-r;if(o>this._count&&(this._count=o),t.tween)for(null==(n=at[t.tweenMethod])&&(n=at.linearNone),s=r;s<o;s++)i[s]=n(s-r,a,h,l),this._animationNewFrames&&(this._animationNewFrames[s]=!0);else for(s=r;s<o;s++)i[s]=a;this._animationNewFrames&&(this._animationNewFrames[t.index]=!0,this._animationNewFrames[e.index]=!0),i[e.index]=e.value},r._sortIndexFun=null,r}(Wt),$t=function(e){function s(){this._focus=!1,this._multiline=!1,this._editable=!0,this._restrictPattern=null,this._type="text",this._prompt="",this._promptColor="#A9A9A9",this._originColor="#000000",this._content="",s.__super.call(this),this._maxChars=1e5,this._width=100,this._height=20,this.multiline=!1,this.overflow=Gt.SCROLL,this.on("mousedown",this,this._onMouseDown),this.on("undisplay",this,this._onUnDisplay)}p(s,"laya.display.Input",e);var t=s.prototype;return t.setSelection=function(t,e){this.focus=!0,laya.display.Input.inputElement.selectionStart=t,laya.display.Input.inputElement.selectionEnd=e},t._onUnDisplay=function(t){this.focus=!1},t._onMouseDown=function(t){this.focus=!0},t._syncInputTransform=function(){var t=this.nativeInput,e=vt.getTransformRelativeToWindow(this,this.padding[3],this.padding[0]),i=this._width-this.padding[1]-this.padding[3],n=this._height-this.padding[0]-this.padding[2];X.isConchApp?(t.setScale(e.scaleX,e.scaleY),t.setSize(i,n),t.setPos(e.x,e.y)):(s.inputContainer.style.transform=s.inputContainer.style.webkitTransform="scale("+e.scaleX+","+e.scaleY+") rotate("+b.stage.canvasDegree+"deg)",t.style.width=i+"px",t.style.height=n+"px",s.inputContainer.style.left=e.x+"px",s.inputContainer.style.top=e.y+"px")},t.select=function(){this.nativeInput.select()},t._setInputMethod=function(){s.input.parentElement&&s.inputContainer.removeChild(s.input),s.area.parentElement&&s.inputContainer.removeChild(s.area),s.inputElement=this._multiline?s.area:s.input,s.inputContainer.appendChild(s.inputElement),Gt.RightToLeft&&(s.inputElement.style.direction="rtl")},t._focusIn=function(){laya.display.Input.isInputting=!0;var t=this.nativeInput;this._focus=!0;var e=t.style;e.whiteSpace=this.wordWrap?"pre-wrap":"nowrap",this._setPromptColor(),t.readOnly=!this._editable,X.isConchApp&&(t.setType(this._type),t.setForbidEdit(!this._editable)),t.maxLength=this._maxChars;this.padding;if(t.type=this._type,t.value=this._content,t.placeholder=this._prompt,b.stage.off("keydown",this,this._onKeyDown),b.stage.on("keydown",this,this._onKeyDown),(b.stage.focus=this).event("focus"),Q.onPC&&t.focus(),!(Q.onMiniGame||Q.onBDMiniGame||Q.onTTMiniGame||Q.onQGMiniGame)){this._text;this._text=null}this.typeset(),t.setColor(this._originColor),t.setBgColor&&t.setBgColor(this.bgColor),t.setFontSize(this.fontSize),t.setFontFace(Q.onIPhone&&Gt._fontFamilyMap[this.font]||this.font),X.isConchApp&&t.setMultiAble&&t.setMultiAble(this._multiline),e.lineHeight=this.leading+this.fontSize+"px",e.fontStyle=this.italic?"italic":"normal",e.fontWeight=this.bold?"bold":"normal",e.textAlign=this.align,e.padding="0 0",this._syncInputTransform(),!X.isConchApp&&Q.onPC&&b.timer.frameLoop(1,this,this._syncInputTransform)},t._setPromptColor=function(){(s.promptStyleDOM=Q.getElementById("promptStyle"))||((s.promptStyleDOM=Q.createElement("style")).setAttribute("id","promptStyle"),Q.document.head.appendChild(s.promptStyleDOM)),s.promptStyleDOM.innerText="input::-webkit-input-placeholder, textarea::-webkit-input-placeholder {color:"+this._promptColor+"}input:-moz-placeholder, textarea:-moz-placeholder {color:"+this._promptColor+"}input::-moz-placeholder, textarea::-moz-placeholder {color:"+this._promptColor+"}input:-ms-input-placeholder, textarea:-ms-input-placeholder {color:"+this._promptColor+"}"},t._focusOut=function(){laya.display.Input.isInputting=!1,this._focus=!1,this._text=null,this._content=this.nativeInput.value,this._content?(b.superSet(Gt,this,"text",this._content),b.superSet(Gt,this,"color",this._originColor)):(b.superSet(Gt,this,"text",this._prompt),b.superSet(Gt,this,"color",this._promptColor)),b.stage.off("keydown",this,this._onKeyDown),b.stage.focus=null,this.event("blur"),X.isConchApp&&this.nativeInput.blur(),Q.onPC&&b.timer.clear(this,this._syncInputTransform)},t._onKeyDown=function(t){13===t.keyCode&&(Q.onMobile&&!this._multiline&&(this.focus=!1),this.event("enter"))},t.changeText=function(t){this._content=t,this._focus?(this.nativeInput.value=t||"",this.event("change")):e.prototype.changeText.call(this,t)},c(0,t,"color",e.prototype._$get_color,function(t){this._focus&&this.nativeInput.setColor(t),b.superSet(Gt,this,"color",this._content?t:this._promptColor),this._originColor=t}),c(0,t,"inputElementYAdjuster",function(){return console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementYAdjuster已弃用。"),0},function(t){console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementYAdjuster已弃用。")}),c(0,t,"multiline",function(){return this._multiline},function(t){this._multiline=t,this.valign=t?"top":"middle"}),c(0,t,"maxChars",function(){return this._maxChars},function(t){t<=0&&(t=1e5),this._maxChars=t}),c(0,t,"text",function(){return this._focus?this.nativeInput.value:this._content||""},function(t){b.superSet(Gt,this,"color",this._originColor),t+="",this._focus?(this.nativeInput.value=t||"",this.event("change")):(this._multiline||(t=t.replace(/\r?\n/g,"")),(this._content=t)?b.superSet(Gt,this,"text",t):(b.superSet(Gt,this,"text",this._prompt),b.superSet(Gt,this,"color",this.promptColor)))}),c(0,t,"nativeInput",function(){return this._multiline?s.area:s.input}),c(0,t,"prompt",function(){return this._prompt},function(t){!this._text&&t&&b.superSet(Gt,this,"color",this._promptColor),this.promptColor=this._promptColor,this._text?b.superSet(Gt,this,"text",this._text==this._prompt?t:this._text):b.superSet(Gt,this,"text",t),this._prompt=Gt.langPacks&&Gt.langPacks[t]?Gt.langPacks[t]:t}),c(0,t,"focus",function(){return this._focus},function(t){var e=this.nativeInput;this._focus!==t&&(t?(e.target?e.target._focusOut():this._setInputMethod(),(e.target=this)._focusIn()):(e.target=null,this._focusOut(),Q.document.body.scrollTop=0,e.blur(),X.isConchApp?e.setPos(-1e4,-1e4):s.inputContainer.contains(e)&&s.inputContainer.removeChild(e)))}),c(0,t,"restrict",function(){return this._restrictPattern?this._restrictPattern.source:""},function(t){t?(-1<(t="[^"+t+"]").indexOf("^^")&&(t=t.replace("^^","")),this._restrictPattern=new RegExp(t,"g")):this._restrictPattern=null}),c(0,t,"editable",function(){return this._editable},function(t){this._editable=t,X.isConchApp&&s.input.setForbidEdit(!t)}),c(0,t,"promptColor",function(){return this._promptColor},function(t){this._promptColor=t,this._content||b.superSet(Gt,this,"color",t)}),c(0,t,"type",function(){return this._type},function(t){this._getCSSStyle().password="password"==t,this._type=t,X.isConchApp&&this.nativeInput.setType(t)}),c(0,t,"inputElementXAdjuster",function(){return console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementXAdjuster已弃用。"),0},function(t){console.warn("deprecated: 由于即使设置了该值，在各平台和浏览器之间也不一定一致，inputElementXAdjuster已弃用。")}),c(0,t,"asPassword",function(){return this._getCSSStyle().password},function(t){this._getCSSStyle().password=t,this._type="password",console.warn('deprecated: 使用type="password"替代设置asPassword, asPassword将在下次重大更新时删去'),this.isChanged=!0}),s.__init__=function(){if(s._createInputElement(),Q.onMobile){var t=!1;(Q.onMiniGame||Q.onBDMiniGame||Q.onKGMiniGame||Q.onTTMiniGame||Q.onQGMiniGame)&&(t=!0),X.canvas.addEventListener(s.IOS_IFRAME?t?"touchend":"click":"touchend",s._popupInputMethod)}},s._popupInputMethod=function(t){laya.display.Input.isInputting&&laya.display.Input.inputElement.focus()},s._createInputElement=function(){s._initInput(s.area=Q.createElement("textarea")),s._initInput(s.input=Q.createElement("input")),(s.inputContainer=Q.createElement("div")).style.position="absolute",s.inputContainer.style.zIndex=1e5,Q.container.appendChild(s.inputContainer),s.inputContainer.setPos=function(t,e){s.inputContainer.style.left=t+"px",s.inputContainer.style.top=e+"px"}},s._initInput=function(e){var t=e.style;t.cssText="position:absolute;overflow:hidden;resize:none;transform-origin:0 0;-webkit-transform-origin:0 0;-moz-transform-origin:0 0;-o-transform-origin:0 0;",t.resize="none",t.backgroundColor="transparent",t.border="none",t.outline="none",t.zIndex=1,e.addEventListener("input",s._processInputting),e.addEventListener("mousemove",s._stopEvent),e.addEventListener("mousedown",s._stopEvent),e.addEventListener("touchmove",s._stopEvent),e.setFontFace=function(t){e.style.fontFamily=t},X.isConchApp||(e.setColor=function(t){e.style.color=t},e.setFontSize=function(t){e.style.fontSize=t+"px"})},s._processInputting=function(t){var e=laya.display.Input.inputElement.target;if(e){var i=laya.display.Input.inputElement.value;e._restrictPattern&&(i=i.replace(/\u2006|\x27/g,""),e._restrictPattern.test(i)&&(i=i.replace(e._restrictPattern,""),laya.display.Input.inputElement.value=i)),e._text=i,e.event("input")}},s._stopEvent=function(t){"touchmove"==t.type&&t.preventDefault(),t.stopPropagation&&t.stopPropagation()},s.TYPE_TEXT="text",s.TYPE_PASSWORD="password",s.TYPE_EMAIL="email",s.TYPE_URL="url",s.TYPE_NUMBER="number",s.TYPE_RANGE="range",s.TYPE_DATE="date",s.TYPE_MONTH="month",s.TYPE_WEEK="week",s.TYPE_TIME="time",s.TYPE_DATE_TIME="datetime",s.TYPE_DATE_TIME_LOCAL="datetime-local",s.TYPE_SEARCH="search",s.input=null,s.area=null,s.inputElement=null,s.inputContainer=null,s.confirmButton=null,s.promptStyleDOM=null,s.inputHeight=45,s.isInputting=!1,s.stageMatrix=null,h(s,["IOS_IFRAME",function(){return this.IOS_IFRAME=Q.onIOS&&Q.window.top!=Q.window.self}]),s}(Gt),Vt=function(t){function i(t,e){this._recreateLock=!1,this._needReleaseAgain=!1,this._enableMerageInAtlas=!0,i.__super.call(this),this._init_(t,e)}p(i,"laya.resource.HTMLImage",zt);var e=i.prototype;return e._init_=function(t,e){this._src=t,this._source=new Q.window.Image,e&&(e.onload&&(this.onload=e.onload),e.onerror&&(this.onerror=e.onerror),e.onCreate&&e.onCreate(this)),0!=t.indexOf("data:image")&&(this._source.crossOrigin=""),t&&(this._source.src=t)},e.recreateResource=function(){var t=this;if(""===this._src)throw new Error("src no null！");if(this._needReleaseAgain=!1,this._source){if(this._recreateLock)return;this.memorySize=this._w*this._h*4,this._recreateLock=!1,this.completeCreate()}else{this._recreateLock=!0;var e=this;this._source=new Q.window.Image,this._source.crossOrigin="",this._source.onload=function(){if(e._needReleaseAgain)return e._needReleaseAgain=!1,e._source.onload=null,void(e._source=null);e._source.onload=null,e.memorySize=t._w*t._h*4,e._recreateLock=!1,e.completeCreate()},this._source.src=this._src}},e.disposeResource=function(){this._recreateLock&&(this._needReleaseAgain=!0),this._source&&(this._source=null,this.memorySize=0)},e.onresize=function(){this._w=this._source.width,this._h=this._source.height},c(0,e,"onload",null,function(t){var e=this;this._onload=t,this._source&&(this._source.onload=null!=this._onload?function(){e.onresize(),e._onload()}:null)}),c(0,e,"onerror",null,function(t){var e=this;this._onerror=t,this._source&&(this._source.onerror=null!=this._onerror?function(){e._onerror()}:null)}),c(0,e,"enableMerageInAtlas",function(){return this._enableMerageInAtlas},function(t){this._enableMerageInAtlas=t,X.isConchApp&&this._source&&(this._source.enableMerageInAtlas=t)}),i.create=function(t,e){return new i(t,e)},i}(),jt=(function(r){function t(){this._target=null,this._playEvents=null,this._initData={},this._aniKeys=null,this._effectClass=null,t.__super.call(this)}p(t,"laya.display.EffectAnimation",r);var e=t.prototype;e._onOtherBegin=function(t){t!=this&&this.stop()},e.addEvent=function(){this._target&&this._playEvents&&(this._setControlNode(this._target),this._target.on(this._playEvents,this,this._onPlayAction))},e._onPlayAction=function(){this.play(0,!1)},e.play=function(t,e,i,n){void 0===t&&(t=0),void 0===e&&(e=!0),void 0===i&&(i=""),void 0===n&&(n=!0),this._target&&(this._target.event("effectanimationbegin",[this]),this._recordInitData(),laya.display.AnimationPlayerBase.prototype.play.call(this,t,e,i,n))},e._recordInitData=function(){if(this._aniKeys){var t,e,i=0;for(t=this._aniKeys.length,i=0;i<t;i++)e=this._aniKeys[i],this._initData[e]=this._target[e]}},e._displayToIndex=function(t){if(this._animationData){t<0&&(t=0),t>this._count&&(t=this._count);var e=this._animationData.nodes,i=0,n=e.length;for(n=1<n?1:n,i=0;i<n;i++)this._displayNodeToFrame(e[i],t)}},e._displayNodeToFrame=function(t,e,i){if(this._target){var n;n=this._target;var s,r,o,a,h=t.frames,l=t.keys,c=0,u=l.length;a=t.secondFrames;var _,d,f,p,g=0;for(c=0;c<u;c++)r=h[s=l[c]],o=-1==(g=a[s])?this._initData[s]:e<g?(f=(d=t.keyframes[s])[0]).tween?(null==(_=at[f.tweenMethod])&&(_=at.linearNone),p=d[1],_(e,this._initData[s],p.value-this._initData[s],p.index)):this._initData[s]:r.length>e?r[e]:r[r.length-1],n[s]=o}},e._calculateNodeKeyFrames=function(t){r.prototype._calculateNodeKeyFrames.call(this,t);var e,i,n,s=t.keyframes;t.target;for(e in n={},t.secondFrames=n,s)(i=s[e]).length<=1?n[e]=-1:n[e]=i[1].index},c(0,e,"target",function(){return this._target},function(t){this._target&&this._target.off("effectanimationbegin",this,this._onOtherBegin),this._target=t,this._target&&this._target.on("effectanimationbegin",this,this._onOtherBegin),this.addEvent()}),c(0,e,"playEvent",null,function(t){(this._playEvents=t)&&this.addEvent()}),c(0,e,"effectData",null,function(t){var e;t&&(e=t.animations)&&e[0]&&(this._setUp({},e[0]),e[0].nodes&&e[0].nodes[0]&&(this._aniKeys=e[0].nodes[0].keys))}),c(0,e,"effectClass",null,function(t){var e,i;this._effectClass=it.getClass(t),!this._effectClass||(e=this._effectClass.uiView)&&(i=e.animations)&&i[0]&&(this._setUp({},i[0]),i[0].nodes&&i[0].nodes[0]&&(this._aniKeys=i[0].nodes[0].keys))}),t.EffectAnimationBegin="effectanimationbegin"}(Xt),function(e){var P;function E(){this.animationList=null,this.animationDic=null,this._nodeList=null,this._nodeDefaultProps=null,this._gList=null,this._nodeIDAniDic={},this._rootNode=null,this._nodeGDic=null,E.__super.call(this)}p(E,"laya.utils.GraphicAnimation",e);var t=E.prototype;return t._parseNodeList=function(t){this._nodeList||(this._nodeList=[]),this._nodeDefaultProps[t.compId]=t.props,t.compId&&this._nodeList.push(t.compId);var e=t.child;if(e){var i=0,n=e.length;for(i=0;i<n;i++)this._parseNodeList(e[i])}},t._calGraphicData=function(t){var e;if(this._setUp(null,t),this._createGraphicData(),this._nodeIDAniDic)for(e in this._nodeIDAniDic)this._nodeIDAniDic[e]=null},t._createGraphicData=function(){var t,e=[],i=0,n=this.count,s=this._animationNewFrames;for(s||(s=[]),i=0;i<n;i++)!s[i]&&t||(t=this._createFrameGraphic(i)),e.push(t);this._gList=e},t._createFrameGraphic=function(t){var e=A.createGraphics();return E._rootMatrix||(E._rootMatrix=new F),this._updateNodeGraphic(this._rootNode,t,E._rootMatrix,e),e},t._updateNodeGraphic=function(t,e,i,n,s){var r;void 0===s&&(s=1);var o,a,h,l=(r=this._nodeGDic[t.compId]=this._getNodeGraphicData(t.compId,e,this._nodeGDic[t.compId])).alpha*s;if(!(l<.01)&&(r.resultTransform||(r.resultTransform=F.create()),o=r.resultTransform,F.mul(r.transform,i,o),r.skin&&(a=this._getTextureByUrl(r.skin))&&(o._checkTransform()?(n.drawTexture(a,0,0,r.width,r.height,o,l),r.resultTransform=null):n.drawTexture(a,o.tx,o.ty,r.width,r.height,null,l)),h=t.child)){var c,u=0;for(c=h.length,u=0;u<c;u++)this._updateNodeGraphic(h[u],e,o,n,l)}},t._updateNoChilds=function(t,e){if(t.skin){var i=this._getTextureByUrl(t.skin);if(i){var n=t.transform;n._checkTransform();!n.bTransform?e.drawTexture(i,n.tx,n.ty,t.width,t.height,null,t.alpha):e.drawTexture(i,0,0,t.width,t.height,n.clone(),t.alpha)}}},t._updateNodeGraphic2=function(t,e,i){var n;if(n=this._nodeGDic[t.compId]=this._getNodeGraphicData(t.compId,e,this._nodeGDic[t.compId]),t.child){var s=n.transform;s._checkTransform();var r,o;o=(r=!s.bTransform)&&(0!=s.tx||0!=s.ty);var a,h,l;if((a=s.bTransform||1!=n.alpha)&&i.save(),1!=n.alpha&&i.alpha(n.alpha),r?o&&i.translate(s.tx,s.ty):i.transform(s.clone()),h=t.child,n.skin&&(l=this._getTextureByUrl(n.skin))&&i.drawTexture(l,0,0,n.width,n.height),h){var c,u=0;for(c=h.length,u=0;u<c;u++)this._updateNodeGraphic2(h[u],e,i)}a?i.restore():r?o&&i.translate(-s.tx,-s.ty):i.transform(s.clone().invert())}else this._updateNoChilds(n,i)},t._calculateNodeKeyFrames=function(t){e.prototype._calculateNodeKeyFrames.call(this,t),this._nodeIDAniDic[t.target]=t},t.getNodeDataByID=function(t){return this._nodeIDAniDic[t]},t._getParams=function(t,e,i,n){var s=E._temParam;s.length=e.length;var r=0,o=e.length;for(r=0;r<o;r++)s[r]=this._getObjVar(t,e[r][0],i,e[r][1],n);return s},t._getObjVar=function(t,e,i,n,s){if(t.hasOwnProperty(e)){var r=t[e];if(i>=r.length&&(i=r.length-1),null!=t[e][i])return t[e][i]}return s.hasOwnProperty(e)?s[e]:n},t._getNodeGraphicData=function(t,e,i){i||(i=P.create()),i.transform?i.transform.identity():i.transform=F.create();var n=this.getNodeDataByID(t);if(!n)return i;var s,r,o=n.frames,a=this._getParams(o,E._drawTextureCmd,e,this._nodeDefaultProps[t]),h=a[0],l=NaN,c=NaN,u=a[5],_=a[6],d=a[13],f=a[14],p=a[7],g=a[8],m=a[9],v=a[11],y=a[12];l=a[3],c=a[4],0!=l&&0!=c||(h=null),-1==l&&(l=0),-1==c&&(c=0),i.skin=h,i.width=l,i.height=c,h&&((s=this._getTextureByUrl(h))?(l||(l=s.sourceWidth),c||(c=s.sourceHeight)):console.warn("lost skin:",h,",you may load pics first")),i.alpha=a[10],r=i.transform,0!=d&&(u=d*l),0!=f&&(_=f*c),0==u&&0==_||r.translate(-u,-_);var w=null;if(m||1!==p||1!==g||v||y){(w=E._tempMt).identity(),w.bTransform=!0;var x=.0174532922222222*(m-v),T=.0174532922222222*(m+y),b=Math.cos(T),C=Math.sin(T),M=Math.sin(x),S=Math.cos(x);w.a=p*b,w.b=p*C,w.c=-g*M,w.d=g*S,w.tx=w.ty=0}return w&&(r=F.mul(r,w,r)),r.translate(a[1],a[2]),i},t._getTextureByUrl=function(t){return It.getRes(t)},t.setAniData=function(t,e){if(t.animations){this._nodeDefaultProps={},this._nodeGDic={},this._nodeList&&(this._nodeList.length=0),this._rootNode=t,this._parseNodeList(t);var i,n={},s=[],r=t.animations,o=0,a=r.length;for(o=0;o<a;o++)if(i=r[o],this._labels=null,(!e||e==i.name)&&i){try{this._calGraphicData(i)}catch(t){console.warn("parse animation fail:"+i.name+",empty animation created"),this._gList=[]}var h={};h.interval=1e3/i.frameRate,h.frames=this._gList,h.labels=this._labels,h.name=i.name,s.push(h),n[i.name]=h}this.animationList=s,this.animationDic=n}E._temParam.length=0},t.parseByData=function(t){var e,i;e=t.nodeRoot,i=t.aniO,delete t.nodeRoot,delete t.aniO,this._nodeDefaultProps={},this._nodeGDic={},this._nodeList&&(this._nodeList.length=0),this._rootNode=e,this._parseNodeList(e),this._labels=null;try{this._calGraphicData(i)}catch(t){console.warn("parse animation fail:"+i.name+",empty animation created"),this._gList=[]}var n=t;return n.interval=1e3/i.frameRate,n.frames=this._gList,n.labels=this._labels,n.name=i.name,n},t.setUpAniData=function(t){if(t.animations){var e,i={},n=[],s=t.animations,r=0,o=s.length;for(r=0;r<o;r++)if(e=s[r]){var a={};a.name=e.name,a.aniO=e,a.nodeRoot=t,n.push(a),i[e.name]=a}this.animationList=n,this.animationDic=i}},t._clear=function(){var t,e;if(this.animationList=null,this.animationDic=null,this._gList=null,this._nodeGDic)for(t in this._nodeGDic)(e=this._nodeGDic[t])&&e.recover();this._nodeGDic=null},E.parseAnimationByData=function(t){var e;return E._I||(E._I=new E),e=E._I.parseByData(t),E._I._clear(),e},E.parseAnimationData=function(t){var e;return E._I||(E._I=new E),E._I.setUpAniData(t),(e={}).animationList=E._I.animationList,e.animationDic=E._I.animationDic,E._I._clear(),e},E._drawTextureCmd=[["skin",null],["x",0],["y",0],["width",-1],["height",-1],["pivotX",0],["pivotY",0],["scaleX",1],["scaleY",1],["rotation",0],["alpha",1],["skewX",0],["skewY",0],["anchorX",0],["anchorY",0]],E._temParam=[],E._I=null,E._rootMatrix=null,h(E,["_tempMt",function(){return this._tempMt=new F}]),E.__init$=function(){function t(){this.skin=null,this.transform=null,this.resultTransform=null,this.width=NaN,this.height=NaN,this.alpha=1}p(t,""),t.prototype.recover=function(){this.skin=null,this.width=0,this.height=0,this.alpha=1,this.transform&&(this.transform.destroy(),this.transform=null),this.resultTransform&&(this.resultTransform.destroy(),this.resultTransform=null),_t.recover("GraphicNode",this)},t.create=function(){return _t.getItemByClass("GraphicNode",t)},P=t},E}(Xt));b.__init([l,Lt,jt,X,Q,gt,G,Ft])}(window,document,Laya),function(t,e,i){i.un,i.uns,i.static;var n=i.class;i.getset,i.__newvec;function s(){}new(n(s,"LayaMain"),s)}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(t,e){"use strict";for(var i in Object.defineProperty(e,"__esModule",{value:!0}),Laya){var n=Laya[i];n&&n.__isclass&&(e[i]=n)}});
!function(o,i,a){a.un,a.uns;var e=a.static,n=a.class,l=a.getset,c=(a.__newvec,laya.utils.Browser),t=(laya.events.Event,laya.events.EventDispatcher),f=laya.resource.HTMLImage,p=laya.utils.Handler,s=laya.display.Input,g=laya.net.Loader,r=laya.net.LocalStorage,u=(laya.maths.Matrix,laya.renders.Render),d=laya.utils.RunDriver,h=laya.media.SoundChannel,v=laya.media.SoundManager,y=laya.net.URL,w=laya.utils.Utils,_=(n(m,"laya.wx.mini.MiniAdpter"),m.getJson=function(i){return JSON.parse(i)},m.init=function(i,e){if(void 0===i&&(i=!1),void 0===e&&(e=!1),!m._inited&&(m._inited=!0,(m.window=o).hasOwnProperty("wx")&&!(m.window.navigator.userAgent.indexOf("MiniGame")<0))){m.isZiYu=e,m.isPosMsgYu=i,m.EnvConfig={};try{laya.webgl.resource.WebGLCanvas.premulAlpha=!0}catch(i){}if(m.isZiYu||(x.setNativeFileDir("/layaairGame"),x.existDir(x.fileNativeDir,p.create(m,m.onMkdirCallBack))),"ios 10.1.1"===(m.systemInfo=m.window.wx.getSystemInfoSync()).system.toLowerCase())try{laya.webgl.resource.WebGLCharImage.canUseCanvas=!1}catch(i){}m.window.focus=function(){},a._getUrlPath=function(){},a.getUrlPath=function(){},m.window.logtime=function(i){},m.window.alertTimeLog=function(i){},m.window.resetShareInfo=function(){},m.window.CanvasRenderingContext2D=function(){},m.window.CanvasRenderingContext2D.prototype=m.window.wx.createCanvas().getContext("2d").__proto__,m.window.document.body.appendChild=function(){},m.EnvConfig.pixelRatioInt=0,d.getPixelRatio=m.pixelRatio,m._preCreateElement=c.createElement,c.createElement=m.createElement,d.createShaderCondition=m.createShaderCondition,w.parseXMLFromString=m.parseXMLFromString,s._createInputElement=b._createInputElement,m.EnvConfig.load=g.prototype.load,g.prototype.load=O.prototype.load,g.prototype._loadImage=C.prototype._loadImage,(r._baseClass=S).__init__(),m.onReciveData()}},m.onReciveData=function(){laya.wx.mini.MiniAdpter.isZiYu&&m.window.wx.onMessage(function(i){"opendatacontext"==i.isLoad?i.url&&(x.ziyuFileData[i.url]=i.atlasdata,x.ziyuFileTextureData[i.imgReadyUrl]=i.imgNativeUrl):"openJsondatacontext"==i.isLoad?i.url&&(x.ziyuFileData[i.url]=i.atlasdata):"openJsondatacontextPic"==i.isLoad&&(x.ziyuFileTextureData[i.imgReadyUrl]=i.imgNativeUrl)})},m.measureText=function(i){var e=m._measureText(i);return e||(e={width:16},console.warn("-------微信获取文字宽度失败----等待修复---------")),e},m.getUrlEncode=function(i,e){return"arraybuffer"==e?"":"utf8"},m.downLoadFile=function(i,e,t,n){void 0===e&&(e=""),void 0===n&&(n="utf8"),x.getFileInfo(i)?null!=t&&t.runWith([0]):x.downLoadFile(i,e,t,n)},m.remove=function(i,e){x.deleteFile("",i,e,"",0)},m.removeAll=function(){x.deleteAll()},m.hasNativeFile=function(i){return x.isLocalNativeFile(i)},m.getFileInfo=function(i){return x.getFileInfo(i)},m.getFileList=function(){return x.filesListObj},m.exitMiniProgram=function(){m.window.wx.exitMiniProgram()},m.onMkdirCallBack=function(i,e){i||(x.filesListObj=JSON.parse(e.data))},m.pixelRatio=function(){if(!m.EnvConfig.pixelRatioInt)try{return m.EnvConfig.pixelRatioInt=m.systemInfo.pixelRatio,m.systemInfo.pixelRatio}catch(i){}return m.EnvConfig.pixelRatioInt},m.createElement=function(i){var e;if("canvas"==i)return 1==m.idx?m.isZiYu?(e=m.window.sharedCanvas).style={}:e=m.window.canvas:e=m.window.wx.createCanvas(),m.idx++,e;if("textarea"==i||"input"==i)return m.onCreateInput(i);if("div"!=i)return m._preCreateElement(i);var t=m._preCreateElement(i);return t.contains=function(i){return null},t.removeChild=function(i){},t},m.onCreateInput=function(i){var e=m._preCreateElement(i);return e.focus=b.wxinputFocus,e.blur=b.wxinputblur,e.style={},e.value=0,e.parentElement={},e.placeholder={},e.type={},e.setColor=function(i){},e.setType=function(i){},e.setFontFace=function(i){},e.addEventListener=function(i){},e.contains=function(i){return null},e.removeChild=function(i){},e},m.createShaderCondition=function(i){var e=this;return function(){return e[i.replace("this.","")]}},m.sendAtlasToOpenDataContext=function(i){if(!laya.wx.mini.MiniAdpter.isZiYu){var e=g.getRes(y.formatURL(i));if(!e)throw"传递的url没有获取到对应的图集数据信息，请确保图集已经过！";if(e.meta.image.split(","),e.meta&&e.meta.image)for(var t=e.meta.image.split(","),n=0<=i.indexOf("/")?"/":"\\",o=i.lastIndexOf(n),a=0<=o?i.substr(0,o+1):"",l=0,s=t.length;l<s;l++)t[l]=a+t[l];else t=[i.replace(".json",".png")];for(l=0;l<t.length;l++){var r=t[l];m.postInfoToContext(i,r,e)}}},m.postInfoToContext=function(i,e,t){var n={frames:t.frames,meta:t.meta},o=e,a=x.getFileInfo(y.formatURL(e));if(a)var l=a.md5,s=x.getFileNativePath(l);else s=o;if(!s)throw"获取图集的磁盘url路径不存在！";m.window.wx.postMessage({url:i,atlasdata:n,imgNativeUrl:s,imgReadyUrl:o,isLoad:"opendatacontext"})},m.sendSinglePicToOpenDataContext=function(i){var e=y.formatURL(i),t=x.getFileInfo(e);if(t){var n=t.md5,o=x.getFileNativePath(n);i=e}else o=i;if(!o)throw"获取图集的磁盘url路径不存在！";m.window.wx.postMessage({url:i,imgNativeUrl:o,imgReadyUrl:i,isLoad:"openJsondatacontextPic"})},m.sendJsonDataToDataContext=function(i){if(!laya.wx.mini.MiniAdpter.isZiYu){var e=g.getRes(i);if(!e)throw"传递的url没有获取到对应的图集数据信息，请确保图集已经过！";m.window.wx.postMessage({url:i,atlasdata:e,isLoad:"openJsondatacontext"})}},m.EnvConfig=null,m.window=null,m._preCreateElement=null,m._inited=!1,m.systemInfo=null,m.isZiYu=!1,m.isPosMsgYu=!1,m.autoCacheFile=!0,m.minClearSize=5242880,m.subNativeFiles=null,m.subNativeheads=[],m.subMaps=[],m.AutoCacheDownFile=!1,m._measureText=null,m.parseXMLFromString=function(i){var e;i=i.replace(/>\s+</g,"><");try{e=(new o.Parser.DOMParser).parseFromString(i,"text/xml")}catch(i){throw"需要引入xml解析库文件"}return e},m.idx=1,e(m,["nativefiles",function(){return this.nativefiles=["layaNativeDir","wxlocal"]}]),m);function m(){}var x=(n(F,"laya.wx.mini.MiniFileMgr"),F.isLocalNativeFile=function(i){for(var e=0,t=_.nativefiles.length;e<t;e++)if(-1!=i.indexOf(_.nativefiles[e]))return!0;return!1},F.getFileInfo=function(i){var e=F.filesListObj[i];return null==e?null:e},F.read=function(i,e,t,n,o,a){var l;void 0===e&&(e="ascill"),void 0===n&&(n=""),void 0===o&&(o=!1),void 0===a&&(a=""),l=""==n||-1==n.indexOf("http://")&&-1==n.indexOf("https://")?i:F.getFileNativePath(i),F.fs.readFile({filePath:l,encoding:e,success:function(i){null!=t&&t.runWith([0,i])},fail:function(i){i&&""!=n?F.downFiles(n,e,t,n,o,a):null!=t&&t.runWith([1])}})},F.downFiles=function(e,t,n,o,a,l,s){void 0===t&&(t="ascii"),void 0===o&&(o=""),void 0===a&&(a=!1),void 0===l&&(l=""),void 0===s&&(s=!0),F.wxdown({url:e,success:function(i){200===i.statusCode?F.readFile(i.tempFilePath,t,n,o,a,l,s):403===i.statusCode?null!=n&&n.runWith([0,e]):null!=n&&n.runWith([1,i])},fail:function(i){null!=n&&n.runWith([1,i])}}).onProgressUpdate(function(i){null!=n&&n.runWith([2,i.progress])})},F.readFile=function(e,t,n,o,a,i,l){void 0===t&&(t="ascill"),void 0===o&&(o=""),void 0===a&&(a=!1),void 0===i&&(i=""),void 0===l&&(l=!0),F.fs.readFile({filePath:e,encoding:t,success:function(i){-1!=e.indexOf("http://")||-1!=e.indexOf("https://")?(_.autoCacheFile||a)&&F.copyFile(e,o,n,t,l):null!=n&&n.runWith([0,i])},fail:function(i){i&&null!=n&&n.runWith([1,i])}})},F.downOtherFiles=function(i,e,t,n,o){void 0===t&&(t=""),void 0===n&&(n=!1),void 0===o&&(o=!0),F.wxdown({url:i,success:function(i){200===i.statusCode?(_.autoCacheFile||n)&&-1==t.indexOf("wx.qlogo.cn")&&-1==t.indexOf(".php")?F.copyFile(i.tempFilePath,t,e,"",o):null!=e&&e.runWith([0,i.tempFilePath]):null!=e&&e.runWith([1,i])},fail:function(i){null!=e&&e.runWith([1,i])}})},F.downLoadFile=function(i,e,t,n){void 0===e&&(e=""),void 0===n&&(n="ascii"),o.navigator.userAgent.indexOf("MiniGame")<0?a.loader.load(i,t):"image"==e||"sound"==e?F.downOtherFiles(i,t,i,!0,!1):F.downFiles(i,n,t,i,!0,e,!1)},F.copyFile=function(i,t,n,o,a){void 0===o&&(o=""),void 0===a&&(a=!0);var e=i.split("/"),l=e[e.length-1],s=F.getFileInfo(t),r=F.getFileNativePath(l),u=F.getCacheUseSize();s?s.readyUrl!=t?F.fs.getFileInfo({filePath:i,success:function(i){a&&52428800<=u+4194304+i.size&&(i.size>_.minClearSize&&(_.minClearSize=i.size),F.onClearCacheRes()),F.deleteFile(l,t,n,o,i.size)},fail:function(i){null!=n&&n.runWith([1,i])}}):null!=n&&n.runWith([0]):F.fs.getFileInfo({filePath:i,success:function(e){a&&52428800<=u+4194304+e.size&&(e.size>_.minClearSize&&(_.minClearSize=e.size),F.onClearCacheRes()),F.fs.copyFile({srcPath:i,destPath:r,success:function(i){F.onSaveFile(t,l,!0,o,n,e.size)},fail:function(i){null!=n&&n.runWith([1,i])}})},fail:function(i){null!=n&&n.runWith([1,i])}})},F.onClearCacheRes=function(){var i=_.minClearSize,e=[];for(var t in F.filesListObj)e.push(F.filesListObj[t]);F.sortOn(e,"times",16);for(var n=0,o=1,a=e.length;o<a;o++){var l=e[o];if(i<=n)break;n+=l.size,F.deleteFile("",l.readyUrl)}},F.sortOn=function(i,t,e){return void 0===e&&(e=0),16==e?i.sort(function(i,e){return i[t]-e[t]}):18==e?i.sort(function(i,e){return e[t]-i[t]}):i.sort(function(i,e){return i[t]-e[t]})},F.getFileNativePath=function(i){return laya.wx.mini.MiniFileMgr.fileNativeDir+"/"+i},F.deleteFile=function(n,o,a,l,s){void 0===o&&(o=""),void 0===l&&(l=""),void 0===s&&(s=0);var i=F.getFileInfo(o),e=F.getFileNativePath(i.md5);F.fs.unlink({filePath:e,success:function(i){var e=""!=n;if(""!=n){var t=F.getFileNativePath(n);F.fs.copyFile({srcPath:n,destPath:t,success:function(i){F.onSaveFile(o,n,e,l,a,i.size)},fail:function(i){null!=a&&a.runWith([1,i])}})}else F.onSaveFile(o,n,e,l,a,s)},fail:function(i){}})},F.deleteAll=function(){var i=[];for(var e in F.filesListObj)i.push(F.filesListObj[e]);for(var t=1,n=i.length;t<n;t++){var o=i[t];F.deleteFile("",o.readyUrl)}laya.wx.mini.MiniFileMgr.filesListObj&&laya.wx.mini.MiniFileMgr.filesListObj.fileUsedSize&&(laya.wx.mini.MiniFileMgr.filesListObj.fileUsedSize=0),laya.wx.mini.MiniFileMgr.writeFilesList("",JSON.stringify({}),!1)},F.onSaveFile=function(i,e,t,n,o,a){void 0===t&&(t=!0),void 0===n&&(n=""),void 0===a&&(a=0);var l=i;if(null==F.filesListObj.fileUsedSize&&(F.filesListObj.fileUsedSize=0),t)F.getFileNativePath(e),F.filesListObj[l]={md5:e,readyUrl:i,size:a,times:c.now(),encoding:n},F.filesListObj.fileUsedSize=parseInt(F.filesListObj.fileUsedSize)+a,F.writeFilesList(l,JSON.stringify(F.filesListObj),!0),null!=o&&o.runWith([0]);else if(F.filesListObj[l]){var s=parseInt(F.filesListObj[l].size);F.filesListObj.fileUsedSize=parseInt(F.filesListObj.fileUsedSize)-s,delete F.filesListObj[l],F.writeFilesList(l,JSON.stringify(F.filesListObj),!1),null!=o&&o.runWith([0])}},F.writeFilesList=function(i,e,t){var n=F.fileNativeDir+"/"+F.fileListName;F.fs.writeFile({filePath:n,encoding:"utf8",data:e,success:function(i){},fail:function(i){}}),!_.isZiYu&&_.isPosMsgYu&&wx.postMessage({url:i,data:F.filesListObj[i],isLoad:"filenative",isAdd:t})},F.getCacheUseSize=function(){return F.filesListObj&&F.filesListObj.fileUsedSize?F.filesListObj.fileUsedSize:0},F.existDir=function(i,e){F.fs.mkdir({dirPath:i,success:function(i){null!=e&&e.runWith([0,{data:JSON.stringify({})}])},fail:function(i){-1!=i.errMsg.indexOf("file already exists")?F.readSync(F.fileListName,"utf8",e):null!=e&&e.runWith([1,i])}})},F.readSync=function(i,e,t,n){void 0===e&&(e="ascill"),void 0===n&&(n="");var o,a=F.getFileNativePath(i);try{o=F.fs.readFileSync(a,e),null!=t&&t.runWith([0,{data:o}])}catch(i){null!=t&&t.runWith([1])}},F.setNativeFileDir=function(i){F.fileNativeDir=wx.env.USER_DATA_PATH+i},F.filesListObj={},F.fileNativeDir=null,F.fileListName="layaairfiles.txt",F.ziyuFileData={},F.ziyuFileTextureData={},F.loadPath="",F.DESCENDING=2,F.NUMERIC=16,e(F,["fs",function(){return this.fs=wx.getFileSystemManager()},"wxdown",function(){return this.wxdown=wx.downloadFile}]),F);function F(){}var C=(n(E,"laya.wx.mini.MiniImage"),E.prototype._loadImage=function(i){var e=this;if(_.isZiYu)E.onCreateImage(i,e,!0);else{var t=!1;if(x.isLocalNativeFile(i)){if(-1!=i.indexOf("http://")||-1!=i.indexOf("https://"))if(""!=x.loadPath)i=i.split(x.loadPath)[1];else{var n=""!=y.rootPath?y.rootPath:y.basePath,o=i;""!=n&&(i=i.split(n)[1]),i||(i=o)}if(_.subNativeFiles&&0==_.subNativeheads.length)for(var a in _.subNativeFiles){var l=_.subNativeFiles[a];_.subNativeheads=_.subNativeheads.concat(l);for(var s=0;s<l.length;s++)_.subMaps[l[s]]=a+"/"+l[s]}if(_.subNativeFiles&&-1!=i.indexOf("/")){var r=i.split("/")[0]+"/";if(r&&-1!=_.subNativeheads.indexOf(r)){var u=_.subMaps[r];i=i.replace(r,u)}}}else t=!0,i=y.formatURL(i);x.getFileInfo(i)?E.onCreateImage(i,e,!t):-1!=i.indexOf("http://")||-1!=i.indexOf("https://")?_.isZiYu?E.onCreateImage(i,e,!0):x.downOtherFiles(i,new p(E,E.onDownImgCallBack,[i,e]),i):E.onCreateImage(i,e,!0)}},E.onDownImgCallBack=function(i,e,t,n){void 0===n&&(n=""),t?e.onError(null):E.onCreateImage(i,e,!1,n)},E.onCreateImage=function(e,t,i,n){var o,a;if(void 0===i&&(i=!1),void 0===n&&(n=""),_.autoCacheFile)if(i)if(_.isZiYu){var l=y.formatURL(e);o=x.ziyuFileTextureData[l]?x.ziyuFileTextureData[l]:e}else o=e;else if(""!=n)o=n;else{var s=x.getFileInfo(e).md5;o=x.getFileNativePath(s)}else o=i?e:n;function r(){a.onload=null,a.onerror=null,delete t.imgCache[e]}function u(){r(),t._url=y.formatURL(t._url),t.onLoaded(a)}function d(){r(),t.event("error","Load image failed")}null==t.imgCache&&(t.imgCache={}),"nativeimage"==t._type?((a=new c.window.Image).crossOrigin="",a.onload=u,a.onerror=d,a.src=o,t.imgCache[e]=a):new f.create(o,{onload:u,onerror:d,onCreate:function(i){a=i,t.imgCache[e]=i}})},E);function E(){}var b=(n(L,"laya.wx.mini.MiniInput"),L._createInputElement=function(){s._initInput(s.area=c.createElement("textarea")),s._initInput(s.input=c.createElement("input")),s.inputContainer=c.createElement("div"),s.inputContainer.style.position="absolute",s.inputContainer.style.zIndex=1e5,c.container.appendChild(s.inputContainer),s.inputContainer.setPos=function(i,e){s.inputContainer.style.left=i+"px",s.inputContainer.style.top=e+"px"},a.stage.on("resize",null,L._onStageResize),wx.onWindowResize&&wx.onWindowResize(function(i){o.dispatchEvent&&o.dispatchEvent("resize")}),v._soundClass=M,v._musicClass=M;var i=_.systemInfo.model,e=_.systemInfo.system;-1!=i.indexOf("iPhone")&&(c.onIPhone=!0,c.onIOS=!0,c.onIPad=!0,c.onAndroid=!1),-1==e.indexOf("Android")&&-1==e.indexOf("Adr")||(c.onAndroid=!0,c.onIPhone=!1,c.onIOS=!1,c.onIPad=!1)},L._onStageResize=function(){a.stage._canvasTransform.identity().scale(c.width/u.canvas.width/d.getPixelRatio(),c.height/u.canvas.height/d.getPixelRatio())},L.wxinputFocus=function(i){var t=s.inputElement.target;t&&!t.editable||(_.window.wx.offKeyboardConfirm(),_.window.wx.offKeyboardInput(),_.window.wx.showKeyboard({defaultValue:t.text,maxLength:t.maxChars,multiple:t.multiline,confirmHold:!0,confirmType:"done",success:function(i){},fail:function(i){}}),_.window.wx.onKeyboardConfirm(function(i){var e=i?i.value:"";t.text=e,t.event("input"),laya.wx.mini.MiniInput.inputEnter()}),_.window.wx.onKeyboardInput(function(i){var e=i?i.value:"";t.multiline||-1==e.indexOf("\n")?(t.text=e,t.event("input")):laya.wx.mini.MiniInput.inputEnter()}))},L.inputEnter=function(){s.inputElement.target.focus=!1},L.wxinputblur=function(){L.hideKeyboard()},L.hideKeyboard=function(){_.window.wx.offKeyboardConfirm(),_.window.wx.offKeyboardInput(),_.window.wx.hideKeyboard({success:function(i){console.log("隐藏键盘")},fail:function(i){console.log("隐藏键盘出错:"+(i?i.errMsg:""))}})},L);function L(){}var S=(n(I,"laya.wx.mini.MiniLocalStorage"),I.__init__=function(){I.items=I},I.setItem=function(e,t){try{wx.setStorageSync(e,t)}catch(i){wx.setStorage({key:e,data:t})}},I.getItem=function(i){return wx.getStorageSync(i)},I.setJSON=function(i,e){I.setItem(i,e)},I.getJSON=function(i){return I.getItem(i)},I.removeItem=function(i){wx.removeStorageSync(i)},I.clear=function(){wx.clearStorageSync()},I.getStorageInfoSync=function(){try{var i=wx.getStorageInfoSync();return console.log(i.keys),console.log(i.currentSize),console.log(i.limitSize),i}catch(i){}return null},I.support=!0,I.items=null,I);function I(){}n(P,"laya.wx.mini.MiniLocation"),P.__init__=function(){_.window.navigator.geolocation.getCurrentPosition=P.getCurrentPosition,_.window.navigator.geolocation.watchPosition=P.watchPosition,_.window.navigator.geolocation.clearWatch=P.clearWatch},P.getCurrentPosition=function(e,i,t){var n;(n={success:function(i){null!=e&&e(i)}}).fail=i,_.window.wx.getLocation(n)},P.watchPosition=function(i,e,t){var n;return P._curID++,(n={}).success=i,n.error=e,P._watchDic[P._curID]=n,a.timer.loop(1e3,null,P._myLoop),P._curID},P.clearWatch=function(i){delete P._watchDic[i],P._hasWatch()||a.timer.clear(null,P._myLoop)},P._hasWatch=function(){var i;for(i in P._watchDic)if(P._watchDic[i])return!0;return!1},P._myLoop=function(){P.getCurrentPosition(P._mySuccess,P._myError)},P._mySuccess=function(i){var e,t={};for(e in t.coords=i,t.timestamp=c.now(),P._watchDic)P._watchDic[e].success&&P._watchDic[e].success(t)},P._myError=function(i){var e;for(e in P._watchDic)P._watchDic[e].error&&P._watchDic[e].error(i)},P._watchDic={},P._curID=0;function P(){}(function(){function i(i,e){this.videoend=!1,this.videourl="",this.videoElement=null,this.onPlayFunc=null,this.onEndedFunC=null,this._duration=NaN,this.position=NaN,void 0===i&&(i=320),void 0===e&&(e=240),this.videoElement=_.window.wx.createVideo({width:i,height:e,autoplay:!0})}n(i,"laya.wx.mini.MiniVideo");var e=i.prototype;e.on=function(i,e,t){"loadedmetadata"==i?(this.onPlayFunc=t.bind(e),this.videoElement.onPlay=this.onPlayFunction.bind(this)):"ended"==i&&(this.onEndedFunC=t.bind(e),this.videoElement.onEnded=this.onEndedFunction.bind(this)),this.videoElement.onTimeUpdate=this.onTimeUpdateFunc.bind(this)},e.onTimeUpdateFunc=function(i){this.position=i.position,this._duration=i.duration},e.onPlayFunction=function(){this.videoElement&&(this.videoElement.readyState=200),console.log("=====视频加载完成========"),null!=this.onPlayFunc&&this.onPlayFunc()},e.onEndedFunction=function(){this.videoElement&&(this.videoend=!0,console.log("=====视频播放完毕========"),null!=this.onEndedFunC&&this.onEndedFunC())},e.off=function(i,e,t){"loadedmetadata"==i?(this.onPlayFunc=t.bind(e),this.videoElement.offPlay=this.onPlayFunction.bind(this)):"ended"==i&&(this.onEndedFunC=t.bind(e),this.videoElement.offEnded=this.onEndedFunction.bind(this))},e.load=function(i){this.videoElement&&(this.videoElement.src=i)},e.play=function(){this.videoElement&&(this.videoend=!1,this.videoElement.play())},e.pause=function(){this.videoElement&&(this.videoend=!0,this.videoElement.pause())},e.size=function(i,e){this.videoElement&&(this.videoElement.width=i,this.videoElement.height=e)},e.destroy=function(){this.videoElement&&this.videoElement.destroy(),this.videoElement=null,this.onEndedFunC=null,this.onPlayFunc=null,this.videoend=!1,this.videourl=null},e.reload=function(){this.videoElement&&(this.videoElement.src=this.videourl)},l(0,e,"duration",function(){return this._duration}),l(0,e,"paused",function(){return!!this.videoElement&&this.videoElement.paused}),l(0,e,"loop",function(){return!!this.videoElement&&this.videoElement.loop},function(i){this.videoElement&&(this.videoElement.loop=i)}),l(0,e,"currentTime",function(){return this.videoElement?this.videoElement.initialTime:0},function(i){this.videoElement&&(this.videoElement.initialTime=i)}),l(0,e,"ended",function(){return this.videoend}),l(0,e,"muted",function(){return!!this.videoElement&&this.videoElement.muted},function(i){this.videoElement&&(this.videoElement.muted=i)}),l(0,e,"videoWidth",function(){return this.videoElement?this.videoElement.width:0}),l(0,e,"videoHeight",function(){return this.videoElement?this.videoElement.height:0}),l(0,e,"playbackRate",function(){return this.videoElement?this.videoElement.playbackRate:0},function(i){this.videoElement&&(this.videoElement.playbackRate=i)}),l(0,e,"x",function(){return this.videoElement?this.videoElement.x:0},function(i){this.videoElement&&(this.videoElement.x=i)}),l(0,e,"y",function(){return this.videoElement?this.videoElement.y:0},function(i){this.videoElement&&(this.videoElement.y=i)}),l(0,e,"currentSrc",function(){return this.videoElement.src}),i.__init__=function(){laya.device.media.Video=i}})(),function(o){function a(){a.__super.call(this)}n(a,"laya.wx.mini.MiniAccelerator",o);var i=a.prototype;i.on=function(i,e,t,n){return o.prototype.on.call(this,i,e,t,n),a.startListen(this.onDeviceOrientationChange),this},i.off=function(i,e,t,n){return void 0===n&&(n=!1),this.hasListener(i)||a.stopListen(),o.prototype.off.call(this,i,e,t,n)},a.__init__=function(){try{var i;if(!(i=laya.device.motion.Accelerator))return;i.prototype.on=a.prototype.on,i.prototype.off=a.prototype.off}catch(i){}},a.startListen=function(i){if(a._callBack=i,!a._isListening){a._isListening=!0;try{wx.onAccelerometerChange(a.onAccelerometerChange)}catch(i){}}},a.stopListen=function(){a._isListening=!1;try{wx.stopAccelerometer({})}catch(i){}},a.onAccelerometerChange=function(i){var e;(e={}).acceleration=i,e.accelerationIncludingGravity=i,e.rotationRate={},null!=a._callBack&&a._callBack(e)},a._isListening=!1,a._callBack=null}(t);var O=(n(N,"laya.wx.mini.MiniLoader",t),N.prototype.load=function(i,e,t,n,o){void 0===t&&(t=!0),void 0===o&&(o=!1);var a=this;if(0===(a._url=i).indexOf("data:image")?a._type=e="image":a._type=e||(e=a.getTypeFromUrl(i)),a._cache=t,a._data=null,!o&&g.loadedMap[y.formatURL(i)])return a._data=g.loadedMap[y.formatURL(i)],this.event("progress",1),void this.event("complete",a._data);if(null!=g.parserMap[e])return a._customParse=!0,void(g.parserMap[e]instanceof laya.utils.Handler?g.parserMap[e].runWith(this):g.parserMap[e].call(null,this));var l=_.getUrlEncode(i,e),s=w.getFileExtension(i);if(-1!=N._fileTypeArr.indexOf(s))_.EnvConfig.load.call(this,i,e,t,n,o);else{if(_.isZiYu&&!x.ziyuFileData[i]&&(i=y.formatURL(i)),_.isZiYu&&x.ziyuFileData[i]){var r=x.ziyuFileData[i];return void a.onLoaded(r)}if(x.getFileInfo(i)){var u=x.getFileInfo(i);u.encoding=null==u.encoding?"ascii":u.encoding,x.readFile(i,u.encoding,new p(N,N.onReadNativeCallBack,[l,i,e,t,n,o,a]),i)}else{if(x.isLocalNativeFile(i)){if(_.subNativeFiles&&0==_.subNativeheads.length)for(var d in _.subNativeFiles){var c=_.subNativeFiles[d];_.subNativeheads=_.subNativeheads.concat(c);for(var f=0;f<c.length;f++)_.subMaps[c[f]]=d+"/"+c[f]}if(_.subNativeFiles&&-1!=i.indexOf("/")){var h=i.split("/")[0]+"/";if(h&&-1!=_.subNativeheads.indexOf(h)){var v=_.subMaps[h];i=i.replace(h,v)}}return void x.read(i,l,new p(N,N.onReadNativeCallBack,[l,i,e,t,n,o,a]))}var m=i;-1!=(i=y.formatURL(i)).indexOf("http://")||-1!=i.indexOf("https://")?_.EnvConfig.load.call(a,m,e,t,n,o):x.readFile(i,l,new p(N,N.onReadNativeCallBack,[l,i,e,t,n,o,a]),i)}}},N.onReadNativeCallBack=function(i,e,t,n,o,a,l,s,r){var u;void 0===n&&(n=!0),void 0===a&&(a=!1),void 0===s&&(s=0),s?1==s&&(console.log("-----------本地加载失败，尝试外网加载----"),_.EnvConfig.load.call(l,e,t,n,o,a)):(u="json"==t||"atlas"==t?_.getJson(r.data):"xml"==t?w.parseXMLFromString(r.data):r.data,!_.isZiYu&&_.isPosMsgYu&&"arraybuffer"!=t&&wx.postMessage({url:e,data:u,isLoad:"filedata"}),l.onLoaded(u))},e(N,["_fileTypeArr",function(){return this._fileTypeArr=["png","jpg","bmp","jpeg","gif"]}]),N);function N(){N.__super.call(this)}var M=function(i){function r(){this._sound=null,this.url=null,this.loaded=!1,this.readyUrl=null,r.__super.call(this)}n(r,"laya.wx.mini.MiniSound",t);var e=r.prototype;return e.load=function(i){if(x.isLocalNativeFile(i)){if(-1!=i.indexOf("http://")||-1!=i.indexOf("https://"))if(""!=x.loadPath)i=i.split(x.loadPath)[1];else{var e=""!=y.rootPath?y.rootPath:y.basePath;""!=e&&(i=i.split(e)[1])}}else i=y.formatURL(i);if(this.url=i,this.readyUrl=i,r._audioCache[this.readyUrl])this.event("complete");else if(_.autoCacheFile&&x.getFileInfo(i))this.onDownLoadCallBack(i,0);else if(_.autoCacheFile)if(x.isLocalNativeFile(i)){var t=i;if(""!=(e=""!=y.rootPath?y.rootPath:y.basePath)&&(i=i.split(e)[1]),i||(i=t),_.subNativeFiles&&0==_.subNativeheads.length)for(var n in _.subNativeFiles){var o=_.subNativeFiles[n];_.subNativeheads=_.subNativeheads.concat(o);for(var a=0;a<o.length;a++)_.subMaps[o[a]]=n+"/"+o[a]}if(_.subNativeFiles&&-1!=i.indexOf("/")){var l=i.split("/")[0]+"/";if(l&&-1!=_.subNativeheads.indexOf(l)){var s=_.subMaps[l];i=i.replace(l,s)}}this.onDownLoadCallBack(i,0)}else x.downOtherFiles(i,p.create(this,this.onDownLoadCallBack,[i]),i);else this.onDownLoadCallBack(i,0)},e.onDownLoadCallBack=function(i,e){if(e)this.event("error");else{var t;if(_.autoCacheFile){var n=x.getFileInfo(i);if(n&&n.md5){var o=n.md5;t=x.getFileNativePath(o)}else t=i;this._sound=r._createSound(),this._sound.src=this.url=t}else this._sound=r._createSound(),this._sound.src=i;this._sound.onCanplay(r.bindToThis(this.onCanPlay,this)),this._sound.onError(r.bindToThis(this.onError,this))}},e.onError=function(i){try{console.log("-----1---------------minisound-----id:"+r._id),console.log(i)}catch(i){console.log("-----2---------------minisound-----id:"+r._id),console.log(i)}this.event("error"),this._sound.offError(null)},e.onCanPlay=function(){this.loaded=!0,this.event("complete"),this._sound.offCanplay(null)},e.play=function(i,e){var t;if(void 0===i&&(i=0),void 0===e&&(e=0),t=this.url==v._tMusic?(r._musicAudio||(r._musicAudio=r._createSound()),r._musicAudio):r._audioCache[this.readyUrl]?r._audioCache[this.readyUrl]._sound:r._createSound(),_.autoCacheFile&&x.getFileInfo(this.url)){var n=x.getFileInfo(this.url).md5;t.src=this.url=x.getFileNativePath(n)}else t.src=this.url;var o=new D(t,this);return o.url=this.url,o.loops=e,o.loop=0===e,o.startTime=i,o.play(),v.addChannel(o),o},e.dispose=function(){var i=r._audioCache[this.readyUrl];i&&(i.src="",i._sound&&(i._sound.destroy(),i._sound=null,i=null),delete r._audioCache[this.readyUrl])},l(0,e,"duration",function(){return this._sound.duration}),r._createSound=function(){return r._id++,_.window.wx.createInnerAudioContext()},r.bindToThis=function(i,e){return i.bind(e)},r._musicAudio=null,r._id=0,r._audioCache={},r}(),D=function(i){function t(i,e){this._audio=null,this._onEnd=null,this._miniSound=null,t.__super.call(this),this._audio=i,this._miniSound=e,this._onEnd=t.bindToThis(this.__onEnd,this),i.onEnded(this._onEnd)}n(t,"laya.wx.mini.MiniSoundChannel",h);var e=t.prototype;return e.__onEnd=function(){if(1==this.loops)return this.completeHandler&&(a.timer.once(10,this,this.__runComplete,[this.completeHandler],!1),this.completeHandler=null),this.stop(),void this.event("complete");0<this.loops&&this.loops--,this.startTime=0,this.play()},e.play=function(){this.isStopped=!1,v.addChannel(this),this._audio.play()},e.stop=function(){this.isStopped=!0,v.removeChannel(this),this.completeHandler=null,this._audio&&(this._audio.pause(),this._audio.offEnded(null),this._audio=null,this._miniSound=null,this._onEnd=null)},e.pause=function(){this.isStopped=!0,this._audio.pause()},e.resume=function(){this._audio&&(this.isStopped=!1,v.addChannel(this),this._audio.play())},l(0,e,"startTime",null,function(i){this._audio&&(this._audio.startTime=i)}),l(0,e,"autoplay",function(){return this._audio.autoplay},function(i){this._audio.autoplay=i}),l(0,e,"position",function(){return this._audio?this._audio.currentTime:0}),l(0,e,"duration",function(){return this._audio?this._audio.duration:0}),l(0,e,"loop",function(){return this._audio.loop},function(i){this._audio.loop=i}),l(0,e,"volume",function(){return this._audio?this._audio.volume:1},function(i){this._audio&&(this._audio.volume=i)}),t.bindToThis=function(i,e){return i.bind(e)},t}()}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(i,e){"use strict";for(var t in Object.defineProperty(e,"__esModule",{value:!0}),Laya){var n=Laya[t];n&&n.__isclass&&(e[t]=n)}});
!function(t,e,T){T.un,T.uns;var n=T.static,c=T.class,r=T.getset,a=T.__newvec,l=laya.maths.Arith,u=laya.maths.Bezier,i=laya.resource.Bitmap,f=laya.utils.Browser,h=laya.utils.Byte,d=laya.utils.Color,A=(laya.filters.ColorFilter,T.Config),s=laya.resource.Context,E=(laya.events.Event,laya.filters.Filter),o=laya.display.Graphics,_=laya.resource.HTMLCanvas,m=(laya.utils.HTMLChar,laya.resource.HTMLImage),p=laya.resource.HTMLSubImage,S=(laya.utils.Handler,laya.net.Loader,laya.maths.Matrix),w=laya.maths.Point,R=laya.maths.Rectangle,g=laya.renders.Render,v=(laya.renders.RenderContext,laya.renders.RenderSprite),x=laya.resource.Resource,b=laya.resource.ResourceManager,y=laya.utils.RunDriver,I=laya.display.Sprite,M=laya.display.Stage,C=laya.utils.Stat,L=laya.utils.StringKey,P=(laya.display.css.Style,laya.system.System),D=laya.display.Text,F=laya.resource.Texture,B=(laya.display.css.TransformInfo,laya.net.URL,laya.utils.Utils),N=laya.utils.VectorGraphManager;laya.utils.WordText;T.interface("laya.webgl.shapes.IShape"),T.interface("laya.webgl.submit.ISubmit"),T.interface("laya.webgl.text.ICharSegment"),T.interface("laya.webgl.canvas.save.ISaveData"),T.interface("laya.webgl.resource.IMergeAtlasBitmap"),T.interface("laya.filters.IFilterActionGL","laya.filters.IFilterAction");var O=function(){function t(){}c(t,"laya.filters.webgl.FilterActionGL");var e=t.prototype;return T.imps(e,{"laya.filters.IFilterActionGL":!0}),e.setValue=function(t){},e.setValueMix=function(t){},e.apply3d=function(t,e,i,r,s){return null},e.apply=function(t){return null},r(0,e,"typeMix",function(){return 0}),t}(),V=(c(U,"laya.webgl.shader.ShaderValue"),U);function U(){}var k=function(){var r,s;function t(t,e,i){this._atlasID=0,this._width=0,this._height=0,this._texCount=0,this._rowInfo=null,this._cells=null,this._failSize=new s,void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),this._cells=null,this._rowInfo=null,this._init(t,e),this._atlasID=i}c(t,"laya.webgl.atlas.AtlasGrid");var e=t.prototype;return e.getAltasID=function(){return this._atlasID},e.setAltasID=function(t){0<=t&&(this._atlasID=t)},e.addTex=function(t,e,i){var r=this._get(e,i);return 0==r.ret||(this._fill(r.x,r.y,e,i,t),this._texCount++),r},e._release=function(){null!=this._cells&&(this._cells.length=0,this._cells=null),this._rowInfo&&(this._rowInfo.length=0,this._rowInfo=null)},e._init=function(t,e){if(this._width=t,this._height=e,this._release(),0==this._width)return!1;this._cells=new Uint8Array(this._width*this._height*3),this._rowInfo=a(this._height);for(var i=0;i<this._height;i++)this._rowInfo[i]=new r;return this._clear(),!0},e._get=function(t,e){var i=new G;if(t>=this._failSize.width&&e>=this._failSize.height)return i;for(var r=-1,s=-1,a=this._width,n=this._height,h=this._cells,l=0;l<n;l++)if(!(this._rowInfo[l].spaceCount<t))for(var o=0;o<a;){var u=3*(l*a+o);if(0!=h[u]||h[1+u]<t||h[2+u]<e)o+=h[1+u];else{r=o,s=l;for(var _=0;_<t;_++)if(h[3*_+u+2]<e){r=-1;break}if(!(r<0))return i.ret=!0,i.x=r,i.y=s,i;o+=h[1+u]}}return i},e._fill=function(t,e,i,r,s){var a=this._width,n=this._height;this._check(t+i<=a&&e+r<=n);for(var h=e;h<r+e;++h){this._check(this._rowInfo[h].spaceCount>=i),this._rowInfo[h].spaceCount-=i;for(var l=0;l<i;l++){var o=3*(t+h*a+l);this._check(0==this._cells[o]),this._cells[o]=s,this._cells[1+o]=i,this._cells[2+o]=r}}if(0<t)for(h=0;h<r;++h){var u=0;for(l=t-1;0<=l&&0==this._cells[3*((e+h)*a+l)];--l,++u);for(l=u;0<l;--l)this._cells[3*((e+h)*a+t-l)+1]=l,this._check(0<l)}if(0<e)for(l=t;l<t+i;++l){for(u=0,h=e-1;0<=h&&0==this._cells[3*(l+h*a)];--h,u++);for(h=u;0<h;--h)this._cells[3*(l+(e-h)*a)+2]=h,this._check(0<h)}},e._check=function(t){0==t&&console.log("xtexMerger 错误啦")},e._clear=function(){for(var t=this._texCount=0;t<this._height;t++)this._rowInfo[t].spaceCount=this._width;for(var e=0;e<this._height;e++)for(var i=0;i<this._width;i++){var r=3*(e*this._width+i);this._cells[r]=0,this._cells[1+r]=this._width-i,this._cells[2+r]=this._width-e}this._failSize.width=this._width+1,this._failSize.height=this._height+1},t.__init$=function(){function t(){this.spaceCount=0}function e(){this.width=0,this.height=0}c(t,""),r=t,c(e,""),s=e},t}(),H=function(){function g(t,e,i,r){this._currentAtlasCount=0,this._maxAtlaserCount=0,this._width=0,this._height=0,this._gridSize=0,this._gridNumX=0,this._gridNumY=0,this._init=!1,this._curAtlasIndex=0,this._setAtlasParam=!1,this._atlaserArray=null,this._needGC=!1,this._setAtlasParam=!0,this._width=t,this._height=e,this._gridSize=i,this._maxAtlaserCount=r,this._gridNumX=t/i,this._gridNumY=e/i,this._curAtlasIndex=0,this._atlaserArray=[]}c(g,"laya.webgl.atlas.AtlasResourceManager");var t=g.prototype;return t.setAtlasParam=function(t,e,i,r){if(1==this._setAtlasParam)return g._sid_=0,this._width=t,this._height=e,this._gridSize=i,this._maxAtlaserCount=r,this._gridNumX=t/i,this._gridNumY=e/i,this._curAtlasIndex=0,this.freeAll(),!0;throw console.log("设置大图合集参数错误，只能在开始页面设置各种参数"),-1},t.pushData=function(t){var e,i=t.bitmap,r=-1,s=null,a=0,n=0;for(a=0,e=this._atlaserArray.length;a<e&&(n=(this._curAtlasIndex+a)%e,-1==(r=(s=this._atlaserArray[n]).findBitmapIsExist(i)));a++);if(-1!=r){var h=s.InAtlasWebGLImagesOffsetValue[r];return d=h[0],m=h[1],s.addToAtlas(t,d,m),!0}this._setAtlasParam=!1;for(var l=Math.ceil((t.bitmap.width+2)/this._gridSize),o=Math.ceil((t.bitmap.height+2)/this._gridSize),u=!1,_=0;_<2;_++){var c=this._maxAtlaserCount;for(a=0;a<c;a++){n=(this._curAtlasIndex+a)%c,this._atlaserArray.length-1>=n||this._atlaserArray.push(new Ht(this._gridNumX,this._gridNumY,this._width,this._height,g._sid_++));var f=this._atlaserArray[n],d=0,m=0,p=f.addTex(1,l,o);if(p.ret){d=p.x*this._gridSize+1,m=p.y*this._gridSize+1,i.lock=!0,f.addToAtlasTexture(i,d,m),f.addToAtlas(t,d,m),u=!0,this._curAtlasIndex=n;break}}if(u)break;this._atlaserArray.push(new Ht(this._gridNumX,this._gridNumY,this._width,this._height,g._sid_++)),this._needGC=!0,this.garbageCollection(),this._curAtlasIndex=this._atlaserArray.length-1}return u||console.log(">>>AtlasManager pushData error"),u},t.addToAtlas=function(t){laya.webgl.atlas.AtlasResourceManager.instance.pushData(t)},t.garbageCollection=function(){if(!0===this._needGC){for(var t=this._atlaserArray.length-this._maxAtlaserCount,e=0;e<t;e++)this._atlaserArray[e].dispose(),console.log("AtlasResourceManager:Dispose the inner Atlas。");console.log(">>>>altas garbageCollection ="+t),this._atlaserArray.splice(0,t),this._needGC=!1}return!0},t.freeAll=function(){for(var t=0,e=this._atlaserArray.length;t<e;t++)this._atlaserArray[t].dispose();this._atlaserArray.length=0,this._curAtlasIndex=0},t.getAtlaserCount=function(){return this._atlaserArray.length},t.getAtlaserByIndex=function(t){return this._atlaserArray[t]},r(1,g,"instance",function(){return g._Instance||(g._Instance=new g(laya.webgl.atlas.AtlasResourceManager.atlasTextureWidth,laya.webgl.atlas.AtlasResourceManager.atlasTextureHeight,16,laya.webgl.atlas.AtlasResourceManager.maxTextureCount)),g._Instance}),r(1,g,"enabled",function(){return A.atlasEnable}),r(1,g,"atlasLimitWidth",function(){return g._atlasLimitWidth},function(t){g._atlasLimitWidth=t}),r(1,g,"atlasLimitHeight",function(){return g._atlasLimitHeight},function(t){g._atlasLimitHeight=t}),g._enable=function(){A.atlasEnable=!0},g._disable=function(){A.atlasEnable=!1},g.__init__=function(){g.atlasTextureWidth=2048,g.atlasTextureHeight=2048,g.maxTextureCount=6,g.atlasLimitWidth=512,g.atlasLimitHeight=512},g._atlasLimitWidth=0,g._atlasLimitHeight=0,g.gridSize=16,g.atlasTextureWidth=0,g.atlasTextureHeight=0,g.maxTextureCount=0,g._atlasRestore=0,g.BOARDER_TYPE_NO=0,g.BOARDER_TYPE_RIGHT=1,g.BOARDER_TYPE_LEFT=2,g.BOARDER_TYPE_BOTTOM=4,g.BOARDER_TYPE_TOP=8,g.BOARDER_TYPE_ALL=15,g._sid_=0,g._Instance=null,g}(),G=(c(z,"laya.webgl.atlas.MergeFillInfo"),z);function z(){this.x=0,this.y=0,this.ret=!1,this.ret=!1,this.x=0,this.y=0}var W=(c(Y,"laya.webgl.canvas.BlendMode"),Y._init_=function(t){Y.fns=[Y.BlendNormal,Y.BlendAdd,Y.BlendMultiply,Y.BlendScreen,Y.BlendOverlay,Y.BlendLight,Y.BlendMask,Y.BlendDestinationOut],Y.targetFns=[Y.BlendNormalTarget,Y.BlendAddTarget,Y.BlendMultiplyTarget,Y.BlendScreenTarget,Y.BlendOverlayTarget,Y.BlendLightTarget,Y.BlendMask,Y.BlendDestinationOut]},Y.BlendNormal=function(t){t.blendFunc(1,771)},Y.BlendAdd=function(t){t.blendFunc(1,772)},Y.BlendMultiply=function(t){t.blendFunc(774,771)},Y.BlendScreen=function(t){t.blendFunc(1,1)},Y.BlendOverlay=function(t){t.blendFunc(1,769)},Y.BlendLight=function(t){t.blendFunc(1,1)},Y.BlendNormalTarget=function(t){t.blendFunc(1,771)},Y.BlendAddTarget=function(t){t.blendFunc(1,772)},Y.BlendMultiplyTarget=function(t){t.blendFunc(774,771)},Y.BlendScreenTarget=function(t){t.blendFunc(1,1)},Y.BlendOverlayTarget=function(t){t.blendFunc(1,769)},Y.BlendLightTarget=function(t){t.blendFunc(1,1)},Y.BlendMask=function(t){t.blendFunc(0,770)},Y.BlendDestinationOut=function(t){t.blendFunc(0,0)},Y.activeBlendFunction=null,Y.NAMES=["normal","add","multiply","screen","overlay","light","mask","destination-out"],Y.TOINT={normal:0,add:1,multiply:2,screen:3,lighter:1,overlay:4,light:5,mask:6,"destination-out":7},Y.NORMAL="normal",Y.ADD="add",Y.MULTIPLY="multiply",Y.SCREEN="screen",Y.LIGHT="light",Y.OVERLAY="overlay",Y.DESTINATIONOUT="destination-out",Y.fns=[],Y.targetFns=[],Y);function Y(){}var X=function(){function i(t){this._color=d.create("black"),this.setValue(t)}c(i,"laya.webgl.canvas.DrawStyle");var t=i.prototype;return t.setValue=function(t){if(t){if("string"==typeof t)return void(this._color=d.create(t));if(t instanceof laya.utils.Color)return void(this._color=t)}},t.reset=function(){this._color=d.create("black")},t.equal=function(t){return"string"==typeof t?this._color.strColor===t:t instanceof laya.utils.Color&&this._color.numColor===t.numColor},t.toColorStr=function(){return this._color.strColor},i.create=function(t){var e;if(t&&("string"==typeof t?e=d.create(t):t instanceof laya.utils.Color&&(e=t),e))return e._drawStyle||(e._drawStyle=new i(t));return laya.webgl.canvas.DrawStyle.DEFAULT},n(i,["DEFAULT",function(){return this.DEFAULT=new i("#000000")}]),i}(),K=function(){function t(){this._x=0,this._y=0,this.dirty=!1,this.offset=0,this.count=0,this.geoStart=0,this.tempArray=[],this.closePath=!1,this.geomatrys=[];Pt.mainContext;this.ib=ve.create(35048),this.vb=xe.create(5)}c(t,"laya.webgl.canvas.Path");var e=t.prototype;return e.addPoint=function(t,e){this.tempArray.push(t,e)},e.getEndPointX=function(){return this.tempArray[this.tempArray.length-2]},e.getEndPointY=function(){return this.tempArray[this.tempArray.length-1]},e.polygon=function(t,e,i,r,s,a){var n;return this.geomatrys.push(this._curGeomatry=n=new Kt(t,e,i,r,s,a)),r||(n.fill=!1),null==a&&(n.borderWidth=0),n},e.setGeomtry=function(t){this.geomatrys.push(this._curGeomatry=t)},e.drawLine=function(t,e,i,r,s){var a;return this.closePath?this.geomatrys.push(this._curGeomatry=a=new Xt(t,e,i,r,s)):this.geomatrys.push(this._curGeomatry=a=new Yt(t,e,i,r,s)),a.fill=!1,a},e.update=function(){var t=this.ib._byteLength,e=this.geomatrys.length;this.offset=t;for(var i=this.geoStart;i<e;i++)this.geomatrys[i].getData(this.ib,this.vb,this.vb._byteLength/20);this.geoStart=e,this.count=(this.ib._byteLength-t)/At.BYTES_PIDX},e.reset=function(){this.vb.clear(),this.ib.clear(),this.offset=this.count=this.geoStart=0,this.geomatrys.length=0},e.recover=function(){this._curGeomatry=null,this.vb.destory(),this.vb=null,this.ib.destory(),this.ib=null},t}(),Q=function(){function h(){}c(h,"laya.webgl.canvas.save.SaveBase");var t=h.prototype;return T.imps(t,{"laya.webgl.canvas.save.ISaveData":!0}),t.isSaveMark=function(){return!1},t.restore=function(t){this._dataObj[this._valueName]=this._value,(h._cache[h._cache._length++]=this)._newSubmit&&(t._curSubmit=ct.RENDERBASE,t._renderKey=0)},h._createArray=function(){var t=[];return t._length=0,t},h._init=function(){var t=h._namemap={};return t[1]="ALPHA",t[2]="fillStyle",t[8]="font",t[256]="lineWidth",t[512]="strokeStyle",t[8192]="_mergeID",t[1024]=t[2048]=t[4096]=[],t[16384]="textBaseline",t[32768]="textAlign",t[65536]="_nBlendType",t[1048576]="shader",t[2097152]="filters",t},h.save=function(t,e,i,r){if((t._saveMark._saveuse&e)!==e){t._saveMark._saveuse|=e;var s=h._cache,a=0<s._length?s[--s._length]:new h;a._value=i[a._valueName=h._namemap[e]],a._dataObj=i,a._newSubmit=r;var n=t._save;n[n._length++]=a}},h._cache=laya.webgl.canvas.save.SaveBase._createArray(),h._namemap=h._init(),h}(),Z=function(){function a(){this._clipRect=new R}c(a,"laya.webgl.canvas.save.SaveClipRect");var t=a.prototype;return T.imps(t,{"laya.webgl.canvas.save.ISaveData":!0}),t.isSaveMark=function(){return!1},t.restore=function(t){t._clipRect=this._clipSaveRect,(a._cache[a._cache._length++]=this)._submitScissor.submitLength=t._submits._length-this._submitScissor.submitIndex,t._curSubmit=ct.RENDERBASE,t._renderKey=0},a.save=function(t,e){if(131072!=(131072&t._saveMark._saveuse)){t._saveMark._saveuse|=131072;var i=a._cache,r=0<i._length?i[--i._length]:new a;r._clipSaveRect=t._clipRect,t._clipRect=r._clipRect.copyFrom(t._clipRect),r._submitScissor=e;var s=t._save;s[s._length++]=r}},n(a,["_cache",function(){return this._cache=Q._createArray()}]),a}(),q=function(){function f(){this._contextX=0,this._contextY=0,this._clipRect=new R,this._rect=new R,this._matrix=new S}c(f,"laya.webgl.canvas.save.SaveClipRectStencil");var t=f.prototype;return T.imps(t,{"laya.webgl.canvas.save.ISaveData":!0}),t.isSaveMark=function(){return!1},t.restore=function(t){gt.restore(t,this._rect,this._saveMatrix,this._contextX,this._contextY),t._clipRect=this._clipSaveRect,t._curMat=this._saveMatrix,t._x=this._contextX,t._y=this._contextY,f._cache[f._cache._length++]=this,t._curSubmit=ct.RENDERBASE},f.save=function(t,e,i,r,s,a,n,h,l,o){if(262144!=(262144&t._saveMark._saveuse)){t._saveMark._saveuse|=262144;var u=f._cache,_=0<u._length?u[--u._length]:new f;_._clipSaveRect=t._clipRect,_._clipRect.setTo(n,h,l,o),t._clipRect=_._clipRect,_._rect.x=i,_._rect.y=r,_._rect.width=s,_._rect.height=a,_._contextX=t._x,_._contextY=t._y,_._saveMatrix=t._curMat,t._curMat.copyTo(_._matrix),t._curMat=_._matrix,_._submitStencil=e;var c=t._save;c[c._length++]=_}},n(f,["_cache",function(){return this._cache=Q._createArray()}]),f}(),j=function(){function r(){this._saveuse=0}c(r,"laya.webgl.canvas.save.SaveMark");var t=r.prototype;return T.imps(t,{"laya.webgl.canvas.save.ISaveData":!0}),t.isSaveMark=function(){return!0},t.restore=function(t){t._saveMark=this._preSaveMark,r._no[r._no._length++]=this},r.Create=function(t){var e=r._no,i=0<e._length?e[--e._length]:new r;return i._saveuse=0,i._preSaveMark=t._saveMark,t._saveMark=i},n(r,["_no",function(){return this._no=Q._createArray()}]),r}(),$=function(){function a(){this._matrix=new S}c(a,"laya.webgl.canvas.save.SaveTransform");var t=a.prototype;return T.imps(t,{"laya.webgl.canvas.save.ISaveData":!0}),t.isSaveMark=function(){return!1},t.restore=function(t){t._curMat=this._savematrix,a._no[a._no._length++]=this},a.save=function(t){var e=t._saveMark;if(2048!=(2048&e._saveuse)){e._saveuse|=2048;var i=a._no,r=0<i._length?i[--i._length]:new a;r._savematrix=t._curMat,t._curMat=t._curMat.copyTo(r._matrix);var s=t._save;s[s._length++]=r}},n(a,["_no",function(){return this._no=Q._createArray()}]),a}(),J=function(){function s(){}c(s,"laya.webgl.canvas.save.SaveTranslate");var t=s.prototype;return T.imps(t,{"laya.webgl.canvas.save.ISaveData":!0}),t.isSaveMark=function(){return!1},t.restore=function(t){t._curMat;t._x=this._x,t._y=this._y,s._no[s._no._length++]=this},s.save=function(t){var e=s._no,i=0<e._length?e[--e._length]:new s;i._x=t._x,i._y=t._y;var r=t._save;r[r._length++]=i},n(s,["_no",function(){return this._no=Q._createArray()}]),s}(),tt=function(){function t(){this.target=null,this.repaint=!1,this._width=NaN,this._height=NaN,this._sp=null,this._clipRect=new R}c(t,"laya.webgl.resource.RenderTargetMAX");var e=t.prototype;return e.setSP=function(t){this._sp=t},e.size=function(t,e){var i=this;this._width!==t||this._height!==e?(this.repaint=!0,this._width=t,this._height=e,this.target?this.target.size(t,e):this.target=Jt.create(t,e),this.target.hasListener("recovered")||this.target.on("recovered",this,function(t){T.timer.callLater(i._sp,i._sp.repaint)})):this.target.size(t,e)},e._flushToTarget=function(t,e){if(!e._destroy){var i=Mt.worldScissorTest,r=Mt.worldClipRect;Mt.worldClipRect=this._clipRect,this._clipRect.x=this._clipRect.y=0,this._clipRect.width=this._width,this._clipRect.height=this._height,Mt.worldScissorTest=!1,Pt.mainContext.disable(3089);var s=Mt.worldAlpha,a=Mt.worldMatrix4,n=Mt.worldMatrix,h=Mt.worldFilters,l=Mt.worldShaderDefines;if(Mt.worldMatrix=S.EMPTY,Mt.restoreTempArray(),Mt.worldMatrix4=Mt.TEMPMAT4_ARRAY,Mt.worldAlpha=1,Mt.worldFilters=null,Mt.worldShaderDefines=null,jt.activeShader=null,e.start(),A.showCanvasMark?e.clear(0,1,0,.3):e.clear(0,0,0,0),t.flush(),e.end(),jt.activeShader=null,Mt.worldAlpha=s,Mt.worldMatrix4=a,Mt.worldMatrix=n,Mt.worldFilters=h,Mt.worldShaderDefines=l,Mt.worldScissorTest=i){var o=Mt.height-r.y-r.height;Pt.mainContext.scissor(r.x,o,r.width,r.height),Pt.mainContext.enable(3089)}Mt.worldClipRect=r}},e.flush=function(t){this.repaint&&(this._flushToTarget(t,this.target),this.repaint=!1)},e.drawTo=function(t,e,i,r,s){t.drawTexture(this.target.getTexture(),e,i,r,s,0,0)},e.destroy=function(){this.target&&(this.target.destroy(),this.target=null,this._sp=null)},t}(),et=(c(it,"laya.webgl.shader.d2.Shader2D"),it.prototype.destroy=function(){this.defines=null,this.filters=null,this.glTexture=null,this.strokeStyle=null,this.fillStyle=null},it.__init__=function(){var t,e;de.addInclude("parts/ColorFilter_ps_uniform.glsl","uniform vec4 colorAlpha;\nuniform mat4 colorMat;"),de.addInclude("parts/ColorFilter_ps_logic.glsl","mat4 alphaMat =colorMat;\n\nalphaMat[0][3] *= gl_FragColor.a;\nalphaMat[1][3] *= gl_FragColor.a;\nalphaMat[2][3] *= gl_FragColor.a;\n\ngl_FragColor = gl_FragColor * alphaMat;\ngl_FragColor += colorAlpha/255.0*gl_FragColor.a;\n"),de.addInclude("parts/GlowFilter_ps_uniform.glsl","uniform vec4 u_color;\nuniform float u_strength;\nuniform float u_blurX;\nuniform float u_blurY;\nuniform float u_offsetX;\nuniform float u_offsetY;\nuniform float u_textW;\nuniform float u_textH;"),de.addInclude("parts/GlowFilter_ps_logic.glsl","const float c_IterationTime = 10.0;\nfloat floatIterationTotalTime = c_IterationTime * c_IterationTime;\nvec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\nvec2 vec2FilterDir = vec2(-(u_offsetX)/u_textW,-(u_offsetY)/u_textH);\nvec2 vec2FilterOff = vec2(u_blurX/u_textW/c_IterationTime * 2.0,u_blurY/u_textH/c_IterationTime * 2.0);\nfloat maxNum = u_blurX * u_blurY;\nvec2 vec2Off = vec2(0.0,0.0);\nfloat floatOff = c_IterationTime/2.0;\nfor(float i = 0.0;i<=c_IterationTime; ++i){\n\tfor(float j = 0.0;j<=c_IterationTime; ++j){\n\t\tvec2Off = vec2(vec2FilterOff.x * (i - floatOff),vec2FilterOff.y * (j - floatOff));\n\t\tvec4Color += texture2D(texture, v_texcoord + vec2FilterDir + vec2Off)/floatIterationTotalTime;\n\t}\n}\ngl_FragColor = vec4(u_color.rgb,vec4Color.a * u_strength);\ngl_FragColor.rgb *= gl_FragColor.a;"),de.addInclude("parts/BlurFilter_ps_logic.glsl","gl_FragColor =   blur();\ngl_FragColor.w*=alpha;"),de.addInclude("parts/BlurFilter_ps_uniform.glsl","uniform vec4 strength_sig2_2sig2_gauss1;\nuniform vec2 blurInfo;\n\n#define PI 3.141593\n\n//float sigma=strength/3.0;//3σ以外影响很小。即当σ=1的时候，半径为3\n//float sig2 = sigma*sigma;\n//float _2sig2 = 2.0*sig2;\n//return 1.0/(2*PI*sig2)*exp(-(x*x+y*y)/_2sig2)\n//float gauss1 = 1.0/(2.0*PI*sig2);\n\nfloat getGaussian(float x, float y){\n    return strength_sig2_2sig2_gauss1.w*exp(-(x*x+y*y)/strength_sig2_2sig2_gauss1.z);\n}\n\nvec4 blur(){\n    const float blurw = 9.0;\n    vec4 vec4Color = vec4(0.0,0.0,0.0,0.0);\n    vec2 halfsz=vec2(blurw,blurw)/2.0/blurInfo;    \n    vec2 startpos=v_texcoord-halfsz;\n    vec2 ctexcoord = startpos;\n    vec2 step = 1.0/blurInfo;  //每个像素      \n    \n    for(float y = 0.0;y<=blurw; ++y){\n        ctexcoord.x=startpos.x;\n        for(float x = 0.0;x<=blurw; ++x){\n            //TODO 纹理坐标的固定偏移应该在vs中处理\n            vec4Color += texture2D(texture, ctexcoord)*getGaussian(x-blurw/2.0,y-blurw/2.0);\n            ctexcoord.x+=step.x;\n        }\n        ctexcoord.y+=step.y;\n    }\n    return vec4Color;\n}"),de.addInclude("parts/ColorAdd_ps_uniform.glsl","uniform vec4 colorAdd;\n"),de.addInclude("parts/ColorAdd_ps_logic.glsl","gl_FragColor = vec4(colorAdd.rgb,colorAdd.a*gl_FragColor.a);\ngl_FragColor.xyz *= colorAdd.a;"),t="attribute vec4 position;\nattribute vec2 texcoord;\nuniform vec2 size;\n\n#ifdef WORLDMAT\nuniform mat4 mmat;\n#endif\nvarying vec2 v_texcoord;\nvoid main() {\n  #ifdef WORLDMAT\n  vec4 pos=mmat*position;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  #else\n  gl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\n  #endif\n  \n  v_texcoord = texcoord;\n}",e='precision mediump float;\n//precision highp float;\nvarying vec2 v_texcoord;\nuniform sampler2D texture;\nuniform float alpha;\n#include?BLUR_FILTER  "parts/BlurFilter_ps_uniform.glsl";\n#include?COLOR_FILTER "parts/ColorFilter_ps_uniform.glsl";\n#include?GLOW_FILTER "parts/GlowFilter_ps_uniform.glsl";\n#include?COLOR_ADD "parts/ColorAdd_ps_uniform.glsl";\n\nvoid main() {\n   vec4 color= texture2D(texture, v_texcoord);\n   color.a*=alpha;\n   color.rgb*=alpha;\n   gl_FragColor=color;\n   #include?COLOR_ADD "parts/ColorAdd_ps_logic.glsl";   \n   #include?BLUR_FILTER  "parts/BlurFilter_ps_logic.glsl";\n   #include?COLOR_FILTER "parts/ColorFilter_ps_logic.glsl";\n   #include?GLOW_FILTER "parts/GlowFilter_ps_logic.glsl";\n}',de.preCompile2D(0,1,t,e,null),t="attribute vec4 position;\nuniform vec2 size;\nuniform mat4 mmat;\nvoid main() {\n  vec4 pos=mmat*position;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n}",e='precision mediump float;\nuniform vec4 color;\nuniform float alpha;\n#include?COLOR_FILTER "parts/ColorFilter_ps_uniform.glsl";\nvoid main() {\n\tvec4 a = vec4(color.r, color.g, color.b, color.a);\n\ta.w = alpha;\n\ta.xyz *= alpha;\n\tgl_FragColor = a;\n\t#include?COLOR_FILTER "parts/ColorFilter_ps_logic.glsl";\n}',de.preCompile2D(0,2,t,e,null),t="attribute vec4 position;\nattribute vec3 a_color;\nuniform mat4 mmat;\nuniform mat4 u_mmat2;\nuniform vec2 u_pos;\nuniform vec2 size;\nvarying vec3 color;\nvoid main(){\n  vec4 tPos = vec4(position.x + u_pos.x,position.y + u_pos.y,position.z,position.w);\n  vec4 pos=mmat*u_mmat2*tPos;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  color=a_color;\n}",e="precision mediump float;\n//precision mediump float;\nvarying vec3 color;\nuniform float alpha;\nvoid main(){\n\t//vec4 a=vec4(color.r, color.g, color.b, 1);\n\t//a.a*=alpha;\n    gl_FragColor=vec4(color.r, color.g, color.b, alpha);\n\tgl_FragColor.rgb*=alpha;\n}",de.preCompile2D(0,4,t,e,null),t="attribute vec4 position;\nattribute vec2 texcoord;\nuniform vec2 size;\n\n#ifdef WORLDMAT\nuniform mat4 mmat;\n#endif\nvarying vec2 v_texcoord;\nvoid main() {\n  #ifdef WORLDMAT\n  vec4 pos=mmat*position;\n  gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  #else\n  gl_Position =vec4((position.x/size.x-0.5)*2.0,(0.5-position.y/size.y)*2.0,position.z,1.0);\n  #endif\n  \n  v_texcoord = texcoord;\n}",e='#ifdef FSHIGHPRECISION\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n//precision highp float;\nvarying vec2 v_texcoord;\nuniform sampler2D texture;\nuniform float alpha;\nuniform vec4 u_TexRange;\nuniform vec2 u_offset;\n#include?BLUR_FILTER  "parts/BlurFilter_ps_uniform.glsl";\n#include?COLOR_FILTER "parts/ColorFilter_ps_uniform.glsl";\n#include?GLOW_FILTER "parts/GlowFilter_ps_uniform.glsl";\n#include?COLOR_ADD "parts/ColorAdd_ps_uniform.glsl";\n\nvoid main() {\n   vec2 newTexCoord;\n   newTexCoord.x = mod(u_offset.x + v_texcoord.x,u_TexRange.y) + u_TexRange.x;\n   newTexCoord.y = mod(u_offset.y + v_texcoord.y,u_TexRange.w) + u_TexRange.z;\n   vec4 color= texture2D(texture, newTexCoord);\n   color.a*=alpha;\n   gl_FragColor=color;\n   #include?COLOR_ADD "parts/ColorAdd_ps_logic.glsl";   \n   #include?BLUR_FILTER  "parts/BlurFilter_ps_logic.glsl";\n   #include?COLOR_FILTER "parts/ColorFilter_ps_logic.glsl";\n   #include?GLOW_FILTER "parts/GlowFilter_ps_logic.glsl";\n}',de.preCompile2D(0,256,t,e,null),t="attribute vec2 position;\nattribute vec2 texcoord;\nattribute vec4 color;\nuniform vec2 size;\nuniform float offsetX;\nuniform float offsetY;\nuniform mat4 mmat;\nuniform mat4 u_mmat2;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nvoid main() {\n  vec4 pos=mmat*u_mmat2*vec4(offsetX+position.x,offsetY+position.y,0,1 );\n  gl_Position = vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0);\n  v_color = color;\n  v_color.rgb *= v_color.a;\n  v_texcoord = texcoord;  \n}",e="precision mediump float;\nvarying vec2 v_texcoord;\nvarying vec4 v_color;\nuniform sampler2D texture;\nuniform float alpha;\nvoid main() {\n\tvec4 t_color = texture2D(texture, v_texcoord);\n\tgl_FragColor = t_color.rgba * v_color;\n\tgl_FragColor *= alpha;\n}",de.preCompile2D(0,512,t,e,null)},it);function it(){this.ALPHA=1,this.shaderType=0,this.defines=new Gt}var rt=function(){function e(t,e,i){this._value=0,this._name2int=t,this._int2name=e,this._int2nameMap=i}c(e,"laya.webgl.shader.ShaderDefines");var t=e.prototype;return t.add=function(t){return"string"==typeof t&&(t=this._name2int[t]),this._value|=t,this._value},t.addInt=function(t){return this._value|=t,this._value},t.remove=function(t){return"string"==typeof t&&(t=this._name2int[t]),this._value&=~t,this._value},t.isDefine=function(t){return(this._value&t)===t},t.getValue=function(){return this._value},t.setValue=function(t){this._value=t},t.toNameDic=function(){var t=this._int2nameMap[this._value];return t||e._toText(this._value,this._int2name,this._int2nameMap)},e._reg=function(t,e,i,r){r[i[t]=e]=t},e._toText=function(t,e,i){var r=i[t];if(r)return r;for(var s={},a=1,n=0;n<32&&!(t<(a=1<<n));n++)if(t&a){var h=e[a];h&&(s[h]="")}return i[t]=s},e._toInt=function(t,e){for(var i=t.split("."),r=0,s=0,a=i.length;s<a;s++){var n=e[i[s]];if(!n)throw new Error("Defines to int err:"+t+"/"+i[s]);r|=n}return r},e}(),st=function(){function n(){this.mVBBuffer=null,this.mIBBuffer=null,this.mVBData=null,this.mIBData=null,this.mEleNum=0,this.mTexture=null,this.transform=null,this._vs=null,this._ps=null,this._indexStart=-1,this._verticles=null,this._uvs=null,this._tempMatrix=new S}c(n,"laya.webgl.shader.d2.skinAnishader.SkinMesh");var t=n.prototype;return t.init=function(t,e,i){if(e)this._vs=e;else{this._vs=[];var r=t.width,s=t.height;this._vs.push(0,0,0,0,1,1,1,1),this._vs.push(r,0,1,0,1,1,1,1),this._vs.push(r,s,1,1,1,1,1,1),this._vs.push(0,s,0,1,1,1,1,1)}i?this._ps=i:(n._defaultPS||(n._defaultPS=[]).push(0,1,3,3,1,2),this._ps=n._defaultPS),this.mVBData=new Float32Array(this._vs),this.mIBData=new Uint16Array(this._ps.length),this.mIBData.start=-1,this.mEleNum=this._ps.length,this.mTexture=t},t.init2=function(t,e,i,r,s){this.transform&&(this.transform=null),i?this._ps=i:(this._ps=[],this._ps.push(0,1,3,3,1,2)),this._verticles=r,this._uvs=s,this.mEleNum=this._ps.length,this.mTexture=t,(g.isConchNode||g.isConchApp)&&(this._initMyData(),this.mVBData=new Float32Array(this._vs))},t._initMyData=function(){var t=0,e=0,i=4*this._verticles.length;this._vs=n._tempVS;var r=!1;if(g.isConchNode||g.isConchApp?(this._vs.length=i,r=!0):this._vs.length<i&&(this._vs.length=i,r=!0),n._tVSLen=i,r)for(;t<i;)this._vs[t]=this._verticles[e],this._vs[t+1]=this._verticles[e+1],this._vs[t+2]=this._uvs[e],this._vs[t+3]=this._uvs[e+1],this._vs[t+4]=1,this._vs[t+5]=1,this._vs[t+6]=1,this._vs[t+7]=1,t+=8,e+=2;else for(;t<i;)this._vs[t]=this._verticles[e],this._vs[t+1]=this._verticles[e+1],this._vs[t+2]=this._uvs[e],this._vs[t+3]=this._uvs[e+1],t+=8,e+=2},t.getData2=function(t,e,i){var r;this.mVBBuffer=t,this.mIBBuffer=e,this._initMyData(),t.appendEx2(this._vs,Float32Array,n._tVSLen,4),this._indexStart=e._byteLength,(r=n._tempIB).length<this._ps.length&&(r.length=this._ps.length);for(var s=0,a=this._ps.length;s<a;s++)r[s]=this._ps[s]+i;e.appendEx2(r,Uint16Array,this._ps.length,2)},t.getData=function(t,e,i){if(this.mVBBuffer=t,this.mIBBuffer=e,t.append(this.mVBData),this._indexStart=e._byteLength,this.mIBData.start!=i){for(var r=0,s=this._ps.length;r<s;r++)this.mIBData[r]=this._ps[r]+i;this.mIBData.start=i}e.append(this.mIBData)},t.render=function(t,e,i){if(g.isWebGL&&this.mTexture){t._renderKey=0,t._shader2D.glTexture=null,at.getInstance().addSkinMesh(this);var r=ct.createShape(t,this.mIBBuffer,this.mVBBuffer,this.mEleNum,this._indexStart,Vt.create(512,0));this.transform||(this.transform=S.EMPTY),this.transform.translate(e,i),S.mul(this.transform,t._curMat,this._tempMatrix),this.transform.translate(-e,-i);var s=r.shaderValue,a=s.u_mmat2||Mt.getMatrArray();Mt.mat2MatArray(this._tempMatrix,a),s.textureHost=this.mTexture,s.offsetX=0,s.offsetY=0,s.u_mmat2=a,s.ALPHA=t._shader2D.ALPHA,t._submits[t._submits._length++]=r}else g.isConchApp&&this.mTexture&&(this.transform||(this.transform=S.EMPTY),t.setSkinMesh&&t.setSkinMesh(e,i,this._ps,this.mVBData,this.mEleNum,0,this.mTexture,this.transform))},n._tempVS=[],n._tempIB=[],n._defaultPS=null,n._tVSLen=0,n}(),at=function(){function t(){this.ib=null,this.vb=null;Pt.mainContext;this.ib=ve.create(35048),this.vb=xe.create(8)}c(t,"laya.webgl.shader.d2.skinAnishader.SkinMeshBuffer");var e=t.prototype;return e.addSkinMesh=function(t){t.getData2(this.vb,this.ib,this.vb._byteLength/32)},e.reset=function(){this.vb.clear(),this.ib.clear()},t.getInstance=function(){return t.instance=t.instance||new t},t.instance=null,t}(),nt=function(){function t(t,e,i,r,s,a,n,h,l){this.r0=0,this.fill=!0,this.r1=Math.PI/2,void 0===l&&(l=0),this.x=t,this.y=e,this.width=i,this.height=r,this.edges=s,this.color=a,this.borderWidth=n,this.borderColor=h}c(t,"laya.webgl.shapes.BasePoly");var e=t.prototype;return T.imps(e,{"laya.webgl.shapes.IShape":!0}),e.getData=function(t,e,i){},e.rebuild=function(t){},e.setMatrix=function(t){},e.needUpdate=function(t){return!0},e.sector=function(t,e,i){var r=this.x,s=this.y,a=this.edges,n=(this.r1-this.r0)/a,h=this.width,l=this.height,o=this.color,u=(o>>16&255)/255,_=(o>>8&255)/255,c=(255&o)/255;t.push(r,s,u,_,c);for(var f=0;f<a+1;f++)t.push(r+Math.sin(n*f+this.r0)*h,s+Math.cos(n*f+this.r0)*l),t.push(u,_,c);for(f=0;f<a;f++)e.push(i,i+f+1,i+f+2)},e.createLine2=function(t,e,i,r,s,a){var n,h,l,o,u,_,c,f,d,m,p,g,v,x,b,y,T,A,E,S,w=t.concat(),R=s,I=this.borderColor,M=(I>>16&255)/255,C=(I>>8&255)/255,L=(255&I)/255,P=w.length/2,D=r,F=i/2;l=w[0],o=w[1],m=l-(u=w[2]),d=(d=-(o-(_=w[3])))/(S=Math.sqrt(d*d+m*m))*F,m=m/S*F,R.push(l-d+this.x,o-m+this.y,M,C,L,l+d+this.x,o+m+this.y,M,C,L);for(var B=1;B<P-1;B++)l=w[2*(B-1)],o=w[2*(B-1)+1],u=w[2*B],_=w[2*B+1],c=w[2*(B+1)],f=w[2*(B+1)+1],m=l-u,g=u-c,b=(-(d=(d=-(o-_))/(S=Math.sqrt(d*d+m*m))*F)+l)*(-(m=m/S*F)+_)-(-d+u)*(-m+o),A=(-(p=(p=-(_-f))/(S=Math.sqrt(p*p+g*g))*F)+c)*(-(g=g/S*F)+_)-(-p+u)*(-g+f),E=(v=-m+o-(-m+_))*(T=-p+u-(-p+c))-(y=-g+f-(-g+_))*(x=-d+u-(-d+l)),Math.abs(E)<.1?(E+=10.1,R.push(u-d+this.x,_-m+this.y,M,C,L,u+d+this.x,_+m+this.y,M,C,L)):(((n=(x*A-T*b)/E)-u)*(n-u)+((h=(y*b-v*A)/E)-_)+(h-_),R.push(n+this.x,h+this.y,M,C,L,u-(n-u)+this.x,_-(h-_)+this.y,M,C,L));l=w[w.length-4],o=w[w.length-3],m=l-(u=w[w.length-2]),d=(d=-(o-(_=w[w.length-1])))/(S=Math.sqrt(d*d+m*m))*F,m=m/S*F,R.push(u-d+this.x,_-m+this.y,M,C,L,u+d+this.x,_+m+this.y,M,C,L);var N=a;for(B=1;B<N;B++)e.push(D+2*(B-1),D+2*(B-1)+1,D+2*B+1,D+2*B+1,D+2*B,D+2*(B-1));return R},e.createLine=function(t,e,i,r){var s=t.concat(),a=t,n=this.borderColor,h=(n>>16&255)/255,l=(n>>8&255)/255,o=(255&n)/255;s.splice(0,5);var u,_,c,f,d,m,p,g,v,x,b,y,T,A,E,S,w,R,I,M,C=s.length/5,L=r,P=i/2;c=s[0],f=s[1],x=c-(d=s[5]),v=(v=-(f-(m=s[6])))/(M=Math.sqrt(v*v+x*x))*P,x=x/M*P,a.push(c-v,f-x,h,l,o,c+v,f+x,h,l,o);for(var D=1;D<C-1;D++)c=s[5*(D-1)],f=s[5*(D-1)+1],d=s[5*D],m=s[5*D+1],p=s[5*(D+1)],g=s[5*(D+1)+1],x=c-d,y=d-p,E=(-(v=(v=-(f-m))/(M=Math.sqrt(v*v+x*x))*P)+c)*(-(x=x/M*P)+m)-(-v+d)*(-x+f),R=(-(b=(b=-(m-g))/(M=Math.sqrt(b*b+y*y))*P)+p)*(-(y=y/M*P)+m)-(-b+d)*(-y+g),I=(T=-x+f-(-x+m))*(w=-b+d-(-b+p))-(S=-y+g-(-y+m))*(A=-v+d-(-v+c)),Math.abs(I)<.1?(I+=10.1,a.push(d-v,m-x,h,l,o,d+v,m+x,h,l,o)):(((u=(A*R-w*E)/I)-d)*(u-d)+((_=(S*E-T*R)/I)-m)+(_-m),a.push(u,_,h,l,o,d-(u-d),m-(_-m),h,l,o));c=s[s.length-10],f=s[s.length-9],x=c-(d=s[s.length-5]),v=(v=-(f-(m=s[s.length-4])))/(M=Math.sqrt(v*v+x*x))*P,x=x/M*P,a.push(d-v,m-x,h,l,o,d+v,m+x,h,l,o);var F=this.edges+1;for(D=1;D<F;D++)e.push(L+2*(D-1),L+2*(D-1)+1,L+2*D+1,L+2*D+1,L+2*D,L+2*(D-1));return a},e.createLoopLine=function(t,e,i,r,s,a){var n=t.concat(),h=s||t,l=this.borderColor,o=(l>>16&255)/255,u=(l>>8&255)/255,_=(255&l)/255;n.splice(0,5);var c=[n[0],n[1]],f=[n[n.length-5],n[n.length-4]],d=f[0]+.5*(c[0]-f[0]),m=f[1]+.5*(c[1]-f[1]);n.unshift(d,m,0,0,0),n.push(d,m,0,0,0);var p,g,v,x,b,y,T,A,E,S,w,R,I,M,C,L,P,D,F,B,N=n.length/5,O=r,V=i/2;v=n[0],x=n[1],S=v-(b=n[5]),E=(E=-(x-(y=n[6])))/(B=Math.sqrt(E*E+S*S))*V,S=S/B*V,h.push(v-E,x-S,o,u,_,v+E,x+S,o,u,_);for(var U=1;U<N-1;U++)v=n[5*(U-1)],x=n[5*(U-1)+1],b=n[5*U],y=n[5*U+1],T=n[5*(U+1)],A=n[5*(U+1)+1],S=v-b,R=b-T,C=(-(E=(E=-(x-y))/(B=Math.sqrt(E*E+S*S))*V)+v)*(-(S=S/B*V)+y)-(-E+b)*(-S+x),D=(-(w=(w=-(y-A))/(B=Math.sqrt(w*w+R*R))*V)+T)*(-(R=R/B*V)+y)-(-w+b)*(-R+A),F=(I=-S+x-(-S+y))*(P=-w+b-(-w+T))-(L=-R+A-(-R+y))*(M=-E+b-(-E+v)),Math.abs(F)<.1?(F+=10.1,h.push(b-E,y-S,o,u,_,b+E,y+S,o,u,_)):(((p=(M*D-P*C)/F)-b)*(p-b)+((g=(L*C-I*D)/F)-y)+(g-y),h.push(p,g,o,u,_,b-(p-b),y-(g-y),o,u,_));a&&(e=a);var k=this.edges+1;for(U=1;U<k;U++)e.push(O+2*(U-1),O+2*(U-1)+1,O+2*U+1,O+2*U+1,O+2*U,O+2*(U-1));return e.push(O+2*(U-1),O+2*(U-1)+1,O+1,O+1,O,O+2*(U-1)),h},t}(),ht=(c(lt,"laya.webgl.shapes.Earcut"),lt.earcut=function(t,e,i){i=i||2;var r,s,a,n,h,l,o,u=e&&e.length,_=u?e[0]*i:t.length,c=lt.linkedList(t,0,_,i,!0),f=[];if(!c)return f;if(u&&(c=lt.eliminateHoles(t,e,c,i)),t.length>80*i){r=a=t[0],s=n=t[1];for(var d=i;d<_;d+=i)(h=t[d])<r&&(r=h),(l=t[d+1])<s&&(s=l),a<h&&(a=h),n<l&&(n=l);o=0!==(o=Math.max(a-r,n-s))?1/o:0}return lt.earcutLinked(c,f,i,r,s,o),f},lt.linkedList=function(t,e,i,r,s){var a,n;if(s===0<lt.signedArea(t,e,i,r))for(a=e;a<i;a+=r)n=lt.insertNode(a,t[a],t[a+1],n);else for(a=i-r;e<=a;a-=r)n=lt.insertNode(a,t[a],t[a+1],n);return n&&lt.equals(n,n.next)&&(lt.removeNode(n),n=n.next),n},lt.filterPoints=function(t,e){if(!t)return t;e||(e=t);var i,r=t;do{if(i=!1,r.steiner||!lt.equals(r,r.next)&&0!==lt.area(r.prev,r,r.next))r=r.next;else{if(lt.removeNode(r),(r=e=r.prev)===r.next)break;i=!0}}while(i||r!==e);return e},lt.earcutLinked=function(t,e,i,r,s,a,n){if(t){!n&&a&&lt.indexCurve(t,r,s,a);for(var h,l,o=t;t.prev!==t.next;)if(h=t.prev,l=t.next,a?lt.isEarHashed(t,r,s,a):lt.isEar(t))e.push(h.i/i),e.push(t.i/i),e.push(l.i/i),lt.removeNode(t),t=l.next,o=l.next;else if((t=l)===o){n?1===n?(t=lt.cureLocalIntersections(t,e,i),lt.earcutLinked(t,e,i,r,s,a,2)):2===n&&lt.splitEarcut(t,e,i,r,s,a):lt.earcutLinked(lt.filterPoints(t,null),e,i,r,s,a,1);break}}},lt.isEar=function(t){var e=t.prev,i=t,r=t.next;if(0<=lt.area(e,i,r))return!1;for(var s=t.next.next;s!==t.prev;){if(lt.pointInTriangle(e.x,e.y,i.x,i.y,r.x,r.y,s.x,s.y)&&0<=lt.area(s.prev,s,s.next))return!1;s=s.next}return!0},lt.isEarHashed=function(t,e,i,r){var s=t.prev,a=t,n=t.next;if(0<=lt.area(s,a,n))return!1;for(var h=s.x<a.x?s.x<n.x?s.x:n.x:a.x<n.x?a.x:n.x,l=s.y<a.y?s.y<n.y?s.y:n.y:a.y<n.y?a.y:n.y,o=s.x>a.x?s.x>n.x?s.x:n.x:a.x>n.x?a.x:n.x,u=s.y>a.y?s.y>n.y?s.y:n.y:a.y>n.y?a.y:n.y,_=lt.zOrder(h,l,e,i,r),c=lt.zOrder(o,u,e,i,r),f=t.nextZ;f&&f.z<=c;){if(f!==t.prev&&f!==t.next&&lt.pointInTriangle(s.x,s.y,a.x,a.y,n.x,n.y,f.x,f.y)&&0<=lt.area(f.prev,f,f.next))return!1;f=f.nextZ}for(f=t.prevZ;f&&f.z>=_;){if(f!==t.prev&&f!==t.next&&lt.pointInTriangle(s.x,s.y,a.x,a.y,n.x,n.y,f.x,f.y)&&0<=lt.area(f.prev,f,f.next))return!1;f=f.prevZ}return!0},lt.cureLocalIntersections=function(t,e,i){var r=t;do{var s=r.prev,a=r.next.next;!lt.equals(s,a)&&lt.intersects(s,r,r.next,a)&&lt.locallyInside(s,a)&&lt.locallyInside(a,s)&&(e.push(s.i/i),e.push(r.i/i),e.push(a.i/i),lt.removeNode(r),lt.removeNode(r.next),r=t=a),r=r.next}while(r!==t);return r},lt.splitEarcut=function(t,e,i,r,s,a){var n=t;do{for(var h=n.next.next;h!==n.prev;){if(n.i!==h.i&&lt.isValidDiagonal(n,h)){var l=lt.splitPolygon(n,h);return n=lt.filterPoints(n,n.next),l=lt.filterPoints(l,l.next),lt.earcutLinked(n,e,i,r,s,a),void lt.earcutLinked(l,e,i,r,s,a)}h=h.next}n=n.next}while(n!==t)},lt.eliminateHoles=function(t,e,i,r){var s,a,n,h,l,o=[];for(s=0,a=e.length;s<a;s++)n=e[s]*r,h=s<a-1?e[s+1]*r:t.length,(l=lt.linkedList(t,n,h,r,!1))===l.next&&(l.steiner=!0),o.push(lt.getLeftmost(l));for(o.sort(lt.compareX),s=0;s<o.length;s++)lt.eliminateHole(o[s],i),i=lt.filterPoints(i,i.next);return i},lt.compareX=function(t,e){return t.x-e.x},lt.eliminateHole=function(t,e){if(e=lt.findHoleBridge(t,e)){var i=lt.splitPolygon(e,t);lt.filterPoints(i,i.next)}},lt.findHoleBridge=function(t,e){var i,r=e,s=t.x,a=t.y,n=-1/0;do{if(a<=r.y&&a>=r.next.y&&r.next.y!==r.y){var h=r.x+(a-r.y)*(r.next.x-r.x)/(r.next.y-r.y);if(h<=s&&n<h){if((n=h)===s){if(a===r.y)return r;if(a===r.next.y)return r.next}i=r.x<r.next.x?r:r.next}}r=r.next}while(r!==e);if(!i)return null;if(s===n)return i.prev;var l,o=i,u=i.x,_=i.y,c=1/0;for(r=i.next;r!==o;)s>=r.x&&r.x>=u&&s!==r.x&&lt.pointInTriangle(a<_?s:n,a,u,_,a<_?n:s,a,r.x,r.y)&&((l=Math.abs(a-r.y)/(s-r.x))<c||l===c&&r.x>i.x)&&lt.locallyInside(r,t)&&(i=r,c=l),r=r.next;return i},lt.indexCurve=function(t,e,i,r){for(var s=t;null===s.z&&(s.z=lt.zOrder(s.x,s.y,e,i,r)),s.prevZ=s.prev,s.nextZ=s.next,(s=s.next)!==t;);s.prevZ.nextZ=null,s.prevZ=null,lt.sortLinked(s)},lt.sortLinked=function(t){var e,i,r,s,a,n,h,l,o=1;do{for(i=t,a=t=null,n=0;i;){for(n++,r=i,e=h=0;e<o&&(h++,r=r.nextZ);e++);for(l=o;0<h||0<l&&r;)0!==h&&(0===l||!r||i.z<=r.z)?(i=(s=i).nextZ,h--):(r=(s=r).nextZ,l--),a?a.nextZ=s:t=s,s.prevZ=a,a=s;i=r}a.nextZ=null,o*=2}while(1<n);return t},lt.zOrder=function(t,e,i,r,s){return(t=1431655765&((t=858993459&((t=252645135&((t=16711935&((t=32767*(t-i)*s)|t<<8))|t<<4))|t<<2))|t<<1))|(e=1431655765&((e=858993459&((e=252645135&((e=16711935&((e=32767*(e-r)*s)|e<<8))|e<<4))|e<<2))|e<<1))<<1},lt.getLeftmost=function(t){for(var e=t,i=t;e.x<i.x&&(i=e),(e=e.next)!==t;);return i},lt.pointInTriangle=function(t,e,i,r,s,a,n,h){return 0<=(s-n)*(e-h)-(t-n)*(a-h)&&0<=(t-n)*(r-h)-(i-n)*(e-h)&&0<=(i-n)*(a-h)-(s-n)*(r-h)},lt.isValidDiagonal=function(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!lt.intersectsPolygon(t,e)&&lt.locallyInside(t,e)&&lt.locallyInside(e,t)&&lt.middleInside(t,e)},lt.area=function(t,e,i){return(e.y-t.y)*(i.x-e.x)-(e.x-t.x)*(i.y-e.y)},lt.equals=function(t,e){return t.x===e.x&&t.y===e.y},lt.intersects=function(t,e,i,r){return!!(lt.equals(t,e)&&lt.equals(i,r)||lt.equals(t,r)&&lt.equals(i,e))||0<lt.area(t,e,i)!=0<lt.area(t,e,r)&&0<lt.area(i,r,t)!=0<lt.area(i,r,e)},lt.intersectsPolygon=function(t,e){var i=t;do{if(i.i!==t.i&&i.next.i!==t.i&&i.i!==e.i&&i.next.i!==e.i&&lt.intersects(i,i.next,t,e))return!0;i=i.next}while(i!==t);return!1},lt.locallyInside=function(t,e){return lt.area(t.prev,t,t.next)<0?0<=lt.area(t,e,t.next)&&0<=lt.area(t,t.prev,e):lt.area(t,e,t.prev)<0||lt.area(t,t.next,e)<0},lt.middleInside=function(t,e){for(var i=t,r=!1,s=(t.x+e.x)/2,a=(t.y+e.y)/2;i.y>a!=i.next.y>a&&i.next.y!==i.y&&s<(i.next.x-i.x)*(a-i.y)/(i.next.y-i.y)+i.x&&(r=!r),(i=i.next)!==t;);return r},lt.splitPolygon=function(t,e){var i=new ot(t.i,t.x,t.y),r=new ot(e.i,e.x,e.y),s=t.next,a=e.prev;return(t.next=e).prev=t,(i.next=s).prev=i,(r.next=i).prev=r,(a.next=r).prev=a,r},lt.insertNode=function(t,e,i,r){var s=new ot(t,e,i);return r?(s.next=r.next,(s.prev=r).next.prev=s,r.next=s):(s.prev=s).next=s,s},lt.removeNode=function(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)},lt.signedArea=function(t,e,i,r){for(var s=0,a=e,n=i-r;a<i;a+=r)s+=(t[n]-t[a])*(t[a+1]+t[n+1]),n=a;return s},lt);function lt(){}var ot=(c(ut,"laya.webgl.shapes.EarcutNode"),ut);function ut(t,e,i){this.i=null,this.x=null,this.y=null,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=null,this.i=t,this.x=e,this.y=i,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}(function(){function t(t,e,i,r,s,a,n){this.lineWidth=t,this.lineColor=e,this.lineAlpha=i,this.fillColor=r,this.fillAlpha=s,this.shape=n,this.fill=a}c(t,"laya.webgl.shapes.GeometryData");var e=t.prototype;e.clone=function(){return new t(this.lineWidth,this.lineColor,this.lineAlpha,this.fillColor,this.fillAlpha,this.fill,this.shape)},e.getIndexData=function(){return null},e.getVertexData=function(){return null},e.destroy=function(){this.shape=null}})(),function(){function t(t){if(t instanceof Float32Array)this.points=t;else if(t instanceof Array){t.length;this.points=new Float32Array(t)}}c(t,"laya.webgl.shapes.Vertex");var e=t.prototype;T.imps(e,{"laya.webgl.shapes.IShape":!0}),e.getData=function(t,e,i){},e.needUpdate=function(t){return!1},e.rebuild=function(t){},e.setMatrix=function(t){}}();var _t,ct=function(){function l(t){void 0===t&&(t=1e4),this._renderType=t}c(l,"laya.webgl.submit.Submit");var t=l.prototype;return T.imps(t,{"laya.webgl.submit.ISubmit":!0}),t.releaseRender=function(){var t=l._cache;(t[t._length++]=this).shaderValue.release(),this._vb=null},t.getRenderType=function(){return this._renderType},t.renderSubmit=function(){if(0===this._numEle)return 1;var t=this.shaderValue.textureHost;if(t){var e=t.source;if(!t.bitmap||!e)return 1;this.shaderValue.texture=e}this._vb.bind_upload(this._ib);var i=Pt.mainContext;return this.shaderValue.upload(),W.activeBlendFunction!==this._blendFn&&(i.enable(3042),this._blendFn(i),W.activeBlendFunction=this._blendFn),C.drawCall++,C.trianglesFaces+=this._numEle/3,i.drawElements(4,this._numEle,5123,this._startIdx),1},l.__init__=function(){var t=l.RENDERBASE=new l(-1);t.shaderValue=new Vt(0,0),t.shaderValue.ALPHA=-1234},l.createSubmit=function(t,e,i,r,s){var a=l._cache._length?l._cache[--l._cache._length]:new l;null==i&&((i=a._selfVb||(a._selfVb=xe.create(-1))).clear(),r=0),a._ib=e,a._vb=i,a._startIdx=r*At.BYTES_PIDX,a._numEle=0;var n=t._nBlendType;a._blendFn=t._targets?W.targetFns[n]:W.fns[n],a.shaderValue=s,a.shaderValue.setValue(t._shader2D);var h=t._shader2D.filters;return h&&a.shaderValue.setFilters(h),a},l.createShape=function(t,e,i,r,s,a){var n=l._cache._length?l._cache[--l._cache._length]:new l;n._ib=e,n._vb=i,n._numEle=r,n._startIdx=s,n.shaderValue=a,n.shaderValue.setValue(t._shader2D);var h=t._nBlendType;return n._blendFn=t._targets?W.targetFns[h]:W.fns[h],n},l.TYPE_2D=1e4,l.TYPE_CANVAS=10003,l.TYPE_CMDSETRT=10004,l.TYPE_CUSTOM=10005,l.TYPE_BLURRT=10006,l.TYPE_CMDDESTORYPRERT=10007,l.TYPE_DISABLESTENCIL=10008,l.TYPE_OTHERIBVB=10009,l.TYPE_PRIMITIVE=10010,l.TYPE_RT=10011,l.TYPE_BLUR_RT=10012,l.TYPE_TARGET=10013,l.TYPE_CHANGE_VALUE=10014,l.TYPE_SHAPE=10015,l.TYPE_TEXTURE=10016,l.TYPE_FILLTEXTURE=10017,l.RENDERBASE=null,l._cache=((l._cache=[])._length=0,l._cache),l}(),ft=function(){function r(){this.fun=null,this.args=null}c(r,"laya.webgl.submit.SubmitCMD");var t=r.prototype;return T.imps(t,{"laya.webgl.submit.ISubmit":!0}),t.renderSubmit=function(){return this.fun.apply(null,this.args),1},t.getRenderType=function(){return 0},t.releaseRender=function(){var t=r._cache;t[t._length++]=this},r.create=function(t,e){var i=r._cache._length?r._cache[--r._cache._length]:new r;return i.fun=e,i.args=t,i},r._cache=((r._cache=[])._length=0,r._cache),r}(),dt=function(){function e(){this.variables={}}c(e,"laya.webgl.submit.SubmitCMDScope");var t=e.prototype;return t.getValue=function(t){return this.variables[t]},t.addValue=function(t,e){return this.variables[t]=e},t.setValue=function(t,e){return this.variables.hasOwnProperty(t)?this.variables[t]=e:null},t.clear=function(){for(var t in this.variables)delete this.variables[t]},t.recycle=function(){this.clear(),e.POOL.push(this)},e.create=function(){var t=e.POOL.pop();return t||(t=new e),t},e.POOL=[],e}(),mt=function(){function _(){this.offset=0,this.startIndex=0,this._mat=S.create()}c(_,"laya.webgl.submit.SubmitOtherIBVB");var t=_.prototype;return T.imps(t,{"laya.webgl.submit.ISubmit":!0}),t.releaseRender=function(){var t=_._cache;t[t._length++]=this},t.getRenderType=function(){return 10009},t.renderSubmit=function(){var t=this._shaderValue.textureHost;if(t){var e=t.source;if(!t.bitmap||!e)return 1;this._shaderValue.texture=e}this._vb.bind_upload(this._ib);var i=Mt.worldMatrix4,r=S.TEMP;S.mulPre(this._mat,i[0],i[1],i[4],i[5],i[12],i[13],r);var s=Mt.worldMatrix4=_.tempMatrix4;s[0]=r.a,s[1]=r.b,s[4]=r.c,s[5]=r.d,s[12]=r.tx,s[13]=r.ty,this._shader._offset=this.offset,this._shaderValue.refresh(),this._shader.upload(this._shaderValue),this._shader._offset=0;var a=Pt.mainContext;return W.activeBlendFunction!==this._blendFn&&(a.enable(3042),this._blendFn(a),W.activeBlendFunction=this._blendFn),C.drawCall++,C.trianglesFaces+=this._numEle/3,a.drawElements(4,this._numEle,5123,this.startIndex),Mt.worldMatrix4=i,jt.activeShader=null,1},_.create=function(t,e,i,r,s,a,n,h,l){void 0===l&&(l=0);var o=_._cache._length?_._cache[--_._cache._length]:new _;o._ib=i,o._vb=e,o._numEle=r,o._shader=s,o._shaderValue=a;var u=t._nBlendType;switch(o._blendFn=t._targets?W.targetFns[u]:W.fns[u],l){case 0:o.offset=0,o.startIndex=h/(At.BYTES_PE*e.vertexStride)*1.5,o.startIndex*=At.BYTES_PIDX;break;case 1:o.startIndex=n,o.offset=h}return o},_._cache=((_._cache=[])._length=0,_._cache),_.tempMatrix4=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],_}(),pt=function(){function i(){this.submitIndex=0,this.submitLength=0,this.context=null,this.clipRect=new R,this.screenRect=new R}c(i,"laya.webgl.submit.SubmitScissor");var t=i.prototype;return T.imps(t,{"laya.webgl.submit.ISubmit":!0}),t._scissor=function(t,e,i,r){var s=Mt.worldMatrix4,a=s[0],n=s[5],h=s[12],l=s[13];if(r*=n,(i*=a)<1||r<1)return!1;var o=(t=t*a+h)+i,u=(e=e*n+l)+r;t<0&&(i=o-(t=0)),e<0&&(r=u-(e=0));var _=Mt.worldClipRect;if(t=Math.max(t,_.x),e=Math.max(e,_.y),i=Math.min(o,_.right)-t,r=Math.min(u,_.bottom)-e,i<1||r<1)return!1;var c=Mt.worldScissorTest;return this.screenRect.copyFrom(_),_.x=t,_.y=e,_.width=i,_.height=r,Mt.worldScissorTest=!0,e=Mt.height-e-r,Pt.mainContext.scissor(t,e,i,r),Pt.mainContext.enable(3089),this.context.submitElement(this.submitIndex,this.submitIndex+this.submitLength),c?(e=Mt.height-this.screenRect.y-this.screenRect.height,Pt.mainContext.scissor(this.screenRect.x,e,this.screenRect.width,this.screenRect.height),Pt.mainContext.enable(3089)):(Pt.mainContext.disable(3089),Mt.worldScissorTest=!1),_.copyFrom(this.screenRect),!0},t._scissorWithTagart=function(t,e,i,r){if(i<1||r<1)return!1;var s=t+i,a=e+r;t<0&&(i=s-(t=0)),e<0&&(r=a-(e=0));var n=Mt.worldClipRect;if(t=Math.max(t,n.x),e=Math.max(e,n.y),i=Math.min(s,n.right)-t,r=Math.min(a,n.bottom)-e,i<1||r<1)return!1;var h=Mt.worldScissorTest;return this.screenRect.copyFrom(n),Mt.worldScissorTest=!0,n.x=t,n.y=e,n.width=i,n.height=r,e=Mt.height-e-r,Pt.mainContext.scissor(t,e,i,r),Pt.mainContext.enable(3089),this.context.submitElement(this.submitIndex,this.submitIndex+this.submitLength),h?(e=Mt.height-this.screenRect.y-this.screenRect.height,Pt.mainContext.scissor(this.screenRect.x,e,this.screenRect.width,this.screenRect.height),Pt.mainContext.enable(3089)):(Pt.mainContext.disable(3089),Mt.worldScissorTest=!1),n.copyFrom(this.screenRect),!0},t.renderSubmit=function(){return this.submitLength=Math.min(this.context._submits._length-1,this.submitLength),this.submitLength<1||this.clipRect.width<1||this.clipRect.height<1||(this.context._targets?this._scissorWithTagart(this.clipRect.x,this.clipRect.y,this.clipRect.width,this.clipRect.height):this._scissor(this.clipRect.x,this.clipRect.y,this.clipRect.width,this.clipRect.height)),this.submitLength+1},t.getRenderType=function(){return 0},t.releaseRender=function(){var t=i._cache;(t[t._length++]=this).context=null},i.create=function(t){var e=i._cache._length?i._cache[--i._cache._length]:new i;return e.context=t,e},i._cache=((i._cache=[])._length=0,i._cache),i}(),gt=function(){function l(){this.step=0,this.blendMode=null,this.level=0}c(l,"laya.webgl.submit.SubmitStencil");var t=l.prototype;return T.imps(t,{"laya.webgl.submit.ISubmit":!0}),t.renderSubmit=function(){switch(this.step){case 1:this.do1();break;case 2:this.do2();break;case 3:this.do3();break;case 4:this.do4();break;case 5:this.do5();break;case 6:this.do6();break;case 7:this.do7();break;case 8:this.do8()}return 1},t.getRenderType=function(){return 0},t.releaseRender=function(){var t=l._cache;t[t._length++]=this},t.do1=function(){var t=Pt.mainContext;t.enable(2960),t.clear(1024),t.colorMask(!1,!1,!1,!1),t.stencilFunc(514,this.level,255),t.stencilOp(7680,7680,7682)},t.do2=function(){var t=Pt.mainContext;t.stencilFunc(514,this.level+1,255),t.colorMask(!0,!0,!0,!0),t.stencilOp(7680,7680,7680)},t.do3=function(){var t=Pt.mainContext;t.colorMask(!0,!0,!0,!0),t.stencilOp(7680,7680,7680),t.clear(1024),t.disable(2960)},t.do4=function(){var t=Pt.mainContext;0==this.level&&(t.enable(2960),t.clear(1024)),t.colorMask(!1,!1,!1,!1),t.stencilFunc(519,0,255),t.stencilOp(7680,7680,7682)},t.do5=function(){var t=Pt.mainContext;t.stencilFunc(514,this.level,255),t.colorMask(!0,!0,!0,!0),t.stencilOp(7680,7680,7680)},t.do6=function(){var t=Pt.mainContext;W.targetFns[W.TOINT[this.blendMode]](t)},t.do7=function(){var t=Pt.mainContext;t.colorMask(!1,!1,!1,!1),t.stencilOp(7680,7680,7683)},t.do8=function(){var t=Pt.mainContext;t.colorMask(!0,!0,!0,!0),t.stencilFunc(514,this.level,255),t.stencilOp(7680,7680,7680)},l.restore=function(t,e,i,r,s){var a;if((t._renderKey=0)<l._mask&&l._mask--,0==l._mask)a=laya.webgl.submit.SubmitStencil.create(3),t.addRenderObject(a),t._curSubmit=ct.RENDERBASE;else{a=laya.webgl.submit.SubmitStencil.create(7),t.addRenderObject(a);var n=t._vb;n._byteLength;if(St.fillRectImgVb(n,null,e.x,e.y,e.width,e.height,F.DEF_UV,i,r,s,0,0)){t._shader2D.glTexture=null;var h=t._curSubmit=ct.createSubmit(t,t._ib,n,(n._byteLength-64)/32*3,Vt.create(2,0));h.shaderValue.ALPHA=1,t._submits[t._submits._length++]=h,t._curSubmit._numEle+=6,t._curSubmit=ct.RENDERBASE}else alert("clipRect calc stencil rect error");a=laya.webgl.submit.SubmitStencil.create(8),t.addRenderObject(a)}},l.restore2=function(t,e){var i;(t._renderKey=0)<l._mask&&l._mask--,0==l._mask?(i=laya.webgl.submit.SubmitStencil.create(3),t.addRenderObject(i),t._curSubmit=ct.RENDERBASE):(i=laya.webgl.submit.SubmitStencil.create(7),t.addRenderObject(i),t._submits[t._submits._length++]=e,i=laya.webgl.submit.SubmitStencil.create(8),t.addRenderObject(i))},l.create=function(t){var e=l._cache._length?l._cache[--l._cache._length]:new l;return 5==(e.step=t)&&++l._mask,e.level=l._mask,e},l._cache=((l._cache=[])._length=0,l._cache),l._mask=0,l}(),vt=function(){function h(){this._renderType=0,this._vb=null,this._ib=null,this._startIdx=0,this._numEle=0,this.shaderValue=null,this.blendType=0,this.proName=null,this.scope=null}c(h,"laya.webgl.submit.SubmitTarget");var t=h.prototype;return T.imps(t,{"laya.webgl.submit.ISubmit":!0}),t.renderSubmit=function(){this._vb.bind_upload(this._ib);var t=this.scope.getValue(this.proName);return t&&(this.shaderValue.texture=t.source,this.shaderValue.strength&&!this.shaderValue.blurInfo&&(this.shaderValue.blurInfo=[t.width,t.height]),this.shaderValue.upload(),this.blend(),C.drawCall++,C.trianglesFaces+=this._numEle/3,Pt.mainContext.drawElements(4,this._numEle,5123,this._startIdx)),1},t.blend=function(){if(W.activeBlendFunction!==W.fns[this.blendType]){var t=Pt.mainContext;t.enable(3042),W.fns[this.blendType](t),W.activeBlendFunction=W.fns[this.blendType]}},t.getRenderType=function(){return 0},t.releaseRender=function(){var t=h._cache;t[t._length++]=this},h.create=function(t,e,i,r,s,a){var n=h._cache._length?h._cache[--h._cache._length]:new h;return n._ib=e,n._vb=i,n.proName=a,n._startIdx=r*At.BYTES_PIDX,n._numEle=0,n.blendType=t._nBlendType,n.shaderValue=s,n.shaderValue.setValue(t._shader2D),n},h._cache=((h._cache=[])._length=0,h._cache),h}(),xt=function(){function t(){this._sourceStr=null}c(t,"laya.webgl.text.CharSegment");var e=t.prototype;return T.imps(e,{"laya.webgl.text.ICharSegment":!0}),e.textToSpit=function(t){this._sourceStr=t},e.getChar=function(t){return this._sourceStr.charAt(t)},e.getCharCode=function(t){return this._sourceStr.charCodeAt(t)},e.length=function(){return this._sourceStr.length},t}(),bt=(c(yt,"laya.webgl.text.DrawText"),yt.__init__=function(){yt._charsTemp=new Array,yt._drawValue=new _t,yt._charSeg=new xt},yt.customCharSeg=function(t){yt._charSeg=t},yt.getChar=function(t,e,i){var r=_e.createOneChar(t,i);return-1!=e&&(yt._charsCache[e]=r),r},yt._drawSlow=function(t,e,i,r,s,a,n,h,l,o,u,_,c,f,d){var m,p,g=yt._drawValue.value(a,h,l,o,c,f,d),v=0,x=0,b=yt._charsTemp,y=0,T=NaN;if(r)for(b.length=r.length,v=0,x=r.length;v<x;v++)T=(p=r[v]).charNum+g.txtID,b[v]=m=yt._charsCache[T]||yt.getChar(p.char,T,g),m.active();else{var A=i instanceof laya.utils.WordText?i.toString():i;if(D.CharacterCache){yt._charSeg.textToSpit(A);var E=yt._charSeg.length();for(v=0,x=b.length=E;v<x;v++)T=yt._charSeg.getCharCode(v)+g.txtID,b[v]=m=yt._charsCache[T]||yt.getChar(yt._charSeg.getChar(v),T,g),m.active(),y+=m.cw}else b.length=0,(m=yt.getChar(A,-1,g)).active(),y+=m.cw,b[0]=m}var S=0;null!==n&&"left"!==n&&(S=-("center"==n?y/2:y));var w,R,I=NaN,M=0;if(r)for(v=0,x=b.length;v<x;v++)(m=b[v]).isSpace||(p=r[v],I=m.borderSize,w=m.texture,e._drawText(w,u+S+p.x*c-I,_+p.y*f-I,w.width,w.height,s,0,0,0,0));else{for(v=0,x=b.length;v<x;v++)(m=b[v]).isSpace||(I=m.borderSize,w=m.texture,e._drawText(w,u+S-I,_-I,w.width,w.height,s,0,0,0,0),t&&((R=t[M++])||(R=t[M-1]=[]),R[0]=w,R[1]=S-I,R[2]=-I)),S+=m.cw;t&&(t.length=M)}},yt._drawFast=function(t,e,i,r,s){for(var a,n,h=0,l=t.length;h<l;h++)(a=(n=t[h])[0]).active(),e._drawText(a,r+n[1],s+n[2],a.width,a.height,i,0,0,0,0)},yt.drawText=function(t,e,i,r,s,a,n,h,l,o,u,_){if(void 0===_&&(_=0),!(e&&0===e.length||i&&0===i.length)){var c=r.a,f=r.d;0===r.b&&0===r.c||(c=f=1);var d=1!==c||1!==f;if(d&&T.stage.transform){var m=T.stage.transform;d=m.a===c&&m.d===f}else d=!1;if(d){var p=(r=r.copyTo(Ot._tmpMatrix)).tx,g=r.ty;r.scale(1/c,1/f),r._checkTransform(),o*=c,u*=f,o+=p-r.tx,u+=g-r.ty}else c=f=1;if(i)yt._drawSlow(null,t,e,i,r,s,a,n,h,l,o,u,c,f,_);else{if(null===e.toUpperCase){var v=c+1e5*f,x=e;return void(x.changed||x.id!==v?(x.id=v,x.changed=!1,yt._drawSlow(x.save,t,e,i,r,s,a,n,h,l,o,u,c,f,_)):yt._drawFast(x.save,t,r,o,u))}var b=e+s.toString()+n+h+l+c+f+a,y=yt._textsCache[b];D.CharacterCache?y?yt._drawFast(y,t,r,o,u):(yt._textsCache.__length||(yt._textsCache.__length=0),yt._textsCache.__length>A.WebGLTextCacheCount&&((yt._textsCache={}).__length=0,yt._curPoolIndex=0),yt._textCachesPool[yt._curPoolIndex]?(y=yt._textsCache[b]=yt._textCachesPool[yt._curPoolIndex]).length=0:yt._textCachesPool[yt._curPoolIndex]=y=yt._textsCache[b]=[],yt._textsCache.__length++,yt._curPoolIndex++,yt._drawSlow(y,t,e,i,r,s,a,n,h,l,o,u,c,f,_)):yt._drawSlow(y,t,e,i,r,s,a,n,h,l,o,u,c,f,_)}}},yt._charsTemp=null,yt._textCachesPool=[],yt._curPoolIndex=0,yt._charsCache={},yt._textsCache={},yt._drawValue=null,yt.d=[],yt._charSeg=null,yt.__init$=function(){function l(){}c(l,""),l.prototype.value=function(t,e,i,r,s,a,n){this.font=t,this.fillColor=e,this.borderColor=i,this.lineWidth=r,this.scaleX=s,this.scaleY=a,this.underLine=n;var h=t.toString()+s+a+r+e+i+n;return this.txtID=l._keymap[h],this.txtID||(this.txtID=1e-7*++l._keymapCount,l._keymap[h]=this.txtID),this},l.clear=function(){l._keymap={},l._keymapCount=1},l._keymap={},l._keymapCount=1,_t=l},yt);function yt(){}var Tt=function(){function s(t){this._index=0,this._size=14,this._italic=-2,s._cache2=s._cache2||[],this.setFont(t||"14px Arial")}c(s,"laya.webgl.text.FontInContext");var t=s.prototype;return t.setFont=function(t){var e=s._cache2[t];if(e)this._words=e[0],this._size=e[1];else{this._words=t.split(" ");for(var i=0,r=this._words.length;i<r;i++)if(0<this._words[i].indexOf("px")){this._index=i;break}this._size=parseInt(this._words[this._index]),s._cache2[t]=[this._words,this._size]}this._text=null,this._italic=-2},t.getItalic=function(){return-2===this._italic&&(this._italic=this.hasType("italic")),this._italic},t.hasType=function(t){for(var e=0,i=this._words.length;e<i;e++)if(this._words[e]===t)return e;return-1},t.removeType=function(t){for(var e=0,i=this._words.length;e<i;e++)if(this._words[e]===t){this._words.splice(e,1),this._index>e&&this._index--;break}this._text=null,this._italic=-2},t.copyTo=function(t){return t._text=this._text,t._size=this._size,t._index=this._index,t._words=this._words.slice(),t._italic=-2,t},t.toString=function(){return this._text?this._text:this._text=this._words.join(" ")},r(0,t,"size",function(){return this._size},function(t){this._size=t,this._words[this._index]=t+"px",this._text=null}),s.create=function(t){var e=s._cache[t];return e||(e=s._cache[t]=new s(t))},s.EMPTY=new s,s._cache={},s._cache2=null,s}(),At=(c(Et,"laya.webgl.utils.CONST3D2D"),Et.defaultMatrix4=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Et.defaultMinusYMatrix4=[1,0,0,0,0,-1,0,0,0,0,1,0,0,0,0,1],Et.uniformMatrix3=[1,0,0,0,0,1,0,0,0,0,1,0],Et._TMPARRAY=[],Et._OFFSETX=0,Et._OFFSETY=0,n(Et,["BYTES_PE",function(){return this.BYTES_PE=Float32Array.BYTES_PER_ELEMENT},"BYTES_PIDX",function(){return this.BYTES_PIDX=Uint16Array.BYTES_PER_ELEMENT}]),Et);function Et(){}var St=(c(wt,"laya.webgl.utils.GlUtils"),wt.make2DProjection=function(t,e,i){return[2/t,0,0,0,0,-2/e,0,0,0,0,2/i,0,-1,1,0,1]},wt.fillIBQuadrangle=function(t,e){if(65535/4<e)throw Error("IBQuadrangle count:"+e+" must<:"+Math.floor(65535/4));e=Math.floor(e),t._resizeBuffer(6*(e+1)*2,!1),t.byteLength=t.bufferLength;for(var i=t.getUint16Array(),r=0,s=0;s<e;s++)i[r++]=4*s,i[r++]=4*s+2,i[r++]=4*s+1,i[r++]=4*s,i[r++]=4*s+3,i[r++]=4*s+2;return t.setNeedUpload(),!0},wt.expandIBQuadrangle=function(t,e){t.bufferLength>=6*e*2||wt.fillIBQuadrangle(t,e)},wt.mathCeilPowerOfTwo=function(t){return t--,t|=t>>1,t|=t>>2,t|=t>>4,t|=t>>8,t|=t>>16,++t},wt.fillQuadrangleImgVb=function(t,e,i,r,s,a,n,h){var l=16+(t._byteLength>>2);t.byteLength=l<<2;var o=t.getFloat32Array();o[2+(l-=16)]=s[0],o[l+3]=s[1],o[l+6]=s[2],o[l+7]=s[3],o[l+10]=s[4],o[l+11]=s[5],o[l+14]=s[6],o[l+15]=s[7];var u=a.a,_=a.b,c=a.c,f=a.d;if(1!==u||0!==_||0!==c||1!==f){a.bTransform=!0;var d=a.tx+n,m=a.ty+h;o[l]=(r[0]+e)*u+(r[1]+i)*c+d,o[l+1]=(r[0]+e)*_+(r[1]+i)*f+m,o[l+4]=(r[2]+e)*u+(r[3]+i)*c+d,o[l+5]=(r[2]+e)*_+(r[3]+i)*f+m,o[l+8]=(r[4]+e)*u+(r[5]+i)*c+d,o[l+9]=(r[4]+e)*_+(r[5]+i)*f+m,o[l+12]=(r[6]+e)*u+(r[7]+i)*c+d,o[l+13]=(r[6]+e)*_+(r[7]+i)*f+m}else a.bTransform=!1,e+=a.tx+n,i+=a.ty+h,o[l]=e+r[0],o[l+1]=i+r[1],o[l+4]=e+r[2],o[l+5]=i+r[3],o[l+8]=e+r[4],o[l+9]=i+r[5],o[l+12]=e+r[6],o[l+13]=i+r[7];return t._upload=!0},wt.fillTranglesVB=function(t,e,i,r,s,a,n){var h=(t._byteLength>>2)+r.length;t.byteLength=h<<2;var l=t.getFloat32Array();h-=r.length;for(var o=r.length,u=s.a,_=s.b,c=s.c,f=s.d,d=0;d<o;d+=4)if(l[h+d+2]=r[d+2],l[h+d+3]=r[d+3],1!==u||0!==_||0!==c||1!==f){s.bTransform=!0;var m=s.tx+a,p=s.ty+n;l[h+d]=(r[d]+e)*u+(r[d+1]+i)*c+m,l[h+d+1]=(r[d]+e)*_+(r[d+1]+i)*f+p}else s.bTransform=!1,e+=s.tx+a,i+=s.ty+n,l[h+d]=e+r[d],l[h+d+1]=i+r[d+1];return t._upload=!0},wt.copyPreImgVb=function(t,e,i){var r=t._byteLength>>2;t.byteLength=r+16<<2;for(var s=t.getFloat32Array(),a=0,n=r-16;a<4;a++)s[r]=s[n]+e,++n,s[++r]=s[n]+i,++n,s[++r]=s[n],++n,s[++r]=s[n],++r,++n;t._upload=!0},wt.fillRectImgVb=function(t,e,i,r,s,a,n,h,l,o,u,_,c){void 0===c&&(c=!1);var f,d,m,p,g,v,x,b,y,T,A,E,S,w,R,I,M=1,C=h.a,L=h.b,P=h.c,D=h.d,F=e&&e.width<99999999;if(1!==C||0!==L||0!==P||1!==D?(h.bTransform=!0,0===L&&0===P&&(M=23,y=s+i,T=a+r,f=C*i+(A=h.tx+l),m=C*y+A,d=D*r+(E=h.ty+o),p=D*T+E)):(M=23,h.bTransform=!1,m=(f=i+h.tx+l)+s,p=(d=r+h.ty+o)+a),F&&(g=e.x,v=e.y,x=e.width+g,b=e.height+v),1!==M){if(Math.min(f,m)>=x)return!1;if(Math.min(d,p)>=b)return!1;if(Math.max(m,f)<=g)return!1;if(Math.max(p,d)<=v)return!1}var B=t._byteLength>>2;t.byteLength=16+B<<2;var N=t.getFloat32Array();switch(N[2+B]=n[0],N[3+B]=n[1],N[6+B]=n[2],N[7+B]=n[3],N[10+B]=n[4],N[11+B]=n[5],N[14+B]=n[6],N[15+B]=n[7],M){case 1:A=h.tx+l,E=h.ty+o;var O=C*i,V=P*r,U=D*r,k=L*i,H=C*(y=s+i),G=P*(T=a+r),z=D*T,W=L*y;c?(S=O+V+A,R=Math.round(S)-S,w=U+k+E,I=Math.round(w)-w,N[B]=S+R,N[1+B]=w+I,N[4+B]=H+V+A+R,N[5+B]=U+W+E+I,N[8+B]=H+G+A+R,N[9+B]=z+W+E+I,N[12+B]=O+G+A+R,N[13+B]=z+k+E+I):(N[B]=O+V+A,N[1+B]=U+k+E,N[4+B]=H+V+A,N[5+B]=U+W+E,N[8+B]=H+G+A,N[9+B]=z+W+E,N[12+B]=O+G+A,N[13+B]=z+k+E);break;case 23:c?(S=f+u,R=Math.round(S)-S,w=d,I=Math.round(w)-w,N[B]=S+R,N[1+B]=w+I,N[4+B]=m+u+R,N[5+B]=d+I,N[8+B]=m+R,N[9+B]=p+I,N[12+B]=f+R,N[13+B]=p+I):(N[B]=f+u,N[1+B]=d,N[4+B]=m+u,N[5+B]=d,N[8+B]=m,N[9+B]=p,N[12+B]=f,N[13+B]=p)}return t._upload=!0},wt.fillLineVb=function(t,e,i,r,s,a,n,h){var l=.5*n,o=wt._fillLineArray,u=-(r-a),_=i-s,c=Math.sqrt(u*u+_*_);u/=c,_/=c,u*=l,_*=l,o[0]=i-u,o[1]=r-_,o[4]=i+u,o[5]=r+_,o[8]=s+u,o[9]=a+_,o[12]=s-u,o[13]=a-_,h&&h.transformPointArray(o,o);var f=16+(t._byteLength>>2);return t.byteLength=f<<2,t.insertData(o,f-16),!0},wt._fillLineArray=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],wt);function wt(){}c(Rt,"laya.webgl.utils.MatirxArray"),Rt.ArrayMul=function(t,e,i){if(t)if(e)for(var r=NaN,s=NaN,a=NaN,n=NaN,h=0;h<4;h++)r=t[h],s=t[h+4],a=t[h+8],n=t[h+12],i[h]=r*e[0]+s*e[1]+a*e[2]+n*e[3],i[h+4]=r*e[4]+s*e[5]+a*e[6]+n*e[7],i[h+8]=r*e[8]+s*e[9]+a*e[10]+n*e[11],i[h+12]=r*e[12]+s*e[13]+a*e[14]+n*e[15];else Rt.copyArray(t,i);else Rt.copyArray(e,i)},Rt.copyArray=function(t,e){if(t&&e)for(var i=0;i<t.length;i++)e[i]=t[i]};function Rt(){}var It=function(){function e(t,e,i){this._stride=0,this.vertNum=0,this.indexNum=0,this._applied=!1,this._vb=null,this._ib=null,this._vao=null,this._attribInfo=null,this._quadNum=0,this.canReuse=!1,this._stride=t,this._vb=new xe(t,35048),e&&this._vb._resizeBuffer(e,!1),this._ib=new ve,i&&this._ib._resizeBuffer(i,!1)}c(e,"laya.webgl.utils.Mesh2D");var t=e.prototype;return t.cloneWithNewVB=function(){var t=new e(this._stride,0,0);return t._ib=this._ib,t._quadNum=this._quadNum,t._attribInfo=this._attribInfo,t},t.cloneWithNewVBIB=function(){var t=new e(this._stride,0,0);return t._attribInfo=this._attribInfo,t},t.getVBW=function(){return this._vb.setNeedUpload(),this._vb},t.getVBR=function(){return this._vb},t.getIBR=function(){return this._ib},t.getIBW=function(){return this._ib.setNeedUpload(),this._ib},t.createQuadIB=function(t){this._quadNum=t,this._ib._resizeBuffer(6*t*2,!1),this._ib.byteLength=this._ib.bufferLength;for(var e=this._ib.getUint16Array(),i=0,r=0,s=0;s<t;s++)e[i++]=r,e[i++]=r+2,e[i++]=r+1,e[i++]=r,e[i++]=r+3,e[i++]=r+2,r+=4;this._ib.setNeedUpload()},t.setAttributes=function(t){if(this._attribInfo=t,this._attribInfo.length%3!=0)throw"Mesh2D setAttributes error!"},t.getEleNum=function(){return this._ib.getBuffer().byteLength/2},t.releaseMesh=function(){},t.destroy=function(){},t.clearVB=function(){this._vb.clear()},e._gvaoid=0,e}(),Mt=(c(Ct,"laya.webgl.utils.RenderState2D"),Ct.getMatrArray=function(){return[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]},Ct.mat2MatArray=function(t,e){var i=t,r=e;return r[0]=i.a,r[1]=i.b,r[2]=Ct.EMPTYMAT4_ARRAY[2],r[3]=Ct.EMPTYMAT4_ARRAY[3],r[4]=i.c,r[5]=i.d,r[6]=Ct.EMPTYMAT4_ARRAY[6],r[7]=Ct.EMPTYMAT4_ARRAY[7],r[8]=Ct.EMPTYMAT4_ARRAY[8],r[9]=Ct.EMPTYMAT4_ARRAY[9],r[10]=Ct.EMPTYMAT4_ARRAY[10],r[11]=Ct.EMPTYMAT4_ARRAY[11],r[12]=i.tx,r[13]=i.ty,r[14]=Ct.EMPTYMAT4_ARRAY[14],r[15]=Ct.EMPTYMAT4_ARRAY[15],e},Ct.restoreTempArray=function(){Ct.TEMPMAT4_ARRAY[0]=1,Ct.TEMPMAT4_ARRAY[1]=0,Ct.TEMPMAT4_ARRAY[4]=0,Ct.TEMPMAT4_ARRAY[5]=1,Ct.TEMPMAT4_ARRAY[12]=0,Ct.TEMPMAT4_ARRAY[13]=0},Ct.clear=function(){Ct.worldScissorTest=!1,Ct.worldShaderDefines=null,Ct.worldFilters=null,Ct.worldAlpha=1,Ct.worldClipRect.x=Ct.worldClipRect.y=0,Ct.worldClipRect.width=Ct.width,Ct.worldClipRect.height=Ct.height,Ct.curRenderTarget=null},Ct._MAXSIZE=99999999,Ct.EMPTYMAT4_ARRAY=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Ct.worldMatrix4=Ct.TEMPMAT4_ARRAY=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],Ct.worldAlpha=1,Ct.worldScissorTest=!1,Ct.worldFilters=null,Ct.worldShaderDefines=null,Ct.curRenderTarget=null,Ct.width=0,Ct.height=0,n(Ct,["worldMatrix",function(){return this.worldMatrix=new S},"worldClipRect",function(){return this.worldClipRect=new R(0,0,99999999,99999999)}]),Ct);function Ct(){}var Lt=function(){var v,i;function x(t,e,i,r,s){var a=this;function n(t){var e=[],i=new v(e);return a._compileToTree(i,t.split("\n"),0,e,s),i}var h=f.now();this._VS=n(e),this._PS=n(i),this._nameMap=r,2<f.now()-h&&console.log("ShaderCompile use time:"+(f.now()-h)+"  size:"+e.length+"/"+i.length)}c(x,"laya.webgl.utils.ShaderCompile");var t=x.prototype;return t._compileToTree=function(t,e,i,r,s){var a,n,h,l,o,u,_,c=0,f=0,d=0,m=0;for(f=i;f<e.length;f++)if(!((h=e[f]).length<1)&&0!==(c=h.indexOf("//"))){if(0<=c&&(h=h.substr(0,c)),a=_||new v(r),_=null,a.text=h,a.noCompile=!0,0<=(c=h.indexOf("#"))){for(l="#",m=c+1,d=h.length;m<d;m++){var p=h.charAt(m);if(" "===p||"\t"===p||"?"===p)break;l+=p}switch(a.name=l){case"#ifdef":case"#ifndef":if(a.src=h,a.noCompile=null!=h.match(/[!&|()=<>]/),a.noCompile?console.log("function():Boolean{return "+h.substr(c+a.name.length)+"}"):(u=h.replace(/^\s*/,"").split(/\s+/),a.setCondition(u[1],"#ifdef"===l?1:2),a.text="//"+a.text),a.setParent(t),t=a,s)for(u=h.substr(m).split(x._splitToWordExps3),m=0;m<u.length;m++)(h=u[m]).length&&(s[h]=!0);continue;case"#if":if(a.src=h,a.noCompile=!0,a.setParent(t),t=a,s)for(u=h.substr(m).split(x._splitToWordExps3),m=0;m<u.length;m++)(h=u[m]).length&&"defined"!=h&&(s[h]=!0);continue;case"#else":a.src=h,n=(t=t.parent).childs[t.childs.length-1],a.noCompile=n.noCompile,a.noCompile||(a.condition=n.condition,a.conditionType=1==n.conditionType?2:1,a.text="//"+a.text+" "+n.text+" "+a.conditionType),a.setParent(t),t=a;continue;case"#endif":n=(t=t.parent).childs[t.childs.length-1],a.noCompile=n.noCompile,a.noCompile||(a.text="//"+a.text),a.setParent(t);continue;case"#include":u=x.splitToWords(h,null);var g=x.includes[u[1]];if(!g)throw"ShaderCompile error no this include file:"+u[1];if((c=u[0].indexOf("?"))<0){a.setParent(t),h=g.getWith("with"==u[2]?u[3]:null),this._compileToTree(a,h.split("\n"),0,r,s),a.text="";continue}a.setCondition(u[0].substr(c+1),1),a.text=g.getWith("with"==u[2]?u[3]:null);break;case"#import":o=(u=x.splitToWords(h,null))[1],r.push({node:a,file:x.includes[o],ofs:a.text.length});continue}}else{if((n=t.childs[t.childs.length-1])&&!n.name){0<r.length&&x.splitToWords(h,n),_=a,n.text+="\n"+h;continue}0<r.length&&x.splitToWords(h,a)}a.setParent(t)}},t.createShader=function(t,e,i){var r={},s="";if(t)for(var a in t)s+="#define "+a+"\n",r[a]=!0;var n=this._VS.toscript(r,[]),h=this._PS.toscript(r,[]);return(i||de.create)(s+n.join("\n"),s+h.join("\n"),e,this._nameMap)},x._parseOne=function(t,e,i,r,s,a){var n={type:x.shaderParamsMap[i[r+1]],name:i[r+2],size:isNaN(parseInt(i[r+3]))?1:parseInt(i[r+3])};return a&&("attribute"==s?t.push(n):e.push(n)),":"==i[r+3]&&(n.type=i[r+4],r+=2),r+=2},x.addInclude=function(t,e){if(!e||0===e.length)throw new Error("add shader include file err:"+t);if(x.includes[t])throw new Error("add shader include file err, has add:"+t);x.includes[t]=new i(e)},x.preGetParams=function(t,e){var i=[t,e],r={},s=[],a=[],n={},h=[];r.attributes=s,r.uniforms=a,r.defines=n;for(var l=0,o=0,u=0;u<2;u++){i[u]=i[u].replace(x._removeAnnotation,"");var _,c=i[u].match(x._reg);for(l=0,o=c.length;l<o;l++){var f=c[l];if("attribute"==f||"uniform"==f)l=x._parseOne(s,a,c,l,f,!0);else{if("#define"==f){h[f=c[++l]]=1;continue}if("#ifdef"==f){n[_=c[++l]]=n[_]||[];for(l++;l<o;l++)if("attribute"==(f=c[l])||"uniform"==f)l=x._parseOne(s,a,c,l,f,h[_]);else if("#else"==f)for(l++;l<o;l++)if("attribute"==(f=c[l])||"uniform"==f)l=x._parseOne(s,a,c,l,f,!h[_]);else if("#endif"==f)break}}}}return r},x.splitToWords=function(t,e){for(var i,r,s=[],a=-1,n=0,h=t.length;n<h;n++)if(i=t.charAt(n),0<=" \t=+-*/&%!<>()'\",;".indexOf(i)){if(0<=a&&1<n-a&&(r=t.substr(a,n-a),s.push(r)),'"'==i||"'"==i){var l=t.indexOf(i,n+1);if(l<0)throw"Sharder err:"+t;s.push(t.substr(n+1,l-n-1)),n=l,a=-1;continue}"("==i&&e&&0<s.length&&(r=s[s.length-1]+";","vec4;main;".indexOf(r)<0&&(e.useFuns+=r)),a=-1}else a<0&&(a=n);return a<h&&1<h-a&&(r=t.substr(a,h-a),s.push(r)),s},x.IFDEF_NO=0,x.IFDEF_YES=1,x.IFDEF_ELSE=2,x.IFDEF_PARENT=3,x._removeAnnotation=new RegExp("(/\\*([^*]|[\\r\\\n]|(\\*+([^*/]|[\\r\\n])))*\\*+/)|(//.*)","g"),x._reg=new RegExp("(\".*\")|('.*')|([#\\w\\*-\\.+/()=<>{}\\\\]+)|([,;:\\\\])","g"),x._splitToWordExps=new RegExp("[(\".*\")]+|[('.*')]+|([ \\t=\\+\\-*/&%!<>!%(),;])","g"),x.includes={},n(x,["shaderParamsMap",function(){return this.shaderParamsMap={float:5126,int:5124,bool:35670,vec2:35664,vec3:35665,vec4:35666,ivec2:35667,ivec3:35668,ivec4:35669,bvec2:35671,bvec3:35672,bvec4:35673,mat2:35674,mat3:35675,mat4:35676,sampler2D:35678,samplerCube:35680}},"_splitToWordExps3",function(){return this._splitToWordExps3=new RegExp("[ \\t=\\+\\-*/&%!<>!%(),;\\|]","g")}]),x.__init$=function(){v=function(){function i(t){this.childs=[],this.text="",this.parent=null,this.name=null,this.noCompile=!1,this.includefiles=null,this.condition=null,this.conditionType=0,this.useFuns="",this.z=0,this.src=null,this.includefiles=t}c(i,"");var t=i.prototype;return t.setParent=function(t){t.childs.push(this),this.z=t.z+1,this.parent=t},t.setCondition=function(t,e){t&&(this.conditionType=e,t=t.replace(/(\s*$)/g,""),this.condition=function(){return this[t]},this.condition.__condition=t)},t.toscript=function(t,e){return this._toscript(t,e,++i.__id)},t._toscript=function(r,s,a){if(this.childs.length<1&&!this.text)return s;s.length;if(this.condition){var t=!!this.condition.call(r);if(2===this.conditionType&&(t=!t),!t)return s}if(this.text&&s.push(this.text),0<this.childs.length&&this.childs.forEach(function(t,e,i){t._toscript(r,s,a)}),0<this.includefiles.length&&0<this.useFuns.length)for(var e,i=0,n=this.includefiles.length;i<n;i++)this.includefiles[i].curUseID!=a&&0<(e=this.includefiles[i].file.getFunsScript(this.useFuns)).length&&(this.includefiles[i].curUseID=a,s[0]=e+s[0]);return s},i.__id=1,i}(),i=function(){function t(t){this.script=null,this.codes={},this.funs={},this.curUseID=-1,this.funnames="",this.script=t;for(var e=0,i=0,r=0;!((e=t.indexOf("#begin",e))<0);){for(r=e+5;!((r=t.indexOf("#end",r))<0)&&"i"===t.charAt(r+4);)r+=5;if(r<0)throw"add include err,no #end:"+t;i=t.indexOf("\n",e);var s=x.splitToWords(t.substr(e,i-e),null);"code"==s[1]?this.codes[s[2]]=t.substr(i+1,r-i-1):"function"==s[1]&&(i=t.indexOf("function",e),i+="function".length,this.funs[s[3]]=t.substr(i+1,r-i-1),this.funnames+=s[3]+";"),e=r+1}}c(t,"");var e=t.prototype;return e.getWith=function(t){var e=t?this.codes[t]:this.script;if(!e)throw"get with error:"+t;return e},e.getFunsScript=function(t){var e="";for(var i in this.funs)0<=t.indexOf(i+";")&&(e+=this.funs[i]);return e},t}()},x}(),Pt=(c(Dt,"laya.webgl.WebGL"),Dt._uint8ArraySlice=function(){for(var t=this.length,e=new Uint8Array(this.length),i=0;i<t;i++)e[i]=this[i];return e},Dt._float32ArraySlice=function(){for(var t=this.length,e=new Float32Array(this.length),i=0;i<t;i++)e[i]=this[i];return e},Dt._uint16ArraySlice=function(t){var e,i=arguments,r=0,s=0;if(0===i.length)for(r=this.length,e=new Uint16Array(r),s=0;s<r;s++)e[s]=this[s];else if(2===i.length){var a=i[0],n=i[1];if(a<n)for(r=n-a,e=new Uint16Array(r),s=a;s<n;s++)e[s-a]=this[s];else e=new Uint16Array(0)}return e},Dt.expandContext=function(){var t=s.prototype,e=CanvasRenderingContext2D.prototype;e.fillTrangles=t.fillTrangles,me.__int__(null),e.setIBVB=function(t,e,i,r,s,a,n,h,l,o){void 0===l&&(l=0),void 0===o&&(o=0),null===i&&(this._ib=this._ib||ve.QuadrangleIB,i=this._ib,St.expandIBQuadrangle(i,r._byteLength/64+8)),this._setIBVB(t,e,i,r,s,a,n,h,l,o)},e.fillTrangles=function(t,e,i,r,s){this._curMat=this._curMat||S.create(),this._vb=this._vb||xe.create(),this._ib||(this._ib=ve.create(),St.fillIBQuadrangle(this._ib,n/4));var a=this._vb,n=r.length>>4;St.fillTranglesVB(a,e,i,r,s||this._curMat,0,0),St.expandIBQuadrangle(this._ib,a._byteLength/64+8);var h=new Vt(1,0);h.textureHost=t;var l=new ge("attribute vec2 position; attribute vec2 texcoord; uniform vec2 size; uniform mat4 mmat; varying vec2 v_texcoord; void main() { vec4 p=vec4(position.xy,0.0,1.0);vec4 pos=mmat*p; gl_Position =vec4((pos.x/size.x-0.5)*2.0,(0.5-pos.y/size.y)*2.0,pos.z,1.0); v_texcoord = texcoord; }","precision mediump float; varying vec2 v_texcoord; uniform sampler2D texture; void main() {vec4 color= texture2D(texture, v_texcoord); color.a*=1.0; gl_FragColor= color;}");a._vertType=3,this._setIBVB(e,i,this._ib,a,6*n,s,l,h,0,0)}},Dt.enable=function(){if(f.__init__(),g.isConchApp&&!g.isConchWebGL)return y.skinAniSprite=function(){return new st},Dt.expandContext(),!1;if(y.getWebGLContext=function(t){for(var e,i=["webgl","experimental-webgl","webkit-3d","moz-webgl"],r=0;r<i.length;r++){try{e=t.getContext(i[r],{stencil:A.isStencil,alpha:A.isAlpha,antialias:A.isAntialias,premultipliedAlpha:A.premultipliedAlpha,preserveDrawingBuffer:A.preserveDrawingBuffer})}catch(t){}if(e)return e}return null},null==(Dt.mainContext=y.getWebGLContext(g._mainCanvas)))return!1;if(g.isWebGL)return!0;m.create=function(t,e){return new be(t,e)},p.create=function(t,e,i,r,s,a,n){return new fe(t,e,i,r,s,a,n)},g.WebGL=Dt,g.isWebGL=!0,bt.__init__(),y.createRenderSprite=function(t,e){return new Ut(t,e)},y.createWebGLContext2D=function(t){return new Ot(t)},y.changeWebGLSize=function(t,e){laya.webgl.WebGL.onStageResize(t,e)},y.createGraphics=function(){return new Nt};var t=y.createFilterAction;return y.createFilterAction=t||function(t){return new kt},y.clear=function(t){Mt.worldScissorTest&&laya.webgl.WebGL.mainContext.disable(3089);var e=g.context.ctx,i=0==e._submits._length||A.preserveDrawingBuffer?d.create(t)._color:M._wgColor;i&&e.clearBG(i[0],i[1],i[2],i[3]),Mt.clear()},y.addToAtlas=function(t,e){void 0===e&&(e=!1);var i=t.bitmap;g.optimizeTextureMemory(t.url,t)?T.__typeof(i,"laya.webgl.resource.IMergeAtlasBitmap")&&i.allowMerageInAtlas&&i.on("recovered",t,t.addTextureToAtlas):i.enableMerageInAtlas=!1},y.isAtlas=function(t){return t instanceof laya.webgl.atlas.AtlasWebGLCanvas},H._enable(),y.beginFlush=function(){for(var t=H.instance,e=t.getAtlaserCount(),i=0;i<e;i++){var r=t.getAtlaserByIndex(i).texture;r._flashCacheImageNeedFlush&&y.flashFlushImage(r)}},y.drawToCanvas=function(t,e,i,r,s,a){(i<=0||r<=0)&&console.log("[error] canvasWidth and canvasHeight should greater than zero"),i|=0,r|=0,s|=0,a|=0;var n=Jt.create(i,r,6408,5121,0,!1);n.start(),n.clear(0,0,0,0),g.context.clear(),v.renders[e]._fun(t,g.context,s,Mt.height-r+a),g.context.flush(),n.end();var h=n.getData(0,0,i,r);if(n.recycle(),h.byteLength==i*r*4){var l=new ue;l._canvas=f.createElement("canvas"),l.size(i,r);var o=l._canvas.getContext("2d");f.canvas.size(i,r);var u=f.context,_=u.createImageData(i,r);return _.data.set(new Uint8ClampedArray(h.buffer)),l._imgData=_,u.putImageData(_,0,0),o.save(),o.translate(0,r),o.scale(1,-1),o.drawImage(f.canvas.source,0,0),o.restore(),l}console.log("drawToCanvas error: w:"+i+",h:"+r+",datalen:"+h.byteLength)},y.createFilterAction=function(t){var e;switch(t){case 32:e=new kt}return e},y.addTextureToAtlas=function(t){t._uvID++,H._atlasRestore++,t.bitmap.enableMerageInAtlas&&H.instance.addToAtlas(t)},y.getTexturePixels=function(t,e,i,r,s){g.context.ctx.clear();var a=new I;a.graphics.drawTexture(t,-e,-i);var n=Jt.create(r,s);n.start(),n.clear(0,0,0,0),a.render(g.context,0,0),g.context.ctx.flush(),n.end();for(var h=n.getData(0,0,r,s),l=[],o=0,u=s-1;0<=u;u--)for(var _=0;_<r;_++)o=4*(u*r+_),l.push(h[o]),l.push(h[o+1]),l.push(h[o+2]),l.push(h[o+3]);return l},y.skinAniSprite=function(){return new st},_.create=function(t,e){var i=new ue;return i._imgData=e,i.flipY=!1,i},E._filterStart=function(t,e,i,r,s){var a=t.getValue("bounds"),n=Jt.create(a.width,a.height);if(n.start(),n.clear(0,0,0,0),t.addValue("src",n),t.addValue("ScissorTest",Mt.worldScissorTest),Mt.worldScissorTest){var h=new R;h.copyFrom(i.ctx._clipRect),t.addValue("clipRect",h),Mt.worldScissorTest=!1,laya.webgl.WebGL.mainContext.disable(3089)}},E._filterEnd=function(t,e,i,r,s){var a=t.getValue("bounds");t.getValue("src").end();var n=Jt.create(a.width,a.height);n.start(),n.clear(0,0,0,0),t.addValue("out",n),e._set$P("_filterCache",n),e._set$P("_isHaveGlowFilter",t.getValue("_isHaveGlowFilter"))},E._EndTarget=function(t,e){if(t.getValue("src").recycle(),t.getValue("out").end(),t.getValue("ScissorTest")){Mt.worldScissorTest=!0,laya.webgl.WebGL.mainContext.enable(3089),e.ctx.save();var i=t.getValue("clipRect");e.ctx.clipRect(i.x,i.y,i.width,i.height)}},E._useSrc=function(t){var e=t.getValue("out");e.end(),(e=t.getValue("src")).start(),e.clear(0,0,0,0)},E._endSrc=function(t){t.getValue("src").end()},E._useOut=function(t){var e=t.getValue("src");e.end(),(e=t.getValue("out")).start(),e.clear(0,0,0,0)},E._endOut=function(t){t.getValue("out").end()},E._recycleScope=function(t){t.recycle()},E._filter=function(t,e,i,r){var s=this._next;if(s){var a,n,h=t.filters,l=h.length;if(1==l&&32==h[0].type)return e.ctx.save(),e.ctx.setFilters([h[0]]),s._fun.call(s,t,e,i,r),void e.ctx.restore();var o=dt.create(),u=w.TEMP,_=e.ctx._getTransformMatrix(),c=S.create();_.copyTo(c);var f=0,d=0,m=!1,p=t._$P._filterCache?t._$P._filterCache:null;if(!p||t._repaint){m=t._isHaveGlowFilter(),o.addValue("_isHaveGlowFilter",m),m&&(f=50,d=25),(n=new R).copyFrom(t.getSelfBounds()),n.x+=t.x,n.y+=t.y,n.x-=t.pivotX+4,n.y-=t.pivotY+4;var g=n.x,v=n.y;if(n.width+=f+8,n.height+=f+8,u.x=n.x*c.a+n.y*c.c,u.y=n.y*c.d+n.x*c.b,n.x=u.x,n.y=u.y,u.x=n.width*c.a+n.height*c.c,u.y=n.height*c.d+n.width*c.b,n.width=u.x,n.height=u.y,n.width<=0||n.height<=0)return;p&&p.recycle(),o.addValue("bounds",n);var x=ft.create([o,t,e,0,0],E._filterStart);e.addRenderObject(x),e.ctx._renderKey=0,e.ctx._shader2D.glTexture=null;var b=t.x-g+d,y=t.y-v+d;s._fun.call(s,t,e,b,y),x=ft.create([o,t,e,0,0],E._filterEnd),e.addRenderObject(x);for(var T=0;T<l;T++)0!=T&&(x=ft.create([o],E._useSrc),e.addRenderObject(x),a=Vt.create(1,0),S.TEMP.identity(),e.ctx.drawTarget(o,0,0,n.width,n.height,S.TEMP,"out",a,null,W.TOINT.overlay),x=ft.create([o],E._useOut),e.addRenderObject(x)),h[T].action.apply3d(o,t,e,0,0);x=ft.create([o,e],E._EndTarget),e.addRenderObject(x)}else{if((m=!!t._$P._isHaveGlowFilter&&t._$P._isHaveGlowFilter)&&(f=50,d=25),(n=t.getBounds()).width<=0||n.height<=0)return;n.width+=f,n.height+=f,u.x=n.x*c.a+n.y*c.c,u.y=n.y*c.d+n.x*c.b,n.x=u.x,n.y=u.y,u.x=n.width*c.a+n.height*c.c,u.y=n.height*c.d+n.width*c.b,n.width=u.x,n.height=u.y,o.addValue("out",p)}i=i-d-t.x,r=r-d-t.y,u.setTo(i,r),c.transformPoint(u),i=u.x+n.x,r=u.y+n.y,a=Vt.create(1,0),S.TEMP.identity(),e.ctx.drawTarget(o,i,r,n.width,n.height,S.TEMP,"out",a,null,W.TOINT.overlay),x=ft.create([o],E._recycleScope),e.addRenderObject(x),c.destroy()}},Float32Array.prototype.slice||(Float32Array.prototype.slice=Dt._float32ArraySlice),Uint16Array.prototype.slice||(Uint16Array.prototype.slice=Dt._uint16ArraySlice),Uint8Array.prototype.slice||(Uint8Array.prototype.slice=Dt._uint8ArraySlice),!0},Dt.onStageResize=function(t,e){null!=Dt.mainContext&&(Dt.mainContext.viewport(0,0,t,e),Mt.width=t,Mt.height=e)},Dt.onInvalidGLRes=function(){H.instance.freeAll(),b.releaseContentManagers(!0),Dt.doNodeRepaint(T.stage),Dt.mainContext.viewport(0,0,Mt.width,Mt.height),T.stage.event("devicelost")},Dt.doNodeRepaint=function(t){0==t.numChildren&&t.repaint();for(var e=0;e<t.numChildren;e++)Dt.doNodeRepaint(t.getChildAt(e))},Dt.init=function(t,e,i){Dt.mainCanvas=t,_._createContext=function(t){return new Ot(t)},ue._createContext=function(t){return new Ot(t)};var r=laya.webgl.WebGL.mainContext;if(null!=r.getShaderPrecisionFormat){var s=r.getShaderPrecisionFormat(35633,36338),a=r.getShaderPrecisionFormat(35632,36338);Dt.shaderHighPrecision=!(!s.precision||!a.precision)}else Dt.shaderHighPrecision=!1;if(Dt.compressAstc=r.getExtension("WEBGL_compressed_texture_astc"),Dt.compressAtc=r.getExtension("WEBGL_compressed_texture_atc"),Dt.compressEtc=r.getExtension("WEBGL_compressed_texture_etc"),Dt.compressEtc1=r.getExtension("WEBGL_compressed_texture_etc1"),Dt.compressPvrtc=r.getExtension("WEBGL_compressed_texture_pvrtc"),Dt.compressS3tc=r.getExtension("WEBGL_compressed_texture_s3tc"),Dt.compressS3tc_srgb=r.getExtension("WEBGL_compressed_texture_s3tc_srgb"),r.deleteTexture1=r.deleteTexture,r.deleteTexture=function(t){t==Ft.curBindTexValue&&(Ft.curBindTexValue=null),r.deleteTexture1(t)},Dt.onStageResize(e,i),null==Dt.mainContext)throw new Error("webGL getContext err!");P.__init__(),H.__init__(),Gt.__init__(),ct.__init__(),Ot.__init__(),Vt.__init__(),et.__init__(),me.__int__(r),W._init_(r),g.isConchApp&&conch.setOnInvalidGLRes(Dt.onInvalidGLRes)},Dt.compressAstc=null,Dt.compressAtc=null,Dt.compressEtc=null,Dt.compressEtc1=null,Dt.compressPvrtc=null,Dt.compressS3tc=null,Dt.compressS3tc_srgb=null,Dt.mainCanvas=null,Dt.mainContext=null,Dt.antialias=!0,Dt.shaderHighPrecision=!1,Dt._bg_null=[0,0,0,0],Dt);function Dt(){}var Ft=(c(Bt,"laya.webgl.WebGLContext"),Bt.UseProgram=function(t){return Bt._useProgram!==t&&(Pt.mainContext.useProgram(t),Bt._useProgram=t,!0)},Bt.setDepthTest=function(t,e){e!==Bt._depthTest&&((Bt._depthTest=e)?t.enable(2929):t.disable(2929))},Bt.setDepthMask=function(t,e){e!==Bt._depthMask&&(Bt._depthMask=e,t.depthMask(e))},Bt.setDepthFunc=function(t,e){e!==Bt._depthFunc&&(Bt._depthFunc=e,t.depthFunc(e))},Bt.setBlend=function(t,e){e!==Bt._blend&&((Bt._blend=e)?t.enable(3042):t.disable(3042))},Bt.setBlendFunc=function(t,e,i){e===Bt._sFactor&&i===Bt._dFactor||(Bt._sFactor=e,Bt._dFactor=i,t.blendFunc(e,i))},Bt.setCullFace=function(t,e){e!==Bt._cullFace&&((Bt._cullFace=e)?t.enable(2884):t.disable(2884))},Bt.setFrontFace=function(t,e){e!==Bt._frontFace&&(Bt._frontFace=e,t.frontFace(e))},Bt.bindTexture=function(t,e,i){t.bindTexture(e,i),Bt.curBindTexTarget=e,Bt.curBindTexValue=i},Bt.DEPTH_BUFFER_BIT=256,Bt.STENCIL_BUFFER_BIT=1024,Bt.COLOR_BUFFER_BIT=16384,Bt.POINTS=0,Bt.LINES=1,Bt.LINE_LOOP=2,Bt.LINE_STRIP=3,Bt.TRIANGLES=4,Bt.TRIANGLE_STRIP=5,Bt.TRIANGLE_FAN=6,Bt.ZERO=0,Bt.ONE=1,Bt.SRC_COLOR=768,Bt.ONE_MINUS_SRC_COLOR=769,Bt.SRC_ALPHA=770,Bt.ONE_MINUS_SRC_ALPHA=771,Bt.DST_ALPHA=772,Bt.ONE_MINUS_DST_ALPHA=773,Bt.DST_COLOR=774,Bt.ONE_MINUS_DST_COLOR=775,Bt.SRC_ALPHA_SATURATE=776,Bt.FUNC_ADD=32774,Bt.BLEND_EQUATION=32777,Bt.BLEND_EQUATION_RGB=32777,Bt.BLEND_EQUATION_ALPHA=34877,Bt.FUNC_SUBTRACT=32778,Bt.FUNC_REVERSE_SUBTRACT=32779,Bt.BLEND_DST_RGB=32968,Bt.BLEND_SRC_RGB=32969,Bt.BLEND_DST_ALPHA=32970,Bt.BLEND_SRC_ALPHA=32971,Bt.CONSTANT_COLOR=32769,Bt.ONE_MINUS_CONSTANT_COLOR=32770,Bt.CONSTANT_ALPHA=32771,Bt.ONE_MINUS_CONSTANT_ALPHA=32772,Bt.BLEND_COLOR=32773,Bt.ARRAY_BUFFER=34962,Bt.ELEMENT_ARRAY_BUFFER=34963,Bt.ARRAY_BUFFER_BINDING=34964,Bt.ELEMENT_ARRAY_BUFFER_BINDING=34965,Bt.STREAM_DRAW=35040,Bt.STATIC_DRAW=35044,Bt.DYNAMIC_DRAW=35048,Bt.BUFFER_SIZE=34660,Bt.BUFFER_USAGE=34661,Bt.CURRENT_VERTEX_ATTRIB=34342,Bt.FRONT=1028,Bt.BACK=1029,Bt.CULL_FACE=2884,Bt.FRONT_AND_BACK=1032,Bt.BLEND=3042,Bt.DITHER=3024,Bt.STENCIL_TEST=2960,Bt.DEPTH_TEST=2929,Bt.SCISSOR_TEST=3089,Bt.POLYGON_OFFSET_FILL=32823,Bt.SAMPLE_ALPHA_TO_COVERAGE=32926,Bt.SAMPLE_COVERAGE=32928,Bt.NO_ERROR=0,Bt.INVALID_ENUM=1280,Bt.INVALID_VALUE=1281,Bt.INVALID_OPERATION=1282,Bt.OUT_OF_MEMORY=1285,Bt.CW=2304,Bt.CCW=2305,Bt.LINE_WIDTH=2849,Bt.ALIASED_POINT_SIZE_RANGE=33901,Bt.ALIASED_LINE_WIDTH_RANGE=33902,Bt.CULL_FACE_MODE=2885,Bt.FRONT_FACE=2886,Bt.DEPTH_RANGE=2928,Bt.DEPTH_WRITEMASK=2930,Bt.DEPTH_CLEAR_VALUE=2931,Bt.DEPTH_FUNC=2932,Bt.STENCIL_CLEAR_VALUE=2961,Bt.STENCIL_FUNC=2962,Bt.STENCIL_FAIL=2964,Bt.STENCIL_PASS_DEPTH_FAIL=2965,Bt.STENCIL_PASS_DEPTH_PASS=2966,Bt.STENCIL_REF=2967,Bt.STENCIL_VALUE_MASK=2963,Bt.STENCIL_WRITEMASK=2968,Bt.STENCIL_BACK_FUNC=34816,Bt.STENCIL_BACK_FAIL=34817,Bt.STENCIL_BACK_PASS_DEPTH_FAIL=34818,Bt.STENCIL_BACK_PASS_DEPTH_PASS=34819,Bt.STENCIL_BACK_REF=36003,Bt.STENCIL_BACK_VALUE_MASK=36004,Bt.STENCIL_BACK_WRITEMASK=36005,Bt.VIEWPORT=2978,Bt.SCISSOR_BOX=3088,Bt.COLOR_CLEAR_VALUE=3106,Bt.COLOR_WRITEMASK=3107,Bt.UNPACK_ALIGNMENT=3317,Bt.PACK_ALIGNMENT=3333,Bt.MAX_TEXTURE_SIZE=3379,Bt.MAX_VIEWPORT_DIMS=3386,Bt.SUBPIXEL_BITS=3408,Bt.RED_BITS=3410,Bt.GREEN_BITS=3411,Bt.BLUE_BITS=3412,Bt.ALPHA_BITS=3413,Bt.DEPTH_BITS=3414,Bt.STENCIL_BITS=3415,Bt.POLYGON_OFFSET_UNITS=10752,Bt.POLYGON_OFFSET_FACTOR=32824,Bt.TEXTURE_BINDING_2D=32873,Bt.SAMPLE_BUFFERS=32936,Bt.SAMPLES=32937,Bt.SAMPLE_COVERAGE_VALUE=32938,Bt.SAMPLE_COVERAGE_INVERT=32939,Bt.NUM_COMPRESSED_TEXTURE_FORMATS=34466,Bt.COMPRESSED_TEXTURE_FORMATS=34467,Bt.DONT_CARE=4352,Bt.FASTEST=4353,Bt.NICEST=4354,Bt.GENERATE_MIPMAP_HINT=33170,Bt.BYTE=5120,Bt.UNSIGNED_BYTE=5121,Bt.SHORT=5122,Bt.UNSIGNED_SHORT=5123,Bt.INT=5124,Bt.UNSIGNED_INT=5125,Bt.FLOAT=5126,Bt.DEPTH_COMPONENT=6402,Bt.ALPHA=6406,Bt.RGB=6407,Bt.RGBA=6408,Bt.LUMINANCE=6409,Bt.LUMINANCE_ALPHA=6410,Bt.UNSIGNED_SHORT_4_4_4_4=32819,Bt.UNSIGNED_SHORT_5_5_5_1=32820,Bt.UNSIGNED_SHORT_5_6_5=33635,Bt.FRAGMENT_SHADER=35632,Bt.VERTEX_SHADER=35633,Bt.MAX_VERTEX_ATTRIBS=34921,Bt.MAX_VERTEX_UNIFORM_VECTORS=36347,Bt.MAX_VARYING_VECTORS=36348,Bt.MAX_COMBINED_TEXTURE_IMAGE_UNITS=35661,Bt.MAX_VERTEX_TEXTURE_IMAGE_UNITS=35660,Bt.MAX_TEXTURE_IMAGE_UNITS=34930,Bt.MAX_FRAGMENT_UNIFORM_VECTORS=36349,Bt.SHADER_TYPE=35663,Bt.DELETE_STATUS=35712,Bt.LINK_STATUS=35714,Bt.VALIDATE_STATUS=35715,Bt.ATTACHED_SHADERS=35717,Bt.ACTIVE_UNIFORMS=35718,Bt.ACTIVE_ATTRIBUTES=35721,Bt.SHADING_LANGUAGE_VERSION=35724,Bt.CURRENT_PROGRAM=35725,Bt.NEVER=512,Bt.LESS=513,Bt.EQUAL=514,Bt.LEQUAL=515,Bt.GREATER=516,Bt.NOTEQUAL=517,Bt.GEQUAL=518,Bt.ALWAYS=519,Bt.KEEP=7680,Bt.REPLACE=7681,Bt.INCR=7682,Bt.DECR=7683,Bt.INVERT=5386,Bt.INCR_WRAP=34055,Bt.DECR_WRAP=34056,Bt.VENDOR=7936,Bt.RENDERER=7937,Bt.VERSION=7938,Bt.NEAREST=9728,Bt.LINEAR=9729,Bt.NEAREST_MIPMAP_NEAREST=9984,Bt.LINEAR_MIPMAP_NEAREST=9985,Bt.NEAREST_MIPMAP_LINEAR=9986,Bt.LINEAR_MIPMAP_LINEAR=9987,Bt.TEXTURE_MAG_FILTER=10240,Bt.TEXTURE_MIN_FILTER=10241,Bt.TEXTURE_WRAP_S=10242,Bt.TEXTURE_WRAP_T=10243,Bt.TEXTURE_2D=3553,Bt.TEXTURE=5890,Bt.TEXTURE_CUBE_MAP=34067,Bt.TEXTURE_BINDING_CUBE_MAP=34068,Bt.TEXTURE_CUBE_MAP_POSITIVE_X=34069,Bt.TEXTURE_CUBE_MAP_NEGATIVE_X=34070,Bt.TEXTURE_CUBE_MAP_POSITIVE_Y=34071,Bt.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072,Bt.TEXTURE_CUBE_MAP_POSITIVE_Z=34073,Bt.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074,Bt.MAX_CUBE_MAP_TEXTURE_SIZE=34076,Bt.TEXTURE0=33984,Bt.TEXTURE1=33985,Bt.TEXTURE2=33986,Bt.TEXTURE3=33987,Bt.TEXTURE4=33988,Bt.TEXTURE5=33989,Bt.TEXTURE6=33990,Bt.TEXTURE7=33991,Bt.TEXTURE8=33992,Bt.TEXTURE9=33993,Bt.TEXTURE10=33994,Bt.TEXTURE11=33995,Bt.TEXTURE12=33996,Bt.TEXTURE13=33997,Bt.TEXTURE14=33998,Bt.TEXTURE15=33999,Bt.TEXTURE16=34e3,Bt.TEXTURE17=34001,Bt.TEXTURE18=34002,Bt.TEXTURE19=34003,Bt.TEXTURE20=34004,Bt.TEXTURE21=34005,Bt.TEXTURE22=34006,Bt.TEXTURE23=34007,Bt.TEXTURE24=34008,Bt.TEXTURE25=34009,Bt.TEXTURE26=34010,Bt.TEXTURE27=34011,Bt.TEXTURE28=34012,Bt.TEXTURE29=34013,Bt.TEXTURE30=34014,Bt.TEXTURE31=34015,Bt.ACTIVE_TEXTURE=34016,Bt.REPEAT=10497,Bt.CLAMP_TO_EDGE=33071,Bt.MIRRORED_REPEAT=33648,Bt.FLOAT_VEC2=35664,Bt.FLOAT_VEC3=35665,Bt.FLOAT_VEC4=35666,Bt.INT_VEC2=35667,Bt.INT_VEC3=35668,Bt.INT_VEC4=35669,Bt.BOOL=35670,Bt.BOOL_VEC2=35671,Bt.BOOL_VEC3=35672,Bt.BOOL_VEC4=35673,Bt.FLOAT_MAT2=35674,Bt.FLOAT_MAT3=35675,Bt.FLOAT_MAT4=35676,Bt.SAMPLER_2D=35678,Bt.SAMPLER_CUBE=35680,Bt.VERTEX_ATTRIB_ARRAY_ENABLED=34338,Bt.VERTEX_ATTRIB_ARRAY_SIZE=34339,Bt.VERTEX_ATTRIB_ARRAY_STRIDE=34340,Bt.VERTEX_ATTRIB_ARRAY_TYPE=34341,Bt.VERTEX_ATTRIB_ARRAY_NORMALIZED=34922,Bt.VERTEX_ATTRIB_ARRAY_POINTER=34373,Bt.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING=34975,Bt.COMPILE_STATUS=35713,Bt.LOW_FLOAT=36336,Bt.MEDIUM_FLOAT=36337,Bt.HIGH_FLOAT=36338,Bt.LOW_INT=36339,Bt.MEDIUM_INT=36340,Bt.HIGH_INT=36341,Bt.FRAMEBUFFER=36160,Bt.RENDERBUFFER=36161,Bt.RGBA4=32854,Bt.RGB5_A1=32855,Bt.RGB565=36194,Bt.DEPTH_COMPONENT16=33189,Bt.STENCIL_INDEX=6401,Bt.STENCIL_INDEX8=36168,Bt.DEPTH_STENCIL=34041,Bt.RENDERBUFFER_WIDTH=36162,Bt.RENDERBUFFER_HEIGHT=36163,Bt.RENDERBUFFER_INTERNAL_FORMAT=36164,Bt.RENDERBUFFER_RED_SIZE=36176,Bt.RENDERBUFFER_GREEN_SIZE=36177,Bt.RENDERBUFFER_BLUE_SIZE=36178,Bt.RENDERBUFFER_ALPHA_SIZE=36179,Bt.RENDERBUFFER_DEPTH_SIZE=36180,Bt.RENDERBUFFER_STENCIL_SIZE=36181,Bt.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE=36048,Bt.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME=36049,Bt.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL=36050,Bt.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE=36051,Bt.COLOR_ATTACHMENT0=36064,Bt.DEPTH_ATTACHMENT=36096,Bt.STENCIL_ATTACHMENT=36128,Bt.DEPTH_STENCIL_ATTACHMENT=33306,Bt.NONE=0,Bt.FRAMEBUFFER_COMPLETE=36053,Bt.FRAMEBUFFER_INCOMPLETE_ATTACHMENT=36054,Bt.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT=36055,Bt.FRAMEBUFFER_INCOMPLETE_DIMENSIONS=36057,Bt.FRAMEBUFFER_UNSUPPORTED=36061,Bt.FRAMEBUFFER_BINDING=36006,Bt.RENDERBUFFER_BINDING=36007,Bt.MAX_RENDERBUFFER_SIZE=34024,Bt.INVALID_FRAMEBUFFER_OPERATION=1286,Bt.UNPACK_FLIP_Y_WEBGL=37440,Bt.UNPACK_PREMULTIPLY_ALPHA_WEBGL=37441,Bt.CONTEXT_LOST_WEBGL=37442,Bt.UNPACK_COLORSPACE_CONVERSION_WEBGL=37443,Bt.BROWSER_DEFAULT_WEBGL=37444,Bt._useProgram=null,Bt._depthTest=!0,Bt._depthMask=!0,Bt._blend=!1,Bt._cullFace=!1,Bt.curBindTexTarget=null,Bt.curBindTexValue=null,n(Bt,["_depthFunc",function(){return this._depthFunc=513},"_sFactor",function(){return this._sFactor=1},"_dFactor",function(){return this._dFactor=0},"_frontFace",function(){return this._frontFace=2305}]),Bt);function Bt(){}var Nt=function(t){function e(){e.__super.call(this)}c(e,"laya.webgl.display.GraphicsGL",o);var i=e.prototype;return i.setShader=function(t){this._saveToCmd(g.context._setShader,[t])},i.setIBVB=function(t,e,i,r,s,a){this._saveToCmd(g.context._setIBVB,[t,e,i,r,s,a])},i.drawParticle=function(t,e,i){var r=y.createParticleTemplate2D(i);r.x=t,r.y=e,this._saveToCmd(g.context._drawParticle,[r])},e}(),Ot=function(t){var i;function U(t){this._x=0,this._y=0,this._id=++U._COUNT,this._path=null,this._drawCount=1,this._maxNumEle=0,this._clear=!1,this._isMain=!1,this._atlasResourceChange=0,this._submits=null,this._curSubmit=null,this._ib=null,this._vb=null,this._nBlendType=0,this._saveMark=null,this._shader2D=null,this.meshlist=[],this.mId=-1,this.mHaveKey=!1,this.mHaveLineKey=!1,this.mX=0,this.mY=0,U.__super.call(this),this._width=99999999,this._height=99999999,this._clipRect=U.MAXCLIPRECT,this.mOutPoint,this._canvas=t,U._contextcount++,g.isFlash?(this._ib=ve.create(35044),St.fillIBQuadrangle(this._ib,16)):this._ib=ve.QuadrangleIB,this.clear()}c(U,"laya.webgl.canvas.WebGLContext2D",s);var e=U.prototype;return e.setIsMainContext=function(){this._isMain=!0},e.clearBG=function(t,e,i,r){var s=Pt.mainContext;s.clearColor(t,e,i,r),s.clear(16384)},e._getSubmits=function(){return this._submits},e._releaseMem=function(){if(this._submits){this._curMat.destroy(),this._curMat=null,this._shader2D.destroy(),this._shader2D=null;for(var t=0,e=this._submits._length;t<e;t++)this._submits[t].releaseRender();this._submits.length=0,this._submits._length=0,this._submits=null,this._curSubmit=null,this._path&&this._path.recover(),this._path=null,this._other&&(this._other.font=null),this._save=null,this._vb&&(this._vb.releaseResource(),this._vb.destroy(),this._vb.destory(),this._vb=null)}},e.destroy=function(){--U._contextcount,this.sprite=null,this._releaseMem(),this._targets&&this._targets.destroy(),this._targets=null,this._canvas=null,this._ib&&this._ib!=ve.QuadrangleIB&&this._ib.releaseResource()},e.clear=function(){this._submits||(this._other=i.DEFAULT,this._curMat=S.create(),this._vb=xe.create(-1),this._submits=[],this._save=[j.Create(this)],this._save.length=10,this._shader2D=new et,this._triangleMesh=qt.getAMesh()),this._vb.clear(),this._targets&&(this._targets.repaint=!0),this._other=i.DEFAULT,this._clear=!0,this._repaint=!1,this._drawCount=1,this._renderKey=0,this._other.lineWidth=this._shader2D.ALPHA=1,this._nBlendType=0,this._clipRect=U.MAXCLIPRECT,this._curSubmit=ct.RENDERBASE,this._shader2D.glTexture=null,this._shader2D.fillStyle=this._shader2D.strokeStyle=X.DEFAULT;for(var t=0,e=this._submits._length;t<e;t++)this._submits[t].releaseRender();this._submits._length=0,this._curMat.identity(),this._other.clear(),this._saveMark=this._save[0],this._save._length=1},e.size=function(t,e){if(this._width!=t||this._height!=e)if(0==t||0==e){0!=this._vb._byteLength&&(this._width=t,this._height=e,this._vb.clear(),this._vb.upload());for(var i=0,r=this._submits._length;i<r;i++)this._submits[i].releaseRender();this._submits.length=0,this._submits._length=0,this._curSubmit=null,this._path&&this._path.recover(),this._path=null,this.sprite=null,this._targets&&this._targets.destroy(),this._targets=null}else this._width=t,this._height=e,this._targets&&this._targets.size(t,e),this._canvas.memorySize-=this._canvas.memorySize;0===t&&0===e&&this._releaseMem()},e._getTransformMatrix=function(){return this._curMat},e.translate=function(t,e){0===t&&0===e||(J.save(this),this._curMat.bTransform&&($.save(this),this._curMat.transformPointN(w.TEMP.setTo(t,e)),t=w.TEMP.x,e=w.TEMP.y),this._x+=t,this._y+=e)},e.save=function(){this._save[this._save._length++]=j.Create(this)},e.restore=function(){var t=this._save._length;if(!(t<1))for(var e=t-1;0<=e;e--){var i=this._save[e];if(i.restore(this),i.isSaveMark())return void(this._save._length=e)}},e._fillText=function(t,e,i,r,s,a,n,h,l,o){void 0===o&&(o=0);var u=this._shader2D,_=this._curSubmit.shaderValue,c=s?Tt.create(s):this._other.font;if(H.enabled)u.ALPHA!==_.ALPHA&&(u.glTexture=null),bt.drawText(this,t,e,this._curMat,c,l||this._other.textAlign,a,n,h,i,r,o);else{this._shader2D.defines.getValue();var f=a?d.create(a)._color:u.colorAdd;u.ALPHA===_.ALPHA&&f===u.colorAdd&&_.colorAdd===u.colorAdd||(u.glTexture=null,u.colorAdd=f),bt.drawText(this,t,e,this._curMat,c,l||this._other.textAlign,a,n,h,i,r,o)}},e.fillWords=function(t,e,i,r,s,a){this._fillText(null,t,e,i,r,s,null,-1,null,a)},e.fillBorderWords=function(t,e,i,r,s,a,n){this._fillBorderText(null,t,e,i,r,s,a,n,null)},e.fillText=function(t,e,i,r,s,a){this._fillText(t,null,e,i,r,s,null,-1,a)},e.strokeText=function(t,e,i,r,s,a,n){this._fillText(t,null,e,i,r,null,s,a||1,n)},e.fillBorderText=function(t,e,i,r,s,a,n,h){this._fillBorderText(t,null,e,i,r,s,a,n,h)},e._fillBorderText=function(t,e,i,r,s,a,n,h,l){if(!H.enabled)return this._fillText(t,e,i,r,s,null,n,h||1,l),void this._fillText(t,e,i,r,s,a,null,-1,l);var o=this._shader2D,u=this._curSubmit.shaderValue;o.ALPHA!==u.ALPHA&&(o.glTexture=null);var _=s?(U._fontTemp.setFont(s),U._fontTemp):this._other.font;bt.drawText(this,t,e,this._curMat,_,l||this._other.textAlign,a,n,h||1,i,r,0)},e.fillRect=function(t,e,i,r,s){var a=this._vb;if(St.fillRectImgVb(a,this._clipRect,t,e,i,r,F.DEF_UV,this._curMat,this._x,this._y,0,0)){this._renderKey=0;var n=this._shader2D.fillStyle;s&&(this._shader2D.fillStyle=X.create(s));var h=this._shader2D,l=this._curSubmit.shaderValue;if(h.fillStyle!==l.fillStyle||h.ALPHA!==l.ALPHA){h.glTexture=null;var o=this._curSubmit=ct.createSubmit(this,this._ib,a,(a._byteLength-64)/32*3,Vt.create(2,0));o.shaderValue.color=h.fillStyle._color._color,o.shaderValue.ALPHA=h.ALPHA,this._submits[this._submits._length++]=o}this._curSubmit._numEle+=6,this._shader2D.fillStyle=n}},e.fillTexture=function(t,e,i,r,s,a,n,h){if(t.loaded&&t.bitmap&&t.source){var l=this._vb,o=t.bitmap.width,u=t.bitmap.height,_=t.uv,c=n.x%t.width,f=n.y%t.height;if(o!=h.w||u!=h.h){if(!h.w&&!h.h)switch(h.oy=h.ox=0,a){case"repeat":h.width=r,h.height=s;break;case"repeat-x":h.width=r,f<0?t.height+f>s?h.height=s:h.height=t.height+f:(h.oy=f,t.height+f>s?h.height=s-f:h.height=t.height);break;case"repeat-y":c<0?t.width+c>r?h.width=r:h.width=t.width+c:(h.ox=c,t.width+c>r?h.width=r-c:h.width=t.width),h.height=s;break;case"no-repeat":c<0?t.width+c>r?h.width=r:h.width=t.width+c:(h.ox=c,t.width+c>r?h.width=r-c:h.width=t.width),f<0?t.height+f>s?h.height=s:h.height=t.height+f:(h.oy=f,t.height+f>s?h.height=s-f:h.height=t.height);break;default:h.width=r,h.height=s}h.w=o,h.h=u,h.uv=[0,0,h.width/o,0,h.width/o,h.height/u,0,h.height/u]}if(e+=h.ox,i+=h.oy,c-=h.ox,f-=h.oy,St.fillRectImgVb(l,this._clipRect,e,i,h.width,h.height,h.uv,this._curMat,this._x,this._y,0,0)){this._renderKey=0;var d=Zt.create(this,this._ib,l,(l._byteLength-64)/32*3,Vt.create(256,0)),m=(this._submits[this._submits._length++]=d).shaderValue;m.textureHost=t;var p=_[0]*o,g=_[1]*u,v=(_[2]-_[0])*o,x=(_[5]-_[3])*u,b=-c/o,y=-f/u;m.u_TexRange[0]=p/o,m.u_TexRange[1]=v/o,m.u_TexRange[2]=g/u,m.u_TexRange[3]=x/u,m.u_offset[0]=b,m.u_offset[1]=y,H.enabled&&!this._isMain&&d.addTexture(t,(l._byteLength>>2)-16),(this._curSubmit=d)._renderType=10017,d._numEle+=6}}else this.sprite&&T.timer.callLater(this,this._repaintSprite)},e.setShader=function(t){Q.save(this,1048576,this._shader2D,!0),this._shader2D.shader=t},e.setFilters=function(t){Q.save(this,2097152,this._shader2D,!0),this._shader2D.filters=t,this._curSubmit=ct.RENDERBASE,this._renderKey=0,this._drawCount++},e.drawTexture=function(t,e,i,r,s,a,n){this._drawTextureM(t,e,i,r,s,a,n,null,1)},e.addTextureVb=function(t,e,i){var r=this._curSubmit._vb||this._vb,s=r._byteLength>>2;r.byteLength=s+16<<2;for(var a=r.getFloat32Array(),n=0;n<16;n+=4)a[s++]=t[n]+e,a[s++]=t[n+1]+i,a[s++]=t[n+2],a[s++]=t[n+3];this._curSubmit._numEle+=6,this._maxNumEle=Math.max(this._maxNumEle,this._curSubmit._numEle),r._upload=!0},e.willDrawTexture=function(t,e){if(!(t.loaded&&t.bitmap&&t.source))return this.sprite&&T.timer.callLater(this,this._repaintSprite),0;var i=t.bitmap,r=i.id+this._shader2D.ALPHA*e+10016;if(r==this._renderKey)return r;var s=this._shader2D,a=s.ALPHA,n=this._curSubmit.shaderValue;s.ALPHA*=e,this._renderKey=r,this._drawCount++,s.glTexture=i;var h=this._vb,l=null,o=h._byteLength/32*3;return l=Zt.create(this,this._ib,h,o,Vt.create(1,0)),(this._submits[this._submits._length++]=l).shaderValue.textureHost=t,l._renderType=10016,l._preIsSameTextureShader=10016===this._curSubmit._renderType&&s.ALPHA===n.ALPHA,this._curSubmit=l,s.ALPHA=a,r},e.drawTextures=function(t,e,i,r){if(t.loaded&&t.bitmap&&t.source){var s=this._clipRect;if(this._clipRect=U.MAXCLIPRECT,this._drawTextureM(t,e[0],e[1],t.width,t.height,i,r,null,1)){if(this._clipRect=s,C.drawCall++,!(e.length<4)){for(var a=this._curSubmit._vb||this._vb,n=this._curMat.a,h=this._curMat.d,l=2,o=e.length;l<o;l+=2)St.copyPreImgVb(a,(e[l]-e[l-2])*n,(e[l+1]-e[l-1])*h),this._curSubmit._numEle+=6;this._maxNumEle=Math.max(this._maxNumEle,this._curSubmit._numEle)}}else alert("drawTextures err")}else this.sprite&&T.timer.callLater(this,this._repaintSprite)},e._drawTextureM=function(t,e,i,r,s,a,n,h,l){if(!t.loaded||!t.source)return this.sprite&&T.timer.callLater(this,this._repaintSprite),!1;var o=this._curSubmit._vb||this._vb,u=t.bitmap;e+=a,i+=n,this._drawCount++;var _=u.id+this._shader2D.ALPHA*l+10016;if(_!=this._renderKey){this._renderKey=_;var c=this._curSubmit.shaderValue,f=this._shader2D,d=f.ALPHA;f.ALPHA*=l,f.glTexture=u;var m=this._vb,p=null,g=m._byteLength/32*3;p=Zt.create(this,this._ib,m,g,Vt.create(1,0)),(this._submits[this._submits._length++]=p).shaderValue.textureHost=t,p._renderType=10016,p._preIsSameTextureShader=10016===this._curSubmit._renderType&&f.ALPHA===c.ALPHA,this._curSubmit=p,o=this._curSubmit._vb||this._vb,f.ALPHA=d}return!!St.fillRectImgVb(o,this._clipRect,e,i,r||t.width,s||t.height,t.uv,h||this._curMat,this._x,this._y,0,0)&&(H.enabled&&!this._isMain&&this._curSubmit.addTexture(t,(o._byteLength>>2)-16),this._curSubmit._numEle+=6,this._maxNumEle=Math.max(this._maxNumEle,this._curSubmit._numEle),!0)},e._repaintSprite=function(){this.sprite&&this.sprite.repaint()},e._drawText=function(t,e,i,r,s,a,n,h,l,o){var u=t.bitmap;this._drawCount++;var _=u.id+this._shader2D.ALPHA+10016;if(_!=this._renderKey){this._renderKey=_;var c=this._curSubmit.shaderValue,f=this._shader2D;f.glTexture=u;var d=this._vb,m=null,p=d._byteLength/32*3;(m=H.enabled?Zt.create(this,this._ib,d,p,Vt.create(1,0)):Zt.create(this,this._ib,d,p,pe.create()))._preIsSameTextureShader=10016===this._curSubmit._renderType&&f.ALPHA===c.ALPHA,(this._submits[this._submits._length++]=m).shaderValue.textureHost=t,m._renderType=10016,this._curSubmit=m}t.active();var g=this._curSubmit._vb||this._vb;St.fillRectImgVb(g,this._clipRect,e+n,i+h,r||t.width,s||t.height,t.uv,a||this._curMat,this._x,this._y,l,o,!0)&&(H.enabled&&!this._isMain&&this._curSubmit.addTexture(t,(g._byteLength>>2)-16),this._curSubmit._numEle+=6,this._maxNumEle=Math.max(this._maxNumEle,this._curSubmit._numEle))},e.drawTextureWithTransform=function(t,e,i,r,s,a,n,h,l){if(a){var o=this._curMat,u=this._x,_=this._y;0===n&&0===h||(this._x=n*o.a+h*o.c,this._y=h*o.d+n*o.b),a&&o.bTransform?(S.mul(a,o,U._tmpMatrix),(a=U._tmpMatrix)._checkTransform()):(this._x+=o.tx,this._y+=o.ty),this._drawTextureM(t,e,i,r,s,0,0,a,l),this._x=u,this._y=_}else this._drawTextureM(t,e,i,r,s,n,h,null,l)},e.fillQuadrangle=function(t,e,i,r,s){var a=this._curSubmit,n=this._vb,h=this._shader2D,l=a.shaderValue;if(this._renderKey=0,t.bitmap){var o=t.bitmap;h.glTexture==o&&h.ALPHA===l.ALPHA||(h.glTexture=o,(a=this._curSubmit=ct.createSubmit(this,this._ib,n,n._byteLength/32*3,Vt.create(1,0))).shaderValue.glTexture=o,this._submits[this._submits._length++]=a),St.fillQuadrangleImgVb(n,e,i,r,t.uv,s||this._curMat,this._x,this._y)}else a.shaderValue.fillStyle&&a.shaderValue.fillStyle.equal(t)&&h.ALPHA===l.ALPHA||(h.glTexture=null,(a=this._curSubmit=ct.createSubmit(this,this._ib,n,n._byteLength/32*3,Vt.create(2,0))).shaderValue.defines.add(2),a.shaderValue.fillStyle=X.create(t),this._submits[this._submits._length++]=a),St.fillQuadrangleImgVb(n,e,i,r,F.DEF_UV,s||this._curMat,this._x,this._y);a._numEle+=6},e.drawTexture2=function(t,e,i,r,s,a,n,h){if(0!=a){var l=this._curMat;if(this._x=t*l.a+e*l.c,this._y=e*l.d+t*l.b,s&&(s=l.bTransform||s.bTransform?(S.mul(s,l,U._tmpMatrix),U._tmpMatrix):(this._x+=s.tx+l.tx,this._y+=s.ty+l.ty,S.EMPTY)),1!==a||n){var o=this._shader2D.ALPHA,u=this._nBlendType;this._shader2D.ALPHA=a,n&&(this._nBlendType=W.TOINT(n)),this._drawTextureM(h[0],h[1]-i,h[2]-r,h[3],h[4],0,0,s,1),this._shader2D.ALPHA=o,this._nBlendType=u}else this._drawTextureM(h[0],h[1]-i,h[2]-r,h[3],h[4],0,0,s,1);this._x=this._y=0}},e.drawCanvas=function(t,e,i,r,s){var a=t.context;if(this._renderKey=0,a._targets)this._submits[this._submits._length++]=Qt.create(a,0,null),this._curSubmit=ct.RENDERBASE,a._targets.drawTo(this,e,i,r,s);else{var n=this._submits[this._submits._length++]=Qt.create(a,this._shader2D.ALPHA,this._shader2D.filters),h=r/t.width,l=s/t.height,o=n._matrix;this._curMat.copyTo(o),1!=h&&1!=l&&o.scale(h,l);var u=o.tx,_=o.ty;o.tx=o.ty=0,o.transformPoint(w.TEMP.setTo(e,i)),o.translate(w.TEMP.x+u,w.TEMP.y+_),this._curSubmit=ct.RENDERBASE}A.showCanvasMark&&(this.save(),this.lineWidth=4,this.strokeStyle=a._targets?"yellow":"green",this.strokeRect(e-1,i-1,r+2,s+2,1),this.strokeRect(e,i,r,s,1),this.restore())},e.drawTarget=function(t,e,i,r,s,a,n,h,l,o){void 0===o&&(o=-1);var u=this._vb;if(St.fillRectImgVb(u,this._clipRect,e,i,r,s,l||F.DEF_UV,a||this._curMat,this._x,this._y,0,0)){this._renderKey=0,this._shader2D.glTexture=null;this._curSubmit.shaderValue;var _=this._curSubmit=vt.create(this,this._ib,u,(u._byteLength-64)/32*3,h,n);_.blendType=-1==o?this._nBlendType:o,_.scope=t,this._submits[this._submits._length++]=_,this._curSubmit._numEle+=6}},e.mixRGBandAlpha=function(t){return this._mixRGBandAlpha(t,this._shader2D.ALPHA)},e._mixRGBandAlpha=function(t,e){var i=(4278190080&t)>>>24;return 0!=i?i*=e:i=255*e,16777215&t|i<<24},e.drawTriangles=function(t,e,i,r,s,a,n,h,l,o){if(!t.loaded||!t.source)return this.sprite&&T.timer.callLater(this,this._repaintSprite),!1;this._drawCount++;t.bitmap;var u=this._mixRGBandAlpha(4294967295,h),_=(r.length,a.length);this._renderKey=-1;var c=this._curSubmit=Zt.create(this,this._triangleMesh.getIBR(),this._triangleMesh.getVBR(),this._triangleMesh.indexNum,Vt.create(1,0));return c.shaderValue.textureHost=t,c._renderType=10016,this._submits[this._submits._length++]=c,n?(U._tmpMatrix.a=n.a,U._tmpMatrix.b=n.b,U._tmpMatrix.c=n.c,U._tmpMatrix.d=n.d,U._tmpMatrix.tx=n.tx+e,U._tmpMatrix.ty=n.ty+i,S.mul(U._tmpMatrix,this._curMat,U._tmpMatrix)):(U._tmpMatrix.a=this._curMat.a,U._tmpMatrix.b=this._curMat.b,U._tmpMatrix.c=this._curMat.c,U._tmpMatrix.d=this._curMat.d,U._tmpMatrix.tx=this._curMat.tx+e,U._tmpMatrix.ty=this._curMat.ty+i),this._triangleMesh.addData(r,s,a,U._tmpMatrix,u,this),this._curSubmit._numEle+=_,this._maxNumEle=Math.max(this._maxNumEle,this._curSubmit._numEle),!0},e.transform=function(t,e,i,r,s,a){$.save(this),S.mul(S.TEMP.setTo(t,e,i,r,s,a),this._curMat,this._curMat),this._curMat._checkTransform()},e.setTransformByMatrix=function(t){t.copyTo(this._curMat)},e.transformByMatrix=function(t){$.save(this),S.mul(t,this._curMat,this._curMat),this._curMat._checkTransform()},e.rotate=function(t){$.save(this),this._curMat.rotateEx(t)},e.scale=function(t,e){$.save(this),this._curMat.scaleEx(t,e)},e.clipRect=function(t,e,i,r){if(0!=this._curMat.b||0!=this._curMat.c){this._renderKey=0;var s=gt.create(4);this.addRenderObject(s);var a=this._vb,n=a._byteLength>>2;if(St.fillRectImgVb(a,null,t,e,i,r,F.DEF_UV,this._curMat,this._x,this._y,0,0)){this._shader2D.glTexture=null;var h=this._curSubmit=ct.createSubmit(this,this._ib,a,(a._byteLength-64)/32*3,Vt.create(2,0));h.shaderValue.ALPHA=1,this._submits[this._submits._length++]=h,this._curSubmit._numEle+=6}else alert("clipRect calc stencil rect error");var l=gt.create(5);this.addRenderObject(l);var o=a.getFloat32Array(),u=Math.min(Math.min(Math.min(o[0+n],o[4+n]),o[8+n]),o[12+n]),_=Math.max(Math.max(Math.max(o[0+n],o[4+n]),o[8+n]),o[12+n]),c=Math.min(Math.min(Math.min(o[1+n],o[5+n]),o[9+n]),o[13+n]),f=Math.max(Math.max(Math.max(o[1+n],o[5+n]),o[9+n]),o[13+n]);q.save(this,l,t,e,i,r,u,c,_-u,f-c),this._curSubmit=ct.RENDERBASE}else{i*=this._curMat.a,r*=this._curMat.d;var d=w.TEMP;this._curMat.transformPoint(d.setTo(t,e)),i<0&&(d.x=d.x+i,i=-i),r<0&&(d.y=d.y+r,r=-r),this._renderKey=0;var m=this._curSubmit=pt.create(this);(this._submits[this._submits._length++]=m).submitIndex=this._submits._length,m.submitLength=9999999,Z.save(this,m);var p=this._clipRect,g=p.x,v=p.y,x=d.x+i,b=d.y+r;g<d.x&&(p.x=d.x),v<d.y&&(p.y=d.y),p.width=Math.min(x,g+p.width)-p.x,p.height=Math.min(b,v+p.height)-p.y,this._shader2D.glTexture=null,m.clipRect.copyFrom(p),this._curSubmit=ct.RENDERBASE}},e.setIBVB=function(t,e,i,r,s,a,n,h,l,o,u){if(void 0===l&&(l=0),void 0===o&&(o=0),void 0===u&&(u=0),null===i){if(g.isFlash){var _=r;_._selfIB||(_._selfIB=ve.create(35044)),_._selfIB.clear(),i=_._selfIB}else i=this._ib;St.expandIBQuadrangle(i,r._byteLength/(4*r.vertexStride*4))}if(!h||!n)throw Error("setIBVB must input:shader shaderValues");var c=mt.create(this,r,i,s,n,h,l,o,u);a||(a=S.EMPTY),a.translate(t,e),S.mul(a,this._curMat,c._mat),a.translate(-t,-e),this._submits[this._submits._length++]=c,this._curSubmit=ct.RENDERBASE,this._renderKey=0},e.addRenderObject=function(t){this._submits[this._submits._length++]=t},e.fillTrangles=function(t,e,i,r,s){var a=this._curSubmit,n=this._vb,h=this._shader2D,l=a.shaderValue,o=r.length>>4,u=t.bitmap;this._renderKey=0,h.glTexture==u&&h.ALPHA===l.ALPHA||((a=this._curSubmit=ct.createSubmit(this,this._ib,n,n._byteLength/32*3,Vt.create(1,0))).shaderValue.textureHost=t,this._submits[this._submits._length++]=a),St.fillTranglesVB(n,e,i,r,s||this._curMat,this._x,this._y),a._numEle+=6*o},e.submitElement=function(t,e){var i=this._submits;for(e<0&&(e=i._length);t<e;)t+=i[t].renderSubmit()},e.finish=function(){Pt.mainContext.finish()},e.flush=function(){var t=Math.max(this._vb._byteLength/64,this._maxNumEle/6)+8;if(t>this._ib.bufferLength/12&&St.expandIBQuadrangle(this._ib,t),!this._isMain&&H.enabled&&H._atlasRestore>this._atlasResourceChange){this._atlasResourceChange=H._atlasRestore;for(var e=this._submits,i=0,r=e._length;i<r;i++){var s=e[i];10016===s.getRenderType()&&s.checkTexture()}}this.submitElement(0,this._submits._length),this._path&&this._path.reset(),at.instance&&at.getInstance().reset();var a;for(i=0,a=this.meshlist.length;i<a;i++){var n=this.meshlist[i];n.canReuse?n.releaseMesh():n.destroy()}return this.meshlist.length=0,this._curSubmit=ct.RENDERBASE,this._renderKey=0,this._triangleMesh=qt.getAMesh(),this.meshlist.push(this._triangleMesh),this._submits._length},e.setPathId=function(t){if(this.mId=t,-1!=this.mId){this.mHaveKey=!1;var e=N.getInstance();e.shapeDic[this.mId]&&(this.mHaveKey=!0),this.mHaveLineKey=!1,e.shapeLineDic[this.mId]&&(this.mHaveLineKey=!0)}},e.movePath=function(t,e){var i=t,r=e;t=this._curMat.a*i+this._curMat.c*r+this._curMat.tx,e=this._curMat.b*i+this._curMat.d*r+this._curMat.ty,this.mX+=t,this.mY+=e},e.beginPath=function(){var t=this._getPath();t.tempArray.length=0,t.closePath=!1,this.mX=0,this.mY=0},e.closePath=function(){this._path.closePath=!0},e.fill=function(t){void 0===t&&(t=!1);var e=this._getPath();this.drawPoly(0,0,e.tempArray,this.fillStyle._color.numColor,0,0,t)},e.stroke=function(){var t=this._getPath();if(0<this.lineWidth){if(-1==this.mId)t.drawLine(0,0,t.tempArray,this.lineWidth,this.strokeStyle._color.numColor);else if(this.mHaveLineKey){var e=N.getInstance().shapeLineDic[this.mId];e.rebuild(t.tempArray),t.setGeomtry(e)}else N.getInstance().addLine(this.mId,t.drawLine(0,0,t.tempArray,this.lineWidth,this.strokeStyle._color.numColor));t.update();var i=[this.mX,this.mY],r=ct.createShape(this,t.ib,t.vb,t.count,t.offset,Vt.create(4,0));r.shaderValue.ALPHA=this._shader2D.ALPHA,r.shaderValue.u_pos=i,r.shaderValue.u_mmat2=Mt.TEMPMAT4_ARRAY,this._submits[this._submits._length++]=r,this._renderKey=-1}},e.line=function(t,e,i,r,s,a){var n=this._curSubmit,h=this._vb;if(St.fillLineVb(h,this._clipRect,t,e,i,r,s,a)){this._renderKey=0;var l=this._shader2D,o=n.shaderValue;l.strokeStyle===o.strokeStyle&&l.ALPHA===o.ALPHA||(l.glTexture=null,(n=this._curSubmit=ct.createSubmit(this,this._ib,h,(h._byteLength-64)/32*3,Vt.create(2,0))).shaderValue.strokeStyle=l.strokeStyle,n.shaderValue.mainID=2,n.shaderValue.ALPHA=l.ALPHA,this._submits[this._submits._length++]=n),n._numEle+=6}},e.moveTo=function(t,e,i){void 0===i&&(i=!0);var r=this._getPath();if(i){var s=t,a=e;t=this._curMat.a*s+this._curMat.c*a,e=this._curMat.b*s+this._curMat.d*a}r.addPoint(t,e)},e.lineTo=function(t,e,i){void 0===i&&(i=!0);var r=this._getPath();if(i){var s=t,a=e;t=this._curMat.a*s+this._curMat.c*a,e=this._curMat.b*s+this._curMat.d*a}r.addPoint(t,e)},e.drawCurves=function(t,e,i){this.setPathId(-1),this.beginPath(),this.strokeStyle=i[3],this.lineWidth=i[4];var r=i[2];t+=i[0],e+=i[1],this.movePath(t,e),this.moveTo(r[0],r[1]);for(var s=2,a=r.length;s<a;)this.quadraticCurveTo(r[s++],r[s++],r[s++],r[s++]);this.stroke()},e.arcTo=function(t,e,i,r,s){if(-1==this.mId||!this.mHaveKey){var a=0,n=0,h=0,l=this._getPath();this._curMat.copyTo(U._tmpMatrix),U._tmpMatrix.tx=U._tmpMatrix.ty=0,U._tempPoint.setTo(l.getEndPointX(),l.getEndPointY()),U._tmpMatrix.invertTransformPoint(U._tempPoint);var o=U._tempPoint.x-t,u=U._tempPoint.y-e,_=Math.sqrt(o*o+u*u);if(!(_<=1e-6)){var c=o/_,f=u/_,d=i-t,m=r-e,p=d*d+m*m,g=Math.sqrt(p);if(!(g<=1e-6)){var v=d/g,x=m/g,b=c+v,y=f+x,T=Math.sqrt(b*b+y*y);if(!(T<=1e-6)){var A=b/T,E=y/T,S=Math.acos(A*c+E*f),w=Math.PI/2-S,R=(_=s/Math.tan(w))*c+t,I=_*f+e,M=Math.sqrt(_*_+s*s),C=t+A*M,L=e+E*M,P=0,D=0;if(0<=c*x-f*v){var F=2*w/U.SEGNUM;P=Math.sin(F),D=Math.cos(F)}else F=2*-w/U.SEGNUM,P=Math.sin(F),D=Math.cos(F);n=this._curMat.a*R+this._curMat.c*I,h=this._curMat.b*R+this._curMat.d*I,n==this._path.getEndPointX()&&h==this._path.getEndPointY()||l.addPoint(n,h);var B=R-C,N=I-L;for(a=0;a<U.SEGNUM;a++){var O=B*D+N*P,V=-B*P+N*D;n=O+C,h=V+L,t=this._curMat.a*n+this._curMat.c*h,h=e=this._curMat.b*n+this._curMat.d*h,(n=t)==this._path.getEndPointX()&&h==this._path.getEndPointY()||l.addPoint(n,h),B=O,N=V}}}}}},e.arc=function(t,e,i,r,s,a,n){if(void 0===a&&(a=!1),void 0===n&&(n=!0),-1!=this.mId){var h=N.getInstance().shapeDic[this.mId];if(h&&this.mHaveKey&&!h.needUpdate(this._curMat))return;e=t=0}var l,o=0,u=0,_=0,c=0,f=0,d=0,m=0;if(u=s-r,a)if(Math.abs(u)>=2*Math.PI)u=2*-Math.PI;else for(;0<u;)u-=2*Math.PI;else if(Math.abs(u)>=2*Math.PI)u=2*Math.PI;else for(;u<0;)u+=2*Math.PI;l=u/(m=i<101?Math.max(10,u*i/5):i<201?Math.max(10,u*i/20):Math.max(10,u*i/40))/2,_=Math.abs(4/3*(1-Math.cos(l))/Math.sin(l)),a&&(_=-_);var p=this._getPath(),g=NaN,v=NaN;for(d=0;d<=m;d++)o=r+u*(d/m),c=t+Math.cos(o)*i,f=e+Math.sin(o)*i,n&&(g=c,v=f,c=this._curMat.a*g+this._curMat.c*v,f=this._curMat.b*g+this._curMat.d*v),c==this._path.getEndPointX()&&f==this._path.getEndPointY()||p.addPoint(c,f);c=t+Math.cos(s)*i,f=e+Math.sin(s)*i,n&&(g=c,v=f,c=this._curMat.a*g+this._curMat.c*v,f=this._curMat.b*g+this._curMat.d*v),c==this._path.getEndPointX()&&f==this._path.getEndPointY()||p.addPoint(c,f)},e.quadraticCurveTo=function(t,e,i,r){var s=u.I,a=i,n=r;i=this._curMat.a*a+this._curMat.c*n,r=this._curMat.b*a+this._curMat.d*n,a=t,n=e,t=this._curMat.a*a+this._curMat.c*n,e=this._curMat.b*a+this._curMat.d*n;for(var h=s.getBezierPoints([this._path.getEndPointX(),this._path.getEndPointY(),t,e,i,r],30,2),l=0,o=h.length/2;l<o;l++)this.lineTo(h[2*l],h[2*l+1],!1);this.lineTo(i,r,!1)},e.rect=function(t,e,i,r){this._other=this._other.make(),this._other.path||(this._other.path=new K),this._other.path.rect(t,e,i,r)},e.strokeRect=function(t,e,i,r,s){var a=.5*s;this.line(t-a,e,t+i+a,e,s,this._curMat),this.line(t+i,e,t+i,e+r,s,this._curMat),this.line(t,e,t,e+r,s,this._curMat),this.line(t-a,e+r,t+i+a,e+r,s,this._curMat)},e.clip=function(){},e.drawPoly=function(t,e,i,r,s,a,n){void 0===n&&(n=!1),this._renderKey=0,this._shader2D.glTexture=null;var h=this._getPath();if(-1==this.mId)h.polygon(t,e,i,r,s||1,a);else if(this.mHaveKey){var l=N.getInstance().shapeDic[this.mId];l.setMatrix(this._curMat),l.rebuild(h.tempArray),h.setGeomtry(l)}else{var o=h.polygon(t,e,i,r,s||1,a);N.getInstance().addShape(this.mId,o),o.setMatrix(this._curMat)}h.update();var u,_=[this.mX,this.mY];if((u=ct.createShape(this,h.ib,h.vb,h.count,h.offset,Vt.create(4,0))).shaderValue.ALPHA=this._shader2D.ALPHA,u.shaderValue.u_pos=_,u.shaderValue.u_mmat2=Mt.EMPTYMAT4_ARRAY,this._submits[this._submits._length++]=u,0<s){if(this.mHaveLineKey){var c=N.getInstance().shapeLineDic[this.mId];c.rebuild(h.tempArray),h.setGeomtry(c)}else N.getInstance().addShape(this.mId,h.drawLine(t,e,i,s,a));h.update(),(u=ct.createShape(this,h.ib,h.vb,h.count,h.offset,Vt.create(4,0))).shaderValue.ALPHA=this._shader2D.ALPHA,u.shaderValue.u_mmat2=Mt.EMPTYMAT4_ARRAY,this._submits[this._submits._length++]=u}},e.drawParticle=function(t,e,i){i.x=t,i.y=e,this._submits[this._submits._length++]=i},e._getPath=function(){return this._path||(this._path=new K)},r(0,e,"globalCompositeOperation",function(){return W.NAMES[this._nBlendType]},function(t){var e=W.TOINT[t];null==e||this._nBlendType===e||(Q.save(this,65536,this,!0),this._curSubmit=ct.RENDERBASE,this._renderKey=0,this._nBlendType=e)}),r(0,e,"strokeStyle",function(){return this._shader2D.strokeStyle},function(t){this._shader2D.strokeStyle.equal(t)||(Q.save(this,512,this._shader2D,!1),this._shader2D.strokeStyle=X.create(t))}),r(0,e,"globalAlpha",function(){return this._shader2D.ALPHA},function(t){(t=Math.floor(1e3*t)/1e3)!=this._shader2D.ALPHA&&(Q.save(this,1,this._shader2D,!0),this._shader2D.ALPHA=t)}),r(0,e,"asBitmap",null,function(t){if(t){if(this._targets||(this._targets=new tt),this._targets.repaint=!0,!this._width||!this._height)throw Error("asBitmap no size!");this._targets.setSP(this.sprite),this._targets.size(this._width,this._height)}else this._targets=null}),r(0,e,"fillStyle",function(){return this._shader2D.fillStyle},function(t){this._shader2D.fillStyle.equal(t)||(Q.save(this,2,this._shader2D,!1),this._shader2D.fillStyle=X.create(t))}),r(0,e,"textAlign",function(){return this._other.textAlign},function(t){this._other.textAlign===t||(this._other=this._other.make(),Q.save(this,32768,this._other,!1),this._other.textAlign=t)}),r(0,e,"lineWidth",function(){return this._other.lineWidth},function(t){this._other.lineWidth===t||(this._other=this._other.make(),Q.save(this,256,this._other,!1),this._other.lineWidth=t)}),r(0,e,"textBaseline",function(){return this._other.textBaseline},function(t){this._other.textBaseline===t||(this._other=this._other.make(),Q.save(this,16384,this._other,!1),this._other.textBaseline=t)}),r(0,e,"font",null,function(t){t!=this._other.font.toString()&&(this._other=this._other.make(),Q.save(this,8,this._other,!1),this._other.font===Tt.EMPTY?this._other.font=new Tt(t):this._other.font.setFont(t))}),U.__init__=function(){i.DEFAULT=new i},U._tempPoint=new w,U._SUBMITVBSIZE=32e3,U._MAXSIZE=99999999,U._RECTVBSIZE=16,U.MAXCLIPRECT=new R(0,0,99999999,99999999),U._COUNT=0,U._tmpMatrix=new S,U.SEGNUM=32,U._contextcount=0,n(U,["_fontTemp",function(){return this._fontTemp=new Tt},"_drawStyleTemp",function(){return this._drawStyleTemp=new X(null)}]),U.__init$=function(){i=function(){function t(){this.lineWidth=1,this.path=null,this.textAlign=null,this.textBaseline=null,this.font=Tt.EMPTY}c(t,"");var e=t.prototype;return e.clear=function(){this.lineWidth=1,this.path&&this.path.clear(),this.textAlign=this.textBaseline=null,this.font=Tt.EMPTY},e.make=function(){return this===t.DEFAULT?new t:this},t.DEFAULT=null,t}()},U}(),Vt=function(t){function r(t,e){this.size=[0,0],this.alpha=1,this.ALPHA=1,this.subID=0,this._cacheID=0,r.__super.call(this),this.defines=new Gt,this.position=r._POSITION,this.mainID=t,this.subID=e,this.textureHost=null,this.texture=null,this.fillStyle=null,this.color=null,this.strokeStyle=null,this.colorAdd=null,this.glTexture=null,this.u_mmat2=null,this._cacheID=t|e,this._inClassCache=r._cache[this._cacheID],0<t&&!this._inClassCache&&(this._inClassCache=r._cache[this._cacheID]=[],this._inClassCache._length=0),this.clear()}c(r,"laya.webgl.shader.d2.value.Value2D",V);var e=r.prototype;return e.setValue=function(t){},e.refresh=function(){var t=this.size;return t[0]=Mt.width,t[1]=Mt.height,this.alpha=this.ALPHA*Mt.worldAlpha,this.mmat=Mt.worldMatrix4,this},e._ShaderWithCompile=function(){return de.withCompile2D(0,this.mainID,this.defines.toNameDic(),this.mainID|this.defines._value,ge.create)},e._withWorldShaderDefines=function(){var t=Mt.worldShaderDefines,e=de.sharders[this.mainID|this.defines._value|t.getValue()];if(!e){var i,r={};for(i in this.defines.toNameDic())r[i]="";for(i in t.toNameDic())r[i]="";e=de.withCompile2D(0,this.mainID,r,this.mainID|this.defines._value|t.getValue(),ge.create)}var s=Mt.worldFilters;if(!s)return e;for(var a,n=s.length,h=0;h<n;h++)(a=s[h])&&a.action.setValue(this);return e},e.upload=function(){var t=Mt;this.alpha=this.ALPHA*t.worldAlpha,Mt.worldMatrix4!==Mt.TEMPMAT4_ARRAY&&this.defines.add(128),Pt.shaderHighPrecision&&this.defines.add(1024);var e,i=t.worldShaderDefines?this._withWorldShaderDefines():de.sharders[this.mainID|this.defines._value]||this._ShaderWithCompile();this.size[0]=t.width,this.size[1]=t.height,this.mmat=t.worldMatrix4,jt.activeShader!==i?i._shaderValueWidth!==t.width||i._shaderValueHeight!==t.height?(i._shaderValueWidth=t.width,i._shaderValueHeight=t.height):e=i._params2dQuick2||i._make2dQuick2():i._shaderValueWidth!==t.width||i._shaderValueHeight!==t.height?(i._shaderValueWidth=t.width,i._shaderValueHeight=t.height):e=i._params2dQuick1||i._make2dQuick1(),i.upload(this,e)},e.setFilters=function(t){if(this.filters=t)for(var e,i=t.length,r=0;r<i;r++)(e=t[r])&&(this.defines.add(e.type),e.action.setValue(this))},e.clear=function(){this.defines.setValue(this.subID)},e.release=function(){(this._inClassCache[this._inClassCache._length++]=this).fillStyle=null,this.strokeStyle=null,this.clear()},r._initone=function(t,e){r._typeClass[t]=e,r._cache[t]=[],r._cache[t]._length=0},r.__init__=function(){r._POSITION=[2,5126,!1,4*At.BYTES_PE,0],r._TEXCOORD=[2,5126,!1,4*At.BYTES_PE,2*At.BYTES_PE],r._initone(2,re),r._initone(4,he),r._initone(256,ae),r._initone(512,ee),r._initone(1,ne),r._initone(65,pe),r._initone(9,ne)},r.create=function(t,e){var i=r._cache[t|e];return i._length?i[--i._length]:new r._typeClass[t|e](e)},r._POSITION=null,r._TEXCOORD=null,r._cache=[],r._typeClass=[],r.TEMPMAT4_ARRAY=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],r}(),Ut=function(t){function p(t,e){p.__super.call(this,t,e)}c(p,"laya.webgl.utils.RenderSprite3D",v);var e=p.prototype;return e.onCreate=function(t){switch(t){case 8:return void(this._fun=this._blend);case 4:return void(this._fun=this._transform)}},e._mask=function(t,e,i,r){var s,a,n=this._next,h=t.mask;if(h){e.ctx.save();var l=e.ctx.globalCompositeOperation,o=new R;if(o.copyFrom(h.getBounds()),o.width=Math.round(o.width),o.height=Math.round(o.height),o.x=Math.round(o.x),o.y=Math.round(o.y),0<o.width&&0<o.height){var u=t._style._tf,_=dt.create();_.addValue("bounds",o),s=ft.create([_,e],laya.webgl.utils.RenderSprite3D.tmpTarget),e.addRenderObject(s),h.render(e,-o.x,-o.y),s=ft.create([_],laya.webgl.utils.RenderSprite3D.endTmpTarget),e.addRenderObject(s),e.ctx.save(),e.clipRect(i-u.translateX+o.x,r-u.translateY+o.y,o.width,o.height),n._fun.call(n,t,e,i,r),e.ctx.restore(),a=gt.create(6),l=e.ctx.globalCompositeOperation,a.blendMode="mask",e.addRenderObject(a),S.TEMP.identity();var c=Vt.create(1,0),f=F.INV_UV,d=o.width,m=o.height;(o.width<32||o.height<32)&&((f=p.tempUV)[0]=0,f[1]=0,f[2]=32<=o.width?1:o.width/32,f[3]=0,f[4]=32<=o.width?1:o.width/32,f[5]=32<=o.height?1:o.height/32,f[6]=0,f[7]=32<=o.height?1:o.height/32,o.width=32<=o.width?o.width:32,o.height=32<=o.height?o.height:32,f[1]*=-1,f[3]*=-1,f[5]*=-1,f[7]*=-1,f[1]+=1,f[3]+=1,f[5]+=1,f[7]+=1),e.ctx.drawTarget(_,i+o.x-u.translateX,r+o.y-u.translateY,d,m,S.TEMP,"tmpTarget",c,f,6),s=ft.create([_],laya.webgl.utils.RenderSprite3D.recycleTarget),e.addRenderObject(s),(a=gt.create(6)).blendMode=l,e.addRenderObject(a)}e.ctx.restore()}else n._fun.call(n,t,e,i,r)},e._blend=function(t,e,i,r){var s=t._style,a=this._next;s.blendMode?(e.ctx.save(),e.ctx.globalCompositeOperation=s.blendMode,a._fun.call(a,t,e,i,r),e.ctx.restore()):a._fun.call(a,t,e,i,r)},e._transform=function(t,e,i,r){var s=t.transform,a=this._next;if(s&&a!=v.NORENDER){var n=e.ctx;t._style;s.tx=i,s.ty=r;var h=n._getTransformMatrix(),l=h.clone();S.mul(s,h,h),h._checkTransform(),s.tx=s.ty=0,a._fun.call(a,t,e,0,0),l.copyTo(h),l.destroy()}else a._fun.call(a,t,e,i,r)},p.tmpTarget=function(t,e){var i=t.getValue("bounds"),r=Jt.create(i.width,i.height);r.start(),r.clear(0,0,0,0),t.addValue("tmpTarget",r)},p.endTmpTarget=function(t){t.getValue("tmpTarget").end()},p.recycleTarget=function(t){t.getValue("tmpTarget").recycle(),t.recycle()},n(p,["tempUV",function(){return this.tempUV=new Array(8)}]),p}(),kt=function(t){function e(){this.data=null,e.__super.call(this)}c(e,"laya.filters.webgl.ColorFilterActionGL",O);var i=e.prototype;return T.imps(i,{"laya.filters.IFilterActionGL":!0}),i.setValue=function(t){t.colorMat=this.data._mat,t.colorAlpha=this.data._alpha},i.apply3d=function(t,e,i,r,s){var a=t.getValue("bounds"),n=Vt.create(1,0);n.setFilters([this.data]);var h=S.TEMP;h.identity(),i.ctx.drawTarget(t,0,0,a.width,a.height,h,"src",n)},e}(),Ht=function(t){function a(t,e,i,r,s){this._atlasCanvas=null,this._inAtlasTextureKey=null,this._inAtlasTextureBitmapValue=null,this._inAtlasTextureOriUVValue=null,this._InAtlasWebGLImagesKey=null,this._InAtlasWebGLImagesOffsetValue=null,a.__super.call(this,t,e,s),this._inAtlasTextureKey=[],this._inAtlasTextureBitmapValue=[],this._inAtlasTextureOriUVValue=[],this._InAtlasWebGLImagesKey={},this._InAtlasWebGLImagesOffsetValue=[],this._atlasCanvas=new oe,(this._atlasCanvas._atlaser=this)._atlasCanvas.width=i,this._atlasCanvas.height=r,this._atlasCanvas.activeResource(),this._atlasCanvas.lock=!0}c(a,"laya.webgl.atlas.Atlaser",k);var e=a.prototype;return e.computeUVinAtlasTexture=function(t,e,i,r){var s=H.atlasTextureWidth,a=H.atlasTextureHeight,n=i/s,h=r/a,l=(i+t.bitmap.width)/s,o=(r+t.bitmap.height)/a,u=t.bitmap.width/s,_=t.bitmap.height/a;t.uv=[n+e[0]*u,h+e[1]*_,l-(1-e[2])*u,h+e[3]*_,l-(1-e[4])*u,o-(1-e[5])*_,n+e[6]*u,o-(1-e[7])*_]},e.findBitmapIsExist=function(t){if(t instanceof laya.webgl.resource.WebGLImage){var e=t,i=e.url,r=this._InAtlasWebGLImagesKey[i||e.id];if(r)return r.offsetInfoID}return-1},e.addToAtlasTexture=function(t,e,i){if(t instanceof laya.webgl.resource.WebGLImage){var r=t,s=r.url;this._InAtlasWebGLImagesKey[s||r.id]={bitmap:t,offsetInfoID:this._InAtlasWebGLImagesOffsetValue.length},this._InAtlasWebGLImagesOffsetValue.push([e,i])}this._atlasCanvas.texSubImage2D(e,i,t.atlasImgData||t.atlasSource),t.clearAtlasSource()},e.addToAtlas=function(t,e,i){t._atlasID=this._inAtlasTextureKey.length;var r=t.uv.slice(),s=t.bitmap;this._inAtlasTextureKey.push(t),this._inAtlasTextureOriUVValue.push(r),this._inAtlasTextureBitmapValue.push(s),this.computeUVinAtlasTexture(t,r,e,i),t.bitmap=this._atlasCanvas},e.clear=function(){for(var t=0,e=this._inAtlasTextureKey.length;t<e;t++)this._inAtlasTextureKey[t].bitmap=this._inAtlasTextureBitmapValue[t],this._inAtlasTextureKey[t].uv=this._inAtlasTextureOriUVValue[t],this._inAtlasTextureKey[t]._atlasID=-1,this._inAtlasTextureKey[t].bitmap.lock=!1,this._inAtlasTextureKey[t].bitmap.releaseResource();this._inAtlasTextureKey.length=0,this._inAtlasTextureBitmapValue.length=0,this._inAtlasTextureOriUVValue.length=0,this._InAtlasWebGLImagesKey=null,this._InAtlasWebGLImagesOffsetValue.length=0},e.dispose=function(){this.clear(),this._atlasCanvas.destroy()},r(0,e,"InAtlasWebGLImagesOffsetValue",function(){return this._InAtlasWebGLImagesOffsetValue}),r(0,e,"texture",function(){return this._atlasCanvas}),r(0,e,"inAtlasWebGLImagesKey",function(){return this._InAtlasWebGLImagesKey}),a}(),Gt=(c(zt,"laya.webgl.shader.d2.ShaderDefines2D",rt),zt.__init__=function(){zt.reg("TEXTURE2D",1),zt.reg("COLOR2D",2),zt.reg("PRIMITIVE",4),zt.reg("GLOW_FILTER",8),zt.reg("BLUR_FILTER",16),zt.reg("COLOR_FILTER",32),zt.reg("COLOR_ADD",64),zt.reg("WORLDMAT",128),zt.reg("FILLTEXTURE",256),zt.reg("FSHIGHPRECISION",1024)},zt.reg=function(t,e){rt._reg(t,e,zt.__name2int,zt.__int2name)},zt.toText=function(t,e,i){return rt._toText(t,e,i)},zt.toInt=function(t){return rt._toInt(t,zt.__name2int)},zt.TEXTURE2D=1,zt.COLOR2D=2,zt.PRIMITIVE=4,zt.FILTERGLOW=8,zt.FILTERBLUR=16,zt.FILTERCOLOR=32,zt.COLORADD=64,zt.WORLDMAT=128,zt.FILLTEXTURE=256,zt.SKINMESH=512,zt.SHADERDEFINE_FSHIGHPRECISION=1024,zt.__name2int={},zt.__int2name=[],zt.__int2nameMap=[],zt);function zt(){zt.__super.call(this,zt.__name2int,zt.__int2name,zt.__int2nameMap)}c(Wt,"laya.webgl.shapes.Ellipse",nt);function Wt(t,e,i,r,s,a,n){Wt.__super.call(this,t,e,i,r,40,s,a,n)}var Yt=function(t){function a(t,e,i,r,s){this._points=[],this.rebuild(i),a.__super.call(this,t,e,0,0,0,s,r,s,0)}c(a,"laya.webgl.shapes.Line",nt);var e=a.prototype;return e.rebuild=function(t){var e=t.length;e!=this._points.length&&(this.mUint16Array=new Uint16Array(6*(e/2-1)),this.mFloat32Array=new Float32Array(5*e)),this._points.length=0;for(var i=NaN,r=NaN,s=-1,a=-1,n=t.length/2,h=0;h<n;h++)i=t[2*h],r=t[2*h+1],(.01<Math.abs(s-i)||.01<Math.abs(a-r))&&this._points.push(i,r),s=i,a=r},e.getData=function(t,e,i){var r=[],s=[];0<this.borderWidth&&this.createLine2(this._points,r,this.borderWidth,i,s,this._points.length/2),this.mUint16Array.set(r,0),this.mFloat32Array.set(s,0),t.append(this.mUint16Array),e.append(this.mFloat32Array)},a}(),Xt=function(t){function _(t,e,i,r,s){this._points=[];for(var a=NaN,n=NaN,h=-1,l=-1,o=i.length/2-1,u=0;u<o;u++)a=i[2*u],n=i[2*u+1],(.01<Math.abs(h-a)||.01<Math.abs(l-n))&&this._points.push(a,n),h=a,l=n;a=i[2*o],n=i[2*o+1],h=this._points[0],l=this._points[1],(.01<Math.abs(h-a)||.01<Math.abs(l-n))&&this._points.push(a,n),_.__super.call(this,t,e,0,0,this._points.length/2,0,r,s)}c(_,"laya.webgl.shapes.LoopLine",nt);var e=_.prototype;return e.getData=function(t,e,i){if(0<this.borderWidth){for(var r=this.color,s=(r>>16&255)/255,a=(r>>8&255)/255,n=(255&r)/255,h=[],l=0,o=0,u=[],_=Math.floor(this._points.length/2),c=0;c<_;c++)l=this._points[2*c],o=this._points[2*c+1],h.push(this.x+l,this.y+o,s,a,n);this.createLoopLine(h,u,this.borderWidth,i+h.length/5),t.append(new Uint16Array(u)),e.append(new Float32Array(h))}},e.createLoopLine=function(t,e,i,r,s,a){t.length;var n=t.concat(),h=s||t,l=this.borderColor,o=(l>>16&255)/255,u=(l>>8&255)/255,_=(255&l)/255,c=[n[0],n[1]],f=[n[n.length-5],n[n.length-4]],d=f[0]+.5*(c[0]-f[0]),m=f[1]+.5*(c[1]-f[1]);n.unshift(d,m,0,0,0),n.push(d,m,0,0,0);var p,g,v,x,b,y,T,A,E,S,w,R,I,M,C,L,P,D,F,B,N=n.length/5,O=r,V=i/2;v=n[0],x=n[1],S=v-(b=n[5]),E=(E=-(x-(y=n[6])))/(B=Math.sqrt(E*E+S*S))*V,S=S/B*V,h.push(v-E,x-S,o,u,_,v+E,x+S,o,u,_);for(var U=1;U<N-1;U++)v=n[5*(U-1)],x=n[5*(U-1)+1],b=n[5*U],y=n[5*U+1],T=n[5*(U+1)],A=n[5*(U+1)+1],S=v-b,R=b-T,C=(-(E=(E=-(x-y))/(B=Math.sqrt(E*E+S*S))*V)+v)*(-(S=S/B*V)+y)-(-E+b)*(-S+x),D=(-(w=(w=-(y-A))/(B=Math.sqrt(w*w+R*R))*V)+T)*(-(R=R/B*V)+y)-(-w+b)*(-R+A),F=(I=-S+x-(-S+y))*(P=-w+b-(-w+T))-(L=-R+A-(-R+y))*(M=-E+b-(-E+v)),Math.abs(F)<.1?(F+=10.1,h.push(b-E,y-S,o,u,_,b+E,y+S,o,u,_)):(((p=(M*D-P*C)/F)-b)*(p-b)+((g=(L*C-I*D)/F)-y)+(g-y),h.push(p,g,o,u,_,b-(p-b),y-(g-y),o,u,_));a&&(e=a);var k=this.edges+1;for(U=1;U<k;U++)e.push(O+2*(U-1),O+2*(U-1)+1,O+2*U+1,O+2*U+1,O+2*U,O+2*(U-1));return e.push(O+2*(U-1),O+2*(U-1)+1,O+1,O+1,O,O+2*(U-1)),h},_}(),Kt=function(t){function n(t,e,i,r,s,a){this._points=null,this._start=-1,this._repaint=!1,this.earcutTriangles=null,this._mat=S.create(),this._points=i.slice(0,i.length),n.__super.call(this,t,e,0,0,this._points.length/2,r,s,a)}c(n,"laya.webgl.shapes.Polygon",nt);var e=n.prototype;return e.rebuild=function(t){this._repaint||(this._points.length=0,this._points=this._points.concat(t))},e.setMatrix=function(t){t.copyTo(this._mat)},e.needUpdate=function(t){return this._repaint=this._mat.a==t.a&&this._mat.b==t.b&&this._mat.c==t.c&&this._mat.d==t.d&&this._mat.tx==t.tx&&this._mat.ty==t.ty,!this._repaint},e.getData=function(t,e,i){var r,s=0,a=this._points,n=0;if(this.mUint16Array&&this.mFloat32Array&&this._repaint){if(this._start!=i){for(this._start=i,r=[],n=this.earcutTriangles.length,s=0;s<n;s++)r.push(this.earcutTriangles[s]+i);this.mUint16Array=new Uint16Array(r)}}else{this._start=i,r=[];var h=[],l=[],o=this.color,u=(o>>16&255)/255,_=(o>>8&255)/255,c=(255&o)/255;for(n=Math.floor(a.length/2),s=0;s<n;s++)h.push(this.x+a[2*s],this.y+a[2*s+1],u,_,c),l.push(this.x+a[2*s],this.y+a[2*s+1]);for(this.earcutTriangles=ht.earcut(l,null,2),n=this.earcutTriangles.length,s=0;s<n;s++)r.push(this.earcutTriangles[s]+i);this.mUint16Array=new Uint16Array(r),this.mFloat32Array=new Float32Array(h)}t.append(this.mUint16Array),e.append(this.mFloat32Array)},n}(),Qt=function(t){function a(){this._matrix=new S,this._matrix4=At.defaultMatrix4.concat(),a.__super.call(this,1e4),this.shaderValue=new Vt(0,0)}c(a,"laya.webgl.submit.SubmitCanvas",ct);var e=a.prototype;return e.renderSubmit=function(){if(this._ctx_src._targets)return this._ctx_src._targets.flush(this._ctx_src),1;var t=Mt.worldAlpha,e=Mt.worldMatrix4,i=Mt.worldMatrix,r=Mt.worldFilters,s=Mt.worldShaderDefines,a=this.shaderValue,n=this._matrix,h=this._matrix4,l=S.TEMP;return S.mul(n,i,l),h[0]=l.a,h[1]=l.b,h[4]=l.c,h[5]=l.d,h[12]=l.tx,h[13]=l.ty,Mt.worldMatrix=l.clone(),Mt.worldMatrix4=h,Mt.worldAlpha=Mt.worldAlpha*a.alpha,a.filters&&a.filters.length&&(Mt.worldFilters=a.filters,Mt.worldShaderDefines=a.defines),this._ctx_src.flush(),Mt.worldAlpha=t,Mt.worldMatrix4=e,Mt.worldMatrix.destroy(),Mt.worldMatrix=i,Mt.worldFilters=r,Mt.worldShaderDefines=s,1},e.releaseRender=function(){var t=a._cache;this._ctx_src=null,t[t._length++]=this},e.getRenderType=function(){return 10003},a.create=function(t,e,i){var r=a._cache._length?a._cache[--a._cache._length]:new a;r._ctx_src=t;var s=r.shaderValue;return s.alpha=e,s.defines.setValue(0),i&&i.length&&s.setFilters(i),r},a._cache=((a._cache=[])._length=0,a._cache),a}(),Zt=function(t){function o(t){this._preIsSameTextureShader=!1,this._isSameTexture=!0,this._texs=new Array,this._texsID=new Array,this._vbPos=new Array,void 0===t&&(t=1e4),o.__super.call(this,t)}c(o,"laya.webgl.submit.SubmitTexture",ct);var e=o.prototype;return e.releaseRender=function(){var t=o._cache;(t[t._length++]=this).shaderValue.release(),this._preIsSameTextureShader=!1,this._vb=null,this._texs.length=0,this._vbPos.length=0,this._isSameTexture=!0},e.addTexture=function(t,e){this._texsID[this._texs.length]=t._uvID,this._texs.push(t),this._vbPos.push(e)},e.checkTexture=function(){if(this._texs.length<1)this._isSameTexture=!0;else{var t=this.shaderValue.textureHost.bitmap;if(null!==t)for(var e=this._vb.getFloat32Array(),i=0,r=this._texs.length;i<r;i++){var s=this._texs[i];s.active();var a=s.uv;if(this._texsID[i]!==s._uvID){this._texsID[i]=s._uvID;var n=this._vbPos[i];e[n+2]=a[0],e[n+3]=a[1],e[n+6]=a[2],e[n+7]=a[3],e[n+10]=a[4],e[n+11]=a[5],e[n+14]=a[6],e[n+15]=a[7],this._vb.setNeedUpload()}s.bitmap!==t&&(this._isSameTexture=!1)}}},e.renderSubmit=function(){if(0===this._numEle)return o._shaderSet=!1,1;var t=this.shaderValue.textureHost;if(t){var e=t.source;if(!t.bitmap||!e)return o._shaderSet=!1,1;this.shaderValue.texture=e}this._vb.bind_upload(this._ib);var i=Pt.mainContext;if(W.activeBlendFunction!==this._blendFn&&(i.enable(3042),this._blendFn(i),W.activeBlendFunction=this._blendFn),C.drawCall++,C.trianglesFaces+=this._numEle/3,this._preIsSameTextureShader&&jt.activeShader&&o._shaderSet?jt.activeShader.uploadTexture2D(this.shaderValue.texture):this.shaderValue.upload(),o._shaderSet=!0,1<this._texs.length&&!this._isSameTexture)for(var r=t.bitmap,s=0,a=jt.activeShader,n=0,h=this._texs.length;n<h;n++){var l=this._texs[n];l.bitmap===r&&n+1!==h||(a.uploadTexture2D(l.source),i.drawElements(4,6*(n-s+1),5123,this._startIdx+6*s*At.BYTES_PIDX),r=l.bitmap,s=n)}else i.drawElements(4,this._numEle,5123,this._startIdx);return 1},o.create=function(t,e,i,r,s){var a=o._cache._length?o._cache[--o._cache._length]:new o;null==i&&((i=a._selfVb||(a._selfVb=xe.create(-1))).clear(),r=0),a._ib=e,a._vb=i,a._startIdx=r*At.BYTES_PIDX,a._numEle=0;var n=t._nBlendType;a._blendFn=t._targets?W.targetFns[n]:W.fns[n],a.shaderValue=s,a.shaderValue.setValue(t._shader2D);var h=t._shader2D.filters;return h&&a.shaderValue.setFilters(h),a},o._cache=((o._cache=[])._length=0,o._cache),o._shaderSet=!0,o}(),qt=function(t){function v(){v.__super.call(this,laya.webgl.utils.MeshTexture.const_stride,0,0),this.canReuse=!0,this.setAttributes(laya.webgl.utils.MeshTexture._fixattriInfo)}c(v,"laya.webgl.utils.MeshTexture",It);var e=v.prototype;return e.addData=function(t,e,i,r,s,a){for(var n=t.length/2,h=this._vb.needSize(n*v.const_stride)>>2,l=this._vb.getFloat32Array(),o=0,u=0;u<n;u++){var _=t[o],c=t[o+1],f=_*r.a+c*r.c+r.tx,d=_*r.b+c*r.d+r.ty;l[h++]=f,l[h++]=d,l[h++]=e[o],l[h++]=e[o+1],o+=2}this._vb.setNeedUpload();var m=this.vertNum;if(0<m){var p=i.length;p>v.tmpIdx.length&&(v.tmpIdx=new Uint16Array(p));for(var g=0;g<p;g++)v.tmpIdx[g]=i[g]+m;this._ib.appendU16Array(v.tmpIdx,i.length)}else this._ib.append(i);this._ib.setNeedUpload(),this.vertNum+=n,this.indexNum+=i.length},e.releaseMesh=function(){this._vb._byteLength=0,this._ib._byteLength=0,this.vertNum=0,this.indexNum=0,laya.webgl.utils.MeshTexture._POOL.push(this)},e.destroy=function(){this._ib.destroy(),this._vb.destroy()},v.getAMesh=function(){return laya.webgl.utils.MeshTexture._POOL.length?laya.webgl.utils.MeshTexture._POOL.pop():new v},v.const_stride=16,v._POOL=[],n(v,["_fixattriInfo",function(){return this._fixattriInfo=[5126,2,0,5126,2,8]},"tmpIdx",function(){return this.tmpIdx=new Uint16Array(4)}]),v}(),jt=(c($t,"laya.webgl.shader.BaseShader",x),$t.activeShader=null,$t.bindShader=null,$t);function $t(){$t.__super.call(this),this.lock=!0}var Jt=function(e){function u(t,e,i,r,s,a,n,h,l){this._type=0,this._svWidth=NaN,this._svHeight=NaN,this._preRenderTarget=null,this._alreadyResolved=!1,this._looked=!1,this._surfaceFormat=0,this._surfaceType=0,this._depthStencilFormat=0,this._mipMap=!1,this._repeat=!1,this._minFifter=0,this._magFifter=0,this._destroy=!1,void 0===i&&(i=6408),void 0===r&&(r=5121),void 0===s&&(s=34041),void 0===a&&(a=!1),void 0===n&&(n=!1),void 0===h&&(h=-1),void 0===l&&(l=-1),this._type=1,this._w=t,this._h=e,this._surfaceFormat=i,this._surfaceType=r,this._depthStencilFormat=s,g.isConchWebGL&&34041===this._depthStencilFormat&&(this._depthStencilFormat=33189),this._mipMap=a,this._repeat=n,this._minFifter=h,this._magFifter=l,this._createWebGLRenderTarget(),this.bitmap.lock=!0,u.__super.call(this,this.bitmap,F.INV_UV)}c(u,"laya.webgl.resource.RenderTarget2D",e);var t=u.prototype;return T.imps(t,{"laya.resource.IDispose":!0}),t.getType=function(){return this._type},t.getTexture=function(){return this},t.size=function(t,e){this._w==t&&this._h==e||(this._w=t,this._h=e,this.release(),0!=this._w&&0!=this._h&&this._createWebGLRenderTarget())},t.release=function(){this.destroy()},t.recycle=function(){u.POOL.push(this)},t.start=function(){var t=Pt.mainContext;return this._preRenderTarget=Mt.curRenderTarget,Mt.curRenderTarget=this,t.bindFramebuffer(36160,this.bitmap.frameBuffer),this._alreadyResolved=!1,1==this._type&&(t.viewport(0,0,this._w,this._h),this._svWidth=Mt.width,this._svHeight=Mt.height,Mt.width=this._w,Mt.height=this._h,jt.activeShader=null),this},t.clear=function(t,e,i,r){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),void 0===r&&(r=1);var s=Pt.mainContext;s.clearColor(t,e,i,r);var a=16384;switch(this._depthStencilFormat){case 33189:a|=256;break;case 36168:a|=1024;break;case 34041:a|=256,a|=1024}s.clear(a)},t.end=function(){var t=Pt.mainContext;t.bindFramebuffer(36160,this._preRenderTarget?this._preRenderTarget.bitmap.frameBuffer:null),this._alreadyResolved=!0,Mt.curRenderTarget=this._preRenderTarget,1==this._type?(t.viewport(0,0,this._svWidth,this._svHeight),Mt.width=this._svWidth,Mt.height=this._svHeight,jt.activeShader=null):t.viewport(0,0,T.stage.width,T.stage.height)},t.getData=function(t,e,i,r){var s=Pt.mainContext;if(s.bindFramebuffer(36160,this.bitmap.frameBuffer),!(36053===s.checkFramebufferStatus(36160)))return s.bindFramebuffer(36160,null),null;var a=new Uint8Array(this._w*this._h*4);return s.readPixels(t,e,i,r,this._surfaceFormat,this._surfaceType,a),s.bindFramebuffer(36160,null),a},t.destroy=function(t){void 0===t&&(t=!1),this._destroy||(this._loaded=!1,this.bitmap.offAll(),this.bitmap.disposeResource(),this.bitmap.dispose(),this.offAll(),this.bitmap=null,this._alreadyResolved=!1,this._destroy=!0,e.prototype.destroy.call(this))},t.dispose=function(){},t._createWebGLRenderTarget=function(){this.bitmap=new ce(this.width,this.height,this._surfaceFormat,this._surfaceType,this._depthStencilFormat,this._mipMap,this._repeat,this._minFifter,this._magFifter),this.bitmap.activeResource(),this._alreadyResolved=!0,this._destroy=!1,this._loaded=!0,this.bitmap.on("recovered",this,function(t){this.event("recovered")})},r(0,t,"surfaceFormat",function(){return this._surfaceFormat}),r(0,t,"magFifter",function(){return this._magFifter}),r(0,t,"surfaceType",function(){return this._surfaceType}),r(0,t,"mipMap",function(){return this._mipMap}),r(0,t,"depthStencilFormat",function(){return this._depthStencilFormat}),r(0,t,"minFifter",function(){return this._minFifter}),r(0,t,"source",function(){return this._alreadyResolved?T.superGet(F,this,"source"):null}),u.create=function(t,e,i,r,s,a,n,h,l){void 0===i&&(i=6408),void 0===r&&(r=5121),void 0===s&&(s=34041),void 0===a&&(a=!1),void 0===n&&(n=!1),void 0===h&&(h=-1),void 0===l&&(l=-1);var o=u.POOL.pop();return o||(o=new u(t,e)),o.bitmap&&o._w==t&&o._h==e&&o._surfaceFormat==i&&o._surfaceType==r&&o._depthStencilFormat==s&&o._mipMap==a&&o._repeat==n&&o._minFifter==h&&o._magFifter==l||(o._w=t,o._h=e,o._surfaceFormat=i,o._surfaceType=r,o._depthStencilFormat=s,g.isConchWebGL&&34041===o._depthStencilFormat&&(o._depthStencilFormat=33189),o._mipMap=a,o._repeat=n,o._minFifter=h,o._magFifter=l,o.release(),o._createWebGLRenderTarget()),o},u.TYPE2D=1,u.TYPE3D=2,u.POOL=[],u}(F),te=function(t){function e(){this._glBuffer=null,this._buffer=null,this._bufferType=0,this._bufferUsage=0,this._byteLength=0,e.__super.call(this),e._gl=Pt.mainContext}c(e,"laya.webgl.utils.Buffer",x);var i=e.prototype;return i._bind=function(){this.activeResource(),e._bindActive[this._bufferType]!==this._glBuffer&&(34962===this._bufferType&&(e._bindVertexBuffer=this._glBuffer),e._gl.bindBuffer(this._bufferType,e._bindActive[this._bufferType]=this._glBuffer),jt.activeShader=null)},i.recreateResource=function(){this._glBuffer||(this._glBuffer=e._gl.createBuffer()),this.completeCreate()},i.disposeResource=function(){this._glBuffer&&(Pt.mainContext.deleteBuffer(this._glBuffer),this._glBuffer=null),this.memorySize=0},r(0,i,"bufferUsage",function(){return this._bufferUsage}),e._gl=null,e._bindActive={},e._bindVertexBuffer=null,e._enableAtributes=[],e}(),ee=(c(ie,"laya.webgl.shader.d2.skinAnishader.SkinSV",Vt),ie);function ie(t){this.texcoord=null,this.offsetX=300,this.offsetY=0,ie.__super.call(this,512,0);var e=8*At.BYTES_PE;this.position=[2,5126,!1,e,0],this.texcoord=[2,5126,!1,e,2*At.BYTES_PE],this.color=[4,5126,!1,e,4*At.BYTES_PE]}var re=(c(se,"laya.webgl.shader.d2.value.Color2dSV",Vt),se.prototype.setValue=function(t){t.fillStyle&&(this.color=t.fillStyle._color._color),t.strokeStyle&&(this.color=t.strokeStyle._color._color)},se);function se(t){se.__super.call(this,2,0),this.color=[]}var ae=function(t){function e(t){this.u_colorMatrix=null,this.strength=0,this.colorMat=null,this.colorAlpha=null,this.u_TexRange=[0,1,0,1],this.u_offset=[0,0],this.texcoord=Vt._TEXCOORD,e.__super.call(this,256,0)}c(e,"laya.webgl.shader.d2.value.FillTextureSV",Vt);var i=e.prototype;return i.setValue=function(t){this.ALPHA=t.ALPHA,t.filters&&this.setFilters(t.filters)},i.clear=function(){this.texture=null,this.shader=null,this.defines.setValue(0)},e}(),ne=function(t){function e(t){this.u_colorMatrix=null,this.strength=0,this.blurInfo=null,this.colorMat=null,this.colorAlpha=null,this.texcoord=Vt._TEXCOORD,void 0===t&&(t=0),e.__super.call(this,1,t)}c(e,"laya.webgl.shader.d2.value.TextureSV",Vt);var i=e.prototype;return i.setValue=function(t){this.ALPHA=t.ALPHA,t.filters&&this.setFilters(t.filters)},i.clear=function(){this.texture=null,this.shader=null,this.defines.setValue(0)},e}(),he=(c(le,"laya.webgl.shader.d2.value.PrimitiveSV",Vt),le);function le(t){this.a_color=null,this.u_pos=[0,0],le.__super.call(this,4,0),this.position=[2,5126,!1,5*At.BYTES_PE,0],this.a_color=[3,5126,!1,5*At.BYTES_PE,2*At.BYTES_PE]}var oe=function(t){function e(){this._atlaser=null,this._flashCacheImage=null,this._flashCacheImageNeedFlush=!1,e.__super.call(this)}c(e,"laya.webgl.atlas.AtlasWebGLCanvas",t);var i=e.prototype;return i.recreateResource=function(){var t=Pt.mainContext,e=this._source=t.createTexture(),i=Ft.curBindTexTarget,r=Ft.curBindTexValue;Ft.bindTexture(t,3553,e),t.texImage2D(3553,0,6408,this._w,this._h,0,6408,5121,null),t.texParameteri(3553,10241,9729),t.texParameteri(3553,10240,9729),t.texParameteri(3553,10242,33071),t.texParameteri(3553,10243,33071),i&&r&&Ft.bindTexture(t,i,r),this.memorySize=this._w*this._h*4,this.completeCreate()},i.disposeResource=function(){this._source&&(Pt.mainContext.deleteTexture(this._source),this._source=null,this.memorySize=0)},i.texSubImage2D=function(t,e,i){if(g.isFlash){this._flashCacheImage||(this._flashCacheImage=m.create(""),this._flashCacheImage._image.createCanvas(this._w,this._h));var r=i.bitmapdata;this._flashCacheImage._image.copyPixels(r,0,0,r.width,r.height,t,e),this._flashCacheImageNeedFlush||(this._flashCacheImageNeedFlush=!0)}else{var s=Pt.mainContext,a=Ft.curBindTexTarget,n=Ft.curBindTexValue;Ft.bindTexture(s,3553,this._source),g.isConchWebGL?(i!==ConchTextCanvas&&(0<=t-1&&s.texSubImage2DEx(!0,3553,0,t-1,e,6408,5121,i),t+1<=this._w&&s.texSubImage2DEx(!0,3553,0,t+1,e,6408,5121,i),0<=e-1&&s.texSubImage2DEx(!0,3553,0,t,e-1,6408,5121,i),e+1<=this._h&&s.texSubImage2DEx(!0,3553,0,t,e+1,6408,5121,i)),s.texSubImage2DEx(!0,3553,0,t,e,6408,5121,i)):(s.pixelStorei(37441,!0),0<=t-1&&s.texSubImage2D(3553,0,t-1,e,6408,5121,i),t+1<=this._w&&s.texSubImage2D(3553,0,t+1,e,6408,5121,i),0<=e-1&&s.texSubImage2D(3553,0,t,e-1,6408,5121,i),e+1<=this._h&&s.texSubImage2D(3553,0,t,e+1,6408,5121,i),s.texSubImage2D(3553,0,t,e,6408,5121,i),s.pixelStorei(37441,!1)),a&&n&&Ft.bindTexture(s,a,n)}},i.texSubImage2DPixel=function(t,e,i,r,s){var a=Pt.mainContext,n=Ft.curBindTexTarget,h=Ft.curBindTexValue;Ft.bindTexture(a,3553,this._source);var l=new Uint8Array(s.data);g.isConchWebGL?a.texSubImage2DEx(!0,3553,0,t,e,i,r,6408,5121,l):(a.pixelStorei(37441,!0),a.texSubImage2D(3553,0,t,e,i,r,6408,5121,l),a.pixelStorei(37441,!1)),n&&h&&Ft.bindTexture(a,n,h)},r(0,i,"width",t.prototype._$get_width,function(t){this._w=t}),r(0,i,"height",t.prototype._$get_height,function(t){this._h=t}),e}(i),ue=function(t){function s(){this.flipY=!0,this.alwaysChange=!1,s.__super.call(this)}c(s,"laya.webgl.resource.WebGLCanvas",i);var e=s.prototype;return e.getCanvas=function(){return this._canvas},e.clear=function(){this._ctx&&this._ctx.clear()},e.destroy=function(){this._ctx&&this._ctx.destroy(),this._ctx=null,laya.resource.Resource.prototype.destroy.call(this)},e._setContext=function(t){this._ctx=t},e.getContext=function(t,e){return this._ctx?this._ctx:this._ctx=s._createContext(this)},e.size=function(t,e){this._w==t&&this._h==e||(this._w=t,this._h=e,this._ctx&&this._ctx.size(t,e),this._canvas&&(this._canvas.height=e,this._canvas.width=t))},e.activeResource=function(t){void 0===t&&(t=!1),this._source||this.recreateResource()},e.recreateResource=function(){this.createWebGlTexture(),this.completeCreate()},e.disposeResource=function(){this._source&&!this.iscpuSource&&(Pt.mainContext.deleteTexture(this._source),this._source=null,this.memorySize=0)},e.createWebGlTexture=function(){var t=Pt.mainContext;this._canvas;var e=this._source=t.createTexture();this.iscpuSource=!1;var i=Ft.curBindTexTarget,r=Ft.curBindTexValue;Ft.bindTexture(t,3553,e),t.pixelStorei(37440,this.flipY?1:0),g.isConchWebGL?t.texImage2DEx(s.premulAlpha,3553,0,6408,6408,5121,this._imgData):(s.premulAlpha&&t.pixelStorei(37441,!0),t.texImage2D(3553,0,6408,6408,5121,this._imgData),s.premulAlpha&&t.pixelStorei(37441,!1)),t.texParameteri(3553,10240,9729),t.texParameteri(3553,10241,9729),t.texParameteri(3553,10242,33071),t.texParameteri(3553,10243,33071),t.pixelStorei(37440,0),this.memorySize=this._w*this._h*4,i&&r&&Ft.bindTexture(t,i,r)},e.reloadCanvasData=function(){var t=Pt.mainContext;if(!this._source)throw"reloadCanvasData error, gl texture not created!";var e=Ft.curBindTexTarget,i=Ft.curBindTexValue;Ft.bindTexture(t,3553,this._source),g.isConchWebGL?t.texImage2DEx(s.premulAlpha,3553,0,6408,6408,5121,this._imgData):(s.premulAlpha&&t.pixelStorei(37441,!0),t.texImage2D(3553,0,6408,6408,5121,this._imgData),s.premulAlpha&&t.pixelStorei(37441,!1)),t.pixelStorei(37440,0),e&&i&&Ft.bindTexture(t,e,i)},e.texSubImage2D=function(t,e,i){var r=Pt.mainContext,s=Ft.curBindTexTarget,a=Ft.curBindTexValue;Ft.bindTexture(r,3553,this._source),g.isConchWebGL?r.texSubImage2DEx(!0,3553,0,e,i,6408,5121,t._source):(r.pixelStorei(37441,!0),r.texSubImage2D(3553,0,e,i,6408,5121,t._source),r.pixelStorei(37441,!1)),s&&a&&Ft.bindTexture(r,s,a)},e.toBase64=function(t,e,i){var r=null;this._canvas&&(r=this._canvas.toDataURL(t,e)),i.call(this,r)},r(0,e,"context",function(){return this._ctx}),r(0,e,"source",function(){return this.alwaysChange&&this.reloadCanvasData(),this._source}),r(0,e,"asBitmap",null,function(t){this._ctx&&(this._ctx.asBitmap=t)}),s._createContext=null,s.premulAlpha=!1,s}(),_e=function(t){function a(t,e){this.CborderSize=12,a.__super.call(this),this.char=t,this.isSpace=" "===t,this.xs=e.scaleX,this.ys=e.scaleY,this.font=e.font.toString(),this.fontSize=e.font.size,this.fillColor=e.fillColor,this.borderColor=e.borderColor,this.lineWidth=e.lineWidth,this.underLine=e.underLine;var i,r=g.isConchApp;r?((i=ConchTextCanvas)._source=ConchTextCanvas,i._source.canvas=ConchTextCanvas):i=f.canvas.source,this.canvas=i,this._enableMerageInAtlas=!0,this._ctx=r?i:this.canvas.getContext("2d",void 0);var s=B.measureText(this.char,this.font);this.cw=s.width*this.xs,this.ch=(s.height||this.fontSize)*this.ys,this.onresize(this.cw+2*this.CborderSize,this.ch+2*this.CborderSize),this.texture=new F(this)}c(a,"laya.webgl.resource.WebGLCharImage",i);var e=a.prototype;return T.imps(e,{"laya.webgl.resource.IMergeAtlasBitmap":!0}),e.active=function(){this.texture.active()},e.recreateResource=function(){var t=g.isConchApp;if(this.onresize(this.cw+2*this.CborderSize,this.ch+2*this.CborderSize),this.canvas&&(this.canvas.height=this._h,this.canvas.width=this._w),t){var e=this.fontSize;1==this.xs&&1==this.ys||(e=parseInt(e*(this.xs>this.ys?this.xs:this.ys)+""));var i="normal 100 "+this.font;i=i.replace(a._fontSizeReg,e),this.borderColor&&(i+=" 1 "+this.borderColor),this._ctx.font=i,this._ctx.textBaseline="top",this._ctx.fillStyle=this.fillColor,this._ctx.fillText(this.char,this.CborderSize,this.CborderSize,null,null,null)}else{if(this._ctx.save(),this._ctx.lineJoin="round",this._ctx.clearRect(0,0,this.cw+2*this.CborderSize,this.ch+2*this.CborderSize),this._ctx.font=this.font,D.RightToLeft&&(this._ctx.textAlign="end"),this._ctx.textBaseline="top",1!=this.xs||1!=this.ys?this._ctx.setTransform(this.xs,0,0,this.ys,this.CborderSize,this.CborderSize):this._ctx.setTransform(1,0,0,1,this.CborderSize,this.CborderSize),this.fillColor&&this.borderColor?(this._ctx.strokeStyle=this.borderColor,this._ctx.lineWidth=this.lineWidth,this._ctx.strokeText(this.char,0,0,null,null,0,null),this._ctx.fillStyle=this.fillColor,this._ctx.fillText(this.char,0,0,null,null,null)):-1===this.lineWidth?(this._ctx.fillStyle=this.fillColor?this.fillColor:"white",this._ctx.fillText(this.char,0,0,null,null,null)):(this._ctx.strokeStyle=this.borderColor?this.borderColor:"white",this._ctx.lineWidth=this.lineWidth,this._ctx.strokeText(this.char,0,0,null,null,0,null)),this.underLine){this._ctx.lineWidth=1,this._ctx.strokeStyle=this.fillColor,this._ctx.beginPath(),this._ctx.moveTo(0,this.fontSize+1);var r=this._ctx.measureText(this.char).width+1;this._ctx.lineTo(r,this.fontSize+1),this._ctx.stroke()}this._ctx.restore()}this.borderSize=this.CborderSize,this.completeCreate()},e.onresize=function(t,e){this._w=t,this._h=e,this._allowMerageInAtlas=!0},e.clearAtlasSource=function(){},r(0,e,"allowMerageInAtlas",function(){return this._allowMerageInAtlas}),r(0,e,"atlasSource",function(){return this.canvas}),r(0,e,"atlasImgData",function(){return!a.canUseCanvas&&this._ctx.getImageData?this._ctx.getImageData(0,0,this._w,this._h):null}),r(0,e,"enableMerageInAtlas",function(){return this._enableMerageInAtlas},function(t){this._enableMerageInAtlas=t}),a.createOneChar=function(t,e){return new a(t,e)},a.canUseCanvas=!0,a._fontSizeReg=new RegExp("\\d+(?=px)","g"),a}(),ce=function(t){function o(t,e,i,r,s,a,n,h,l){void 0===i&&(i=6408),void 0===r&&(r=5121),void 0===s&&(s=34041),void 0===a&&(a=!1),void 0===n&&(n=!1),void 0===h&&(h=-1),void 0===l&&(l=1),o.__super.call(this),this._w=t,this._h=e,this._surfaceFormat=i,this._surfaceType=r,this._depthStencilFormat=s,g.isConchWebGL&&34041===this._depthStencilFormat&&(this._depthStencilFormat=33189),this._mipMap=a,this._repeat=n,this._minFifter=h,this._magFifter=l}c(o,"laya.webgl.resource.WebGLRenderTarget",i);var e=o.prototype;return e.recreateResource=function(){var t=Pt.mainContext;this._frameBuffer||(this._frameBuffer=t.createFramebuffer()),this._source||(this._source=t.createTexture());var e=Ft.curBindTexTarget,i=Ft.curBindTexValue;Ft.bindTexture(t,3553,this._source),t.texImage2D(3553,0,6408,this._w,this._h,0,this._surfaceFormat,this._surfaceType,null);var r=this._minFifter,s=this._magFifter,a=this._repeat?10497:33071,n=l.isPOT(this._w,this._h);if(n?(this._mipMap?-1!==r||(r=9987):-1!==r||(r=9729),-1!==s||(s=9729),t.texParameteri(3553,10241,r),t.texParameteri(3553,10240,s),t.texParameteri(3553,10242,a),t.texParameteri(3553,10243,a),this._mipMap&&t.generateMipmap(3553)):(-1!==r||(r=9729),-1!==s||(s=9729),t.texParameteri(3553,10241,r),t.texParameteri(3553,10240,s),t.texParameteri(3553,10242,33071),t.texParameteri(3553,10243,33071)),t.bindFramebuffer(36160,this._frameBuffer),t.framebufferTexture2D(36160,36064,3553,this._source,0),this._depthStencilFormat)switch(this._depthStencilBuffer||(this._depthStencilBuffer=t.createRenderbuffer()),t.bindRenderbuffer(36161,this._depthStencilBuffer),t.renderbufferStorage(36161,this._depthStencilFormat,this._w,this._h),this._depthStencilFormat){case 33189:t.framebufferRenderbuffer(36160,36096,36161,this._depthStencilBuffer);break;case 36168:t.framebufferRenderbuffer(36160,36128,36161,this._depthStencilBuffer);break;case 34041:t.framebufferRenderbuffer(36160,33306,36161,this._depthStencilBuffer)}t.bindFramebuffer(36160,null),e&&i&&Ft.bindTexture(t,e,i),t.bindRenderbuffer(36161,null),n&&this._mipMap?this.memorySize=this._w*this._h*4*(1+1/3):this.memorySize=this._w*this._h*4,this.completeCreate()},e.disposeResource=function(){this._frameBuffer&&(Pt.mainContext.deleteTexture(this._source),Pt.mainContext.deleteFramebuffer(this._frameBuffer),Pt.mainContext.deleteRenderbuffer(this._depthStencilBuffer),this._source=null,this._frameBuffer=null,this._depthStencilBuffer=null,this.memorySize=0)},r(0,e,"depthStencilBuffer",function(){return this._depthStencilBuffer}),r(0,e,"frameBuffer",function(){return this._frameBuffer}),o}(),fe=function(t){function h(t,e,i,r,s,a,n){this.offsetX=0,this.offsetY=0,h.__super.call(this),this.repeat=!0,this.mipmap=!1,this.minFifter=-1,this.magFifter=-1,this.atlasImage=a,this.canvas=t,this._ctx=t.getContext("2d",void 0),this._w=r,this._h=s,this.offsetX=e,this.offsetY=i,this.src=n,this._enableMerageInAtlas=!0,H.enabled&&this._w<H.atlasLimitWidth&&this._h<H.atlasLimitHeight?this._allowMerageInAtlas=!0:this._allowMerageInAtlas=!1}c(h,"laya.webgl.resource.WebGLSubImage",i);var e=h.prototype;return T.imps(e,{"laya.webgl.resource.IMergeAtlasBitmap":!0}),e.size=function(t,e){this._w=t,this._h=e,this._ctx&&this._ctx.size(t,e),this.canvas&&(this.canvas.height=e,this.canvas.width=t)},e.recreateResource=function(){this.size(this._w,this._h),this._ctx.drawImage(this.atlasImage,this.offsetX,this.offsetY,this._w,this._h,0,0,this._w,this._h),this._allowMerageInAtlas&&this._enableMerageInAtlas?this.memorySize=0:this.createWebGlTexture(),this.completeCreate()},e.createWebGlTexture=function(){var t=Pt.mainContext;if(!this.canvas)throw"create GLTextur err:no data:"+this.canvas;var e=this._source=t.createTexture(),i=Ft.curBindTexTarget,r=Ft.curBindTexValue;Ft.bindTexture(t,3553,e),g.isConchWebGL?t.texImage2DEx(!0,3553,0,6408,6408,5121,this.canvas):(t.pixelStorei(37441,!0),t.texImage2D(3553,0,6408,6408,5121,this.canvas),t.pixelStorei(37441,!1));var s=this.minFifter,a=this.magFifter,n=this.repeat?10497:33071,h=l.isPOT(this.width,this.height);h?(this.mipmap?-1!==s||(s=9987):-1!==s||(s=9729),-1!==a||(a=9729),t.texParameteri(3553,10240,a),t.texParameteri(3553,10241,s),t.texParameteri(3553,10242,n),t.texParameteri(3553,10243,n),this.mipmap&&t.generateMipmap(3553)):(-1!==s||(s=9729),-1!==a||(a=9729),t.texParameteri(3553,10241,s),t.texParameteri(3553,10240,a),t.texParameteri(3553,10242,33071),t.texParameteri(3553,10243,33071)),i&&r&&Ft.bindTexture(t,i,r),this.canvas=null,h&&this.mipmap?this.memorySize=this._w*this._h*4*(1+1/3):this.memorySize=this._w*this._h*4},e.disposeResource=function(){H.enabled&&this._allowMerageInAtlas||!this._source||(Pt.mainContext.deleteTexture(this._source),this._source=null,this.memorySize=0)},e.clearAtlasSource=function(){},r(0,e,"allowMerageInAtlas",function(){return this._allowMerageInAtlas}),r(0,e,"atlasSource",function(){return this.canvas}),r(0,e,"enableMerageInAtlas",function(){return this._allowMerageInAtlas},function(t){this._allowMerageInAtlas=t}),h}(),de=function(t){function o(t,e,i,r){if(this._curActTexIndex=0,this.tag={},this._program=null,this._params=null,this._paramsMap={},this._offset=0,o.__super.call(this),!t||!e)throw"Shader Error";this._id=++o._count,this._vs=t,this._ps=e,this._nameMap=r||{},null!=i&&(o.sharders[i]=this)}c(o,"laya.webgl.shader.Shader",jt);var e=o.prototype;return e.recreateResource=function(){this._compile(),this.completeCreate(),this.memorySize=0},e.disposeResource=function(){Pt.mainContext.deleteShader(this._vshader),Pt.mainContext.deleteShader(this._pshader),Pt.mainContext.deleteProgram(this._program),this._vshader=this._pshader=this._program=null,this._params=null,this._paramsMap={},this.memorySize=0,this._curActTexIndex=0},e._compile=function(){if(this._vs&&this._ps&&!this._params){this._reCompile=!0,this._params=[];var t=[this._vs,this._ps],e=Pt.mainContext;if(this._program=e.createProgram(),this._vshader=o._createShader(e,t[0],35633),this._pshader=o._createShader(e,t[1],35632),e.attachShader(this._program,this._vshader),e.attachShader(this._program,this._pshader),e.linkProgram(this._program),!g.isConchApp&&!e.getProgramParameter(this._program,35714))throw e.getProgramInfoLog(this._program);var i,r,s=0,a=0;for(a=g.isConchApp?e.getProgramParameterEx(this._vs,this._ps,"",35721):e.getProgramParameter(this._program,35721),s=0;s<a;s++){var n=null;i={vartype:"attribute",glfun:null,ivartype:0,attrib:n=g.isConchApp?e.getActiveAttribEx(this._vs,this._ps,"",s):e.getActiveAttrib(this._program,s),location:e.getAttribLocation(this._program,n.name),name:n.name,type:n.type,isArray:!1,isSame:!1,preValue:null,indexOfParams:0},this._params.push(i)}var h=0;for(h=g.isConchApp?e.getProgramParameterEx(this._vs,this._ps,"",35718):e.getProgramParameter(this._program,35718),s=0;s<h;s++){var l=null;l=g.isConchApp?e.getActiveUniformEx(this._vs,this._ps,"",s):e.getActiveUniform(this._program,s),0<(i={vartype:"uniform",glfun:null,ivartype:1,attrib:n,location:e.getUniformLocation(this._program,l.name),name:l.name,type:l.type,isArray:!1,isSame:!1,preValue:null,indexOfParams:0}).name.indexOf("[0]")&&(i.name=i.name.substr(0,i.name.length-3),i.isArray=!0,i.location=e.getUniformLocation(this._program,i.name)),this._params.push(i)}for(s=0,r=this._params.length;s<r;s++)if((i=this._params[s]).indexOfParams=s,i.index=1,i.value=[i.location,null],i.codename=i.name,i.name=this._nameMap[i.codename]?this._nameMap[i.codename]:i.codename,(this._paramsMap[i.name]=i)._this=this,i.uploadedValue=[],"attribute"!==i.vartype)switch(i.type){case 5124:i.fun=i.isArray?this._uniform1iv:this._uniform1i;break;case 5126:i.fun=i.isArray?this._uniform1fv:this._uniform1f;break;case 35664:i.fun=i.isArray?this._uniform_vec2v:this._uniform_vec2;break;case 35665:i.fun=i.isArray?this._uniform_vec3v:this._uniform_vec3;break;case 35666:i.fun=i.isArray?this._uniform_vec4v:this._uniform_vec4;break;case 35678:i.fun=this._uniform_sampler2D;break;case 35680:i.fun=this._uniform_samplerCube;break;case 35676:i.glfun=e.uniformMatrix4fv,i.fun=this._uniformMatrix4fv;break;case 35670:i.fun=this._uniform1i;break;case 35674:case 35675:default:throw new Error("compile shader err!")}else i.fun=this._attribute}},e.getUniform=function(t){return this._paramsMap[t]},e._attribute=function(t,e){var i=Pt.mainContext,r=te._enableAtributes,s=t.location;return r[s]||i.enableVertexAttribArray(s),i.vertexAttribPointer(s,e[0],e[1],e[2],e[3],e[4]+this._offset),r[s]=te._bindVertexBuffer,1},e._uniform1f=function(t,e){var i=t.uploadedValue;return i[0]!==e?(Pt.mainContext.uniform1f(t.location,i[0]=e),1):0},e._uniform1fv=function(t,e){if(e.length<4){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]||i[3]!==e[3]?(Pt.mainContext.uniform1fv(t.location,e),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],1):0}return Pt.mainContext.uniform1fv(t.location,e),1},e._uniform_vec2=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]?(Pt.mainContext.uniform2f(t.location,i[0]=e[0],i[1]=e[1]),1):0},e._uniform_vec2v=function(t,e){if(e.length<2){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]||i[3]!==e[3]?(Pt.mainContext.uniform2fv(t.location,e),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3],1):0}return Pt.mainContext.uniform2fv(t.location,e),1},e._uniform_vec3=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]?(Pt.mainContext.uniform3f(t.location,i[0]=e[0],i[1]=e[1],i[2]=e[2]),1):0},e._uniform_vec3v=function(t,e){return Pt.mainContext.uniform3fv(t.location,e),1},e._uniform_vec4=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]||i[3]!==e[3]?(Pt.mainContext.uniform4f(t.location,i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3]),1):0},e._uniform_vec4v=function(t,e){return Pt.mainContext.uniform4fv(t.location,e),1},e._uniformMatrix2fv=function(t,e){return Pt.mainContext.uniformMatrix2fv(t.location,!1,e),1},e._uniformMatrix3fv=function(t,e){return Pt.mainContext.uniformMatrix3fv(t.location,!1,e),1},e._uniformMatrix4fv=function(t,e){return Pt.mainContext.uniformMatrix4fv(t.location,!1,e),1},e._uniform1i=function(t,e){var i=t.uploadedValue;return i[0]!==e?(Pt.mainContext.uniform1i(t.location,i[0]=e),1):0},e._uniform1iv=function(t,e){return Pt.mainContext.uniform1iv(t.location,e),1},e._uniform_ivec2=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]?(Pt.mainContext.uniform2i(t.location,i[0]=e[0],i[1]=e[1]),1):0},e._uniform_ivec2v=function(t,e){return Pt.mainContext.uniform2iv(t.location,e),1},e._uniform_vec3i=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]?(Pt.mainContext.uniform3i(t.location,i[0]=e[0],i[1]=e[1],i[2]=e[2]),1):0},e._uniform_vec3vi=function(t,e){return Pt.mainContext.uniform3iv(t.location,e),1},e._uniform_vec4i=function(t,e){var i=t.uploadedValue;return i[0]!==e[0]||i[1]!==e[1]||i[2]!==e[2]||i[3]!==e[3]?(Pt.mainContext.uniform4i(t.location,i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=e[3]),1):0},e._uniform_vec4vi=function(t,e){return Pt.mainContext.uniform4iv(t.location,e),1},e._uniform_sampler2D=function(t,e){var i=Pt.mainContext,r=t.uploadedValue;return null==r[0]?(r[0]=this._curActTexIndex,i.uniform1i(t.location,this._curActTexIndex),i.activeTexture(o._TEXTURES[this._curActTexIndex]),Ft.bindTexture(i,3553,e),this._curActTexIndex++,1):(i.activeTexture(o._TEXTURES[r[0]]),Ft.bindTexture(i,3553,e),0)},e._uniform_samplerCube=function(t,e){var i=Pt.mainContext,r=t.uploadedValue;return null==r[0]?(r[0]=this._curActTexIndex,i.uniform1i(t.location,this._curActTexIndex),i.activeTexture(o._TEXTURES[this._curActTexIndex]),Ft.bindTexture(i,34067,e),this._curActTexIndex++,1):(i.activeTexture(o._TEXTURES[r[0]]),Ft.bindTexture(i,34067,e),0)},e._noSetValue=function(t){console.log("no....:"+t.name)},e.uploadOne=function(t,e){this.activeResource(),Ft.UseProgram(this._program);var i=this._paramsMap[t];i.fun.call(this,i,e)},e.uploadTexture2D=function(t){C.shaderCall++;var e=Pt.mainContext;e.activeTexture(33984),Ft.bindTexture(e,3553,t)},e.upload=function(t,e){jt.activeShader=jt.bindShader=this,this._lastUseFrameCount===C.loopCount||this.activeResource(),Ft.UseProgram(this._program),this._reCompile?(e=this._params,this._reCompile=!1):e=e||this._params;Pt.mainContext;for(var i,r,s=e.length,a=0,n=0;n<s;n++)null!==(r=t[(i=e[n]).name])&&(a+=i.fun.call(this,i,r));C.shaderCall+=a},e.uploadArray=function(t,e,i){jt.activeShader=this,(jt.bindShader=this).activeResource(),Ft.UseProgram(this._program);this._params;for(var r,s,a=0,n=e-2;0<=n;n-=2)(s=this._paramsMap[t[n]])&&null!=(r=t[n+1])&&(i&&i[s.name]&&i[s.name].bind(),a+=s.fun.call(this,s,r));C.shaderCall+=a},e.getParams=function(){return this._params},o.getShader=function(t){return o.sharders[t]},o.create=function(t,e,i,r){return new o(t,e,i,r)},o.withCompile=function(t,e,i,r){if(i&&o.sharders[i])return o.sharders[i];var s=o._preCompileShader[2e-4*t];if(!s)throw new Error("withCompile shader err!"+t);return s.createShader(e,i,r)},o.withCompile2D=function(t,e,i,r,s){if(r&&o.sharders[r])return o.sharders[r];var a=o._preCompileShader[2e-4*t+e];if(!a)throw new Error("withCompile shader err!"+t+" "+e);return a.createShader(i,r,s)},o.addInclude=function(t,e){Lt.addInclude(t,e)},o.preCompile=function(t,e,i,r){var s=2e-4*t;o._preCompileShader[s]=new Lt(s,e,i,r)},o.preCompile2D=function(t,e,i,r,s){var a=2e-4*t+e;o._preCompileShader[a]=new Lt(a,i,r,s)},o._createShader=function(t,e,i){var r=t.createShader(i);return t.shaderSource(r,e),t.compileShader(r),r},o._TEXTURES=[33984,33985,33986,33987,33988,33989,33990,,33991,33992],o._count=0,o._preCompileShader={},o.SHADERNAME2ID=2e-4,o.sharders=((o.sharders=[]).length=32,o.sharders),n(o,["nameKey",function(){return this.nameKey=new L}]),o}(),me=function(t){function e(){this._maxsize=0,this._upload=!0,this._uploadSize=0,e.__super.call(this),this.lock=!0}c(e,"laya.webgl.utils.Buffer2D",t);var i=e.prototype;return i.needSize=function(t){var e=this._byteLength;if(t){var i=this._byteLength+t;i<=this._buffer.byteLength||this._resizeBuffer(i<<1,!0),this._byteLength=i}return e},i._bufferData=function(){this._maxsize=Math.max(this._maxsize,this._byteLength),C.loopCount%30==0&&(this._buffer.byteLength>this._maxsize+64&&(this.memorySize=this._buffer.byteLength,this._buffer=this._buffer.slice(0,this._maxsize+64),this._checkArrayUse()),this._maxsize=this._byteLength),this._uploadSize<this._buffer.byteLength&&(this._uploadSize=this._buffer.byteLength,te._gl.bufferData(this._bufferType,this._uploadSize,this._bufferUsage),this.memorySize=this._uploadSize),te._gl.bufferSubData(this._bufferType,0,this._buffer)},i._bufferSubData=function(t,e,i){if(void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),this._maxsize=Math.max(this._maxsize,this._byteLength),C.loopCount%30==0&&(this._buffer.byteLength>this._maxsize+64&&(this.memorySize=this._buffer.byteLength,this._buffer=this._buffer.slice(0,this._maxsize+64),this._checkArrayUse()),this._maxsize=this._byteLength),this._uploadSize<this._buffer.byteLength&&(this._uploadSize=this._buffer.byteLength,te._gl.bufferData(this._bufferType,this._uploadSize,this._bufferUsage),this.memorySize=this._uploadSize),e||i){var r=this._buffer.slice(e,i);te._gl.bufferSubData(this._bufferType,t,r)}else te._gl.bufferSubData(this._bufferType,t,this._buffer)},i._checkArrayUse=function(){},i._bind_upload=function(){return!!this._upload&&(this._upload=!1,this._bind(),this._bufferData(),!0)},i._bind_subUpload=function(t,e,i){return void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0),!!this._upload&&(this._upload=!1,this._bind(),this._bufferSubData(t,e,i),!0)},i._resizeBuffer=function(t,e){if(t<this._buffer.byteLength)return this;if(this.memorySize=t,e&&this._buffer&&0<this._buffer.byteLength){var i=new ArrayBuffer(t);new Uint8Array(i).set(new Uint8Array(this._buffer),0),this._buffer=i}else this._buffer=new ArrayBuffer(t);return this._checkArrayUse(),this._upload=!0,this},i.append=function(t){this._upload=!0;var e,i;e=t.byteLength,t instanceof Uint8Array?(this._resizeBuffer(this._byteLength+e,!0),i=new Uint8Array(this._buffer,this._byteLength)):t instanceof Uint16Array?(this._resizeBuffer(this._byteLength+e,!0),i=new Uint16Array(this._buffer,this._byteLength)):t instanceof Float32Array&&(this._resizeBuffer(this._byteLength+e,!0),i=new Float32Array(this._buffer,this._byteLength)),i.set(t,0),this._byteLength+=e,this._checkArrayUse()},i.appendU16Array=function(t,e){this._resizeBuffer(this._byteLength+2*e,!0);for(var i=new Uint16Array(this._buffer,this._byteLength,e),r=0;r<e;r++)i[r]=t[r];this._byteLength+=2*e,this._checkArrayUse()},i.appendEx=function(t,e){this._upload=!0;var i;i=t.byteLength,this._resizeBuffer(this._byteLength+i,!0),new e(this._buffer,this._byteLength).set(t,0),this._byteLength+=i,this._checkArrayUse()},i.appendEx2=function(t,e,i,r){void 0===r&&(r=1),this._upload=!0;var s,a;s=i*r,this._resizeBuffer(this._byteLength+s,!0),a=new e(this._buffer,this._byteLength);var n=0;for(n=0;n<i;n++)a[n]=t[n];this._byteLength+=s,this._checkArrayUse()},i.getBuffer=function(){return this._buffer},i.setNeedUpload=function(){this._upload=!0},i.getNeedUpload=function(){return this._upload},i.upload=function(){var t=this._bind_upload();return te._gl.bindBuffer(this._bufferType,null),te._bindActive[this._bufferType]=null,jt.activeShader=null,t},i.subUpload=function(t,e,i){void 0===t&&(t=0),void 0===e&&(e=0),void 0===i&&(i=0);var r=this._bind_subUpload();return te._gl.bindBuffer(this._bufferType,null),te._bindActive[this._bufferType]=null,jt.activeShader=null,r},i.disposeResource=function(){t.prototype.disposeResource.call(this),this._upload=!0,this._uploadSize=0},i.clear=function(){this._byteLength=0,this._upload=!0},r(0,i,"bufferLength",function(){return this._buffer.byteLength}),r(0,i,"byteLength",null,function(t){this._byteLength!==t&&(t<=this._buffer.byteLength||this._resizeBuffer(2*t+256,!0),this._byteLength=t)}),e.__int__=function(t){ve.QuadrangleIB=ve.create(35044),St.fillIBQuadrangle(ve.QuadrangleIB,16)},e.FLOAT32=4,e.SHORT=2,e}(te),pe=(function(e){function i(t){this.u_blurX=!1,this.u_color=null,this.u_offset=null,this.u_strength=NaN,this.u_texW=0,this.u_texH=0,i.__super.call(this,9)}c(i,"laya.webgl.shader.d2.value.GlowSV",e);var t=i.prototype;t.setValue=function(t){e.prototype.setValue.call(this,t)},t.clear=function(){e.prototype.clear.call(this)}}(ne),function(t){function e(t){e.__super.call(this,64),this.defines.add(64)}c(e,"laya.webgl.shader.d2.value.TextSV",t);var i=e.prototype;return i.release=function(){(e.pool[e._length++]=this).clear()},i.clear=function(){t.prototype.clear.call(this)},e.create=function(){return e._length?e.pool[--e._length]:new e(null)},e.pool=[],e._length=0,e}(ne)),ge=function(t){function s(t,e,i,r){this._params2dQuick1=null,this._params2dQuick2=null,this._shaderValueWidth=NaN,this._shaderValueHeight=NaN,s.__super.call(this,t,e,i,r)}c(s,"laya.webgl.shader.d2.Shader2X",t);var e=s.prototype;return e.upload2dQuick1=function(t){this.upload(t,this._params2dQuick1||this._make2dQuick1())},e._make2dQuick1=function(){if(!this._params2dQuick1){this.activeResource(),this._params2dQuick1=[];for(var t,e=this._params,i=0,r=e.length;i<r;i++)t=e[i],(g.isFlash||"size"!==t.name&&"position"!==t.name&&"texcoord"!==t.name)&&this._params2dQuick1.push(t)}return this._params2dQuick1},e.disposeResource=function(){t.prototype.disposeResource.call(this),this._params2dQuick1=null,this._params2dQuick2=null},e.upload2dQuick2=function(t){this.upload(t,this._params2dQuick2||this._make2dQuick2())},e._make2dQuick2=function(){if(!this._params2dQuick2){this.activeResource(),this._params2dQuick2=[];for(var t,e=this._params,i=0,r=e.length;i<r;i++)t=e[i],!g.isFlash&&"size"===t.name||this._params2dQuick2.push(t)}return this._params2dQuick2},s.create=function(t,e,i,r){return new s(t,e,i,r)},s}(de),ve=function(t){function e(t){this._uint8Array=null,this._uint16Array=null,void 0===t&&(t=35044),e.__super.call(this),this._bufferUsage=t,this._bufferType=34963,g.isFlash||(this._buffer=new ArrayBuffer(8))}c(e,"laya.webgl.utils.IndexBuffer2D",me);var i=e.prototype;return i._checkArrayUse=function(){this._uint8Array&&(this._uint8Array=new Uint8Array(this._buffer)),this._uint16Array&&(this._uint16Array=new Uint16Array(this._buffer))},i.getUint8Array=function(){return this._uint8Array||(this._uint8Array=new Uint8Array(this._buffer))},i.getUint16Array=function(){return this._uint16Array||(this._uint16Array=new Uint16Array(this._buffer))},i.destory=function(){this._uint16Array=null,this._uint8Array=null,this._buffer=null},e.QuadrangleIB=null,e.create=function(t){return void 0===t&&(t=35044),new e(t)},e}(),xe=function(t){function i(t,e){this._floatArray32=null,this._vertexStride=0,i.__super.call(this),this._vertexStride=t,this._bufferUsage=e,this._bufferType=34962,g.isFlash||(this._buffer=new ArrayBuffer(8)),this.getFloat32Array()}c(i,"laya.webgl.utils.VertexBuffer2D",t);var e=i.prototype;return e.getFloat32Array=function(){return this._floatArray32||(this._floatArray32=new Float32Array(this._buffer))},e.bind=function(t){t&&t._bind(),this._bind()},e.insertData=function(t,e){this.getFloat32Array().set(t,e),this._upload=!0},e.bind_upload=function(t){t._bind_upload()||t._bind(),this._bind_upload()||this._bind()},e._checkArrayUse=function(){this._floatArray32&&(this._floatArray32=new Float32Array(this._buffer))},e.disposeResource=function(){t.prototype.disposeResource.call(this)},e.destory=function(){this._byteLength=0,this._upload=!0,this._buffer=null,this._floatArray32=null},r(0,e,"vertexStride",function(){return this._vertexStride}),i.create=function(t,e){return void 0===e&&(e=35048),new i(t,e)},i}(me),be=function(t){function a(t,e,i,r){if(this._format=0,this._mipmap=!1,this._allowMerageInAtlas=!1,this._enableMerageInAtlas=!1,this.repeat=!1,this._image=null,this.minFifter=0,void(this.magFifter=0)===i&&(i=6408),void 0===r&&(r=!0),a.__super.call(this,t,e),this._format=i,this._mipmap=r,this.repeat=!1,this.minFifter=-1,this.magFifter=-1,"string"==typeof t)this._url=t,this._src=t,this._image=new f.window.Image,e&&(e.onload&&(this.onload=e.onload),e.onerror&&(this.onerror=e.onerror),e.onCreate&&e.onCreate(this)),this._image.crossOrigin=t&&0==t.indexOf("data:")?null:"",t&&(this._image.src=t);else if(t instanceof ArrayBuffer){this._src=e,this._url=this._src;var s=new h(t);s.readUTFBytes(4),s.readUTFBytes(2),s.getInt16();s.endian="bigEndian",this._w=s.getInt16(),this._h=s.getInt16();s.getInt16(),s.getInt16();this._image=new Uint8Array(t,s.pos),this._format=Pt.compressEtc1.COMPRESSED_RGB_ETC1_WEBGL,H.enabled&&this._w<H.atlasLimitWidth&&this._h<H.atlasLimitHeight?this._allowMerageInAtlas=!0:this._allowMerageInAtlas=!1}else this._src=e,this._url=this._src,this._image=t.source||t,this.onresize();this._$5__enableMerageInAtlas=!0}c(a,"laya.webgl.resource.WebGLImage",m);var e=a.prototype;return T.imps(e,{"laya.webgl.resource.IMergeAtlasBitmap":!0}),e._init_=function(t,e){},e._createWebGlTexture=function(){if(!this._image)throw"create GLTextur err:no data:"+this._image;var t=Pt.mainContext,e=this._source=t.createTexture(),i=Ft.curBindTexTarget,r=Ft.curBindTexValue;if(Ft.bindTexture(t,3553,e),g.isConchWebGL)switch(this._format){case 6408:t.texImage2DEx(!0,3553,0,this._format,6408,5121,this._image);break;case Pt.compressEtc1.COMPRESSED_RGB_ETC1_WEBGL:t.compressedTexImage2D(3553,0,this._format,this._w,this._h,0,this._image)}else{switch(t.pixelStorei(37441,!0),this._format){case 6408:t.texImage2D(3553,0,this._format,6408,5121,this._image);break;case Pt.compressEtc1.COMPRESSED_RGB_ETC1_WEBGL:t.compressedTexImage2D(3553,0,this._format,this._w,this._h,0,this._image)}t.pixelStorei(37441,!1)}var s=this.minFifter,a=this.magFifter,n=this.repeat?10497:33071,h=l.isPOT(this._w,this._h);h?(this.mipmap?-1!==s||(s=9987):-1!==s||(s=9729),-1!==a||(a=9729),t.texParameteri(3553,10241,s),t.texParameteri(3553,10240,a),t.texParameteri(3553,10242,n),t.texParameteri(3553,10243,n),this.mipmap&&t.generateMipmap(3553)):(-1!==s||(s=9729),-1!==a||(a=9729),t.texParameteri(3553,10241,s),t.texParameteri(3553,10240,a),t.texParameteri(3553,10242,33071),t.texParameteri(3553,10243,33071)),i&&r&&Ft.bindTexture(t,i,r),this._image.onload=null,this._image=null,h&&this.mipmap?this.memorySize=this._w*this._h*4*(1+1/3):this.memorySize=this._w*this._h*4,this._recreateLock=!1},e.recreateResource=function(){var t=this;if(null!=this._src&&""!==this._src)if(this._needReleaseAgain=!1,this._image){if(this._recreateLock)return;this._allowMerageInAtlas&&this._$5__enableMerageInAtlas?(this.memorySize=0,this._recreateLock=!1):this._createWebGlTexture(),this.completeCreate()}else{this._recreateLock=!0;var e=this;this._image=new f.window.Image,this._image.crossOrigin=0==this._src.indexOf("data:")?null:"",this._image.onload=function(){if(e._needReleaseAgain)return e._needReleaseAgain=!1,e._image.onload=null,void(e._image=null);e._allowMerageInAtlas&&e._enableMerageInAtlas?(t.memorySize=0,t._recreateLock=!1):e._createWebGlTexture(),e.completeCreate()},this._image.src=this._src}},e.disposeResource=function(){this._recreateLock&&(this._needReleaseAgain=!0),this._source&&(Pt.mainContext.deleteTexture(this._source),this._source=null,this._image=null,this.memorySize=0)},e.onresize=function(){this._w=this._image.width,this._h=this._image.height,H.enabled&&this._w<H.atlasLimitWidth&&this._h<H.atlasLimitHeight?this._allowMerageInAtlas=!0:this._allowMerageInAtlas=!1},e.clearAtlasSource=function(){this._image=null},r(0,e,"format",function(){return this._format}),r(0,e,"enableMerageInAtlas",function(){return this._$5__enableMerageInAtlas},function(t){this._$5__enableMerageInAtlas=t}),r(0,e,"mipmap",function(){return this._mipmap}),r(0,e,"allowMerageInAtlas",function(){return this._allowMerageInAtlas}),r(0,e,"atlasSource",function(){return this._image}),r(0,e,"onload",null,function(t){var e=this;this._onload=t,this._image&&(this._image.onload=null!=this._onload?function(){e.onresize(),e._onload()}:null)}),r(0,e,"onerror",null,function(t){var e=this;this._onerror=t,this._image&&(this._image.onerror=null!=this._onerror?function(){e._onerror()}:null)}),a}();T.__init([bt,k,Ot,Lt])}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(t,e){"use strict";for(var i in Object.defineProperty(e,"__esModule",{value:!0}),Laya){var r=Laya[i];r&&r.__isclass&&(e[i]=r)}});
!function(t,e,st){st.un,st.uns;var i=st.static,n=st.class,a=st.getset,f=st.__newvec,h=laya.maths.Bezier,c=laya.utils.Browser,wt=laya.utils.Byte,s=(laya.events.Event,laya.events.EventDispatcher),r=laya.display.Graphics,l=laya.resource.HTMLCanvas,o=laya.utils.Handler,u=laya.net.Loader,d=laya.maths.MathUtil,St=laya.maths.Matrix,_=(laya.display.Node,laya.maths.Point,laya.maths.Rectangle),m=laya.renders.Render,p=(laya.renders.RenderContext,laya.resource.Resource),y=laya.utils.RunDriver,rt=laya.display.Sprite,x=laya.utils.Stat,Ft=laya.resource.Texture,g=(laya.net.URL,laya.utils.Utils),S=(n(v,"laya.ani.AnimationContent"),v);function v(){this.nodes=null,this.name=null,this.playTime=NaN,this.bone3DMap=null,this.totalKeyframeDatasLength=0}var F=(n(D,"laya.ani.AnimationNodeContent"),D);function D(){this.name=null,this.parentIndex=0,this.parent=null,this.keyframeWidth=0,this.lerpType=0,this.interpolationMethod=null,this.childs=null,this.keyFrame=null,this.playTime=NaN,this.extenData=null,this.dataOffset=0}var M=(n(I,"laya.ani.AnimationParser01"),I.parse=function(t,e){var i=e.__getBuffer(),a=0,s=0,r=0,n=0,h=0,l=0,o=0,u=e.readUTFString();t._aniClassName=u;var c,d=e.readUTFString().split("\n"),_=e.getUint8(),p=e.getUint32(),f=e.getUint32();0<p&&(c=i.slice(p,f));var m=new wt(c);for(0<f&&(t._publicExtData=i.slice(f,i.byteLength)),t._useParent=!!e.getUint8(),t._anis.length=_,a=0;a<_;a++){var y=t._anis[a]=new S;y.nodes=new Array;var x=y.name=d[e.getUint16()];t._aniMap[x]=a,y.bone3DMap={},y.playTime=e.getFloat32();var g=y.nodes.length=e.getUint8();for(s=y.totalKeyframeDatasLength=0;s<g;s++){var v=y.nodes[s]=new F;v.childs=[];var D=e.getInt16();0<=D&&(v.name=d[D],y.bone3DMap[v.name]=s),v.keyFrame=new Array,v.parentIndex=e.getInt16(),-1==v.parentIndex?v.parent=null:v.parent=y.nodes[v.parentIndex],v.lerpType=e.getUint8();var M=e.getUint32();m.pos=M;var I=v.keyframeWidth=m.getUint16();if(y.totalKeyframeDatasLength+=I,0===v.lerpType||1===v.lerpType)for(v.interpolationMethod=[],v.interpolationMethod.length=I,r=0;r<I;r++)v.interpolationMethod[r]=at.interpolation[m.getUint8()];null!=v.parent&&v.parent.childs.push(v);var b=e.getUint16();0<b&&(v.extenData=i.slice(e.pos,e.pos+b),e.pos+=b);var N,T=e.getUint16(),A=0;for(r=0,n=v.keyFrame.length=T;r<n;r++){if((N=v.keyFrame[r]=new Q).duration=e.getFloat32(),N.startTime=A,2===v.lerpType){N.interpolationData=[];var C,w=e.getUint8();switch(C=e.getFloat32()){case 254:for(N.interpolationData.length=I,o=0;o<I;o++)N.interpolationData[o]=0;break;case 255:for(N.interpolationData.length=I,o=0;o<I;o++)N.interpolationData[o]=5;break;default:for(N.interpolationData.push(C),l=1;l<w;l++)N.interpolationData.push(e.getFloat32())}}for(N.data=new Float32Array(I),h=0;h<I;h++)N.data[h]=e.getFloat32(),-1e-8<N.data[h]&&N.data[h]<1e-8&&(N.data[h]=0);A+=N.duration}N.startTime=y.playTime,v.playTime=y.playTime,t._calculateKeyFrame(v,T,I)}}},I);function I(){}var b=(n(N,"laya.ani.AnimationParser02"),N.READ_DATA=function(){N._DATA.offset=N._reader.getUint32(),N._DATA.size=N._reader.getUint32()},N.READ_BLOCK=function(){for(var t=N._BLOCK.count=N._reader.getUint16(),e=N._BLOCK.blockStarts=[],i=N._BLOCK.blockLengths=[],a=0;a<t;a++)e.push(N._reader.getUint32()),i.push(N._reader.getUint32())},N.READ_STRINGS=function(){var t=N._reader.getUint32(),e=N._reader.getUint16(),i=N._reader.pos;N._reader.pos=t+N._DATA.offset;for(var a=0;a<e;a++)N._strings[a]=N._reader.readUTFString();N._reader.pos=i},N.parse=function(t,e){N._templet=t,(N._reader=e).__getBuffer(),N.READ_DATA(),N.READ_BLOCK(),N.READ_STRINGS();for(var i=0,a=N._BLOCK.count;i<a;i++){var s=e.getUint16(),r=N._strings[s],n=N["READ_"+r];if(null==n)throw new Error("model file err,no this function:"+s+" "+r);n.call()}},N.READ_ANIMATIONS=function(){var t=N._reader,e=t.__getBuffer(),i=0,a=0,s=0,r=0,n=t.getUint16(),h=[];for(h.length=n,i=0;i<n;i++)h[i]=at.interpolation[t.getByte()];var l=t.getUint8();for(N._templet._anis.length=l,i=0;i<l;i++){var o=N._templet._anis[i]={};o.nodes=new Array;var u=o.name=N._strings[t.getUint16()];N._templet._aniMap[u]=i,o.bone3DMap={},o.playTime=t.getFloat32();var c=o.nodes.length=t.getInt16();for(a=o.totalKeyframeDatasLength=0;a<c;a++){var d=o.nodes[a]={};d.keyframeWidth=n,d.childs=[];var _=t.getUint16();0<=_&&(d.name=N._strings[_],o.bone3DMap[d.name]=a),d.keyFrame=new Array,d.parentIndex=t.getInt16(),-1==d.parentIndex?d.parent=null:d.parent=o.nodes[d.parentIndex],o.totalKeyframeDatasLength+=n,d.interpolationMethod=h,null!=d.parent&&d.parent.childs.push(d);var p=t.getUint16(),f=null,m=null;for(s=0,r=d.keyFrame.length=p;s<r;s++){(f=d.keyFrame[s]={}).startTime=t.getFloat32(),m&&(m.duration=f.startTime-m.startTime);var y=N._DATA.offset,x=t.getUint32(),g=4*n,v=e.slice(y+x,y+x+g);f.data=new Float32Array(v),m=f}f.duration=0,d.playTime=o.playTime,N._templet._calculateKeyFrame(d,p,n)}}},N._templet=null,N._reader=null,N._strings=[],i(N,["_BLOCK",function(){return this._BLOCK={count:0}},"_DATA",function(){return this._DATA={offset:0,size:0}}]),N);function N(){}n(T,"laya.ani.AnimationState"),T.stopped=0,T.paused=1,T.playing=2;function T(){}var kt=function(){function s(){this.name=null,this.root=null,this.parentBone=null,this.length=10,this.transform=null,this.inheritScale=!0,this.inheritRotation=!0,this.rotation=NaN,this.resultRotation=NaN,this.d=-1,this._tempMatrix=null,this._sprite=null,this.resultTransform=new zt,this.resultMatrix=new St,this._children=[]}n(s,"laya.ani.bone.Bone");var t=s.prototype;return t.setTempMatrix=function(t){this._tempMatrix=t;var e,i=0;for(i=0,e=this._children.length;i<e;i++)this._children[i].setTempMatrix(this._tempMatrix)},t.update=function(t){var e;if(this.rotation=this.transform.skX,t)e=this.resultTransform.getMatrix(),St.mul(e,t,this.resultMatrix),this.resultRotation=this.rotation;else if(this.resultRotation=this.rotation+this.parentBone.resultRotation,this.parentBone)if(this.inheritRotation&&this.inheritScale)e=this.resultTransform.getMatrix(),St.mul(e,this.parentBone.resultMatrix,this.resultMatrix);else{var i=this.parentBone,a=NaN,s=NaN,r=NaN,n=this.parentBone.resultMatrix;e=this.resultTransform.getMatrix();var h=n.a*e.tx+n.c*e.ty+n.tx,l=n.b*e.tx+n.d*e.ty+n.ty,o=new St;this.inheritRotation?(a=Math.atan2(i.resultMatrix.b,i.resultMatrix.a),s=Math.cos(a),r=Math.sin(a),o.setTo(s,r,-r,s,0,0),St.mul(this._tempMatrix,o,St.TEMP),St.TEMP.copyTo(o),e=this.resultTransform.getMatrix(),St.mul(e,o,this.resultMatrix),this.resultTransform.scX*this.resultTransform.scY<0&&this.resultMatrix.rotate(.5*Math.PI)):(this.inheritScale,e=this.resultTransform.getMatrix(),St.TEMP.identity(),St.TEMP.d=this.d,St.mul(e,St.TEMP,this.resultMatrix)),this.resultMatrix.tx=h,this.resultMatrix.ty=l}else(e=this.resultTransform.getMatrix()).copyTo(this.resultMatrix);var u,c=0;for(c=0,u=this._children.length;c<u;c++)this._children[c].update()},t.updateChild=function(){var t,e=0;for(e=0,t=this._children.length;e<t;e++)this._children[e].update()},t.setRotation=function(t){this._sprite&&(this._sprite.rotation=180*t/Math.PI)},t.updateDraw=function(t,e){s.ShowBones&&!s.ShowBones[this.name]||(this._sprite||(this._sprite=new rt,this._sprite.graphics.drawCircle(0,0,5,"#ff0000"),this._sprite.graphics.drawLine(0,0,this.length,0,"#00ff00"),this._sprite.graphics.fillText(this.name,0,0,"20px Arial","#00ff00","center"),st.stage.addChild(this._sprite)),this._sprite.x=t+this.resultMatrix.tx,this._sprite.y=e+this.resultMatrix.ty);var i,a=0;for(a=0,i=this._children.length;a<i;a++)this._children[a].updateDraw(t,e)},t.addChild=function(t){this._children.push(t),t.parentBone=this},t.findBone=function(t){if(this.name==t)return this;var e,i,a=0;for(a=0,e=this._children.length;a<e;a++)if(i=this._children[a].findBone(t))return i;return null},t.localToWorld=function(t){var e=t[0],i=t[1];t[0]=e*this.resultMatrix.a+i*this.resultMatrix.c+this.resultMatrix.tx,t[1]=e*this.resultMatrix.b+i*this.resultMatrix.d+this.resultMatrix.ty},s.ShowBones={},s}(),Pt=function(){function f(){this.name=null,this.parent=null,this.attachmentName=null,this.srcDisplayIndex=-1,this.type="src",this.templet=null,this.currSlotData=null,this.currTexture=null,this.currDisplayData=null,this.displayIndex=-1,this.originalIndex=-1,this._diyTexture=null,this._parentMatrix=null,this._resultMatrix=null,this._replaceDic={},this._curDiyUV=null,this._curDiyVS=null,this._skinSprite=null,this.deformData=null,this._mVerticleArr=null}n(f,"laya.ani.bone.BoneSlot");var t=f.prototype;return t.showSlotData=function(t,e){void 0===e&&(e=!0),this.currSlotData=t,e&&(this.displayIndex=this.srcDisplayIndex),this.currDisplayData=null,this.currTexture=null},t.showDisplayByName=function(t){this.currSlotData&&this.showDisplayByIndex(this.currSlotData.getDisplayByName(t))},t.replaceDisplayByName=function(t,e){if(this.currSlotData){var i;i=this.currSlotData.getDisplayByName(t);var a;a=this.currSlotData.getDisplayByName(e),this.replaceDisplayByIndex(i,a)}},t.replaceDisplayByIndex=function(t,e){this.currSlotData&&(this._replaceDic[t]=e,this.originalIndex==t&&this.showDisplayByIndex(t))},t.showDisplayByIndex=function(t){if(this.originalIndex=t,null!=this._replaceDic[t]&&(t=this._replaceDic[t]),this.currSlotData&&-1<t&&t<this.currSlotData.displayArr.length){if(this.displayIndex=t,this.currDisplayData=this.currSlotData.displayArr[t],this.currDisplayData){var e=this.currDisplayData.name;this.currTexture=this.templet.getTexture(e),this.currTexture&&0==this.currDisplayData.type&&this.currDisplayData.uvs&&(!m.isConchApp||m.isConchApp&&"0.9.15"<rt.RUNTIMEVERION)&&(this.currTexture=this.currDisplayData.createTexture(this.currTexture))}}else this.displayIndex=-1,this.currDisplayData=null,this.currTexture=null},t.replaceSkin=function(t){this._diyTexture=t,this._curDiyUV&&(this._curDiyUV.length=0),this.currDisplayData&&this._diyTexture==this.currDisplayData.texture&&(this._diyTexture=null)},t.setParentMatrix=function(t){this._parentMatrix=t},t.draw=function(t,e,i,a){if(void 0===i&&(i=!1),void 0===a&&(a=1),(null!=this._diyTexture||null!=this.currTexture)&&null!=this.currDisplayData||this.currDisplayData&&3==this.currDisplayData.type){var s,r=this.currTexture;switch(this._diyTexture&&(r=this._diyTexture),this.currDisplayData.type){case 0:if(t){var n=this.getDisplayMatrix();if(this._parentMatrix){var h=!1;if(n){var l;if(St.mul(n,this._parentMatrix,St.TEMP),l=i?(null==this._resultMatrix&&(this._resultMatrix=new St),this._resultMatrix):new St,!m.isWebGL&&this.currDisplayData.uvs||m.isWebGL&&this._diyTexture&&this.currDisplayData.uvs){var o=f._tempMatrix;o.identity(),this.currDisplayData.uvs[1]>this.currDisplayData.uvs[5]&&(o.d=-1),this.currDisplayData.uvs[0]>this.currDisplayData.uvs[4]&&this.currDisplayData.uvs[1]>this.currDisplayData.uvs[5]&&(h=!0,o.rotate(-Math.PI/2)),St.mul(o,St.TEMP,l)}else St.TEMP.copyTo(l);h?t.drawTexture(r,-this.currDisplayData.height/2,-this.currDisplayData.width/2,this.currDisplayData.height,this.currDisplayData.width,l):t.drawTexture(r,-this.currDisplayData.width/2,-this.currDisplayData.height/2,this.currDisplayData.width,this.currDisplayData.height,l)}}}break;case 1:if(null==(s=i?(null==this._skinSprite&&(this._skinSprite=f.createSkinMesh()),this._skinSprite):f.createSkinMesh()))return;var u;if(null==this.currDisplayData.bones){var c,d=this.currDisplayData.weights;this.deformData&&(d=this.deformData),c=this._diyTexture?(this._curDiyUV||(this._curDiyUV=[]),0==this._curDiyUV.length&&(this._curDiyUV=G.getRelativeUV(this.currTexture.uv,this.currDisplayData.uvs,this._curDiyUV),this._curDiyUV=G.getAbsoluteUV(this._diyTexture.uv,this._curDiyUV,this._curDiyUV)),this._curDiyUV):this.currDisplayData.uvs,this._mVerticleArr=d;this.currDisplayData.triangles.length;u=this.currDisplayData.triangles,s.init2(r,null,u,this._mVerticleArr,c);var _,p=this.getDisplayMatrix();if(this._parentMatrix)if(p)St.mul(p,this._parentMatrix,St.TEMP),_=i?(null==this._resultMatrix&&(this._resultMatrix=new St),this._resultMatrix):new St,St.TEMP.copyTo(_),s.transform=_}else this.skinMesh(e,s,a);t.drawSkin(s);break;case 2:if(null==(s=i?(null==this._skinSprite&&(this._skinSprite=f.createSkinMesh()),this._skinSprite):f.createSkinMesh()))return;this.skinMesh(e,s,a),t.drawSkin(s)}}},t.skinMesh=function(t,e,i){var a,s=this.currTexture,r=this.currDisplayData.bones;a=this._diyTexture?(s=this._diyTexture,this._curDiyUV||(this._curDiyUV=[]),0==this._curDiyUV.length&&(this._curDiyUV=G.getRelativeUV(this.currTexture.uv,this.currDisplayData.uvs,this._curDiyUV),this._curDiyUV=G.getAbsoluteUV(this._diyTexture.uv,this._curDiyUV,this._curDiyUV)),this._curDiyUV):this.currDisplayData.uvs;var n,h,l=this.currDisplayData.weights,o=this.currDisplayData.triangles,u=0,c=0,d=0,_=NaN,p=NaN,f=0,m=0,y=[],x=0,g=0;if(this.deformData&&0<this.deformData.length){var v=0;for(x=0,g=r.length;x<g;){for(d=r[x++]+x,c=u=0;x<d;x++)h=t[r[x]],_=l[f]+this.deformData[v++],p=l[f+1]+this.deformData[v++],m=l[f+2],u+=(_*h.a+p*h.c+h.tx)*m,c+=(_*h.b+p*h.d+h.ty)*m,f+=3;y.push(u,c)}}else for(x=0,g=r.length;x<g;){for(d=r[x++]+x,c=u=0;x<d;x++)h=t[r[x]],_=l[f],p=l[f+1],m=l[f+2],u+=(_*h.a+p*h.c+h.tx)*m,c+=(_*h.b+p*h.d+h.ty)*m,f+=3;y.push(u,c)}this._mVerticleArr=y,n=o,e.init2(s,null,n,this._mVerticleArr,a)},t.drawBonePoint=function(t){t&&this._parentMatrix&&t.drawCircle(this._parentMatrix.tx,this._parentMatrix.ty,5,"#ff0000")},t.getDisplayMatrix=function(){return this.currDisplayData?this.currDisplayData.transform.getMatrix():null},t.getMatrix=function(){return this._resultMatrix},t.copy=function(){var t=new f;return t.type="copy",t.name=this.name,t.attachmentName=this.attachmentName,t.srcDisplayIndex=this.srcDisplayIndex,t.parent=this.parent,t.displayIndex=this.displayIndex,t.templet=this.templet,t.currSlotData=this.currSlotData,t.currTexture=this.currTexture,t.currDisplayData=this.currDisplayData,t},f.createSkinMesh=function(){return m.isWebGL||m.isConchApp?y.skinAniSprite():m.isWebGL?null:ht.useSimpleMeshInCanvas?new nt:new it},i(f,["_tempMatrix",function(){return this._tempMatrix=new St}]),f}(),A=function(){function t(){this.mesh=null,this.transform=null,this.context=null,this.mode=0}n(t,"laya.ani.bone.canvasmesh.CanvasMeshRender");var e=t.prototype;return e.renderToContext=function(t){this.context=t.ctx||t,this.mesh&&(0==this.mode?this._renderWithIndexes(this.mesh):this._renderNoIndexes(this.mesh))},e._renderNoIndexes=function(t){var e=0,i=t.vertices.length/2,a=0;for(e=0;e<i-2;e++)a=2*e,this._renderDrawTriangle(t,a,a+2,a+4)},e._renderWithIndexes=function(t){var e=t.indexes,i=0,a=e.length;for(i=0;i<a;i+=3){var s=2*e[i],r=2*e[i+1],n=2*e[i+2];this._renderDrawTriangle(t,s,r,n)}},e._renderDrawTriangle=function(t,e,i,a){var s=this.context,r=t.uvs,n=t.vertices,h=t.texture,l=h.bitmap,o=l.source,u=h.width,c=h.height,d=l.width,_=l.height,p=NaN,f=NaN,m=NaN,y=NaN,x=NaN,g=NaN;if(t.useUvTransform){var v=t.uvTransform;p=(r[e]*v.a+r[e+1]*v.c+v.tx)*d,f=(r[i]*v.a+r[i+1]*v.c+v.tx)*d,m=(r[a]*v.a+r[a+1]*v.c+v.tx)*d,y=(r[e]*v.b+r[e+1]*v.d+v.ty)*_,x=(r[i]*v.b+r[i+1]*v.d+v.ty)*_,g=(r[a]*v.b+r[a+1]*v.d+v.ty)*_}else p=r[e]*d,f=r[i]*d,m=r[a]*d,y=r[e+1]*_,x=r[i+1]*_,g=r[a+1]*_;var D=n[e],M=n[i],I=n[a],b=n[e+1],N=n[i+1],T=n[a+1];if(0<t.canvasPadding){var A=t.canvasPadding,C=t.canvasPadding,w=(D+M+I)/3,S=(b+N+T)/3,F=D-w,k=b-S,P=Math.sqrt(F*F+k*k);D=w+F/P*(P+A),b=S+k/P*(P+C),k=N-S,M=w+(F=M-w)/(P=Math.sqrt(F*F+k*k))*(P+A),N=S+k/P*(P+C),k=T-S,I=w+(F=I-w)/(P=Math.sqrt(F*F+k*k))*(P+A),T=S+k/P*(P+C)}if(s.save(),this.transform){var B=this.transform;s.transform(B.a,B.b,B.c,B.d,B.tx,B.ty)}s.beginPath(),s.moveTo(D,b),s.lineTo(M,N),s.lineTo(I,T),s.closePath(),s.clip();var U=1/(p*x+y*m+f*g-x*m-y*f-p*g),L=D*x+y*I+M*g-x*I-y*M-D*g,R=p*M+D*m+f*I-M*m-D*f-p*I,O=p*x*I+y*M*m+D*f*g-D*x*m-y*f*I-p*M*g,E=b*x+y*T+N*g-x*T-y*N-b*g,K=p*N+b*m+f*T-N*m-b*f-p*T,Y=p*x*T+y*N*m+b*f*g-b*x*m-y*f*T-p*N*g;s.transform(L*U,E*U,R*U,K*U,O*U,Y*U),s.drawImage(o,h.uv[0]*d,h.uv[1]*_,u,c,h.uv[0]*d,h.uv[1]*_,u,c),s.restore()},t}(),C=(n(w,"laya.ani.bone.canvasmesh.MeshData"),w.prototype.getBounds=function(){return _._getWrapRec(this.vertices)},w);function w(){this.texture=null,this.uvs=[0,0,1,0,1,1,0,1],this.vertices=[0,0,100,0,100,100,0,100],this.indexes=[0,1,3,3,1,2],this.uvTransform=null,this.useUvTransform=!1,this.canvasPadding=1}var Bt=(n(k,"laya.ani.bone.DeformAniData"),k);function k(){this.skinName=null,this.deformSlotDataList=[]}var Ut=(n(P,"laya.ani.bone.DeformSlotData"),P);function P(){this.deformSlotDisplayList=[]}var Lt=function(){function t(){this.boneSlot=null,this.slotIndex=-1,this.attachment=null,this.deformData=null,this.frameIndex=0,this.timeList=[],this.vectices=[],this.tweenKeyList=[]}n(t,"laya.ani.bone.DeformSlotDisplayData");var e=t.prototype;return e.binarySearch1=function(t,e){var i=0,a=t.length-2;if(0==a)return 1;for(var s=a>>>1;;){if(t[Math.floor(s+1)]<=e?i=s+1:a=s,i==a)return i+1;s=i+a>>>1}return 0},e.apply=function(t,e,i){if(void 0===i&&(i=1),t+=.05,!(this.timeList.length<=0)){var a=0;if(!(t<this.timeList[0])){var s=this.vectices[0].length,r=[],n=this.binarySearch1(this.timeList,t);if(this.frameIndex=n,t>=this.timeList[this.timeList.length-1]){var h=this.vectices[this.vectices.length-1];if(i<1)for(a=0;a<s;a++)r[a]+=(h[a]-r[a])*i;else for(a=0;a<s;a++)r[a]=h[a];this.deformData=r}else{this.tweenKeyList[this.frameIndex];var l=this.vectices[this.frameIndex-1],o=this.vectices[this.frameIndex],u=this.timeList[this.frameIndex-1],c=this.timeList[this.frameIndex];i=this.tweenKeyList[n-1]?(t-u)/(c-u):0;var d=NaN;for(a=0;a<s;a++)d=l[a],r[a]=d+(o[a]-d)*i;this.deformData=r}}}},t}(),Rt=(n(B,"laya.ani.bone.DrawOrderData"),B);function B(){this.time=NaN,this.drawOrder=[]}var Ot=(n(U,"laya.ani.bone.EventData"),U);function U(){this.name=null,this.intValue=0,this.floatValue=NaN,this.stringValue=null,this.time=NaN}var L=function(){function at(t,e){this._targetBone=null,this._bones=null,this._data=null,this.name=null,this.mix=NaN,this.bendDirection=NaN,this.isSpine=!0,this._sp=null,this.isDebug=!1,this._data=t,this._targetBone=e[t.targetBoneIndex],this.isSpine=t.isSpine,null==this._bones&&(this._bones=[]);for(var i=this._bones.length=0,a=t.boneIndexs.length;i<a;i++)this._bones.push(e[t.boneIndexs[i]]);this.name=t.name,this.mix=t.mix,this.bendDirection=t.bendDirection}n(at,"laya.ani.bone.IkConstraint");var t=at.prototype;return t.apply=function(){switch(this._bones.length){case 1:this._applyIk1(this._bones[0],this._targetBone.resultMatrix.tx,this._targetBone.resultMatrix.ty,this.mix);break;case 2:this.isSpine?this._applyIk2(this._bones[0],this._bones[1],this._targetBone.resultMatrix.tx,this._targetBone.resultMatrix.ty,this.bendDirection,this.mix):this._applyIk3(this._bones[0],this._bones[1],this._targetBone.resultMatrix.tx,this._targetBone.resultMatrix.ty,this.bendDirection,this.mix)}},t._applyIk1=function(t,e,i,a){var s=t.parentBone,r=1/(s.resultMatrix.a*s.resultMatrix.d-s.resultMatrix.b*s.resultMatrix.c),n=e-s.resultMatrix.tx,h=i-s.resultMatrix.ty,l=(n*s.resultMatrix.d-h*s.resultMatrix.c)*r-t.transform.x,o=(h*s.resultMatrix.a-n*s.resultMatrix.b)*r-t.transform.y,u=Math.atan2(o,l)*at.radDeg-0-t.transform.skX;t.transform.scX<0&&(u+=180),180<u?u-=360:u<-180&&(u+=360),t.transform.skX=t.transform.skY=t.transform.skX+u*a,t.update()},t.updatePos=function(t,e){this._sp&&this._sp.pos(t,e)},t._applyIk2=function(t,e,i,a,s,r){if(0!=r){var n=t.resultTransform.x,h=t.resultTransform.y,l=t.transform.scX,o=t.transform.scY,u=e.transform.scX,c=0,d=0,_=0;_=l<0?(l=-l,c=180,-1):(c=0,1),o<0&&(o=-o,_=-_),d=u<0?(u=-u,180):0;var p=e.resultTransform.x,f=NaN,m=NaN,y=NaN,x=t.resultMatrix.a,g=t.resultMatrix.c,v=t.resultMatrix.b,D=t.resultMatrix.d,M=Math.abs(l-o)<=1e-4;y=M?(m=x*p+g*(f=e.resultTransform.y)+t.resultMatrix.tx,v*p+D*f+t.resultMatrix.ty):(f=0,m=x*p+t.resultMatrix.tx,v*p+t.resultMatrix.ty),this.isDebug&&(this._sp||(this._sp=new rt,st.stage.addChild(this._sp)),this._sp.graphics.clear(),this._sp.graphics.drawCircle(i,a,15,"#ffff00"),this._sp.graphics.drawCircle(m,y,15,"#ff00ff")),t.setRotation(Math.atan2(y-t.resultMatrix.ty,m-t.resultMatrix.tx));var I=t.parentBone;x=I.resultMatrix.a,g=I.resultMatrix.c,v=I.resultMatrix.b;var b=1/(x*(D=I.resultMatrix.d)-g*v),N=i-I.resultMatrix.tx,T=a-I.resultMatrix.ty,A=(N*D-T*g)*b-n,C=(T*x-N*v)*b-h,w=((N=m-I.resultMatrix.tx)*D-(T=y-I.resultMatrix.ty)*g)*b-n,S=(T*x-N*v)*b-h,F=Math.sqrt(w*w+S*S),k=e.length*u,P=NaN,B=NaN;if(M){var U=(A*A+C*C-F*F-(k*=l)*k)/(2*F*k);U<-1?U=-1:1<U&&(U=1),B=Math.acos(U)*s,x=F+k*U,g=k*Math.sin(B),P=Math.atan2(C*x-A*g,A*x+C*g)}else{var L=(x=l*k)*x,R=(g=o*k)*g,O=A*A+C*C,E=Math.atan2(C,A),K=-2*R*F,Y=R-L;if(0<(D=K*K-4*Y*(v=R*F*F+L*O-L*R))){var V=Math.sqrt(D);K<0&&(V=-V);var W=(V=-(K+V)/2)/Y,X=v/V,z=Math.abs(W)<Math.abs(X)?W:X;z*z<=O&&(T=Math.sqrt(O-z*z)*s,P=E-Math.atan2(T,z),B=Math.atan2(T/o,(z-F)/l))}var q=0,G=Number.MAX_VALUE,H=0,Q=0,Z=0,j=0,$=0,J=0;j<(D=(N=F+x)*N)&&(Z=0,j=D,$=N),(D=(N=F-x)*N)<G&&(q=Math.PI,G=D,H=N);var tt=Math.acos(-x*F/(L-R));(D=(N=x*Math.cos(tt)+F)*N+(T=g*Math.sin(tt))*T)<G&&(q=tt,G=D,H=N,Q=T),j<D&&(Z=tt,j=D,$=N,J=T),B=O<=(G+j)/2?(P=E-Math.atan2(Q*s,H),q*s):(P=E-Math.atan2(J*s,$),Z*s)}var et=Math.atan2(f,p)*_,it=t.resultTransform.skX;180<(P=(P-et)*at.radDeg+c-it)?P-=360:P<-180&&(P+=360),t.resultTransform.x=n,t.resultTransform.y=h,t.resultTransform.skX=t.resultTransform.skY=it+P*r,it=e.resultTransform.skX,180<(B=((B+et)*at.radDeg-0)*_+d-(it%=360))?B-=360:B<-180&&(B+=360),e.resultTransform.x=p,e.resultTransform.y=f,e.resultTransform.skX=e.resultTransform.skY=e.resultTransform.skY+B*r,t.update()}},t._applyIk3=function(t,e,i,a,s,r){if(0!=r){var n,h,l=e.resultMatrix.a*e.length,o=e.resultMatrix.b*e.length,u=l*l+o*o,c=Math.sqrt(u),d=t.resultMatrix.tx,_=t.resultMatrix.ty,p=e.resultMatrix.tx,f=e.resultMatrix.ty,m=p-d,y=f-_,x=m*m+y*y,g=Math.sqrt(x),v=(m=i-t.resultMatrix.tx)*m+(y=a-t.resultMatrix.ty)*y,D=Math.sqrt(v);if(c+g<=D||D+c<=g||D+g<=c){var M=NaN;p=d+(M=c+g<=D?1:-1)*(i-d)*g/D,f=_+M*(a-_)*g/D}else{var I=(x-u+v)/(2*v),b=Math.sqrt(x-I*I*v)/D,N=d+m*I,T=_+y*I,A=-y*b,C=m*b;f=0<s?(p=N-A,T-C):(p=N+A,T+C)}n=p,h=f,this.isDebug&&(this._sp||(this._sp=new rt,st.stage.addChild(this._sp)),this._sp.graphics.clear(),this._sp.graphics.drawCircle(d,_,15,"#ff00ff"),this._sp.graphics.drawCircle(i,a,15,"#ffff00"),this._sp.graphics.drawCircle(n,h,15,"#ff00ff"));var w,S;w=Math.atan2(h-t.resultMatrix.ty,n-t.resultMatrix.tx),t.setRotation(w),(S=at._tempMatrix).identity(),S.rotate(w),S.scale(t.resultMatrix.getScaleX(),t.resultMatrix.getScaleY()),S.translate(t.resultMatrix.tx,t.resultMatrix.ty),S.copyTo(t.resultMatrix),t.updateChild();var F,k;F=Math.atan2(a-h,i-n),e.setRotation(F),(k=at._tempMatrix).identity(),k.rotate(F),k.scale(e.resultMatrix.getScaleX(),e.resultMatrix.getScaleY()),k.translate(n,h),S.copyTo(e.resultMatrix),e.updateChild()}},i(at,["radDeg",function(){return this.radDeg=180/Math.PI},"degRad",function(){return this.degRad=Math.PI/180},"_tempMatrix",function(){return this._tempMatrix=new St}]),at}(),Et=(n(R,"laya.ani.bone.IkConstraintData"),R);function R(){this.name=null,this.targetBoneName=null,this.bendDirection=1,this.mix=1,this.isSpine=!0,this.targetBoneIndex=-1,this.boneNames=[],this.boneIndexs=[]}var O=(n(E,"laya.ani.bone.MeshTools"),E.findEdge=function(t,e,i){void 0===e&&(e=0),void 0===i&&(i=!0);var a,s=0,r=0;for(a=t.length,r=-1,s=0;s<a;s+=2)(r<0||i==t[r+e]<t[s+e])&&(r=s);return r},E.findBestTriangle=function(t){var e,i,a,s,r;return e=E.findEdge(t,1,!0),i=E.findEdge(t,1,!1),a=E.findEdge(t,0,!0),s=E.findEdge(t,0,!1),(r=E._bestTriangle).length=0,r.push(a,s),r.indexOf(e)<0&&r.push(e),r.indexOf(i)<0&&r.push(i),r},E.solveMesh=function(t,e){var i,a,s,r,n,h,l;return(e=e||[]).length=0,i=t.uvs,a=t.vertices,n=(r=E.findBestTriangle(i))[0],h=r[1],l=r[2],E._absArr.length=0,E.isNormalUV(t.texture.uv)&&E.adptTexture(t),s=E.solvePoints(t.texture.uv,i[n],i[n+1],i[h]-i[n],i[h+1]-i[n+1],i[l]-i[n],i[l+1]-i[n+1],E._absArr),E.transPoints(s,a[n],a[n+1],a[h]-a[n],a[h+1]-a[n+1],a[l]-a[n],a[l+1]-a[n+1],e)},E.findWrapRect=function(t){var e,i,a,s,r,n,h,l;return e=E.findEdge(t,1,!0),i=E.findEdge(t,1,!1),a=E.findEdge(t,0,!0),s=E.findEdge(t,0,!1),r=t[a],n=t[s],h=t[e+1],[n,l=t[i+1],r-n,h-l]},E.adptTexture=function(t){var e,i,a;e=E.findWrapRect(t.uvs);var s=(i=t.texture).width,r=i.height;a=Ft.create(i,e[0]*s,e[1]*r,e[2]*s,e[3]*r),t.texture=a},E.isNormalUV=function(t){return 0==t[0]&&0==t[1]&&1==t[4]&&1==t[5]},E.solvePoints=function(t,e,i,a,s,r,n,h){h=h||[];var l,o,u=0;for(l=t.length,u=0;u<l;u+=2)o=E.solve2(t[u],t[u+1],e,i,a,s,r,n),h.push(o[0],o[1]);return h},E.transPoints=function(t,e,i,a,s,r,n,h){h=h||[];var l,o=0;for(l=t.length,o=0;o<l;o+=2)E.transPoint(t[o],t[o+1],e,i,a,s,r,n,h);return h},E.transPoint=function(t,e,i,a,s,r,n,h,l){var o,u;return o=i+s*t+n*e,u=a+r*t+h*e,(l=l||[]).push(o,u),l},E.solve2=function(t,e,i,a,s,r,n,h,l,o){var u,c,d;return void 0===l&&(l=!1),o=o||[],0==s?E.solve2(t,e,i,a,n,h,s,r,!0,o):(u=((d=t-i)-(c=(e-a-d*r/s)/(h-n*r/s))*n)/s,l?o.push(c,u):o.push(u,c),o)},E.solve=function(t,e,i,a){return E.solve2(t.x,t.y,e.x,e.y,i.x,i.y,a.x,a.y)},E._bestTriangle=[],E._absArr=[],E);function E(){}var K=function(){function k(t,e){this.target=null,this.data=null,this.bones=null,this.position=NaN,this.spacing=NaN,this.rotateMix=NaN,this.translateMix=NaN,this._debugKey=!1,this._spaces=null,this._segments=[],this._curves=[],this.data=t,this.position=t.position,this.spacing=t.spacing,this.rotateMix=t.rotateMix,this.translateMix=t.translateMix,this.bones=[];for(var i=this.data.bones,a=0,s=i.length;a<s;a++)this.bones.push(e[i[a]])}n(k,"laya.ani.bone.PathConstraint");var t=k.prototype;return t.apply=function(t,e){if(this.target){var i=this.translateMix,a=this.translateMix,s=0<a,r=this.data.spacingMode,n="length"==r,h=this.data.rotateMode,l="tangent"==h,o="chainScale"==h,u=[],c=this.bones.length,d=l?c:c+1,_=[];(this._spaces=_)[0]=this.position;var p=this.spacing;if(o||n)for(var f=0,m=d-1;f<m;){var y=this.bones[f],x=y.length,g=x*y.resultMatrix.a,v=x*y.resultMatrix.b;x=Math.sqrt(g*g+v*v),o&&(u[f]=x),_[++f]=n?Math.max(0,x+p):p}else for(f=1;f<d;f++)_[f]=p;var D=this.computeWorldPositions(this.target,t,e,d,l,"percent"==this.data.positionMode,"percent"==r);if(this._debugKey){for(f=0;f<D.length;f++)e.drawCircle(D[f++],D[f++],5,"#00ff00");var M=[];for(f=0;f<D.length;f++)M.push(D[f++],D[f++]);e.drawLines(0,0,M,"#ff0000")}var I=D[0],b=D[1],N=this.data.offsetRotation,T="chain"==h&&0==N,A=NaN;for(f=0,A=3;f<c;f++,A+=3){(y=this.bones[f]).resultMatrix.tx+=(I-y.resultMatrix.tx)*i,y.resultMatrix.ty+=(b-y.resultMatrix.ty)*i;var C=(g=D[A])-I,w=(v=D[A+1])-b;if(o&&0!=(x=u[f])){var S=(Math.sqrt(C*C+w*w)/x-1)*a+1;y.resultMatrix.a*=S,y.resultMatrix.c*=S}if(I=g,b=v,s){var F=y.resultMatrix.a,k=y.resultMatrix.c,P=y.resultMatrix.b,B=y.resultMatrix.d,U=NaN,L=NaN,R=NaN;U=l?D[A-1]:0==_[f+1]?D[A+2]:Math.atan2(w,C),U-=Math.atan2(P,F)-N/180*Math.PI,T&&(L=Math.cos(U),R=Math.sin(U),I+=((x=y.length)*(L*F-R*P)-C)*a,b+=(x*(R*F+L*P)-w)*a),U>Math.PI?U-=2*Math.PI:U<-Math.PI&&(U+=2*Math.PI),U*=a,L=Math.cos(U),R=Math.sin(U),y.resultMatrix.a=L*F-R*P,y.resultMatrix.c=L*k-R*B,y.resultMatrix.b=R*F+L*P,y.resultMatrix.d=R*k+L*B}}}},t.computeWorldVertices2=function(t,e,i,a,s,r){var n,h,l=t.currDisplayData.bones,o=t.currDisplayData.weights,u=t.currDisplayData.triangles,c=0,d=0,_=0,p=0,f=0,m=0,y=0,x=0,g=0,v=0,D=0;if(null!=l){for(c=0;c<i;c+=2)d+=(p=l[d])+1,_+=p;var M=e;for(f=r,m=3*_;f<a;f+=2){for(x=y=0,p=l[d++],p+=d;d<p;d++,m+=3){n=M[l[d]].resultMatrix,g=o[m],v=o[m+1];var I=o[m+2];y+=(g*n.a+v*n.c+n.tx)*I,x+=(g*n.b+v*n.d+n.ty)*I}s[f]=y,s[f+1]=x}}else{var b,N;if(u||(u=o),t.deformData&&(u=t.deformData),b=t.parent,e)for(D=e.length,c=0;c<D;c++)if(e[c].name==b){h=e[c];break}h&&(N=h.resultMatrix),N||(N=k._tempMt);var T=N.tx,A=N.ty,C=N.a,w=N.b,S=N.c,F=N.d;for(h&&(F*=h.d),d=i,f=r;f<a;d+=2,f+=2)g=u[d],v=u[d+1],s[f]=g*C+v*w+T,s[f+1]=-(g*S+v*F+A)}},t.computeWorldPositions=function(t,e,i,a,s,r,n){t.currDisplayData.bones,t.currDisplayData.weights,t.currDisplayData.triangles;var h=[],l=0,o=t.currDisplayData.verLen,u=this.position,c=this._spaces,d=[],_=[],p=o/6,f=-1,m=NaN,y=0,x=0,g=NaN,v=NaN,D=NaN,M=NaN;if(p--,o-=4,this.computeWorldVertices2(t,e,2,o,h,0),this._debugKey)for(l=0;l<h.length;)i.drawCircle(h[l++],h[l++],10,"#ff0000");d=h,this._curves.length=p;var I=this._curves,b=d[m=0],N=d[1],T=0,A=0,C=0,w=0,S=0,F=0,k=NaN,P=NaN,B=NaN,U=NaN,L=NaN,R=NaN,O=NaN,E=NaN,K=0;for(l=0,K=2;l<p;l++,K+=6)T=d[K],A=d[K+1],C=d[K+2],w=d[K+3],L=2*(k=.1875*(b-2*T+C))+(B=.09375*(3*(T-C)-b+(S=d[K+4]))),R=2*(P=.1875*(N-2*A+w))+(U=.09375*(3*(A-w)-N+(F=d[K+5]))),O=.75*(T-b)+k+.16666667*B,E=.75*(A-N)+P+.16666667*U,m+=Math.sqrt(O*O+E*E),O+=L,E+=R,L+=B,R+=U,m+=Math.sqrt(O*O+E*E),O+=L,E+=R,m+=Math.sqrt(O*O+E*E),O+=L+B,E+=R+U,m+=Math.sqrt(O*O+E*E),I[l]=m,b=S,N=F;if(r&&(u*=m),n)for(l=0;l<a;l++)c[l]*=m;var Y=this._segments,V=0,W=0;for(W=x=y=l=0;l<a;l++,y+=3)if((g=u+=v=c[l])<0)this.addBeforePosition(g,d,0,_,y);else if(m<g)this.addAfterPosition(g-m,d,o-4,_,y);else{for(;;x++)if(!((M=I[x])<g)){0==x?g/=M:g=(g-(D=I[x-1]))/(M-D);break}if(x!=f){var X=6*(f=x);for(b=d[X],N=d[X+1],T=d[X+2],A=d[X+3],C=d[X+4],w=d[X+5],L=2*(k=.03*(b-2*T+C))+(B=.006*(3*(T-C)-b+(S=d[X+6]))),R=2*(P=.03*(N-2*A+w))+(U=.006*(3*(A-w)-N+(F=d[X+7]))),O=.3*(T-b)+k+.16666667*B,E=.3*(A-N)+P+.16666667*U,V=Math.sqrt(O*O+E*E),Y[0]=V,X=1;X<8;X++)O+=L,E+=R,L+=B,R+=U,V+=Math.sqrt(O*O+E*E),Y[X]=V;O+=L,E+=R,V+=Math.sqrt(O*O+E*E),Y[8]=V,O+=L+B,E+=R+U,V+=Math.sqrt(O*O+E*E),Y[9]=V,W=0}for(g*=V;;W++)if(!((M=Y[W])<g)){0==W?g/=M:g=W+(g-(D=Y[W-1]))/(M-D);break}this.addCurvePosition(.1*g,b,N,T,A,C,w,S,F,_,y,s||0<l&&0==v)}return _},t.addBeforePosition=function(t,e,i,a,s){var r=e[i],n=e[i+1],h=e[i+2]-r,l=e[i+3]-n,o=Math.atan2(l,h);a[s]=r+t*Math.cos(o),a[s+1]=n+t*Math.sin(o),a[s+2]=o},t.addAfterPosition=function(t,e,i,a,s){var r=e[i+2],n=e[i+3],h=r-e[i],l=n-e[i+1],o=Math.atan2(l,h);a[s]=r+t*Math.cos(o),a[s+1]=n+t*Math.sin(o),a[s+2]=o},t.addCurvePosition=function(t,e,i,a,s,r,n,h,l,o,u,c){0==t&&(t=1e-4);var d=t*t,_=d*t,p=1-t,f=p*p,m=f*p,y=p*t,x=3*y,g=p*x,v=x*t,D=e*m+a*g+r*v+h*_,M=i*m+s*g+n*v+l*_;o[u]=D,o[u+1]=M,o[u+2]=c?Math.atan2(M-(i*f+s*y*2+n*d),D-(e*f+a*y*2+r*d)):0},k.NONE=-1,k.BEFORE=-2,k.AFTER=-3,i(k,["_tempMt",function(){return this._tempMt=new St}]),k}(),Kt=(n(Y,"laya.ani.bone.PathConstraintData"),Y);function Y(){this.name=null,this.target=null,this.positionMode=null,this.spacingMode=null,this.rotateMode=null,this.offsetRotation=NaN,this.position=NaN,this.spacing=NaN,this.rotateMix=NaN,this.translateMix=NaN,this.bones=[]}var Yt=(n(V,"laya.ani.bone.SkinData"),V);function V(){this.name=null,this.slotArr=[]}var Vt=function(){function t(){this.name=null,this.attachmentName=null,this.type=0,this.transform=null,this.width=NaN,this.height=NaN,this.texture=null,this.bones=null,this.uvs=null,this.weights=null,this.triangles=null,this.vertices=null,this.lengths=null,this.verLen=0}n(t,"laya.ani.bone.SkinSlotDisplayData");var e=t.prototype;return e.createTexture=function(t){return this.texture||(this.texture=new Ft(t.bitmap,this.uvs),this.uvs[0]>this.uvs[4]&&this.uvs[1]>this.uvs[5]?(this.texture.width=t.height,this.texture.height=t.width,this.texture.offsetX=-t.offsetX,this.texture.offsetY=-t.offsetY,this.texture.sourceWidth=t.sourceHeight,this.texture.sourceHeight=t.sourceWidth):(this.texture.width=t.width,this.texture.height=t.height,this.texture.offsetX=-t.offsetX,this.texture.offsetY=-t.offsetY,this.texture.sourceWidth=t.sourceWidth,this.texture.sourceHeight=t.sourceHeight),m.isWebGL||this.uvs[1]>this.uvs[5]&&(this.texture.offsetY=this.texture.sourceHeight-this.texture.height-this.texture.offsetY)),this.texture},e.destory=function(){this.texture&&this.texture.destroy()},t}(),Wt=(n(W,"laya.ani.bone.SlotData"),W.prototype.getDisplayByName=function(t){for(var e=0,i=this.displayArr.length;e<i;e++)if(this.displayArr[e].attachmentName==t)return e;return-1},W);function W(){this.name=null,this.displayArr=[]}var X=(n(z,"laya.ani.bone.TfConstraint"),z.prototype.apply=function(){for(var t,e=this.target.resultMatrix.a,i=this.target.resultMatrix.b,a=this.target.resultMatrix.c,s=this.target.resultMatrix.d,r=0,n=this._bones.length;r<n;r++){if(t=this._bones[r],0<this.rotateMix){var h=t.resultMatrix.a,l=t.resultMatrix.b,o=t.resultMatrix.c,u=t.resultMatrix.d,c=Math.atan2(a,e)-Math.atan2(o,h)+this._data.offsetRotation*Math.PI/180;c>Math.PI?c-=2*Math.PI:c<-Math.PI&&(c+=2*Math.PI),c*=this.rotateMix;var d=Math.cos(c),_=Math.sin(c);t.resultMatrix.a=d*h-_*o,t.resultMatrix.b=d*l-_*u,t.resultMatrix.c=_*h+d*o,t.resultMatrix.d=_*l+d*u}if(this.translateMix&&(this._temp[0]=this._data.offsetX,this._temp[1]=this._data.offsetY,this.target.localToWorld(this._temp),t.resultMatrix.tx+=(this._temp[0]-t.resultMatrix.tx)*this.translateMix,t.resultMatrix.ty+=(this._temp[1]-t.resultMatrix.ty)*this.translateMix,t.updateChild()),0<this.scaleMix){var p=Math.sqrt(t.resultMatrix.a*t.resultMatrix.a+t.resultMatrix.c*t.resultMatrix.c),f=Math.sqrt(e*e+a*a),m=1e-5<p?(p+(f-p+this._data.offsetScaleX)*this.scaleMix)/p:0;t.resultMatrix.a*=m,t.resultMatrix.c*=m,p=Math.sqrt(t.resultMatrix.b*t.resultMatrix.b+t.resultMatrix.d*t.resultMatrix.d),f=Math.sqrt(i*i+s*s),m=1e-5<p?(p+(f-p+this._data.offsetScaleY)*this.scaleMix)/p:0,t.resultMatrix.b*=m,t.resultMatrix.d*=m}if(0<this.shearMix){l=t.resultMatrix.b,u=t.resultMatrix.d;var y=Math.atan2(u,l);(c=Math.atan2(s,i)-Math.atan2(a,e)-(y-Math.atan2(t.resultMatrix.c,t.resultMatrix.a)))>Math.PI?c-=2*Math.PI:c<-Math.PI&&(c+=2*Math.PI),c=y+(c+this._data.offsetShearY*Math.PI/180)*this.shearMix,m=Math.sqrt(l*l+u*u),t.resultMatrix.b=Math.cos(c)*m,t.resultMatrix.d=Math.sin(c)*m}}},z);function z(t,e){this._data=null,this._bones=null,this.target=null,this.rotateMix=NaN,this.translateMix=NaN,this.scaleMix=NaN,this.shearMix=NaN,this._temp=f(2,0),this._data=t,null==this._bones&&(this._bones=[]),this.target=e[t.targetIndex];var i,a=0;for(a=0,i=t.boneIndexs.length;a<i;a++)this._bones.push(e[t.boneIndexs[a]]);this.rotateMix=t.rotateMix,this.translateMix=t.translateMix,this.scaleMix=t.scaleMix,this.shearMix=t.shearMix}var Xt=(n(q,"laya.ani.bone.TfConstraintData"),q);function q(){this.name=null,this.targetIndex=0,this.rotateMix=NaN,this.translateMix=NaN,this.scaleMix=NaN,this.shearMix=NaN,this.offsetRotation=NaN,this.offsetX=NaN,this.offsetY=NaN,this.offsetScaleX=NaN,this.offsetScaleY=NaN,this.offsetShearY=NaN,this.boneIndexs=[]}var zt=function(){function t(){this.skX=0,this.skY=0,this.scX=1,this.scY=1,this.x=0,this.y=0,this.skewX=0,this.skewY=0,this.mMatrix=null}n(t,"laya.ani.bone.Transform");var e=t.prototype;return e.initData=function(t){null!=t.x&&(this.x=t.x),null!=t.y&&(this.y=t.y),null!=t.skX&&(this.skX=t.skX),null!=t.skY&&(this.skY=t.skY),null!=t.scX&&(this.scX=t.scX),null!=t.scY&&(this.scY=t.scY)},e.getMatrix=function(){var t;return(t=this.mMatrix?this.mMatrix:this.mMatrix=new St).identity(),t.scale(this.scX,this.scY),(this.skewX||this.skewY)&&this.skew(t,this.skewX*Math.PI/180,this.skewY*Math.PI/180),t.rotate(this.skX*Math.PI/180),t.translate(this.x,this.y),t},e.skew=function(t,e,i){var a=Math.sin(i),s=Math.cos(i),r=Math.sin(e),n=Math.cos(e);return t.setTo(t.a*n-t.b*a,t.a*r+t.b*s,t.c*n-t.d*a,t.c*r+t.d*s,t.tx*n-t.ty*a,t.tx*r+t.ty*s),t},t}(),G=(n(H,"laya.ani.bone.UVTools"),H.getRelativeUV=function(t,e,i){var a=t[0],s=t[2]-t[0],r=t[1],n=t[5]-t[1];i||(i=[]),i.length=e.length;var h,l=0;h=i.length;var o=1/s,u=1/n;for(l=0;l<h;l+=2)i[l]=(e[l]-a)*o,i[l+1]=(e[l+1]-r)*u;return i},H.getAbsoluteUV=function(t,e,i){if(0==t[0]&&0==t[1]&&1==t[4]&&1==t[5])return i?(g.copyArray(i,e),i):e;var a=t[0],s=t[2]-t[0],r=t[1],n=t[5]-t[1];i||(i=[]),i.length=e.length;var h,l=0;for(h=i.length,l=0;l<h;l+=2)i[l]=e[l]*s+a,i[l+1]=e[l+1]*n+r;return i},H);function H(){}var Q=(n(Z,"laya.ani.KeyFramesContent"),Z);function Z(){this.startTime=NaN,this.duration=NaN,this.interpolationData=null,this.data=null,this.nextData=null}var j=(n($,"laya.ani.math.BezierLerp"),$.getBezierRate=function(t,e,i,a,s){var r=$._getBezierParamKey(e,i,a,s),n=100*r+t;if($._bezierResultCache[n])return $._bezierResultCache[n];var h,l=$._getBezierPoints(e,i,a,s,r),o=0;for(h=l.length,o=0;o<h;o+=2)if(t<=l[o])return $._bezierResultCache[n]=l[o+1],l[o+1];return $._bezierResultCache[n]=1},$._getBezierParamKey=function(t,e,i,a){return 100*(100*(100*(100*t+e)+i)+a)},$._getBezierPoints=function(t,e,i,a,s){return $._bezierPointsCache[s]?$._bezierPointsCache[s]:(r=[0,0,t,e,i,a,1,1],n=(new h).getBezierPoints(r,100,3),$._bezierPointsCache[s]=n);var r,n},$._bezierResultCache={},$._bezierPointsCache={},$);function $(){}var J=function(t){function e(){this._destroyed=!1,this._templet=null,this._currentTime=NaN,this._currentFrameTime=NaN,this._playStart=NaN,this._playEnd=NaN,this._playDuration=NaN,this._overallDuration=NaN,this._stopWhenCircleFinish=!1,this._elapsedPlaybackTime=NaN,this._startUpdateLoopCount=NaN,this._currentAnimationClipIndex=0,this._currentKeyframeIndex=0,this._paused=!1,this._cacheFrameRate=0,this._cacheFrameRateInterval=NaN,this._cachePlayRate=NaN,this._fullFrames=null,this.isCache=!0,this.playbackRate=1,this.returnToZeroStopped=!1,e.__super.call(this),this._destroyed=!1,this._currentAnimationClipIndex=-1,this._currentKeyframeIndex=-1,this._currentTime=0,this._overallDuration=Number.MAX_VALUE,this._stopWhenCircleFinish=!1,this._elapsedPlaybackTime=0,this._startUpdateLoopCount=-1,this._cachePlayRate=1,this.cacheFrameRate=60,this.returnToZeroStopped=!1}n(e,"laya.ani.AnimationPlayer",s);var i=e.prototype;return st.imps(i,{"laya.resource.IDestroy":!0}),i._onTempletLoadedComputeFullKeyframeIndices=function(t,e,i){this._templet===i&&this._cachePlayRate===t&&this._cacheFrameRate===e&&this._computeFullKeyframeIndices()},i._computeFullKeyframeIndices=function(){for(var t=this._fullFrames=[],e=this._templet,i=this._cacheFrameRateInterval*this._cachePlayRate,a=0,s=e.getAnimationCount();a<s;a++){for(var r=[],n=0,h=e.getAnimation(a).nodes.length;n<h;n++){for(var l=e.getAnimation(a).nodes[n],o=Math.floor(l.playTime/i+.01),u=new Uint16Array(o+1),c=-1,d=0,_=l.keyFrame.length;d<_;d++){var p=l.keyFrame[d],f=p.startTime,m=f+p.duration+i;do{for(var y=Math.floor(f/i+.5),x=c+1;x<y;x++)u[x]=d;u[c=y]=d,f+=i}while(f<=m)}r.push(u)}t.push(r)}},i._onAnimationTempletLoaded=function(){this.destroyed||this._calculatePlayDuration()},i._calculatePlayDuration=function(){if(0!==this.state){var t=this._templet.getAniDuration(this._currentAnimationClipIndex);0===this._playEnd&&(this._playEnd=t),this._playEnd>t&&(this._playEnd=t),this._playDuration=this._playEnd-this._playStart}},i._setPlayParams=function(t,e){this._currentTime=t,this._currentKeyframeIndex=Math.max(Math.floor(this.currentPlayTime/e+.01),0),this._currentFrameTime=this._currentKeyframeIndex*e},i._setPlayParamsWhenStop=function(t,e){this._currentTime=t,this._currentKeyframeIndex=Math.max(Math.floor(t/e+.01),0),this._currentFrameTime=this._currentKeyframeIndex*e,this._currentAnimationClipIndex=-1},i._update=function(t){if(-1!==this._currentAnimationClipIndex&&!this._paused&&this._templet&&this._templet.loaded){var e=this._cacheFrameRateInterval*this._cachePlayRate,i=0;this._startUpdateLoopCount!==x.loopCount&&(i=t*this.playbackRate,this._elapsedPlaybackTime+=i);var a=this.playDuration;if(0!==this._overallDuration&&this._elapsedPlaybackTime>=this._overallDuration||0===this._overallDuration&&this._elapsedPlaybackTime>=a)return this._setPlayParamsWhenStop(a,e),void this.event("stopped");if(i+=this._currentTime,0<a)if(a<=i)do{if(i-=a,this._stopWhenCircleFinish)return this._setPlayParamsWhenStop(a,e),this._stopWhenCircleFinish=!1,void this.event("stopped");i<a&&(this._setPlayParams(i,e),this.event("complete"))}while(a<=i);else this._setPlayParams(i,e);else{if(this._stopWhenCircleFinish)return this._setPlayParamsWhenStop(a,e),this._stopWhenCircleFinish=!1,void this.event("stopped");this._currentTime=this._currentFrameTime=this._currentKeyframeIndex=0,this.event("complete")}}},i._destroy=function(){this.offAll(),this._templet=null,this._fullFrames=null,this._destroyed=!0},i.play=function(t,e,i,a,s){if(void 0===t&&(t=0),void 0===e&&(e=1),void 0===i&&(i=2147483647),void 0===a&&(a=0),void 0===s&&(s=0),!this._templet)throw new Error("AnimationPlayer:templet must not be null,maybe you need to set url.");if(i<0||a<0||s<0)throw new Error("AnimationPlayer:overallDuration,playStart and playEnd must large than zero.");if(0!==s&&s<a)throw new Error("AnimationPlayer:start must less than end.");this._currentTime=0,this._currentFrameTime=0,this._elapsedPlaybackTime=0,this.playbackRate=e,this._overallDuration=i,this._playStart=a,this._playEnd=s,this._paused=!1,this._currentAnimationClipIndex=t,this._currentKeyframeIndex=0,this._startUpdateLoopCount=x.loopCount,this.event("played"),this._templet.loaded?this._calculatePlayDuration():this._templet.once("loaded",this,this._onAnimationTempletLoaded),this._update(0)},i.playByFrame=function(t,e,i,a,s,r){void 0===t&&(t=0),void 0===e&&(e=1),void 0===i&&(i=2147483647),void 0===a&&(a=0),void 0===s&&(s=0),void 0===r&&(r=30);var n=1e3/r;this.play(t,e,i,a*n,s*n)},i.stop=function(t){void 0===t&&(t=!0),t?(this._currentTime=this._currentFrameTime=this._currentKeyframeIndex=0,this._currentAnimationClipIndex=-1,this.event("stopped")):this._stopWhenCircleFinish=!0},a(0,i,"playEnd",function(){return this._playEnd}),a(0,i,"templet",function(){return this._templet},function(t){0===!this.state&&this.stop(!0),this._templet!==t&&((this._templet=t).loaded?this._computeFullKeyframeIndices():t.once("loaded",this,this._onTempletLoadedComputeFullKeyframeIndices,[this._cachePlayRate,this._cacheFrameRate]))}),a(0,i,"playStart",function(){return this._playStart}),a(0,i,"playDuration",function(){return this._playDuration}),a(0,i,"state",function(){return-1===this._currentAnimationClipIndex?0:this._paused?1:2}),a(0,i,"currentKeyframeIndex",function(){return this._currentKeyframeIndex}),a(0,i,"overallDuration",function(){return this._overallDuration}),a(0,i,"currentFrameTime",function(){return this._currentFrameTime}),a(0,i,"currentAnimationClipIndex",function(){return this._currentAnimationClipIndex}),a(0,i,"currentPlayTime",function(){return this._currentTime+this._playStart}),a(0,i,"cachePlayRate",function(){return this._cachePlayRate},function(t){this._cachePlayRate!==t&&(this._cachePlayRate=t,this._templet&&(this._templet.loaded?this._computeFullKeyframeIndices():this._templet.once("loaded",this,this._onTempletLoadedComputeFullKeyframeIndices,[t,this._cacheFrameRate])))}),a(0,i,"cacheFrameRate",function(){return this._cacheFrameRate},function(t){this._cacheFrameRate!==t&&(this._cacheFrameRate=t,this._cacheFrameRateInterval=1e3/this._cacheFrameRate,this._templet&&(this._templet.loaded?this._computeFullKeyframeIndices():this._templet.once("loaded",this,this._onTempletLoadedComputeFullKeyframeIndices,[this._cachePlayRate,t])))}),a(0,i,"currentTime",null,function(t){if(-1!==this._currentAnimationClipIndex&&this._templet&&this._templet.loaded){if(t<this._playStart||t>this._playEnd)throw new Error("AnimationPlayer:value must large than playStartTime,small than playEndTime.");this._startUpdateLoopCount=x.loopCount;var e=this._cacheFrameRateInterval*this._cachePlayRate;this._currentTime=t,this._currentKeyframeIndex=Math.max(Math.floor(this.currentPlayTime/e),0),this._currentFrameTime=this._currentKeyframeIndex*e}}),a(0,i,"paused",function(){return this._paused},function(t){(this._paused=t)&&this.event("paused")}),a(0,i,"cacheFrameRateInterval",function(){return this._cacheFrameRateInterval}),a(0,i,"destroyed",function(){return this._destroyed}),e}(),tt=(n(et,"laya.ani.GraphicsAni",r),et.prototype.drawSkin=function(t){var e=[t];this._saveToCmd(m._context._drawSkin,e)},et.create=function(){return et._caches.pop()||new et},et.recycle=function(t){t.clear(),et._caches.push(t)},et._caches=[],et);function et(){et.__super.call(this),m.isConchNode&&(this.drawSkin=function(t){t.transform||(t.transform=St.EMPTY),this._addCmd([t]),this.setSkinMesh&&this.setSkinMesh(t._ps,t.mVBData,t.mEleNum,0,t.mTexture,t.transform)})}var it=function(t){function a(){a.__super.call(this),this.mesh=new C}n(a,"laya.ani.bone.canvasmesh.SkinMeshCanvas",A);var e=a.prototype;return e.init2=function(t,e,i,a,s){var r;this.transform&&(this.transform=null),i?r=i:(r=[]).push(0,1,3,3,1,2),this.mesh.texture=t,this.mesh.indexes=r,this.mesh.vertices=a,this.mesh.uvs=s},e.render=function(t,e,i){this.mesh.texture&&(this.transform?(this.transform.translate(e,i),this.renderToContext(t),this.transform.translate(-e,-i)):(this.transform=a._tempMatrix,this.transform.identity(),this.transform.translate(e,i),this.renderToContext(t),this.transform.translate(-e,-i),this.transform=null))},i(a,["_tempMatrix",function(){return this._tempMatrix=new St}]),a}(),at=function(t){function x(){this._aniMap={},this.unfixedLastAniIndex=-1,x.__super.call(this),this._anis=new Array}n(x,"laya.ani.AnimationTemplet",p);var e=x.prototype;return e.parse=function(t){var e=new wt(t);this._aniVersion=e.readUTFString(),M.parse(this,e)},e._calculateKeyFrame=function(t,e,i){var a=t.keyFrame;a[e]=a[0];for(var s=0;s<e;s++){var r=a[s];r.nextData=0===r.duration?r.data:a[s+1].data}a.length--},e.onAsynLoaded=function(t,e,i){var a=new wt(e);switch(this._aniVersion=a.readUTFString(),this._aniVersion){case"LAYAANIMATION:02":b.parse(this,a);break;default:M.parse(this,a)}this._endLoaded()},e.disposeResource=function(){this._aniVersion=null,this._anis=null,this._aniMap=null,this._publicExtData=null,this.unfixedCurrentFrameIndexes=null,this.unfixedCurrentTimes=null,this.unfixedKeyframes=null,this._aniClassName=null,this._animationDatasCache=null},e.getAnimationCount=function(){return this._anis.length},e.getAnimation=function(t){return this._anis[t]},e.getAniDuration=function(t){return this._anis[t].playTime},e.getNodes=function(t){return this._anis[t].nodes},e.getNodeIndexWithName=function(t,e){return this._anis[t].bone3DMap[e]},e.getNodeCount=function(t){return this._anis[t].nodes.length},e.getTotalkeyframesLength=function(t){return this._anis[t].totalKeyframeDatasLength},e.getPublicExtData=function(){return this._publicExtData},e.getAnimationDataWithCache=function(t,e,i,a){var s=e[i];if(s){var r=s[t];return r?r[a]:null}return null},e.setAnimationDataWithCache=function(t,e,i,a,s){var r=e[i]||(e[i]={});(r[t]||(r[t]=[]))[a]=s},e.getOriginalData=function(t,e,i,a,s){for(var r=this._anis[t].nodes,n=0,h=0,l=r.length,o=0;h<l;h++){var u,c=r[h];u=c.keyFrame[i[h][a]],c.dataOffset=o;var d=s-u.startTime,_=c.lerpType;if(_)switch(_){case 0:case 1:for(n=0;n<c.keyframeWidth;)n+=c.interpolationMethod[n](c,n,e,o+n,u.data,d,null,u.duration,u.nextData);break;case 2:var p=u.interpolationData,f=p.length,m=0;for(n=0;n<f;){var y=p[n];switch(y){case 6:case 7:n+=x.interpolation[y](c,m,e,o+m,u.data,d,null,u.duration,u.nextData,p,n+1);break;default:n+=x.interpolation[y](c,m,e,o+m,u.data,d,null,u.duration,u.nextData)}m++}}else for(n=0;n<c.keyframeWidth;)n+=c.interpolationMethod[n](c,n,e,o+n,u.data,d,null,u.duration,u.nextData);o+=c.keyframeWidth}},e.getNodesCurrentFrameIndex=function(t,e){var i=this._anis[t].nodes;t!==this.unfixedLastAniIndex&&(this.unfixedCurrentFrameIndexes=new Uint32Array(i.length),this.unfixedCurrentTimes=new Float32Array(i.length),this.unfixedLastAniIndex=t);for(var a=0,s=i.length;a<s;a++){var r=i[a];for(e<this.unfixedCurrentTimes[a]&&(this.unfixedCurrentFrameIndexes[a]=0),this.unfixedCurrentTimes[a]=e;this.unfixedCurrentFrameIndexes[a]<r.keyFrame.length&&!(r.keyFrame[this.unfixedCurrentFrameIndexes[a]].startTime>this.unfixedCurrentTimes[a]);)this.unfixedCurrentFrameIndexes[a]++;this.unfixedCurrentFrameIndexes[a]--}return this.unfixedCurrentFrameIndexes},e.getOriginalDataUnfixedRate=function(t,e,i){var a=this._anis[t].nodes;t!==this.unfixedLastAniIndex&&(this.unfixedCurrentFrameIndexes=new Uint32Array(a.length),this.unfixedCurrentTimes=new Float32Array(a.length),this.unfixedKeyframes=f(a.length),this.unfixedLastAniIndex=t);for(var s=0,r=0,n=a.length,h=0;r<n;r++){var l=a[r];for(i<this.unfixedCurrentTimes[r]&&(this.unfixedCurrentFrameIndexes[r]=0),this.unfixedCurrentTimes[r]=i;this.unfixedCurrentFrameIndexes[r]<l.keyFrame.length&&!(l.keyFrame[this.unfixedCurrentFrameIndexes[r]].startTime>this.unfixedCurrentTimes[r]);)this.unfixedKeyframes[r]=l.keyFrame[this.unfixedCurrentFrameIndexes[r]],this.unfixedCurrentFrameIndexes[r]++;var o=this.unfixedKeyframes[r];l.dataOffset=h;var u=i-o.startTime;if(l.lerpType)switch(l.lerpType){case 0:case 1:for(s=0;s<l.keyframeWidth;)s+=l.interpolationMethod[s](l,s,e,h+s,o.data,u,null,o.duration,o.nextData);break;case 2:var c=o.interpolationData,d=c.length,_=0;for(s=0;s<d;){var p=c[s];switch(p){case 6:case 7:s+=x.interpolation[p](l,_,e,h+_,o.data,u,null,o.duration,o.nextData,c,s+1);break;default:s+=x.interpolation[p](l,_,e,h+_,o.data,u,null,o.duration,o.nextData)}_++}}else for(s=0;s<l.keyframeWidth;)s+=l.interpolationMethod[s](l,s,e,h+s,o.data,u,null,o.duration,o.nextData);h+=l.keyframeWidth}},x._LinearInterpolation_0=function(t,e,i,a,s,r,n,h,l,o){var u=0===h?0:r/h;return i[a]=(1-u)*s[e]+u*l[e],1},x._QuaternionInterpolation_1=function(t,e,i,a,s,r,n,h,l,o){var u=0===h?0:r/h;return d.slerpQuaternionArray(s,e,l,e,u,i,a),4},x._AngleInterpolation_2=function(t,e,i,a,s,r,n,h,l,o){return 0},x._RadiansInterpolation_3=function(t,e,i,a,s,r,n,h,l,o){return 0},x._Matrix4x4Interpolation_4=function(t,e,i,a,s,r,n,h,l,o){for(var u=0;u<16;u++,e++)i[a+u]=s[e]+r*n[e];return 16},x._NoInterpolation_5=function(t,e,i,a,s,r,n,h,l,o){return i[a]=s[e],1},x._BezierInterpolation_6=function(t,e,i,a,s,r,n,h,l,o,u){return void 0===u&&(u=0),i[a]=s[e]+(l[e]-s[e])*j.getBezierRate(r/h,o[u],o[u+1],o[u+2],o[u+3]),5},x._BezierInterpolation_7=function(t,e,i,a,s,r,n,h,l,o,u){return void 0===u&&(u=0),i[a]=o[u+4]+o[u+5]*j.getBezierRate((.001*r+o[u+6])/o[u+7],o[u],o[u+1],o[u+2],o[u+3]),9},x.load=function(t){return st.loader.create(t,null,null,x)},x.interpolation=[x._LinearInterpolation_0,x._QuaternionInterpolation_1,x._AngleInterpolation_2,x._RadiansInterpolation_3,x._Matrix4x4Interpolation_4,x._NoInterpolation_5,x._BezierInterpolation_6,x._BezierInterpolation_7],x}(),nt=(function(t){function a(){this.isCached=!1,this.canvas=null,this.tex=null,this.rec=null,a.__super.call(this)}n(a,"laya.ani.bone.canvasmesh.CacheAbleSkinMesh",it);var e=a.prototype;e.getCanvasPic=function(){var t,e=new l("2D"),i=e.getContext("2d");return this.rec=this.mesh.getBounds(),e.size(this.rec.width,this.rec.height),t=this.transform,this.transform=a.tempMt,this.transform.identity(),this.transform.translate(-this.rec.x,-this.rec.y),this.renderToContext(i),this.transform.translate(+this.rec.x,+this.rec.y),this.transform=t,new Ft(e)},e.render=function(t,e,i){this.mesh.texture&&(this.isCached||(this.isCached=!0,this.tex=this.getCanvasPic()),this.transform?(this.transform.translate(e,i),this._renderTextureToContext(t),this.transform.translate(-e,-i)):(this.transform=it._tempMatrix,this.transform.identity(),this.transform.translate(e,i),this._renderTextureToContext(t),this.transform.translate(-e,-i),this.transform=null))},e._renderTextureToContext=function(t){var e;if(this.context=t.ctx||t,t.save(),e=this.tex,this.transform){var i=this.transform;t.transform(i.a,i.b,i.c,i.d,i.tx,i.ty)}this.rec=this.mesh.getBounds(),t.translate(this.rec.x,this.rec.y),t.drawTexture(e,0,0,e.width,e.height,0,0),t.restore()},i(a,["tempMt",function(){return this.tempMt=new St}])}(),function(r){function t(){this.cacheOK=!1,this.cacheCmdOK=!1,this.transformCmds=[],this.drawCmds=[],t.__super.call(this),this.tempMesh=new C}n(t,"laya.ani.bone.canvasmesh.SimpleSkinMeshCanvas",r);var e=t.prototype;return e.init2=function(t,e,i,a,s){r.prototype.init2.call(this,t,e,i,a,s),this.cacheOK=!1,this.cacheCmdOK=!1,this.transformCmds.length=6,this.drawCmds.length=9},e.renderToContext=function(t){if(this.context=t.ctx||t,this.mesh){if(this.mesh.uvs.length<=8)return void(0==this.mode?this._renderWithIndexes(this.mesh):this._renderNoIndexes(this.mesh));this.cacheOK||(this.tempMesh.texture=this.mesh.texture,this.tempMesh.uvs=this.mesh.texture.uv,this.tempMesh.vertices=O.solveMesh(this.mesh,this.tempMesh.vertices),this.cacheOK=!0),0==this.mode?this._renderWithIndexes(this.tempMesh):this._renderNoIndexes(this.tempMesh)}},e._renderWithIndexes=function(t){if(this.cacheCmdOK)this.renderByCache(t);else{var e=t.indexes,i=0,a=e.length;for(1<a&&(a=1),i=0;i<a;i+=3){var s=2*e[i],r=2*e[i+1],n=2*e[i+2];this._renderDrawTriangle(t,s,r,n)}this.cacheCmdOK=!0}},e._renderDrawTriangle=function(t,e,i,a){var s=this.context,r=t.uvs,n=t.vertices,h=t.texture,l=h.bitmap,o=l.source,u=h.width,c=h.height,d=l.width,_=l.height,p=NaN,f=NaN,m=NaN,y=NaN,x=NaN,g=NaN;if(t.useUvTransform){var v=t.uvTransform;p=(r[e]*v.a+r[e+1]*v.c+v.tx)*d,f=(r[i]*v.a+r[i+1]*v.c+v.tx)*d,m=(r[a]*v.a+r[a+1]*v.c+v.tx)*d,y=(r[e]*v.b+r[e+1]*v.d+v.ty)*_,x=(r[i]*v.b+r[i+1]*v.d+v.ty)*_,g=(r[a]*v.b+r[a+1]*v.d+v.ty)*_}else p=r[e]*d,f=r[i]*d,m=r[a]*d,y=r[e+1]*_,x=r[i+1]*_,g=r[a+1]*_;var D=n[e],M=n[i],I=n[a],b=n[e+1],N=n[i+1],T=n[a+1],A=1/(p*x+y*m+f*g-x*m-y*f-p*g),C=D*x+y*I+M*g-x*I-y*M-D*g,w=p*M+D*m+f*I-M*m-D*f-p*I,S=p*x*I+y*M*m+D*f*g-D*x*m-y*f*I-p*M*g,F=b*x+y*T+N*g-x*T-y*N-b*g,k=p*N+b*m+f*T-N*m-b*f-p*T,P=p*x*T+y*N*m+b*f*g-b*x*m-y*f*T-p*N*g;if(this.transformCmds[0]=C*A,this.transformCmds[1]=F*A,this.transformCmds[2]=w*A,this.transformCmds[3]=k*A,this.transformCmds[4]=S*A,this.transformCmds[5]=P*A,this.drawCmds[0]=o,this.drawCmds[1]=h.uv[0]*d,this.drawCmds[2]=h.uv[1]*_,this.drawCmds[3]=u,this.drawCmds[4]=c,this.drawCmds[5]=h.uv[0]*d,this.drawCmds[6]=h.uv[1]*_,this.drawCmds[7]=u,this.drawCmds[8]=c,s.save(),this.transform){var B=this.transform;s.transform(B.a,B.b,B.c,B.d,B.tx,B.ty)}s.transform.apply(s,this.transformCmds),s.drawImage.apply(s,this.drawCmds),s.restore()},e.renderByCache=function(t){var e=this.context;if(e.save(),this.transform){var i=this.transform;e.transform(i.a,i.b,i.c,i.d,i.tx,i.ty)}e.transform.apply(e,this.transformCmds),e.drawImage.apply(e,this.drawCmds),e.restore()},t}(it)),ht=function(e){function i(t,e){this._templet=null,this._player=null,this._curOriginalData=null,this._boneMatrixArray=[],this._lastTime=0,this._currAniName=null,this._currAniIndex=-1,this._pause=!0,this._aniClipIndex=-1,this._clipIndex=-1,this._skinIndex=0,this._skinName="default",this._aniMode=0,this._graphicsCache=null,this._boneSlotDic=null,this._bindBoneBoneSlotDic=null,this._boneSlotArray=null,this._index=-1,this._total=-1,this._indexControl=!1,this._aniPath=null,this._texturePath=null,this._complete=null,this._loadAniMode=0,this._yReverseMatrix=null,this._ikArr=null,this._tfArr=null,this._pathDic=null,this._rootBone=null,this._boneList=null,this._aniSectionDic=null,this._eventIndex=0,this._drawOrderIndex=0,this._drawOrder=null,this._lastAniClipIndex=-1,this._lastUpdateAniClipIndex=-1,i.__super.call(this),void 0===e&&(e=0),t&&this.init(t,e)}n(i,"laya.ani.bone.Skeleton",e);var t=i.prototype;return t.init=function(t,e){void 0===e&&(e=0);var i,a,s,r=0,n=0;if(1==e)for(this._graphicsCache=[],r=0,n=t.getAnimationCount();r<n;r++)this._graphicsCache.push([]);if(this._yReverseMatrix=t.yReverseMatrix,this._aniMode=e,this._templet=t,this._player=new J,this._player.cacheFrameRate=t.rate,this._player.templet=t,this._player.play(),this._parseSrcBoneMatrix(),this._boneList=t.mBoneArr,this._rootBone=t.mRootBone,this._aniSectionDic=t.aniSectionDic,0<t.ikArr.length)for(this._ikArr=[],r=0,n=t.ikArr.length;r<n;r++)this._ikArr.push(new L(t.ikArr[r],this._boneList));if(0<t.pathArr.length)for(null==this._pathDic&&(this._pathDic={}),r=0,n=t.pathArr.length;r<n;r++)i=t.pathArr[r],a=new K(i,this._boneList),(s=this._boneSlotDic[i.name])&&((a=new K(i,this._boneList)).target=s),this._pathDic[i.name]=a;if(0<t.tfArr.length)for(this._tfArr=[],r=0,n=t.tfArr.length;r<n;r++)this._tfArr.push(new X(t.tfArr[r],this._boneList));if(0<t.skinDataArray.length){var h=this._templet.skinDataArray[this._skinIndex];this._skinName=h.name}this._player.on("played",this,this._onPlay),this._player.on("stopped",this,this._onStop),this._player.on("paused",this,this._onPause)},t.load=function(t,e,i){void 0===i&&(i=0),this._aniPath=t,this._complete=e,this._loadAniMode=i,st.loader.load([{url:t,type:"arraybuffer"}],o.create(this,this._onLoaded))},t._onLoaded=function(){var t,e=u.getRes(this._aniPath);null!=e&&(null==lt.TEMPLET_DICTIONARY&&(lt.TEMPLET_DICTIONARY={}),(t=lt.TEMPLET_DICTIONARY[this._aniPath])?t.isParseFail?this._parseFail():t.isParserComplete?this._parseComplete():(t.on("complete",this,this._parseComplete),t.on("error",this,this._parseFail)):((t=new lt)._setUrl(this._aniPath),(lt.TEMPLET_DICTIONARY[this._aniPath]=t).on("complete",this,this._parseComplete),t.on("error",this,this._parseFail),t.isParserComplete=!1,t.parseData(null,e)))},t._parseComplete=function(){var t=lt.TEMPLET_DICTIONARY[this._aniPath];t&&(this.init(t,this._loadAniMode),this.play(0,!0)),this._complete&&this._complete.runWith(this)},t._parseFail=function(){console.log("[Error]:"+this._aniPath+"解析失败")},t._onPlay=function(){this.event("played")},t._onStop=function(){var t,e=this._templet.eventAniArr[this._aniClipIndex];if(e&&this._eventIndex<e.length)for(;this._eventIndex<e.length;this._eventIndex++)(t=e[this._eventIndex]).time>=this._player.playStart&&t.time<=this._player.playEnd&&this.event("label",t);this._drawOrder=null,this.event("stopped")},t._onPause=function(){this.event("paused")},t._parseSrcBoneMatrix=function(){var t=0,e=0;for(e=this._templet.srcBoneMatrixArr.length,t=0;t<e;t++)this._boneMatrixArray.push(new St);if(0==this._aniMode)this._boneSlotDic=this._templet.boneSlotDic,this._bindBoneBoneSlotDic=this._templet.bindBoneBoneSlotDic,this._boneSlotArray=this._templet.boneSlotArray;else{null==this._boneSlotDic&&(this._boneSlotDic={}),null==this._bindBoneBoneSlotDic&&(this._bindBoneBoneSlotDic={}),null==this._boneSlotArray&&(this._boneSlotArray=[]);var i,a,s=this._templet.boneSlotArray;for(t=0,e=s.length;t<e;t++)i=s[t],null==(a=this._bindBoneBoneSlotDic[i.parent])&&(this._bindBoneBoneSlotDic[i.parent]=a=[]),this._boneSlotDic[i.name]=i=i.copy(),a.push(i),this._boneSlotArray.push(i)}},t._emitMissedEvents=function(t,e,i){void 0===i&&(i=0);var a=this._templet.eventAniArr[this._player.currentAnimationClipIndex];if(a){var s,r,n=0;for(s=a.length,n=i;n<s;n++)(r=a[n]).time>=this._player.playStart&&r.time<=this._player.playEnd&&this.event("label",r)}},t._update=function(t){if(void 0===t&&(t=!0),!(this._pause||t&&this._indexControl)){var e=this.timer.currTimer,i=this._player.currentKeyframeIndex,a=e-this._lastTime;if(t?this._player._update(a):i=-1,this._lastTime=e,this._player&&(this._index=this._clipIndex=this._player.currentKeyframeIndex,!(this._index<0||0<a&&this._clipIndex==i&&this._lastUpdateAniClipIndex==this._aniClipIndex))){var s;this._lastUpdateAniClipIndex=this._aniClipIndex,i>this._clipIndex&&0!=this._eventIndex&&(this._emitMissedEvents(this._player.playStart,this._player.playEnd,this._eventIndex),this._eventIndex=0);var r,n=this._templet.eventAniArr[this._aniClipIndex];if(n&&this._eventIndex<n.length&&((s=n[this._eventIndex]).time>=this._player.playStart&&s.time<=this._player.playEnd?this._player.currentPlayTime>=s.time&&(this.event("label",s),this._eventIndex++):this._eventIndex++),0==this._aniMode){if(r=this._templet.getGrahicsDataWithCache(this._aniClipIndex,this._clipIndex))return void(this.graphics!=r&&(this.graphics=r));var h=0,l=0;for(l=this._clipIndex;!this._templet.getGrahicsDataWithCache(this._aniClipIndex,l-1)&&0<l;)l--;if(l<this._clipIndex)for(h=l;h<this._clipIndex;h++)this._createGraphics(h)}else if(1==this._aniMode){if(r=this._getGrahicsDataWithCache(this._aniClipIndex,this._clipIndex))return void(this.graphics!=r&&(this.graphics=r));for(l=this._clipIndex;!this._getGrahicsDataWithCache(this._aniClipIndex,l-1)&&0<l;)l--;if(l<this._clipIndex)for(h=l;h<this._clipIndex;h++)this._createGraphics(h)}this._createGraphics()}}},t._createGraphics=function(t){void 0===t&&(t=-1),-1==t&&(t=this._clipIndex);var e,i,a=t*this._player.cacheFrameRateInterval,s=this._templet.drawOrderAniArr[this._aniClipIndex];if(s&&0<s.length)for(this._drawOrderIndex=0,e=s[this._drawOrderIndex];a>=e.time&&(this._drawOrder=e.drawOrder,this._drawOrderIndex++,!(this._drawOrderIndex>=s.length));)e=s[this._drawOrderIndex];0==this._aniMode||1==this._aniMode?this.graphics=tt.create():this.graphics instanceof laya.ani.GraphicsAni?this.graphics.clear():this.graphics=tt.create(),i=this.graphics;var r=this._templet.getNodes(this._aniClipIndex);this._templet.getOriginalData(this._aniClipIndex,this._curOriginalData,this._player._fullFrames[this._aniClipIndex],t,a);var n,h,l,o,u=this._aniSectionDic[this._aniClipIndex],c=0,d=0,_=0,p=0,f=0,m=this._templet.srcBoneMatrixArr.length;for(f=u[d=0];d<m;d++)o=this._boneList[d],l=this._templet.srcBoneMatrixArr[d],o.resultTransform.scX=l.scX*this._curOriginalData[c++],o.resultTransform.skX=l.skX+this._curOriginalData[c++],o.resultTransform.skY=l.skY+this._curOriginalData[c++],o.resultTransform.scY=l.scY*this._curOriginalData[c++],o.resultTransform.x=l.x+this._curOriginalData[c++],o.resultTransform.y=l.y+this._curOriginalData[c++],8===this._templet.tMatrixDataLen&&(o.resultTransform.skewX=l.skewX+this._curOriginalData[c++],o.resultTransform.skewY=l.skewY+this._curOriginalData[c++]);var y,x={},g={};for(f+=u[1];d<f;d++)x[(y=r[d]).name]=this._curOriginalData[c++],g[y.name]=this._curOriginalData[c++],this._curOriginalData[c++],this._curOriginalData[c++],this._curOriginalData[c++],this._curOriginalData[c++];var v,D,M={},I={};for(f+=u[2];d<f;d++)M[(y=r[d]).name]=this._curOriginalData[c++],I[y.name]=this._curOriginalData[c++],this._curOriginalData[c++],this._curOriginalData[c++],this._curOriginalData[c++],this._curOriginalData[c++];if(this._pathDic)for(f+=u[3];d<f;d++){if(y=r[d],v=this._pathDic[y.name])switch(new wt(y.extenData).getByte()){case 1:v.position=this._curOriginalData[c++];break;case 2:v.spacing=this._curOriginalData[c++];break;case 3:v.rotateMix=this._curOriginalData[c++],v.translateMix=this._curOriginalData[c++]}}if(this._yReverseMatrix?this._rootBone.update(this._yReverseMatrix):this._rootBone.update(St.TEMP.identity()),this._ikArr)for(d=0,f=this._ikArr.length;d<f;d++)D=this._ikArr[d],M.hasOwnProperty(D.name)&&(D.bendDirection=M[D.name]),I.hasOwnProperty(D.name)&&(D.mix=I[D.name]),D.apply();if(this._pathDic)for(var b in this._pathDic)(v=this._pathDic[b]).apply(this._boneList,i);if(this._tfArr)for(d=0,p=this._tfArr.length;d<p;d++)this._tfArr[d].apply();for(d=0,p=this._boneList.length;d<p;d++)if(o=this._boneList[d],h=this._bindBoneBoneSlotDic[o.name],o.resultMatrix.copyTo(this._boneMatrixArray[d]),h)for(_=0,f=h.length;_<f;_++)(n=h[_])&&n.setParentMatrix(o.resultMatrix);var N,T,A,C,w={},S=this._templet.deformAniArr;if(S&&0<S.length){if(this._lastAniClipIndex!=this._aniClipIndex)for(this._lastAniClipIndex=this._aniClipIndex,d=0,f=this._boneSlotArray.length;d<f;d++)(n=this._boneSlotArray[d]).deformData=null;var F,k=S[this._aniClipIndex];for(F in N=k.default,this._setDeform(N,w,this._boneSlotArray,a),k)"default"!=F&&F!=this._skinName&&(N=k[F],this._setDeform(N,w,this._boneSlotArray,a));N=k[this._skinName],this._setDeform(N,w,this._boneSlotArray,a)}if(this._drawOrder)for(d=0,f=this._drawOrder.length;d<f;d++)T=x[(n=this._boneSlotArray[this._drawOrder[d]]).name],A=g[n.name],isNaN(A)||(i.save(),i.alpha(A)),isNaN(T)||-2==T||(this._templet.attachmentNames?n.showDisplayByName(this._templet.attachmentNames[T]):n.showDisplayByIndex(T)),w[this._drawOrder[d]]?(C=w[this._drawOrder[d]],n.currDisplayData&&C[n.currDisplayData.attachmentName]?n.deformData=C[n.currDisplayData.attachmentName]:n.deformData=null):n.deformData=null,isNaN(A)?n.draw(i,this._boneMatrixArray,2==this._aniMode):n.draw(i,this._boneMatrixArray,2==this._aniMode,A),isNaN(A)||i.restore();else for(d=0,f=this._boneSlotArray.length;d<f;d++)T=x[(n=this._boneSlotArray[d]).name],A=g[n.name],isNaN(A)||(i.save(),i.alpha(A)),isNaN(T)||-2==T||(this._templet.attachmentNames?n.showDisplayByName(this._templet.attachmentNames[T]):n.showDisplayByIndex(T)),w[d]?(C=w[d],n.currDisplayData&&C[n.currDisplayData.attachmentName]?n.deformData=C[n.currDisplayData.attachmentName]:n.deformData=null):n.deformData=null,isNaN(A)?n.draw(i,this._boneMatrixArray,2==this._aniMode):n.draw(i,this._boneMatrixArray,2==this._aniMode,A),isNaN(A)||i.restore();0==this._aniMode?this._templet.setGrahicsDataWithCache(this._aniClipIndex,t,i):1==this._aniMode&&this._setGrahicsDataWithCache(this._aniClipIndex,t,i)},t._setDeform=function(t,e,i,a){if(t){var s,r,n,h=0,l=0,o=0;if(t)for(h=0,l=t.deformSlotDataList.length;h<l;h++)for(s=t.deformSlotDataList[h],o=0;o<s.deformSlotDisplayList.length;o++)n=i[(r=s.deformSlotDisplayList[o]).slotIndex],r.apply(a,n),e[r.slotIndex]||(e[r.slotIndex]={}),e[r.slotIndex][r.attachment]=r.deformData}},t.getAnimNum=function(){return this._templet.getAnimationCount()},t.getAniNameByIndex=function(t){return this._templet.getAniNameByIndex(t)},t.getSlotByName=function(t){return this._boneSlotDic[t]},t.showSkinByName=function(t,e){void 0===e&&(e=!0),this.showSkinByIndex(this._templet.getSkinIndexByName(t),e)},t.showSkinByIndex=function(t,e){void 0===e&&(e=!0);for(var i=0;i<this._boneSlotArray.length;i++)this._boneSlotArray[i].showSlotData(null,e);if(this._templet.showSkinByIndex(this._boneSlotDic,t,e)){var a=this._templet.skinDataArray[t];this._skinIndex=t,this._skinName=a.name}this._clearCache()},t.showSlotSkinByIndex=function(t,e){if(0!=this._aniMode){var i=this.getSlotByName(t);i&&i.showDisplayByIndex(e),this._clearCache()}},t.showSlotSkinByName=function(t,e){if(0!=this._aniMode){var i=this.getSlotByName(t);i&&i.showDisplayByName(e),this._clearCache()}},t.replaceSlotSkinName=function(t,e,i){if(0!=this._aniMode){var a=this.getSlotByName(t);a&&a.replaceDisplayByName(e,i),this._clearCache()}},t.replaceSlotSkinByIndex=function(t,e,i){if(0!=this._aniMode){var a=this.getSlotByName(t);a&&a.replaceDisplayByIndex(e,i),this._clearCache()}},t.setSlotSkin=function(t,e){if(0!=this._aniMode){var i=this.getSlotByName(t);i&&i.replaceSkin(e),this._clearCache()}},t._clearCache=function(){if(1==this._aniMode)for(var t=0,e=this._graphicsCache.length;t<e;t++){for(var i=0,a=this._graphicsCache[t].length;i<a;i++){var s=this._graphicsCache[t][i];s!=this.graphics&&tt.recycle(s)}this._graphicsCache[t].length=0}},t.play=function(t,e,i,a,s,r){void 0===i&&(i=!0),void 0===a&&(a=0),void 0===s&&(s=0),void 0===r&&(r=!0),this._indexControl=!1;var n=-1,h=NaN;if(h=e?2147483647:0,"string"==typeof t)for(var l=0,o=this._templet.getAnimationCount();l<o;l++){var u=this._templet.getAnimation(l);if(u&&t==u.name){n=l;break}}else n=t;-1<n&&n<this.getAnimNum()&&(this._aniClipIndex=n,(i||this._pause||this._currAniIndex!=n)&&(this._currAniIndex=n,this._curOriginalData=new Float32Array(this._templet.getTotalkeyframesLength(n)),this._drawOrder=null,this._eventIndex=0,this._player.play(n,this._player.playbackRate,h,a,s),r&&this._templet.showSkinByIndex(this._boneSlotDic,this._skinIndex),this._pause&&(this._pause=!1,this._lastTime=c.now(),this.timer.frameLoop(1,this,this._update,null,!0)),this._update()))},t.stop=function(){this._pause||(this._pause=!0,this._player&&this._player.stop(!0),this.timer.clear(this,this._update))},t.playbackRate=function(t){this._player&&(this._player.playbackRate=t)},t.paused=function(){this._pause||(this._pause=!0,this._player&&(this._player.paused=!0),this.timer.clear(this,this._update))},t.resume=function(){this._indexControl=!1,this._pause&&(this._pause=!1,this._player&&(this._player.paused=!1),this._lastTime=c.now(),this.timer.frameLoop(1,this,this._update,null,!0))},t._getGrahicsDataWithCache=function(t,e){return this._graphicsCache[t][e]},t._setGrahicsDataWithCache=function(t,e,i){this._graphicsCache[t][e]=i},t.destroy=function(t){void 0===t&&(t=!0),e.prototype.destroy.call(this,t),this._templet=null,this._player&&this._player.offAll(),this._player=null,this._curOriginalData=null,this._boneMatrixArray.length=0,this._lastTime=0,this.timer.clear(this,this._update)},a(0,t,"url",function(){return this._aniPath},function(t){this.load(t)}),a(0,t,"index",function(){return this._index},function(t){this.player&&(this._index=t,this._player.currentTime=1e3*this._index/this._player.cacheFrameRate,this._indexControl=!0,this._update(!1))}),a(0,t,"total",function(){return this._templet&&this._player?this._total=Math.floor(this._templet.getAniDuration(this._player.currentAnimationClipIndex)/1e3*this._player.cacheFrameRate):this._total=-1,this._total}),a(0,t,"templet",function(){return this._templet}),a(0,t,"player",function(){return this._player}),i.useSimpleMeshInCanvas=!1,i}(rt),lt=(function(e){function f(t){this._start=0,this._Pos=0,this._data=null,this._curIndex=0,this._preIndex=0,this._playIndex=0,this._playing=!1,this._ended=!0,this._count=0,this._ids=null,this._loadedImage={},this._idOfSprite=null,this._parentMovieClip=null,this._movieClipList=null,this._labels=null,this.basePath=null,this._atlasPath=null,this._url=null,this._isRoot=!1,this._completeHandler=null,this._endFrame=-1,this.interval=30,this.loop=!1,f.__super.call(this),this._ids={},this._idOfSprite=[],this._reset(),this._playing=!1,(this._parentMovieClip=t)?(this._isRoot=!1,this._movieClipList=t._movieClipList,this._movieClipList.push(this)):(this._movieClipList=[this],this._isRoot=!0,this._setUpNoticeType(1))}n(f,"laya.ani.swf.MovieClip",e);var t=f.prototype;t.destroy=function(t){void 0===t&&(t=!0),this._clear(),e.prototype.destroy.call(this,t)},t._setDisplay=function(t){e.prototype._setDisplay.call(this,t),this._isRoot&&this._$3__onDisplay(t)},t._$3__onDisplay=function(t){t?this.timer.loop(this.interval,this,this.updates,null,!0):this.timer.clear(this,this.updates)},t.updates=function(){if(!this._parentMovieClip){var t,e=0;for(t=this._movieClipList.length,e=0;e<t;e++)this._movieClipList[e]&&this._movieClipList[e]._update()}},t.addLabel=function(t,e){this._labels||(this._labels={}),this._labels[e]=t},t.removeLabel=function(t){if(t){if(!this._labels)for(var e in this._labels)if(this._labels[e]===t){delete this._labels[e];break}}else this._labels=null},t._update=function(){if(this._data&&this._playing){if(this._playIndex++,this._playIndex>=this._count){if(!this.loop)return this._playIndex--,void this.stop();this._playIndex=0}if(this._parse(this._playIndex),this._labels&&this._labels[this._playIndex]&&this.event("label",this._labels[this._playIndex]),-1!=this._endFrame&&this._endFrame==this._playIndex){if(this._endFrame=-1,null!=this._completeHandler){var t=this._completeHandler;this._completeHandler=null,t.run()}this.stop()}}},t.stop=function(){this._playing=!1},t.gotoAndStop=function(t){this.index=t,this.stop()},t._clear=function(){if(this.stop(),this._idOfSprite.length=0,!this._parentMovieClip){this.timer.clear(this,this.updates);var t,e=0;for(t=this._movieClipList.length,e=0;e<t;e++)this._movieClipList[e]!=this&&this._movieClipList[e]._clear();this._movieClipList.length=0}var i;for(i in this._atlasPath&&u.clearRes(this._atlasPath),this._loadedImage)this._loadedImage[i]&&(u.clearRes(i),this._loadedImage[i]=!1);this.removeChildren(),this.graphics=null,this._parentMovieClip=null},t.play=function(t,e){void 0===t&&(t=0),void 0===e&&(e=!0),this.loop=e,this._playing=!0,this._data&&this._displayFrame(t)},t._displayFrame=function(t){void 0===t&&(t=-1),-1!=t&&(this._curIndex>t&&this._reset(),this._parse(t))},t._reset=function(t){void 0===t&&(t=!0),t&&1!=this._curIndex&&this.removeChildren(),this._preIndex=this._curIndex=-1,this._Pos=this._start},t._parse=function(t){var e,i,a,s=0,r=0,n=0,h=!1,l=this._idOfSprite,o=this._data;for(this._ended&&this._reset(),o.pos=this._Pos,this._ended=!1,this._playIndex=t,this._curIndex>t&&t<this._preIndex&&(this._reset(!0),o.pos=this._Pos);this._curIndex<=t&&!this._ended;)switch(o.getUint16()){case 12:if(s=o.getUint16(),r=this._ids[o.getUint16()],this._Pos=o.pos,o.pos=r,0==(n=o.getUint8())){var u=o.getUint16();if(!(i=l[s])){i=l[s]=new rt;var c=new rt;c.loadImage(this.basePath+u+".png"),this._loadedImage[this.basePath+u+".png"]=!0,i.addChild(c),c.size(o.getFloat32(),o.getFloat32());var d=o._getMatrix();c.transform=d}i.alpha=1}else 1==n&&((e=l[s])||(l[s]=e=new f(this),e.interval=this.interval,e._ids=this._ids,e.basePath=this.basePath,e._setData(o,r),e._initState(),e.play(0)),e.alpha=1);o.pos=this._Pos;break;case 3:var _=l[o.getUint16()];_&&(this.addChild(_),_.zOrder=o.getUint16(),h=!0);break;case 4:(_=l[o.getUint16()])&&_.removeSelf();break;case 5:l[o.getUint16()][f._ValueList[o.getUint16()]]=o.getFloat32();break;case 6:l[o.getUint16()].visible=0<o.getUint8();break;case 7:var p=(i=l[o.getUint16()]).transform||St.create();p.setTo(o.getFloat32(),o.getFloat32(),o.getFloat32(),o.getFloat32(),o.getFloat32(),o.getFloat32()),i.transform=p;break;case 8:l[o.getUint16()].setPos(o.getFloat32(),o.getFloat32());break;case 9:l[o.getUint16()].setSize(o.getFloat32(),o.getFloat32());break;case 10:l[o.getUint16()].alpha=o.getFloat32();break;case 11:l[o.getUint16()].setScale(o.getFloat32(),o.getFloat32());break;case 98:a=o.getString(),this.event(a),"stop"==a&&this.stop();break;case 99:this._curIndex=o.getUint16(),h&&this.updateZOrder();break;case 100:this._count=this._curIndex+1,this._ended=!0,this._playing&&(this.event("enterframe"),this.event("end"),this.event("complete")),this._reset(!1)}this._playing&&!this._ended&&this.event("enterframe"),this._Pos=o.pos},t._setData=function(t,e){this._data=t,this._start=e+3},t.load=function(t,e,i){var a;void 0===e&&(e=!1),this._url=t,e&&(this._atlasPath=i||t.split(".swf")[0]+".json"),this.stop(),this._clear(),this._movieClipList=[this],a=[{url:t,type:"arraybuffer"}],this._atlasPath&&a.push({url:this._atlasPath,type:"atlas"}),st.loader.load(a,o.create(this,this._onLoaded))},t._onLoaded=function(){var t;(t=u.getRes(this._url))?!this._atlasPath||u.getAtlas(this._atlasPath)?(this.basePath=this._atlasPath?u.getAtlas(this._atlasPath).dir:this._url.split(".swf")[0]+"/image/",this._initData(t)):this.event("error","Atlas not find"):this.event("error","file not find")},t._initState=function(){this._reset(),this._ended=!1;var t=this._playing;for(this._playing=!1,this._curIndex=0;!this._ended;)this._parse(++this._curIndex);this._playing=t},t._initData=function(t){this._data=new wt(t);var e=0,i=this._data.getUint16();for(e=0;e<i;e++)this._ids[this._data.getInt16()]=this._data.getInt32();this.interval=1e3/this._data.getUint16(),this._setData(this._data,this._ids[32767]),this._initState(),this.play(0),this.event("loaded"),this._parentMovieClip||this.timer.loop(this.interval,this,this.updates,null,!0)},t.playTo=function(t,e,i){this._completeHandler=i,this._endFrame=e,this.play(t,!1)},a(0,t,"index",function(){return this._playIndex},function(t){this._playIndex=t,this._data&&this._displayFrame(this._playIndex),this._labels&&this._labels[t]&&this.event("label",this._labels[t])}),a(0,t,"count",function(){return this._count}),a(0,t,"playing",function(){return this._playing}),a(0,t,"url",null,function(t){this.load(t)}),f._ValueList=["x","y","width","height","scaleX","scaleY","rotation","alpha"]}(rt),function(e){function s(){this._mainTexture=null,this._textureJson=null,this._graphicsCache=[],this.srcBoneMatrixArr=[],this.ikArr=[],this.tfArr=[],this.pathArr=[],this.boneSlotDic={},this.bindBoneBoneSlotDic={},this.boneSlotArray=[],this.skinDataArray=[],this.skinDic={},this.subTextureDic={},this.isParseFail=!1,this.yReverseMatrix=null,this.drawOrderAniArr=[],this.eventAniArr=[],this.attachmentNames=null,this.deformAniArr=[],this._isDestroyed=!1,this._rate=30,this.isParserComplete=!1,this.aniSectionDic={},this._skBufferUrl=null,this._textureDic={},this._loadList=null,this._path=null,this.tMatrixDataLen=0,this.mRootBone=null,s.__super.call(this),this.skinSlotDisplayDataArr=[],this.mBoneArr=[]}n(s,"laya.ani.bone.Templet",e);var t=s.prototype;return t.loadAni=function(t){this._skBufferUrl=t,st.loader.load(t,o.create(this,this.onComplete),null,"arraybuffer")},t.onComplete=function(t){if(this._isDestroyed)this.destroy();else{var e=u.getRes(this._skBufferUrl);e?(this._path=this._skBufferUrl.slice(0,this._skBufferUrl.lastIndexOf("/"))+"/",this.parseData(null,e)):this.event("error","load failed:"+this._skBufferUrl)}},t.parseData=function(t,e,i){void 0===i&&(i=30),!this._path&&this.url&&(this._path=this.url.slice(0,this.url.lastIndexOf("/"))+"/"),this._mainTexture=t,this._mainTexture&&m.isWebGL&&t.bitmap&&(t.bitmap.enableMerageInAtlas=!1),this._rate=i,this.parse(e)},t.buildArmature=function(t){return void 0===t&&(t=0),new ht(this,t)},t.parse=function(t){e.prototype.parse.call(this,t),this._endLoaded(),this._aniVersion!=s.LAYA_ANIMATION_VISION&&(console.log("[Error] 版本不一致，请使用IDE版本配套的重新导出"+this._aniVersion+"->"+s.LAYA_ANIMATION_VISION),this._loaded=!1),this.loaded?this._mainTexture?this._parsePublicExtData():this._parseTexturePath():(this.event("error",this),this.isParseFail=!0)},t._parseTexturePath=function(){if(this._isDestroyed)this.destroy();else{var t=0;this._loadList=[];var e,i=new wt(this.getPublicExtData()),a=0,s=0,r=0,n=i.getInt32(),h=i.readUTFString(),l=h.split("\n");for(t=0;t<n;t++)e=this._path+l[2*t],h=l[2*t+1],i.getFloat32(),i.getFloat32(),a=i.getFloat32(),s=i.getFloat32(),r=i.getFloat32(),isNaN(r)?0:r,r=i.getFloat32(),isNaN(r)?0:r,r=i.getFloat32(),isNaN(r)?a:r,r=i.getFloat32(),isNaN(r)?s:r,-1==this._loadList.indexOf(e)&&this._loadList.push(e);st.loader.load(this._loadList,o.create(this,this._textureComplete))}},t._textureComplete=function(){for(var t,e,i=0,a=this._loadList.length;i<a;i++)e=this._loadList[i],t=this._textureDic[e]=u.getRes(e),m.isWebGL&&t&&t.bitmap&&(t.bitmap.enableMerageInAtlas=!1);this._parsePublicExtData()},t._parsePublicExtData=function(){var t=0,e=0,i=0,a=0,s=0;for(t=0,s=this.getAnimationCount();t<s;t++)this._graphicsCache.push([]);var r;r="Dragon"!=this._aniClassName;var n,h,l=new wt(this.getPublicExtData()),o=0,u=0,c=0,d=0,_=0,p=0,f=0,m=0,y=0,x=l.getInt32(),g=l.readUTFString(),v=g.split("\n");for(t=0;t<x;t++){if(n=this._mainTexture,h=this._path+v[2*t],g=v[2*t+1],null==this._mainTexture&&(n=this._textureDic[h]),!n)return this.event("error",this),void(this.isParseFail=!0);o=l.getFloat32(),u=l.getFloat32(),c=l.getFloat32(),d=l.getFloat32(),y=l.getFloat32(),_=isNaN(y)?0:y,y=l.getFloat32(),p=isNaN(y)?0:y,y=l.getFloat32(),f=isNaN(y)?c:y,y=l.getFloat32(),m=isNaN(y)?d:y,this.subTextureDic[g]=Ft.create(n,o,u,c,d,-_,-p,f,m)}this._mainTexture=n;var D,M,I,b,N,T=l.getUint16();for(t=0;t<T;t++)(D=[]).push(l.getUint16()),D.push(l.getUint16()),D.push(l.getUint16()),D.push(l.getUint16()),this.aniSectionDic[t]=D;var A,C=l.getInt16(),w={};for(t=0;t<C;t++)M=new kt,0==t?A=M:M.root=A,M.d=r?-1:1,b=l.readUTFString(),N=l.readUTFString(),M.length=l.getFloat32(),1==l.getByte()&&(M.inheritRotation=!1),1==l.getByte()&&(M.inheritScale=!1),M.name=b,N&&((I=w[N])?I.addChild(M):this.mRootBone=M),w[b]=M,this.mBoneArr.push(M);this.tMatrixDataLen=l.getUint16();var S,F,k=l.getUint16(),P=Math.floor(k/this.tMatrixDataLen),B=this.srcBoneMatrixArr;for(t=0;t<P;t++)(S=new zt).scX=l.getFloat32(),S.skX=l.getFloat32(),S.skY=l.getFloat32(),S.scY=l.getFloat32(),S.x=l.getFloat32(),S.y=l.getFloat32(),8===this.tMatrixDataLen&&(S.skewX=l.getFloat32(),S.skewY=l.getFloat32()),B.push(S),(M=this.mBoneArr[t]).transform=S;var U,L=l.getUint16(),R=0;for(t=0;t<L;t++){for(F=new Et,R=l.getUint16(),e=0;e<R;e++)F.boneNames.push(l.readUTFString()),F.boneIndexs.push(l.getInt16());F.name=l.readUTFString(),F.targetBoneName=l.readUTFString(),F.targetBoneIndex=l.getInt16(),F.bendDirection=l.getFloat32(),F.mix=l.getFloat32(),F.isSpine=r,this.ikArr.push(F)}var O,E=l.getUint16(),K=0;for(t=0;t<E;t++){for(U=new Xt,K=l.getUint16(),e=0;e<K;e++)U.boneIndexs.push(l.getInt16());U.name=l.getUTFString(),U.targetIndex=l.getInt16(),U.rotateMix=l.getFloat32(),U.translateMix=l.getFloat32(),U.scaleMix=l.getFloat32(),U.shearMix=l.getFloat32(),U.offsetRotation=l.getFloat32(),U.offsetX=l.getFloat32(),U.offsetY=l.getFloat32(),U.offsetScaleX=l.getFloat32(),U.offsetScaleY=l.getFloat32(),U.offsetShearY=l.getFloat32(),this.tfArr.push(U)}var Y=l.getUint16(),V=0;for(t=0;t<Y;t++){for((O=new Kt).name=l.readUTFString(),V=l.getUint16(),e=0;e<V;e++)O.bones.push(l.getInt16());O.target=l.readUTFString(),O.positionMode=l.readUTFString(),O.spacingMode=l.readUTFString(),O.rotateMode=l.readUTFString(),O.offsetRotation=l.getFloat32(),O.position=l.getFloat32(),O.spacing=l.getFloat32(),O.rotateMix=l.getFloat32(),O.translateMix=l.getFloat32(),this.pathArr.push(O)}var W,X,z,q,G,H=0,Q=0,Z=0,j=NaN,$=0,J=l.getInt16();for(t=0;t<J;t++){var tt=l.getUint8(),et={};this.deformAniArr.push(et);for(var it=0;it<tt;it++)for((W=new Bt).skinName=l.getUTFString(),et[W.skinName]=W,H=l.getInt16(),e=0;e<H;e++)for(X=new Ut,W.deformSlotDataList.push(X),Q=l.getInt16(),i=0;i<Q;i++)for(z=new Lt,X.deformSlotDisplayList.push(z),z.slotIndex=l.getInt16(),z.attachment=l.getUTFString(),Z=l.getInt16(),a=0;a<Z;a++)for(1==l.getByte()?z.tweenKeyList.push(!0):z.tweenKeyList.push(!1),j=l.getFloat32(),z.timeList.push(j),q=[],z.vectices.push(q),$=l.getInt16(),s=0;s<$;s++)q.push(l.getFloat32())}var at,st,rt=l.getInt16(),nt=0,ht=0;for(t=0;t<rt;t++){for(nt=l.getInt16(),G=[],e=0;e<nt;e++){for((at=new Rt).time=l.getFloat32(),ht=l.getInt16(),i=0;i<ht;i++)at.drawOrder.push(l.getInt16());G.push(at)}this.drawOrderAniArr.push(G)}var lt,ot=l.getInt16(),ut=0;for(t=0;t<ot;t++){for(ut=l.getInt16(),st=[],e=0;e<ut;e++)(lt=new Ot).name=l.getUTFString(),lt.intValue=l.getInt32(),lt.floatValue=l.getFloat32(),lt.stringValue=l.getUTFString(),lt.time=l.getFloat32(),st.push(lt);this.eventAniArr.push(st)}var ct=l.getInt16();if(0<ct)for(this.attachmentNames=[],t=0;t<ct;t++)this.attachmentNames.push(l.getUTFString());var dt,_t,pt=l.getInt16();for(t=0;t<pt;t++)(dt=new Pt).name=l.readUTFString(),dt.parent=l.readUTFString(),dt.attachmentName=l.readUTFString(),dt.srcDisplayIndex=dt.displayIndex=l.getInt16(),(dt.templet=this).boneSlotDic[dt.name]=dt,null==(_t=this.bindBoneBoneSlotDic[dt.parent])&&(this.bindBoneBoneSlotDic[dt.parent]=_t=[]),_t.push(dt),this.boneSlotArray.push(dt);var ft,mt,yt,xt=l.readUTFString().split("\n"),gt=0,vt=l.getUint8(),Dt=0,Mt=0,It=0,bt=0,Nt=0,Tt=0,At=0;for(t=0;t<vt;t++){for((ft=new Yt).name=xt[gt++],Dt=l.getUint8(),e=0;e<Dt;e++){for((mt=new Wt).name=xt[gt++],dt=this.boneSlotDic[mt.name],Mt=l.getUint8(),i=0;i<Mt;i++){if(yt=new Vt,this.skinSlotDisplayDataArr.push(yt),yt.name=xt[gt++],yt.attachmentName=xt[gt++],yt.transform=new zt,yt.transform.scX=l.getFloat32(),yt.transform.skX=l.getFloat32(),yt.transform.skY=l.getFloat32(),yt.transform.scY=l.getFloat32(),yt.transform.x=l.getFloat32(),yt.transform.y=l.getFloat32(),mt.displayArr.push(yt),yt.width=l.getFloat32(),yt.height=l.getFloat32(),yt.type=l.getUint8(),yt.verLen=l.getUint16(),0<(C=l.getUint16()))for(yt.bones=[],a=0;a<C;a++){var Ct=l.getUint16();yt.bones.push(Ct)}if(0<(It=l.getUint16()))for(yt.uvs=[],a=0;a<It;a++)yt.uvs.push(l.getFloat32());if(0<(bt=l.getUint16()))for(yt.weights=[],a=0;a<bt;a++)yt.weights.push(l.getFloat32());if(0<(Nt=l.getUint16()))for(yt.triangles=[],a=0;a<Nt;a++)yt.triangles.push(l.getUint16());if(0<(Tt=l.getUint16()))for(yt.vertices=[],a=0;a<Tt;a++)yt.vertices.push(l.getFloat32());if(0<(At=l.getUint16()))for(yt.lengths=[],a=0;a<At;a++)yt.lengths.push(l.getFloat32())}ft.slotArr.push(mt)}this.skinDic[ft.name]=ft,this.skinDataArray.push(ft)}1==l.getUint8()?(this.yReverseMatrix=new St(1,0,0,-1,0,0),A&&A.setTempMatrix(this.yReverseMatrix)):A&&A.setTempMatrix(new St),this.showSkinByIndex(this.boneSlotDic,0),this.isParserComplete=!0,this.event("complete",this)},t.getTexture=function(t){var e=this.subTextureDic[t];return e||(e=this.subTextureDic[t.substr(0,t.length-1)]),null==e?this._mainTexture:e},t.showSkinByIndex=function(t,e,i){if(void 0===i&&(i=!0),e<0&&e>=this.skinDataArray.length)return!1;var a,s,r=0,n=0,h=this.skinDataArray[e];if(h){for(r=0,n=h.slotArr.length;r<n;r++)(s=h.slotArr[r])&&(a=t[s.name])&&(a.showSlotData(s,i),i&&"undefined"!=a.attachmentName&&"null"!=a.attachmentName?a.showDisplayByName(a.attachmentName):a.showDisplayByIndex(a.displayIndex));return!0}return!1},t.getSkinIndexByName=function(t){for(var e=0,i=this.skinDataArray.length;e<i;e++)if(this.skinDataArray[e].name==t)return e;return-1},t.getGrahicsDataWithCache=function(t,e){return this._graphicsCache[t]&&this._graphicsCache[t][e]?this._graphicsCache[t][e]:null},t.setGrahicsDataWithCache=function(t,e,i){this._graphicsCache[t][e]=i},t.destroy=function(){var t;for(var e in this._isDestroyed=!0,this.subTextureDic)(t=this.subTextureDic[e])&&t.destroy();for(e in this._textureDic)(t=this._textureDic[e])&&t.destroy();for(var i=0,a=this.skinSlotDisplayDataArr.length;i<a;i++)this.skinSlotDisplayDataArr[i].destory();this.skinSlotDisplayDataArr.length=0,this.url&&delete s.TEMPLET_DICTIONARY[this.url],laya.resource.Resource.prototype.destroy.call(this)},t.getAniNameByIndex=function(t){var e=this.getAnimation(t);return e?e.name:null},a(0,t,"rate",function(){return this._rate},function(t){this._rate=t}),s.LAYA_ANIMATION_VISION="LAYAANIMATION:1.6.0",s.TEMPLET_DICTIONARY=null,s}(at))}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(t,e){"use strict";for(var i in Object.defineProperty(e,"__esModule",{value:!0}),Laya){var a=Laya[i];a&&a.__isclass&&(e[i]=a)}});
!function(t,e,a){a.un,a.uns,a.static;var n=a.class,s=a.getset,l=(a.__newvec,laya.utils.Browser,laya.utils.Color),i=laya.filters.ColorFilterAction,r=laya.filters.webgl.ColorFilterActionGL,o=laya.filters.Filter,u=laya.filters.webgl.FilterActionGL,c=laya.maths.Matrix,h=(laya.maths.Rectangle,laya.renders.Render),_=(laya.renders.RenderContext,laya.webgl.resource.RenderTarget2D),d=laya.utils.RunDriver,f=(laya.webgl.shader.d2.ShaderDefines2D,laya.display.Sprite,laya.resource.Texture,laya.webgl.shader.d2.value.Value2D),g=function(){function t(){this.data=null}n(t,"laya.filters.FilterAction");var e=t.prototype;return a.imps(e,{"laya.filters.IFilterAction":!0}),e.apply=function(t){return null},t}(),y=(n(p,"laya.filters.WebGLFilter"),p.enable=function(){p.isInit||(p.isInit=!0,h.isWebGL&&(d.createFilterAction=function(t){var e;switch(t){case 32:e=new r;break;case 16:e=new v;break;case 8:e=new w}return e}))},p.isInit=!1,p.__init$=function(){d.createFilterAction=function(t){var e;switch(t){case 16:case 8:e=new g;break;case 32:e=new i}return e}},p);function p(){}(function(t){function e(t){this.strength=NaN,this.strength_sig2_2sig2_gauss1=[],e.__super.call(this),void 0===t&&(t=4),h.isWebGL&&y.enable(),this.strength=t,this._action=d.createFilterAction(16),this._action.data=this}n(e,"laya.filters.BlurFilter",o);var i=e.prototype;i.callNative=function(t){t.conchModel&&t.conchModel.blurFilter&&t.conchModel.blurFilter(this.strength)},s(0,i,"action",function(){return this._action}),s(0,i,"type",function(){return 16})})(),function(t){function r(t,e,i,a){this._color=null,r.__super.call(this),this._elements=new Float32Array(9),void 0===e&&(e=4),void 0===i&&(i=6),void 0===a&&(a=6),h.isWebGL&&y.enable(),this._color=new l(t),this.blur=Math.min(e,20),this.offX=i,this.offY=a,this._action=d.createFilterAction(8),this._action.data=this}n(r,"laya.filters.GlowFilter",o);var e=r.prototype;e.getColor=function(){return this._color._color},e.callNative=function(t){t.conchModel&&t.conchModel.glowFilter&&t.conchModel.glowFilter(this._color.strColor,this._elements[4],this._elements[5],this._elements[6])},s(0,e,"type",function(){return 8}),s(0,e,"action",function(){return this._action}),s(0,e,"offY",function(){return this._elements[6]},function(t){this._elements[6]=t}),s(0,e,"offX",function(){return this._elements[5]},function(t){this._elements[5]=t}),s(0,e,"blur",function(){return this._elements[4]},function(t){this._elements[4]=t})}();var v=function(t){function e(){this.data=null,e.__super.call(this)}n(e,"laya.filters.webgl.BlurFilterActionGL",u);var i=e.prototype;return i.setValueMix=function(t){t.defines.add(this.data.type)},i.apply3d=function(t,e,i,a,r){var n=t.getValue("bounds"),s=f.create(1,0);s.setFilters([this.data]),c.EMPTY.identity(),i.ctx.drawTarget(t,0,0,n.width,n.height,c.EMPTY,"src",s),s.setFilters(null)},i.setValue=function(t){t.strength=this.data.strength;var e=this.data.strength/3,i=e*e;this.data.strength_sig2_2sig2_gauss1[0]=this.data.strength,this.data.strength_sig2_2sig2_gauss1[1]=i,this.data.strength_sig2_2sig2_gauss1[2]=2*i,this.data.strength_sig2_2sig2_gauss1[3]=1/(2*Math.PI*i),t.strength_sig2_2sig2_gauss1=this.data.strength_sig2_2sig2_gauss1},s(0,i,"typeMix",function(){return 16}),e}(),w=function(t){function e(){this.data=null,this._initKey=!1,this._textureWidth=0,this._textureHeight=0,e.__super.call(this)}n(e,"laya.filters.webgl.GlowFilterActionGL",u);var i=e.prototype;return a.imps(i,{"laya.filters.IFilterActionGL":!0}),i.setValueMix=function(t){},i.apply3d=function(t,e,i,a,r){var n=t.getValue("bounds");t.addValue("color",this.data.getColor());var s,l=n.width,o=n.height;this._textureWidth=l,this._textureHeight=o;var u=c.TEMP;return u.identity(),(s=f.create(1,0)).setFilters([this.data]),i.ctx.drawTarget(t,0,0,this._textureWidth,this._textureHeight,u,"src",s,null),s=f.create(1,0),i.ctx.drawTarget(t,0,0,this._textureWidth,this._textureHeight,u,"src",s),null},i.setSpriteWH=function(t){this._textureWidth=t.width,this._textureHeight=t.height},i.setValue=function(t){t.u_offsetX=this.data.offX,t.u_offsetY=-this.data.offY,t.u_strength=1,t.u_blurX=this.data.blur,t.u_blurY=this.data.blur,t.u_textW=this._textureWidth,t.u_textH=this._textureHeight,t.u_color=this.data.getColor()},s(0,i,"typeMix",function(){return 8}),e.tmpTarget=function(t,e,i,a,r){var n=t.getValue("bounds");t.getValue("out").end();var s=_.create(n.width,n.height);s.start();var l=t.getValue("color");l&&s.clear(l[0],l[1],l[2],0),t.addValue("tmpTarget",s)},e.startOut=function(t,e,i,a,r){t.getValue("tmpTarget").end();var n=t.getValue("out");n.start();var s=t.getValue("color");s&&n.clear(s[0],s[1],s[2],0)},e.recycleTarget=function(t,e,i,a,r){t.getValue("src");t.getValue("tmpTarget").recycle()},e}();a.__init([y])}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(t,e){"use strict";for(var i in Object.defineProperty(e,"__esModule",{value:!0}),Laya){var a=Laya[i];a&&a.__isclass&&(e[i]=a)}});
!function(r,t,n){n.un,n.uns;var e=n.static,s=n.class,a=n.getset,o=(n.__newvec,laya.webgl.canvas.BlendMode),u=(laya.events.Event,laya.resource.HTMLCanvas),l=laya.utils.Handler,h=laya.webgl.utils.IndexBuffer2D,d=(laya.net.Loader,laya.maths.MathUtil),c=laya.maths.Matrix,m=laya.renders.Render,i=(laya.renders.RenderContext,laya.renders.RenderSprite,laya.webgl.shader.Shader),_=laya.display.Sprite,p=laya.utils.Stat,f=laya.resource.Texture,v=laya.utils.Utils,x=laya.webgl.shader.d2.value.Value2D,y=laya.webgl.utils.VertexBuffer2D,C=laya.webgl.WebGL,P=(laya.webgl.WebGLContext,function(){function t(){this._frameTime=0,this._emissionRate=60,this._emissionTime=0,this.minEmissionTime=1/60,this._particleTemplate=null}s(t,"laya.particle.emitter.EmitterBase");var e=t.prototype;return e.start=function(t){void 0===t&&(t=2147483647),0!=this._emissionRate&&(this._emissionTime=t)},e.stop=function(){this._emissionTime=0},e.clear=function(){this._emissionTime=0},e.emit=function(){},e.advanceTime=function(t){if(void 0===t&&(t=1),this._emissionTime-=t,!(this._emissionTime<0||(this._frameTime+=t,this._frameTime<this.minEmissionTime)))for(;this._frameTime>this.minEmissionTime;)this._frameTime-=this.minEmissionTime,this.emit()},a(0,e,"particleTemplate",null,function(t){this._particleTemplate=t}),a(0,e,"emissionRate",function(){return this._emissionRate},function(t){t<=0||0<(this._emissionRate=t)&&(this.minEmissionTime=1/t)}),t}()),g=(s(R,"laya.particle.ParticleData"),R.Create=function(t,e,i,a){var r=new R;r.position=e,d.scaleVector3(i,t.emitterVelocitySensitivity,R._tempVelocity);var n=d.lerp(t.minHorizontalVelocity,t.maxHorizontalVelocity,Math.random()),s=Math.random()*Math.PI*2;R._tempVelocity[0]+=n*Math.cos(s),R._tempVelocity[2]+=n*Math.sin(s),R._tempVelocity[1]+=d.lerp(t.minVerticalVelocity,t.maxVerticalVelocity,Math.random()),r.velocity=R._tempVelocity,r.startColor=R._tempStartColor,r.endColor=R._tempEndColor;var o=0;if(t.disableColor)for(o=0;o<4;o++)r.startColor[o]=1,r.endColor[o]=1;else if(t.colorComponentInter)for(o=0;o<4;o++)r.startColor[o]=d.lerp(t.minStartColor[o],t.maxStartColor[o],Math.random()),r.endColor[o]=d.lerp(t.minEndColor[o],t.maxEndColor[o],Math.random());else d.lerpVector4(t.minStartColor,t.maxStartColor,Math.random(),r.startColor),d.lerpVector4(t.minEndColor,t.maxEndColor,Math.random(),r.endColor);r.sizeRotation=R._tempSizeRotation;var l=Math.random();r.sizeRotation[0]=d.lerp(t.minStartSize,t.maxStartSize,l),r.sizeRotation[1]=d.lerp(t.minEndSize,t.maxEndSize,l),r.sizeRotation[2]=d.lerp(t.minRotateSpeed,t.maxRotateSpeed,Math.random()),r.radius=R._tempRadius;var h=Math.random();r.radius[0]=d.lerp(t.minStartRadius,t.maxStartRadius,h),r.radius[1]=d.lerp(t.minEndRadius,t.maxEndRadius,h),r.radian=R._tempRadian,r.radian[0]=d.lerp(t.minHorizontalStartRadian,t.maxHorizontalStartRadian,Math.random()),r.radian[1]=d.lerp(t.minVerticalStartRadian,t.maxVerticalStartRadian,Math.random());var c=t.useEndRadian;return r.radian[2]=c?d.lerp(t.minHorizontalEndRadian,t.maxHorizontalEndRadian,Math.random()):r.radian[0],r.radian[3]=c?d.lerp(t.minVerticalEndRadian,t.maxVerticalEndRadian,Math.random()):r.radian[1],r.durationAddScale=t.ageAddScale*Math.random(),r.time=a,r},e(R,["_tempVelocity",function(){return this._tempVelocity=new Float32Array(3)},"_tempStartColor",function(){return this._tempStartColor=new Float32Array(4)},"_tempEndColor",function(){return this._tempEndColor=new Float32Array(4)},"_tempSizeRotation",function(){return this._tempSizeRotation=new Float32Array(3)},"_tempRadius",function(){return this._tempRadius=new Float32Array(2)},"_tempRadian",function(){return this._tempRadian=new Float32Array(4)}]),R);function R(){this.position=null,this.velocity=null,this.startColor=null,this.endColor=null,this.sizeRotation=null,this.radius=null,this.radian=null,this.durationAddScale=NaN,this.time=NaN}s(S,"laya.particle.ParticleEmitter"),S.prototype.update=function(t,e){if(0<(t/=1e3)){d.subtractVector3(e,this._previousPosition,this._tempVelocity),d.scaleVector3(this._tempVelocity,1/t,this._tempVelocity);for(var i=this._timeLeftOver+t,a=-this._timeLeftOver;i>this._timeBetweenParticles;)a+=this._timeBetweenParticles,i-=this._timeBetweenParticles,d.lerpVector3(this._previousPosition,e,a/t,this._tempPosition),this._templet.addParticleArray(this._tempPosition,this._tempVelocity);this._timeLeftOver=i}this._previousPosition[0]=e[0],this._previousPosition[1]=e[1],this._previousPosition[2]=e[2]};function S(t,e,i){this._templet=null,this._timeBetweenParticles=NaN,this._previousPosition=null,this._timeLeftOver=0,this._tempVelocity=new Float32Array([0,0,0]),this._tempPosition=new Float32Array([0,0,0]),this._templet=t,this._timeBetweenParticles=1/e,this._previousPosition=i}var V=(s(E,"laya.particle.ParticleSetting"),E.checkSetting=function(t){var e;for(e in E._defaultSetting)t.hasOwnProperty(e)||(t[e]=E._defaultSetting[e]);t.endVelocity=+t.endVelocity,t.gravity[0]=+t.gravity[0],t.gravity[1]=+t.gravity[1],t.gravity[2]=+t.gravity[2]},e(E,["_defaultSetting",function(){return this._defaultSetting=new E}]),E);function E(){this.textureName=null,this.textureCount=1,this.maxPartices=100,this.duration=1,this.ageAddScale=0,this.emitterVelocitySensitivity=1,this.minStartSize=100,this.maxStartSize=100,this.minEndSize=100,this.maxEndSize=100,this.minHorizontalVelocity=0,this.maxHorizontalVelocity=0,this.minVerticalVelocity=0,this.maxVerticalVelocity=0,this.endVelocity=1,this.minRotateSpeed=0,this.maxRotateSpeed=0,this.minStartRadius=0,this.maxStartRadius=0,this.minEndRadius=0,this.maxEndRadius=0,this.minHorizontalStartRadian=0,this.maxHorizontalStartRadian=0,this.minVerticalStartRadian=0,this.maxVerticalStartRadian=0,this.useEndRadian=!0,this.minHorizontalEndRadian=0,this.maxHorizontalEndRadian=0,this.minVerticalEndRadian=0,this.maxVerticalEndRadian=0,this.colorComponentInter=!1,this.disableColor=!1,this.blendState=0,this.emitterType="null",this.emissionRate=0,this.sphereEmitterRadius=1,this.sphereEmitterVelocity=0,this.sphereEmitterVelocityAddVariance=0,this.ringEmitterRadius=30,this.ringEmitterVelocity=0,this.ringEmitterVelocityAddVariance=0,this.ringEmitterUp=2,this.gravity=new Float32Array([0,0,0]),this.minStartColor=new Float32Array([1,1,1,1]),this.maxStartColor=new Float32Array([1,1,1,1]),this.minEndColor=new Float32Array([1,1,1,1]),this.maxEndColor=new Float32Array([1,1,1,1]),this.pointEmitterPosition=new Float32Array([0,0,0]),this.pointEmitterPositionVariance=new Float32Array([0,0,0]),this.pointEmitterVelocity=new Float32Array([0,0,0]),this.pointEmitterVelocityAddVariance=new Float32Array([0,0,0]),this.boxEmitterCenterPosition=new Float32Array([0,0,0]),this.boxEmitterSize=new Float32Array([0,0,0]),this.boxEmitterVelocity=new Float32Array([0,0,0]),this.boxEmitterVelocityAddVariance=new Float32Array([0,0,0]),this.sphereEmitterCenterPosition=new Float32Array([0,0,0]),this.ringEmitterCenterPosition=new Float32Array([0,0,0]),this.positionVariance=new Float32Array([0,0,0])}var A=(s(T,"laya.particle.ParticleTemplateBase"),T.prototype.addParticleArray=function(t,e){},T);function T(){this.settings=null,this.texture=null}var w=function(){function t(){this.u_Duration=NaN,this.u_EndVelocity=NaN,this.u_Gravity=null,this.a_Position=null,this.a_Velocity=null,this.a_StartColor=null,this.a_EndColor=null,this.a_SizeRotation=null,this.a_Radius=null,this.a_Radian=null,this.a_AgeAddScale=NaN,this.gl_Position=null,this.v_Color=null,this.oSize=NaN,this._color=new Float32Array(4),this._position=new Float32Array(3)}s(t,"laya.particle.particleUtils.CanvasShader");var e=t.prototype;return e.getLen=function(t){return Math.sqrt(t[0]*t[0]+t[1]*t[1]+t[2]*t[2])},e.ComputeParticlePosition=function(t,e,i,a){this._position[0]=t[0],this._position[1]=t[1],this._position[2]=t[2];var r,n=this.getLen(e),s=n*a+(n*this.u_EndVelocity-n)*a*a/2;r=this.getLen(e);var o=0;for(3,o=0;o<3;o++)this._position[o]=this._position[o]+e[o]/r*s*this.u_Duration,this._position[o]+=this.u_Gravity[o]*i*a;var l=d.lerp(this.a_Radius[0],this.a_Radius[1],a),h=d.lerp(this.a_Radian[0],this.a_Radian[2],a),c=d.lerp(this.a_Radian[1],this.a_Radian[3],a),u=Math.cos(c)*l;return this._position[1]+=Math.sin(c)*l,this._position[0]+=Math.cos(h)*u,this._position[2]+=Math.sin(h)*u,new Float32Array([this._position[0],this._position[1],0,1])},e.ComputeParticleSize=function(t,e,i){return d.lerp(t,e,i)},e.ComputeParticleRotation=function(t,e){return t*e},e.ComputeParticleColor=function(t,e,i){var a=this._color;return d.lerpVector4(t,e,i,a),a[3]=a[3]*i*(1-i)*(1-i)*6.7,a},e.clamp=function(t,e,i){return t<e?e:i<t?i:t},e.getData=function(t){t*=1+this.a_AgeAddScale;var e=this.clamp(t/this.u_Duration,0,1);this.gl_Position=this.ComputeParticlePosition(this.a_Position,this.a_Velocity,t,e);var i=this.ComputeParticleSize(this.a_SizeRotation[0],this.a_SizeRotation[1],e),a=this.ComputeParticleRotation(this.a_SizeRotation[2],t);this.v_Color=this.ComputeParticleColor(this.a_StartColor,this.a_EndColor,e);var r,n=new c;r=i/this.oSize*2,n.scale(r,r),n.rotate(a),n.setTranslate(this.gl_Position[0],-this.gl_Position[1]);var s;return s=this.v_Color[3],[this.v_Color,s,n,this.v_Color[0]*s,this.v_Color[1]*s,this.v_Color[2]*s]},t}(),z=(s(b,"laya.particle.particleUtils.CMDParticle"),b.prototype.setCmds=function(t){this.cmds=t,this.maxIndex=t.length-1},b);function b(){this.maxIndex=0,this.cmds=null,this.id=0}var F=(s(D,"laya.particle.particleUtils.PicTool"),D.getCanvasPic=function(t,e){t=t.bitmap;var i=new u("2D"),a=i.getContext("2d");i.size(t.width,t.height);var r=e>>16&255,n=e>>8&255,s=255&e;if(m.isConchApp&&a.setFilter(r/255,n/255,s/255,0),a.drawImage(t.source,0,0),!m.isConchApp){for(var o=a.getImageData(0,0,i.width,i.height),l=o.data,h=0,c=l.length;h<c;h+=4)0!=l[h+3]&&(l[h]*=r/255,l[h+1]*=n/255,l[h+2]*=s/255);a.putImageData(o,0,0)}return i},D.getRGBPic=function(t){return[new f(D.getCanvasPic(t,16711680)),new f(D.getCanvasPic(t,65280)),new f(D.getCanvasPic(t,255))]},D);function D(){}var N=function(t){function e(t){this.setting=null,this._posRange=null,this._canvasTemplate=null,this._emitFun=null,e.__super.call(this),this.template=t}s(e,"laya.particle.emitter.Emitter2D",t);var i=e.prototype;return i.emit=function(){t.prototype.emit.call(this),null!=this._emitFun&&this._emitFun()},i.getRandom=function(t){return(2*Math.random()-1)*t},i.webGLEmit=function(){var t=new Float32Array(3);t[0]=this.getRandom(this._posRange[0]),t[1]=this.getRandom(this._posRange[1]),t[2]=this.getRandom(this._posRange[2]);var e=new Float32Array(3);e[0]=0,e[1]=0,e[2]=0,this._particleTemplate.addParticleArray(t,e)},i.canvasEmit=function(){var t=new Float32Array(3);t[0]=this.getRandom(this._posRange[0]),t[1]=this.getRandom(this._posRange[1]),t[2]=this.getRandom(this._posRange[2]);var e=new Float32Array(3);e[0]=0,e[1]=0,e[2]=0,this._particleTemplate.addParticleArray(t,e)},a(0,i,"template",function(){return this._particleTemplate},function(t){(this._particleTemplate=t)||(this._emitFun=null,this.setting=null,this._posRange=null),this.setting=t.settings,this._posRange=this.setting.positionVariance,this._particleTemplate instanceof laya.particle.ParticleTemplate2D?this._emitFun=this.webGLEmit:this._particleTemplate instanceof laya.particle.ParticleTemplateCanvas&&(this._canvasTemplate=t,this._emitFun=this.canvasEmit)}),e}(P),L=function(t){function e(t){this._vertices=null,this._vertexBuffer=null,this._indexBuffer=null,this._floatCountPerVertex=29,this._firstActiveElement=0,this._firstNewElement=0,this._firstFreeElement=0,this._firstRetiredElement=0,this._currentTime=0,this._drawCounter=0,e.__super.call(this),this.settings=t}s(e,"laya.particle.ParticleTemplateWebGL",A);var i=e.prototype;return i.initialize=function(){this._vertices=new Float32Array(this.settings.maxPartices*this._floatCountPerVertex*4);for(var t=0,e=0;e<this.settings.maxPartices;e++){var i=Math.random(),a=this.settings.textureCount?1/this.settings.textureCount:1,r=NaN;for(r=0;r<this.settings.textureCount&&!(i<r+a);r+=a);t=e*this._floatCountPerVertex*4,this._vertices[t+0*this._floatCountPerVertex+0]=-1,this._vertices[t+0*this._floatCountPerVertex+1]=-1,this._vertices[t+0*this._floatCountPerVertex+2]=0,this._vertices[t+0*this._floatCountPerVertex+3]=r,this._vertices[t+1*this._floatCountPerVertex+0]=1,this._vertices[t+1*this._floatCountPerVertex+1]=-1,this._vertices[t+1*this._floatCountPerVertex+2]=1,this._vertices[t+1*this._floatCountPerVertex+3]=r,this._vertices[t+2*this._floatCountPerVertex+0]=1,this._vertices[t+2*this._floatCountPerVertex+1]=1,this._vertices[t+2*this._floatCountPerVertex+2]=1,this._vertices[t+2*this._floatCountPerVertex+3]=r+a,this._vertices[t+3*this._floatCountPerVertex+0]=-1,this._vertices[t+3*this._floatCountPerVertex+1]=1,this._vertices[t+3*this._floatCountPerVertex+2]=0,this._vertices[t+3*this._floatCountPerVertex+3]=r+a}},i.loadContent=function(){},i.update=function(t){this._currentTime+=t/1e3,this.retireActiveParticles(),this.freeRetiredParticles(),this._firstActiveElement==this._firstFreeElement&&(this._currentTime=0),this._firstRetiredElement==this._firstActiveElement&&(this._drawCounter=0)},i.retireActiveParticles=function(){for(var t=this.settings.duration;this._firstActiveElement!=this._firstNewElement;){var e=this._firstActiveElement*this._floatCountPerVertex*4,i=28+e,a=this._currentTime-this._vertices[i];if(1e-4+(a*=1+this._vertices[27+e])<t)break;this._vertices[i]=this._drawCounter,this._firstActiveElement++,this._firstActiveElement>=this.settings.maxPartices&&(this._firstActiveElement=0)}},i.freeRetiredParticles=function(){for(;this._firstRetiredElement!=this._firstActiveElement;){if(this._drawCounter-this._vertices[this._firstRetiredElement*this._floatCountPerVertex*4+28]<3)break;this._firstRetiredElement++,this._firstRetiredElement>=this.settings.maxPartices&&(this._firstRetiredElement=0)}},i.addNewParticlesToVertexBuffer=function(){},i.addParticleArray=function(t,e){var i=this._firstFreeElement+1;if(i>=this.settings.maxPartices&&(i=0),i!==this._firstRetiredElement){for(var a=g.Create(this.settings,t,e,this._currentTime),r=this._firstFreeElement*this._floatCountPerVertex*4,n=0;n<4;n++){var s=0,o=0;for(s=0,o=4;s<3;s++)this._vertices[r+n*this._floatCountPerVertex+o+s]=a.position[s];for(s=0,o=7;s<3;s++)this._vertices[r+n*this._floatCountPerVertex+o+s]=a.velocity[s];for(s=0,o=10;s<4;s++)this._vertices[r+n*this._floatCountPerVertex+o+s]=a.startColor[s];for(s=0,o=14;s<4;s++)this._vertices[r+n*this._floatCountPerVertex+o+s]=a.endColor[s];for(s=0,o=18;s<3;s++)this._vertices[r+n*this._floatCountPerVertex+o+s]=a.sizeRotation[s];for(s=0,o=21;s<2;s++)this._vertices[r+n*this._floatCountPerVertex+o+s]=a.radius[s];for(s=0,o=23;s<4;s++)this._vertices[r+n*this._floatCountPerVertex+o+s]=a.radian[s];this._vertices[r+n*this._floatCountPerVertex+27]=a.durationAddScale,this._vertices[r+n*this._floatCountPerVertex+28]=a.time}this._firstFreeElement=i}},e}(),M=function(t){function e(t){this._ready=!1,this.textureList=[],this.particleList=[],this.pX=0,this.pY=0,this.activeParticles=[],this.deadParticles=[],this.iList=[],this._maxNumParticles=0,this.textureWidth=NaN,this.dTextureWidth=NaN,this.colorChange=!0,this.step=1/60,this.canvasShader=new w,e.__super.call(this),this.settings=t,this._maxNumParticles=t.maxPartices,this.texture=new f,this.texture.on("loaded",this,this._textureLoaded),this.texture.load(t.textureName)}s(e,"laya.particle.ParticleTemplateCanvas",A);var i=e.prototype;return i._textureLoaded=function(t){this.setTexture(this.texture),this._ready=!0},i.clear=function(t){void 0===t&&(t=!0),this.deadParticles.length=0,this.activeParticles.length=0,this.textureList.length=0},i.setTexture=function(t){this.texture=t,this.textureWidth=t.width,this.dTextureWidth=1/this.textureWidth,this.pX=.5*-t.width,this.pY=.5*-t.height,this.textureList=e.changeTexture(t,this.textureList),this.particleList.length=0,this.deadParticles.length=0,this.activeParticles.length=0},i._createAParticleData=function(t,e){var i;this.canvasShader.u_EndVelocity=this.settings.endVelocity,this.canvasShader.u_Gravity=this.settings.gravity,this.canvasShader.u_Duration=this.settings.duration,i=g.Create(this.settings,t,e,0),this.canvasShader.a_Position=i.position,this.canvasShader.a_Velocity=i.velocity,this.canvasShader.a_StartColor=i.startColor,this.canvasShader.a_EndColor=i.endColor,this.canvasShader.a_SizeRotation=i.sizeRotation,this.canvasShader.a_Radius=i.radius,this.canvasShader.a_Radian=i.radian,this.canvasShader.a_AgeAddScale=i.durationAddScale,this.canvasShader.oSize=this.textureWidth;var a=new z,r=0,n=this.settings.duration/(1+i.durationAddScale),s=[];for(r=0;r<n;r+=this.step)s.push(this.canvasShader.getData(r));return a.id=this.particleList.length,this.particleList.push(a),a.setCmds(s),a},i.addParticleArray=function(t,e){var i;this._ready&&(this.particleList.length<this._maxNumParticles?(i=this._createAParticleData(t,e),this.iList[i.id]=0,this.activeParticles.push(i)):0<this.deadParticles.length&&(i=this.deadParticles.pop(),this.iList[i.id]=0,this.activeParticles.push(i)))},i.advanceTime=function(t){if(void 0===t&&(t=1),this._ready){var e,i=this.activeParticles,a=this.deadParticles,r=0,n=i.length,s=0,o=this.iList;for(r=n-1;-1<r;r--)(s=o[(e=i[r]).id])>=e.maxIndex?(s=0,i.splice(r,1),a.push(e)):s+=1,o[e.id]=s}},i.render=function(t,e,i){this._ready&&(this.activeParticles.length<1||this.textureList.length<2||(this.settings.disableColor?this.noColorRender(t,e,i):this.canvasRender(t,e,i)))},i.noColorRender=function(t,e,i){var a,r,n,s=this.activeParticles,o=0,l=s.length,h=NaN,c=this.pX,u=this.pY,d=2*-c,m=2*-u,_=0,p=(this.textureList,this.iList);for(t.translate(e,i),n=t.ctx.globalAlpha,o=0;o<l;o++)_=p[(a=s[o]).id],(r=a.cmds[_])&&((h=r[1])<=.01||(t.setAlpha(n*h),t.drawTextureWithTransform(this.texture,c,u,d,m,r[2],1)));t.setAlpha(n),t.translate(-e,-i)},i.canvasRender=function(t,e,i){var a,r,n,s,o=this.activeParticles,l=0,h=o.length,c=this.pX,u=this.pY,d=2*-c,m=2*-u,_=0,p=this.textureList,f=this.iList;for(t.translate(e,i),n=t.ctx.globalAlpha,s=t.ctx.globalCompositeOperation,t.blendMode("lighter"),l=0;l<h;l++)_=f[(a=o[l]).id],(r=a.cmds[_])&&(r[1]<=.01||(t.save(),t.transformByMatrix(r[2]),.01<r[3]&&(t.setAlpha(n*r[3]),t.drawTexture(p[0],c,u,d,m)),.01<r[4]&&(t.setAlpha(n*r[4]),t.drawTexture(p[1],c,u,d,m)),.01<r[5]&&(t.setAlpha(n*r[5]),t.drawTexture(p[2],c,u,d,m)),t.restore()));t.setAlpha(n),t.translate(-e,-i),t.blendMode(s)},e.changeTexture=function(t,e,i){return e||(e=[]),e.length=0,i&&i.disableColor?e.push(t,t,t):v.copyArray(e,F.getRGBPic(t)),e},e}(),B=function(i){function a(t){this._vertexBuffer2D=null,this._indexBuffer2D=null,this.x=0,this.y=0,this._blendFn=null,this._startTime=0,this.sv=new I,a.__super.call(this,t);var e=this;n.loader.load(this.settings.textureName,l.create(null,function(t){t.bitmap.enableMerageInAtlas=!1,e.texture=t})),this.sv.u_Duration=this.settings.duration,this.sv.u_Gravity=this.settings.gravity,this.sv.u_EndVelocity=this.settings.endVelocity,this._blendFn=o.fns[t.blendState],this.initialize(),this._vertexBuffer=this._vertexBuffer2D=y.create(-1,35048),this._indexBuffer=this._indexBuffer2D=h.create(35044),this.loadContent()}s(a,"laya.particle.ParticleTemplate2D",i);var t=a.prototype;return n.imps(t,{"laya.webgl.submit.ISubmit":!0}),t.getRenderType=function(){return-111},t.releaseRender=function(){},t.addParticleArray=function(t,e){t[0]+=this.x,t[1]+=this.y,i.prototype.addParticleArray.call(this,t,e)},t.loadContent=function(){for(var t=new Uint16Array(6*this.settings.maxPartices),e=0;e<this.settings.maxPartices;e++)t[6*e+0]=4*e+0,t[6*e+1]=4*e+1,t[6*e+2]=4*e+2,t[6*e+3]=4*e+0,t[6*e+4]=4*e+2,t[6*e+5]=4*e+3;this._indexBuffer2D.clear(),this._indexBuffer2D.append(t),this._indexBuffer2D.upload()},t.addNewParticlesToVertexBuffer=function(){this._vertexBuffer2D.clear(),this._vertexBuffer2D.append(this._vertices);var t=0;this._firstNewElement<this._firstFreeElement?(t=4*this._firstNewElement*this._floatCountPerVertex*4,this._vertexBuffer2D.subUpload(t,t,t+4*(this._firstFreeElement-this._firstNewElement)*this._floatCountPerVertex*4)):(t=4*this._firstNewElement*this._floatCountPerVertex*4,this._vertexBuffer2D.subUpload(t,t,t+4*(this.settings.maxPartices-this._firstNewElement)*this._floatCountPerVertex*4),0<this._firstFreeElement&&(this._vertexBuffer2D.setNeedUpload(),this._vertexBuffer2D.subUpload(0,0,4*this._firstFreeElement*this._floatCountPerVertex*4))),this._firstNewElement=this._firstFreeElement},t.renderSubmit=function(){if(this.texture&&this.texture.loaded){if(this.update(n.timer.delta),this.sv.u_CurrentTime=this._currentTime,this._firstNewElement!=this._firstFreeElement&&this.addNewParticlesToVertexBuffer(),this.blend(),this._firstActiveElement!=this._firstFreeElement){C.mainContext;this._vertexBuffer2D.bind(this._indexBuffer2D),this.sv.u_texture=this.texture.source,this.sv.upload(),this._firstActiveElement<this._firstFreeElement?C.mainContext.drawElements(4,6*(this._firstFreeElement-this._firstActiveElement),5123,6*this._firstActiveElement*2):(C.mainContext.drawElements(4,6*(this.settings.maxPartices-this._firstActiveElement),5123,6*this._firstActiveElement*2),0<this._firstFreeElement&&C.mainContext.drawElements(4,6*this._firstFreeElement,5123,0)),p.drawCall++}this._drawCounter++}return 1},t.blend=function(){if(o.activeBlendFunction!==this._blendFn){var t=C.mainContext;t.enable(3042),this._blendFn(t),o.activeBlendFunction=this._blendFn}},t.dispose=function(){this._vertexBuffer2D.dispose(),this._indexBuffer2D.dispose()},a.activeBlendType=-1,a}(L),I=(s(H,"laya.particle.shader.value.ParticleShaderValue",x),H.prototype.upload=function(){this.refresh(),H.pShader.upload(this)},e(H,["pShader",function(){return this.pShader=new G}]),H);function H(){this.a_CornerTextureCoordinate=[4,5126,!1,116,0],this.a_Position=[3,5126,!1,116,16],this.a_Velocity=[3,5126,!1,116,28],this.a_StartColor=[4,5126,!1,116,40],this.a_EndColor=[4,5126,!1,116,56],this.a_SizeRotation=[3,5126,!1,116,72],this.a_Radius=[2,5126,!1,116,84],this.a_Radian=[4,5126,!1,116,92],this.a_AgeAddScale=[1,5126,!1,116,108],this.a_Time=[1,5126,!1,116,112],this.u_CurrentTime=NaN,this.u_Duration=NaN,this.u_Gravity=null,this.u_EndVelocity=NaN,this.u_texture=null,H.__super.call(this,0,0)}!function(e){function i(t){this._matrix4=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],this._particleTemplate=null,this._canvasTemplate=null,this._emitter=null,this.autoPlay=!0,i.__super.call(this),t&&this.setParticleSetting(t)}s(i,"laya.particle.Particle2D",e);var t=i.prototype;t.load=function(t){n.loader.load(t,l.create(this,this.setParticleSetting),null,"json")},t.setParticleSetting=function(e){var i=this;if(!e)return this.stop();if(V.checkSetting(e),r.ConchParticleTemplate2D&&!m.isWebGL||(this.customRenderEnable=!0),m.isWebGL)this._particleTemplate=new B(e),this.graphics._saveToCmd(m.context._drawParticle,[this._particleTemplate]);else{if(m.isConchApp&&r.ConchParticleTemplate2D){this._particleTemplate=new ConchParticleTemplate2D;var a=this;return n.loader.load(e.textureName,l.create(null,function(t){a._particleTemplate.texture=t,a._particleTemplate.settings=e,m.isConchNode?a.graphics.drawParticle(a._particleTemplate):a.graphics._saveToCmd(m.context._drawParticle,[i._particleTemplate])})),this._emitter={start:function(){}},this.play=this._particleTemplate.play.bind(this._particleTemplate),this.stop=this._particleTemplate.stop.bind(this._particleTemplate),void(this.autoPlay&&this.play())}this._particleTemplate=this._canvasTemplate=new M(e)}this._emitter?this._emitter.template=this._particleTemplate:this._emitter=new N(this._particleTemplate),this.autoPlay&&(this.emitter.start(),this.play())},t.play=function(){this.timer.frameLoop(1,this,this._loop)},t.stop=function(){this.timer.clear(this,this._loop)},t._loop=function(){this.advanceTime(1/60)},t.advanceTime=function(t){void 0===t&&(t=1),this._canvasTemplate&&this._canvasTemplate.advanceTime(t),this._emitter&&this._emitter.advanceTime(t)},t.customRender=function(t,e,i){m.isWebGL&&(this._matrix4[0]=t.ctx._curMat.a,this._matrix4[1]=t.ctx._curMat.b,this._matrix4[4]=t.ctx._curMat.c,this._matrix4[5]=t.ctx._curMat.d,this._matrix4[12]=t.ctx._curMat.tx,this._matrix4[13]=t.ctx._curMat.ty,this._particleTemplate.sv.u_mmat=this._matrix4);this._canvasTemplate&&this._canvasTemplate.render(t,e,i)},t.destroy=function(t){void 0===t&&(t=!0),this._particleTemplate instanceof laya.particle.ParticleTemplate2D&&this._particleTemplate.dispose(),e.prototype.destroy.call(this,t)},a(0,t,"url",null,function(t){this.load(t)}),a(0,t,"emitter",function(){return this._emitter})}(_);var G=(s(W,"laya.particle.shader.ParticleShader",i),e(W,["vs",function(){return this.vs="attribute vec4 a_CornerTextureCoordinate;\nattribute vec3 a_Position;\nattribute vec3 a_Velocity;\nattribute vec4 a_StartColor;\nattribute vec4 a_EndColor;\nattribute vec3 a_SizeRotation;\nattribute vec2 a_Radius;\nattribute vec4 a_Radian;\nattribute float a_AgeAddScale;\nattribute float a_Time;\n\nvarying vec4 v_Color;\nvarying vec2 v_TextureCoordinate;\n\nuniform float u_CurrentTime;\nuniform float u_Duration;\nuniform float u_EndVelocity;\nuniform vec3 u_Gravity;\n\n#ifdef PARTICLE3D\n uniform mat4 u_WorldMat;\n uniform mat4 u_View;\n uniform mat4 u_Projection;\n uniform vec2 u_ViewportScale;\n#else\n uniform vec2 size;\n uniform mat4 mmat;\n uniform mat4 u_mmat;\n#endif\n\nvec4 ComputeParticlePosition(in vec3 position, in vec3 velocity,in float age,in float normalizedAge)\n{\n\n   float startVelocity = length(velocity);//起始标量速度\n   float endVelocity = startVelocity * u_EndVelocity;//结束标量速度\n\n   float velocityIntegral = startVelocity * normalizedAge +(endVelocity - startVelocity) * normalizedAge *normalizedAge/2.0;//计算当前速度的标量（单位空间），vt=v0*t+(1/2)*a*(t^2)\n   \n   vec3 addPosition = normalize(velocity) * velocityIntegral * u_Duration;//计算受自身速度影响的位置，转换标量到矢量    \n   addPosition += u_Gravity * age * normalizedAge;//计算受重力影响的位置\n   \n   float radius=mix(a_Radius.x, a_Radius.y, normalizedAge); //计算粒子受半径和角度影响（无需计算角度和半径时，可用宏定义优化屏蔽此计算）\n   float radianHorizontal =mix(a_Radian.x,a_Radian.z,normalizedAge);\n   float radianVertical =mix(a_Radian.y,a_Radian.w,normalizedAge);\n   \n   float r =cos(radianVertical)* radius;\n   addPosition.y += sin(radianVertical) * radius;\n\t\n   addPosition.x += cos(radianHorizontal) *r;\n   addPosition.z += sin(radianHorizontal) *r;\n  \n   #ifdef PARTICLE3D\n   position+=addPosition;\n    return  u_Projection*u_View*u_WorldMat*(vec4(position, 1.0));\n   #else\n   addPosition.y=-addPosition.y;//2D粒子位置更新需要取负，2D粒子坐标系Y轴正向朝上\n   position+=addPosition;\n    return  vec4(position,1.0);\n   #endif\n}\n\nfloat ComputeParticleSize(in float startSize,in float endSize, in float normalizedAge)\n{    \n    float size = mix(startSize, endSize, normalizedAge);\n    \n\t#ifdef PARTICLE3D\n    //Project the size into screen coordinates.\n     return size * u_Projection[1][1];\n\t#else\n\t return size;\n\t#endif\n}\n\nmat2 ComputeParticleRotation(in float rot,in float age)\n{    \n    float rotation =rot * age;\n    //计算2x2旋转矩阵.\n    float c = cos(rotation);\n    float s = sin(rotation);\n    return mat2(c, -s, s, c);\n}\n\nvec4 ComputeParticleColor(in vec4 startColor,in vec4 endColor,in float normalizedAge)\n{\n\tvec4 color=mix(startColor,endColor,normalizedAge);\n    //硬编码设置，使粒子淡入很快，淡出很慢,6.7的缩放因子把置归一在0到1之间，可以谷歌x*(1-x)*(1-x)*6.7的制图表\n    color.a *= normalizedAge * (1.0-normalizedAge) * (1.0-normalizedAge) * 6.7;\n   \n    return color;\n}\n\nvoid main()\n{\n   float age = u_CurrentTime - a_Time;\n   age *= 1.0 + a_AgeAddScale;\n   float normalizedAge = clamp(age / u_Duration,0.0,1.0);\n   gl_Position = ComputeParticlePosition(a_Position, a_Velocity, age, normalizedAge);//计算粒子位置\n   float pSize = ComputeParticleSize(a_SizeRotation.x,a_SizeRotation.y, normalizedAge);\n   mat2 rotation = ComputeParticleRotation(a_SizeRotation.z, age);\n\t\n   #ifdef PARTICLE3D\n\tgl_Position.xy += (rotation*a_CornerTextureCoordinate.xy) * pSize * u_ViewportScale;\n   #else\n    mat4 mat=u_mmat*mmat;\n    gl_Position=vec4((mat*gl_Position).xy,0.0,1.0);\n\tgl_Position.xy += (rotation*a_CornerTextureCoordinate.xy) * pSize*vec2(mat[0][0],mat[1][1]);\n    gl_Position=vec4((gl_Position.x/size.x-0.5)*2.0,(0.5-gl_Position.y/size.y)*2.0,0.0,1.0);\n   #endif\n   \n   v_Color = ComputeParticleColor(a_StartColor,a_EndColor, normalizedAge);\n   v_TextureCoordinate =a_CornerTextureCoordinate.zw;\n}\n\n"},"ps",function(){return this.ps="#ifdef FSHIGHPRECISION\nprecision highp float;\n#else\nprecision mediump float;\n#endif\n\nvarying vec4 v_Color;\nvarying vec2 v_TextureCoordinate;\nuniform sampler2D u_texture;\n\nvoid main()\n{\t\n\tgl_FragColor=texture2D(u_texture,v_TextureCoordinate)*v_Color;\n\tgl_FragColor.xyz *= v_Color.w;\n}"}]),W);function W(){W.__super.call(this,W.vs,W.ps,"ParticleShader")}}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(t,e){"use strict";for(var i in Object.defineProperty(e,"__esModule",{value:!0}),Laya){var a=Laya[i];a&&a.__isclass&&(e[i]=a)}});
!function(t,r,g){g.un,g.uns;var s=g.static,n=g.class,h=g.getset,e=(g.__newvec,laya.display.Animation),a=laya.utils.Browser,p=laya.utils.ClassUtils,o=laya.filters.ColorFilter,l=laya.utils.Ease,c=laya.events.Event,u=(laya.events.EventDispatcher,laya.display.css.Font),_=laya.display.FrameAnimation,i=laya.display.Graphics,d=laya.utils.Handler,f=laya.net.HttpRequest,m=laya.display.Input,v=laya.net.Loader,y=laya.net.LocalStorage,C=(laya.display.Node,laya.maths.Point),b=laya.maths.Rectangle,S=laya.renders.Render,x=laya.display.Sprite,w=(laya.display.Stage,laya.display.Text),B=laya.resource.Texture,I=laya.utils.TimeLine,k=laya.utils.Tween,L=laya.utils.Utils,M=laya.utils.WeakObject;g.interface("laya.ui.IItem"),g.interface("laya.ui.ISelect"),g.interface("laya.ui.IRender"),g.interface("laya.ui.IComponent"),g.interface("laya.ui.IBox","IComponent");var T=(n(z,"laya.ui.LayoutStyle"),s(z,["EMPTY",function(){return this.EMPTY=new z}]),z);function z(){this.enable=!1,this.top=NaN,this.bottom=NaN,this.left=NaN,this.right=NaN,this.centerX=NaN,this.centerY=NaN,this.anchorX=NaN,this.anchorY=NaN}var P=(n(H,"laya.ui.Styles"),H.labelColor="#000000",H.buttonStateNum=3,H.scrollBarMinNum=15,H.scrollBarDelayTime=500,s(H,["defaultSizeGrid",function(){return this.defaultSizeGrid=[4,4,4,4,0]},"labelPadding",function(){return this.labelPadding=[2,2,2,2]},"inputLabelPadding",function(){return this.inputLabelPadding=[1,1,1,3]},"buttonLabelColors",function(){return this.buttonLabelColors=["#32556b","#32cc6b","#ff0000","#C0C0C0"]},"comboBoxItemColors",function(){return this.comboBoxItemColors=["#5e95b6","#ffffff","#000000","#8fa4b1","#ffffff"]}]),H);function H(){}var D=(n(A,"laya.ui.UIUtils"),A.fillArray=function(t,i,e){var s=t.concat();if(i)for(var n=i.split(","),h=0,o=Math.min(s.length,n.length);h<o;h++){var r=n[h];s[h]="true"==r||"false"!=r&&r,null!=e&&(s[h]=e(r))}return s},A.toColor=function(t){return L.toHexColor(t)},A.gray=function(t,i){void 0===i&&(i=!0),i?A.addFilter(t,A.grayFilter):A.clearFilter(t,o)},A.addFilter=function(t,i){var e=t.filters||[];e.push(i),t.filters=e},A.clearFilter=function(t,i){var e=t.filters;if(null!=e&&0<e.length){for(var s=e.length-1;-1<s;s--){var n=e[s];g.__typeof(n,i)&&e.splice(s,1)}t.filters=e}},A._getReplaceStr=function(t){return A.escapeSequence[t]},A.adptString=function(t){return t.replace(/\\(\w)/g,A._getReplaceStr)},A.getBindFun=function(t){var i=A._funMap.get(t);if(null==i){var e='"'+t+'"',s="(function(data){if(data==null)return;with(data){try{\nreturn "+(e=e.replace(/^"\${|}"$/g,"").replace(/\${/g,'"+').replace(/}/g,'+"'))+"\n}catch(e){}}})";i=g._runScript(s),A._funMap.set(t,i)}return i},s(A,["grayFilter",function(){return this.grayFilter=new o([.3086,.6094,.082,0,0,.3086,.6094,.082,0,0,.3086,.6094,.082,0,0,0,0,0,1,0])},"escapeSequence",function(){return this.escapeSequence={"\\n":"\n","\\t":"\t"}},"_funMap",function(){return this._funMap=new M}]),A);function A(){}var O=(n(N,"UIConfig"),N.touchScrollEnable=!0,N.mouseWheelEnable=!0,N.showButtons=!0,N.popupBgColor="#000000",N.popupBgAlpha=.5,N.closeDialogOnSide=!0,N);function N(){}var Y=function(i){function f(){this.autoCacheCmd=!0,this._width=0,this._height=0,this._source=null,this._sizeGrid=null,this._isChanged=!1,this._offset=null,f.__super.call(this)}n(f,"laya.ui.AutoBitmap",i);var t=f.prototype;return t.destroy=function(){i.prototype.destroy.call(this),this._source=null,this._sizeGrid=null,this._offset=null},t._setChanged=function(){this._isChanged||(this._isChanged=!0,g.timer.callLater(this,this.changeSource))},t.changeSource=function(){this._isChanged=!1;var t=this._source;if(t&&t.bitmap){var i=this.width,e=this.height,s=this._sizeGrid,n=t.sourceWidth,h=t.sourceHeight;if(!s||n===i&&h===e)this.clear(),this.drawTexture(t,this._offset?this._offset[0]:0,this._offset?this._offset[1]:0,i,e);else{t.$_GID||(t.$_GID=L.getGID());var o=t.$_GID+"."+i+"."+e+"."+s.join(".");if(L.isOKCmdList(M.I.get(o)))return void(this.cmds=M.I.get(o));this.clear();var r=s[0],a=s[1],l=s[2],c=s[3],u=s[4],_=!1;if(i==n&&(c=a=0),e==h&&(r=l=0),i<c+a){var d=i;_=!0,i=c+a,this.save(),this.clipRect(0,0,d,e)}c&&r&&this.drawTexture(f.getTexture(t,0,0,c,r),0,0,c,r),a&&r&&this.drawTexture(f.getTexture(t,n-a,0,a,r),i-a,0,a,r),c&&l&&this.drawTexture(f.getTexture(t,0,h-l,c,l),0,e-l,c,l),a&&l&&this.drawTexture(f.getTexture(t,n-a,h-l,a,l),i-a,e-l,a,l),r&&this.drawBitmap(u,f.getTexture(t,c,0,n-c-a,r),c,0,i-c-a,r),l&&this.drawBitmap(u,f.getTexture(t,c,h-l,n-c-a,l),c,e-l,i-c-a,l),c&&this.drawBitmap(u,f.getTexture(t,0,r,c,h-r-l),0,r,c,e-r-l),a&&this.drawBitmap(u,f.getTexture(t,n-a,r,a,h-r-l),i-a,r,a,e-r-l),this.drawBitmap(u,f.getTexture(t,c,r,n-c-a,h-r-l),c,r,i-c-a,e-r-l),_&&this.restore(),this.autoCacheCmd&&!S.isConchApp&&M.I.set(o,this.cmds)}this._repaint()}},t.drawBitmap=function(t,i,e,s,n,h){void 0===n&&(n=0),void 0===h&&(h=0),n<.1||h<.1||(!t||i.width==n&&i.height==h?this.drawTexture(i,e,s,n,h):this.fillTexture(i,e,s,n,h))},t.clear=function(t){void 0===t&&(t=!0),i.prototype.clear.call(this,!1)},h(0,t,"sizeGrid",function(){return this._sizeGrid},function(t){this._sizeGrid=t,this._setChanged()}),h(0,t,"width",function(){return this._width?this._width:this._source?this._source.sourceWidth:0},function(t){this._width!=t&&(this._width=t,this._setChanged())}),h(0,t,"height",function(){return this._height?this._height:this._source?this._source.sourceHeight:0},function(t){this._height!=t&&(this._height=t,this._setChanged())}),h(0,t,"source",function(){return this._source},function(t){t?(this._source=t,this._setChanged()):(this._source=null,this.clear())}),f.getTexture=function(t,i,e,s,n){s<=0&&(s=1),n<=0&&(n=1),t.$_GID||(t.$_GID=L.getGID());var h=t.$_GID+"."+i+"."+e+"."+s+"."+n,o=M.I.get(h);return o&&o.source||(o=B.createFromTexture(t,i,e,s,n),M.I.set(h,o)),o},f}(i);n(G,"laya.ui.UIEvent",c),G.SHOW_TIP="showtip",G.HIDE_TIP="hidetip";function G(){G.__super.call(this)}var X,E=function(i){function t(){this._comXml=null,this._dataSource=null,this._toolTip=null,this._tag=null,this._disabled=!1,this._gray=!1,this.layoutEnabled=!0,t.__super.call(this),this._layout=T.EMPTY,this.preinitialize(),this.createChildren(),this.initialize()}n(t,"laya.ui.Component",i);var e=t.prototype;return g.imps(e,{"laya.ui.IComponent":!0}),e.destroy=function(t){void 0===t&&(t=!0),i.prototype.destroy.call(this,t),this._dataSource=this._layout=null,this._tag=null,this._toolTip=null},e.preinitialize=function(){},e.createChildren=function(){},e.initialize=function(){},e.callLater=function(t,i){g.timer.callLater(this,t,i)},e.runCallLater=function(t){g.timer.runCallLater(this,t)},e.commitMeasure=function(){},e.changeSize=function(){this.event("resize"),this._layout.enable&&(this.resetLayoutX(),this.resetLayoutY())},e.getLayout=function(){return this._layout===T.EMPTY&&(this._layout=new T),this._layout},e._setLayoutEnabled=function(t){this._layout&&this._layout.enable!=t&&(this._layout.enable=t,this.on("added",this,this.onAdded),this.on("removed",this,this.onRemoved),this.parent&&this.onAdded())},e.onRemoved=function(){this.parent.off("resize",this,this.onCompResize)},e.onAdded=function(){this.parent.on("resize",this,this.onCompResize),this.resetLayoutX(),this.resetLayoutY()},e.onCompResize=function(){this._layout&&this._layout.enable&&(this.resetLayoutX(),this.resetLayoutY())},e.resetLayoutX=function(){var t=this._layout;if(isNaN(t.anchorX)||(this.pivotX=t.anchorX*this.width),this.layoutEnabled){var i=this.parent;i&&(isNaN(t.centerX)?isNaN(t.left)?isNaN(t.right)||(this.x=Math.round(i.width-this.displayWidth-t.right+this.pivotX*this.scaleX)):(this.x=Math.round(t.left+this.pivotX*this.scaleX),isNaN(t.right)||(this.width=(i._width-t.left-t.right)/(this.scaleX||.01))):this.x=Math.round(.5*(i.width-this.displayWidth)+t.centerX+this.pivotX*this.scaleX))}},e.resetLayoutY=function(){var t=this._layout;if(isNaN(t.anchorY)||(this.pivotY=t.anchorY*this.height),this.layoutEnabled){var i=this.parent;i&&(isNaN(t.centerY)?isNaN(t.top)?isNaN(t.bottom)||(this.y=Math.round(i.height-this.displayHeight-t.bottom+this.pivotY*this.scaleY)):(this.y=Math.round(t.top+this.pivotY*this.scaleY),isNaN(t.bottom)||(this.height=(i._height-t.top-t.bottom)/(this.scaleY||.01))):this.y=Math.round(.5*(i.height-this.displayHeight)+t.centerY+this.pivotY*this.scaleY))}},e.onMouseOver=function(t){g.stage.event("showtip",this._toolTip)},e.onMouseOut=function(t){g.stage.event("hidetip",this._toolTip)},e._childChanged=function(t){this.callLater(this.changeSize),i.prototype._childChanged.call(this,t)},h(0,e,"displayWidth",function(){return this.width*this.scaleX}),h(0,e,"width",function(){return this._width?this._width:this.measureWidth},function(t){this._width!=t&&(this._width=t,this.conchModel&&this.conchModel.size(this._width,this._height),this.callLater(this.changeSize),!this._layout.enable||isNaN(this._layout.centerX)&&isNaN(this._layout.right)&&isNaN(this._layout.anchorX)||this.resetLayoutX())}),h(0,e,"measureWidth",function(){var t=0;this.commitMeasure();for(var i=this.numChildren-1;-1<i;i--){var e=this.getChildAt(i);e.visible&&(t=Math.max(e.x+e.width*e.scaleX,t))}return t}),h(0,e,"displayHeight",function(){return this.height*this.scaleY}),h(0,e,"height",function(){return this._height?this._height:this.measureHeight},function(t){this._height!=t&&(this._height=t,this.conchModel&&this.conchModel.size(this._width,this._height),this.callLater(this.changeSize),!this._layout.enable||isNaN(this._layout.centerY)&&isNaN(this._layout.bottom)&&isNaN(this._layout.anchorY)||this.resetLayoutY())}),h(0,e,"dataSource",function(){return this._dataSource},function(t){for(var i in this._dataSource=t,this._dataSource)this.hasOwnProperty(i)&&"function"!=typeof this[i]&&(this[i]=this._dataSource[i])}),h(0,e,"scaleY",i.prototype._$get_scaleY,function(t){g.superGet(x,this,"scaleY")!=t&&(g.superSet(x,this,"scaleY",t),this.callLater(this.changeSize),this._layout.enable&&this.resetLayoutY())}),h(0,e,"measureHeight",function(){var t=0;this.commitMeasure();for(var i=this.numChildren-1;-1<i;i--){var e=this.getChildAt(i);e.visible&&(t=Math.max(e.y+e.height*e.scaleY,t))}return t}),h(0,e,"scaleX",i.prototype._$get_scaleX,function(t){g.superGet(x,this,"scaleX")!=t&&(g.superSet(x,this,"scaleX",t),this.callLater(this.changeSize),this._layout.enable&&this.resetLayoutX())}),h(0,e,"top",function(){return this._layout.top},function(t){t!=this._layout.top&&(this.getLayout().top=t,this._setLayoutEnabled(!0)),this.resetLayoutY()}),h(0,e,"bottom",function(){return this._layout.bottom},function(t){t!=this._layout.bottom&&(this.getLayout().bottom=t,this._setLayoutEnabled(!0)),this.resetLayoutY()}),h(0,e,"left",function(){return this._layout.left},function(t){t!=this._layout.left&&(this.getLayout().left=t,this._setLayoutEnabled(!0)),this.resetLayoutX()}),h(0,e,"right",function(){return this._layout.right},function(t){t!=this._layout.right&&(this.getLayout().right=t,this._setLayoutEnabled(!0)),this.resetLayoutX()}),h(0,e,"centerX",function(){return this._layout.centerX},function(t){t!=this._layout.centerX&&(this.getLayout().centerX=t,this._setLayoutEnabled(!0)),this.resetLayoutX()}),h(0,e,"centerY",function(){return this._layout.centerY},function(t){t!=this._layout.centerY&&(this.getLayout().centerY=t,this._setLayoutEnabled(!0)),this.resetLayoutY()}),h(0,e,"anchorX",function(){return this._layout.anchorX},function(t){t!=this._layout.anchorX&&(this.getLayout().anchorX=t,this._setLayoutEnabled(!0)),this.resetLayoutX()}),h(0,e,"anchorY",function(){return this._layout.anchorY},function(t){t!=this._layout.anchorY&&(this.getLayout().anchorY=t,this._setLayoutEnabled(!0)),this.resetLayoutY()}),h(0,e,"tag",function(){return this._tag},function(t){this._tag=t}),h(0,e,"toolTip",function(){return this._toolTip},function(t){this._toolTip!=t&&(null!=(this._toolTip=t)?(this.on("mouseover",this,this.onMouseOver),this.on("mouseout",this,this.onMouseOut)):(this.off("mouseover",this,this.onMouseOver),this.off("mouseout",this,this.onMouseOut)))}),h(0,e,"comXml",function(){return this._comXml},function(t){this._comXml=t}),h(0,e,"gray",function(){return this._gray},function(t){t!==this._gray&&(this._gray=t,D.gray(this,t))}),h(0,e,"disabled",function(){return this._disabled},function(t){t!==this._disabled&&(this.gray=this._disabled=t,this.mouseEnabled=!t)}),t}(x),R=function(t){function i(){this.lockLayer=null,this.popupEffect=function(t){t.scale(1,1),k.from(t,{x:g.stage.width/2,y:g.stage.height/2,scaleX:0,scaleY:0},300,l.backOut,d.create(this,this.doOpen,[t]))},this.closeEffect=function(t,i){k.to(t,{x:g.stage.width/2,y:g.stage.height/2,scaleX:0,scaleY:0},300,l.strongOut,d.create(this,this.doClose,[t,i]))},i.__super.call(this),this.maskLayer=new x,this.popupEffectHandler=new d(this,this.popupEffect),this.closeEffectHandler=new d(this,this.closeEffect),this.mouseEnabled=this.maskLayer.mouseEnabled=!0,this.zOrder=1e3,g.stage.addChild(this),g.stage.on("resize",this,this._onResize),O.closeDialogOnSide&&this.maskLayer.on("click",this,this._closeOnSide),this._onResize(null)}n(i,"laya.ui.DialogManager",x);var e=i.prototype;return e._closeOnSide=function(){var t=this.getChildAt(this.numChildren-1);t instanceof laya.ui.Dialog&&t.close("side")},e.setLockView=function(t){this.lockLayer||(this.lockLayer=new W,this.lockLayer.mouseEnabled=!0,this.lockLayer.size(g.stage.width,g.stage.height)),this.lockLayer.removeChildren(),t&&(t.centerX=t.centerY=0,this.lockLayer.addChild(t))},e._onResize=function(t){var i=this.maskLayer.width=g.stage.width,e=this.maskLayer.height=g.stage.height;this.lockLayer&&this.lockLayer.size(i,e),this.maskLayer.graphics.clear(),this.maskLayer.graphics.drawRect(0,0,i,e,O.popupBgColor),this.maskLayer.alpha=O.popupBgAlpha;for(var s=this.numChildren-1;-1<s;s--){var n=this.getChildAt(s);n.popupCenter&&this._centerDialog(n)}},e._centerDialog=function(t){t.x=Math.round((g.stage.width-t.width>>1)+t.pivotX),t.y=Math.round((g.stage.height-t.height>>1)+t.pivotY)},e.open=function(t,i,e){void 0===i&&(i=!1),void 0===e&&(e=!1),i&&this._closeAll(),t.popupCenter&&this._centerDialog(t),this.addChild(t),(t.isModal||this._$P.hasZorder)&&this.timer.callLater(this,this._checkMask),e&&null!=t.popupEffect?t.popupEffect.runWith(t):this.doOpen(t),this.event("open")},e.doOpen=function(t){t.onOpened()},e.lock=function(t){this.lockLayer&&(t?this.addChild(this.lockLayer):this.lockLayer.removeSelf())},e.close=function(t,i,e){void 0===e&&(e=!1),e&&null!=t.closeEffect?t.closeEffect.runWith([t,i]):this.doClose(t,i),this.event("close")},e.doClose=function(t,i){t.removeSelf(),t.isModal&&this._checkMask(),t.closeHandler&&t.closeHandler.runWith(i),t.onClosed(i)},e.closeAll=function(){this._closeAll(),this.event("close")},e._closeAll=function(){for(var t=this.numChildren-1;-1<t;t--){var i=this.getChildAt(t);i&&null!=i.close&&this.doClose(i)}},e.getDialogsByGroup=function(t){for(var i=[],e=this.numChildren-1;-1<e;e--){var s=this.getChildAt(e);s&&s.group===t&&i.push(s)}return i},e.closeByGroup=function(t){for(var i=[],e=this.numChildren-1;-1<e;e--){var s=this.getChildAt(e);s&&s.group===t&&(s.close(),i.push(s))}return i},e._checkMask=function(){this.maskLayer.removeSelf();for(var t=this.numChildren-1;-1<t;t--){var i=this.getChildAt(t);if(i&&i.isModal)return void this.addChildAt(this.maskLayer,t)}},i}(),V=function(i){function e(t){this._bitmap=null,this._skin=null,this._group=null,e.__super.call(this),this.skin=t}n(e,"laya.ui.Image",i);var t=e.prototype;return t.destroy=function(t){void 0===t&&(t=!0),i.prototype.destroy.call(this,!0),this._bitmap&&this._bitmap.destroy(),this._bitmap=null},t.dispose=function(){this.destroy(!0),g.loader.clearRes(this._skin)},t.createChildren=function(){this.graphics=this._bitmap=new Y,this._bitmap.autoCacheCmd=!1},t.setSource=function(t,i){t===this._skin&&i&&(this.source=i,this.onCompResize())},h(0,t,"source",function(){return this._bitmap.source},function(t){this._bitmap&&(this._bitmap.source=t,this.event("loaded"),this.repaint())}),h(0,t,"dataSource",i.prototype._$get_dataSource,function(t){"string"==typeof(this._dataSource=t)?this.skin=t:g.superSet(E,this,"dataSource",t)}),h(0,t,"measureHeight",function(){return this._bitmap.height}),h(0,t,"skin",function(){return this._skin},function(t){if(this._skin!=t)if(this._skin=t){var i=v.getRes(t);i?(this.source=i,this.onCompResize()):g.loader.load(this._skin,d.create(this,this.setSource,[this._skin]),null,"image",1,!0,this._group)}else this.source=null}),h(0,t,"group",function(){return this._group},function(t){t&&this._skin&&v.setGroup(this._skin,t),this._group=t}),h(0,t,"sizeGrid",function(){return this._bitmap.sizeGrid?this._bitmap.sizeGrid.join(","):null},function(t){this._bitmap.sizeGrid=D.fillArray(P.defaultSizeGrid,t,Number)}),h(0,t,"measureWidth",function(){return this._bitmap.width}),h(0,t,"width",i.prototype._$get_width,function(t){g.superSet(E,this,"width",t),this._bitmap.width=0==t?1e-7:t}),h(0,t,"height",i.prototype._$get_height,function(t){g.superSet(E,this,"height",t),this._bitmap.height=0==t?1e-7:t}),e}(E),W=function(t){function i(){i.__super.call(this)}n(i,"laya.ui.Box",t);var e=i.prototype;return g.imps(e,{"laya.ui.IBox":!0}),h(0,e,"dataSource",t.prototype._$get_dataSource,function(t){for(var i in this._dataSource=t){var e=this.getChildByName(i);e?e.dataSource=t[i]:this.hasOwnProperty(i)&&"function"!=typeof this[i]&&(this[i]=t[i])}}),i}(E),$=function(i){function e(t,i){this.toggle=!1,this._bitmap=null,this._text=null,this._strokeColors=null,this._state=0,this._selected=!1,this._skin=null,this._autoSize=!0,this._sources=null,this._clickHandler=null,this._stateChanged=!1,e.__super.call(this),this._labelColors=P.buttonLabelColors,this._stateNum=P.buttonStateNum,void 0===i&&(i=""),this.skin=t,this.label=i}n(e,"laya.ui.Button",i);var t=e.prototype;return g.imps(t,{"laya.ui.ISelect":!0}),t.destroy=function(t){void 0===t&&(t=!0),i.prototype.destroy.call(this,t),this._bitmap&&this._bitmap.destroy(),this._text&&this._text.destroy(t),this._bitmap=null,this._text=null,this._clickHandler=null,this._labelColors=this._sources=this._strokeColors=null},t.createChildren=function(){this.graphics=this._bitmap=new Y},t.createText=function(){this._text||(this._text=new w,this._text.overflow=w.HIDDEN,this._text.align="center",this._text.valign="middle",this._text.width=this._width,this._text.height=this._height)},t.initialize=function(){1!==this._mouseEnableState&&(this.mouseEnabled=!0,this._setBit(2,!0)),this._createListener("mouseover",this,this.onMouse,null,!1,!1),this._createListener("mouseout",this,this.onMouse,null,!1,!1),this._createListener("mousedown",this,this.onMouse,null,!1,!1),this._createListener("mouseup",this,this.onMouse,null,!1,!1),this._createListener("click",this,this.onMouse,null,!1,!1)},t.onMouse=function(t){if(!1!==this.toggle||!this._selected)return"click"===t.type?(this.toggle&&(this.selected=!this._selected),void(this._clickHandler&&this._clickHandler.run())):void(this._selected||(this.state=e.stateMap[t.type]))},t.changeClips=function(){var t=v.getRes(this._skin);if(t){var i=t.sourceWidth,e=t.sourceHeight/this._stateNum;t.$_GID||(t.$_GID=L.getGID());var s=t.$_GID+"-"+this._stateNum,n=M.I.get(s);if(L.isOkTextureList(n)||(n=null),n)this._sources=n;else{if(this._sources=[],1===this._stateNum)this._sources.push(t);else for(var h=0;h<this._stateNum;h++)this._sources.push(B.createFromTexture(t,0,e*h,i,e));M.I.set(s,this._sources)}this._autoSize?(this._bitmap.width=this._width||i,this._bitmap.height=this._height||e,this._text&&(this._text.width=this._bitmap.width,this._text.height=this._bitmap.height)):this._text&&(this._text.x=i)}else console.log("lose skin",this._skin)},t.changeState=function(){this._stateChanged=!1,this.runCallLater(this.changeClips);var t=this._state<this._stateNum?this._state:this._stateNum-1;this._sources&&(this._bitmap.source=this._sources[t]),this.label&&(this._text.color=this._labelColors[t],this._strokeColors&&(this._text.strokeColor=this._strokeColors[t]))},t._setStateChanged=function(){this._stateChanged||(this._stateChanged=!0,this.callLater(this.changeState))},h(0,t,"labelStrokeColor",function(){return this.createText(),this._text.strokeColor},function(t){this.createText(),this._text.strokeColor=t}),h(0,t,"measureHeight",function(){return this.runCallLater(this.changeClips),this._text?Math.max(this._bitmap.height,this._text.height):this._bitmap.height}),h(0,t,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,this.callLater(this.changeClips),this._setStateChanged())}),h(0,t,"state",function(){return this._state},function(t){this._state!=t&&(this._state=t,this._setStateChanged())}),h(0,t,"text",function(){return this.createText(),this._text}),h(0,t,"stateNum",function(){return this._stateNum},function(t){"string"==typeof t&&(t=parseInt(t)),this._stateNum!=t&&(this._stateNum=t<1?1:3<t?3:t,this.callLater(this.changeClips))}),h(0,t,"strokeColors",function(){return this._strokeColors?this._strokeColors.join(","):""},function(t){this._strokeColors=D.fillArray(P.buttonLabelColors,t,String),this._setStateChanged()}),h(0,t,"labelColors",function(){return this._labelColors.join(",")},function(t){this._labelColors=D.fillArray(P.buttonLabelColors,t,String),this._setStateChanged()}),h(0,t,"measureWidth",function(){return this.runCallLater(this.changeClips),this._autoSize?this._bitmap.width:(this.runCallLater(this.changeState),this._bitmap.width+(this._text?this._text.width:0))}),h(0,t,"label",function(){return this._text?this._text.text:null},function(t){(this._text||t)&&(this.createText(),this._text.text!=t&&(t&&!this._text.parent&&this.addChild(this._text),this._text.text=(t+"").replace(/\\n/g,"\n"),this._setStateChanged()))}),h(0,t,"selected",function(){return this._selected},function(t){this._selected!=t&&(this._selected=t,this.state=this._selected?2:0,this.event("change"))}),h(0,t,"labelPadding",function(){return this.createText(),this._text.padding.join(",")},function(t){this.createText(),this._text.padding=D.fillArray(P.labelPadding,t,Number)}),h(0,t,"labelSize",function(){return this.createText(),this._text.fontSize},function(t){this.createText(),this._text.fontSize=t}),h(0,t,"labelStroke",function(){return this.createText(),this._text.stroke},function(t){this.createText(),this._text.stroke=t}),h(0,t,"labelBold",function(){return this.createText(),this._text.bold},function(t){this.createText(),this._text.bold=t}),h(0,t,"labelFont",function(){return this.createText(),this._text.font},function(t){this.createText(),this._text.font=t}),h(0,t,"labelAlign",function(){return this.createText(),this._text.align},function(t){this.createText(),this._text.align=t}),h(0,t,"clickHandler",function(){return this._clickHandler},function(t){this._clickHandler=t}),h(0,t,"sizeGrid",function(){return this._bitmap.sizeGrid?this._bitmap.sizeGrid.join(","):null},function(t){this._bitmap.sizeGrid=D.fillArray(P.defaultSizeGrid,t,Number)}),h(0,t,"width",i.prototype._$get_width,function(t){g.superSet(E,this,"width",t),this._autoSize&&(this._bitmap.width=t,this._text&&(this._text.width=t))}),h(0,t,"height",i.prototype._$get_height,function(t){g.superSet(E,this,"height",t),this._autoSize&&(this._bitmap.height=t,this._text&&(this._text.height=t))}),h(0,t,"dataSource",i.prototype._$get_dataSource,function(t){"number"==typeof(this._dataSource=t)||"string"==typeof t?this.label=t+"":g.superSet(E,this,"dataSource",t)}),h(0,t,"iconOffset",function(){return this._bitmap._offset?this._bitmap._offset.join(","):null},function(t){this._bitmap._offset=t?D.fillArray([1,1],t,Number):[]}),s(e,["stateMap",function(){return this.stateMap={mouseup:0,mouseover:1,mousedown:2,mouseout:0}}]),e}(E),U=function(i){function s(t,i,e){this._sources=null,this._bitmap=null,this._skin=null,this._clipX=1,this._clipY=1,this._clipWidth=0,this._clipHeight=0,this._autoPlay=!1,this._interval=50,this._complete=null,this._isPlaying=!1,this._index=0,this._clipChanged=!1,this._group=null,this._toIndex=-1,s.__super.call(this),void 0===i&&(i=1),void 0===e&&(e=1),this._clipX=i,this._clipY=e,this.skin=t}n(s,"laya.ui.Clip",i);var t=s.prototype;return t.destroy=function(t){void 0===t&&(t=!0),i.prototype.destroy.call(this,!0),this._bitmap&&this._bitmap.destroy(),this._bitmap=null,this._sources=null},t.dispose=function(){this.destroy(!0),g.loader.clearRes(this._skin)},t.createChildren=function(){this.graphics=this._bitmap=new Y},t._onDisplay=function(t){this._isPlaying?this._displayedInStage?this.play():this.stop():this._autoPlay&&this.play()},t.changeClip=function(){if(this._clipChanged=!1,this._skin){var t=v.getRes(this._skin);t?this.loadComplete(this._skin,t):g.loader.load(this._skin,d.create(this,this.loadComplete,[this._skin]))}},t.loadComplete=function(t,i){if(t===this._skin&&i){var e=this._clipWidth||Math.ceil(i.sourceWidth/this._clipX),s=this._clipHeight||Math.ceil(i.sourceHeight/this._clipY),n=this._skin+e+s,h=M.I.get(n);if(L.isOkTextureList(h)||(h=null),h)this._sources=h;else{this._sources=[];for(var o=0;o<this._clipY;o++)for(var r=0;r<this._clipX;r++)this._sources.push(B.createFromTexture(i,e*r,s*o,e,s));M.I.set(n,this._sources)}this.index=this._index,this.event("loaded"),this.onCompResize()}},t.play=function(t,i){void 0===t&&(t=0),void 0===i&&(i=-1),this._isPlaying=!0,this.index=t,this._toIndex=i,this._index++,g.timer.loop(this.interval,this,this._loop),this.on("display",this,this._onDisplay),this.on("undisplay",this,this._onDisplay)},t._loop=function(){this._style.visible&&this._sources&&(this._index++,-1<this._toIndex&&this._index>=this._toIndex?this.stop():this._index>=this._sources.length&&(this._index=0),this.index=this._index)},t.stop=function(){this._isPlaying=!1,g.timer.clear(this,this._loop),this.event("complete")},t._setClipChanged=function(){this._clipChanged||(this._clipChanged=!0,this.callLater(this.changeClip))},h(0,t,"interval",function(){return this._interval},function(t){this._interval!=t&&(this._interval=t,this._isPlaying&&this.play())}),h(0,t,"skin",function(){return this._skin},function(t){this._skin!=t&&((this._skin=t)?this._setClipChanged():this._bitmap.source=null)}),h(0,t,"sources",function(){return this._sources},function(t){this._sources=t,this.index=this._index,this.event("loaded")}),h(0,t,"clipX",function(){return this._clipX},function(t){this._clipX=t||1,this._setClipChanged()}),h(0,t,"clipY",function(){return this._clipY},function(t){this._clipY=t||1,this._setClipChanged()}),h(0,t,"total",function(){return this.runCallLater(this.changeClip),this._sources?this._sources.length:0}),h(0,t,"clipWidth",function(){return this._clipWidth},function(t){this._clipWidth=t,this._setClipChanged()}),h(0,t,"sizeGrid",function(){return this._bitmap.sizeGrid?this._bitmap.sizeGrid.join(","):null},function(t){this._bitmap.sizeGrid=D.fillArray(P.defaultSizeGrid,t,Number)}),h(0,t,"group",function(){return this._group},function(t){t&&this._skin&&v.setGroup(this._skin,t),this._group=t}),h(0,t,"clipHeight",function(){return this._clipHeight},function(t){this._clipHeight=t,this._setClipChanged()}),h(0,t,"width",i.prototype._$get_width,function(t){g.superSet(E,this,"width",t),this._bitmap.width=t}),h(0,t,"height",i.prototype._$get_height,function(t){g.superSet(E,this,"height",t),this._bitmap.height=t}),h(0,t,"measureWidth",function(){return this.runCallLater(this.changeClip),this._bitmap.width}),h(0,t,"measureHeight",function(){return this.runCallLater(this.changeClip),this._bitmap.height}),h(0,t,"index",function(){return this._index},function(t){this._index=t,this._bitmap&&this._sources&&(this._bitmap.source=this._sources[t]),this.event("change")}),h(0,t,"autoPlay",function(){return this._autoPlay},function(t){this._autoPlay!=t&&((this._autoPlay=t)?this.play():this.stop())}),h(0,t,"isPlaying",function(){return this._isPlaying},function(t){this._isPlaying=t}),h(0,t,"dataSource",i.prototype._$get_dataSource,function(t){"number"==typeof(this._dataSource=t)&&Math.floor(t)==t||"string"==typeof t?this.index=parseInt(t):g.superSet(E,this,"dataSource",t)}),h(0,t,"bitmap",function(){return this._bitmap}),s}(E),F=function(i){function t(){this.changeHandler=null,this._gridSize=11,this._bgColor="#ffffff",this._borderColor="#000000",this._inputColor="#000000",this._inputBgColor="#efefef",this._colorPanel=null,this._colorTiles=null,this._colorBlock=null,this._colorInput=null,this._colorButton=null,this._colors=[],this._selectedColor="#000000",this._panelChanged=!1,t.__super.call(this)}n(t,"laya.ui.ColorPicker",i);var e=t.prototype;return e.destroy=function(t){void 0===t&&(t=!0),i.prototype.destroy.call(this,t),this._colorPanel&&this._colorPanel.destroy(t),this._colorButton&&this._colorButton.destroy(t),this._colorPanel=null,this._colorTiles=null,this._colorBlock=null,this._colorInput=null,this._colorButton=null,this._colors=null,this.changeHandler=null},e.createChildren=function(){this.addChild(this._colorButton=new $),this._colorPanel=new W,this._colorPanel.size(230,166),this._colorPanel.addChild(this._colorTiles=new x),this._colorPanel.addChild(this._colorBlock=new x),this._colorPanel.addChild(this._colorInput=new m)},e.initialize=function(){this._colorButton.on("click",this,this.onColorButtonClick),this._colorBlock.pos(5,5),this._colorInput.pos(60,5),this._colorInput.size(60,20),this._colorInput.on("change",this,this.onColorInputChange),this._colorInput.on("keydown",this,this.onColorFieldKeyDown),this._colorTiles.pos(5,30),this._colorTiles.on("mousemove",this,this.onColorTilesMouseMove),this._colorTiles.on("click",this,this.onColorTilesClick),this._colorTiles.size(20*this._gridSize,12*this._gridSize),this._colorPanel.on("mousedown",this,this.onPanelMouseDown),this.bgColor=this._bgColor},e.onPanelMouseDown=function(t){t.stopPropagation()},e.changePanel=function(){this._panelChanged=!1;var t=this._colorPanel.graphics;t.clear(),t.drawRect(0,0,230,166,this._bgColor,this._borderColor),this.drawBlock(this._selectedColor),this._colorInput.borderColor=this._borderColor,this._colorInput.bgColor=this._inputBgColor,this._colorInput.color=this._inputColor,(t=this._colorTiles.graphics).clear();for(var i=[0,3355443,6710886,10066329,13421772,16777215,16711680,65280,255,16776960,65535,16711935],e=0;e<12;e++)for(var s=0;s<20;s++){var n=0;n=0===s?i[e]:1===s?0:51*(((3*e+s/6)%3<<0)+3*(e/6<<0))<<16|s%6*51<<8|(e<<0)%6*51;var h=D.toColor(n);this._colors.push(h);var o=s*this._gridSize,r=e*this._gridSize;t.drawRect(o,r,this._gridSize,this._gridSize,h,"#000000")}},e.onColorButtonClick=function(t){this._colorPanel.parent?this.close():this.open()},e.open=function(){var t=this.localToGlobal(new C),i=t.x+this._colorPanel.width<=g.stage.width?t.x:g.stage.width-this._colorPanel.width,e=t.y+this._colorButton.height;e=e+this._colorPanel.height<=g.stage.height?e:t.y-this._colorPanel.height,this._colorPanel.pos(i,e),this._colorPanel.zOrder=1001,g._currentStage.addChild(this._colorPanel),g.stage.on("mousedown",this,this.removeColorBox)},e.close=function(){g.stage.off("mousedown",this,this.removeColorBox),this._colorPanel.removeSelf()},e.removeColorBox=function(t){this.close()},e.onColorFieldKeyDown=function(t){13==t.keyCode&&(this._colorInput.text?this.selectedColor=this._colorInput.text:this.selectedColor=null,this.close(),t.stopPropagation())},e.onColorInputChange=function(t){this._colorInput.text?this.drawBlock(this._colorInput.text):this.drawBlock("#FFFFFF")},e.onColorTilesClick=function(t){this.selectedColor=this.getColorByMouse(),this.close()},e.onColorTilesMouseMove=function(t){this._colorInput.focus=!1;var i=this.getColorByMouse();this._colorInput.text=i,this.drawBlock(i)},e.getColorByMouse=function(){var t=this._colorTiles.getMousePoint(),i=Math.floor(t.x/this._gridSize),e=Math.floor(t.y/this._gridSize);return this._colors[20*e+i]},e.drawBlock=function(t){var i=this._colorBlock.graphics;i.clear();var e=t||"#ffffff";i.drawRect(0,0,50,20,e,this._borderColor),t||i.drawLine(0,0,50,20,"#ff0000")},e.changeColor=function(){var t=this.graphics;t.clear();var i=this._selectedColor||"#000000";t.drawRect(0,0,this._colorButton.width,this._colorButton.height,i)},e._setPanelChanged=function(){this._panelChanged||(this._panelChanged=!0,this.callLater(this.changePanel))},h(0,e,"inputBgColor",function(){return this._inputBgColor},function(t){this._inputBgColor=t,this._setPanelChanged()}),h(0,e,"selectedColor",function(){return this._selectedColor},function(t){this._selectedColor!=t&&(this._selectedColor=this._colorInput.text=t,this.drawBlock(t),this.changeColor(),this.changeHandler&&this.changeHandler.runWith(this._selectedColor),this.event("change",c.EMPTY.setTo("change",this,this)))}),h(0,e,"skin",function(){return this._colorButton.skin},function(t){this._colorButton.skin=t,this.changeColor()}),h(0,e,"bgColor",function(){return this._bgColor},function(t){this._bgColor=t,this._setPanelChanged()}),h(0,e,"borderColor",function(){return this._borderColor},function(t){this._borderColor=t,this._setPanelChanged()}),h(0,e,"inputColor",function(){return this._inputColor},function(t){this._inputColor=t,this._setPanelChanged()}),t}(E),j=function(i){function e(t,i){this._visibleNum=6,this._button=null,this._list=null,this._isOpen=!1,this._itemSize=12,this._labels=[],this._selectedIndex=-1,this._selectHandler=null,this._itemHeight=NaN,this._listHeight=NaN,this._listChanged=!1,this._itemChanged=!1,this._scrollBarSkin=null,this._isCustomList=!1,this.itemRender=null,e.__super.call(this),this._itemColors=P.comboBoxItemColors,this.skin=t,this.labels=i}n(e,"laya.ui.ComboBox",i);var t=e.prototype;return t.destroy=function(t){void 0===t&&(t=!0),i.prototype.destroy.call(this,t),this._button&&this._button.destroy(t),this._list&&this._list.destroy(t),this._button=null,this._list=null,this._itemColors=null,this._labels=null,this._selectHandler=null},t.createChildren=function(){this.addChild(this._button=new $),this._button.text.align="left",this._button.labelPadding="0,0,0,5",this._button.on("mousedown",this,this.onButtonMouseDown)},t._createList=function(){this._list=new st,this._scrollBarSkin&&(this._list.vScrollBarSkin=this._scrollBarSkin),this._setListEvent(this._list)},t._setListEvent=function(t){this._list.selectEnable=!0,this._list.on("mousedown",this,this.onListDown),this._list.mouseHandler=d.create(this,this.onlistItemMouse,null,!1),this._list.scrollBar&&this._list.scrollBar.on("mousedown",this,this.onScrollBarDown)},t.onListDown=function(t){t.stopPropagation()},t.onScrollBarDown=function(t){t.stopPropagation()},t.onButtonMouseDown=function(t){this.callLater(this.switchTo,[!this._isOpen])},t.changeList=function(){this._listChanged=!1;var t=this.width-2,i=this._itemColors[2];this._itemHeight=this._itemSize+6,this._list.itemRender=this.itemRender||{type:"Box",child:[{type:"Label",props:{name:"label",x:1,padding:"3,3,3,3",width:t,height:this._itemHeight,fontSize:this._itemSize,color:i}}]},this._list.repeatY=this._visibleNum,this._list.refresh()},t.onlistItemMouse=function(t,i){var e=t.type;if("mouseover"===e||"mouseout"===e){if(this._isCustomList)return;var s=this._list.getCell(i);if(!s)return;var n=s.getChildByName("label");n&&("mouseover"===e?(n.bgColor=this._itemColors[0],n.color=this._itemColors[1]):(n.bgColor=null,n.color=this._itemColors[2]))}else"click"===e&&(this.selectedIndex=i,this.isOpen=!1)},t.switchTo=function(t){this.isOpen=t},t.changeOpen=function(){this.isOpen=!this._isOpen},t.changeItem=function(){if(this._itemChanged=!1,this._listHeight=0<this._labels.length?Math.min(this._visibleNum,this._labels.length)*this._itemHeight:this._itemHeight,!this._isCustomList){var t=this._list.graphics;t.clear(),t.drawRect(0,0,this.width-1,this._listHeight,this._itemColors[4],this._itemColors[3])}for(var i=this._list.array||[],e=i.length=0,s=this._labels.length;e<s;e++)i.push({label:this._labels[e]});this._list.height=this._listHeight,this._list.array=i},t.changeSelected=function(){this._button.label=this.selectedLabel},t._onStageMouseWheel=function(t){this._list&&!this._list.contains(t.target)&&this.removeList(null)},t.removeList=function(t){g.stage.off("mousedown",this,this.removeList),g.stage.off("mousewheel",this,this._onStageMouseWheel),this.isOpen=!1},h(0,t,"selectedIndex",function(){return this._selectedIndex},function(t){this._selectedIndex!=t&&(this._selectedIndex=t,0<this._labels.length?this.changeSelected():this.callLater(this.changeSelected),this.event("change",[c.EMPTY.setTo("change",this,this)]),this._selectHandler&&this._selectHandler.runWith(this._selectedIndex))}),h(0,t,"measureHeight",function(){return this._button.height}),h(0,t,"skin",function(){return this._button.skin},function(t){this._button.skin!=t&&(this._button.skin=t,this._listChanged=!0)}),h(0,t,"measureWidth",function(){return this._button.width}),h(0,t,"width",i.prototype._$get_width,function(t){g.superSet(E,this,"width",t),this._button.width=this._width,this._itemChanged=!0,this._listChanged=!0}),h(0,t,"selectedLabel",function(){return-1<this._selectedIndex&&this._selectedIndex<this._labels.length?this._labels[this._selectedIndex]:null},function(t){this.selectedIndex=this._labels.indexOf(t)}),h(0,t,"labels",function(){return this._labels.join(",")},function(t){0<this._labels.length&&(this.selectedIndex=-1),t?this._labels=t.split(","):this._labels.length=0,this._itemChanged=!0}),h(0,t,"height",i.prototype._$get_height,function(t){g.superSet(E,this,"height",t),this._button.height=this._height}),h(0,t,"selectHandler",function(){return this._selectHandler},function(t){this._selectHandler=t}),h(0,t,"visibleNum",function(){return this._visibleNum},function(t){this._visibleNum=t,this._listChanged=!0}),h(0,t,"labelBold",function(){return this._button.text.bold},function(t){this._button.text.bold=t}),h(0,t,"itemColors",function(){return String(this._itemColors)},function(t){this._itemColors=D.fillArray(this._itemColors,t,String),this._listChanged=!0}),h(0,t,"itemSize",function(){return this._itemSize},function(t){this._itemSize=t,this._listChanged=!0}),h(0,t,"scrollBar",function(){return this.list.scrollBar}),h(0,t,"isOpen",function(){return this._isOpen},function(t){if(this._isOpen!=t)if(this._isOpen=t,this._button.selected=this._isOpen,this._isOpen){this._list||this._createList(),this._listChanged&&!this._isCustomList&&this.changeList(),this._itemChanged&&this.changeItem();var i=this.localToGlobal(C.TEMP.setTo(0,0)),e=i.y+this._button.height;e=e+this._listHeight<=g.stage.height?e:i.y-this._listHeight,this._list.pos(i.x,e),this._list.zOrder=1001,g._currentStage.addChild(this._list),g.stage.once("mousedown",this,this.removeList),g.stage.on("mousewheel",this,this._onStageMouseWheel),this._list.selectedIndex=this._selectedIndex}else this._list&&this._list.removeSelf()}),h(0,t,"scrollBarSkin",function(){return this._scrollBarSkin},function(t){this._scrollBarSkin=t}),h(0,t,"sizeGrid",function(){return this._button.sizeGrid},function(t){this._button.sizeGrid=t}),h(0,t,"button",function(){return this._button}),h(0,t,"list",function(){return this._list||this._createList(),this._list},function(t){t&&(t.removeSelf(),this._isCustomList=!0,this._list=t,this._setListEvent(t),this._itemHeight=t.getCell(0).height+t.spaceY)}),h(0,t,"dataSource",i.prototype._$get_dataSource,function(t){"number"==typeof(this._dataSource=t)&&Math.floor(t)==t||"string"==typeof t?this.selectedIndex=parseInt(t):t instanceof Array?this.labels=t.join(","):g.superSet(E,this,"dataSource",t)}),h(0,t,"labelColors",function(){return this._button.labelColors},function(t){this._button.labelColors!=t&&(this._button.labelColors=t)}),h(0,t,"labelPadding",function(){return this._button.text.padding.join(",")},function(t){this._button.text.padding=D.fillArray(P.labelPadding,t,Number)}),h(0,t,"labelSize",function(){return this._button.text.fontSize},function(t){this._button.text.fontSize=t}),h(0,t,"labelFont",function(){return this._button.text.font},function(t){this._button.text.font=t}),h(0,t,"stateNum",function(){return this._button.stateNum},function(t){this._button.stateNum=t}),e}(E),q=function(i){function e(t){this.rollRatio=.95,this.changeHandler=null,this.scaleBar=!0,this.autoHide=!1,this.elasticDistance=0,this.elasticBackTime=500,this.upButton=null,this.downButton=null,this.slider=null,this._scrollSize=1,this._skin=null,this._thumbPercent=1,this._target=null,this._lastPoint=null,this._lastOffset=0,this._checkElastic=!1,this._isElastic=!1,this._value=NaN,this._hide=!1,this._clickOnly=!0,this._offsets=null,e.__super.call(this),this._showButtons=O.showButtons,this._touchScrollEnable=O.touchScrollEnable,this._mouseWheelEnable=O.mouseWheelEnable,this.skin=t,this.max=1}n(e,"laya.ui.ScrollBar",i);var t=e.prototype;return t.destroy=function(t){void 0===t&&(t=!0),this.stopScroll(),this.target=null,i.prototype.destroy.call(this,t),this.upButton&&this.upButton.destroy(t),this.downButton&&this.downButton.destroy(t),this.slider&&this.slider.destroy(t),this.upButton=this.downButton=null,this.slider=null,this.changeHandler=null,this._offsets=null},t.createChildren=function(){this.addChild(this.slider=new J),this.addChild(this.upButton=new $),this.addChild(this.downButton=new $)},t.initialize=function(){this.slider.showLabel=!1,this.slider.on("change",this,this.onSliderChange),this.slider.setSlider(0,0,0),this.upButton.on("mousedown",this,this.onButtonMouseDown),this.downButton.on("mousedown",this,this.onButtonMouseDown)},t.onSliderChange=function(){this._value!=this.slider.value&&(this.value=this.slider.value)},t.onButtonMouseDown=function(t){var i=t.currentTarget===this.upButton;this.slide(i),g.timer.once(P.scrollBarDelayTime,this,this.startLoop,[i]),g.stage.once("mouseup",this,this.onStageMouseUp)},t.startLoop=function(t){g.timer.frameLoop(1,this,this.slide,[t])},t.slide=function(t){t?this.value-=this._scrollSize:this.value+=this._scrollSize},t.onStageMouseUp=function(t){g.timer.clear(this,this.startLoop),g.timer.clear(this,this.slide)},t.changeScrollBar=function(){this.upButton.visible=this._showButtons,this.downButton.visible=this._showButtons,this._showButtons&&(this.upButton.skin=this._skin.replace(".png","$up.png"),this.downButton.skin=this._skin.replace(".png","$down.png")),this.slider.isVertical?this.slider.y=this._showButtons?this.upButton.height:0:this.slider.x=this._showButtons?this.upButton.width:0,this.resetPositions(),this.repaint()},t.changeSize=function(){i.prototype.changeSize.call(this),this.repaint(),this.resetPositions(),this.event("change"),this.changeHandler&&this.changeHandler.runWith(this.value)},t.resetPositions=function(){this.slider.isVertical?this.slider.height=this.height-(this._showButtons?this.upButton.height+this.downButton.height:0):this.slider.width=this.width-(this._showButtons?this.upButton.width+this.downButton.width:0),this.resetButtonPosition()},t.resetButtonPosition=function(){this.slider.isVertical?this.downButton.y=this.slider.y+this.slider.height:this.downButton.x=this.slider.x+this.slider.width},t.setScroll=function(t,i,e){this.runCallLater(this.changeSize),this.slider.setSlider(t,i,e),this.slider.bar.visible=0<i,!this._hide&&this.autoHide&&(this.visible=!1)},t.onTargetMouseWheel=function(t){this.value-=t.delta*this._scrollSize,this.target=this._target},t.onTargetMouseDown=function(t){this._clickOnly=!0,this._lastOffset=0,this._checkElastic=!1,this._lastPoint||(this._lastPoint=new C),this._lastPoint.setTo(g.stage.mouseX,g.stage.mouseY),g.timer.clear(this,this.tweenMove),k.clearTween(this),g.stage.once("mouseup",this,this.onStageMouseUp2),g.stage.once("mouseout",this,this.onStageMouseUp2),g.timer.frameLoop(1,this,this.loop)},t.loop=function(){var t=g.stage.mouseY,i=g.stage.mouseX;if(this._lastOffset=this.isVertical?t-this._lastPoint.y:i-this._lastPoint.x,this._clickOnly){if(!(1<Math.abs(this._lastOffset*(this.isVertical?g.stage._canvasTransform.getScaleY():g.stage._canvasTransform.getScaleX()))))return;this._clickOnly=!1,this._offsets||(this._offsets=[]),this._offsets.length=0,this._target.mouseEnabled=!1,!this.hide&&this.autoHide&&(this.alpha=1,this.visible=!0),this.event("start")}this._offsets.push(this._lastOffset),this._lastPoint.x=i,this._lastPoint.y=t,0!==this._lastOffset&&(this._checkElastic||(0<this.elasticDistance?this._checkElastic||0==this._lastOffset||(0<this._lastOffset&&this._value<=this.min||this._lastOffset<0&&this._value>=this.max?(this._isElastic=!0,this._checkElastic=!0):this._isElastic=!1):this._checkElastic=!0),this._isElastic?this._value<=this.min?this.value-=this._lastOffset*Math.max(0,1-(this.min-this._value)/this.elasticDistance):this._value>=this.max&&(this.value-=this._lastOffset*Math.max(0,1-(this._value-this.max)/this.elasticDistance)):this.value-=this._lastOffset)},t.onStageMouseUp2=function(t){if(g.stage.off("mouseup",this,this.onStageMouseUp2),g.stage.off("mouseout",this,this.onStageMouseUp2),g.timer.clear(this,this.loop),!(this._clickOnly&&this._value>=this.min&&this._value<=this.max))if(this._target.mouseEnabled=!0,this._isElastic)this._value<this.min?k.to(this,{value:this.min},this.elasticBackTime,l.sineOut,d.create(this,this.elasticOver)):this._value>this.max&&k.to(this,{value:this.max},this.elasticBackTime,l.sineOut,d.create(this,this.elasticOver));else{if(!this._offsets)return;this._offsets.length<1&&(this._offsets[0]=this.isVertical?g.stage.mouseY-this._lastPoint.y:g.stage.mouseX-this._lastPoint.x);for(var i=0,e=Math.min(this._offsets.length,3),s=0;s<e;s++)i+=this._offsets[this._offsets.length-1-s];if(this._lastOffset=i/e,(i=Math.abs(this._lastOffset))<2)return void this.event("end");60<i&&(this._lastOffset=0<this._lastOffset?60:-60);var n=Math.round(Math.abs(this.elasticDistance*(this._lastOffset/240)));g.timer.frameLoop(1,this,this.tweenMove,[n])}},t.elasticOver=function(){this._isElastic=!1,!this.hide&&this.autoHide&&k.to(this,{alpha:0},500),this.event("end")},t.tweenMove=function(t){this._lastOffset*=this.rollRatio;var i=NaN;if(0<t&&(0<this._lastOffset&&this.value<=this.min?(this._isElastic=!0,i=.5*-(this.min-t-this.value),this._lastOffset>i&&(this._lastOffset=i)):this._lastOffset<0&&this.value>=this.max&&(this._isElastic=!0,i=.5*-(this.max+t-this.value),this._lastOffset<i&&(this._lastOffset=i))),this.value-=this._lastOffset,Math.abs(this._lastOffset)<1){if(g.timer.clear(this,this.tweenMove),this._isElastic)return void(this._value<this.min?k.to(this,{value:this.min},this.elasticBackTime,l.sineOut,d.create(this,this.elasticOver)):this._value>this.max?k.to(this,{value:this.max},this.elasticBackTime,l.sineOut,d.create(this,this.elasticOver)):this.elasticOver());this.event("end"),!this.hide&&this.autoHide&&k.to(this,{alpha:0},500)}},t.stopScroll=function(){this.onStageMouseUp2(null),g.timer.clear(this,this.tweenMove),k.clearTween(this)},h(0,t,"measureHeight",function(){return this.slider.isVertical?100:this.slider.height}),h(0,t,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,this.slider.skin=this._skin,this.callLater(this.changeScrollBar))}),h(0,t,"max",function(){return this.slider.max},function(t){this.slider.max=t}),h(0,t,"showButtons",function(){return this._showButtons},function(t){this._showButtons=t,this.callLater(this.changeScrollBar)}),h(0,t,"measureWidth",function(){return this.slider.isVertical?this.slider.width:100}),h(0,t,"min",function(){return this.slider.min},function(t){this.slider.min=t}),h(0,t,"value",function(){return this._value},function(t){t!==this._value&&(this._value=t,this._isElastic||(this.slider._value!=t&&(this.slider._value=t,this.slider.changeValue()),this._value=this.slider._value),this.event("change"),this.changeHandler&&this.changeHandler.runWith(this._value))}),h(0,t,"isVertical",function(){return this.slider.isVertical},function(t){this.slider.isVertical=t}),h(0,t,"sizeGrid",function(){return this.slider.sizeGrid},function(t){this.slider.sizeGrid=t}),h(0,t,"scrollSize",function(){return this._scrollSize},function(t){this._scrollSize=t}),h(0,t,"dataSource",i.prototype._$get_dataSource,function(t){"number"==typeof(this._dataSource=t)||"string"==typeof t?this.value=Number(t):g.superSet(E,this,"dataSource",t)}),h(0,t,"thumbPercent",function(){return this._thumbPercent},function(t){this.runCallLater(this.changeScrollBar),this.runCallLater(this.changeSize),t=1<=t?.99:t,this._thumbPercent=t,this.scaleBar&&(this.slider.isVertical?this.slider.bar.height=Math.max(this.slider.height*t,P.scrollBarMinNum):this.slider.bar.width=Math.max(this.slider.width*t,P.scrollBarMinNum))}),h(0,t,"target",function(){return this._target},function(t){this._target&&(this._target.off("mousewheel",this,this.onTargetMouseWheel),this._target.off("mousedown",this,this.onTargetMouseDown)),(this._target=t)&&(this._mouseWheelEnable&&this._target.on("mousewheel",this,this.onTargetMouseWheel),this._touchScrollEnable&&this._target.on("mousedown",this,this.onTargetMouseDown))}),h(0,t,"hide",function(){return this._hide},function(t){this._hide=t,this.visible=!t}),h(0,t,"touchScrollEnable",function(){return this._touchScrollEnable},function(t){this._touchScrollEnable=t,this.target=this._target}),h(0,t,"mouseWheelEnable",function(){return this._mouseWheelEnable},function(t){this._mouseWheelEnable=t,this.target=this._target}),h(0,t,"tick",function(){return this.slider.tick},function(t){this.slider.tick=t}),e}(E),J=function(i){function e(t){this.changeHandler=null,this.isVertical=!0,this.showLabel=!0,this._allowClickBack=!1,this._max=100,this._min=0,this._tick=1,this._value=0,this._skin=null,this._bg=null,this._progress=null,this._bar=null,this._tx=NaN,this._ty=NaN,this._maxMove=NaN,this._globalSacle=null,e.__super.call(this),this.skin=t}n(e,"laya.ui.Slider",i);var t=e.prototype;return t.destroy=function(t){void 0===t&&(t=!0),i.prototype.destroy.call(this,t),this._bg&&this._bg.destroy(t),this._bar&&this._bar.destroy(t),this._progress&&this._progress.destroy(t),this._bg=null,this._bar=null,this._progress=null,this.changeHandler=null},t.createChildren=function(){this.addChild(this._bg=new V),this.addChild(this._bar=new $)},t.initialize=function(){this._bar.on("mousedown",this,this.onBarMouseDown),this._bg.sizeGrid=this._bar.sizeGrid="4,4,4,4,0",this._progress&&(this._progress.sizeGrid=this._bar.sizeGrid),this.allowClickBack=!0},t.onBarMouseDown=function(t){this._globalSacle||(this._globalSacle=new C),this._globalSacle.setTo(this.globalScaleX||.01,this.globalScaleY||.01),this._maxMove=this.isVertical?this.height-this._bar.height:this.width-this._bar.width,this._tx=g.stage.mouseX,this._ty=g.stage.mouseY,g.stage.on("mousemove",this,this.mouseMove),g.stage.once("mouseup",this,this.mouseUp),g.stage.once("mouseout",this,this.mouseUp),this.showValueText()},t.showValueText=function(){if(this.showLabel){var t=laya.ui.Slider.label;this.addChild(t),t.textField.changeText(this._value+""),this.isVertical?(t.x=this._bar.x+20,t.y=.5*(this._bar.height-t.height)+this._bar.y):(t.y=this._bar.y-20,t.x=.5*(this._bar.width-t.width)+this._bar.x)}},t.hideValueText=function(){laya.ui.Slider.label&&laya.ui.Slider.label.removeSelf()},t.mouseUp=function(t){g.stage.off("mousemove",this,this.mouseMove),g.stage.off("mouseup",this,this.mouseUp),g.stage.off("mouseout",this,this.mouseUp),this.sendChangeEvent("changed"),this.hideValueText()},t.mouseMove=function(t){var i=this._value;this.isVertical?(this._bar.y+=(g.stage.mouseY-this._ty)/this._globalSacle.y,this._bar.y>this._maxMove?this._bar.y=this._maxMove:this._bar.y<0&&(this._bar.y=0),this._value=this._bar.y/this._maxMove*(this._max-this._min)+this._min,this._progress&&(this._progress.height=this._bar.y+.5*this._bar.height)):(this._bar.x+=(g.stage.mouseX-this._tx)/this._globalSacle.x,this._bar.x>this._maxMove?this._bar.x=this._maxMove:this._bar.x<0&&(this._bar.x=0),this._value=this._bar.x/this._maxMove*(this._max-this._min)+this._min,this._progress&&(this._progress.width=this._bar.x+.5*this._bar.width)),this._tx=g.stage.mouseX,this._ty=g.stage.mouseY;var e=Math.pow(10,(this._tick+"").length-1);this._value=Math.round(Math.round(this._value/this._tick)*this._tick*e)/e,this._value!=i&&this.sendChangeEvent(),this.showValueText()},t.sendChangeEvent=function(t){void 0===t&&(t="change"),this.event(t),this.changeHandler&&this.changeHandler.runWith(this._value)},t.setBarPoint=function(){this.isVertical?this._bar.x=Math.round(.5*(this._bg.width-this._bar.width)):this._bar.y=Math.round(.5*(this._bg.height-this._bar.height))},t.changeSize=function(){i.prototype.changeSize.call(this),this.isVertical?this._bg.height=this.height:this._bg.width=this.width,this.setBarPoint(),this.changeValue()},t.setSlider=function(t,i,e){this._value=-1,this._min=t,this._max=t<i?i:t,this.value=e<t?t:i<e?i:e},t.changeValue=function(){var t=Math.pow(10,(this._tick+"").length-1);this._value=Math.round(Math.round(this._value/this._tick)*this._tick*t)/t,this._value=this._value>this._max?this._max:this._value<this._min?this._min:this._value;var i=this._max-this._min;0===i&&(i=1),this.isVertical?(this._bar.y=(this._value-this._min)/i*(this.height-this._bar.height),this._progress&&(this._progress.height=this._bar.y+.5*this._bar.height)):(this._bar.x=(this._value-this._min)/i*(this.width-this._bar.width),this._progress&&(this._progress.width=this._bar.x+.5*this._bar.width))},t.onBgMouseDown=function(t){var i=this._bg.getMousePoint();this.isVertical?this.value=i.y/(this.height-this._bar.height)*(this._max-this._min)+this._min:this.value=i.x/(this.width-this._bar.width)*(this._max-this._min)+this._min},h(0,t,"measureHeight",function(){return Math.max(this._bg.height,this._bar.height)}),h(0,t,"skin",function(){return this._skin},function(t){if(this._skin!=t){this._skin=t,this._bg.skin=this._skin,this._bar.skin=this._skin.replace(".png","$bar.png");var i=this._skin.replace(".png","$progress.png");v.getRes(i)&&(this._progress||(this.addChild(this._progress=new V),this._progress.sizeGrid=this._bar.sizeGrid,this.setChildIndex(this._progress,1)),this._progress.skin=i),this.setBarPoint(),this.callLater(this.changeValue)}}),h(0,t,"allowClickBack",function(){return this._allowClickBack},function(t){this._allowClickBack!=t&&((this._allowClickBack=t)?this._bg.on("mousedown",this,this.onBgMouseDown):this._bg.off("mousedown",this,this.onBgMouseDown))}),h(0,t,"max",function(){return this._max},function(t){this._max!=t&&(this._max=t,this.callLater(this.changeValue))}),h(0,t,"measureWidth",function(){return Math.max(this._bg.width,this._bar.width)}),h(0,t,"tick",function(){return this._tick},function(t){this._tick!=t&&(this._tick=t,this.callLater(this.changeValue))}),h(0,t,"sizeGrid",function(){return this._bg.sizeGrid},function(t){this._bg.sizeGrid=t,this._bar.sizeGrid=t,this._progress&&(this._progress.sizeGrid=this._bar.sizeGrid)}),h(0,t,"min",function(){return this._min},function(t){this._min!=t&&(this._min=t,this.callLater(this.changeValue))}),h(0,t,"value",function(){return this._value},function(t){if(this._value!=t){var i=this._value;this._value=t,this.changeValue(),this._value!=i&&this.sendChangeEvent()}}),h(0,t,"dataSource",i.prototype._$get_dataSource,function(t){"number"==typeof(this._dataSource=t)||"string"==typeof t?this.value=Number(t):g.superSet(E,this,"dataSource",t)}),h(0,t,"bar",function(){return this._bar}),s(e,["label",function(){return this.label=new K}]),e}(E),K=function(i){function e(t){this._tf=null,e.__super.call(this),void 0===t&&(t=""),u.defaultColor=P.labelColor,this.text=t}n(e,"laya.ui.Label",i);var t=e.prototype;return t.destroy=function(t){void 0===t&&(t=!0),i.prototype.destroy.call(this,t),this._tf=null},t.createChildren=function(){this.addChild(this._tf=new w)},t.changeText=function(t){this._tf.changeText(t)},h(0,t,"padding",function(){return this._tf.padding.join(",")},function(t){this._tf.padding=D.fillArray(P.labelPadding,t,Number)}),h(0,t,"bold",function(){return this._tf.bold},function(t){this._tf.bold=t}),h(0,t,"align",function(){return this._tf.align},function(t){this._tf.align=t}),h(0,t,"text",function(){return this._tf.text},function(t){this._tf.text!=t&&(t&&(t=D.adptString(t+"")),this._tf.text=t,this.event("change"),this._width&&this._height||this.onCompResize())}),h(0,t,"italic",function(){return this._tf.italic},function(t){this._tf.italic=t}),h(0,t,"wordWrap",function(){return this._tf.wordWrap},function(t){this._tf.wordWrap=t}),h(0,t,"font",function(){return this._tf.font},function(t){this._tf.font=t}),h(0,t,"dataSource",i.prototype._$get_dataSource,function(t){"number"==typeof(this._dataSource=t)||"string"==typeof t?this.text=t+"":g.superSet(E,this,"dataSource",t)}),h(0,t,"color",function(){return this._tf.color},function(t){this._tf.color=t}),h(0,t,"valign",function(){return this._tf.valign},function(t){this._tf.valign=t}),h(0,t,"leading",function(){return this._tf.leading},function(t){this._tf.leading=t}),h(0,t,"fontSize",function(){return this._tf.fontSize},function(t){this._tf.fontSize=t}),h(0,t,"bgColor",function(){return this._tf.bgColor},function(t){this._tf.bgColor=t}),h(0,t,"borderColor",function(){return this._tf.borderColor},function(t){this._tf.borderColor=t}),h(0,t,"stroke",function(){return this._tf.stroke},function(t){this._tf.stroke=t}),h(0,t,"strokeColor",function(){return this._tf.strokeColor},function(t){this._tf.strokeColor=t}),h(0,t,"textField",function(){return this._tf}),h(0,t,"measureWidth",function(){return this._tf.width}),h(0,t,"measureHeight",function(){return this._tf.height}),h(0,t,"width",function(){return this._width||this._tf.text?g.superGet(E,this,"width"):0},function(t){g.superSet(E,this,"width",t),this._tf.width=t}),h(0,t,"height",function(){return this._height||this._tf.text?g.superGet(E,this,"height"):0},function(t){g.superSet(E,this,"height",t),this._tf.height=t}),h(0,t,"overflow",function(){return this._tf.overflow},function(t){this._tf.overflow=t}),h(0,t,"underline",function(){return this._tf.underline},function(t){this._tf.underline=t}),h(0,t,"underlineColor",function(){return this._tf.underlineColor},function(t){this._tf.underlineColor=t}),e}(E),Z=function(i){function e(t){this.changeHandler=null,this._bg=null,this._bar=null,this._skin=null,this._value=.5,e.__super.call(this),this.skin=t}n(e,"laya.ui.ProgressBar",i);var t=e.prototype;return t.destroy=function(t){void 0===t&&(t=!0),i.prototype.destroy.call(this,t),this._bg&&this._bg.destroy(t),this._bar&&this._bar.destroy(t),this._bg=this._bar=null,this.changeHandler=null},t.createChildren=function(){this.addChild(this._bg=new V),this.addChild(this._bar=new V),this._bar._bitmap.autoCacheCmd=!1},t.changeValue=function(){if(this.sizeGrid){var t=this.sizeGrid.split(","),i=Number(t[3]),e=Number(t[1]),s=(this.width-i-e)*this._value;this._bar.width=i+e+s,this._bar.visible=this._bar.width>i+e}else this._bar.width=this.width*this._value},h(0,t,"measureHeight",function(){return this._bg.height}),h(0,t,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,this._bg.skin=this._skin,this._bar.skin=this._skin.replace(".png","$bar.png"),this.callLater(this.changeValue))}),h(0,t,"measureWidth",function(){return this._bg.width}),h(0,t,"height",i.prototype._$get_height,function(t){g.superSet(E,this,"height",t),this._bg.height=this._height,this._bar.height=this._height}),h(0,t,"bar",function(){return this._bar}),h(0,t,"value",function(){return this._value},function(t){this._value!=t&&(t=1<t?1:t<0?0:t,this._value=t,this.callLater(this.changeValue),this.event("change"),this.changeHandler&&this.changeHandler.runWith(t))}),h(0,t,"bg",function(){return this._bg}),h(0,t,"sizeGrid",function(){return this._bg.sizeGrid},function(t){this._bg.sizeGrid=this._bar.sizeGrid=t}),h(0,t,"width",i.prototype._$get_width,function(t){g.superSet(E,this,"width",t),this._bg.width=this._width,this.callLater(this.changeValue)}),h(0,t,"dataSource",i.prototype._$get_dataSource,function(t){"number"==typeof(this._dataSource=t)||"string"==typeof t?this.value=Number(t):g.superSet(E,this,"dataSource",t)}),e}(E),Q=(function(t){function e(){this._tipBox=null,this._tipText=null,this._defaultTipHandler=null,e.__super.call(this),this._tipBox=new E,this._tipBox.addChild(this._tipText=new w),this._tipText.x=this._tipText.y=5,this._tipText.color=e.tipTextColor,this._defaultTipHandler=this._showDefaultTip,g.stage.on("showtip",this,this._onStageShowTip),g.stage.on("hidetip",this,this._onStageHideTip),this.zOrder=1100}n(e,"laya.ui.TipManager",E);var i=e.prototype;i._onStageHideTip=function(t){g.timer.clear(this,this._showTip),this.closeAll(),this.removeSelf()},i._onStageShowTip=function(t){g.timer.once(e.tipDelay,this,this._showTip,[t],!0)},i._showTip=function(t){if("string"==typeof t){var i=String(t);Boolean(i)&&this._defaultTipHandler(i)}else t instanceof laya.utils.Handler?t.run():"function"==typeof t&&t.apply();g.stage.on("mousemove",this,this._onStageMouseMove),g.stage.on("mousedown",this,this._onStageMouseDown),this._onStageMouseMove(null)},i._onStageMouseDown=function(t){this.closeAll()},i._onStageMouseMove=function(t){this._showToStage(this,e.offsetX,e.offsetY)},i._showToStage=function(t,i,e){void 0===i&&(i=0),void 0===e&&(e=0);var s=t.getBounds();t.x=g.stage.mouseX+i,t.y=g.stage.mouseY+e,t.x+s.width>g.stage.width&&(t.x-=s.width+i),t.y+s.height>g.stage.height&&(t.y-=s.height+e)},i.closeAll=function(){g.timer.clear(this,this._showTip),g.stage.off("mousemove",this,this._onStageMouseMove),g.stage.off("mousedown",this,this._onStageMouseDown),this.removeChildren()},i.showDislayTip=function(t){this.addChild(t),this._showToStage(this),g._currentStage.addChild(this)},i._showDefaultTip=function(t){this._tipText.text=t;var i=this._tipBox.graphics;i.clear(),i.drawRect(0,0,this._tipText.width+10,this._tipText.height+10,e.tipBackColor),this.addChild(this._tipBox),this._showToStage(this),g._currentStage.addChild(this)},h(0,i,"defaultTipHandler",function(){return this._defaultTipHandler},function(t){this._defaultTipHandler=t}),e.offsetX=10,e.offsetY=15,e.tipTextColor="#ffffff",e.tipBackColor="#111111",e.tipDelay=200}(),function(i){function e(t){this.advsListArr=[],this.resUrl="https://unioncdn.layabox.com/config/iconlist.json",this._data=[],this._resquestTime=36e4,this._appid=null,this._appCodeImgStr=null,this._playIndex=0,this._lunboTime=5e3,e.__super.call(this),this._http=new a.window.XMLHttpRequest,this.skin=t,this.init(),this.size(120,120)}n(e,"laya.ui.AdvImage",i);var t=e.prototype;t.init=function(){a.onMiniGame&&this.isSupportJump?(g.timer.loop(this._resquestTime,this,this.onGetAdvsListData),this.onGetAdvsListData(),this.initEvent()):this.visible=!1},t.initEvent=function(){this.on("click",this,this.onAdvsImgClick)},t.onAdvsImgClick=function(){this.getCurrentAppidObj()&&this.jumptoGame()},t.revertAdvsData=function(){this.advsListArr[this._playIndex]&&(this.visible=!0,this.skin=this.advsListArr[this._playIndex])},t.jumptoGame=function(){var t=this;a.onMiniGame&&this.isSupportJump&&wx.navigateToMiniProgram({appId:this._appid,path:"",extraData:"",envVersion:"release",success:function(){console.log("-------------跳转成功--------------")},fail:function(){console.log("-------------跳转失败--------------")},complete:function(){console.log("-------------跳转接口调用成功--------------"),t.updateAdvsInfo()}.bind(this)})},t.updateAdvsInfo=function(){this.visible=!1,this.onLunbo(),g.timer.loop(this._lunboTime,this,this.onLunbo)},t.onLunbo=function(){this._playIndex>=this.advsListArr.length-1?this._playIndex=0:this._playIndex+=1,this.visible=!0,this.revertAdvsData()},t.getCurrentAppidObj=function(){return this.advsListArr[this._playIndex]},t.onGetAdvsListData=function(){var i=this,t=this.randRange(1e4,1e6),e=this.resUrl+"?"+t;this._http.open("get",e,!0),this._http.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),this._http.responseType="text",this._http.onerror=function(t){i._onError(t)},this._http.onload=function(t){i._onLoad(t)},this._http.send(null)},t.randRange=function(t,i){return Math.floor(Math.random()*(i-t+1))+t},t._onError=function(t){this.error("Request failed Status:"+this._http.status+" text:"+this._http.statusText)},t._onLoad=function(t){var i=this._http,e=void 0!==i.status?i.status:200;200===e||204===e||0===e?this.complete():this.error("["+i.status+"]"+i.statusText+":"+i.responseURL)},t.error=function(t){this.event("error",t)},t.complete=function(){try{this._data=this._http.response||this._http.responseText,this._data=JSON.parse(this._data),this.advsListArr=this._data.list,this._appid=this._data.appid,this._appCodeImgStr=this._data.qrcode,this.updateAdvsInfo(),this.revertAdvsData()}catch(t){!1,this.error(t.message)}},t.clear=function(){var t=this._http;t.onerror=t.onabort=t.onprogress=t.onload=null},t.destroy=function(t){void 0===t&&(t=!0),i.prototype.destroy.call(this,!0),g.timer.clear(this,this.onLunbo),g.timer.clear(this,this.onGetAdvsListData),this.clear()},h(0,t,"isSupportJump",function(){return!!a.onMiniGame&&"function"==typeof wx.navigateToMiniProgram})}(V),function(t){var d;function f(){this._idMap=null,this._aniList=null,this._watchMap={},f.__super.call(this)}n(f,"laya.ui.View",W);var i=f.prototype;return i.createView=function(t){if(t.animations&&!this._idMap&&(this._idMap={}),f.createComp(t,this,this),t.animations){var i,e,s=[],n=t.animations,h=0,o=n.length;for(h=0;h<o;h++){switch(i=new _,e=n[h],i._setUp(this._idMap,e),(this[e.name]=i)._setControlNode(this),e.action){case 1:i.play(0,!1);break;case 2:i.play(0,!0)}s.push(i)}this._aniList=s}0<this._width&&null==t.props.hitTestPrior&&!this.mouseThrough&&(this.hitTestPrior=!0)},i.onEvent=function(t,i){},i.loadUI=function(t){var i=f.uiMap[t];i&&this.createView(i)},i.destroy=function(t){void 0===t&&(t=!0),this._aniList&&(this._aniList.length=0),this._idMap=null,this._aniList=null,this._watchMap=null,laya.ui.Component.prototype.destroy.call(this,t)},i.changeData=function(t){var i=this._watchMap[t];if(i){console.log("change",t);for(var e=0,s=i.length;e<s;e++){i[e].exe(this)}}},f._regs=function(){for(var t in f.uiClassMap)p.regClass(t,f.uiClassMap[t])},f.createComp=function(t,i,e,s){if(!(i=i||f.getCompInstance(t)))return console.warn("can not create:"+t.type),null;var n=t.child;if(n)for(var h=i instanceof laya.ui.List,o=0,r=n.length;o<r;o++){var a=n[o];if(!i.hasOwnProperty("itemRender")||"render"!=a.props.name&&"render"!==a.props.renderType)if("Graphic"==a.type)p.addGraphicsToSprite(a,i);else if(p.isDrawType(a.type))p.addGraphicToSprite(a,i,!0);else{if(h){var l=[],c=f.createComp(a,null,e,l);l.length&&(c._$bindData=l)}else c=f.createComp(a,null,e,s);"Script"==a.type?"owner"in c?c.owner=i:"target"in c&&(c.target=i):"mask"==a.props.renderType||"mask"==a.props.name?i.mask=c:c instanceof laya.display.Sprite&&i.addChild(c)}else i.itemRender=a}var u=t.props;for(var _ in u){var d=u[_];f.eventDic[_]?d&&e&&i.on(_,e,e.onEvent,[d]):f.setCompValue(i,_,d,e,s)}return g.__typeof(i,"laya.ui.IItem")&&i.initItems(),t.compId&&e&&e._idMap&&(e._idMap[t.compId]=i),i},f.setCompValue=function(t,i,e,s,n){if("string"==typeof e&&-1<e.indexOf("${")){if(f._sheet||(f._sheet=p.getClass("laya.data.Table")),!f._sheet)return void console.warn("Can not find class Sheet");if(n)n.push(t,i,e);else if(s){-1==e.indexOf("].")&&(e=e.replace(".","[0]."));var h,o,r=new d(t,i,e);r.exe(s);for(var a=e.replace(/\[.*?\]\./g,".");null!=(h=f._parseWatchData.exec(a));){for(var l=h[1];null!=(o=f._parseKeyWord.exec(l));){var c=o[0],u=s._watchMap[c]||(s._watchMap[c]=[]);u.push(r),f._sheet.I.notifer.on(c,s,s.changeData,[c])}(u=s._watchMap[l]||(s._watchMap[l]=[])).push(r),f._sheet.I.notifer.on(l,s,s.changeData,[l])}}}else if("var"===i&&s)s[e]=t;else if("onClick"==i){var _=g._runScript("(function(){"+e+"})");t.on("click",s,_)}else t[i]="true"===e||"false"!==e&&e},f.getCompInstance=function(t){var i,e=t.props?t.props.runtime:null;return i=e?f.viewClassMap[e]||f.uiClassMap[e]||g.__classmap[e]:f.uiClassMap[t.type],t.props&&t.props.hasOwnProperty("renderType")&&"instance"==t.props.renderType?i.instance:i?new i:null},f.regComponent=function(t,i){f.uiClassMap[t]=i,p.regClass(t,i)},f.regViewRuntime=function(t,i){f.viewClassMap[t]=i},f.uiMap={},f.viewClassMap={},f._sheet=null,s(f,["uiClassMap",function(){return this.uiClassMap={ViewStack:_t,LinkButton:$,TextArea:It,ColorPicker:F,Box:W,Button:$,CheckBox:tt,Clip:U,ComboBox:j,Component:E,HScrollBar:nt,HSlider:rt,Image:V,Label:K,List:st,Panel:ot,ProgressBar:Z,Radio:ct,RadioGroup:St,ScrollBar:q,Slider:J,Tab:wt,TextInput:gt,View:f,VScrollBar:dt,VSlider:pt,Tree:ut,HBox:yt,VBox:bt,Sprite:x,Animation:e,Text:w,FontClip:et}},"eventDic",function(){return this.eventDic={mousedown:!0,mouseup:!0,mousemove:!0,mouseover:!0,mouseout:!0,click:!0,doubleclick:!0,rightmousedown:!0,rightmouseup:!0,rightclick:!0}},"_parseWatchData",function(){return this._parseWatchData=/\${(.*?)}/g},"_parseKeyWord",function(){return this._parseKeyWord=/[a-zA-Z_][a-zA-Z0-9_]*(?:(?:\.[a-zA-Z_][a-zA-Z0-9_]*)+)/g}]),f.__init$=function(){function t(t,i,e){this.comp=null,this.prop=null,this.value=null,this.comp=t,this.prop=i,this.value=e}f._regs(),n(t,""),t.prototype.exe=function(t){var i=D.getBindFun(this.value);this.comp[this.prop]=i.call(this,t)},d=t},f}()),tt=function(t){function e(t,i){void 0===i&&(i=""),e.__super.call(this,t,i)}n(e,"laya.ui.CheckBox",t);var i=e.prototype;return i.preinitialize=function(){laya.ui.Component.prototype.preinitialize.call(this),this.toggle=!0,this._autoSize=!1},i.initialize=function(){t.prototype.initialize.call(this),this.createText(),this._text.align="left",this._text.valign="top",this._text.width=0},h(0,i,"dataSource",t.prototype._$get_dataSource,function(t){"boolean"==typeof(this._dataSource=t)?this.selected=t:"string"==typeof t?this.selected="true"===t:g.superSet($,this,"dataSource",t)}),e}($),it=function(t){function i(){this._space=0,this._align="none",this._itemChanged=!1,i.__super.call(this)}n(i,"laya.ui.LayoutBox",W);var e=i.prototype;return e.addChild=function(t){return t.on("resize",this,this.onResize),this._setItemChanged(),laya.display.Node.prototype.addChild.call(this,t)},e.onResize=function(t){this._setItemChanged()},e.addChildAt=function(t,i){return t.on("resize",this,this.onResize),this._setItemChanged(),laya.display.Node.prototype.addChildAt.call(this,t,i)},e.removeChildAt=function(t){return this.getChildAt(t).off("resize",this,this.onResize),this._setItemChanged(),laya.display.Node.prototype.removeChildAt.call(this,t)},e.refresh=function(){this._setItemChanged()},e.changeItems=function(){this._itemChanged=!1},e.sortItem=function(t){t&&t.sort(function(t,i){return t.y-i.y})},e._setItemChanged=function(){this._itemChanged||(this._itemChanged=!0,this.callLater(this.changeItems))},h(0,e,"space",function(){return this._space},function(t){this._space=t,this._setItemChanged()}),h(0,e,"align",function(){return this._align},function(t){this._align=t,this._setItemChanged()}),i}(),et=function(i){function e(t,i){this._valueArr=null,this._indexMap=null,this._sheet=null,this._direction="horizontal",this._spaceX=0,this._spaceY=0,this._align="left",this._wordsW=0,this._wordsH=0,e.__super.call(this),t&&(this.skin=t),i&&(this.sheet=i)}n(e,"laya.ui.FontClip",i);var t=e.prototype;return t.createChildren=function(){this._bitmap=new Y,this.on("loaded",this,this._onClipLoaded)},t._onClipLoaded=function(){this.callLater(this.changeValue)},t.changeValue=function(){var t;if(this._sources&&(this._valueArr&&(this.graphics.clear(!0),t=this._sources[0]))){var i="horizontal"===this._direction;i?(this._wordsW=this._valueArr.length*(t.sourceWidth+this.spaceX),this._wordsH=t.sourceHeight):(this._wordsW=t.sourceWidth,this._wordsH=(t.sourceHeight+this.spaceY)*this._valueArr.length);var e=0;if(this._width)switch(this._align){case"center":e=.5*(this._width-this._wordsW);break;case"right":e=this._width-this._wordsW;break;default:e=0}for(var s=0,n=this._valueArr.length;s<n;s++){var h=this._indexMap[this._valueArr.charAt(s)];this.sources[h]&&(t=this.sources[h],i?this.graphics.drawTexture(t,e+s*(t.sourceWidth+this.spaceX),0,t.sourceWidth,t.sourceHeight):this.graphics.drawTexture(t,0+e,s*(t.sourceHeight+this.spaceY),t.sourceWidth,t.sourceHeight))}this._width||(this.resetLayoutX(),this.callLater(this.changeSize)),this._height||(this.resetLayoutY(),this.callLater(this.changeSize))}},t.destroy=function(t){void 0===t&&(t=!0),this._valueArr=null,this._indexMap=null,this.graphics.clear(!0),this.removeSelf(),this.off("loaded",this,this._onClipLoaded),i.prototype.destroy.call(this,t)},h(0,t,"sheet",function(){return this._sheet},function(t){t+="";var i=(this._sheet=t).split(" ");this._clipX=String(i[0]).length,this.clipY=i.length,this._indexMap={};for(var e=0;e<this._clipY;e++)for(var s=i[e].split(""),n=0,h=s.length;n<h;n++)this._indexMap[s[n]]=e*this._clipX+n}),h(0,t,"height",i.prototype._$get_height,function(t){g.superSet(U,this,"height",t),this.callLater(this.changeValue)}),h(0,t,"direction",function(){return this._direction},function(t){this._direction=t,this.callLater(this.changeValue)}),h(0,t,"value",function(){return this._valueArr?this._valueArr:""},function(t){t+="",this._valueArr=t,this.callLater(this.changeValue)}),h(0,t,"width",i.prototype._$get_width,function(t){g.superSet(U,this,"width",t),this.callLater(this.changeValue)}),h(0,t,"spaceX",function(){return this._spaceX},function(t){this._spaceX=t,"horizontal"===this._direction&&this.callLater(this.changeValue)}),h(0,t,"spaceY",function(){return this._spaceY},function(t){this._spaceY=t,"horizontal"!==this._direction&&this.callLater(this.changeValue)}),h(0,t,"align",function(){return this._align},function(t){this._align=t,this.callLater(this.changeValue)}),h(0,t,"measureWidth",function(){return this._wordsW}),h(0,t,"measureHeight",function(){return this._wordsH}),e}(U),st=function(t){function i(){this.selectHandler=null,this.renderHandler=null,this.mouseHandler=null,this.selectEnable=!1,this.totalPage=0,this._content=null,this._scrollBar=null,this._itemRender=null,this._repeatX=0,this._repeatY=0,this._repeatX2=0,this._repeatY2=0,this._spaceX=0,this._spaceY=0,this._array=null,this._startIndex=0,this._selectedIndex=-1,this._page=0,this._isVertical=!0,this._cellSize=20,this._cellOffset=0,this._isMoved=!1,this.cacheContent=!1,this._createdLine=0,this._cellChanged=!1,this._cells=[],this._offset=new C,i.__super.call(this)}n(i,"laya.ui.List",t);var e=i.prototype;return g.imps(e,{"laya.ui.IRender":!0,"laya.ui.IItem":!0}),e.destroy=function(t){void 0===t&&(t=!0),this._content&&this._content.destroy(t),this._scrollBar&&this._scrollBar.destroy(t),laya.ui.Component.prototype.destroy.call(this,t),this._content=null,this._scrollBar=null,this._itemRender=null,this._cells=null,this._array=null,this.selectHandler=this.renderHandler=this.mouseHandler=null},e.createChildren=function(){this.addChild(this._content=new W)},e.onScrollStart=function(){this._$P.cacheAs||(this._$P.cacheAs=g.superGet(W,this,"cacheAs")),g.superSet(W,this,"cacheAs","none"),this._scrollBar.once("end",this,this.onScrollEnd)},e.onScrollEnd=function(){g.superSet(W,this,"cacheAs",this._$P.cacheAs)},e._removePreScrollBar=function(){var t=this.removeChildByName("scrollBar");t&&t.destroy(!0)},e.changeCells=function(){if(this._cellChanged=!1,this._itemRender){this.scrollBar=this.getChildByName("scrollBar");var t=this._getOneCell(),i=t.width+this._spaceX||1,e=t.height+this._spaceY||1;0<this._width&&(this._repeatX2=this._isVertical?Math.round(this._width/i):Math.ceil(this._width/i)),0<this._height&&(this._repeatY2=this._isVertical?Math.ceil(this._height/e):Math.round(this._height/e));var s=this._width?this._width:i*this.repeatX-this._spaceX,n=this._height?this._height:e*this.repeatY-this._spaceY;this._cellSize=this._isVertical?e:i,this._cellOffset=this._isVertical?e*Math.max(this._repeatY2,this._repeatY)-n-this._spaceY:i*Math.max(this._repeatX2,this._repeatX)-s-this._spaceX,this._isVertical&&this._scrollBar?this._scrollBar.height=n:!this._isVertical&&this._scrollBar&&(this._scrollBar.width=s),this.setContentSize(s,n);var h=this._isVertical?this.repeatX:this.repeatY,o=(this._isVertical?this.repeatY:this.repeatX)+(this._scrollBar?1:0);this._createItems(0,h,o),this._createdLine=o,this._array&&(this.array=this._array,this.runCallLater(this.renderItems))}},e._getOneCell=function(){if(0===this._cells.length){var t=this.createItem();if(this._offset.setTo(t.x,t.y),this.cacheContent)return t;this._cells.push(t)}return this._cells[0]},e._createItems=function(t,i,e){var s=this._content,n=this._getOneCell(),h=n.width+this._spaceX,o=n.height+this._spaceY;if(this.cacheContent){var r=new W;r.cacheAsBitmap=!0,r.pos((this._isVertical?0:t)*h,(this._isVertical?t:0)*o),this._content.addChild(r),this._content.optimizeScrollRect=!0,s=r}else{for(var a=[],l=this._cells.length-1;-1<l;l--){var c=this._cells[l];c.removeSelf(),a.push(c)}this._cells.length=0}for(var u=t;u<e;u++)for(var _=0;_<i;_++)(n=a&&a.length?a.pop():this.createItem()).x=(this._isVertical?_:u)*h-s.x,n.y=(this._isVertical?u:_)*o-s.y,n.name="item"+(u*i+_),s.addChild(n),this.addCell(n)},e.createItem=function(){var t=[];if("function"==typeof this._itemRender)var i=new this._itemRender;else i=Q.createComp(this._itemRender,null,null,t);if(0==t.length&&i._watchMap){var e=i._watchMap;for(var s in e)for(var n=e[s],h=0;h<n.length;h++){var o=n[h];t.push(o.comp,o.prop,o.value)}}return t.length&&(i._$bindData=t),i},e.addCell=function(t){t.on("click",this,this.onCellMouse),t.on("rightclick",this,this.onCellMouse),t.on("mouseover",this,this.onCellMouse),t.on("mouseout",this,this.onCellMouse),t.on("mousedown",this,this.onCellMouse),t.on("mouseup",this,this.onCellMouse),this._cells.push(t)},e.initItems=function(){if(!this._itemRender&&null!=this.getChildByName("item0")){this.repeatX=1;for(var t=0,i=t=0;i<1e4;i++){var e=this.getChildByName("item"+i);if(!e)break;this.addCell(e),t++}this.repeatY=t}},e.setContentSize=function(t,i){this._content.width=t,this._content.height=i,!this._scrollBar&&0==this._offset.x&&0==this._offset.y||(this._content.scrollRect||(this._content.scrollRect=new b),this._content.scrollRect.setTo(-this._offset.x,-this._offset.y,t,i),this._content.scrollRect=this._content.scrollRect),this.event("resize")},e.onCellMouse=function(t){"mousedown"===t.type&&(this._isMoved=!1);var i=t.currentTarget,e=this._startIndex+this._cells.indexOf(i);e<0||("click"===t.type||"rightclick"===t.type?this.selectEnable&&!this._isMoved?this.selectedIndex=e:this.changeCellState(i,!0,0):"mouseover"!==t.type&&"mouseout"!==t.type||this._selectedIndex===e||this.changeCellState(i,"mouseover"===t.type,0),this.mouseHandler&&this.mouseHandler.runWith([t,e]))},e.changeCellState=function(t,i,e){var s=t.getChildByName("selectBox");s&&(this.selectEnable=!0,s.visible=i,s.index=e)},e.changeSize=function(){laya.ui.Component.prototype.changeSize.call(this),this.setContentSize(this.width,this.height),this._scrollBar&&this.callLater(this.onScrollBarChange)},e.onScrollBarChange=function(t){this.runCallLater(this.changeCells);var i=this._scrollBar.value,e=this._isVertical?this.repeatX:this.repeatY,s=this._isVertical?this.repeatY:this.repeatX,n=Math.floor(i/this._cellSize);if(this.cacheContent)o=s+1,this._createdLine-n<o&&(this._createItems(this._createdLine,e,this._createdLine+o),this.renderItems(this._createdLine*e,0),this._createdLine+=o);else{var h=n*e,o=0;if(h>this._startIndex){o=h-this._startIndex;var r=!0,a=this._startIndex+e*(s+1);this._isMoved=!0}else h<this._startIndex&&(o=this._startIndex-h,r=!1,a=this._startIndex-1,this._isMoved=!0);for(var l=0;l<o;l++){if(r){var c=this._cells.shift();this._cells[this._cells.length]=c;var u=a+l}else c=this._cells.pop(),this._cells.unshift(c),u=a-l;var _=Math.floor(u/e)*this._cellSize;this._isVertical?c.y=_:c.x=_,this.renderItem(c,u)}this._startIndex=h,this.changeSelectStatus()}var d=this._content.scrollRect;this._isVertical?(d.y=i-this._offset.y,d.x=-this._offset.x):(d.y=-this._offset.y,d.x=i-this._offset.x),this._content.scrollRect=d},e.posCell=function(t,i){if(this._scrollBar){var e=this._isVertical?this.repeatX:this.repeatY,s=(this._isVertical?this.repeatY:this.repeatX,Math.floor(i/e)*this._cellSize);this._isVertical?t.y=s:t.x=s}},e.changeSelectStatus=function(){for(var t=0,i=this._cells.length;t<i;t++)this.changeCellState(this._cells[t],this._selectedIndex===this._startIndex+t,1)},e.renderItems=function(t,i){void 0===t&&(t=0),void 0===i&&(i=0);for(var e=t,s=i||this._cells.length;e<s;e++)this.renderItem(this._cells[e],this._startIndex+e);this.changeSelectStatus()},e.renderItem=function(t,i){this._array&&0<=i&&i<this._array.length?(t.visible=!0,t._$bindData?(t._dataSource=this._array[i],this._bindData(t,this._array[i])):t.dataSource=this._array[i],this.cacheContent||this.posCell(t,i),this.hasListener("render")&&this.event("render",[t,i]),this.renderHandler&&this.renderHandler.runWith([t,i])):(t.visible=!1,t.dataSource=null)},e._bindData=function(t,i){for(var e=t._$bindData,s=0,n=e.length;s<n;s++){var h=e[s++],o=e[s++],r=e[s],a=D.getBindFun(r);h[o]=a.call(this,i)}},e.refresh=function(){this.array=this._array},e.getItem=function(t){return-1<t&&t<this._array.length?this._array[t]:null},e.changeItem=function(t,i){-1<t&&t<this._array.length&&(this._array[t]=i,t>=this._startIndex&&t<this._startIndex+this._cells.length&&this.renderItem(this.getCell(t),t))},e.setItem=function(t,i){this.changeItem(t,i)},e.addItem=function(t){this._array.push(t),this.array=this._array},e.addItemAt=function(t,i){this._array.splice(i,0,t),this.array=this._array},e.deleteItem=function(t){this._array.splice(t,1),this.array=this._array},e.getCell=function(t){return this.runCallLater(this.changeCells),-1<t&&this._cells?this._cells[(t-this._startIndex)%this._cells.length]:null},e.scrollTo=function(t){if(this._scrollBar){var i=this._isVertical?this.repeatX:this.repeatY;this._scrollBar.value=Math.floor(t/i)*this._cellSize}else this.startIndex=t},e.tweenTo=function(t,i,e){if(void 0===i&&(i=200),this._scrollBar){var s=this._isVertical?this.repeatX:this.repeatY;k.to(this._scrollBar,{value:Math.floor(t/s)*this._cellSize},i,null,e,0,!0)}else this.startIndex=t,e&&e.run()},e._setCellChanged=function(){this._cellChanged||(this._cellChanged=!0,this.callLater(this.changeCells))},e.commitMeasure=function(){this.runCallLater(this.changeCells)},h(0,e,"cacheAs",t.prototype._$get_cacheAs,function(t){g.superSet(W,this,"cacheAs",t),this._scrollBar&&(this._$P.cacheAs=null,"none"!==t?this._scrollBar.on("start",this,this.onScrollStart):this._scrollBar.off("start",this,this.onScrollStart))}),h(0,e,"content",function(){return this._content}),h(0,e,"height",t.prototype._$get_height,function(t){t!=this._height&&(g.superSet(W,this,"height",t),this._setCellChanged())}),h(0,e,"itemRender",function(){return this._itemRender},function(t){if(this._itemRender!=t){this._itemRender=t;for(var i=this._cells.length-1;-1<i;i--)this._cells[i].destroy();this._cells.length=0,this._setCellChanged()}}),h(0,e,"vScrollBarSkin",function(){return this._scrollBar?this._scrollBar.skin:null},function(t){this._removePreScrollBar();var i=new dt;i.name="scrollBar",i.right=0,t&&" "!=t&&(i.skin=t),this.scrollBar=i,this.addChild(i),this._setCellChanged()}),h(0,e,"page",function(){return this._page},function(t){this._page=t,this._array&&(this._page=0<t?t:0,this._page=this._page<this.totalPage?this._page:this.totalPage-1,this.startIndex=this._page*this.repeatX*this.repeatY)}),h(0,e,"hScrollBarSkin",function(){return this._scrollBar?this._scrollBar.skin:null},function(t){this._removePreScrollBar();var i=new nt;i.name="scrollBar",i.bottom=0,t&&" "!=t&&(i.skin=t),this.scrollBar=i,this.addChild(i),this._setCellChanged()}),h(0,e,"repeatX",function(){return 0<this._repeatX?this._repeatX:0<this._repeatX2?this._repeatX2:1},function(t){this._repeatX=t,this._setCellChanged()}),h(0,e,"scrollBar",function(){return this._scrollBar},function(t){this._scrollBar!=t&&(this._scrollBar=t)&&(this._isVertical=this._scrollBar.isVertical,this.addChild(this._scrollBar),this._scrollBar.on("change",this,this.onScrollBarChange))}),h(0,e,"width",t.prototype._$get_width,function(t){t!=this._width&&(g.superSet(W,this,"width",t),this._setCellChanged())}),h(0,e,"repeatY",function(){return 0<this._repeatY?this._repeatY:0<this._repeatY2?this._repeatY2:1},function(t){this._repeatY=t,this._setCellChanged()}),h(0,e,"spaceX",function(){return this._spaceX},function(t){this._spaceX=t,this._setCellChanged()}),h(0,e,"spaceY",function(){return this._spaceY},function(t){this._spaceY=t,this._setCellChanged()}),h(0,e,"selectedIndex",function(){return this._selectedIndex},function(t){this._selectedIndex!=t&&(this._selectedIndex=t,this.changeSelectStatus(),this.event("change"),this.selectHandler&&this.selectHandler.runWith(t),this.startIndex=this._startIndex)}),h(0,e,"selectedItem",function(){return-1!=this._selectedIndex?this._array[this._selectedIndex]:null},function(t){this.selectedIndex=this._array.indexOf(t)}),h(0,e,"length",function(){return this._array?this._array.length:0}),h(0,e,"selection",function(){return this.getCell(this._selectedIndex)},function(t){this.selectedIndex=this._startIndex+this._cells.indexOf(t)}),h(0,e,"startIndex",function(){return this._startIndex},function(t){this._startIndex=0<t?t:0,this.callLater(this.renderItems)}),h(0,e,"array",function(){return this._array},function(t){this.runCallLater(this.changeCells),this._array=t||[];var i=this._array.length;if(this.totalPage=Math.ceil(i/(this.repeatX*this.repeatY)),this._selectedIndex=this._selectedIndex<i?this._selectedIndex:i-1,this.startIndex=this._startIndex,this._scrollBar){this._scrollBar.stopScroll();var e=this._isVertical?this.repeatX:this.repeatY,s=this._isVertical?this.repeatY:this.repeatX,n=Math.ceil(i/e);1<(0<this._cellOffset?this.totalPage+1:this.totalPage)?(this._scrollBar.scrollSize=this._cellSize,this._scrollBar.thumbPercent=s/n,this._scrollBar.setScroll(0,(n-s)*this._cellSize+this._cellOffset,this._scrollBar.value)):this._scrollBar.setScroll(0,0,0),this._scrollBar.target=this._content}}),h(0,e,"dataSource",t.prototype._$get_dataSource,function(t){"number"==typeof(this._dataSource=t)&&Math.floor(t)==t||"string"==typeof t?this.selectedIndex=parseInt(t):t instanceof Array?this.array=t:g.superSet(W,this,"dataSource",t)}),h(0,e,"cells",function(){return this.runCallLater(this.changeCells),this._cells}),i}(W),nt=(n(ht,"laya.ui.HScrollBar",X=q),ht.prototype.initialize=function(){X.prototype.initialize.call(this),this.slider.isVertical=!1},ht);function ht(){ht.__super.call(this)}var ot=function(t){function i(){this._content=null,this._vScrollBar=null,this._hScrollBar=null,this._scrollChanged=!1,i.__super.call(this),this.width=this.height=100}n(i,"laya.ui.Panel",t);var e=i.prototype;return e.destroy=function(t){void 0===t&&(t=!0),laya.ui.Component.prototype.destroy.call(this,t),this._content&&this._content.destroy(t),this._vScrollBar&&this._vScrollBar.destroy(t),this._hScrollBar&&this._hScrollBar.destroy(t),this._vScrollBar=null,this._hScrollBar=null,this._content=null},e.destroyChildren=function(){this._content.destroyChildren()},e.createChildren=function(){laya.display.Node.prototype.addChild.call(this,this._content=new W)},e.addChild=function(t){return t.on("resize",this,this.onResize),this._setScrollChanged(),this._content.addChild(t)},e.onResize=function(){this._setScrollChanged()},e.addChildAt=function(t,i){return t.on("resize",this,this.onResize),this._setScrollChanged(),this._content.addChildAt(t,i)},e.removeChild=function(t){return t.off("resize",this,this.onResize),this._setScrollChanged(),this._content.removeChild(t)},e.removeChildAt=function(t){return this.getChildAt(t).off("resize",this,this.onResize),this._setScrollChanged(),this._content.removeChildAt(t)},e.removeChildren=function(t,i){return void 0===t&&(t=0),void 0===i&&(i=2147483647),this._content.removeChildren(t,i),this._setScrollChanged(),this},e.getChildAt=function(t){return this._content.getChildAt(t)},e.getChildByName=function(t){return this._content.getChildByName(t)},e.getChildIndex=function(t){return this._content.getChildIndex(t)},e.changeScroll=function(){this._scrollChanged=!1;var t=this.contentWidth||1,i=this.contentHeight||1,e=this._vScrollBar,s=this._hScrollBar,n=e&&i>this._height,h=s&&t>this._width,o=n?this._width-e.width:this._width,r=h?this._height-s.height:this._height;e&&(e.x=this._width-e.width,e.y=0,e.height=this._height-(h?s.height:0),e.scrollSize=Math.max(.033*this._height,1),e.thumbPercent=r/i,e.setScroll(0,i-r,e.value)),s&&(s.x=0,s.y=this._height-s.height,s.width=this._width-(n?e.width:0),s.scrollSize=Math.max(.033*this._width,1),s.thumbPercent=o/t,s.setScroll(0,t-o,s.value))},e.changeSize=function(){laya.ui.Component.prototype.changeSize.call(this),this.setContentSize(this._width,this._height)},e.setContentSize=function(t,i){var e=this._content;e.width=t,e.height=i,e.scrollRect||(e.scrollRect=new b),e.scrollRect.setTo(0,0,t,i),e.scrollRect=e.scrollRect},e.onScrollBarChange=function(t){var i=this._content.scrollRect;if(i){var e=Math.round(t.value);t.isVertical?i.y=e:i.x=e,this._content.scrollRect=i}},e.scrollTo=function(t,i){void 0===t&&(t=0),void 0===i&&(i=0),this.vScrollBar&&(this.vScrollBar.value=i),this.hScrollBar&&(this.hScrollBar.value=t)},e.refresh=function(){this.changeScroll()},e.onScrollStart=function(){this._$P.cacheAs||(this._$P.cacheAs=g.superGet(W,this,"cacheAs")),g.superSet(W,this,"cacheAs","none"),this._hScrollBar&&this._hScrollBar.once("end",this,this.onScrollEnd),this._vScrollBar&&this._vScrollBar.once("end",this,this.onScrollEnd)},e.onScrollEnd=function(){g.superSet(W,this,"cacheAs",this._$P.cacheAs)},e._setScrollChanged=function(){this._scrollChanged||(this._scrollChanged=!0,this.callLater(this.changeScroll))},h(0,e,"numChildren",function(){return this._content.numChildren}),h(0,e,"hScrollBarSkin",function(){return this._hScrollBar?this._hScrollBar.skin:null},function(t){null==this._hScrollBar&&(laya.display.Node.prototype.addChild.call(this,this._hScrollBar=new nt),this._hScrollBar.on("change",this,this.onScrollBarChange,[this._hScrollBar]),this._hScrollBar.target=this._content,this._setScrollChanged()),this._hScrollBar.skin=t}),h(0,e,"contentWidth",function(){for(var t=0,i=this._content.numChildren-1;-1<i;i--){var e=this._content.getChildAt(i);t=Math.max(e.x+e.width*e.scaleX,t)}return t}),h(0,e,"contentHeight",function(){for(var t=0,i=this._content.numChildren-1;-1<i;i--){var e=this._content.getChildAt(i);t=Math.max(e.y+e.height*e.scaleY,t)}return t}),h(0,e,"width",t.prototype._$get_width,function(t){g.superSet(W,this,"width",t),this._setScrollChanged()}),h(0,e,"hScrollBar",function(){return this._hScrollBar}),h(0,e,"content",function(){return this._content}),h(0,e,"height",t.prototype._$get_height,function(t){g.superSet(W,this,"height",t),this._setScrollChanged()}),h(0,e,"vScrollBarSkin",function(){return this._vScrollBar?this._vScrollBar.skin:null},function(t){null==this._vScrollBar&&(laya.display.Node.prototype.addChild.call(this,this._vScrollBar=new dt),this._vScrollBar.on("change",this,this.onScrollBarChange,[this._vScrollBar]),this._vScrollBar.target=this._content,this._setScrollChanged()),this._vScrollBar.skin=t}),h(0,e,"vScrollBar",function(){return this._vScrollBar}),h(0,e,"cacheAs",t.prototype._$get_cacheAs,function(t){g.superSet(W,this,"cacheAs",t),this._$P.cacheAs=null,"none"!==t?(this._hScrollBar&&this._hScrollBar.on("start",this,this.onScrollStart),this._vScrollBar&&this._vScrollBar.on("start",this,this.onScrollStart)):(this._hScrollBar&&this._hScrollBar.off("start",this,this.onScrollStart),this._vScrollBar&&this._vScrollBar.off("start",this,this.onScrollStart))}),i}(W),rt=(n(at,"laya.ui.HSlider",J),at);function at(t){at.__super.call(this,t),this.isVertical=!1}var lt=function(t){function e(t,i){this.selectHandler=null,this._items=null,this._selectedIndex=-1,this._skin=null,this._direction="horizontal",this._space=0,this._labels=null,this._labelColors=null,this._labelFont=null,this._labelStrokeColor=null,this._strokeColors=null,this._labelStroke=NaN,this._labelSize=0,this._labelBold=!1,this._labelPadding=null,this._labelAlign=null,this._stateNum=0,this._labelChanged=!1,e.__super.call(this),this.skin=i,this.labels=t}n(e,"laya.ui.UIGroup",t);var i=e.prototype;return g.imps(i,{"laya.ui.IItem":!0}),i.preinitialize=function(){this.mouseEnabled=!0},i.destroy=function(t){void 0===t&&(t=!0),laya.ui.Component.prototype.destroy.call(this,t),this._items&&(this._items.length=0),this._items=null,this.selectHandler=null},i.addItem=function(t,i){void 0===i&&(i=!0);var e=t,s=this._items.length;if(e.name="item"+s,this.addChild(e),this.initItems(),i&&0<s){var n=this._items[s-1];"horizontal"==this._direction?e.x=n.x+n.width+this._space:e.y=n.y+n.height+this._space}else i&&(e.x=0,e.y=0);return s},i.delItem=function(t,i){void 0===i&&(i=!0);var e=this._items.indexOf(t);if(-1!=e){var s=t;this.removeChild(s);for(var n=e+1,h=this._items.length;n<h;n++){var o=this._items[n];o.name="item"+(n-1),i&&("horizontal"==this._direction?o.x-=s.width+this._space:o.y-=s.height+this._space)}if(this.initItems(),-1<this._selectedIndex){var r;r=this._selectedIndex<this._items.length?this._selectedIndex:this._selectedIndex-1,this._selectedIndex=-1,this.selectedIndex=r}}},i.initItems=function(){this._items||(this._items=[]);for(var t=this._items.length=0;t<1e4;t++){var i=this.getChildByName("item"+t);if(null==i)break;this._items.push(i),i.selected=t===this._selectedIndex,i.clickHandler=d.create(this,this.itemClick,[t],!1)}},i.itemClick=function(t){this.selectedIndex=t},i.setSelect=function(t,i){this._items&&-1<t&&t<this._items.length&&(this._items[t].selected=i)},i.createItem=function(t,i){return null},i.changeLabels=function(){if(this._labelChanged=!1,this._items)for(var t=0,i=0,e=this._items.length;i<e;i++){var s=this._items[i];this._skin&&(s.skin=this._skin),this._labelColors&&(s.labelColors=this._labelColors),this._labelSize&&(s.labelSize=this._labelSize),this._labelStroke&&(s.labelStroke=this._labelStroke),this._labelStrokeColor&&(s.labelStrokeColor=this._labelStrokeColor),this._strokeColors&&(s.strokeColors=this._strokeColors),this._labelBold&&(s.labelBold=this._labelBold),this._labelPadding&&(s.labelPadding=this._labelPadding),this._labelAlign&&(s.labelAlign=this._labelAlign),this._stateNum&&(s.stateNum=this._stateNum),this._labelFont&&(s.labelFont=this._labelFont),"horizontal"===this._direction?(s.y=0,s.x=t,t+=s.width+this._space):(s.x=0,s.y=t,t+=s.height+this._space)}this.changeSize()},i.commitMeasure=function(){this.runCallLater(this.changeLabels)},i._setLabelChanged=function(){this._labelChanged||(this._labelChanged=!0,this.callLater(this.changeLabels))},h(0,i,"labelStrokeColor",function(){return this._labelStrokeColor},function(t){this._labelStrokeColor!=t&&(this._labelStrokeColor=t,this._setLabelChanged())}),h(0,i,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,this._setLabelChanged())}),h(0,i,"selectedIndex",function(){return this._selectedIndex},function(t){this._selectedIndex!=t&&(this.setSelect(this._selectedIndex,!1),this._selectedIndex=t,this.setSelect(t,!0),this.event("change"),this.selectHandler&&this.selectHandler.runWith(this._selectedIndex))}),h(0,i,"labels",function(){return this._labels},function(t){if(this._labels!=t){if(this._labels=t,this.removeChildren(),this._setLabelChanged(),this._labels)for(var i=this._labels.split(","),e=0,s=i.length;e<s;e++){var n=this.createItem(this._skin,i[e]);n.name="item"+e,this.addChild(n)}this.initItems()}}),h(0,i,"strokeColors",function(){return this._strokeColors},function(t){this._strokeColors!=t&&(this._strokeColors=t,this._setLabelChanged())}),h(0,i,"labelColors",function(){return this._labelColors},function(t){this._labelColors!=t&&(this._labelColors=t,this._setLabelChanged())}),h(0,i,"labelStroke",function(){return this._labelStroke},function(t){this._labelStroke!=t&&(this._labelStroke=t,this._setLabelChanged())}),h(0,i,"labelSize",function(){return this._labelSize},function(t){this._labelSize!=t&&(this._labelSize=t,this._setLabelChanged())}),h(0,i,"stateNum",function(){return this._stateNum},function(t){this._stateNum!=t&&(this._stateNum=t,this._setLabelChanged())}),h(0,i,"labelBold",function(){return this._labelBold},function(t){this._labelBold!=t&&(this._labelBold=t,this._setLabelChanged())}),h(0,i,"labelFont",function(){return this._labelFont},function(t){this._labelFont!=t&&(this._labelFont=t,this._setLabelChanged())}),h(0,i,"labelPadding",function(){return this._labelPadding},function(t){this._labelPadding!=t&&(this._labelPadding=t,this._setLabelChanged())}),h(0,i,"direction",function(){return this._direction},function(t){this._direction=t,this._setLabelChanged()}),h(0,i,"space",function(){return this._space},function(t){this._space=t,this._setLabelChanged()}),h(0,i,"items",function(){return this._items}),h(0,i,"selection",function(){return-1<this._selectedIndex&&this._selectedIndex<this._items.length?this._items[this._selectedIndex]:null},function(t){this.selectedIndex=this._items.indexOf(t)}),h(0,i,"dataSource",t.prototype._$get_dataSource,function(t){"number"==typeof(this._dataSource=t)&&Math.floor(t)==t||"string"==typeof t?this.selectedIndex=parseInt(t):t instanceof Array?this.labels=t.join(","):g.superSet(W,this,"dataSource",t)}),e}(W),ct=function(i){function e(t,i){this._value=null,void 0===i&&(i=""),e.__super.call(this,t,i)}n(e,"laya.ui.Radio",i);var t=e.prototype;return t.destroy=function(t){void 0===t&&(t=!0),i.prototype.destroy.call(this,t),this._value=null},t.preinitialize=function(){laya.ui.Component.prototype.preinitialize.call(this),this.toggle=!1,this._autoSize=!1},t.initialize=function(){i.prototype.initialize.call(this),this.createText(),this._text.align="left",this._text.valign="top",this._text.width=0,this.on("click",this,this.onClick)},t.onClick=function(t){this.selected=!0},h(0,t,"value",function(){return null!=this._value?this._value:this.label},function(t){this._value=t}),e}($),ut=function(t){function i(){this._list=null,this._source=null,this._renderHandler=null,this._spaceLeft=10,this._spaceBottom=0,this._keepStatus=!0,i.__super.call(this),this.width=this.height=200}n(i,"laya.ui.Tree",t);var e=i.prototype;return g.imps(e,{"laya.ui.IRender":!0}),e.destroy=function(t){void 0===t&&(t=!0),laya.ui.Component.prototype.destroy.call(this,t),this._list&&this._list.destroy(t),this._list=null,this._source=null,this._renderHandler=null},e.createChildren=function(){this.addChild(this._list=new st),this._list.renderHandler=d.create(this,this.renderItem,null,!1),this._list.repeatX=1,this._list.on("change",this,this.onListChange)},e.onListChange=function(t){this.event("change")},e.getArray=function(){var t,i=[];for(var e in this._source)t=this._source[e],this.getParentOpenStatus(t)&&(t.x=this._spaceLeft*this.getDepth(t),i.push(t));return i},e.getDepth=function(t,i){return void 0===i&&(i=0),null==t.nodeParent?i:this.getDepth(t.nodeParent,i+1)},e.getParentOpenStatus=function(t){var i=t.nodeParent;return null==i||!!i.isOpen&&(null==i.nodeParent||this.getParentOpenStatus(i))},e.renderItem=function(t,i){var e=t.dataSource;if(e){t.left=e.x;var s=t.getChildByName("arrow");s&&(e.hasChild?(s.visible=!0,s.index=e.isOpen?1:0,s.tag=i,s.off("click",this,this.onArrowClick),s.on("click",this,this.onArrowClick)):s.visible=!1);var n=t.getChildByName("folder");n&&(2==n.clipY?n.index=e.isDirectory?0:1:n.index=e.isDirectory?e.isOpen?1:0:2),this._renderHandler&&this._renderHandler.runWith([t,i])}},e.onArrowClick=function(t){var i=t.currentTarget.tag;this._list.array[i].isOpen=!this._list.array[i].isOpen,this.event("open"),this._list.array=this.getArray()},e.setItemState=function(t,i){this._list.array[t]&&(this._list.array[t].isOpen=i,this._list.array=this.getArray())},e.fresh=function(){this._list.array=this.getArray(),this.repaint()},e.parseXml=function(t,i,e,s){var n,h=t.childNodes,o=h.length;if(!s){n={};var r,a=t.attributes;for(var l in a){var c=(r=a[l]).nodeName,u=r.nodeValue;n[c]="true"==u||"false"!=u&&u}n.nodeParent=e,0<o&&(n.isDirectory=!0),n.hasChild=0<o,i.push(n)}for(var _=0;_<o;_++){var d=h[_];this.parseXml(d,i,n,!1)}},e.parseOpenStatus=function(t,i){for(var e=0,s=i.length;e<s;e++){var n=i[e];if(n.isDirectory)for(var h=0,o=t.length;h<o;h++){var r=t[h];if(r.isDirectory&&this.isSameParent(r,n)&&n.label==r.label){n.isOpen=r.isOpen;break}}}},e.isSameParent=function(t,i){return null==t.nodeParent&&null==i.nodeParent||null!=t.nodeParent&&null!=i.nodeParent&&(t.nodeParent.label==i.nodeParent.label&&this.isSameParent(t.nodeParent,i.nodeParent))},e.filter=function(t){if(Boolean(t)){var i=[];this.getFilterSource(this._source,i,t),this._list.array=i}else this._list.array=this.getArray()},e.getFilterSource=function(t,i,e){var s;for(var n in e=e.toLocaleLowerCase(),t)!(s=t[n]).isDirectory&&-1<String(s.label).toLowerCase().indexOf(e)&&(s.x=0,i.push(s)),s.child&&0<s.child.length&&this.getFilterSource(s.child,i,e)},h(0,e,"spaceBottom",function(){return this._list.spaceY},function(t){this._list.spaceY=t}),h(0,e,"keepStatus",function(){return this._keepStatus},function(t){this._keepStatus=t}),h(0,e,"itemRender",function(){return this._list.itemRender},function(t){this._list.itemRender=t}),h(0,e,"array",function(){return this._list.array},function(t){this._keepStatus&&this._list.array&&t&&this.parseOpenStatus(this._list.array,t),this._source=t,this._list.array=this.getArray()}),h(0,e,"mouseHandler",function(){return this._list.mouseHandler},function(t){this._list.mouseHandler=t}),h(0,e,"dataSource",t.prototype._$get_dataSource,function(t){this._dataSource=t,g.superSet(W,this,"dataSource",t)}),h(0,e,"source",function(){return this._source}),h(0,e,"scrollBar",function(){return this._list.scrollBar}),h(0,e,"list",function(){return this._list}),h(0,e,"scrollBarSkin",function(){return this._list.vScrollBarSkin},function(t){this._list.vScrollBarSkin=t}),h(0,e,"renderHandler",function(){return this._renderHandler},function(t){this._renderHandler=t}),h(0,e,"selectedIndex",function(){return this._list.selectedIndex},function(t){this._list.selectedIndex=t}),h(0,e,"spaceLeft",function(){return this._spaceLeft},function(t){this._spaceLeft=t}),h(0,e,"selectedItem",function(){return this._list.selectedItem},function(t){this._list.selectedItem=t}),h(0,e,"width",t.prototype._$get_width,function(t){g.superSet(W,this,"width",t),this._list.width=t}),h(0,e,"height",t.prototype._$get_height,function(t){g.superSet(W,this,"height",t),this._list.height=t}),h(0,e,"xml",null,function(t){var i=[];this.parseXml(t.childNodes[0],i,null,!0),this.array=i}),h(0,e,"selectedPath",function(){return this._list.selectedItem?this._list.selectedItem.path:null}),i}(W),_t=function(t){function i(){this._items=null,this._selectedIndex=0,i.__super.call(this),this._setIndexHandler=d.create(this,this.setIndex,null,!1)}n(i,"laya.ui.ViewStack",t);var e=i.prototype;return g.imps(e,{"laya.ui.IItem":!0}),e.setItems=function(t){this.removeChildren();for(var i=0,e=0,s=t.length;e<s;e++){var n=t[e];n&&(n.name="item"+i,this.addChild(n),i++)}this.initItems()},e.addItem=function(t){t.name="item"+this._items.length,this.addChild(t),this.initItems()},e.initItems=function(){this._items=[];for(var t=0;t<1e4;t++){var i=this.getChildByName("item"+t);if(null==i)break;this._items.push(i),i.visible=t==this._selectedIndex}},e.setSelect=function(t,i){this._items&&-1<t&&t<this._items.length&&(this._items[t].visible=i)},e.setIndex=function(t){this.selectedIndex=t},h(0,e,"dataSource",t.prototype._$get_dataSource,function(t){if("number"==typeof(this._dataSource=t)&&Math.floor(t)==t||"string"==typeof t)this.selectedIndex=parseInt(t);else for(var i in this._dataSource)this.hasOwnProperty(i)&&(this[i]=this._dataSource[i])}),h(0,e,"selectedIndex",function(){return this._selectedIndex},function(t){this._selectedIndex!=t&&(this.setSelect(this._selectedIndex,!1),this._selectedIndex=t,this.setSelect(this._selectedIndex,!0))}),h(0,e,"selection",function(){return-1<this._selectedIndex&&this._selectedIndex<this._items.length?this._items[this._selectedIndex]:null},function(t){this.selectedIndex=this._items.indexOf(t)}),h(0,e,"items",function(){return this._items}),h(0,e,"setIndexHandler",function(){return this._setIndexHandler},function(t){this._setIndexHandler=t}),i}(W),dt=(n(ft,"laya.ui.VScrollBar",q),ft);function ft(){ft.__super.call(this)}var gt=function(i){function e(t){this._bg=null,this._skin=null,e.__super.call(this),void 0===t&&(t=""),this.text=t,this.skin=this.skin}n(e,"laya.ui.TextInput",i);var t=e.prototype;return t.preinitialize=function(){this.mouseEnabled=!0},t.destroy=function(t){void 0===t&&(t=!0),i.prototype.destroy.call(this,t),this._bg&&this._bg.destroy(),this._bg=null},t.createChildren=function(){this.addChild(this._tf=new m),this._tf.padding=P.inputLabelPadding,this._tf.on("input",this,this._onInput),this._tf.on("enter",this,this._onEnter),this._tf.on("blur",this,this._onBlur),this._tf.on("focus",this,this._onFocus)},t._onFocus=function(){this.event("focus",this)},t._onBlur=function(){this.event("blur",this)},t._onInput=function(){this.event("input",this)},t._onEnter=function(){this.event("enter",this)},t.initialize=function(){this.width=128,this.height=22},t.select=function(){this._tf.select()},t.setSelection=function(t,i){this._tf.setSelection(t,i)},h(0,t,"text",i.prototype._$get_text,function(t){this._tf.text!=t&&(t+="",this._tf.text=t,this.event("change"))}),h(0,t,"bg",function(){return this._bg},function(t){this.graphics=this._bg=t}),h(0,t,"inputElementYAdjuster",function(){return this._tf.inputElementYAdjuster},function(t){this._tf.inputElementYAdjuster=t}),h(0,t,"multiline",function(){return this._tf.multiline},function(t){this._tf.multiline=t}),h(0,t,"skin",function(){return this._skin},function(t){this._skin!=t&&(this._skin=t,this._bg||(this.graphics=this._bg=new Y),this._bg.source=v.getRes(this._skin),this._width&&(this._bg.width=this._width),this._height&&(this._bg.height=this._height))}),h(0,t,"sizeGrid",function(){return this._bg&&this._bg.sizeGrid?this._bg.sizeGrid.join(","):null},function(t){this._bg||(this.graphics=this._bg=new Y),this._bg.sizeGrid=D.fillArray(P.defaultSizeGrid,t,Number)}),h(0,t,"inputElementXAdjuster",function(){return this._tf.inputElementXAdjuster},function(t){this._tf.inputElementXAdjuster=t}),h(0,t,"width",i.prototype._$get_width,function(t){g.superSet(K,this,"width",t),this._bg&&(this._bg.width=t)}),h(0,t,"height",i.prototype._$get_height,function(t){g.superSet(K,this,"height",t),this._bg&&(this._bg.height=t)}),h(0,t,"editable",function(){return this._tf.editable},function(t){this._tf.editable=t}),h(0,t,"restrict",function(){return this._tf.restrict},function(t){this._tf.restrict=t}),h(0,t,"prompt",function(){return this._tf.prompt},function(t){this._tf.prompt=t}),h(0,t,"promptColor",function(){return this._tf.promptColor},function(t){this._tf.promptColor=t}),h(0,t,"maxChars",function(){return this._tf.maxChars},function(t){this._tf.maxChars=t}),h(0,t,"focus",function(){return this._tf.focus},function(t){this._tf.focus=t}),h(0,t,"type",function(){return this._tf.type},function(t){this._tf.type=t}),h(0,t,"asPassword",function(){return this._tf.asPassword},function(t){this._tf.asPassword=t}),e}(K),pt=(n(mt,"laya.ui.VSlider",J),mt);function mt(){mt.__super.call(this)}var vt=function(t){function s(){this.popupCenter=!0,this.closeHandler=null,this.popupEffect=null,this.closeEffect=null,this.group=null,this.isModal=!1,this._dragArea=null,s.__super.call(this)}n(s,"laya.ui.Dialog",t);var i=s.prototype;return i.initialize=function(){this.popupEffect=s.manager.popupEffectHandler,this.closeEffect=s.manager.closeEffectHandler,this._dealDragArea(),this.on("click",this,this._onClick)},i._dealDragArea=function(){var t=this.getChildByName("drag");t&&(this.dragArea=t.x+","+t.y+","+t.width+","+t.height,t.removeSelf())},i._onClick=function(t){var i=t.target;if(i)switch(i.name){case"close":case"cancel":case"sure":case"no":case"ok":case"yes":this.close(i.name)}},i.show=function(t,i){void 0===t&&(t=!1),void 0===i&&(i=!0),this._open(!1,t,i)},i.popup=function(t,i){void 0===t&&(t=!1),void 0===i&&(i=!0),this._open(!0,t,i)},i._open=function(t,i,e){s.manager.lock(!1),this.isModal=t,s.manager.open(this,i,e)},i.onOpened=function(){},i.close=function(t,i){void 0===i&&(i=!0),s.manager.close(this,t,i)},i.onClosed=function(t){},i._onMouseDown=function(t){var i=this.getMousePoint();this._dragArea.contains(i.x,i.y)?this.startDrag():this.stopDrag()},h(0,i,"dragArea",function(){return this._dragArea?this._dragArea.toString():null},function(t){if(t){var i=D.fillArray([0,0,0,0],t,Number);this._dragArea=new b(i[0],i[1],i[2],i[3]),this.on("mousedown",this,this._onMouseDown)}else this._dragArea=null,this.off("mousedown",this,this._onMouseDown)}),h(0,i,"isPopup",function(){return null!=this.parent}),h(0,i,"zOrder",t.prototype._$get_zOrder,function(t){g.superSet(Q,this,"zOrder",t),s.manager._checkMask()}),h(1,s,"manager",function(){return s._manager=s._manager||new R},function(t){s._manager=t}),s.setLockView=function(t){s.manager.setLockView(t)},s.lock=function(t){s.manager.lock(t)},s.closeAll=function(){s.manager.closeAll()},s.getDialogsByGroup=function(t){return s.manager.getDialogsByGroup(t)},s.closeByGroup=function(t){return s.manager.closeByGroup(t)},s.CLOSE="close",s.CANCEL="cancel",s.SURE="sure",s.NO="no",s.OK="ok",s.YES="yes",s._manager=null,s}(Q),yt=function(t){function i(){i.__super.call(this)}n(i,"laya.ui.HBox",t);var e=i.prototype;return e.sortItem=function(t){t&&t.sort(function(t,i){return t.x-i.x})},e.changeItems=function(){this._itemChanged=!1;for(var t=[],i=0,e=0,s=this.numChildren;e<s;e++){var n=this.getChildAt(e);n&&n.layoutEnabled&&(t.push(n),i=this._height?this._height:Math.max(i,n.height*n.scaleY))}this.sortItem(t);var h=0;for(e=0,s=t.length;e<s;e++)(n=t[e]).x=h,h+=n.width*n.scaleX+this._space,"top"==this._align?n.y=0:"middle"==this._align?n.y=.5*(i-n.height*n.scaleY):"bottom"==this._align&&(n.y=i-n.height*n.scaleY);this.changeSize()},h(0,e,"height",t.prototype._$get_height,function(t){this._height!=t&&(g.superSet(it,this,"height",t),this.callLater(this.changeItems))}),i.NONE="none",i.TOP="top",i.MIDDLE="middle",i.BOTTOM="bottom",i}(it),Ct=function(t){var c,o;function u(t){this.gameStopHD=!1,this.iconImgTl=null,this._iconImage=null,this._moreBox=null,this._gameBox=null,this.screenType=0,this._moreGameDataUrl="https://abc.layabox.com/public/more/gamelist2.json",this._iconImageObj=null,this.clickCallBack=null,this.closeCallBack=null,this.isShow=!1,this.dinfo=null,this.ErrorUrlHttps="https://elastic.layabox.com/",this.tongjiType="bdm",void 0===t&&(t=0),u.__super.call(this),this.screenType=t,this.init()}n(u,"laya.ui.MoreGame",Q);var i=u.prototype;return i.getLocalDateString=function(t){void 0===t&&(t=0);var i=this.getDateByTimestamp(t).toLocaleDateString();if(a.onLimixiu||a.onMiniGame){var e=new Date;i=u.toLocaleDateString(e.getTime())}var s=new RegExp("/","g");return i=i.replace(s,"-")},i.getDateByTimestamp=function(t){return void 0===t&&(t=0),t&&""!=t?new Date(t):new Date},i.reportError=function(t,i,e){void 0===i&&(i=""),e=e||{};var s=Date.now(),n=new Date(s+0);e.date=n.toLocaleString(),"error"!=(e.etype=t)&&"statistics"!=t&&(t="statistics"),e.version="V0.0.1",e.gameId=10100,e.dinfo=this.dinfo,e.channel=-1e3,e.msg=i,e["@timestamp"]=n.toISOString(),e.user=this.getUserId(),e.openid=this.getOpenId();var h=u.getDay(n);e.rdate=h,e.day=n.getDate()+"",e.hour=n.getHours()+"",e.minute=n.getMinutes()+"",e.gameurl=r.baseURI,e.regTime=0,"error"==t?this.sendLog(e,this.tongjiType+"error-"+h.substring(0,6)+"/"+t+"/",t):this.sendLog(e,this.tongjiType+"-"+h.substring(0,6)+"/"+t+"/",t)},i.getUserId=function(){var t=parseInt(y.getItem("layauserid")+"")||-1;return-1==t&&(t=this.randRange(0,1e9),y.setItem("layauserid",t+"")),t},i.getOpenId=function(){var t=y.getItem("openid");if(null==t||""==t){t="";for(var i=0;i<32;i++){var e=this.randRange(0,62);t+="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(e)}y.setItem("openid",t)}return t},i.sendLog=function(t,i,e){var s=this,n=new f;n.on("error",this,function(t,i,e){e&&-1!=e.indexOf("[404]")&&(new f).send(s.ErrorUrlHttps+"garbage/"+i+"/",JSON.stringify(t),"post","text",["Content-Type","application/json"])},[t,e]),a.onBDMiniGame&&(t.gameurl=""),n.send(this.ErrorUrlHttps+i,JSON.stringify(t),"post","text",["Content-Type","application/json"])},i.initEvent=function(){this.on("click",this,this.onIconClick)},i.onStageResize=function(){var t=Math.min(g.stage.width/g.stage.designWidth,g.stage.height/g.stage.designHeight);g.stage.width<720&&(t=.9),this._moreBox&&this._moreBox.scale(t,t),this._gameBox&&this._gameBox.scale(t,t)},i.tada=function(t,i,e,s){void 0===e&&(e=1.1),void 0===s&&(s=1);var n=new I;return n.reset(),n.to(t,{scaleX:e,scaleY:e,rotation:3},.1*i).to(t,{scaleX:e,scaleY:e,rotation:-3},.1*i).to(t,{scaleX:e,scaleY:e,rotation:3},.1*i).to(t,{scaleX:e,scaleY:e,rotation:-3},.1*i).to(t,{scaleX:e,scaleY:e,rotation:3},.1*i).to(t,{scaleX:e,scaleY:e,rotation:-3},.1*i).to(t,{scaleX:e,scaleY:e,rotation:3},.1*i).to(t,{scaleX:e,scaleY:e,rotation:-3},.1*i).to(t,{scaleX:e,scaleY:e,rotation:3},.1*i).to(t,{scaleX:s,scaleY:s,rotation:0},.1*i),n.play(0),n},i.dispose=function(){this.removeEvent(),this.gameStopHD=!0,u._moreGameData=null,this._iconImageObj=null,this.clickCallBack=null,this.closeCallBack=null,this.iconImgTl&&(this.iconImgTl.offAll("complete"),this.iconImgTl=null),this._moreBox&&(this._moreBox.removeChildren(),this._moreBox=null),this._gameBox&&(this._gameBox.removeChildren(),this._gameBox=null),this._iconImage&&(this._iconImage.removeSelf(),this._iconImage=null)},i.onSetIconType=function(t){this.gameStopHD=!t,this.visible=t},i.checkIconImgHD=function(){this.iconImgTl?this.iconImgTl.play(0):this.iconImgTl=this.tada(this._iconImage,1200,1.1,.9),this.iconImgTl.on("complete",this,this.onTlComplete)},i.onTlComplete=function(){if(this.parent){if(this._iconImage.scale(.9,.9),this._iconImage.rotation=0,this.gameStopHD&&this.iconImgTl)return this.iconImgTl.offAll("complete"),void(this.iconImgTl=null);g.timer.once(1e3,this,this.onYanChiPlay)}else this.iconImgTl&&(this.iconImgTl.offAll(),this.iconImgTl=null)},i.onYanChiPlay=function(){this.parent&&this.iconImgTl?this.iconImgTl.play(0):this.iconImgTl&&(this.iconImgTl.offAll("complete"),this.iconImgTl=null)},i.removeEvent=function(){this.off("click",this,this.onIconClick)},i.onIconClick=function(){this.isShow=!0,null!=this.clickCallBack&&this.clickCallBack.run();var t=y.getItem("currentTime"),i=this.getLocalDateString();t!=i?(y.setItem("currentTime",i),this.reportError(u._moreGameData.statid1)):this.reportError(u._moreGameData.statid2),this.onResLoaded()},i.onResLoaded=function(){if(this._moreBox)this._moreBox.visible=!0;else{this._moreBox=new W,g.stage.addChild(this._moreBox),this._moreBox.zOrder=99999,this._moreBox.left=this._moreBox.right=this._moreBox.top=this._moreBox.bottom=0;var t=this.onCreateImage(u.onGetAtlasDanImgUrl("img_white_bg"),this._moreBox);t.top=t.left=t.right=t.bottom=0,t.sizeGrid="1,1,1,1,1";var i=this.onCreateImage(u.onGetAtlasDanImgUrl("hengfengexian"),this._moreBox);i.left=i.right=0,i.y=132,i.alpha=.2;var e=this.onCreateImage(u.onGetAtlasDanImgUrl("img_font_jingcai"),this._moreBox);e.on("click",this,this.onJiantouImgClick),this.isQMP()&&this.screenType?e.pos(15,70):e.pos(15,45);var s=new st;this._moreBox.addChild(s),s.itemRender=c,s.selectEnable=!0,s.vScrollBarSkin="",s.scrollBar.autoHide=!0,s.scrollBar.elasticDistance=250,s.renderHandler=new d(this,this.onGameListRender);var n=u._moreGameData.marvellousGame.gameList,h=[];h.push(n[0]),h.push(n[1]);var o=this.RandomNumBoth(h.length,n.length-h.length,n.length);if(!o)return void(this.visible=!1);try{for(var r=0,a=o.length;r<a;r++){var l=o[r];h.push(n[l])}u._moreGameData.marvellousGame.gameList=[],u._moreGameData.marvellousGame.gameList=h,s.array=u._moreGameData.marvellousGame.gameList}catch(t){s.array=u._moreGameData.marvellousGame.gameList}this.screenType&&(s.spaceY=10,s.width=690,this.isQMP()?s.height=g.stage.height+130:s.height=1139,s.y=139,s.centerX=0),this.onStageResize()}},i.RandomNumBoth=function(t,i,e){for(var s=[],n=t;n<e;n++)s.push(n);var h=[],o=s.length;for(n=0;n<o;n++){s.length;var r=Math.floor(Math.random()*s.length);if(h.push(s[r]),s.splice(r,1),s.length<=o-i)return h}return null},i.isQMP=function(){var t=!1,i=0;if(i="horizontal"==g.stage.screenMode?a.height%9:a.width%9,a.onAndroid&&0==i){var e=0;e="horizontal"==g.stage.screenMode?a.width:a.height,-1!=[2280,2160,2244,3120,2248,2340,2310].indexOf(e)&&(t=!0)}var s=/iPhone/gi.test(a.window.navigator.userAgent)&&375==Math.min(a.clientHeight,a.clientWidth)&&812==Math.max(a.clientHeight,a.clientWidth),n=414==Math.min(a.clientHeight,a.clientWidth)&&896==Math.max(a.clientHeight,a.clientWidth);return!a.onMiniGame&&!a.onBDMiniGame||a.onAndroid||!s&&!n||(t=!0),t},i.onDrawShapes=function(t,i,e,s){void 0===e&&(e=5),void 0===s&&(s=!1);var n=e;s&&(n=0);var h=new x;return h.graphics.drawPath(0,0,[["moveTo",e,0],["lineTo",105,0],["arcTo",t,0,t,e,e],["lineTo",t,i],["arcTo",t,i+e,105,i+e,n],["lineTo",e,i+e],["arcTo",0,i+e,0,i,n],["lineTo",0,e],["arcTo",0,0,e,0,e],["closePath"]],{fillStyle:"#ff0000"}),h},i.onCreateMaskImg=function(t,i){var e=this.onCreateImage(u.onGetAtlasDanImgUrl("dayuan"),i),s=this.onCreateImage(t,e);s.pos(11,10);var n=new x;return n.graphics.drawCircle(71,74,68,"#ff0000"),s.mask=n,e.scale(.7,.7),e},i.onGameListRender=function(t,i){var e=u._moreGameData.marvellousGame.gameList;if(!(i<0||i>e.length-1)){var s=e[i];t.init(s,this.screenType,new d(this,this.onItemClickCallBack))}},i.onItemClickCallBack=function(i){var e=this;if(swan.navigateToMiniProgram){var t=i.appKey,s=i.path,n=i.extendInfo;swan.navigateToMiniProgram({appKey:t,path:s,extraData:n,success:function(t){},fail:function(t){},complete:function(t){e.reportError(i.statid)}.bind(this)})}},i.onJiantouImgClick=function(t){this.isShow=!1,this._moreBox&&(this._moreBox.visible=!1),null!=this.closeCallBack&&this.closeCallBack.run()},i.onCreateLabel=function(t,i,e,s,n,h,o){void 0===e&&(e=24),void 0===s&&(s="#000000"),void 0===n&&(n=!1),void 0===h&&(h="center"),void 0===o&&(o=10);var r=new K;return r.text=t,r.font="Microsoft YaHei",r.fontSize=e,r.color=s,r.bold=!0,r.leading=o,r.valign="middle",r.align=h,r.wordWrap=n,i.addChild(r),r},i.onCreateImage=function(t,i){var e=new V;return e.skin=t,i.addChild(e),e},i.init=function(){var t=-1<a.window.navigator.userAgent.indexOf("SwanGame");this.visible=!1,t&&(this.dinfo=JSON.stringify(laya.bd.mini.BMiniAdapter.systemInfo),this.onGetAdvsListData())},i.randRange=function(t,i){return Math.floor(Math.random()*(i-t+1))+t},i.onGetAdvsListData=function(){var i=this,t=this.randRange(1e4,1e6),e=this._moreGameDataUrl+"?"+t;u._http.open("get",e,!0),u._http.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),u._http.responseType="text",u._http.onerror=function(t){i._onError(t)},u._http.onload=function(t){i._onLoad(t)},u._http.send(null)},i._onError=function(t){this.error("Request failed Status:"+u._http.status+" text:"+u._http.statusText)},i._onLoad=function(t){var i=u._http,e=void 0!==i.status?i.status:200;200===e||204===e||0===e?this.complete():this.error("["+i.status+"]"+i.statusText+":"+i.responseURL)},i.error=function(t){this.event("error",t)},i.complete=function(){try{var t=u._http.response||u._http.responseText;u._moreGameData=JSON.parse(t),this.initUI()}catch(t){!1,this.error(t.message)}},i.initUI=function(){u._moreGameData.isOpen&&this.screenType?(this._iconImage||(this._iconImage=new V,this.addChild(this._iconImage)),this._iconImage.skin=u.onGetImgSkinUrl(u._moreGameData.icon),this._iconImageObj&&(this._iconImage.size(this._iconImageObj.width,this._iconImageObj.height),this._iconImage.pivot(this._iconImageObj.width/2,this._iconImageObj.height/2),this._iconImage.pos(this._iconImageObj.width/2,this._iconImageObj.height/2)),this.visible=!0,this.initEvent(),this.gameStopHD=!1,this.checkIconImgHD()):this.visible=!1},i.setIconSize=function(t,i){this._iconImage&&(this._iconImage.size(t,i),this._iconImage.pivot(t/2,i/2),this._iconImage.pos(t/2,i/2)),this._iconImageObj={width:t,height:i}},u.toLocaleDateString=function(t){return u.getDateFormatStr(t,"/")},u.getDateFormatStr=function(t,i){void 0===i&&(i="yynndd");var e=new Date(t),s=e.getFullYear(),n=e.getMonth()+1,h=e.getDate(),o=e.getHours(),r=e.getMinutes(),a=e.getSeconds();switch(i){case"yynndd":return s.toString()+"年"+n.toString()+"月"+h.toString()+"日";case"/":return s.toString()+"/"+n.toString()+"/"+h.toString()}return s.toString()+"年"+n.toString()+"月"+h.toString()+"日"+o.toString()+"时"+r.toString()+"分"+a.toString()+"秒"},u.getDay=function(t){var i=t.getMonth()+1,e=t.getDate();return t.getFullYear()+""+(i<10?"0"+i:i)+(e<10?"0"+e:e)},u.onGetAtlasDanImgUrl=function(t){return u._moreGameData.imgPath+u._moreGameData.atlas+t+".png"},u.onGetImgSkinUrl=function(t){return u._moreGameData.imgPath+t},u.onGetIconImgSkinUrl=function(t){return u._moreGameData.iconPath+t},u._moreGameData=null,s(u,["_http",function(){return this._http=new a.window.XMLHttpRequest}]),u.__init$=function(){c=function(t){function i(){this.titleLabel=null,this.gameListBox=null,i.__super.call(this)}n(i,"",W);var e=i.prototype;return e.init=function(t,i,e){if(this.titleLabel?this.titleLabel.text=t.title:(this.titleLabel=this.onCreateLabel(t.title,this,32,"#3d3939"),this.titleLabel.pos(8,0),this.titleLabel.size(162,50)),this.gameListBox)for(s=0,n=this.gameListBox._childs.length;s<n;s++)(h=this.gameListBox._childs[s]).init(t.gameList[s],i,e);else{this.gameListBox=new W,this.addChild(this.gameListBox);for(var s=0,n=t.gameList.length;s<n;s++){var h=new o;h.init(t.gameList[s],i,e),h.x=0+175*s,h.y=65,this.gameListBox.addChild(h)}}this.size(695,340),this.cacheAs="bitmap"},e.onCreateLabel=function(t,i,e,s,n){void 0===e&&(e=26),void 0===s&&(s="#000000"),void 0===n&&(n=!0);var h=new K;return h.text=t,h.font="Microsoft YaHei",h.fontSize=e,h.color=s,h.bold=n,h.leading=10,h.valign="middle",h.align="center",h.overflow="hidden",i.addChild(h),h},i}(),o=function(t){function i(){this.kuangImg=null,this.iconNameLabel=null,this.iconImg=null,this.playImg=null,this.itemData=null,this.callBackHandler=null,i.__super.call(this)}n(i,"",W);var e=i.prototype;return e.MoveGameItem=function(){},e.initEvent=function(){this.on("click",this,this.onItemClick)},e.onItemClick=function(){null!=this.callBackHandler&&this.callBackHandler.runWith([this.itemData])},e.init=function(t,i,e){if(this.itemData=t,this.callBackHandler=e,this.kuangImg?this.kuangImg.skin=u.onGetAtlasDanImgUrl("dayuan"):this.kuangImg=this.onCreateImage(u.onGetAtlasDanImgUrl("dayuan"),this),this.iconImg)this.iconImg.skin=u.onGetIconImgSkinUrl(t.icon);else{this.iconImg=this.onCreateImage(u.onGetIconImgSkinUrl(t.icon),this);var s=new x;s.graphics.drawCircle(71,74,68,"#ff0000"),this.iconImg.mask=s,this.iconImg.pos(13,10)}this.iconNameLabel?this.iconNameLabel.text=t.name:(this.iconNameLabel=this.onCreateLabel(t.name,this,28,"#3d3939"),this.iconNameLabel.pos(7,165)),this.playImg?this.playImg.skin=u.onGetAtlasDanImgUrl("img_play"):(this.playImg=this.onCreateImage(u.onGetAtlasDanImgUrl("img_play"),this),this.playImg.pos(12,210)),this.size(165,270),this.initEvent()},e.onCreateLabel=function(t,i,e,s,n){void 0===e&&(e=24),void 0===s&&(s="#000000"),void 0===n&&(n=!1);var h=new K;return h.text=t,h.font="Microsoft YaHei",h.fontSize=e,h.color=s,h.bold=n,h.leading=10,h.valign="middle",h.align="center",h.size(152,44),h.overflow="hidden",i.addChild(h),h},e.onCreateImage=function(t,i){var e=new V;return e.skin=t,i.addChild(e),e},i}()},u}(),bt=function(t){function i(){i.__super.call(this)}n(i,"laya.ui.VBox",t);var e=i.prototype;return e.changeItems=function(){this._itemChanged=!1;for(var t=[],i=0,e=0,s=this.numChildren;e<s;e++){var n=this.getChildAt(e);n&&n.layoutEnabled&&(t.push(n),i=this._width?this._width:Math.max(i,n.width*n.scaleX))}this.sortItem(t);var h=0;for(e=0,s=t.length;e<s;e++)(n=t[e]).y=h,h+=n.height*n.scaleY+this._space,"left"==this._align?n.x=0:"center"==this._align?n.x=.5*(i-n.width*n.scaleX):"right"==this._align&&(n.x=i-n.width*n.scaleX);this.changeSize()},h(0,e,"width",t.prototype._$get_width,function(t){this._width!=t&&(g.superSet(it,this,"width",t),this.callLater(this.changeItems))}),i.NONE="none",i.LEFT="left",i.CENTER="center",i.RIGHT="right",i}(it),St=(n(xt,"laya.ui.RadioGroup",lt),xt.prototype.createItem=function(t,i){return new ct(t,i)},xt);function xt(){xt.__super.call(this)}var wt=(n(Bt,"laya.ui.Tab",lt),Bt.prototype.createItem=function(t,i){return new $(t,i)},Bt);function Bt(){Bt.__super.call(this)}var It=function(i){function e(t){this._vScrollBar=null,this._hScrollBar=null,void 0===t&&(t=""),e.__super.call(this,t)}n(e,"laya.ui.TextArea",i);var t=e.prototype;return t.destroy=function(t){void 0===t&&(t=!0),i.prototype.destroy.call(this,t),this._vScrollBar&&this._vScrollBar.destroy(),this._hScrollBar&&this._hScrollBar.destroy(),this._vScrollBar=null,this._hScrollBar=null},t.initialize=function(){this.width=180,this.height=150,this._tf.wordWrap=!0,this.multiline=!0},t.onVBarChanged=function(t){this._tf.scrollY!=this._vScrollBar.value&&(this._tf.scrollY=this._vScrollBar.value)},t.onHBarChanged=function(t){this._tf.scrollX!=this._hScrollBar.value&&(this._tf.scrollX=this._hScrollBar.value)},t.changeScroll=function(){var t=this._vScrollBar&&0<this._tf.maxScrollY,i=this._hScrollBar&&0<this._tf.maxScrollX,e=t?this._width-this._vScrollBar.width:this._width,s=i?this._height-this._hScrollBar.height:this._height,n=this._tf.padding||P.labelPadding;this._tf.width=e,this._tf.height=s,this._vScrollBar&&(this._vScrollBar.x=this._width-this._vScrollBar.width-n[2],this._vScrollBar.y=n[1],this._vScrollBar.height=this._height-(i?this._hScrollBar.height:0)-n[1]-n[3],this._vScrollBar.scrollSize=1,this._vScrollBar.thumbPercent=s/Math.max(this._tf.textHeight,s),this._vScrollBar.setScroll(1,this._tf.maxScrollY,this._tf.scrollY),this._vScrollBar.visible=t),this._hScrollBar&&(this._hScrollBar.x=n[0],this._hScrollBar.y=this._height-this._hScrollBar.height-n[3],this._hScrollBar.width=this._width-(t?this._vScrollBar.width:0)-n[0]-n[2],this._hScrollBar.scrollSize=Math.max(.033*e,1),this._hScrollBar.thumbPercent=e/Math.max(this._tf.textWidth,e),this._hScrollBar.setScroll(0,this.maxScrollX,this.scrollX),this._hScrollBar.visible=i)},t.scrollTo=function(t){this.commitMeasure(),this._tf.scrollY=t},h(0,t,"scrollY",function(){return this._tf.scrollY}),h(0,t,"width",i.prototype._$get_width,function(t){g.superSet(gt,this,"width",t),this.callLater(this.changeScroll)}),h(0,t,"hScrollBar",function(){return this._hScrollBar}),h(0,t,"height",i.prototype._$get_height,function(t){g.superSet(gt,this,"height",t),this.callLater(this.changeScroll)}),h(0,t,"maxScrollX",function(){return this._tf.maxScrollX}),h(0,t,"vScrollBarSkin",function(){return this._vScrollBar?this._vScrollBar.skin:null},function(t){null==this._vScrollBar&&(this.addChild(this._vScrollBar=new dt),this._vScrollBar.on("change",this,this.onVBarChanged),this._vScrollBar.target=this._tf,this.callLater(this.changeScroll)),this._vScrollBar.skin=t}),h(0,t,"hScrollBarSkin",function(){return this._hScrollBar?this._hScrollBar.skin:null},function(t){null==this._hScrollBar&&(this.addChild(this._hScrollBar=new nt),this._hScrollBar.on("change",this,this.onHBarChanged),this._hScrollBar.mouseWheelEnable=!1,this._hScrollBar.target=this._tf,this.callLater(this.changeScroll)),this._hScrollBar.skin=t}),h(0,t,"vScrollBar",function(){return this._vScrollBar}),h(0,t,"maxScrollY",function(){return this._tf.maxScrollY}),h(0,t,"scrollX",function(){return this._tf.scrollX}),e}(gt);!function(t){function i(){this._uiView=null,this.isCloseOther=!1,i.__super.call(this)}n(i,"laya.ui.AsynDialog",vt);var e=i.prototype;e.createView=function(t){this._uiView=t},e._open=function(t,i,e){this.isModal=t,this.isCloseOther=i,vt.manager.lock(!0),this._uiView?this.onCreated():this.onOpen()},e.onCreated=function(){this.createUI(),this.onOpen()},e.createUI=function(){laya.ui.View.prototype.createView.call(this,this._uiView),this._uiView=null,this._dealDragArea()},e.onOpen=function(){vt.manager.open(this,this.isCloseOther),vt.manager.lock(!1)},e.close=function(t,i){void 0===i&&(i=!0),vt.manager.close(this),this.onClose()},e.onClose=function(){},e.destroy=function(t){void 0===t&&(t=!0),laya.ui.View.prototype.destroy.call(this,t),this._uiView=null,this.onDestroy()},e.onDestroy=function(){}}();g.__init([Q,Ct])}(window,document,Laya),"function"==typeof define&&define.amd&&define("laya.core",["require","exports"],function(t,i){"use strict";for(var e in Object.defineProperty(i,"__esModule",{value:!0}),Laya){var s=Laya[e];s&&s.__isclass&&(i[e]=s)}});
/**
 * 使用金币
 * @param coinNum
 * @return <0表示金币不足，其他返回金币扣除后剩余值
 */
function useCoin(coinNum) {
    var coin = wx.getStorageSync(COIN);
    if (coin !== undefined && !isNaN(coin)) {
        var leftCoin = coin - coinNum;
        if (leftCoin >= 0) {
            //扣除成功，存入本地
            wx.setStorageSync(COIN, leftCoin);
        }
        return leftCoin;
    }
    return -1;
}
/**
 * 添加金币
 */
function addCoin(coinNum) {
    var coin = wx.getStorageSync(COIN);
    var leftCoin = coinNum;
    if (coin !== undefined && !isNaN(coin)) {
        leftCoin = coin + coinNum;
        //扣除成功，存入本地
        wx.setStorageSync(COIN, leftCoin);
        return leftCoin;
    }
    return coinNum;
}
/**添加经验值 */
function addExperience(experience) {
    var localExperience = wx.getStorageSync(EXPERIENCE);
    var totalExp = experience;
    if (localExperience !== undefined && !isNaN(localExperience)) {
        totalExp = localExperience + experience;
        //扣除成功，存入本地
        wx.setStorageSync(EXPERIENCE, totalExp);
        return totalExp;
    }
    return experience;
}
/**
 * 本地同步
 */
function saveUserToLoacl() {
    wx.setStorage({
        key: USERDATA,
        data: Index.getApp().userData
    });
}
function getTodayData() {
    var today = todayData.date;
    var todayCache = wx.getStorageSync(TODAYDATA);
    if (!todayCache || todayCache == '' || todayCache.date != today) {
        //没有缓存
        setTodayData();
        return todayData;
    }
    else {
        //有缓存，且是今天的
        todayData = todayCache;
        return todayCache;
    }
}
function setTodayData() {
    var today = todayData.date;
    var todayCache = wx.getStorageSync(TODAYDATA);
    //没有缓存
    wx.setStorage({
        key: TODAYDATA,
        data: todayData
    });
}
function syncUser() {
    //把本地金币同步到云端
    // var coin = wx.getStorageSync(COIN);
    var user = AV.User.current();
    // var exp = wx.getStorageSync(EXPERIENCE);
    // var props = wx.getStorageSync(PROP);
    if (!user)
        return;
    var isNeedSync = false;
    user.set('version', VERSION);
    /*if (coin != '' && !isNaN(coin)) {
        if (coin !== user.get(COIN)) {
            isNeedSync = true;
        }
    }
    if (exp != '' && !isNaN(exp)) {
        if (exp !== user.get(EXPERIENCE)) {
            isNeedSync = true;
        }
    }*/
    /*  if (props != '') {
          var cloudProp = user.get(PROP);
          if (!cloudProp || cloudProp.length != props.length) {
              isNeedSync = true;
          } else {
              let len = props.length;
              for (let i = 0; i < len; i++) {
                  if (isNeedSync) {
                      break;
                  }
                  for (let j = 0; j < len; j++) {
                      if (cloudProp[i].type == props[j].type && cloudProp[i].num != props[j].num) {
                          isNeedSync = true;
                          break;
  
                      }
                  }
              }
          }
          user.set(PROP, props);
      }*/
    //分享次数
    var cacheShareStr = wx.getStorageSync(SHARECOUNT);
    if (cacheShareStr !== '' && !isNaN(cacheShareStr)) {
        shareCount = parseInt(cacheShareStr);
        //本地有金币
        //如果云端也有，取大的
        var cloudShareCount = user.get(SHARECOUNT);
        if (shareCount != cloudShareCount) {
            //本地要大于云端，同时没有提现，同步到云端
            user.set(SHARECOUNT, shareCount);
            isNeedSync = true;
        }
    }
    //成功打开视频次数
    var cacheOpenVideoCount = wx.getStorageSync(OPENVIDEOCOUNT);
    if (cacheOpenVideoCount !== '' && !isNaN(cacheOpenVideoCount)) {
        openVideoCount = parseInt(cacheOpenVideoCount);
        //本地有金币
        //如果云端也有，取大的
        var cloudOpenVideoCount = user.get(OPENVIDEOCOUNT);
        if (openVideoCount != cloudOpenVideoCount) {
            //本地要大于云端，同时没有提现，同步到云端
            user.set(OPENVIDEOCOUNT, openVideoCount);
            isNeedSync = true;
        }
    }
    //成功看完视频次数
    var cacheFinishVideoCount = wx.getStorageSync(FINISHVIDEOCOUNT);
    if (cacheFinishVideoCount !== '' && !isNaN(cacheFinishVideoCount)) {
        finishVideoCount = parseInt(cacheFinishVideoCount);
        //本地有金币
        //如果云端也有，取大的
        var cloudFinishVideo = user.get(FINISHVIDEOCOUNT);
        if (finishVideoCount != cloudFinishVideo) {
            //本地要大于云端，同时没有提现，同步到云端
            user.set(FINISHVIDEOCOUNT, finishVideoCount);
            isNeedSync = true;
        }
    }
    var cloudTodayData = user.get(TODAYDATA);
    if (!cloudTodayData || cloudTodayData.date != todayData.date || cloudTodayData.video != todayData.video || cloudTodayData.ifGift != todayData.ifGift) {
        isNeedSync = true;
    }
    if (!isNeedSync)
        return;
    //同步
    user.set(TODAYDATA, todayData);
    user.set(USERDATA, Index.getApp().userData);
    wx.setStorageSync(USERDATA, Index.getApp().userData);
    // user.set(COIN, coin);
    // user.set(EXPERIENCE, exp);
    user.save();
}
//# sourceMappingURL=SyncUtils.js.map
var BGLOCALMUSICPATH = 'sound/back2.mp3';
var BOXOVER = 'sound/prop_get.mp3';
var bgMusicPath = null;
var bgMusicChannal = null;
var isNeedPlayBgm = false;
/**音效播放 ,可统一管理*/
function playSound(soundUrl) {
    if (isMute)
        return;
    Laya.SoundManager.playSound(soundUrl);
}
var playIndex = 0;
/**播放背景音乐 */
function playBgMusic(isPlay) {
    isNeedPlayBgm = isPlay;
    // if (!isPlay && !bgMusicChannal) return;
    if (bgMusicChannal) {
        if (isPlay) {
            //暂停
            if (!isMuteBgm) {
                bgMusicChannal.resume();
            }
            else {
                bgMusicChannal.pause();
            }
        }
        else {
            bgMusicChannal.pause();
        }
        return;
    }
    if (isPlay && !isMuteBgm) {
        Laya.SoundManager.setMusicVolume(0.3);
        playIndex = Math.floor(Math.random() * bgms.length);
        //下载背景音乐
        Log.d("playBgMusic   bgms:" + bgms[playIndex].url);
        var playPath = hasDownLoad(bgms[playIndex].url);
        if (playPath) {
            bgMusicChannal = Laya.SoundManager.playMusic(playPath, 1, Laya.Handler.create(Index.getApp(), function () {
                Log.d("bgm play complete~~~~~~~");
                bgMusicChannal = null;
                if (!isMuteBgm && isNeedPlayBgm) {
                    playBgMusic(true);
                }
            }));
        }
        else {
            //这个文件还没下载完成
            bgMusicChannal = Laya.SoundManager.playMusic(BGLOCALMUSICPATH, 1, Laya.Handler.create(Index.getApp(), function () {
                Log.d("bgm play complete~~~~~~~");
                bgMusicChannal = null;
                if (!isMuteBgm && isNeedPlayBgm) {
                    playBgMusic(true);
                }
            }));
        }
    }
}
//点击音效
function clickSound() {
}
//# sourceMappingURL=SoundUtils.js.map
/**
 * 队列的实现
 */
var Queue = /** @class */ (function () {
    /**设置queue的大小 */
    function Queue(size) {
        this.list = null;
        this.list = new Array();
        this.len = size;
    }
    //向队列中添加数据
    Queue.prototype.push = function (data) {
        if (data == null) {
            return false;
        }
        //如果传递了size参数就设置了队列的大小
        if (this.len != null && !isNaN(this.len)) {
            if (this.list.length == this.len) {
                this.pop();
            }
        }
        this.list.unshift(data);
        return true;
    };
    //从队列中取出数据
    Queue.prototype.pop = function () {
        return this.list.pop();
    };
    //返回队列的大小
    Queue.prototype.size = function () {
        return this.list.length;
    };
    //返回队列的内容
    Queue.prototype.quere = function () {
        return this.list;
    };
    Queue.prototype.clear = function () {
        this.list.splice(0, this.list.length);
    };
    return Queue;
}());
//# sourceMappingURL=Queue.js.map
/**
 * 绘制开放域数据
 * @param {*} layout    用来显示开放域数据的Sprite
 */
function drawOpenData(layout, isNeedFlase) {
    clearDrawOpenData(layout);
    var sp = new Laya.Sprite();
    sp.width = layout.width;
    sp.height = layout.height;
    var openDataContext = wx.getOpenDataContext();
    var sharedCanvas = openDataContext.canvas;
    sharedCanvas.width = layout.width;
    sharedCanvas.height = layout.height;
    //先清空绘制
    // layout.graphics.clear(false);
    //设置大小
    var canvas = new Laya.Texture(sharedCanvas);
    canvas.bitmap.alwaysChange = true; //小游戏使用，非常费，每帧刷新
    sp.graphics.drawTexture(canvas);
    /* if (!isNeedFlase) {
         Laya.timer.once(1000, layout, function () {
             canvas.bitmap.alwaysChange = false;//小游戏使用，非常费，每帧刷新
         });
     }*/
    layout.addChild(sp);
}
/**
 * 即将超越
 * 绘制开放域数据
 * @param {*} layout    用来显示开放域数据的Sprite
 */
function drawOpenDataNoFlash(layout) {
    if (!layout)
        return;
    //先清除当前对象上的定时器
    Laya.timer.clearAll(layout);
    var openDataContext = wx.getOpenDataContext();
    var sharedCanvas = openDataContext.canvas;
    sharedCanvas.width = layout.width;
    sharedCanvas.height = layout.height;
    layout.graphics.clear(false);
    //延迟500ms进行绘制
    Laya.timer.once(500, layout, function () {
        //先清空绘制
        //设置大小
        var canvas = new Laya.Texture(sharedCanvas);
        // canvas.bitmap.alwaysChange = false;//小游戏使用，非常费，每帧刷新
        layout.graphics.drawTexture(canvas);
    });
}
/**
 * 清除开放域数据
 */
function clearDrawOpenData(layout) {
    if (layout) {
        layout.destroyChildren();
    }
}
function changePage(page) {
    var openDataContext = wx.getOpenDataContext();
    openDataContext.postMessage({
        messageType: -2,
        page: page
    });
}
/**
 * 清空数据
 */
function clearOpenData() {
    var openDataContext = wx.getOpenDataContext();
    openDataContext.postMessage({
        messageType: -1,
    });
}
var SHARED_KEY = 'sharedContent';
// 从服务器拿到分享内容
function syncSharedContent(shareContent) {
    if (!shareContent) {
        return;
    }
    else {
        Log.d(shareContent);
        wx.setStorage({ key: SHARED_KEY, data: shareContent });
        //下载相关图片
        var len = shareContent.length;
        //得到所有需要下载的图片地址
        var downPic = [];
        if (len > 0) {
            for (var i = 0; i < len; i++) {
                var tmpObj = shareContent[i];
                if (tmpObj.imgs && tmpObj.imgs.length > 0) {
                    //解析相关图片
                    for (var j = 0; j < tmpObj.imgs.length; j++) {
                        if (tmpObj.imgs[j].url) {
                            downPic.push(tmpObj.imgs[j].url);
                        }
                        //自定义分享图，添加背景
                        if (tmpObj.imgs[j].e && tmpObj.imgs[j].e.bg) {
                            downPic.push(tmpObj.imgs[j].e.bg);
                        }
                    }
                }
            }
        }
        Log.d(downPic);
        //一张一张的下载，防止带宽不足
        downLoadFileSync(downPic);
    }
}
/**
 * 一个一个的下载，直到全部下载完成
 * @param files
 */
function downLoadFileSync(files) {
    var tmp = files.pop();
    if (tmp) {
        downLoadFile(tmp, function () {
            Log.d('下载完一张：' + tmp);
            Log.d('接着下载下一张');
            downLoadFileSync(files);
        });
    }
}
/**图片预加载  */
function preload(arr) {
    Laya.loader.load(arr, Laya.Handler.create(this, function () {
        Log.d('图片加载完成 ');
    }), null, Laya.Loader.IMAGE);
}
//根据query，得到对应内容
function getShared(query) {
    var state = 0;
    state = getState(query);
    Log.d('得到state=' + state);
    var sharedContent = wx.getStorageSync(SHARED_KEY);
    if (typeof sharedContent == 'undefined') {
        return null;
    }
    var len = sharedContent.length;
    for (var i = 0; i < len; i++) {
        if (sharedContent[i].sharedType == state) {
            return sharedContent[i];
        }
    }
}
function getState(query) {
    if (query) {
        var result = /state=(\d+)/.exec(query);
        if (result && result.length > 1) {
            return parseInt(result[1]);
        }
    }
    return 0;
}
/**
 * 截屏分享
 * @param content
 * @param query
 * @param msg
 */
function shareToFriendPrintLayout(content, query, msg) {
    Index.getApp().shareCancel = false;
    var state = getState(query);
    var newQuery = query ? query : ('uid=' + Index.getApp().userId + '&state=0');
    shareCount++;
    wx.setStorage({ key: SHARECOUNT, data: shareCount });
    //================================
    var shared = getShared(query);
    var imgPath = LOCAL_SHARE;
    var title = "这游戏告诉我们:犯下的错误会积累 获得的成功就会消失!";
    if (shared) {
        if (shared.imgs) {
            //新版本
            //1.产生一个随机数
            var rand = Math.random();
            // Log.d('生成随机数：' + rand);
            var data = null;
            var len = shared.imgs.length;
            for (var i = 0; i < len; i++) {
                var tmp = shared.imgs[i];
                if (rand >= tmp.min && rand < tmp.max) {
                    if (data && data.max < tmp.max) {
                        //有重叠
                        data = tmp;
                    }
                    else {
                        data = tmp;
                    }
                }
            }
            if (!data) {
                data = shared.imgs[0];
            }
            title = data.title;
        }
    }
    if (msg) {
        title = msg;
    }
    if (!ifShowBonus) {
        title = "见过这种游戏机都是有故事的人了^_T";
    }
    Index.getApp().getShareTime = new Date().getTime();
    var htmlC = content.drawToCanvas(content.width, content.height, 0, 0);
    Laya.timer.once(300, Index.getApp(), function () {
        var canvas = htmlC.getCanvas();
        canvas.toTempFilePath({
            x: 0,
            y: 0,
            width: 500,
            height: 400,
            destWidth: 500,
            destHeight: 400,
            success: function (res) {
                Log.d('截图成功：');
                Log.d(res);
                if (ifAldShare) {
                    wx.aldShareAppMessage({
                        query: newQuery,
                        imageUrl: res.tempFilePath,
                        title: title,
                        fail: function () {
                            //取消了分享
                            Index.getApp().shareCancel = true;
                        }
                    });
                }
                else {
                    wx.shareAppMessage({
                        query: newQuery,
                        imageUrl: res.tempFilePath,
                        title: title,
                        fail: function () {
                            //取消了分享
                            Index.getApp().shareCancel = true;
                        }
                    });
                }
            },
            complete: function () {
                Log.d('保存完成,销毁图片');
            }
        });
    });
    //关闭shareTicket分享
    setTimeout(function () {
        Log.d('update updateShareMenu withShareTicket');
        wx.updateShareMenu({
            withShareTicket: false
        });
    }, 2000);
}
//分享
function shareToFriend(msg, query) {
    Index.getApp().shareCancel = false;
    var state = getState(query);
    switch (state) {
        case ShareType.GROUP:
            {
                Index.getApp().isShareGroup = true;
            }
            break;
    }
    shareCount++;
    wx.setStorage({ key: SHARECOUNT, data: shareCount });
    //================================
    var shared = getShared(query);
    var imgPath = LOCAL_SHARE;
    var title = "我已经拿到钥匙了，你能打开门吗？";
    var imgId = 'none';
    var link = 'imgId=';
    var img = new Laya.Image();
    img.width = 500;
    img.height = 400;
    var sprite = new Laya.Sprite();
    sprite.width = 500;
    sprite.height = 400;
    sprite.visible = true;
    //调整到底层
    sprite.zOrder = -1;
    sprite.addChild(img);
    var spriteMask = new Laya.Sprite();
    spriteMask.width = 500;
    spriteMask.height = 400;
    spriteMask.graphics.drawRect(0, 0, sprite.width, sprite.height, BGCOLOR);
    spriteMask.visible = true;
    sprite.addChild(spriteMask);
    Laya.stage.addChild(sprite);
    var isDelay = false;
    if (shared) {
        //兼容旧版本
        if (shared.imgs) {
            //新版本
            //1.产生一个随机数
            var rand = Math.random();
            // Log.d('生成随机数：' + rand);
            var data = null;
            var len = shared.imgs.length;
            for (var i = 0; i < len; i++) {
                var tmp = shared.imgs[i];
                if (rand >= tmp.min && rand < tmp.max) {
                    if (data && data.max < tmp.max) {
                        //有重叠
                        data = tmp;
                    }
                    else {
                        data = tmp;
                    }
                }
            }
            if (!data) {
                data = shared.imgs[0];
            }
            if (data.e) {
                //自定义元素
                imgPath = data.e.bg;
                drawImg(img, data.e);
                isDelay = true;
            }
            else {
                imgPath = data.url;
            }
            title = data.title;
            imgId = data.id;
            link = data.link ? data.link : imgId = ' + imgId';
            Log.d(data);
        }
        else if (shared.sharedImg) {
            //旧版本
            imgPath = shared.sharedImg[0];
            title = shared.sharedTitle[0];
            link = 'imgId=' + imgId;
        }
    }
    //节省带宽，使用本地
    if (!ifShowBonus) {
        imgPath = LOCAL_SHARE;
    }
    //如果是自定义消息，就显示自定义的
    if (msg) {
        title = msg;
    }
    if (!ifShowBonus) {
        title = "我已经拿到钥匙了，你能打开门吗？";
    }
    //替换标题中的文字
    var nickName = wx.getStorageSync(NICKNAME);
    title = title.replace(/{name}/g, nickName);
    Log.d(title);
    //创建一个image
    //下载图片
    if (isDelay) {
        Laya.timer.once(200, Index.getApp(), downLoadFile, [imgPath, function (path) {
                // img.skin = path;
                var newQuery = query ? query : ('uid=' + Index.getApp().userId + '&state=0');
                // newQuery = 'imgId=' + imgId + '&' + newQuery;
                newQuery = link + '&' + newQuery;
                img.loadImage(path, 0, 0, 500, 400, Laya.Handler.create(Index.getApp(), shareImg, [img, imgId, newQuery, title]));
            }]);
    }
    else {
        downLoadFile(imgPath, function (path) {
            // img.skin = path;
            var newQuery = query ? query : ('uid=' + Index.getApp().userId + '&state=0');
            // newQuery = 'imgId=' + imgId + '&' + newQuery;
            newQuery = link + '&' + newQuery;
            Index.getApp().getShareTime = new Date().getTime();
            if (ifAldShare) {
                wx.aldShareAppMessage({
                    query: newQuery,
                    imageUrl: path,
                    title: title,
                    fail: function () {
                        //取消了分享
                        Index.getApp().shareCancel = true;
                    }
                });
            }
            else {
                wx.shareAppMessage({
                    query: newQuery,
                    imageUrl: path,
                    title: title,
                    fail: function () {
                        //取消了分享
                        Index.getApp().shareCancel = true;
                    }
                });
            }
            //关闭shareTicket分享
            setTimeout(function () {
                Log.d('update updateShareMenu withShareTicket');
                wx.updateShareMenu({
                    withShareTicket: false
                });
            }, 1500);
        });
    }
}
function drawImg(view, obj) {
    //绘制自定义图片
    var nickName = wx.getStorageSync(NICKNAME);
    //1.绘制头像
    if (obj.headpos) {
        var path = wx.getStorageSync(AVATARURL);
        var img = new Laya.Image();
        downLoadFile(path, function (path) {
            img.skin = path;
        });
        if (obj.headpos.size) {
            img.width = obj.headpos.size;
            img.height = obj.headpos.size;
        }
        img.x = isNaN(obj.headpos.x) ? 0 : obj.headpos.x;
        img.y = isNaN(obj.headpos.y) ? 0 : obj.headpos.y;
        var maskImg = new Laya.Image();
        maskImg.width = img.width;
        maskImg.height = img.height;
        maskImg.skin = 'comp/mask.png';
        img.mask = maskImg;
        view.addChild(img);
    }
    //2,绘制昵称
    if (obj.namepos) {
        var name = new Laya.Text();
        name.text = nickName;
        name.fontSize = obj.namepos.fontSize ? obj.namepos.fontSize : 18;
        //字体颜色，默认为黑色
        name.color = obj.namepos.color ? obj.namepos.color : '#000000';
        name.width = obj.namepos.width ? obj.namepos.width : 500;
        name.height = obj.namepos.height ? obj.namepos.height : 20;
        name.overflow = 'hidden';
        name.x = obj.namepos.x ? obj.namepos.x : 0;
        name.y = obj.namepos.y ? obj.namepos.y : 0;
        name.align = obj.namepos.align ? obj.namepos.align : 'center';
        name.valign = obj.namepos.valign ? obj.namepos.valign : 'middle';
        name.bold = obj.namepos.bold ? obj.namepos.bold : false;
        view.addChild(name);
    }
    //3,绘制文字
    if (obj.texts && obj.texts.length > 0) {
        var len = obj.texts.length;
        for (var i = 0; i < len; i++) {
            var textObj = obj.texts[i];
            var textView = new Laya.Text();
            textView.text = textObj.text.replace(/{name}/g, nickName);
            textView.fontSize = textObj.fontSize ? textObj.fontSize : 18;
            //字体颜色，默认为黑色
            textView.color = textObj.color ? textObj.color : '#000000';
            textView.width = textObj.width ? textObj.width : 500;
            textView.height = textObj.height ? textObj.height : 20;
            textView.overflow = 'hidden';
            textView.x = textObj.x ? textObj.x : 0;
            textView.y = textObj.y ? textObj.y : 0;
            textView.align = textObj.align ? textObj.align : 'center';
            textView.valign = textObj.valign ? textObj.valign : 'middle';
            textView.bold = textObj.bold ? textObj.bold : false;
            textView.wordWrap = true;
            if (textObj.filter) {
                //创建一个发光滤镜
                var blur = isNaN(textObj.filter.blur) ? 8 : textObj.filter.blur;
                var offX = isNaN(textObj.filter.offX) ? 8 : textObj.filter.offX;
                var offY = isNaN(textObj.filter.offY) ? 8 : textObj.filter.offY;
                var shadowFilter = new Laya.GlowFilter(textObj.filter.color, blur, offX, offY);
                //设置滤镜为阴影滤镜
                textView.filters = [shadowFilter];
            }
            view.addChild(textView);
        }
    }
}
/**
 *
 * @param imgPath 图片地址
 * @param imgId 图片id
 * @param query 分享链接
 * @param msg 分享标题
 */
function shareImg(img, imgId, query, msg) {
    insertCount({ userId: Index.getApp().userId, type: '拉起分享图片ID_' + imgId, mark: 'userId:' + Index.getApp().userId });
    Log.d('shareImg:' + imgId);
    //记录拉起分享的时间
    Index.getApp().getShareTime = new Date().getTime();
    var htmlC = img.drawToCanvas(500, 400, 0, 0);
    var canvas = htmlC.getCanvas();
    canvas.toTempFilePath({
        x: 0,
        y: 0,
        width: 500,
        height: 400,
        destWidth: 500,
        destHeight: 400,
        success: function (res) {
            Log.d('截图成功：');
            Log.d(res);
            if (ifAldShare) {
                wx.aldShareAppMessage({
                    query: query,
                    imageUrl: res.tempFilePath,
                    title: msg,
                    fail: function () {
                        //取消了分享
                        Index.getApp().shareCancel = true;
                    }
                });
            }
            else {
                wx.shareAppMessage({
                    query: query,
                    imageUrl: res.tempFilePath,
                    title: msg,
                    fail: function () {
                        //取消了分享
                        Index.getApp().shareCancel = true;
                    }
                });
            }
        },
        complete: function () {
            Log.d('保存完成,销毁图片');
            var father = img.parent;
            father.destroy();
        }
    });
    //关闭shareTicket分享
    setTimeout(function () {
        Log.d('update updateShareMenu withShareTicket');
        wx.updateShareMenu({
            withShareTicket: false
        });
    }, 1500);
}
function shareInSameGroup(state, level) {
    var query = 'uid=' + Index.getApp().userId + '&token=' + new Date().getTime() + '&level=' + level + '&state=' + state;
    showModal({
        title: '提示',
        content: doubleGroupMsg,
        cancelText: '我知道了',
        confirmText: '分享到群',
        showCancel: true,
        success: function (callBack) {
            //更新金币数量
            if (callBack.confirm) {
                wx.updateShareMenu({ withShareTicket: !0, complete: function () { shareToFriend(null, query); } });
            }
        }
    });
}
function shareError(state, level, ifCancel) {
    var query = 'uid=' + Index.getApp().userId + '&token=' + new Date().getTime() + '&level=' + level + '&state=' + state;
    //打开shareTicket
    // var msg = ifCancel ? '分享失败，请分享到群！' : (state === ShareType.BONUS ? '请分享到微信群，领取10枚金币哦！' : (state === ShareType.SHOWTIP ? '必需分享到群才能获取提示！' : '请分享到群'));
    var msg = ifCancel ? '您刚刚取消了分享，请分享到群！' : '分享失败，请分享到不同的群!';
    showModal({
        title: '提示',
        content: msg,
        cancelText: '我知道了',
        confirmText: '分享到群',
        showCancel: true,
        success: function (callBack) {
            if (callBack.confirm) {
                wx.updateShareMenu({ withShareTicket: !0, complete: function () { shareToFriend(null, query); } });
            }
        }
    });
}
/**分享到群成功回调 */
function shareSuccess(state, level) {
    // insertCount({ userId: Index.getApp().userId, type: state == ShareType.BONUS ? '分享链接点击成功 获得金币' : (state == ShareType.SHOWTIP ? '分享链接点击成功 获得提示' : '分享链接点击成功 拆开红包'), mark: 'userId:' + Index.getApp().userId + '；level:' + (Index.getApp().gamePage ? Index.getApp().gamePage.question.index : -1) });
    /* Index.getApp().bannerManager.hideBanner(-1);
     Log.d('shareSucess ===>state=' + state + ',level==>' + level);
     var index = level ? (!isNaN(level) ? parseInt(level) : -1) : -1;
     var lastPage = getStageLastName();
     Log.d('shareSucess  ====>lastPage=' + lastPage + 'index=' + index);
     if (state == ShareType.SHOWTIP && Index.getApp().gamePage) {
         Log.d('shareSucess  showTip ');
         Log.d('shareSucess   Index.getApp().gamePage.question=> ' + Index.getApp().gamePage.question.index);
         if (Index.getApp().gamePage.question && Index.getApp().gamePage.question.index == index) {
             wx.setStorageSync(HAS_SHARE_TIP, true);
             Index.getApp().gamePage.showTip();
             wx.aldStage.onRunning({
                 stageId: Index.getApp().gamePage.levelData.grade + '.' + Index.getApp().gamePage.levelData.level,
                 stageName: Index.getApp().gamePage.levelData.grade + ' 级' + Index.getApp().gamePage.levelData.level + ' 关',
                 userId: Index.getApp().userId,
                 event: "tools",  //使用道具  关卡进行中，用户触发的操作    该字段必传
                 params: {
                     itemName: "分享提示",//使用道具名称 该字段必传
                     itemCount: 10,   //使用道具数量  可选
                     desc: "分享成功获取提示" //使用道具描述
                 }
             });
         }
 
     } else if (state == ShareType.BONUS) {
         //关掉对话框
         if (Index.getApp().bonusDialog) {
             Index.getApp().bonusDialog.close();
         }
         //获取10枚金币
         wx.showLoading({
             title: '正在领取',
         });
         var coinNum = Index.getApp().bonusDialog ? Index.getApp().bonusDialog.coinNum : BONUS_COIN_NUM;
         addCardNum(coinNum, { to_user_id: Index.getApp().userId, detail: '大礼包分享到群领取' }, function (num) {
             wx.hideLoading();
             wx.setStorageSync(HAS_SHARE_BOUNS, true);
             if (num > 0) {
                 wx.showToast({
                     title: '成功领取' + coinNum + '枚金币！',
                     icon: 'success'
                 });
             }
         });
     } else if (state == ShareType.GETMONEY) {
         //点击了红包分享链接,红包对话框必需显示
         if (Index.getApp().redpacketDialog && Index.getApp().redpacketDialog.isShowing && Index.getApp().redpacketDialog.state == REDBEG_STATE.GET) {
             //拆红包
             wx.setStorageSync(HAS_SHARE_REDPACKET, true);
             Index.getApp().redpacketDialog.openRedpacket('分享');
         } else {
             if (!Index.getApp().redpacketDialog || !Index.getApp().redpacketDialog.isShowing) {
                 //关闭了对话框
                 wx.showToast({
                     title: '请不要关闭红包对话框！！！',
                     icon: 'none'
                 });
             }
         }
     }*/
}
/**
 * 根据shareTicket得到群id
 * @param shareTicket
 */
function getGroupId(shareTicket, callBack) {
    if (!shareTicket) {
        if (callBack) {
            callBack(null);
        }
        return;
    }
    wx.login({
        success: function (res) {
            var code = encodeURIComponent(res.code);
            Log.d('登录：' + code);
            wx.getShareInfo({
                shareTicket: shareTicket,
                success: function (res) {
                    Log.d(res);
                    var encryptedData = encodeURIComponent(res.encryptedData);
                    Log.d('encode data：' + encryptedData);
                    var iv = encodeURIComponent(res.iv);
                    var url = WXINFOPATH + "?appName=" + APPNAME + "&code=" + code + "&encryptedData=" + encryptedData + "&iv=" + iv;
                    Log.d('请求地址：');
                    Log.d(url);
                    wx.request({
                        url: url,
                        dataType: 'json',
                        header: {
                            //设置参数内容类型为json
                            'content-type': 'application/json'
                        },
                        success: function (data) {
                            Log.d('群信息：');
                            Log.d(data);
                            if (callBack) {
                                callBack(data.data.openGId);
                            }
                        },
                        fail: function (err) {
                            if (callBack) {
                                callBack(null);
                            }
                        }
                    });
                }
            });
        },
        fail: function (err) {
            if (callBack) {
                callBack(null);
            }
        }
    });
}
function more(e) {
    if (e) {
        e.stopPropagation();
    }
    insertCount({ type: '点击更多好玩' });
    /* if (Index.getApp().systemInfo.version < '2.2.0') {
         wx.previewImage({
             urls: ['http://www.webuzz.com.cn/game/image/share_brain_image.png'],
             success: function () {
 
             },
             complete: function () {
 
             }
         });
     } else {
         wx.navigateToMiniProgram({
             appId: GOTO_APPID,
             path: channelPath,
             extraData: {
                 from: 'FillLine',
             },
             envVersion: 'release',
             success(res) {
             }
         });
     }*/
}
//# sourceMappingURL=OpenData.js.map
var Map = /** @class */ (function () {
    function Map() {
        //键集合
        this.container = {};
    }
    /**
     * 存值
     * @param key
     * @param value
     */
    Map.prototype.put = function (key, value) {
        //先查询是否存在该键
        //如果不存在，就新创建一个
        try {
            if (key != null && key != "")
                this.container[key] = value;
        }
        catch (e) {
            return e;
        }
    };
    /**
     * 取值
     */
    Map.prototype.get = function (key) {
        try {
            return this.container[key];
        }
        catch (e) {
            return e;
        }
    };
    /**
     * 是否包含key
     * @param key
     */
    Map.prototype.containsKey = function (key) {
        try {
            for (var p in this.container) {
                if (p == key)
                    return true;
            }
            return false;
        }
        catch (e) {
            return e;
        }
    };
    /**
     * 判断是否包含指定value
     */
    Map.prototype.containsValue = function (value) {
        try {
            for (var p in this.container) {
                if (this.container[p] === value)
                    return true;
            }
            return false;
        }
        catch (e) {
            return e;
        }
    };
    ;
    /**
     *
     * @param key  删除map中指定的key
     */
    Map.prototype.remove = function (key) {
        try {
            delete this.container[key];
        }
        catch (e) {
            return e;
        }
    };
    ;
    /**
     *  清空map
     */
    Map.prototype.clear = function () {
        try {
            delete this.container;
            this.container = {};
        }
        catch (e) {
            return e;
        }
    };
    ;
    /**
     * 判断map是否为空
     */
    Map.prototype.isEmpty = function () {
        if (this.keyArray().length == 0)
            return true;
        else
            return false;
    };
    ;
    /**
     * 获取map的大小
     */
    Map.prototype.size = function () {
        return this.keyArray().length;
    };
    /**
     *  返回map中的key值数组
     */
    Map.prototype.keyArray = function () {
        var keys = new Array();
        for (var p in this.container) {
            keys.push(p);
        }
        return keys;
    };
    /**
     * 返回map中的value值数组
     */
    Map.prototype.valueArray = function () {
        var values = new Array();
        var keys = this.keyArray();
        for (var i = 0; i < keys.length; i++) {
            values.push(this.container[keys[i]]);
        }
        return values;
    };
    return Map;
}());
//# sourceMappingURL=Map.js.map
var Log = /** @class */ (function () {
    function Log() {
    }
    Log.d = function (msg, data) {
        if (DEBUG) {
            // console.log(msg, typeof data === 'undefined' ? '' : data);
            if (typeof data === 'undefined') {
                console.log(msg);
            }
            else {
                console.log(msg + "==>" + data);
            }
        }
    };
    Log.error = function (msg, data) {
        if (DEBUG) {
            // console.log(msg, typeof data === 'undefined' ? '' : data);
            if (typeof data === 'undefined') {
                console.error(msg);
            }
            else {
                console.error(msg + "==>" + data);
            }
        }
    };
    return Log;
}());
//# sourceMappingURL=Log.js.map
// const BASE_ADDCOUNT = "https://www.webuzz.com.cn/game/addCount.do";
// const BASE_ADDCOUNT = "http://localhost:8080/game/addCount.do";
function insertCount(data) {
    Log.d(data);
    //添加统计
    if (data.mark) {
        if (typeof data.mark == 'object') {
            Log.d(data.mark);
            var tmp = JSON.stringify(data.mark);
            tmp = tmp.replace(/&/g, "，");
            tmp = tmp.replace(/\{/g, "");
            tmp = tmp.replace(/\}/g, "");
            tmp = tmp.replace(/\s+/g, "");
            tmp = tmp.replace(/\./g, "_");
            tmp = tmp.replace(/\:/g, "：");
            data.mark = tmp;
        }
        else if (typeof data.mark == 'string') {
            data.mark = data.mark.replace(/\./g, "_");
            data.mark = data.mark.replace(/\:/g, "：");
            data.mark = data.mark.replace(/&/g, ",");
            data.mark = data.mark.replace(/\s+/g, "");
        }
        else {
            data.mark = String(data.mark);
        }
    }
    else {
        data.mark = '';
    }
    /*    var params = "?gameType=2&userId=" + data.userId + "&type=" + data.type + "&mark=" + 'v=' + VERSION + ',' + data.mark;
        if (typeof wx !== 'undefined') {
            Log.d('add count: wx request: params:' + params);
            wx.request({
                url: BASE_ADDCOUNT + params, //仅为示例，并非真实的接口地址
                header: {
                    //设置参数内容类型为json
                    'content-type': 'application/json'
                },
            });
        }*/
    var params = { version: VERSION.replace(/\./g, '-'), userId: Index.getApp().userId, mark: data.mark };
    Log.d(data.mark);
    Log.d(params);
    wx.aldSendEvent(data.type, params);
}
//统计常量声明 格式： COUNT_TYPE_{PAGE}_{BUTTON/EVENT}
/**游戏界面 点击 求助好友 */
var COUNT_TYPE_GAMEPAGE_ONHOPE = '游戏界面 点击 求助好友';
/**游戏界面 点击 回复求助 */
var COUNT_TYPE_GAMEPAGE_RESPONE_HELP = '游戏界面 点击 回复求助';
/**游戏界面 点击 粉丝互助 */
var COUNT_TYPE_GAMEPAGE_FANS = '游戏界面 点击 粉丝互助';
/**游戏界面 点击 金币提示 */
var COUNT_TYPE_GAMEPAGE_COIN_TIP = '游戏界面 点击 金币提示';
/**游戏界面 点击 邀请好友+10 */
var COUNT_TYPE_GAMEPAGE_SHARE_TO_FRIEND = '游戏界面 免费提示拉起分享';
/**点击 看视频提示 */
var COUNT_TYPE_GAMEPAGE_VIDEO_TIP = '点击 看视频提示 ';
/**游戏界面 点击免费提示 */
var COUNT_TYPE_GAMEPAGE_FREE_TIP = '游戏 点击 免费提示 ';
/**大礼包 点击免费获取 */
var COUNT_TYPE_BOUNS_FREE_GET = '大礼包 点击 免费获取 ';
/**统计 看完提示视频广告回来 */
var COUNT_TYPE_VIDEO_FINISH = '统计 看完视频广告回来';
/** 统计 视频出错 */
var COUNT_TYPE_VIDEO_ERROR = '统计 视频出错';
/**统计 视频未看完 */
var COUNT_TYPE_VIDEO_NOT_FINISH = '统计 视频未看完';
/**游戏界面 点击 金币 */
var COUNT_TYPE_GAMEPAGE_COIN_CLICK = '游戏界面 点击 金币';
/**游戏界面金币对话框 点击邀请好友 */
var COUNT_TYPE_GAMEPAGE_COIN_DIALOG_SHARE_TO_FRIEND = '游戏界面金币对话框 点击邀请好友';
/**首页 统计 分享链接进入 */
var COUNT_TYPE_HOMEPAGE_ENTER_TYPE = '首页 统计 分享链接进入';
/**过关大礼包 点击看视频获取 */
var COUNT_TYPE_BOUNS_SHOW_VIDEO = '过关大礼包 点击看视频获取';
/**过关大礼包 点击 分享领取 */
var COUNT_TYPE_BOUNS_SHARE_TO_FRIEND = '过关大礼包 拉起分享';
/**过关页面 点击 下一关 */
var COUNT_TYPE_PASSPAGE_NEXT = '过关页面 点击 下一关';
/**过关页面 点击 好友排行 */
var COUNT_TYPE_PASSPAGE_FRIEND_RANK = '过关页面 点击 好友排行';
/**过关页面 点击 挑战好友 */
var COUNT_TYPE_PASSPAGE_SHARE_FRIEND = '过关页面 点击 挑战好友';
/**过关页面 点击 更多好玩 */
var COUNT_TYPE_PASSPAGE_MORE = '过关页面 点击 更多好玩';
/**首页 点击 开始游戏 */
var COUNT_TYPE_HOMEPAGE_START = '首页 点击 开始游戏';
/**首页 统计 授权成功 */
var COUNT_TYPE_HOMEPAGE_SCOPE = '首页 统计 授权成功';
/**首页 统计 开始游戏失败 */
var COUNT_TYPE_HOMEPAGE_START_ERROR = '首页 统计 开始游戏失败';
/**登陆大礼包 点击看视频获取 */
var COUNT_TYPE_LOGINBOUNS_SHOW_VIDEO = '登陆大礼包 点击看视频获取';
/**登陆大礼包 点击 分享领取 */
var COUNT_TYPE_LOGINBOUNS_SHARE_TO_FRIEND = '登陆大礼包 点击 分享领取';
/**运行出错 */
var COUNT_TYPE_ERROR = "出错";
//# sourceMappingURL=Count.js.map
/**
 * 生成指定位数的随机码
 * @param num
 */
function createOneyCode(num) {
    return 'FN_' + uuid(isNaN(num) ? 8 : num, 16);
}
function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [], i;
    radix = radix || chars.length;
    if (len) {
        // Compact form
        for (i = 0; i < len; i++)
            uuid[i] = chars[0 | Math.random() * radix];
    }
    else {
        // rfc4122, version 4 form
        var r;
        // rfc4122 requires these characters
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4';
        // Fill in random data.  At i==19 set the high bits of clock sequence as
        // per rfc4122, sec. 4.1.5
        for (i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | Math.random() * 16;
                uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
            }
        }
    }
    return uuid.join('');
}
/**
 * 分转换成元，保留两位小数点
 * @param money
 */
function fenToYuan(money) {
    if (isNaN(money)) {
        return '0.00';
    }
    return (money / 100.00).toFixed(2);
}
/**
     * 检查版本更新
     */
function checkForUpdate() {
    if (!isWX)
        return;
    if (typeof wx.getUpdateManager === 'function') {
        var updateManager_1 = wx.getUpdateManager();
        updateManager_1.onCheckForUpdate(function (res) {
            // 请求完新版本信息的回调
            Log.d("版本更新信息：");
            Log.d(res.hasUpdate);
        });
        updateManager_1.onUpdateReady(function () {
            // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
            showModal({
                title: '更新提示',
                content: '新版本已经准备好，重启应用以使用',
                cancelText: "知道了",
                showCancel: true,
                confirmText: "重启",
                success: function (res) {
                    if (res.confirm) {
                        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                        updateManager_1.applyUpdate();
                    }
                }
            });
        });
    }
}
//弹出提示框
function showModal(data) {
    if (isWX) {
        var showData = {
            title: data.title ? data.title : "温馨提示",
            content: data.content ? data.content : "",
            cancelText: data.cancelText ? data.cancelText : "取消",
            confirmText: data.confirmText ? data.confirmText : "确定",
            showCancel: data.showCancel ? data.showCancel : data.cancelText,
            success: data.success ? data.success : null,
            confirmColor: data.confirmColor ? data.confirmColor : "#576B95",
            fail: data.fail ? data.fail : null,
            complete: data.complete ? data.complete : null,
            cancelColor: data.cancelColor ? data.cancelColor : "#000000"
        };
        UiManager.getSelf(Index.getApp()).showModal(showData);
    }
}
function showToast(data) {
    if (isWX) {
        /*  wx.showToast({
              title: data.title ? data.title : '^_^',
              icon: data.icon ? data.icon : 'none',
              duration: data.duration ? data.duration : 1500
          });*/
        var showData = {
            title: data.title ? data.title : '^_^',
            duration: data.duration ? data.duration : 1500
        };
        UiManager.getSelf(Index.getApp()).showToast(showData.title, showData.duration);
    }
}
function showLoading(data) {
    UiManager.getSelf().showLoading(data);
}
function hideLoading() {
    UiManager.getSelf().hideLoading();
}
/**
 * 数组复制
 * @param src 源数组；
 * @param srcPos 源数组要复制的起始位置；
 * @param dest 目的数组；
 * @param destPos 目的数组放置的起始位置；
 * @param length 复制的长度。
 * src and dest都必须是同类型或者可以进行转换类型的数组．
 */
function arraycopy(src, srcPos, dest, destPos, length) {
    var srcLen = src.length;
    var endPos = Math.min(srcLen, srcPos + length);
    for (var i = srcPos, j = destPos; i < endPos; i++, j++) {
        dest[j] = src[i];
    }
}
/**
 * 日期格式化函数
 * 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
 * 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *
 * yyyy-MM-dd hh:mm:ss.S  ==> 2006-07-02 08:09:04.423
 * yyyy-M-d h:m:s.S       ==> 2006-7-2 8:9:4.18
 *
 * @param date 要格式化的日期
 * @param fmt  格式字符串
 */
function formatDate(date, fmt) {
    var o = {
        "M+": date.getMonth() + 1,
        "d+": date.getDate(),
        "h+": date.getHours(),
        "m+": date.getMinutes(),
        "s+": date.getSeconds(),
        "q+": Math.floor((date.getMonth() + 3) / 3),
        "S": date.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt))
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt))
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
/**获取星期一的日期 */
function getFirstDayOfWeek(date) {
    var tmpDate = date ? date : new Date();
    var day = tmpDate.getDay() || 7;
    return new Date(tmpDate.getFullYear(), tmpDate.getMonth(), tmpDate.getDate() + 1 - day);
}
;
/**
 * 震动时间
 * @param time  毫秒数
 */
function vibrate(time) {
    if (isNoVirbate)
        return;
    // Log.d('virbrate  time:' + time);
    var count = time / 15;
    var index = 0;
    var obj = { count: count, index: index };
    Laya.timer.loop(15, obj, function () {
        // Log.d('virbrate  loop   index:' + index);
        wx.vibrateShort();
        index++;
        if (index > count) {
            Laya.timer.clearAll(obj);
            obj = null;
        }
    });
}
function vibrateLong() {
    if (isNoVirbate)
        return;
    wx.vibrateLong();
}
function vibrateShort() {
    if (isNoVirbate)
        return;
    wx.vibrateShort();
}
/**
 * 显示骨骼动画
 *
 * @param {string} aniPath 动画路径
 * @param {string} [aniName] 可选，动画名称
 * @param {Laya.Sprite} [father] 可选，动画加载父控件
 * @param {Function} [callBack] 播放结束回调
 * @param {number} [x] 可选，位置
 * @param {number} [y]
 * @param {number} [scale] 可选，缩放
 */
function showOverAni(aniPath, aniName, father, callBack, x, y, scale) {
    //显示升官动画
    var resPath = aniPath;
    // var ske: Laya.Skeleton = new Laya.Skeleton();
    var thiz = this;
    var mTemplet = new Laya.Templet();
    mTemplet.on(Laya.Event.COMPLETE, this, function () {
        // Log.d('动画加载完成~~~~~~~~~');
        var mArmature = mTemplet.buildArmature(1);
        if (aniName) {
            mArmature.play(aniName, false);
        }
        else {
            var aniNum = mArmature.getAnimNum();
            var names = [];
            for (var i = 0; i < aniNum; i++) {
                var name = mTemplet.getAniNameByIndex(i);
                // Log.d('动画名：' + name);
                names.push(name);
            }
            // Log.d('动画个数：' + aniNum);
            mArmature.play(names[0], false);
        }
        // mArmature.scale(1.5, 1.5);
        // mArmature.pos(thiz.imgHouse.width / 2, thiz.imgHouse.height);
        // mArmature.pos(thiz.heroShadow.width / 2, 0);
        mArmature.pos(x ? x : 0, y ? y : 0);
        if (scale) {
            mArmature.scale(scale, scale);
        }
        if (father) {
            father.addChild(mArmature);
        }
        else {
            Laya.stage.addChild(mArmature);
        }
        // thiz.play();
        mArmature.on(Laya.Event.STOPPED, this, function () {
            // Log.d('fix 播放完成 =======');
            mArmature.destroy();
            mTemplet.destroy();
            Laya.loader.clearRes(resPath);
            //播放结束 回调
            if (callBack) {
                callBack();
            }
        });
    });
    mTemplet.on(Laya.Event.ERROR, this, function () {
        Log.d('加载出错~~~~~~~~');
    });
    mTemplet.loadAni(resPath);
}
/**
 * 随机生成一个汉字
 *
 * @returns {string}
 */
function randomStr() {
    // let str = '\\u' + (Math.round(Math.random() * 20901) + 19968).toString(16);
    var str = '\\u' + (Math.round(Math.random() * 3000) + 19968).toString(16);
    return (decode(str));
}
/**将汉字 \u编码解码 */
function decode(s) {
    isNaN;
    return unescape(s.replace(/\\(u[0-9a-fA-F]{4})/gm, '%$1'));
}
function encode1(s) {
    return escape(s).replace(/%(u[0-9A-F]{4})|(%[0-9A-F]{2})/gm, function ($0, $1, $2) {
        return $1 && '\\' + $1.toLowerCase() || unescape($2);
    });
}
/**判断两点是否相邻 */
function isNear(p1, p2) {
    return (((p1.y === p2.y) && Math.abs(p1.x - p2.x) === 1) || (p1.x === p2.x && Math.abs(p1.y - p2.y) === 1));
}
//从point1移动到point2,转过的角度    
function getPointAngle(point1, point2) {
    if (point2.x == point1.x && point2.y == point1.y) {
        return 0;
    }
    if (point2.x > point1.x && point2.y > point1.y) { //第一象限
        return Math.atan((point2.y - point1.y) / (point2.x - point1.x)) / Math.PI * 180;
    }
    else if (point2.x < point1.x && point2.y > point1.y) {
        return Math.atan((point1.x - point2.x) / (point2.y - point1.y)) / Math.PI * 180 + 90;
    }
    else if (point2.x < point1.x && point2.y < point1.y) {
        return Math.atan((point1.y - point2.y) / (point1.x - point2.x)) / Math.PI * 180 + 180;
    }
    else if (point2.x > point1.x && point2.y < point1.y) {
        return Math.atan((point2.x - point1.x) / (point1.y - point2.y)) / Math.PI * 180 + 270;
    }
    if (point2.x == point1.x && point2.y > point1.y) {
        return 90; //下
    }
    else if (point2.x == point1.x && point2.y < point1.y) {
        return 270; //上
    }
    else if (point2.x > point1.x && point2.y == point1.y) {
        return 360; //右
    }
    else {
        return 180; //左
    }
}
/**
 * 根据索引值，获取该索引所在的二维数组位置
 * @param col
 * @param index
 */
function getPointByIndex(index, col) {
    var point = { x: 0, y: 0 };
    point.x = index % col;
    point.y = Math.floor(index / col);
    return point;
}
/**
 * 根据点坐标，获取该点的索引
 * @param col
 * @param index
 */
function getIndexByPoint(x, y, col) {
    var index = -1;
    index = y * col + x;
    return index;
}
/**
* 存储分数到微信开放域，只有更大分值时才存储
* @param {Number} score
* @param {function} callback
*/
function saveScoreToWxCloudStorage(score, callback) {
    Log.d('saveScoreToWxCloudStorage=============score=' + score);
    var kvDataList = [];
    var maxScore = wx.getStorageSync(SCORE_KEY);
    if (maxScore == null || maxScore == "" || score > maxScore) {
        wx.setStorageSync(SCORE_KEY, score);
        var date = Math.round(new Date().getTime() / 1000);
        var scoreValue = JSON.stringify({
            "wxgame": {
                "score": score,
                "update_time": date,
            }
        });
        //总分数
        kvDataList.push({ key: SCORE, value: scoreValue });
    }
    if (kvDataList.length > 0) {
        wx.setUserCloudStorage({
            KVDataList: kvDataList,
            success: function (res) {
                Log.d('wx cloud storage save done: ' + res);
                Log.d(res);
                callback(1);
            },
            fail: function (res) {
                Log.d('wx cloud storage save failed: ' + res);
                callback(0);
            }
        });
    }
    else {
        callback(1);
    }
}
/**
 * 单位转换
 * @param num
 */
function num2size(num) {
    if (num === 0)
        return '0';
    if (num < 1000) {
        return num + '';
    }
    var k = 1000, // or 1024
    sizes = ['', 'K', 'M', 'G', 'T', 'P', 'E', 'Z', 'Y'], i = Math.floor(Math.log(num) / Math.log(k));
    return (num / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i];
}
/**
 * 灰化控件
 * @param view
 */
function grayView(view) {
    var grayMat = [
        .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, .3086, .6094, .082, 0, 0, 0, 0, 0, 1, 0
    ];
    //创建一个颜色滤镜对象,红色
    var grayFilter = new Laya.ColorFilter(grayMat);
    view.filters = (view.filters ? (view.filters.push(grayFilter), view.filters) : [grayFilter]);
}
//# sourceMappingURL=CommonUtils.js.map
var BannerManager = /** @class */ (function () {
    function BannerManager(app) {
        //所有banner数组
        this.bannerMap = new Map();
        //所有激励视频广告数组
        this.videoMap = new Map();
        this.app = null;
        this.hasLoadAd = null;
        /**以毫秒为单位 */
        this.videoCloseTime = -1;
        this.app = app;
        //预加载视频广告
        this.loadVideo();
    }
    /**
     * 获取实例
     *
     * @static
     * @param {Index} [app]
     * @returns {BannerManager}
     * @memberof BannerManager
     */
    BannerManager.getSelf = function (app) {
        if (!BannerManager.self) {
            BannerManager.self = new BannerManager(app ? app : Index.getApp());
        }
        return BannerManager.self;
    };
    /**初始化指定广告，如果没有指定，就是全部广告  */
    BannerManager.prototype.initBanner = function (bannerIndex, callBack) {
        var entity = this.bannerMap.get(BANNERS[bannerIndex]);
        if (!entity) {
            entity = wx.createBannerAd({
                adUnitId: BANNERS[bannerIndex],
                style: {
                    left: 0,
                    top: this.app.systemInfo.height - 100,
                    width: this.app.systemInfo.screenWidth,
                }
            });
            //错误回调
            entity.onError(function (e) {
                if (e) {
                    insertCount({ userId: this.app.userId, type: "banner加载错误", mark: 'errCode:' + e.errCode + ',errMsg:' + e.errMsg });
                    if (e.errCode == 1004 || e.errCode == 0 || e.errCode == -1000) {
                        bannerError = true;
                    }
                    if (callBack) {
                        callBack(bannerIndex, e);
                    }
                }
            });
            this.bannerMap.put(BANNERS[bannerIndex], entity);
        }
    };
    /**得到指定Banner */
    BannerManager.prototype.getBanner = function (bannerIndex) {
        var entity = this.bannerMap.get(BANNERS[bannerIndex]);
        if (!entity) {
            entity = wx.createBannerAd({
                adUnitId: BANNERS[bannerIndex],
                style: {
                    left: 0,
                    top: this.app.systemInfo.height - 100,
                    width: this.app.systemInfo.screenWidth,
                }
            });
            this.bannerMap.put(BANNERS[bannerIndex], entity);
        }
        return entity;
    };
    /**显示指定广告
     *
     * @param bannerIndex:广告索引
     * @param height:指定高度
     * @param callBack  :回调，-1高度不够，0正常显示，-2创建为空
     */
    BannerManager.prototype.showBanner = function (bannerIndex, height, callBack) {
        var _this = this;
        var thiz = this;
        //先判断是否存在
        var adKey = BANNERS[bannerIndex];
        var entity = this.bannerMap.get(adKey);
        //判断高度是否足够
        if (entity) {
            this.bannerMap.remove(adKey);
            entity.hide();
            entity.destroy();
            entity = null;
        }
        if (!entity) {
            entity = wx.createBannerAd({
                adUnitId: adKey,
                style: {
                    left: 0,
                    top: 0,
                    width: this.app.systemInfo.screenWidth,
                }
            });
        }
        entity.onError(function (e) {
            Log.d(e);
            if (e) {
                insertCount({ userId: _this.app.userId, type: "banner加载错误", mark: 'errCode:' + e.errCode + ',errMsg:' + e.errMsg });
                if (e.errCode == 1004 || e.errCode == 0 || e.errCode == -1000) {
                    bannerError = true;
                }
            }
            if (callBack) {
                callBack(-2);
            }
        });
        if (!entity) {
            if (callBack) {
                callBack(-2);
            }
            return;
        }
        this.bannerMap.put(adKey, entity);
        entity.onResize(function (size) {
            if (height) {
                if (height < size.height || (Index.stageH >= 1000 && height - 30 < size.height)) {
                    //高度不够，统计
                    // this.hideBanner(bannerIndex);
                    if (callBack) {
                        callBack(-1);
                    }
                    return;
                }
                if (Index.stageH >= 1000) {
                    //往上移动
                    entity.style.top = Index.getApp().systemInfo.screenHeight - 30 - size.height;
                }
                else {
                    entity.style.top = Index.getApp().systemInfo.screenHeight - size.height;
                }
                entity.show();
                if (callBack) {
                    callBack(0);
                }
            }
        });
    };
    /**显示指定广告
     *
     * @param bannerIndex:广告索引
     * @param x  位置  Laya坐标体系
     * @param y  位置  Laya坐标体系
     * @param width 宽度 Laya坐标体系
     * @param callBack  :回调，-1高度不够，0正常显示，-2创建为空
     */
    BannerManager.prototype.showBannerInPosition = function (bannerIndex, x, y, width, callBack) {
        var _this = this;
        var thiz = this;
        //先判断是否存在
        var adKey = BANNERS[bannerIndex];
        var entity = this.bannerMap.get(adKey);
        ;
        //判断高度是否足够
        if (entity) {
            this.bannerMap.remove(adKey);
            entity.hide();
            entity.destroy();
            entity = null;
        }
        entity = wx.createBannerAd({
            adUnitId: adKey,
            style: {
                left: x * Index.scaleX,
                top: y * Index.scaleX,
                width: width ? width * Index.scaleX : Index.getApp().systemInfo.screenWidth,
            }
        });
        entity.onError(function (e) {
            Log.d(e);
            if (e && e.errCode) {
                insertCount({ userId: _this.app.userId, type: "banner加载错误", mark: 'errCode:' + e.errCode });
                if (e.errCode == 1004 || e.errCode == 0 || e.errCode == -10000) {
                    bannerError = true;
                }
            }
            if (callBack) {
                callBack(-2);
            }
        });
        if (!entity) {
            if (callBack) {
                callBack(-2);
            }
            return;
        }
        this.bannerMap.put(adKey, entity);
        entity.onResize(function (size) {
            entity.show();
            if (callBack) {
                callBack(0);
            }
        });
    };
    /**
     * 隐藏指定Banner
     *
     * @param bannerIndex  指定广告索引，如果<0，则表示全部
     *
     */
    BannerManager.prototype.hideBanner = function (bannerIndex) {
        if (bannerIndex >= 0) {
            var entity = this.bannerMap.get(BANNERS[bannerIndex]);
            if (entity) {
                this.bannerMap.remove(BANNERS[bannerIndex]);
                entity.hide();
                entity.destroy();
                entity = null;
            }
        }
        else {
            var keyList = this.bannerMap.keyArray();
            var keyLen = keyList.length;
            for (var i = 0; i < keyLen; i++) {
                var entity = this.bannerMap.get(keyList[i]);
                if (entity) {
                    entity.hide();
                    entity.destroy();
                    entity = null;
                }
            }
        }
    };
    //======================视频广告部分
    /**
     * 得到指定视频广告
     * @param videoIndex
     */
    BannerManager.prototype.getVideoAd = function (videoIndex) {
        var entity = this.videoMap.get(VIDEOS[videoIndex]);
        if (!entity) {
            entity = wx.createRewardedVideoAd({
                adUnitId: VIDEOS[videoIndex]
            });
            entity.onError(function (e) {
                Log.d(e);
            });
            this.videoMap.put(VIDEOS[videoIndex], entity);
        }
        else {
            entity.onError(function (e) {
                Log.d(e);
            });
        }
        return entity;
    };
    /**
     *预加载视频
     * @param videoIndex
     */
    BannerManager.prototype.loadVideo = function (callBack) {
        var _this = this;
        Log.d("loadVideo  =============");
        if (this.hasLoadAd) {
            if (callBack) {
                callBack(this.hasLoadAd);
            }
            return;
        }
        var entity = this.getVideoAd(0);
        if (entity != null) {
            entity.load()
                .then(function () {
                Log.d("loadVideo  ============= success!!!");
                //保存已经缓存的广告
                canShowVideo = true;
                _this.hasLoadAd = entity;
                if (callBack) {
                    callBack(entity);
                }
            })
                .catch(function (err) {
                Log.d("loadVideo  err=>");
                Log.d(err);
                _this.hasLoadAd = null;
                //不能看视频
                canShowVideo = false;
                if (callBack) {
                    callBack(null);
                }
            });
        }
    };
    /**
     * 加载完成后的视频广告
     * @param entity
     * @param callBack
     */
    BannerManager.prototype.showVideo = function (callBack, errorMsg, incomplete, errorCallBack) {
        var _this = this;
        if (this.hasLoadAd) {
            playBgMusic(false);
            var thiz = this;
            this.hasLoadAd.onClose(function (status) {
                Log.d('提示视频广告close回调');
                thiz.hasLoadAd.offClose();
                _this.hasLoadAd = null;
                //再预加载下一次
                thiz.loadVideo();
                //两次关闭时间必需大于15秒才算
                var dTime = (new Date().getTime() - _this.videoCloseTime) / 1000;
                var isRealClose = dTime > 15000 ? true : false;
                thiz.videoCloseTime = new Date().getTime();
                Log.d('视频关闭时间：' + thiz.videoCloseTime);
                if (gameState == GAME_STATE.PLAYING) {
                    playBgMusic(true);
                }
                //转换成秒
                Log.d('时差：' + dTime + '秒');
                if ((status && status.isEnded) || status === undefined && isRealClose) {
                    //正常播放结束
                    //添加统计
                    insertCount({ userId: _this.app.userId, type: COUNT_TYPE_VIDEO_FINISH, mark: 'userId:' + _this.app.userId + ';video:' + BannerManager.VIDEOSNAME[0] + 'dTime:' + dTime + '秒' });
                    callBack();
                    finishVideoCount++;
                    wx.setStorageSync(FINISHVIDEOCOUNT, finishVideoCount);
                    todayData.video = todayData.video + 1;
                    setTodayData();
                }
                else {
                    //播放未完成
                    //添加统计
                    insertCount({ userId: _this.app.userId, type: COUNT_TYPE_VIDEO_NOT_FINISH, mark: 'video:' + BannerManager.VIDEOSNAME[0] });
                    showModal({
                        title: '提示',
                        content: incomplete ? incomplete : '视频未完整播放，无法获得提示！',
                        confirmText: '好的',
                        showCancel: false,
                    });
                }
            });
            //显示广告
            this.hasLoadAd.show();
            openVideoCount++;
            wx.setStorageSync(OPENVIDEOCOUNT, openVideoCount);
        }
        else {
            if (errorCallBack) {
                errorCallBack();
            }
            else {
                //弹出提示
                showModal({
                    title: '提示',
                    content: errorMsg ? errorMsg : '非常抱歉，暂时没有可观看的视频，建议先使用金币看提示吧！',
                    confirmText: '好的',
                    showCancel: false,
                });
            }
        }
    };
    /**
     * 显示指定广告  本方法已废弃
     * @Deprecated
     * @param videoIndex    索引
     * @param callBack      回调
     * @param errorMsg      出错提示
     * @param incomplete    不完整提示
     */
    BannerManager.prototype.showVideoAd = function (videoIndex, callBack, errorMsg, incomplete, errorCallBack) {
        var _this = this;
        var entity = this.getVideoAd(videoIndex);
        var thiz = this;
        if (entity != null) {
            entity.load()
                .then(function () {
                //背景音乐停止
                //静音
                playBgMusic(false);
                //显示广告
                entity.show();
                openVideoCount++;
                wx.setStorageSync(OPENVIDEOCOUNT, openVideoCount);
            })
                .catch(function (err) {
                //不能看视频
                canShowVideo = false;
                //添加统计
                insertCount({ userId: _this.app.userId, type: COUNT_TYPE_VIDEO_ERROR, mark: 'video:' + BannerManager.VIDEOSNAME[videoIndex] });
                playBgMusic(true);
                if (errorCallBack && ifShowBonus) {
                    errorCallBack();
                }
                else {
                    //弹出提示
                    showModal({
                        title: '提示',
                        content: errorMsg ? errorMsg : '非常抱歉，暂时没有可观看的视频，建议先使用金币看提示吧！',
                        confirmText: '好的',
                        showCancel: false,
                    });
                }
            });
            //添加回调
            // ad.onClose(callBack);
            entity.onClose(function (status) {
                Log.d('提示视频广告close回调');
                //两次关闭时间必需大于15秒才算
                var dTime = (new Date().getTime() - _this.videoCloseTime) / 1000;
                var isRealClose = dTime > 15000 ? true : false;
                thiz.videoCloseTime = new Date().getTime();
                Log.d('视频关闭时间：' + thiz.videoCloseTime);
                entity.offClose();
                playBgMusic(true);
                //转换成秒
                Log.d('时差：' + dTime + '秒');
                if ((status && status.isEnded) || status === undefined && isRealClose) {
                    //正常播放结束
                    //添加统计
                    insertCount({ userId: _this.app.userId, type: COUNT_TYPE_VIDEO_FINISH, mark: 'userId:' + _this.app.userId + ';video:' + BannerManager.VIDEOSNAME[videoIndex] + 'dTime:' + dTime + '秒' });
                    callBack();
                    finishVideoCount++;
                    wx.setStorageSync(FINISHVIDEOCOUNT, finishVideoCount);
                    todayData.video = todayData.video + 1;
                    setTodayData();
                }
                else {
                    //播放未完成
                    //添加统计
                    insertCount({ userId: _this.app.userId, type: COUNT_TYPE_VIDEO_NOT_FINISH, mark: 'video:' + BannerManager.VIDEOSNAME[videoIndex] });
                    showModal({
                        title: '提示',
                        content: incomplete ? incomplete : '视频未完整播放，无法获得提示！',
                        confirmText: '好的',
                        showCancel: false,
                    });
                }
            });
        }
    };
    /**游戏界面的Banner广告 */
    //隐藏所有广告
    BannerManager.HIDE_ALL = -1;
    /**banner */
    BannerManager.VIDEOSNAME = [
        '游戏界面提示视频',
        '过关大礼包视频',
    ];
    return BannerManager;
}());
//# sourceMappingURL=Banner.js.map
var AVUtils = /** @class */ (function () {
    function AVUtils() {
        this.app = null;
        this.app = Index.getApp();
        if (!isWX)
            return;
        AV.init({
            appId: APP_ID,
            appKey: APP_KEY
        });
    }
    AVUtils.getSelf = function () {
        if (!AVUtils.self) {
            AVUtils.self = new AVUtils();
        }
        return AVUtils.self;
    };
    /**
     * 登录
     *
     * @param {Function} [callBack]
     * @memberof AVUtils
     */
    AVUtils.prototype.login = function (callBack) {
        if (DEBUG) {
            UiManager.getSelf().showToast('开始登录');
        }
        AV.User.loginWithWeapp().then(function (user) {
            insertCount({ userId: user.id, type: "Leancloud登录成功！", mark: "" });
            //获取版本设置，登录成功后才去获取关键数据
            AVUtils.self.getVersionSettings();
            if (DEBUG) {
                UiManager.getSelf().showToast('登录成功');
            }
            //缓存用户信息
            wx.setStorageSync(USER, user);
            if (callBack) {
                callBack(user);
            }
        }).catch(function (e) {
            Log.d(e);
            insertCount({ userId: "errId", type: "Leancloud登录失败！" });
            if (DEBUG) {
                UiManager.getSelf().showToast('登录失败');
            }
            if (callBack) {
                callBack(null);
            }
        });
    };
    /**
     * 得到数据
     *
     * @param {string} className 要查询的表名
     * @param {[]} params 参数 [{key,value,op},{key,value,op}] 键，值，操作符(>,<,=,!=,>=,<=,desc,asc)
     * @param {Function} callBack 查询结果
     * @memberof AVUtils
     */
    AVUtils.prototype.getData = function (className, params, callBack) {
        var query = new AV.Query(className);
        if (params && params.length > 0) {
            var len = params.length;
            for (var i = 0; i < len; i++) {
                var param = params[i];
                var op = param.op ? param.op : "=";
                switch (op) {
                    case "=":
                        {
                            query.equalTo(param.key, param.value);
                        }
                        break;
                    case ">":
                        {
                            query.greaterThan(param.key, param.value);
                        }
                        break;
                    case ">=":
                        {
                            query.greaterThanOrEqualTo(param.key, param.value);
                        }
                        break;
                    case "<":
                        {
                            query.lessThan(param.key, param.value);
                        }
                        break;
                    case "<=":
                        {
                            query.lessThanOrEqualTo(param.key, param.value);
                        }
                        break;
                    case "!=":
                        {
                            query.notEqualTo(param.key, param.value);
                        }
                        break;
                    case "desc":
                        {
                            query.descending(param.key);
                        }
                        break;
                    case "asc":
                        {
                            query.ascending(param.key);
                        }
                        break;
                    case "limit":
                        {
                            query.limit(param.value);
                        }
                        break;
                    case "skip": {
                        query.skip(param.value);
                    }
                }
            }
        }
        query.find().then(function (data) {
            callBack({ state: 1, data: data });
        }).catch(function (e) {
            callBack({ state: 0, data: null });
        });
    };
    /**
     * 更新数据
     *
     * @param {AV.Object} avObj
     * @param {*} data
     * @param {Function} [callBack]
     * @memberof AVUtils
     */
    AVUtils.prototype.setData = function (avObj, data, callBack) {
        if (avObj && data) {
            for (var key in data) {
                Log.d('key=' + key + ';value=' + data[key]);
                avObj.set(key, data[key]);
            }
            avObj.save().then(function (res) {
                if (callBack) {
                    callBack({ state: 1, data: res });
                }
            }).catch(function (e) {
                if (callBack) {
                    callBack({ state: 0, data: e });
                }
            });
        }
        else {
            if (callBack) {
                callBack({ state: 0, data: "对象或参数不能为null" });
            }
        }
    };
    /**
     * 插入一条数据
     *
     * @param {string} className
     * @param {*} data
     * @param {Function} [callBack]
     * @memberof AVUtils
     */
    AVUtils.prototype.insert = function (className, data, callBack) {
        if (className && data) {
            var ToDo = AV.Object.extend(className);
            var toDo = new ToDo();
            for (var key in data) {
                Log.d('key=' + key + ';value=' + data[key]);
                toDo.set(key, data[key]);
            }
            toDo.save().then(function (res) {
                if (callBack) {
                    callBack({ state: 1, data: res });
                }
            }).catch(function (e) {
                if (callBack) {
                    callBack({ state: 0, data: e });
                }
            });
        }
        else {
            if (callBack) {
                callBack({ state: 0, data: "对象或参数不能为null" });
            }
        }
    };
    //获取当前版本的功能设置
    AVUtils.prototype.getVersionSettings = function () {
        //获取settings
        Log.d('Version:' + VERSION);
        var thiz = this;
        var query = new AV.Query('settings');
        query.equalTo('version', VERSION);
        query.first().then(function (data) {
            if (data == null) {
                Log.d('未查询到对应版本settings');
            }
            else {
                wx.setStorage({ key: SETTING_VERSION_KEY, data: VERSION });
                var settings = data.get('setting');
                Log.d('setting:');
                Log.d(settings);
                if (settings.banners !== undefined) {
                    BANNERS = settings.banners;
                }
                if (settings.videos !== undefined) {
                    VIDEOS = settings.videos;
                }
                if (settings.ifAldShare !== undefined) {
                    ifAldShare = settings.ifAldShare;
                }
                if (settings.ifShowApps !== undefined) {
                    ifShowApps = settings.ifShowApps;
                }
                if (settings.ifShowBonus !== undefined) {
                    ifShowBonus = settings.ifShowBonus;
                }
                if (settings.ifActivity !== undefined) {
                    ifActivity = settings.ifActivity;
                }
                //去掉腾讯的账号
                var nickName = wx.getStorageSync(NICKNAME);
                if (nickName && nickName.indexOf('game') > -1) {
                    ifShowBonus = false;
                }
                //游戏界面模式 
                if (settings.doubleGroupMsg !== undefined) {
                    doubleGroupMsg = settings.doubleGroupMsg;
                }
                //分享视频次数
                if (settings.tipShareMsg !== undefined) {
                    tipShareMsg = settings.tipShareMsg;
                }
                if (settings.bounsShareMsg !== undefined) {
                    bounsShareMsg = settings.bounsShareMsg;
                }
                var shareContent = data.get('shareContent');
                if (shareContent && shareContent.length > 0) {
                    syncSharedContent(shareContent);
                }
                else {
                    syncSharedContent(null);
                }
                Laya.timer.once(2000, thiz.app, function () {
                    //设置云端数据
                });
                var bgmCloud = data.get('bgm');
                if (bgmCloud && bgmCloud.length > 0) {
                    //添加到背景音乐集合中
                    var files = [];
                    var len = bgmCloud.length;
                    for (var i = 0; i < len; i++) {
                        files.push(bgmCloud[i].url);
                    }
                    Log.d(bgms);
                    downLoadFileSync(files);
                    bgms = bgms.concat(bgmCloud);
                }
                wx.setStorage({
                    key: IFSHOWBONUS,
                    data: ifShowBonus
                });
            }
        }, function (error) {
            Log.d('Query Leancloud Error: ' + error.code + ' ' + error.message);
        });
    };
    /**
     * 查询活动
     * @param callBack
     */
    AVUtils.prototype.getActivity = function (callBack) {
        showLoading();
        var thiz = this;
        var cache = wx.getStorageSync(ACTIVITY);
        if (cache) {
            hideLoading();
            var cacheData = cache.data;
            if (cacheData && cacheData.length > 0) {
                var rnd = Math.floor(Math.random() * cacheData.length);
                callBack(cacheData[rnd].data);
            }
            else {
                callBack(null);
            }
            return;
        }
        var query = new AV.Query('activity');
        query.greaterThanOrEqualTo('duration', new Date());
        query.find().then(function (data) {
            hideLoading();
            var cacheTmp = {
                state: 0,
                data: data
            };
            if (data && data.length > 0) {
                cacheTmp.state = 1;
                var rnd = Math.floor(Math.random() * data.length);
                callBack(data[rnd].get("data"));
            }
            else {
                callBack(null);
            }
            wx.setStorage({
                key: ACTIVITY,
                data: cacheTmp
            });
        }).catch(function (e) {
            hideLoading();
            callBack(null);
        });
    };
    AVUtils.self = null;
    return AVUtils;
}());
//# sourceMappingURL=AVUtils.js.map
/**
 * 下载压缩文件
 * @param callBack
 */
function downLoadResZip(resPath, callBack, updateCallBack) {
    if (!isWX) {
        return;
    }
    var tmpPath = wx.getStorageSync(resPath);
    if (tmpPath && tmpPath.length > 0) {
        //判断文件是否存在
        if (callBack) {
            callBack(tmpPath);
        }
        if (updateCallBack) {
            updateCallBack({
                progress: 100,
                totalBytesWritten: 100,
                totalBytesExpectedToWrite: 100
            });
        }
        return;
    }
    var fs = wx.getFileSystemManager();
    var df = wx.downloadFile({
        url: resPath,
        success: function (res) {
            Log.d('资源下载完成');
            Log.d(res);
            if (res.statusCode === 200) {
                var zip_res = res.tempFilePath;
                Log.d(zip_res);
                var zipPath = wx.env.USER_DATA_PATH + '/assets/';
                Log.d(zipPath);
                fs.unzip({
                    zipFilePath: zip_res,
                    targetPath: zipPath,
                    success: function (result) {
                        Log.d('解压缩成功---'); // 解压成功后，再开始初始化场景内容
                        Log.d(result);
                        //读取目录,得到文件数组
                        var files = fs.readdirSync(zipPath);
                        var resFile = null;
                        if (files && files.length > 0) {
                            resFile = zipPath + files[0] + '/';
                            // files = fs.readdirSync(fontFile);
                            if (callBack) {
                                callBack(resFile);
                            }
                            wx.setStorage({
                                key: resPath,
                                data: resFile,
                                complete: null,
                                success: null,
                                fail: null
                            });
                        }
                        else {
                            Log.d('资源加载失败');
                            wx.removeStorageSync(resPath);
                            if (callBack) {
                                callBack(null);
                            }
                        }
                    }
                });
            }
        },
        fail: function (e) {
            Log.d('资源加载失败');
            wx.removeStorageSync(resPath);
            if (callBack) {
                callBack(null);
            }
        },
        complete: null
    });
    //进度提醒
    if (updateCallBack) {
        df.onProgressUpdate(function (data) {
            if (data) {
                updateCallBack(data);
                if (data.progress >= 100) {
                    //移除监听
                    df.offProgressUpdate(this);
                }
            }
        });
    }
}
/**
 * 文件是否存在
 * @param url
 */
function hasDownLoad(url) {
    //只能下载https网址的文件
    if (url.indexOf('https://') == -1) {
        //不是网络地址，直接返回
        return url;
    }
    var fs = wx.getFileSystemManager();
    var tmpPath = wx.getStorageSync(url);
    if (tmpPath && tmpPath.length > 0) {
        //判断文件是否存在
        if (testFile(tmpPath)) {
            Log.d('文件存在~~~~~~~~');
            return tmpPath;
        }
        else {
            //文件不存在了，清掉
            wx.removeStorageSync(url);
        }
    }
    return null;
}
/**
 * 下载文件
 * @param url
 * @param callBack
 */
function downLoadFile(url, callBack, updateCallBack) {
    if (!isWX) {
        if (callBack) {
            callBack(null);
        }
        return;
    }
    //只能下载https网址的文件
    if (url.indexOf('https://') == -1) {
        //不是网络地址，直接返回
        if (callBack) {
            callBack(url);
        }
        if (updateCallBack) {
            updateCallBack({
                progress: 100,
                totalBytesWritten: 100,
                totalBytesExpectedToWrite: 100
            });
        }
        return;
    }
    var fs = wx.getFileSystemManager();
    var tmpPath = wx.getStorageSync(url);
    if (tmpPath && tmpPath.length > 0) {
        //判断文件是否存在
        if (testFile(tmpPath)) {
            Log.d('文件存在~~~~~~~~');
            if (callBack) {
                callBack(tmpPath);
            }
            if (updateCallBack) {
                updateCallBack({
                    progress: 100,
                    totalBytesWritten: 100,
                    totalBytesExpectedToWrite: 100
                });
            }
            return;
        }
        else {
            //文件不存在了，清掉
            wx.removeStorageSync(url);
        }
    }
    var df = wx.downloadFile({
        url: url,
        success: function (res) {
            Log.d('资源下载完成');
            Log.d(res);
            if (res.statusCode === 200) {
                var filePath = res.tempFilePath;
                Log.d(filePath);
                wx.saveFile({
                    tempFilePath: filePath,
                    success: function (obj) {
                        if (callBack) {
                            callBack(obj.savedFilePath);
                        }
                        wx.setStorage({
                            key: url,
                            data: obj.savedFilePath,
                            complete: null,
                            success: null,
                            fail: null
                        });
                    },
                    fail: function () {
                        if (callBack) {
                            callBack(null);
                        }
                    },
                    complete: null
                });
            }
            else {
                if (callBack) {
                    callBack(null);
                }
            }
        },
        fail: function (e) {
            Log.d('资源加载失败');
            wx.removeStorageSync(url);
            if (callBack) {
                callBack(null);
            }
        },
        complete: null
    });
    //进度提醒
    if (updateCallBack) {
        df.onProgressUpdate(function (data) {
            if (data) {
                updateCallBack(data);
                if (data.progress >= 100) {
                    //移除监听
                    df.offProgressUpdate(this);
                }
            }
        });
    }
}
/**
 * 判断文件 是否存在
 * @param path
 */
function testFile(path) {
    try {
        wx.getFileSystemManager().accessSync(path);
        Log.d('文件存在~~~~~~' + path);
        return true;
    }
    catch (e) {
        Log.d('文件不存在~~~~~~');
        return false;
    }
}
//# sourceMappingURL=AssetsUtils.js.map
/**膨胀动画时间  */
var SCALE_DURATION = 100;
/**闪烁动画时间  */
var TWINKLE_DURATION = 100;
/**
* 抖动动画效果    旋转抖动（动画对象描点设置为中心点)
* @param caller
* @param view
* @param count     不用传入
*/
function sharkAni(caller, view, count, times, callBack) {
    var index = count ? count : 0;
    var r = index % 4 === 0 ? 15 : (index % 4 === 1 ? 0 : (index % 4 === 2 ? -15 : 0));
    Laya.Tween.to(view, {
        rotation: r
    }, 100, Laya.Ease.linearInOut, Laya.Handler.create(caller, function () {
        if (index <= (4 * (times ? times : 5))) {
            sharkAni(caller, view, index + 1, times, callBack);
        }
        else {
            //播放完成回调
            if (callBack) {
                callBack();
            }
        }
    }));
}
/**
 * 抖动动画效果  左右抖动
 * @param caller 执行域
 * @param view 动画对象
 * @param count 抖动动画索引，不用传或传入0
 * @param times 抖动次数，默认5次
 * @param callBack 动画完成后回调
 */
function sharkAniLeftRight(caller, view, count, times, callBack) {
    var index = count ? count : 0;
    var r = index % 4 === 0 ? 0 : (index % 4 === 1 ? 10 : (index % 4 === 2 ? 0 : -10));
    var t = view.x + r;
    Laya.Tween.to(view, {
        x: t
    }, 10, Laya.Ease.linearInOut, Laya.Handler.create(caller, function () {
        if (index <= (3 * (times ? times : 5))) {
            sharkAniLeftRight(caller, view, ++index, times, callBack);
        }
        else {
            //播放完成回调
            if (callBack) {
                callBack();
            }
        }
    }));
}
/**膨胀动画  x方向拉伸，y方向压缩
 *
 * @param caller 执行域
 * @param view  动画对象
 * @param scaleXY 膨胀系数，默认0.2
 */
function scaleAni(caller, view, scaleXY) {
    var obj = { scale: 0 };
    var thiz = caller;
    var scaleTmp = scaleXY ? scaleXY : 0.2;
    Laya.Tween.to(obj, {
        scale: scaleTmp,
        update: new Laya.Handler(thiz, function () {
            view.scaleX = 1 + obj.scale;
            view.scaleY = 1 - obj.scale;
        })
    }, SCALE_DURATION, Laya.Ease.bounceInOut, Laya.Handler.create(thiz, function () {
        obj = { scale: 0 };
        Laya.Tween.to(obj, {
            scale: scaleTmp,
            update: new Laya.Handler(thiz, function () {
                view.scaleX = 1 + scaleTmp - obj.scale;
                view.scaleY = 1 - scaleTmp + obj.scale;
            })
        }, SCALE_DURATION, Laya.Ease.bounceInOut);
    }));
}
/**
 * 闪烁动画
 * @param caller 执行域
 * @param view 动画对象
 * @param count 动画次数索引，请传入null或0
 * @param times 闪烁次数
 * @param callBack 动画完成后回调
 */
function twinkle(caller, view, count, times, callBack) {
    var index = count ? count : 0;
    var r = index % 2 === 0 ? 0.5 : 1;
    Laya.Tween.to(view, {
        alpha: r
    }, TWINKLE_DURATION, Laya.Ease.linearInOut, Laya.Handler.create(caller, function () {
        if (index <= (2 * (times ? times : 1))) {
            twinkle(caller, view, index + 1, times, callBack);
        }
        else {
            //播放完成回调
            Log.d('播放完成回调');
            if (callBack) {
                Log.d('播放完成回调 callBack');
                callBack();
            }
        }
    }));
}
/**跳动动画
 *
 * @param caller 执行域
 * @param view  动画对象,必需要设置描点为中心
 * @param skipHeight 跳跃高度，默认为控件高度一半
 * @param skipNum 跳跃次数，默认为3次
 * @param callBack 完成回调
 * @param skipIndex 跳跃索引，不用传入，或传0
 */
function skipAni(caller, view, skipHeight, skipNum, callBack, skipIndex) {
    var obj = { scale: 0 };
    var thiz = caller;
    var h = view.height;
    var baseY = view.y;
    var height = skipHeight ? skipHeight : (h * 3 / 4);
    var skipCount = skipNum ? skipNum : 3;
    var skips = skipIndex ? skipIndex : 0;
    //计算本次高度
    height = height / (skips + 1);
    Laya.Tween.to(obj, {
        scale: height,
        update: new Laya.Handler(thiz, function () {
            view.y = baseY - obj.scale;
        })
    }, 100, Laya.Ease.bounceInOut, Laya.Handler.create(thiz, function () {
        obj = { scale: 0 };
        Laya.Tween.to(obj, {
            scale: height,
            update: new Laya.Handler(thiz, function () {
                view.y = baseY - height + obj.scale;
            })
        }, 100, Laya.Ease.bounceInOut, Laya.Handler.create(thiz, function () {
            scaleAni(thiz, view);
            if (skips >= skipCount) {
                if (callBack) {
                    callBack();
                }
            }
            else {
                skipAni(caller, view, skipHeight, skipNum, callBack, skips + 1);
            }
        }));
    }));
}
/***获取舞台最后一个名称 */
function getStageLastName() {
    if (Laya.stage.numChildren > 0) {
        return Laya.stage.getChildAt(Laya.stage.numChildren - 1).name;
    }
    else {
        return null;
    }
}
/**震屏效果临时变量 */
var vibrateObj = {
    x: 0, y: 0, rotation: 0, view: null
};
/**
 * 调用该方法前，请将view的描点设置为中心点
 * 震屏效果
 * 三个变量：x水平方向  5,y垂直方向  5,rotation旋转角度  10
 * @param view
 * @param time  持续时间 以毫秒为单位
 */
function vibrateScreen(view, time) {
    if (vibrateObj.view) {
        Laya.timer.clearAll(vibrateObj);
        //说明上一次的动画还没完成
        vibrateObj.view.x = vibrateObj.x;
        vibrateObj.view.y = vibrateObj.y;
        vibrateObj.view.rotation = vibrateObj.rotation;
    }
    //先清除该对象上的缓和时间
    vibrateObj.x = view.x;
    vibrateObj.y = view.y;
    vibrateObj.rotation = view.rotation;
    vibrateObj.view = view;
    //定义参数  
    var count = time ? (time / 10) : 50;
    var loop = 0; //震动次数  
    var offX;
    var offY;
    var dir = 1; //震动方向。1正，-1反  
    var rotation;
    Laya.timer.loop(10, vibrateObj, function () {
        loop++;
        //随机获取震动方向  
        dir = Math.random() > .5 ? 1 : -1;
        //随机获取X轴移动量  
        offX = Math.random() * 5 * dir + vibrateObj.x;
        //随机获取Y轴移动量  
        offY = Math.random() * 5 * dir * -1 + vibrateObj.y;
        // rotation = Math.random() * 5 * dir + vibrateObj.rotation;
        Laya.Tween.to(view, { x: offX, y: offY, rotation: rotation }, 10, Laya.Ease.linearNone, Laya.Handler.create(vibrateObj, function () {
            if (loop > count) {
                Laya.timer.clearAll(vibrateObj);
                view.x = vibrateObj.x;
                view.y = vibrateObj.y;
                view.rotation = vibrateObj.rotation;
                vibrateObj.view = null;
                return;
            }
        }));
    });
}
/**
 * 数字文本变化动画
 *
 * @param {Laya.Text} text
 * @param {number} newNum
 * @returns {void}
 */
function numberTextAni(text, newNum) {
    if (!text)
        return;
    Laya.timer.clearAll(text);
    text.destroyChildren();
    var totalTime = 1500;
    var dt = 100;
    var panel = new Laya.Panel();
    panel.width = text.width;
    panel.height = text.height;
    text.addChild(panel);
    var nextText = new Laya.Text();
    nextText.width = text.width;
    nextText.height = text.height;
    nextText.font = text.font;
    nextText.fontSize = text.fontSize;
    nextText.color = text.color;
    nextText.align = text.align;
    nextText.valign = text.valign;
    nextText.pos(0, 0);
    panel.addChild(nextText);
    //最下面一个
    var perText = new Laya.Text();
    perText.width = text.width;
    perText.height = text.height;
    perText.font = text.font;
    perText.fontSize = text.fontSize;
    perText.align = text.align;
    perText.valign = text.valign;
    perText.color = text.color;
    perText.pos(0, text.height);
    panel.addChild(perText);
    var lastNum = 0;
    if (text.text && !isNaN(text.text)) {
        lastNum = parseInt(text.text);
    }
    // text.text = '';
    var obj = { value: lastNum };
    var count = totalTime / dt;
    var dx = Math.round((newNum - lastNum) / count);
    var first = nextText;
    var last = perText;
    first.text = lastNum + '';
    var index = 0;
    first.text = (lastNum + dx * index) + '';
    last.text = (lastNum + dx * (index + 1)) + '';
    Laya.timer.loop(dt, text, function () {
        text.text = '';
        if (index >= count) {
            Laya.timer.clearAll(text);
            text.text = newNum + '';
            text.destroyChildren();
            return;
        }
        var pos = { y: 0 };
        Laya.Tween.to(pos, {
            y: -text.height,
            update: Laya.Handler.create(text, function () {
                if (!first || !last) {
                    return;
                }
                //哪个是第一个
                first.y = pos.y;
                last.y = text.height + pos.y;
            }, null, false)
        }, dt, null, Laya.Handler.create(text, function () {
            if (index >= count) {
                return;
            }
            if (!nextText || !perText) {
                return;
            }
            //本次结束后，有一个文本框变到下面来
            if (nextText.y < perText.y) {
                first = nextText;
                last = perText;
            }
            else {
                last = nextText;
                first = perText;
            }
            last.text = first.text;
            // first.y = text.height;
            first.text = (lastNum + dx * (index + 1)) + '';
        }));
        index++;
    });
}
/**
 * 数字滚动动画
 * @param text
 * @param newNum
 */
function numberClipAni(text, newNum) {
    if (!text)
        return;
    Laya.timer.clearAll(text);
    // Log.d('clip childrenNum;' + text.numChildren);
    text.destroyChildren();
    var totalTime = 1500;
    var dt = 100;
    var panel = new Laya.Panel();
    panel.width = text.width;
    panel.height = text.height;
    text.addChild(panel);
    var nextText = new Laya.FontClip();
    nextText.width = text.width;
    nextText.height = text.height;
    nextText.skin = text.skin;
    nextText.sheet = text.sheet;
    nextText.align = text.align;
    nextText.pos(0, 0);
    panel.addChild(nextText);
    //最下面一个
    var perText = new Laya.FontClip();
    perText.width = text.width;
    perText.height = text.height;
    perText.skin = text.skin;
    perText.sheet = text.sheet;
    perText.align = text.align;
    perText.pos(0, text.height);
    panel.addChild(perText);
    var lastNum = 0;
    if (text.value && !isNaN(text.value)) {
        lastNum = parseInt(text.value);
    }
    // text.text = '';
    var obj = { value: lastNum };
    var count = totalTime / dt;
    var dx = Math.round((newNum - lastNum) / count);
    var first = nextText;
    var last = perText;
    first.value = lastNum + '';
    var index = 0;
    first.value = (lastNum + dx * index) + '';
    last.value = (lastNum + dx * (index + 1)) + '';
    Laya.timer.loop(dt, text, function () {
        text.value = ' ';
        if (index >= count) {
            Log.d('动画结束 ：' + index);
            Laya.timer.clearAll(text);
            text.value = newNum + '';
            Log.d('动画结束 ：text.value=' + text.value);
            text.destroyChildren();
            // panel.destroy();
            return;
        }
        var pos = { y: 0 };
        Laya.Tween.to(pos, {
            y: -text.height,
            update: Laya.Handler.create(text, function () {
                if (!first || !last) {
                    return;
                }
                //哪个是第一个
                first.y = pos.y;
                last.y = text.height + pos.y;
            }, null, false)
        }, dt, null, Laya.Handler.create(text, function () {
            if (index >= count) {
                return;
            }
            if (!nextText || !perText) {
                return;
            }
            //本次结束后，有一个文本框变到下面来
            if (nextText.y < perText.y) {
                first = nextText;
                last = perText;
            }
            else {
                last = nextText;
                first = perText;
            }
            last.value = first.value;
            // first.y = text.height;
            first.value = (lastNum + dx * (index + 1)) + '';
        }));
        index++;
    });
}
var SMALLKEYCOUNT = 12;
//显示小星星
function showSmallKeys(x, y) {
    //产生小星星
    for (var i = 0; i < SMALLKEYCOUNT; i++) {
    }
}
//# sourceMappingURL=AniUtils.js.map
var UiManager = /** @class */ (function () {
    function UiManager(app) {
        this.pageRoot = null;
        //所有页面
        this.gamePage = null;
        this.homePage = null;
        this.passPage = null;
        //弹窗提示
        this.toast = null;
        this.model = null;
        this.bgImgs = [
            'comp/bg0.jpg',
            'bg/bg1.jpg',
            'bg/bg2.jpg',
            'bg/bg3.jpg',
            'bg/bg4.jpg',
            'bg/bg5.jpg',
            'bg/bg6.jpg',
            'bg/bg7.jpg',
            'bg/bg8.jpg',
        ];
        this.bgIndex = 0;
        this.hasLoadBtnAni = false;
        //提示按钮位置
        this.btnAni = null;
        this.app = app;
        app.uiManager = this;
        this.pageRoot = Index.pageRoot;
    }
    UiManager.getSelf = function (app) {
        if (!UiManager.self) {
            UiManager.self = new UiManager(app ? app : Index.getApp());
        }
        UiManager.self.pageRoot = Index.pageRoot;
        return UiManager.self;
    };
    /**
     * 切换背景
     *
     * @memberof UiManager
     */
    UiManager.prototype.changeBg = function () {
        this.pageRoot.changeBg(this.bgImgs[++this.bgIndex % this.bgImgs.length]);
    };
    /**
     * 显示toast
     *
     * @param {string} msg
     * @param {number} [time]
     * @memberof UiManager
     */
    UiManager.prototype.showToast = function (msg, time) {
        Toast.toast(msg, time);
    };
    UiManager.prototype.clearToast = function () {
        if (Toast.getSelf()) {
            Toast.getSelf().clear();
        }
    };
    /**
     * 判断toast是否正在显示
     *
     * @returns {boolean}
     * @memberof UiManager
     */
    UiManager.prototype.isToastShowing = function () {
        if (Toast.getSelf()) {
            return Toast.getSelf().isShowIng;
        }
        return false;
    };
    /**
     * 显示弹窗提示
     *
     * @param {*} data
     * @memberof UiManager
     */
    UiManager.prototype.showModal = function (data) {
        this.hideLoading();
        Model.getSelf().setData(data).popup();
    };
    /**
* 场景切换
* @param page
* @param noAni  是否显示过场动画
*/
    UiManager.prototype.gotoPage = function (page, noAni) {
        Log.d('gotoPage  name=' + page.name);
        this.pageRoot.gotoPage(page, noAni);
    };
    /**
     * 关闭页面
     * @param page
     * @param noAni  是否显示过场动画
     */
    UiManager.prototype.closePage = function (page, noAni) {
        this.pageRoot.closePage(page, noAni);
    };
    /**
     * 当前页面上添加一个页面
     * @param page
     * @param noAni
     */
    UiManager.prototype.addPage = function (page, noAni) {
        this.pageRoot.addPage(page, noAni);
    };
    /**
  * 返回首页
  */
    UiManager.prototype.goHome = function () {
        //移除所有界面
        this.pageRoot.goHome();
    };
    /**
     * 提示用户点击的位置
     * @param x 全局坐标
     * @param y 全局坐标
     * @param endHide  是否循环播放,默认是循环播放的
     */
    UiManager.prototype.showBtnAni = function (x, y, endHide, father) {
        if (this.hasLoadBtnAni) {
            this.showAniBtn(x, y, endHide, father ? father : Laya.stage);
        }
        else {
            Laya.loader.load('res/atlas/BtnAni.atlas', Laya.Handler.create(this, this.showAniBtn, [x, y, endHide, father ? father : Laya.stage]), null, Laya.Loader.ATLAS);
        }
    };
    /**
     * 显示或隐藏顶部状态
     * @param flag
     */
    UiManager.prototype.showOrHideTop = function (flag) {
        var thiz = UiManager.getSelf();
        if (thiz.pageRoot.layoutTop.visible == flag)
            return;
        Laya.Tween.clearAll(thiz.pageRoot.layoutTop);
        thiz.pageRoot.layoutTop.visible = true;
        // thiz.pageRoot.layoutTop.alpha = flag ? 0 : 1;
        Laya.Tween.to(thiz.pageRoot.layoutTop, {
            // alpha: flag ? 1 : 0,
            y: flag ? thiz.pageRoot.GuideFixOffset : (thiz.pageRoot.GuideFixOffset - thiz.pageRoot.height)
        }, 500, flag ? Laya.Ease.bounceIn : Laya.Ease.bounceOut, Laya.Handler.create(thiz.pageRoot.layoutTop, function () {
            thiz.pageRoot.layoutTop.visible = flag;
        }));
    };
    /**
     * 隐藏提示按钮
     *
     * @param destory  是否销毁
     *
     * @memberof UiManager
     */
    UiManager.prototype.hideBtnAni = function (destory) {
        if (this.btnAni) {
            this.btnAni.stop();
            this.btnAni.visible = false;
            if (destory) {
                //销毁，并清掉资源
                this.btnAni.destroy();
                this.btnAni = null;
                Laya.loader.clearRes('res/atlas/BtnAni.atlas');
                this.hasLoadBtnAni = false;
            }
        }
    };
    UiManager.prototype.showAniBtn = function (x, y, endHide, father) {
        this.hasLoadBtnAni = true;
        var thiz = UiManager.getSelf();
        if (this.btnAni) {
            this.btnAni.pos(x, y);
            this.btnAni.visible = true;
            thiz.btnAni.play(0, !endHide);
            if (father) {
                father.addChild(thiz.btnAni);
            }
            else {
                Laya.stage.addChild(thiz.btnAni);
            }
        }
        else {
            this.btnAni = new Laya.Animation();
            this.btnAni.loadAnimation('ani/btnAni.ani');
            thiz.btnAni.scale(0.5, 0.5);
            thiz.btnAni.pos(x, y);
            thiz.btnAni.play(0, !endHide);
            if (father) {
                father.addChild(thiz.btnAni);
            }
            else {
                Laya.stage.addChild(thiz.btnAni);
            }
        }
    };
    /**
     * 显示体力值
     * @param power
     */
    UiManager.prototype.setPowerNum = function (power) {
        if (this.pageRoot) {
            this.pageRoot.setPowerNum(power);
        }
    };
    /**
     * 使用体力
     *
     * @param {Function} callBack
     * @param {number} [num]
     * @memberof UiManager
     */
    UiManager.prototype.usePower = function (callBack, num) {
        var powers = num ? num : 1;
        if (this.app && this.app.userData.power >= powers) {
            this.app.userData.power -= powers;
            this.setPowerNum(this.app.userData.power);
            this.showToast('消耗' + powers + '体力');
            callBack(1);
        }
        else {
            this.showToast('体力值不够');
            callBack(-1);
        }
        /* if (this.homePage) {
             this.homePage.setPowerView();
         }*/
    };
    UiManager.prototype.showLoading = function (data) {
        wx.showLoading({
            title: data ? data.title ? data.title : "加载中..." : '加载中...',
            icon: data ? data.icon ? data.icon : "none" : "none",
            mask: data ? (data.mask ? data.mask : true) : true
        });
    };
    UiManager.prototype.hideLoading = function () {
        wx.hideLoading();
    };
    /**
     * 获取页面可用高度
     *
     * @returns {number}
     * @memberof UiManager
     */
    UiManager.prototype.getPageHeight = function () {
        return this.pageRoot.getPageHeight();
    };
    /**
     * 获取顶部可用距离
     */
    UiManager.prototype.getTopOffset = function () {
        return this.pageRoot.getTopOffset();
    };
    /**
 * 获取刘海距离
 *
 * @returns {number}
 * @memberof UiManager
 */
    UiManager.prototype.getFixOffset = function () {
        return this.pageRoot.GuideFixOffset;
    };
    UiManager.self = null;
    return UiManager;
}());
//# sourceMappingURL=UIManager.js.map
var APPNAME = 'XiaoXiaoXiao';
var VERSION = '1.0.0';
var APP_ID = "dURtecOkcYIc6MyqpGCJBS2P-gzGzoHsz";
var APP_KEY = "pJvDPlOJxnTDmgPj90ic50Oy";
var SCREEN_WIDTH = 768;
var SCREEN_HEIGHT = 1440;
var DEBUG = true;
var BGCOLOR = '#5dcfd4';
var isWX = true;
/**提审日期 */
var examineTime = new Date('2019-05-25').getTime();
//是否开启震动
var isNoVirbate = true;
var BLOCKSIZE = 80;
var ROW = 14;
var COL = 8;
var BLOCK_STATE = {
    NONE: -1,
    EMPTY: 0,
    KEYUNABLE: 1,
    MOVER: 2,
    STATIC: 3,
    BLOCKACT: 4,
    KEY: 5,
};
var MOVE_ARROW = {
    NONE: 0,
    LEFT: 1,
    RIGHT: 2,
    UP: 3,
    DOWN: 4 //90
};
var MOVE_ROATION = {
    NONE: 0,
    LEFT: 0,
    RIGHT: 180,
    UP: 60,
    DOWN: -60 //90
};
var QUESTION_CLASS = "Question";
// 分享源
var ShareType = {
    HOME: 1,
    MENU: 9,
    FIGHT: 6,
    GROUP: 4,
    CARD: 2,
    BONUS: 5,
    HELP: 7,
    SOLVE: 8,
    SHOWTIP: 10 //分享到群看提示
};
var LOCAL_SHARE = "https://www.webuzz.com.cn/game/image/share.jpg";
/**
 * 格子状态
 */
var BOXSTATE = {
    NONE: -1,
    EMPTY: 1,
    START: 0,
};
/**页面切换动画时间 */
var PAGE_CHANGE_DURATION = 500;
/**是否震动 */
var ISVIBRATE = 'vibrate';
var isNoVirbate = false;
/**是否静音 */
var ISMUTE = 'mute';
var isMute = false;
/**背景是否静音 */
var ISMUTEBGM = 'muteBgm';
var isMuteBgm = false;
/**背景音乐 */
var bgms = [
    {
        "name": "货郎",
        "url": BGLOCALMUSICPATH,
        "author": "俄罗斯民歌"
    }
];
/**本地缓存 UserData */
var USERDATA = 'userData';
//体力值，每天登录送5点，每过一关减少1点
var COIN = 'coin';
//经验值，不会减少
var EXPERIENCE = 'experience';
var NICKNAME = 'nickName';
var AVATARURL = 'nickName';
var shareCount = 0;
var SHARECOUNT = 'shareCount';
var SCORE = 'level';
var OPENVIDEOCOUNT = 'openVideoCount';
/**打开视频次数 */
var openVideoCount = 0;
var FINISHVIDEOCOUNT = 'finishVideoCount';
/**成功看完视频次数 */
var finishVideoCount = 0;
var canShowVideo = true;
var bannerError = false;
var USER = 'user';
var IFSHOWBONUS = 'ifShowBounus';
var openId = null;
var OPENID = 'openId';
var USERID = 'userId';
var SCORE_KEY = "maxLevel";
var ACTIVITY = 'activity';
/**同步时的setting */
var SETTING_VERSION_KEY = "settgin_version";
/**分享过的群id */
var OPENGIDS = 'openGIds_';
/**提示方式  */
var TIP_MODE = {
    SHARE: 'share',
    VEDIO: 'vedio'
};
/**是否是新用户 */
var ifNewuser = false;
/**今日看完视频次数 */
var TODAYDATA = 'todayData';
//今天的数据
var todayData = {
    date: formatDate(new Date, 'yyyy-MM-dd'),
    video: 0,
    ifGift: false,
    hasGivePower: false
};
var YTMFDW = "https://www.ytmfdw.com/";
var CDN = 'https://cdn.ytmfdw.com/';
var WXINFOPATH = YTMFDW + 'game/';
var GAME_STATE = {
    NONE: -1,
    PLAYING: 0,
    PAUSE: 1,
    GAMEOVER: 2
};
//游戏状态
var gameState = GAME_STATE.NONE;
//说明文字颜色
var TEXTCOLOR = '#ececec';
//按钮字体颜色
var BUTTONTEXTCOLOR = '#fdfdfd';
//对话框标题颜色 
var TEXTTITLECOLOR = '#C4AD8E';
//适配刘海屏
var iPhoneX = 52;
//云端控制 ================  test Git
var doubleGroupMsg = '短时间内，不能分享到相同的群哦！请分享到其他群吧！';
var tipShareMsg = '请分享到微信群，才能获得提示哦！';
var onShowTipShareMsg = '1.请去群里点击自己分享的链接，可获得提示！\n2.若尚未分享到群，请先分享到群！';
var onShowBounsShareMsg = '1.请去群里点击自己分享的链接，可获得奖励！\n2.若尚未分享到群，请先分享到群！';
var bounsShareMsg = '请分享到微信群，才能获得奖励哦！';
var BANNERS = [
    'adunit-2c1aea2cd1fc580e'
];
/**video */
var VIDEOS = [
    'adunit-12ca3579f78d92a3'
];
var ifShowBonus = true;
var ifAldShare = false;
var ifShowApps = false;
var ifActivity = false;
//最大体力
var maxPower = 10;
//每日赠送体力
var givePoser = 5;
var loopTime = 5 * 60 * 1000;
var loopPower = 1;
//每局消耗一体力
var eachPower = 1;
var gamePowerTip = '洪荒之力已使用完，是否消耗' + eachPower + '继续解题？';
//体力不足提示语
var powerNotEnough = '体力不足，看下视频，休息下，补充下体力？';
//题目最长不能超过20个字
var maxQuestionLen = 20;
var minQuestionLen = 4;
var maxQuestionTipLen = 40;
var minQuestionTipLen = 4;
//# sourceMappingURL=AppConfig.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var dialog;
    (function (dialog) {
        var modelUI = /** @class */ (function (_super) {
            __extends(modelUI, _super);
            function modelUI() {
                return _super.call(this) || this;
            }
            modelUI.prototype.createChildren = function () {
                View.regComponent("script.ImageRunTime", script.ImageRunTime);
                _super.prototype.createChildren.call(this);
                this.createView(ui.dialog.modelUI.uiView);
            };
            modelUI.uiView = { "type": "View", "props": { "width": 768, "height": 1660 }, "child": [{ "type": "Sprite", "props": { "y": 0, "x": 0, "width": 768, "var": "bgMask", "height": 1660 } }, { "type": "Sprite", "props": { "y": 500, "x": 67.5, "width": 633, "var": "contentLayout", "skin": "root/btn_skyBlue.png", "height": 450, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "var": "titleLayout", "skin": "root/general_win_banner.png" }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "width": 633, "var": "textTitle", "valign": "middle", "text": "温馨提示", "strokeColor": "#ffffff", "stroke": 5, "height": 72, "fontSize": 30, "font": "Microsoft YaHei", "color": "#f00", "bold": true, "align": "center" } }] }, { "type": "Image", "props": { "y": 71, "x": -3, "width": 639, "var": "middleLayout", "skin": "root/win_bg_middle.png", "height": 290 } }, { "type": "Image", "props": { "y": 360, "x": -3, "var": "bottomLalyout", "skin": "root/win_bg_bottom.png" } }, { "type": "Label", "props": { "y": 95, "x": 40, "wordWrap": true, "width": 550, "var": "textMsg", "valign": "middle", "text": "这是消息内容", "leading": 10, "height": 200, "fontSize": 20, "font": "SimHei", "color": "#355584", "bold": true, "align": "left" } }, { "type": "Image", "props": { "y": 34, "x": 599, "width": 60, "var": "btnClose", "skin": "root/champion_video_close_btn.png", "runtime": "script.ImageRunTime", "height": 60, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 370, "x": 172, "width": 230, "var": "btnCenter", "skin": "root/less_green_btn.png", "runtime": "script.ImageRunTime", "label": "label", "height": 97, "anchorY": 0.5, "anchorX": 0.5, "sizeGrid": "0,60,0,60" }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "width": 230, "var": "textCenter", "valign": "middle", "text": "确定", "height": 97, "fontSize": 35, "color": "#fdfdfd", "align": "center" } }] }, { "type": "Image", "props": { "y": 370, "x": 462, "width": 230, "var": "btnCancel", "skin": "root/green_btn.png", "runtime": "script.ImageRunTime", "label": "label", "height": 97, "anchorY": 0.5, "anchorX": 0.5, "sizeGrid": "0,60,0,60" }, "child": [{ "type": "Label", "props": { "y": 0, "x": 0, "width": 230, "var": "textCancel", "valign": "middle", "text": "取消", "height": 97, "fontSize": 35, "color": "#fdfdfd", "align": "center" } }] }, { "type": "Image", "props": { "y": 85, "x": 6, "skin": "root/win_bg_left_corner.png" } }, { "type": "Image", "props": { "y": 85, "x": 345, "skin": "root/win_bg_right_corner.png" } }] }] };
            return modelUI;
        }(View));
        dialog.modelUI = modelUI;
    })(dialog = ui.dialog || (ui.dialog = {}));
})(ui || (ui = {}));
(function (ui) {
    var dialog;
    (function (dialog) {
        var toastUI = /** @class */ (function (_super) {
            __extends(toastUI, _super);
            function toastUI() {
                return _super.call(this) || this;
            }
            toastUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.dialog.toastUI.uiView);
            };
            toastUI.uiView = { "type": "View", "props": { "width": 490, "height": 77 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 245, "width": 490, "skin": "root/toast_bg9.png", "height": 77, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 0, "x": 0, "width": 490, "var": "textMsg", "valign": "middle", "text": "提示内容", "height": 77, "fontSize": 25, "color": "#ececec", "align": "center" } }] };
            return toastUI;
        }(View));
        dialog.toastUI = toastUI;
    })(dialog = ui.dialog || (ui.dialog = {}));
})(ui || (ui = {}));
(function (ui) {
    var page;
    (function (page) {
        var GamePageUI = /** @class */ (function (_super) {
            __extends(GamePageUI, _super);
            function GamePageUI() {
                return _super.call(this) || this;
            }
            GamePageUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.page.GamePageUI.uiView);
            };
            GamePageUI.uiView = { "type": "View", "props": { "width": 720, "name": "gamePage", "height": 1440 } };
            return GamePageUI;
        }(View));
        page.GamePageUI = GamePageUI;
    })(page = ui.page || (ui.page = {}));
})(ui || (ui = {}));
(function (ui) {
    var page;
    (function (page) {
        var HomePageUI = /** @class */ (function (_super) {
            __extends(HomePageUI, _super);
            function HomePageUI() {
                return _super.call(this) || this;
            }
            HomePageUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.page.HomePageUI.uiView);
            };
            HomePageUI.uiView = { "type": "View", "props": { "width": 768, "name": "homePage", "height": 1360 }, "child": [{ "type": "Sprite", "props": { "y": 311, "x": 0, "width": 768, "var": "bottomLayout", "height": 1050 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 768, "skin": "comp/home.png", "height": 1050 } }, { "type": "Image", "props": { "y": -236, "x": 19, "var": "yun1", "skin": "comp/img_yun1.png" } }, { "type": "Image", "props": { "y": -35, "x": 406, "var": "yun2", "skin": "comp/img_yun2.png" } }, { "type": "Image", "props": { "y": 83, "x": 15, "var": "yun3", "skin": "comp/img_yun3.png" } }, { "type": "Image", "props": { "y": 510, "x": 324, "var": "fengzheng", "skin": "comp/img_fengzheng.png", "anchorY": 1, "anchorX": 1 } }, { "type": "Image", "props": { "y": 684, "x": 378, "width": 300, "var": "btnStart", "skin": "root/less_green_btn.png", "height": 97, "anchorY": 0.5, "anchorX": 0.5, "sizeGrid": "0,60,0,60" }, "child": [{ "type": "Label", "props": { "width": 300, "valign": "middle", "text": "开始游戏", "strokeColor": "#17c5b7", "stroke": 5, "height": 97, "fontSize": 45, "font": "SimHei", "color": "#ffffff", "bold": true, "align": "center" } }] }] }] };
            return HomePageUI;
        }(View));
        page.HomePageUI = HomePageUI;
    })(page = ui.page || (ui.page = {}));
})(ui || (ui = {}));
(function (ui) {
    var page;
    (function (page) {
        var LoadingUI = /** @class */ (function (_super) {
            __extends(LoadingUI, _super);
            function LoadingUI() {
                return _super.call(this) || this;
            }
            LoadingUI.prototype.createChildren = function () {
                View.regComponent("ui.view.ProgressViewUI", ui.view.ProgressViewUI);
                _super.prototype.createChildren.call(this);
                this.createView(ui.page.LoadingUI.uiView);
            };
            LoadingUI.uiView = { "type": "View", "props": { "width": 768, "name": "loadPage", "height": 1660 }, "child": [{ "type": "Label", "props": { "y": 200, "x": 360, "var": "jokeTitle", "text": "消消消消消消", "skin": "root/title.png", "fontSize": 45, "color": "#ffffff", "bold": true, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Label", "props": { "y": 583, "x": 384, "wordWrap": true, "width": 700, "var": "textJoke", "leading": 20, "height": 621, "fontSize": 28, "color": "#C4AD8E", "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Sprite", "props": { "y": 918, "x": 64, "width": 640, "var": "loadLayout", "height": 200 }, "child": [{ "type": "Label", "props": { "y": 92, "x": 0, "width": 640, "var": "loadText", "valign": "middle", "text": "玩命加载中...", "height": 50, "fontSize": 25, "font": "Microsoft YaHei", "color": "#9c9999", "align": "center" } }, { "type": "ProgressView", "props": { "y": 155, "x": 0, "var": "progressView", "runtime": "ui.view.ProgressViewUI" } }] }] };
            return LoadingUI;
        }(View));
        page.LoadingUI = LoadingUI;
    })(page = ui.page || (ui.page = {}));
})(ui || (ui = {}));
(function (ui) {
    var page;
    (function (page) {
        var PassPageUI = /** @class */ (function (_super) {
            __extends(PassPageUI, _super);
            function PassPageUI() {
                return _super.call(this) || this;
            }
            PassPageUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.page.PassPageUI.uiView);
            };
            PassPageUI.uiView = { "type": "View", "props": { "width": 720, "name": "passPage", "height": 1280 } };
            return PassPageUI;
        }(View));
        page.PassPageUI = PassPageUI;
    })(page = ui.page || (ui.page = {}));
})(ui || (ui = {}));
(function (ui) {
    var page;
    (function (page) {
        var RootPageUI = /** @class */ (function (_super) {
            __extends(RootPageUI, _super);
            function RootPageUI() {
                return _super.call(this) || this;
            }
            RootPageUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.page.RootPageUI.uiView);
            };
            RootPageUI.uiView = { "type": "View", "props": { "width": 768, "name": "rootPage", "height": 1660 }, "child": [{ "type": "Image", "props": { "y": 0, "x": 0, "width": 768, "var": "nextImgBg", "height": 1660, "alpha": 0 } }, { "type": "Image", "props": { "y": 0, "x": 0, "width": 768, "var": "imgBg", "skin": "root/bg.png", "height": 1660 } }, { "type": "Sprite", "props": { "y": 0, "x": 0, "width": 768, "var": "pageLayout", "height": 1660 } }, { "type": "Sprite", "props": { "y": 0, "x": 0, "width": 768, "visible": false, "var": "layoutTop", "height": 130 } }] };
            return RootPageUI;
        }(View));
        page.RootPageUI = RootPageUI;
    })(page = ui.page || (ui.page = {}));
})(ui || (ui = {}));
(function (ui) {
    var view;
    (function (view) {
        var ProgressViewUI = /** @class */ (function (_super) {
            __extends(ProgressViewUI, _super);
            function ProgressViewUI() {
                return _super.call(this) || this;
            }
            ProgressViewUI.prototype.createChildren = function () {
                _super.prototype.createChildren.call(this);
                this.createView(ui.view.ProgressViewUI.uiView);
            };
            ProgressViewUI.uiView = { "type": "View", "props": { "width": 600, "height": 60 }, "child": [{ "type": "Panel", "props": { "y": 30, "x": 300, "width": 600, "height": 60, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 31, "x": 300, "width": 583, "var": "progressBg", "value": 0, "skin": "root/loginProgressBase.png", "height": 58, "anchorY": 0.5, "anchorX": 0.5 } }, { "type": "Image", "props": { "y": 31, "x": 300, "width": 583, "var": "progressBar", "skin": "root/loginProgress.png", "height": 58, "anchorY": 0.5, "anchorX": 0.5 }, "child": [{ "type": "Image", "props": { "y": 29, "x": -292, "width": 583, "var": "progressMask", "skin": "root/loginProgress.png", "renderType": "mask", "height": 58, "anchorY": 0.5, "anchorX": 0.5 } }] }, { "type": "Image", "props": { "y": 31, "x": 300, "width": 583, "value": 0, "skin": "root/loginProgressGlass.png", "height": 58, "anchorY": 0.5, "anchorX": 0.5 } }] }] };
            return ProgressViewUI;
        }(View));
        view.ProgressViewUI = ProgressViewUI;
    })(view = ui.view || (ui.view = {}));
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var GamePage = /** @class */ (function (_super) {
    __extends(GamePage, _super);
    function GamePage(app) {
        var _this = _super.call(this) || this;
        _this.app = null;
        _this.app = app;
        _this.height = Index.screenH - UiManager.getSelf().getFixOffset();
        _this.y = UiManager.getSelf().getFixOffset();
        _this.app.uiManager.gamePage = _this;
        return _this;
    }
    GamePage.prototype.hasRemoved = function () {
        //移除
        UiManager.getSelf().hideBtnAni();
    };
    GamePage.prototype.homeClick = function (e) {
        e.stopPropagation();
        // if (this.hasFinish) return;
        this.app.uiManager.goHome();
    };
    GamePage.getSelf = function (app) {
        if (!GamePage.self) {
            GamePage.self = new GamePage(app);
        }
        return GamePage.self;
    };
    /**
     * 根据题目索引加载题目
     * @param index
     */
    GamePage.prototype.initGameByIndex = function (index) {
        //先隐藏顶部状态
        UiManager.getSelf().showOrHideTop(false);
    };
    GamePage.prototype.initGame = function () {
    };
    /**
     * 结束
     *
     * @private
     * @param {number} arr 方向
     * @param {boolean} isSuccess 是否成功
     * @memberof TestPage
     */
    GamePage.prototype.showOver = function () {
    };
    GamePage.prototype.showNext = function (img, pos) {
    };
    GamePage.self = null;
    return GamePage;
}(ui.page.GamePageUI));
//# sourceMappingURL=GamePage.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var HomePage = /** @class */ (function (_super) {
    __extends(HomePage, _super);
    function HomePage(app) {
        var _this = _super.call(this) || this;
        _this.app = null;
        _this.lightAni = null;
        _this.app = app;
        _this.height = _this.app.uiManager.getPageHeight();
        _this.y = UiManager.getSelf().getTopOffset();
        _this.app.uiManager.homePage = _this;
        _this.bottomLayout.y = _this.height - _this.bottomLayout.height;
        _this.btnStart.on(Laya.Event.CLICK, _this, _this.startGame);
        return _this;
    }
    HomePage.prototype.startGame = function (e) {
        e.stopPropagation();
        var thiz = this;
        /*  UiManager.getSelf().usePower(function (state) {
              if (state > 0) {
                  UiManager.getSelf().gotoPage(GamePage.getSelf(thiz.app));
                  GamePage.getSelf(thiz.app).initGameByIndex(app.userData.level);
              }
          }, eachPower);*/
        UiManager.getSelf().gotoPage(GamePage.getSelf(thiz.app));
        GamePage.getSelf(thiz.app).initGameByIndex(0);
        // StompUtils.getSelf().setUser(thiz.app.userId).connect();
    };
    HomePage.getSelf = function (app) {
        if (!HomePage.self) {
            HomePage.self = new HomePage(app);
        }
        return HomePage.self;
    };
    HomePage.self = null;
    return HomePage;
}(ui.page.HomePageUI));
//# sourceMappingURL=HomePage.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LoadPage = /** @class */ (function (_super) {
    __extends(LoadPage, _super);
    function LoadPage( /*app: App*/) {
        var _this = _super.call(this) || this;
        _this.subpackage = [
            'res', 'comp'
        ];
        _this.stateFlag = [];
        _this.subLen = 4;
        //加载索引值
        _this.loadIndex = 0;
        _this.min = 0;
        _this.max = 100;
        //总共移动距离：460  当前位置
        _this.progress = 0;
        //笑话
        _this.joke = '';
        _this.callBack = null;
        _this.totalProgress = [0, 0, 0];
        // this.app = app;
        _this.subLen = _this.subpackage.length;
        for (var i = 0; i < _this.subLen; i++) {
            _this.stateFlag.push(false);
        }
        Laya.timer.loop(3000, _this, _this.jokeTitleAni);
        _this.height = Index.screenH;
        //距离底部100
        _this.loadLayout.y = _this.height - _this.loadLayout.height - 100;
        return _this;
    }
    LoadPage.prototype.jokeTitleAni = function () {
        Log.d('jokeTitleAni  ===========');
        // sharkAniLeftRight(this.jokeTitle, this.jokeTitle);
    };
    LoadPage.getSelf = function ( /*app: App*/) {
        if (!LoadPage.self) {
            LoadPage.self = new LoadPage( /*app*/);
        }
        return LoadPage.self;
    };
    LoadPage.prototype.loadRes = function (callBack) {
        this.textJoke.text = this.joke;
        this.callBack = callBack;
        this.setProgress(0);
        var thiz = this;
        thiz.loadIndex = 0;
        var isSuccess = true;
        if (this.subLen == 0) {
            thiz.onCompelete(isSuccess);
            return;
        }
        var _loop_1 = function (i) {
            if (thiz.stateFlag[i]) {
                thiz.loadIndex++;
                // thiz.loadProgress.value = thiz.loadIndex / thiz.subLen;
                // thiz.loadText.text = '正在玩命加载...' + thiz.loadIndex + '/' + thiz.subLen;
                if (thiz.loadIndex == thiz.subLen) {
                    thiz.onCompelete(isSuccess);
                }
                return "continue";
            }
            var loadTask = wx.loadSubpackage({
                name: this_1.subpackage[i],
                success: function (res) {
                    // 分包加载成功后通过 success 回调
                    Log.d(res);
                    thiz.stateFlag[i] = true;
                },
                fail: function (res) {
                    // 分包加载失败通过 fail 回调
                    isSuccess = false;
                    thiz.stateFlag[i] = false;
                },
                complete: function () {
                    thiz.loadIndex++;
                    // thiz.loadProgress.value = thiz.loadIndex / thiz.subLen;
                    if (thiz.loadIndex == thiz.subLen) {
                        // Laya.timer.once(2000, thiz, thiz.onCompelete, [true]);
                        thiz.onCompelete(isSuccess);
                    }
                }
            });
            loadTask.onProgressUpdate(function (res) {
                Log.d('下载进度  i=>' + i, res.progress);
                Log.d('已经下载的数据长度', res.totalBytesWritten);
                Log.d('预期需要下载的数据总长度', res.totalBytesExpectedToWrite);
                thiz.totalProgress[i] = res.totalBytesWritten / res.totalBytesExpectedToWrite * 100;
                var per = (thiz.totalProgress[0] + thiz.totalProgress[1] + thiz.totalProgress[2]) / 300;
                // thiz.loadProgress.value = (thiz.totalProgress[0] + thiz.totalProgress[1] + thiz.totalProgress[2]) / 300;
                thiz.setProgress(per * 100);
            });
        };
        var this_1 = this;
        //加载分包
        for (var i = 0; i < this.subLen; i++) {
            _loop_1(i);
        }
    };
    LoadPage.prototype.setProgress = function (progress, min, max) {
        if (!isNaN(min)) {
            this.min = min;
        }
        if (!isNaN(max)) {
            this.max = max;
        }
        this.progress = progress;
        //根据百分比，计算应该移动的距离 
        //该移动的距离 
        var per = this.progress / (this.max - this.min) * this.progressView.progressBar.width;
        var moveX = -this.progressView.progressBar.width / 2 + per;
        //计算mask的位置
        // var maskX = this.progressBar.width * 3 / 2 - per;
        this.progressView.progressMask.x = moveX;
        // this.progressBar.x = moveX;
        this.loadText.text = '正在玩命加载...' + Math.round(progress) + '%';
    };
    /**
     * 加载结束
     *
     * @private
     * @memberof LoadPage
     */
    LoadPage.prototype.onCompelete = function (flag) {
        if (this.callBack) {
            this.callBack(flag);
        }
    };
    // private app: App = null;
    LoadPage.self = null;
    return LoadPage;
}(ui.page.LoadingUI));
//# sourceMappingURL=LoadPage.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PassPage = /** @class */ (function (_super) {
    __extends(PassPage, _super);
    function PassPage(app) {
        var _this = _super.call(this) || this;
        _this.app = null;
        _this.data = null;
        _this.index = 0;
        _this.keyImg = null;
        _this.app = app;
        UiManager.getSelf(app).passPage = _this;
        _this.height = _this.app.uiManager.getPageHeight();
        _this.y = UiManager.getSelf().getTopOffset();
        // this.btnHome.on(Laya.Event.CLICK, this, this.closeHome);
        // this.btnNext.on(Laya.Event.CLICK, this, this.goNext);
        // this.btnShare.on(Laya.Event.CLICK, this, this.clickShare);
        _this.on(Laya.Event.ADDED, _this, _this.hasAdded);
        _this.on(Laya.Event.REMOVED, _this, _this.hasRemoved);
        return _this;
    }
    PassPage.prototype.hasAdded = function () {
        //添加到舞台
        Log.d("添加到舞台");
        var thiz = this;
    };
    PassPage.prototype.hasRemoved = function () {
        //移除
        Log.d("移出舞台");
        Laya.timer.clearAll(this);
    };
    PassPage.prototype.closeHome = function (e) {
        e.stopPropagation();
        // if (this.hasFinish) return;
        this.app.uiManager.goHome();
    };
    PassPage.prototype.clickShare = function (e) {
        e.stopPropagation();
        // if (this.hasFinish) return;
        var query = "uid=" + this.app.userId + "&state=" + ShareType.FIGHT;
        shareToFriend(null, query);
    };
    PassPage.prototype.goNext = function (e) {
        e.stopPropagation();
        var thiz = this;
        /* UiManager.getSelf().usePower(function (state) {
             if (state > 0) {
                 UiManager.getSelf().gotoPage(GamePage.getSelf(thiz.app));
                 GamePage.getSelf(thiz.app).initGameByIndex(++thiz.index);
             }
         }, eachPower);*/
        UiManager.getSelf().gotoPage(GamePage.getSelf(thiz.app));
        GamePage.getSelf(thiz.app).initGameByIndex(++thiz.index);
    };
    PassPage.getSelf = function (app) {
        if (!PassPage.self) {
            PassPage.self = new PassPage(app ? app : Index.getApp());
        }
        return PassPage.self;
    };
    PassPage.prototype.setData = function (data) {
        var thiz = this;
        thiz.data = data;
        thiz.index = data.index;
        thiz.keyImg = data.img;
    };
    PassPage.self = null;
    return PassPage;
}(ui.page.PassPageUI));
//# sourceMappingURL=PassPage.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var script;
(function (script) {
    /*
    ImageRunTime逻辑类
    */
    var ImageRunTime = /** @class */ (function (_super) {
        __extends(ImageRunTime, _super);
        function ImageRunTime() {
            var _this = _super.call(this) || this;
            _this.scaleTime = 100;
            //设置组件的中心点
            _this.anchorX = _this.anchorY = 0.5;
            //添加鼠标按下事件侦听。按时时缩小按钮。
            _this.on(Laya.Event.MOUSE_DOWN, _this, _this.scaleSmal);
            //添加鼠标抬起事件侦听。抬起时还原按钮。
            _this.on(Laya.Event.MOUSE_UP, _this, _this.scaleBig);
            //添加鼠标离开事件侦听。离开时还原按钮。
            _this.on(Laya.Event.MOUSE_OUT, _this, _this.scaleBig);
            return _this;
        }
        ImageRunTime.prototype.scaleBig = function () {
            //变大还原的缓动效果
            Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, this.scaleTime);
        };
        ImageRunTime.prototype.scaleSmal = function () {
            //缩小至0.8的缓动效果
            Laya.Tween.to(this, { scaleX: 0.8, scaleY: 0.8 }, this.scaleTime);
        };
        return ImageRunTime;
    }(Laya.Image));
    script.ImageRunTime = ImageRunTime;
    /*
ImageRunTime逻辑类
*/
    var BtnRunTime = /** @class */ (function (_super) {
        __extends(BtnRunTime, _super);
        function BtnRunTime() {
            var _this = _super.call(this) || this;
            _this.scaleTime = 100;
            //设置组件的中心点
            _this.anchorX = _this.anchorY = 0.5;
            //添加鼠标按下事件侦听。按时时缩小按钮。
            _this.on(Laya.Event.MOUSE_DOWN, _this, _this.scaleSmal);
            //添加鼠标抬起事件侦听。抬起时还原按钮。
            _this.on(Laya.Event.MOUSE_UP, _this, _this.scaleBig);
            //添加鼠标离开事件侦听。离开时还原按钮。
            _this.on(Laya.Event.MOUSE_OUT, _this, _this.scaleBig);
            return _this;
        }
        BtnRunTime.prototype.scaleBig = function () {
            //变大还原的缓动效果
            Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, this.scaleTime);
        };
        BtnRunTime.prototype.scaleSmal = function () {
            //缩小至0.8的缓动效果
            Laya.Tween.to(this, { scaleX: 0.8, scaleY: 0.8 }, this.scaleTime);
        };
        return BtnRunTime;
    }(Laya.Button));
    script.BtnRunTime = BtnRunTime;
})(script || (script = {}));
//# sourceMappingURL=ImageRunTime.js.map
var WSURL = "wss://www.ytmfdw.com/ws/ws";
// const WSURL = "wss://wwenet.xyz/ws/";
// const WSURL = "ws://192.168.50.41:8080/ws";
//游戏大厅的ID
var DA_TIND_ID = "0";
var MSG_CONNECT = 1; //建立连接
var MSG_JOINROOM = 2; //加入房间
var MSG_LEAVEROOM = 3; //离开房间
var MSG_SPEAKTOUSER = 4; //对某人说
var MSG_SPEAKTOROOM = 5; //对整个房间说
var MSG_DATA = 6; //发送游戏数据
var MSG_DISCONNECT = 7; //断开连接
var ROOM_ID = "rid"; //房间ID
var ROOM_NAME = "rname"; //房间名称
var ROOM_IMG = "rimg"; //房间图片
var ROOMD_ATA = "rdata"; //房间属性，JSON对象
var USER_ID = "uid"; //用户id
var USER_NAME = "uname"; //用户名称
var USER_IMG = "uimg"; //用户头像
//断线重连间隔时间
var OFFLINE_RECONNECT_TIME = 5000;
//消息来自大厅
var MSG_FROM_DATING = 1;
var MSG_FROM_USER = 2;
var MSG_FROM_ROOM = 3;
var StompUtils = /** @class */ (function () {
    function StompUtils() {
        // private static WSURL = 'ws://192.168.50.41:8080/ws';
        this.dispatch = null;
        this.roomBook = null;
        this.dtBook = null;
        this.userBook = null;
        this.userId = null;
        this.userName = null;
        this.userImg = null;
        this.roomId = null;
        this.isReconnect = false;
        // socket是否连接
        this.socketConnected = false;
        // 待发送的消息队列
        this.messageQueue = [];
        // 是否断线重连
        this.reconnect = true;
        // 符合WebSocket定义的对象
        //  send: sendSocketMessage,
        //   close: close
        this.ws = {
            send: this.sendSocketMessage,
            close: function () { },
            onopen: this.onopen,
            onmessage: this.onmessage
        };
        this.dispatch = DispatchImpl.getSelf();
    }
    StompUtils.getSelf = function () {
        if (StompUtils.self == null) {
            StompUtils.self = new StompUtils();
            StompUtils.self.addWsListener();
        }
        return StompUtils.self;
    };
    /**
     * 设置用户数据
     *
     * @param {string} userId
     * @param {string} [userName]
     * @param {string} [userImg]
     * @memberof StompUtils
     */
    StompUtils.prototype.setUser = function (userId, userName, userImg) {
        this.userId = userId;
        this.userName = userName;
        this.userImg = userImg;
        return this;
    };
    StompUtils.prototype.setCallBack = function (callback) {
        this.dispatch = callback;
    };
    // 发送消息
    StompUtils.prototype.sendSocketMessage = function (msg) {
        // console.log(msg);
        // 如果socket已连接则发送消息
        if (StompUtils.getSelf().socketConnected) {
            wx.sendSocketMessage({
                data: msg
            });
        }
        else {
            // socket没有连接将消息放入队列中
            StompUtils.getSelf().messageQueue.push(msg);
        }
    };
    StompUtils.prototype.onopen = function (frame) {
        Log.d("onopen");
        Log.d(frame);
    };
    StompUtils.prototype.onmessage = function (data) {
        Log.d("onmessage");
        Log.d(data);
    };
    // 关闭连接
    StompUtils.prototype.disconnect = function () {
        var thiz = StompUtils.getSelf();
        thiz.roomId = null;
        //清掉断线重连定时器
        Laya.timer.clear(thiz, thiz.connect);
        thiz.stompClient.disconnect();
        if (thiz.socketConnected) {
            thiz.reconnect = false;
            wx.closeSocket();
        }
    };
    // 创建一个 WebSocket 连接
    StompUtils.prototype.connect = function () {
        StompUtils.getSelf().reconnect = true;
        wx.connectSocket({
            url: StompUtils.WSURL
        });
    };
    StompUtils.prototype.addWsListener = function () {
        var thiz = StompUtils.getSelf();
        // 监听 WebSocket 连接打开事件
        wx.onSocketOpen(function (frame) {
            Log.d("WebSocket 连接成功");
            thiz.socketConnected = true;
            //清掉断线重连定时器
            Laya.timer.clear(thiz, thiz.connect);
            thiz.addStompListener();
            thiz.ws.onopen(frame);
            // 连接成功后，将队列中的消息发送出去
            var queueLength = thiz.messageQueue.length;
            for (var i = 0; i < queueLength; i++) {
                var messageQueueElement = thiz.messageQueue.shift();
                wx.sendSocketMessage({
                    data: messageQueueElement
                });
            }
        });
        // 监听 WebSocket 接受到服务器的消息事件
        wx.onSocketMessage(function (res) {
            Log.d("onSocketMessage ======> ");
            Log.d(res);
            thiz.ws.onmessage(res);
        });
        // 监听 WebSocket 错误事件
        wx.onSocketError(function (res) {
            Log.d("WebSocket 错误事件");
            /* if (thiz.reconnect) {
                 thiz.connect();
             }*/
        });
        // 监听 WebSocket 连接关闭事件
        wx.onSocketClose(function (res) {
            Log.d("WebSocket 连接关闭");
            thiz.socketConnected = false;
            // 断线重连,每隔5秒重新连接一次
            if (thiz.reconnect) {
                thiz.isReconnect = true;
                thiz.connect();
                Laya.timer.loop(OFFLINE_RECONNECT_TIME, thiz, thiz.connect);
            }
            /*  while (thiz.reconnect && !thiz.socketConnected) {
                  thiz.connect();
              }*/
        });
    };
    StompUtils.prototype.addStompListener = function () {
        Log.d("addStompListener   ================>");
        var thiz = StompUtils.getSelf();
        if (thiz.stompClient == null) {
            thiz.stompClient = Stomp.over(thiz.ws);
        }
        // let userId = Index.getApp().userId;
        // let user = Index.getApp().user;
        var headers = {
            uid: thiz.userId,
        };
        // 游戏大厅订阅
        if (thiz.dtBook) {
            thiz.dtBook.unsubscribe();
            thiz.dtBook = null;
        }
        thiz.dtBook = thiz.stompClient.subscribe('/book/0', function (frame) {
            //游戏大厅过来的数据
            Log.d("游戏大厅来的数据：");
            Log.d(frame);
            if (thiz.dispatch && frame) {
                var content = frame.body;
                var msg = JSON.parse(content);
                Log.d("转换成消息：");
                Log.d(msg);
                Log.d(msg.data);
                switch (msg.type) {
                    case MSG_CONNECT:
                        {
                            //有用户连接上来了
                            Log.d("onConnect  ==>大厅有人加入");
                            thiz.dispatch.onConnect(MSG_FROM_DATING, msg);
                        }
                        break;
                    case MSG_JOINROOM:
                        {
                            //加入房间
                            // thiz.dispatch.onJoinRoom(msg);
                        }
                        break;
                    case MSG_LEAVEROOM:
                        {
                            //离开房间
                            // thiz.dispatch.onLeaveRoomMsg(msg);
                        }
                        break;
                    case MSG_SPEAKTOUSER:
                        {
                            //有人找我聊天
                            thiz.dispatch.onChatMsg(MSG_FROM_DATING, msg);
                        }
                        break;
                    case MSG_SPEAKTOROOM:
                        {
                            //房间聊天
                            thiz.dispatch.onChatRoomMsg(MSG_FROM_DATING, msg);
                        }
                        break;
                    case MSG_DATA:
                        {
                            //房间聊天
                            // thiz.dispatch.onDataMsg(msg);
                        }
                        break;
                    case MSG_DISCONNECT:
                        {
                            //房间聊天
                            thiz.dispatch.onDisconnect(MSG_FROM_DATING, msg);
                        }
                        break;
                }
            }
        });
        //我的消息订阅
        if (thiz.userBook) {
            thiz.userBook.unsubscribe();
            thiz.userBook = null;
        }
        thiz.userBook = thiz.stompClient.subscribe("/user/queue/notifications", function (frame) {
            Log.d("个人数据：");
            Log.d(frame);
            if (thiz.dispatch && frame) {
                var content = frame.body;
                var msg = JSON.parse(content);
                Log.d("转换成消息：");
                Log.d(msg);
                Log.d(msg.data);
                switch (msg.type) {
                    case MSG_CONNECT:
                        {
                            // if (thiz.socketConnected) return;
                            Log.d("onConnect  ==>自己连接成功");
                            //有用户连接上来了
                            if (thiz.isReconnect && thiz.roomId != null) {
                                thiz.joinRoom(headers.uid, thiz.roomId);
                            }
                            thiz.dispatch.onConnect(MSG_FROM_USER, msg);
                            thiz.isReconnect = false;
                        }
                        break;
                    case MSG_JOINROOM:
                        {
                            if (msg.state == 1) {
                                //有房间数据
                                //再订阅该房间的消息
                                thiz.roomId = msg.data.rid;
                                thiz.bookRoom(thiz.roomId);
                            }
                            thiz.dispatch.onJoinRoom(MSG_FROM_USER, msg);
                            //加入房间
                        }
                        break;
                    case MSG_LEAVEROOM:
                        {
                            //离开房间
                            thiz.dispatch.onLeaveRoomMsg(MSG_FROM_USER, msg);
                        }
                        break;
                    case MSG_SPEAKTOUSER:
                        {
                            //有人找我聊天
                            thiz.dispatch.onChatMsg(MSG_FROM_USER, msg);
                        }
                        break;
                    case MSG_SPEAKTOROOM:
                        {
                            //房间聊天
                            thiz.dispatch.onChatRoomMsg(MSG_FROM_USER, msg);
                        }
                        break;
                    case MSG_DATA:
                        {
                            //房间聊天
                            thiz.dispatch.onDataMsg(MSG_FROM_USER, msg);
                        }
                        break;
                    case MSG_DISCONNECT:
                        {
                            //房间聊天
                            thiz.dispatch.onDisconnect(MSG_FROM_USER, msg);
                        }
                        break;
                }
            }
        });
        thiz.stompClient.connect(headers, function (callback) {
            Log.d("connect ======== stompClient  callBack   ");
            var tx = thiz.stompClient.begin();
            thiz.stompClient.send("/app/connect", {}, JSON.stringify({
                'type': 1,
                'from': headers.uid,
                'data': JSON.stringify({ 'uname': thiz.userName, 'uimg': thiz.userImg })
            }));
            tx.commit();
        });
        //若使用STOMP 1.1 版本，默认开启了心跳检测机制（默认值都是10000ms）
        thiz.stompClient.heartbeat.outgoing = 30000;
        thiz.stompClient.heartbeat.incoming = 0; //客户端不从服务端接收心跳包
    };
    //加入房间   data.from  用户ID;   data.to 房间ID
    StompUtils.prototype.joinRoom = function (uid, rid, rName, rImg, data) {
        var thiz = StompUtils.getSelf();
        if (!thiz.socketConnected) {
            showToast({ title: "未连接" });
            return;
        }
        var msg = new Msg();
        msg.from = uid;
        msg.type = MSG_JOINROOM;
        msg.data = {
            rid: rid,
            rname: rName,
            rimg: rImg,
            rdata: data
        };
        var tx = thiz.stompClient.begin();
        thiz.stompClient.send("/app/joinRoom", {}, JSON.stringify(msg));
        tx.commit();
    };
    //发送游戏数据  data.from:userId,data.to:roomId,data.data:自定义数据
    StompUtils.prototype.sendData = function (rid, data, uid) {
        var thiz = StompUtils.getSelf();
        if (!thiz.socketConnected) {
            showToast({ title: "未连接" });
            return;
        }
        var msg = new Msg();
        msg.type = MSG_DATA;
        msg.from = uid;
        msg.to = rid;
        msg.data = data;
        var tx = thiz.stompClient.begin();
        thiz.stompClient.send("/app/sendData", {}, JSON.stringify(msg));
        tx.commit();
    };
    //单人聊天 data.from  用户ID;   data.to 另一个用户ID,   data.data 聊天内容，
    StompUtils.prototype.chatToUser = function (data) {
        var thiz = StompUtils.getSelf();
        if (!thiz.socketConnected) {
            showToast({ title: "未连接" });
            return;
        }
        var tx = thiz.stompClient.begin();
        data.type = MSG_SPEAKTOUSER;
        thiz.stompClient.send("/app/chatToUser", {}, JSON.stringify(data));
        tx.commit();
    };
    //房间聊天,data.from  用户ID;   data.to 房间ID,   data.data 聊天内容， Msg.to  "0"  表示游戏大厅，所有人都可以收得到
    StompUtils.prototype.chatToRoom = function (data) {
        var thiz = StompUtils.getSelf();
        if (!thiz.socketConnected) {
            showToast({ title: "未连接" });
            return;
        }
        data.type = MSG_SPEAKTOROOM;
        var tx = thiz.stompClient.begin();
        thiz.stompClient.send("/app/chatToRoom", {}, JSON.stringify(data));
        tx.commit();
    };
    //离开房间   data.from  用户ID;   data.to 房间ID
    StompUtils.prototype.leaveRoom = function (data) {
        var thiz = StompUtils.getSelf();
        if (!thiz.socketConnected) {
            showToast({ title: "未连接" });
            return;
        }
        thiz.roomId = null;
        data.type = MSG_LEAVEROOM;
        var tx = thiz.stompClient.begin();
        thiz.stompClient.send("/app/exitRoom", {}, JSON.stringify(data));
        tx.commit();
        //取消该房间的订阅
        if (thiz.roomBook) {
            thiz.roomBook.unsubscribe();
            thiz.roomBook = null;
        }
    };
    StompUtils.prototype.bookRoom = function (rid) {
        if (rid == null)
            return;
        var thiz = StompUtils.getSelf();
        //先取消订阅
        if (thiz.roomBook) {
            thiz.roomBook.unsubscribe();
            thiz.roomBook = null;
        }
        //已经订阅过了，就不再订阅
        // if (thiz.roomBook) return;
        thiz.roomBook = thiz.stompClient.subscribe("/book/" + rid, function (frame) {
            Log.d("房间来的数据：");
            Log.d(frame);
            if (thiz.dispatch && frame) {
                var content = frame.body;
                var msg = JSON.parse(content);
                Log.d("转换成消息：");
                Log.d(msg);
                Log.d(msg.data);
                switch (msg.type) {
                    case MSG_CONNECT:
                        {
                            //有用户连接上来了
                            Log.d("onConnect  ==>房间有人加入");
                            thiz.dispatch.onConnect(MSG_FROM_ROOM, msg);
                        }
                        break;
                    case MSG_JOINROOM:
                        {
                            //加入房间
                            thiz.dispatch.onJoinRoom(MSG_FROM_ROOM, msg);
                        }
                        break;
                    case MSG_LEAVEROOM:
                        {
                            //离开房间
                            thiz.dispatch.onLeaveRoomMsg(MSG_FROM_ROOM, msg);
                        }
                        break;
                    case MSG_SPEAKTOUSER:
                        {
                            //有人找我聊天
                            thiz.dispatch.onChatMsg(MSG_FROM_ROOM, msg);
                        }
                        break;
                    case MSG_SPEAKTOROOM:
                        {
                            //房间聊天
                            thiz.dispatch.onChatRoomMsg(MSG_FROM_ROOM, msg);
                        }
                        break;
                    case MSG_DATA:
                        {
                            //房间聊天
                            thiz.dispatch.onDataMsg(MSG_FROM_ROOM, msg);
                        }
                        break;
                    case MSG_DISCONNECT:
                        {
                            //房间聊天
                            thiz.dispatch.onDisconnect(MSG_FROM_ROOM, msg);
                        }
                        break;
                }
            }
        });
    };
    StompUtils.WSURL = WSURL;
    return StompUtils;
}());
var Msg = /** @class */ (function () {
    function Msg() {
        this.state = 1; //消息状态,默认是成功的
    }
    return Msg;
}());
/**
 * 消息分发
 *
 * @class DispatchMsg
 */
var DispatchMsg = /** @class */ (function () {
    function DispatchMsg() {
    }
    /**
     * 连接成功后，会得到游戏大厅的数据
     *
     * @memberof DispatchMsg
     */
    DispatchMsg.prototype.onConnect = function (msgFrom, data) { };
    /**
     * 得到广播数据，即游戏大厅信息
     *
     * @param {*} data
     * @memberof DispatchMsg
     */
    DispatchMsg.prototype.onBroadcast = function (msgFrom, data) { };
    /**
     * 有人加入了房间
     *
     * @param {Msg} data
     * @memberof DispatchMsg
     */
    DispatchMsg.prototype.onJoinRoom = function (msgFrom, data) { };
    /**
     * 收到单人聊天数据
     *
     * @param {Msg} data
     * @memberof DispatchMsg
     */
    DispatchMsg.prototype.onChatMsg = function (msgFrom, data) { };
    /**
     * 收到房间聊天数据
     *
     * @param {Msg} data
     * @memberof DispatchMsg
     */
    DispatchMsg.prototype.onChatRoomMsg = function (msgFrom, data) { };
    /**
     * 收到游戏数据
     *
     * @param {Msg} data
     * @memberof DispatchMsg
     */
    DispatchMsg.prototype.onDataMsg = function (msgFrom, data) { };
    /**
     * 有人离开房间信息
     *
     * @param {Msg} data
     * @memberof DispatchMsg
     */
    DispatchMsg.prototype.onLeaveRoomMsg = function (msgFrom, data) { };
    /**
     * 有人断开连接
     *
     * @param {Msg} data
     * @memberof DispatchMsg
     */
    DispatchMsg.prototype.onDisconnect = function (msgFrom, data) { };
    return DispatchMsg;
}());
//# sourceMappingURL=StompUtils.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var DispatchImpl = /** @class */ (function (_super) {
    __extends(DispatchImpl, _super);
    function DispatchImpl() {
        var _this = _super.call(this) || this;
        _this.roomId = null;
        //收到消息后下一步该做什么
        _this.nextStep = 0;
        //下一步操作的数据
        _this.nextStepData = null;
        return _this;
    }
    DispatchImpl.getSelf = function () {
        if (DispatchImpl.self == null) {
            DispatchImpl.self = new DispatchImpl();
        }
        return DispatchImpl.self;
    };
    /**
    * 连接成功后，会得到游戏大厅的数据
    *
    * @memberof DispatchMsg
    */
    DispatchImpl.prototype.onConnect = function (msgFrom, data) {
        Log.d("onConnect=======>");
        var thiz = DispatchImpl.getSelf();
        if (msgFrom == MSG_FROM_USER) {
            showToast({ title: "连接成功:" + data.data });
        }
        if (thiz.nextStep == MSG_JOINROOM && thiz.nextStepData != null) {
            StompUtils.getSelf().joinRoom(thiz.nextStepData.uid, thiz.nextStepData.rid);
            //把要操作的命令清掉
            thiz.nextStep = 0;
            thiz.nextStepData = null;
        }
    };
    /**
     * 得到广播数据，即游戏大厅信息
     *
     * @param {*} data
     * @memberof DispatchMsg
     */
    DispatchImpl.prototype.onBroadcast = function (msgFrom, data) {
        var thiz = DispatchImpl.getSelf();
        showToast({ title: "收到广播消息:" + data.data });
    };
    /**
     * 收到单人聊天数据
     *
     * @param {Msg} data
     * @memberof DispatchMsg
     */
    DispatchImpl.prototype.onJoinRoom = function (msgFrom, data) {
        var thiz = DispatchImpl.getSelf();
        showToast({ title: "有人加入了房间:" + data.data });
        if (data.state == 1) {
            //房间id
            DispatchImpl.getSelf().roomId = data.data.rid;
            //房间成员
            var users = data.data.users;
            //谁发的
            var from = data.from;
            Log.d('加入了房间：' + DispatchImpl.getSelf().roomId);
            Log.d(users);
            Log.d(from);
        }
        else {
            showToast({ title: data.data });
        }
    };
    /**
     * 收到单人聊天数据
     *
     * @param {Msg} data
     * @memberof DispatchMsg
     */
    DispatchImpl.prototype.onChatMsg = function (msgFrom, data) {
        var thiz = DispatchImpl.getSelf();
        showToast({ title: "收到单人聊天消息:" + data.data });
    };
    /**
     * 收到房间聊天数据
     *
     * @param {Msg} data
     * @memberof DispatchMsg
     */
    DispatchImpl.prototype.onChatRoomMsg = function (msgFrom, data) {
        var thiz = DispatchImpl.getSelf();
        showToast({ title: "收到房间聊天消息:" + data.data });
    };
    /**
     * 收到游戏数据
     *
     * @param {Msg} data
     * @memberof DispatchMsg
     */
    DispatchImpl.prototype.onDataMsg = function (msgFrom, data) {
        var thiz = DispatchImpl.getSelf();
        showToast({ title: "收到游戏数据:" + data.data });
    };
    /**
     * 有人离开房间信息
     *
     * @param {Msg} data
     * @memberof DispatchMsg
     */
    DispatchImpl.prototype.onLeaveRoomMsg = function (msgFrom, data) {
        var thiz = DispatchImpl.getSelf();
        showToast({ title: "有人离开了房间:" + data.data });
    };
    /**
     * 有人断开连接
     *
     * @param {Msg} data
     * @memberof DispatchMsg
     */
    DispatchImpl.prototype.onDisconnect = function (msgFrom, data) {
        var thiz = DispatchImpl.getSelf();
        showToast({ title: "有人断线了:" + data.data });
    };
    DispatchImpl.self = null;
    return DispatchImpl;
}(DispatchMsg));
//# sourceMappingURL=DispatchImpl.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Model = /** @class */ (function (_super) {
    __extends(Model, _super);
    function Model() {
        var _this = _super.call(this) || this;
        _this.isShowing = false;
        _this.height = Index.screenH;
        _this.contentLayout.y = (_this.height - _this.contentLayout.height) / 2;
        _this.bgMask.height = _this.height;
        _this.bgMask.alpha = 0.5;
        _this.bgMask.graphics.drawRect(0, 0, _this.width, _this.height, "#000");
        _this.on(Laya.Event.REMOVED, _this, _this.removed);
        _this.btnCancel.on(Laya.Event.CLICK, _this, _this.clickClose);
        _this.btnClose.on(Laya.Event.CLICK, _this, _this.clickClose);
        //防止点击穿透
        _this.bgMask.on(Laya.Event.CLICK, _this, function (e) {
            e.stopPropagation();
        });
        return _this;
    }
    Model.prototype.clickClose = function (e) {
        e.stopPropagation();
        this.dismiss();
    };
    Model.prototype.removed = function () {
        Log.d('model  removed  ');
        this.isShowing = false;
    };
    Model.getSelf = function () {
        if (!Model.self) {
            Model.self = new Model();
        }
        return Model.self;
    };
    Model.prototype.dismiss = function () {
        var thiz = this;
        Laya.Tween.to(this.contentLayout, {
            scaleX: 0.1,
            scaleY: 0.1
        }, 300, Laya.Ease.bounceOut, Laya.Handler.create(this, function () {
            thiz.removeSelf();
        }));
    };
    /**
     * 弹出方法
     *
     * @memberof Model
     */
    Model.prototype.popup = function () {
        Laya.stage.addChild(this);
        this.contentLayout.scale(0.1, 0.1);
        var thiz = this;
        Laya.Tween.to(this.contentLayout, {
            scaleX: 1,
            scaleY: 1
        }, 300, Laya.Ease.bounceOut, Laya.Handler.create(this, function () {
            thiz.isShowing = true;
        }));
    };
    /*        title: data.title ? data.title : "温馨提示",
                content: data.content ? data.content : "",
                cancelText: data.cancelText ? data.cancelText : "取消",
                confirmText: data.confirmText ? data.confirmText : "确定",
                showCancel: data.showCancel ? data.showCancel : data.cancelText,
                success: data.success ? data.success : null,
                confirmColor: data.confirmColor ? data.confirmColor : "#576B95",
                fail: data.fail ? data.fail : null,
                complete: data.complete ? data.complete : null,
                cancelColor: data.cancelColor ? data.cancelColor : "#000000"*/
    Model.prototype.setData = function (data) {
        if (this.isShowing) {
            this.removeSelf();
        }
        Log.d('model setData;;;;');
        Log.d(data);
        var thiz = this;
        this.textTitle.text = data.title ? data.title : '温馨提示';
        this.textMsg.text = data.content;
        this.textCenter.text = data.confirmText ? data.confirmText : '确定';
        this.btnCenter.on(Laya.Event.CLICK, this, function (e) {
            e.stopPropagation();
            if (data.success) {
                data.success();
            }
            thiz.dismiss();
        });
        this.btnCancel.on(Laya.Event.CLICK, this, function (e) {
            e.stopPropagation();
            if (data.fail) {
                data.fail();
            }
            thiz.dismiss();
        });
        if (data.showCancel || data.cancelText) {
            this.btnCancel.visible = true;
            this.textCancel.text = data.cancelText ? data.cancelText : '取消';
            this.btnCenter.x = 150;
            this.btnCancel.x = 360;
        }
        else {
            this.btnCenter.x = 255;
            this.btnCancel.visible = false;
        }
        this.btnClose.visible = !this.btnCancel.visible;
        return this;
    };
    Model.self = null;
    return Model;
}(ui.dialog.modelUI));
//# sourceMappingURL=Model.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PageRoot = /** @class */ (function (_super) {
    __extends(PageRoot, _super);
    function PageRoot(app, width, height) {
        var _this = _super.call(this) || this;
        _this.app = null;
        _this.lastPage = null;
        _this.needAdaptation = false;
        _this.GuideFixOffset = 0;
        _this.app = app;
        _this.width = width;
        _this.height = height;
        _this.pageLayout.width = _this.width;
        _this.pageLayout.height = _this.height;
        _this.imgBg.y = _this.height - _this.imgBg.height;
        _this.nextImgBg.y = _this.imgBg.y;
        // this.imgBg.height = this.height;
        // this.imgBg.width = this.width / Index.scaleX;
        // this.nextImgBg.height = this.imgBg.height;
        // this.nextImgBg.width = this.imgBg.width;
        var model = _this.app.systemInfo.model;
        //计算刘海屏顶部高度
        for (var i = wx.getMenuButtonBoundingClientRect(), n = ["iPhone X", "华为P20", "华为麦芒7", "nubia Z18", "iPhone XR", "荣耀8X", "荣耀畅玩8C", "荣耀10", "荣耀Play", "荣耀9i", "vivo Y85", "vivo Y83", "vivo Y81s", "vivo X21", "vivo X23", "vivo X30", "vivo Z1", "vivo V9", "魅族X8", "一加6", "OPPO A3", "OPPO A7x", "OPPO R15", "OPPO R17", "小米红米6 Pro", "OnePlus A6010", "oneplus A6010", "坚果R1", "小米 Redmi Note 7", "小米 Redmi 7", "小米 PLAY ", "小米8", "小米8 SE", "小米9", "小米9 SE", "小米红米6 Pro", "vivo U1", "vivo Z3", "vivo Z3i", "vivo Z1", "vivo Z1青春版", "vivo X23幻彩版 ", "vivo Y81s", "vivo Y83", "vivo Y85", "vivo Y93", "vivo Y97", "vivo X21", "vivo X21s", "vivo X30", "vivo V9", "vivo iQOO", "华为nova 3", "华为nova 3i", "华为 nova 4e", "华为 畅享 MAX", "华为畅享9 Plus", "华为P30 Pro", "华为P20", "华为麦芒7", "华为Mate 20", "华为Mate 20 Pro", "荣耀10", "荣耀10青春版", "荣耀8X", "荣耀8X Max", "荣耀畅玩8C", "荣耀Play", "荣耀9i", "荣耀20i", "OPPO A3", "OPPO A5", "OPPO A7", "OPPO A7x全网通", "OPPO A7n", "OPPO R15", "OPPO R17", "OPPO R17 Pro", "OPPO K1", "联想 Z5S", "联想Z6 Pro", "三星Galaxy A8s", "三星Galaxy A90", "朵唯 D1", "海信 小海豚3", "海信 金刚4Pro", "中兴 ZTE V1000", "中兴AXON 10 Pro", "中兴Blade V10", "摩托罗拉 g7 plus", "诺基亚X6 2018", "诺基亚X7 2018", "小辣椒 红辣椒8X", "一加6", "一加6T", "魅族X8", "iPhone XR"], s = 0; s < n.length; s++) {
            var a = n[s], r = model.indexOf(a);
            if (i && i.top > 20 || -1 != r) {
                _this.needAdaptation = !0, _this.GuideFixOffset = iPhoneX;
                break;
            }
        }
        _this.layoutTop.y = _this.GuideFixOffset;
        //设置页面有效高度
        Index.pageHeight = _this.height - _this.layoutTop.y - _this.layoutTop.height;
        return _this;
        /* this.pageLayout.height = Index.pageHeight;
         this.pageLayout.y = this.layoutTop.y + this.layoutTop.height;*/
    }
    PageRoot.prototype.getPageHeight = function () {
        return this.height - this.layoutTop.y - this.layoutTop.height;
    };
    PageRoot.prototype.getTopOffset = function () {
        return this.height - this.getPageHeight();
    };
    /**
     *
     *切换背景
     * @param {string} bgPath
     * @memberof PageRoot
     */
    PageRoot.prototype.changeBg = function (bgPath) {
        var thiz = this;
        Laya.Tween.clearAll(this.imgBg);
        thiz.nextImgBg.skin = bgPath;
        Laya.Tween.to(this.imgBg, {
            alpha: 0,
            update: Laya.Handler.create(thiz.imgBg, function () {
                thiz.nextImgBg.alpha = 1 - thiz.imgBg.alpha;
            }, null, false)
        }, 1000, null, Laya.Handler.create(this, function () {
            //切换结束后
            thiz.imgBg.skin = bgPath;
            thiz.imgBg.alpha = 1;
            thiz.nextImgBg.alpha = 0;
        }));
    };
    /**
     * 当前页面上添加一个页面
     * @param page
     * @param noAni
     */
    PageRoot.prototype.addPage = function (page, noAni) {
        page.alpha = 0;
        if (this.numChildren > 0) {
            this.lastPage = this.pageLayout.getChildAt(this.pageLayout.numChildren - 1);
        }
        this.pageLayout.addChild(page);
        var duration = noAni ? 0 : PAGE_CHANGE_DURATION;
        Laya.Tween.to(page, { alpha: 1 }, duration, Laya.Ease.linearNone);
    };
    /**
     * 场景切换
     * @param page
     * @param noAni  是否显示过场动画
     */
    PageRoot.prototype.gotoPage = function (page, noAni) {
        //直接加载页面
        page.alpha = 0;
        this.pageLayout.addChild(page);
        var duration = noAni ? 0 : PAGE_CHANGE_DURATION;
        if (this.pageLayout.numChildren > 1) {
            //保存上一个页面
            this.lastPage = this.pageLayout.getChildAt(this.pageLayout.numChildren - 2);
            var obj = {
                alpha: 1
            };
            var thiz = this;
            Laya.Tween.to(obj, {
                alpha: 0, update: new Laya.Handler(this, function () {
                    thiz.lastPage.alpha = obj.alpha;
                    page.alpha = 1 - obj.alpha;
                })
            }, duration, Laya.Ease.linearNone, Laya.Handler.create(this, function () {
                thiz.pageLayout.removeChild(thiz.lastPage);
            }));
        }
        else {
            Laya.Tween.to(page, { alpha: 1 }, duration, Laya.Ease.linearNone);
        }
        //场景切换，关闭背景音乐
        // playBgMusic(false);
    };
    /**
     * 关闭页面
     * @param page
     * @param noAni  是否显示过场动画
     */
    PageRoot.prototype.closePage = function (page, noAni) {
        var duration = noAni ? 0 : PAGE_CHANGE_DURATION;
        if (page) {
            //关闭当前页面，并返回到指定页面
            this.gotoPage(page, noAni);
        }
        else {
            //没有指定页面,返回上一个页面
            if (this.lastPage) {
                this.gotoPage(this.lastPage, noAni);
            }
            else {
                //回主页
                this.goHome();
            }
        }
    };
    /**
     * 页面抖动效果
     * @param page 抖动指定页面，如果没有就获取当前的最后一个子控件
     */
    PageRoot.prototype.sharkPage = function (page) {
        if (this.pageLayout.numChildren < 1)
            return;
        var sharkpage = page ? page : this.pageLayout.getChildAt(this.pageLayout.numChildren - 1);
        //震屏
        vibrateScreen(sharkpage);
        //
        vibrate(30);
    };
    /**
 * 设置元宝值
 * @param num
 */
    PageRoot.prototype.setPowerNum = function (num) {
        // numberTextAni(this.textPower.getChildAt(0) as Laya.Text, num);
        // this.powerNum.value = num + '';
        // numberClipAni(this.powerNum, num);
    };
    /**返回主页 */
    PageRoot.prototype.goHome = function () {
        //清除广告
        UiManager.getSelf().showOrHideTop(true);
        Index.getApp().banner.hideBanner(BannerManager.HIDE_ALL);
        var pageNum = this.pageLayout.numChildren;
        for (var i = 0; i < pageNum; i++) {
            this.pageLayout.getChildAt(i).removeSelf();
        }
        //再添加主页
        this.addPage(HomePage.getSelf(Index.getApp()));
    };
    return PageRoot;
}(ui.page.RootPageUI));
//# sourceMappingURL=PageRoot.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ProgressBar = /** @class */ (function (_super) {
    __extends(ProgressBar, _super);
    function ProgressBar() {
        var _this = _super.call(this) || this;
        _this.maxValue = 100; //最大值
        _this.minValue = 0; //最小值
        _this.progress = 0; //当前进度值
        return _this;
    }
    ProgressBar.prototype.getProgress = function () {
        return this.progress;
    };
    ProgressBar.prototype.setProgress = function (progress, max, min) {
        if (!isNaN(min)) {
            this.minValue = min;
        }
        if (!isNaN(max)) {
            this.maxValue = max;
        }
        this.progress = progress;
        //根据百分比，计算应该移动的距离 
        //该移动的距离 
        var per = this.progress / (this.maxValue - this.minValue) * this.progressBar.width;
        var moveX = -this.progressBar.width / 2 + per;
        //计算mask的位置
        // var maskX = this.progressBar.width * 3 / 2 - per;
        this.progressMask.x = moveX;
    };
    return ProgressBar;
}(ui.view.ProgressViewUI));
//# sourceMappingURL=ProgressWidget.js.map
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Toast = /** @class */ (function (_super) {
    __extends(Toast, _super);
    function Toast(app) {
        var _this = _super.call(this) || this;
        _this.app = null;
        /**需要显示的队列 */
        _this.msgArray = new Queue();
        /**是否显示 */
        _this.isShowIng = false;
        _this.app = app;
        return _this;
        // this.btnClose.on(Laya.Event.CLICK, this, this.closeClick);
    }
    Toast.prototype.closeClick = function (e) {
        e.stopPropagation();
        Toast.isUserClose = true;
        this.dissmass();
    };
    Toast.getSelf = function () {
        return Toast.toastEntity;
    };
    Toast.toast = function (msg, showTime, foce) {
        if (Toast.isUserClose && !foce) {
            return;
        }
        if (!this.toastEntity) {
            this.toastEntity = new Toast(Index.getApp());
        }
        var duration = showTime ? showTime : Toast.SHORT;
        this.toastEntity.msgArray.push({ msg: msg, time: duration });
        this.toastEntity.showToast();
    };
    Toast.prototype.showToast = function () {
        //已经显示了，就返回
        if (this.isShowIng) {
            return;
        }
        var data = this.msgArray.pop();
        if (!data || !data.msg) {
            this.removeSelf();
            return;
        }
        this.setMsg(data.msg);
        this.popup();
        //延迟关闭
        var thiz = this;
        Laya.timer.once(data.time, this, function () {
            thiz.dissmass();
        });
    };
    /**展示 */
    Toast.prototype.popup = function () {
        //设置位置 屏幕顶部
        this.pos((Index.screenW - this.width) / 2, Index.pageHeight / 2);
        //显示
        this.alpha = 0;
        Laya.stage.addChild(this);
        //设置层级最高
        this.zOrder = 1001;
        Laya.Tween.to(this, { alpha: 1, y: Index.pageHeight / 3 }, 100, Laya.Ease.linearNone);
        this.isShowIng = true;
    };
    /**消失 */
    Toast.prototype.dissmass = function () {
        var thiz = this;
        var obj = { value: 1 };
        Laya.Tween.to(obj, {
            value: 0, update: Laya.Handler.create(thiz, function () {
                thiz.alpha = obj.value;
                thiz.y = thiz.y - 1;
            }, null, false)
        }, 300, Laya.Ease.linearNone, Laya.Handler.create(this, function () {
            thiz.isShowIng = false;
            thiz.removeSelf();
            thiz.showToast();
        }));
    };
    Toast.prototype.setMsg = function (msg) {
        //设置自定义字体
        /* if (isWX && this.app.family) {
             this.msg.font = this.app.family;
         }*/
        this.textMsg.text = msg;
        this.textMsg.y = 100;
        Laya.Tween.to(this.textMsg, { y: 0 }, 300, Laya.Ease.linearNone);
        //计算大小
    };
    /**清除消息 */
    Toast.prototype.clear = function () {
        this.msgArray.clear();
        //首先移除自己
        this.removeSelf();
        //清空消息队列
    };
    /**3秒后消失 */
    Toast.LONG = 3000;
    /**1秒后消失 默认 */
    Toast.SHORT = 1000;
    Toast.toastEntity = null;
    Toast.isUserClose = false;
    return Toast;
}(ui.dialog.toastUI));
var ShowMsg = /** @class */ (function () {
    function ShowMsg() {
        this.time = Toast.LONG;
    }
    return ShowMsg;
}());
//# sourceMappingURL=Toast.js.map
var Index = /** @class */ (function () {
    function Index() {
        this.systemInfo = null;
        this.uiManager = null;
        //page
        this.userId = null;
        this.userData = {
            "userId": "user",
            "level": 0,
            "heroLevel": 1,
            "coin": 0,
            "power": 5 //体力值
        };
        this.banner = null;
        /**
         * 是否取消了分享
         *
         * @type {boolean}
         * @memberof App
         */
        this.shareCancel = false;
        this.getShareTime = 0;
        this.isShareGroup = false;
        this.avUtils = null;
        //是否授权
        this.isScope = false;
        this.user = null;
        this.isLogin = false;
        app = this;
        Laya.MiniAdpter.init(true);
        //消除锯齿
        // Laya.Config.isAntialias = true;
        Laya.init(SCREEN_WIDTH, SCREEN_HEIGHT, Laya.WebGL);
        // Laya.init(SCREEN_WIDTH, SCREEN_HEIGHT);
        // Laya.init(500, 1000);
        // Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_AUTO;
        Laya.stage.scaleMode = Laya.Stage.SCALE_FIXED_WIDTH;
        // Laya.stage.screenMode = Laya.Stage.SCREEN_NONE;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        //画布水平居中对齐
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        var today = new Date();
        if ((today.getTime() - examineTime) / (1000 * 60 * 60 * 24) > 2) {
            //距离提审日期超过了两天
            ifShowBonus = true;
        }
        if (isWX) {
            Laya.stage.bgColor = BGCOLOR;
            this.systemInfo = wx.getSystemInfoSync();
            Index.scaleX = this.systemInfo.screenWidth / Index.screenW;
            //计算舞台高度，有可能 Laya.stage.height还没初始化好
            Index.stageH = this.systemInfo.screenHeight / Index.scaleX;
            Index.screenH = Index.stageH;
            ifShowBonus = wx.getStorageSync(IFSHOWBONUS);
            openId = wx.getStorageSync(OPENID);
            isMuteBgm = wx.getStorageSync(ISMUTEBGM);
            isMute = isMuteBgm;
            this.avUtils = AVUtils.getSelf();
            this.avUtils.login(this.loginSucess);
            // Laya.loader.load(bgImg, Laya.Handler.create(this, this.onBgImageLoaded), null, Laya.Loader.IMAGE);
            this.initWx();
            var cacheUserData = wx.getStorageSync(USERDATA);
            if (cacheUserData && cacheUserData != '') {
                this.userData = cacheUserData;
            }
            this.banner = new BannerManager(this);
        }
        Laya.stage.graphics.drawRect(0, 0, Laya.stage.width, Index.stageH, Laya.stage.bgColor);
        Index.app = this;
        this.onBgImageLoaded();
    }
    Index.prototype.loginSucess = function (user) {
        var thiz = Index.getApp();
        if (user) {
            thiz.user = user;
            thiz.userId = user.id;
            openId = user.attributes ? (user.attributes.authData ? (user.attributes.authData.lc_weapp ? user.attributes.authData.lc_weapp.openid : '') : '') : '';
            wx.setStorage({
                key: OPENID,
                data: openId
            });
            Log.d('openId = ' + openId);
            //登录成功
            thiz.isLogin = true;
            //登录微信
            // thiz.getWxSetting(user);
            // thiz.dispatchState();
            //本地金币是否有缓存，没有就缓存云端
            var cacheUserData = wx.getStorageSync(USERDATA);
            if (!cacheUserData || cacheUserData == '') {
                var cloudUserData = user.get(USERDATA);
                if (cloudUserData) {
                    wx.setStorageSync(USERDATA, thiz.userData);
                    thiz.userData = cloudUserData;
                }
            }
            else {
                thiz.userData = cacheUserData;
            }
            thiz.userData.userId = thiz.userId;
            Index.pageRoot.setPowerNum(thiz.userData.power);
            //分享次数
            {
                var cacheShareStr = wx.getStorageSync(SHARECOUNT);
                if (cacheShareStr !== '' && !isNaN(cacheShareStr)) {
                    shareCount = parseInt(cacheShareStr);
                    //本地有金币
                    //如果云端也有，取大的
                    var cloudShareCount = user.get(SHARECOUNT);
                    if (shareCount > cloudShareCount) {
                        //本地要大于云端，同时没有提现，同步到云端
                        // user.set(SHARECOUNT, shareCount);
                    }
                    else {
                        shareCount = cloudShareCount;
                        //其他情况，云端保存到本地
                        wx.setStorageSync(SHARECOUNT, cloudShareCount);
                    }
                }
                else {
                    shareCount = user.get(SHARECOUNT);
                    wx.setStorageSync(SHARECOUNT, shareCount);
                }
            }
            //成功打开视频次数
            {
                var cacheOpenVideoCount = wx.getStorageSync(OPENVIDEOCOUNT);
                if (cacheOpenVideoCount !== '' && !isNaN(cacheOpenVideoCount)) {
                    openVideoCount = parseInt(cacheOpenVideoCount);
                    //本地有金币
                    //如果云端也有，取大的
                    var cloudOpenVideoCount = user.get(OPENVIDEOCOUNT);
                    if (openVideoCount > cloudOpenVideoCount) {
                        //本地要大于云端，同时没有提现，同步到云端
                        // user.set(SHARECOUNT, openVideoCount);
                    }
                    else {
                        openVideoCount = cloudOpenVideoCount;
                        //其他情况，云端保存到本地
                        wx.setStorageSync(OPENVIDEOCOUNT, cloudOpenVideoCount);
                    }
                }
                else {
                    openVideoCount = user.get(OPENVIDEOCOUNT);
                    wx.setStorageSync(OPENVIDEOCOUNT, openVideoCount);
                }
            }
            //成功看完视频次数
            {
                var cacheFinishVideoCount = wx.getStorageSync(FINISHVIDEOCOUNT);
                if (cacheFinishVideoCount !== '' && !isNaN(cacheFinishVideoCount)) {
                    finishVideoCount = parseInt(cacheFinishVideoCount);
                    //本地有金币
                    //如果云端也有，取大的
                    var cloudFinishVideo = user.get(FINISHVIDEOCOUNT);
                    if (finishVideoCount > cloudFinishVideo) {
                        //本地要大于云端，同时没有提现，同步到云端
                        // user.set(SHARECOUNT, finishVideoCount);
                    }
                    else {
                        finishVideoCount = cloudFinishVideo;
                        //其他情况，云端保存到本地
                        wx.setStorageSync(FINISHVIDEOCOUNT, cloudFinishVideo);
                    }
                }
                else {
                    finishVideoCount = user.get(FINISHVIDEOCOUNT);
                    wx.setStorageSync(FINISHVIDEOCOUNT, finishVideoCount);
                }
            }
            //今天的数据
            {
                var cacheTodayData = getTodayData();
                var cloudTodayData = user.get(TODAYDATA);
                var localSave = false;
                //如果云端有，且是今天的，且比本地的大
                if (cloudTodayData && cloudTodayData.date && cloudTodayData.date == todayData.date) {
                    if (cloudTodayData.video > todayData.video) {
                        todayData.video = cloudTodayData.video;
                        localSave = true;
                    }
                    if (cloudTodayData.ifGift) {
                        todayData.ifGift = true;
                        localSave = true;
                    }
                    if (cloudTodayData.hasGivePower) {
                        todayData.hasGivePower = true;
                        localSave = true;
                    }
                }
                //判断是否需要送体力
                /*	if (!todayData.hasGivePower && thiz.userData.power < maxPower) {
                        UiManager.getSelf().showToast('每日登录赠送5体力');
                        thiz.userData.power += givePoser;
                        todayData.hasGivePower = true;
                    }*/
                if (localSave) {
                    setTodayData();
                }
            }
            /*if (UiManager.getSelf().homePage) {
                UiManager.getSelf().homePage.setPowerView();
            }*/
            //登录时同步一次
            syncUser();
        }
        else {
            //登录失败
            //本地是否有缓存
            this.userId = wx.getStorageSync(USERID);
            openId = wx.getStorageSync(OPENID);
        }
    };
    /**
     * 授权成功后回调
     *
     * @private
     * @param {av.User} user
     * @memberof App
     */
    Index.prototype.scopeSuccess = function (user) {
        wx.setStorage({ key: USER, data: user });
        wx.setStorage({ key: NICKNAME, data: user.attributes.nickName });
        wx.setStorage({ key: AVATARURL, data: user.attributes.avatarUrl });
        this.isScope = true;
        var nickName = user.attributes.nickName;
        if (nickName && nickName.indexOf('game') > -1) {
            ifShowBonus = false;
        }
        //下载头像
        downLoadFile(user.attributes.avatarUrl);
    };
    /**
* 微信相关的
*/
    Index.prototype.initWx = function () {
        if (isWX)
            return;
        //分享设置
        wx.showShareMenu({
            withShareTicket: true
        });
        var thiz = this;
        if (ifAldShare) {
            wx.aldOnShareAppMessage(function () {
                //判断是否是特殊用户分享
                var tmp_query = '';
                tmp_query = 'uid=' + thiz.userId + '&state=' + ShareType.MENU;
                Log.d('右上角转发~~~');
                Log.d('右上角转发~~~');
                Log.d(tmp_query);
                return {
                    query: tmp_query,
                    title: '据说只有1%的人能过关，是你吗？',
                    // imageUrl: tempFilePath
                    imageUrl: LOCAL_SHARE,
                };
            });
        }
        else {
            wx.onShareAppMessage(function () {
                //判断是否是特殊用户分享
                var tmp_query = '';
                tmp_query = 'uid=' + thiz.userId + '&state=' + ShareType.MENU;
                Log.d('右上角转发~~~');
                Log.d(tmp_query);
                return {
                    query: tmp_query,
                    title: '据说只有1%的人能过关，是你吗？',
                    // imageUrl: tempFilePath
                    imageUrl: LOCAL_SHARE,
                };
            });
        }
    };
    //加载分包
    Index.prototype.onBgImageLoaded = function () {
        Index.pageRoot = new PageRoot(this, Index.screenW, Index.screenH);
        Log.d('screenH:' + Index.screenH);
        Laya.stage.addChild(Index.pageRoot);
        this.uiManager = UiManager.getSelf(this);
        this.uiManager.addPage(LoadPage.getSelf( /*this*/));
        LoadPage.getSelf( /*this*/).loadRes(this.onSubpackageLoaded);
    };
    Index.prototype.onSubpackageLoaded = function (flag) {
        Log.d('分包加载完成::::' + flag);
        var thiz = Index.app; //=======================>这里的thiz一定要指向App，不能用this,因为onSubpackageLoaded是从子线程中加载进来的，this指向的是子线程
        if (flag) {
            var resPath = "res/atlas/comp.atlas";
            Laya.loader.load(resPath, Laya.Handler.create(thiz, thiz.onAssetsLoaded), null, Laya.Loader.ATLAS);
        }
        else {
            //资源加载失败，重新加载
            showModal({
                content: "资源加载失败，是否重试？",
                showCancel: true,
                confirmText: "重载",
                success: function (res) {
                    if (res.confirm) {
                        LoadPage.getSelf( /*thiz*/).loadRes(thiz.onSubpackageLoaded);
                    }
                }
            });
        }
    };
    Index.prototype.onAssetsLoaded = function () {
        Log.d('资源加载完成::::');
        //资源加载完成
        // this.gotoPage(HomePage.getSelf(this));
        // HomePage.getSelf(this).setGameData(this.userData);
        //加载页面销毁
        LoadPage.getSelf().destroy();
        Index.pageRoot.layoutTop.visible = true;
        Index.pageRoot.setPowerNum(this.userData.power);
        UiManager.getSelf().goHome();
    };
    Index.getApp = function () {
        return app;
    };
    Index.app = null;
    /**
* 所有页面的根元素
*/
    Index.pageRoot = null;
    /**
 * 默认高度
 */
    Index.screenH = SCREEN_HEIGHT;
    /**页面有效高度 */
    Index.pageHeight = Index.screenH;
    /**
     * 默认宽度
     */
    Index.screenW = SCREEN_WIDTH;
    /**
     * 缩放
     */
    Index.scaleX = 1;
    /**
     * 舞台高度
     */
    Index.stageH = Index.screenH;
    return Index;
}());
var app = new Index();
//
wx.onShow(function (res) {
});
wx.onHide(function () {
    Log.d('切到后台  ~~~~~~');
    // bgMusic = null;
    wx.setStorageSync(USERDATA, app.userData);
    syncUser();
});
//# sourceMappingURL=Index.js.map