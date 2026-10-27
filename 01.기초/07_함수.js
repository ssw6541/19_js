// // 함수선언
// def 함수명():
//     수행할 코드
// 함수명()

// function 함수명(){
//     수행할 코드
// }
// 함수명()

// function greeting() {
//   console.log("안녕하세요!");
// }
// greeting();

// function greeting() {
//   console.log("안녕하세요!");
// }

// console.log("함수 시작 전");
// greeting();
// console.log("함수 종료");

// let width = 10;
// let height = 20;

// let area = width * height;

// console.log("면적: ", area); // 면적: 200

// let width1 = 10;
// let height1 = 20;
// let area1 = width1 * height1;

// let width2 = 100;
// let height2 = 200;
// let area2 = width2 * height2;

// console.log("면적: ", area1); // 면적: 200
// console.log("면적: ", area2); // 면적: 20000

// 중첩함수

// function greeting() {
//   function greetingWithName(name) {
//     // ①
//     console.log(`hello! ${name}`);
//   }

//   let name = "이정환";
//   greetingWithName(name); // ②
// }

// greeting(); // hello! 이정환

// func();

// function func() {
//   console.log("hello");
// }

// 함수 표현식

// let greeting = function () {
//   console.log("hello");
// };

// greeting();

// function greetFunc() {
//   console.log("hello");
// }

// let greeting = greetFunc;
// // console.log(greeting);
// greeting();

// 콜백 함수

// function parentFunc(callback) {
//   //     let callback = childFunc
//   console.log("parent");
//   callback();
// }

// function childFunc() {
//   console.log("child");
// }

// parentFunc(childFunc);  // 함수 호출시 함수를 삽입하는 함수

// function repeat(count, callback) {
//   for (let idx = 0; idx < count; idx++) {
//     // console.log(idx + 1);
//     callback(idx + 1);
//   }
// }
// function origin(count) {
//   console.log(count);
// }

// repeat(5, origin); // 1 2 3 4 5

// function repeat(count, callBack) { // ③
//   for (let idx = 0; idx < count; idx++) {
//     callBack(idx + 1);
//   }
// }

// function origin(count) {
//   console.log(count);
// }

// function double(count) { // ①
//   console.log(count * 2);
// }

// repeat(5, double);

// // 출력 : 2 4 6 8 10

// 화살표 함수

// let funcA = (매개변수) => 반환값;

// let funcA = function (매개변수) {
//   return 반환값;
// };

// let greeting = (name) => {
//   let greetingText = `hello ${name}`;
//   return greetingText;
// };

// console.log(greeting("이정환"));

// // hello 이정환

let isConfirm = true;

function confirm(onYes, onNO) {
  if (isConfirm) onYes();
  else onNO();
}

confirm(
  () => console.log("승인"),
  () => console.log("거부"),
);

// 승인
