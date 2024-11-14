document.addEventListener("DOMContentLoaded", () => {

    const localGraphButton = document.getElementById("localGraphButton");
    const localGraph = document.querySelectorAll(".local-graph-container");
    const root = document.documentElement;

    const isHidden = localStorage.getItem("localGraphState") === "hidden";

    localGraphButton.value = isHidden ? "hide" : "show";
    localGraph.forEach((element) => {
        element.classList.toggle("hide", isHidden);
    });

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
});