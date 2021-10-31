// Sum two array
function SumArrays(array1, array2) {
    let sumResults = [];
    let maxLength = Math.max(array1.length, array2.length);
    for (let i = 0; i < maxLength; i++) {
        sumResults.push((array1[i] || 0) + (array2[i] || 0));
    }
    return sumResults;
}

console.log(SumArrays([4, 4], [5, 6, 4, 1]));
console.log(SumArrays([4, 4, "a"], [5, 6, 4, 1]));