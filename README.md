## sort()

- 시간복잡도 : O(n log n)
- 자바스크립트는 정렬할 때 숫자도 유니코드(문자열) 취급한 뒤 정렬한다.그래서 return a - b 을 해주는데 각각의 의미는 아래와 같다.
- 음수가 리턴되면 a < b 를 의미,양수가 리턴되면 a > b 를 의미,0이 리턴되면 a == b을 의미.

```jsx
const arr1 = [100, 3, 20];
arr1.sort(); // [ 100, 20, 3 ]

arr1.sort(function (a, b) {
  return a - b;
});

console.log(arr1); // [ 3, 20, 100 ]
```

### 2차원 sort

```jsx
const arr = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

// 오름차순
arr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

console.log(arr);
// [ [ 2, 2 ], [ 4, 3 ], [ 4, 5 ], [ 6, 6 ], [ 10, 3 ] ]

// 내림차순
arr.sort((a, b) => b[0] + b[1] - (a[0] + a[1]));

console.log(arr);
// [ [ 10, 3 ], [ 6, 6 ], [ 4, 5 ], [ 4, 3 ], [ 2, 2 ] ]

// arr[0]이 같으면 arr[1] 기준으로 오름차순 정렬
arr.sort((a, b) => {
  if (a[0] === b[0]) {
    return a[1] - b[1];
  } else {
    return a[0] - b[0];
  }
});

console.log(arr);
//  [ [ 2, 2 ], [ 4, 3 ], [ 4, 5 ], [ 6, 6 ], [ 10, 3 ] ]
// https://ywtechit.tistory.com/269
```

## 각각의 메서드에 대한 시간복잡도

[https://kimyejin.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Array-%EB%A9%94%EC%86%8C%EB%93%9C-%EB%B0%8F-%EC%98%88%EC%A0%9C%EC%97%90-%EB%8C%80%ED%95%9C-%EC%8B%9C%EA%B0%84-%EB%B3%B5%EC%9E%A1%EB%8F%84-Big-O](https://kimyejin.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Array-%EB%A9%94%EC%86%8C%EB%93%9C-%EB%B0%8F-%EC%98%88%EC%A0%9C%EC%97%90-%EB%8C%80%ED%95%9C-%EC%8B%9C%EA%B0%84-%EB%B3%B5%EC%9E%A1%EB%8F%84-Big-O)

## JS 에서 Number 범위? '약 천조'

= 9007199254740991 ~ -9007199254740991 = (2^53 - 1) ~ -(2^53 - 1)

획인도 해보기 console.log( Number.isSafeInteger(a) );

[https://hanch-dev.tistory.com/4](https://hanch-dev.tistory.com/4)

[https://serzhul.io/Algorithm/%EB%B0%B0%EC%97%B4%EA%B3%BC-%EA%B0%9D%EC%B2%B4%EC%9D%98-%EC%84%B1%EB%8A%A5-%EB%B6%84%EC%84%9D-(big-o)/](<https://serzhul.io/Algorithm/%EB%B0%B0%EC%97%B4%EA%B3%BC-%EA%B0%9D%EC%B2%B4%EC%9D%98-%EC%84%B1%EB%8A%A5-%EB%B6%84%EC%84%9D-(big-o)/>)

아 인싸이트 얻은게 console.log를 매번 찎으면 안된다! 되도록 변수에 담아서 한번만 뿌리기

왜냐하면 찾아보니 console.log()의 시간복잡도가 O(N)인데 N이 무한대까지 커지게 된다면 시간을 꽤나 잡아 먹을 수 도 있기 때문에 굳이.. 매번 찎지 않아도 되는 쪽을 택하자

[https://developer-alle.tistory.com/393](https://developer-alle.tistory.com/393) 나도 parseint했다가 에러나서 math.floor 했는데 통과했었다. parseInt보다는 Math.floor를, Math.floor 보다는 ~~ 쓰기(빠름빠름)!@#

## 문풀하다가 느낀점

- json 지양하기 -> 이차원 삼차원 가면 배열이 다루기 훨 쉽다..
- 중복제거엔 Set 사용하기
- 정규표현식 공부하기 \* 2
- if문에 0 들어가면 무조건 false!

### js array 중복 채크

```jsx
function solution(arr) {
  const dic = [...new Set(arr)]; // 중복 제거한 dic
  const answer = [];

  dic.forEach((el) => {
    const count = arr.filter((el2) => el2 === el).length; // 원소 갯수 세기
    answer.push([el, count]);
  });
  return answer;
}

console.log(solution([1, 2, 3, 3]));
```

set 사용 (전체 중복값 없앨 때)

```jsx
const arr = [...new Set(nums)];
```

## 정규식

### 공백 제거

```jsx
console.log("was".search(/\s/)); // 공백이 없으면 -1
console.log(" ".search(/\s/)); // 공백이 있으면 0
```
