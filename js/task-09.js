// Напиши скрипт, который изменяет цвета фона элемента < body > через инлайн стиль при клике на button.change - color
//  и выводит значение цвета в span.color.



function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const body = document.querySelector('body');
const spanEl = document.querySelector('.color');
const btnEl = document.querySelector('.change-color');

btnEl.addEventListener('click', onChangeColor);

function onChangeColor(event) {

  body.style.backgroundColor =  getRandomHexColor();
 spanEl.innerHTML = body.style.backgroundColor;
  
}
 