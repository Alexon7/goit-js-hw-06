// Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его текущее значение в span#name-output.
//  Если инпут пустой, в спане должна отображаться строка "Anonymous"


const inputValue = document.querySelector('#name-input');
const outputValue = document.querySelector('#name-output');

inputValue.addEventListener('input', onInputChange);

function onInputChange(event) {
    
        if (event.currentTarget.value === '') {
        outputValue.textContent = 'Anonymous';
    } else {
         outputValue.textContent = event.currentTarget.value
    }
}