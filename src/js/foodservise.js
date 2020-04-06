import dishes from '../menu.json';

import temlateItem from '../templates/teplateItem.hbs';


const refs = {
  ulMenu: document.querySelector(".js-menu")
};

buildPosts(dishes);


function buildPosts (dishes){
const markup = dishes.map(dish=>temlateItem(dish)).join('');
refs.ulMenu.insertAdjacentHTML('beforeend', markup)
}
