// let objA = {};
// let objB = new Object();

// // 리터럴, 생성자 문법

// 객체 생성과 프로퍼티

// let objA = {}; // '객체 리터럴' 문법
// let objB = new Object(); // '객체 생성자' 문법

// let person = {
//   name: "이정환",
//   age: 25,
//   age: 30,
//   "like cat": true,
// };

// 프로퍼티 접근
// let person = {
//   name: "이정환",
//   age: 25,
//   "like cat": true,
// };

// const personName = person.name; // ① 점 표기법
// const personAge = person["age"]; // ② 괄호 표기법

// console.log(personName); // "이정환"
// console.log(personAge); // 25

// 프로퍼티 추가

// let person = {
//   name: "이정환",
//   age: 25,
//   "like cat": true,
// };

// person.gender = "male"; // ① 점 표기법을 이용한 프로퍼티 추가
// person["nickname"] = "winterlood"; // ② 괄호 표기법을 이용한 프로퍼티 추가

// console.log(person.gender); // male
// console.log(person["nickname"]); // winterlood

// // 프로퍼티 수정

// let cat = {
//   name: "치삼이",
//   age: 4
// };

// cat.name = "치삼";
// cat["age"] = 5;

// console.log(cat); // {name: "치삼", age: 5}

// // 프로퍼티 삭제

// let cat = {
//   name: "치삼이",
//   age: 4
// };

// delete cat.name;
// delete cat["age"];

// console.log(cat); // {}

// 상수 객체의 프로퍼티

// const obj = {
//   a: 1,
//   b: "text",
// };

// obj.a = 2;
// obj.c = undefined;

// delete obj.b;

// console.log(obj); // {a: 2, c: undefined}

// in 연산자

// let person = {
//   age: 10,
// };

// let isNameExist = "name" in person; // ①

// console.log(isNameExist); // false

// 메서드

let person = {
  name: "이정환",
  sayHi: function () {
    // => () => console.log("안녕")
    console.log("안녕");
  },
};

person.sayHi(); // 안녕
