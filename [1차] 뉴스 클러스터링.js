// https://programmers.co.kr/questions/25235
// 교집합 수정 요함

function solution(str1, str2) {
  const arr1 = [...str1.toLowerCase()];
  const arr2 = [...str2.toLowerCase()];
  let set1 = [];
  let set2 = [];

  for (let i = 0; i < arr1.length - 1; i++) {
    if (i != arr1.length - 1) {
      let str = `${arr1[i]}${arr1[i + 1]}`;
      if (isString(str) === true) set1.push(`${arr1[i]}${arr1[i + 1]}`);
    }
  }

  for (let i = 0; i < arr2.length - 1; i++) {
    if (i != arr2.length - 1) {
      let str = `${arr2[i]}${arr2[i + 1]}`;
      if (isString(str) === true) set2.push(`${arr2[i]}${arr2[i + 1]}`);
    }
  }
  console.log(set1);
  console.log(set2);

  let inArr = [];
  let temp1 = [...set1];
  let temp2 = [...set2];

  set1 = ["a", "a", "b", "b", "c"];
  set2 = ["a", "b", "b", "d", "e"];
  // 여기 수정해보기 교집합..
  for (let i = 0; i < set1.length; i++) {
    for (let j = 0; j < set2.length; j++) {
      if (set1[i] === set2[j]) {
        inArr.push(set1[i]);
        break;
      }
    }
  }

  console.log(inArr);
  let answer =
    Math.floor(
      (inArr.length / (set1.length + set2.length - inArr.length)) * 65536
    ) || 65536;
  return answer;
}

function isString(str) {
  let isSpecial = /[`+-=~!@#$%^&*|\\\'\";:\/?]/gi;
  let isNum = /[0-9]/;
  if (
    str.search(/\s/) !== -1 ||
    isSpecial.test(str) === true ||
    isNum.test(str) === true
  ) {
    return false;
  }
  return true;
}
