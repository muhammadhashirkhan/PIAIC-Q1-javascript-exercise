// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

let magician_names = ['rafay','ghayour','kashif']
function show_magicians(array){
    array.forEach(item => {
        console.log(item)
    });
}
function make_great(array) {
    let newArray = [];
    array.forEach((item,ind) => {
        newArray[ind] = "The great " + item;
    });
    return newArray;
}
let new_magician_names = make_great(magician_names)
show_magicians(magician_names)
show_magicians(new_magician_names)