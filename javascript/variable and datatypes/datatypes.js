// Data Type In javascript

// there is two types of data exists in javascript
// Primitive and non Primitive

//Number
const  num = 100  // this is a example of number data type
console.log(typeof num)


// string 
const name  = "this is a string"   // this is string
console.log(typeof name)


// boolean
let login  = true    // this is a boolean data type its contain true or false
console.log(typeof login)


//undefine
let user;     // this is a undefine data type, if you declare a variable but not assign any value then by default its assign undefine, because you did't assign any value.

console.log(typeof user);


//bigint
let n = 4187446764174687654n 
console.log(typeof n);

// Null
let temp = null
console.log(typeof temp)
//Symbol 
const id1 = Symbol("id") // for creating unique value
console.log(typeof id1)






// NON Primitive Data type 

// Array
arr = [1,2,3,4,5,6,7,8,9,0 ]
console.log(typeof arr)

// Object 
let obj = {
    name:"ashamin",
    id: "123456"
}
console.log(typeof obj)

// function

function add (){
   console.log("Ashamin Biswas")
}
 add()

console.log(typeof add)
