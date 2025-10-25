// function create

function greeting (){
    console.log("hii Ashamin");
    
}
// greeting()


// pass parameter and argument
function sum (a,b, c=3){
    let sum = a + b
    console.log(sum);
}
// sum(2,6)


// rest operator

function sum1(...num){
    let sum = 0

    for(n of num){
        sum+=n
    }
    console.log(sum);
    
}

// sum1(19,22,3,4,5,6,7,8,9,)


// variable function
const addNumber  = function(a, b){
        return a + b
}
console.log(addNumber(2,3));


