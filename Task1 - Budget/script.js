/*
1) Оформить расчет дневного бюджета и вывод на экран этого значения как одну функцию(detectDayBudget)

2) Оформить блок кода с расчетом уровня достатка как отдельную функцию(detectLevel)

3) Создать функцию для определения необязательных расходов(chooseOptExpenses):

    Необходимо 3 раза спросить у пользователя“ Статья необязательных расходов ? ”

    Записать ответы в объект optionalExpenses в формате Номер - Ответ.

optionalExpenses: {
    1: “ответ на вопрос”
}

Вызывать функции не обязательно.

4) Добавить папку с третьим уроком на GitHub
*/
let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", '');
    time = prompt("Введите дату в формате YYYY-MM-DD", '');
    // Делаем проверку на исключение ввода не цифр, пустой строки, или null
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц?", '');
    }
}
start();

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [], // массив данных с доп. доходом
    timeData: time,
    savings: true
};

// Создаем функцию обязательных расходов
function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
            b = prompt("Во сколько обойдется", '');

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
            a != '' && b != '' && a.length < 50) {
            console.log('done');
            appData.expenses[a] = b;
        } else {
            i = i - 1;
        }
    };
}
chooseExpenses();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(); // Округляем числа до ближайшего целого и возвращает string

    alert('Ваш бюджет на 1 день:' + appData.moneyPerDay);
}
detectDayBudget();

//Функция уровня достатка
function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log('Минимальный уровень достатка')
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
        console.log('Средний уровень достатка')
    } else if (appData.moneyPerDay > 1000) {
        console.log('Высокий уровень достатка')
    } else {
        console.log('Произошла ошибка')
    }
}
detectLevel();

// Функция для расчета накопления депозита
function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt("Какова сумма накоплений?"),
            percent = +prompt("Под какой процент,");

        appData.mounthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита: " + appData.mounthIncome);
    }
}
checkSavings();

// Функция необязательных расходов
function chooseOptExpenses() {
    for (let i = 1; i < 4; i++) {
        let articleOptExpenses = prompt("Статья необязательных расходов?", '');
        appData.optionalExpenses[i] = articleOptExpenses;
    }
}
chooseOptExpenses();