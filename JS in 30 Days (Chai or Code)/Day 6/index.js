// Activity 1:
// Task 1:
let arr1=[1,2,3,4,5]
console.log(arr1);

// Task 2:
let arr2=["Apple", "Orange", "Grapes", "Banana", "Mango"]
console.log(`${arr2[0]} , ${arr2[4]}`);

// Activity 2:
// Task 3:
let arr3=[1,2,3,4,5,6]
arr3.push(8)
console.log(arr3);

// Task 4:
let arr4=[1,2,3,4,5,6,7,8,9,0]
arr4.pop()
console.log(arr4);

// Task 5:
let arr5=[1,2,3]
arr5.shift()
console.log(arr5);

// Task 6:
let arr6=[1,2,3]
arr6.unshift(6)
console.log(arr6);

// Activity 3:
// Task 7:
let arr7=[1,2,3,4,5]
let mapped= arr7.map(x=>x*2)  // while using map
console.log(mapped);          // store result in anoter variable :-)

// Task 8:
let arr8=[1,2,3,4,5,6,7,8,9,10]
let filtered=arr8.filter((num)=>{   // same like map
    return num%2===0
})
console.log(filtered);
// Task 9:
let arr9=[1,2,3,4,5,6,7]
let sum=arr9.reduce((a,b)=>{
    return a+b
},0)
console.log(sum);
// Activity 4:
// Task 10:
let arr10=[1,2,3,4,5,6,7,8,9,10]
for (let i = 0; i <= 9; i++) {
    console.log(arr10[i]);
}
// Task 11:
let arr11=[1,2,3,4,5]
arr11.forEach((element,index)=>{  // forEach accepts 2 parameters
    console.log(`The ${element} is at position ${index}`); 
})
// Activity 5:
// Task 12:
const matrix=[
    [1,2,3],
    [4,5,6],
    [7,8,9],
]
console.log(`Matrix: ${matrix}`);
// Task 13:
const specificElement=matrix[1][1]
console.log(specificElement);