/* ==========================================
   NAVBAR
========================================== */

const navbar = document.querySelector(".navbar");
const menu = document.querySelector(".nav-menu");
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.querySelectorAll(".nav-menu a");

/* ===============================
   HAMBURGER MENU
=============================== */

menuToggle.addEventListener("click", () => {

    menu.classList.toggle("active");

    if (menu.classList.contains("active")) {

        menuToggle.innerHTML = "✕";

    } else {

        menuToggle.innerHTML = "☰";

    }

});

/* ===============================
   TUTUP MENU SAAT LINK DIKLIK
=============================== */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        menu.classList.remove("active");

        menuToggle.innerHTML = "☰";

    });

});

/* ===============================
   NAVBAR SAAT SCROLL
=============================== */

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        navbar.classList.add("scrolled");

    } else {

        navbar.classList.remove("scrolled");

    }

});

/* ===============================
   ACTIVE LINK
=============================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ===============================
   TUTUP MENU JIKA KLIK DI LUAR
=============================== */

document.addEventListener("click", (e) => {

    if (
        !menu.contains(e.target) &&
        !menuToggle.contains(e.target)
    ) {

        menu.classList.remove("active");
        menuToggle.innerHTML = "☰";

    }

});