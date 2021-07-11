function shelfBook(book, sciFiShelf) {
  if(sciFiShelf.length < 3) {
    sciFiShelf.unshift(book);
  }
}

function unshelfBook(title, shelf) {
  for(var i = 0; i < shelf.length; i++) {
    if(shelf[i].title === title) {
      shelf.splice(i, 1);
    }
  }
}

function listTitles(shelf, title) {
  var titlesListed = [];
  for(var i = 0; i < shelf.length; i++) {
    titlesListed.push(shelf[i].title);
  }
  return titlesListed.join(", ");
}

function searchShelf(shelf, title) {
  var isOnShelf = false;
  for(var i = 0; i < shelf.length; i++) {
    if(shelf[i].title === title) {
      isOnShelf = true;
    }
  }
  return isOnShelf;
}
module.exports = {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
};
