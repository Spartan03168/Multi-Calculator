// CategoryTabs.js

import React from 'react';
import styles from '../styles/Calculator.module.css';

function CategoryTabs({ categories, selectCategory, activeTab }) {
    return (
        <div className={styles.category}>
            {categories.map((category, index) =>
                <button key={index} onClick={() => selectCategory(category, index)} className={activeTab === index ? 'active' : ''}>
                    {category.type}
                </button>
            )}
        </div>
    );
}

export default CategoryTabs;
