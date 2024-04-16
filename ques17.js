var guestList = ['Sadaf', "Asma", "Maham", "Hafsa", "Muniza", "Sana", "Areesha"];
// Print meesage
console.log("Unfortunately! the new dinner table won't arrived so we can invite only two guest.");
//Remove guest from the list
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    if (removedGuest !== undefined) {
        console.log("SORRY! ".concat(removedGuest, ", we can't invite you"));
    }
}
//Print a message to each of the two people still on your list, 
//letting them know they’re still invited.
guestList.forEach(function (guest) {
    console.log("Dear ".concat(guest, " You are still invited for the Dinner!"));
});
// Remove last two names from the list
guestList.splice(0, guestList.length);
//print updated empty list
console.log("updated list of guest:", guestList);
