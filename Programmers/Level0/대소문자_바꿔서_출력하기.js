const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input = [line];
}).on("close", function () {
  str = input[0];
  let answer = "";
  for (let c of str) {
    answer +=
      c.charCodeAt() < "a".charCodeAt() ? c.toLowerCase() : c.toUpperCase();
  }
  console.log(answer);
});
