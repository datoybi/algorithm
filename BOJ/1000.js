// node BOJ/1000
const fs = require("fs");
// var input = fs.readFileSync("/dev/stdin").toString().split(" ");
const input = fs.readFileSync("input.txt").toString().split(" ");
// console.log(input);
const a = parseInt(input[0], 10);
const b = parseInt(input[1], 10);

console.log(a + b);
