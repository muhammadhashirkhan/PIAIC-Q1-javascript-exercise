// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let places = ["Turkey" , "London" , "Philippines" , "Saudia Arabia" , "Japan" , "China"]
console.log("print last item of the array")
// here is the error 
console.log(places[places.length])
// here is the correct program
console.log(places[places.length - 1])