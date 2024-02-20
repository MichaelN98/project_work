"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey) {
    // Вывод searchKey и DB (данные о штрафах) в консоль
    console.log(searchKey);
    console.log(DB);

    // Проверка на то, не является ли searchKey ложным значением (null, undefined, 0, false, "", и т. д.)
    if (!searchKey) {
        console.error("Не вказано значення для пошуку");
        return [];
    }

    // Фильтрация массива DB на основе searchKey
    const searchResult = DB.filter(element => {
        // Проверка, содержит ли номер штрафа или его тип searchKey
        return element.номер.includes(searchKey) || element.тип.includes(searchKey);
    });

    // Если найдены какие-либо штрафы, возвращается результат поиска
    if (searchResult.length > 0) {
        return searchResult;
    } else {
        // Если штрафы не найдены, выводится предупреждение и возвращается пустой массив
        alert("Штраф не знайдено");
        return [];
    }
}

