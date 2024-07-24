// Activity 1: For Loop
// Task 1:
for (let i = 1; i <= 10; i++) {
  console.log(`${i}`);
}
console.log(".........................................");

// Task 2:
let i = 5;
for (let j = 1; j <= 10; j++) {
  console.log(`${i} x ${j} = ${i * j}`);
}
console.log(".........................................");

// Activity 2: While Loop
// Task 3:
let sum = 0;
let num = 1;
while (num <= 10) {
  sum += num;
  num++;
}
console.log("The Sum of Number from 1-10:", sum);
console.log(".........................................");

// Task 4:
let a = 10;
while (a >= 1) {
  console.log(`${a}`);
  a--;
}
console.log(".........................................");

// Activity 3: Do...While Loop
// Task 5:
let number = 1;
do {
  console.log(`${number}`);
  number++;
} while (number <= 5);
console.log(".........................................");

// Task 6:
let numb = 5;
let fact = 1;
do {
  fact = fact * numb;
  numb--;
} while (numb >= 1);
console.log("The Factorial :", fact);
console.log(".........................................");

// Activity 4: For Loop
// Task 7:
for (let i = 1; i <= 5; i++) {
  let stars = "";
  for (let j = 1; j <= i; j++) {
    stars += "*";
  }
  console.log(stars);
}
console.log(".........................................");

// Activity 5: Loop Control Statements
// Task 8:
let conti = 1;
for (conti; conti <= 10; conti++) {
  if (conti === 5) {
    continue;
  }
  console.log(`${conti}`);
}
console.log(".........................................");

// Task 9:
let stopNum = 1;
for (let stopNum = 0; stopNum <= 10; stopNum++) {
  if (stopNum === 7) {
    break;
  }
  console.log(`${stopNum}`);
}
console.log(".........................................");
