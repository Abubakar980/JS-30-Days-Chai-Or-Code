// Activity 1:
// Task 1:
function throwError() {
    try {
        throw new Error("This is an entertainment Error.");
    } catch (error) {
        console.log("Caught an error: ".error.message);
    }
}
throwError()
// Task 2:
function divisionError(a, b) {
    try {
        if (b === 0) {
            throw new Error("Denomenator can't be zero.")
        }
        else {
            return a / b;
        }
    } catch (error) {
        console.log("Error: ", error.message);
    }
}
divisionError(5, 0)

// Activity 2:
// Task 3:
function finallyBlock() {
    try {
        console.log("In try catch statement");
        throw new Error("An Error Occured.")
    } catch (error) {
        console.error("Caught an Error: ", error.message);
    } finally {
        console.log("Finally block executed.");
    }
}
finallyBlock()

// Activity 3:
// Task 4:
class CustomError extends Error {
    constructor(message) {
        super(message);
        this.name = "CustomError";
    }
}

function throwCustomError() {
    try {
        throw new CustomError("This is a custom error.");
    } catch (error) {
        if (error instanceof CustomError) {
            console.error("Caught a custom error:", error.message);
        } else {
            console.error("Caught an error:", error.message);
        }
    }
}

throwCustomError();

// Task 5:
function validateInput(input) {
    class ValidationError extends Error {
        constructor(message) {
            super(message)
            this.name = "ValidationError"
        }
    }
    try {
        if (typeof input !== "string" || input.trim() === "") {
            throw new ValidationError("Input must not be empty.")
        }
        else {
            console.log("Input is valid: ", input);
        }
    } catch (error) {
        if (error instanceof ValidationError) {
            console.error("ValidationError: ", err.message);
        } else {
            console.error("Error: ", error.message);
        }
    }
}

validateInput("")
validateInput("Valid Input")

// Activity 4:
// Task 6:
function createRandomPromise() {
    return new Promise((resolve, reject) => {
        const random = Math.random()
        if (random > 0.5) {
            resolve("Promise Resolved.")
        } else {
            reject("Promise Reject.")
        }
    })
}

createRandomPromise()
    .then((message) => console.log(message))
    .catch((error) => console.error("Caught an error: ", error));

// Task 7:
async function handlePromiseWithAsync() {
    try {
        const message = await createRandomPromise()
        console.log(message);
    } catch (error) {
        console.log("Caught an error:", error);
    }
}
handlePromiseWithAsync()

// Activity 5:
// Task 8:
fetch("https://invalid.url")
    .then((response) => {
        if (!response.ok) {
            throw new Error("Network response was not ok")
        }
        return response.json()
    })
    .catch((error) => {
        console.error("Fetch error:", error.message);
    })
// Task 9:
async function fetchWithAsyncAwait() {
    try {
        const response = await fetch("https://invalid.url")
        if (!response.ok) {
            throw new Error("Network response was not ok.")
        }
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.error("Fetch error:", error.message);
    }
}
fetchWithAsyncAwait()