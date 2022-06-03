<script>
const _bubbleChartData = {
    chart: {
        type: 'packedbubble',
        height: '100%',
        backgroundColor: 'transparent',
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Singers for the top 20 tracks of the week',
        style: {
            color: 'white',
            fontWeight: 'normal'
        }
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.orig} tracks this week'
    },
    plotOptions: {
        packedbubble: {
            minSize: '20%',
            maxSize: '120%',
            zMin: 0,
            zMax: 500,
            layoutAlgorithm: {
                splitSeries: false,
                gravitationalConstant: 0.02
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                // filter: {
                //     property: 'y',
                //     operator: '>',
                //     value: 0
                // },
                style: {
                    color: 'white',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        },
        // series: {
        //     allowPointSelect: true,
        //     events: {
        //         click: function(event) {
        //             // console.log(event.point.name)
        //             // <nuxt-link to="/singer">
        //             //     <button class="border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2">To Singer</button>
        //             // </nuxt-link>

        //             this.$router.push({ name: 'singer', params: { singerName: event.point.name } })
        //         }
        //     }
        // }
    },
    series: []
}

let _barChartData = {
    chart: {
        type: 'bar',
        backgroundColor: 'transparent',
        height: '1000px',
    },
    title: {
        text: 'Top singers since 2018 Week 1',
        style: {
            color: 'white',
            fontWeight: 'normal'
        }
    },
    subtitle: {
        text: 'Total number of distinct songs',
        style: {
            color: 'white',
            fontWeight: 'normal'
        }
    },
    xAxis: {
        categories: ['Singers'],
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total tracks',
            align: 'high',
            style: {
                color: 'white',
                fontWeight: 'normal'
            }
        },
        labels: {
            overflow: 'justify'
        }
    },
    tooltip: {
        valueSuffix: ' tracks'
    },
    plotOptions: {
        bar: {
            dataLabels: {
                enabled: true,
                inside: true,
                align: 'right',
                formatter: function () {
                    // console.table(this.point);
                    return this.series.name + ": " + this.point.y;
                }
            },
            groupPadding: 0,
        }
    },
    // legend: {
    //     layout: 'vertical',
    //     align: 'right',
    //     verticalAlign: 'top',
    //     x: -40,
    //     y: 80,
    //     floating: true,
    //     borderWidth: 1,
    //     shadow: true
    // },
    credits: {
        enabled: false
    },
    series: []
}

const github_base_url = "https://raw.githubusercontent.com/com-480-data-visualization/datavis-project-2022-shazam/main/dataset/crawler/data/singers/"

var globalRouter = null

export default {
  name: 'WeeklyTimeline',

  data() {
    return {
      year: -1,
      week: -1,

      weeklySingerData: null,
      historicalDistinctTracksPerSingerData: null,

      weekOptions: [],

      shouldDisplayAllComponents: 0,
      shouldDisplayWeekButton: false,

      bubbleRef: null,
      bubbleChartData: _bubbleChartData,

      barRef: null,
      barChartData: _barChartData,
    }
  },

  methods: {
    async fetchData() {
      this.weeklySingerData = null
      this.historicalDistinctTracksPerSingerData = null

      {
          const res = await fetch(
            github_base_url + "weekly/" + encodeURIComponent(this.year + "_" + this.week) + ".json"
        )
        this.weeklySingerData = await res.json()
      }

      {
          console.log(github_base_url + "distinct_historical/" + this.year + "_" + this.week + ".json")
        const res = await fetch(
            github_base_url + "distinct_historical/" + encodeURIComponent(this.year + "_" + this.week) + ".json"
        )
        this.historicalDistinctTracksPerSingerData = await res.json()
      }

        // console.log(JSON.stringify(this.weeklySingerData, null, 2))
      this.processData()
    },
    processData() {
        {
            var arr = []
            this.weeklySingerData.forEach(function(value) {
                arr.push({
                    name: value.name,
                    value: value.count * 100,
                    orig: value.count,
                })
            })

            this.bubbleChartData.series = [{
                name: 'Singers',
                data: arr,
            }]

            globalRouter = this.$router
            this.bubbleChartData.plotOptions.series = {
                allowPointSelect: true,
                events: {
                    click: function(event) {
                        // console.log(event.point.name)
                        // console.log(globalRouter)
                        // <nuxt-link to="/singer">
                        //     <button class="border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2">To Singer</button>
                        // </nuxt-link>

                        globalRouter.push({ path: `/singer/${event.point.name}` })
                    }
                }
            }
            // console.log(this.bubbleChartData.series)
            this.bubbleRef = Highcharts.chart('bubbleChart', this.bubbleChartData);
        }

        {
            var arr = []
            this.historicalDistinctTracksPerSingerData.forEach(function(value) {
                arr.push({
                    name: value.name,
                    text: value.name,
                    data: [value.count],
                })
            })

            if (arr.length > 100) {
                arr = arr.filter(value => value.data[0] > 1)
            }

            if (arr.length > 100) {
                arr = arr.filter(value => value.data[0] > 2)
            }

            this.barChartData.series = arr
            console.log(this.barChartData.series)
            this.barRef = Highcharts.chart('barChart', this.barChartData);
        }
    },
    updateShouldDisplay() {
      if(this.year !== -1 && this.week !== -1) {
          this.shouldDisplayAllComponents += 1
      }
    },
    updateYear(e) {
      this.year = e.path[0].innerHTML
    //   console.log(this.year)

      this.shouldDisplayWeekButton = true

      this.weekOptions = []
      if(this.year == 2018) {
          for(var i = 2; i <= 52; i++) {
              this.weekOptions.push({ value: i, element: "href=\"#\" @click=\"updateYear($event)\""})
          }
      } else if(2019 <= this.year && this.year <= 2021) {
          for(var i = 1; i <= 52; i++) {
              this.weekOptions.push({ value: i, element: "href=\"#\" @click=\"updateYear($event)\""})
          }
      } else { // 2022
          for(var i = 1; i <= 14; i++) {
              this.weekOptions.push({ value: i, element: "href=\"#\" @click=\"updateYear($event)\""})
          }
      }

      if(this.year == 2018 && this.week == 1) {
          this.week = 2
      }

      this.updateShouldDisplay()
    },
    updateWeek(e) {
      this.week = e.path[0].innerHTML
    //   console.log(this.week)

      this.updateShouldDisplay()
    },
  },

  computed: {
      yearDisplayString() {
          if(this.year === -1) 
            return "Select a year"
          return this.year
      },
      weekDisplayString() {
          if(this.week === -1) 
            return "Select a week"
          return "Week " + this.week
      }
  },

  watch: {
      shouldDisplayAllComponents() {
          // refresh the page according to the year and week number
          console.log("Updating the page")
          this.fetchData()
      }
  },

  mounted() {
    this.bubbleRef = Highcharts.chart('bubbleChart', this.bubbleChartData);
    this.barRef = Highcharts.chart('barChart', this.barChartData);
  },
}
</script>

