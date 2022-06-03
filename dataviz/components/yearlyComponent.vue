<script>
let _barChartData = {
    chart: {
        type: 'bar',
        backgroundColor: 'transparent',
        height: '100%',
    },
    title: {
        text: 'This is the leaderboard that shows the singer with the most distinct songs that made it to Billboard',
        style: {
            color: 'white',
            fontWeight: 'normal'
        }
    },
    subtitle: {
        text: 'Only singers with >= 5 songs are displayed',
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
    legend:{ enabled:false },
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

let _barChartSongsData = {
    chart: {
        type: 'bar',
        backgroundColor: 'transparent',
        height: '100%',
    },
    title: {
        text: 'Leaderboard of the the time songs stayed on the board',
        style: {
            color: 'white',
            fontWeight: 'normal'
        }
    },
    subtitle: {
        text: 'Only songs with total number of weeks >= 10 is displayed',
        style: {
            color: 'white',
            fontWeight: 'normal'
        }
    },
    xAxis: {
        categories: ['Tracks'],
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Total weeks',
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
                    // console.table(this.series);
                    return this.series.name + ": " + this.point.y;
                }
            },
            groupPadding: 0,
        }
    },
    legend:{ enabled:false },
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
        text: 'Average of all Songs\' Audio Features',
        style: {
            color: 'white',
            fontWeight: 'normal'
        }
    },
    subtitle: {
        text: 'All songs',
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
                    label = 'Acousticness';
                    break;
                case 1:
                    label = 'Danceability';
                    break;
                case 2:
                    label = 'Energy';
                    break;
                case 3:
                    label = 'Liveness';
                    break;
                case 4:
                    label = 'Speechiness';
                    break;
                case 5:
                    label = 'Valence';
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
    series: []
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

const github_base_url = "https://raw.githubusercontent.com/com-480-data-visualization/datavis-project-2022-shazam/main/dataset/crawler/data/"

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

      yearlyTopSingers: null,
      yearlyTopTracks: null,
      yearlyAudioFeatures: null,

      singerWordCloudPath: github_base_url + "wordcloud/wordcloud.svg",
    }
  },

  methods: {
    async fetchData() {
      this.yearlyTopSingers = null
      this.yearlyTopTracks = null

      {
          const res = await fetch(
            github_base_url + "singers/distinct_historical/" + encodeURIComponent(this.year) + ".json"
        )
        this.yearlyTopSingers = await res.json()
        // console.log(JSON.stringify(this.yearlyTopSingers, null, 2))
      }

      {
        const res = await fetch(
            github_base_url + "tracks/historical/" + encodeURIComponent(this.year) + "_weeks.json"
        )
        this.yearlyTopTracks = await res.json()
        // console.log(JSON.stringify(this.yearlyTopTracks, null, 2))
      }

      {
        const res = await fetch(
            github_base_url + "tracks/historical/" + encodeURIComponent(this.year) + "_audio_features.json"
        )
        this.yearlyAudioFeatures = await res.json()
        // console.log(JSON.stringify(this.yearlyAudioFeatures, null, 2))
      }

      this.processData()
      this.processAudioFeature()
    },
    processAudioFeature() {
       var avg = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
       var cnt = 0
       var splineData = []
       this.yearlyAudioFeatures.forEach(track => {
           // radar
            avg[0] += track.audioFeatures.acousticness
            avg[1] += track.audioFeatures.danceability
            avg[2] += track.audioFeatures.energy
            avg[3] += track.audioFeatures.liveness
            avg[4] += track.audioFeatures.speechiness
            avg[5] += track.audioFeatures.valence
            cnt += 1

            // spline
            splineData.push({
                name: track.title,
                shadow: false,
                data: [
                    track.audioFeatures.acousticness,
                    track.audioFeatures.danceability,
                    track.audioFeatures.energy,
                    track.audioFeatures.instrumentalness,
                    track.audioFeatures.key, 
                    track.audioFeatures.liveness,
                    track.audioFeatures.loudness,
                    track.audioFeatures.speechiness,
                    track.audioFeatures.valence,
                    track.audioFeatures.tempo,
                    track.audioFeatures.duration_ms / 1000.0,
                    track.audioFeatures.time_signature,
                ]
            })
       });

       avg = avg.map(value => {
           return value / cnt
       })
        this.radarChartData.series = [{
            type: 'area',
            name: "All songs average",
            data: avg,
        }]
        this.radarRef = Highcharts.chart('radarChart', this.radarChartData);

        // console.log(splineData)

        // performance - trim some data
        const maxTracks = 50
        if(splineData.length > maxTracks) {
            var ratio = 1.0 * maxTracks / splineData.length
            splineData = splineData.filter(
                value => Math.random() <= ratio
            )
        }
        this.splineChartData.series = splineData
        this.splineRef = Highcharts.chart('splinePlot', this.splineChartData);
    },
    processData() {
        {
            var arr = []
            this.yearlyTopSingers.forEach(function(value) {
                arr.push({
                    name: value.name,
                    text: value.name,
                    data: [value.count],
                })
            })

            arr = arr.filter(
                value => value.data[0] > 5
            )

            this.barChartData.series = arr
            // console.log(this.barChartData.series)
            this.barRef = Highcharts.chart('barChart', this.barChartData);
        }

        {
            var arr = []
            this.yearlyTopTracks.forEach(function(value) {
                arr.push({
                    name: value.name + "(" + value.singer + ")",
                    data: [value.count],
                })
            })

            arr = arr.filter(
                value => value.data[0] > 10
            )

            this.barChartSongsData.series = arr
            // console.log(this.barChartSongsData.series)
            this.barRef = Highcharts.chart('barChartSongs', this.barChartSongsData);
        }
    },
    updateShouldDisplay() {
      if(this.year !== -1) {
          this.shouldDisplay += 1
      }
    },
    updateYear(e) {
      this.year = e.path[0].innerHTML
    //   console.log(this.year)

      this.singerWordCloudPath = github_base_url + "wordcloud/" + this.year + ".png",

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
          this.fetchData()
      }
  },

  mounted() {
    this.barRef = Highcharts.chart('barChart', this.barChartData);
    this.barSongsRef = Highcharts.chart('barChartSongs', this.barChartData);
    this.radarRef = Highcharts.chart('radarChart', this.radarChartData);
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
                    <b-dropdown-item href="#" @click="updateYear($event)">2018</b-dropdown-item>
                    <b-dropdown-item href="#" @click="updateYear($event)">2019</b-dropdown-item>
                    <b-dropdown-item href="#" @click="updateYear($event)">2020</b-dropdown-item>
                    <b-dropdown-item href="#" @click="updateYear($event)">2021</b-dropdown-item>
                    <b-dropdown-item href="#" @click="updateYear($event)">2022</b-dropdown-item>
                </b-dropdown>
            </div>

        </div>
        <div></div>
    </div>
    
    <!-- horizontal bar chart (singers/distinct_historical) -->
    <div v-show="shouldDisplay" class="container mx-auto grid grid-cols-2 place-content-center m-6">
        <div class="container items-center justify-center">
            <div id="barChart"></div>
        </div>
        
        <div class="container self-center">
            <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-left">
                Top singers of the year
            </h3>
            <p class="text-xl text-gray-400 flex-grow text-left">
                Have you ever wondered who are the artists that have the most number of distinct songs on billboard this year? This histogram will show you the answer.
            </p>
        </div>
    </div>

    <!-- horizontal bar chart (tracks/historical) -->
    <div v-show="shouldDisplay" class="container mx-auto grid grid-cols-2 place-content-center m-6">
        <div class="container self-center">
            <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-right">
                Top songs of the year
            </h3>
            <p class="text-xl text-gray-400 flex-grow text-right">
                Have you ever wondered what are the most popular songs that stayed on billboard this year the longest? This histogram will show you the answer.
            </p>
        </div>
        
        <div class="flex items-center justify-center">
            <div id="barChartSongs"></div>
        </div>    
    </div>

    <!-- word cloud -->
    <div v-show="shouldDisplay" class="container mx-auto grid grid-cols-2 place-content-center m-6">
        <div class="flex items-center justify-center">
            <img v-bind:src="this.singerWordCloudPath" alt="Word cloud" class="flex-no-shrink fill-current"/>
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
                What's the musical style of the music this year? Let's take a look!
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