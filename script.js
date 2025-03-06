//your JS code here. If required.
const textInput = document.getElementById("text");
const delayInput = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

async function displayMessage() {
    const message = textInput.value;
    const delay = parseInt(delayInput.value, 10);
    
    if (!message || isNaN(delay)) return;
    
    await new Promise(resolve => setTimeout(resolve, delay));
    output.textContent = message;
}

btn.addEventListener("click", displayMessage);