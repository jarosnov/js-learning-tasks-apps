/*
1) Если программа еще не запущена(не нажали кнопку "Начать расчет") - сделать кнопки неактивными.

2) Реализовать функционал: при расчете дневного бюджета учитывать сумму обязательных трат(т.e.от бюджета на месяц отнимаем общую сумму всех обяз.трат и ее делим на 30 дней)

3) Проверить, чтобы все работало и не было ошибок в консоли

4) Добавить папку с уроком на свой GitHub

*/

let startBtn = document.getElementById('start'),
    budgetValue = document.getElementsByClassName('budget-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0],
    levelValue = document.getElementsByClassName('level-value')[0],
    expensesValue = document.getElementsByClassName('expenses-value')[0],
    optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    yearSavingsValue = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'), // input - Введите обязательные расходы

    expensesItemBtn = document.getElementsByTagName('button')[0], // button - Утвердить. Введите обязательные расходы
    optExpensesBtn = document.getElementsByTagName('button')[1], // button - Утвердить. Введите необязательные расходы 
    countBudgetBtn = document.getElementsByTagName('button')[2], // button - Рассчитать. Расчет дневного бюджета 

    optExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),

    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),

    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');

let money, time;

startBtn.addEventListener('click', function () {
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    money = +prompt("Ваш бюджет на месяц?", '');
    // Делаем проверку на исключение ввода не цифр, пустой строки, или null
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
    appData.budget = money;
    appData.timeData = time;
    budgetValue.textContent = money.toFixed(); // округляем
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesItemBtn.addEventListener('click', function () {
    let sum = 0;
    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
            sum += +b;
            expensesValue.textContent = sum;
        } else {
            i = i - 1;
        }
    }
});

optExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optExpensesItem.length; i++) {
        let opt = optExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalExpensesValue.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBudgetBtn.addEventListener('click', function () {
    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed(); // Округляем числа до ближайшего целого и возвращает string
        dayBudgetValue.textContent = appData.moneyPerDay;

        levelValue
        if (appData.moneyPerDay < 100) {
            levelValue.textContent = 'Минимальный уровень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
            levelValue.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 1000) {
            levelValue.textContent = 'Высокий уровень достатка';
        } else {
            levelValue.textContent = 'Произошла ошибка';
        }
    } else {
        dayBudgetValue.textContent = 'Произошла ошибка';
    }
});

incomeItem.addEventListener('input', function () { // 'input' or 'change'    
    let items = incomeItem.value;
    appData.income = items.split(', ');
    incomeValue.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = sumValue.value,
            percent = percentValue.value;
        appData.mounthIncome = sum / 100 / 12 * percent; //расчет на месяц
        appData.yearIncome = sum / 100 * percent; //расчет за гд

        monthSavingsValue.textContent = appData.mounthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = sumValue.value,
            percent = percentValue.value;
        appData.mounthIncome = sum / 100 / 12 * percent; //расчет на месяц
        appData.yearIncome = sum / 100 * percent; //расчет за гд

        monthSavingsValue.textContent = appData.mounthIncome.toFixed(1);
        yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
    }
});

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [], // массив данных с доп. доходом
    timeData: time,
    savings: false,
};