/*
	https://www.acmicpc.net/problem/20436
	20436
	어려워보였지만 은근 간단했던 문제
*/

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");

let [sl, sr] = input[0].split(" ");
const words = input[1].split("");

const left = {
  q: [0, 0],
  w: [1, 0],
  e: [2, 0],
  r: [3, 0],
  t: [4, 0],
  a: [0, 1],
  s: [1, 1],
  d: [2, 1],
  f: [3, 1],
  g: [4, 1],
  z: [0, 2],
  x: [1, 2],
  c: [2, 2],
  v: [3, 2],
};

const right = {
  y: [0, 0],
  u: [1, 0],
  i: [2, 0],
  o: [3, 0],
  p: [4, 0],
  h: [0, 1],
  j: [1, 1],
  k: [2, 1],
  l: [3, 1],
  b: [-1, 2],
  n: [0, 2],
  m: [1, 2],
};

let count = 0;

words.forEach((el) => {
  if (Object.keys(left).includes(el)) {
    count += Math.abs(left[sl][0] - left[el][0]) + Math.abs(left[sl][1] - left[el][1]);
    sl = el;
  } else {
    count += Math.abs(right[sr][0] - right[el][0]) + Math.abs(right[sr][1] - right[el][1]);
    sr = el;
  }
  count += 1;
});

console.log(count);
