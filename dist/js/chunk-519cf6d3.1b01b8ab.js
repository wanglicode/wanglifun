(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-519cf6d3"],{"162e":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"layout-container"},[a("div",{staticClass:"father"},[a("a-unit")],1),a("div",{staticClass:"target-box"},t._l(6,(function(t){return a("div",{key:t,staticClass:"small-box"})})),0)])},r=[],s=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"aUnit-container",attrs:{id:"aitem",draggable:"true"},on:{dragstart:t.dragstart}},[t._v(" 我是a组件 ")])},o=[],c={data:function(){return{}},methods:{dragstart:function(t){t.dataTransfer.setData("Text",t.target.id)}}},i=c,d=(a("3c30"),a("2877")),l=Object(d["a"])(i,s,o,!1,null,null,null),u=l.exports,f={data:function(){return{}},components:{aUnit:u},methods:{drop:function(t){t.preventDefault(),console.log("drop",t);var n=t.dataTransfer.getData("Text");console.log("data",n),t.target.appendChild(document.getElementById(n).cloneNode(!0))},dragover:function(t){t.preventDefault()}}},p=f,g=(a("d1df"),Object(d["a"])(p,e,r,!1,null,null,null));n["default"]=g.exports},"3c30":function(t,n,a){"use strict";a("d85f")},5012:function(t,n,a){},d1df:function(t,n,a){"use strict";a("5012")},d85f:function(t,n,a){}}]);
//# sourceMappingURL=chunk-519cf6d3.1b01b8ab.js.map