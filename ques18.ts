let placesToVisit : string[] = ["Maldives" ,"Turkey", "Paris", "Bali", "Dubai",];
//Print in original order
console.log("Original order",placesToVisit);

// print array in alphabetical order
console.log("Alphabetical order:" , placesToVisit.slice().sort());
//Print the array is still in it,s original order
console.log("Original order after sorting",placesToVisit);
// Print  array in reverse alphabetical order without changing the order of the original list
console.log("Reverse Alphabetical order:", placesToVisit.slice().sort().reverse());
// array is still in it,s original order
console.log("Original order after reverse sorting",placesToVisit);
// Reverse the order of  list. 
placesToVisit.reverse();
console.log("Reverse Order:", placesToVisit);
// Reverse the order of  list again.
placesToVisit.reverse();
console.log("Back to Original order:", placesToVisit);
// Sort array so it’s stored in alphabetical order. 
console.log("Sorted in Alphabetical order:" , placesToVisit.slice().sort());
// Sort to change array so it’s stored in reverse alphabetical order.
console.log("Stored in Reverse Alphabetical order:", placesToVisit.slice().sort().reverse());
