//displays date
const dateContainer = document.querySelector('.date')
const content = document.createElement('h2')
content.textContent = Date();
dateContainer.appendChild(content);

//generate random number for prompts
const randomNumber = Math.floor(Math.random()* 78);
console.log(randomNumber);
