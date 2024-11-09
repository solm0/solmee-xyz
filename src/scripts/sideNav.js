/* search */
import { PagefindUI } from "@pagefind/default-ui";
                
window.addEventListener("DOMContentLoaded", () => {
    new PagefindUI({
        element: "#search",
        showSubResults: true,
        autofocus: true,
    });
    const el = document.querySelector(".pagefind-ui");
    const input = el?.querySelector<HTMLInputElement>(`input[type="text"]`);
    const clearButton = el?.querySelector(".pagefind-ui__search-clear");

    // Check if the current URL has any query params
    const url = new URL(window.location.href);
    const params = new URLSearchParams(url.search);
    const query = params.get("q");

    // If query exists on page load
    if (query && input) {
        input.value = query;
        input.dispatchEvent(new Event("input", { bubbles: true }));
    }
    document.addEventListener("DOMContentLoaded", () => {
        const input = document.querySelector("input[type='text']");
        console.log(input); // Check if the element is found
        input?.addEventListener("input", (e) => {
            const inputElement = e.target;
            const url = new URL(window.location.href);
            const params = new URLSearchParams(url.search);
            params.set("q", inputElement.value);
            window.history.replaceState({}, "", `${url.pathname}?${params}`);
        });
    });
    clearButton?.addEventListener("click", () => {
        const url = new URL(window.location.href);
        const params = new URLSearchParams(url.search);
        params.delete("q");
        window.history.replaceState({}, "", `${url.pathname}`);
    });
});

/* local graph toggle */
const themeToggle = document.getElementById("localgraph");
const localGraph = document.getElementsByClassName("local-graph-container")

// Load the saved toggle state on page load
document.addEventListener("DOMContentLoaded", () => {
    const isChecked = localStorage.getItem("localGraphToggle") === "true";
    themeToggle.checked = isChecked; // Set the checkbox state based on localStorage

    // Show or hide the local graph container based on the saved state
    Array.from(localGraph).forEach((element) => {
        element.classList.toggle("hide", isChecked);
    });
});


// Add an event listener to save the toggle state on change
themeToggle.addEventListener("change", (event) => {
    const isChecked = event.target.checked;
    localStorage.setItem("localGraphToggle", isChecked); // Save the state to localStorage

    // Toggle the visibility of the local graph container
    Array.from(localGraph).forEach((element) => {
        element.classList.toggle("hide", isChecked);
    });
});