(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{303:function(t,e,r){"use strict";r.r(e);var n={chart:{type:"packedbubble",height:"80%",backgroundColor:"transparent"},credits:{enabled:!1},title:{text:"Top singers of the week",style:{color:"white",fontWeight:"normal"}},tooltip:{useHTML:!0,pointFormat:"<b>{point.name}:</b> {point.value}m CO<sub>2</sub>"},plotOptions:{packedbubble:{minSize:"50%",maxSize:"100%",zMin:0,zMax:1e3,layoutAlgorithm:{splitSeries:!1,gravitationalConstant:.02},dataLabels:{enabled:!0,format:"{point.name}",filter:{property:"y",operator:">",value:250},style:{color:"white",textOutline:"none",fontWeight:"normal"}}}},series:[{name:"Singers",data:[{name:"Taylor Swift",value:500},{name:"Hello World!",value:100},{name:"Hello World!",value:1e3},{name:"Hello World!",value:1e3},{name:"Hello World!",value:1e3},{name:"Hello World!",value:1e3},{name:"Lady Gaga",value:1e3},{name:"Lady Gaga",value:1e3},{name:"Lady Gaga",value:1e3},{name:"Lady Gaga",value:1e3}]}]},o={chart:{type:"bar",backgroundColor:"transparent"},title:{text:"Top singers since 2018 Week 1",style:{color:"white",fontWeight:"normal"}},subtitle:{text:"By total number of songs accumulated on billboard",style:{color:"white",fontWeight:"normal"}},xAxis:{categories:["","","","",""],title:{text:"Ranking",style:{color:"white",fontWeight:"normal"}}},yAxis:{min:0,title:{text:"Total tracks",align:"high",style:{color:"white",fontWeight:"normal"}},labels:{overflow:"justify"}},tooltip:{valueSuffix:" tracks"},plotOptions:{bar:{dataLabels:{enabled:!0,inside:!0,align:"right",formatter:function(){return"Singer"+this.x+": "+this.y}}}},credits:{enabled:!1},series:[{name:"Singer A",data:[20]},{name:"Singer B",data:[19]},{name:"Singer C",data:[10]},{name:"Singer D",data:[1]},{name:"Singer D",data:[1]},{name:"Singer D",data:[1]}]},l={name:"WeeklyTimeline",data:function(){return{year:"Select Year",week:"Select Week",bubbleRef:null,bubbleChartData:n,barRef:null,barChartData:o}},methods:{updateYear:function(t){this.year=t.path[0].innerHTML,console.log(this.year)},updateWeek:function(t){this.week=t.path[0].innerHTML,console.log(this.week)}},mounted:function(){this.radarRef=Highcharts.chart("barChart",this.barChartData),this.scatterRef=Highcharts.chart("bubbleChart",this.bubbleChartData)}},c=r(64),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto min-h-screen"},[r("div",{staticClass:"container mx-auto grid grid-cols-1 place-content-center mt-6"},[r("div"),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("div",[r("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",text:this.year,variant:"primary"}},[r("b-dropdown-item",{attrs:{href:"#",active:""},on:{click:function(e){return t.updateYear(e)}}},[t._v("2018")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateYear(e)}}},[t._v("2019")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateYear(e)}}},[t._v("2020")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateYear(e)}}},[t._v("2021")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateYear(e)}}},[t._v("2022")])],1),t._v(" "),r("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",text:this.week,variant:"primary"}},[r("b-dropdown-item",{attrs:{href:"#",active:""},on:{click:function(e){return t.updateWeek(e)}}},[t._v("1")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateWeek(e)}}},[t._v("2")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateWeek(e)}}},[t._v("3")])],1)],1)]),t._v(" "),r("div")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),r("div",{staticClass:"container mx-auto grid grid-cols-3 place-content-center mt-6"},[r("div"),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("div",{staticClass:"inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4",attrs:{role:"group"}},[r("NuxtLink",{attrs:{to:"/singer"}},[r("button",{staticClass:"border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2"},[t._v("To Singer")])])],1)]),t._v(" "),r("div")]),t._v(" "),r("div",{staticClass:"container mx-auto grid grid-cols-3 place-content-center mt-6"},[r("div"),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.$router.back()}}},[r("button",{staticClass:"border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2"},[t._v("\n                    Go Back\n                ")])])]),t._v(" "),r("div")])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto grid grid-cols-1 place-content-center mt-6"},[r("p",{staticClass:"text-xl text-gray-400 flex-grow text-center"},[t._v("Who are the most popular artists that have the most listened songs?")]),t._v(" "),r("p",{staticClass:"text-xl text-gray-400 flex-grow text-center"},[t._v("Here each bubble represent a singer whose songs figured in the top 20 of this week.")]),t._v(" "),r("p",{staticClass:"text-xl text-gray-400 flex-grow text-center"},[t._v("The larger the size of the bubble is, the more songs from this singer are hitting.")]),t._v(" "),r("p",{staticClass:"text-xl text-gray-400 flex-grow text-center"},[t._v("Click on the bubble to check the profile of the singer!")]),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("div",{attrs:{id:"bubbleChart"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto grid grid-cols-1 place-content-center mt-6"},[r("div"),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("div",{attrs:{id:"barChart"}})]),t._v(" "),r("div")])}],!1,null,null,null);e.default=component.exports}}]);