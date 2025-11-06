const quotes = [
  "Dream big.",
  "Keep going.",
  "Stay positive.",
  "Never give up.",
  "Believe in yourself.",
  "Make it happen.",
  "Stay humble.",
  "Work hard.",
  "Be kind.",
  "Shine bright."
];

const tag = document.querySelector(".tag")
const quote = document.querySelector(".quote")
quote.addEventListener("click",()=>{
    const index = Math.floor(Math.random()*10) 
    tag.textContent = quotes[index]
    
})


//background changer
const background = document.querySelector(".bg")
const buttons = document.querySelector(".parent").addEventListener("click",(e)=>{
    const color = e.target
    background.style.backgroundColor = color.textContent
})


// income tax calculator

const income = document.querySelector("#income")
const form = document.querySelector("form")

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    const pay = document.querySelector(".pay")
    if(income.value <= 1200000) {
        pay.textContent = (income.value / 100) * 5
    }
    form.reset()
})

