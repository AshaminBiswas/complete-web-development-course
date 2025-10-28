// let arr = [1,2,3,4,5,6]
// console.log(arr.join());

// foreach

let arr = [1, 2, 3, 4, 5, 6];
let sum = 0;
arr.forEach((item) => {
  sum = sum + item;
});

// console.log(sum);

// Filter
let newArray = arr.filter((item) => item < 3);
// console.log(newArray)

arr.filtering = function (cb) {
  let ans = [];
  for (let number of this) {
    if (cb(number)) {
      ans.push(number);
    }
  }
  return ans
};

// console.log(arr.filtering((num)=> num > 2));



//map

let multiply = arr.map((num)=>num * 2)
// console.log(multiply);


// arr.mapping = function(cb){
//     let answer = []
//     for(let item of this){
//         if(cb(item)){
//             answer.push(item)
//         }
//     }
//     return answer
// }
// console.log(arr.mapping((item)=> item + 2));


//reduce

let newSum = arr.reduce((acc, crr)=>{
    return acc + crr
},0)

console.log(newSum);
