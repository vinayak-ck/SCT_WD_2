const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equalBtn = document.getElementById("equal");
const clearBtn = document.getElementById("clear");

// Append button values to the display
buttons.forEach(button => {
  button.addEventListener("click", () => {
    display.value += button.getAttribute("data-value");
  });
});

// Clear the display
clearBtn.addEventListener("click", () => {
  display.value = "";
});

// Calculate the result
equalBtn.addEventListener("click", () => {
  try {
    display.value = eval(display.value);
  } catch (err) {
    display.value = "Error";
  }
});

// Handle keyboard input
document.addEventListener("keydown", (e) => {
  const validKeys = "0123456789+-*/.";
  if (validKeys.includes(e.key)) {
    display.value += e.key;
  } else if (e.key === "Enter") {
    try {
      display.value = eval(display.value);
    } catch {
      display.value = "Error";
    }
  } else if (e.key === "Backspace") {
    display.value = display.value.slice(0, -1);
  } else if (e.key === "Escape") {
    display.value = "";
  }
});
