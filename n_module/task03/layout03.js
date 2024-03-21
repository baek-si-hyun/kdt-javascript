const userLayout = (() => {
    const showList = async () => {
        let users = await userService.findAll();
        const table = document.querySelector("table.users");
        let text = ``;
        users = users.slice(0, 10);
        users.forEach((user) => {
            text += `<tr><td>${user.name}</td><td>${user.username}</td>`;
            text += `<table>`;
            for (let post of user.posts) {
                text += `<tr><td>${post.id}</td><td>${post.title}</td></tr>`;
            }
            text += `</table></tr>`;
        });
        table.innerHTML = text;
    };

    return { showList: showList };
})();

userLayout.showList();
