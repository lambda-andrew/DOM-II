// Your code goes here
const navItems = document.querySelectorAll('nav a')
navItems[0].addEventListener('mouseover', (event) => event.target.style.color = "red")
navItems[0].addEventListener('mouseleave', (event) => event.target.style.color = "black")
navItems[1].addEventListener('mouseover', (event) => event.target.style.color = "green")
navItems[1].addEventListener('mouseleave', (event) => event.target.style.color = "black")
navItems[2].addEventListener('mouseover', (event) => event.target.style.color = "blue")
navItems[2].addEventListener('mouseleave', (event) => event.target.style.color = "black")
navItems[3].addEventListener('mouseover', (event) => event.target.style.color = "orange")
navItems[3].addEventListener('mouseleave', (event) => event.target.style.color = "black")

let anchorArray = Array.from(navItems);
for(let i = 0; i < anchorArray.length; i++){
  anchorArray[i].addEventListener('click', (event)=>{event.preventDefault()})
}

const logo = document.querySelector('.logo-heading')
logo.addEventListener('click', (event) => event.target.style.fontSize = "5rem")
logo.addEventListener('dblclick', (event) => event.target.style.fontSize = "4rem")
logo.addEventListener('mouseover', (event) => event.target.style.cursor = "pointer")


const input = document.createElement('input')
input.addEventListener('keydown', (event) => event.target.style.background = "blue")
input.addEventListener('keyup', (event) => event.target.style.background = "orange")
input.addEventListener('focus', (event) => event.target.style.background = "yellow")
logo.prepend(input)


const busImg = document.querySelector('.container img')
busImg.addEventListener('dragstart', (event) => event.target.style.border = "1px dashed grey")
busImg.addEventListener('dragend', (event) => event.target.style.border = "1px dashed transparent")

const firstContent = document.querySelector('.intro p')
firstContent.addEventListener('copy', () => myEvent())

function myEvent(){
  alert("OH.");
}

const secondHeader = document.querySelector('.text-content');
const secondPara = document.querySelector('.text-content p')

secondHeader.addEventListener('click', (event) => event.target.style.background = "purple")
secondPara.addEventListener('click', () => prop())

function prop(){
  secondPara.style.background = "orange"
  event.stopPropagation();
}
