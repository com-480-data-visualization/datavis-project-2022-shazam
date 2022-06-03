(window.webpackJsonp=window.webpackJsonp||[]).push([[9,2,4],{299:function(t,e,r){var content=r(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(83).default)("cc9ffabc",content,!0,{sourceMap:!1})},300:function(t,e,r){"use strict";r.r(e);var n=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"flex-shrink-0 flex items-center"},[e("img",{staticClass:"hidden lg:block h-10 w-auto",attrs:{src:r(301),alt:"EPFL"}})])}],l={name:"Navbar"},o=(r(302),r(64)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("nav",{staticClass:"sticky top-0 z-50 bg-gray-800",attrs:{id:"navbarBG"}},[r("div",{staticClass:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8"},[r("div",{staticClass:"relative flex items-center justify-between h-16"},[r("div",{staticClass:"flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"},[t._m(0),t._v(" "),r("div",{staticClass:"hidden sm:block sm:ml-6"},[r("div",{staticClass:"flex space-x-4"},[r("NuxtLink",{staticClass:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{id:"nav1",to:"/"}},[t._v("Home")]),t._v(" "),r("NuxtLink",{staticClass:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{id:"nav2",to:"/weekly"}},[t._v("Weekly Analysis")]),t._v(" "),r("NuxtLink",{staticClass:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{id:"nav3",to:"/yearly"}},[t._v("Yearly Analysis")]),t._v(" "),r("NuxtLink",{staticClass:"text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium",attrs:{id:"nav4",to:"/artist"}},[t._v("Artists")])],1)])])])])])}),n,!1,null,null,null);e.default=component.exports},301:function(t,e,r){t.exports=r.p+"img/icon.54b7b29.jpg"},302:function(t,e,r){"use strict";r(299)},303:function(t,e,r){var n=r(82)((function(i){return i[1]}));n.push([t.i,"/*purgecss start ignore*/\n#nav1{\n  color:#a4d938\n}\n#nav2{\n  color:#eb65b4\n}\n#nav3{\n  color:#fbd330\n}\n#nav4{\n  color:#4bbede\n}\n#navbarBG{\n  background-color:#0b1838\n}\n\n/*purgecss end ignore*/",""]),n.locals={},t.exports=n},310:function(t,e,r){"use strict";r.r(e);var n=r(32),l=(r(84),r(1),r(2),r(65),r(85),{name:"ArtistComponent",methods:{fetchData:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.all_singers=null,t.tableData=[],e.next=4,fetch("https://raw.githubusercontent.com/com-480-data-visualization/datavis-project-2022-shazam/main/dataset/crawler/data/singers/all_singers.json");case 4:return r=e.sent,e.next=7,r.json();case 7:t.all_singers=e.sent,t.processData(t.all_singers);case 9:case"end":return e.stop()}}),e)})))()},processData:function(t){this.tableData=t}},data:function(){return{text:"",all_singers:[],tableData:[]}},watch:{text:function(){var t=this,e=[];e=this.text.length>0?this.all_singers.filter((function(e){return e.toLowerCase().includes(t.text.toLowerCase())})):this.all_singers,this.processData(e)}},mounted:function(){this.fetchData()}}),o=r(64),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-gray-900 container"},[r("div",{staticClass:"container grid grid-cols-3 mt-6"},[r("div"),t._v(" "),r("div",[r("form",{staticClass:"flex items-center"},[r("label",{staticClass:"sr-only",attrs:{for:"simple-search"}},[t._v("Search")]),t._v(" "),r("div",{staticClass:"relative w-full"},[r("div",{staticClass:"flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"},[r("svg",{staticClass:"w-5 h-5 text-gray-500 dark:text-gray-400",attrs:{fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg"}},[r("path",{attrs:{"fill-rule":"evenodd",d:"M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z","clip-rule":"evenodd"}})])]),t._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:t.text,expression:"text"}],staticClass:"bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",attrs:{type:"text",id:"simple-search",placeholder:"Search",required:""},domProps:{value:t.text},on:{input:function(e){e.target.composing||(t.text=e.target.value)}}})])])]),t._v(" "),r("div")]),t._v(" "),r("div",{staticClass:"container grid grid-cols-3 mt-6"},[r("div"),t._v(" "),r("p",{staticClass:"text-white"},[t._v(t._s(this.text))]),t._v(" "),r("div")]),t._v(" "),r("div",{staticClass:"bg-gray-900 container justify-center"},[r("div",{staticClass:"container justify-center shadow-md sm:rounded-lg"},[t._l(t.tableData,(function(e){return[r("NuxtLink",{attrs:{to:"/singer/"+encodeURIComponent(e)}},[r("span",{staticClass:"text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800"},[t._v("\n                        "+t._s(e)+"\n                    ")])])]}))],2)])])}),[],!1,null,null,null);e.default=component.exports},316:function(t,e,r){"use strict";r.r(e);var n=r(10),l=r(310),o=n.default.extend({name:"ArtistsPage",components:{ArtistComponent:l.default}}),c=r(64),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"bg-gray-900 h-screen"},[r("navbar"),t._v(" "),r("ArtistComponent")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:r(300).default,ArtistComponent:r(310).default})}}]);