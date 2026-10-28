// let food = ["짜장면", "피자", "치킨"];
// const newLength = food.push("탕수육");

// console.log(food);
// console.log(`새로운 배열의 길이: ${newLength}`);

// let food = ["짜장면", "피자", "치킨"];
// const newLength = food.push("탕수육", "라자냐");

// console.log(food); // ["짜장면", "피자", "치킨", "탕수육", "라자냐"]
// console.log(`새로운 배열의 길이: ${newLength}`); // 새로운 배열의 길이: 5

// let food = ["짜장면", "피자", "치킨"];
// const removedItem = food.pop(); // ①

// console.log(removedItem); // 치킨
// console.log(food); // ["짜장면", "피자"]

// let food = [];
// const removedItem = food.pop();

// console.log(removedItem); // undefined
// console.log(food); // []

// let food = ["짜장면", "피자", "치킨"];
// const removedItem = food.shift(); // ①

// console.log(removedItem); // "짜장면"
// console.log(food); // ["피자", "치킨"]

// let food = ["짜장면", "피자", "치킨"];
// const newLength = food.unshift("갈비찜");

// console.log(food);
// console.log(`새로운 배열의 길이: ${newLength}`);

// slice

// arr.slice(start, end);

// const arr = [1, 2, 3];
// const sliced = arr.slice(0, 2); // ① 0번에서 1번 인덱스까지 잘라 새로운 배열을 반환

// console.log(arr); // [1, 2, 3]
// console.log(sliced); // [1, 2]

// const arr = [1, 2, 3];
// const sliced = arr.slice(2); ①

// console.log(sliced); // [3]

// const arr = [1, 2, 3, 4, 5];

// console.log(arr.slice(-1)); // [5]
// console.log(arr.slice(-2)); // [4, 5]
// console.log(arr.slice(-3)); // [3, 4, 5]
// console.log(arr.slice(-4)); // [2, 3, 4, 5]
// console.log(arr.slice(-5)); // [1, 2, 3, 4, 5]

// let arrA = [1, 2];
// let arrB = [3, 4];
// let arrC = arrA.concat(arrB);

// console.log(arrC);
// console.log(arrA);

// let arrA = [1, 2];
// let arrB = { a: 1, b: 2 };
// let arrC = arrA.concat(arrB);

// console.log(arrC); // [1, 2, { a: 1, b: 2 } ]

// let food = ["짜장면", "피자", "치킨", "탕수육"];
// let item = food.slice(1, 2);
// console.log(food);
// console.log(item);

// function cb(item, index, array) {
//   // 수행할 코드
// }

// arr.forEach(cb);

// function cb(item, idx) {
//   // ②
//   console.log(`${idx}번째 요소: ${item}`);
// }

// const arr = [1, 2, 3];
// arr.forEach(cb); // ①

// // 0번째 요소: 1
// // 1번째 요소: 2
// // 2번째 요소: 3

// const arr = [1, 2, 3];

// arr.forEach((item, idx) => { ①
//   console.log(`${idx}번째 요소: ${item}`);
// });

// // 0번째 요소: 1
// // 1번째 요소: 2
// // 2번째 요소: 3

//탐색 인덱스

// arr.indexOf(item, fromIndex);

// let arr = [1, 3, 5, 7, 1];

// console.log(arr.indexOf(1, 0)); // 0

// let arr = [1, 3, 5, 7, 1];

// console.log(arr.indexOf(1)); // ① 0
// console.log(arr.indexOf(1, -1)); // ② 4

// includes

// arr.includes(item, fromindex);

// let arr = [1, 3, 5, 7, 1];

// console.log(arr.includes(3)); // true
// console.log(arr.includes("생선")); // false

// let arr = [
//   { name: "이종원" },
//   { name: "이정환" },
//   { name: "신다민" },
//   { name: "김효빈" }
// ];

// let index = arr.findIndex((item) => item.name === "이정환"); ①
// console.log(index); // 1

// let arr = [
//   { name: "이종원" },
//   { name: "이정환" },
//   { name: "신다민" },
//   { name: "김효빈" }
// ];

// let element = arr.find((item) => item.name === "이정환"); ①
// console.log(element); // {name: "이정환"}

// filter
// arr.filter( callback(item, index, arr) );

let arr = [
  { name: "이종원", hobby: "축구" },
  { name: "이정환", hobby: "영화" },
  { name: "신다민", hobby: "축구" },
  { name: "김효빈", hobby: "노래" },
];

let filteredArr = arr.filter((item) => item.hobby === "축구");

console.log(filteredArr);

// 출력 결과
// (2) [Object, Object]
// 0: Object
// name: "이종원"
// hobby: "축구"
// 1: Object
// name: "신다민"
// hobby: "축구"
