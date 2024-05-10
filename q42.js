function show_Magician(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_Great(magicians) {
    return magicians.map(name => `The Great ${name}!!`);
}
// Defining an array containing magicians name
let magicians_Name = ["Suhani Shah", "Shaheer Khan", "Florain Sainvet",];
// Calling make great function to modify magician names
let great_Magician = make_Great(magicians_Name);
// Call show magicians that shows modified List
show_Magician(great_Magician);
export {};
