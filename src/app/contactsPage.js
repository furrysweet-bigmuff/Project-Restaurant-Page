export function loadContacts() {
    const contactsPage = document.createElement('div');
    contactsPage.setAttribute('id', 'contacts');
    const titleHeader = document.createElement('h1');
    const title = document.createTextNode("contactsPage");
    titleHeader.appendChild(title);
    contactsPage.appendChild(titleHeader);
    return contactsPage
}
