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
    if (rating >=1 && rating <=5) {
    return this._ratings.push(rating);
    } else {
      console.log("You are using an invalid rating please enter a number from 1 to 5.");
    }
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
   constructor(title, director, runTime, movieCast, songTitles) {
     super(title);
     this._director = director;
     this._runTime = runTime;
     this._movieCast = movieCast;
     this._songTitles = songTitles;
   }
   get director() {
     return this._director;
   }
   get runTime() {
     return this._runTime;
   }
 }

 class CD extends Media {
   constructor(title, artist) {
     super(title);
     this._artist = artist;
     this._songs = [];
   }
   get artist() {
     return this._artist;
   }
   get songs() {
     return this._songs;
   }
   //Fisher-Yates (aka Knuth) Shuffle
   shuffle(songs) {
      let currentIndex = songs.length, temporaryValue, randomIndex;
    
      // While there remain elements to shuffle...
      while (0 !== currentIndex) {
    
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
    
        // And swap it with the current element.
        temporaryValue = songs[currentIndex];
        songs[currentIndex] = songs[randomIndex];
        songs[randomIndex] = temporaryValue;
      }
      return songs;
    }
   }
 
 const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(4);

console.log(historyOfEverything.getAverageRating());
console.log(historyOfEverything);

const speed = new Movie('Speed', 'Jan de Bont', 116, ['Sandra Bullock', 'Keanu Reeves', 'Dennis Hopper'], 'Soul Deep');

console.log(speed);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());

const masterOfPuppets = new CD('Master of Puppets', 'Metallica');

masterOfPuppets.songs.push('Master of Puppets');
masterOfPuppets.songs.push('Lepper Messiah');
masterOfPuppets.songs.push('Orion');
masterOfPuppets.songs.push('Battery');
masterOfPuppets.songs.push('Damage Inc.');
masterOfPuppets.songs.push('Welcome Home (Sanatarium)');
masterOfPuppets.songs.push('Disposable Heroes');
masterOfPuppets.songs.push('The Thing That Should Not Be');

console.log(masterOfPuppets);

masterOfPuppets.shuffle(masterOfPuppets.songs);

console.log(masterOfPuppets);