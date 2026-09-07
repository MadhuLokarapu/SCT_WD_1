/* Scroll effect */

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {

    if (window.scrollY > 50) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});


/* Mobile menu */

const menuToggle =
    document.getElementById("menuToggle");

const navMenu =
    document.getElementById("navMenu");


menuToggle.addEventListener("click", function () {

    navMenu.classList.toggle("show");

});


/* Close mobile menu */

const navLinks =
    document.querySelectorAll(".nav-link");


navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        navMenu.classList.remove("show");

    });

});


/* Active navigation */

const sections =
    document.querySelectorAll("section");


window.addEventListener("scroll", function () {

    let currentSection = "";

    sections.forEach(function (section) {

        const sectionTop =
            section.offsetTop - 180;

        if (window.scrollY >= sectionTop) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function (link) {

        link.classList.remove("active");

        const linkSection =
            link.getAttribute("href");

        if (
            linkSection === "#" + currentSection
        ) {

            link.classList.add("active");

        }

    });

});