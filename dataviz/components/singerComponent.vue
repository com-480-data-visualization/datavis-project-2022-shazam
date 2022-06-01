<script>
const radarChartData = {
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

export default {
  name: 'Singer',

  computed: {
    RadarChartOptions: () => (radarChartData),
  },
}
</script>

<template>

<div class="container mx-auto min-h-screen">

    <!-- Button group -->
    <div class="mx-auto grid grid-cols-2 place-content-center mt-6">
        <div class="flex items-center justify-center">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4" role="group">
                <p class="text-2xl p-6 text-gray-50">Singer Profile Image</p>
            </div>
        </div>
        <div class="flex items-center justify-center">
            <div class="inline-flex shadow-md hover:shadow-lg focus:shadow-lg gap-4" role="group">
                <p class="text-2xl p-6 text-gray-50">Singer name</p>
                <p class="text-2xl p-6 text-gray-50">Singer top songs</p>
            </div>
        </div>
    </div>

    <!-- word cloud -->
    <div class="mx-auto grid grid-cols-3 place-content-center mt-6">
        <div></div>
        <div class="flex items-center justify-center">
            <img src = "~/assets/wordcloud.svg" alt="My Happy SVG"/>
        </div>
        <div></div>
    </div>

    <!-- radar graph -->
    <div class="mx-auto grid grid-cols-3 place-content-center mt-6">
        <div></div>
        <div class="flex items-center justify-center">
            <client-only><highcharts :options="RadarChartOptions" ref="chart"/></client-only>
        </div>
        <div></div>
    </div>

    <!-- scatter graph -->
    <div class="mx-auto grid grid-cols-3 place-content-center mt-6">
        <div></div>
        <div class="flex items-center justify-center">
            <p class="text-white">Audio feature over time scatter graph</p>
        </div>
        <div></div>
    </div>

    <!-- back button -->
    <div class="mx-auto grid grid-cols-3 place-content-center mt-6">
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