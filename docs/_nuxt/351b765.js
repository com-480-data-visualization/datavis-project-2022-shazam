(window.webpackJsonp=window.webpackJsonp||[]).push([[10,3,5],{250:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-shrink-0 flex items-center"},[e("img",{staticClass:"hidden lg:block h-6 w-auto",attrs:{src:r(251),alt:"EPFL"}})])}],l={name:"Navbar"},c=r(43),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"sticky top-0 bg-gray-800"},[r("div",{staticClass:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},[r("div",{staticClass:"relative flex items-center justify-between h-16"},[r("div",{staticClass:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},[t._m(0),t._v(" "),r("div",{staticClass:"hidden sm:block sm:ml-6"},[r("div",{staticClass:"flex space-x-4"},[r("NuxtLink",{staticClass:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),r("NuxtLink",{staticClass:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{to:"/team"}},[t._v("Team")])],1)])])])])])}),n,!1,null,null,null);e.default=component.exports},251:function(t,e,r){t.exports=r.p+"img/EPFL.0dc977f.svg"},282:function(t,e,r){"use strict";r.r(e);var n={chart:{polar:!0,height:"100%",backgroundColor:"transparent"},credits:{enabled:!1},title:{text:"Audio features",style:{color:"white",fontWeight:"normal"}},subtitle:{text:"All songs",style:{color:"white",fontWeight:"normal"}},pane:{startAngle:0,endAngle:360},xAxis:{tickInterval:1,min:0,max:6,labels:{formatter:function(){var label;switch(this.value){case 0:label="A";break;case 1:label="B";break;case 2:label="C";break;case 3:label="D";break;case 4:label="E";break;case 5:label="F"}return label}}},yAxis:{min:0},plotOptions:{series:{pointStart:0,pointInterval:1},column:{pointPadding:0,groupPadding:0}},series:[{type:"area",name:"Feature 1",data:[.1,.2,.3,.4,.5,.6]},{type:"area",name:"Feature 2",data:[.93,.5,.3,.5,.4,.848]}]},l={name:"Singer",computed:{RadarChartOptions:function(){return n}}},c=r(43),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto min-h-screen"},[t._m(0),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"mx-auto grid grid-cols-3 place-content-center m-6"},[r("div"),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("client-only",[r("highcharts",{ref:"chart",attrs:{options:t.RadarChartOptions}})],1)],1),t._v(" "),r("div")]),t._v(" "),t._m(2),t._v(" "),r("div",{staticClass:"mx-auto grid grid-cols-3 place-content-center m-6"},[r("div"),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.$router.back()}}},[r("button",{staticClass:"border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2"},[t._v("\n                    Go Back\n                ")])])]),t._v(" "),r("div")])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-auto grid grid-cols-2 place-content-center m-6"},[r("div",{staticClass:"flex items-center justify-center"},[r("div",{staticClass:"inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4",attrs:{role:"group"}},[r("p",{staticClass:"text-2xl p-6 text-gray-50"},[t._v("Singer Profile Image")])])]),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("div",{staticClass:"inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4",attrs:{role:"group"}},[r("p",{staticClass:"text-2xl p-6 text-gray-50"},[t._v("Singer name")]),t._v(" "),r("p",{staticClass:"text-2xl p-6 text-gray-50"},[t._v("Singer top songs")])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-auto grid grid-cols-3 place-content-center m-6"},[r("div"),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("p",{staticClass:"text-white"},[t._v("Top songs word cloud")])]),t._v(" "),r("div")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-auto grid grid-cols-3 place-content-center m-6"},[r("div"),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("p",{staticClass:"text-white"},[t._v("Audio feature over time scatter graph")])]),t._v(" "),r("div")])}],!1,null,null,null);e.default=component.exports},398:function(t,e,r){"use strict";r.r(e);var n=r(2),l=r(282),c=n.default.extend({name:"SingerPage",components:{Singer:l.default}}),o=r(43),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-gray-900 min-h-screen"},[r("navbar"),t._v(" "),r("Singer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:r(250).default})}}]);