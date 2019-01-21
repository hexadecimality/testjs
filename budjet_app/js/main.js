let startBtn = document.getElementById('start'),
    budjetValue = document.getElementsByClassName('budjet-value')[0],
    dayBudjetValue = document.getElementsByClassName('daybudjet-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalExpensesValue')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthSavingsValue')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц", '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

    while (isNaN(money) || money == '' || money == null) {
        money = prompt("Ваш бюджет?", "");
    }
}
start();