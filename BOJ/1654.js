/*
!: 랜선 자르기
가지고 있는 랜선의 개수 k (1 <= k <= 10,000)
필요한 랜선의 개수 N (1 <= N <= 1,000,000)
K <= N
랜선의 길이 L 1 <= L <= 2^31 -1 (약 21억)

정답의 최대치
- 정답의 범위 : 1 ~ 21억
- 랜선의 길이의 합 : 랜선의 길이의 최댓값 * 랜선의 개수 L * K
21억 * 10,000 = 21 = 약 10조  -> Number형 가능

키워드
!: 적어도 N만큼의 랜선을 얻기위해 자를수 있는 최댓값을 구하는 프로그램을 작성하세요

접근 
1. 정답을 "매개변수(Parameter)"로 만들고 yes/no 문제(결정 문제)로 바꿔보기
	원래 문제 : 원하는 개수 N을 얻기위해 자를 수 있는 최대 길이는 몇cm 인가?
	어떤 길이로 잘랐을 때, 원하는 개수 N만큼을 얻을 수 있는가? yes / no
2. 모든 값에 대해서 yes/no를 채웠다고 생각했을 때, 정렬된 상태인가?
	네, 위에서 아래로 진행하니까

어떤 길이로 잘랐을 때, 원하는 개수 N만큼을 얻을 수 있는가?
시간복잡도 NlogL = 10^4 * log * 21억 = 90,000

!: 회고
아니.. 로직은 맞는데 왜자꾸 틀리지? 했는데
큰 수를 parseInt 하면 데이터가 유실되었다. 그래서 혹시나 해서 Math.floor를 했는데 값이 잘 나왔다.
이 둘의 차이점을 공부해봐야겠다 

*/

(() => {
  const readline = require("readline");
  const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  const buffer = [];
  r1.on("line", (line) => {
    buffer.push(line);
  }).on("close", () => {
    main(buffer);
  });
})();

const main = (input) => {
  const [K, N, lines] = setArray(input);
  const result = binarySearch(1, Number.MAX_SAFE_INTEGER, lines, N);
  console.log(result);
};

const setArray = (input) => {
  const [K, N] = input
    .shift()
    .split(" ")
    .map((el) => parseInt(el, 10));
  const lines = [...input];
  return [K, N, lines];
};

const binarySearch = (left, right, lines, N) => {
  let ans = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2, 10);
    if (determination(mid, lines, N)) {
      ans = mid;
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return ans;
};

const determination = (h, lines, N) => {
  let sum = 0;
  lines.forEach((el) => {
    sum += Math.floor(el / h, 10);
  });
  return sum >= N;
};
