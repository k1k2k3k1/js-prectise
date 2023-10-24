function outer () {
    var a = 7;
    function inner (){
     console.log(a);
    }
  inner();
}
outer();

//cut aray lenth
let arr = [1,2,3,4,5,6,7,8,910];
arr.length=3;
console.log(arr);

// //sum all arr
 let arr2 = [1,2,3,4,5,6,7,8,8,2];
let sum = arr2.reduce((a,b)=> a+b)
console.log(sum);

//remove duplicate
let arr3 = new Set([...arr2])
console.log(arr3);

//cama opretor it is calculate first value and sec0nd paramiter print same value
let x= 10;
x = (x++,x);
console.log(x);
//swap two value using deschring;
let a = 20;
b=30;
[a,b] = [b,a];
console.log(a,b)
// Check if a string is "yes"
function isYes(str) {
  return str.toLowerCase() === "yes";
}

// Example
console.log(isYes("yes")); // true
console.log(isYes("no")); // false

// reverse strrin
function reverseString(str) {
  return str.split('').reverse().join('');
}

const or = "Hello, World!";
const reversedString = reverseString(or);
console.log(reversedString); 
//
function reverses(str){
  return str.split('').reverse().join('');
}
const y = "khushbu";
const rev = reverses(y);
console.log(rev);

//rest oprater
const numbers = [1, 2, 3, 4, 5];
const [ ...rest] = numbers;
// console.log(first); // Output: 1
console.log(rest); // Output: [2, 3, 4, 5]
// gives rejult promise pending
const res = new Promise(()=>{

});
console.log(res);