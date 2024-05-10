function make_Sandwich(...items:string[]){
    console.log("\nMaking a Sandwich with the following items:\n");
    items.forEach(singleitem => console.log(singleitem));
    console.log(("\n Now Enjoy Your Sandwich"));
    
}
// Calling the function with in 3 different number of arguments
make_Sandwich ("Chicken","Egg","Ketchup","Cheese","Mayonnise")
make_Sandwich ("Bread", "Buuter")
make_Sandwich("Bread","Cheese","Egg","Kabab","Cucumber","Ketchup")