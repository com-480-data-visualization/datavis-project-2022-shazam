<script>
const _radarChartData = {
    chart: {
        polar: true,
        height: '100%',
        backgroundColor: 'transparent',
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Audio features',
        style: {
            color: 'white',
            fontWeight: 'normal'
        }
    },
    pane: {
        startAngle: 0,
        endAngle: 360
    },
    xAxis: {
        tickInterval: 1,
        min: 0,
        max: 6,
        labels: {
            formatter: function() {
                let label;
                switch (this.value) {
                case 0:
                    label = 'A';
                    break;
                case 1:
                    label = 'B';
                    break;
                case 2:
                    label = 'C';
                    break;
                case 3:
                    label = 'D';
                    break;
                case 4:
                    label = 'E';
                    break;
                case 5:
                    label = 'F';
                    break;
                }
                
                return label;
            }
        }
    },
    yAxis: {
        min: 0
    },
    plotOptions: {
        series: {
            pointStart: 0,
            pointInterval: 1,
        },
        column: {
            pointPadding: 0,
            groupPadding: 0
        }
    },
    series: [{
        type: 'area',
        name: 'Feature 1',
        data: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6]
    }, {
        type: 'area',
        name: 'Feature 2',
        data: [0.93, 0.5, 0.3, 0.5, 0.4, 0.848]
    }]
}

