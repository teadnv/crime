const rulesModal = document.getElementById('rulesModal');
const formModal = document.getElementById('formModal');
const rulesBtn = document.getElementById('rulesBtn');
const formBtn = document.getElementById('formBtn');
const rulesClose = document.getElementById('rulesClose');
const formClose = document.getElementById('formClose');

rulesBtn.onclick = function() {
    rulesModal.style.display = 'block';
};

formBtn.onclick = function() {
    formModal.style.display = 'block'; // Показываем модальное окно
};



// Закрытие модальных окон
rulesClose.onclick = function() {
    rulesModal.style.display = 'none';
};
formClose.onclick = function() {
    formModal.style.display = 'none';
};

// Закрытие при клике вне окна
window.onclick = function(event) {
    if (event.target === rulesModal) {
        rulesModal.style.display = 'none';
    }
    if (event.target === formModal) {
        formModal.style.display = 'none';
    }
};

document.getElementById('telegramForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Предотвращаем стандартное поведение формы

    const token = '7592188462:AAGWvYmyLyyp0kRkr8gP0iByP9JktQFM0LE'; // Ваш Telegram токен
    const chatId = '916731396'; // Ваш ID группы

    const formData = new FormData(); // Создаем FormData
    formData.append('chat_id', chatId);

    // Сбор данных из формы
    const fullName = document.querySelector('input[name="fullName"]').value;
    const age = document.querySelector('input[name="age"]').value;
    const orientation = document.querySelector('input[name="orientation"]').value;
    const position = document.querySelector('input[name="position"]').value;
    const status = document.querySelector('input[name="status"]').value;
    const username = document.querySelector('input[name="username"]').value;
    const file = document.getElementById('file').files[0];

    // Формируем сообщение
    const caption = `𝐐𝐔𝐄𝐒𝐓𝐈𝐎𝐍𝐍𝐀𝐈𝐑𝐄 \n
    ♤ ${fullName}\n
    age: ${age}\n
    #${orientation} || #${position} \n
    ♤ status: ${status}\n
    :: @${username} ::`;
    formData.append('caption', caption);

    // Добавляем фотографию, если есть
    if (file) {
        formData.append('photo', file);
    }

    // Отправка данных в Telegram API
    fetch(`https://api.telegram.org/bot${token}/sendPhoto`, {
        method: 'POST',
        body: formData,
    })
    .then(response => {
        if (response.ok) {
            alert('Ваша анкета успешно отправлена.');
        } else {
            alert('Ошибка при отправке данных.');
        }
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Ошибка подключения.');
    });
});

const guideModal = document.getElementById('guideModal');
const guideBtn = document.getElementById('guideBtn');
const guideClose = document.getElementById('guideClose');

// Открытие модального окна "Guide"
guideBtn.onclick = function() {
    guideModal.style.display = 'block';
};

// Закрытие модального окна "Guide"
guideClose.onclick = function() {
    guideModal.style.display = 'none';
};

// Закрытие окна при клике вне его области
window.onclick = function(event) {
    if (event.target === guideModal) {
        guideModal.style.display = 'none';
    }
};




