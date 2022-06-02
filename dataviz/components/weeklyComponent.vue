<script>
const bubbleChartData = {
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

let barChartData = {
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

export default {
  name: 'WeeklyTimeline',

  computed: {
    bubbleChartOptions: () => (bubbleChartData),
    BarChartOptions: () => (barChartData),
  },

  data() {
    return {
      year: "Select Year",
      week: "Select Week",
    }
  },

  methods: {
    updateYear(e) {
      this.year = e.path[0].innerHTML
      console.log(this.year)
    },
    updateWeek(e) {
      this.week = e.path[0].innerHTML
      console.log(this.week)
    },
  },

//   mounted() {
//     // DOM element where the Timeline will be attached
//     var container = document.getElementById('visualization');

//     // Create a DataSet (allows two way data-binding)
//     var items = new vis.DataSet([
//     {id: 1, content: 'item 1', start: '2014-04-20'},
//     {id: 2, content: 'item 2', start: '2014-04-14'},
//     {id: 3, content: 'item 3', start: '2014-04-18'},
//     {id: 4, content: 'item 4', start: '2014-04-16', end: '2014-04-19'},
//     {id: 5, content: 'item 5', start: '2014-04-25'},
//     {id: 6, content: 'item 6', start: '2014-04-27', type: 'point'}
//     ]);

//     // Configuration for the Timeline
//     var options = {};

//     // Create a Timeline
//     var timeline = new vis.Timeline(container, items, options);
//   },

//   head: {
//     script: [
//       {
//         src: "https://unpkg.com/vis-timeline@latest/standalone/umd/vis-timeline-graph2d.min.js",
//       },
//     ],
//     link: [
//         { 
//             rel: 'stylesheet', 
//             href: 'https://unpkg.com/vis-timeline@latest/styles/vis-timeline-graph2d.min.css' 
//         }
//     ]
//   }
}
</script>



<!-- <style type="text/css">
    #visualization {
      width: 600px;
      height: 400px;
      border: 1px solid lightgray;
    }
</style> -->

<template>

<div class="container mx-auto min-h-screen">

    <!-- timeline scroller -->
    <div class="container mx-auto grid grid-cols-1 place-content-center mt-6">
        <div></div>
        <div class="flex items-center justify-center">
            <!-- <div id="visualization"></div> -->

            <div>
                <!-- https://stackoverflow.com/questions/56531990/vue-how-to-change-dropdown-text-properly -->
                <!-- You can bind a dynamic value for text prop on <b-dropdown> and change it with the click event of <b-dropdown-item> -->
                <b-dropdown id="dropdown-1" :text="this.year" variant="primary" class="m-md-2">
                    <b-dropdown-item href="#" @click="updateYear($event)" active>2018</b-dropdown-item>
                    <b-dropdown-item href="#" @click="updateYear($event)">2019</b-dropdown-item>
                    <b-dropdown-item href="#" @click="updateYear($event)">2020</b-dropdown-item>
                    <b-dropdown-item href="#" @click="updateYear($event)">2021</b-dropdown-item>
                    <b-dropdown-item href="#" @click="updateYear($event)">2022</b-dropdown-item>
                </b-dropdown>
                <b-dropdown id="dropdown-1" :text="this.week" variant="primary" class="m-md-2">
                    <b-dropdown-item href="#" @click="updateWeek($event)" active>1</b-dropdown-item>
                    <b-dropdown-item href="#" @click="updateWeek($event)">2</b-dropdown-item>
                    <b-dropdown-item href="#" @click="updateWeek($event)">3</b-dropdown-item>
                </b-dropdown>
            </div>

        </div>
        <div></div>
    </div>
    
    <!-- bubble -->
    <div class="container mx-auto grid grid-cols-1 place-content-center mt-6">
        <div class="flex items-center justify-center">
            
            <client-only><highcharts :options="bubbleChartOptions" ref="chart"/></client-only>

        </div>
    </div>

    <!-- leaderboard -->
    <div class="container mx-auto grid grid-cols-1 place-content-center mt-6">
        <div></div>
        <div class="flex items-center justify-center">
            <client-only><highcharts :options="BarChartOptions" ref="chart"/></client-only>
        </div>
        <div></div>
    </div>

    <!-- TMP -->
    <div class="container mx-auto grid grid-cols-3 place-content-center mt-6">
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