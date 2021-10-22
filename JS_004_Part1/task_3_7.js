console.log("\nVerify number is multiple 3 OR 7\n");

let given_num = 21;

if (given_num % 3 === 0 && given_num % 7 === 0) {
    console.log (`Number ${given_num} is multiple of 3 and 7`);
} else if (given_num%7===0) {
    console.log (`Number ${given_num} is multiple of 7`);
} else if (given_num%3===0) {
    console.log (`Number ${given_num} is multiple of 3`);
} else {
    console.log("The given number is not multiple of 3 OR 7");
}
