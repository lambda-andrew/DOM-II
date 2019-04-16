// Your code goes here

let homeN = document.querySelectorAll(".nav-link");
// homeN[1].addEventListener("click", event => {
//   event.preventDefault();
//   event.target.style.color = "red";
//   // alert("hello");
//   console.log("anything");
// });

for(let i = 0 ; i <=3 ;i++){
  homeN[i].addEventListener("click", event => {
    event.preventDefault();
    event.target.style.color = "red";
    // alert("hello");
    console.log("anything");
  });
}

for(let i = 0 ; i <=3 ;i++){
  homeN[i].addEventListener("mouseover", event => {
    event.preventDefault();
    event.target.style.color = "green";
    // alert("hello");
    console.log("anything");
  });
}

let but = document.querySelectorAll(".btn")
for(let i = 0 ; i <= 2 ; i++ ){
but[i].addEventListener("mouseover", item => {
  item.target.style.borderRadius = "2px";
  item.target.style.border = "2px dashed black";
  item.target.style.borderColor = "cyan";
  item.target.style.color = "#0080FF";
});
}
for(let i = 0 ; i <= 2 ; i++ ){
  but[i].addEventListener("mouseleave", item => {
    item.target.style.borderRadius = "";
    item.target.style.border = "";
    item.target.style.color = "";
  });
}

//////////////////////