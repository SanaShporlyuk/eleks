/*
Write a JavaScript function to convert a string in abbreviated
form. console.log(abbrev (“Name Surname")) – should be
“N.S.” (should convert lower case names to upper)
*/
abbrev = function (input_string) {
    if (typeof input_string !== "string") {
        return "";
    }
    let split_names = input_string.trim().toUpperCase().split(" ");
    let result = "";
    for (let i = 0; i < split_names.length; i++) {
        if (split_names[i].trim().length !==0) {
            result += split_names[i].charAt(0) + ".";
        }
    }
    return result;
};
console.log(abbrev("Oksana Shporlyuk super star"));
console.log(abbrev("r"));
console.log(abbrev(""));
console.log(abbrev("aa b  cc   d  "));
console.log(abbrev(12321));
console.log(abbrev(null));
