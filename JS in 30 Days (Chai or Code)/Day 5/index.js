//Activity 1: Function Declaration
// Task 1:
function evenOrOdd(number){
    if(number%2==0){
        console.log(`${number} is an Even number!`); 
    }
    else{
        console.log(`${number} is an Odd number!`);
    }
}
evenOrOdd(7);

// Task 2:
function square(num){
    let result=num*num;
    console.log(`The square of ${num} is ${result}`);
}
square(6);

//Activity 2: Function Expressions
// Task 3:
function findMax(a,b){
    if(a>b){
        console.log(`${a} is greater than ${b}`);
    }
    else{
        console.log(`${b} is greater than ${a}`);
    }
}
findMax(4,5)

// Task 4:
function combineStrings(str1,str2){
    console.log(str1 +str2);
}
let str1="I am";
let str2=" Programmer";
combineStrings(str1,str2)

//Activity 3: Arrow Functions
// Task 5:
const sum=(num1,num2)=>{
    let SUM=num1+num2;
    console.log(`The sum of ${num1} + ${num2} = ${SUM}`);
}
sum(7,8)

// Task 6:
const checkString=(string,char)=>{
    return string.includes(char);
}
console.log( checkString("Muhammad Abubakar","k"));

//Activity 4: Function Parameters and deault values
// Task 7:
const productTwoNumbers=(num1,num2=8)=>{
    let prod=num1*num2
    console.log(`The prduct of ${num1} x ${num2} = ${prod}`);
}
productTwoNumbers(2)

// Task 8:
const greeting=(NAME,age=18)=>{
    console.log(`Asalam u alikum my name is ${NAME} and my age is ${age}`);
}
greeting("Abubakar")

//Activity 5: Higher-Order Function 
// Task 9:
const runManyTimes=(func,n)=>{
    for (let i = 0; i < n; i++) {
        func();
    }
}
const func=()=> console.log(`This function is called 5 times`);
runManyTimes(func,5)

// Task 10:
const functionApply=(func1,func2,val)=>{
    return func2(func1(val))
}
const SUM=(num)=> num+num; 
const PROD=(num)=> num*num;

console.log(functionApply(SUM,PROD ,3));