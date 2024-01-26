const userService = (() => {
    // 회원 가입
    const join = ({ id, email, password, name }) => {};

    // 로그인
    const login = (email, password) => {};

    // 마이페이지
    const findByUser = (callback) => {
        // DB 조회 결과
        const user = { id: 1, email: "test@gmail.com", name: "test" };
        if (callback) {
            callback(user);
        }
    };
    // 회원 수정
    const update = ({ id, email, password, name }) => {};

    // 회원 탈퇴
    const withdraw = () => {};

    return {
        join: join,
        login: login,
        findByUser: findByUser,
        update: update,
        withdraw: withdraw,
    };
})();

// 회원가입
const user = { id: 1, email: "test@gmail.com", name: "test" };
userService.join(user);

// 로그인
const email = "";
const password = "";

userService.login(email, password);

// 마이페이지
userService.findByUser((user) => {
    console.log(user);
    // 회원 수정
    user.email = "apple@gmail.com";
    userService.update(user);
});

// 회원 탈퇴
userService.withdraw();