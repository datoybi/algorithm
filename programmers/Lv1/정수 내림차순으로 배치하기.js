function solution(n) {
  return parseInt(
    [...(n + "")]
      .map((el) => parseInt(el, 10))
      .sort((a, b) => b - a)
      .join(""),
    10
  );
}
