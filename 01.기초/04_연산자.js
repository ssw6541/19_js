// let numA = 1; // 대입연산자 = .변수에 값을 할당함
// let numB;
// let numC;

// numB = numC = numA;

// console.log(numA, numB, numC); // 1 1 1

// let number = 10;

// number += 10; // number = number + 10
// console.log(number); // 20;

// number -= 10;
// console.log(number); // 10;

// number *= 10;
// console.log(number); // 100;

// number /= 10;
// console.log(number); // 10;

// number %= 10;
// console.log(number); // 0;

// let a = 1;
// a++; // 값을 1씩 늘릴때 사용
// console.log(a); // 2

// let b = 1;
// b--; // 값을 1씩 줄일때 사용
// console.log(b); // 0

// // 증감 연산자를 변수 a 뒤에 두면, 증감 연산의 결과는 연산자가 있는 다음 행 부터 반영된다.
// let a = 1;
// console.log(a++); // 1
// console.log(a); // 2

// let b = 1;
// console.log(b--); // 1
// console.log(b); // 0

// 만일 증감 연산을 작성한 행에서 반영하고 싶다면 증감 연산자를 변수 앞에 두면 된다.
// let a = 1;
// console.log(++a); // 2
// console.log(a); // 2

// let b = 1;
// console.log(--b); // 0
// console.log(b); // 0

// OR(||) : 둘 중 하나라도 참이면 참
// AND(&&) : 둘 중 하나라도거짓이면 거짓
// NOT(!) : 참이면 거짓, 거짓이면 참

// let boolA = true;
// let boolB = false;

// console.log(boolA || boolB); // true

// let numberA = 2;
// let numberB = 2;
// let numberC = "2";

// // console.log(numberA === numberB);  // true
// // console.log(numberB === numberC);  // false

// console.log(numberA == numberB);
// console.log(numberB == numberC);

// let numberA = 2;
// let numberB = 2;
// let numberC = "2";

// console.log(numberA !== numberB); // false
// console.log(numberB !== numberC); // true
// console.log(numberB != numberC); // false

// let varA = 10;
// let varB = 20;
// let varC;

// // null 병합 연산자
// console.log(varA ?? varB); // 10
// console.log(varC ?? varB); // 20

// 상항 조건 연산자

// const varA = "안녕하세요";

// console.log(typeof varA);
// 조건식 ? 참일 떄 명령 수행 : 거짓일때 명령 수행
// 엑셀(if(조건식, true, false))

// typeof varA === "string"
//   ? console.log("문자 자료형")
//   : console.log("문자 자료형이 아님");

// let num = 1;

// num % 2 === 0 ? console.log("짝수") : console.log("홀수");
