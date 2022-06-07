/*
	8번째 줄 때문에 애먹었다. string이지만 숫자로 변환 가능한지("4") 이런 꼴인지 판별하는 문에서 0을 포함했어야 했는데
	0은 if문으로 돌리면 false여서 틀렸다... 주의해야겠다. 이런 경우에는 number형으로 확실히 바꾸고 난 뒤 바꾼 것의 타입을 체크하는 것이 제일 정확해보인다.
*/
function solution(s) {
  const array = [...s];
  const dict = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  let answer = "";
  let temp = "";

  for (let i = 0; i < array.length; i++) {
    if (parseInt(array[i], 10) || array[i] === "0") {
      answer += array[i];
    } else {
      temp += array[i];
      if (dict.includes(temp)) {
        answer += dict.indexOf(temp);
        temp = "";
      }
    }
  }
  return parseInt(answer, 10);
}

// best practice가 있어서 올려본다.
function solution(s) {
  let numbers = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  var answer = s;

  for (let i = 0; i < numbers.length; i++) {
    let arr = answer.split(numbers[i]); // split이 없으면 자기 자신을 반환
    answer = arr.join(i);
  }

  return Number(answer);
}
