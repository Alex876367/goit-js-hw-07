const categoryItems = document.querySelectorAll('.item');
const categoryTitles = document.querySelectorAll('h2');
const elementsLists = document.querySelectorAll('.item ul');


categoryTitles.forEach(el => el.classList.add('category-title'));
elementsLists.forEach(el => el.classList.add('element-list'));


const listItems = document.querySelectorAll('.element-list li');

listItems.forEach(el => el.classList.add('list-item'));




const categoriesQuantity = items => (`Number of categories: ${items.length}`);
console.log(categoriesQuantity(categoryItems));


const categoryInfo = items => {
    items.forEach((el) => {
        const currentTitleContent = el.querySelector('h2').textContent;
        const currentElementsLength = el.querySelectorAll('li').length;

        console.log(`Category: ${currentTitleContent}`);
        console.log(`Elements: ${currentElementsLength}`);
    });
};
categoryInfo(categoryItems);