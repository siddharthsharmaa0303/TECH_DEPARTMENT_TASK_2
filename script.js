const themeToggle = document.getElementById('theme-toggle');
const navBar = document.querySelector('.navbar');

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navBar.classList.add('shadow-sm');
    } else {
        navBar.classList.remove('shadow-sm');
    }
});