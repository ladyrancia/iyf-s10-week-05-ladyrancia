// STEP 1: Test connection
console.log("JS working");
// STEP 2: Selection
const h1 = document.querySelector("h1");
console.log(h1);

// STEP 3: Click event
h1.addEventListener("click", function() {
    h1.textContent = "You clicked me 😎";
});

// STEP 4: Form handling
const form = document.getElementById("contact-form");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    console.log(nameInput.value, emailInput.value);

    nameInput.value = "";
    emailInput.value = "";
});

// STEP 5: Real-time input
nameInput.addEventListener("input", function(e) {
    if (e.target.value.length < 2) {
        nameInput.style.border = "2px solid red";
    } else {
        nameInput.style.border = "2px solid green";
    }
});