function solution(orders, course) {
  // orders를 foreach문 돌려서 course 만큼 조합 만들어서 배열에 push 하기
  const result = [];
  orders.forEach((el) => {
    const arr = [];
    course.forEach((i) => {
      // console.log(el + ' , ' + i)
      const combination = getCombinations([...el], i);
      if (combination.length > 0) arr.push(combination);
    });
    // console.log(arr)
    result.push(arr);
  });

  console.log(result.flat());

  var answer = [];
  return answer;
}

const getCombinations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
};

solution(["ABCFG", "AC", "CDE", "ACDE", "BCFG", "ACDEH"], [2, 3, 4]);
