function solution(numbers) {
  numbers.sort((a, b) => {
    if (parseInt(a + "" + b, 10) > parseInt(b + "" + a, 10)) return -1;
    if (parseInt(a + "" + b, 10) < parseInt(b + "" + a, 10)) return 1;
    return 0;
  });
  return numbers.reduce((acc, el) => acc + el) === 0 ? "0" : numbers.join("");
}
