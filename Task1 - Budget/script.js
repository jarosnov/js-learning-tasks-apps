/*
1) Написать проверку, что пользователь может:

·Ввести в дополнительных доходах(chooseIncome) только строку

· Не может оставить строку пустой

· Не может отменить вопрос

2) При помощи метода перебора массива(forEach) вывести на экран сообщение "Способы доп. заработка: "
и полученные способы(внутри chooseIncome)

· Товары должны начинаться с 1, а не с 0. Выполняем этот пункт в chooseIncome.

3) Используя цикл
for in для объекта(appData) вывести в консоль сообщение "Наша программа включает в себя данные: "(вывести весь appData)

4) Проверить, чтобы все работало и не было ошибок в консоли

5) Добавить папку с уроком на свой GitHub
Вопросы к этому заданию
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
    savings: true,
    chooseExpenses: function () { // Создаем функцию обязательных расходов
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
        }
    },
    detectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed(); // Округляем числа до ближайшего целого и возвращает string
        alert('Ваш бюджет на 1 день:' + appData.moneyPerDay);
    },
    detectLevel: function () { //Функция уровня достатка
        if (appData.moneyPerDay < 100) {
            console.log('Минимальный уровень достатка')
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
            console.log('Средний уровень достатка')
        } else if (appData.moneyPerDay > 1000) {
            console.log('Высокий уровень достатка')
            console.log('Произошла ошибка')
        }
    },
    checkSavings: function () { // Функция для расчета накопления депозита
        if (appData.savings == true) {
            let save = +prompt("Какова сумма накоплений?"),
                percent = +prompt("Под какой процент,");
            appData.mounthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита: " + appData.mounthIncome);
        }
    },
    chooseOptExpenses: function () { // Функция необязательных расходов
        for (let i = 1; i < 3; i++) {
            let articleOptExpenses = prompt("Статья необязательных расходов?", '');
            appData.optionalExpenses[i] = articleOptExpenses;
        }
    },
    chooseIncome: function () {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую) ", '');
        appData.income = items.split(', ');
        appData.income.push(prompt('Может что-то ещё?', ''));
        appData.income.sort();
        //if (items !== 'string' || items == '' || items == null) {}
        while (items == '' || items == null) {
            items = prompt("Что принесет дополнительный доход? (Перечислите через запятую) ", '');
        }
        // TO DO IT
        //let incomeList = alert('Способы доп. заработка: ' + appData.income.forEach(function (item, i) {
        //    return (i + item);
        //}, ''))
        //appData.income = incomeList.split(', ').push;
    }
};
// appData.chooseExpenses();
// appData.detectDayBudget();
// appData.detectLevel();
// appData.checkSavings();
// appData.chooseOptExpenses();
appData.chooseIncome();

for (var val in appData) {
    alert('Наша программа включает в себя данные: ' +
        appData[val]);
}