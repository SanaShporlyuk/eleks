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

async function verify(data) {
    try {
        let result = await isOdd(data);
        // console.log("async1 fun");
        console.log(`Your number is ${result}`);
        // console.log("async2 fun");
    } catch (err) {
        if (err !== "error") {
            console.log(`Your number is ${err}`);
        }
    }
}

verify(4).then(() => { console.log("4") });
verify(45).then(() => { console.log("45") });
verify("fh");
verify([5, 5, 6]);
verify(null)
verify(0)

