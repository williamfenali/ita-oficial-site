let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open')
}

const sr = ScrollReveal({
    distance: '65px',
    duration: 2600,
    delay: 450,
    reset: true
});

sr.reveal('.content-text', {delay: 200, origin: 'top'});
sr.reveal('.content-img', {delay: 450, origin: 'top'});
sr.reveal('.logo', {delay: 550, origin: 'left'});
sr.reveal('.scroll-down', {delay: 550, origin: 'right'});