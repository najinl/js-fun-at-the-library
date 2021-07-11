function createLibrary(libraryToAdd) {
  var library = {
    name: libraryToAdd,
    shelves: {
      fantasy: [],
      fiction: [],
      nonFiction: [],
    }
  }
  return library;
}

function addBook(libraryName, bookName) {
  var bookGenre = bookName.genre
    libraryName.shelves[bookGenre].push(bookName);
}

function checkoutBook(libraryName, bookName, bookShelf) {
    //iterate over the array located within the library shelves that matches the bookShelf parameter
    for(var i = 0; i < libraryName.shelves[bookShelf].length; i++) {
      //if the element or object within the bookshelf array's "title" key equals the bookName parameter splice the element (object containing book data) at that element to remove the book object
      if(libraryName.shelves[bookShelf][i].title === bookName) {
        libraryName.shelves[bookShelf].splice(i, 1);
          //return the statment included the bookName as being checked out from the libraryName
          return `You have now checked out ${bookName} from the ${libraryName.name}`;
      }
    }
    return `Sorry, there are currently no copies of ${bookName} available at the ${libraryName.name}`;
}

// function checkoutBook(libraryName, bookName, bookShelf) {
//   if(libraryName.shelves[bookShelf][0] === undefined) {
//     return `Sorry, there are currently no copies of ${bookName} available at the ${libraryName.name}`;
//     } else {
//       libraryName.shelves[bookShelf].splice(0,1);
//       return `You have now checked out ${bookName} from the ${libraryName.name}`;
//     }
// }

module.exports = {
  createLibrary,
  addBook,
  checkoutBook
};
