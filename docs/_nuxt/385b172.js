(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{261:function(t,e,n){"use strict";n.r(e);var r={chart:{type:"packedbubble",height:"100%"},title:{text:"Top singers of the week"},tooltip:{useHTML:!0,pointFormat:"<b>{point.name}:</b> {point.value}m CO<sub>2</sub>"},plotOptions:{packedbubble:{minSize:"30%",maxSize:"120%",zMin:0,zMax:1e3,layoutAlgorithm:{splitSeries:!1,gravitationalConstant:.02},dataLabels:{enabled:!0,format:"{point.name}",filter:{property:"y",operator:">",value:250},style:{color:"black",textOutline:"none",fontWeight:"normal"}}}},series:[{name:"Singers",data:[{name:"陳奕迅",value:500},{name:"周杰倫",value:400},{name:"啊哈哈",value:300}]}]},l={name:"YearlyTimeline",computed:{chartOptions:function(){return r}}},o=n(43),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-screen"},[n("div",{staticClass:"mx-auto grid grid-cols-1 place-content-center m-6"},[n("div",{staticClass:"flex items-center justify-center"},[n("client-only",[n("highcharts",{ref:"chart",attrs:{options:t.chartOptions}})],1)],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"mx-auto grid grid-cols-3 place-content-center m-6"},[n("div"),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("div",{staticClass:"inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4",attrs:{role:"group"}},[n("NuxtLink",{attrs:{to:"/yearly"}},[n("button",{staticClass:"border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2"},[t._v("To Yearly")])])],1)]),t._v(" "),n("div")])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-auto grid grid-cols-3 place-content-center m-6"},[n("div"),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("p",{staticClass:"text-white"},[t._v("Timeline")])]),t._v(" "),n("div")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mx-auto grid grid-cols-3 place-content-center m-6"},[n("div"),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("p",{staticClass:"text-white"},[t._v("Leaderboard")])]),t._v(" "),n("div")])}],!1,null,null,null);e.default=component.exports}}]);