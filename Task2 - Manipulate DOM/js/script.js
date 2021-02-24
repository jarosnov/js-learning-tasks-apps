/*
1) Используя только файл скрипта(html руками не трогать) выполнить такие действия:

    ·Восстановить порядок в меню, добавить пятый пункт

· Заменить картинку заднего фона на другую из папки img

· Поменять заголовок, добавить слово "подлинную"(Получится - "Мы продаем только подлинную технику Apple")

· Удалить рекламу со страницы

· Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"

2) Проверить, чтобы все работало и не было ошибок в консоли
*/

let menuItem = document.createElement('li'),
    menu = document.querySelector('.menu'),
    menuItemList = document.querySelectorAll('.menu-item'),
    column = document.querySelectorAll('.column'),
    adv = document.querySelector('.adv'),
    title = document.querySelector('.title'),
    promp = document.getElementById('prompt');


menuItem.classList.add('menu-item');
menu.appendChild(menuItem);
menuItem.innerHTML = 'Пятый пункт';
menu.insertBefore(menuItemList[2], menuItemList[1]);
title.textContent = 'Мы продаем только подлинную технику Apple';
column[1].removeChild(adv);

let askUser = prompt('Как вы относитесь к продукции Apple? ', '');

promp.textContent = askUser;