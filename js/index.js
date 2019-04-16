// Your code goes here

// Home Nav
// const homeN =
//   document.querySelector(".nav-link");
// homeN.addEventListener("click", event => {
//   event.target.style.color = "red";
//   event.preventDefault();
// });

// All Paragraphs
// This will also work for the nav links, if used to replace E.V.'s work
const p = document.querySelectorAll('p');
const pHover = event => {
  event.target.style.background = 'yellow';
}
const pNoHover = event => {
  event.target.style.background = '';
}

p.forEach(item => {
  item.addEventListener('mouseover', pHover)
});
p.forEach(item => {
  item.addEventListener('mouseleave', pNoHover)
});

// All Nav Links - E.V.
let homeN = document.querySelectorAll(".nav-link");

for (let i = 0; i <= 3; i++) {
  homeN[i].addEventListener("click", event => {
    event.preventDefault();
    event.target.style.color = "red";
    // alert("hello");
    console.log("anything");
  });
}

for (let i = 0; i <= 3; i++) {
  homeN[i].addEventListener("mouseover", event => {
    event.preventDefault();
    event.target.style.color = "green";
    // alert("hello");
    console.log("anything");
  });
}

// Sign Up Buttons - E.V.
let but = document.querySelectorAll(".btn")
for (let i = 0; i <= 2; i++) {
  but[i].addEventListener("mouseover", item => {
    item.target.style.borderRadius = "2px";
    item.target.style.border = "2px dashed black";
    item.target.style.borderColor = "cyan";
    item.target.style.color = "#0080FF";
  });
}
for (let i = 0; i <= 2; i++) {
  but[i].addEventListener("mouseleave", item => {
    item.target.style.borderRadius = "";
    item.target.style.border = "";
    item.target.style.color = "";
  });
}