// Defining a function to create a car object  with a optionol options...
interface CarOptions {
[key:string]:string;
}
function car_Creation(manufacturer:string, model:string, ...options:string[]): CarOptions {
    //  Initializing a car object with manufcturer and model
    let car:CarOptions = {
        manufacturer:manufacturer,
    
         model:model
        
    };
    // Add Additionol options to the car object
    options.forEach(option =>{
    let[key,value]=option.split(":");
    car[key.trim()]=value.trim();
    
});
return car;

}
// Printing an Object that’s returned to make sure all the information was stored correctly.
let my_Car = car_Creation("Ferrari","F8 Tributo","Year:2020","colour : Red","DrivingType :Rear Wheel drive","Transmission:7-Speed dual-clutch");
console.log(my_Car);


