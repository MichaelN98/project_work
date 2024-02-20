
"use strict";

let fineNumber = document.getElementById("fineNumber");
let passport = document.getElementById("passport");
let creditCardNumber = document.getElementById("creditCardNumber");
let cvv = document.getElementById("cvv");
let amount = document.getElementById("amount");
let buttonSubmit = document.getElementById("payFine");

//Ця зміна містить всі дані які в нас зберігаються у файлі data
let DB = data.finesData;

// Регулярные выражения для проверки валидности паспортного номера, номера кредитной карты и CVV
let passportRegex = /^[А-Я]{2}\d{6}$/;
let creditCardNumberRegex = /^(4[0-9]{15})|(5[1-5][0-9]{14})$/;
let cvvRegex = /^\d{3}$/;

// Добавление обработчика события на кнопку
buttonSubmit.addEventListener('click', payFine);

// Функция для оплаты штрафа
function payFine() {
    let selectedFineIndex;

    // Поиск индекса выбранного штрафа в массиве данных
    for (let i = 0; i < DB.length; i++) {
        const fine = DB[i];
        if (fine.номер === fineNumber.value) {
            selectedFineIndex = i;
            break;
        }
    }

    // Проверка наличия выбранного штрафа
    if (selectedFineIndex === undefined) {
        alert('Невірний номер штрафу');
        return;
    }

    // Проверка валидности паспортного номера
    if (!passportRegex.test(passport.value)) {
        alert('Не вірний паспортний номер');
        return;
    }

    // Проверка валидности номера кредитной карты
    if (!creditCardNumberRegex.test(creditCardNumber.value)) {
        alert('Не вірна кредитна картка');
        return;
    }

    // Проверка валидности CVV
    if (!cvvRegex.test(cvv.value)) {
        alert('Не вірний СVV');
        return;
    }

    // Проверка соответствия суммы штрафа введенной сумме
    if (DB[selectedFineIndex].сума != amount.value) {
        alert('Сума не вірна');
        return;
    }

    // Удаление выбранного штрафа из массива данных
    DB.splice(selectedFineIndex, 1);

    // Вывод сообщения об успешной оплате
    alert('Штраф сплачено успішно')

    // Очистка полей формы
    fineNumber.value = '';
    passport.value = '';
    creditCardNumber.value = '';
    cvv.value = '';
    amount.value = '';
}

