function solution(numbers) {
  var answer = 0;
  let orderArr = [];
  for (let i = 1; i <= numbers.length; i++)
    orderArr.push(...getOrder([...numbers], i));
  const orderSet = new Set(
    [...orderArr].map((el) => parseInt(el.join(""), 10))
  );
  for (let el of orderSet) {
    answer = IsPrime(el) ? answer + 1 : answer;
  }
  return answer;
}

function IsPrime(num) {
  if (num === 0 || num === 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

function getOrder(arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr.map((el) => [el]);
  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const combinations = getOrder(rest, selectNumber - 1);
    const attached = combinations.map((el) => [fixed, ...el]);
    results.push(...attached);
  });
  return results;
}
