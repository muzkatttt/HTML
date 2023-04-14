function ValidMail() {
    var prov = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var myMail = document.getElementById('email').value;
    var valid = prov.test(myMail);
    if (valid) output = 'Введен корректный адрес электронной почты';
    else output = 'Адрес электронной почты введен некорректно';
    document.getElementById('message').innerHTML = output;
    return valid;
}

function ValidPhone() {
    var prov = /^[\d\+][\d\(\)\ -]{4,14}\d$/;
    var myPhone = document.getElementById('phone').value;
    var valid = prov.test(myPhone);
    if (valid) output = 'Введен корректный номер телефона';
    else output = 'Номер телефона введен некорректно!';
    document.getElementById('message').innerHTML = document.getElementById('message').innerHTML + '<br />' + output;
    return valid;
}

