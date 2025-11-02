const h1 = document.querySelector("h1")
h1.addEventListener("click",()=>{
    h1.textContent = "Hello From Ashamin"
})


const grandParent = document.querySelector("#grand-parent")
const parent = document.querySelector("#parent")
const child = document.querySelector("#child")

grandParent.addEventListener("click",()=>{
    console.log("Grand Parent is Clicked")
})
parent.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("Parent is Clicked")
})
child.addEventListener("click",(e)=>{
    e.stopPropagation()
    console.log("Child is Clicked")
})