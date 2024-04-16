var guestList = ["Asma", "Hafsa", "Muniza", "Sana"];
console.log("Great News! We found a Bigger Dinner Table!!");
// unshift()
guestList.unshift("Sadaf");
//Splice()
guestList.splice(Math.floor(guestList.length / 2), 0, "Maham");
//Push
guestList.push("Areesha");
guestList.forEach(function (guest) {
    console.log(("Dear ".concat(guest, ", You All Re Invited For Dinner!")));
});
