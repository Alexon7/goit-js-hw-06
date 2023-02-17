// Напиши скрипт создания и очистки коллекции элементов.Пользователь вводит количество элементов в input и нажимает кнопку
// Создать, после чего рендерится коллекция. 
// При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает один параметр - число. Функция создает столько <div>, сколько указано в amount 
// и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const input = document.querySelector('input');
const box = document.querySelector('#boxes');


btnCreate.addEventListener('click', createBoxes);
btnDestroy.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
  amount = input.value;

  const array = [];

  for (let i = 1; i <= amount; i += 1) {
    let el = document.createElement('div');

    el.style.width = `${30 + 10 * i}px`;
    el.style.height = `${30 + 10 * i}px`;
    el.style.backgroundColor = getRandomHexColor();

    array.push(el);
  }

  
  box.append(...array);
  input.value = '';
}
  
  function destroyBoxes() {
    box.innerHTML = '';
     input.value = '';
  }


  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

