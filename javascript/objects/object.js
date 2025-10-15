// Create object


const user = {
    name:"ashamin biswas",
    age:24,
    email:"ashaminbiswas1@gmail.com",
    amount:3000
}

// console.log(user.name);

// add new element
user.aadhaar = 523420539625
// console.log(user);


// update
user.name = "ashamin"
// console.log(user);


// delete
delete user.aadhaar
// console.log(user);


// access a single value
// console.log(user["name"]);



// for access key, values, and entries
// console.log(Object.keys(user));
// console.log(Object.values(user));
// console.log(Object.entries(user));



//  for perform loop operation on a object
for (const key in user) {
    console.log(key, user[key]);
}


