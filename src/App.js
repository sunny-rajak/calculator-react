import React, { useState } from "react";
import { evaluate } from "mathjs"; // Import mathjs
import "./App.css";

const App = () => {
    const [input, setInput] = useState("");

    const calculateResult = () => {
        try {
            // Replace "%" with "/100" for percentage calculations
            const normalizedInput = input.replace(/(\d+)%/g, "($1/100)");
            const result = evaluate(normalizedInput); // Use mathjs to evaluate the expression
            setInput(result.toString());
        } catch (error) {
            setInput("Error");
        }
    };

    const handleButtonClick = (value) => {
        if (value === "C") {
            setInput(""); // Clear the input
        } else if (value === "<") {
            setInput(input.slice(0, -1)); // Remove the last character
        } else if (value === "=") {
            calculateResult(); // Perform calculation
        } else {
            setInput((prevInput) => prevInput + value); // Append the value to the input
        }
    };

    return (
        <div className="container">
            <div className="calc">
                <h1 id="input">{input}</h1>
                <div>
                    <button onClick={() => handleButtonClick("C")}>C</button>
                    <button onClick={() => handleButtonClick("<")}>&lt;</button>
                    <button onClick={() => handleButtonClick("%")}>%</button>
                    <button onClick={() => handleButtonClick("/")}>/</button>
                </div>
                <div>
                    <button onClick={() => handleButtonClick("7")}>7</button>
                    <button onClick={() => handleButtonClick("8")}>8</button>
                    <button onClick={() => handleButtonClick("9")}>9</button>
                    <button onClick={() => handleButtonClick("*")}>*</button>
                </div>
                <div>
                    <button onClick={() => handleButtonClick("4")}>4</button>
                    <button onClick={() => handleButtonClick("5")}>5</button>
                    <button onClick={() => handleButtonClick("6")}>6</button>
                    <button onClick={() => handleButtonClick("-")}>-</button>
                </div>
                <div>
                    <button onClick={() => handleButtonClick("1")}>1</button>
                    <button onClick={() => handleButtonClick("2")}>2</button>
                    <button onClick={() => handleButtonClick("3")}>3</button>
                    <button onClick={() => handleButtonClick("+")}>+</button>
                </div>
                <div>
                    <button onClick={() => handleButtonClick("0")}>0</button>
                    <button onClick={() => handleButtonClick("00")}>00</button>
                    <button onClick={() => handleButtonClick(".")}>.</button>
                    <button onClick={() => handleButtonClick("=")}>=</button>
                </div>
            </div>
        </div>
    );
};

export default App;
