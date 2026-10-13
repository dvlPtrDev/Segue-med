import { getExams, getExamsCount } from "../api/exams.js";
import { getUserData } from "../api/user.js";
import { show_error } from "../shared/ui.js";
import { renderAllExams, renderExamCount, renderExamsPreview } from "./render/exam.js";
import { renderName } from "./render/user.js";

document.addEventListener("DOMContentLoaded", async () => {
    const ERR_MSG = "Não foi possível renderizar os dados do usuário";

    const userData = await getUserData();
    if (!userData.success) {
        show_error(ERR_MSG);
        return;
    }

    renderName(userData.data.name);

    const examsCount = await getExamsCount();
    if (!examsCount.success) {
        show_error(ERR_MSG);
        return;
    }

    renderExamCount(examsCount.data);

    const exams = await getExams();
    if (!exams.success) {
        show_error(ERR_MSG);
        return;
    }

    renderExamsPreview(exams.data);

    const expandButton = document.getElementById("expand");
    const viewAllModal = document.getElementById("view-all-modal");

    expandButton?.addEventListener("click", () => {
        renderAllExams(exams.data);
        viewAllModal.showModal();
    });
});