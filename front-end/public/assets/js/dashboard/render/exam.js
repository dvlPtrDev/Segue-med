import { detailsElement, renderEmptyMessage } from "../../shared/dom.js";
import { formatDate } from "../shared/formatters.js";

export function renderExamCount(count) {
    const countFields = document.querySelectorAll(".exam-count");

    countFields.forEach(field => {
        field.innerHTML = count;
    });
}

function createExamElement(exam) {
    const record = document.createElement("div");
    record.classList.add("detail-modal");
    record.classList.add("record");

    const icon = document.createElement("span");
    icon.className = "record-icon";
    icon.textContent = "▤";
    icon.setAttribute("aria-hidden", "true");

    const info = document.createElement("div");
    info.className = "record-info";

    const title = document.createElement("h3");
    title.textContent = exam.name;

    const description = document.createElement("p");
    description.textContent =
        `${formatDate(exam.exam_date)} • Resultado registrado: ${exam.results ?? ""}`.trim();

    const badge = document.createElement("span");
    badge.className = "badge neutral";
    badge.textContent = exam.attachment ?? "Sem documento anexado";

    info.append(title, description, badge);

    record.append(icon, info);

    record.append(
        detailsElement([
            {
                label: "Data",
                value: formatDate(exam.exam_date)
            },
            {
                label: "Nome",
                value: exam.name
            },
            {
                label: "Resultado",
                value: exam.results ?? "Ainda não disponíveis"
            },
            {
                label: "Anexo",
                value: exam.result_image_url ?? "Sem anexos"
            },
            {
                label: "Notas",
                value: exam.notes ?? "Sem notas"
            },
        ])
    );

    return record;
}
export function renderExamsPreview(list) {
    const examContainer = document.getElementById("exam-list");

    if (!examContainer) return;

    if (list.length === 0) {
        renderEmptyMessage(true);
        return;
    }

    const examElements = list
        .slice(0, 5)
        .map(createExamElement);

    examContainer.replaceChildren(...examElements);
}
export function renderAllExams(list) {
    const container = document.getElementById("view-all-modal-content");

    if (!container) return;

    if (list.length === 0) {
        container.textContent = "Nenhum exame cadastrado";
        return;
    }

    const examElements = list.map(createExamElement);

    container.replaceChildren(...examElements);
}