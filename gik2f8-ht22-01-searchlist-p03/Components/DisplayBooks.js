const BookChest = (book) =>  {
  let html = `<div class="border-neutral-900 border-2 bg-white rounded-lg right-20" id="displayBooks"
  style="position:absolute;width:18vw">
              <div class="inline-block ">
              <p>Title: ${book.title}</p> 
              <p>Author: ${book.author}</p> 
              <p>Pages: ${book.pages}</p> 
              <p>Release date: ${book.releaseDate}</p> 
              </div>
              <div class="px-8 py-8">
              <img src="${book.coverImage}" alt="${book.title}"> 
              </div>
            </div>`;

  return html;
};