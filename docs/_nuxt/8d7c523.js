(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{314:function(t,e,r){"use strict";r.r(e);var n=r(32),o=(r(84),r(23),r(1),r(3),r(16),r(2),{chart:{type:"bar",backgroundColor:"transparent",height:"600px"},title:{text:"This is the leaderboard that shows the singer with the most distinct songs that made it to Billboard",style:{color:"white",fontWeight:"normal"}},subtitle:{text:"Only singers with >= 5 songs are displayed",style:{color:"white",fontWeight:"normal"}},xAxis:{categories:["Singers"]},yAxis:{min:0,title:{text:"Total tracks",align:"high",style:{color:"white",fontWeight:"normal"}},labels:{overflow:"justify"}},tooltip:{valueSuffix:" tracks"},plotOptions:{bar:{dataLabels:{enabled:!0,inside:!0,align:"right",formatter:function(){return this.series.name+": "+this.point.y}},groupPadding:0}},legend:{enabled:!1},credits:{enabled:!1},series:[]}),l={chart:{type:"bar",backgroundColor:"transparent",height:"600px"},title:{text:"Leaderboard of the the time songs stayed on the board",style:{color:"white",fontWeight:"normal"}},subtitle:{text:"Only songs with total number of weeks >= 10 is displayed",style:{color:"white",fontWeight:"normal"}},xAxis:{categories:["Tracks"]},yAxis:{min:0,title:{text:"Total weeks",align:"high",style:{color:"white",fontWeight:"normal"}},labels:{overflow:"justify"}},tooltip:{valueSuffix:" weeks"},plotOptions:{bar:{dataLabels:{enabled:!0,inside:!0,align:"right",formatter:function(){return this.series.name+": "+this.point.y}},groupPadding:0}},legend:{enabled:!1},credits:{enabled:!1},series:[]},c={chart:{polar:!0,height:"100%",backgroundColor:"transparent"},credits:{enabled:!1},title:{text:"Average of all Songs' Audio Features",style:{color:"white",fontWeight:"normal"}},subtitle:{text:"All songs",style:{color:"white",fontWeight:"normal"}},pane:{startAngle:0,endAngle:360},xAxis:{tickInterval:1,min:0,max:6,labels:{formatter:function(){var label;switch(this.value){case 0:label="Acousticness";break;case 1:label="Danceability";break;case 2:label="Energy";break;case 3:label="Liveness";break;case 4:label="Speechiness";break;case 5:label="Valence"}return label}}},yAxis:{min:0},plotOptions:{series:{pointStart:0,pointInterval:1},column:{pointPadding:0,groupPadding:0}},series:[]},h={chart:{type:"spline",parallelCoordinates:!0,parallelAxes:{lineWidth:2},backgroundColor:"transparent"},title:{text:"Audio features for all tracks this year",style:{color:"white",fontWeight:"normal"}},credits:{enabled:!1},xAxis:{categories:["Acousticness","Danceability","Energy","Instrumentalness","Key","Liveness","Loudness","Speechiness","Valence","Tempo","Duration (s)","Time Signature"]},yAxis:[{min:0,max:1},{min:0,max:1},{min:0,max:1},{min:0,max:1},{categories:["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]},{min:0,max:1},{},{min:0,max:1},{min:0,max:1},{min:0},{min:0},{min:0}],series:[{name:"State Of Grace (Taylor's Version)",shadow:!1,data:[328e-6,.594,.713,0,9,.114,-5.314,.0503,.328,129.958,295413,4]}]},d="https://raw.githubusercontent.com/com-480-data-visualization/datavis-project-2022-shazam/main/dataset/crawler/data/",f={name:"Yearly",data:function(){return{year:-1,shouldDisplay:0,barRef:null,barChartData:o,barSongsRef:null,barChartSongsData:l,radarRef:null,radarChartData:c,splineRef:null,splineChartData:h,yearlyTopSingers:null,yearlyTopTracks:null,yearlyAudioFeatures:null,singerWordCloudPath:d+"wordcloud/wordcloud.svg"}},methods:{fetchData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.yearlyTopSingers=null,t.yearlyTopTracks=null,e.next=4,fetch(d+"singers/distinct_historical/"+encodeURIComponent(t.year)+".json");case 4:return r=e.sent,e.next=7,r.json();case 7:return t.yearlyTopSingers=e.sent,e.next=10,fetch(d+"tracks/historical/"+encodeURIComponent(t.year)+"_weeks.json");case 10:return n=e.sent,e.next=13,n.json();case 13:return t.yearlyTopTracks=e.sent,e.next=16,fetch(d+"tracks/historical/"+encodeURIComponent(t.year)+"_audio_features.json");case 16:return o=e.sent,e.next=19,o.json();case 19:t.yearlyAudioFeatures=e.sent,t.processData(),t.processAudioFeature();case 22:case"end":return e.stop()}}),e)})))()},processAudioFeature:function(){var t=[0,0,0,0,0,0],e=0,r=[];this.yearlyAudioFeatures.forEach((function(track){t[0]+=track.audioFeatures.acousticness,t[1]+=track.audioFeatures.danceability,t[2]+=track.audioFeatures.energy,t[3]+=track.audioFeatures.liveness,t[4]+=track.audioFeatures.speechiness,t[5]+=track.audioFeatures.valence,e+=1,r.push({name:track.title,shadow:!1,data:[track.audioFeatures.acousticness,track.audioFeatures.danceability,track.audioFeatures.energy,track.audioFeatures.instrumentalness,track.audioFeatures.key,track.audioFeatures.liveness,track.audioFeatures.loudness,track.audioFeatures.speechiness,track.audioFeatures.valence,track.audioFeatures.tempo,track.audioFeatures.duration_ms/1e3,track.audioFeatures.time_signature]})})),t=t.map((function(t){return t/e})),this.radarChartData.series=[{type:"area",name:"All songs average",data:t}],this.radarRef=Highcharts.chart("radarChart",this.radarChartData);if(r.length>50){var n=50/r.length;r=r.filter((function(t){return Math.random()<=n}))}this.splineChartData.series=r,this.splineRef=Highcharts.chart("splinePlot",this.splineChartData)},processData:function(){var t=[];this.yearlyTopSingers.forEach((function(e){t.push({name:e.name,text:e.name,data:[e.count]})})),t=t.filter((function(t){return t.data[0]>5})),this.barChartData.series=t,this.barRef=Highcharts.chart("barChart",this.barChartData);t=[];this.yearlyTopTracks.forEach((function(e){t.push({name:e.name+"("+e.singer+")",data:[e.count]})})),t=t.filter((function(t){return t.data[0]>10})),this.barChartSongsData.series=t,this.barRef=Highcharts.chart("barChartSongs",this.barChartSongsData)},updateShouldDisplay:function(){-1!==this.year&&(this.shouldDisplay+=1)},updateYear:function(t){this.year=t.path[0].innerHTML,this.singerWordCloudPath=d+"wordcloud/"+this.year+".png",this.updateShouldDisplay()}},computed:{yearDisplayString:function(){return-1===this.year?"Select a year":this.year}},watch:{shouldDisplay:function(){console.log("Updating the page"),this.fetchData()}},mounted:function(){this.barRef=Highcharts.chart("barChart",this.barChartData),this.barSongsRef=Highcharts.chart("barChartSongs",this.barChartData),this.radarRef=Highcharts.chart("radarChart",this.radarChartData),this.splineRef=Highcharts.chart("splinePlot",this.splineChartData)}},m=r(64),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"mx-auto min-h-screen bg-gray-900"},[r("div",{staticClass:"container mx-auto grid grid-cols-1 place-content-center mt-6"},[r("div"),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("div",[r("b-dropdown",{staticClass:"m-md-2",attrs:{id:"dropdown-1",text:this.yearDisplayString,variant:"primary"}},[r("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateYear(e)}}},[t._v("2018")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateYear(e)}}},[t._v("2019")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateYear(e)}}},[t._v("2020")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateYear(e)}}},[t._v("2021")]),t._v(" "),r("b-dropdown-item",{attrs:{href:"#"},on:{click:function(e){return t.updateYear(e)}}},[t._v("2022")])],1)],1)]),t._v(" "),r("div")]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.shouldDisplay,expression:"shouldDisplay"}],staticClass:"container mx-auto grid grid-cols-2 place-content-center m-6"},[t._m(0),t._v(" "),t._m(1)]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.shouldDisplay,expression:"shouldDisplay"}],staticClass:"container mx-auto grid grid-cols-2 place-content-center m-6"},[t._m(2),t._v(" "),t._m(3)]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.shouldDisplay,expression:"shouldDisplay"}],staticClass:"container mx-auto grid grid-cols-2 place-content-center m-6"},[r("div",{staticClass:"flex items-center justify-center"},[r("img",{staticClass:"flex-no-shrink fill-current",attrs:{src:this.singerWordCloudPath,alt:"Word cloud"}})]),t._v(" "),t._m(4)]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.shouldDisplay,expression:"shouldDisplay"}],staticClass:"container mx-auto grid grid-cols-2 place-content-center m-6"},[t._m(5),t._v(" "),t._m(6)]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.shouldDisplay,expression:"shouldDisplay"}],staticClass:"container mx-auto grid grid-cols-2 place-content-center mt-6"},[t._m(7),t._v(" "),t._m(8)]),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:t.shouldDisplay,expression:"shouldDisplay"}],staticClass:"container mx-auto grid grid-cols-3 place-content-center m-6"},[r("div"),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.$router.back()}}},[r("button",{staticClass:"border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2"},[t._v("\n                    Go Back\n                ")])])]),t._v(" "),r("div")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container items-center justify-center"},[e("div",{attrs:{id:"barChart"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container self-center"},[r("h3",{staticClass:"text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-left"},[t._v("\n                Top singers of the year\n            ")]),t._v(" "),r("p",{staticClass:"text-xl text-gray-400 flex-grow text-left"},[t._v("\n                Have you ever wondered which artists have the most number of distinct songs on Billboard this year? This histogram will show you the answer.\n            ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container self-center"},[r("h3",{staticClass:"text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-right"},[t._v("\n                Top songs of the year\n            ")]),t._v(" "),r("p",{staticClass:"text-xl text-gray-400 flex-grow text-right"},[t._v("\n                Have you ever wondered about the most popular songs that stayed the longest on the Billboard this year? This histogram will show you the answer.\n            ")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center justify-center"},[e("div",{attrs:{id:"barChartSongs"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container self-center"},[r("h3",{staticClass:"text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-left"},[t._v("\n                Buzz Words\n            ")]),t._v(" "),r("p",{staticClass:"text-xl text-gray-400 flex-grow text-left"},[t._v("\n                What are the keywords in the lyrics of the top songs of the year? The size of the word is promotional to the number of times they appear.\n            ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container self-center"},[r("h3",{staticClass:"text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-right"},[t._v("\n                Audio Features\n            ")]),t._v(" "),r("p",{staticClass:"text-xl text-gray-400 flex-grow text-right"},[t._v("You can have a global view on the characteristics of the musics that are trending on this year.")]),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"text-sm text-gray-400 flex-grow text-right"},[t._v("Acousticness: confidence measures whether the songs have acoustic instruments")]),t._v(" "),r("p",{staticClass:"text-sm text-gray-400 flex-grow text-right"},[t._v("Danceability: how suitable the songs are for dancing")]),t._v(" "),r("p",{staticClass:"text-sm text-gray-400 flex-grow text-right"},[t._v("Energy: a perceptual measure of intensity and activity")]),t._v(" "),r("p",{staticClass:"text-sm text-gray-400 flex-grow text-right"},[t._v("Liveness: detects the presence of an audience in the recording")]),t._v(" "),r("p",{staticClass:"text-sm text-gray-400 flex-grow text-right"},[t._v("Speechiness: detects the presence of spoken words in a track.")]),t._v(" "),r("p",{staticClass:"text-sm text-gray-400 flex-grow text-right"},[t._v("Valence: how positive the emotions in songs are")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center justify-center"},[e("div",{attrs:{id:"radarChart"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center justify-center"},[e("div",{attrs:{id:"splinePlot"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container self-center"},[r("h3",{staticClass:"text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-left mt-3"},[t._v("\n                Overview of the audio features\n            ")]),t._v(" "),r("p",{staticClass:"text-xl text-gray-400 flex-grow text-left"},[t._v("\n                What's the musical style of the music this year? Let's take a look!\n            ")])])}],!1,null,null,null);e.default=component.exports}}]);