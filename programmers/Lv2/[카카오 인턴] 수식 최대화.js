/*
	와 이거 한 두시간 정도 걸려서 한 문제
	어떻게 접근 할까.. 고민하다가 고민한대로 푸니까 나름 잘 됐다. 어우 힘들게 겨우겨우 풀었다.
*/

function solution(expression) {
  const arr = [];
  const sign = [];

  let s = 0;
  // 부호배열, 숫자배열 나누기
  [...expression].forEach((el, i, array) => {
    if (el === "*" || el === "+" || el === "-") {
      sign.push(el);
      arr.push(parseInt(array.slice(s, i).join(""), 10));
      s = i + 1;
    }
    if (i === array.length - 1)
      arr.push(parseInt(array.slice(s, i + 1).join(""), 10));
  });

  // 가능한 숫자 조합들 추출
  const setSign = [...new Set([...sign])];
  const orderArr = getOrder(setSign, setSign.length);
  let answer = 0;

  // 연산 - 가능한 숫자 조합들을 부호순서들에 맞게 계산하면서 정답 추출
  for (let i = 0; i < orderArr.length; i++) {
    let newArr = [...arr];
    let newSign = [...sign];
    for (let z = 0; z < setSign.length; z++) {
      for (let j = 0; j < newSign.length; j++) {
        if (orderArr[i][z] === newSign[j]) {
          let result;
          if (orderArr[i][z] === "-") result = newArr[j] - newArr[j + 1];
          if (orderArr[i][z] === "+") result = newArr[j] + newArr[j + 1];
          if (orderArr[i][z] === "*") result = newArr[j] * newArr[j + 1];

          newArr.splice(j, 1);
          newSign.splice(j, 1);
          newArr[j] = result;
          j = -1;
        }
      }
    }
    answer = Math.max(Math.abs(newArr[0]), answer);
  }
  return answer;
}

const getOrder = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const combinations = getOrder(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
};
