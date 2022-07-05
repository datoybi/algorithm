// 남들은 dfs로 풀었지만 나는 순열을 이용해서 풀었다.

function solution(k, dungeons) {
  const arr = [...dungeons];
  const dictionary = getDictionary(arr, arr.length);
  let answer = -1;

  dictionary.forEach((el) => {
    let result = 0;
    let score = k;
    for (let i = 0; i < el.length; i++) {
      if (score >= el[i][0]) {
        score -= el[i][1];
        result += 1;
      } else {
        break;
      }
    }
    answer = Math.max(result, answer);
  });
  return answer;
}

const getDictionary = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const combinations = getDictionary(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
};
