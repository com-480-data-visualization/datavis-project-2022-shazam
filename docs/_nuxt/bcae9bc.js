(window.webpackJsonp=window.webpackJsonp||[]).push([[12,3,6,8],{246:function(t,e,l){"use strict";l.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-shrink-0 flex items-center"},[e("img",{staticClass:"hidden lg:block h-6 w-auto",attrs:{src:l(247),alt:"EPFL"}})])}],r={name:"Navbar"},c=l(43),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("nav",{staticClass:"bg-gray-900"},[l("div",{staticClass:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},[l("div",{staticClass:"relative flex items-center justify-between h-16"},[l("div",{staticClass:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},[t._m(0),t._v(" "),l("div",{staticClass:"hidden sm:block sm:ml-6"},[l("div",{staticClass:"flex space-x-4"},[l("NuxtLink",{staticClass:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),l("NuxtLink",{staticClass:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{to:"/team"}},[t._v("Team")])],1)])])])])])}),n,!1,null,null,null);e.default=component.exports},247:function(t,e,l){t.exports=l.p+"img/EPFL.0dc977f.svg"},256:function(t,e,l){"use strict";l.r(e);var n={name:"WeeklyTimeline"},r=l(43),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),l("div",{staticClass:"mx-auto grid grid-cols-3 place-content-center m-6"},[l("div"),t._v(" "),l("div",{staticClass:"flex items-center justify-center"},[l("div",{staticClass:"inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4",attrs:{role:"group"}},[l("NuxtLink",{attrs:{to:"/singer"}},[l("button",{staticClass:"max-w-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"},[t._v("To Singer")])])],1)]),t._v(" "),l("div")])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mx-auto grid grid-cols-3 place-content-center m-6"},[l("div"),t._v(" "),l("div",{staticClass:"flex items-center justify-center"},[l("p",{staticClass:"text-white"},[t._v("Bubble chart")])]),t._v(" "),l("div")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mx-auto grid grid-cols-3 place-content-center m-6"},[l("div"),t._v(" "),l("div",{staticClass:"flex items-center justify-center"},[l("p",{staticClass:"text-white"},[t._v("Timeline")])]),t._v(" "),l("div")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mx-auto grid grid-cols-3 place-content-center m-6"},[l("div"),t._v(" "),l("div",{staticClass:"flex items-center justify-center"},[l("p",{staticClass:"text-white"},[t._v("Leaderboard")])]),t._v(" "),l("div")])}],!1,null,null,null);e.default=component.exports},257:function(t,e,l){"use strict";l.r(e);var n={name:"YearlyTimeline"},r=l(43),component=Object(r.a)(n,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),l("div",{staticClass:"mx-auto grid grid-cols-3 place-content-center m-6"},[l("div"),t._v(" "),l("div",{staticClass:"flex items-center justify-center"},[l("div",{staticClass:"inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4",attrs:{role:"group"}},[l("NuxtLink",{attrs:{to:"/yearly"}},[l("button",{staticClass:"max-w-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"},[t._v("To Yearly")])])],1)]),t._v(" "),l("div")])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mx-auto grid grid-cols-3 place-content-center m-6"},[l("div"),t._v(" "),l("div",{staticClass:"flex items-center justify-center"},[l("p",{staticClass:"text-white"},[t._v("Bubble chart")])]),t._v(" "),l("div")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mx-auto grid grid-cols-3 place-content-center m-6"},[l("div"),t._v(" "),l("div",{staticClass:"flex items-center justify-center"},[l("p",{staticClass:"text-white"},[t._v("Timeline")])]),t._v(" "),l("div")])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"mx-auto grid grid-cols-3 place-content-center m-6"},[l("div"),t._v(" "),l("div",{staticClass:"flex items-center justify-center"},[l("p",{staticClass:"text-white"},[t._v("Leaderboard")])]),t._v(" "),l("div")])}],!1,null,null,null);e.default=component.exports},396:function(t,e,l){"use strict";l.r(e);var n=l(2),r=l(246),c=l(256),o=l(257),d=n.a.extend({name:"TimelinePage",components:{Navbar:r.default,WeeklyTimeline:c.default,YearlyTimeline:o.default,WeeklyTimelineComponent:c.default,YearlyTimelineComponent:o.default},data:function(){return{state:0}},methods:{toWeeklyTimeline:function(){this.state=0},toYearlyTimeline:function(){this.state=1}}}),v=l(43),component=Object(v.a)(d,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"bg-gray-900 h-screen"},[l("navbar"),t._v(" "),l("div",{staticClass:"mx-auto grid grid-cols-3 place-content-center m-6"},[l("div"),t._v(" "),l("div",{staticClass:"flex items-center justify-center"},[l("div",{staticClass:"inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4",attrs:{role:"group"}},[l("button",{staticClass:"max-w-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",on:{click:t.toWeeklyTimeline}},[t._v("\n                    Weekly\n                ")]),t._v(" "),l("button",{staticClass:"max-w-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full",on:{click:t.toYearlyTimeline}},[t._v("\n                    Yearly\n                ")])])]),t._v(" "),l("div")]),t._v(" "),t.state?l("YearlyTimelineComponent"):l("WeeklyTimelineComponent")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:l(246).default,YearlyTimelineComponent:l(257).default,WeeklyTimelineComponent:l(256).default})}}]);