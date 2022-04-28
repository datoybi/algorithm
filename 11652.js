/*
	가장 많이 가지고 있는 정수 출력, 여러가지면 작은 수 출력
	될 수 있는 수가 엄청 크다 -> long long
	가장 쉬운 방법(N^2)
		첫번째 숫자를 선택한 후 전체에서 몇번인지 확인하는 방법 (시간초과)
	
	같은 정보들은 인접해 있을 것이다.
	같은 숫자를 빨리 보는 방법 
	정렬 -> O(N log N)
	하나씩 순회 -> O(N)
		시간복잡도 O(N log N)
		공간복잡도 O(N)
	
*/
const fs = require("fs");
const [N, ...arr] = fs.readFileSync("input.txt").toString().split("\r\n").map(Number);
// const [N, ...arr] = fs.readFileSync("/dev/stdin").toString().split("\r\n").map(Number);

arr.sort((a, b) => a - b)

function solution(arr){
	let mode = arr[0], modeCnt = 0, curCnt = 0;

	for(let i=0; i<N; i++){
		if(arr[i] === arr[i-1]){
			curCnt += 1;
		} else {
			curCnt = 1;
		}
		if(curCnt > modeCnt) {
			mode = arr[i];
			modeCnt = curCnt;
		}
	// 	console.log(arr[i])
	// 	console.log(curCnt)
	// console.log(modeCnt)
	// 		console.log(mode)
	}
	return mode;
}

console.log(solution(arr))