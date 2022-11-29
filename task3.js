// problem
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName = "hashir khan"
let temp = personName.split(" ")
console.log("Name in uppercase is: " + personName.toUpperCase())
console.log("Name in lowercase is: " + personName.toLowerCase())

personName = ""
temp.forEach((item)=>{
    let letters = item.split("")
    letters.forEach((ltr,ind)=>{
        if(ind == 0){
            personName += ltr.toUpperCase()
        }
        else{
            personName += ltr
        }
    })
    personName += " "
})

console.log("Name in title case is: " + personName)