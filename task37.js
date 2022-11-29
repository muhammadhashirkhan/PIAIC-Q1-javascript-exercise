// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function make_shirt(size = 'large',message){
    if(size == 'large' || size == 'medium' || size == 'm' || size == 'l'){
        console.log(`The size of the shirt is ${size}, and message you wanted to print on it is "I love JavaScript"`)
    }
    else{
        console.log(`The size of the shirt is ${size}, and message you wanted to print on it is "${message}"`)
    }
}
make_shirt('l',"Eat Sleep Code Repeat!")