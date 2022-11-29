// Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
let animals = [
    {
        name: "dog",
        message: "Dog is Famous for his loyalty."
    },
    {
        name: "cat",
        message: "Many people pet cats because it's very cute."
    },
    {
        name: "horse",
        message: "Horse run very fast"
    }
]

animals.forEach((item)=>{
    console.log("Name: "+ item.name)
    console.log("Message: "+ item.message)
    console.log("\n")
})

console.log("All of these are pet animals.")