// Function to accept two integers and display the larger
let larger_num = function (a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        console.log(`${a}, ${b} must be numbers`);
    }

    if (a===b) {
        console.log(`${a} equals ${b}`);
    } else if (a > b) {
        console.log(`${a} is bigger than ${b}`);
    } else {
        console.log(`${b} is bigger than ${a}`);
    }
};
larger_num(20, 89);
larger_num(20, 0);
larger_num(4, 4);
larger_num(null, 4);