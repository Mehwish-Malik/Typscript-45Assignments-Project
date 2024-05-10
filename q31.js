let userName = ["Mahnoor", "Muniza", "Admin", "Fariya", "Hafsa"];
userName = [];
if (userName.length === 0) {
    console.log("Your Array is empty We need to find some users! ");
}
else {
    userName.forEach(user => {
        if (user === "Admin") {
            console.log(`Hello ${user}, Would you like to see a status Report!!`);
        }
        else {
            console.log(`Hello ${user}, Thanks for Logging in Again`);
        }
    });
}
export {};
