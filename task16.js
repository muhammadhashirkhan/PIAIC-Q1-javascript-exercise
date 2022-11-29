// More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.

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