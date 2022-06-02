<script>
const bubbleChartData = {
    chart: {
        type: 'packedbubble',
        height: '50%',
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
            minSize: '30%',
            maxSize: '120%',
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
        }]
    }]
}

let barChartData = {
    chart: {
        type: 'bar',
        backgroundColor: 'transparent',
    },
    title: {
        text: 'Top 20 Songs of the week',
        style: {
            color: 'white',
            fontWeight: 'normal'
        }
    },
    subtitle: {
        text: 'By number of songs on billboard',
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
      this.year = e.target.value
    },
    updateWeek(e) {
      this.week = e.target.value
    }
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
  head: {
    script: [
      {
        src: "https://unpkg.com/flowbite@1.4.7/dist/flowbite.js",
      },
    ],
    link: [
        { 
            rel: 'stylesheet', 
            href: 'https://unpkg.com/flowbite@1.4.7/dist/flowbite.min.css' 
        }
    ]
  }
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
    
    <!-- bubble -->
    <div class="container mx-auto grid grid-cols-1 place-content-center mt-6">
        <div class="flex items-center justify-center">
            
            <client-only><highcharts :options="bubbleChartOptions" ref="chart"/></client-only>

        </div>
    </div>

    <!-- timeline scroller -->
    <div class="container mx-auto grid grid-cols-1 place-content-center mt-6">
        <div></div>
        <div class="flex items-center justify-center">
            <!-- <div id="visualization"></div> -->
            
            <button id="dropdownYearButton" data-dropdown-toggle="dropdownYear" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"> {{ this.year }} <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
            <!-- Dropdown menu -->
            <div id="dropdownYear" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownYearButton">
                <li>
                    <button @click="updateYear($event)" value="2018" class="flex w-full mx-auto px-4 py-2 hover:bg-gray-600 hover:text-white text-center">
                        2018
                    </button>
                </li>
                 <li>
                    <button @click="updateYear($event)" value="2019" class="flex w-full mx-auto px-4 py-2 hover:bg-gray-600 hover:text-white text-center">
                        2019
                    </button>
                </li>
                 <li>
                    <button @click="updateYear($event)" value="2020" class="flex w-full mx-auto px-4 py-2 hover:bg-gray-600 hover:text-white text-center">
                        2020
                    </button>
                </li>
                 <li>
                    <button @click="updateYear($event)" value="2020" class="flex w-full mx-auto px-4 py-2 hover:bg-gray-600 hover:text-white text-center">
                        2021
                    </button>
                </li>
                 <li>
                    <button @click="updateYear($event)" value="2020" class="flex w-full mx-auto px-4 py-2 hover:bg-gray-600 hover:text-white text-center">
                        2022
                    </button>
                </li>

                </ul>
            </div>

            <button id="dropdownWeekButton" data-dropdown-toggle="dropdownWeek" class="ml-3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button"> {{ this.week }} <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
            <!-- Dropdown menu -->
            <div id="dropdownWeek" class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700">
                <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownWeekButton">
                <li>
                    <button @click="updateWeek($event)" value="1" class="flex w-full mx-auto px-4 py-2 hover:bg-gray-600 hover:text-white text-center">
                        1
                    </button>
                </li>
                 <li>
                    <button @click="updateWeek($event)" value="2" class="flex w-full mx-auto px-4 py-2 hover:bg-gray-600 hover:text-white text-center">
                        2
                    </button>
                </li>
                 <li>
                    <button @click="updateWeek($event)" value="3" class="flex w-full mx-auto px-4 py-2 hover:bg-gray-600 hover:text-white text-center">
                        3
                    </button>
                </li>
                 <li>
                    <button @click="updateWeek($event)" value="4" class="flex w-full mx-auto px-4 py-2 hover:bg-gray-600 hover:text-white text-center">
                        4
                    </button>
                </li>
                 <li>
                    <button @click="updateWeek($event)" value="5" class="flex w-full mx-auto px-4 py-2 hover:bg-gray-600 hover:text-white text-center">
                        5
                    </button>
                </li>

                </ul>
            </div>

        </div>
        <div></div>
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

            <div class="gap-6 inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4" role="group">
                <NuxtLink to="/yearly">
                    <button class="border border-gray-600 bg-gray-800 text-white font-medium text-lg focus:outline-none hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700 rounded-full px-5 py-2.5 mr-2 mb-2">To Yearly Report</button>
                </NuxtLink>
            </div>
        </div>
        <div></div>
    </div>
</div>

</template>