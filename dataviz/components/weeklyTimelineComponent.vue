<script>
const dataset = {
        chart: {
            type: 'packedbubble',
            height: '100%',
            backgroundColor: 'transparent',
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
                value: 400
            }, {
                name: "Lady Gaga",
                value: 300
            }]
        }]
  }

export default {
  name: 'WeeklyTimeline',

  computed: {
    chartOptions: () => (dataset),
  }
}
</script>

<template>

<div class="container mx-auto min-h-screen">
    
    <!-- bubble -->
    <div class="container mx-auto grid grid-cols-1 place-content-center m-6">
        <div></div>
        <div class="flex items-center justify-center">
            
            <client-only><highcharts :options="chartOptions" ref="chart"/></client-only>

        </div>
        <div></div>
    </div>

    <!-- timeline scroller -->
    <div class="container mx-auto grid grid-cols-3 place-content-center m-6">
        <div></div>
        <div class="flex items-center justify-center">
            <p class="text-white">Timeline</p>
        </div>
        <div></div>
    </div>

    <!-- leaderboard -->
    <div class="container mx-auto grid grid-cols-3 place-content-center m-6">
        <div></div>
        <div class="flex items-center justify-center">
            <p class="text-white">Leaderboard</p>
        </div>
        <div></div>
    </div>

    <!-- TMP -->
    <div class="container mx-auto grid grid-cols-3 place-content-center m-6">
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