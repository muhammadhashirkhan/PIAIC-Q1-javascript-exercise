// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.

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

