// let date = new Date();
// console.log(date);

// let Jan01_1970 = new Date(0);
// console.log(Jan01_1970);

// // Thu Jan 01 1970 09:00:00 GMT+0900 (한국 표준시)

// let Jan02_1970 = new Date(24 * 3600 * 1000);
// console.log(Jan02_1970.getTime());
// // 86400000

// let date1 = new Date("2000-10-10/00:00:00");
// let date2 = new Date("2000.10.10/00:00:00");
// let date3 = new Date("2000/10/10/00:00:00");
// let date4 = new Date("2000 10 10/00:00:00");

// // console.log("1:", date1); // 1: Tue Oct 10 2000 00:00:00 GMT+0900 (한국 표준시)
// console.log("2:", date2); // 2: Tue Oct 10 2000 00:00:00 GMT+0900 (한국 표준시)
// console.log("3:", date3); // 3: Tue Oct 10 2000 00:00:00 GMT+0900 (한국 표준시)
// console.log("4:", date4); // 4: Tue Oct 10 2000 00:00:00 GMT+0900 (한국 표준시)

// let date1 = new Date(2000, 10, 10, 0, 0, 0, 0);
// let date2 = new Date(2000, 9, 10);

// console.log("1:", date1); // 1: Fri Nov 10 2000 00:00:00 GMT+0900 (한국 표준시)
// console.log("2:", date2); // 2: Tue Oct 10 2000 00:00:00 GMT+0900 (한국 표준시)

// let date = new Date(2000, 9, 10);
// let timeStamp = date.getTime(); // ①
// console.log(timeStamp); // 971103600000

// let dateClone = new Date(timeStamp); // ②
// console.log(dateClone); // Tue Oct 10 2000 00:00:00 GMT+0900 (한국 표준시)

// Date 객체에서 날짜 요소 얻기

// let date = new Date(2000, 9, 10);

// console.log(date.getFullYear()); // 2000

// let date = new Date(2000, 9, 10);

// console.log(date.getMonth()); // 9

// let date = new Date(2000, 9, 10);

// console.log(date.getHours()); // 0
// console.log(date.getMinutes()); // 0
// console.log(date.getSeconds()); // 0
// console.log(date.getMilliseconds()); // 0

// let date1 = new Date(2000, 10, 10, 0, 0, 0, 0);
// let date2 = new Date(2000, 9, 10);

// console.log("1:", date1);
// console.log("2:", date2);

// let date = new Date(2000, 9, 10);

// date.setHours(1);
// date.setMinutes(1);
// date.setSeconds(1);

// console.log(date); // Tue Oct 10 2000 01:01:01 GMT+0900 (한국 표준시)

// const today = new Date(2000, 9, 10, 22);

// console.log(today.toString()); // Tue Oct 10 2000 22:00:00 GMT+0900 (한국 표준시)

// const today = new Date(2000, 9, 10, 22);

// console.log(today.toLocaleString()); // 2000. 10. 10. 오후 10:00:00
// console.log(today.toLocaleDateString()); // 2000. 10. 10.

// function moveMonth(date, moveMonth) {
//   // ①
//   const curTimestamp = date.getTime(); // ②
//   const curMonth = date.getMonth(); // ③

//   const resDate = new Date(curTimestamp); // ④
//   resDate.setMonth(curMonth + moveMonth); //⑤

//   return resDate;
// }

// const dateA = new Date("2000-10-10");
// console.log("A: ", dateA); // A : Tue Oct 10 2000 09:00:00 GMT+0900 (한국 표준시)

// const dateB = moveMonth(dateA, 1);
// console.log("B: ", dateB); // B : Fri Nov 10 2000 09:00:00 GMT+0900 (한국 표준시)

// const dateC = moveMonth(dateA, -1);
// console.log("C: ", dateC); // C : Sun Sep 10 2000 09:00:00 GMT+0900 (한국 표준시)
