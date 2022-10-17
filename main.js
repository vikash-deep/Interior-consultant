let navToggler = document.querySelector('#navbar-toggler');
let navLinkContainer = document.querySelector('#nav-link-container')
navToggler.addEventListener('click', function () {
    navLinkContainer.classList.toggle('showNavs');
})