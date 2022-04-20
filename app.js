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
//object literals
var firstname = "sakthi";
var lastname = "vel";
var person = {
    firstname: firstname,
    lastname: lastname
};
var displayperson = function (firstname, lastname, age) {
    var fullname = firstname + "" + lastname;
    return {
        firstname: firstname,
        lastname: lastname,
        fullname: fullname,
        isSenior: function () {
            return age > 50;
        }
    };
};
var p = displayperson("sakthi", "vel", 23);
console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());
