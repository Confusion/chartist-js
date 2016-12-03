var data = Chartist.times(52).reduce(function(data, _, index) {
  data.labels.push(index + 1);
  data.series.forEach(function(series) {
    series.push(Math.random() * 100)
  });

  return data;
}, {
  labels: [],
  series: Chartist.times(4).map(function() { return [] })
});

var options = {
  showLine: false,
  axisX: {
    labelInterpolationFnc: function(value, index) {
      return index % 13 === 0 ? 'W' + value : null;
    }
  }
};

var responsiveOptions = [
  ['screen and (min-width: 640px)', {
    axisX: {
      labelInterpolationFnc: function(value, index) {
        return index % 4 === 0 ? 'W' + value : null;
      }
    }
  }]
];

new Chartist.Line('.ct-chart', data, options, responsiveOptions);
