function createTitle(title) {
  return `The ${title}`;
}

function buildMainCharacter(name, age, pronouns) {
  var character = {
    name: name,
    age: age,
    pronouns: pronouns,
  };

  return character;
}

function saveReview(reviewToAdd, reviews) {
  if(reviews.indexOf(reviewToAdd) === -1) {
    reviews.push(reviewToAdd);
  };
}

function calculatePageCount(title) {
  return title.length * 20;
}

function writeBook(bookTitle, bookCharacter, genre) {
  var book = {
    title: bookTitle,
    mainCharacter: bookCharacter,
    pageCount: bookTitle.length * 20,
    genre: genre,
  };
  return book;
}

function editBook(bookToEdit) {
  bookToEdit.pageCount = bookToEdit.pageCount * 0.75;
}
module.exports = {
  createTitle,
  buildMainCharacter,
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
