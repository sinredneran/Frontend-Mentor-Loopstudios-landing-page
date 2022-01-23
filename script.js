const hamburger = document.querySelector('input');
const navList = document.querySelector('.nav-lists');
const navListItem = document.querySelectorAll('.nav-lists--item');
const body = document.querySelector('body');

console.log(navListItem);

hamburger.addEventListener('click', () => {
   if (hamburger.checked) {
      body.classList.add('noScroll');
      showNavItems('block');
   }
   else {
      body.classList.remove('noScroll');
      showNavItems('none');
   }
});

function showNavItems(displayProperty) {
   for (let i = 0; i < navListItem.length; i++) {
      navListItem[i].style.display = displayProperty;
   }
}