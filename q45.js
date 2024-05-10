function car_Creation(manufacturer, model, ...options) {
    //  Initializing a car object with manufcturer and model
    let car = {
        manufacturer: manufacturer,
        model: model
    };
    // Add Additionol options to the car object
    options.forEach(option => {
        let [key, value] = option.split(":");
        car[key.trim()] = value.trim();
    });
    return car;
}
// Printing an Object that’s returned to make sure all the information was stored correctly.
let my_Car = car_Creation("Ferrari", "F8 Tributo", "Year:2020", "colour : Red", "DrivingType :Rear Wheel drive", "Transmission:7-Speed dual-clutch");
console.log(my_Car);
export {};
