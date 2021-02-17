/*
  WRITE YOUR SOLUTION HERE
*/

class Movie {
  constructor(title, director, genre, releaseYear, rating) {
    this.title = title;
    this.director = director;
    this.genre = genre;
    this.releaseYear = releaseYear;
    this.rating = rating;
  }

  getOverview() {
    console.log(`${this.title}, a ${this.genre} film by ${this.director} was released in ${this.releaseYear}. It received a rating of ${this.rating}.`);
  }
}

const GreatEscape = new Movie("The Great Escape", "John Sturges", "War", "1963", "94%");
GreatEscape.getOverview();
console.log(GreatEscape);