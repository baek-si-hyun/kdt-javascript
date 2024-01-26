// setTimeout은 0초를 설정해도 1ms 후 실행되도록 설계되어 있다.
// setTimeout(() => {
//     console.log("timer");
// }, 0);

// setImmediate(() => {
//     console.log("check");
// });

// const fs = require("fs");

// fs.readFile("test.txt", (result) => {
//     setTimeout(() => {
//         console.log("timer");
//     });

//     setImmediate(() => {
//         console.log("check");
//     });
// });

// tick이 모두 작업된 후 다음 절차로 넘어간다.
// const setTick = () => {
//     process.nextTick(setTick);
// };

// setTick();

// setTimeout(() => {
//     console.log("timer");
// });

// 1. 타이머 큐에 등록
// 2. 검사 큐에 등록
// 3. 틱 큐에 등록

// 1. 틱 큐 비우기
// 1-1. 1번 틱 안에 타이머2를 처리하고자 타이머1도 처리된다.
// 1-2. 1번 틱 안에 검사2를 처리하고자 검사1도 처리된다.
// 2. 2번 틱 처리
setTimeout(() => {
    console.log("timer1");
}, 0);
setImmediate(() => {
    console.log("check1");
});
process.nextTick(() => {
    setTimeout(() => console.log("timer2"), 0);
    setImmediate(() => {
        process.nextTick(() => console.log("tick2"));
        console.log("check2");
    });
    console.log("tick1");
});