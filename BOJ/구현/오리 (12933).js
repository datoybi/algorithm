/*
	https://www.acmicpc.net/problem/12933
	오리

	무난하게 풀었던 문제이다.
	반례 quackquac -1
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");

const arr = input[0].split("");
const quack = ["q", "u", "a", "c", "k"];
let result = [];
let value = 0;

for (i = 0; i < arr.length; i++) {
  const index = quack.findIndex((e) => e === arr[i]);
  let flag = false;

  if (index === 0 && !flag) {
    result = [...result, index];
    flag = true;
  } else if (!flag) {
    for (let j = 0; j < result.length; j++) {
      if (index === result[j] + 1 && !flag) {
        result[j] += 1;
        flag = true;
      }
    }
  }

  if (!flag) return console.log(-1);
  else value = Math.max(value, result.filter((e) => e !== 4).length);
}

if (result.filter((e) => e !== 4).length > 0) return console.log(-1);
console.log(value);
