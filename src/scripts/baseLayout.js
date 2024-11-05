/* scroll listener for header nav */
const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;
    if (currentScroll <= 0) {
        body.classList.remove(scrollUp);
        return;
    }
    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
});

/* nav current location highlighting */
document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        if (link.getAttribute("href") === window.location.pathname) {
            link.classList.add("current");
        }
    });
});