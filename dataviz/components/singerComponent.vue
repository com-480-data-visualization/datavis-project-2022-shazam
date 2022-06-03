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
        text: 'Average of all Songs\' Audio Features',
        style: {
            color: 'white',
            fontWeight: 'normal'
        }
    },
    // subtitle: {
    //     text: 'All songs',
    //     style: {
    //         color: 'white',
    //         fontWeight: 'normal'
    //     }
    // },
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

const _scatterPlotData = {
    chart: {
        type: 'scatter',
        zoomType: 'xy',
        backgroundColor: 'transparent',
    },
    credits: {
        enabled: false
    },
    title: {
        text: 'Key versus Tempo',
        style: {
            color: 'white',
            fontWeight: 'normal'
        }
    },
    subtitle: {
        text: 'An insight into the singer\'s tendency',
        style: {
            color: 'white',
            fontWeight: 'normal'
        }
    },
    xAxis: {
        title: {
            enabled: true,
            text: 'Key',
            style: {
                color: 'white',
                fontWeight: 'normal'
            },
        },
        labels: {
            formatter: function() {
                const keys = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B']
                if(this.value <= 11)
                    return keys[this.value]
                return "" // don't output anything
            }
        },
        min: 0,
        max: 11,
        tickInterval: 1,
        // startOnTick: true,
        // endOnTick: true,
        // showLastLabel: true
    },
    yAxis: {
        title: {
            text: 'Tempo',
            style: {
                color: 'white',
                fontWeight: 'normal'
            },
        }
    },
    // legend: {
    //     layout: 'vertical',
    //     align: 'left',
    //     verticalAlign: 'top',
    //     x: 100,
    //     y: 70,
    //     floating: true,
    //     backgroundColor: 'transparent',
    //     borderWidth: 1,
    // },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            // tooltip: {
            //     headerFormat: '<b>{series.name}</b><br>',
            //     pointFormat: '{point.x} cm, {point.y} kg'
            // }
        }
    },
    series: []
};

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
    series: []
}

const github_base_url = "https://raw.githubusercontent.com/com-480-data-visualization/datavis-project-2022-shazam/main/dataset/crawler/data/"

