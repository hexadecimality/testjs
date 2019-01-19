'use strict';

let money = +prompt("Your budget for the month?", '');
let time = prompt("Enter date in YYYY-MM-DD format", '');

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Enter a mandatory expense item for this month");
    let b = prompt("How much it will costs?");

    if ((typeof(a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    }
}

appData.moneyPerDay = appData.budget / 30;

alert("Daily budjet: " + appData.moneyPerDay);

if(appData.moneyPerDay < 100) {
    console.log("Minimum");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Middle");
} else if (appData.moneyPerDay > 2000) {
    console.log("High");
} else {
    console.log("Error");
}