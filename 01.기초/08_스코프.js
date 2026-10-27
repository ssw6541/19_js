// let a = 1;

// function foo() {
//   console.log(a);
// }

// function bar() {
//   console.log(a);
// }

// foo();
// bar();

// console.log(a);

// //함수 안에 있는 것도 실행이 되고 밖에 있는것도 실행이 된다.

// function foo() {
//   let a = 1;    // 지역변수
// }

// console.log(a); // 오류: a는 정의되지 않았습니다

// if (true) {
//   let a = 1; //
// }

// console.log(a); //  오류 : a는 정의되지 않았습니다.

// for (let i = 0; i < 10; i++) {
//   let a = 1; //
// }

// console.log(a); //  a는 정의되지 않았습니다.
// console.log(i); //  i는 정의되지 않았습니다.

// function foo() {
//   console.log("foo");
// }

// function bar() {
//   foo();
//   console.log("bar");
// }

// bar();

// // foo
// // bar

// function foo() {
//   console.log("foo");
//   function bar() {
//     // ①
//     console.log("bar");
//   }
// }

// bar(); // ② bar는 정의되지 않았습니다.

// if (true) {
//   function foo() {
//     console.log("bar");
//   }
// }

// foo(); // 오류 : foo는 정의되지 않았습니다.
