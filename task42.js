// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.

let magician_names = ['rafay','ghayour','kashif']
function show_magicians(array){
    array.forEach(item => {
        console.log(item)
    });
}
function make_great(array) {
    array.forEach((item,ind) => {
        array[ind] = "The great " + item;
    });
}
make_great(magician_names)
show_magicians(magician_names)