function isOdd(data) {
    return new Promise((resolve, reject) => {
        if (typeof data !== "number") {
            reject("error");
        } else if (data % 2 !== 0) {
            setTimeout(() => resolve("odd"), 1000);
        } else {
            setTimeout(() => reject("even"), 2000);
        }
    });
};

function verify(result) {
    if (result !== "error") {
        console.log(`Your number is ${result}`);
    }
}

isOdd(5).then(verify, verify).then(() => console.log("done"));
isOdd(6).then(verify, verify).then(() => console.log("done"));
isOdd("gjj").then(verify, verify);
isOdd(null).then(verify, verify);
isOdd([5, 6, 52]).then(verify, verify);