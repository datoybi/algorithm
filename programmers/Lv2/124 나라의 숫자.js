/* 와아 못풀것 같았는데 차근차근 개념 익히고 하니까 풀렸다. 
	어떻게 푸는지 답이 어떻게 도출되는지 알고나서 코드로 구현해야지 안그러면 헤메다가 꼬여버린다.
	확실하게 이해하는게 얼마나 중요한지 깨닳았다.
*/

function solution(n) {
  const arr = [4, 1, 2];
  let answer = "";

  let [value, rest] = calculate(n);
  answer = `${arr[rest]}${answer}`;

  if (![0, 1, 2].includes(value)) {
    while (true) {
      [value, rest] = calculate(value);
      if ([0, 1, 2].includes(rest)) {
        answer = `${arr[rest]}${answer}`;
      }
      if ([1, 2].includes(value)) {
        answer = `${arr[value]}${answer}`;
        break;
      }
      if (value === 0) break;
    }
  } else {
    if ([1, 2].includes(value)) {
      answer = `${arr[value]}${answer}`;
    }
  }
  return answer;
}

function calculate(n) {
  let value = parseInt(n / 3, 10);
  let rest = n % 3;
  if (rest === 0) {
    value -= 1;
  }
  return [value, rest];
}

// 모범답안 - 봐도 모르겠다;;
function change124(n) {
  return n === 0
    ? ""
    : change124(parseInt((n - 1) / 3)) + [1, 2, 4][(n - 1) % 3];
}
