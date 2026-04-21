function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

function bookNow() {
    alert("Table booking feature coming soon!");
}

/* Navbar scroll effect */
window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (window.scrollY > 50) {
        header.style.background = "#000";
    } else {
        header.style.background = "rgba(0,0,0,0.8)";
    }
});
