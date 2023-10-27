import './main.css';

// Создаем элемент для текста
const textElement = document.createElement('div');
textElement.textContent = 'Hello E13!';

// Добавляем созданный элемент в корневой элемент <div id="app"> на вашей странице
document.getElementById('app').appendChild(textElement);

fetch('http://localhost:3000/contacts')
  .then(res => res.json())
  .then(data => {
    data.forEach(post => {
      const div = document.createElement('div');
      div.textContent = post.title;
      document.body.appendChild(div);
    });
  });