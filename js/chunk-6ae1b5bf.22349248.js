(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6ae1b5bf"],{1848:function(t,e,n){"use strict";var a=n("e2f4"),r=n.n(a);r.a},a28e:function(t,e,n){"use strict";var a=n("b642"),r=n.n(a);r.a},a2da:function(t,e,n){"use strict";n.r(e);var a,r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"map-page"},[n("div",{staticClass:"header"},[n("router-link",{attrs:{to:"/detail"}},[n("div",{staticClass:"iconfont header-back"},[t._v("")])]),t._v("景点地址 ")],1),n("b-map-component",{staticClass:"b-map",attrs:{mapHeight:t.mapHeight,sightName:this.viewPoint}})],1)},o=[],i=(n("a4d3"),n("4de4"),n("4160"),n("e439"),n("dbb4"),n("b64b"),n("159b"),n("2fa7")),c=(n("bc3a"),n("2f62")),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{width:"100%",height:t.mapHeight+"px"},attrs:{id:"container"}})},s=[],u=(n("b0c0"),{name:"BMapComponent",props:{mapHeight:"",sightName:""},data:function(){return{}},methods:{initMap:function(){var t=new BMap.Map("container");new BMap.Point;t.addControl(new BMap.NavigationControl),t.addControl(new BMap.MapTypeControl);new BMap.Marker;var e=new BMap.Geocoder;console.log(this.sightName),e.getPoint(this.sightName,(function(e){e.lng,e.lat,e&&(t.centerAndZoom(e,17),t.addOverlay(new BMap.Marker(e)))}),"辽宁");new BMap.Geolocation;function n(e){e.center.lng,e.center.lat;var n=new BMap.Point(e.center.lng,e.center.lat),a=new BMap.Marker(n);t.addOverlay(a);e.name,new BMap.Marker(e.point)}var a=new BMap.LocalCity;a.get(n)}},created:function(){var t=this;setTimeout((function(){t.initMap()}),3e3),console.log(this.sightName)},mounted:function(){}}),l=u,f=(n("a28e"),n("2877")),b=Object(f["a"])(l,p,s,!1,null,"5413fd70",null),d=b.exports;function m(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function h(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?m(n,!0).forEach((function(e){Object(i["a"])(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):m(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var g=(a={name:"Map",components:{BMapComponent:d},data:function(){return{}},computed:h({},Object(c["c"])(["viewPoint"]))},Object(i["a"])(a,"data",(function(){return{mapHeight:document.body.clientHeight-43}})),Object(i["a"])(a,"mounted",(function(){})),a),v=g,w=(n("1848"),Object(f["a"])(v,r,o,!1,null,"8725aee0",null));e["default"]=w.exports},b0c0:function(t,e,n){var a=n("83ab"),r=n("9bf2").f,o=Function.prototype,i=o.toString,c=/^\s*function ([^ (]*)/,p="name";!a||p in o||r(o,p,{configurable:!0,get:function(){try{return i.call(this).match(c)[1]}catch(t){return""}}})},b642:function(t,e,n){},e2f4:function(t,e,n){}}]);
//# sourceMappingURL=chunk-6ae1b5bf.22349248.js.map