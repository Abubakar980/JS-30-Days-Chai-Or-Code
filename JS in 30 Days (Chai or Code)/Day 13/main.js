import { add as addNumber } from "./task1.js";
import { person } from "./task2.js";
import { add, subtract } from "./task3.js";
import multiply from "./task4.js";
import * as utils from "./task5.js";
import _ from "lodash";
import axios from "axios"

console.log(addNumber(2,3)); // Output: 5

console.log(person.name);  // Output: Abubakar
person.greet(); // Output: Asalam u alaikum, My name is Abubakar

console.log(add(5,6)); // Output: 11
console.log(subtract(4,2)); // Output: 2

console.log(multiply(5,6)); // Output: 30

console.log(utils.PI); // Output: 3.14
console.log(utils.square(3)); // Output: 9
console.log(utils.cube(5)); // Output: 125

// Activity 4: Using Third-Party Modules
// Task 6:
const arr=[1,2,3,4]
console.log(_.reverse(arr)); // Output: [4, 3, 2, 1]

// Task 7:
axios
.get("https://api.example.com/data")
.then((response)=>{
    console.log(response.data);
})
.catch((err)=>{
    console.error("Error Fetching DAta:", err);
})