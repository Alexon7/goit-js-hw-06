// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input)
// и изменяет инлайн - стиль span#text обновляя свойство font - size.
//  В результате при перетаскивании ползунка будет меняться размер текста.

const inputValue = document.querySelector('#font-size-control');
const text = document.querySelector('#text');



inputValue.addEventListener('input', onFontSizeChange);

text.style.fontSize = `${inputValue.value}px`;

function onFontSizeChange(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
}
