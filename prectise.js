const str = "ab";
const c =  str.split("");
console.log(c)
//
function revers(str) {
 return str.split(" ").reverse().join(" ")   
}
const d = " khusbu singh";
const e = revers(d)
console.log(e)

//find prime number
console.log(typeof NaN);
//
// let data =  10 - -10;
// console.log(data)
//
const set = new Set([1,1,2,5]);
console.log(set);

//
// const arr = ["d", "a", 'z']
// const [y] = arr;
// console.log(y);
//
const arr = ["d", "a", 'z']
const [,y] = arr;
 console.log(y);
 //get obj property
 const obj = {name: "khushbu", age: 28, addres: "mp"}
 const {age} = obj;
 console.log(age)
 const obj1 = Object.keys(obj);
  const obj2 = Object.valus(obj);
 console.log(obj2)
 
 