<template>

<div class="mx-auto min-h-screen">

    <!-- timeline scroller -->
    <!-- <div class="container mx-auto grid grid-cols-1 place-content-center mt-6">
        <div class="flex items-center justify-center">
            <input id="default-range" type="range" min="0" max="222" value="111" class="w-2/3 h-2 bg-gray-500 rounded-lg appearance-none cursor-pointer dark:bg-gray-700">
        </div>
    </div> -->

    <div class="container mx-auto grid grid-cols-1 place-content-center mt-6">
        <!-- https://stackoverflow.com/questions/56531990/vue-how-to-change-dropdown-text-properly -->
        <!-- You can bind a dynamic value for text prop on <b-dropdown> and change it with the click event of <b-dropdown-item> -->

        <div class="flex items-center justify-center">
            <b-dropdown id="dropdown-1" :text="this.yearDisplayString" variant="primary" class="m-md-2">
                <b-dropdown-item href="#" @click="updateYear($event)">2018</b-dropdown-item>
                <b-dropdown-item href="#" @click="updateYear($event)">2019</b-dropdown-item>
                <b-dropdown-item href="#" @click="updateYear($event)">2020</b-dropdown-item>
                <b-dropdown-item href="#" @click="updateYear($event)">2021</b-dropdown-item>
                <b-dropdown-item href="#" @click="updateYear($event)">2022</b-dropdown-item>
            </b-dropdown>

            <b-dropdown v-show="shouldDisplayWeekButton" id="dropdown-2" :text="this.weekDisplayString" variant="primary" class="m-md-2">
                <!-- <b-dropdown-item href="#" @click="updateWeek($event)">1</b-dropdown-item> -->
                <component :is="`b-dropdown-item`" href="#" @click="updateWeek($event)" v-for="(option, index) in weekOptions" :key="index">{{ option.value }}</component>
            </b-dropdown>
        </div>
    </div>
    
    <!-- bubble -->
    <div v-show="shouldDisplayAllComponents" class="container mx-auto grid grid-cols-1 place-content-center mt-6">
        <p class="text-xl text-gray-400 flex-grow text-center">Who are the most popular artists that have the most listened songs?</p>
        <p class="text-xl text-gray-400 flex-grow text-center">Here each bubble represent a singer whose songs figured in the top 20 of this week.</p>
        <p class="text-xl text-gray-400 flex-grow text-center">The larger the size of the bubble is, the more songs from this singer are hitting.</p>
        <p class="text-xl text-gray-400 flex-grow text-center">Click on the bubble to check the profile of the singer!</p>
    </div>
    <div v-show="shouldDisplayAllComponents" class="container mx-auto grid grid-cols-1 place-content-center mt-6">
        <div class="flex items-center justify-center">
            <div id="bubbleChart"></div>
        </div>
    </div>

    <!-- leaderboard -->
    <div v-show="shouldDisplayAllComponents" class="container mx-auto grid grid-cols-1 place-content-center mt-6">
        <div></div>
        <div class="flex items-center justify-center">
            <div id="barChart"></div>
        </div>
        <div></div>
    </div>

    <!-- back button -->
    <div v-show="shouldDisplayAllComponents" class="container mx-auto grid grid-cols-3 place-content-center mt-6">
        <div></div>
        <div class="flex items-center justify-center">  
            <a href="" @click.prevent="$router.back()">      
                <button class="border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2">
                    Go Back
                </button>
            </a>
        </div>
        <div></div>
    </div>
</div>

</template>