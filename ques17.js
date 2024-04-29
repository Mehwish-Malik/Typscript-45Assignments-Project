let guestList = ['Sadaf', "Asma", "Maham", "Hafsa", "Muniza", "Sana", "Areesha"];
// Print meesage
console.log("Unfortunately! the new dinner table won't arrived so we can invite only two guest.");
//Remove guest from the list
while (guestList.length > 2) {
    let removedGuest = guestList.pop();
    if (removedGuest !== undefined) {
        console.log(`SORRY! ${removedGuest}, we can't invite you`);
    }
}
// Print a message to each of the two people still on your list, 
// letting them know they are still invited.
guestList.forEach(guest => {
    console.log(`Dear ${guest} You are still invited for the Dinner!`);
});
// Remove last two names from the list
guestList.splice(0, guestList.length);
//print updated empty list
console.log("updated list of guest:", guestList);
export {};
