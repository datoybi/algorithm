function solution(n, a, b) {
  const arr = [];
  for (let i = 1; i <= n; i++) arr.push(i);
  let cnt = 0;
  let people = [...arr];
  let i = 0;
  let tmpArr = [];
  while (true) {
    const isA = [people[i], people[i + 1]].includes(a);
    const isB = [people[i], people[i + 1]].includes(b);

    if (isA && isB) {
      cnt += 1;
      break;
    } else if (isA || isB) {
      tmpArr.push(isA ? a : b);
    } else {
      tmpArr.push(people[i]);
    }

    if (i >= people.length - 2) {
      i = 0;
      cnt += 1;
      people = [...tmpArr];
      tmpArr = [];
    } else {
      i += 2;
    }
  }
  return cnt;
}

// 모범 답안 절반씩 나눈 뒤 올림해서 a, b 를 추출하고 카운트해서
// 결과를 도출하는 것 같은데 왜 답이 도출되는지는 잘 모르겠다.

function solution(n, a, b) {
  let answer = 0;
  while (a !== b) {
    a = Math.ceil(a / 2);
    b = Math.ceil(b / 2);
    answer++;
  }

  return answer;
}
