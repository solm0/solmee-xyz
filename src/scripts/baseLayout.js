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

/* external internal link */

let mouseOutTimeout;

var links = document.links;

for (var i = 0; i < links.length; i++) {
    if (links[i].hostname !== window.location.hostname) {
        links[i].classList.add("external-link");
        links[i].textContent += ' ↗';

        links[i].addEventListener('click', function(event) {
            event.preventDefault();
            window.open(this.href, 'popupWindow', 'width=800,height=600,scrollbars=yes,resizable=yes');
        });
    } else {
        // Internal link hover -> node
        links[i].addEventListener('mouseover', (event) => {
            clearTimeout(mouseOutTimeout); // Cancel any pending mouseout
            const link = event.currentTarget; // Use currentTarget to ensure it's the <a> element
                // @ts-ignore
            const url = new URL(link.getAttribute('href'), window.location.origin);
            const nodeId = url.pathname.split('/').pop();

            console.log("Hovered link URL:", url.href);
            console.log("Extracted node ID:", nodeId);

            if (window.setHoveredNode) {
                window.setHoveredNode(nodeId);
            }
        });

        links[i].addEventListener('mouseout', () => {
            mouseOutTimeout = setTimeout(() => {
                if (window.setHoveredNode) {
                    window.setHoveredNode(null);
                }
            }, 200); // Adjust delay as needed
        });
    }
}

/* Toggle Local Graph */
document.addEventListener("DOMContentLoaded", () => {
    const localGraphButton = document.getElementById("localGraphButton");
    const localGraph = document.querySelectorAll(".local-graph-container");
    const root = document.documentElement;

    // Retrieve state from localStorage
    const isHidden = localStorage.getItem("localGraphState") === "hidden";

    // Set the button value and update the visibility of localGraph
    localGraphButton.value = isHidden ? "hide" : "show";
    localGraph.forEach((element) => {
        element.classList.toggle("hide", isHidden);
    });

    // Event listener for button click
    localGraphButton.addEventListener("click", () => {
        const isHidden = localGraphButton.value === "show";

        // Update button value and localStorage
        localGraphButton.value = isHidden ? "hide" : "show";
        localStorage.setItem("localGraphState", isHidden ? "hidden" : "visible");

        // Toggle visibility of the graph containers
        localGraph.forEach((element) => {
            element.classList.toggle("hide", isHidden);
        });
    });

    // Optional: Add hover effect for the graph container
    localGraphButton.addEventListener("mouseenter", () => {
        localGraph.forEach((element) => {
            element.style.border = `1px solid ${getComputedStyle(root).getPropertyValue("--gray-color-2")}`;
        });
    });

    localGraphButton.addEventListener("mouseout", () => {
        localGraph.forEach((element) => {
            element.style.border = 'none';
        });
    });
});