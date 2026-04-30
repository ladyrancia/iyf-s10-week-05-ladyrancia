console.log("Todo app running");

// DOM elements
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const clearBtn = document.getElementById("clear-completed");
const filters = document.querySelectorAll(".filter");

// State
let todos = [];
let currentFilter = "all";

// Add todo
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const text = input.value.trim();
    if (text === "") return;

    const todo = {
        id: Date.now(),
        text: text,
        completed: false
    };

    todos.push(todo);
    input.value = "";
    renderTodos();
});

// Render todos
function renderTodos() {
    list.innerHTML = "";

    let filteredTodos = todos;

    if (currentFilter === "active") {
        filteredTodos = todos.filter(todo => !todo.completed);
    }

    if (currentFilter === "completed") {
        filteredTodos = todos.filter(todo => todo.completed);
    }

    filteredTodos.forEach(todo => {
        const li = document.createElement("li");
        li.textContent = todo.text;

        if (todo.completed) {
            li.classList.add("completed");
        }

        li.dataset.id = todo.id;

        const btn = document.createElement("button");
        btn.textContent = "X";

        li.appendChild(btn);
        list.appendChild(li);
    });

    updateCount();
}

// Toggle & delete (event delegation)
list.addEventListener("click", function(e) {
    const li = e.target.closest("li");
    if (!li) return;

    const id = Number(li.dataset.id);

    if (e.target.tagName === "BUTTON") {
        todos = todos.filter(todo => todo.id !== id);
    } else {
        todos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
    }

    renderTodos();
});

// Update items left
function updateCount() {
    const remaining = todos.filter(todo => !todo.completed).length;
    itemsLeft.textContent = `${remaining} items left`;
}

// Clear completed
clearBtn.addEventListener("click", function() {
    todos = todos.filter(todo => !todo.completed);
    renderTodos();
});

// Filters
filters.forEach(button => {
    button.addEventListener("click", function() {
        currentFilter = this.dataset.filter;

        filters.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        renderTodos();
    });
});