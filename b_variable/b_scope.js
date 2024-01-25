// // 지역 변수
// for (let i = 0; i < 10; i = i + 1) {
//     console.log(i);
// }

// // console.log(i);

// // 전역 변수
// for (var i = 0; i < 10; i = i + 1) {
//     console.log(i);
// }

// console.log(i);

// 전역 변수
// Node.js에서는 전역변수들을 모두 global 객체에서 관리한다.
// 브라우저(b_scope.html)에서는 window 객체에서 전역변수를 관리한다.
// 따라서 어디에서 사용될 지 모를 때에는 globalThis 객체를 사용하면 된다.
globalThis.x = 10;
// let x = 10;

function f() {
    // 지역 변수
    let x = 20;
    console.log(globalThis.x, x);
}

f();
console.log(x);
