/* 먹을 것인가 먹힐 것인가

정답의 최대치
	N = 20000, M = 20000
	모든 쌍이 정답인 경우! N * M = 4억 => Integer!

접근
	가장 쉬운 방법 O(NM)
	해야 하는 일
		B에서 A[i]미만 원소들 찾기
	O(NM) = 4억 -> 잘하면 4초 (시간초과)

	탐색을 빨리 하기! ((N + M)log M) - 이분 탐색 활용!
		이분 탐색을 하기 위해서 전제조건인 (정렬된 상태) 
		이분 탐색(log M)
		A의 원소마다 이분탐색 -> O(N log M)

	정리하자면
		1. B 배열 정렬 한번 -> O(M log N)
		2. 모든 A마다 B 배열에 대해 이분탐색 필요 -> O(N log M)
		3. 총 시간복잡도 O((N + M) log M)
*/

(() => {
  const readline = require("readline");
  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const buffer = [];
  r1.on("line", function (line) {
    buffer.push(line);
  }).on("close", function () {
    main(buffer);
  });
})();

const main = (input) => {
  console.log(input);
  input.shift();
  let aCnt, bCnt;

  for (let i = 0; i < input.length; i += 3) {
    [aCnt, bCnt] = input[i].split(" ");
    a = input[i + 1].split(" ");
    b = input[i + 2].split(" ").sort((a, b) => a - b); // B 정렬

    console.log(a);
    console.log(b);

    
  }
};

// 이분 탐색?? 어캐 할거냐면
// const arr = [0, 2, 3, 4, 5, 6, 7, 8, 9];
// const num = 8;

// let left = 0, right = arr.length - 1;

// console.log(left);
// console.log(right);
// let half = parseInt((left + right) / 2, 10);
// console.log(half);

// let ans;

// while(true){
// 	console.log(left);
// 	console.log(right);
		
// 	if(num === half){
// 		ans = num;
// 		break
// 	};
// 	if(num > half) { // 오른쪽에 있으면
// 		left = half;
// 	} else {
// 		right = half;
// 	}
	
// }

// console.log(ans)