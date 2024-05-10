// creating a function with large size
function make_Shirt ( size:string = "large", message:string = "I Love TypeScrpt"){
    console.log(`Creating a ${size} shirt with ${message} prints on it`);
    
}
// calling function
make_Shirt();
// Calling a function now with medium size
make_Shirt("Medium")
// Calling a function now with small size and also prints a different messsage
make_Shirt("Small" ,"I Love Javascript")