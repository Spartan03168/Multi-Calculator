// Formula.js

import React, { useState } from 'react';
import styles from '../styles/Calculator.module.css';

function Formula({ formula }) {
    const [inputs, setInputs] = useState(formula.inputs.reduce((inputs, input) => {
        inputs[input] = '';
        return inputs;
    }, {}));

    const [result, setResult] = useState(null);

    const handleInputChange = (event, input) => {
        setInputs({
            ...inputs,
            [input]: event.target.value,
        });
    };

    const calculate = (event) => {
        event.preventDefault(); // Prevent form submission and page refresh
        const numericInputs = Object.fromEntries(
            Object.entries(inputs).map(([key, value]) => [key, parseFloat(value)])
        );
        setResult(formula.calculate(numericInputs));
    };

    return (
        <div className={styles.formula}>
            <h3>{formula.name}</h3>
            <form>
                {formula.inputs.map((input, index) => (
                    <div className={styles.inputContainer} key={index}>
                        <label>{input}:</label>
                        <input
                            type="number"
                            value={inputs[input]}
                            onChange={(event) => handleInputChange(event, input)}
                            className={styles.inputField}
                        />
                    </div>
                ))}
                <button onClick={calculate} className={styles.calculateButton}>
                    Calculate
                </button>
            </form>
            {result && <p className={styles.resultText}>Result: {result} {formula.unit}</p>}
            <p className={styles.descriptionText}>{formula.description}</p>
        </div>
    );
}

export default Formula;
