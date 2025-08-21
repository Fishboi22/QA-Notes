describe('Mocha Hooks', function () {

    before(function () {
        console.log('This runs once before all tests in this block');
    });

    after(function () {
        console.log('This runs once after all tests in this block');
    });

    beforeEach(function () {
        console.log('This runs before each test in this block');
    });

    afterEach(function () {
        console.log('This runs after each test in this block');
    });

    it('Test 1', function () {
        console.log('Running Test 1');
    });

    it('Test 2', function () {
        console.log('Running Test 2');
    });

});