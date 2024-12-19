document.addEventListener('DOMContentLoaded', function() {
    // Заголовок H1
    const header = document.querySelector('h1');

    // Параграф
    const paragraph = document.querySelector('p');
    paragraph.addEventListener('click', function() {
        this.classList.toggle('background-change');
        this.style.backgroundColor = 
            this.style.backgroundColor === 'yellow' ? '' : 'yellow';
    });

    // Кнопка для показа лекций
    const lecturesButton = document.createElement('button');
    lecturesButton.innerText = "Показать лекции";
    document.body.appendChild(lecturesButton);
    const lecturesTable = document.createElement('table');
    lecturesTable.classList.add('hidden');
    document.body.appendChild(lecturesTable);

    lecturesButton.addEventListener('click', function() {
        lecturesTable.classList.toggle('visible');
    });

    // Форма
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const message = document.createElement('p');
        message.innerText = "Форма отправлена!";
        message.classList.add('form-message');
        document.body.appendChild(message);
        setTimeout(() => {
            message.style.color = 'green';
        }, 500);
    });

    // Фотография студента
    const studentPhoto = document.querySelector('.student-photo');
});