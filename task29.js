// Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

let favorite_fruits = ['mango','orange','pineapple']
if(favorite_fruits.includes("mango")){
    console.log("I really like Mangoes!")
}
else if(favorite_fruits.includes("graphs")){
    console.log("I really like graphs")
}
else if(favorite_fruits.includes("orange")){
    console.log("I really like oranges!")
}
else if(favorite_fruits.includes("banana")){
    console.log("I really like Banana!")
}
else if(favorite_fruits.includes("pineapple")){
    console.log("I really like Pineapple!")
}
