let money;
let time;
function start(){
    money = +prompt("Your budget for the month?", '');
    time = prompt("Enter date in YYYY-MM-DD format", '');

    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Your budget for the month?", '');
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExpenses(){
    for (let i = 0; i < 2; i++) {
        let a = prompt("Enter a mandatory expense item for this month");
        let b = prompt("How much it will costs?");

        if ((typeof(a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    }
}
chooseExpenses();
appData.moneyPerDay = (appData.budget / 30).toFixed(1);

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

function checkSavings() {
    if(appData.savings == true){
        let save = +prompt("How much do you save?");
        let percent = +prompt("Which percent?");

        appData.monthIncome = save/100/12*percent;
        alert("Deposit income: " + appData.monthIncome);
    }
}

checkSavings();