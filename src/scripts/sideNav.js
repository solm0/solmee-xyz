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
const localGraphButton = document.getElementById("localGraphButton");
const localGraph = document.getElementsByClassName("local-graph-container");
const localGraphButtonImage = localGraphButton.querySelector("img");
const root = document.documentElement;

document.addEventListener("DOMContentLoaded", () => {
    const isHidden = localStorage.getItem("localGraphState") === "hidden";

    if (isHidden) {
        localGraphButton.value = "hide";
        Array.from(localGraph).forEach((element) => {
            element.classList.add("hide");
        });
        localGraphButtonImage.src = "/favicon.svg";
    } else {
        localGraphButton.value = "show";
        Array.from(localGraph).forEach((element) => {
            element.classList.remove("hide");
        });
        localGraphButtonImage.src = "/search.svg";
    }
});

localGraphButton.addEventListener("click", (event) => {
    const currentValue = event.target.value;

    if (currentValue === "show") {
        event.target.value = "hide";
        localStorage.setItem("localGraphState", "hidden");

        Array.from(localGraph).forEach((element) => {
            element.classList.add("hide");
        });

        localGraphButtonImage.src = "/favicon.svg";
    } else {
        event.target.value = "show";
        localStorage.setItem("localGraphState", "visible");

        Array.from(localGraph).forEach((element) => {
            element.classList.remove("hide");
        });

        localGraphButtonImage.src = "/search.svg";
    }
});

Array.from(localGraphButton).forEach((container) => {
    container.addEventListener('mouseenter', () => {
        Array.from(localGraph).forEach((element) => {
            element.style.backgroundColor = getComputedStyle(root).getPropertyValue('--gray-color-1');
        });
    });
    container.addEventListener('mouseout', () => {
        Array.from(localGraph).forEach((element) => {
            element.style.backgroundColor = 'transparent';
        });
    });
});