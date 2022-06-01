<script>
const dataset = {
      chart: {
            type: 'packedbubble',
            height: '100%'
        },
        title: {
            text: 'Top singers of the week'
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
                        color: 'black',
                        textOutline: 'none',
                        fontWeight: 'normal'
                    }
                }
            }
        },
        series: [{
            name: 'Singers',
            data: [{
                name: '陳奕迅',
                value: 500
            }, {
                name: '周杰倫',
                value: 400
            }, {
                name: "啊哈哈",
                value: 300
            }]
        }]
  }

export default {
  name: 'YearlyTimeline',

  data() {
    return {
        chartOptions: dataset,
    };
  }
}
</script>

<template>

<div>

    <!-- bubble -->
    <div class="mx-auto grid grid-cols-1 place-content-center m-6">
        <div class="flex items-center justify-center">
            
            <client-only><highcharts :options="chartOptions" ref="chart"/></client-only>

        </div>
    </div>

    <!-- timeline scroller -->
    <div class="mx-auto grid grid-cols-3 place-content-center m-6">
        <div></div>
        <div class="flex items-center justify-center">
            <p class="text-white">Timeline</p>
        </div>
        <div></div>
    </div>

    <!-- leaderboard -->
    <div class="mx-auto grid grid-cols-3 place-content-center m-6">
        <div></div>
        <div class="flex items-center justify-center">
            <p class="text-white">Leaderboard</p>
        </div>
        <div></div>
    </div>

    <!-- TMP -->
    <div class="mx-auto grid grid-cols-3 place-content-center m-6">
        <div></div>
        <div class="flex items-center justify-center">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4" role="group">
                <NuxtLink to="/yearly">
                    <button class="max-w-sm bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">To Yearly</button>
                </NuxtLink>
            </div>
        </div>
        <div></div>
    </div>
</div>

</template>