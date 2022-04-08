export function loadHome() {
    const homePage = document.createElement('div');
    homePage.setAttribute('id', 'home');
    const titleHeader = document.createElement('h1');
    const title = document.createTextNode("homePage");
    titleHeader.appendChild(title);
    homePage.appendChild(titleHeader);
    return homePage
}
