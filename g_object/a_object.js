// JS에서는 객체 내부의 필드를 프로퍼티라고 한다.
let user = {
    name: "백시현",
    age: 20,
    address: "경기도",
    introduce: () => {
        console.log("hi");
    },
};
console.log(typeof user);
user.introduce();
//일반적으로 .를 사용해서 프로퍼티에 접근한다.
console.log(user.name);
// 안약 프로퍼티 이름이 "-"와 같은 특수문자가 들어가 있거나
// 프로퍼티 이름에 규칙성이 있어서 한번에 가져와야 할때는
// []를 사용해서 프로퍼티에 접근한다
console.log(user["name"]);
