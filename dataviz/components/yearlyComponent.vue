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

let barChartData = {
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
  name: 'Yearly',

  computed: {
    BarChartOptions: () => (barChartData),
    RadarChartOptions: () => (radarChartData),
  },
}
</script>

<template>

<div class="mx-auto min-h-screen bg-gray-900">
    
    <!-- horizontal bar chart -->
    <div class="container mx-auto grid grid-cols-3 place-content-center mt-6">
        <div></div>
        <div class="flex items-center justify-center">
            <client-only><highcharts :options="BarChartOptions" ref="chart"/></client-only>
        </div>
        <div></div>
    </div>

    <!-- word cloud -->
    <div class="container mx-auto grid grid-cols-3 place-content-center mt-6">
        <div></div>
        <div class="flex items-center justify-center">
            <img src = "~/assets/wordcloud.svg" alt="My Happy SVG"/>
        </div>
        <div></div>
    </div>

    <!-- radar graph -->
    <div class="container mx-auto grid grid-cols-3 place-content-center mt-6">
        <div></div>
        <div class="flex items-center justify-center">
            <client-only><highcharts :options="RadarChartOptions" ref="chart"/></client-only>
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