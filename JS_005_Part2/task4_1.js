// Write a JavaScript function to check if given string includes given symbol

function contains(input_string, symbol) {
    if (typeof input_string !== "string" || typeof symbol !== "string") {
        console.log("not string");
        return;
    }

    if (input_string.indexOf(symbol) >= 0) {
        console.log("found");
    } else {
        console.log("not found");
    }    
}

contains("hello", "h");
contains("hello", "ll");
contains("", "");
contains("", "s");
contains(123, "a");
contains(123, 2);
contains(null, "a");
