//Rest Operator

let displayColors = function (message, ...colors) {
  console.log(message);

  console.log(colors);

  for (let i in colors) {
    console.log(colors[i]);
  }
};

let message = "list of colors";

// let colors = ["red", "green", "blue"];

displayColors(message, "red", "green", "blue");

//spread operator

let displayspreed = function (message, ...colors1) {
  console.log(message);
  for (let j in colors1) {
    console.log(colors1[j]);
  }
};

let colors1 = ["yellow", "orange", "white"];

displayspreed(message, ...colors1);

//object literals

let firstname = "sakthi";
let lastname = "vel";

let person = {
  firstname,
  lastname,
};

let displayperson = (firstname, lastname, age) => {
  let fullname = firstname + "" + lastname;
  return {
    firstname,
    lastname,
    fullname,
    isSenior() {
      return age > 50;
    },
  };
};

let p = displayperson("sakthi", "vel", 23);

console.log(p.firstname);
console.log(p.lastname);
console.log(p.fullname);
console.log(p.isSenior());

//Array destructuring

let employe = ["sakthi", "vel", "sakthivel"];

//let [firstname, lastname, fullname] = employe;
//OR
let [firstname1, lastname1, fullname = "sadheesh"] = employe;
//OR
//  let [, , fullname] = employe;
console.log(firstname1);
console.log(lastname1);
console.log(fullname);

//object Destructuring

let newobject = {
  fname: "sakthi",
  lname: "vel",
};

let { fname: f, lname: l } = newobject;

console.log(f);
console.log(l);

// string templet

let developer = "sakthi";

console.log(`hi this is${developer}`);
