
// build a simple zomato app


const orderDetails = {
    orderId:123455,
    food:["pizza", "biriyani"],
    amount:1000
}


function placeOrder(cb){
    console.log("payment in progress..");

    setTimeout(()=>{
        console.log("Payment is SuccessFull,, Order get placed"); 
        cb()
    },3000)
    
}

function preparingOrder(cb){
    console.log("You Order is Food Preparing....");
    setTimeout(()=>{
        console.log("Your Order is Prepared"); 
        cb()
    },3000)
}

function pickupOrder(){
    console.log("Delivery boy Pickup your order");
     setTimeout(()=>{
        console.log("I pickup the order"); 
    },3000)
}

function orderDeliver(){
    console.log("Order out for deliver");
     setTimeout(()=>{
        console.log("Order is Delivered"); 
    },3000)
}



placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            orderDeliver()
        })
    })
})