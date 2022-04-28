/*

문제 요약
	점 1개당 가장 가까운 같은 색의 점을 찾아 최소값을 구해 다 더하는 것
정답의 최대치
	점 두개 = 2 *10^5 이다.
	점의 최대 수는 5000
	될수 있는 최대 쌍은 5000/2
	즉, 10^5 * 2500 * 2
	
	최대치 : 5 * 10^8 = 5억
	-> int여도 충분하다

시간복잡도
	가장 쉬운 방법 O(N^2)
		10만 * 10만 = 100억
		N이 10만이기 떄문에 통과하지 못함 

	빠르게 풀기 위해선?
		내 풀이 중에 느렸던 곳이 어딘지 생각을 해서 다른 방법 찾기
	
	정렬의 특성인 각 원소마다, 가장 가까운 원소는 자신의 양 옆 중에 있다. 참고
	
	각 점마다, 자신과 가장 가까운 점을 빨리 찾기 O(N log N)
		색깔마다 ArrayList를 만들어주면, 총 배열이 크기는 O(N)이다. (최대값으로 생각해서 1개에 N이 다 있을 수도 있으니까)

*/

// 1 색깔별로 정렬하기
// 2. 양 옆과 비교하여 최소값 더하기

"use strict";

const { mainModule } = require("process");

function solution() {}

const filePath = process.platform === "linux" ? "/dev/stdin" : "input.txt";
const input = require("fs")
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\r\n");

const n = input.shift();
const arr = input.map((el) => el.split(" "));
console.log(arr);

// 같은 색 끼리 묶기
const collected = arr.reduce((acc, el, idx) => {
  const [id, color] = el;
  if (acc[color]) acc[color].push(id);
  else acc[color] = [id];

  return acc;
}, {});

console.log(collected);

// 정렬하기
Object.values(collected).forEach((el) => el.sort((a, b) => a - b));
console.log(Object.values(collected));
let sum = 0;

Object.values(collected).forEach((wrap) => {
  wrap.forEach((el, idx) => {
    console.log(el);
    console.log(idx);
    const min = idx - 1 < 0 ? null : idx - 1;
    // const max = idx+1 > .le ? null : idx-1
    console.log(wrap.length);
  });
});
