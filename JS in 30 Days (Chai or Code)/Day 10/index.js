// Task 1: Click Event Listener
document.getElementById("clickButton").addEventListener("click", function() {
    document.getElementById("clickResult").innerText = "Button Was Clicked";
});

// Task 2: Double-Click Event Listener
document.getElementById("image_button").addEventListener("dblclick", function() {
    document.getElementById("image_1").style.opacity = 0.5;
});

// Task 3: Mouseover Event Listener
document.getElementById("hover_Me").addEventListener("mouseover", function() {
    document.getElementById("hoverResult").style.backgroundColor = "green";
});

// Task 4: Mouseout Event Listener
document.getElementById("remove_Me").addEventListener("mouseout", function() {
    document.getElementById("hoverResult").style.backgroundColor = "pink";
});

// Task 5: Keydown Event Listener
document.getElementById("keyDownResult").addEventListener("keydown", function(event) {
    document.getElementById("keyDown").innerText = "Key Pressed: " + event.key;
});

// Task 6: Keyup Event Listener
document.getElementById("keyUpResult").addEventListener("keyup", function(event) {
    document.getElementById("keyUp").innerText = "Current Value: " + event.target.value;
});

// Task 7: Submit Event Listener
document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var formData = new FormData(event.target);
    var username = formData.get("username");
    document.getElementById("submitResult").innerText = "Form was submitted with username: " + username;
});

// Task 8: Change Event Listener
document.getElementById("selectField").addEventListener("change", function(event) {
    document.getElementById("changeResult").innerText = "Selected value: " + event.target.value;
});

// Task 9: Click Event Delegation
document.getElementById("myList").addEventListener("click", function(event) {
    if (event.target && event.target.nodeName === "LI") {
        document.getElementById("listResult").innerText = "Clicked item: " + event.target.innerText;
    }
});

// Task 10: Event Listener for Dynamically Added Elements
document.getElementById("addChildButton").addEventListener("click", function() {
    var newChild = document.createElement("div");
    newChild.innerText = "New Child";
    document.getElementById("parentDiv").appendChild(newChild);
});