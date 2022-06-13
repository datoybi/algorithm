function solution(n, m) {
  const nArr = getDivide(n);
  const mArr = getDivide(m);

  let gfc = 1;
  let lcm = n * m;

  nArr.map((n) => {
    if (mArr.includes(n)) {
      gfc = Math.max(gfc, n);
    }
  });
  console.log(great);

  // 요기하는 중 !
  const nArr = getMultiply(n);

  var answer = [];
  return answer;
}

function getDivide(num) {
  const arr = [];
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) arr.push(i);
  }
  return arr;
}

function getMultiply(num) {
  const arr = [];
  let i = 1;
  while (true) {
    if (num * i > 1000000) break;
    arr.push(num * i);
  }
  return arr;
}
