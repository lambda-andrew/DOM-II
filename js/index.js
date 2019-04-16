// Your code goes here
let anchors = document.getElementsByTagName('a');
let anchorArray = Array.from(anchors);
for(let i = 0; i < anchorArray.length; i++){
anchorArray[i].addEventListener('mouseover', (event) => {event.target.style.color = "red"});
anchorArray[i].addEventListener('mouseleave', (event) => {event.target.style.color = "black"});
}
let header = document.querySelector('.logo-heading');
header.addEventListener('keydown', (event)=>{
  if(event.keyCode === 65){
    event.target.style.fontSize = "5rem";
  }
})
