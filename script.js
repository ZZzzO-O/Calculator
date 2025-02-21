const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentValue = "";
let previousValue = "";
let operator = "";

buttons.forEach(function (button) {
    button.addEventListener("click", function () {
        let value = button.getAttribute("data-value");

        // Clear button functionality
        if (value === "clear") {
            currentValue = "";
            previousValue = "";
            operator = "";
            display.innerText = "0";
            return;
        }

        // Handle operators (+, -, *, /)
        if (["+", "-", "*", "/"].includes(value)) {
            if (currentValue !== "") {
                previousValue = currentValue;
                currentValue = "";
                operator = value;
            }
            return;
        }

        // Handle equal (=) button
        if (value === "=") {
            if (previousValue !== "" && currentValue !== "" && operator !== "") {
                calculate();
            }
            return;
        }

        // Append numbers and decimals
        currentValue += value;
        display.innerText = currentValue;
    });
});

// Function to calculate result
function calculate() {
    try {
        let result = eval(previousValue + operator + currentValue);
        display.innerText = result;
        currentValue = result.toString();
        previousValue = "";
        operator = "";
    } catch {
        display.innerText = "Error";
        currentValue = "";
        previousValue = "";
        operator = "";
    }
}