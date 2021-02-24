/*
1) Задание по проекту

· Получить кнопку "Начать расчет"
через id

· Получить все блоки в правой части программы через классы(которые имеют класс название - value, начиная с и заканчивая)

· Получить поля(input) c обязательными расходами через класс.(class = ”expenses - item”)

· Получить кнопки“ Утвердить” и“ Рассчитать” через Tag, каждую в своей переменной.

· Получить поля для ввода необязательных расходов(optionalexpenses - item) при помощи querySelectorAll

· Получить оставшиеся поля через querySelector(статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

2) Проверить, чтобы все работало и не было ошибок в консоли

3) Добавить папку с уроком на свой GitHub
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