export default {
  name: 'Singer',

  data() {
    return {
      singerName: "Taylor Swift", // DEFAULT

      singerDiscographyData: null, // raw JSON data
      singerProfileData: {image: "https://picsum.photos/200"}, // raw singer info
      singerWordCloudPath: github_base_url + "wordcloud/wordcloud.svg",

      radarRef: null,
      radarChartData: _radarChartData,

      scatterRef: null,
      scatterChartData: _scatterPlotData,

      splineRef: null,
      splineChartData: _splineData,
    }
  },

  methods: {
    async fetchData() {
      this.singerDiscographyData = null

      {
        const res = await fetch(
            github_base_url + "/singers/" + encodeURIComponent(this.singerName) + ".json"
        )
        this.singerDiscographyData = await res.json()

        //   console.log(JSON.stringify(this.singerDiscographyData, null, 2))
      }

      {
        const res = await fetch(
            github_base_url + "/singers/info/" + encodeURIComponent(this.singerName) + ".json"
        )
        this.singerProfileData = await res.json()

        //   console.log(JSON.stringify(this.singerProfileData, null, 2))
      }

      this.processAudioFeature()
    },
    processAudioFeature() {
       var avg = [0.0, 0.0, 0.0, 0.0, 0.0, 0.0]
       var cnt = 0
       var scatterData = []
       var splineData = []
       this.singerDiscographyData.albums.forEach(album => {
           album.tracks.forEach(track => {
               // radar
               avg[0] += track.acousticness
               avg[1] += track.danceability
               avg[2] += track.energy
               avg[3] += track.liveness
               avg[4] += track.speechiness
               avg[5] += track.valence
               cnt += 1

                // scatter graph
               scatterData.push([track.key, track.tempo]) 

               // spline
               splineData.push({
                    name: track.name,
                    shadow: false,
                    data: [
                        track.acousticness,
                        track.danceability,
                        track.energy,
                        track.instrumentalness,
                        track.key, 
                        track.liveness,
                        track.loudness,
                        track.speechiness,
                        track.valence,
                        track.tempo,
                        track.duration_ms / 1000.0,
                        track.time_signature,
                    ]
                })
           })
       });

       avg = avg.map(value => {
           return value / cnt
       })
        this.radarChartData.series = [{
            type: 'area',
            name: "Discography Average",
            data: avg,
        }]
        this.radarRef = Highcharts.chart('radarPlot', this.radarChartData);

        // console.log(scatterData)
        this.scatterChartData.series = [{
            name: 'Data',
            color: 'rgba(119, 152, 191, .5)',
            data: scatterData,
        }]
        this.scatterRef = Highcharts.chart('scatterPlot', this.scatterChartData);

        // console.log(splineData)

        // performance - trim some data
        const maxTracks = 200
        if(splineData.length > maxTracks) {
            var ratio = 1.0 * maxTracks / splineData.length
            splineData = splineData.filter(
                value => Math.random() <= ratio
            )
        }
        this.splineChartData.series = splineData
        // WTF? Doesn't work
        // this.splineRef.update({
        //     series: splineData,
        //     redraw: true, 
        // })
        // this.splineRef.redraw()

        // This is a dirty workaround
        
        this.splineRef = Highcharts.chart('splinePlot', this.splineChartData);
    }
  },

  mounted() {
    this.singerName = this.$route.params['singer'] || "Taylor Swift"
    console.log(this.singerName)
    this.singerWordCloudPath = github_base_url + "wordcloud/" + encodeURIComponent(this.singerName) + ".png"

    this.fetchData()

    this.radarRef = Highcharts.chart('radarPlot', this.radarChartData);
    this.scatterRef = Highcharts.chart('scatterPlot', this.scatterChartData);
    this.splineRef = Highcharts.chart('splinePlot', this.splineChartData);
  },

//   watch: {
//       splinePlotData() {
//           console.log("Data updated")
//           this.splineRef.redraw()
//       }
//   }

  //   head: {script: [
//       {
//         src: "https://code.highcharts.com/highcharts.js",
//         body: true,
//       },{
//         src: "https://code.highcharts.com/modules/data.js",
//         body: true,
//       },{
//         src: "https://code.highcharts.com/modules/exporting.js",
//         body: true,
//       }, {
//         src: "https://code.highcharts.com/modules/parallel-coordinates.js",
//         body: true,
//       }]
//   },

//   computed: {
    // // https://stackoverflow.com/questions/60058188/vue-js-in-computed-i-cant-use-data
    // RadarChartOptions: {
    //     get: function () {
    //         return this.radarChartData
    //     },
    // },
//   },
}
</script>

<template>

