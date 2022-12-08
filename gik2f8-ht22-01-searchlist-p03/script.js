'use strict';

let bookList = [];

window.addEventListener('load', () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener('keyup', (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  let existingBookInfo = document.getElementById("displayBooks"); 
  const existingItem = document.querySelector('.book-list');
  const root = document.getElementById('root');
  existingBookInfo && bookList.length == 10 && existingBookInfo.remove();
  existingItem && root.removeChild(existingItem);
  bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
  const books = document.querySelectorAll('.book-list__item');

  books.forEach(book => {
    book.addEventListener('mouseover', (e) => renderBookDetails(e));
  })
};

async function renderBookDetails(e) {

  const root = document.getElementById('root');
  let details = await getBookId(e.target.id);
  root.insertAdjacentHTML('beforeend', BookChest(details));

  e.target.addEventListener("mouseout",(e) =>{
    let existingItem = document.getElementById("displayBooks");
    existingItem && existingItem.remove(); 
}); 
}
