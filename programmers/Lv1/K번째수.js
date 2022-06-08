function solution(array, commands) {
  const answer = [];
  commands.forEach((command) => {
    const [i, j, k] = command;
    let result = [...array]
      .filter((el, idx) => i - 1 <= idx && idx <= j - 1)
      .sort((a, b) => a - b)[k - 1];
    answer.push(result);
  });
  return answer;
}
