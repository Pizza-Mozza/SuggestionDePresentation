
// =========================
// FORMULAIRE
// =========================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Merci ! Ta demande a bien été prise en compte.");

    form.reset();

});


// =========================
// ANIMATIONS AU SCROLL
// =========================

const elements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("visible");

            observer.unobserve(entry.target);

        }

    });

}, {
    threshold: 0.15
});

elements.forEach(element => {
    observer.observe(element);
});


// =========================
// FERMETURE DU MENU MOBILE
// =========================

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

const menu = document.getElementById("menu");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (menu.classList.contains("show")) {

            bootstrap.Collapse.getOrCreateInstance(menu).hide();

        }

    });

});
