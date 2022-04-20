// //Rest Operator

// let displayColors = function (message, ...colors) {
//   console.log(message);

//   console.log(colors);

//   for (let i in colors) {
//     console.log(colors[i]);
//   }
// };

// let message = "list of colors";

// // let colors = ["red", "green", "blue"];

// displayColors(message, "red", "green", "blue");

// //spread operator

// let displayspreed = function (message, ...colors1) {
//   console.log(message);
//   for (let j in colors1) {
//     console.log(colors1[j]);
//   }
// };

// let colors1 = ["yellow", "orange", "white"];

// displayspreed(message, ...colors1);

// //object literals

// let firstname = "sakthi";
// let lastname = "vel";

// let person = {
//   firstname,
//   lastname,
// };

// let displayperson = (firstname, lastname, age) => {
//   let fullname = firstname + "" + lastname;
//   return {
//     firstname,
//     lastname,
//     fullname,
//     isSenior() {
//       return age > 50;
//     },
//   };
// };

// let p = displayperson("sakthi", "vel", 23);

// console.log(p.firstname);
// console.log(p.lastname);
// console.log(p.fullname);
// console.log(p.isSenior());

//Array destructuring

let employe = ["sakthi", "vel", "sakthivel"];

let [firstname, lastname, fullname] = employe;
console.log(firstname);
console.log(lastname);
console.log(fullname);
