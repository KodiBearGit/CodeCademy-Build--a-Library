class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }

  get title() { 
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  get ratings() {
    return this._ratings;
  }
  toggleCheckOutStatus() {
    this._isCheckedOut ? this.isCheckedOut = false : this.isCheckedOut = true;
    /*  if (this._isCheckedOut === true) {
      this.isCheckedOut = false;
    } else {
      this.isCheckedOut = true;
    }; */
  }
  getAverageRating() {
    const reducer = (accumulator, currentValue) => {
      return accumulator + currentValue;
    }
    return Math.round(this._ratings.reduce(reducer)/this.ratings.length);
  }
  addRating(rating) {
    return this._ratings.push(rating);
  }
  set isCheckedOut(boolean) {
    this._isCheckedOut = boolean;
  }
}

class Book extends Media {
  constructor(title, author, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author;
  }
  get pages() {
    return this._pages;
  }
 }

 class Movie extends Media {
   constructor(title, director, runTime) {
     super(title);
     this._director = director;
     this._runTime = runTime;
   }
   get director() {
     return this._director;
   }
   get runTime() {
     return this._runTime;
   }
 }

 const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);

console.log(historyOfEverything.getAverageRating());
console.log(historyOfEverything);

const speed = new Movie('Speed', 'Jan de Bont', 116);

console.log(speed);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());