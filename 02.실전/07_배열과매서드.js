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

let arrA = [1, 2];
let arrB = { a: 1, b: 2 };
let arrC = arrA.concat(arrB);

console.log(arrC); // [1, 2, { a: 1, b: 2 } ]
