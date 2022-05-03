https://nyang-in.tistory.com/156

/_
sort() - O(n log n)
자바스크립트는 숫자도 문자열 취급한 뒤 정렬한다.
그래서 return a - b 를 준다.
음수가 리턴되면 a < b 를 의미,
양수가 리턴되면 a > b 를 의미,
0이 리턴되면 a == b을 의미한다.
_/

const arr1 = [100, 3, 20];
arr1.sort(); // [ 100, 20, 3 ]

arr1.sort(function (a, b) {
return a - b;
});

console.log(arr1); // [ 3, 20, 100 ]

// https://kimyejin.tistory.com/entry/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Array-%EB%A9%94%EC%86%8C%EB%93%9C-%EB%B0%8F-%EC%98%88%EC%A0%9C%EC%97%90-%EB%8C%80%ED%95%9C-%EC%8B%9C%EA%B0%84-%EB%B3%B5%EC%9E%A1%EB%8F%84-Big-O

JS 에서 Number 범위? 천조
= 9007199254740991 ~ -9007199254740991
= (2^53 - 1) ~ -(2^53 - 1)

획인도 해보기
console.log( Number.isSafeInteger(a) );

https://hanch-dev.tistory.com/4

https://serzhul.io/Algorithm/%EB%B0%B0%EC%97%B4%EA%B3%BC-%EA%B0%9D%EC%B2%B4%EC%9D%98-%EC%84%B1%EB%8A%A5-%EB%B6%84%EC%84%9D-(big-o)/


아 인싸이트 얻은게 console.log를 매번 찎으면 안된다!
되도록 변수에 담아서 한번만 뿌리기

왜냐하면 찾아보니 console.log()의 시간복잡도가 O(N)인데 N이 무한대까지 커지게 된다면 시간을 꽤나 잡아 먹을 수 도 있기 때문에 굳이.. 매번 찎지 않아도 되는 쪽을 택하자

