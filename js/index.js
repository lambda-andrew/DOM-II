// Your code goes here

//Global
let container = document.querySelector('.container');
let input = document.createElement('input');
container.appendChild(input)
input.addEventListener('keydown', (event)=>{event.target.style.background = "#a6ff4d"})
input.addEventListener('keyup', (event)=>{event.target.style.background = "#66d9ff"})
input.addEventListener('focusout', (event)=>{event.target.style.background = "white"})
input.addEventListener('paste', myFunc)
function myFunc(){
  alert("CHEATING.")
}
//Nav
let anchors = document.getElementsByTagName('a');
let anchorArray = Array.from(anchors);
for(let i = 0; i < anchorArray.length; i++){
  anchorArray[i].addEventListener('mouseover', (event) => {event.target.style.color = "red"});
  anchorArray[i].addEventListener('mouseleave', (event) => {event.target.style.color = "black"});
}

//Main Header
let header = document.querySelector('.logo-heading');
header.addEventListener('dblclick', (event)=>{
  event.target.style.fontSize = "5rem"
});

//Images
let image = document.getElementsByTagName('img');
let imgArr = Array.from(image);
imgArr.forEach(function(element){
  element.addEventListener('dragstart', (event)=>{
    event.target.style.border = "2px dashed gray"
  })
  element.addEventListener('dragend', (event)=>{
    event.target.style.border = "1px transparent"
  })
})

//Content Headers
let lesserHeaders = document.getElementsByTagName('h2');
let headersArray = Array.from(lesserHeaders);
headersArray.forEach(function(item){
  item.addEventListener('mousedown', (event)=>{
    event.target.style.background = "#ff9999"
  })
  item.addEventListener('mouseup', (event)=>{
    event.target.style.background = "transparent"
  })
})

//Paragraphs
let paragraphs = document.getElementsByTagName('p');
let paraOne = paragraphs[0];
let parArr = Array.from(paragraphs);
parArr.forEach(function(item){
  item.addEventListener('mousemove', (event)=>{
    event.target.style.border = "2px dashed #ff9999"
  })
  item.addEventListener('mouseleave', (event)=>{
    event.target.style.border = "0 transparent"
  })
})
