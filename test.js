function abbrev(input) {
    if (typeof input !== "string") {
        return "not string";
    }
    if (input.length === 0) {
        return "empty str"
    }
    let newConverStr = input.trim().toUpperCase().split(" ");
    let result = "";


    for (let i = 0; i < newConverStr.length; i++) {
        if (newConverStr[i].trim().length !== 0) {
            result += newConverStr[i].charAt(0) + ".";
        }

    }
    return result
}
console.log(abbrev("Oksana Shporlyuk super star"));
console.log(abbrev("r"));
console.log(abbrev(""));
console.log(abbrev("aa b  cc   d  "));
console.log(abbrev(12321));
console.log(abbrev(null));

