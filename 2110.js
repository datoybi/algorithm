/*
	!: 공유기 설치
	집 2 <= N <= 200,000 
	공유기 2 <= C <= N 
	집의 좌표 0 <= x <= 1,000,000,000
	한 집에는 공유기 하나
	가장 인접한 두 공유기 사이의 거리를 가능한 크게 하여 설치
	C개의 공유기를 N개의 집에 설치 -> 가장 인접한 두 공유기 사이의 거리를 최대로 하는 프로그램 구하기

	정답의 최대치 
	- 정답의 범위 1 ~ 10억이하
	Number 형으로 가능
	
	가장 인접한 두 공유기 사이의 최대 거리
1. 정답을 "매개변수(Parameter)"로 만들고 yes/no 문제(결정 문제)로 바꿔보기
	원래 문제 : C개의 공유기를 설치했을 때, 최대 인접거리는 얼마인가?
	뒤집은 문제 : 어떤 거리만큼은 거리를 둘때, 공유기 C개를 설치할 수 있는가?
	어떤 거리(D) 만큼은 거리를 둘때, 왼쪽 집부터 되는대로 전부 설치해보기!

2. 모든 값에 대해서 yes/no를 채웠다고 생각했을 때, 정렬된 상태인가?
3. yes/no 결정하는 문제를 풀기

시간복잡도 
주어진 집들을 정렬하기 : O(NlogN) = 
D를 정해서 결정 문제 한번 풀기 : O(N)
정답의 범위를 이분 탐색하면서 풀기 : O(logX)
총 O(NlogN + NlogX) = 30N

답이 1 이상이다?
1 2 4 8 9

이해하기 좀 어려운것 같다. 다음에 풀어보긩...
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

const main = (input) => {
  const [N, C, router] = setArray(input);
  console.log(N);
  console.log(C);
  console.log(router);
  // 공유기를 설치할 집의 좌표를 구하는 것
  const left = 1;
  const right = 1000000000;

  const answer = binarySearch(left, right, router, N, C);
  console.log(answer);
};

const setArray = (input) => {
  const [N, C] = input
    .shift()
    .split(" ")
    .map((el) => parseInt(el, 10));
  const router = [...input].map((el) => parseInt(el, 10)).sort((a, b) => a - b);
  return [N, C, router];
};

const binarySearch = (left, right, router, N, C) => {
  while (left <= right) {
    const mid = parseInt((left + right) / 2, 10);
    if (determination(mid, router, N, C)) {
      answer = mid;
      console.log(mid);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return answer;
};

const determination = (mid, router, N, C) => {
  // 이게 이해가 잘 안된다 담에 보기
  let cnt = 1;
  let last = router[0];
  for (let i = 1; i <= N; i++) {
    if (router[i] - last >= mid) {
      last = router[i];
      cnt += 1;
    }
  }
  return cnt >= C;
};
