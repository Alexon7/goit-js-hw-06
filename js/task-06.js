// Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.


const inputValue = document.querySelector('#validation-input');
const length = inputValue.getAttribute('data-length');


inputValue.addEventListener('blur', onCharacters);

function onCharacters(event){
    if (event.currentTarget.value.length === Number(length)) {
    inputValue.classList.remove('invalid');
    inputValue.classList.add('valid');
  } else {
    inputValue.classList.remove('valid');
    inputValue.classList.add('invalid');
  }
}




