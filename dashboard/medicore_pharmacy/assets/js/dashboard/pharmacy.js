const sidebar = document.querySelector("#sidebar");
const menuToggle = document.querySelector("#menu-toggle");
const menuClose = document.querySelector("#menu-close");
const menuShade = document.querySelector("#menu-shade");

function setMenu(open) {
    if (!sidebar || !menuToggle || !menuShade) {
        return;
    }

    sidebar.classList.toggle("is-open", open);
    menuShade.hidden = !open;
    menuToggle.setAttribute("aria-expanded", String(open));
}

menuToggle?.addEventListener("click", () => {
    setMenu(true);
});

menuClose?.addEventListener("click", () => {
    setMenu(false);
    menuToggle?.focus();
});

menuShade?.addEventListener("click", () => {
    setMenu(false);
    menuToggle?.focus();
});

document.addEventListener("keydown", (event) => {
    if (
        event.key === "Escape" &&
        sidebar?.classList.contains("is-open")
    ) {
        setMenu(false);
        menuToggle?.focus();
    }
});

sidebar?.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", () => {
        if (window.innerWidth < 1024) {
            setMenu(false);
        }
    });
});

const patientSearch = document.querySelector("#patient-search");
const patientRows = document.querySelectorAll(
    "#patient-table-body tr"
);

patientSearch?.addEventListener("input", (event) => {
    const term = event.target.value
        .trim()
        .toLocaleLowerCase("pt-BR");

    patientRows.forEach((row) => {
        const text = row.textContent
            .toLocaleLowerCase("pt-BR");

        row.hidden = !text.includes(term);
    });
});
