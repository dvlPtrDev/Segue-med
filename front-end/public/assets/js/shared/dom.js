export function detailsElement(fields, label = "Ver detalhes") {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "text-button";
    button.textContent = label;
    button.setAttribute("aria-haspopup", "dialog");

    button.addEventListener("click", () => {
        const modal = document.createElement("dialog");
        modal.id = "detail-modal";
        modal.setAttribute("aria-label", "Detalhes do exame");

        const header = document.createElement("header");
        header.className = "modal-heading";

        const title = document.createElement("h2");
        title.textContent = "Detalhes do exame";

        const close = document.createElement("button");
        close.type = "button";
        close.className = "close";
        close.textContent = "×";
        close.setAttribute("aria-label", "Fechar");
        close.addEventListener("click", () => modal.close());

        const list = document.createElement("dl");
        list.className = "detail-list";

        fields.forEach(({ label, value }) => {
            const row = document.createElement("div");
            const term = document.createElement("dt");
            const description = document.createElement("dd");

            term.textContent = label;
            description.textContent = value ?? "Não informado";

            row.append(term, description);
            list.append(row);
        });

        header.append(title, close);
        modal.append(header, list);

        modal.addEventListener("close", () => modal.remove(), {
            once: true
        });

        document.body.append(modal);
        modal.showModal();
    });

    return button;
}

export function renderEmptyMessage(show) {
    const emptyMessage = document.getElementById("empty");

    if (emptyMessage) {
        emptyMessage.style.display = show ? "block" : "none";
    }
}