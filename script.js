document.querySelector('h1').innerText = 'Добро пожаловать на наш сайт!';
document.querySelector('h3').style.color = 'red';

document.querySelector('p').innerText = "Это новый текст параграфа.";
document.querySelector('video').style.display = 'none';

const formData = {};

function submitForm(event) { 
    event.preventDefault(); 
    const name = document.querySelector('#name').value; 
    const email = document.querySelector('#email').value; 
    const phone = document.querySelector('#phone').value; 
    const date = document.querySelector('#date').value;  
    const comment = document.querySelector('#comment').value; 

    // Проверка обязательных полей
    if (!name || !email || !comment) return alert("Заполните обязательные поля."); 
    if (!/^\d+$/.test(phone)) return alert("Телефон должен содержать только цифры."); 
    if (!/^\S+@\S+\.\S+$/.test(email)) return alert("Введите корректный e-mail."); 

    // Запись данных в объект
    formData.name = name; 
    formData.email = email; 
    formData.phone = phone; 
    formData.date = date; 
    formData.comment = comment; 
}

// Метод для вывода данных в консоль
formData.printData = function() { 
    console.log(`Имя: ${this.name}\nE-mail: ${this.email}\nТелефон: ${this.phone}\nДата: ${this.date}\nКомментарий: ${this.comment}`); 
};

// Добавление обработчика события на форму
document.querySelector('form').addEventListener('submit', submitForm);
