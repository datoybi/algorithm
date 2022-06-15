function solution(n) {
  let [value, rest] = calculate(n);
  let [t1, t2] = calculate(value);
  const arr = [4, 1, 2];

  console.log(t1 + " , " + value);
  console.log(arr[t1]);
  console.log(arr[value]);
  // console.log(value + ' , ' + rest)
  // console.log(arr[value] + ' ' + arr[rest]) //arr[rest])

  var answer = "";
  return answer;
}

function calculate(n) {
  let value = parseInt(n / 3, 10);
  let rest = n % 3;

  if (rest === 0) {
    value -= 1;
  }
  console.log(value + " , " + rest);
  return [value, rest];
}
