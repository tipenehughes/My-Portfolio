// Scroll bar
const navBar = document.getElementById("nav");

function scrollFunction() {
    if (
        document.body.scrollTop > 80 ||
        document.documentElement.scrollTop > 80
    ) {
        navBar.classList.add("on-scroll");
    } else {
        navBar.classList.remove("on-scroll");
    }
}

window.onscroll = function () {
    scrollFunction();
};

// Hamburger menu

const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.querySelector(".mobile-nav-overlay-hidden");
const menuOptions = document.querySelectorAll(".mobile-menu-item");

mobileMenu.addEventListener("click", function () {
    menuOverlay.classList.toggle("is-visible");
});

for (let i = 0; i < menuOptions.length; i++) {
    menuOptions[i].addEventListener("click", function () {
        menuOverlay.classList.remove("is-visible");
    });
}
