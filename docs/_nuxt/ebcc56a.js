(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,6,8],{250:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-shrink-0 flex items-center"},[e("img",{staticClass:"hidden lg:block h-6 w-auto",attrs:{src:n(251),alt:"EPFL"}})])}],l={name:"Navbar"},o=n(43),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nav",{staticClass:"bg-gray-800"},[n("div",{staticClass:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},[n("div",{staticClass:"relative flex items-center justify-between h-16"},[n("div",{staticClass:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},[t._m(0),t._v(" "),n("div",{staticClass:"hidden sm:block sm:ml-6"},[n("div",{staticClass:"flex space-x-4"},[n("NuxtLink",{staticClass:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),n("NuxtLink",{staticClass:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{to:"/team"}},[t._v("Team")])],1)])])])])])}),r,!1,null,null,null);e.default=component.exports},251:function(t,e,n){t.exports=n.p+"img/EPFL.0dc977f.svg"},260:function(t,e,n){"use strict";n.r(e);var r={chart:{type:"packedbubble",height:"100%",backgroundColor:"transparent"},title:{text:"Top singers of the week",style:{color:"white",fontWeight:"normal"}},tooltip:{useHTML:!0,pointFormat:"<b>{point.name}:</b> {point.value}m CO<sub>2</sub>"},plotOptions:{packedbubble:{minSize:"30%",maxSize:"120%",zMin:0,zMax:1e3,layoutAlgorithm:{splitSeries:!1,gravitationalConstant:.02},dataLabels:{enabled:!0,format:"{point.name}",filter:{property:"y",operator:">",value:250},style:{color:"white",textOutline:"none",fontWeight:"normal"}}}},series:[{name:"Singers",data:[{name:"Taylor Swift",value:500},{name:"Hello World!",value:400},{name:"Lady Gaga",value:300}]}]},l={name:"WeeklyTimeline",computed:{chartOptions:function(){return r}}},o=n(43),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto min-h-screen"},[n("div",{staticClass:"container mx-auto grid grid-cols-1 place-content-center m-6"},[n("div"),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("client-only",[n("highcharts",{ref:"chart",attrs:{options:t.chartOptions}})],1)],1),t._v(" "),n("div")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"container mx-auto grid grid-cols-3 place-content-center m-6"},[n("div"),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("div",{staticClass:"inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4",attrs:{role:"group"}},[n("NuxtLink",{attrs:{to:"/singer"}},[n("button",{staticClass:"border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2"},[t._v("To Singer")])])],1)]),t._v(" "),n("div")])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto grid grid-cols-3 place-content-center m-6"},[n("div"),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("p",{staticClass:"text-white"},[t._v("Timeline")])]),t._v(" "),n("div")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto grid grid-cols-3 place-content-center m-6"},[n("div"),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("p",{staticClass:"text-white"},[t._v("Leaderboard")])]),t._v(" "),n("div")])}],!1,null,null,null);e.default=component.exports},261:function(t,e,n){"use strict";n.r(e);var r={chart:{type:"packedbubble",height:"100%"},title:{text:"Top singers of the week"},tooltip:{useHTML:!0,pointFormat:"<b>{point.name}:</b> {point.value}m CO<sub>2</sub>"},plotOptions:{packedbubble:{minSize:"30%",maxSize:"120%",zMin:0,zMax:1e3,layoutAlgorithm:{splitSeries:!1,gravitationalConstant:.02},dataLabels:{enabled:!0,format:"{point.name}",filter:{property:"y",operator:">",value:250},style:{color:"black",textOutline:"none",fontWeight:"normal"}}}},series:[{name:"Singers",data:[{name:"陳奕迅",value:500},{name:"周杰倫",value:400},{name:"啊哈哈",value:300}]}]},l={name:"YearlyTimeline",computed:{chartOptions:function(){return r}}},o=n(43),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"min-h-screen"},[n("div",{staticClass:"container mx-auto grid grid-cols-1 place-content-center m-6"},[n("div",{staticClass:"flex items-center justify-center"},[n("client-only",[n("highcharts",{ref:"chart",attrs:{options:t.chartOptions}})],1)],1)]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"container mx-auto grid grid-cols-3 place-content-center m-6"},[n("div"),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("div",{staticClass:"inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4",attrs:{role:"group"}},[n("NuxtLink",{attrs:{to:"/yearly"}},[n("button",{staticClass:"border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2"},[t._v("To Yearly")])])],1)]),t._v(" "),n("div")])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto grid grid-cols-3 place-content-center m-6"},[n("div"),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("p",{staticClass:"text-white"},[t._v("Timeline")])]),t._v(" "),n("div")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto grid grid-cols-3 place-content-center m-6"},[n("div"),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("p",{staticClass:"text-white"},[t._v("Leaderboard")])]),t._v(" "),n("div")])}],!1,null,null,null);e.default=component.exports},400:function(t,e,n){"use strict";n.r(e);var r=n(2),l=n(250),o=n(260),c=n(261),d=r.default.extend({name:"TimelinePage",components:{Navbar:l.default,WeeklyTimeline:o.default,YearlyTimeline:c.default,WeeklyTimelineComponent:o.default,YearlyTimelineComponent:c.default},data:function(){return{state:0}},methods:{toWeeklyTimeline:function(){this.state=0},toYearlyTimeline:function(){this.state=1}}}),m=n(43),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bg-gray-900 min-h-screen"},[n("navbar"),t._v(" "),n("div",{staticClass:"mx-auto grid grid-cols-3 place-content-center m-6"},[n("div"),t._v(" "),n("div",{staticClass:"flex items-center justify-center"},[n("div",{staticClass:"inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4",attrs:{role:"group"}},[n("button",{staticClass:"border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2",on:{click:t.toWeeklyTimeline}},[t._v("\n                    Weekly\n                ")]),t._v(" "),n("button",{staticClass:"border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2",on:{click:t.toYearlyTimeline}},[t._v("\n                    Yearly\n                ")])])]),t._v(" "),n("div")]),t._v(" "),t.state?n("YearlyTimelineComponent"):n("WeeklyTimelineComponent")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:n(250).default,YearlyTimelineComponent:n(261).default,WeeklyTimelineComponent:n(260).default})}}]);