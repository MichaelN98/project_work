
"use strict";
window.fineList = {
    searchFines : searchFines
}

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

function searchFines(searchKey) {
    // Створюємо порожній масив, куди будемо додавати знайдені штрафи
    let result = [];

    // Перевіряємо, чи передано коректний ключ пошуку
    if (searchKey === 'Пошук за номером') {
        // Логіка для пошуку за номером
        // Наприклад:
        for (let i = 0; i < DB.length; i++) {
            if (DB[i].номер === '001') {
                result.push(DB[i]);
            }
        }
    } else if (searchKey === 'Пошук за типом штрафу') {
        // Логіка для пошуку за типом штрафу
        // Наприклад:
        for (let i = 0; i < DB.length; i++) {
            if (DB[i].тип === 'Перевищення швидкості') {
                result.push(DB[i]);
            }
        }
    } else {
        // Якщо переданий невідомий ключ пошуку
        console.log('Невідомий ключ пошуку');
    }

    // Повертаємо знайдені штрафи
    return result;
}
