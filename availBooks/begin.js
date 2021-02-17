/*
  WRITE YOUR SOLUTION HERE
*/

class Book {
  constructor(title, author, ISBN, noCopies) {
    this.title = title;
    this.author = author;
    this.ISBN = ISBN;
    this.noCopies = noCopies;
  }

  get availability() {
    switch (true) {
      case this.noCopies >= 10:
        return "In Stock"
        break;
      case this.noCopies === 0:
        return "Out of stock";
        break;
      default:
        return "Low stock";
    };
  }

  sell(noSold = 1) {
    noSold <= this.noCopies ? this.noCopies -= noSold : this.noCopies = 0;
  }

  restock(noOrdered) {
    this.noCopies += noOrdered;
  }

}

const SlaughterhouseFive = new Book("Slaughterhouse-Five", "Kurt Vonnegut, Jr", 9780385333849, 2);
console.log(`${SlaughterhouseFive.title} by ${SlaughterhouseFive.author} has ${SlaughterhouseFive.availability} with ${SlaughterhouseFive.noCopies} copies.`);
SlaughterhouseFive.sell(1);
console.log(`${SlaughterhouseFive.title} by ${SlaughterhouseFive.author} has ${SlaughterhouseFive.availability} with ${SlaughterhouseFive.noCopies} copies.`);
SlaughterhouseFive.restock(10);
console.log(`${SlaughterhouseFive.title} by ${SlaughterhouseFive.author} has ${SlaughterhouseFive.availability} with ${SlaughterhouseFive.noCopies} copies.`);

