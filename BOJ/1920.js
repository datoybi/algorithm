/* 수 찾기
	수가 존재 하는지 알아내기 
	N (1 <= N <= 100,000)
	M (1 <= M <= 100,000)
	
	정답의 최대치
		2^31 = 대략 20억 -> Number형 가능
	
	메모리 제한
		128MB = 128 * 10^6 = 128,000,000 / 4 = 32,000,000 = 3천 2백만 개의 int 사용 가능
		
	접근
		단순한 방법 O(NM)
			시간복잡도
				100,000 * 100,000 = 10^10 = 100억개 연산 (시간초과!! 1억개 연산만 가능) 
		이분 탐색 활용 O(MlogN)
		시간복잡도
		O(MlogN) = M * logN = 100000 * 5 = 50만! (가능) 
	
		1. N을 sort
		2. N을 순회하며 이분 탐색
		3. 탐색하는 도중에 존재하면 1 반환 없으면 0 반환
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
  // 배열 생성 맟 N 정렬
  const [N, n, M, m] = setArray(input);
  // m만큼 n을 순회하며 이분 탐색
  let result = "";
  m.forEach((num) => {
    result += binarySearch(n, 0, N - 1, num) + "\n";
  });
  console.log(result);
};

const setArray = (input) => {
  let [N, n, M, m] = input;
  N = parseInt(N);
  n = n
    .split(" ")
    .map((el) => parseInt(el, 10))
    .sort((a, b) => a - b);
  M = parseInt(M);
  m = m.split(" ").map((el) => parseInt(el, 10));

  return [N, n, M, m];
};

const binarySearch = (n, left, right, num) => {
  while (left <= right) {
    let mid = parseInt((left + right) / 2, 10);
    if (num === n[mid]) {
      return 1;
    } else if (num < n[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return 0;
};