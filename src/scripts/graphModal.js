window.closeModalAndGoBack = function(id) {
    const modal = document.getElementById(id);
    if (modal && modal instanceof HTMLDialogElement) {
        modal.close();
        history.go(-1); // Go back two pages in history
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const modalId = urlParams.get('openModal');

    if (modalId) {
        const modal = document.getElementById(modalId);
        if (modal instanceof HTMLDialogElement) {
            setTimeout(() => modal.showModal(), 0); // Add a small delay to ensure it renders
        }

        history.replaceState(null, '', window.location.pathname);
    }
});