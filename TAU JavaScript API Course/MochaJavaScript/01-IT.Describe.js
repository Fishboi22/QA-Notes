import { describe, it } from "mocha";
import assert from "assert";
// Test cases for mathematical operations
// Test cases for arithmetic operations



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
        var a = 5;
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

