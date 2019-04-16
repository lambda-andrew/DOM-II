// Your code goes here

// Home Nav
const homeN =
  document.querySelector(".nav-link");
homeN.addEventListener("click", event => {
  event.target.style.color = "red";
  event.preventDefault();
});

// All Paragraphs
const p = document.querySelectorAll('p');
const pHover = event => {
  event.target.style.background = 'yellow';
}

p.forEach(item => {
  item.addEventListener('mouseover', pHover)
});