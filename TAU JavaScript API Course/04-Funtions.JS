function sum(a, b) {
    return a + b;
}
console.log(sum(10, 10));

function product(a, b) {
    return a * b;
}
console.log(product(10, 10));

const productBig = product(345, 928347);
console.log(productBig);

setTimeout(function () {
    console.log("This is a delayed message.");
}, 2000);
console.log("This message appears immediately.");

setTimeout( () => console.log("This message appears immediately."));

