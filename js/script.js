/*globals angular*/

var app = angular.module('birdApp', []);
app.controller('birdCtrl', function () {
    var vm = this;
    vm.test = "Birds";


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
            vm.aBirds[i][j] = Math.round((Math.random() - nChanceReduction));
        }
    }
});