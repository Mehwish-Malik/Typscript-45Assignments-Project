let guests: string[] = ["Mahnoor","Asma", "Hafsa" , "Muniza"]
// print the name who is not invited for dinner
let unableAttend: string = guests.splice(0,1)[0];
console.log(`${unableAttend}, You are Not invited for Dinner`);
//push
guests.push("Sana");
// print a message
 
 guests.forEach(guest => {
    console.log(`Dear ${guest}, You are invited for Dinner!!`)
 })
