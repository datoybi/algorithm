function solution(phone_number) {
  const answer = [...phone_number]
    .map((el, i) => {
      if (phone_number.length - 5 < i) {
        return el;
      }
      return "*";
    })
    .join("");

  return answer;
}
