"use strict";
// let greet: Function;
var greet;
greet = function (x, y) {
    console.log(x, y);
};
var calc;
calc = function (num1, num2, action) {
    if (action === 'add') {
        return num1 + num2;
    }
    return num1 - num2;
};
