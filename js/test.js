var data, data2;
angular.module('testApp', ['ngMaterial']).controller('sampleController', ['$scope', '$http', function($scope, $http) {

    $scope.isMoreVisible1 = isMoreVisible2 = isMoreVisible3 = false;

    $http.get("https://api.myjson.com/bins/5bdb3").then(function(response) {
        data = response.data;

        $scope.cards = [{
            yogaName: data[0].Name,
            chart: 'container1',
            totalMonthlySales: data[0].TotalMonthlySales

        }, {
            yogaName: data[1].Name,
            chart: 'container2',
            totalMonthlySales: data[1].TotalMonthlySales

        }, {
            yogaName: data[2].Name,
            chart: 'container3',
            totalMonthlySales: data[2].TotalMonthlySales
        }];

        $scope.yogaClasses = data[0].Name;
        $scope.yogaPrivates = data[1].Name;
        $scope.yogaDuets = data[2].Name;

        $scope.openTotalMonthlySales = data[3].TotalMonthlySales;
        $scope.yogaTotalMonthlySales = data[4].TotalMonthlySales;

        $scope.openTotalMonthlyattendance = data[3].MonthlyAttendance;
        $scope.yogaTotalMonthlyattendance = data[4].MonthlyAttendance;

    });

    $http.get("https://api.myjson.com/bins/47axv").then(function(response) {
        data2 = response.data;
        console.log()

    });

    $scope.more = function(no) {

        if (no == 1) {
            $("#MonthlyUnlimited1").html(data2[0].Sales);
            $("#StudentoneMonth1").html(data2[1].Sales);
            $("#Singlevisit1").html(data2[2].Sales);
            $("#tenthPass1").html(data2[3].Sales);
            $("#singStudent1").html(data2[4].Sales);
            $("#twentyPass1").html(data2[5].Sales);
            $("#fifthPass1").html(data2[6].Sales);

            $scope.isMoreVisible1 = $scope.isMoreVisible1 ? false : true;
            $("#btn_1").html($scope.isMoreVisible1 ? "less" : "More");

        } else if (no == 2) {
            $("#MonthlyUnlimited2").html(data2[7].Sales);
            $("#StudentoneMonth2").html(data2[8].Sales);
            $("#Singlevisit2").html(data2[9].Sales);
            $("#tenthPass2").html(data2[10].Sales);
            $("#singStudent2").html(data2[11].Sales);
            $("#twentyPass2").html(data2[12].Sales);
            $("#fifthPass2").html(data2[13].Sales);
            $scope.isMoreVisible2 = $scope.isMoreVisible2 ? false : true;
            $("#btn_2").html($scope.isMoreVisible2 ? "less" : "More");
        }
        else {
            $("#MonthlyUnlimited3").html(data2[14].Sales);
            $("#StudentoneMonth3").html(data2[15].Sales);
            $("#Singlevisit3").html(data2[16].Sales);
            $("#tenthPass3").html(data2[17].Sales);
            $("#singStudent3").html(data2[18].Sales);
            $("#twentyPass3").html(data2[19].Sales);
            $("#fifthPass3").html(data2[20].Sales);
            $scope.isMoreVisible3 = $scope.isMoreVisible3 ? false : true;
            $("#btn_3").html($scope.isMoreVisible3 ? "less" : "More");
        }

    }

    $scope.$on('onRepeatLast', function(scope, element, attrs) {

        Highcharts.chart('container1', {
            chart: {
                type: 'column',
                width: 300,
                height: 300

            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: false
                    },
                    enableMouseTracking: false
                }
            },
            showInLegend: false,

            title: {
                text: 'Sales by Month'
            },
            credits: {
                enabled: false
            },

            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
            },
            yAxis: {
                labels: {
                    enabled: false
                },

            },

            series: [{
                showInLegend: false,
                data: data[0].Sales.CurrentYear,
                colors: ['#ff69b4'],
                colorByPoint: true
            }, {
                data: data[0].Sales.PreviousYear,
                showInLegend: false
            }]
        });
        Highcharts.chart('container2', {
            chart: {
                type: 'column',
                width: 300,
                height: 300
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: false
                    },
                    enableMouseTracking: false
                }
            },
            showInLegend: false,
            title: {
                text: 'Sales by Month'
            },

            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
            },
            yAxis: {
                labels: {
                    enabled: false
                },

            },

            series: [{
                showInLegend: false,
                data: data[1].Sales.CurrentYear,
                colors: ['#ff69b4'],
                colorByPoint: true
            }, {
                showInLegend: false,
                data: data[1].Sales.PreviousYear
            }]
        });

        Highcharts.chart('container3', {
            chart: {
                type: 'column',
                width: 300,
                height: 300
            },
            plotOptions: {
                column: {
                    dataLabels: {
                        enabled: false
                    },
                    enableMouseTracking: false
                }
            },
            showInLegend: false,

            title: {
                text: 'Sales by Month'
            },

            xAxis: {
                categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul']
            },
            yAxis: {
                labels: {
                    enabled: false
                },

            },

            series: [{
                showInLegend: false,
                data: data[2].Sales.CurrentYear,
                colors: ['#ff69b4'],
                colorByPoint: true
            }, {
                showInLegend: false,
                data: data[2].Sales.PreviousYear
            }]
        });

    });

}
])
.directive('onLastRepeat', function() {
    return function(scope, element, attrs) {
        if (scope.$last)
            setTimeout(function() {
                scope.$emit('onRepeatLast', element, attrs);
            }, 1);
    }
    ;
});
