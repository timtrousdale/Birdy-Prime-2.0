/*globals angular */

var app = angular.module('birdApp', []);
app.controller('birdController', ['$scope', function ($scope) {
    //    var vm = this;
    var imagesArray = ["bird_red_xs.png", "bird_green_xs.png", "bird_pink_xs.png", "bird_yellow_xs.png"];

    $scope.birdCount = 0;
    $scope.data = [];
    var nRows = 3;
    var nColumns = 12;
    var nChanceReduction = 0.30;
    $scope.BP = "Birdy Prime!";
    //0-0.5 chance range; at 0.5 Birds will not populate
    var aBirds = createArray(nRows, nColumns);

    $scope.birds = function () {
        console.log("birds was executed");
        $scope.birdCount = 0;
        for (var i = 0; i < aBirds.length; i++) {
            for (var j = 0; j < aBirds[i].length; j++) {
                aBirds[i][j] = {
                    value: displayImage()
                };
            }
        }
        $scope.birdTruth = primeTime($scope.birdCount);
    };

    $scope.list = [];
    $scope.userTruth = "???";
    $scope.score = function () {
        if ($scope.userTruth == $scope.birdTruth) {
            $scope.list.push("Winner!");
            $scope.text = "true or false?";
            $scope.birds();
        }

    };

    function createData(rows) {
        for (var i = 0; i < rows; i++) {
            var row = "row" + (i + 1);
            $scope.data.push({
                value: row,
                row: aBirds[i]
            });
        }

    }

    createData(nRows);
    console.log($scope.data);

    function createArray(length) {
        var arr = new Array(length || 0),
            i = length;
        if (arguments.length > 1) {
            var args = Array.prototype.slice.call(arguments, 1);
            while (i--) {
                arr[length - 1 - i] = createArray.apply(this, args);
            }
        }
        return arr;
    }

    function pickBird() {
        var num = Math.floor(Math.random() * imagesArray.length);
        return imagesArray[num];
    }

    function birdChance() {
        return Math.round(Math.random() - nChanceReduction);
    }

    function displayImage() {
        if (birdChance()) {
            $scope.birdCount++;
            $scope.birdTotalCount++;
            //console.log(primeTime($scope.birdCount));
            return pickBird();
        } else {
            return "blank.png";
        }
    }

    function primeTime(num) {
        if (num > 3) {
            if (num % 2 && num % 3 !== 0) {
                return "true";
            } else {
                return "false";
            }
        } else {
            return "true";
        }
    }

    $scope.birds();

}]);