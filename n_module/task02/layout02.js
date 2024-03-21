const todoLayout = (() => {
    const showList = (todos) => {
        const table = document.querySelector("table.todos");
        let text = ``;
        todos = todos.slice(0, 10);
        todos.forEach((todo) => {
            text += `<tr${todo.completed && ' class="on"'}><td>${
                todo.id
            }</td><td>${todo.title}</td></tr>`;
        });
        table.innerHTML = text;
    };

    return { showList: showList };
})();
