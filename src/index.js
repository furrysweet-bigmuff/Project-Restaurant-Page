import './style/main.sass'
import cover from './assets/tess-cover.jpeg'
import {loadHome} from './app/homePage.js'
import {loadDishes} from './app/dishesPage.js'
import {loadContacts} from './app/contactsPage.js'
import {createMenu} from './app/menu.js'

const contentContainer = document.getElementById('content');

function selectPage(e) {
    // якщо обрана сторінка вже завантажена - нічого не робити
    if (pageContent.firstChild.id.toLowerCase() === e.target.id.toLowerCase()) {
        return
    } 
    
    pageContent.replaceChildren()

    if (e.target.id === 'Home') {
        pageContent.appendChild(loadHome())
    } else if (e.target.id === 'Dishes') {
        pageContent.appendChild(loadDishes())
    } else if (e.target.id === 'Contacts') {
        pageContent.appendChild(loadContacts())
    }
}


contentContainer.appendChild(createMenu());

const pageContent = document.createElement('div');
pageContent.setAttribute('id', 'pageContent');
contentContainer.appendChild(pageContent);

document.querySelectorAll('.menuBtn').forEach(btn => {btn.addEventListener('click', selectPage);})

pageContent.appendChild(loadHome())