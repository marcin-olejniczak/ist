(function(){
    Chart.defaults.global.responsive = true;
    var canvas = $('<canvas/>').addClass('bg_chart');
    $('.inner').append(canvas);
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "My First dataset",
                fillColor: "rgba(227,236,213,0.9)",
                strokeColor: "rgba(227,236,213,1)",
                pointColor: "rgba(227,236,213,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(220,220,220,1)",
                data: [65, 59, 72, 76, 56, 55, 40]
            },
            {
                label: "My Second dataset",
                fillColor: "rgba(241,166,166,1)",
                strokeColor: "rgba(241,166,166,1)",
                pointColor: "rgba(241,166,166,1)",
                pointStrokeColor: "#fff",
                pointHighlightFill: "#fff",
                pointHighlightStroke: "rgba(151,187,205,1)",
                data: [28, 48, 40, 80, 10]
            }
        ]
    };
    var options = {
        ///Boolean - Whether grid lines are shown across the chart
        scaleShowGridLines : false,
        //String - Colour of the grid lines
        scaleGridLineColor : "rgba(0,0,0,.05)",
        //Number - Width of the grid lines
        scaleGridLineWidth : 0,
        //Boolean - Whether to show horizontal lines (except X axis)
        scaleShowHorizontalLines: false,
        //Boolean - Whether to show vertical lines (except Y axis)
        scaleShowVerticalLines: false,
        scaleOverride: true, 
        scaleStartValue: 0, 
        scaleStepWidth: 1, 
        scaleSteps: 100,
        //Boolean - Whether the line is curved between points
        bezierCurve : true,
        //Number - Tension of the bezier curve between points
        bezierCurveTension : 0.1,
        //Boolean - Whether to show a dot for each point
        pointDot : false,
        //Number - Radius of each point dot in pixels
        pointDotRadius : 4,
        //Number - Pixel width of point dot stroke
        pointDotStrokeWidth : 1,
        //Number - amount extra to add to the radius to cater for hit detection outside the drawn point
        pointHitDetectionRadius : 20,
        //Boolean - Whether to show a stroke for datasets
        datasetStroke : true,
        //Number - Pixel width of dataset stroke
        datasetStrokeWidth : 2,
        //Boolean - Whether to fill the dataset with a colour
        datasetFill : true,
        //String - A legend template
        legendTemplate : function(){ return null;},
        multiTooltipTemplate:function(){return null;},
        animation: false,
        scaleFontSize: 0,

    };
    $('.practice_item .inner canvas').each(function(){
        var canvas = $(this);
        var ctx = canvas.get(0).getContext("2d");
        var myNewChart = new Chart(ctx).Line(data, options);
    });
})();