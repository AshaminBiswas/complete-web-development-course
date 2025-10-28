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
