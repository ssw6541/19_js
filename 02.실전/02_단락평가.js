// AND 단락평가

// function calcA() {
//   console.log("a");
//   return false;
// }

// function calcB() { // <- 호출되지 않음
//   console.log("b");
//   return true;
// }

// console.log(calcA() && calcB());

// // a
// // false

// function calcA() {
//   console.log("a");
//   return undefined;
// }

// function calcB() {
//   console.log("b");
//   return true;
// }

// console.log(calcA() && calcB());

// // a
// // undefiend

// function getName(person) { // ①
//   return person.name; // TypeError: undefined에서 프로퍼티를 읽을 수 없다.
// }

// let person;
// let name = getName(person); // ②

// console.log(name);

// function getName(person) {
//   if (person !== undefined) { ①
//     return person.name;
//   } else {
//     return "매개변수가 객체가 아닙니다.";
//   }
// }

// let person;
// let name = getName(person);

// console.log(name);

// // 매개변수나 객체가 아닙니다.

// function getName(person) {
//   if (person !== undefined) {
//     // ①
//     return person.name; // TypeError: null에서 프로퍼티를 읽을 수 없다.
//   } else {
//     return "매개변수가 객체가 아닙니다";
//   }
// }

// let person = null;
// let name = getName(person);

// console.log(name);

// function getName(person) {
//   if (person !== undefined && person !== null) { ①
//     return person.name;
//   } else {
//     return "매개변수가 객체가 아닙니다.";
//   }
// }

// let person = null;
// let name = getName(person);

// console.log(name);

// // 매개변수가 객체가 아닙니다.

// function getName(person) {
//   return person && person.name;
// }

// let person = { name: "이정환" };
// let name1 = getName(undefined);

// let name2 = getName(null);
// let name3 = getName(person);

// console.log(name1);
// console.log(name2);
// console.log(name3);

// // undefined
// // null
// // 이정환

// // or 단락 평가

// function calcA() {
//   console.log("a");
//   return true;
// }

// function calcB() {
//   console.log("b");
//   return false;
// }

// console.log(calcA() || calcB());

// // a
// // true

// const name = "이정환" || undefined;

// console.log(name);

// // 이정환
