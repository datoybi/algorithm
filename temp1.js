let arr = [1, 2, 2, 2, 4, 4, 6];
let test = [];

let cnt = 0;
let now = arr[0];
let nowIdx = 0;

for (let i = 0; i < arr.length; i++) {
  let el = arr[i];

  if (now === el) {
    cnt += 1;
  } else if (now < el) {
    test.push([cnt / (arr.length - i + cnt), now]);
    for (let j = 0; j < el - now; j++) {
      test.push([0, now + j]);
    }
    console.log(el - now);
    test.push([0, el]);
    cnt = 1;
    now = el;
    nowIdx = i;
  } else {
    console.log("없어짐");
    test.push([0, el]);
    cnt = 1;
    now = el;
    nowIdx = i;
  }
}

console.log(test);
test.sort((a, b) => b[0] - a[0]);
console.log(test);
