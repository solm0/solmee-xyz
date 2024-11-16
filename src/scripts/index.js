document.addEventListener('DOMContentLoaded', () => {
    // Check if URL has the "openModal" parameter
    const urlParams = new URLSearchParams(window.location.search);
    const modalId = urlParams.get('openModal');

    if (modalId) {
        // Open the modal if it exists on the page and cast as HTMLDialogElement
        const modal = document.getElementById(modalId);
        if (modal instanceof HTMLDialogElement) {
            modal.showModal();
        }

        // Optionally, remove the query parameter from the URL
        history.replaceState(null, '', window.location.pathname);
    }
});