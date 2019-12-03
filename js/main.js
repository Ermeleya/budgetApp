let startBtn = document.getElementById('start');
let budgetValue = document.getElementsByClassName('budget-value') [0];
let dayBudgetValue = document.getElementsByClassName('daybudget-value') [0];
let levelValue = document.getElementsByClassName('level-value') [0];
let expensesValue = document.getElementsByClassName('expenses-value') [0];
let optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value') [0];
let incomeValue = document.getElementsByClassName('income-value') [0];
let monthSavingsValue = document.getElementsByClassName('monthsavings-value') [0];
let yearSavingsValue = document.getElementsByClassName('yearsavings-value') [0];

let expensesItem = document.getElementsByClassName('expenses-item');
let expensesItemBtn = document.getElementsByTagName('button') [0];
let optionalExpensesBtn = document.getElementsByTagName('button') [1];
let countBudgetBtn = document.getElementsByTagName('button') [2];
let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');
let chooseIncome = document.querySelector('.choose-income');
let checkSavings = document.querySelector('#savings');
let sumValue = document.querySelector('#sum');
let percentValue = document.querySelector('#percent');
let yearValue = document.querySelector('.year-value');
let monthValue = document.querySelector('.month-value');
let dayValue = document.querySelector('.day-value');

let money,
    time;

    expensesItemBtn.disabled = true;
    optionalExpensesBtn.disabled = true;
    countBudgetBtn.disabled = true;

startBtn.addEventListener('click', function(){
    time = prompt("Введите дату в формате YYYY-MM-DD");
    money = +prompt("Ваш бюджет на месяц?");
    

    while(isNaN(money) || money == "" || money == null) {
        money = prompt("Ваш бюджет на месяц?");
    }
appData.budget = money;
appData.time = time;
budgetValue.textContent = money.toFixed();
yearValue.value = new Date(Date.parse(time)).getFullYear();
monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
dayValue.value = new Date(Date.parse(time)).getDate();

expensesItemBtn.disabled = false;
optionalExpensesBtn.disabled = false;
countBudgetBtn.disabled = false;
})

expensesItemBtn.addEventListener('click', function(){
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++ ) {
        let a = expensesItem[i].value,
        b = expensesItem[++i].value;
    
    if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === 'string' && (typeof(b)) != null &&
    a != '' && b != '' && a.length < 50 ) {
        console.log("done");
        appData.expenses[a] = b;
        sum += +b;
    } else  {                            
        console.log ("bad result");
        i--;
    }
    };
    expensesValue.textContent = sum;
})

optionalExpensesBtn.addEventListener('click', function(){
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
        }
           
});

countBudgetBtn.addEventListener('click', function(){

    if (appData.budget != undefined) {
        appData.moneyPerDay =  ((appData.budget - +expensesValue.textContent) / 30).toFixed();
        dayBudgetValue.textContent = appData.moneyPerDay;
    
        if (appData.moneyPerDay < 100 ) {
            levelValue.textContent = "Минимальный уровень достатка";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
            levelValue.textContent = "Средний уровень достатка";
        } else if (appData.moneyPerDay > 2000 ) {
            levelValue.textContent = "Высокий уровень достатка";
       } else {
        dayBudgetValue.textContent  = "Произошла ошибка"; // levelValue.textContent
        }
     } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

    chooseIncome.addEventListener('input', function(){
        let items = chooseIncome.value;        
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
    });

    checkSavings.addEventListener('click', function(){
if (appData.savings == true) {
    appData.savings = false;
} else {
    appData.savings = true;
}
    });
 
    sumValue.addEventListener('input', function() {
        if (appData.savings == true) {
        let sum = +sumValue.value,
        percent = +percentValue.value;
        appData.monthIncome = sum/100/12*percent;
        appData.yearIncome = sum/100*percent;
        monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });

    percentValue.addEventListener('input', function() {
        if (appData.savings == true) {
            let sum = +sumValue.value,
            percent = +percentValue.value;
            appData.monthIncome = sum/100/12*percent;
            appData.yearIncome = sum/100*percent;
            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        }
    });

var appData = {
    budget : +money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false,
    choseExpences : function() {
    //     for (let i = 0; i < 2; i++ ) {
    //         let a = prompt("Введите обязательную статью расходов в этом месяце"),
    //         b = prompt("Во сколько обойдется?");
        
    //     if ( (typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) === 'string' && (typeof(b)) != null &&
    //     a != '' && b != '' && a.length < 50 ) {
    //         console.log("done");
    //         appData.expenses[a] = b;
    //     } else  {                            
    //         console.log ("bad result");
    //         i--;
    //     }
    //     };
    
    },
    detectDayBudget : function() {
        // appData.moneyPerDay = (appData.budget / 30).toFixed();
        // alert("Ежедневный бюджет " + appData.moneyPerDay);   
    },
    detectLevel : function() {
        // if (appData.moneyPerDay < 100 ) {
        //     console.log("Минимальный уровень достатка");
        // } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000 ){
        //     console.log("Средний уровень достатка");
        // } else if (appData.moneyPerDay > 2000 ) {
        //     console.log("Высокий уровень достатка");
        // } else {
        //     console.log("Произошла ошибка");
        // } 
    },
    checkSavings : function() {
        // if (appData.savings == true) {
        //     let save = +prompt("Какова сумма накоплений?"),
        //     percent = +prompt("Под какой процент?");
        //     appData.monthIncome = save/100/12*percent;
        //     alert("Доход в месяц с Вашего депозита " + appData.monthIncome);
        // }
    },
    chooseOptExpenses : function() {
        // for (let x = 0; x < 3; x++) {  //в цикле нет необходимости, он от prompt перевязан на btn
        //     let q = x + 1,
        //         z = prompt("Статья необязательных расходов?");
              
        //         if ( (typeof(z) === 'string') && (typeof(z) != null) && (z != '') ) {
        //                 appData.optionalExpenses[q] = z;
        //         } else  {                            
        //             console.log ("bad result");
        //             x--;
        //         }
        //     }
          
    },
    chooseIncome : function() { 
    //     let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)");        
    //     if ( (typeof(items) === 'string') && (items != '') && (typeof(items) != null) ) {
    // appData.income = items.split(', ');
    // appData.income.push(prompt("Может что-от еще?"));
    // appData.income.sort();
    // appData.income.forEach(function(item, i) {
    //     i++;
    // console.log("Способы доп. заработка: " + i + " " + item);
    //  });

    // }
    }
  
}; 

// function checkingMassInfo() {
// for (let key in appData) {
//     console.log( "Наша программа включает в себя данные: свойство " + key + ", которое имеет значение " + appData.key );
// }
// }

// checkingMassInfo();




