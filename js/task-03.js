const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// Используй массив объектов images для создания элементов <img> вложенных в <li>. Для создания разметки используй шаблонные строки и метод insertAdjacentHTML().

// Все элементы галереи должны добавляться в DOM за одну операцию вставки.
// Добавь минимальное оформление галереи флексбоксами или гридами через CSS классы.

const listEl = document.querySelector('.gallery');
listEl.classList.add('style-for-task3');

// const makeLiRows = images.map(
//     ({ url, alt }) =>
//       `<li><img src="${url}" alt="${alt}" width = "100%" height = "100%" class="gallery-img"></li>`
//   )
//   .join('');

const createGallery = el => {
  return `<img src="${el.url}" alt="${el.alt}" width="500px"></img>`;
};

const makeLiRows = images.map(createGallery).join('');
console.log(makeLiRows);

listEl.insertAdjacentHTML('afterbegin', makeLiRows);

// listEl.style.display = 'flex';
// listEl.style.flexWrap = 'wrap';
// listEl.style.gap = '30px';
// listEl.style.listStyle = 'none';
// listEl.style.padding = '0';





