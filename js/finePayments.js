buttonSubmit.addEventListener('click', payFine);                                //при клике на кнопку "Оплатить штраф" вызывается функция payfine 

function payFine() {                                                            //функция оплаты штрафа
    let fineNumValue = fineNumber.value;                                        // Получение значений из полей ввода
    let passportValue = passport.value;
    let creditCardNumberValue = creditCardNumber.value;
    let cvvValue = cvv.value;
    let amountValue = parseInt(amount.value);                                   // Преобразование суммы в целое число

    let fineExists = DB.find(fine => fine.номер === fineNumValue);              //поиск файла в бд по номеру
    if (!fineExists) {                                                          //существет ли такой штраф с номером
        alert("Номер не совпадает");
        return;
    }

    if (fineExists.сума !== amountValue) {                                      //проверка на совпадение суммы
        alert("Сумма не совпадает");
        return;
    }

    let passportPattern = /^[А-ЯҐЄІЇ]{2}\d{6}$/;                                //проверка формата паспортного номера
    if (!passportPattern.test(passportValue)) {
        alert("Неверный паспортный номер");
        return;
    }

    let creditCardPattern = /^\d{16}$/;                                         //проверка кредитки
    if (!creditCardPattern.test(creditCardNumberValue)) {
        alert("Неверный номер кредитной карты");
        return;
    }

    let cvvPattern = /^\d{3}$/;                                                 //проверка СVV
    if (!cvvPattern.test(cvvValue)) {
        alert("Неверный CVV");
        return;
    }

    let index = DB.findIndex(fine => fine.номер === fineNumValue);              // блок оплаты штрафа
    if (index !== -1) {
        DB.splice(index, 1);
        alert("Оплата успешно произведена. Штраф оплачен.");
    } else {
        alert("Ошибка при обработке оплаты. Пожалуйста, попробуйте еще раз.");
    }
}
