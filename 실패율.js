// 푸는중.. 자꾸 시간초과가 난다..!
function solution(N, stages) {
  let array1 = Array(N + 1).fill(0);
  let array2 = Array(N + 1).fill(0);

  stages.sort((a, b) => a - b);
  stages.forEach((stage, idx) => {
    array1[stage] = stages.filter((el) => stage === el).length;
    array2[stage] = stages.filter((el) => stage <= el).length;
  });

  const failRate = [];
  for (let i = 1; i <= N; i++) {
    failRate.push([array1[i] / array2[i] || 0, i]);
  }
  const sorted = [...failRate].sort((a, b) => {
    return b[0] - a[0];
  });
  const answer = sorted.map((el) => el[1]);
  // console.log(answer)
  return answer;
}
