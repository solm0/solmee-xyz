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

/* toggle */ 
const themeButton = document.getElementById("theme");
const htmlElement = document.documentElement;

document.addEventListener("DOMContentLoaded", () => {
    const isChecked = localStorage.getItem("themeToggle") === "true";
    themeButton.checked = isChecked;

    htmlElement.classList.toggle("dark");
});

themeButton.addEventListener("change", (event) => {
    const isChecked = event.target.checked;
    localStorage.setItem("themeToggle", isChecked);

    htmlElement.classList.toggle("dark");
})



const localgraphButton = document.getElementById("localgraph");
const localGraph = document.getElementsByClassName("local-graph-container")

document.addEventListener("DOMContentLoaded", () => {
    const isChecked = localStorage.getItem("localGraphToggle") === "true";
    localgraphButton.checked = isChecked;

    Array.from(localGraph).forEach((element) => {
        element.classList.toggle("hide", isChecked);
    });
});

localgraphButton.addEventListener("change", (event) => {
    const isChecked = event.target.checked;
    localStorage.setItem("localGraphToggle", isChecked);

    Array.from(localGraph).forEach((element) => {
        element.classList.toggle("hide", isChecked);
    });
});