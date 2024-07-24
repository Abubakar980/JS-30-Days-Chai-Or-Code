// Activity 1:
// Task 1:
console.log(document.getElementById("id").textContent = "This is ID");

// Task 2:
console.log(document.getElementsByClassName("class").textContent = "This is CLASS");

// Activity 2:
// Task 3:
const newDiv = document.createElement("div")
newDiv.textContent = "I am new Div"
document.body.appendChild(newDiv)

// Task 4:
const newLiItem = document.createElement("li")
newLiItem.textContent = "I am new li"
document.querySelector("ul").appendChild(newLiItem)

// Activity 3:
// Task 5:
const elementToRemove = document.getElementById("element")
elementToRemove.parentNode.removeChild(elementToRemove)

// Task 6:
const parentElement = document.getElementById("elementId")
elementToRemove.parentNode.removeChild(elementToRemove)

// Activity 4:
// Task 7:
document.querySelector("img").src = "./abc.png"

// Task 8:
document.getElementById("textDiv").classList.add("underline")
document.getElementById("textDiv").classList.remove("text-gone")

// Activity 5:
// Task 9:
document.querySelector("button").addEventListener("click", function () {
    document.getElementById("newtext").innerText = "I am new text"
});

// Task 10:
document.querySelector("button").addEventListener("mouseover", function () {
    this.style.borderColor = "newBorderColor"
});