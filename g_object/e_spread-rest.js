// const user = {
//     id: 1,
//     name: "han",
// };

// 비구조화 할당(구조 분해)
// const { id, name } = user;
// console.log(id, name);

// const { id: number, name, age = 10 } = user;
// console.log(number, name, age);

// 객체 스프레드
// let userUpdated = { ...user };

// console.log(userUpdated);

// let userUpdated = { ...user, age: 20 };

// console.log(userUpdated);
// 이미 해당 프로퍼티가 존재하면 수정된다.
// let userUpdated = { ...user, name: "ted" };

// console.log(userUpdated);

// rest
const user = {
    id: 1,
    name: "han",
};

const userUpdated = { ...user, age: 20 };

const { age, ...rest } = userUpdated;
console.log(age, rest);
