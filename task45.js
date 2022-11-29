// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

function cars_info(manufacturer, model_name, keywords){
    return{
        manufacturer: manufacturer,
        model_name: model_name,
        keywords: keywords
    }
}
cars_info('Honda','Civic',['Honda Civic','Pakistan Honda','car 2022'])
cars_info('Toyota','Corolla',['Toyota Corolla','Pakistan Toyota','car 2022'])
cars_info('Suzuki','Alto',['Suzuki Alto','Pakistan Alto','car 2022'])   