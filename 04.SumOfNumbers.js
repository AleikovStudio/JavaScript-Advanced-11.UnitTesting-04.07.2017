function sum(arr) {
    let sum = 0;
    for (let i of arr) {
        sum += Number(i);
    }
    return sum;
}

console.log(sum([3, 4, 5, 6, 7]));