// document.getElementById("main")
// document.getElementsByTagName("h1")
// document.getElementsByClassName("heading")
// document.querySelector(".heading")
// document.querySelectorAll("h1")

const heading = document.querySelector(".heading")

// Create Element
const newElement = document.createElement("h2")
newElement.textContent = "This is Heading Two"
heading.after(newElement)