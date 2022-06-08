/*
	뭐지 내가 어렵게 생각했나보다. 효율성 검사 있는건 또 처음 해본다 - 정렬은 nlogn 
	다음에 다시 풀어보기
*/
// 통과하지 못한 나의 답
function solution(participant, completion) {
  let [answer] = participant.filter((name) => !completion.includes(name));
  if (!answer) answer = isDuplicated(participant);
  return answer;
}

function isDuplicated(participant) {
  const [result] = participant.filter(
    (name, idx) => participant.indexOf(name) !== idx
  );
  return result;
}

// 통과한 답
function solution(participant, completion) {
  participant.sort();
  completion.sort();
    
  for (var i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}