// let arr = [1, 2, 3, 4];

// for (let idx = 0; idx < 4; idx++) {
//   console.log(arr[idx]);
// }

// let arr = [1, 2, 3, 4];
// const len = arr.length;

// console.log(len); // 4

// let food = ["짜장면", "피자", "치킨"];

// for (let i = 0; i < food.length; i++) {
//   console.log(food[i]);
// }

// // 짜장면
// // 피자
// // 치킨

// Object.keys를 이용한 key 순회

let person = {
  name: "이정환",
  age: 25,
  location: "경기도",
};

const keyArr = Object.keys(person);

console.log(keyArr); // ["name", "age", "location"]

for (let key of keyArr) {
  console.log(key);
}
