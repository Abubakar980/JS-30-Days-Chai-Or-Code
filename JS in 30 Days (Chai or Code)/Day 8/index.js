// Activity 1:
// Task 1:
let Name = "Abubakar";
let age = 21;
let school = "UET TAXILA";
console.log(`Name: ${Name} , Age: ${age}`);

// Task 2:
console.log(`Aoa, my name is ${Name},
             my age is ${age} 
             and I study in ${school}`);

// Activity 2:
// Task 3:
let arrNumber = [1, 2, 3, 4, 5];
let [firstNumber, secondNumber, thirdNumber, forthNumber, fifthNumber] =
  arrNumber;
console.log(firstNumber, secondNumber);

// Task 4:
let book = {
  title: "Computer ,",
  author: "Abubakar",
};
let { title, author } = book;
console.log(title, author);

// Activity 3:
// Task 5:
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [...arr1, 6, 7, 8];
console.log(arr2);

// Task 6:
function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}
console.log(sum(1, 2, 3, 4, 5));

// Activity 4:
// Task 7:
let twoNumProd = (a, b = 1) => {
  let prod = a * b;
  console.log(prod);
};
console.log(twoNumProd(3));
console.log(twoNumProd(3, 5));

// Activity 5:
// Task 8:
let celebrate = "wish";
let birthday = {
  month: "September",
  date: 24,
  year: 2004,
  [celebrate]() {
    console.log(`My birthday is on ${this.date} ${this.month} ${this.year}`);
  },
};
birthday.wish();

// Task 9:
let day = "Saturday";
let workout = {
  [day]: "Today is Abs Day.",
};
console.log(workout);
