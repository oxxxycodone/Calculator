const buttonValues = [
    "AC", "+/-", "%", "÷", 
    "7", "8", "9", "×",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
];
const rightSymbols = ["÷", "×", "-", "+", "="];
const topSymbols = ["AC", "+/-", "%"];

const display = document.getElementById("display");

let A = null
let B = null
let operator = null

for (let i = 0; i < buttonValues.length; i++) {
    let value = buttonValues[i];
    const button = document.createElement("button");
    button.innerText = value;

    if (value === "0") {
        button.style.width = "180px";
        button.style.gridColumn = "span 2";
    }

    if (rightSymbols.includes(value)) {
        button.style.backgroundColor = "#ff9500";
    }else if(topSymbols.includes(value)){
        button.style.backgroundColor = "#D4D4D2";
        button.style.color = "#1C1C1C";
    }

    
    
    button.addEventListener("click", function() {
        if (rightSymbols.includes(value)) {
            if (value === "=") {
                if (A !== null) {
                    B = display.value;
                    let numA = Number(A);
                    let numB = Number(B);
    
                    if (operator === "+") {
                        display.value = numA + numB;
                    } 
                    else if (operator === "-") {
                        display.value = numA - numB;
                    } 
                    else if (operator === "×") {
                        display.value = numA * numB;
                    } 
                    else if (operator === "÷") {
                        display.value = numB !== 0 ? numA / numB : "Ошибка";
                    }
    
                    A = display.value; 
                    B = null; 
                    operator = null; 
                }
            } 
            else {
                if (display.value !== "") {
                    operator = value;
                    A = display.value;
                    display.value = ""; 
                }
            }
        } 
        else if (topSymbols.includes(value)) {
            if (value === "AC") {
                display.value = "0";
                A = null;
                B = null;
                operator = null;
            } 
            else if (value === "+/-") {
                display.value = String(-Number(display.value)); 
            } 
            else if (value === "%") {
                display.value = String(Number(display.value) / 100); 
            }
        } 
        else {
            if (value == ".") {
                if (display.value.length > 0 && !display.value.includes(".")) { 
                    display.value += value;
                }
            } 
            else if (display.value == "0") {
                display.value = value;
            } 
            else {
                display.value += value;
            }
        }
    });

    document.getElementById("buttons").appendChild(button);
   
}