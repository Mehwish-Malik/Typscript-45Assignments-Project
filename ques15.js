var guests = ["Mahnoor", "Asma", "Hafsa", "Muniza"];
// print the name who is not invited for dinner
var unableAttend = guests.splice(0, 1)[0];
console.log("".concat(unableAttend, ", You Not invited for Dinner"));
//push
guests.push("Sana");
// print a message
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", You are invited for Dinner!!"));
});
