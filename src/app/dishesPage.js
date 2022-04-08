export function loadDishes() {
    const dishesPage = document.createElement('div');
    dishesPage.setAttribute('id', 'dishes');
    const titleHeader = document.createElement('h1');
    const title = document.createTextNode("dishesPage");
    titleHeader.appendChild(title);
    dishesPage.appendChild(titleHeader);
    return dishesPage
}
