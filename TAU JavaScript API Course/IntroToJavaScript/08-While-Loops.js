// let password = "1234"
// let userInput = "";
// while (password !== userInput) {
//     userInput = prompt("Please enter your password:");
//     if (userInput === password) {
//         console.log("Access granted.");
//     } else {
//         console.log("Access denied. Try again.");
//     }
// }
// alert("Welcome to the system!");
// This code prompts the user to enter a password until they get it right.
// It uses a while loop to keep asking for input until the correct password is entered.
// The user is informed whether access is granted or denied based on their input.


let count = 1;
let maxCount = 5;
do {
    countDown = count * maxCount;
    maxCount--;
} while (count < maxCount);

console.log("Count down completed: " + countDown);
// This code uses a do-while loop to perform a countdown.
//a do-while loop executes the block of code once before checking the condition.
// It initializes count to 1 and maxCount to 5, then calculates countDown by