<div class="container mx-auto min-h-screen">

    <!-- Button group -->
    <div class="container mx-auto grid grid-cols-3 place-content-center mt-6">
        <div class="flex items-center justify-center">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4" role="group">
                <!-- <client-only placeholder="Loading..."></client-only> -->
                <!-- <img src={{ this.singerProfileData.image }}> -->
                
                <!-- <p></p> -->
            </div>
        </div>
        <div class="flex items-center">
            <div class="relative w-36 h-36">
                <img class="rounded-full border border-gray-100 shadow-sm" v-bind:src="this.singerProfileData.image" alt="Singer image"/>
            </div>
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4" role="group">
                <p class="text-5xl p-6 text-gray-50 text-left">{{ this.singerName }}</p>
            </div>
        </div>
        <div class="flex items-center">
            <span class="w-1 h-1 mx-1.5 rounded-full bg-gray-400"></span>
            <a v-bind:href="this.singerProfileData.spotifyURL" target=”_blank” class="text-sm font-medium underline hover:no-underline text-white">{{ this.singerProfileData.followers || 0 }} Followers on Spotify</a>
        </div>
    </div>

    <!-- word cloud -->
    <div class="container mx-auto grid grid-cols-2 place-content-center mt-6">
        <div class="flex items-center justify-center">
            <img v-bind:src="this.singerWordCloudPath" alt="Word cloud" class="flex-no-shrink fill-current"/>
        </div>
        <div class="container self-center">
            <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-left">
                Top singers favirote words
            </h3>
            <p class="text-xl text-gray-400 flex-grow text-left">
                Let’s have a look on the singer’s favorite words! The larger the font size of a word is, the more times it appears in the lyrics
            </p>
        </div>
    </div>

    <!-- radar graph -->
    <div class="container mx-auto grid grid-cols-2 place-content-center mt-6">
        <div class="container self-center">
            <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-right">
                The audio feature of the discography
            </h3>
            <p class="text-xl text-gray-400 flex-grow text-right">Here, the artist’s musical characteristics are revealed! we computed the average value of all songs from the singer. </p>
            <br>
            <p class="text-sm text-gray-400 flex-grow text-right">Acousticness: confidence measures whether the songs have acoustic instruments</p>
            <p class="text-sm text-gray-400 flex-grow text-right">Danceability: how suitable the songs are for dancing</p>
            <p class="text-sm text-gray-400 flex-grow text-right">Energy: a perceptual measure of intensity and activity</p>
            <p class="text-sm text-gray-400 flex-grow text-right">Liveness: detects the presence of an audience in the recording</p>
            <p class="text-sm text-gray-400 flex-grow text-right">Speechiness: detects the presence of spoken words in a track.</p>
            <p class="text-sm text-gray-400 flex-grow text-right">Valence: how positive the emotions in songs are</p>
        </div>
        <div class="flex items-center justify-center">
            <div id="radarPlot"></div>
        </div>
    </div>

    <!-- scatter graph -->
    <div class="container mx-auto grid grid-cols-2 place-content-center mt-6">
        <div class="flex items-center justify-center">
            <div id="scatterPlot"></div>
        </div>
        <div class="container self-center">
            <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-left mt-3">
                The key and pace
            </h3>
            <p class="text-xl text-gray-400 flex-grow text-left">
                Does the singer prefers fast tempo? In which key are songs usually composed? What are the relationships between these two audio features? Check this scatter plot to have an insight!
            </p>
        </div>
    </div>

    <!-- pararallel coordinate -->
    <div class="container mx-auto grid grid-cols-2 place-content-center mt-6">
        <div class="container self-center">
            <!-- <ul class="flex flex-wrap text-xs font-medium -m-1">
                <li class="m-1">
                    <button class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-600 hover:bg-purple-700 transition duration-150 ease-in-out">Energy</button>
                </li>
                <li class="m-1">
                    <button class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-blue-500 hover:bg-purple-700 transition duration-150 ease-in-out">Dancibility</button>
                </li>
                <li class="m-1">
                    <button class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-400 hover:bg-yellow-700 transition duration-150 ease-in-out">Instrumentalness</button>
                </li>
                <li class="m-1">
                    <button class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-500 hover:bg-green-700 transition duration-150 ease-in-out">Liveness</button>
                </li>
                <li class="m-1">
                    <button class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-400 hover:bg-purple-700 transition duration-150 ease-in-out">Loudness</button>
                </li>
                <li class="m-1">
                    <button class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-indigo-500 hover:bg-purple-700 transition duration-150 ease-in-out">Speechiness</button>
                </li>
                <li class="m-1">
                    <button class="inline-flex text-center text-gray-100 py-1 px-3 rounded-full bg-purple-300 hover:bg-purple-700 transition duration-150 ease-in-out">Valence</button>
                </li>
            </ul> -->
            <h3 class="text-2xl lg:text-3xl font-bold leading-tight mb-2 text-gray-100 text-right mt-3">
                The evolution of the singer's style
            </h3>
            <p class="text-xl text-gray-400 flex-grow text-right">
                People changes style from time to time, so does your favorite singer
            </p>
        </div>
        <div class="flex items-center justify-center">
            <div id="splinePlot"></div>
        </div>
    </div>

    <!-- back button -->
    <div class="container mx-auto grid grid-cols-3 place-content-center mt-6">
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