import { addExams } from "../../api/exams.js";

const form = document.querySelector("#add-exam-form");

form.addEventListener("submit", create);

async function create(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    console.log(data);

    const result = await addExams(data);

    if (!result.success) {
        show_error(result.error.message)
        return;
    }
}