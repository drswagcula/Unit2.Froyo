// Prompt the user for a list of froyo flavors
const userInput = prompt(
    "Enter your froyo flavors, separated by commas:",
    "vanilla,strawberry,coffee,chocolate,pistachio"
);

// Convert the input string into an array
const flavorsArray = userInput.split(",");

// Function to count the occurrences of each flavor
function countFlavors(flavors) {
    const flavorCounts = {};

    for (let flavor of flavors) {
        flavor = flavor.trim().toLowerCase(); // Normalize input
        flavorCounts[flavor] = (flavorCounts[flavor] || 0) + 1;
    }

    return flavorCounts;
}

// Get the count of each flavor
const orderSummary = countFlavors(flavorsArray);

// Log the results in a table format
console.table(orderSummary);
