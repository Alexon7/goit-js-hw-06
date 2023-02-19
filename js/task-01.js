


const totalCategories = document.querySelectorAll(".item");
console.log(`Number of categories: ${ totalCategories.length}`);
 
// const categoriesCharacteristics = [...totalCategories].map(el => `Category: ${el.children[0].textContent}
// Elements: ${el.children[1].children.length}`).join('\n');

const categoriesCharacteristics = totalCategories.forEach(el => `Category: ${el.firstElementChild.textContent}
 Elements: ${el.lastElementChild.children.length}`).join('\n');

console.log(categoriesCharacteristics);





