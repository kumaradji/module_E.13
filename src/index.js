import './main.css';

// Создаем элемент для текста
const textElement = document.createElement('div');
textElement.textContent = 'Hello E13!';

// Добавляем созданный элемент в корневой элемент <div id="app"> на вашей странице
document.getElementById('app').appendChild(textElement);
