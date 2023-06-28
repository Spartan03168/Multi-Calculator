// Calculator.js
import styles from '../styles/Calculator.module.css';

import React, { useState } from 'react';
import CategoryTabs from './CategoryTabs';
import Formula from './Formula';
import formulas from '../data/formulas';
import { Container, Row, Col } from 'react-bootstrap';

function Calculator() {
    const [activeTab, setActiveTab] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedFormula, setSelectedFormula] = useState(null);

    const selectCategory = (category, index) => {
        setSelectedCategory(category);
        setSelectedFormula(null);
        setActiveTab(index);
    };


    const selectFormula = (formula) => {
        setSelectedFormula(formula);
    };

    return (
        <Container fluid>
            <Row className = {styles.header}>
                <Col xs={12}><h1>Multi-Purpose Calculator</h1></Col>
            </Row>
            <Row className = {styles.calculatorBody}>
                <Col xs={3}>
                    <CategoryTabs categories={formulas} selectCategory={selectCategory} activeTab={activeTab} />
                </Col>
                <Col xs={9}>
                    {selectedCategory && (
                        <div>
                            <select
                                value={selectedFormula ? selectedCategory.formulas.indexOf(selectedFormula) : ''}
                                onChange={(e) =>
                                    selectFormula(selectedCategory.formulas[e.target.value])
                                }
                            >
                                <option value="">Select a formula</option>
                                {selectedCategory.formulas.map((formula, index) => (
                                    <option key={index} value={index}>
                                        {formula.name}
                                    </option>
                                ))}
                            </select>
                            {selectedFormula && <Formula formula={selectedFormula} />}
                        </div>
                    )}
                </Col>
            </Row>
        </Container>
    );
}

export default Calculator;
