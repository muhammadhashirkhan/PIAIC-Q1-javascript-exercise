// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.

let guestList = ["Rafay","Ghayour","Hasnain"];

console.log("Hey " + guestList[0] + "! You're invited to dinner today.")
console.log("Hey " + guestList[1] + "! You're invited to dinner today.")
console.log("Hey " + guestList[2] + "! You're invited to dinner today.")

console.log("\n\n" + guestList[0] + " Can't make a dinner with us\n\n");

guestList[0] = "Zunair";
console.log("Hey " + guestList[0] + "! You're invited to dinner today.")
console.log("Hey " + guestList[1] + "! You're invited to dinner today.")
console.log("Hey " + guestList[2] + "! You're invited to dinner today.")

console.log("\n\nHey guys I arranged a bigger dinner table tonight")

guestList.unshift("Kashif")
guestList.splice(2,0,"Hussain")
guestList.push("Miran")

console.log("Hey " + guestList[0] + "! Your bigger dinner table has been arranged you have to come.")
console.log("Hey " + guestList[1] + "! Your bigger dinner table has been arranged you have to come.")
console.log("Hey " + guestList[2] + "! Your bigger dinner table has been arranged you have to come.")

console.log("\n\nI can only invite two people for dinner!")
console.log("Hey " + guestList[2] + "! Sorry I can't invite you to dinner.")
console.log("Hey " + guestList[3] + "! Sorry I can't invite you to dinner.")
console.log("Hey " + guestList[4] + "! Sorry I can't invite you to dinner.")
console.log("Hey " + guestList[5] + "! Sorry I can't invite you to dinner.")
console.log("\n\n")
guestList.splice(2,guestList.length-2)

console.log("Hey " + guestList[0] + "! Your still invited.")
console.log("Hey " + guestList[1] + "! Your still invited.")

console.log("\n\nI am inviting " + guestList.length + " people on today dinner table.")