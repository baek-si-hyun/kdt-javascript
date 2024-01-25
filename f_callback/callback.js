// 콜백 함수는 "분리" 목적이다.

// arrow expression(function)
// function printName(name) {
//     console.log(name);
// }

// const printName = (name) => {
//     console.log("name");
// };

// printName();

// 두 정수의 덧셈 결과 출력
// const add = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 + number2);
//     }
//     return number1 + number2;
// };

// add(1, 4, (result) => {
//     console.log(result);
// });

// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
// const multply = (number1, number2, callback) => {
//     if (callback) {
//         callback(number1 * number2);
//     }

//     return number1 * number2;
// };

// const result = multply(3, 5, (result) => {
//     console.log(result * 2);
// });

// 성과 이름을 전달받아서 풀네임을 만든 뒤 "000님" 출력
// function makeFullName(성, 이름, printName) {
//     printName(성 + 이름);
//     return 성 + 이름;
// }

// function printName(풀네임) {
//     console.log(풀네임 + "님");
// }

// makeFullName("이", "순신", printName);

// 상품 1개 가격과 총 합을 입력받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false
// function getCount(price, total, callback) {
//     if (callback) {
//         return callback(total / price);
//     }
//     return total / price;
// }

// const result = getCount(1000, 3000, (count) => count <= 5);
// console.log(result);

// 결제 상품 가격과 결제 상태를 전달받아서
// 결제 상태가 true일 때 결제 완료, false일 경우 결제 취소 출력
// function setStatus(price, status, callback) {
//     if (callback) {
//         callback(status ? `${price}원 결제 완료` : `${price}원 결제 취소`);
//     }
// }

// setStatus(3000, false, (message) => {
//     console.log(message);
// });
