// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.

let counterValue = 0;

const decrementBt = document.querySelector('[data-action="decrement"]');
const incrementBt = document.querySelector('[data-action="increment"]');
const value = document.querySelector('#value');

decrementBt.addEventListener('click', () => {
    counterValue -= 1;
    value.textContent = counterValue;

});

incrementBt.addEventListener('click', () => {
    counterValue += 1;
    value.textContent = counterValue;
});