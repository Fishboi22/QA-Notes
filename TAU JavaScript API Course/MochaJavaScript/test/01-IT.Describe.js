const assert = require('assert');
const { describe, it } = require('mocha');

describe('Mathematical Operations', function () {


    it("Addition of two variables", function () {
        let a = 5;
        let b = 10;

        let c = a + b;

        assert.strictEqual(c, 15);
    });

    it("Subtraction of two variables", function () {
        let a = 5;
        let b = 10;

        let c = a - b;

        assert.strictEqual(c, -5);
    });

    it("Multiplication of two variables", function () {
        let a = 5;
        let b = 10;

        let c = a * b;

        assert.strictEqual(c, 50);
    });

    it("Division of two variables", function () {
        let a = 5;
        let b = 10;

        let c = a / b;

        assert.strictEqual(c, 0.5);
    });

});

