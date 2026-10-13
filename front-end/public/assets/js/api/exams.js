export async function getExamsCount() {
    const response = await fetch(`/api/exam.php?action=gcount`);
    const jsonResp = await response.json();
    return jsonResp
} 

export async function getExams() {
    const response = await fetch(`/api/exam.php?action=gall`);
    const jsonResp = await response.json();
    return jsonResp;
} 

export async function addExams(data) {
    const formData = new FormData();
    formData.append('name', data.get("examName"))
    formData.append("exam_date", data.get("examDate"))
    formData.append("results", data.get("examResult") ?? "")
    formData.append("notes", data.get("notes") ?? "")

    const file = data.get("examFile");
    if (file instanceof File && file.size > 0) {
        formData.append("file", file);
    }
    const response = await fetch("/api/exam.php?action=new", {
        method: "POST",
        body: formData
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(
            result.error?.message ?? "Não foi possível cadastrar o exame."
        );
    }

    return result;
}
