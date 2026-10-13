export function show_error(message) {
    const alert = document.querySelector("#error-alert");
    alert.innerHTML = `
    <i class="fa-solid fa-circle-xmark"></i>
    ${message}
    `;
    alert.classList.add("show");
    setTimeout(() => {
        alert.classList.remove("show");
    }, 4000);
}
export function show_success(message) {
    const alert = document.querySelector("#success-alert");
    console.log(alert);
    alert.innerHTML = `
        <i class="fa-solid fa-check"></i>
        ${message}
    `;
    alert.classList.add("show");

    setTimeout(() => {
        alert.classList.remove("show");
    }, 4000);
}

export function capitalize(value) {
    return value
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
