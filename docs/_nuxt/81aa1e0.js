(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4,6],{299:function(t,e,r){var content=r(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(83).default)("cc9ffabc",content,!0,{sourceMap:!1})},300:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-shrink-0 flex items-center"},[e("img",{staticClass:"hidden lg:block h-10 w-auto",attrs:{src:r(301),alt:"EPFL"}})])}],o={name:"Navbar"},l=(r(302),r(64)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"sticky top-0 z-50 bg-gray-800",attrs:{id:"navbarBG"}},[r("div",{staticClass:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},[r("div",{staticClass:"relative flex items-center justify-between h-16"},[r("div",{staticClass:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},[t._m(0),t._v(" "),r("div",{staticClass:"hidden sm:block sm:ml-6"},[r("div",{staticClass:"flex space-x-4"},[r("NuxtLink",{staticClass:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{id:"nav1",to:"/"}},[t._v("Home")]),t._v(" "),r("NuxtLink",{staticClass:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{id:"nav2",to:"/weekly"}},[t._v("Weekly Analysis")]),t._v(" "),r("NuxtLink",{staticClass:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{id:"nav3",to:"/yearly"}},[t._v("Yearly Analysis")]),t._v(" "),r("NuxtLink",{staticClass:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{id:"nav4",to:"/artist"}},[t._v("Artists")])],1)])])])])])}),n,!1,null,null,null);e.default=component.exports},301:function(t,e,r){t.exports=r.p+"img/icon.54b7b29.jpg"},302:function(t,e,r){"use strict";r(299)},303:function(t,e,r){var n=r(82)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n#nav1{\n  color:#a4d938\n}\n#nav2{\n  color:#eb65b4\n}\n#nav3{\n  color:#fbd330\n}\n#nav4{\n  color:#4bbede\n}\n#navbarBG{\n  background-color:#0b1838\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},315:function(t,e,r){"use strict";r.r(e);var n=r(32),o=(r(84),r(1),r(3),r(23),r(16),r(2),{chart:{polar:!0,height:"100%",backgroundColor:"transparent"},credits:{enabled:!1},title:{text:"Average of all Songs' Audio Features",style:{color:"white",fontWeight:"normal"}},pane:{startAngle:0,endAngle:360},xAxis:{tickInterval:1,min:0,max:6,labels:{formatter:function(){var label;switch(this.value){case 0:label="Acousticness";break;case 1:label="Danceability";break;case 2:label="Energy";break;case 3:label="Liveness";break;case 4:label="Speechiness";break;case 5:label="Valence"}return label}}},yAxis:{min:0},plotOptions:{series:{pointStart:0,pointInterval:1},column:{pointPadding:0,groupPadding:0}},series:[]}),l={chart:{type:"scatter",zoomType:"xy",backgroundColor:"transparent"},credits:{enabled:!1},title:{text:"Key versus Tempo",style:{color:"white",fontWeight:"normal"}},subtitle:{text:"An insight into the singer's tendency",style:{color:"white",fontWeight:"normal"}},xAxis:{title:{enabled:!0,text:"Key",style:{color:"white",fontWeight:"normal"}},labels:{formatter:function(){return this.value<=11?["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"][this.value]:""}},min:0,max:11,tickInterval:1},yAxis:{title:{text:"Tempo",style:{color:"white",fontWeight:"normal"}}},plotOptions:{scatter:{marker:{radius:5,states:{hover:{enabled:!0,lineColor:"rgb(100,100,100)"}}},states:{hover:{marker:{enabled:!1}}}}},series:[]},c={chart:{type:"spline",parallelCoordinates:!0,parallelAxes:{lineWidth:2},backgroundColor:"transparent"},title:{text:"Audio feature over time",style:{color:"white",fontWeight:"normal"}},credits:{enabled:!1},xAxis:{categories:["Acousticness","Danceability","Energy","Instrumentalness","Key","Liveness","Loudness","Speechiness","Valence","Tempo","Duration (s)","Time Signature"]},yAxis:[{min:0,max:1},{min:0,max:1},{min:0,max:1},{min:0,max:1},{categories:["C","C#","D","D#","E","F","F#","G","G#","A","A#","B"]},{min:0,max:1},{},{min:0,max:1},{min:0,max:1},{min:0},{min:0},{min:0}],series:[]},h="https://raw.githubusercontent.com/com-480-data-visualization/datavis-project-2022-shazam/main/dataset/crawler/data/",d={name:"Singer",data:function(){return{singerName:"Taylor Swift",singerDiscographyData:null,singerProfileData:{image:"https://picsum.photos/200"},singerWordCloudPath:h+"wordcloud/wordcloud.svg",radarRef:null,radarChartData:o,scatterRef:null,scatterChartData:l,splineRef:null,splineChartData:c}},methods:{fetchData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.singerDiscographyData=null,e.next=3,fetch(h+"/singers/"+encodeURIComponent(t.singerName)+".json");case 3:return r=e.sent,e.next=6,r.json();case 6:return t.singerDiscographyData=e.sent,e.next=9,fetch(h+"/singers/info/"+encodeURIComponent(t.singerName)+".json");case 9:return n=e.sent,e.next=12,n.json();case 12:t.singerProfileData=e.sent,t.processAudioFeature();case 14:case"end":return e.stop()}}),e)})))()},processAudioFeature:function(){var t=[0,0,0,0,0,0],e=0,r=[],n=[];this.singerDiscographyData.albums.forEach((function(o){o.tracks.forEach((function(track){t[0]+=track.acousticness,t[1]+=track.danceability,t[2]+=track.energy,t[3]+=track.liveness,t[4]+=track.speechiness,t[5]+=track.valence,e+=1,r.push([track.key,track.tempo]),n.push({name:track.name,shadow:!1,data:[track.acousticness,track.danceability,track.energy,track.instrumentalness,track.key,track.liveness,track.loudness,track.speechiness,track.valence,track.tempo,track.duration_ms/1e3,track.time_signature]})}))})),t=t.map((function(t){return t/e})),this.radarChartData.series=[{type:"area",name:"Discography Average",data:t}],this.radarRef=Highcharts.chart("radarPlot",this.radarChartData),this.scatterChartData.series=[{name:"Data",color:"rgba(119, 152, 191, .5)",data:r}],this.scatterRef=Highcharts.chart("scatterPlot",this.scatterChartData);if(n.length>200){var o=200/n.length;n=n.filter((function(t){return Math.random()<=o}))}this.splineChartData.series=n,this.splineRef=Highcharts.chart("splinePlot",this.splineChartData)}},mounted:function(){this.singerName=this.$route.params.singer||"Taylor Swift",console.log(this.singerName),this.singerWordCloudPath=h+"wordcloud/"+encodeURIComponent(this.singerName)+".png",this.fetchData(),this.radarRef=Highcharts.chart("radarPlot",this.radarChartData),this.scatterRef=Highcharts.chart("scatterPlot",this.scatterChartData),this.splineRef=Highcharts.chart("splinePlot",this.splineChartData)}},m=r(64),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto min-h-screen"},[r("div",{staticClass:"container mx-auto grid grid-cols-3 place-content-center mt-6"},[t._m(0),t._v(" "),r("div",{staticClass:"flex items-center"},[r("div",{staticClass:"relative w-36 h-36"},[r("img",{staticClass:"rounded-full border border-gray-100 shadow-sm",attrs:{src:this.singerProfileData.image,alt:"Singer image"}})]),t._v(" "),r("div",{staticClass:"inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4",attrs:{role:"group"}},[r("p",{staticClass:"text-5xl p-6 text-gray-50 text-left"},[t._v(t._s(this.singerName))])])]),t._v(" "),r("div",{staticClass:"flex items-center"},[r("span",{staticClass:"w-1 h-1 mx-1.5 rounded-full bg-gray-400"}),t._v(" "),r("a",{staticClass:"text-sm font-medium underline hover:no-underline text-white",attrs:{href:this.singerProfileData.spotifyURL,target:"”_blank”"}},[t._v(t._s(this.singerProfileData.followers||0)+" Followers on Spotify")])])]),t._v(" "),r("div",{staticClass:"container mx-auto grid grid-cols-2 place-content-center mt-6"},[r("div",{staticClass:"flex items-center justify-center"},[r("img",{staticClass:"flex-no-shrink fill-current",attrs:{src:this.singerWordCloudPath,alt:"Word cloud"}})]),t._v(" "),t._m(1)]),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),r("div",{staticClass:"container mx-auto grid grid-cols-3 place-content-center mt-6"},[r("div"),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("a",{attrs:{href:""},on:{click:function(e){return e.preventDefault(),t.$router.back()}}},[r("button",{staticClass:"border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2"},[t._v("\n                    Go Back\n                ")])])]),t._v(" "),r("div")])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex items-center justify-center"},[e("div",{staticClass:"inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4",attrs:{role:"group"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container self-center"},[r("h3",{staticClass:"text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-left"},[t._v("\n                Top singer's favourite words\n            ")]),t._v(" "),r("p",{staticClass:"text-xl text-gray-400 flex-grow text-left"},[t._v("\n                Let's have a look at the singer's favourite words! The larger the font size of a word is, the more times it appears in the lyrics.\n            ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto grid grid-cols-2 place-content-center mt-6"},[r("div",{staticClass:"container self-center"},[r("h3",{staticClass:"text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-right"},[t._v("\n                The audio feature of the discography\n            ")]),t._v(" "),r("p",{staticClass:"text-xl text-gray-400 flex-grow text-right"},[t._v("Here, the artist's musical characteristics are revealed! ")]),t._v(" "),r("br"),t._v(" "),r("p",{staticClass:"text-sm text-gray-400 flex-grow text-right"},[t._v("Acousticness: confidence measures whether the songs have acoustic instruments")]),t._v(" "),r("p",{staticClass:"text-sm text-gray-400 flex-grow text-right"},[t._v("Danceability: how suitable the songs are for dancing")]),t._v(" "),r("p",{staticClass:"text-sm text-gray-400 flex-grow text-right"},[t._v("Energy: a perceptual measure of intensity and activity")]),t._v(" "),r("p",{staticClass:"text-sm text-gray-400 flex-grow text-right"},[t._v("Liveness: detects the presence of an audience in the recording")]),t._v(" "),r("p",{staticClass:"text-sm text-gray-400 flex-grow text-right"},[t._v("Speechiness: detects the presence of spoken words in a track.")]),t._v(" "),r("p",{staticClass:"text-sm text-gray-400 flex-grow text-right"},[t._v("Valence: how positive the emotions in songs are")])]),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("div",{attrs:{id:"radarPlot"}})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto grid grid-cols-2 place-content-center mt-6"},[r("div",{staticClass:"flex items-center justify-center"},[r("div",{attrs:{id:"scatterPlot"}})]),t._v(" "),r("div",{staticClass:"container self-center"},[r("h3",{staticClass:"text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-left mt-3"},[t._v("\n                The key and pace\n            ")]),t._v(" "),r("p",{staticClass:"text-xl text-gray-400 flex-grow text-left"},[t._v("\n                Does the singer prefer a fast tempo? In which key are songs usually composed? What are the relationships between these two audio features? Check this scatter plot to have an insight!\n            ")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mx-auto grid grid-cols-2 place-content-center mt-6"},[r("div",{staticClass:"container self-center"},[r("h3",{staticClass:"text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-right mt-3"},[t._v("\n                The evolution of the singer's style\n            ")]),t._v(" "),r("p",{staticClass:"text-xl text-gray-400 flex-grow text-right"},[t._v("\n                People change their style from time to time so does your favourite singer.\n            ")])]),t._v(" "),r("div",{staticClass:"flex items-center justify-center"},[r("div",{attrs:{id:"splinePlot"}})])])}],!1,null,null,null);e.default=component.exports},320:function(t,e,r){"use strict";r.r(e);var n=r(10),o=r(315),l=n.default.extend({name:"SingerPage",components:{Singer:o.default}}),c=r(64),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-gray-900 min-h-screen"},[r("navbar"),t._v(" "),r("Singer")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:r(300).default})}}]);