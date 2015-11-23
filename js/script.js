/*globals angular */

var app = angular.module('birdApp', []);
app.controller('birdController', ['$scope', function ($scope) {
    //    var vm = this;
    var imagesArray = ["red", "green", "pink", "yellow"];
    $scope.trump = "";
    $scope.birdCount = 0;
    $scope.data = [];
    var nRows = 3;
    var nColumns = 12;
    var nChanceReduction = 0.30;
    $scope.BP = "Birdy Prime!";
    //0-0.5 chance range; at 0.5 Birds will not populate
    var aBirds = createArray(nRows, nColumns);

    $scope.birds = function () {
        // console.log("birds was executed");
        $scope.birdCount = 0;
        $scope.trump = pickBird();
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
    $scope.userScore = 0;
    $scope.score = function () {
        if ($scope.userTruth === $scope.birdTruth) {
            $scope.userScore++;
            $scope.birds();


        } else {
            $scope.birds();
            $scope.userScore--;
        }


    };

    $scope.createData = function (rows) {
        for (var i = 0; i < rows; i++) {
            var row = "row" + (i + 1);
            $scope.data.push({
                value: row,
                row: aBirds[i]
            });
        }

    }

    $scope.createData(nRows);

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
        if (imagesArray[num] !== $scope.trump) {
            return imagesArray[num];
        } else {
            return "blank"
        }
    }

    function birdChance() {
        return Math.round(Math.random() - nChanceReduction);
    }

    function displayImage() {

        if (birdChance()) {
            $scope.birdCount++;
            $scope.birdTotalCount++;
            return $scope.trump;
        } else {
            return pickBird();
        }
    }

    function primeTime(num) {
        if (num < 2) {
            return false
        }
        if (num != Math.round(num)) {
            return false
        }
        var isPrime = true;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i == 0) {
                isPrime = false
            }
        }
        return isPrime;

    }

    $scope.birds();

}]);