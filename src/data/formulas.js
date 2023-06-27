const formulas = [
    {
        type: 'Basic',
        formulas: [
            {
                name: 'Addition',
                inputs: ['Number 1', 'Number 2'],
                description: 'Addition is the process of adding two numbers together. The formula is Number 1 + Number 2.',
                calculate: (inputs) => {
                    return inputs['Number 1'] + inputs['Number 2'];
                }
            },
            {
                name: 'Subtraction',
                inputs: ['Number 1', 'Number 2'],
                description: 'Subtraction is the process of deducting the second number from the first. The formula is Number 1 - Number 2.',
                calculate: (inputs) => {
                    return inputs['Number 1'] - inputs['Number 2'];
                }
            },
            {
                name: 'Multiplication',
                inputs: ['Number 1', 'Number 2'],
                description: 'Multiplication is the process of multiplying two numbers. The formula is Number 1 * Number 2.',
                calculate: (inputs) => {
                    return inputs['Number 1'] * inputs['Number 2'];
                }
            },
            {
                name: 'Division',
                inputs: ['Number 1', 'Number 2'],
                description: 'Division is the process of dividing the first number by the second. The formula is Number 1 / Number 2.',
                calculate: (inputs) => {
                    return inputs['Number 1'] / inputs['Number 2'];
                }
            },
            {
                name: 'Exponential',
                inputs: ['Base', 'Exponent'],
                description: 'Exponential calculations of any number you need calculated for example 2 powered by 2 is 4.',
                calculate: (inputs) => {
                    return inputs['Base'] ** inputs['Exponent'];
                }
            }
        ],
    },
    {
        type: 'Financial',
        formulas: [
            {
                name: 'Debt to income ratio',
                inputs: ['Total monthly payments','Gross monthly income'],
                description: 'Calculations on debt to income ratio. If you get a ratio of 50%.',
                calculate: (inputs) => {
                    return (inputs['Total monthly payments'] / inputs['Gross monthly income']) * 100;
                }
            },
            {
                name: 'Compound Interest',
                inputs: ['Principal Amount', 'Rate of Interest', 'Time'],
                description: 'Compound interest is calculated by multiplying the initial principal amount by one plus the annual interest rate raised to the number of compound periods minus one. The formula is P (1 + r/n)^(nt).',
                unit: 'USD',
                calculate: (inputs) => {
                    return inputs['Principal Amount'] * Math.pow((1 + inputs['Rate of Interest'] / 100), inputs['Time']);
                }
            },
            {
                name: 'Simple Interest',
                inputs: ['Principal Amount', 'Rate of Interest', 'Time'],
                description: 'Simple interest is calculated by multiplying the principal amount by the interest rate and the time. The formula is P*r*t.',
                calculate: (inputs) => {
                    return (inputs['Principal Amount'] * inputs['Rate of Interest'] * inputs['Time']) / 100;
                }
            },
        ],
    },
    {
        type: 'Engineering',
        formulas: [
            {
                name: 'Pressure',
                inputs: ['Force', 'Area'],
                description: 'Pressure is defined as force per unit area. The formula is P = F/A.',
                calculate: (inputs) => {
                    return inputs['Force'] / inputs['Area'];
                }
            },
            {
                name: 'Kinetic Energy',
                inputs: ['Mass', 'Velocity'],
                description: 'Kinetic energy is the energy possessed by an object due to its motion. The formula is KE = 1/2 * m * v^2.',
                calculate: (inputs) => {
                    return 0.5 * inputs['Mass'] * Math.pow(inputs['Velocity'], 2);
                }
            },
            {
                name: 'Potential Energy',
                inputs: ['Mass', 'Height'],
                description: 'Potential energy is the energy held by an object because of its position relative to other objects. The formula is PE = m*g*h (g is acceleration due to gravity = 9.8 m/s^2).',
                calculate: (inputs) => {
                    return inputs['Mass'] * 9.8 * inputs['Height'];
                }
            },
        ],
    },
    {
        type: "Conversion",
        formulas: [
            {
                name: "Meter to Feet",
                inputs: ['m'],
                calculate: (inputs) => {
                    return inputs['m'] * 3.28084;
                }
            }

        ],
    }
];

export default formulas;
