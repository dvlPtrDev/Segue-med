import { capitalize } from "../../shared/ui.js";

export function renderName(name) {
    const nameFields = document.querySelectorAll(".name");
    nameFields.forEach(field => {
        field.innerHTML = capitalize(name);
    });
}