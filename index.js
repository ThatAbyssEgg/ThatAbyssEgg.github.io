const _modal = modal();
const _nextModal = nextModal();

// Проверка на повторную запись на мастер класс
document.getElementsByClassName("apply_button")[0].onclick = function () {
    if (localStorage.getItem("apply") && localStorage.getItem("apply") !== "") {
        _nextModal.open();
        setTimeout(function () { _nextModal.close();}, 5000);
    }
    else{
        _modal.open()
    }
}

// Закрытие окна при нажатии на затемненную область
window.onclick = function (event) {
    if (event.target.className == 'popup') {
        _modal.close();
        _nextModal.close();
    }
}

// Закрытие на кнопку
document.getElementById("closeBtn").onclick = function () {
    // Идея с котом моя
    window.open('https://www.youtube.com/watch?v=1wSO-LlWZTM'); 
    _modal.close();
}

// Ввод почты
document.getElementById("emailInput").oninput = function () {
    if (!isValidEmail(document.getElementById("emailInput").value)) {
        document.getElementById("incEmail").style.display = "block";
    }
    else {
        document.getElementById("incEmail").style.display = "none";
    }

    Validation();
}
// Ввод телефона
document.getElementById("phoneInput").oninput = function () {
    if (!isValidPhone(document.getElementById("phoneInput").value)) {
        document.getElementById("incPhone").style.display = "block";
    }
    else {
        document.getElementById("incPhone").style.display = "none";
    }
    Validation();
}
// Ввод имени
document.getElementById("nameInput").oninput = function () {
    if (!isValidName(document.getElementById("nameInput").value)) {
        document.getElementById("incName").style.display = "block";
    }
    else {
        document.getElementById("incName").style.display = "none";
    }
    Validation();
}

// Клик на кнопку apply
document.getElementById("appl").onclick = function () {
    let liFirst = document.createElement('li');
    liFirst.classList.add("nav-menu-item-welcome");
    liFirst.textContent = document.getElementById("nameInput").value;
    localStorage.setItem('apply', document.getElementById("nameInput").value);
    _modal.destroy();
    _nextModal.open();
    setTimeout(function () { _nextModal.close();}, 5000);
}

// Валидация ввода
function Validation() {
    if (isValidEmail(document.getElementById("emailInput").value) && isValidPhone(document.getElementById("phoneInput").value) && isValidName(document.getElementById("nameInput").value)) {
        if (document.getElementById("appl").classList.contains("disabled")) {
            document.getElementById("appl").classList.remove("disabled");
        }
    }
    else {
        if (!document.getElementById("appl").classList.contains("disabled")) {
            document.getElementById("appl").classList.add("disabled");
        }
    }
}

// Регулярка для телефона
function isValidPhone(myPhone) {
    return /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,12}(\s*)?$/.test(myPhone);
}
// Регулярка для почты
function isValidEmail(myEmail) {
    return /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(myEmail);
}
// Регулярка для имени
function isValidName(myName) {
    return /^[a-zA-Z]+$/.test(myName);
}