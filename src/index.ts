// სწავლის შედეგი 1

console.log("Cinema Management System — giorgi");

// სწავლის შედეგი 2

// 2.1
let movieTitle: String = "World War Z";
let movieYear: number = 2013;
let status: boolean = true;
let review: number = 5;

console.log(
  `ფილმის სახელი: ${movieTitle}, გამოსვლის წელი: ${movieYear}, ხელმისაწვდომობის სტატუსი: ${status}, შეფასება: ${review}/5`
);

// 2.2
function getMovieInfo(title: string, year: number, rating: number) {
  return `ფილმი: ${title}, წელი: ${year}, შეფასება: ${rating}/10`;
}

console.log(getMovieInfo("World War Z", 2013, 7));

// 2.3
let ratingNumber: number = 8;

function getRatingLabel(rating: number): string {
  if (rating >= 9) {
    return "Masterpiece";
  } else if (rating >= 8) {
    return "Great";
  } else if (rating >= 6) {
    return "Average";
  } else {
    return "Poor";
  }
}

const resultLabel: string = getRatingLabel(ratingNumber);
console.log(resultLabel);

// 2.4
const moviesList: string[] = [
  "ასტრალი",
  "მსოფლიო ომი Z",
  "ჰარი პოტერი",
  "ინტერსტელარი",
  "გრელანდია",
];

for (let i = 0; i < moviesList.length; i++) {
  console.log(`ინდექსი ${i}: ${moviesList[i]}`);
}

// სწავლის შედეგი 3

// 3.1
type TMovie = {
  id: number;
  title: string;
  genre: string;
  duration: number;
  rating: number;
};

// 3.2
type IDirector = {
  firstName: string;
  lastName: string;
  country: string;
  birthYear: number;
};

// 3.3
const director: IDirector = {
  firstName: "Marc",
  lastName: "Forster",
  country: "Germany",
  birthYear: 1969,
};

const movie: TMovie = {
  id: 1,
  title: "World War Z",
  genre: "trailer",
  duration: 116,
  rating: 7,
};

console.log(`რეჟისორი: ${director.firstName} ${director.lastName}`);
console.log(`ქვეყანა: ${director.country}`);
console.log(`დაბადების წელი: ${director.birthYear}`);

console.log(`ფილმის სახელი: ${movie.title}`);
console.log(`ჟანრი: ${movie.genre}`);
console.log(`ხანგრძლივობა: ${movie.duration} წუთი`);
console.log(`რეიტინგი: ${movie.rating}/10`);

// სწავლის შეფასება 4

// 4.1

class Actor {
  firstName: string;
  lastName: string;
  nationality: string;
  age: number;

  constructor(
    firstName: string,
    lastName: string,
    nationality: string,
    age: number
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.nationality = nationality;
    this.age = age;
  }
}

// 4.2

const actor = new Actor("Brad", "Pitt", "america", 62);

console.log(
  `სახელი, გვარი: ${actor.firstName} ${actor.lastName} | წარმოშობა: ${actor.nationality} | ასაკი: ${actor.age} წლის.`
);

// 4.3

class LeadActor extends Actor {
  getAwards() {
    return "Oscar,Grammy,BAFTA";
  }
}

const GiorgiLeadActor = new LeadActor(
  "Giorgi",
  "Kenchuashvili",
  "Georgian",
  19
);

console.log(GiorgiLeadActor.getAwards());
