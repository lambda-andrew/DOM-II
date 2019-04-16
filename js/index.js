// Your code goes here
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

//Headers
let lesserHeaders = document.getElementsByTagName('h2');
let headersArray = Array.from(lesserHeaders);
