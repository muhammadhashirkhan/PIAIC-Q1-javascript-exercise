// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!
// • Remove all of the usernames from your array, and make sure the correct message is printed.

let usernames = []
let user = {
    name: 'admin',
    authority: "admin"
}
if (usernames.length != 0) {
    usernames.forEach((item) => {
        if (item == user.name) {
            if (user.authority == "admin") {
                console.log(`Hello ${user.name}, would you like to see a status report?`)
            }
            else {
                console.log(`Hello ${user.name}, thank you for logging in again.`)
            }
        }
    })
}
else{
    console.log("there is no user exists")
}