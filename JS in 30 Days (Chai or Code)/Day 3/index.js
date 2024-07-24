// Activity 1 : If-Else Statements
// Task 1:
let num1 = 20 > 0 ? "Positive" : num1 < 0 ? "Negative" : "Zero";
console.log(num1);

// Task 2:
let age = 4 > 18 ? "Eligible" : "Not Eligible";
console.log(age);

// Activity 2 : Nested If-Else Statements
// Task 3:
let a = 2;
let b = 3;
let c = 4;

if (a > b && a > c) {
  console.log(`${a} is the greatest!`);
} else if (b > a && b > c) {
  console.log(`${b} is the greatest!`);
} else {
  console.log(`${c} is the greatest!`);
}

// Activity 3 : Switch Case
// Task 4:
let Day = 4;
switch (Day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
}

// Task 5:
let marks = 95;
let grade;
switch (true) {
  case marks <= 100 && marks >= 80:
    grade = "A";
    console.log(grade);
    break;
  case marks <= 79 && marks >= 70:
    grade = "B";
    console.log(grade);
    break;
  case marks <= 69 && marks >= 60:
    grade = "C";
    console.log(grade);
    break;
  case marks <= 59 && marks >= 50:
    grade = "D";
    console.log(grade);
  case marks <= 49 && marks >= 0:
    grade = "F";
    console.log(grade);
}

// Activity 4 : Conditional (Ternary) Operator
// Task 6:
let test = 7;
let result = test % 2 == 0 ? "Even" : "Odd";
console.log(result);

// Activity 5 : Combining Conditions
// Task 7:
let year = 1963;
if ((year % 4 == 0 && year % 100 != 0) || year % 100 == 0) {
  console.log("It is a Leap Year!");
} else {
  console.log("It is not a Leap Year!");
}
