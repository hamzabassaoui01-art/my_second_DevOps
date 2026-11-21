const button = document.getElementById("messageBtn");
const message = document.getElementById("message");

function showMessage() {
  message.textContent = "Congratulations! Your JavaScript works!";
}

button.addEventListener("click", showMessage);
