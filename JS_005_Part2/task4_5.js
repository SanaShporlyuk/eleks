// Function with conditional statement to sort three numbers
function sortNum (a, b, c) {
    let result = [];
    if (a < b && a < c) {
        result.push(a);
        if (b < c) {
            result.push(b);
            result.push(c);
        } else {
            result.push(c);
            result.push(b);
        }
    } else if (b < a && b < c) {
        result.push(b);
        if (a < c) {
            result.push(a);
            result.push(c);
        } else {
            result.push(c);
            result.push(a);
        }
    } else {
        result.push(c);
        if (a < b) {
            result.push(a);
            result.push(b);
        } else {
            result.push(b);
            result.push(a);
        }
    }
    return result;
};

console.log(sortNum(1,2,3));
console.log(sortNum(1,1,1));
console.log(sortNum(1,2,1));
console.log(sortNum(4,3,6));
console.log(sortNum(3,2,1));
