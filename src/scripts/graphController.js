document.addEventListener("DOMContentLoaded", () => {
    const localGraphButton = document.getElementById("localGraphButton");
    const localGraph = document.querySelectorAll(".local-graph-container");
    const svgIcon = document.getElementById("graphIcon");

    if (localGraphButton) {
        // Function to update the SVG based on the button's value
        const renderSvg = () => {
            const isShown = localGraphButton.value === "show";
            svgIcon.innerHTML = isShown
                ? `
                    <path class="light" d="m8,12.47c-2,0-4-.76-5.52-2.28l-1.83-1.83.71-.71,1.83,1.83c2.65,2.65,6.97,2.65,9.63,0l1.83-1.83.71.71-1.83,1.83c-1.52,1.52-3.52,2.28-5.52,2.28Z"/>
                    <path class="dark" d="m8,12.47c-2,0-4-.76-5.52-2.28l-1.83-1.83.71-.71,1.83,1.83c2.65,2.65,6.97,2.65,9.63,0l1.83-1.83.71.71-1.83,1.83c-1.52,1.52-3.52,2.28-5.52,2.28Z"/>
                `
                : `
                    <path class="light" d="m13.57,5.86c-3.07-3.07-8.07-3.07-11.13,0l-1.79,1.79v.71l1.79,1.79c1.53,1.54,3.55,2.3,5.57,2.3s4.03-.77,5.57-2.3l1.79-1.79v-.71l-1.79-1.79Zm-.71,3.57c-2.68,2.68-7.04,2.68-9.72,0l-1.43-1.43,1.43-1.43c2.68-2.68,7.04-2.68,9.72,0l1.43,1.43-1.43,1.43Z"/>
                    <path class="light" d="m8,5c-1.65,0-3,1.35-3,3s1.35,3,3,3,3-1.35,3-3-1.35-3-3-3Zm0,5c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Z"/>
                    <path class="dark" d="m13.57,5.86c-3.07-3.07-8.07-3.07-11.13,0l-1.79,1.79v.71l1.79,1.79c1.53,1.54,3.55,2.3,5.57,2.3s4.03-.77,5.57-2.3l1.79-1.79v-.71l-1.79-1.79Zm-.71,3.57c-2.68,2.68-7.04,2.68-9.72,0l-1.43-1.43,1.43-1.43c2.68-2.68,7.04,2.68,9.72,0l1.43,1.43-1.43,1.43Z"/>
                    <path class="dark" d="m8,5c-1.65,0-3,1.35-3,3s1.35,3,3,3,3-1.35,3-3-1.35-3-3-3Zm0,5c-1.1,0-2-.9-2-2s.9-2,2-2,2,.9,2,2-.9,2-2,2Z"/>
                `;
        };

        // Initialize button and graph state from localStorage
        const isHidden = localStorage.getItem("localGraphState") === "hidden";
        localGraphButton.value = isHidden ? "hide" : "show";
        renderSvg(); // Render the initial SVG based on the state

        // Apply the visibility state to graph containers
        localGraph.forEach((element) => {
            element.classList.toggle("hide", isHidden);
        });

        // Add click event to toggle state
        localGraphButton.addEventListener("click", () => {
            const isCurrentlyHidden = localGraphButton.value === "show";

            // Update the button's value
            localGraphButton.value = isCurrentlyHidden ? "hide" : "show";

            // Save state to localStorage
            localStorage.setItem("localGraphState", isCurrentlyHidden ? "hidden" : "visible");

            // Toggle visibility of graph containers
            localGraph.forEach((element) => {
                element.classList.toggle("hide", isCurrentlyHidden);
            });

            // Immediately update the icon
            renderSvg();
        });
    }
});