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

  calculateLateFee(daysLate) {
    return Math.ceil(0.25 * daysLate);
  }
}

module.exports = Librarian;
