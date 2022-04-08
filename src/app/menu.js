export function createMenu() {
    function createMenuBtn(id) {
        const btn = document.createElement('div');
        btn.classList.add('menuBtn');
        btn.setAttribute('id', id);
        btn.textContent = id;
        return btn
    }
    const menu = document.createElement('div');
    menu.setAttribute('id', 'menu');
    menu.appendChild(createMenuBtn('Home'));
    menu.appendChild(createMenuBtn('Dishes'));
    menu.appendChild(createMenuBtn('Contacts'));
    return menu
}