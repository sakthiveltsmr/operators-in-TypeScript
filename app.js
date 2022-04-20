//Rest Operator
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var displayColors = function (message) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(colors);
    for (var i in colors) {
        console.log(colors[i]);
    }
};
var message = "list of colors";
// let colors = ["red", "green", "blue"];
displayColors(message, "red", "green", "blue");
//spread operator
var displayspreed = function (message) {
    var colors1 = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors1[_i - 1] = arguments[_i];
    }
    console.log(message);
    for (var j in colors1) {
        console.log(colors1[j]);
    }
};
var colors1 = ["yellow", "orange", "white"];
displayspreed.apply(void 0, __spreadArray([message], colors1, false));
