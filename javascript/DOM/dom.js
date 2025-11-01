// document.getElementById("main")
// document.getElementsByTagName("h1")
// document.getElementsByClassName("heading")
// document.querySelector(".heading")
// document.querySelectorAll("h1")

const heading = document.querySelector(".heading")

// Create Element
const newElement = document.createElement("h2")
newElement.textContent = "This is Heading Two"

const newElement2 = document.createElement("h3")
// Add Class On tag
newElement2.className = "diwali"
newElement2.classList.add("h3")
newElement2.textContent = "I am H3 "

heading.after(newElement)
newElement.after(newElement2)


const ul = document.querySelector("ul")
// console.log(ul);
ul.setAttribute("id", "ul")
// const list = document.createElement("li")
// list.textContent = "Milk"
// const list2 = document.createElement("li")
// list2.textContent = "Alu"

// ul.append(list)
// ul.prepend(list2)




const item = ["alu", "paneer", "tomato", "onion","garlic"]

item.map((item)=>{
    let list = document.createElement("li")
    list.textContent = item
    ul.append(list)
    
})
