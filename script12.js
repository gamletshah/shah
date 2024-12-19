 // Функция для вывода сообщения в консоль
function showMessage(message) {
    console.log(message);
}

// Функция для изменения цвета фона
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция для переключения видимости элемента
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
}

// Функция для извлечения параметра utm_term из URL и изменения H1
function updateHeaderFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const header = document.querySelector('h1');
    if (utmTerm && header) {
        header.innerText = utmTerm;
    }
}

// Функция для вывода текущего времени
function logCurrentTime() {
    const now = new Date();
    console.log(now.toTimeString().split(' ')[0]);
}

// Функция для сброса цвета фона
function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}

// Вызовы функций
showMessage("Скрипт загружен!");
logCurrentTime();

document.addEventListener('DOMContentLoaded', function() {
    resetBackgroundColor();
    changeBackgroundColor("lightblue");
    toggleVisibility('.content');
    updateHeaderFromURL();
});
