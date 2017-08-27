var item = ['x'];
for (var i = 0; i< 47 ; i++) {
    item.push(new Date(2017, 0, i).getTime());
}

var values = ['value'];
for (var i = 0; i< 47; i++) {
    values.push(Math.round( Math.random() * 200 ));
}

console.log(item);
var chart = c3Chart.generate({
    data: {
    	x: 'x',	
        columns: [
            item,
            values
        ],
        types: {data1: 'area-spline'},
      selection: {
        enabled: true,
        draggable: true,
      },

    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                count: 6,
                centerd: true,
                rotate: 60,
                format:'%Y-%m-%d'
            }
        }
    },
    multiselection: true,
    multiselectionCount: 2,
    multiselectionCallback: selectionEnd.bind(this)
});

var ranvalue = undefined;
var data = undefined;

aa = function() {
    console.log('aa');
    console.log(chart.selected());
}

remove = function() {
    chart.cancelMultiselection(ranvalue, data);
}

function selectionEnd(config, date, selectedData) {
    // console.log(arguments[1]);
    // console.log(config.axis.getXAxisTickFormat());
    // console.log(chart.selected());
    ranvalue = config.randomUid;
    data = selectedData;
    console.log(date);
    // console.log(window.event);
}
