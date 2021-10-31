// Last element of an array
function lastElement(input) {
    if (input.length == 0) {
        console.log(`Empty array`);
    } else {
        let lastElem = input[input.length - 1];
        console.log(`Last element: ${lastElem}`);
    }
}

lastElement([5, 89, 'good', 565]);
lastElement(['asdas', 'aa']);
lastElement([]);
lastElement([null]);