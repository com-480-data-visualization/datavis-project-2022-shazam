(window.webpackJsonp=window.webpackJsonp||[]).push([[5,3,4],{248:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-shrink-0 flex items-center"},[e("img",{staticClass:"hidden lg:block h-6 w-auto",attrs:{src:r(251),alt:"EPFL"}})])}],l={name:"Navbar"},c=r(43),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"bg-gray-900"},[r("div",{staticClass:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},[r("div",{staticClass:"relative flex items-center justify-between h-16"},[r("div",{staticClass:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},[t._m(0),t._v(" "),r("div",{staticClass:"hidden sm:block sm:ml-6"},[r("div",{staticClass:"flex space-x-4"},[r("NuxtLink",{staticClass:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),r("NuxtLink",{staticClass:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{to:"/team"}},[t._v("Team")])],1)])])])])])}),n,!1,null,null,null);e.default=component.exports},251:function(t,e,r){t.exports=r.p+"img/EPFL.0dc977f.svg"},252:function(t,e,r){"use strict";r.r(e);var n=r(10),l=(r(57),r(262)),c={name:"RightLineChart",data:function(){return{}},mounted:function(){return Object(n.a)(regeneratorRuntime.mark((function t(){var svg,e,r,n,g,c,o,d,line,data;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:svg=l.g("#svg_RightLineChart"),e={top:20,right:20,bottom:30,left:50},r=+svg.attr("width")-e.left-e.right,n=+svg.attr("height")-e.top-e.bottom,g=svg.append("g").attr("transform","translate("+e.left+","+e.top+")"),c=l.h("%d-%b-%y"),o=l.f().rangeRound([0,r]),d=l.e().rangeRound([n,0]),line=l.d().x((function(t){return o(c(t.date))})).y((function(t){return d(t.close)})),data=[{date:"24-Apr-07",close:93.24},{date:"25-Apr-07",close:95.35},{date:"26-Apr-07",close:98.84},{date:"27-Apr-07",close:99.92},{date:"30-Apr-07",close:99.8},{date:"1-May-07",close:99.47},{date:"2-May-07",close:100.39},{date:"3-May-07",close:100.4},{date:"4-May-07",close:100.81},{date:"7-May-07",close:103.92},{date:"8-May-07",close:105.06},{date:"9-May-07",close:106.88},{date:"10-May-07",close:107.34}],o.domain(l.c(data,(function(t){return c(t.date)}))),d.domain(l.c(data,(function(t){return t.close}))),g.append("g").attr("transform","translate(0,"+n+")").call(l.a(o).ticks(7)),g.append("g").call(l.b(d)).append("text").attr("fill","#fff").attr("transform","rotate(-90)").attr("y",6).attr("dy","0.71em").attr("text-anchor","end").text("Price ($)"),g.append("path").datum(data).attr("fill","none").attr("stroke","white").attr("stroke-linejoin","round").attr("stroke-linecap","round").attr("stroke-width",1.5).attr("d",line),console.log(svg),console.log(g);case 17:case"end":return t.stop()}}),t)})))()}},o=r(43),component=Object(o.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("svg",{attrs:{id:"svg_RightLineChart",width:"800",height:"500"}})])}),[],!1,null,"a27e1f5e",null);e.default=component.exports},391:function(t,e,r){"use strict";r.r(e);var n=r(2),l=r(252),c=r(248),o=n.a.extend({name:"IndexPage",components:{RightLineChart:l.default,Navbar:c.default}}),d=r(43),component=Object(d.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-gray-900 h-screen w-screen"},[r("navbar"),t._v(" "),r("div",{staticClass:"grid place-items-center"},[r("RightLineChart")],1),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"grid place-items-center"},[r("p",[t._v("Hello")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:r(248).default,RightLineChart:r(252).default})}}]);