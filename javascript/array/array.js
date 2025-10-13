//Array

let marks = [100,80,75,67,95]

// console.log(marks);

// array are mutable, it's mean if can make any changes in a array then its change the original array

let arr = [100, "ashamin", false ]
arr[1] = "biswas"
// console.log(arr);
arr.push("lol")  // its add the last element form an array
// console.log(arr);
arr.pop() // its delete the last element form an array
// console.log(arr);



let array = [20,30,40]
array.unshift(10)  // its add new element at first index
// console.log(array);

array.shift()  // its delete new element at first index
// console.log(array);


let num = [1,2,3,4,5]
let newNum = num.slice(1,3)  // its create na new array.
// console.log(newNum);
let num2 = num.splice(1,3)   // its create a new array and make modification in original array
// console.log(num2);

let num3 = num.splice(1,2, "asjam", "kjhf")
// console.log(num);


let cont = arr.concat(num)// its return a new array
// console.log(cont);




//Spread operator

let arr1 = [0,1,2,]
let arr2 = [3,4,5]
let arr3 = [6,7,8,9]

let newArr = [...arr1,...arr2, ...arr3]
// console.log(newArr);


let friend = ["lol", "pop", "push"]
let fd  = friend.join("_")// its return a new string not modify the array
// console.log(fd);

console.log(friend.indexOf("lol")); // its return the index number of the element, if not find then its return -1


let number = [12,85,565,66,1,67,1255,2,78,]
number.sort((a,b)=>a-b) // its modify the original array. for sorting ascending order
number.sort((a,b)=>b-a)// its modify the original array. for sorting diseasing order
console.log(number);


