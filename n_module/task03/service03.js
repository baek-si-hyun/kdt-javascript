const userService = (() => {
    const findAll = async () => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();

        for (let user of users) {
            let posts = await postService.findByUserId(user.id);
            posts = posts.slice(0, 3);
            user.posts = posts;
        }

        return users;
    };
    return { findAll: findAll };
})();

const postService = (() => {
    const findByUserId = async (userId, callback) => {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
        );
        const posts = await response.json();
        return posts;
    };
    return { findByUserId: findByUserId };
})();
