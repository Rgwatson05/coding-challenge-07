// Select page elements

const input = document.getElementById("headlineInput");
const button = document.getElementById("updateButton");
const cta = document.getElementById("cta");

// Change the CTA headline using user input

button.addEventListener("click", function () {
    cta.textContent = input.value;
});
