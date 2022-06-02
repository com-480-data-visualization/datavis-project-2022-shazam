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

export default {
  name: 'WeeklyTimeline',

  computed: {
    bubbleChartOptions: () => (bubbleChartData),
  },

  mounted() {
    // DOM element where the Timeline will be attached
    var container = document.getElementById('visualization');

    // Create a DataSet (allows two way data-binding)
    var items = new vis.DataSet([
    {id: 1, content: 'item 1', start: '2014-04-20'},
    {id: 2, content: 'item 2', start: '2014-04-14'},
    {id: 3, content: 'item 3', start: '2014-04-18'},
    {id: 4, content: 'item 4', start: '2014-04-16', end: '2014-04-19'},
    {id: 5, content: 'item 5', start: '2014-04-25'},
    {id: 6, content: 'item 6', start: '2014-04-27', type: 'point'}
    ]);

    // Configuration for the Timeline
    var options = {};

    // Create a Timeline
    var timeline = new vis.Timeline(container, items, options);
  },

  head: {
    script: [
      {
        src: "https://unpkg.com/vis-timeline@latest/standalone/umd/vis-timeline-graph2d.min.js",
      },
    ],
    link: [
        { 
            rel: 'stylesheet', 
            href: 'https://unpkg.com/vis-timeline@latest/styles/vis-timeline-graph2d.min.css' 
        }
    ]
  }
}
</script>

<style type="text/css">
    #visualization {
      width: 600px;
      height: 400px;
      border: 1px solid lightgray;
    }
</style>

<template>

<div class="container mx-auto min-h-screen">
    
    <!-- bubble -->
    <div class="container mx-auto grid grid-cols-1 place-content-center m-6">
        <div></div>
        <div class="flex items-center justify-center">
            
            <client-only><highcharts :options="bubbleChartOptions" ref="chart"/></client-only>

        </div>
        <div></div>
    </div>

    <!-- timeline scroller -->
    <div class="container mx-auto grid grid-cols-3 place-content-center mt-6">
        <div></div>
        <div class="flex items-center justify-center">
            <div id="visualization"></div>
        </div>
        <div></div>
    </div>

    <!-- leaderboard -->
    <div class="container mx-auto grid grid-cols-3 place-content-center mt-6">
        <div></div>
        <div class="flex items-center justify-center">
            <p class="text-white">Leaderboard</p>
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
</div>

</template>