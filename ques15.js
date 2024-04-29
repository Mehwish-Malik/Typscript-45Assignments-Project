let guests = ["Mahnoor", "Asma", "Hafsa", "Muniza"];
// print the name who is not invited for dinner
let unableAttend = guests.splice(0, 1)[0];
console.log(`${unableAttend}, You Not invited for Dinner`);
//push
guests.push("Sana");
// print a message
guests.forEach(guest => {
    console.log(`Dear ${guest}, You are invited for Dinner!!`);
});
export {};
