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

// let spendingPoint01 = prompt("Введите обязательную статью расходов в этом месяце");
// let spendingSum01 = prompt("Во сколько обойдется?");
// let spendingPoint02 = prompt("Введите обязательную статью расходов в этом месяце");
// let spendingSum02 = prompt("Во сколько обойдется?");

// appData.expenses.spendingPoint01 = spendingSum01;
// appData.expenses.spendingPoint02 = spendingSum02;

// let i = 0;
// while (i < 2 ) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце"),
// b = prompt("Во сколько обойдется?");  
//     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === 'string' && (typeof(b)) != null &&
// a != '' && b != '' && a.length < 50 ) {
// console.log("done");
// appData.expenses[a] = b;
// i++;
// }
// }


    // let i = 0; 
    // do {
        // let a = prompt("Введите обязательную статью расходов в этом месяце"),
        // b = prompt("Во сколько обойдется?");
    //     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === 'string' && (typeof(b)) != null &&
    //     a != '' && b != '' && a.length < 50 ) {
    //     console.log("done");
    //     appData.expenses[a] = b;
    //     i++;  
    // } while (i < 2 );
    // }


for (let i = 0; i < 2; i++ ) {
    let a = prompt("Введите обязательную статью расходов в этом месяце"),
    b = prompt("Во сколько обойдется?");

if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === 'string' && (typeof(b)) != null &&
a != '' && b != '' && a.length < 50 ) {
    console.log("done");
    appData.expenses[a] = b;
} else  {                            
    console.log ("bad result");
    i--;
}
};


appData.moneyPerDay = appData.budget / 30;
// console.log(appData.expenses);
// console.log(typeof appData.budget);

alert("Ежедневный бюджет " + appData.moneyPerDay);

if (appData.moneyPerDay < 100 ) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000 ) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}