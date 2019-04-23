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


const navContainer = document.querySelector('.nav-container')
navContainer.addEventListener('mouseover', (event) => {event.target.style.color = "grey"})

const busImg = document.querySelector('.container img')
busImg.addEventListener('dragstart', (event) => event.target.style.border = "1px dashed grey")
busImg.addEventListener('dragend', (event) => event.target.style.border = "1px dashed transparent")
