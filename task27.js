// Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

function alienColorFunc(alien_color) {
    if (alien_color == 'green') {
        console.log("The player earned 5 points.")
    }
    else if (alien_color == "yellow") {
        console.log("Player just earned 10 points.")
    }    
    else if (alien_color == "red") {
        console.log("Player just earned 15 points.")
    }
}
console.log("Verson 1.0")
let alien_color = "red"
alienColorFunc(alien_color)
alien_color = "yellow"
alienColorFunc(alien_color)
alien_color = "red"
alienColorFunc(alien_color)