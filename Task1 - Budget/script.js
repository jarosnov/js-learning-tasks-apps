/*
1) Переписать наш цикл
for еще двумя способами и закомментировать их(еще 2 вида циклов, тренируемся)

2) Проверить, чтобы все работало и не было ошибок в консоли

3) Добавить папку со вторым уроком в свой репозиторий на GitHub
*/
// var money,
//     time;

let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

// money = prompt("Ваш бюджет на месяц?");
// time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = {
    budget: money,
    expenses: {},
    income: [], // массив данных с доп. доходом
    timeData: time,
    savings: false
};

/*
let a1 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a2 = prompt("Во сколько обойдется", ''),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ''),
    a4 = prompt("Во сколько обойдется", '');

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;
*/

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
        b = prompt("Во сколько обойдется", '');
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
        a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
    } else {
        appData.expenses[a] = b;
    }
};

// let i = 0;
// while (i < 2) {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется", '');
//     i++;
//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//         a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         appData.expenses[a] = b;
//     }
// };

// let i = 0;
// do {
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ''),
//         b = prompt("Во сколько обойдется", '');
//     i++;
//     if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null &&
//         a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     } else {
//         appData.expenses[a] = b;
//     }
// };
// while (i < 2)

appData.moneyPerDay = appData.budget / 30;

alert('Ваш бюджет на 1 день:' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log('Минимальный уровень достатка')
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000) {
    console.log('Средний уровень достатка')
} else if (appData.moneyPerDay > 1000) {
    console.log('Высокий уровень достатка')
} else {
    console.log('Произошла ошибка')
}

// switch (appData.moneyPerDay) {
//     case (appData.moneyPerDay < 100):
//         console.log('Минимальный уровень достатка');
//         break;
//     case (appData.moneyPerDay > 100 && appData.moneyPerDay < 1000):
//         console.log('Средний уровень достатка');
//         break;
//     case (appData.moneyPerDay > 1000):
//         console.log('Высокий уровень достатка');
//         break;
//     default:
//         console.log('Произошла ошибка');
//         break;
// };