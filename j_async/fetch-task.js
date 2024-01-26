// https://jsonplaceholder.typicode.com/users
// zipcode만 추출하기
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => {
            const { zipcode } = user.address;
            console.log(zipcode);
        });
    });