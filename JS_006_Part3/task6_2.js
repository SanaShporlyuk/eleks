// Join all array elements into string
function joinElem(input) {
    try {
        return input.join("");
    } catch (err) {
        return err.message;
    }
}

console.log(joinElem([46, 44, "nice", 98, 0]));
console.log(joinElem([null, "a"]));
console.log(joinElem("asdasd"));