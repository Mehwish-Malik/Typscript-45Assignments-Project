// Array of current users
let current_users = ["Ayan", "Anaya", "fariya", "Daisie", "Harry"];
// Array of new users
let new_Users = ["Anaya", "Burak Deniz", "Harry", "Mahad", "Zunaira"];
// loop through new user to check for usernames avaibility
new_Users.forEach(new_One_User => {
    let our_Condition = current_users.some(current_One_User => current_One_User.toLowerCase() === new_One_User.toLowerCase());
    if (our_Condition) {
        console.log(`Sorry ${new_One_User} is already taken!!`);
    }
    else {
        console.log(`This username ${new_One_User} is available!!`);
    }
});
export {};
