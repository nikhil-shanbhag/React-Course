// console.log("start");

// setTimeout(() => {
//     console.log("timeout");
// }, 0);

// console.log("end");

// console.log(foo());

// function foo(){
//     return "bar";
// }

// function left (){
//     return console.log("hello");
// }

// function right (){
//     return console.log(true);
// }

// console.log(left() && right());

// function short(){
//     return (
//         true || console.log("hello world")
//     )
// }

// console.log(short())

// let students = [
//   {
//     name: "Piyush",
//     rollNumbr: 31,
//     marks: 80,
//   },
//   {
//     name: "Jenny",
//     rollNumbr: 15,
//     marks: 69,
//   },
//   {
//     name: "Kaushal",
//     rollNumbr: 16,
//     marks: 35,
//   },
//   {
//     name: "Dilpreet",
//     rollNumbr: 7,
//     marks: 55,
//   },
// ];

// const sum = students.reduce((prev, curr) => prev + curr.marks, 0);
// console.log(sum);

// (function square (num){
//   console.log (num * num)
// })(5)

// for (let i = 0; i < 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 2000);
// }

// var x = 21;

// var fun = function () {
//   console.log(x);
//   var x = 20;
// };
// fun();

// function createBase(name) {
//   return function (innerNum) {
//     console.log(name + innerNum);
//   };
// }

// var addsix = createBase(45);
// addsix(5);

// for (var i = 0; i < 3; i++) {
//   function inner(i) {
//     setTimeout(() => {
//       console.log(i);
//     }, 1000);
//   }

//   inner(i);
// }

// function f(a) {
//   return function (b) {
//     return `${a} ${b}`
//   };
// }

// console.log(f(5)(6));

// function sum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(sum(2)(6)(1));

// const user = {
//   name: "john",
//   age: 45,
//   "like this video": "sure"
// }

// for (const key in user) {
//   console.log(user[key]);
// }

// let nums = {
//   a: 100,
//   b: 200,
//   title: "My nums",
// };

// function multiplyBytwo(obj) {
//   for (key in obj) {
//     if (typeof obj[key] === "number") {
//       obj[key] *= 2;
//     }
//   }
// }

// multiplyBytwo(nums)

// console.log(nums);

// const a = {};
// const b = { key: "b" };
// const c = { key: "c" };

// a[b] = 123;
// a[c] = 456;

// console.log(a[b]);

// const user ={
//   name: "raj",
//   age: 65,
// }

// const strObj=(JSON.stringify(user));
// localStorage.setItem("user1", user)

// console.log(JSON.parse(strObj));

// const array = ["a", "b"]
// const elements = [0, 1, 2, 3]

// array.push.apply(array, elements)

// const btn = document.querySelector(".increment_btn");
// const btnPress = document.querySelector(".increment_pressed");
// const count = document.querySelector(".increment_count");

// var pressedCount = 0;
// var triggerCount = 0;

// // const debouncedCount = _.debounce(() => {
// //   count.innerHTML = ++triggerCount;
// // }, 800);

// const throttledCount = _.throttle(()=>{
//   count.innerHTML = ++triggerCount;
// }, 800)

// btn.addEventListener("click", () => {
//   btnPress.innerHTML = ++pressedCount;
//   throttledCount();
// });

// const arr = ["a", "b"]
// const ele = [ 0, 1, 2]

// const new1 = [...arr, ...ele]
// console.log(new1)

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// let newArr = arr.reduce((prev, curr) => prev + curr);

// console.log(newArr);

// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum);

// function left (){
//     return console.log("hello");
// }

// console.log(left());

// for (let i = 0; i < 5; i++) {
//     console.log(i);  // Prints numbers 0 through 4
//   }

// const obj = { a: 1, b: 2, c: 3 };
// for (let prop in obj) {
//   console.log(`${prop}: ${obj[prop]}`);  // Prints "a: 1", "b: 2", "c: 3"
// }

// const obj = { a: 1, b: 2, c: 3 };
// Object.keys(obj).forEach(key => console.log(`${key}: ${obj[key]}`));

// const obj = { a: 1, b: 2, c: 3 };
// Object.keys(obj).map(key => console.log(`${key}: ${obj[key]}`));

// const arr = ['apple', 'banana', 'cherry'];
// for (let fruit of arr) {
//   console.log(fruit);  // Prints "apple", "banana", "cherry"
// }
// arr.map((ar)=>console.log(ar))
// let i = 0;
// while (i < 5) {
//   console.log(i);  // Prints numbers 0 through 4
//   i++;
// }

// let i = 0;
// do {
//   console.log(i);  // Prints numbers 0 through 4
//   i++;
// } while (i < 5);


// let name1 = "harry"
// console.log(name1.length); 

// console.log("har\"".length);

// let n = [1 , 2, 4]
// console.log(n.pop(10,14,15));
// console.log(n);

function loadScript(src, callback) {
    let script = document.createElement("script");
    script.src = src;
    script.onload = ()=>callback(script);
    document.head.append(script)
}

loadScript("https://google.com", (script)=>{
    alert("Script is loaded")
    alert(script.src)
})