const car = {
    color: "blue",
    type: "sedan",
};

if ((car.color === "red") && (car.type === "sedan")) {
    console.log("Ill take it!");
} else {
    console.log("The car is not what I wanted.");
}

const bike = {
    color: "blue",
    cc: 1000,
};

if ((bike.color === "red" || bike.cc >= 900)) {
    console.log("Ill take it!");
} else {
    console.log("The bike is not what I wanted.");
}

// && - AND operator
// || - OR operator