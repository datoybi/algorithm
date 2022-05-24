/* 부분합
	!: keyword : "이 수열에서 연속된 수들의 부분합"	=> 투포인터

	정답의 최대치
		100,000,000
		10,000(수열의 최대치) * 100,000(N의 최대치) = 1,000,000,000  => number형 가능

	접근
		가장 쉬운 방법 O(N^2) ?
		1. 왼쪽 시작 L 결정 O(N)
		2. 오른쪽 끝을 R을 L부터 시작해서 이동 O(N)
		O(N^2)
		
		투 포인터 O(N)
		L : 구간의 왼쪽 끝
		R : 구간의 오른쪽 끝
		Sum : [L...R] 구간의 합
		1. 왼쪽 시작 L의 이동 횟수 N번
		2. 오른쪽 끝을 R을 이전의 R부터 시작해서 이동
		3. L, R이 각자 최대 N번 이동하니까 O(N)

*/
const { stdin: input, stdout: output } = require("process");

(() => {
  const rl = require("readline").createInterface({ input, output });
  const buffer = [];
  rl.on("line", (line) => {
    buffer.push(line);
  }).on("close", () => {
    main(buffer);
  });
})();

const setArray = (value) => {
  const [N, S] = value[0].split(" ").map((el) => parseInt(el, 10));
  const array = value[1].split(" ").map((el) => parseInt(el, 10));
  return [N, S, array];
};

const main = (value) => {
  const [N, S, array] = setArray(value);
  console.log(N);
  console.log(S);
  console.log(array);
  // solution(N);
  const R = 0;
  let sum = 0;
  let answer = N + 1;

  for (let L = 1; L <= N; L++) {
    // L -1을 구간에서 제외하기
    sum -= array[L - 1];

    // R을 옮길 수 있을 때 까지 옮기기
    while (R + 1 <= N && sum < S) {
      sum += array[R + 1];
    }

    // [L...R]의 합, 즉 sum이 조건을 만족하면 정답 갱신하기
    if (sum >= S) {
      answer = Math.min(answer, R - L + 1);
      console.log(answer);
    }
  }

  // answer 값을 보고 불가능 판단하기
  if (answer === N + 1) {
    answer = 0;
  }
  console.log(answer);
};
