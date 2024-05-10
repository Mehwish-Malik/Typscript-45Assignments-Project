function show_Magician(magicians) {
    magicians.forEach(name => console.log(name));
}
function make_Great(magicians) {
    return magicians.map(name => `The Great ${name}!!`);
}
// Defining an array containing magicians name
let magicians_Name = ["Suhani Shah", "Shaheer Khan", "Florain Sainvet",];
// Making a copy of original Array through slice() function
let copy_Magicians = magicians_Name.slice();
// Modify the copied array to include the great with their names
let copy_Great_Magicians = make_Great(copy_Magicians);
// Show Both Original and Copy Array
// Orriginal
console.log("Its an original Array");
show_Magician(magicians_Name);
// Copied
console.log("\nIt is copied Array\n");
show_Magician(copy_Great_Magicians);
export {};
