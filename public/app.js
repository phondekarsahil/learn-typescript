"use strict";
var form = document.querySelector('.new-item-form');
// console.log(form.children);
var type = document.querySelector('#type');
var tofrom = document.querySelector('#tofrom');
var details = document.querySelector('#details');
var amount = document.querySelector('#amount');
form.addEventListener('submit', function (e) {
    e.preventDefault();
    console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});
var Invoice = /** @class */ (function () {
    function Invoice(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    Invoice.prototype.format = function () {
        return "".concat(this.client, " owes Rs ").concat(this.amount, " for ").concat(this.details);
    };
    return Invoice;
}());
var inv1 = new Invoice("Sahil", "Work", 90);
console.log(inv1.format());
var invoices = [];
