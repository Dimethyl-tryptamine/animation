// Event listeners for shape buttons
document.getElementById("square-button").addEventListener("click", function() {
    morphShape("square");
});

document.getElementById("circle-button").addEventListener("click", function() {
    morphShape("circle");
});

document.getElementById("triangle-button").addEventListener("click", function() {
    morphShape("triangle");
});

// Function to morph shapes into their new positions
function morphShape(shape) {
    const square = document.getElementById("square");
    const circle = document.getElementById("circle");
    const triangle = document.getElementById("triangle");

    // Set the new positions and shapes based on the selected shape
    switch (shape) {
        case "square":
            square.style.transform = "translate(100px, 100px)"; // Move square
            square.style.backgroundColor = "orange"; // Change color to orange
            break;
        case "circle":
            circle.style.transform = "translate(200px, 50px)"; // Move circle
            circle.style.backgroundColor = "yellow"; // Change color to yellow
            break;
        case "triangle":
            triangle.style.transform = "translate(150px, 150px)"; // Move triangle
            triangle.style.borderBottomColor = "pink"; // Change triangle color to pink
            break;
    }
}

// Function to handle dropdown selection
function selectOption(element) {
    const selectedShape = element.textContent.toLowerCase();
    morphShape(selectedShape);
}

// Initially set positions for all shapes
setInitialPositions();

function setInitialPositions() {
    document.getElementById("square").style.transform = "translate(0px, 0px)"; // Initial position for square
    document.getElementById("circle").style.transform = "translate(0px, 0px)"; // Initial position for circle
    document.getElementById("triangle").style.transform = "translate(0px, 0px)"; // Initial position for triangle
}
