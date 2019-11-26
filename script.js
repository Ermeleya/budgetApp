'use strict'

var money = prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YYYY-MM-DD");

var appData = {
    budget : +money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
};

let spendingPoint01 = prompt("Введите обязательную статью расходов в этом месяце");
let spendingSum01 = prompt("Во сколько обойдется?");
let spendingPoint02 = prompt("Введите обязательную статью расходов в этом месяце");
let spendingSum02 = prompt("Во сколько обойдется?");

appData.expenses.spendingPoint01 = spendingSum01;
appData.expenses.spendingPoint02 = spendingSum02;

console.log(appData.expenses);
console.log(typeof appData.budget);

alert(appData.budget / 30);
