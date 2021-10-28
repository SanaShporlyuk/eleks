// Function to check a string is blank
function is_string_empty(input) {
    if (typeof input !== "string") {
        console.log(`"${input}" is not string`);
        return;
    }

    if (input.trim().length===0) {
        console.log(`"${input}" is empty`);
    } else {
        console.log(`"${input}" is not empty`);
    }
}
is_string_empty("");
is_string_empty("Hefj kjillo o998  u");
is_string_empty("             ");
is_string_empty(1);
