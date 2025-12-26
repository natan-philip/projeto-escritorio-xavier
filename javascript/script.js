const btnMobile = document.querySelector('.btn-mobile');
const navLinks = document.getElementById('nav-links');
const icon = document.querySelector('.btn-mobile i');

    btnMobile.addEventListener('click', () => {
        navLinks.classList.toggle('open');
        icon.classList.toggle('fa-times');
        icon.classList.toggle('fa-bars');

})