let money = +prompt("Ваш бюджет на месяц?", ''),
    time = prompt("Введите дату в формате YYYY-MM-DD", '');

let appData = {
    budget: money,
    expenses: {}, // обязательные расходы
    income: [], // массив данных с доп. доходом
    timeData: time,
    savings: false
};

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
//         i = i - 1;
//     }
// }

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
//         i = i - 1;
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