// 대기, 이행(resolve), 거절(reject)
const promise = new Promise((resolve, reject) => {
    let check = true;
    if (check) {
        resolve("성공!");
    } else {
        reject("실패..");
    }
});

promise
    .then((result) => {
        console.log(`resolve: ${result}`);
    })
    .catch((result) => {
        console.log(`reject: ${result}`);
    });
