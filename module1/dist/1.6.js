"use strict";
//Learning function 
// Normal function 
function add(num1, num2) {
    return num1 + num2;
}
add(2, 3);
// Arrow function
var addArrow = function (num1, num2) { return num1 + num2; };
// object --> function --> method
var poorUser = {
    name: 'Amir',
    balance: 0,
    // this function call by method & it will be allows normal function
    addBalance: function (balance) {
        return "My new Balance is  ".concat(this.balance + balance);
    }
};
// map array
var arr = [1, 4, 10];
var newArray = arr.map(function (element) { return element * element; });
