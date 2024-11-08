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

/* link popup */
document.querySelectorAll('a:not(.nav-links a):not(.tag-button a):not(.blog-card):not(.blog-post):not(.sequenceNav-container a):not(.sequenceNav-button-container a):not(footer a)').forEach((link) => {
    let previewIframe;
    let hoverTimeout;
    let hideTimeout;
    let isMouseInside = false;

    const showPreview = (e) => {
        if (!previewIframe) {
            previewIframe = document.createElement('iframe');
            previewIframe.src = link.href;
            previewIframe.classList.add('link-popup');

            if ((window.innerHeight - e.pageY) < 400) {
                {console.log(window.innerHeight, e.pageY, window.innerHeight - e.pageY, 'up')}
                previewIframe.style.bottom = `${window.innerHeight - e.pageY + 15}px`;
                previewIframe.style.top = '';
            } else {
                {console.log(window.innerHeight, e.pageY, window.innerHeight - e.pageY, 'down')}
                previewIframe.style.top = `${e.pageY + 10}px`;
                previewIframe.style.bottom = ''; // Reset bottom
            }

            previewIframe.style.left = `${e.pageX + 10}px`;
            document.body.appendChild(previewIframe);

            previewIframe.addEventListener('mouseenter', () => {
                isMouseInside = true;
                clearTimeout(hideTimeout);
            });
            previewIframe.addEventListener('mouseleave', hidePreview);
        }
    };

    const hidePreview = () => {
        isMouseInside = false;
        hideTimeout = setTimeout(() => {
            if (!isMouseInside && previewIframe) {
                previewIframe.remove();
                previewIframe = null;
            }
        }, 100); // Delay for mouse transition
    };

    link.addEventListener('mouseenter', (e) => {
        isMouseInside = true;
        hoverTimeout = setTimeout(() => {
            if (isMouseInside) { // Only show if still hovering after 500 ms
                showPreview(e);
            }
        }, 500);
    });

    // Clear timeout on mouseleave to prevent delayed iframe opening
    link.addEventListener('mouseleave', () => {
        isMouseInside = false;
        clearTimeout(hoverTimeout); // Cancel the opening if mouse leaves early
        hidePreview();
    });
});