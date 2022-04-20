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
