/*globals angular*/

var app = angular.module('birdApp', []);
app.controller('birdController', function () {
    var vm = this;
    var imagesArray = ["bird_red_xs.png", "bird_green_xs.png", "bird_pink_xs.png", "bird_yellow_xs.png"];

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
            return pickBird();
        } else {
            return "blank.png";
        }

    }

    var nRows = 3;
    var nColumns = 12;
    var nChanceReduction = 0.25;
    var aBirds = createArray(nRows, nColumns);

    for (var i = 0; i < aBirds.length; i++) {
        for (var j = 0; j < aBirds[i].length; j++) {
            aBirds[i][j] = {
                value: displayImage()
            };

        }
    }

    vm.data = [{
        value: "row1",
        row: aBirds[0]
        }, {
        value: "row2",
        row: aBirds[1]
        }, {
        value: "row3",
        row: aBirds[2]
        }];

    /*    vm.aBirds.unshift({
            value: "row3"
        });
        vm.aBirds.unshift({
            value: "row2"
        });
        vm.aBirds.unshift({
            value: "row1"
        });*/
    console.log(vm.data);
});