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
    return this._ratings.reduce(reducer);
  }
  addRating(rating) {
    return this._ratings.push(rating);
  }
  set isCheckedOut(boolean) {
    this._isCheckedOut = boolean;
  }
}

class Book extends Media {
  constructor(title, ) {
    super(title);
  }
 }