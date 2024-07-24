// Activity 1:
// Task 1:
const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Wada poora kiya par 2 seconf bad.")
    }, 2000)
})

promiseOne.then((msg) => {
    console.log(msg);
})

// Task 2:
const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(new Error("Wada tor diya poory 2 second bad."))
    }, 2000)
})
promiseTwo.catch((err) => {
    console.log(err.message);
})

// Activity 2:
// Task 3:
const promiseThree = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 3 done after 3 seconds")
        }, 3000)
    })
}

const promiseFour = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 4 done after 4 seconds")
        }, 4000)
    })
}

const promiseFive = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 5 done after 5 seconds")
        }, 5000)
    })
}

promiseThree()
    .then((msg3) => {
        console.log(msg3);
        return promiseFour()
    })
    .then((msg4) => {
        console.log(msg4);
        return promiseFive()
    })
    .then((msg5) => {
        console.log(msg5);
    })

// Activity 3:
// Task 4:
const promiseSix = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Async Function Resolved")
    }, 2000)
})

async function function1() {
    const result = await promiseSix;
    console.log(result);
}
function1()

// Task 5:
const promiseSeven = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Async Function Rejected")
    }, 3000)
})

async function function2() {
    try {
        const result = await promiseSeven;
        console.log(result);
    } catch (error) {
        if (error instanceof Error) {
            console.error(error.message);
        } else {
            console.error(error)
        }
    }
}
function2()

// Activity 4:
// Task 6:
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error("Error fetching Data: ", err);
    })

    // Task 7:
async function fetchData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        )
        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.error("Error fetching data: ", error);
    }
}
fetchData()

// Activity 5:
// Task 8:
const promiseA = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise A resolved");
    }, 1000);
});

const promiseB = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise B resolved");
    }, 2000);
});

const promiseC = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise C resolved");
    }, 3000);
});

Promise.all([promiseA, promiseB, promiseC]).then((values) => {
    console.log(values);
})

// Task 9:
const promiseX = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise X resolved");
    }, 1000);
});

const promiseY = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise Y resolved");
    }, 2000);
});

const promiseZ = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Promise Z resolved");
    }, 3000);
});

Promise.race([promiseX, promiseY, promiseZ]).then((value) => {
    console.log(value);
});