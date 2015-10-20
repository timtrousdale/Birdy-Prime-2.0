/*globals angular*/

var app = angular.module('birdApp', []);
app.controller('birdController', function () {
    var vm = this;

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


    var nRows = 3;
    var nColumns = 12;
    var nChanceReduction = 0.25;
    vm.aBirds = createArray(nRows, nColumns);

    for (var i = 0; i < vm.aBirds.length; i++) {
        for (var j = 0; j < vm.aBirds[i].length; j++) {
            vm.aBirds[i][j] = {
                value: Math.round((Math.random() - nChanceReduction))
            };
        }
    }

    vm.data = {
        id: [{
            value: "row1",
            row: this.aBirds[0]
        }, {
            value: "row2",
            row: this.aBirds[1]
        }, {
            value: "row3",
            row: this.aBirds[2]
        }],
    };

    /*    vm.aBirds.unshift({
            value: "row3"
        });
        vm.aBirds.unshift({
            value: "row2"
        });
        vm.aBirds.unshift({
            value: "row1"
        });*/
    console.log(vm.aBirds);
});