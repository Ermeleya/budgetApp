// 'use strict'

var money,
    time;

function start() {
    money = prompt("Ваш бюджет на месяц?");
    time = prompt("Введите дату в формате YYYY-MM-DD");

    while(isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет на месяц?");
    }
}

start();


var appData = {
    budget : +money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : true
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

function choseExpences() {
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

}

choseExpences();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert("Ежедневный бюджет " + appData.moneyPerDay);
}
detectDayBudget();

// console.log(appData.expenses);
// console.log(typeof appData.budget);


function detectLevel() {
if (appData.moneyPerDay < 100 ) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000 ) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Произошла ошибка");
}
}

detectLevel();

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");
        appData.monthIncome = save/100/12*percent;
        alert("Доход в месяц с Вашего депозита " + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (let x = 0; x < 3; x++) {
    let q = x + 1,
        z = prompt("Статья необязательных расходов?");
      
        if ( (typeof(z) === 'string') && (typeof(z) != null) && (z != '') ) {
                appData.optionalExpenses[q] = z;
        } else  {                            
            console.log ("bad result");
            x--;
        }
    }

}

chooseOptExpenses();