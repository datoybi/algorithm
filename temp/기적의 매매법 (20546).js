/*
기적의 매매법
https://www.acmicpc.net/problem/20546

어우 반례를 못찾겟다
 */

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs").readFileSync(filePath).toString().trim().split("\n");
const N = +input.shift();
const arr = input[0].split(" ").map(Number);

let aMoney = N;
let aValue = N;
let aStock = 0;

let bMoney = N;
let bValue = N;
let bStock = 0;

let increase = 0;
let decrease = 0;

arr.forEach((el, i) => {
  console.log(i);
  // 준현이는 바로 매수한다
  if (el <= aMoney) {
    const curStock = ~~(aMoney / el);
    aStock += curStock;
    aMoney -= curStock * el;
  }

  // 성민이는 3번 매수나 매도가 되면 매수/매도 한다
  if (0 < i && arr[i] < arr[i - 1]) {
    decrease += 1;
    increase = 0;
  } else if (0 < i && arr[i] > arr[i - 1]) {
    increase += 1;
    decrease = 0;
  }

  console.log(`increase : ${increase}\ndecrease : ${decrease}\nel: ${el}\nbStock: ${bStock}\nbMoney: ${bMoney}\n`);
  if (increase >= 3) {
    bMoney += bStock * el;
    bStock = 0;
  }

  if (el <= bMoney && decrease >= 3) {
    const curStock = ~~(bMoney / el);
    bStock += curStock;
    bMoney -= curStock * el;
  }
});

const aTotal = aStock * arr[arr.length - 1];
console.log(aTotal, bMoney);
if (aTotal > bMoney) console.log("BNP");
else if (aTotal < bMoney) console.log("TIMING");
else console.log("SAMESAME");
