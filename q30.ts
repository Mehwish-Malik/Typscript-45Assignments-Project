// creating an Array
let userName:string[] = ["Mahnoor","Muniza","Admin","Fariya","Hafsa"]

userName.forEach(user =>{
    if(user === "Admin"){
        console.log(`Hello ${user}, Would you like to see a status Report!!`);

    }else{
        console.log(`Hello ${user}, Thanks for Logging in Again`);
        
    }
}

)