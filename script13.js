// Существующие функции
function showMessage(message) {
    console.log(message);
}

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        element.style.display = element.style.display === 'none' ? 'block' : 'none';
    }
}

function updateHeaderFromURL() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get('utm_term');
    const header = document.querySelector('h1');
    if (utmTerm && header) {
        header.innerText = utmTerm;
    }
}

function logCurrentTime() {
    const now = new Date();
    console.log(now.toTimeString().split(' ')[0]);
}

function resetBackgroundColor() {
    document.body.style.backgroundColor = 'white';
}

// Обработчики событий
document.addEventListener('DOMContentLoaded', function() {
    // Обработчик для H1
    const header = document.querySelector('h1');
    header.addEventListener('click', function() {
        alert("Вы кликнули на заголовок - так держать!");
    });

    // Кнопка для смены тем практик
    const toggleButton = document.createElement('button');
    toggleButton.innerText = "Посмотреть практики второго семестра";
    document.body.appendChild(toggleButton);
  
    toggleButton.addEventListener('click', function() {
        const practices = [
            "Базовое бэкенд-приложение",
            "HTTP-запросы",
            "JSON и работа с ним",
            "HTTP-ответы",
            "Проектирование API",
            "Роутинг и его настройка",
            "NoSQL базы данных",
            "Обеспечение авторизации и доступа пользователей",
            "Работа сторонних сервисов уведомления и авторизации",
            "Основы ReactJS",
            "Работа с компонентами динамической DOM",
            "Использование хуков в React",
            "Основы микросервисной архитектуры",
            "Разработка классических модулей веб-приложений"
        ];
        const table = document.querySelector('table'); // Предполагается, что таблица есть
        table.innerHTML = ''; // Очистка предыдущих тем
        practices.forEach(topic => {
            const row = table.insertRow();
            const cell = row.insertCell(0);
            cell.textContent = topic;
        });
    });

    // Обработчики для фотографии студента
    const studentPhoto = document.querySelector('.student-photo'); // Подставьте селектор вашей фотографии
    if (studentPhoto) {
        studentPhoto.addEventListener('mouseover', function() {
            this.style.width = '110%';
            this.style.height = '110%';
        });

        studentPhoto.addEventListener('click', function() {
            this.src = 'URL_Вашего_Преподавателя.jpg'; // Замените на URL изображения
        });

        studentPhoto.addEventListener('dblclick', function() {
            alert("Не налегай, у меня не так много любимых преподавателей");
        });
    }

    // Вызов существующих функций
    resetBackgroundColor();
    changeBackgroundColor("lightblue");
    toggleVisibility('.content');
    updateHeaderFromURL();
});
