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
    // console.log(key, user[key]);
}



// Object destructuring
let {name, roll} = user
// console.log(name, roll);

let array = [1,2,3,4,5,6,4]
let [first, second] = array
// console.log(first, second);


for (const [key, value ] of Object.entries(user)) {
    // console.log(key, value);
}


let user1 = {
    name:"lolo",
    greet:function(){
        console.log(this.name)
    }
}

let user2 = {
    name:"kalu",
    greet: user1.greet
}

// console.log(user2.greet());



let userName = {
    name:"paglu",
    address:{
        vill:"kanpur"
    }
}
// this is shalo copy
const newUser = [...userName]

// this is deep copy 
const obj = structuredClone(userName)
