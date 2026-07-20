import{C as be,l as U,k as Ee,S as Fe,F as Qe,R as Ze,u as r,d as M,A as R,h as j,g as Zt,T as pe,c as kn,n as ei,D as ai,a as ni,r as ti,b as ii,e as Ve,f as La,i as ri,j as oi,m as Ia,o as li,p as si,q as ci,s as fi,t as Pa,v as ui,w as Ea,x as di,y as mi,z as pi,B as gi}from"./storage-CBcPpvQp.js";function hi(e,a){for(var n in a)e[n]=a[n];return e}function Fa(e,a){for(var n in e)if(n!=="__source"&&!(n in a))return!0;for(var t in a)if(t!=="__source"&&e[t]!==a[t])return!0;return!1}function Ta(e,a){this.props=e,this.context=a}(Ta.prototype=new be).isPureReactComponent=!0,Ta.prototype.shouldComponentUpdate=function(e,a){return Fa(this.props,e)||Fa(this.state,a)};var $a=U.__b;U.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),$a&&$a(e)};var vi=U.__e;U.__e=function(e,a,n,t){if(e.then){for(var i,l=a;l=l.__;)if((i=l.__c)&&i.__c)return a.__e==null&&(a.__e=n.__e,a.__k=n.__k||[]),i.__c(e,a)}vi(e,a,n,t)};var Da=U.unmount;function Mn(e,a,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(t){typeof t.__c=="function"&&t.__c()}),e.__c.__H=null),(e=hi({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=a),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(t){return Mn(t,a,n)})),e}function Nn(e,a,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(t){return Nn(t,a,n)}),e.__c&&e.__c.__P===a&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function Ye(){this.__u=0,this.o=null,this.__b=null}function Cn(e){var a=e.__&&e.__.__c;return a&&a.__a&&a.__a(e)}function ke(){this.i=null,this.l=null}U.unmount=function(e){var a=e.__c;a&&(a.__z=!0),a&&a.__R&&a.__R(),a&&32&e.__u&&(e.type=null),Da&&Da(e)},(Ye.prototype=new be).__c=function(e,a){var n=a.__c,t=this;t.o==null&&(t.o=[]),t.o.push(n);var i=Cn(t.__v),l=!1,o=function(){l||t.__z||(l=!0,n.__R=null,i?i(c):c())};n.__R=o;var s=n.__P;n.__P=null;var c=function(){if(!--t.__u){if(t.state.__a){var u=t.state.__a;t.__v.__k[0]=Nn(u,u.__c.__P,u.__c.__O)}var m;for(t.setState({__a:t.__b=null});m=t.o.pop();)m.__P=s,m.forceUpdate()}};t.__u++||32&a.__u||t.setState({__a:t.__b=t.__v.__k[0]}),e.then(o,o)},Ye.prototype.componentWillUnmount=function(){this.o=[]},Ye.prototype.render=function(e,a){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),t=this.__v.__k[0].__c;this.__v.__k[0]=Mn(this.__b,n,t.__O=t.__P)}this.__b=null}var i=a.__a&&Ee(Fe,null,e.fallback);return i&&(i.__u&=-33),[Ee(Fe,null,a.__a?null:e.children),i]};var Oa=function(e,a,n){if(++n[1]===n[0]&&e.l.delete(a),e.props.revealOrder&&(e.props.revealOrder[0]!=="t"||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};function bi(e){return this.getChildContext=function(){return e.context},e.children}function yi(e){var a=this,n=e.h;if(a.componentWillUnmount=function(){Ze(null,a.v),a.v=null,a.h=null},a.h&&a.h!==n&&a.componentWillUnmount(),!a.v){for(var t=a.__v;t!==null&&!t.__m&&t.__!==null;)t=t.__;a.h=n,a.v={nodeType:1,parentNode:n,childNodes:[],__k:{__m:t.__m},contains:function(){return!0},namespaceURI:n.namespaceURI,insertBefore:function(i,l){this.childNodes.push(i),a.h.insertBefore(i,l)},removeChild:function(i){this.childNodes.splice(this.childNodes.indexOf(i)>>>1,1),a.h.removeChild(i)}}}Ze(Ee(bi,{context:a.context},e.__v),a.v)}function ga(e,a){var n=Ee(yi,{__v:e,h:a});return n.containerInfo=a,n}(ke.prototype=new be).__a=function(e){var a=this,n=Cn(a.__v),t=a.l.get(e);return t[0]++,function(i){var l=function(){a.props.revealOrder?(t.push(i),Oa(a,e,t)):i()};n?n(l):l()}},ke.prototype.render=function(e){this.i=null,this.l=new Map;var a=Qe(e.children);e.revealOrder&&e.revealOrder[0]==="b"&&a.reverse();for(var n=a.length;n--;)this.l.set(a[n],this.i=[1,0,this.i]);return e.children},ke.prototype.componentDidUpdate=ke.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(a,n){Oa(e,n,a)})};var _i=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,wi=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,zi=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,xi=/[A-Z0-9]/g,ki=typeof document<"u",Mi=function(e){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/:/fil|che|ra/).test(e)};be.prototype.isReactComponent=!0,["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(e){Object.defineProperty(be.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(a){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:a})}})});var ja=U.event;U.event=function(e){return ja&&(e=ja(e)),e.persist=function(){},e.isPropagationStopped=function(){return this.cancelBubble},e.isDefaultPrevented=function(){return this.defaultPrevented},e.nativeEvent=e};var Ni={configurable:!0,get:function(){return this.class}},Ra=U.vnode;U.vnode=function(e){typeof e.type=="string"&&function(a){var n=a.props,t=a.type,i={},l=t.indexOf("-")==-1;for(var o in n){var s=n[o];if(!(o==="value"&&"defaultValue"in n&&s==null||ki&&o==="children"&&t==="noscript"||o==="class"||o==="className")){var c=o.toLowerCase();o==="defaultValue"&&"value"in n&&n.value==null?o="value":o==="download"&&s===!0?s="":c==="translate"&&s==="no"?s=!1:c[0]==="o"&&c[1]==="n"?c==="ondoubleclick"?o="ondblclick":c!=="onchange"||t!=="input"&&t!=="textarea"||Mi(n.type)?c==="onfocus"?o="onfocusin":c==="onblur"?o="onfocusout":zi.test(o)&&(o=c):c=o="oninput":l&&wi.test(o)?o=o.replace(xi,"-$&").toLowerCase():s===null&&(s=void 0),c==="oninput"&&i[o=c]&&(o="oninputCapture"),i[o]=s}}t=="select"&&(i.multiple&&Array.isArray(i.value)&&(i.value=Qe(n.children).forEach(function(u){u.props.selected=i.value.indexOf(u.props.value)!=-1})),i.defaultValue!=null&&(i.value=Qe(n.children).forEach(function(u){u.props.selected=i.multiple?i.defaultValue.indexOf(u.props.value)!=-1:i.defaultValue==u.props.value}))),n.class&&!n.className?(i.class=n.class,Object.defineProperty(i,"className",Ni)):n.className&&(i.class=i.className=n.className),a.props=i}(e),e.$$typeof=_i,Ra&&Ra(e)};var Wa=U.__r;U.__r=function(e){Wa&&Wa(e),e.__c};var Ua=U.diffed;U.diffed=function(e){Ua&&Ua(e);var a=e.props,n=e.__e;n!=null&&e.type==="textarea"&&"value"in a&&a.value!==n.value&&(n.value=a.value==null?"":a.value)};const Ci={search:"M21 21l-4.35-4.35M11 18a7 7 0 1 1 0-14 7 7 0 0 1 0 14z",plus:"M12 5v14M5 12h14",trash:"M3 6h18M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2",edit:"M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z",sun:"M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0z",moon:"M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z",settings:"M12 2l1 2.8c1 .3 1.9.7 2.7 1.3l2.7-1.5 1.5 1.5-1.5 2.7c.6.8 1 1.7 1.3 2.7l2.8 1v2.1l-2.8 1c-.3 1-.7 1.9-1.3 2.7l1.5 2.7-1.5 1.5-2.7-1.5c-.8.6-1.7 1-2.7 1.3l-1 2.8h-2.1l-1-2.8c-1-.3-1.9-.7-2.7-1.3l-2.7 1.5-1.5-1.5 1.5-2.7c-.6-.8-1-1.7-1.3-2.7l-2.8-1V8.8l2.8-1c.3-1 .7-1.9 1.3-2.7L4.7 2.4l1.5-1.5 2.7 1.5c.8-.6 1.7-1 2.7-1.3l1-2.8h2.1zM12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",close:"M18 6L6 18M6 6l12 12",check:"M20 6L9 17l-5-5",external:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6m4-3h6v6m-11 5L21 3",menu:"M3 12h18M3 6h18M3 18h18",image:"M21 19V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2zM8.5 10a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm10.5 8l-4-4-3 3-5-5-4 4",grid:"M3 3h7v7H3zm11 0h7v7h-7zM3 14h7v7H3zm11 0h7v7h-7z",columns:"M4 6h16M4 10h16M4 14h16M4 18h16","grip-vertical":"M9 5h6M9 12h6M9 19h6","chevron-left":"M15 18l-6-6 6-6","chevron-right":"M9 18l6-6-6-6",play:"M5 3l14 9-14 9V3z",pause:"M6 4h4v16H6zm8 0h4v16h-4z","rotate-ccw":"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8M3 3v5h5","skip-forward":"M19 5v14M5 5l14 7-14 7V5z",cloud:"M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z","cloud-sun":"M16.5 18.5h-8a5.5 5.5 0 1 1 1.8-10.7 6 6 0 0 1 10.7 2.7 4 4 0 0 1-4.5 8z","cloud-rain":"M16 13v8M8 13v8M12 15v8M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z",target:"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm0-13a5 5 0 1 0 5 5 5 5 0 0 0-5-5z",clock:"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm1-8h4v2h-6V7h2z","more-vertical":"M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0-7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",download:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m7-1V3m5 11l-5 5-5-5",upload:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4m7 1V3m5 5l-5-5-5 5",globe:"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zM2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z",mail:"M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2l8 5 8-5","message-square":"M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",github:"M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.78c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.1-1.47-1.1-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-2 1.03-2.7-.1-.25-.45-1.28.1-2.66 0 0 .84-.27 2.75 1.03A9.57 9.57 0 0 1 12 6.7a9.57 9.57 0 0 1 2.5.34c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.2 2.41.1 2.66.64.7 1.03 1.6 1.03 2.7 0 3.83-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.16.59.67.5A10.04 10.04 0 0 0 22 12c0-5.52-4.48-10-10-10z",twitter:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",youtube:"M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM10 15.5V8.5l5.5 3.5z",video:"M15 10l4.5-2.5v9L15 14m-9 6h10a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2z",book:"M4 19.5A2.5 2.5 0 0 1 6.5 17H20M4 19.5V4.5A2.5 2.5 0 0 1 6.5 2H20v15H6.5A2.5 2.5 0 0 0 4 19.5z",music:"M9 18V5l12-2v13M9 18a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm12-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0z","shopping-cart":"M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4zM3 6h18M16 10a4 4 0 0 1-8 0",camera:"M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2zM12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",heart:"M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z",star:"M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z",flag:"M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1zM4 22v-7",bell:"M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9M13.73 21a2 2 0 0 1-3.46 0",home:"M3 12l9-9 9 9M5 10v10a1 1 0 0 0 1 1h3v-5a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v5h3a1 1 0 0 0 1-1V10",user:"M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2M12 3a4 4 0 1 0 0 8 4 4 0 0 0 0-8z",calendar:"M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zM3 10h18M8 2v4m8-4v4","dollar-sign":"M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",code:"M16 18l6-6-6-6M8 6l-6 6 6 6",terminal:"M4 17l6-6-6-6m8 12h8",zap:"M13 2L3 14h9l-1 8 10-12h-9l1-8z",database:"M12 2C8.13 2 5 4.69 5 8v8c0 3.31 3.13 6 7 6s7-2.69 7-6V8c0-3.31-3.13-6-7-6zM5 8c0 2.21 3.13 4 7 4s7-1.79 7-4m0 4c0 2.21-3.13 4-7 4s-7-1.79-7-4m0 4c0 2.21 3.13 4 7 4s7-1.79 7-4",layers:"M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5","map-pin":"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0zM12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6z",compass:"M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm-3-5l3-8 3 8-3-1z",briefcase:"M16 9V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v4M5 9h14l1 10H4L5 9z","credit-card":"M21 4H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM1 10h22",link:"M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71",bookmark:"M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z",folder:"M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z",tag:"M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82zM7 7h.01",rss:"M4 11a9 9 0 0 1 9 9M4 4a16 16 0 0 1 16 16M5 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2z",smartphone:"M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM12 18h.01",tablet:"M16 2H8a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zM12 18h.01",monitor:"M22 3H2v14h20V3zm-9 14v3h4v2H7v-2h4v-3","globe-2":"M2 12h20M12 2v20M12 2a10 10 0 0 0 0 20 10 10 0 0 0 0-20zm0 20a10 10 0 0 0 0-20 10 10 0 0 0 0 20zm-9-9a10 10 0 0 0 18 0 10 10 0 0 0-18 0zm0-2a10 10 0 0 0 18 0 10 10 0 0 0-18 0z"};function T({name:e,size:a=20,className:n=""}){return r("svg",{width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",className:n,"aria-hidden":"true",children:r("path",{d:Ci[e]})})}function Si({boards:e,activeId:a,onSelect:n,onAdd:t,onRename:i,onDelete:l}){const[o,s]=M(null),[c,u]=M(""),[m,d]=M(null),[f,v]=M({top:0,right:0}),x=R(null),C=R(null),h=R(null),z=R({});j(()=>{o&&x.current&&(x.current.focus(),x.current.select())},[o]),j(()=>{if(!m)return;const w=I=>{const P=I.target;C.current&&!C.current.contains(P)&&h.current&&!h.current.contains(P)&&d(null)};return document.addEventListener("mousedown",w),()=>document.removeEventListener("mousedown",w)},[m]);const k=w=>{s(w.id),u(w.title),d(null)},F=()=>{o&&(i(o,c),s(null))},O=w=>{w.key==="Enter"&&F(),w.key==="Escape"&&s(null)},L=w=>{const I=z.current[w];if(h.current=I??null,I){const P=I.getBoundingClientRect();v({top:P.bottom+4,right:window.innerWidth-P.right})}d(w)},_=(w,I)=>{w.preventDefault(),L(I)},p=(w,I)=>{w.stopPropagation(),m===I?d(null):L(I)},E=w=>I=>{I.stopPropagation(),d(null),w?.()};return r("nav",{className:"board-tabs","aria-label":"Boards",children:[e.map(w=>r("div",{className:`board-tab ${w.id===a?"board-tab--active":""}`,onClick:()=>n(w.id),onContextMenu:I=>_(I,w.id),role:"button",tabIndex:0,"aria-label":`Abrir board ${w.title}`,onKeyDown:I=>I.key==="Enter"&&n(w.id),children:o===w.id?r("input",{ref:x,className:"board-tab__input",value:c,onChange:I=>u(I.target.value),onBlur:F,onKeyDown:O,onClick:I=>I.stopPropagation(),"aria-label":"Renomear board"}):r(Fe,{children:[r("span",{className:"board-tab__title",children:w.title}),w.id===a&&r("div",{className:"board-tab__actions",children:[r("button",{ref:I=>{z.current[w.id]=I},className:"board-tab__kebab",onClick:I=>p(I,w.id),"aria-label":"Ações da aba",title:"Ações",children:r(T,{name:"more-vertical",size:12})}),m===w.id&&ga(r("div",{ref:C,className:"board-tab__menu",style:{position:"fixed",top:f.top,right:f.right},children:[r("button",{className:"board-tab__menu-item",onClick:E(()=>k(w)),children:[r(T,{name:"edit",size:12}),"Renomear"]}),e.length>1&&r("button",{className:"board-tab__menu-item board-tab__menu-item--danger",onClick:E(()=>l(w.id,w.title)),children:[r(T,{name:"trash",size:12}),"Excluir"]})]}),document.body)]})]})},w.id)),r("button",{className:"board-tab board-tab--add",onClick:t,"aria-label":"Criar nova aba",title:"Nova aba",children:r(T,{name:"plus",size:14})})]})}function Ai({widget:e,children:a,onEdit:n,onDelete:t,onAddLink:i,onResize:l,onDragStart:o,onDragOver:s,onDrop:c,onDragEnd:u,isDragging:m,className:d=""}){const f=R(null),v=R(null),x=R(null),[C,h]=M(!1),[z,k]=M(!1),[F,O]=M({top:0,right:0}),L=R({y:0,height:0});j(()=>{if(!z)return;const P=V=>{const Y=V.target;v.current&&!v.current.contains(Y)&&x.current&&!x.current.contains(Y)&&k(!1)};return document.addEventListener("mousedown",P),()=>document.removeEventListener("mousedown",P)},[z]),j(()=>{if(!C)return;const P=Y=>{Y.preventDefault();const re=Y.clientY-L.current.y,ue=Math.max(120,L.current.height+re);l?.(ue)},V=()=>{h(!1)};return document.addEventListener("mousemove",P),document.addEventListener("mouseup",V),()=>{document.removeEventListener("mousemove",P),document.removeEventListener("mouseup",V)}},[C]);const _=()=>{if(x.current){const P=x.current.getBoundingClientRect();O({top:P.bottom+4,right:window.innerWidth-P.right})}k(!0)},p=P=>{P.preventDefault(),P.stopPropagation(),f.current&&(L.current={y:P.clientY,height:f.current.getBoundingClientRect().height}),h(!0)},E=P=>{P.preventDefault(),_()},w=P=>{P.stopPropagation(),z?k(!1):_()},I=P=>V=>{V.stopPropagation(),k(!1),P?.()};return r("div",{ref:f,className:`widget-card ${e.colSpan>1?"widget-card--wide":""} ${m?"widget-card--dragging":""} ${e.height?"widget-card--fixed-height":""} ${C?"widget-card--resizing":""} ${d}`,draggable:!!o&&!C,onDragStart:o,onDragOver:s,onDrop:c,onDragEnd:u,onContextMenu:E,"data-widget-id":e.id,"data-col-span":e.colSpan,style:e.height?{height:e.height,flexShrink:0}:void 0,children:[r("div",{className:"widget-card__header",children:[r("div",{className:"widget-card__title-row",children:r("h3",{className:"widget-card__title",children:e.title})}),(n||t||i)&&r("div",{className:"widget-card__actions",children:[r("button",{ref:x,className:"widget-card__kebab",onClick:w,"aria-label":"Ações do widget",title:"Ações",children:r(T,{name:"more-vertical",size:16})}),z&&ga(r("div",{ref:v,className:"widget-card__menu",style:{position:"fixed",top:F.top,right:F.right},children:[i&&r("button",{className:"widget-card__menu-item",onClick:I(i),children:[r(T,{name:"plus",size:14}),"Adicionar link"]}),n&&r("button",{className:"widget-card__menu-item",onClick:I(n),children:[r(T,{name:"edit",size:14}),"Editar"]}),t&&r("button",{className:"widget-card__menu-item widget-card__menu-item--danger",onClick:I(t),children:[r(T,{name:"trash",size:14}),"Excluir"]})]}),document.body)]})]}),r("div",{className:"widget-card__content",children:a}),l&&r("div",{className:"widget-card__resize-handle",onMouseDown:p,"aria-label":"Redimensionar widget",title:"Arraste para redimensionar"})]})}/*!
 * Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */function ea(e,a){(a==null||a>e.length)&&(a=e.length);for(var n=0,t=Array(a);n<a;n++)t[n]=e[n];return t}function Li(e){if(Array.isArray(e))return e}function Ii(e){if(Array.isArray(e))return ea(e)}function Pi(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function Ei(e,a){for(var n=0;n<a.length;n++){var t=a[n];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,Sn(t.key),t)}}function Fi(e,a,n){return a&&Ei(e.prototype,a),Object.defineProperty(e,"prototype",{writable:!1}),e}function Le(e,a){var n=typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=ha(e))||a){n&&(e=n);var t=0,i=function(){};return{s:i,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(c){throw c},f:i}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l,o=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var c=n.next();return o=c.done,c},e:function(c){s=!0,l=c},f:function(){try{o||n.return==null||n.return()}finally{if(s)throw l}}}}function S(e,a,n){return(a=Sn(a))in e?Object.defineProperty(e,a,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[a]=n,e}function Ti(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function $i(e,a){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var t,i,l,o,s=[],c=!0,u=!1;try{if(l=(n=n.call(e)).next,a===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(t=l.call(n)).done)&&(s.push(t.value),s.length!==a);c=!0);}catch(m){u=!0,i=m}finally{try{if(!c&&n.return!=null&&(o=n.return(),Object(o)!==o))return}finally{if(u)throw i}}return s}}function Di(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Oi(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Ha(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,t)}return n}function g(e){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?Ha(Object(n),!0).forEach(function(t){S(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ha(Object(n)).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function je(e,a){return Li(e)||$i(e,a)||ha(e,a)||Di()}function X(e){return Ii(e)||Ti(e)||ha(e)||Oi()}function ji(e,a){if(typeof e!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var t=n.call(e,a);if(typeof t!="object")return t;throw new TypeError("@@toPrimitive must return a primitive value.")}return(a==="string"?String:Number)(e)}function Sn(e){var a=ji(e,"string");return typeof a=="symbol"?a:a+""}function Te(e){"@babel/helpers - typeof";return Te=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},Te(e)}function ha(e,a){if(e){if(typeof e=="string")return ea(e,a);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ea(e,a):void 0}}var Va=function(){},va={},An={},Ln=null,In={mark:Va,measure:Va};try{typeof window<"u"&&(va=window),typeof document<"u"&&(An=document),typeof MutationObserver<"u"&&(Ln=MutationObserver),typeof performance<"u"&&(In=performance)}catch{}var Ri=va.navigator||{},Ya=Ri.userAgent,Ba=Ya===void 0?"":Ya,Q=va,D=An,Xa=Ln,Me=In;Q.document;var J=!!D.documentElement&&!!D.head&&typeof D.addEventListener=="function"&&typeof D.createElement=="function",Pn=~Ba.indexOf("MSIE")||~Ba.indexOf("Trident/"),Ne,Wi=/fa(k|kd|s|r|l|t|d|dr|dl|dt|b|slr|slpr|wsb|tl|ns|nds|es|gt|jr|jfr|jdr|usb|ufsb|udsb|cr|ss|sr|sl|st|sds|sdr|sdl|sdt|sldr|slpdr|pr|ms|vs)?[\-\ ]/,Ui=/Font ?Awesome ?([567 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit|Notdog Duo|Notdog|Chisel|Etch|Graphite|Thumbprint|Jelly Fill|Jelly Duo|Jelly|Utility|Utility Fill|Utility Duo|Slab Press|Slab|Slab Duo|Slab Press Duo|Pixel|Mosaic|Vellum|Whiteboard)?.*/i,En={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"},slab:{"fa-regular":"regular",faslr:"regular"},"slab-press":{"fa-regular":"regular",faslpr:"regular"},"slab-duo":{"fa-regular":"regular",fasldr:"regular"},"slab-press-duo":{"fa-regular":"regular",faslpdr:"regular"},thumbprint:{"fa-light":"light",fatl:"light"},vellum:{"fa-solid":"solid",favs:"solid"},pixel:{"fa-regular":"regular",fapr:"regular"},mosaic:{"fa-solid":"solid",fams:"solid"},whiteboard:{"fa-semibold":"semibold",fawsb:"semibold"},notdog:{"fa-solid":"solid",fans:"solid"},"notdog-duo":{"fa-solid":"solid",fands:"solid"},etch:{"fa-solid":"solid",faes:"solid"},graphite:{"fa-thin":"thin",fagt:"thin"},jelly:{"fa-regular":"regular",fajr:"regular"},"jelly-fill":{"fa-regular":"regular",fajfr:"regular"},"jelly-duo":{"fa-regular":"regular",fajdr:"regular"},chisel:{"fa-regular":"regular",facr:"regular"},utility:{"fa-semibold":"semibold",fausb:"semibold"},"utility-duo":{"fa-semibold":"semibold",faudsb:"semibold"},"utility-fill":{"fa-semibold":"semibold",faufsb:"semibold"}},Hi={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Fn=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],W="classic",_e="duotone",Tn="sharp",$n="sharp-duotone",Dn="chisel",On="etch",jn="graphite",Rn="jelly",Wn="jelly-duo",Un="jelly-fill",Hn="mosaic",Vn="notdog",Yn="notdog-duo",Bn="pixel",Xn="slab",Gn="slab-duo",qn="slab-press",Kn="slab-press-duo",Jn="thumbprint",Qn="utility",Zn="utility-duo",et="utility-fill",at="vellum",nt="whiteboard",Vi="Classic",Yi="Duotone",Bi="Sharp",Xi="Sharp Duotone",Gi="Chisel",qi="Etch",Ki="Graphite",Ji="Jelly",Qi="Jelly Duo",Zi="Jelly Fill",er="Mosaic",ar="Notdog",nr="Notdog Duo",tr="Pixel",ir="Slab",rr="Slab Duo",or="Slab Press",lr="Slab Press Duo",sr="Thumbprint",cr="Utility",fr="Utility Duo",ur="Utility Fill",dr="Vellum",mr="Whiteboard",tt=[W,_e,Tn,$n,Dn,On,jn,Rn,Wn,Un,Hn,Vn,Yn,Bn,Xn,Gn,qn,Kn,Jn,Qn,Zn,et,at,nt];Ne={},S(S(S(S(S(S(S(S(S(S(Ne,W,Vi),_e,Yi),Tn,Bi),$n,Xi),Dn,Gi),On,qi),jn,Ki),Rn,Ji),Wn,Qi),Un,Zi),S(S(S(S(S(S(S(S(S(S(Ne,Hn,er),Vn,ar),Yn,nr),Bn,tr),Xn,ir),Gn,rr),qn,or),Kn,lr),Jn,sr),Qn,cr),S(S(S(S(Ne,Zn,fr),et,ur),at,dr),nt,mr);var pr={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"},slab:{400:"faslr"},"slab-press":{400:"faslpr"},"slab-duo":{400:"fasldr"},"slab-press-duo":{400:"faslpdr"},vellum:{900:"favs"},mosaic:{900:"fams"},pixel:{400:"fapr"},whiteboard:{600:"fawsb"},thumbprint:{300:"fatl"},notdog:{900:"fans"},"notdog-duo":{900:"fands"},etch:{900:"faes"},graphite:{100:"fagt"},chisel:{400:"facr"},jelly:{400:"fajr"},"jelly-fill":{400:"fajfr"},"jelly-duo":{400:"fajdr"},utility:{600:"fausb"},"utility-duo":{600:"faudsb"},"utility-fill":{600:"faufsb"}},gr={"Font Awesome 7 Free":{900:"fas",400:"far"},"Font Awesome 7 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 7 Brands":{400:"fab",normal:"fab"},"Font Awesome 7 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 7 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 7 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"},"Font Awesome 7 Jelly":{400:"fajr",normal:"fajr"},"Font Awesome 7 Jelly Fill":{400:"fajfr",normal:"fajfr"},"Font Awesome 7 Jelly Duo":{400:"fajdr",normal:"fajdr"},"Font Awesome 7 Slab":{400:"faslr",normal:"faslr"},"Font Awesome 7 Slab Press":{400:"faslpr",normal:"faslpr"},"Font Awesome 7 Slab Duo":{400:"fasldr",normal:"fasldr"},"Font Awesome 7 Slab Press Duo":{400:"faslpdr",normal:"faslpdr"},"Font Awesome 7 Pixel":{400:"fapr",normal:"fapr"},"Font Awesome 7 Mosaic":{900:"fams",normal:"fams"},"Font Awesome 7 Vellum":{900:"favs",normal:"favs"},"Font Awesome 7 Thumbprint":{300:"fatl",normal:"fatl"},"Font Awesome 7 Notdog":{900:"fans",normal:"fans"},"Font Awesome 7 Notdog Duo":{900:"fands",normal:"fands"},"Font Awesome 7 Etch":{900:"faes",normal:"faes"},"Font Awesome 7 Graphite":{100:"fagt",normal:"fagt"},"Font Awesome 7 Chisel":{400:"facr",normal:"facr"},"Font Awesome 7 Whiteboard":{600:"fawsb",normal:"fawsb"},"Font Awesome 7 Utility":{600:"fausb",normal:"fausb"},"Font Awesome 7 Utility Duo":{600:"faudsb",normal:"faudsb"},"Font Awesome 7 Utility Fill":{600:"faufsb",normal:"faufsb"}},hr=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["chisel",{defaultShortPrefixId:"facr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["etch",{defaultShortPrefixId:"faes",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["graphite",{defaultShortPrefixId:"fagt",defaultStyleId:"thin",styleIds:["thin"],futureStyleIds:[],defaultFontWeight:100}],["jelly",{defaultShortPrefixId:"fajr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-duo",{defaultShortPrefixId:"fajdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["jelly-fill",{defaultShortPrefixId:"fajfr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["mosaic",{defaultShortPrefixId:"fams",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog",{defaultShortPrefixId:"fans",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["notdog-duo",{defaultShortPrefixId:"fands",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["pixel",{defaultShortPrefixId:"fapr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab",{defaultShortPrefixId:"faslr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-duo",{defaultShortPrefixId:"fasldr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press",{defaultShortPrefixId:"faslpr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["slab-press-duo",{defaultShortPrefixId:"faslpdr",defaultStyleId:"regular",styleIds:["regular"],futureStyleIds:[],defaultFontWeight:400}],["thumbprint",{defaultShortPrefixId:"fatl",defaultStyleId:"light",styleIds:["light"],futureStyleIds:[],defaultFontWeight:300}],["utility",{defaultShortPrefixId:"fausb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-duo",{defaultShortPrefixId:"faudsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["utility-fill",{defaultShortPrefixId:"faufsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}],["vellum",{defaultShortPrefixId:"favs",defaultStyleId:"solid",styleIds:["solid"],futureStyleIds:[],defaultFontWeight:900}],["whiteboard",{defaultShortPrefixId:"fawsb",defaultStyleId:"semibold",styleIds:["semibold"],futureStyleIds:[],defaultFontWeight:600}]]),vr={chisel:{regular:"facr"},classic:{brands:"fab",light:"fal",regular:"far",solid:"fas",thin:"fat"},duotone:{light:"fadl",regular:"fadr",solid:"fad",thin:"fadt"},etch:{solid:"faes"},graphite:{thin:"fagt"},jelly:{regular:"fajr"},"jelly-duo":{regular:"fajdr"},"jelly-fill":{regular:"fajfr"},mosaic:{solid:"fams"},notdog:{solid:"fans"},"notdog-duo":{solid:"fands"},pixel:{regular:"fapr"},sharp:{light:"fasl",regular:"fasr",solid:"fass",thin:"fast"},"sharp-duotone":{light:"fasdl",regular:"fasdr",solid:"fasds",thin:"fasdt"},slab:{regular:"faslr"},"slab-duo":{regular:"fasldr"},"slab-press":{regular:"faslpr"},"slab-press-duo":{regular:"faslpdr"},thumbprint:{light:"fatl"},utility:{semibold:"fausb"},"utility-duo":{semibold:"faudsb"},"utility-fill":{semibold:"faufsb"},vellum:{solid:"favs"},whiteboard:{semibold:"fawsb"}},it=["fak","fa-kit","fakd","fa-kit-duotone"],Ga={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},br=["kit"],yr="kit",_r="kit-duotone",wr="Kit",zr="Kit Duotone";S(S({},yr,wr),_r,zr);var xr={kit:{"fa-kit":"fak"}},kr={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},Mr={kit:{fak:"fa-kit"}},qa={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},Ce,Se={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Nr=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone","fa-thumbprint","fa-whiteboard","fa-notdog","fa-notdog-duo","fa-chisel","fa-etch","fa-graphite","fa-jelly","fa-jelly-fill","fa-jelly-duo","fa-slab","fa-slab-press","fa-slab-press-duo","fa-slab-duo","fa-mosaic","fa-pixel","fa-vellum","fa-utility","fa-utility-duo","fa-utility-fill"],Cr="classic",Sr="duotone",Ar="sharp",Lr="sharp-duotone",Ir="chisel",Pr="etch",Er="graphite",Fr="jelly",Tr="jelly-duo",$r="jelly-fill",Dr="mosaic",Or="notdog",jr="notdog-duo",Rr="pixel",Wr="slab",Ur="slab-duo",Hr="slab-press",Vr="slab-press-duo",Yr="thumbprint",Br="utility",Xr="utility-duo",Gr="utility-fill",qr="vellum",Kr="whiteboard",Jr="Classic",Qr="Duotone",Zr="Sharp",eo="Sharp Duotone",ao="Chisel",no="Etch",to="Graphite",io="Jelly",ro="Jelly Duo",oo="Jelly Fill",lo="Mosaic",so="Notdog",co="Notdog Duo",fo="Pixel",uo="Slab",mo="Slab Duo",po="Slab Press",go="Slab Press Duo",ho="Thumbprint",vo="Utility",bo="Utility Duo",yo="Utility Fill",_o="Vellum",wo="Whiteboard";Ce={},S(S(S(S(S(S(S(S(S(S(Ce,Cr,Jr),Sr,Qr),Ar,Zr),Lr,eo),Ir,ao),Pr,no),Er,to),Fr,io),Tr,ro),$r,oo),S(S(S(S(S(S(S(S(S(S(Ce,Dr,lo),Or,so),jr,co),Rr,fo),Wr,uo),Ur,mo),Hr,po),Vr,go),Yr,ho),Br,vo),S(S(S(S(Ce,Xr,bo),Gr,yo),qr,_o),Kr,wo);var zo="kit",xo="kit-duotone",ko="Kit",Mo="Kit Duotone";S(S({},zo,ko),xo,Mo);var No={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"},slab:{"fa-regular":"faslr"},"slab-press":{"fa-regular":"faslpr"},"slab-duo":{"fa-regular":"fasldr"},"slab-press-duo":{"fa-regular":"faslpdr"},pixel:{"fa-regular":"fapr"},mosaic:{"fa-solid":"fams"},vellum:{"fa-solid":"favs"},whiteboard:{"fa-semibold":"fawsb"},thumbprint:{"fa-light":"fatl"},notdog:{"fa-solid":"fans"},"notdog-duo":{"fa-solid":"fands"},etch:{"fa-solid":"faes"},graphite:{"fa-thin":"fagt"},jelly:{"fa-regular":"fajr"},"jelly-fill":{"fa-regular":"fajfr"},"jelly-duo":{"fa-regular":"fajdr"},chisel:{"fa-regular":"facr"},utility:{"fa-semibold":"fausb"},"utility-duo":{"fa-semibold":"faudsb"},"utility-fill":{"fa-semibold":"faufsb"}},Co={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"],slab:["faslr"],"slab-press":["faslpr"],"slab-duo":["fasldr"],"slab-press-duo":["faslpdr"],pixel:["fapr"],mosaic:["fams"],vellum:["favs"],whiteboard:["fawsb"],thumbprint:["fatl"],notdog:["fans"],"notdog-duo":["fands"],etch:["faes"],graphite:["fagt"],jelly:["fajr"],"jelly-fill":["fajfr"],"jelly-duo":["fajdr"],chisel:["facr"],utility:["fausb"],"utility-duo":["faudsb"],"utility-fill":["faufsb"]},aa={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"},slab:{faslr:"fa-regular"},"slab-press":{faslpr:"fa-regular"},"slab-duo":{fasldr:"fa-regular"},"slab-press-duo":{faslpdr:"fa-regular"},pixel:{fapr:"fa-regular"},mosaic:{fams:"fa-solid"},vellum:{favs:"fa-solid"},whiteboard:{fawsb:"fa-semibold"},thumbprint:{fatl:"fa-light"},notdog:{fans:"fa-solid"},"notdog-duo":{fands:"fa-solid"},etch:{faes:"fa-solid"},graphite:{fagt:"fa-thin"},jelly:{fajr:"fa-regular"},"jelly-fill":{fajfr:"fa-regular"},"jelly-duo":{fajdr:"fa-regular"},chisel:{facr:"fa-regular"},utility:{fausb:"fa-semibold"},"utility-duo":{faudsb:"fa-semibold"},"utility-fill":{faufsb:"fa-semibold"}},So=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands","fa-semibold"],rt=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt","faslr","faslpr","fasldr","faslpdr","fapr","fams","favs","fawsb","fatl","fans","fands","faes","fagt","fajr","fajfr","fajdr","facr","fausb","faudsb","faufsb"].concat(Nr,So),Ao=["solid","regular","light","thin","duotone","brands","semibold"],ot=[1,2,3,4,5,6,7,8,9,10],Lo=ot.concat([11,12,13,14,15,16,17,18,19,20]),Io=["aw","fw","pull-left","pull-right"],Po=[].concat(X(Object.keys(Co)),Ao,Io,["2xs","xs","sm","lg","xl","2xl","beat","beat-fade","border","bounce","buzz","canvas-square","canvas-roomy","fade","flip-360","flip-both","flip-horizontal","flip-vertical","flip","float","inverse","jello","layers","layers-bottom-left","layers-bottom-right","layers-counter","layers-text","layers-top-left","layers-top-right","li","pull-end","pull-start","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","spin-snap","spin-snap-4","spin-snap-8","stack-1x","stack-2x","stack","swing","ul","wag","width-auto","width-fixed",Se.GROUP,Se.SWAP_OPACITY,Se.PRIMARY,Se.SECONDARY]).concat(ot.map(function(e){return"".concat(e,"x")})).concat(Lo.map(function(e){return"w-".concat(e)})),Eo={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}},q="___FONT_AWESOME___",na=16,lt="fa",st="svg-inline--fa",te="data-fa-i2svg",ta="data-fa-pseudo-element",Fo="data-fa-pseudo-element-pending",ba="data-prefix",ya="data-icon",Ka="fontawesome-i2svg",To="async",$o=["HTML","HEAD","STYLE","SCRIPT"],ct=["::before","::after",":before",":after"],ft=function(){try{return!0}catch{return!1}}();function we(e){return new Proxy(e,{get:function(n,t){return t in n?n[t]:n[W]}})}var ut=g({},En);ut[W]=g(g(g(g({},{"fa-duotone":"duotone"}),En[W]),Ga.kit),Ga["kit-duotone"]);var Do=we(ut),ia=g({},vr);ia[W]=g(g(g(g({},{duotone:"fad"}),ia[W]),qa.kit),qa["kit-duotone"]);var Ja=we(ia),ra=g({},aa);ra[W]=g(g({},ra[W]),Mr.kit);var _a=we(ra),oa=g({},No);oa[W]=g(g({},oa[W]),xr.kit);we(oa);var Oo=Wi,dt="fa-layers-text",jo=Ui,Ro=g({},pr);we(Ro);var Wo=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Be=Hi,Uo=[].concat(X(br),X(Po)),he=Q.FontAwesomeConfig||{};function Ho(e){var a=D.querySelector("script["+e+"]");if(a)return a.getAttribute(e)}function Vo(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(D&&typeof D.querySelector=="function"){var Yo=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-search-pseudo-elements","searchPseudoElements"],["data-search-pseudo-elements-warnings","searchPseudoElementsWarnings"],["data-search-pseudo-elements-full-scan","searchPseudoElementsFullScan"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Yo.forEach(function(e){var a=je(e,2),n=a[0],t=a[1],i=Vo(Ho(n));i!=null&&(he[t]=i)})}var mt={styleDefault:"solid",familyDefault:W,cssPrefix:lt,replacementClass:st,autoReplaceSvg:!0,autoAddCss:!0,searchPseudoElements:!1,searchPseudoElementsWarnings:!0,searchPseudoElementsFullScan:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};he.familyPrefix&&(he.cssPrefix=he.familyPrefix);var ce=g(g({},mt),he);ce.autoReplaceSvg||(ce.observeMutations=!1);var N={};Object.keys(mt).forEach(function(e){Object.defineProperty(N,e,{enumerable:!0,set:function(n){ce[e]=n,ve.forEach(function(t){return t(N)})},get:function(){return ce[e]}})});Object.defineProperty(N,"familyPrefix",{enumerable:!0,set:function(a){ce.cssPrefix=a,ve.forEach(function(n){return n(N)})},get:function(){return ce.cssPrefix}});Q.FontAwesomeConfig=N;var ve=[];function Bo(e){return ve.push(e),function(){ve.splice(ve.indexOf(e),1)}}var oe=na,G={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Xo(e){if(!(!e||!J)){var a=D.createElement("style");a.setAttribute("type","text/css"),a.innerHTML=e;for(var n=D.head.childNodes,t=null,i=n.length-1;i>-1;i--){var l=n[i],o=(l.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(t=l)}return D.head.insertBefore(a,t),e}}var Go="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Qa(){for(var e=12,a="";e-- >0;)a+=Go[Math.random()*62|0];return a}function fe(e){for(var a=[],n=(e||[]).length>>>0;n--;)a[n]=e[n];return a}function wa(e){return e.classList?fe(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(a){return a})}function pt(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function qo(e){return Object.keys(e||{}).reduce(function(a,n){return a+"".concat(n,'="').concat(pt(e[n]),'" ')},"").trim()}function Re(e){return Object.keys(e||{}).reduce(function(a,n){return a+"".concat(n,": ").concat(e[n].trim(),";")},"")}function za(e){return e.size!==G.size||e.x!==G.x||e.y!==G.y||e.rotate!==G.rotate||e.flipX||e.flipY}function Ko(e){var a=e.transform,n=e.containerWidth,t=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),o="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),s="rotate(".concat(a.rotate," 0 0)"),c={transform:"".concat(l," ").concat(o," ").concat(s)},u={transform:"translate(".concat(t/2*-1," -256)")};return{outer:i,inner:c,path:u}}function Jo(e){var a=e.transform,n=e.width,t=n===void 0?na:n,i=e.height,l=i===void 0?na:i,o="";return Pn?o+="translate(".concat(a.x/oe-t/2,"em, ").concat(a.y/oe-l/2,"em) "):o+="translate(calc(-50% + ".concat(a.x/oe,"em), calc(-50% + ").concat(a.y/oe,"em)) "),o+="scale(".concat(a.size/oe*(a.flipX?-1:1),", ").concat(a.size/oe*(a.flipY?-1:1),") "),o+="rotate(".concat(a.rotate,"deg) "),o}var Qo=`:root, :host {
  --fa-font-solid: normal 900 1em/1 'Font Awesome 7 Free';
  --fa-font-regular: normal 400 1em/1 'Font Awesome 7 Free';
  --fa-font-light: normal 300 1em/1 'Font Awesome 7 Pro';
  --fa-font-thin: normal 100 1em/1 'Font Awesome 7 Pro';
  --fa-font-duotone: normal 900 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-regular: normal 400 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-light: normal 300 1em/1 'Font Awesome 7 Duotone';
  --fa-font-duotone-thin: normal 100 1em/1 'Font Awesome 7 Duotone';
  --fa-font-brands: normal 400 1em/1 'Font Awesome 7 Brands';
  --fa-font-sharp-solid: normal 900 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-regular: normal 400 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-light: normal 300 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-thin: normal 100 1em/1 'Font Awesome 7 Sharp';
  --fa-font-sharp-duotone-solid: normal 900 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-regular: normal 400 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-light: normal 300 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-sharp-duotone-thin: normal 100 1em/1 'Font Awesome 7 Sharp Duotone';
  --fa-font-slab-regular: normal 400 1em/1 'Font Awesome 7 Slab';
  --fa-font-slab-press-regular: normal 400 1em/1 'Font Awesome 7 Slab Press';
  --fa-font-slab-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Duo';
  --fa-font-slab-press-duo-regular: normal 400 1em/1 'Font Awesome 7 Slab Press Duo';
  --fa-font-pixel-regular: normal 400 1em/1 'Font Awesome 7 Pixel';
  --fa-font-mosaic-solid: normal 900 1em/1 'Font Awesome 7 Mosaic';
  --fa-font-vellum-solid: normal 900 1em/1 'Font Awesome 7 Vellum';
  --fa-font-whiteboard-semibold: normal 600 1em/1 'Font Awesome 7 Whiteboard';
  --fa-font-thumbprint-light: normal 300 1em/1 'Font Awesome 7 Thumbprint';
  --fa-font-notdog-solid: normal 900 1em/1 'Font Awesome 7 Notdog';
  --fa-font-notdog-duo-solid: normal 900 1em/1 'Font Awesome 7 Notdog Duo';
  --fa-font-etch-solid: normal 900 1em/1 'Font Awesome 7 Etch';
  --fa-font-graphite-thin: normal 100 1em/1 'Font Awesome 7 Graphite';
  --fa-font-jelly-regular: normal 400 1em/1 'Font Awesome 7 Jelly';
  --fa-font-jelly-fill-regular: normal 400 1em/1 'Font Awesome 7 Jelly Fill';
  --fa-font-jelly-duo-regular: normal 400 1em/1 'Font Awesome 7 Jelly Duo';
  --fa-font-chisel-regular: normal 400 1em/1 'Font Awesome 7 Chisel';
  --fa-font-utility-semibold: normal 600 1em/1 'Font Awesome 7 Utility';
  --fa-font-utility-duo-semibold: normal 600 1em/1 'Font Awesome 7 Utility Duo';
  --fa-font-utility-fill-semibold: normal 600 1em/1 'Font Awesome 7 Utility Fill';
}

.svg-inline--fa {
  box-sizing: content-box;
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285714em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left,
.svg-inline--fa .fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-pull-right,
.svg-inline--fa .fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  inset-block-start: 0.25em; /* syncing vertical alignment with Web Font rendering */
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: var(--fa-width, 1.25em);
}
.fa-layers .svg-inline--fa {
  inset: 0;
  margin: auto;
  position: absolute;
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: calc(10 / 16 * 1em); /* converts a 10px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 10 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 10 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xs {
  font-size: calc(12 / 16 * 1em); /* converts a 12px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 12 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 12 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-sm {
  font-size: calc(14 / 16 * 1em); /* converts a 14px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 14 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 14 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-lg {
  font-size: calc(20 / 16 * 1em); /* converts a 20px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 20 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 20 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-xl {
  font-size: calc(24 / 16 * 1em); /* converts a 24px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 24 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 24 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-2xl {
  font-size: calc(32 / 16 * 1em); /* converts a 32px size into an em-based value that's relative to the scale's 16px base */
  line-height: calc(1 / 32 * 1em); /* sets the line-height of the icon back to that of it's parent */
  vertical-align: calc((6 / 32 - 0.375) * 1em); /* vertically centers the icon taking into account the surrounding text's descender */
}

.fa-width-auto {
  --fa-width: auto;
}

.fa-fw,
.fa-width-fixed {
  --fa-width: 1.25em;
}

.fa-canvas-square {
  padding-block: 0.125em;
  margin-block-end: -0.125em;
}

.fa-canvas-roomy {
  padding-block: 0.25em;
  padding-inline: 0.125em;
  margin-block-end: -0.25em;
  box-sizing: content-box;
}

.fa-ul {
  list-style-type: none;
  margin-inline-start: var(--fa-li-margin, 2.5em);
  padding-inline-start: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  inset-inline-start: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

/* Heads Up: Bordered Icons will not be supported in the future!
  - This feature will be deprecated in the next major release of Font Awesome (v8)!
  - You may continue to use it in this version *v7), but it will not be supported in Font Awesome v8.
*/
/* Notes:
* --@{v.$css-prefix}-border-width = 1/16 by default (to render as ~1px based on a 16px default font-size)
* --@{v.$css-prefix}-border-padding =
  ** 3/16 for vertical padding (to give ~2px of vertical whitespace around an icon considering it's vertical alignment)
  ** 4/16 for horizontal padding (to give ~4px of horizontal whitespace around an icon)
*/
.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.0625em);
  box-sizing: var(--fa-border-box-sizing, content-box);
  padding: var(--fa-border-padding, 0.1875em 0.25em);
}

.fa-pull-left,
.fa-pull-start {
  float: inline-start;
  margin-inline-end: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right,
.fa-pull-end {
  float: inline-end;
  margin-inline-start: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.5s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-flip-360 {
  animation-name: fa-flip-360;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.75s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

.fa-spin-snap {
  animation-name: fa-spin-snap;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-4 {
  animation-name: fa-spin-snap-4;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2.4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-snap-8 {
  animation-name: fa-spin-snap-8;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 4s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-buzz {
  animation-name: fa-buzz;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.6s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-wag {
  animation-name: fa-wag;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: bottom center;
}

.fa-float {
  animation-name: fa-float;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 3s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
  will-change: transform;
}

.fa-swing {
  animation-name: fa-swing;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1.2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
  transform-origin: top center;
}

.fa-jello {
  animation-name: fa-jello;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 0.9s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-out);
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
  .fa-bounce,
  .fa-fade,
  .fa-beat-fade,
  .fa-flip,
  .fa-flip-360,
  .fa-pulse,
  .fa-shake,
  .fa-spin,
  .fa-spin-pulse,
  .fa-buzz,
  .fa-float,
  .fa-jello,
  .fa-spin-snap,
  .fa-spin-snap-4,
  .fa-spin-snap-8,
  .fa-swing,
  .fa-wag {
    animation: none !important;
    transition: none !important;
  }
}
@keyframes fa-beat {
  0% {
    transform: scale(1);
  }
  25% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  45% {
    transform: scale(calc(1.22 * var(--fa-beat-scale, 1.22)));
  }
  65% {
    transform: scale(calc(1.25 * var(--fa-beat-scale, 1.25)));
  }
  90% {
    transform: scale(1);
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    animation-timing-function: var(--fa-animation-timing);
  }
  14% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.06), var(--fa-bounce-start-scale-y, 0.94)) translateY(var(--fa-bounce-anticipation, 3px));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  32% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.94), var(--fa-bounce-jump-scale-y, 1.12)) translateY(calc(-1 * var(--fa-bounce-height, 0.5em)));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  52% {
    transform: scale(1, 1) translateY(calc(-1 * var(--fa-bounce-height, 0.5em) * 1.1));
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  70% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.06), var(--fa-bounce-land-scale-y, 0.92)) translateY(0);
    animation-timing-function: cubic-bezier(0.33, 0.33, 0.66, 1);
  }
  85% {
    transform: scale(0.98, 1.04) translateY(calc(-2px * var(--fa-bounce-rebound, 1)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  0% {
    opacity: 1;
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  40% {
    opacity: var(--fa-fade-opacity, 0.4);
    transform: scale(0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes fa-beat-fade {
  0% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  25% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  45% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  65% {
    opacity: calc(var(--fa-beat-fade-opacity, 0.4) + 0.4);
    transform: scale(var(--fa-beat-fade-scale, 1.28));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
}
@keyframes fa-flip {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  35% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: linear;
  }
  65% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.5));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  92% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-flip-360 {
  0% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.4, 1);
  }
  8% {
    transform: perspective(2em) scale(var(--fa-flip-anticipation-scale, 0.95)) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), 0deg);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  50% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * 0.6));
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  80% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), calc(var(--fa-flip-angle, -360deg) * var(--fa-flip-overshoot, 1.04)));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: perspective(2em) scale(1) rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -360deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(35deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  20% {
    transform: rotate(-22deg) translateX(-1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  35% {
    transform: rotate(15deg) translateX(1px);
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  50% {
    transform: rotate(-9deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  65% {
    transform: rotate(5deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  78% {
    transform: rotate(-3deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  90% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  12% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  16.67% {
    transform: rotate(60deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  28.67% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  33.33% {
    transform: rotate(120deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  45.33% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  62% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  66.67% {
    transform: rotate(240deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  78.67% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  83.33% {
    transform: rotate(300deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  95.33% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-4 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  15% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  40% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  65% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  90% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-spin-snap-8 {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  9% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  12.5% {
    transform: rotate(45deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  21.5% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  25% {
    transform: rotate(90deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  34% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  37.5% {
    transform: rotate(135deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  46.5% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  50% {
    transform: rotate(180deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  59% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  62.5% {
    transform: rotate(225deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  71.5% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  75% {
    transform: rotate(270deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  84% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  87.5% {
    transform: rotate(315deg);
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  96.5% {
    transform: rotate(360deg);
    animation-timing-function: cubic-bezier(0.8, 0, 1, 1);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes fa-buzz {
  0% {
    transform: translateX(0) rotate(0deg);
    animation-timing-function: cubic-bezier(0.1, 0, 0.9, 1);
  }
  5% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.5deg);
  }
  10% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.5deg);
  }
  15% {
    transform: translateX(var(--fa-buzz-distance, 4px)) rotate(0.3deg);
  }
  20% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px))) rotate(-0.3deg);
  }
  25% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.7)) rotate(0.2deg);
  }
  30% {
    transform: translateX(calc(-1 * var(--fa-buzz-distance, 4px) * 0.7)) rotate(-0.2deg);
  }
  35% {
    transform: translateX(calc(var(--fa-buzz-distance, 4px) * 0.4)) rotate(0.1deg);
  }
  40% {
    transform: translateX(0) rotate(0deg);
  }
  100% {
    transform: translateX(0) rotate(0deg);
  }
}
@keyframes fa-wag {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  12% {
    transform: rotate(var(--fa-wag-angle, 12deg));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  24% {
    transform: rotate(2deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  36% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.85));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  48% {
    transform: rotate(1deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.6, 1);
  }
  58% {
    transform: rotate(calc(var(--fa-wag-angle, 12deg) * 0.6));
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-float {
  0% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  15% {
    transform: translateY(calc(-0.4 * var(--fa-float-height, 6px))) translateX(var(--fa-float-drift, 1px)) rotate(var(--fa-float-tilt, 1deg)) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  35% {
    transform: translateY(calc(-1 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-stretch-x, 0.98), var(--fa-float-stretch-y, 1.03));
    animation-timing-function: cubic-bezier(0.5, 0, 0.5, 0);
  }
  50% {
    transform: translateY(calc(-0.92 * var(--fa-float-height, 6px))) translateX(calc(-0.5 * var(--fa-float-drift, 1px))) rotate(calc(-0.5 * var(--fa-float-tilt, 1deg))) scale(0.995, 1.01);
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 0.33);
  }
  70% {
    transform: translateY(calc(-0.3 * var(--fa-float-height, 6px))) translateX(calc(-1 * var(--fa-float-drift, 1px))) rotate(calc(-1 * var(--fa-float-tilt, 1deg))) scale(1, 1);
    animation-timing-function: cubic-bezier(0.33, 0.66, 0.66, 1);
  }
  90% {
    transform: translateY(calc(0.05 * var(--fa-float-height, 6px))) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
    animation-timing-function: cubic-bezier(0.33, 0, 0.66, 1);
  }
  100% {
    transform: translateY(0) translateX(0) rotate(0deg) scale(var(--fa-float-squash-x, 1.02), var(--fa-float-squash-y, 0.98));
  }
}
@keyframes fa-swing {
  0% {
    transform: rotate(0deg);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  8% {
    transform: rotate(var(--fa-swing-angle, 22deg));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  18% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.85));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  28% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.65));
    animation-timing-function: cubic-bezier(0.35, 0, 0.65, 1);
  }
  38% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.45));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: rotate(calc(var(--fa-swing-angle, 22deg) * 0.25));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  56% {
    transform: rotate(calc(-1 * var(--fa-swing-angle, 22deg) * 0.1));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  64% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-jello {
  0% {
    transform: scale(1, 1);
    animation-timing-function: cubic-bezier(0.2, 0, 0.8, 1);
  }
  12% {
    transform: scale(var(--fa-jello-scale-x, 1.15), calc(2 - var(--fa-jello-scale-x, 1.15)));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  24% {
    transform: scale(calc(2 - var(--fa-jello-scale-y, 1.12)), var(--fa-jello-scale-y, 1.12));
    animation-timing-function: cubic-bezier(0.3, 0, 0.7, 1);
  }
  36% {
    transform: scale(calc(1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5), calc(2 - (1 + (var(--fa-jello-scale-x, 1.15) - 1) * 0.5)));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  48% {
    transform: scale(calc(2 - (1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3)), calc(1 + (var(--fa-jello-scale-y, 1.12) - 1) * 0.3));
    animation-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  }
  58% {
    transform: scale(1.02, 0.98);
    animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }
  68% {
    transform: scale(1, 1);
  }
  100% {
    transform: scale(1, 1);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.svg-inline--fa.fa-inverse {
  fill: var(--fa-inverse, #fff);
}

.fa-stack {
  display: inline-block;
  height: 2em;
  line-height: 2em;
  position: relative;
  vertical-align: middle;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.svg-inline--fa.fa-stack-1x {
  --fa-width: 1.25em;
  height: 1em;
  width: var(--fa-width);
}
.svg-inline--fa.fa-stack-2x {
  --fa-width: 2.5em;
  height: 2em;
  width: var(--fa-width);
}

.fa-stack-1x,
.fa-stack-2x {
  inset: 0;
  margin: auto;
  position: absolute;
  z-index: var(--fa-stack-z-index, auto);
}`;function gt(){var e=lt,a=st,n=N.cssPrefix,t=N.replacementClass,i=Qo;if(n!==e||t!==a){var l=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(a),"g");i=i.replace(l,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(t))}return i}var Za=!1;function Xe(){N.autoAddCss&&!Za&&(Xo(gt()),Za=!0)}var Zo={mixout:function(){return{dom:{css:gt,insertCss:Xe}}},hooks:function(){return{beforeDOMElementCreation:function(){Xe()},beforeI2svg:function(){Xe()}}}},K=Q||{};K[q]||(K[q]={});K[q].styles||(K[q].styles={});K[q].hooks||(K[q].hooks={});K[q].shims||(K[q].shims=[]);var B=K[q],ht=[],vt=function(){D.removeEventListener("DOMContentLoaded",vt),$e=1,ht.map(function(a){return a()})},$e=!1;J&&($e=(D.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(D.readyState),$e||D.addEventListener("DOMContentLoaded",vt));function e1(e){J&&($e?setTimeout(e,0):ht.push(e))}function ze(e){var a=e.tag,n=e.attributes,t=n===void 0?{}:n,i=e.children,l=i===void 0?[]:i;return typeof e=="string"?pt(e):"<".concat(a," ").concat(qo(t),">").concat(l.map(ze).join(""),"</").concat(a,">")}function en(e,a,n){if(e&&e[a]&&e[a][n])return{prefix:a,iconName:n,icon:e[a][n]}}var Ge=function(a,n,t,i){var l=Object.keys(a),o=l.length,s=n,c,u,m;for(t===void 0?(c=1,m=a[l[0]]):(c=0,m=t);c<o;c++)u=l[c],m=s(m,a[u],u,a);return m};function bt(e){return X(e).length!==1?null:e.codePointAt(0).toString(16)}function an(e){return Object.keys(e).reduce(function(a,n){var t=e[n],i=!!t.icon;return i?a[t.iconName]=t.icon:a[n]=t,a},{})}function la(e,a){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},t=n.skipHooks,i=t===void 0?!1:t,l=an(a);typeof B.hooks.addPack=="function"&&!i?B.hooks.addPack(e,an(a)):B.styles[e]=g(g({},B.styles[e]||{}),l),e==="fas"&&la("fa",a)}var ye=B.styles,a1=B.shims,yt=Object.keys(_a),n1=yt.reduce(function(e,a){return e[a]=Object.keys(_a[a]),e},{}),xa=null,_t={},wt={},zt={},xt={},kt={};function t1(e){return~Uo.indexOf(e)}function i1(e,a){var n=a.split("-"),t=n[0],i=n.slice(1).join("-");return t===e&&i!==""&&!t1(i)?i:null}var Mt=function(){var a=function(l){return Ge(ye,function(o,s,c){return o[c]=Ge(s,l,{}),o},{})};_t=a(function(i,l,o){if(l[3]&&(i[l[3]]=o),l[2]){var s=l[2].filter(function(c){return typeof c=="number"});s.forEach(function(c){i[c.toString(16)]=o})}return i}),wt=a(function(i,l,o){if(i[o]=o,l[2]){var s=l[2].filter(function(c){return typeof c=="string"});s.forEach(function(c){i[c]=o})}return i}),kt=a(function(i,l,o){var s=l[2];return i[o]=o,s.forEach(function(c){i[c]=o}),i});var n="far"in ye||N.autoFetchSvg,t=Ge(a1,function(i,l){var o=l[0],s=l[1],c=l[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(i.names[o]={prefix:s,iconName:c}),typeof o=="number"&&(i.unicodes[o.toString(16)]={prefix:s,iconName:c}),i},{names:{},unicodes:{}});zt=t.names,xt=t.unicodes,xa=We(N.styleDefault,{family:N.familyDefault})};Bo(function(e){xa=We(e.styleDefault,{family:N.familyDefault})});Mt();function ka(e,a){return(_t[e]||{})[a]}function r1(e,a){return(wt[e]||{})[a]}function ne(e,a){return(kt[e]||{})[a]}function Nt(e){return zt[e]||{prefix:null,iconName:null}}function o1(e){var a=xt[e],n=ka("fas",e);return a||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Z(){return xa}var Ct=function(){return{prefix:null,iconName:null,rest:[]}};function l1(e){var a=W,n=yt.reduce(function(t,i){return t[i]="".concat(N.cssPrefix,"-").concat(i),t},{});return tt.forEach(function(t){(e.includes(n[t])||e.some(function(i){return n1[t].includes(i)}))&&(a=t)}),a}function We(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.family,t=n===void 0?W:n,i=Do[t][e];if(t===_e&&!e)return"fad";var l=Ja[t][e]||Ja[t][i],o=e in B.styles?e:null,s=l||o||null;return s}function s1(e){var a=[],n=null;return e.forEach(function(t){var i=i1(N.cssPrefix,t);i?n=i:t&&a.push(t)}),{iconName:n,rest:a}}function nn(e){return e.sort().filter(function(a,n,t){return t.indexOf(a)===n})}var tn=rt.concat(it);function Ue(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.skipLookups,t=n===void 0?!1:n,i=null,l=nn(e.filter(function(v){return tn.includes(v)})),o=nn(e.filter(function(v){return!tn.includes(v)})),s=l.filter(function(v){return i=v,!Fn.includes(v)}),c=je(s,1),u=c[0],m=u===void 0?null:u,d=l1(l),f=g(g({},s1(o)),{},{prefix:We(m,{family:d})});return g(g(g({},f),d1({values:e,family:d,styles:ye,config:N,canonical:f,givenPrefix:i})),c1(t,i,f))}function c1(e,a,n){var t=n.prefix,i=n.iconName;if(e||!t||!i)return{prefix:t,iconName:i};var l=a==="fa"?Nt(i):{},o=ne(t,i);return i=l.iconName||o||i,t=l.prefix||t,t==="far"&&!ye.far&&ye.fas&&!N.autoFetchSvg&&(t="fas"),{prefix:t,iconName:i}}var f1=tt.filter(function(e){return e!==W||e!==_e}),u1=Object.keys(aa).filter(function(e){return e!==W}).map(function(e){return Object.keys(aa[e])}).flat();function d1(e){var a=e.values,n=e.family,t=e.canonical,i=e.givenPrefix,l=i===void 0?"":i,o=e.styles,s=o===void 0?{}:o,c=e.config,u=c===void 0?{}:c,m=n===_e,d=a.includes("fa-duotone")||a.includes("fad"),f=u.familyDefault==="duotone",v=t.prefix==="fad"||t.prefix==="fa-duotone";if(!m&&(d||f||v)&&(t.prefix="fad"),(a.includes("fa-brands")||a.includes("fab"))&&(t.prefix="fab"),!t.prefix&&f1.includes(n)){var x=Object.keys(s).find(function(h){return u1.includes(h)});if(x||u.autoFetchSvg){var C=hr.get(n).defaultShortPrefixId;t.prefix=C,t.iconName=ne(t.prefix,t.iconName)||t.iconName}}return(t.prefix==="fa"||l==="fa")&&(t.prefix=Z()||"fas"),t}var m1=function(){function e(){Pi(this,e),this.definitions={}}return Fi(e,[{key:"add",value:function(){for(var n=this,t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];var o=i.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=g(g({},n.definitions[s]||{}),o[s]),la(s,o[s]);var c=_a[W][s];c&&la(c,o[s]),Mt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,t){var i=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(i).map(function(l){var o=i[l],s=o.prefix,c=o.iconName,u=o.icon,m=u[2];n[s]||(n[s]={}),m.length>0&&m.forEach(function(d){typeof d=="string"&&(n[s][d]=u)}),n[s][c]=u}),n}}])}(),rn=[],le={},se={},p1=Object.keys(se);function g1(e,a){var n=a.mixoutsTo;return rn=e,le={},Object.keys(se).forEach(function(t){p1.indexOf(t)===-1&&delete se[t]}),rn.forEach(function(t){var i=t.mixout?t.mixout():{};if(Object.keys(i).forEach(function(o){typeof i[o]=="function"&&(n[o]=i[o]),Te(i[o])==="object"&&Object.keys(i[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=i[o][s]})}),t.hooks){var l=t.hooks();Object.keys(l).forEach(function(o){le[o]||(le[o]=[]),le[o].push(l[o])})}t.provides&&t.provides(se)}),n}function sa(e,a){for(var n=arguments.length,t=new Array(n>2?n-2:0),i=2;i<n;i++)t[i-2]=arguments[i];var l=le[e]||[];return l.forEach(function(o){a=o.apply(null,[a].concat(t))}),a}function ie(e){for(var a=arguments.length,n=new Array(a>1?a-1:0),t=1;t<a;t++)n[t-1]=arguments[t];var i=le[e]||[];i.forEach(function(l){l.apply(null,n)})}function ee(){var e=arguments[0],a=Array.prototype.slice.call(arguments,1);return se[e]?se[e].apply(null,a):void 0}function ca(e){e.prefix==="fa"&&(e.prefix="fas");var a=e.iconName,n=e.prefix||Z();if(a)return a=ne(n,a)||a,en(St.definitions,n,a)||en(B.styles,n,a)}var St=new m1,h1=function(){N.autoReplaceSvg=!1,N.observeMutations=!1,ie("noAuto")},v1={i2svg:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return J?(ie("beforeI2svg",a),ee("pseudoElements2svg",a),ee("i2svg",a)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=a.autoReplaceSvgRoot;N.autoReplaceSvg===!1&&(N.autoReplaceSvg=!0),N.observeMutations=!0,e1(function(){y1({autoReplaceSvgRoot:n}),ie("watch",a)})}},b1={icon:function(a){if(a===null)return null;if(Te(a)==="object"&&a.prefix&&a.iconName)return{prefix:a.prefix,iconName:ne(a.prefix,a.iconName)||a.iconName};if(Array.isArray(a)&&a.length===2){var n=a[1].indexOf("fa-")===0?a[1].slice(3):a[1],t=We(a[0]);return{prefix:t,iconName:ne(t,n)||n}}if(typeof a=="string"&&(a.indexOf("".concat(N.cssPrefix,"-"))>-1||a.match(Oo))){var i=Ue(a.split(" "),{skipLookups:!0});return{prefix:i.prefix||Z(),iconName:ne(i.prefix,i.iconName)||i.iconName}}if(typeof a=="string"){var l=Z();return{prefix:l,iconName:ne(l,a)||a}}}},H={noAuto:h1,config:N,dom:v1,parse:b1,library:St,findIconDefinition:ca,toHtml:ze},y1=function(){var a=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=a.autoReplaceSvgRoot,t=n===void 0?D:n;(Object.keys(B.styles).length>0||N.autoFetchSvg)&&J&&N.autoReplaceSvg&&H.dom.i2svg({node:t})};function He(e,a){return Object.defineProperty(e,"abstract",{get:a}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(t){return ze(t)})}}),Object.defineProperty(e,"node",{get:function(){if(J){var t=D.createElement("div");return t.innerHTML=e.html,t.children}}}),e}function _1(e){var a=e.children,n=e.main,t=e.mask,i=e.attributes,l=e.styles,o=e.transform;if(za(o)&&n.found&&!t.found){var s=n.width,c=n.height,u={x:s/c/2,y:.5};i.style=Re(g(g({},l),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:i,children:a}]}function w1(e){var a=e.prefix,n=e.iconName,t=e.children,i=e.attributes,l=e.symbol,o=l===!0?"".concat(a,"-").concat(N.cssPrefix,"-").concat(n):l;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:g(g({},i),{},{id:o}),children:t}]}]}function z1(e){var a=["aria-label","aria-labelledby","title","role"];return a.some(function(n){return n in e})}function Ma(e){var a=e.icons,n=a.main,t=a.mask,i=e.prefix,l=e.iconName,o=e.transform,s=e.symbol,c=e.maskId,u=e.extra,m=e.watchable,d=m===void 0?!1:m,f=t.found?t:n,v=f.width,x=f.height,C=[N.replacementClass,l?"".concat(N.cssPrefix,"-").concat(l):""].filter(function(L){return u.classes.indexOf(L)===-1}).filter(function(L){return L!==""||!!L}).concat(u.classes).join(" "),h={children:[],attributes:g(g({},u.attributes),{},{"data-prefix":i,"data-icon":l,class:C,role:u.attributes.role||"img",viewBox:"0 0 ".concat(v," ").concat(x)})};!z1(u.attributes)&&!u.attributes["aria-hidden"]&&(h.attributes["aria-hidden"]="true"),d&&(h.attributes[te]="");var z=g(g({},h),{},{prefix:i,iconName:l,main:n,mask:t,maskId:c,transform:o,symbol:s,styles:g({},u.styles)}),k=t.found&&n.found?ee("generateAbstractMask",z)||{children:[],attributes:{}}:ee("generateAbstractIcon",z)||{children:[],attributes:{}},F=k.children,O=k.attributes;return z.children=F,z.attributes=O,s?w1(z):_1(z)}function on(e){var a=e.content,n=e.width,t=e.height,i=e.transform,l=e.extra,o=e.watchable,s=o===void 0?!1:o,c=g(g({},l.attributes),{},{class:l.classes.join(" ")});s&&(c[te]="");var u=g({},l.styles);za(i)&&(u.transform=Jo({transform:i,width:n,height:t}),u["-webkit-transform"]=u.transform);var m=Re(u);m.length>0&&(c.style=m);var d=[];return d.push({tag:"span",attributes:c,children:[a]}),d}function x1(e){var a=e.content,n=e.extra,t=g(g({},n.attributes),{},{class:n.classes.join(" ")}),i=Re(n.styles);i.length>0&&(t.style=i);var l=[];return l.push({tag:"span",attributes:t,children:[a]}),l}var qe=B.styles;function fa(e){var a=e[0],n=e[1],t=e.slice(4),i=je(t,1),l=i[0],o=null;return Array.isArray(l)?o={tag:"g",attributes:{class:"".concat(N.cssPrefix,"-").concat(Be.GROUP)},children:[{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Be.SECONDARY),fill:"currentColor",d:l[0]}},{tag:"path",attributes:{class:"".concat(N.cssPrefix,"-").concat(Be.PRIMARY),fill:"currentColor",d:l[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:l}},{found:!0,width:a,height:n,icon:o}}var k1={found:!1,width:512,height:512};function M1(e,a){!ft&&!N.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(a,'" is missing.'))}function ua(e,a){var n=a;return a==="fa"&&N.styleDefault!==null&&(a=Z()),new Promise(function(t,i){if(n==="fa"){var l=Nt(e)||{};e=l.iconName||e,a=l.prefix||a}if(e&&a&&qe[a]&&qe[a][e]){var o=qe[a][e];return t(fa(o))}M1(e,a),t(g(g({},k1),{},{icon:N.showMissingIcons&&e?ee("missingIconAbstract")||{}:{}}))})}var ln=function(){},da=N.measurePerformance&&Me&&Me.mark&&Me.measure?Me:{mark:ln,measure:ln},ge='FA "7.3.1"',N1=function(a){return da.mark("".concat(ge," ").concat(a," begins")),function(){return At(a)}},At=function(a){da.mark("".concat(ge," ").concat(a," ends")),da.measure("".concat(ge," ").concat(a),"".concat(ge," ").concat(a," begins"),"".concat(ge," ").concat(a," ends"))},Na={begin:N1,end:At},Ie=function(){};function sn(e){var a=e.getAttribute?e.getAttribute(te):null;return typeof a=="string"}function C1(e){var a=e.getAttribute?e.getAttribute(ba):null,n=e.getAttribute?e.getAttribute(ya):null;return a&&n}function S1(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(N.replacementClass)}function A1(){if(N.autoReplaceSvg===!0)return Pe.replace;var e=Pe[N.autoReplaceSvg];return e||Pe.replace}function L1(e){return D.createElementNS("http://www.w3.org/2000/svg",e)}function I1(e){return D.createElement(e)}function Lt(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=a.ceFn,t=n===void 0?e.tag==="svg"?L1:I1:n;if(typeof e=="string")return D.createTextNode(e);var i=t(e.tag);Object.keys(e.attributes||[]).forEach(function(o){i.setAttribute(o,e.attributes[o])});var l=e.children||[];return l.forEach(function(o){i.appendChild(Lt(o,{ceFn:t}))}),i}function P1(e){var a=" ".concat(e.outerHTML," ");return a="".concat(a,"Font Awesome fontawesome.com "),a}var Pe={replace:function(a){var n=a[0];if(n.parentNode)if(a[1].forEach(function(i){n.parentNode.insertBefore(Lt(i),n)}),n.getAttribute(te)===null&&N.keepOriginalSource){var t=D.createComment(P1(n));n.parentNode.replaceChild(t,n)}else n.remove()},nest:function(a){var n=a[0],t=a[1];if(~wa(n).indexOf(N.replacementClass))return Pe.replace(a);var i=new RegExp("".concat(N.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){var l=t[0].attributes.class.split(" ").reduce(function(s,c){return c===N.replacementClass||c.match(i)?s.toSvg.push(c):s.toNode.push(c),s},{toNode:[],toSvg:[]});t[0].attributes.class=l.toSvg.join(" "),l.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",l.toNode.join(" "))}var o=t.map(function(s){return ze(s)}).join(`
`);n.setAttribute(te,""),n.innerHTML=o}};function cn(e){e()}function It(e,a){var n=typeof a=="function"?a:Ie;if(e.length===0)n();else{var t=cn;N.mutateApproach===To&&(t=Q.requestAnimationFrame||cn),t(function(){var i=A1(),l=Na.begin("mutate");e.map(i),l(),n()})}}var Ca=!1;function Pt(){Ca=!0}function ma(){Ca=!1}var De=null;function fn(e){if(Xa&&N.observeMutations){var a=e.treeCallback,n=a===void 0?Ie:a,t=e.nodeCallback,i=t===void 0?Ie:t,l=e.pseudoElementsCallback,o=l===void 0?Ie:l,s=e.observeMutationsRoot,c=s===void 0?D:s;De=new Xa(function(u){if(!Ca){var m=Z();fe(u).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!sn(d.addedNodes[0])&&(N.searchPseudoElements&&o(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&N.searchPseudoElements&&o([d.target],!0),d.type==="attributes"&&sn(d.target)&&~Wo.indexOf(d.attributeName))if(d.attributeName==="class"&&C1(d.target)){var f=Ue(wa(d.target)),v=f.prefix,x=f.iconName;d.target.setAttribute(ba,v||m),x&&d.target.setAttribute(ya,x)}else S1(d.target)&&i(d.target)})}}),J&&De.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function E1(){De&&De.disconnect()}function F1(e){var a=e.getAttribute("style"),n=[];return a&&(n=a.split(";").reduce(function(t,i){var l=i.split(":"),o=l[0],s=l.slice(1);return o&&s.length>0&&(t[o]=s.join(":").trim()),t},{})),n}function T1(e){var a=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),t=e.innerText!==void 0?e.innerText.trim():"",i=Ue(wa(e));return i.prefix||(i.prefix=Z()),a&&n&&(i.prefix=a,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&t.length>0&&(i.iconName=r1(i.prefix,e.innerText)||ka(i.prefix,bt(e.innerText))),!i.iconName&&N.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function $1(e){var a=fe(e.attributes).reduce(function(n,t){return n.name!=="class"&&n.name!=="style"&&(n[t.name]=t.value),n},{});return a}function D1(){return{iconName:null,prefix:null,transform:G,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function un(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=T1(e),t=n.iconName,i=n.prefix,l=n.rest,o=$1(e),s=sa("parseNodeAttributes",{},e),c=a.styleParser?F1(e):[];return g({iconName:t,prefix:i,transform:G,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:l,styles:c,attributes:o}},s)}var O1=B.styles;function Et(e){var a=N.autoReplaceSvg==="nest"?un(e,{styleParser:!1}):un(e);return~a.extra.classes.indexOf(dt)?ee("generateLayersText",e,a):ee("generateSvgReplacementMutation",e,a)}function j1(){return[].concat(X(it),X(rt))}function dn(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!J)return Promise.resolve();var n=D.documentElement.classList,t=function(d){return n.add("".concat(Ka,"-").concat(d))},i=function(d){return n.remove("".concat(Ka,"-").concat(d))},l=N.autoFetchSvg?j1():Fn.concat(Object.keys(O1));l.includes("fa")||l.push("fa");var o=[".".concat(dt,":not([").concat(te,"])")].concat(l.map(function(m){return".".concat(m,":not([").concat(te,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=fe(e.querySelectorAll(o))}catch{}if(s.length>0)t("pending"),i("complete");else return Promise.resolve();var c=Na.begin("onTree"),u=s.reduce(function(m,d){try{var f=Et(d);f&&m.push(f)}catch(v){ft||v.name==="MissingIcon"&&console.error(v)}return m},[]);return new Promise(function(m,d){Promise.all(u).then(function(f){It(f,function(){t("active"),t("complete"),i("pending"),typeof a=="function"&&a(),c(),m()})}).catch(function(f){c(),d(f)})})}function R1(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Et(e).then(function(n){n&&It([n],a)})}function W1(e){return function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=(a||{}).icon?a:ca(a||{}),i=n.mask;return i&&(i=(i||{}).icon?i:ca(i||{})),e(t,g(g({},n),{},{mask:i}))}}var U1=function(a){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.transform,i=t===void 0?G:t,l=n.symbol,o=l===void 0?!1:l,s=n.mask,c=s===void 0?null:s,u=n.maskId,m=u===void 0?null:u,d=n.classes,f=d===void 0?[]:d,v=n.attributes,x=v===void 0?{}:v,C=n.styles,h=C===void 0?{}:C;if(a){var z=a.prefix,k=a.iconName,F=a.icon;return He(g({type:"icon"},a),function(){return ie("beforeDOMElementCreation",{iconDefinition:a,params:n}),Ma({icons:{main:fa(F),mask:c?fa(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:z,iconName:k,transform:g(g({},G),i),symbol:o,maskId:m,extra:{attributes:x,styles:h,classes:f}})})}},H1={mixout:function(){return{icon:W1(U1)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=dn,n.nodeCallback=R1,n}}},provides:function(a){a.i2svg=function(n){var t=n.node,i=t===void 0?D:t,l=n.callback,o=l===void 0?function(){}:l;return dn(i,o)},a.generateSvgReplacementMutation=function(n,t){var i=t.iconName,l=t.prefix,o=t.transform,s=t.symbol,c=t.mask,u=t.maskId,m=t.extra;return new Promise(function(d,f){Promise.all([ua(i,l),c.iconName?ua(c.iconName,c.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(v){var x=je(v,2),C=x[0],h=x[1];d([n,Ma({icons:{main:C,mask:h},prefix:l,iconName:i,transform:o,symbol:s,maskId:u,extra:m,watchable:!0})])}).catch(f)})},a.generateAbstractIcon=function(n){var t=n.children,i=n.attributes,l=n.main,o=n.transform,s=n.styles,c=Re(s);c.length>0&&(i.style=c);var u;return za(o)&&(u=ee("generateAbstractTransformGrouping",{main:l,transform:o,containerWidth:l.width,iconWidth:l.width})),t.push(u||l.icon),{children:t,attributes:i}}}},V1={mixout:function(){return{layer:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.classes,l=i===void 0?[]:i;return He({type:"layer"},function(){ie("beforeDOMElementCreation",{assembler:n,params:t});var o=[];return n(function(s){Array.isArray(s)?s.map(function(c){o=o.concat(c.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(N.cssPrefix,"-layers")].concat(X(l)).join(" ")},children:o}]})}}}},Y1={mixout:function(){return{counter:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};t.title;var i=t.classes,l=i===void 0?[]:i,o=t.attributes,s=o===void 0?{}:o,c=t.styles,u=c===void 0?{}:c;return He({type:"counter",content:n},function(){return ie("beforeDOMElementCreation",{content:n,params:t}),x1({content:n.toString(),extra:{attributes:s,styles:u,classes:["".concat(N.cssPrefix,"-layers-counter")].concat(X(l))}})})}}}},B1={mixout:function(){return{text:function(n){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=t.transform,l=i===void 0?G:i,o=t.classes,s=o===void 0?[]:o,c=t.attributes,u=c===void 0?{}:c,m=t.styles,d=m===void 0?{}:m;return He({type:"text",content:n},function(){return ie("beforeDOMElementCreation",{content:n,params:t}),on({content:n,transform:g(g({},G),l),extra:{attributes:u,styles:d,classes:["".concat(N.cssPrefix,"-layers-text")].concat(X(s))}})})}}},provides:function(a){a.generateLayersText=function(n,t){var i=t.transform,l=t.extra,o=null,s=null;if(Pn){var c=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/c,s=u.height/c}return Promise.resolve([n,on({content:n.innerHTML,width:o,height:s,transform:i,extra:l,watchable:!0})])}}},Ft=new RegExp('"',"ug"),mn=[1105920,1112319],pn=g(g(g(g({},{FontAwesome:{normal:"fas",400:"fas"}}),gr),Eo),kr),pa=Object.keys(pn).reduce(function(e,a){return e[a.toLowerCase()]=pn[a],e},{}),X1=Object.keys(pa).reduce(function(e,a){var n=pa[a];return e[a]=n[900]||X(Object.entries(n))[0][1],e},{});function G1(e){var a=e.replace(Ft,"");return bt(X(a)[0]||"")}function q1(e){var a=e.getPropertyValue("font-feature-settings").includes("ss01"),n=e.getPropertyValue("content"),t=n.replace(Ft,""),i=t.codePointAt(0),l=i>=mn[0]&&i<=mn[1],o=t.length===2?t[0]===t[1]:!1;return l||o||a}function K1(e,a){var n=e.replace(/^['"]|['"]$/g,"").toLowerCase(),t=parseInt(a),i=isNaN(t)?"normal":t;return(pa[n]||{})[i]||X1[n]}function gn(e,a){var n="".concat(Fo).concat(a.replace(":","-"));return new Promise(function(t,i){if(e.getAttribute(n)!==null)return t();var l=fe(e.children),o=l.filter(function(_){return _.getAttribute(ta)===a})[0],s=Q.getComputedStyle(e,a),c=s.getPropertyValue("font-family"),u=c.match(jo),m=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!u)return e.removeChild(o),t();if(u&&d!=="none"&&d!==""){var f=s.getPropertyValue("content"),v=K1(c,m),x=G1(f),C=u[0].startsWith("FontAwesome"),h=q1(s),z=ka(v,x),k=z;if(C){var F=o1(x);F.iconName&&F.prefix&&(z=F.iconName,v=F.prefix)}if(z&&!h&&(!o||o.getAttribute(ba)!==v||o.getAttribute(ya)!==k)){e.setAttribute(n,k),o&&e.removeChild(o);var O=D1(),L=O.extra;L.attributes[ta]=a,ua(z,v).then(function(_){var p=Ma(g(g({},O),{},{icons:{main:_,mask:Ct()},prefix:v,iconName:k,extra:L,watchable:!0})),E=D.createElementNS("http://www.w3.org/2000/svg","svg");a==="::before"?e.insertBefore(E,e.firstChild):e.appendChild(E),E.outerHTML=p.map(function(w){return ze(w)}).join(`
`),e.removeAttribute(n),t()}).catch(i)}else t()}else t()})}function J1(e){return Promise.all([gn(e,"::before"),gn(e,"::after")])}function Q1(e){return e.parentNode!==document.head&&!~$o.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ta)&&(!e.parentNode||e.parentNode.tagName!=="svg")}var Z1=function(a){return!!a&&ct.some(function(n){return a.includes(n)})},el=function(a){if(!a)return[];var n=new Set,t=a.split(/,(?![^()]*\))/).map(function(c){return c.trim()});t=t.flatMap(function(c){return c.includes("(")?c:c.split(",").map(function(u){return u.trim()})});var i=Le(t),l;try{for(i.s();!(l=i.n()).done;){var o=l.value;if(Z1(o)){var s=ct.reduce(function(c,u){return c.replace(u,"")},o);s!==""&&s!=="*"&&n.add(s)}}}catch(c){i.e(c)}finally{i.f()}return n};function hn(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(J){var n;if(a)n=e;else if(N.searchPseudoElementsFullScan)n=e.querySelectorAll("*");else{var t=new Set,i=Le(document.styleSheets),l;try{for(i.s();!(l=i.n()).done;){var o=l.value;try{var s=Le(o.cssRules),c;try{for(s.s();!(c=s.n()).done;){var u=c.value,m=el(u.selectorText),d=Le(m),f;try{for(d.s();!(f=d.n()).done;){var v=f.value;t.add(v)}}catch(C){d.e(C)}finally{d.f()}}}catch(C){s.e(C)}finally{s.f()}}catch(C){N.searchPseudoElementsWarnings&&console.warn("Font Awesome: cannot parse stylesheet: ".concat(o.href," (").concat(C.message,`)
If it declares any Font Awesome CSS pseudo-elements, they will not be rendered as SVG icons. Add crossorigin="anonymous" to the <link>, enable searchPseudoElementsFullScan for slower but more thorough DOM parsing, or suppress this warning by setting searchPseudoElementsWarnings to false.`))}}}catch(C){i.e(C)}finally{i.f()}if(!t.size)return;var x=Array.from(t).join(", ");try{n=e.querySelectorAll(x)}catch{}}return new Promise(function(C,h){var z=fe(n).filter(Q1).map(J1),k=Na.begin("searchPseudoElements");Pt(),Promise.all(z).then(function(){k(),ma(),C()}).catch(function(){k(),ma(),h()})})}}var al={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=hn,n}}},provides:function(a){a.pseudoElements2svg=function(n){var t=n.node,i=t===void 0?D:t;N.searchPseudoElements&&hn(i)}}},vn=!1,nl={mixout:function(){return{dom:{unwatch:function(){Pt(),vn=!0}}}},hooks:function(){return{bootstrap:function(){fn(sa("mutationObserverCallbacks",{}))},noAuto:function(){E1()},watch:function(n){var t=n.observeMutationsRoot;vn?ma():fn(sa("mutationObserverCallbacks",{observeMutationsRoot:t}))}}}},bn=function(a){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return a.toLowerCase().split(" ").reduce(function(t,i){var l=i.toLowerCase().split("-"),o=l[0],s=l.slice(1).join("-");if(o&&s==="h")return t.flipX=!0,t;if(o&&s==="v")return t.flipY=!0,t;if(s=parseFloat(s),isNaN(s))return t;switch(o){case"grow":t.size=t.size+s;break;case"shrink":t.size=t.size-s;break;case"left":t.x=t.x-s;break;case"right":t.x=t.x+s;break;case"up":t.y=t.y-s;break;case"down":t.y=t.y+s;break;case"rotate":t.rotate=t.rotate+s;break}return t},n)},tl={mixout:function(){return{parse:{transform:function(n){return bn(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,t){var i=t.getAttribute("data-fa-transform");return i&&(n.transform=bn(i)),n}}},provides:function(a){a.generateAbstractTransformGrouping=function(n){var t=n.main,i=n.transform,l=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(l/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),u="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),m="rotate(".concat(i.rotate," 0 0)"),d={transform:"".concat(c," ").concat(u," ").concat(m)},f={transform:"translate(".concat(o/2*-1," -256)")},v={outer:s,inner:d,path:f};return{tag:"g",attributes:g({},v.outer),children:[{tag:"g",attributes:g({},v.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:g(g({},t.icon.attributes),v.path)}]}]}}}},Ke={x:0,y:0,width:"100%",height:"100%"};function yn(e){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||a)&&(e.attributes.fill="black"),e}function il(e){return e.tag==="g"?e.children:[e]}var rl={hooks:function(){return{parseNodeAttributes:function(n,t){var i=t.getAttribute("data-fa-mask"),l=i?Ue(i.split(" ").map(function(o){return o.trim()})):Ct();return l.prefix||(l.prefix=Z()),n.mask=l,n.maskId=t.getAttribute("data-fa-mask-id"),n}}},provides:function(a){a.generateAbstractMask=function(n){var t=n.children,i=n.attributes,l=n.main,o=n.mask,s=n.maskId,c=n.transform,u=l.width,m=l.icon,d=o.width,f=o.icon,v=Ko({transform:c,containerWidth:d,iconWidth:u}),x={tag:"rect",attributes:g(g({},Ke),{},{fill:"white"})},C=m.children?{children:m.children.map(yn)}:{},h={tag:"g",attributes:g({},v.inner),children:[yn(g({tag:m.tag,attributes:g(g({},m.attributes),v.path)},C))]},z={tag:"g",attributes:g({},v.outer),children:[h]},k="mask-".concat(s||Qa()),F="clip-".concat(s||Qa()),O={tag:"mask",attributes:g(g({},Ke),{},{id:k,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,z]},L={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:il(f)},O]};return t.push(L,{tag:"rect",attributes:g({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(k,")")},Ke)}),{children:t,attributes:i}}}},ol={provides:function(a){var n=!1;Q.matchMedia&&(n=Q.matchMedia("(prefers-reduced-motion: reduce)").matches),a.missingIconAbstract=function(){var t=[],i={fill:"currentColor"},l={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:g(g({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=g(g({},l),{},{attributeName:"opacity"}),s={tag:"circle",attributes:g(g({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:g(g({},l),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:g(g({},o),{},{values:"1;0;1;1;0;1;"})}),t.push(s),t.push({tag:"path",attributes:g(g({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:g(g({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||t.push({tag:"path",attributes:g(g({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:g(g({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},ll={hooks:function(){return{parseNodeAttributes:function(n,t){var i=t.getAttribute("data-fa-symbol"),l=i===null?!1:i===""?!0:i;return n.symbol=l,n}}}},sl=[Zo,H1,V1,Y1,B1,al,nl,tl,rl,ol,ll];g1(sl,{mixoutsTo:H});H.noAuto;H.config;H.library;H.dom;H.parse;H.findIconDefinition;H.toHtml;var cl=H.icon;H.layer;H.text;H.counter;/*!
 * Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var fl={prefix:"fas",iconName:"dollar-sign",icon:[320,512,[128178,61781,"dollar","usd"],"24","M136 24c0-13.3 10.7-24 24-24s24 10.7 24 24l0 40 56 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-114.9 0c-24.9 0-45.1 20.2-45.1 45.1 0 22.5 16.5 41.5 38.7 44.7l91.6 13.1c53.8 7.7 93.7 53.7 93.7 108 0 60.3-48.9 109.1-109.1 109.1l-10.9 0 0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40-72 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l130.9 0c24.9 0 45.1-20.2 45.1-45.1 0-22.5-16.5-41.5-38.7-44.7l-91.6-13.1C55.9 273.5 16 227.4 16 173.1 16 112.9 64.9 64 125.1 64l10.9 0 0-40z"]},ul={prefix:"fas",iconName:"map-pin",icon:[320,512,[128205],"f276","M192 284.4C256.1 269.9 304 212.5 304 144 304 64.5 239.5 0 160 0S16 64.5 16 144c0 68.5 47.9 125.9 112 140.4L128 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-195.6zM168 96c-30.9 0-56 25.1-56 56 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-57.4 46.6-104 104-104 13.3 0 24 10.7 24 24s-10.7 24-24 24z"]},dl={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64c-26.5 0-48 21.5-48 48 0 15.1 7.1 29.3 19.2 38.4l208 156c17.1 12.8 40.5 12.8 57.6 0l208-156c12.1-9.1 19.2-23.3 19.2-38.4 0-26.5-21.5-48-48-48L48 64zM0 196L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-188-198.4 148.8c-34.1 25.6-81.1 25.6-115.2 0L0 196z"]},ml={prefix:"fas",iconName:"bell",icon:[448,512,[128276,61602],"f0f3","M224 0c-17.7 0-32 14.3-32 32l0 3.2C119 50 64 114.6 64 192l0 21.7c0 48.1-16.4 94.8-46.4 132.4L7.8 358.3C2.7 364.6 0 372.4 0 380.5 0 400.1 15.9 416 35.5 416l376.9 0c19.6 0 35.5-15.9 35.5-35.5 0-8.1-2.7-15.9-7.8-22.2l-9.8-12.2C400.4 308.5 384 261.8 384 213.7l0-21.7c0-77.4-55-142-128-156.8l0-3.2c0-17.7-14.3-32-32-32zM162 464c7.1 27.6 32.2 48 62 48s54.9-20.4 62-48l-124 0z"]},pl={prefix:"fas",iconName:"magnifying-glass",icon:[512,512,[128269,"search"],"f002","M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376C296.3 401.1 253.9 416 208 416 93.1 416 0 322.9 0 208S93.1 0 208 0 416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"]},gl=pl,hl={prefix:"fas",iconName:"palette",icon:[512,512,[127912],"f53f","M512 256c0 .9 0 1.8 0 2.7-.4 36.5-33.6 61.3-70.1 61.3L344 320c-26.5 0-48 21.5-48 48 0 3.4 .4 6.7 1 9.9 2.1 10.2 6.5 20 10.8 29.9 6.1 13.8 12.1 27.5 12.1 42 0 31.8-21.6 60.7-53.4 62-3.5 .1-7 .2-10.6 .2-141.4 0-256-114.6-256-256S114.6 0 256 0 512 114.6 512 256zM128 288a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm0-96a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM288 96a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm96 96a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"]},vl={prefix:"fas",iconName:"key",icon:[512,512,[128273],"f084","M336 352c97.2 0 176-78.8 176-176S433.2 0 336 0 160 78.8 160 176c0 18.7 2.9 36.8 8.3 53.7L7 391c-4.5 4.5-7 10.6-7 17l0 80c0 13.3 10.7 24 24 24l80 0c13.3 0 24-10.7 24-24l0-40 40 0c13.3 0 24-10.7 24-24l0-40 40 0c6.4 0 12.5-2.5 17-7l33.3-33.3c16.9 5.4 35 8.3 53.7 8.3zM376 96a40 40 0 1 1 0 80 40 40 0 1 1 0-80z"]},bl={prefix:"fas",iconName:"camera",icon:[512,512,[62258,"camera-alt"],"f030","M149.1 64.8L138.7 96 64 96C28.7 96 0 124.7 0 160L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64l-74.7 0-10.4-31.2C356.4 45.2 338.1 32 317.4 32L194.6 32c-20.7 0-39 13.2-45.5 32.8zM256 192a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"]},yl={prefix:"fas",iconName:"trash",icon:[448,512,[],"f1f8","M136.7 5.9L128 32 32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l384 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0-8.7-26.1C306.9-7.2 294.7-16 280.9-16L167.1-16c-13.8 0-26 8.8-30.4 21.9zM416 144L32 144 53.1 467.1C54.7 492.4 75.7 512 101 512L347 512c25.3 0 46.3-19.6 47.9-44.9L416 144z"]},_l={prefix:"fas",iconName:"clock",icon:[512,512,[128339,"clock-four"],"f017","M256 0a256 256 0 1 1 0 512 256 256 0 1 1 0-512zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"]},wl={prefix:"fas",iconName:"book",icon:[448,512,[128212],"f02d","M384 512L96 512c-53 0-96-43-96-96L0 96C0 43 43 0 96 0L400 0c26.5 0 48 21.5 48 48l0 288c0 20.9-13.4 38.7-32 45.3l0 66.7c17.7 0 32 14.3 32 32s-14.3 32-32 32l-32 0zM96 384c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0 0-64-256 0zm32-232c0 13.3 10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0c-13.3 0-24 10.7-24 24zm24 72c-13.3 0-24 10.7-24 24s10.7 24 24 24l176 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-176 0z"]},zl={prefix:"fas",iconName:"rocket",icon:[512,512,[],"f135","M128 320L24.5 320c-24.9 0-40.2-27.1-27.4-48.5L50 183.3C58.7 168.8 74.3 160 91.2 160l95 0c76.1-128.9 189.6-135.4 265.5-124.3 12.8 1.9 22.8 11.9 24.6 24.6 11.1 75.9 4.6 189.4-124.3 265.5l0 95c0 16.9-8.8 32.5-23.3 41.2l-88.2 52.9c-21.3 12.8-48.5-2.6-48.5-27.4L192 384c0-35.3-28.7-64-64-64l-.1 0zM400 160a48 48 0 1 0 -96 0 48 48 0 1 0 96 0z"]},xl={prefix:"fas",iconName:"paper-plane",icon:[576,512,[61913],"f1d8","M536.4-26.3c9.8-3.5 20.6-1 28 6.3s9.8 18.2 6.3 28l-178 496.9c-5 13.9-18.1 23.1-32.8 23.1-14.2 0-27-8.6-32.3-21.7l-64.2-158c-4.5-11-2.5-23.6 5.2-32.6l94.5-112.4c5.1-6.1 4.7-15-.9-20.6s-14.6-6-20.6-.9L229.2 276.1c-9.1 7.6-21.6 9.6-32.6 5.2L38.1 216.8c-13.1-5.3-21.7-18.1-21.7-32.3 0-14.7 9.2-27.8 23.1-32.8l496.9-178z"]},kl={prefix:"fas",iconName:"heart",icon:[512,512,[128153,128154,128155,128156,128420,129293,129294,129505,9829,10084,61578],"f004","M241 87.1l15 20.7 15-20.7C296 52.5 336.2 32 378.9 32 452.4 32 512 91.6 512 165.1l0 2.6c0 112.2-139.9 242.5-212.9 298.2-12.4 9.4-27.6 14.1-43.1 14.1s-30.8-4.6-43.1-14.1C139.9 410.2 0 279.9 0 167.7l0-2.6C0 91.6 59.6 32 133.1 32 175.8 32 216 52.5 241 87.1z"]},Ml={prefix:"fas",iconName:"fire",icon:[448,512,[128293],"f06d","M160.5-26.4c9.3-7.8 23-7.5 31.9 .9 12.3 11.6 23.3 24.4 33.9 37.4 13.5 16.5 29.7 38.3 45.3 64.2 5.2-6.8 10-12.8 14.2-17.9 1.1-1.3 2.2-2.7 3.3-4.1 7.9-9.8 17.7-22.1 30.8-22.1 13.4 0 22.8 11.9 30.8 22.1 1.3 1.7 2.6 3.3 3.9 4.8 10.3 12.4 24 30.3 37.7 52.4 27.2 43.9 55.6 106.4 55.6 176.6 0 123.7-100.3 224-224 224S0 411.7 0 288c0-91.1 41.1-170 80.5-225 19.9-27.7 39.7-49.9 54.6-65.1 8.2-8.4 16.5-16.7 25.5-24.2zM225.7 416c25.3 0 47.7-7 68.8-21 42.1-29.4 53.4-88.2 28.1-134.4-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5-17.3-22.1-49.1-62.4-65.3-83-5.4-6.9-15.2-8-21.5-1.9-18.3 17.8-51.5 56.8-51.5 104.3 0 68.6 50.6 109.2 113.7 109.2z"]},Nl={prefix:"fas",iconName:"database",icon:[448,512,[],"f1c0","M448 205.8c-14.8 9.8-31.8 17.7-49.5 24-47 16.8-108.7 26.2-174.5 26.2S96.4 246.5 49.5 229.8c-17.6-6.3-34.7-14.2-49.5-24L0 288c0 44.2 100.3 80 224 80s224-35.8 224-80l0-82.2zm0-77.8l0-48C448 35.8 347.7 0 224 0S0 35.8 0 80l0 48c0 44.2 100.3 80 224 80s224-35.8 224-80zM398.5 389.8C351.6 406.5 289.9 416 224 416S96.4 406.5 49.5 389.8c-17.6-6.3-34.7-14.2-49.5-24L0 432c0 44.2 100.3 80 224 80s224-35.8 224-80l0-66.2c-14.8 9.8-31.8 17.7-49.5 24z"]},Cl={prefix:"fas",iconName:"share",icon:[512,512,["mail-forward"],"f064","M307.8 18.4c-12 5-19.8 16.6-19.8 29.6l0 80-112 0c-97.2 0-176 78.8-176 176 0 113.3 81.5 163.9 100.2 174.1 2.5 1.4 5.3 1.9 8.1 1.9 10.9 0 19.7-8.9 19.7-19.7 0-7.5-4.3-14.4-9.8-19.5-9.4-8.8-22.2-26.4-22.2-56.7 0-53 43-96 96-96l96 0 0 80c0 12.9 7.8 24.6 19.8 29.6s25.7 2.2 34.9-6.9l160-160c12.5-12.5 12.5-32.8 0-45.3l-160-160c-9.2-9.2-22.9-11.9-34.9-6.9z"]},Sl={prefix:"fas",iconName:"comment",icon:[512,512,[128489,61669],"f075","M512 240c0 132.5-114.6 240-256 240-37.1 0-72.3-7.4-104.1-20.7L33.5 510.1c-9.4 4-20.2 1.7-27.1-5.8S-2 485.8 2.8 476.8l48.8-92.2C19.2 344.3 0 294.3 0 240 0 107.5 114.6 0 256 0S512 107.5 512 240z"]},Al={prefix:"fas",iconName:"video",icon:[576,512,["video-camera"],"f03d","M96 64c-35.3 0-64 28.7-64 64l0 256c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L96 64zM464 336l73.5 58.8c4.2 3.4 9.4 5.2 14.8 5.2 13.1 0 23.7-10.6 23.7-23.7l0-240.6c0-13.1-10.6-23.7-23.7-23.7-5.4 0-10.6 1.8-14.8 5.2L464 176 464 336z"]},Ll={prefix:"fas",iconName:"crown",icon:[576,512,[128081],"f521","M313 87.2c9.2-7.3 15-18.6 15-31.2 0-22.1-17.9-40-40-40s-40 17.9-40 40c0 12.6 5.9 23.9 15 31.2L194.6 194.8c-10 15.7-31.3 19.6-46.2 8.4L88.9 158.7c4.5-6.4 7.1-14.3 7.1-22.7 0-22.1-17.9-40-40-40s-40 17.9-40 40c0 21.8 17.5 39.6 39.2 40L87.8 393.5c4.7 31.3 31.6 54.5 63.3 54.5l273.8 0c31.7 0 58.6-23.2 63.3-54.5L520.8 176c21.7-.4 39.2-18.2 39.2-40 0-22.1-17.9-40-40-40s-40 17.9-40 40c0 8.4 2.6 16.3 7.1 22.7l-59.4 44.6c-14.9 11.2-36.2 7.3-46.2-8.4L313 87.2z"]},Il={prefix:"fas",iconName:"sun",icon:[576,512,[9728],"f185","M288-32c8.4 0 16.3 4.4 20.6 11.7L364.1 72.3 468.9 46c8.2-2 16.9 .4 22.8 6.3S500 67 498 75.1l-26.3 104.7 92.7 55.5c7.2 4.3 11.7 12.2 11.7 20.6s-4.4 16.3-11.7 20.6L471.7 332.1 498 436.8c2 8.2-.4 16.9-6.3 22.8S477 468 468.9 466l-104.7-26.3-55.5 92.7c-4.3 7.2-12.2 11.7-20.6 11.7s-16.3-4.4-20.6-11.7L211.9 439.7 107.2 466c-8.2 2-16.8-.4-22.8-6.3S76 445 78 436.8l26.2-104.7-92.6-55.5C4.4 272.2 0 264.4 0 256s4.4-16.3 11.7-20.6L104.3 179.9 78 75.1c-2-8.2 .3-16.8 6.3-22.8S99 44 107.2 46l104.7 26.2 55.5-92.6 1.8-2.6c4.5-5.7 11.4-9.1 18.8-9.1zm0 144a144 144 0 1 0 0 288 144 144 0 1 0 0-288zm0 240a96 96 0 1 1 0-192 96 96 0 1 1 0 192z"]},Pl={prefix:"fas",iconName:"image",icon:[448,512,[],"f03e","M64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zm64 80a48 48 0 1 1 0 96 48 48 0 1 1 0-96zM272 224c8.4 0 16.1 4.4 20.5 11.5l88 144c4.5 7.4 4.7 16.7 .5 24.3S368.7 416 360 416L88 416c-8.9 0-17.2-5-21.3-12.9s-3.5-17.5 1.6-24.8l56-80c4.5-6.4 11.8-10.2 19.7-10.2s15.2 3.8 19.7 10.2l26.4 37.8 61.4-100.5c4.4-7.1 12.1-11.5 20.5-11.5z"]},El={prefix:"fas",iconName:"pencil",icon:[512,512,[9999,61504,"pencil-alt"],"f303","M36.4 353.2c4.1-14.6 11.8-27.9 22.6-38.7l181.2-181.2 33.9-33.9c16.6 16.6 51.3 51.3 104 104l33.9 33.9-33.9 33.9-181.2 181.2c-10.7 10.7-24.1 18.5-38.7 22.6L30.4 510.6c-8.3 2.3-17.3 0-23.4-6.2S-1.4 489.3 .9 481L36.4 353.2zm55.6-3.7c-4.4 4.7-7.6 10.4-9.3 16.6l-24.1 86.9 86.9-24.1c6.4-1.8 12.2-5.1 17-9.7L91.9 349.5zm354-146.1c-16.6-16.6-51.3-51.3-104-104L308 65.5C334.5 39 349.4 24.1 352.9 20.6 366.4 7 384.8-.6 404-.6S441.6 7 455.1 20.6l35.7 35.7C504.4 69.9 512 88.3 512 107.4s-7.6 37.6-21.2 51.1c-3.5 3.5-18.4 18.4-44.9 44.9z"]},Fl={prefix:"fas",iconName:"code",icon:[576,512,[],"f121","M360.8 1.2c-17-4.9-34.7 5-39.6 22l-128 448c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l128-448c4.9-17-5-34.7-22-39.6zm64.6 136.1c-12.5 12.5-12.5 32.8 0 45.3l73.4 73.4-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3l-96-96c-12.5-12.5-32.8-12.5-45.3 0zm-274.7 0c-12.5-12.5-32.8-12.5-45.3 0l-96 96c-12.5 12.5-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 150.6 182.6c12.5-12.5 12.5-32.8 0-45.3z"]},Tl={prefix:"fas",iconName:"terminal",icon:[512,512,[],"f120","M9.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L146.7 256 9.4 118.6zM224 384l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},$l={prefix:"fas",iconName:"thumbtack",icon:[384,512,[128204,128392,"thumb-tack"],"f08d","M32 32C32 14.3 46.3 0 64 0L320 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-29.5 0 10.3 134.1c37.1 21.2 65.8 56.4 78.2 99.7l3.8 13.4c2.8 9.7 .8 20-5.2 28.1S362 352 352 352L32 352c-10 0-19.5-4.7-25.5-12.7s-8-18.4-5.2-28.1L5 297.8c12.4-43.3 41-78.5 78.2-99.7L93.5 64 64 64C46.3 64 32 49.7 32 32zM160 400l64 0 0 112c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-112z"]},Dl={prefix:"fas",iconName:"circle-plus",icon:[512,512,["plus-circle"],"f055","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},Ol=Dl,jl={prefix:"fas",iconName:"folder",icon:[512,512,[128193,128447,61716,"folder-blank"],"f07b","M64 448l384 0c35.3 0 64-28.7 64-64l0-240c0-35.3-28.7-64-64-64L298.7 80c-6.9 0-13.7-2.2-19.2-6.4L241.1 44.8C230 36.5 216.5 32 202.7 32L64 32C28.7 32 0 60.7 0 96L0 384c0 35.3 28.7 64 64 64z"]},Rl={prefix:"fas",iconName:"cloud",icon:[576,512,[9729],"f0c2","M0 336c0 79.5 64.5 144 144 144l304 0c70.7 0 128-57.3 128-128 0-51.6-30.5-96.1-74.5-116.3 6.7-13.1 10.5-28 10.5-43.7 0-53-43-96-96-96-17.7 0-34.2 4.8-48.4 13.1-24.1-45.8-72.2-77.1-127.6-77.1-79.5 0-144 64.5-144 144 0 8 .7 15.9 1.9 23.5-56.9 19.2-97.9 73.1-97.9 136.5z"]},Wl={prefix:"fas",iconName:"link",icon:[576,512,[128279,"chain"],"f0c1","M419.5 96c-16.6 0-32.7 4.5-46.8 12.7-15.8-16-34.2-29.4-54.5-39.5 28.2-24 64.1-37.2 101.3-37.2 86.4 0 156.5 70 156.5 156.5 0 41.5-16.5 81.3-45.8 110.6l-71.1 71.1c-29.3 29.3-69.1 45.8-110.6 45.8-86.4 0-156.5-70-156.5-156.5 0-1.5 0-3 .1-4.5 .5-17.7 15.2-31.6 32.9-31.1s31.6 15.2 31.1 32.9c0 .9 0 1.8 0 2.6 0 51.1 41.4 92.5 92.5 92.5 24.5 0 48-9.7 65.4-27.1l71.1-71.1c17.3-17.3 27.1-40.9 27.1-65.4 0-51.1-41.4-92.5-92.5-92.5zM275.2 173.3c-1.9-.8-3.8-1.9-5.5-3.1-12.6-6.5-27-10.2-42.1-10.2-24.5 0-48 9.7-65.4 27.1L91.1 258.2c-17.3 17.3-27.1 40.9-27.1 65.4 0 51.1 41.4 92.5 92.5 92.5 16.5 0 32.6-4.4 46.7-12.6 15.8 16 34.2 29.4 54.6 39.5-28.2 23.9-64 37.2-101.3 37.2-86.4 0-156.5-70-156.5-156.5 0-41.5 16.5-81.3 45.8-110.6l71.1-71.1c29.3-29.3 69.1-45.8 110.6-45.8 86.6 0 156.5 70.6 156.5 156.9 0 1.3 0 2.6 0 3.9-.4 17.7-15.1 31.6-32.8 31.2s-31.6-15.1-31.2-32.8c0-.8 0-1.5 0-2.3 0-33.7-18-63.3-44.8-79.6z"]},Ul={prefix:"fas",iconName:"rectangle-list",icon:[512,512,["list-alt"],"f022","M64 64C28.7 64 0 92.7 0 128L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-256c0-35.3-28.7-64-64-64L64 64zm96 256a32 32 0 1 1 -64 0 32 32 0 1 1 64 0zm-32-96a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm120-56l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24zm0 128l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},Hl={prefix:"fas",iconName:"gear",icon:[512,512,[9881,"cog"],"f013","M195.1 9.5C198.1-5.3 211.2-16 226.4-16l59.8 0c15.2 0 28.3 10.7 31.3 25.5L332 79.5c14.1 6 27.3 13.7 39.3 22.8l67.8-22.5c14.4-4.8 30.2 1.2 37.8 14.4l29.9 51.8c7.6 13.2 4.9 29.8-6.5 39.9L447 233.3c.9 7.4 1.3 15 1.3 22.7s-.5 15.3-1.3 22.7l53.4 47.5c11.4 10.1 14 26.8 6.5 39.9l-29.9 51.8c-7.6 13.1-23.4 19.2-37.8 14.4l-67.8-22.5c-12.1 9.1-25.3 16.7-39.3 22.8l-14.4 69.9c-3.1 14.9-16.2 25.5-31.3 25.5l-59.8 0c-15.2 0-28.3-10.7-31.3-25.5l-14.4-69.9c-14.1-6-27.2-13.7-39.3-22.8L73.5 432.3c-14.4 4.8-30.2-1.2-37.8-14.4L5.8 366.1c-7.6-13.2-4.9-29.8 6.5-39.9l53.4-47.5c-.9-7.4-1.3-15-1.3-22.7s.5-15.3 1.3-22.7L12.3 185.8c-11.4-10.1-14-26.8-6.5-39.9L35.7 94.1c7.6-13.2 23.4-19.2 37.8-14.4l67.8 22.5c12.1-9.1 25.3-16.7 39.3-22.8L195.1 9.5zM256.3 336a80 80 0 1 0 -.6-160 80 80 0 1 0 .6 160z"]},Vl=Hl,Tt={prefix:"fas",iconName:"circle-question",icon:[512,512,[62108,"question-circle"],"f059","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm0-336c-17.7 0-32 14.3-32 32 0 13.3-10.7 24-24 24s-24-10.7-24-24c0-44.2 35.8-80 80-80s80 35.8 80 80c0 47.2-36 67.2-56 74.5l0 3.8c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-8.1c0-20.5 14.8-35.2 30.1-40.2 6.4-2.1 13.2-5.5 18.2-10.3 4.3-4.2 7.7-10 7.7-19.6 0-17.7-14.3-32-32-32zM224 368a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"]},Yl=Tt,Bl={prefix:"fas",iconName:"file",icon:[384,512,[128196,128459,61462],"f15b","M64 0C28.7 0 0 28.7 0 64L0 448c0 35.3 28.7 64 64 64l256 0c35.3 0 64-28.7 64-64l0-277.5c0-17-6.7-33.3-18.7-45.3L258.7 18.7C246.7 6.7 230.5 0 213.5 0L64 0zM325.5 176L232 176c-13.3 0-24-10.7-24-24L208 58.5 325.5 176z"]},Xl={prefix:"fas",iconName:"gem",icon:[512,512,[128142],"f3a5","M116.7 33.8c4.5-6.1 11.7-9.8 19.3-9.8l240 0c7.6 0 14.8 3.6 19.3 9.8l112 152c6.8 9.2 6.1 21.9-1.5 30.4l-232 256c-4.5 5-11 7.9-17.8 7.9s-13.2-2.9-17.8-7.9l-232-256c-7.7-8.5-8.3-21.2-1.5-30.4l112-152zm38.5 39.8c-3.3 2.5-4.2 7-2.1 10.5L210.5 179.8 63.3 192c-4.1 .3-7.3 3.8-7.3 8s3.2 7.6 7.3 8l192 16c.4 0 .9 0 1.3 0l192-16c4.1-.3 7.3-3.8 7.3-8s-3.2-7.6-7.3-8l-147.2-12.3 57.4-95.6c2.1-3.5 1.2-8.1-2.1-10.5s-7.9-2-10.7 1L256 172.2 165.9 74.6c-2.8-3-7.4-3.4-10.7-1z"]},Gl={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M128 0C110.3 0 96 14.3 96 32l0 32-32 0C28.7 64 0 92.7 0 128l0 48 448 0 0-48c0-35.3-28.7-64-64-64l-32 0 0-32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 32-128 0 0-32c0-17.7-14.3-32-32-32zM0 224L0 416c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-192-448 0z"]},ql={prefix:"fas",iconName:"chart-bar",icon:[512,512,["bar-chart"],"f080","M32 32c17.7 0 32 14.3 32 32l0 336c0 8.8 7.2 16 16 16l400 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L80 480c-44.2 0-80-35.8-80-80L0 64C0 46.3 14.3 32 32 32zm96 64c0-17.7 14.3-32 32-32l192 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-192 0c-17.7 0-32-14.3-32-32zm32 80l128 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-128 0c-17.7 0-32-14.3-32-32s14.3-32 32-32zm0 112l256 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-256 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Kl={prefix:"fas",iconName:"house",icon:[512,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M277.8 8.6c-12.3-11.4-31.3-11.4-43.5 0l-224 208c-9.6 9-12.8 22.9-8 35.1S18.8 272 32 272l16 0 0 176c0 35.3 28.7 64 64 64l288 0c35.3 0 64-28.7 64-64l0-176 16 0c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8-35.1l-224-208zM240 320l32 0c26.5 0 48 21.5 48 48l0 96-128 0 0-96c0-26.5 21.5-48 48-48z"]},Jl=Kl,Ql={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144,62470,"user-alt","user-large"],"f007","M224 248a120 120 0 1 0 0-240 120 120 0 1 0 0 240zm-29.7 56C95.8 304 16 383.8 16 482.3 16 498.7 29.3 512 45.7 512l356.6 0c16.4 0 29.7-13.3 29.7-29.7 0-98.5-79.8-178.3-178.3-178.3l-59.4 0z"]},Zl={prefix:"fas",iconName:"cube",icon:[512,512,[],"f1b2","M224.3-2.5c19.8-11.4 44.2-11.4 64 0L464.2 99c19.8 11.4 32 32.6 32 55.4l0 203c0 22.9-12.2 44-32 55.4L288.3 514.5c-19.8 11.4-44.2 11.4-64 0L48.5 413c-19.8-11.4-32-32.6-32-55.4l0-203c0-22.9 12.2-44 32-55.4L224.3-2.5zm207.8 360l0-166.1-143.8 83 0 166.1 143.8-83z"]},es={prefix:"fas",iconName:"circle-check",icon:[512,512,[61533,"check-circle"],"f058","M256 512a256 256 0 1 1 0-512 256 256 0 1 1 0 512zM374 145.7c-10.7-7.8-25.7-5.4-33.5 5.3L221.1 315.2 169 263.1c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l72 72c5 5 11.8 7.5 18.8 7s13.4-4.1 17.5-9.8L379.3 179.2c7.8-10.7 5.4-25.7-5.3-33.5z"]},as=es,ns={prefix:"fas",iconName:"moon",icon:[512,512,[127769,9214],"f186","M256 0C114.6 0 0 114.6 0 256S114.6 512 256 512c68.8 0 131.3-27.2 177.3-71.4 7.3-7 9.4-17.9 5.3-27.1s-13.7-14.9-23.8-14.1c-4.9 .4-9.8 .6-14.8 .6-101.6 0-184-82.4-184-184 0-72.1 41.5-134.6 102.1-164.8 9.1-4.5 14.3-14.3 13.1-24.4S322.6 8.5 312.7 6.3C294.4 2.2 275.4 0 256 0z"]},ts={prefix:"fas",iconName:"cubes",icon:[512,512,[],"f1b3","M284-1.3c-17.3-10-38.7-10-56 0L143.8 47.3c-17.3 10-28 28.5-28 48.5l0 101.9-88.3 51c-17.3 10-28 28.5-28 48.5l0 97.3c0 20 10.7 38.5 28 48.5l84.3 48.6c17.3 10 38.7 10 56 0l88.3-51 88.3 51c17.3 10 38.7 10 56 0L484.5 443c17.3-10 28-28.5 28-48.5l0-97.3c0-20-10.7-38.5-28-48.5l-88.3-51 0-101.9c0-20-10.7-38.5-28-48.5L284-1.3zM232 292.6l0 106.5-88.3 51c-1.2 .7-2.6 1.1-4 1.1l0-105.3 92.3-53.3zm231.4 .6c.7 1.2 1.1 2.6 1.1 4l0 97.3c0 2.9-1.5 5.5-4 6.9l-84.3 48.6c-1.2 .7-2.6 1.1-4 1.1l0-105.3 91.2-52.6zM348.3 95.8l0 101.9-92.3 53.3 0-106.5 91.2-52.6c.7 1.2 1.1 2.6 1.1 4z"]},is={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M160.2 25C152.3 6.1 131.7-3.9 112.1 1.4l-5.5 1.5c-64.6 17.6-119.8 80.2-103.7 156.4 37.1 175 174.8 312.7 349.8 349.8 76.3 16.2 138.8-39.1 156.4-103.7l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2C233.9 335.4 177.3 277 144.8 205.3L189 169.3c13.9-11.3 18.6-30.4 11.8-47L160.2 25z"]},rs={prefix:"fas",iconName:"list",icon:[512,512,["list-squares"],"f03a","M40 48C26.7 48 16 58.7 16 72l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24L40 48zM192 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 64zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zm0 160c-17.7 0-32 14.3-32 32s14.3 32 32 32l288 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-288 0zM16 232l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0c-13.3 0-24 10.7-24 24zM40 368c-13.3 0-24 10.7-24 24l0 48c0 13.3 10.7 24 24 24l48 0c13.3 0 24-10.7 24-24l0-48c0-13.3-10.7-24-24-24l-48 0z"]},os={prefix:"fas",iconName:"inbox",icon:[512,512,[],"f01c","M91.8 32C59.9 32 32.9 55.4 28.4 86.9L.6 281.2c-.4 3-.6 6-.6 9.1L0 416c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-125.7c0-3-.2-6.1-.6-9.1L483.6 86.9C479.1 55.4 452.1 32 420.2 32L91.8 32zm0 64l328.5 0 27.4 192-59.9 0c-12.1 0-23.2 6.8-28.6 17.7l-14.3 28.6c-5.4 10.8-16.5 17.7-28.6 17.7l-120.4 0c-12.1 0-23.2-6.8-28.6-17.7l-14.3-28.6c-5.4-10.8-16.5-17.7-28.6-17.7L64.3 288 91.8 96z"]},ls={prefix:"fas",iconName:"credit-card",icon:[512,512,[128179,62083,"credit-card-alt"],"f09d","M0 128l0 32 512 0 0-32c0-35.3-28.7-64-64-64L64 64C28.7 64 0 92.7 0 128zm0 80L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-176-512 0zM64 360c0-13.3 10.7-24 24-24l48 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-48 0c-13.3 0-24-10.7-24-24zm144 0c0-13.3 10.7-24 24-24l64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0c-13.3 0-24-10.7-24-24z"]},ss={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M309.5-18.9c-4.1-8-12.4-13.1-21.4-13.1s-17.3 5.1-21.4 13.1L193.1 125.3 33.2 150.7c-8.9 1.4-16.3 7.7-19.1 16.3s-.5 18 5.8 24.4l114.4 114.5-25.2 159.9c-1.4 8.9 2.3 17.9 9.6 23.2s16.9 6.1 25 2L288.1 417.6 432.4 491c8 4.1 17.7 3.3 25-2s11-14.2 9.6-23.2L441.7 305.9 556.1 191.4c6.4-6.4 8.6-15.8 5.8-24.4s-10.1-14.9-19.1-16.3L383 125.3 309.5-18.9z"]},cs={prefix:"fas",iconName:"flag",icon:[448,512,[127988,61725],"f024","M64 32C64 14.3 49.7 0 32 0S0 14.3 0 32L0 480c0 17.7 14.3 32 32 32s32-14.3 32-32l0-121.6 62.7-18.8c41.9-12.6 87.1-8.7 126.2 10.9 42.7 21.4 92.5 24 137.2 7.2l37.1-13.9c12.5-4.7 20.8-16.6 20.8-30l0-247.7c0-23-24.2-38-44.8-27.7l-11.8 5.9c-44.9 22.5-97.8 22.5-142.8 0-36.4-18.2-78.3-21.8-117.2-10.1L64 54.4 64 32z"]},fs={prefix:"fas",iconName:"triangle-exclamation",icon:[512,512,[9888,"exclamation-triangle","warning"],"f071","M256 0c14.7 0 28.2 8.1 35.2 21l216 400c6.7 12.4 6.4 27.4-.8 39.5S486.1 480 472 480L40 480c-14.1 0-27.2-7.4-34.4-19.5s-7.5-27.1-.8-39.5l216-400c7-12.9 20.5-21 35.2-21zm0 352a32 32 0 1 0 0 64 32 32 0 1 0 0-64zm0-192c-18.2 0-32.7 15.5-31.4 33.7l7.4 104c.9 12.5 11.4 22.3 23.9 22.3 12.6 0 23-9.7 23.9-22.3l7.4-104c1.3-18.2-13.1-33.7-31.4-33.7z"]},us=fs,ds={prefix:"fas",iconName:"lock",icon:[384,512,[128274],"f023","M128 96l0 64 128 0 0-64c0-35.3-28.7-64-64-64s-64 28.7-64 64zM64 160l0-64C64 25.3 121.3-32 192-32S320 25.3 320 96l0 64c35.3 0 64 28.7 64 64l0 224c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 224c0-35.3 28.7-64 64-64z"]},ms={prefix:"fas",iconName:"download",icon:[448,512,[],"f019","M256 32c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 210.7-41.4-41.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l96 96c12.5 12.5 32.8 12.5 45.3 0l96-96c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 242.7 256 32zM64 320c-35.3 0-64 28.7-64 64l0 32c0 35.3 28.7 64 64 64l320 0c35.3 0 64-28.7 64-64l0-32c0-35.3-28.7-64-64-64l-46.9 0-56.6 56.6c-31.2 31.2-81.9 31.2-113.1 0L110.9 320 64 320zm304 56a24 24 0 1 1 0 48 24 24 0 1 1 0-48z"]},ps={prefix:"fas",iconName:"globe",icon:[512,512,[127760],"f0ac","M351.9 280l-190.9 0c2.9 64.5 17.2 123.9 37.5 167.4 11.4 24.5 23.7 41.8 35.1 52.4 11.2 10.5 18.9 12.2 22.9 12.2s11.7-1.7 22.9-12.2c11.4-10.6 23.7-28 35.1-52.4 20.3-43.5 34.6-102.9 37.5-167.4zM160.9 232l190.9 0C349 167.5 334.7 108.1 314.4 64.6 303 40.2 290.7 22.8 279.3 12.2 268.1 1.7 260.4 0 256.4 0s-11.7 1.7-22.9 12.2c-11.4 10.6-23.7 28-35.1 52.4-20.3 43.5-34.6 102.9-37.5 167.4zm-48 0C116.4 146.4 138.5 66.9 170.8 14.7 78.7 47.3 10.9 131.2 1.5 232l111.4 0zM1.5 280c9.4 100.8 77.2 184.7 169.3 217.3-32.3-52.2-54.4-131.7-57.9-217.3L1.5 280zm398.4 0c-3.5 85.6-25.6 165.1-57.9 217.3 92.1-32.7 159.9-116.5 169.3-217.3l-111.4 0zm111.4-48C501.9 131.2 434.1 47.3 342 14.7 374.3 66.9 396.4 146.4 399.9 232l111.4 0z"]},gs={prefix:"fas",iconName:"upload",icon:[448,512,[],"f093","M256 109.3L256 320c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-210.7-41.4 41.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l96-96c12.5-12.5 32.8-12.5 45.3 0l96 96c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 109.3zM224 400c44.2 0 80-35.8 80-80l80 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64l80 0c0 44.2 35.8 80 80 80zm144 24a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"]},hs={prefix:"fas",iconName:"music",icon:[512,512,[127925],"f001","M468 7c7.6 6.1 12 15.3 12 25l0 304c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6l0-116.7-224 49.8 0 206.3c0 44.2-43 80-96 80s-96-35.8-96-80 43-80 96-80c11.2 0 22 1.6 32 4.6L128 96c0-15 10.4-28 25.1-31.2l288-64c9.5-2.1 19.4 .2 27 6.3z"]},vs={prefix:"fas",iconName:"bolt",icon:[448,512,[9889,"zap"],"f0e7","M338.8-9.9c11.9 8.6 16.3 24.2 10.9 37.8L271.3 224 416 224c13.5 0 25.5 8.4 30.1 21.1s.7 26.9-9.6 35.5l-288 240c-11.3 9.4-27.4 9.9-39.3 1.3s-16.3-24.2-10.9-37.8L176.7 288 32 288c-13.5 0-25.5-8.4-30.1-21.1s-.7-26.9 9.6-35.5l288-240c11.3-9.4 27.4-9.9 39.3-1.3z"]},bs={prefix:"fas",iconName:"tag",icon:[512,512,[127991],"f02b","M32.5 96l0 149.5c0 17 6.7 33.3 18.7 45.3l192 192c25 25 65.5 25 90.5 0L483.2 333.3c25-25 25-65.5 0-90.5l-192-192C279.2 38.7 263 32 246 32L96.5 32c-35.3 0-64 28.7-64 64zm112 16a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"]},ys={prefix:"fas",iconName:"compass",icon:[512,512,[129517],"f14e","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zm50.7-186.9L162.4 380.6c-19.4 7.5-38.5-11.6-31-31l55.5-144.3c3.3-8.5 9.9-15.1 18.4-18.4l144.3-55.5c19.4-7.5 38.5 11.6 31 31L325.1 306.7c-3.2 8.5-9.9 15.1-18.4 18.4zM288 256a32 32 0 1 0 -64 0 32 32 0 1 0 64 0z"]},_s={prefix:"fas",iconName:"briefcase",icon:[512,512,[128188],"f0b1","M200 48l112 0c4.4 0 8 3.6 8 8l0 40-128 0 0-40c0-4.4 3.6-8 8-8zm-56 8l0 40-80 0C28.7 96 0 124.7 0 160l0 96 512 0 0-96c0-35.3-28.7-64-64-64l-80 0 0-40c0-30.9-25.1-56-56-56L200 0c-30.9 0-56 25.1-56 56zM512 304l-192 0 0 16c0 17.7-14.3 32-32 32l-64 0c-17.7 0-32-14.3-32-32l0-16-192 0 0 112c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-112z"]},ws={prefix:"fas",iconName:"circle-minus",icon:[512,512,["minus-circle"],"f056","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM168 232l176 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-176 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},zs=ws,xs={prefix:"fas",iconName:"table-cells-large",icon:[448,512,["th-large"],"f009","M384 96l-128 0 0 128 128 0 0-128zm64 128l0 192c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96C0 60.7 28.7 32 64 32l320 0c35.3 0 64 28.7 64 64l0 128zM64 288l0 128 128 0 0-128-128 0zm128-64l0-128-128 0 0 128 128 0zm64 64l0 128 128 0 0-128-128 0z"]},ks=xs,Ms={prefix:"fas",iconName:"circle-info",icon:[512,512,["info-circle"],"f05a","M256 512a256 256 0 1 0 0-512 256 256 0 1 0 0 512zM224 160a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm-8 64l48 0c13.3 0 24 10.7 24 24l0 88 8 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-80 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l24 0 0-64-24 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},Ns=Ms,Cs={prefix:"fas",iconName:"cart-shopping",icon:[640,512,[128722,"shopping-cart"],"f07a","M24-16C10.7-16 0-5.3 0 8S10.7 32 24 32l45.3 0c3.9 0 7.2 2.8 7.9 6.6l52.1 286.3c6.2 34.2 36 59.1 70.8 59.1L456 384c13.3 0 24-10.7 24-24s-10.7-24-24-24l-255.9 0c-11.6 0-21.5-8.3-23.6-19.7l-5.1-28.3 303.6 0c30.8 0 57.2-21.9 62.9-52.2L568.9 69.9C572.6 50.2 557.5 32 537.4 32l-412.7 0-.4-2c-4.8-26.6-28-46-55.1-46L24-16zM208 512a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm224 0a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"]},Ss=Cs;/*!
 * Font Awesome Free 7.3.1 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2026 Fonticons, Inc.
 */var As={prefix:"fab",iconName:"stack-overflow",icon:[384,512,[],"f16c","M291 311l-195.7-41.3-8.2 39.3 195.7 41 8.2-39zm51-87L188.5 95.7 163 126.5 316.5 254.8 342 224zm-31.2 39.7L129.5 179 112.8 215.5 294 300 310.8 263.7zM262.3 32l-32 24 119.3 160.3 32-24-119.3-160.3zm20.5 328l-200 0 0 39.7 200 0 0-39.7zm39.7 80l-279.5 0 0-120-40 0 0 160 359.5 0 0-160-40 0 0 120z"]},Ls={prefix:"fab",iconName:"reddit",icon:[512,512,[],"f1a1","M0 256C0 114.6 114.6 0 256 0S512 114.6 512 256 397.4 512 256 512L37.1 512c-13.7 0-20.5-16.5-10.9-26.2L75 437C28.7 390.7 0 326.7 0 256zM349.6 153.6c23.6 0 42.7-19.1 42.7-42.7s-19.1-42.7-42.7-42.7c-20.6 0-37.8 14.6-41.8 34-34.5 3.7-61.4 33-61.4 68.4l0 .2c-37.5 1.6-71.8 12.3-99 29.1-10.1-7.8-22.8-12.5-36.5-12.5-33 0-59.8 26.8-59.8 59.8 0 24 14.1 44.6 34.4 54.1 2 69.4 77.6 125.2 170.6 125.2s168.7-55.9 170.6-125.3c20.2-9.6 34.1-30.2 34.1-54 0-33-26.8-59.8-59.8-59.8-13.7 0-26.3 4.6-36.4 12.4-27.4-17-62.1-27.7-100-29.1l0-.2c0-25.4 18.9-46.5 43.4-49.9 4.4 18.8 21.3 32.8 41.5 32.8l.1 .2zM177.1 246.9c16.7 0 29.5 17.6 28.5 39.3s-13.5 29.6-30.3 29.6-31.4-8.8-30.4-30.5 15.4-38.3 32.1-38.3l.1-.1zm190.1 38.3c1 21.7-13.7 30.5-30.4 30.5s-29.3-7.9-30.3-29.6 11.8-39.3 28.5-39.3 31.2 16.6 32.1 38.3l.1 .1zm-48.1 56.7c-10.3 24.6-34.6 41.9-63 41.9s-52.7-17.3-63-41.9c-1.2-2.9 .8-6.2 3.9-6.5 18.4-1.9 38.3-2.9 59.1-2.9s40.7 1 59.1 2.9c3.1 .3 5.1 3.6 3.9 6.5z"]},Is={prefix:"fab",iconName:"windows",icon:[448,512,[],"f17a","M0 93.7l183.6-25.3 0 177.4-183.6 0 0-152.1zM0 418.3l183.6 25.3 0-175.2-183.6 0 0 149.9zm203.8 28l244.2 33.7 0-211.6-244.2 0 0 177.9zm0-380.6l0 180.1 244.2 0 0-213.8-244.2 33.7z"]},Ps={prefix:"fab",iconName:"google",icon:[512,512,[],"f1a0","M500 261.8C500 403.3 403.1 504 260 504 122.8 504 12 393.2 12 256S122.8 8 260 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9c-88.3-85.2-252.5-21.2-252.5 118.2 0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9l-140.8 0 0-85.3 236.1 0c2.3 12.7 3.9 24.9 3.9 41.4z"]},Es={prefix:"fab",iconName:"discord",icon:[576,512,[],"f392","M492.5 69.8c-.2-.3-.4-.6-.8-.7-38.1-17.5-78.4-30-119.7-37.1-.4-.1-.8 0-1.1 .1s-.6 .4-.8 .8c-5.5 9.9-10.5 20.2-14.9 30.6-44.6-6.8-89.9-6.8-134.4 0-4.5-10.5-9.5-20.7-15.1-30.6-.2-.3-.5-.6-.8-.8s-.7-.2-1.1-.2c-41.3 7.1-81.6 19.6-119.7 37.1-.3 .1-.6 .4-.8 .7-76.2 113.8-97.1 224.9-86.9 334.5 0 .3 .1 .5 .2 .8s.3 .4 .5 .6c44.4 32.9 94 58 146.8 74.2 .4 .1 .8 .1 1.1 0s.7-.4 .9-.7c11.3-15.4 21.4-31.8 30-48.8 .1-.2 .2-.5 .2-.8s0-.5-.1-.8-.2-.5-.4-.6-.4-.3-.7-.4c-15.8-6.1-31.2-13.4-45.9-21.9-.3-.2-.5-.4-.7-.6s-.3-.6-.3-.9 0-.6 .2-.9 .3-.5 .6-.7c3.1-2.3 6.2-4.7 9.1-7.1 .3-.2 .6-.4 .9-.4s.7 0 1 .1c96.2 43.9 200.4 43.9 295.5 0 .3-.1 .7-.2 1-.2s.7 .2 .9 .4c2.9 2.4 6 4.9 9.1 7.2 .2 .2 .4 .4 .6 .7s.2 .6 .2 .9-.1 .6-.3 .9-.4 .5-.6 .6c-14.7 8.6-30 15.9-45.9 21.8-.2 .1-.5 .2-.7 .4s-.3 .4-.4 .7-.1 .5-.1 .8 .1 .5 .2 .8c8.8 17 18.8 33.3 30 48.8 .2 .3 .6 .6 .9 .7s.8 .1 1.1 0c52.9-16.2 102.6-41.3 147.1-74.2 .2-.2 .4-.4 .5-.6s.2-.5 .2-.8c12.3-126.8-20.5-236.9-86.9-334.5zm-302 267.7c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.4 59.2-52.8 59.2zm195.4 0c-29 0-52.8-26.6-52.8-59.2s23.4-59.2 52.8-59.2c29.7 0 53.3 26.8 52.8 59.2 0 32.7-23.2 59.2-52.8 59.2z"]},Fs={prefix:"fab",iconName:"pinterest",icon:[512,512,[],"f0d2","M504 256c0 137-111 248-248 248-25.6 0-50.2-3.9-73.4-11.1 10.1-16.5 25.2-43.5 30.8-65 3-11.6 15.4-59 15.4-59 8.1 15.4 31.7 28.5 56.8 28.5 74.8 0 128.7-68.8 128.7-154.3 0-81.9-66.9-143.2-152.9-143.2-107 0-163.9 71.8-163.9 150.1 0 36.4 19.4 81.7 50.3 96.1 4.7 2.2 7.2 1.2 8.3-3.3 .8-3.4 5-20.3 6.9-28.1 .6-2.5 .3-4.7-1.7-7.1-10.1-12.5-18.3-35.3-18.3-56.6 0-54.7 41.4-107.6 112-107.6 60.9 0 103.6 41.5 103.6 100.9 0 67.1-33.9 113.6-78 113.6-24.3 0-42.6-20.1-36.7-44.8 7-29.5 20.5-61.3 20.5-82.6 0-19-10.2-34.9-31.4-34.9-24.9 0-44.9 25.7-44.9 60.2 0 22 7.4 36.8 7.4 36.8s-24.5 103.8-29 123.2C161.5 437.2 163.5 467.4 165.6 487 73.4 450.9 8 361.1 8 256 8 119 119 8 256 8S504 119 504 256z"]},Ts={prefix:"fab",iconName:"youtube",icon:[576,512,[61802],"f167","M549.7 124.1C543.5 100.4 524.9 81.8 501.4 75.5 458.9 64 288.1 64 288.1 64S117.3 64 74.7 75.5C51.2 81.8 32.7 100.4 26.4 124.1 15 167 15 256.4 15 256.4s0 89.4 11.4 132.3c6.3 23.6 24.8 41.5 48.3 47.8 42.6 11.5 213.4 11.5 213.4 11.5s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zM232.2 337.6l0-162.4 142.7 81.2-142.7 81.2z"]},$s={prefix:"fab",iconName:"github",icon:[512,512,[],"f09b","M216.5 362.5c-66-8-112.5-55.5-112.5-117 0-25 9-52 24-70-6.5-16.5-5.5-51.5 2-66 20-2.5 47 8 63 22.5 19-6 39-9 63.5-9s44.5 3 62.5 8.5c15.5-14 43-24.5 63-22 7 13.5 8 48.5 1.5 65.5 16 19 24.5 44.5 24.5 70.5 0 61.5-46.5 108-113.5 116.5 17 11 28.5 35 28.5 62.5l0 52C323 491.5 335.5 500 350.5 494 441 459.5 512 369 512 257 512 115.5 397 0 255.5 0S0 115.5 0 257c0 111 70.5 203 165.5 237.5 13.5 5 26.5-4 26.5-17.5l0-40c-7 3-16 5-24 5-33 0-52.5-18-66.5-51.5-5.5-13.5-11.5-21.5-23-23-6-.5-8-3-8-6 0-6 10-10.5 20-10.5 14.5 0 27 9 40 27.5 10 14.5 20.5 21 33 21s20.5-4.5 32-16c8.5-8.5 15-16 21-21z"]},Ds={prefix:"fab",iconName:"linkedin",icon:[448,512,[],"f08c","M416 32L31.9 32C14.3 32 0 46.5 0 64.3L0 447.7C0 465.5 14.3 480 31.9 480L416 480c17.6 0 32-14.5 32-32.3l0-383.4C448 46.5 433.6 32 416 32zM135.4 416l-66.4 0 0-213.8 66.5 0 0 213.8-.1 0zM102.2 96a38.5 38.5 0 1 1 0 77 38.5 38.5 0 1 1 0-77zM384.3 416l-66.4 0 0-104c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9l0 105.8-66.4 0 0-213.8 63.7 0 0 29.2 .9 0c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9l0 117.2z"]},Os={prefix:"fab",iconName:"facebook",icon:[512,512,[62e3],"f09a","M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5l0-170.3-52.8 0 0-78.2 52.8 0 0-33.7c0-87.1 39.4-127.5 125-127.5 16.2 0 44.2 3.2 55.7 6.4l0 70.8c-6-.6-16.5-1-29.6-1-42 0-58.2 15.9-58.2 57.2l0 27.8 83.6 0-14.4 78.2-69.3 0 0 175.9C413.8 494.8 512 386.9 512 256z"]},js={prefix:"fab",iconName:"snapchat",icon:[512,512,[62124,"snapchat-ghost"],"f2ab","M497.1 366.6c-3.4-9.2-9.8-14.1-17.1-18.2-1.4-.8-2.6-1.5-3.7-1.9-2.2-1.1-4.4-2.2-6.6-3.4-22.8-12.1-40.6-27.3-53-45.4-3.5-5.1-6.6-10.5-9.1-16.1-1.1-3-1-4.7-.2-6.3 .8-1.2 1.7-2.2 2.9-3 3.9-2.6 8-5.2 10.7-7 4.9-3.2 8.8-5.7 11.2-7.4 9.4-6.5 15.9-13.5 20-21.3 2.9-5.4 4.5-11.3 4.9-17.4s-.6-12.2-2.8-17.8c-6.2-16.3-21.6-26.4-40.3-26.4-3.9 0-7.9 .4-11.7 1.2-1 .2-2.1 .5-3.1 .7 .2-11.2-.1-22.9-1.1-34.5-3.5-40.8-17.8-62.1-32.7-79.2-9.5-10.7-20.7-19.7-33.2-26.7-22.6-12.9-48.2-19.4-76.1-19.4s-53.4 6.5-76 19.4c-12.5 7-23.7 16.1-33.3 26.8-14.9 17-29.2 38.4-32.7 79.2-1 11.6-1.2 23.4-1.1 34.5-1-.3-2-.5-3.1-.7-3.9-.8-7.8-1.2-11.7-1.2-18.7 0-34.1 10.1-40.3 26.4-2.2 5.7-3.2 11.8-2.8 17.8s2 12 4.9 17.4c4.1 7.8 10.7 14.7 20 21.3 2.5 1.7 6.4 4.2 11.2 7.4 2.6 1.7 6.5 4.2 10.3 6.7 1.3 .9 2.4 2 3.3 3.3 .8 1.6 .8 3.4-.4 6.6-2.5 5.5-5.5 10.8-8.9 15.8-12.1 17.7-29.4 32.6-51.4 44.6-11.7 6.2-23.9 10.3-29 24.3-3.9 10.5-1.3 22.5 8.5 32.6 3.6 3.8 7.8 6.9 12.4 9.4 9.6 5.3 19.8 9.3 30.3 12.1 2.2 .6 4.3 1.5 6.1 2.7 3.6 3.1 3.1 7.9 7.8 14.8 2.4 3.6 5.4 6.7 9 9.1 10 6.9 21.3 7.4 33.2 7.8 10.8 .4 23 .9 36.9 5.5 5.8 1.9 11.8 5.6 18.7 9.9 16.7 10.3 39.6 24.3 77.8 24.3s61.3-14.1 78.1-24.4c6.9-4.2 12.9-7.9 18.5-9.8 13.9-4.6 26.2-5.1 36.9-5.5 11.9-.5 23.2-.9 33.2-7.8 4.2-2.9 7.7-6.7 10.2-11.2 3.4-5.8 3.4-9.9 6.6-12.8 1.8-1.2 3.7-2.1 5.8-2.6 10.7-2.8 21-6.9 30.8-12.2 4.9-2.6 9.3-6.1 13-10.2l.1-.2c9.2-9.9 11.5-21.5 7.8-31.8zm-34 18.3c-20.7 11.5-34.5 10.2-45.3 17.1-9.1 5.9-3.7 18.5-10.3 23.1-8.1 5.6-32.2-.4-63.2 9.9-25.6 8.5-42 32.8-88 32.8s-62-24.3-88.1-32.9c-31-10.3-55.1-4.2-63.2-9.9-6.6-4.6-1.2-17.2-10.3-23.1-10.7-6.9-24.5-5.7-45.3-17.1-13.2-7.3-5.7-11.8-1.3-13.9 75.1-36.4 87.1-92.6 87.7-96.7 .6-5 1.4-9-4.2-14.1-5.4-5-29.2-19.7-35.8-24.3-10.9-7.6-15.7-15.3-12.2-24.6 2.5-6.5 8.5-8.9 14.9-8.9 2 0 4 .2 6 .7 12 2.6 23.7 8.6 30.4 10.2 .8 .2 1.6 .3 2.5 .3 3.6 0 4.9-1.8 4.6-5.9-.8-13.1-2.6-38.7-.6-62.6 2.8-32.9 13.4-49.2 26-63.6 6.1-6.9 34.5-37 88.9-37S339 74.2 345 81.1c12.6 14.4 23.2 30.7 26 63.6 2.1 23.9 .3 49.5-.6 62.6-.3 4.3 1 5.9 4.6 5.9 .8 0 1.7-.1 2.5-.3 6.7-1.6 18.4-7.6 30.4-10.2 2-.4 4-.7 6-.7 6.4 0 12.4 2.5 14.9 8.9 3.5 9.4-1.2 17-12.2 24.6-6.6 4.6-30.4 19.3-35.8 24.3-5.6 5.1-4.8 9.1-4.2 14.2 .5 4.2 12.5 60.4 87.7 96.7 4.4 2.2 11.9 6.7-1.3 14.1z"]},Rs={prefix:"fab",iconName:"medium",icon:[448,512,[62407,"medium-m"],"f23a","M369.4 32c43.4 0 78.6 35.2 78.6 78.6l0 83.8c-1.9-.1-3.8-.2-5.7-.2l-.4 0c-10 0-22.3 2.4-31.1 6.8-10 4.6-18.7 11.5-26 20.6-11.8 14.6-18.9 34.3-20.6 56.4-.1 .7-.1 1.3-.2 2s-.1 1.2-.1 1.9c-.1 1.2-.1 2.4-.1 3.6 0 1.9-.1 3.8 0 5.8 1.2 50.1 28.2 90.2 76.3 90.2 2.7 0 5.3-.1 7.9-.4l0 20.4c0 43.4-35.2 78.6-78.6 78.6L78.6 480C35.2 480 0 444.8 0 401.4L0 110.6C0 67.2 35.2 32 78.6 32l290.8 0zM82.3 138.9l.3 .1c13.2 3 19.8 7.4 19.8 23.4l0 187.2c0 16-6.7 20.4-19.9 23.4l-.3 .1 0 2.8 52.8 0 0-2.8-.3-.1c-13.2-3-19.9-7.4-19.9-23.4l0-176.3 86.1 202.5 4.9 0 88.6-208.2 0 186.6c-1.1 12.6-7.8 16.5-19.7 19.2l-.3 .1 0 2.7 91.9 0 0-2.7-.3-.1c-11.9-2.7-18.7-6.6-19.9-19.2l-.1-191.8 .1 0c0-16 6.7-20.4 19.9-23.4l.3-.1 0-2.7-72.2 0-67 157.4-67-157.4-77.8 0 0 2.7zM448 340.3c-25.1-7.4-43-35.1-41.2-67.8l0 0 41.1 0 0 67.8zm-6.4-135.6c2.3 0 4.4 .3 6.4 .9l0 57.4-40.2 0c1.5-33.6 13.6-57.9 33.8-58.3z"]},Ws={prefix:"fab",iconName:"apple",icon:[384,512,[],"f179","M319.1 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7-55.8 .9-115.1 44.5-115.1 133.2 0 26.2 4.8 53.3 14.4 81.2 12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zM262.5 104.5c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"]},Us={prefix:"fab",iconName:"spotify",icon:[512,512,[],"f1bc","M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM356.7 372.9c-4.2 0-6.8-1.3-10.7-3.6-62.4-37.6-135-39.2-206.7-24.5-3.9 1-9 2.6-11.9 2.6-9.7 0-15.8-7.7-15.8-15.8 0-10.3 6.1-15.2 13.6-16.8 81.9-18.1 165.6-16.5 237 26.2 6.1 3.9 9.7 7.4 9.7 16.5s-7.1 15.4-15.2 15.4zm26.9-65.6c-5.2 0-8.7-2.3-12.3-4.2-62.5-37-155.7-51.9-238.6-29.4-4.8 1.3-7.4 2.6-11.9 2.6-10.7 0-19.4-8.7-19.4-19.4s5.2-17.8 15.5-20.7c27.8-7.8 56.2-13.6 97.8-13.6 64.9 0 127.6 16.1 177 45.5 8.1 4.8 11.3 11 11.3 19.7-.1 10.8-8.5 19.5-19.4 19.5zm31-76.2c-5.2 0-8.4-1.3-12.9-3.9-71.2-42.5-198.5-52.7-280.9-29.7-3.6 1-8.1 2.6-12.9 2.6-13.2 0-23.3-10.3-23.3-23.6 0-13.6 8.4-21.3 17.4-23.9 35.2-10.3 74.6-15.2 117.5-15.2 73 0 149.5 15.2 205.4 47.8 7.8 4.5 12.9 10.7 12.9 22.6 0 13.6-11 23.3-23.2 23.3z"]},Hs={prefix:"fab",iconName:"npm",icon:[576,512,[],"f3d4","M288 288l-32 0 0-64 32 0 0 64zM576 160l0 192-288 0 0 32-128 0 0-32-160 0 0-192 576 0zM160 192l-128 0 0 128 64 0 0-96 32 0 0 96 32 0 0-128zm160 0l-128 0 0 160 64 0 0-32 64 0 0-128zm224 0l-192 0 0 128 64 0 0-96 32 0 0 96 32 0 0-96 32 0 0 96 32 0 0-128z"]},Vs={prefix:"fab",iconName:"docker",icon:[640,512,[],"f395","M349.9 236.3l-66.1 0 0-59.4 66.1 0 0 59.4zm0-204.3l-66.1 0 0 60.7 66.1 0 0-60.7zm78.2 144.8l-66.1 0 0 59.4 66.1 0 0-59.4zM271.8 104.7l-66.1 0 0 60.1 66.1 0 0-60.1zm78.1 0l-66.1 0 0 60.1 66.1 0 0-60.1zm276.8 100c-14.4-9.7-47.6-13.2-73.1-8.4-3.3-24-16.7-44.9-41.1-63.7l-14-9.3-9.3 14c-18.4 27.8-23.4 73.6-3.7 103.8-8.7 4.7-25.8 11.1-48.4 10.7l-434.7 0c-8.7 50.8 5.8 116.8 44 162.1 37.1 43.9 92.7 66.2 165.4 66.2 157.4 0 273.9-72.5 328.4-204.2 21.4 .4 67.6 .1 91.3-45.2 1.5-2.5 6.6-13.2 8.5-17.1l-13.3-8.9zM115.6 176.8l-66 0 0 59.4 66.1 0 0-59.4-.1 0zm78.1 0l-66.1 0 0 59.4 66.1 0 0-59.4zm78.1 0l-66.1 0 0 59.4 66.1 0 0-59.4zm-78.1-72.1l-66.1 0 0 60.1 66.1 0 0-60.1z"]},Ys={prefix:"fab",iconName:"slack",icon:[448,512,[62447,"slack-hash"],"f198","M94.1 315.1c0 25.9-21.2 47.1-47.1 47.1S0 341 0 315.1 21.2 268 47.1 268l47.1 0 0 47.1zm23.7 0c0-25.9 21.2-47.1 47.1-47.1S212 289.2 212 315.1l0 117.8c0 25.9-21.2 47.1-47.1 47.1s-47.1-21.2-47.1-47.1l0-117.8zm47.1-189c-25.9 0-47.1-21.2-47.1-47.1S139 32 164.9 32 212 53.2 212 79.1l0 47.1-47.1 0zm0 23.7c25.9 0 47.1 21.2 47.1 47.1S190.8 244 164.9 244L47.1 244C21.2 244 0 222.8 0 196.9s21.2-47.1 47.1-47.1l117.8 0zm189 47.1c0-25.9 21.2-47.1 47.1-47.1S448 171 448 196.9 426.8 244 400.9 244l-47.1 0 0-47.1zm-23.7 0c0 25.9-21.2 47.1-47.1 47.1S236 222.8 236 196.9l0-117.8C236 53.2 257.2 32 283.1 32s47.1 21.2 47.1 47.1l0 117.8zm-47.1 189c25.9 0 47.1 21.2 47.1 47.1S309 480 283.1 480 236 458.8 236 432.9l0-47.1 47.1 0zm0-23.7c-25.9 0-47.1-21.2-47.1-47.1S257.2 268 283.1 268l117.8 0c25.9 0 47.1 21.2 47.1 47.1s-21.2 47.1-47.1 47.1l-117.8 0z"]},Bs={prefix:"fab",iconName:"android",icon:[640,512,[],"f17b","M131.2 61.9c5.3-.5 10.6 .6 15.3 3s8.6 6.2 11.3 10.8c17 29.5 34.2 58.9 51.2 88.4 3.5-1.4 7-2.7 10.5-3.9 31.3-10.9 64.2-16.6 97.4-16.9 1 0 2.1 0 3.2 0 38.1 0 76.2 7 111.6 21.1L483 75.7c1.8-3.2 4.3-6 7.2-8.2s6.2-3.9 9.8-4.8c3.1-.8 6.4-1.1 9.6-.8 4.2 .4 8.3 1.7 11.9 3.8 4 2.4 7.3 5.7 9.7 9.7 2 3.4 3.3 7.2 3.8 11.2s.1 8-1.2 11.7c-.6 1.9-1.4 3.7-2.4 5.5l-49.7 85.8c19.5 12.2 37.6 26.5 53.9 42.8 12.3 12.2 23.5 25.4 33.5 39.5 8.2 11.5 15.6 23.6 22.2 36.2 17.5 33.6 28.6 70.5 32.7 108.1l-608 0c4.1-37.7 15.2-74.5 32.7-108.1 14.5-27.9 33.4-53.5 55.7-75.7 16.5-16.4 34.7-30.9 54.5-43.1l-49.5-85.4c-3.7-6.4-4.7-14.1-2.8-21.2 1.9-7.1 6.4-13.1 12.7-16.8 3.6-2.2 7.7-3.5 11.9-3.8zm67.3 215.8c-12.2-8.1-30.1-2.5-40.1 12.5s-8.2 33.8 3.9 41.9 30.1 2.5 40.1-12.5 8.2-33.8-3.9-41.9zm283.6 12.5c-10-15-27.9-20.6-40.1-12.5s-13.9 26.9-3.9 41.9c10 15 27.9 20.6 40.1 12.5s13.9-26.9 3.9-41.9z"]},Xs={prefix:"fab",iconName:"tiktok",icon:[448,512,[],"e07b","M448.5 209.9c-44 .1-87-13.6-122.8-39.2l0 178.7c0 33.1-10.1 65.4-29 92.6s-45.6 48-76.6 59.6-64.8 13.5-96.9 5.3-60.9-25.9-82.7-50.8-35.3-56-39-88.9 2.9-66.1 18.6-95.2 40-52.7 69.6-67.7 62.9-20.5 95.7-16l0 89.9c-15-4.7-31.1-4.6-46 .4s-27.9 14.6-37 27.3-14 28.1-13.9 43.9 5.2 31 14.5 43.7 22.4 22.1 37.4 26.9 31.1 4.8 46-.1 28-14.4 37.2-27.1 14.2-28.1 14.2-43.8l0-349.4 88 0c-.1 7.4 .6 14.9 1.9 22.2 3.1 16.3 9.4 31.9 18.7 45.7s21.3 25.6 35.2 34.6c19.9 13.1 43.2 20.1 67 20.1l0 87.4z"]},Gs={prefix:"fab",iconName:"dev",icon:[448,512,[],"f6cc","M120.1 208.3c-3.9-2.9-7.8-4.3-11.6-4.3l-17.4 0 0 104.5 17.4 0c3.9 0 7.8-1.4 11.6-4.3s5.8-7.3 5.8-13.1l0-69.7c0-5.8-2-10.2-5.8-13.1zM404.1 32L43.9 32C19.7 32 .1 51.6 0 75.8L0 436.2C.1 460.4 19.7 480 43.9 480l360.2 0c24.2 0 43.8-19.6 43.9-43.8l0-360.4C447.9 51.6 428.3 32 404.1 32zM154.2 291.2c0 18.8-11.6 47.3-48.4 47.3l-46.4 0 0-165.5 47.4 0c35.4 0 47.4 28.5 47.4 47.3l0 70.9zm100.7-88.7l-53.3 0 0 38.4 32.6 0 0 29.6-32.6 0 0 38.4 53.3 0 0 29.6-62.2 0c-11.2 .3-20.4-8.5-20.7-19.7l0-125.1c-.3-11.1 8.6-20.4 19.7-20.7l63.2 0 0 29.5zM358.5 317.8c-13.2 30.7-36.8 24.6-47.4 0l-38.5-144.8 32.6 0 29.7 113.7 29.6-113.7 32.6 0-38.5 144.8z"]},qs={prefix:"fab",iconName:"figma",icon:[384,512,[],"f799","M14 95.8C14 42.9 56.9 0 109.8 0L274.2 0c52.9 0 95.8 42.9 95.8 95.8 0 33.5-17.2 63-43.2 80.1 26 17.1 43.2 46.6 43.2 80.1 0 52.9-42.9 95.8-95.8 95.8l-2.1 0c-24.8 0-47.4-9.4-64.4-24.9l0 88.3c0 53.6-44 96.8-97.4 96.8-52.8 0-96.3-42.8-96.3-95.8 0-33.5 17.2-63 43.2-80.1-26-17.1-43.2-46.6-43.2-80.1s17.2-63 43.2-80.1C31.2 158.8 14 129.3 14 95.8zm162.3 95.8l-66.5 0c-35.6 0-64.4 28.8-64.4 64.4 0 35.4 28.6 64.2 64 64.4l66.9 0 0-128.8zM207.7 256c0 35.6 28.8 64.4 64.4 64.4l2.1 0c35.6 0 64.4-28.8 64.4-64.4s-28.8-64.4-64.4-64.4l-2.1 0c-35.6 0-64.4 28.8-64.4 64.4zm-97.9 95.8l-.4 0c-35.4 .2-64 29-64 64.4s29.2 64.4 64.9 64.4c36.3 0 66-29.4 66-65.5l0-63.4-66.5 0zm0-320.4c-35.6 0-64.4 28.8-64.4 64.4s28.8 64.4 64.4 64.4l66.5 0 0-128.8-66.5 0zm97.9 128.8l66.5 0c35.6 0 64.4-28.8 64.4-64.4s-28.8-64.4-64.4-64.4l-66.5 0 0 128.8z"]},Ks={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Js={prefix:"fab",iconName:"x-twitter",icon:[448,512,[],"e61b","M357.2 48L427.8 48 273.6 224.2 455 464 313 464 201.7 318.6 74.5 464 3.8 464 168.7 275.5-5.2 48 140.4 48 240.9 180.9 357.2 48zM332.4 421.8l39.1 0-252.4-333.8-42 0 255.3 333.8z"]},Qs={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1c-41.9-42-97.7-65.1-157-65.1-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480 117.7 449.1c32.4 17.7 68.9 27 106.1 27l.1 0c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3 18.6-68.1-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1s56.2 81.2 56.1 130.5c0 101.8-84.9 184.6-186.6 184.6zM325.1 300.5c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8s-14.3 18-17.6 21.8c-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7 .9-6.9-.5-9.7s-12.5-30.1-17.1-41.2c-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2s-9.7 1.4-14.8 6.9c-5.1 5.6-19.4 19-19.4 46.3s19.9 53.7 22.6 57.4c2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4s4.6-24.1 3.2-26.4c-1.3-2.5-5-3.9-10.5-6.6z"]},Zs={prefix:"fab",iconName:"twitter",icon:[512,512,[],"f099","M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103l0-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"]},e2={prefix:"fab",iconName:"telegram",icon:[512,512,[62462,"telegram-plane"],"f2c6","M256 8a248 248 0 1 0 0 496 248 248 0 1 0 0-496zM371 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5c-2.2 .5-37.1 23.5-104.6 69.1-9.9 6.8-18.9 10.1-26.9 9.9-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3 .6-4.5 6.7-9 18.4-13.7 72.3-31.5 120.5-52.3 144.6-62.3 68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9 2 1.7 3.2 4.1 3.5 6.7 .5 3.2 .6 6.5 .4 9.8z"]},a2={prefix:"fab",iconName:"amazon",icon:[448,512,[],"f270","M257.7 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56s-32.3-25.3-32.3-52.8l0-147.1C341.5 89 317 32 229.2 32 141.2 32 94.5 87 94.5 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8l0 40.6zM393.7 413c-7.7 10-70 67-174.5 67S34.7 408.5 10.2 379c-6.8-7.7 1-11.3 5.5-8.3 73.3 44.5 187.8 117.8 372.5 30.3 7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z"]};const $t={star:ss,heart:kl,bolt:vs,fire:Ml,crown:Ll,gem:Xl,rocket:zl,globe:ps,home:Jl,envelope:dl,phone:is,camera:bl,video:Al,music:hs,book:wl,code:Fl,terminal:Tl,database:Nl,cloud:Rl,sun:Il,moon:ns,bell:ml,flag:cs,tag:bs,"map-pin":ul,compass:ys,briefcase:_s,"shopping-cart":Ss,"credit-card":ls,"dollar-sign":fl,clock:_l,calendar:Gl,user:Ql,cog:Vl,lock:ds,key:vl,pencil:El,trash:yl,"plus-circle":Ol,"minus-circle":zs,"check-circle":as,"question-circle":Yl,"info-circle":Ns,"exclamation-triangle":us,search:gl,download:ms,upload:gs,share:Cl,link:Wl,"paper-plane":xl,inbox:os,comment:Sl,"chart-bar":ql,folder:jl,file:Bl,image:Pl,palette:hl,cube:Zl,cubes:ts,list:rs,"th-large":ks,thumbtack:$l,"circle-question":Tt,"rectangle-list":Ul,github:$s,twitter:Zs,youtube:Ts,linkedin:Ds,instagram:Ks,facebook:Os,slack:Ys,whatsapp:Qs,telegram:e2,discord:Es,amazon:a2,google:Ps,apple:Ws,windows:Is,android:Bs,reddit:Ls,tiktok:Xs,snapchat:js,pinterest:Fs,spotify:Us,medium:Rs,dev:Gs,"stack-overflow":As,npm:Hs,docker:Vs,figma:qs,"x-twitter":Js};function Oe({name:e,size:a=20}){const n=e.startsWith("fa:")?e.slice(3):e;return r(n2,{def:n,size:a})}function n2({def:e,size:a}){const n=$t[e];if(!n)return null;const t=cl(n);if(!t)return null;const i=t.icon[0],l=t.icon[1],o=Array.isArray(t.icon[4])?t.icon[4]:[t.icon[4]];return r("svg",{width:a,height:a,viewBox:`0 0 ${i} ${l}`,fill:"currentColor","aria-hidden":"true",children:o.map((s,c)=>r("path",{d:s},c))})}const _n=Object.keys($t).map(e=>({name:`fa:${e}`,label:e}));function t2({widget:e,onDeleteLink:a,onEditLink:n}){return r("ul",{className:"links-widget",children:e.items.map(t=>r(i2,{link:t,onDelete:a,onEdit:n},t.id))})}function i2({link:e,onDelete:a,onEdit:n}){const[t,i]=M(!1),[l,o]=M(!1),[s,c]=M({top:0,right:0}),u=R(null),m=R(null),d=e.favicon&&!t?e.favicon:Zt(e.url);j(()=>{if(!l)return;const h=z=>{const k=z.target;u.current&&!u.current.contains(k)&&m.current&&!m.current.contains(k)&&o(!1)};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[l]);const f=()=>{if(m.current){const h=m.current.getBoundingClientRect();c({top:h.bottom+2,right:window.innerWidth-h.right})}o(!0)},v=h=>{h.preventDefault(),h.stopPropagation(),f()},x=h=>{h.stopPropagation(),h.preventDefault(),l?o(!1):f()},C=h=>z=>{z.stopPropagation(),z.preventDefault(),o(!1),h?.(e.id)};return r("li",{className:"links-widget__item",onContextMenu:v,children:[r("a",{href:e.url,target:"_blank",rel:"noopener noreferrer",className:"links-widget__link","aria-label":`Abrir ${e.title}`,children:[r("span",{className:"links-widget__icon",children:e.icon?r(Oe,{name:e.icon,size:16}):d?r("img",{src:d,alt:"",width:"18",height:"18",loading:"lazy",decoding:"async",onError:()=>i(!0)}):r(Oe,{name:"fa:link",size:14})}),r("span",{className:"links-widget__text",children:e.title})]}),(n||a)&&r("div",{className:"links-widget__actions",children:[r("button",{ref:m,className:"links-widget__kebab",onClick:x,"aria-label":"Ações do link",title:"Ações",children:r(T,{name:"more-vertical",size:14})}),l&&ga(r("div",{ref:u,className:"links-widget__menu",style:{position:"fixed",top:s.top,right:s.right},children:[n&&r("button",{className:"links-widget__menu-item",onClick:C(n),children:[r(T,{name:"edit",size:14}),"Editar"]}),a&&r("button",{className:"links-widget__menu-item links-widget__menu-item--danger",onClick:C(a),children:[r(T,{name:"trash",size:14}),"Excluir"]})]}),document.body)]})]})}const r2=["January","February","March","April","May","June","July","August","September","October","November","December"],o2=["Su","Mo","Tu","We","Th","Fr","Sa"];function l2(){const[e,a]=M(new Date),[n,t]=M(new Date);j(()=>{a(new Date)},[]);const i=n.getFullYear(),l=n.getMonth(),o=new Date(i,l,1).getDay(),s=new Date(i,l+1,0).getDate(),c=()=>t(new Date(i,l-1,1)),u=()=>t(new Date(i,l+1,1)),m=f=>e.getDate()===f&&e.getMonth()===l&&e.getFullYear()===i,d=[];for(let f=0;f<o;f++)d.push(null);for(let f=1;f<=s;f++)d.push(f);return r("div",{className:"calendar-widget",children:[r("div",{className:"calendar-widget__header",children:[r("button",{className:"calendar-widget__nav",onClick:c,"aria-label":"Mês anterior",children:r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r("path",{d:"M15 18l-6-6 6-6"})})}),r("span",{className:"calendar-widget__month",children:[r2[l]," ",i]}),r("button",{className:"calendar-widget__nav",onClick:u,"aria-label":"Próximo mês",children:r("svg",{width:"16",height:"16",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",children:r("path",{d:"M9 18l6-6-6-6"})})})]}),r("div",{className:"calendar-widget__grid",children:[o2.map(f=>r("div",{className:"calendar-widget__day-label",children:f},f)),d.map((f,v)=>r("div",{className:`calendar-widget__day ${f===null?"calendar-widget__day--empty":""} ${f&&m(f)?"calendar-widget__day--today":""}`,children:f},v))]})]})}const Ae={focus:25*60,short:5*60,long:15*60};function s2(){const[e,a]=M("focus"),[n,t]=M(Ae.focus),[i,l]=M(!1),o=R(null);j(()=>(i&&n>0?o.current=window.setInterval(()=>{t(x=>x<=1?(l(!1),0):x-1)},1e3):o.current&&(clearInterval(o.current),o.current=null),()=>{o.current&&clearInterval(o.current)}),[i,n]);const s=x=>{a(x),t(Ae[x]),l(!1)},c=()=>{t(Ae[e]),l(!1)},u=()=>l(x=>!x),m=Math.floor(n/60),d=n%60,f=`${String(m).padStart(2,"0")}:${String(d).padStart(2,"0")}`,v=n/Ae[e]*100;return r("div",{className:"pomodoro-widget",children:[r("div",{className:"pomodoro-widget__modes",children:["focus","short","long"].map(x=>r("button",{className:`pomodoro-widget__mode ${e===x?"pomodoro-widget__mode--active":""}`,onClick:()=>s(x),children:x==="focus"?"Focus":x==="short"?"Short Break":"Long Break"},x))}),r("div",{className:"pomodoro-widget__timer",children:[r("div",{className:"pomodoro-widget__ring",style:{background:`conic-gradient(var(--accent) ${v*3.6}deg, var(--bg-hover) 0deg)`}}),r("span",{className:"pomodoro-widget__time",children:f})]}),r("div",{className:"pomodoro-widget__controls",children:[r("button",{className:"pomodoro-widget__btn",onClick:c,"aria-label":"Reiniciar",children:r(T,{name:"rotate-ccw",size:18})}),r("button",{className:"pomodoro-widget__btn pomodoro-widget__btn--primary",onClick:u,"aria-label":i?"Pausar":"Iniciar",children:r(T,{name:i?"pause":"play",size:22})}),r("button",{className:"pomodoro-widget__btn",onClick:()=>s(e),"aria-label":"Próximo",children:r(T,{name:"skip-forward",size:18})})]})]})}const c2=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],f2=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];function Dt({timezone:e,label:a}){const[n,t]=M(new Date);j(()=>{t(new Date);const m=setInterval(()=>t(new Date),1e3);return()=>clearInterval(m)},[]);const i={timeZone:e,hour:"numeric",minute:"2-digit",hour12:!0},l=e?n.toLocaleTimeString("en-US",i):u2(n),o=c2[n.getDay()],s=f2[n.getMonth()],c=n.getDate(),u=a||`${o} ${s} ${c}`;return r("div",{className:"clock-widget",children:[r("div",{className:"clock-widget__label",children:u}),r("div",{className:"clock-widget__time",children:l})]})}function u2(e){let a=e.getHours();const n=String(e.getMinutes()).padStart(2,"0"),t=a>=12?"PM":"AM";return a=a%12||12,`${a}:${n} ${t}`}function Ot({city:e=""}){const[a,n]=M(null),[t,i]=M(!0),[l,o]=M(null);if(j(()=>{let c=!1;return i(!0),o(null),(async()=>{try{let m,d,f,v=!1;if(e){const k=await m2(e);if(!k)throw new Error("Cidade não encontrada");m=k.lat,d=k.lon,f=k.name}else if(navigator.geolocation)try{const k=await new Promise((F,O)=>{navigator.geolocation.getCurrentPosition(F,O,{enableHighAccuracy:!1,timeout:8e3,maximumAge:6e5})});m=k.coords.latitude,d=k.coords.longitude,v=!0,f=await d2(m,d)}catch{throw new Error("Localização não disponível")}else throw new Error("Localização não disponível");const x=await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${m}&longitude=${d}&current_weather=true&timezone=auto`);if(!x.ok)throw new Error("Falha ao buscar clima");const C=await x.json(),h=C.current_weather?.weathercode??0,z=C.current_weather?.temperature;c||n({temp:Math.round(z??0),condition:p2(h),cityName:f,isGeo:v})}catch(m){c||o(m instanceof Error?m.message:"Erro")}finally{c||i(!1)}})(),()=>{c=!0}},[e]),t)return r("div",{className:"weather-widget",children:[r("div",{className:"weather-widget__city",children:"—"}),r("div",{className:"weather-widget__row",children:r("span",{className:"weather-widget__temp",children:"—"})})]});if(l||!a)return r("div",{className:"weather-widget",children:[r("div",{className:"weather-widget__city",children:"—"}),r("div",{className:"weather-widget__row",children:r("span",{className:"weather-widget__temp",children:"—"})})]});const s=a.condition==="Sunny"?"sun":a.condition==="Cloudy"?"cloud":a.condition==="Rainy"||a.condition==="Stormy"?"cloud-rain":"cloud-sun";return r("div",{className:"weather-widget",children:[r("div",{className:"weather-widget__city",children:[a.isGeo?"📍 ":"",a.cityName.toUpperCase()]}),r("div",{className:"weather-widget__row",children:[r(T,{name:s,size:22}),r("span",{className:"weather-widget__temp",children:[a.temp,"°C"]})]})]})}async function d2(e,a){try{const n=await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${e}&longitude=${a}&localityLanguage=pt`);if(!n.ok)return`${e.toFixed(2)}, ${a.toFixed(2)}`;const t=await n.json();return t.city||t.locality||t.principalSubdivision||`${e.toFixed(2)}, ${a.toFixed(2)}`}catch{return`${e.toFixed(2)}, ${a.toFixed(2)}`}}async function m2(e){try{const a=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(e)}&count=1&language=pt&format=json`);if(!a.ok)return null;const t=(await a.json()).results?.[0];return t?{lat:t.latitude,lon:t.longitude,name:t.name||t.country||e}:null}catch{return null}}function p2(e){return e===0?"Sunny":e>=1&&e<=3?"Partly Cloudy":e>=45&&e<=48?"Cloudy":e>=51&&e<=67||e>=80&&e<=82?"Rainy":e>=71&&e<=77?"Snowy":e>=95?"Stormy":"Partly Cloudy"}function jt({targetMinutes:e=240}){const[a,n]=M(0);j(()=>{const s=new Date().toDateString(),c=localStorage.getItem(`focusToday-${s}`);c&&n(parseInt(c,10))},[]);const t=Math.floor(a/60),i=a%60,l=`${t}h ${i.toString().padStart(2,"0")}m`,o=Math.min(a/e*100,100);return r("div",{className:"focus-widget",children:[r("div",{className:"focus-widget__label",children:"FOCUS TODAY"}),r("div",{className:"focus-widget__value",children:l}),r("div",{className:"focus-widget__bar",children:r("div",{className:"focus-widget__progress",style:{width:`${o}%`}})})]})}function g2(e){const[a,n]=M(1);return j(()=>{const t=e.current;if(!t)return;const i=()=>{const o=t.clientWidth;o>=1920?n(6):o>=1600?n(5):o>=1280?n(4):o>=900?n(3):o>=480?n(2):n(1)};i();const l=new ResizeObserver(i);return l.observe(t),window.addEventListener("resize",i),()=>{l.disconnect(),window.removeEventListener("resize",i)}},[e]),a}function h2({widgets:e,onReorder:a,onEditWidget:n,onDeleteWidget:t,onDeleteLink:i,onEditLink:l,onAddLink:o,onResizeWidget:s,isEditing:c=!0}){const u=R(null),m=g2(u),[d,f]=M({widgetId:null,col:null,position:null}),v=pe(()=>{const L=Array.from({length:m},()=>[]);for(const _ of e){const p=Math.min(Math.max(_.col??0,0),m-1);L[p].push(_)}for(const _ of L)_.sort((p,E)=>p.order-E.order);return L},[e,m]),x=(L,_)=>{f({widgetId:_,col:null,position:null}),L.dataTransfer?.setData("text/plain",_),L.dataTransfer?.setDragImage(new Image,0,0)},C=(L,_)=>{if(L.preventDefault(),L.stopPropagation(),!d.widgetId||d.widgetId===_.id){f(P=>({...P,col:null,position:null}));return}const p=L.currentTarget.getBoundingClientRect(),E=p.top+p.height/2,w=L.clientY<E?"before":"after",I=Math.min(Math.max(_.col??0,0),m-1);f({widgetId:d.widgetId,col:I,position:w})},h=(L,_)=>{L.preventDefault(),d.widgetId&&f({widgetId:d.widgetId,col:_,position:"into"})},z=L=>{const _=Array.from({length:m},()=>[]),p=e.map(w=>({...w}));for(const w of p){const I=Math.min(Math.max(w.col??0,0),m-1);_[I].push(w)}L(_);for(const w of _)w.sort((I,P)=>I.order-P.order),w.forEach((I,P)=>{I.order=P});const E=_.flat();a(E)},k=(L,_)=>{if(L.preventDefault(),L.stopPropagation(),!d.widgetId||d.widgetId===_.id){f({widgetId:null,col:null,position:null});return}const p=Math.min(Math.max(_.col??0,0),m-1),w=v[p].findIndex(P=>P.id===_.id);let I=d.position==="after"?w+1:w;z(P=>{const V=P.flat().find(Y=>Y.id===d.widgetId);if(V){for(const Y of P){const re=Y.findIndex(ue=>ue.id===d.widgetId);if(re!==-1){Y.splice(re,1);break}}V.col=p,I>P[p].length&&(I=P[p].length),P[p].splice(I,0,V)}}),f({widgetId:null,col:null,position:null})},F=(L,_)=>{if(L.preventDefault(),!d.widgetId){f({widgetId:null,col:null,position:null});return}z(p=>{let E;for(const w of p){const I=w.findIndex(P=>P.id===d.widgetId);if(I!==-1){E=w.splice(I,1)[0];break}}E&&(E.col=_,p[_].push(E))}),f({widgetId:null,col:null,position:null})},O=()=>{f({widgetId:null,col:null,position:null})};return e.length===0?r("div",{className:"widgets-grid",ref:u,children:r("div",{className:"empty-state",children:[r("h3",{className:"empty-state__title",children:"Nenhum widget"}),r("p",{className:"empty-state__description",children:"Adicione seu primeiro widget para começar a montar o layout."})]})}):r("div",{className:"widgets-grid",ref:u,children:v.map((L,_)=>r("div",{className:"widgets-column",onDragOver:p=>c&&h(p,_),onDrop:p=>c&&F(p,_),children:[L.length===0&&d.col===_&&d.position==="into"&&r(Je,{}),L.map(p=>{const E=d.widgetId&&d.widgetId!==p.id&&d.col===(p.col??0);return r("div",{className:"widget-drop-wrapper",children:[E&&d.position==="before"&&r(Je,{}),r(Ai,{widget:p,isDragging:p.id===d.widgetId,onDragStart:c?w=>x(w,p.id):void 0,onDragOver:c?w=>C(w,p):void 0,onDrop:c?w=>k(w,p):void 0,onDragEnd:O,onEdit:c?()=>n(p):void 0,onDelete:c?()=>t(p.id):void 0,onAddLink:c&&p.type==="links"&&o?()=>o(p):void 0,onResize:s?w=>s(p.id,w):void 0,children:r(v2,{widget:p,onDeleteLink:w=>i(p.id,w),onEditLink:l?w=>l(p.id,w):void 0})}),E&&d.position==="after"&&r(Je,{})]},p.id)})]},_))})}function Je(){return r("div",{className:"drop-indicator"})}function v2({widget:e,onDeleteLink:a,onEditLink:n}){switch(e.type){case"links":return r(t2,{widget:e,onDeleteLink:a,onEditLink:n});case"calendar":return r(l2,{});case"pomodoro":return r(s2,{});case"clock":return r(Dt,{timezone:e.timezone,label:e.label});case"weather":return r(Ot,{city:e.city});case"focus":return r(jt,{targetMinutes:e.targetMinutes});default:return null}}function Sa({value:e,onChange:a,onSelect:n,placeholder:t="Ex: São Paulo",id:i,className:l=""}){const[o,s]=M(e),[c,u]=M([]),[m,d]=M(!1),[f,v]=M(!1),[x,C]=M(0),h=R(null),z=R(null);j(()=>{s(e)},[e]),j(()=>{const _=p=>{h.current&&!h.current.contains(p.target)&&v(!1)};return document.addEventListener("mousedown",_),()=>document.removeEventListener("mousedown",_)},[]);const k=async _=>{if(!_.trim()){u([]),v(!1),d(!1);return}d(!0);try{const p=await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(_)}&count=10&language=pt&format=json`);if(!p.ok)throw new Error("Falha na busca");const w=(await p.json()).results||[];u(w),v(w.length>0),C(0)}catch{u([]),v(!1)}finally{d(!1)}},F=_=>{s(_),a(_),z.current&&window.clearTimeout(z.current),z.current=window.setTimeout(()=>{k(_)},300)},O=_=>{const p=_.name;s(p),a(p),n&&n(p),v(!1),u([])},L=_=>{if(f)if(_.key==="ArrowDown")_.preventDefault(),C(p=>(p+1)%c.length);else if(_.key==="ArrowUp")_.preventDefault(),C(p=>(p-1+c.length)%c.length);else if(_.key==="Enter"){_.preventDefault();const p=c[x];p&&O(p)}else _.key==="Escape"&&v(!1)};return r("div",{ref:h,className:`city-autocomplete ${l}`,children:[r("input",{id:i,type:"text",value:o,onInput:_=>F(_.target.value),onKeyDown:L,onFocus:()=>o.trim()&&c.length>0&&v(!0),placeholder:t,autoComplete:"off","aria-autocomplete":"list","aria-expanded":f,"aria-controls":f?`${i||"city"}-listbox`:void 0,role:"combobox"}),m&&r("span",{className:"city-autocomplete__spinner","aria-hidden":"true"}),f&&c.length>0&&r("ul",{id:`${i||"city"}-listbox`,className:"city-autocomplete__dropdown",role:"listbox",children:c.map((_,p)=>r("li",{className:`city-autocomplete__option ${p===x?"city-autocomplete__option--highlighted":""}`,onClick:()=>O(_),onMouseEnter:()=>C(p),role:"option","aria-selected":p===x,children:[r("span",{className:"city-autocomplete__option-name",children:_.name}),r("span",{className:"city-autocomplete__option-detail",children:[_.admin1?`${_.admin1}, `:"",_.country||""]})]},_.id))})]})}const b2=[{type:"links",label:"Links",icon:"external"},{type:"calendar",label:"Calendário",icon:"grid"},{type:"pomodoro",label:"Pomodoro",icon:"clock"},{type:"clock",label:"Relógio",icon:"clock"},{type:"weather",label:"Clima",icon:"cloud-sun"},{type:"focus",label:"Foco Hoje",icon:"target"}];function wn({widget:e,onSave:a,onClose:n}){const t=!!e,[i,l]=M(e?.type||"links"),[o,s]=M(e?.title||""),[c,u]=M(e?.colSpan||1),[m,d]=M(e?.col??0),[f,v]=M(e?.height??""),[x,C]=M(e?.type==="weather"&&e.city||""),[h,z]=M(e?.type==="clock"&&e.timezone||""),[k,F]=M(e?.type==="clock"&&e.label||""),[O,L]=M(e?.type==="focus"&&e.targetMinutes||240);j(()=>{if(i!=="weather")return;let p=!1;return(async()=>{if(navigator.geolocation)try{const E=await new Promise((I,P)=>{navigator.geolocation.getCurrentPosition(I,P,{enableHighAccuracy:!1,timeout:8e3,maximumAge:6e5})});if(p)return;const w=await y2(E.coords.latitude,E.coords.longitude);!p&&w&&C(w)}catch{}})(),()=>{p=!0}},[i]);const _=()=>{const p=e??kn(i,o),E={...p,title:o.trim()||p.title,colSpan:Math.min(Math.max(Number(c)||1,1),2),col:Math.max(Number(m)||0,0),height:f!==""?Math.max(Number(f),120):void 0};E.type==="weather"&&(E.city=x.trim()||"New York"),E.type==="clock"&&(E.timezone=h.trim()||void 0,E.label=k.trim()||void 0),E.type==="focus"&&(E.targetMinutes=Number(O)||240),a(E)};return r("div",{className:"modal-overlay",onClick:p=>p.target===p.currentTarget&&n(),role:"dialog","aria-modal":"true",children:r("div",{className:"modal modal--wide",children:[r("div",{className:"modal__header",children:[r("h2",{children:t?"Editar widget":"Novo widget"}),r("button",{className:"modal__close",onClick:n,"aria-label":"Fechar",children:r(T,{name:"close",size:18})})]}),r("div",{className:"widget-editor",children:[!t&&r("div",{className:"widget-editor__section",children:[r("label",{className:"widget-editor__label",children:"Tipo"}),r("div",{className:"widget-editor__types",children:b2.map(p=>r("button",{type:"button",className:`widget-editor__type ${i===p.type?"widget-editor__type--active":""}`,onClick:()=>l(p.type),children:[r(T,{name:p.icon,size:18}),r("span",{children:p.label})]},p.type))})]}),r("div",{className:"widget-editor__row",children:[r("label",{className:"widget-editor__field",children:[r("span",{children:"Título"}),r("input",{type:"text",value:o,onChange:p=>s(p.target.value),placeholder:"Ex: Trabalho"})]}),r("label",{className:"widget-editor__field widget-editor__field--small",children:[r("span",{children:"Largura"}),r("select",{value:c,onChange:p=>u(Number(p.target.value)),children:[r("option",{value:1,children:"1 coluna"}),r("option",{value:2,children:"2 colunas"})]})]}),r("label",{className:"widget-editor__field widget-editor__field--small",children:[r("span",{children:"Coluna"}),r("input",{type:"number",value:m,onChange:p=>d(Math.max(Number(p.target.value)||0,0)),min:0})]}),r("label",{className:"widget-editor__field widget-editor__field--small",children:[r("span",{children:"Altura (px)"}),r("input",{type:"number",value:f,onChange:p=>{const E=p.target.value;v(E===""?"":Number(E))},placeholder:"Auto",min:120})]})]}),i==="weather"&&r("label",{className:"widget-editor__field",children:[r("span",{children:"Cidade"}),r(Sa,{value:x,onChange:C,placeholder:"Ex: São Paulo",id:"widget-editor-city"})]}),i==="clock"&&r("div",{className:"widget-editor__row",children:[r("label",{className:"widget-editor__field",children:[r("span",{children:"Timezone (opcional)"}),r("input",{type:"text",value:h,onChange:p=>z(p.target.value),placeholder:"Ex: America/New_York"})]}),r("label",{className:"widget-editor__field",children:[r("span",{children:"Label (opcional)"}),r("input",{type:"text",value:k,onChange:p=>F(p.target.value),placeholder:"Ex: Wed Jun 17"})]})]}),i==="focus"&&r("label",{className:"widget-editor__field",children:[r("span",{children:"Meta de foco (minutos)"}),r("input",{type:"number",value:O,onChange:p=>L(Number(p.target.value)),min:1})]})]}),r("div",{className:"modal__actions",children:[r("button",{type:"button",className:"btn btn--secondary",onClick:n,children:"Cancelar"}),r("button",{type:"button",className:"btn btn--primary",onClick:_,children:"Salvar widget"})]})]})})}async function y2(e,a){try{const n=await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${e}&longitude=${a}&localityLanguage=pt`);if(!n.ok)return null;const t=await n.json();return t.city||t.locality||t.principalSubdivision||null}catch{return null}}function _2({selected:e,onSelect:a}){const[n,t]=M(!1),[i,l]=M(""),o=i.trim()?_n.filter(s=>s.label.toLowerCase().includes(i.toLowerCase())):_n;return r("div",{className:"icon-picker",children:[r("button",{type:"button",className:"icon-picker__trigger",onClick:()=>t(s=>!s),"aria-label":"Selecionar ícone",title:"Ícone do link",children:e?r(Oe,{name:e,size:18}):r("span",{className:"icon-picker__placeholder",children:"+"})}),n&&r("div",{className:"icon-picker__dropdown",children:[r("input",{type:"text",className:"icon-picker__search",placeholder:"Pesquisar ícone...",value:i,onInput:s=>l(s.target.value),autoFocus:!0}),r("div",{className:"icon-picker__grid",children:[o.map(s=>r("button",{className:`icon-picker__option ${e===s.name?"icon-picker__option--active":""}`,onClick:()=>{a(s.name),t(!1),l("")},"aria-label":s.label,title:s.label,children:r(Oe,{name:s.name,size:18})},s.name)),r("button",{className:"icon-picker__option icon-picker__option--clear",onClick:()=>{a(null),t(!1),l("")},"aria-label":"Sem ícone",title:"Sem ícone (usar favicon)",children:r("span",{style:{fontSize:18,lineHeight:1},children:"✕"})})]})]})]})}function zn({widgetTitle:e,link:a,onSave:n,onClose:t}){const i=!!a,[l,o]=M(a?.title||""),[s,c]=M(a?.url||""),[u,m]=M(a?.icon||null),d=()=>{const f=ei(s);f&&n(l.trim()||"Link sem título",f,u||void 0)};return r("div",{className:"modal-overlay",onClick:f=>f.target===f.currentTarget&&t(),role:"dialog","aria-modal":"true",children:r("div",{className:"modal",children:[r("div",{className:"modal__header",children:[r("h2",{children:[i?"Editar link":"Novo link",e?r("span",{className:"modal__subtitle",children:[" em ",e]}):null]}),r("button",{className:"modal__close",onClick:t,"aria-label":"Fechar",children:r(T,{name:"close",size:18})})]}),r("div",{className:"dialog__body",children:[r("label",{className:"widget-editor__field",children:[r("span",{children:"Ícone (opcional)"}),r("div",{className:"link-dialog__icon-row",children:[r(_2,{selected:u,onSelect:m}),u&&r("button",{type:"button",className:"link-dialog__icon-clear",onClick:()=>m(null),"aria-label":"Remover ícone",children:r(T,{name:"close",size:14})})]})]}),r("label",{className:"widget-editor__field",children:[r("span",{children:"Título"}),r("input",{type:"text",value:l,onChange:f=>o(f.target.value),placeholder:"Ex: Meu site favorito",onKeyDown:f=>f.key==="Enter"&&d()})]}),r("label",{className:"widget-editor__field",children:[r("span",{children:"URL"}),r("input",{type:"url",value:s,onChange:f=>c(f.target.value),placeholder:"https://...",onKeyDown:f=>f.key==="Enter"&&d()})]})]}),r("div",{className:"modal__actions",children:[r("button",{type:"button",className:"btn btn--secondary",onClick:t,children:"Cancelar"}),r("button",{type:"button",className:"btn btn--primary",onClick:d,disabled:!s.trim(),children:i?"Salvar":"Adicionar"})]})]})})}function w2({settings:e,onChange:a,onClose:n,onExport:t,onImport:i}){const l=R(null),[o,s]=M(e.wallpaper.type==="url"?e.wallpaper.value:""),[c,u]=M(e.topWidgets||[]),m=R(null);j(()=>{const h=z=>{m.current&&!m.current.contains(z.target)&&n()};return document.addEventListener("mousedown",h),()=>document.removeEventListener("mousedown",h)},[n]);const d=()=>{o.trim()&&a({wallpaper:{type:"url",value:o.trim()}})},f=h=>e.wallpaper.type===h.type&&e.wallpaper.value===h.value,v=(h,z)=>{const k=c.map((F,O)=>O===h?{...F,...z}:F);u(k),a({topWidgets:k})},x=()=>{const h=[...c,{type:"clock"}];u(h),a({topWidgets:h})},C=h=>{const z=c.filter((k,F)=>F!==h);u(z),a({topWidgets:z})};return r("div",{className:"settings-panel",ref:m,role:"dialog","aria-label":"Configurações",children:[r("div",{className:"settings-panel__header",children:[r("h3",{children:"Aparência"}),r("button",{className:"settings-panel__close",onClick:n,"aria-label":"Fechar configurações",children:r(T,{name:"close",size:18})})]}),r("div",{className:"settings-panel__section",children:[r("label",{className:"settings-panel__label",children:"Tema"}),r("div",{className:"theme-toggle",children:[r("button",{className:e.theme==="light"?"active":"",onClick:()=>a({theme:"light"}),"aria-label":"Tema claro",children:[r(T,{name:"sun",size:16}),r("span",{children:"Claro"})]}),r("button",{className:e.theme==="dark"?"active":"",onClick:()=>a({theme:"dark"}),"aria-label":"Tema escuro",children:[r(T,{name:"moon",size:16}),r("span",{children:"Escuro"})]}),r("button",{className:e.theme==="system"?"active":"",onClick:()=>a({theme:"system"}),"aria-label":"Tema do sistema",children:r("span",{children:"Sistema"})})]})]}),r("div",{className:"settings-panel__section",children:[r("label",{className:"settings-panel__label",children:"Papel de parede"}),r("div",{className:"wallpaper-grid",children:ai.map((h,z)=>r("button",{className:`wallpaper-thumb ${f(h)?"wallpaper-thumb--active":""}`,style:{background:h.value},onClick:()=>a({wallpaper:h}),"aria-label":`Selecionar wallpaper ${z+1}`,title:`Wallpaper ${z+1}`},z))}),r("div",{className:"custom-wallpaper",children:[r("input",{type:"url",placeholder:"URL da imagem customizada",value:o,onChange:h=>s(h.target.value),onKeyDown:h=>h.key==="Enter"&&d(),"aria-label":"URL de imagem customizada"}),r("button",{onClick:d,"aria-label":"Aplicar wallpaper customizado",children:r(T,{name:"check",size:16})})]})]}),r("div",{className:"settings-panel__section",children:[r("div",{className:"settings-panel__label-row",children:[r("label",{className:"settings-panel__label",children:"Widgets do topo"}),r("button",{className:"settings-panel__add",onClick:x,"aria-label":"Adicionar widget do topo",children:r(T,{name:"plus",size:14})})]}),r("div",{className:"top-widgets-list",children:c.map((h,z)=>r("div",{className:"top-widgets-item",children:[r("select",{value:h.type,onChange:k=>v(z,{type:k.target.value}),children:[r("option",{value:"weather",children:"Clima"}),r("option",{value:"focus",children:"Foco"}),r("option",{value:"clock",children:"Relógio"})]}),h.type==="weather"&&r(Sa,{value:h.city||"",onChange:k=>v(z,{city:k}),placeholder:"Cidade",id:`top-widget-city-${z}`}),h.type==="clock"&&r(Fe,{children:[r("input",{type:"text",placeholder:"Timezone",value:h.timezone||"",onChange:k=>v(z,{timezone:k.target.value})}),r("input",{type:"text",placeholder:"Label",value:h.label||"",onChange:k=>v(z,{label:k.target.value})})]}),h.type==="focus"&&r("input",{type:"number",placeholder:"Minutos meta",value:h.targetMinutes||240,onChange:k=>v(z,{targetMinutes:Number(k.target.value)})}),r("button",{className:"top-widgets-item__remove",onClick:()=>C(z),"aria-label":"Remover widget do topo",children:r(T,{name:"trash",size:14})})]},z))})]}),r("div",{className:"settings-panel__section",children:[r("label",{className:"settings-panel__label",children:"Backup"}),r("div",{className:"backup-actions",children:[r("button",{className:"btn btn--secondary",onClick:t,children:[r(T,{name:"download",size:14})," Exportar JSON"]}),r("button",{className:"btn btn--secondary",onClick:()=>l.current?.click(),children:[r(T,{name:"upload",size:14})," Importar JSON"]}),r("input",{ref:l,type:"file",accept:".json",style:{display:"none"},onChange:h=>{const z=h.target.files?.[0];z&&i(z),h.target.value=""}})]})]})]})}function z2({configs:e}){return e.length===0?null:r("div",{className:"top-info-widgets",children:e.map((a,n)=>r("div",{className:"top-info-widget",children:r(x2,{config:a})},`${a.type}-${n}`))})}function x2({config:e}){switch(e.type){case"weather":return r(Ot,{city:e.city});case"focus":return r(jt,{targetMinutes:e.targetMinutes});case"clock":return r(Dt,{timezone:e.timezone,label:e.label});default:return null}}const k2=[{type:"board",label:"Board",icon:"grid",hasAdd:!0},{type:"notes",label:"Notes",icon:"edit",hasAdd:!0},{type:"calendar",label:"Calendar",icon:"grid",hasAdd:!0},{type:"pomodoro",label:"Pomodoro",icon:"clock",hasAdd:!0},{type:"clock",label:"Clock",icon:"clock",hasToggle:!0},{type:"search",label:"Search",icon:"search",hasToggle:!0},{type:"focus",label:"Focus",icon:"target",hasToggle:!0,requiresWidget:"pomodoro"},{type:"weather",label:"Weather",icon:"cloud-sun",hasToggle:!0,hasCity:!0}];function M2({topWidgets:e,boardWidgets:a,onToggleWidget:n,onAddWidget:t,onCityChange:i,onClose:l}){const[o,s]=M(""),c=R(null);j(()=>{const f=e.find(v=>v.type==="weather");f?.city&&s(f.city)},[e]),j(()=>{const f=v=>{c.current&&!c.current.contains(v.target)&&l()};return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[l]);const u=f=>e.some(v=>v.type===f),m=k2.filter(f=>f.requiresWidget?a.includes(f.requiresWidget):!0),d=()=>{o.trim()&&i(o.trim())};return r("div",{className:"widget-toolbar",ref:c,children:[r("div",{className:"widget-toolbar__header",children:r("h3",{children:"WIDGETS"})}),r("div",{className:"widget-toolbar__list",children:m.map(f=>{const v=f.type!=="board"&&f.type!=="notes"?u(f.type):!1;return r("div",{className:"widget-toolbar__item",children:[r("div",{className:"widget-toolbar__item-info",children:[r(T,{name:f.icon,size:18}),r("span",{children:f.label})]}),f.hasAdd&&r("button",{className:"widget-toolbar__add-btn",onClick:()=>t(f.type),children:"Add"}),f.hasToggle&&r("label",{className:"widget-toolbar__toggle",children:[r("input",{type:"checkbox",checked:v,onChange:()=>n(f.type)}),r("span",{className:"widget-toolbar__toggle-slider"})]})]},f.type)})}),u("weather")&&r("div",{className:"widget-toolbar__city",children:[r(Sa,{value:o,onChange:s,onSelect:i,placeholder:"Cidade",id:"widget-toolbar-city"}),r("button",{className:"widget-toolbar__apply-btn",onClick:d,children:"Apply"})]})]})}function N2({open:e,title:a,message:n,confirmLabel:t="Confirmar",cancelLabel:i="Cancelar",danger:l=!1,onConfirm:o,onCancel:s}){return e?r("div",{className:"modal-overlay",onClick:c=>c.target===c.currentTarget&&s(),role:"dialog","aria-modal":"true","aria-label":a,children:r("div",{className:"modal confirm-dialog",children:[r("div",{className:"confirm-dialog__body",children:[l&&r("div",{className:"confirm-dialog__icon",children:r(T,{name:"trash",size:24})}),r("h3",{className:"confirm-dialog__title",children:a}),r("p",{className:"confirm-dialog__message",children:n})]}),r("div",{className:"modal__actions",children:[r("button",{type:"button",className:"btn btn--secondary",onClick:s,children:i}),r("button",{type:"button",className:`btn ${l?"btn--danger":"btn--primary"}`,onClick:o,autoFocus:!0,children:t})]})]})}):null}function C2({open:e,onSave:a,onClose:n}){const[t,i]=M(""),l=R(null);j(()=>{e&&(i(""),setTimeout(()=>l.current?.focus(),50))},[e]);const o=()=>{const s=t.trim();s&&a(s)};return e?r("div",{className:"modal-overlay",onClick:s=>s.target===s.currentTarget&&n(),role:"dialog","aria-modal":"true","aria-label":"Nova aba",children:r("div",{className:"modal",children:[r("div",{className:"modal__header",children:[r("h2",{children:"Nova aba"}),r("button",{className:"modal__close",onClick:n,"aria-label":"Fechar",children:r(T,{name:"close",size:18})})]}),r("div",{className:"dialog__body",children:r("label",{className:"widget-editor__field",children:[r("span",{children:"Nome da aba"}),r("input",{ref:l,type:"text",value:t,onChange:s=>i(s.target.value),placeholder:"Ex: Trabalho, Estudos...",onKeyDown:s=>{s.key==="Enter"&&o(),s.key==="Escape"&&n()},maxLength:50})]})}),r("div",{className:"modal__actions",children:[r("button",{type:"button",className:"btn btn--secondary",onClick:n,children:"Cancelar"}),r("button",{type:"button",className:"btn btn--primary",onClick:o,disabled:!t.trim(),children:"Criar"})]})]})}):null}function S2(e){return/^https?:\/\//i.test(e)||/^[a-z0-9][-a-z0-9]*\.[a-z]{2,}(\/|$)/i.test(e)}function A2(e){return/^https?:\/\//i.test(e)?e:`https://${e}`}function L2(){const[e,a]=M(null),[n,t]=M(void 0),[i,l]=M(""),[o,s]=M(!1),[c,u]=M(!1),[m,d]=M(!1),[f,v]=M(null),[x,C]=M(null),[h,z]=M(null),[k,F]=M(null),[O,L]=M(!1),[_,p]=M(!1);j(()=>{let y=!0;return gi().then(b=>{y&&(a(b),t(Ve(b)))}),()=>{y=!1}},[]),j(()=>{e&&Pa(e)},[e]),j(()=>{e&&n&&e.settings.lastBoardId!==n&&a(y=>y&&Ea(y,{lastBoardId:n}))},[n]),j(()=>{const y=e?.settings.theme??"system",b=document.documentElement,A=window.matchMedia("(prefers-color-scheme: dark)").matches,$=y==="dark"||y==="system"&&A;b.classList.toggle("theme-dark",$),b.classList.toggle("theme-light",!$)},[e?.settings.theme]),j(()=>{if(!_)return;const y=b=>{const A=document.querySelector(".app-fab-bar");A&&!A.contains(b.target)&&p(!1)};return document.addEventListener("mousedown",y),()=>document.removeEventListener("mousedown",y)},[_]);const E=pe(()=>e&&n?ni(e,n):void 0,[e,n]),w=pe(()=>e&&n?di(e,n):[],[e,n]);if(!e||!E)return r("div",{className:"app-loading","aria-label":"Carregando Boards"});const I=()=>{L(!0)},P=y=>{const b=mi(y);a(A=>A&&pi(A,b)),t(b.id),L(!1)},V=(y,b)=>{a(A=>A&&ti(A,y,b))},Y=(y,b)=>{F({title:"Excluir aba",message:`Tem certeza que deseja excluir a aba "${b}"? Todos os widgets e links serão perdidos.`,danger:!0,confirmLabel:"Excluir",onConfirm:()=>{a(A=>{if(!A)return A;const $=ii(A,y);return t(Ve($)),$}),F(null)}})},re=y=>{n&&(a(b=>b&&n?Ia(b,n,y):b),d(!1))},ue=y=>{n&&(a(b=>b&&n?La(b,n,y.id,y):b),v(null))},Rt=y=>{F({title:"Excluir widget",message:"Tem certeza que deseja excluir este widget?",danger:!0,confirmLabel:"Excluir",onConfirm:()=>{n&&a(b=>b&&n?oi(b,n,y):b),F(null)}})},Wt=y=>{n&&a(b=>!b||!n||!b.boards.find($=>$.id===n)?b:{...b,boards:b.boards.map($=>$.id===n?{...$,widgets:y,updatedAt:Date.now()}:$)})},Ut=(y,b)=>{n&&a(A=>A&&n?La(A,n,y,{height:b}):A)},Ht=(y,b)=>{n&&a(A=>A&&n?ri(A,n,y,b):A)},Vt=(y,b,A,$)=>{if(!n)return;const me=li(b,A,$);a(ae=>ae&&n?si(ae,n,y,me):ae),C(null)},Yt=(y,b)=>{z({widgetId:y,linkId:b})},Bt=(y,b,A,$,me)=>{n&&(a(ae=>ae&&n?ci(ae,n,y,b,{title:A.trim()||"Link sem título",url:$,icon:me||void 0}):ae),z(null))},de=pe(()=>{if(!h||!e||!n)return null;const y=e.boards.find(A=>A.id===n)?.widgets.find(A=>A.id===h.widgetId);if(!y||y.type!=="links")return null;const b=y.items.find(A=>A.id===h.linkId);return b?{widgetTitle:y.title,widgetId:h.widgetId,link:b}:null},[h,e,n]),xe=y=>{a(b=>b&&Ea(b,y))},Xt=y=>{const b=e?.settings.topWidgets||[];if(b.find($=>$.type===y)){const $=b.filter(me=>me.type!==y);xe({topWidgets:$})}else{const $={type:y};y==="weather"&&($.city="New York"),y==="focus"&&($.targetMinutes=240),xe({topWidgets:[...b,$]})}},Gt=y=>{if(!n)return;const b=kn(y,y);a(A=>A&&n?Ia(A,n,b):A)},qt=y=>{const A=(e?.settings.topWidgets||[]).map($=>$.type==="weather"?{...$,city:y}:$);xe({topWidgets:A})},Kt=()=>{e&&ui(e)},Jt=async y=>{try{const b=await fi(y);a(b),Pa(b),t(Ve(b))}catch(b){alert(b instanceof Error?b.message:"Erro ao importar")}},Aa=pe(()=>{if(!i.trim())return w;const y=i.toLowerCase();return w.filter(b=>b.type==="links").map(b=>{const A=b.items.filter($=>$.title.toLowerCase().includes(y)||$.url.toLowerCase().includes(y));return A.length>0?{...b,items:A}:null}).filter(b=>b!==null)},[w,i]),Qt=i.trim()&&Aa.length===0;return r("div",{className:"app",style:{background:e.settings.wallpaper.type==="url"?`url(${e.settings.wallpaper.value}) center/cover no-repeat fixed`:e.settings.wallpaper.value},children:[r("header",{className:"app-header",children:[r(Si,{boards:e.boards,activeId:n,onSelect:t,onAdd:I,onRename:V,onDelete:(y,b)=>Y(y,b)}),e.settings.topWidgets?.some(y=>y.type==="search")&&r("div",{className:"app-header__search",children:[r(T,{name:"search",size:18}),r("input",{type:"text",placeholder:"Pesquisar ou digitar URL...",value:i,onInput:y=>l(y.target.value),onKeyDown:y=>{if(y.key==="Enter"&&i.trim()){const b=i.trim(),A=S2(b)?A2(b):`https://www.google.com/search?q=${encodeURIComponent(b)}`;window.open(A,"_blank")}},"aria-label":"Pesquisar ou digitar URL"}),i&&r("button",{className:"app-header__clear",onClick:()=>l(""),"aria-label":"Limpar busca",children:r(T,{name:"close",size:14})})]}),r(z2,{configs:e.settings.topWidgets?.filter(y=>y.type!=="search")||[]})]}),r("div",{className:"app-fab-bar",children:[r("button",{className:`app-fab-bar__btn app-fab-bar__btn--menu ${_?"app-fab-bar__btn--active":""}`,onClick:()=>p(y=>!y),"aria-label":_?"Fechar menu":"Abrir menu",title:_?"Fechar menu":"Menu",children:r(T,{name:"menu",size:22})}),r("div",{className:`app-fab-menu ${_?"app-fab-menu--open":""}`,children:[r("button",{className:"app-fab-menu__item",onClick:()=>{u(!0),p(!1)},"aria-label":"Adicionar widget",title:"Adicionar widget",children:[r(T,{name:"plus",size:18}),r("span",{children:"Adicionar widget"})]}),r("button",{className:"app-fab-menu__item",onClick:()=>{s(!0),p(!1)},"aria-label":"Configurações",title:"Configurações",children:[r(T,{name:"settings",size:18}),r("span",{children:"Configurações"})]})]})]}),r("main",{className:"app-content",children:Qt?r("div",{className:"empty-state",children:[r("h3",{className:"empty-state__title",children:"Nenhum resultado"}),r("p",{className:"empty-state__description",children:"Nenhum link corresponde à sua busca."}),r("button",{className:"empty-state__action",onClick:()=>l(""),children:"Limpar busca"})]}):r(h2,{widgets:Aa,onReorder:Wt,onEditWidget:v,onDeleteWidget:Rt,onDeleteLink:Ht,onEditLink:Yt,onAddLink:C,onResizeWidget:Ut,isEditing:!i.trim()})}),m&&r(wn,{onSave:re,onClose:()=>d(!1)}),f&&r(wn,{widget:f,onSave:ue,onClose:()=>v(null)}),x&&r(zn,{widgetTitle:x.title,onSave:(y,b,A)=>Vt(x.id,y,b,A),onClose:()=>C(null)}),de&&r(zn,{widgetTitle:de.widgetTitle,link:de.link,onSave:(y,b,A)=>Bt(de.widgetId,de.link.id,y,b,A),onClose:()=>z(null)}),o&&r(w2,{settings:e.settings,onChange:xe,onClose:()=>s(!1),onExport:Kt,onImport:Jt}),c&&r(M2,{topWidgets:e.settings.topWidgets||[],boardWidgets:w.map(y=>y.type),onToggleWidget:Xt,onAddWidget:Gt,onCityChange:qt,onClose:()=>u(!1)}),r(C2,{open:O,onSave:P,onClose:()=>L(!1)}),r(N2,{open:!!k,title:k?.title||"",message:k?.message||"",danger:k?.danger,confirmLabel:k?.confirmLabel,onConfirm:k?.onConfirm||(()=>{}),onCancel:()=>F(null)})]})}const xn=document.getElementById("root");xn&&Ze(r(L2,{}),xn);
//# sourceMappingURL=newtab-BKzF4ymn.js.map
