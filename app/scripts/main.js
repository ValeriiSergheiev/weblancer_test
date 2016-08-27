$(document).ready(function() {

  // Pie Chart
  $(function () {
    $('#chart-container').highcharts({
      colors: ['#ffc815', '#fff', '#a3cd3b', '#fff', '#0093d7'],
      chart: {
        plotBackgroundColor: null,
        //backgroundColor: "#666",
        //borderColor: "red",
        plotBorderWidth: 0,
        plotShadow: false,
        margin: [0, 0, 0, 0],
        spacing: [0, 0, 0, 0],
        height: 130,
        width: 255
      },
      exporting: { enabled: false },
      credits: {
        enabled: false
      },
      title: {
        text: null,
        align: 'center',
        verticalAlign: 'middle',
        y: 40
      },
      tooltip: {
        //pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        enabled: false
      },
      plotOptions: {
        pie: {
          size: 240,
          innerSize: '90%',
          borderColor: "transparent",
          dataLabels: {
            enabled: false,
            distance: -50,
            style: {
              fontWeight: 'bold',
              color: 'white',
              textShadow: '0px 1px 2px black'
            }
          },
          startAngle: -90,
          endAngle: 90,
          center: ['50%', '117%']
        }
      },
      series: [{
        type: 'pie',
        name: 'Browser share',
        states: {
          hover: {
            enabled: false
          }
        },
        innerSize: '65%',
        data: [
        ['', 32],
        ['', 2],
        ['', 32],
        ['', 2],
        ['', 32],
        {
          name: 'Proprietary or Undetectable',
          y: 0.2,
          dataLabels: {
            enabled: false
          }
        }
        ]
      }]
    });
  });
  // End Pie Chart

  //Counter
  var options_counter = {
      useEasing : true,
      useGrouping : true,
      separator : ',',
      decimal : '.',
      prefix : '',
      suffix : '%'
  };
  var count_js = new CountUp("counter", 0, 75, 0, 2.5, options_counter);
  count_js.start();
  //End Counter

});
