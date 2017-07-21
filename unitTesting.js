function sum(arr) {
    let sum = 0;
    for (let num of arr)
        sum += Number(num);
    return sum;
}
function testSum() {
    if (sum([1, 2]) != 3) throw new Error("1+2 != 3");
    if (sum([-2]) != -2) throw Error("-2 != -2");
    if (sum([]) != 0) throw new Error("0 != 0");
    expect(actual).equal(expected);
}

let expect = require("chai").expect;

describe("Test summator", function () {
    it("Should return 3 for [1,2]", function () {
        let expected = 3;//arrange
        let actual = sum([1, 2]);//act
        if (expected !== actual) {
            throw new Error("3 != 1+2");
        }//assert
    })
});
