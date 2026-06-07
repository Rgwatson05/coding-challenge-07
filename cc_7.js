// Select page elements

const input = document.getElementById("headlineInput");
const button = document.getElementById("updateButton");
const cta = document.getElementById("cta");

// Update CTA when button is clicked

button.addEventListener("click", function () {
    cta.textContent = input.value;
});
