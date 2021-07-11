class Librarian {
  constructor(name, library) {
    this.name = name;
    this.library = library;
  }

  greetPatron(name, isItMorning) {
    if(isItMorning === true){
      return `Good morning, ${name}!`;
      } else {
        return `Hello, ${name}!`;
        }
  }

  // findBook(bookName) {
  //   if(librarian.library.shelves.fantasy[0] === bookName) {
  //     return `Yes, we have ${bookName}`;
  //   }
  // }

  calculateLateFee(daysLate) {
    return Math.ceil(0.25 * daysLate);
  }
}

module.exports = Librarian;
