const assert = require('assert');
const { describe, it } = require('mocha');

describe.only('Mathematical Operations', function () {
    // This block will only run the tests within this describe block


    it.skip("Addition of two variables", function () {
        // This test is skipped and will not run
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

    it("A Pending Test, without a callback", function () {
        // This test is pending and will not run
    });

});


