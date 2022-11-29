// Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

function Sandwiches_items(array){
    console.log("Your Order is Being Prepared!")
    console.log("\nIngredients used in your order:")
    array.forEach(elem => {
        console.log("\t"+elem)
    });
    console.log("\n")
}

Sandwiches_items(['egg','tomato','chicken','gabbage'])
Sandwiches_items(['egg','ketchup','onion','chicken','gabbage'])
Sandwiches_items(['egg','tomato','onion','chicken','gabbage'])