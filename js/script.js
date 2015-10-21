/*globals angular*/

var app = angular.module('birdApp', []);
app.controller('birdController', function () {
    var vm = this;
    var imagesArray = ["bird_red_xs.png", "bird_green_xs.png", "bird_pink_xs.png", "bird_yellow_xs.png"];

    vm.birdCount = 0;
    vm.data = [];
    var nRows = 3;
    var nColumns = 12;
    var nChanceReduction = 0.30;
    //0-0.5 chance range; at 0.5 Birds will not populate
    var aBirds = createArray(nRows, nColumns);

    function birds() {
        for (var i = 0; i < aBirds.length; i++) {
            for (var j = 0; j < aBirds[i].length; j++) {
                aBirds[i][j] = {
                    value: displayImage()
                };
            }
        }
    }

    function createData(rows) {
        for (var i = 0; i < rows; i++) {
            var row = "row" + (i + 1);
            vm.data.push({
                value: row,
                row: aBirds[i]
            });
        }

    }

    createData(nRows);
    console.log(vm.data);

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
            vm.birdCount++;
            //console.log(primeTime(vm.birdCount));
            return pickBird();
        } else {
            return "blank.png";
        }
    }

    function primeTime(num) {
        if (num > 3) {
            if (num % 2 && num % 3 !== 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    birds();

});