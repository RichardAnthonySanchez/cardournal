//displays date
const dateContainer = document.querySelector('.date')
const content = document.createElement('h2')
content.textContent = Date();
dateContainer.appendChild(content);