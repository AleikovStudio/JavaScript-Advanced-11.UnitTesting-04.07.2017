function subSum(arr, startIndex, endIndex) {
    if (!Array.isArray(arr))
        return NaN;
    if (startIndex < 0)
        startIndex = 0;
    if (endIndex > arr.length - 1)
        endIndex = arr.length - 1;
    let sum = 0;
    for (let i = startIndex; i <= endIndex; i++)
        sum += Number(arr[i]);
    return sum;
}

console.log(subSum([10, 20, 30, 40, 50, 60], 1, 20));
console.log(subSum([10, 20, 30, 40, 50, 60], -1, 4));
console.log(subSum([10, 20, 30, 40, 50, 60], -1, 20));
console.log(subSum(["Pesho", 20, 30, 40, 50, 60], 3, 4));
console.log(subSum([], 3, 4));
console.log(subSum({}, 3, 4));