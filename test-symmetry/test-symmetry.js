let isSymmetric = require("../05.CheckForSymmetry").isSymmetric;
let expect = require("chai").expect;

describe("Check symmetry task", function () {
    describe("Function tests", function () {
        it("should be a function", function () {
            expect(typeof isSymmetric).to.equal("function");
        })
    });

    describe("True test for even input", function () {
        it("should return true for [1,2,3,3,2,1]", function () {
            expect(isSymmetric([1, 2, 3, 3, 2, 1])).to.be.true;
        });
    });

    describe("False test for even input", function () {
        it("should return false for [1,2,4,3,2,1]", function () {
            expect(isSymmetric([1, 2, 4, 3, 2, 1])).to.be.false;
        });
    });

    describe("True test for odd input", function () {
        it("should return true for [1,2,3,2,1]", function () {
            expect(isSymmetric([1, 2, 3, 2, 1])).to.be.true;
        });
    });

    describe("False test for odd input", function () {
        it("should return false for [1,3,4,2,1]", function () {
            expect(isSymmetric([1, 3, 4, 2, 1])).to.be.false;
        });
    });

    describe("True test for input with 1 number", function () {
        it("should return true for [1]", function () {
            expect(isSymmetric([1])).to.be.true;
        });
    });

    describe("False test for input with 2 numbers", function () {
        it("should return false for [5,'hi',{a:5},new Date(),{a:5},'hi',5]", function () {
            expect(isSymmetric([1, 2])).to.be.false;
        });
    });

    describe("True for different types of input", function () {
        it("True for different types of input for [1,2]", function () {
            expect(isSymmetric([5,'hi',{a:5},new Date(),{a:5},'hi',5])).to.be.true;
        });
    });

    describe("False for different types of input", function () {
        it("False for different types of input for [5,'hi',{a:5},new Date(),{x:5},'hi',5]", function () {
            expect(isSymmetric([5,'hi',{a:5},new Date(),{x:5},'hi',5])).to.be.false;
        });
    });

    describe("False for input NOT an array", function () {
        it("False for input NOT an array for 1,2,3", function () {
            expect(isSymmetric(1,2,3)).to.be.false;
        });
    });
});