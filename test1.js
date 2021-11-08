function joinElem(input) {
  let a = Array.isArray(input); 
    if (a===true)  {
        let results = input.join("");
        return results;
    } else {
        return ("not aray");
    }

}

console.log(joinElem([46, 44, "nice", 98, 0]));
console.log(joinElem([null, "a"]));
console.log(joinElem("asdasd"));