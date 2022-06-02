(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{301:function(t,e,r){t.exports=r.p+"img/wordcloud.12b8a24.svg"},306:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto grid grid-cols-2 place-content-center m-6"},[r("div",{staticClass:"flex items-center justify-center"},[r("div",{attrs:{id:"barChart"}})]),t._v(" "),r("div",{staticClass:"container self-center"},[r("h3",{staticClass:"text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-left"},[t._v("\n                Top singers of the year\n            ")]),t._v(" "),r("p",{staticClass:"text-xl text-gray-400 flex-grow text-left"},[t._v("\n                Have you ever wondered who are the artists that have the most number of songs on billboard this year? This histogram will show you the answer.\n            ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto grid grid-cols-2 place-content-center m-6"},[r("div",{staticClass:"container self-center"},[r("h3",{staticClass:"text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-right"},[t._v("\n                Top songs of the year\n            ")]),t._v(" "),r("p",{staticClass:"text-xl text-gray-400 flex-grow text-right"},[t._v("\n                Have you ever wondered what are the most popular songs on billboard this year? This histogram will show you the answer.\n            ")])]),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("div",{attrs:{id:"barChartSongs"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto grid grid-cols-2 place-content-center m-6"},[n("div",{staticClass:"flex items-center justify-center"},[n("img",{staticClass:"h-80 flex-no-shrink fill-current",attrs:{src:r(301),alt:"Wordcloud"}})]),t._v(" "),n("div",{staticClass:"container self-center"},[n("h3",{staticClass:"text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-left"},[t._v("\n                Buzz Words\n            ")]),t._v(" "),n("p",{staticClass:"text-xl text-gray-400 flex-grow text-left"},[t._v("\n                What are the keywords in the lyrics of top songs of the year? The size of the word is promotional to the number of times they appear.\n            ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto grid grid-cols-2 place-content-center m-6"},[r("div",{staticClass:"container self-center"},[r("h3",{staticClass:"text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-right"},[t._v("\n                Audio Features\n            ")]),t._v(" "),r("p",{staticClass:"text-xl text-gray-400 flex-grow text-right"},[t._v("You can have a global view on the characteristics of the musics that are trending on this year.")]),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"text-lg text-gray-400 flex-grow text-right"},[t._v("This is a reminder if you do not know the definition of each feature:")]),t._v(" "),r("p",{staticClass:"text-lg text-gray-400 flex-grow text-right"},[t._v("Acousticness: confidence measure about whether the songs have acoustic instruments")]),t._v(" "),r("p",{staticClass:"text-lg text-gray-400 flex-grow text-right"},[t._v("Danceability: how suitable the songs are for dancing")]),t._v(" "),r("p",{staticClass:"text-lg text-gray-400 flex-grow text-right"},[t._v("Energy: a perceptual measure of intensity and activity")]),t._v(" "),r("p",{staticClass:"text-lg text-gray-400 flex-grow text-right"},[t._v("Liveness: detects the presence of an audience in the recording")]),t._v(" "),r("p",{staticClass:"text-lg text-gray-400 flex-grow text-right"},[t._v("Valence: how positive the emotions in songs are")])]),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("div",{attrs:{id:"radarChart"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto grid grid-cols-2 place-content-center mt-6"},[r("div",{staticClass:"flex items-center justify-center"},[r("div",{attrs:{id:"splinePlot"}})]),t._v(" "),r("div",{staticClass:"container self-center"},[r("h3",{staticClass:"text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-left mt-3"},[t._v("\n                Overview of the audio features\n            ")]),t._v(" "),r("p",{staticClass:"text-xl text-gray-400 flex-grow text-left"},[t._v("\n                What't eh musical style of the music this year? Let's take a look!\n            ")])])])}],o={chart:{polar:!0,height:"100%",backgroundColor:"transparent"},credits:{enabled:!1},title:{text:"Audio features",style:{color:"white",fontWeight:"normal"}},pane:{startAngle:0,endAngle:360},xAxis:{tickInterval:1,min:0,max:6,labels:{formatter:function(){var label;switch(this.value){case 0:label="A";break;case 1:label="B";break;case 2:label="C";break;case 3:label="D";break;case 4:label="E";break;case 5:label="F"}return label}}},yAxis:{min:0},plotOptions:{series:{pointStart:0,pointInterval:1},column:{pointPadding:0,groupPadding:0}},series:[{type:"area",name:"Feature 1",data:[.1,.2,.3,.4,.5,.6]},{type:"area",name:"Feature 2",data:[.93,.5,.3,.5,.4,.848]}]},l={chart:{type:"bar",backgroundColor:"transparent"},title:{text:"Top 20 Singers",style:{color:"white",fontWeight:"normal"}},xAxis:{categories:["","","","",""],title:{text:"Ranking",style:{color:"white",fontWeight:"normal"}}},yAxis:{min:0,title:{text:"Total tracks",align:"high",style:{color:"white",fontWeight:"normal"}},labels:{overflow:"justify"}},tooltip:{valueSuffix:" tracks"},plotOptions:{bar:{dataLabels:{enabled:!0,inside:!0,align:"right",formatter:function(){return"Singer"+this.x+": "+this.y}}}},credits:{enabled:!1},series:[{name:"Singer A",data:[20]},{name:"Singer B",data:[19]},{name:"Singer C",data:[10]},{name:"Singer D",data:[1]},{name:"Singer D",data:[1]},{name:"Singer D",data:[1]}]},c={chart:{type:"bar",backgroundColor:"transparent"},title:{text:"Top 20 Songs",style:{color:"white",fontWeight:"normal"}},subtitle:{text:"This is the leader board that shows the accumulated ranking of top songs",style:{color:"white",fontWeight:"normal"}},xAxis:{categories:["","","","",""],title:{text:"Ranking",style:{color:"white",fontWeight:"normal"}}},yAxis:{min:0,title:{text:"Total tracks",align:"high",style:{color:"white",fontWeight:"normal"}},labels:{overflow:"justify"}},tooltip:{valueSuffix:" tracks"},plotOptions:{bar:{dataLabels:{enabled:!0,inside:!0,align:"right",formatter:function(){return"Singer"+this.x+": "+this.y}}}},credits:{enabled:!1},series:[{name:"Singer A",data:[20]},{name:"Singer B",data:[19]},{name:"Singer C",data:[10]},{name:"Singer D",data:[1]},{name:"Singer D",data:[1]},{name:"Singer D",data:[1]}]},h={chart:{type:"spline",parallelCoordinates:!0,parallelAxes:{lineWidth:2},backgroundColor:"transparent"},title:{text:"Audio feature over time",style:{color:"white",fontWeight:"normal"}},credits:{enabled:!1},xAxis:{categories:["Acousticness","Danceability","Energy","Instrumentalness","Key","Liveness","Loudness","Speechiness","Valence","Tempo","Duration (s)","Time Signature"]},yAxis:[{min:0,max:1},{min:0,max:1},{min:0,max:1},{min:0,max:1},{categories:["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]},{min:0,max:1},{},{min:0,max:1},{min:0,max:1},{min:0},{min:0},{min:0}],series:[{name:"State Of Grace (Taylor's Version)",shadow:!1,data:[328e-6,.594,.713,0,9,.114,-5.314,.0503,.328,129.958,295413,4]}]},d={name:"Yearly",data:function(){return{year:"Select Year",barRef:null,barChartData:l,barSongsRef:null,barChartSongsData:c,radarRef:null,radarChartData:o,splineRef:null,splineChartData:h}},methods:{updateYear:function(t){this.year=t.path[0].innerHTML,console.log(this.year)}},mounted:function(){this.radarRef=Highcharts.chart("barChart",this.barChartData),this.radarRef=Highcharts.chart("barChartSongs",this.barChartData),this.scatterRef=Highcharts.chart("radarChart",this.radarChartData),this.splineRef=Highcharts.chart("splinePlot",this.splineChartData)}},x=r(64),component=Object(x.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-auto min-h-screen bg-gray-900"},[r("div",{staticClass:"container mx-auto grid grid-cols-1 place-content-center mt-6"},[r("div"),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("div",[r("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",text:this.year,variant:"primary"}},[r("b-dropdown-item",{attrs:{href:"#",active:""},on:{click:function(e){return t.updateYear(e)}}},[t._v("2018")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateYear(e)}}},[t._v("2019")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateYear(e)}}},[t._v("2020")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateYear(e)}}},[t._v("2021")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateYear(e)}}},[t._v("2022")])],1)],1)]),t._v(" "),r("div")]),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),r("div",{staticClass:"container mx-auto grid grid-cols-3 place-content-center m-6"},[r("div"),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.$router.back()}}},[r("button",{staticClass:"border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2"},[t._v("\n                    Go Back\n                ")])])]),t._v(" "),r("div")])])}),n,!1,null,null,null);e.default=component.exports}}]);