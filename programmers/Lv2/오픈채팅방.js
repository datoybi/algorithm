function solution(record) {
  const user = [];
  const answer = [];

  record.forEach((el) => {
    const split = el.split(" ");
    if (split[0] === "Enter" || split[0] === "Change")
      user[split[1]] = split[2];
  });

  record.forEach((el) => {
    const split = el.split(" ");
    if (split[0] === "Enter")
      answer.push(`${user[split[1]]}님이 들어왔습니다.`);
    if (split[0] === "Leave") answer.push(`${user[split[1]]}님이 나갔습니다.`);
  });

  return answer;
}
