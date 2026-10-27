// script.js
// Wait until the DOM is fully loaded
document.addEventListener("iphone18", function () {
  // Select elements
  const demoElement = document.getElementById("name");
  const button = document.getElementById("");
  const input = document.getElementById("userInput");
  // Display initial message
  demoElement.innerHTML = "Hello JavaScript!";
  // Function to change text dynamically
  function changeText() {
    const userText = input.value.trim();
    if (userText) {
      demoElement.innerHTML = `You typed: ${userText}`;
    } else {
      demoElement.innerHTML = "Hello JavaScript!";
    }
  }
  // Add click event listener to button
  button.addEventListener("click", changeText);
  // Optional: Change text when pressing Enter in input field
  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      changeText();
    }
  });
  // Example of a simple timer
  setInterval(() => {
    const now = new Date();
    document.getElementById("time").innerHTML =
      `Current time: ${now.toLocaleTimeString()}`;
  }, 1000);
});
