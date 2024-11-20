document.addEventListener("DOMContentLoaded", () => {
    const localGraphButton = document.getElementById("localGraphButton");
    const localGraph = document.querySelectorAll(".local-graph-container");
    const svgIcon = document.getElementById("graphIcon");
    const root = document.documentElement;

    if (localGraphButton) {
        // Function to update the SVG based on the button's value
        const renderSvg = () => {
            const isShown = localGraphButton.value === "show";
            svgIcon.innerHTML = isShown
                ? `
                    <path class="light" d="M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.4,3-3S9.6,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"/>
                    <path class="light" d="M13.6,5.9L13.6,5.9c-0.2-0.2-0.5-0.4-0.7-0.6l1.4-2.7l-0.9-0.5L12,4.7c-1.1-0.6-2.3-1-3.5-1.1V0.8h-1v2.8
C6.3,3.7,5.1,4,4,4.7L2.6,2.1L1.7,2.6l1.4,2.7C2.9,5.4,2.7,5.6,2.4,5.9L0.7,7.7v0.7l1.8,1.8C4,11.7,6,12.5,8,12.5s4-0.8,5.6-2.3
	l1.8-1.8V7.7L13.6,5.9z M12.9,9.4c-2.7,2.7-7,2.7-9.7,0L1.7,8l1.4-1.4c2.7-2.7,7-2.7,9.7,0L14.3,8L12.9,9.4z""/>
                    <path class="dark" d="M8,5C6.3,5,5,6.3,5,8s1.3,3,3,3s3-1.4,3-3S9.6,5,8,5z M8,10c-1.1,0-2-0.9-2-2s0.9-2,2-2s2,0.9,2,2S9.1,10,8,10z"/>
                    <path class="dark" d="M13.6,5.9L13.6,5.9c-0.2-0.2-0.5-0.4-0.7-0.6l1.4-2.7l-0.9-0.5L12,4.7c-1.1-0.6-2.3-1-3.5-1.1V0.8h-1v2.8
	C6.3,3.7,5.1,4,4,4.7L2.6,2.1L1.7,2.6l1.4,2.7C2.9,5.4,2.7,5.6,2.4,5.9L0.7,7.7v0.7l1.8,1.8C4,11.7,6,12.5,8,12.5s4-0.8,5.6-2.3
	l1.8-1.8V7.7L13.6,5.9z M12.9,9.4c-2.7,2.7-7,2.7-9.7,0L1.7,8l1.4-1.4c2.7-2.7,7-2.7,9.7,0L14.3,8L12.9,9.4z""/>
                `
                : `
                    <path class="light" d="M13.5,10.2l1.8-1.8l-0.7-0.7l-1.8,1.8c-2.7,2.7-7,2.7-9.6,0L1.4,7.7L0.7,8.4l1.8,1.8c0.2,0.2,0.5,0.4,0.7,0.6l-1.5,2.7
	L2.6,14L4,11.4c1.1,0.6,2.3,1,3.5,1.1v2.9h1v-2.9c1.2-0.1,2.4-0.4,3.5-1.1l1.4,2.6l0.9-0.5l-1.5-2.7C13.1,10.6,13.3,10.4,13.5,10.2z
	"/>
                    <path class="dark" d="M13.5,10.2l1.8-1.8l-0.7-0.7l-1.8,1.8c-2.7,2.7-7,2.7-9.6,0L1.4,7.7L0.7,8.4l1.8,1.8c0.2,0.2,0.5,0.4,0.7,0.6l-1.5,2.7
	L2.6,14L4,11.4c1.1,0.6,2.3,1,3.5,1.1v2.9h1v-2.9c1.2-0.1,2.4-0.4,3.5-1.1l1.4,2.6l0.9-0.5l-1.5-2.7C13.1,10.6,13.3,10.4,13.5,10.2z
	"/>
                `;
        };

        // Initialize button and graph state from localStorage
        const isHidden = localStorage.getItem("localGraphState") === "hidden";
        localGraphButton.value = isHidden ? "hide" : "show";
        renderSvg(); // Render the initial SVG based on the state

        // button hover -> highlight the localgraph area
        localGraphButton.addEventListener("mouseenter", () => {
            localGraph.forEach((element) => {
                element.style.background = `${getComputedStyle(root).getPropertyValue("--gray-color-1")}`;
            });
        });
        localGraphButton.addEventListener("mouseout", () => {
            localGraph.forEach((element) => {
                element.style.background = 'transparent';
            });
        });

        // Hide or show the local graph based on the button's value
        localGraph.forEach((element) => {
            element.classList.toggle("hide", isHidden);
        });

        localGraphButton.addEventListener("click", () => {
            const isCurrentlyHidden = localGraphButton.value === "show";

            localGraphButton.value = isCurrentlyHidden ? "hide" : "show";

            localStorage.setItem("localGraphState", isCurrentlyHidden ? "hidden" : "visible");

            localGraph.forEach((element) => {
                element.classList.toggle("hide", isCurrentlyHidden);
            });

            renderSvg();
        });
    }
});