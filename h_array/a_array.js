// let datas = [10, 8, 20, 3, 2];

// push(): 가장 마지막에 값 추가
// datas.push(100);
// console.log(datas);

// join(): 전달한 값으로 구분한 뒤 문자열로 리턴
// console.log(datas.join(", "));

// slice(begin, end): 원하는 부분을 추출하기 위해 시작 인덱스와 마지막 인덱스를 전달한다.
// slice(begin): 시작 인덱스부터 마지막까지 추출한다.
// console.log(datas.slice(1, 3));
// console.log(datas.slice(1));

// splice(index, count): 삭제
// splice(index, count, ...args): 교체
// datas.splice(1, 1);
// console.log(datas);

// datas.splice(1, 1, 200);
// console.log(datas);

// pop(): 마지막 요소 삭제
// const dataRemoved = datas.pop();
// console.log(`${dataRemoved} 삭제`);
// console.log(datas);

// shift(): 첫 번째 요소 삭제
// const dataRemoved = datas.shift();
// console.log(`${dataRemoved} 삭제`);
// console.log(datas);

// indexOf(value): value를 해당 Array객체에서 찾은 뒤 인덱스 번호를 리턴한다. 못찾으면 -1을 리턴한다.
// let datas = [10, 8, 20, 3, 2];
// const i = datas.indexOf(3);
// const i = datas.indexOf(90);
// console.log(i);

// spread operation
// let datas = [10, 8, 20, 3, 2];
// const numbers = [...datas];
// console.log(numbers);

// 비구조화 할당
// let datas = [10, 8, 20, 3, 2];
// const [number1, number2, number3, number4, number5, number6 = 5] = datas;
// console.log(number1, number2, number3, number4, number5, number6);

// forEach(callback)
// let datas = [10, 8, 20, 3, 2];
// datas.forEach((data, i, datas) => {
//     console.log(data, i);
//     datas[i] = i + 1;
// });

// console.log(datas);

// map(callback)
// let datas = [10, 8, 20, 3, 2];
// const result = datas.map((data) => data * 2);
// console.log(result);

// filter(callback)
// let datas = [10, 8, 20, 3, 2];
// const result = datas.filter((data) => data % 5 == 0);
// console.log(result);

// reduce(callback)
// 초기값을 설정하면 data에 0번째부터 들어오고,
// 초기값을 설정하지 않으면 data에 1번째부터 들어온다.
// 이 때, 0번째 값이 variable로 들어온다.
// let datas = [10, 8, 20, 3, 2];
// const result = datas.reduce((variable, data, i) => {
//     console.log(variable);
// });

// const result = datas.reduce((variable, data, i) => {
//     console.log(variable);
// }, 0);

// const result = datas.reduce((variable, data, i) => {
//     console.log(data, i);
// });

// const result = datas.reduce((variable, data, i) => {
//     console.log(data, i);
// }, 0);

// const result = datas.reduce((variable, data, i) => {
//     variable.push(i + 1);
//     return variable;
// }, []);

// const result = datas.reduce((variable, data, i) => {
//     variable[`${i}`] = data;
//     return variable;
// }, {});

// console.log(result);

// 문자열
// split(): 문자열을 Array 객체로 사용하고자 한다면, split()을 사용한다.
// "월화수목금토일".split("").forEach((data) => {
//     console.log(data);
// });

// includes(value): value가 문자열에 포함되었는 지 검사
// console.log("ABCD".includes("B"));

// Array()
// const datas = new Array(7).fill(0);
// datas.forEach((data) => {
//     console.log(data);
// });
