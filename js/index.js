const navItems = document.querySelectorAll('.nav-link');

navItems[0].addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = '#A2D1DF';
    event.target.style.color = 'yellow';
    event.target.style.padding = '1px 7.5px 1px 7.5px';
    event.target.style.borderRadius = '5px';
});
navItems[0].addEventListener('mouseout', (event) => {
    event.target.style.backgroundColor = 'white';
    event.target.style.color = 'black';
    event.target.style.padding = '0px';
    event.target.style.borderRadius = '0px';
});

const logo = document.querySelector('.logo-heading');

logo.addEventListener('mouseover', (event) => {
    event.target.style.transition = 'transform .2s';
    event.target.style.transform = 'scale(1.5)';
});

logo.addEventListener('mouseout', (event) => {
    event.target.style.transition = 'transform .3s';
    event.target.style.transform = 'scale(1.0)';
});

const images = document.getElementsByTagName('img');

images[1].addEventListener('mouseover', (event) => {
    event.target.style.filter = 'brightness(150%)';
});

images[1].addEventListener('mouseout', (event) => {
    event.target.style.filter = 'brightness(100%)';
});

images[2].addEventListener('mouseover', (event) => {
    event.target.style.filter = 'brightness(150%)';
});

images[2].addEventListener('mouseout', (event) => {
    event.target.style.filter = 'brightness(100%)';
});