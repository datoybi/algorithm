function solution(orders, course) {
  const result = [];
  orders.forEach((el) => {
    const arr = [];
    course.forEach((i) => {
      const combination = getCombinations([...el], i);
      // if(combination) arr.push(...combination);
      if (combination) result.push(...combination);
    });
    // result.push(arr);
  });
  console.log(result.sort());
  const set = new Set();

  /* 
			여기서만 처리 해주면 됨
			[중복 갯수, 메뉴명] 이렇게 추출한 뒤 가장 많이 주문된 메뉴(단 2이상) 배열에 담아 출력!!
	*/
  result.forEach((el) => {
    // console.log(el)
    let cnt = result.filter((el1) => el1 === el).length;
    if (cnt > 1) {
      set.add(el);
    }
  });

  console.log(set);

  var answer = [];
  return answer;
}

const getCombinations = (arr, selectNumber) => {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNumber - 1);
    const attached = combinations.map((el) => {
      let temp = [fixed, ...el];
      temp.sort();
      return temp.join("");
    });
    results.push(...attached);
  });
  return results;
};
