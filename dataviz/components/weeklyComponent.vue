<script>
const _bubbleChartData = {
    chart: {
        type: 'packedbubble',
        height: '80%',
        backgroundColor: 'transparent',
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Top singers of the week',
        style: {
            color: 'white',
            fontWeight: 'normal'
        }
    },
    tooltip: {
        useHTML: true,
        pointFormat: '<b>{point.name}:</b> {point.value}m CO<sub>2</sub>'
    },
    plotOptions: {
        packedbubble: {
            minSize: '50%',
            maxSize: '100%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
                splitSeries: false,
                gravitationalConstant: 0.02
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}',
                filter: {
                    property: 'y',
                    operator: '>',
                    value: 250
                },
                style: {
                    color: 'white',
                    textOutline: 'none',
                    fontWeight: 'normal'
                }
            }
        }
    },
    series: [{
        name: 'Singers',
        data: [{
            name: 'Taylor Swift',
            value: 500
        }, {
            name: 'Hello World!',
            value: 100
        }, {
            name: 'Hello World!',
            value: 1000
        }, {
            name: 'Hello World!',
            value: 1000
        }, {
            name: 'Hello World!',
            value: 1000
        }, {
            name: 'Hello World!',
            value: 1000
        }, {
            name: "Lady Gaga",
            value: 1000
        }, {
            name: "Lady Gaga",
            value: 1000
        }, {
            name: "Lady Gaga",
            value: 1000
        }, {
            name: "Lady Gaga",
            value: 1000
        }]
    }]
}

let _barChartData = {
    chart: {
        type: 'bar',
        backgroundColor: 'transparent',
    },
    title: {
        text: 'Top singers since 2018 Week 1',
        style: {
            color: 'white',
            fontWeight: 'normal'
        }
    },
    subtitle: {
        text: 'By total number of songs accumulated on billboard',
        style: {
            color: 'white',
            fontWeight: 'normal'
        }
    },
    xAxis: {
        categories: ['', '', '', '', ''],
        title: {
            text: "Ranking",
            style: {
                color: 'white',
                fontWeight: 'normal'
            }
        }
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
                formatter: function() {return 'Singer' + this.x + ': ' + this.y},
            }
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
    series: [{
        name: 'Singer A',
        data: [20]
    }, {
        name: 'Singer B',
        data: [19]
    }, {
        name: 'Singer C',
        data: [10]
    }, {
        name: 'Singer D',
        data: [1]
    }, {
        name: 'Singer D',
        data: [1]
    }, {
        name: 'Singer D',
        data: [1]
    }]
}

const github_base_url = "https://raw.githubusercontent.com/com-480-data-visualization/datavis-project-2022-shazam/main/dataset/crawler/data/qq/108/"

export default {
  name: 'WeeklyTimeline',

  data() {
    return {
      year: -1,
      week: -1,

      weekData: null,

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
      this.singerData = null

    console.log(github_base_url + this.year + "_" + this.week + ".json")
      const res = await fetch(
        github_base_url + encodeURIComponent(this.year + "_" + this.week) + ".json"
      )
      this.weekData = await res.json()

      console.log(JSON.stringify(this.weekData, null, 2))
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
    this.radarRef = Highcharts.chart('barChart', this.barChartData);
    this.scatterRef = Highcharts.chart('bubbleChart', this.bubbleChartData);
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

    <!-- TMP -->
    <div v-show="shouldDisplayAllComponents" class="container mx-auto grid grid-cols-3 place-content-center mt-6">
        <div></div>
        <div class="flex items-center justify-center">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4" role="group">
                <NuxtLink to="/singer">
                    <button class="border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2">To Singer</button>
                </NuxtLink>
            </div>
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