let _barChartData = {
    chart: {
        type: 'bar',
        backgroundColor: 'transparent',
    },
    title: {
        text: 'Top 20 Singers',
        style: {
            color: 'white',
            fontWeight: 'normal'
        }
    },
    // subtitle: {
    //     text: 'This is the leader board that shows the accumulated ranking of top singers',
    //     style: {
    //         color: 'white',
    //         fontWeight: 'normal'
    //     }
    // },
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

let _barChartSongsData = {
    chart: {
        type: 'bar',
        backgroundColor: 'transparent',
    },
    title: {
        text: 'Top 20 Songs',
        style: {
            color: 'white',
            fontWeight: 'normal'
        }
    },
    subtitle: {
        text: 'This is the leader board that shows the accumulated ranking of top songs',
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

const _splineData = {
    chart: {
        type: 'spline',
        parallelCoordinates: true,
        parallelAxes: {
        lineWidth: 2
        },
        backgroundColor: 'transparent',
    },
    title: {
        text: 'Audio feature over time',
        style: {
            color: 'white',
            fontWeight: 'normal'
        },
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: [
            'Acousticness',
            'Danceability',
            'Energy',
            'Instrumentalness',
            'Key',
            'Liveness',
            'Loudness',
            'Speechiness',
            'Valence',
            'Tempo',
            'Duration (s)',
            'Time Signature', 
        ],
    },
    yAxis: [{
        min: 0,
        max: 1.0,
    }, {
        min: 0,
        max: 1.0,
    }, {
        min: 0,
        max: 1.0,
    }, {
        min: 0,
        max: 1.0,
    }, {
        categories: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
    }, {
        min: 0,
        max: 1.0,
    }, {
        
    }, {
        min: 0,
        max: 1.0,
    }, {
        min: 0,
        max: 1.0,
    }, {
        min: 0,
    }, {
        min: 0,
    }, {
        min: 0,
    }],
    series: [
        {
        "name": "State Of Grace (Taylor's Version)",
        "shadow": false,
        "data": [
            0.000328,
            0.594,
            0.713,
            0,
            9,
            0.114,
            -5.314,
            0.0503,
            0.328,
            129.958,
            295413,
            4
        ]
        }
    ]
}

export default {
  name: 'Yearly',

  data() {
    return {
      year: -1,
      shouldDisplay: 0,

      barRef: null,
      barChartData: _barChartData,

      barSongsRef: null,
      barChartSongsData: _barChartSongsData,

      radarRef: null,
      radarChartData: _radarChartData,

      splineRef: null,
      splineChartData: _splineData,
    }
  },

  methods: {
    updateShouldDisplay() {
      if(this.year !== -1) {
          this.shouldDisplay += 1
      }
    },
    updateYear(e) {
      this.year = e.path[0].innerHTML
    //   console.log(this.year)

      this.updateShouldDisplay()
    },
  },

  computed: {
      yearDisplayString() {
          if(this.year === -1) 
            return "Select a year"
          return this.year
      },
  },

  watch: {
      shouldDisplay() {
          // refresh the page according to the year and week number
          console.log("Updating the page")
      }
  },

  mounted() {
    this.radarRef = Highcharts.chart('barChart', this.barChartData);
    this.radarRef = Highcharts.chart('barChartSongs', this.barChartData);
    this.scatterRef = Highcharts.chart('radarChart', this.radarChartData);
    this.splineRef = Highcharts.chart('splinePlot', this.splineChartData);
  },
}
</script>

<template>

<div class="mx-auto min-h-screen bg-gray-900">

    <div class="container mx-auto grid grid-cols-1 place-content-center mt-6">
        <div></div>
        <div class="flex items-center justify-center">

            <div>
                <!-- https://stackoverflow.com/questions/56531990/vue-how-to-change-dropdown-text-properly -->
                <!-- You can bind a dynamic value for text prop on <b-dropdown> and change it with the click event of <b-dropdown-item> -->
                <b-dropdown id="dropdown-1" :text="this.yearDisplayString" variant="primary" class="m-md-2">
                    <b-dropdown-item href="#" @click="updateYear($event)" active>2018</b-dropdown-item>
                    <b-dropdown-item href="#" @click="updateYear($event)">2019</b-dropdown-item>
                    <b-dropdown-item href="#" @click="updateYear($event)">2020</b-dropdown-item>
                    <b-dropdown-item href="#" @click="updateYear($event)">2021</b-dropdown-item>
                    <b-dropdown-item href="#" @click="updateYear($event)">2022</b-dropdown-item>
                </b-dropdown>
            </div>

        </div>
        <div></div>
    </div>
    
    <!-- horizontal bar chart -->
    <div v-show="shouldDisplay" class="container mx-auto grid grid-cols-2 place-content-center m-6">
        <div class="flex items-center justify-center">
            <div id="barChart"></div>
        </div>
        
        <div class="container self-center">
            <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-left">
                Top singers of the year
            </h3>
            <p class="text-xl text-gray-400 flex-grow text-left">
                Have you ever wondered who are the artists that have the most number of songs on billboard this year? This histogram will show you the answer.
            </p>
        </div>
    </div>

    <!-- horizontal bar chart -->
    <div v-show="shouldDisplay" class="container mx-auto grid grid-cols-2 place-content-center m-6">
        <div class="container self-center">
            <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-right">
                Top songs of the year
            </h3>
            <p class="text-xl text-gray-400 flex-grow text-right">
                Have you ever wondered what are the most popular songs on billboard this year? This histogram will show you the answer.
            </p>
        </div>
        
        <div class="flex items-center justify-center">
            <div id="barChartSongs"></div>
        </div>    
    </div>

    <!-- word cloud -->
    <div v-show="shouldDisplay" class="container mx-auto grid grid-cols-2 place-content-center m-6">
        <div class="flex items-center justify-center">
            <img src="~/assets/wordcloud.svg" alt="Wordcloud" class="h-80 flex-no-shrink fill-current"/>
        </div>

         <div class="container self-center">

            <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-left">
                Buzz Words
            </h3>

            <p class="text-xl text-gray-400 flex-grow text-left">
                What are the keywords in the lyrics of top songs of the year? The size of the word is promotional to the number of times they appear.
            </p>
        </div>
    </div>

    <!-- radar graph -->
    <div v-show="shouldDisplay" class="container mx-auto grid grid-cols-2 place-content-center m-6">

        <div class="container self-center">
            <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-right">
                Audio Features
            </h3>
            <p class="text-xl text-gray-400 flex-grow text-right">You can have a global view on the characteristics of the musics that are trending on this year.</p>
            <br>
            <p class="text-lg text-gray-400 flex-grow text-right">This is a reminder if you do not know the definition of each feature:</p>
            <p class="text-lg text-gray-400 flex-grow text-right">Acousticness: confidence measure about whether the songs have acoustic instruments</p>
            <p class="text-lg text-gray-400 flex-grow text-right">Danceability: how suitable the songs are for dancing</p>
            <p class="text-lg text-gray-400 flex-grow text-right">Energy: a perceptual measure of intensity and activity</p>
            <p class="text-lg text-gray-400 flex-grow text-right">Liveness: detects the presence of an audience in the recording</p>
            <p class="text-lg text-gray-400 flex-grow text-right">Valence: how positive the emotions in songs are</p>
        </div>

        <div class="flex items-center justify-center">
            <div id="radarChart"></div>
        </div>
        
    </div>

        <!-- pararallel coordinate -->
    <div v-show="shouldDisplay" class="container mx-auto grid grid-cols-2 place-content-center mt-6">
        
        <div class="flex items-center justify-center">
            <div id="splinePlot"></div>
        </div>

        <div class="container self-center">
            <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-left mt-3">
                Overview of the audio features
            </h3>
            <p class="text-xl text-gray-400 flex-grow text-left">
                What't eh musical style of the music this year? Let's take a look!
            </p>
        </div>
        
    </div>

    <!-- back button -->
    <div v-show="shouldDisplay" class="container mx-auto grid grid-cols-3 place-content-center m-6">
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