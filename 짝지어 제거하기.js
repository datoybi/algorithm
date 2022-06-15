// 다시 풀어보기
// 효율성을 통과하지 못한 나의 코드

function solution(s) {
  let arr = [...s];
  let i = 0;
  let answer = 1;
  if (arr.length % 2 !== 0) return 0;

  while (true) {
    if (arr.length === 0) break;
    if (arr.length !== 0 && i === arr.length - 1) {
      answer = 0;
      break;
    }
    if (arr[i] === arr[i + 1]) {
      arr.splice(i, 2);
      i = 0;
    } else {
      i += 1;
    }
  }

  return answer;
}

// 모범답안 - 스텍으로 푼다는게 이런 뜻이구나....
// arr과 같으면 삭제해주고 다르면 넣어주기!!

function solution(s) {
  var arr = [];
  for (var i = 0; i < s.length; i++) {
    if (arr[arr.length - 1] != s[i]) {
      arr.push(s[i]);
    } else {
      arr.pop();
    }
  }
  return arr.length > 0 ? 0 : 1;
}
