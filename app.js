console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const arr1 = [2, 22, 12, 17, 18, 39, 129];
let sum = 0;
function arraySum(sum) {
  for (let i = 0; i < arr1.length; i++) {
    sum += arr1[i];
    // console.log(sum);
  }
  return sum;
}

// arraySum(sum);

// HIGHER ORDER FUNCTIONS
// arr1.forEach((sum) => {
//     sum += sum;
//     console.log(sum);
// })

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// Using Dot Notation to assign
// const book = {};
// (book.title = "The Institute"),
//   (book.author = "Stephen King"),
//   (book.noOfPages = 557),
//   (book.readCount = "one");

const book = {
  title: "The Institute",
  author: "Stephen King",
  noOfPages: 557,
  readCount: "one",
};

book.info = function () {
  return `${this.title} was written by ${this.author} and has ${this.noOfPages} pages. Hayden has read ${this.title}
${this.readCount} time(s).`;
};

// console.log(book.info());

// Exercise 3
console.log("EXERCISE 3:\n==========\n");

// My Attempt
// let sentence = "The quick brown fox jumps over the lazy dog";

// let wordArray = sentence.split(" ");
// console.log(wordArray);

// for (let i = wordArray.length - 1; i > 0; i--) {
//   let result = [];
//   let charArray = wordArray[i].split("");
//   let revWord = charArray.join("");
//   result.unshift(revWord[i]);
//   return result.join("");
// }
// console.log(result);


// In Class Attempt
let sentence = "The quick brown fox jumps over the lazy dog";

function reverseWord(sentence) {
  let result = [];
  let words = sentence.split(" ");
  console.log("these are the words split", words);
  for (let i = 0; i < words.length; i++){
    let letters = words[i].split('');
    console.log("these are the letters split", letters);
    for (let j = letters.length -1; j >= 0; j--) {
      result.push(letters[j]);
      console.log("this is after push for result", result)
    }
    result.push(" ");
  }
  return result.join('');
}

console.log(reverseWord(sentence));