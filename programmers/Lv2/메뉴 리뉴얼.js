// 와우 카카오 lv2 해결!
/*
	중복된거 카운트 할때는
	set 이용해서 중복값 다 삭제한 dic만들고
	set.forEach() {
		filter 사용해서 몇개 있는지 카운트하기
	} 
*/
function solution(orders, course) {
  const result = [];
  orders.forEach((el) => {
    course.forEach((i) => {
      const combination = getCombinations([...el], i);
      if (combination) result.push(...combination);
    });
  });

  const newArr = [...new Set(result)];
  const answer = [];
  newArr.map((el) => {
    const cnt = result.filter((el2) => el === el2).length;
    if (cnt !== 1) answer.push([el, result.filter((el2) => el === el2).length]);
  });

  const real = [];
  course.forEach((c) => {
    let maxvalue = 0;
    answer.forEach((el) => {
      if (el[0].length === c) maxvalue = Math.max(maxvalue, el[1]);
    });
    answer.forEach((el) => {
      if (el[1] === maxvalue && el[0].length === c) real.push(el[0]);
    });
  });
  return real.sort();
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
