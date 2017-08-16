Highcharts.chart('container', {
    xAxis: {
        min: 0,
        max: 100,
        title: {
            text: '% of Campaign Flight'
        }
    },
    yAxis: {
        min: 3.2,
        title: {
            text: 'Time Spent (seconds)'
        }
    },
    title: {
        text: 'Average TOS over Campaign Flight, Significantly Optimized Campaigns'
    },
    series: [{
        type: 'line',
        name: 'r\u00B2=0.81',
        data: [[0, 3.5], [100, 4]],
        marker: {
            enabled: false
        },
        states: {
            hover: {
                lineWidth: 0
            }
        },
        enableMouseTracking: false
    }, {
        type: 'scatter',
        name: 'Observations',
        data: [
          [10, 3.55],
          [22, 3.62],
          [36, 3.59],
          [42, 3.75],
          [58, 3.63],
          [65, 3.90],
          [78, 3.92],
          [84, 4.05],
          [100, 3.85]
        ],
        marker: {
            radius: 4
        }
    }]
});