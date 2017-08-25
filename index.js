var chart = c3Chart.generate({
    data: {
    		names: {
        	data1: 'd100',
        },
        columns: [
            ['data1', 30, 200, 100, 400, 150, 250],
        ],
        axes: {
            data1: 'y',
        },
        types: {data1: 'area-spline'},
      selection: {
        enabled: true,
        draggable: true,
      },

    },
    axis: {
        x: {
            type: 'category',
            categories: ['2016-01-01', '2016-01-02', '2016-01-03', '2016-01-04', '2016-01-05', '2016-01-06'],
            tick: {
                count: 4
            }
        }
    },
    multiselection: true,
    multiselectionCount: 2,
    multiselectionCallback: selectionEnd.bind(this)
});

var ranvalue = undefined;

aa = function() {
    console.log('aa');
    console.log(chart.selected());
}

remove = function() {
    console.log(ranvalue);
    console.log(chart);
    chart.cancelMultiselection(ranvalue);
}

function selectionEnd(config, date, selectedData) {
    // console.log(arguments[1]);
    // console.log(config.axis.getXAxisTickFormat());
    // console.log(chart.selected());
    console.log(config);
    console.log(date);
    ranvalue = config.randomUid;
    console.log(selectedData);
    // console.log(window.event);
}

