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