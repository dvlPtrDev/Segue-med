import { renderDetails } from "./formatters.js";
import "../modals/add-exam.js";

const modalConfig = [
    {
        buttonId: "add-prescription",
        modalId: "add-prescription-modal",
    },
    {
        buttonId: "add-exam",
        modalId: "add-exam-modal",
    },
    {
        buttonId: "add-medication",
        modalId: "add-medication-modal",
    },
    {
        buttonId: "expand",
        modalId: "view-all-modal"
    }
];

modalConfig.forEach(({ buttonId, modalId }) => {
    const openButton = document.getElementById(buttonId);
    const modal = document.getElementById(modalId);

    if (!openButton || !modal) return;

    openButton.addEventListener("click", () => {
        if (modal.open) return;

        modal.showModal();
        document.body.classList.add("registration-modal-open");
        modal.querySelector("input")?.focus();
    });

    modal.querySelectorAll("[data-close-registration]").forEach((button) => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            modal.close();
        });
    });

    // Fechar ao clicar fora do modal.
    modal.addEventListener("click", (event) => {
        if (event.target !== modal) return;

        const bounds = modal.getBoundingClientRect();
        const isOutside =
            event.clientX < bounds.left ||
            event.clientX > bounds.right ||
            event.clientY < bounds.top ||
            event.clientY > bounds.bottom;

        if (isOutside) modal.close();
    });

    // Também executa quando Escape fecha o dialog.
    modal.addEventListener("close", () => {
        if (!document.querySelector(".registration-modal[open]")) {
            document.body.classList.remove("registration-modal-open");
        }

        openButton.focus();
    });
});

// Modal de detalhes.
const detailModal = document.getElementById("detail-modal");
const detailTitle = document.getElementById("modal-title");
const detailContent = document.getElementById("modal-content");
const detailClose = document.getElementById("modal-close");

let opener = null;

export function openModal(title, entries) {
    if (!detailModal || !detailTitle || !detailContent) return;
    if (detailModal.open) return;

    opener = document.activeElement;
    detailTitle.textContent = title;

    renderDetails(detailContent, entries);
    detailModal.showModal();
    detailClose?.focus();
}

detailClose?.addEventListener("click", (event) => {
    event.preventDefault();
    detailModal?.close();
});

detailModal?.addEventListener("close", () => {
    if (opener instanceof HTMLElement && opener.isConnected) {
        opener.focus();
    }
});