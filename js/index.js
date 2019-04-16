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




