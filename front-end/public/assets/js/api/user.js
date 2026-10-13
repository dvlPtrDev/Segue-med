export async function getUserData() {
    const response = await fetch("/api/patient.php");
    const jsonResp = await response.json();
    return jsonResp;
}
