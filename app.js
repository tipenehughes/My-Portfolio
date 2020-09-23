// Nav bar grow/collapse on scroll
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

// Navbar scrolling links

const aboutNav = document.getElementById("aboutNav");
const portfolioNav = document.getElementById("portfolioNav");
const contactNav = document.getElementById("contactNav");

aboutNav.addEventListener("click", function (e) {
    e.preventDefault();
    about.scrollIntoView({ behavior: "smooth", block: "start" });
});

portfolioNav.addEventListener("click", function (e) {
    e.preventDefault();
    portfolio.scrollIntoView({ behavior: "smooth", block: "start" });
});

contactNav.addEventListener("click", function (e) {
    e.preventDefault();
    contact.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Home CTA button scrollFunction

const homeCTA = document.getElementById("homeCTA");

homeCTA.addEventListener("click", (e) => {
    e.preventDefault();
    portfolio.scrollIntoView({ behavior: "smooth", block: "start" });
});

// Hamburger menu

const mobileMenu = document.getElementById("mobileMenu");
const menuOverlay = document.querySelector(".mobile-nav-overlay-hidden");
const menuOptions = document.querySelectorAll(".mobile-menu-item");
const noscroll = document.querySelector(".noscroll");
const body = document.getElementById("body");

mobileMenu.addEventListener("click", function (e) {
    menuOverlay.classList.toggle("is-visible");
    body.classList.toggle("noscroll");
});

for (let i = 0; i < menuOptions.length; i++) {
    menuOptions[i].addEventListener("click", function () {
        menuOverlay.classList.remove("is-visible");
        if (body.classList.contains("noscroll")) {
            body.classList.remove("noscroll");
        }
    });
}

// Hamburger menu scrollFunction

const about = document.getElementById("about");
const portfolio = document.getElementById("portfolio");
const contact = document.getElementById("contact");

for (let i = 0; i < menuOptions.length; i++) {
    menuOptions[i].addEventListener("click", function (e) {
        e.preventDefault();
        if (menuOptions[i] == menuOptions[0]) {
            about.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (menuOptions[i] == menuOptions[1]) {
            portfolio.scrollIntoView({ behavior: "smooth", block: "start" });
        } else if (menuOptions[i] == menuOptions[2]) {
            contact.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
}
