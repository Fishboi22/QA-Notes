const assert = require('assert');
const { describe, it } = require('mocha');

describe('Mathematical Operations', function () {

    this.retries(3); // Retry failed tests up to 3 times

    this.beforeEach(function (done) {

        this.timeout(1000); // Setting a global timeout of 10 seconds for all tests

        setTimeout(done, 500); // Setting timeout to 500ms
        // Simulating a long operation using setTimeout

    });


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


