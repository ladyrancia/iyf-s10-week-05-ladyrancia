console.log("Todo app running");
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const list = document.getElementById("todo-list");
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;

    list.appendChild(li);

    input.value = "";
});
form.addEventListener("submit", function(e) {
    e.preventDefault();

    const text = input.value.trim();
    if (text === "") return;

    const li = document.createElement("li");
    li.textContent = text;

    const btn = document.createElement("button");
    btn.textContent = "X";

    li.appendChild(btn);
    list.appendChild(li);

    input.value = "";
});
list.addEventListener("click", function(e) {

    if (e.target.tagName === "LI") {
        e.target.classList.toggle("completed");
    }

    if (e.target.tagName === "BUTTON") {
        e.target.parentElement.remove();
    }

});