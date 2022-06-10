// 푸는중.. 자꾸 시간초과가나서 array1, array2 구하는 부분을 바꾸니 풀렸다.
function solution(N, stages) {
  let array1 = Array(N + 1).fill(0);
  let array2 = Array(N + 1).fill(0);

  stages.sort((a, b) => a - b);
  stages.forEach((stage) => {
    array1[stage] =
      array1[stage] === 0
        ? stages.filter((el) => stage === el).length
        : array1[stage];
    array2[stage] =
      array2[stage] === 0
        ? stages.filter((el) => stage <= el).length
        : array2[stage];
  });
  const failRate = [];
  for (let i = 1; i <= N; i++) {
    failRate.push([array1[i] / array2[i] || 0, i]);
  }
  const sorted = [...failRate].sort((a, b) => {
    return b[0] - a[0];
  });
  const answer = sorted.map((el) => el[1]);
  return answer;
}

// 모범답안 - 전반적으로 비슷한데 나는 array의 인덱스로 수를 나타내서 조금 더 복잡해진것같다.
function solution(N, stages) {
  let result = [];
  for (let i = 1; i <= N; i++) {
    let reach = stages.filter((x) => x >= i).length;
    let curr = stages.filter((x) => x === i).length;
    result.push([i, curr / reach]);
  }
  result.sort((a, b) => b[1] - a[1]);
  return result.map((x) => x[0]);
}
