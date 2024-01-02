/*
	https://www.acmicpc.net/problem/17413
	단어 뒤집기 2

	구현문제
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const plainReverse = (arr) =>
  arr.map((el, i) => el.split("").reverse().join(""));

const reverse = (arr) =>
  arr.map((el, i) => {
    if (i % 2 === 0) return plainReverse(el.split(" ")).join(" ");
    else return `<${el}>`;
  });

let arr = [];
let result = "";

const isPlain = !input[0].includes("<");

if (isPlain) {
  arr = input[0].split(" ");
  result = plainReverse(arr);
  console.log(result.join(" "));
} else {
  arr = input[0].split(/<|>/);
  result = reverse(arr);
  console.log(result.join(""));
}
