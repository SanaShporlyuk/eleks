export default function calculator(number1, number2, operator) {
    if (typeof number1 !== 'number' || typeof number2 !== 'number') {
        throw new Error('Input should be a number');
    }

    let result;
    if (operator === '+') {
        result = number1 + number2;
    }
    else if (operator === '-') {
        result = number1 - number2;
    }
    else if (operator === '*') {
        result = number1 * number2;
    }
    else if (operator === '/') {
        if (number2 == 0) {
            throw new Error('Division by zero');
        }
        result = number1 / number2
    } else {
        throw new Error('Unsupported operator');
    }

    return result;
};
