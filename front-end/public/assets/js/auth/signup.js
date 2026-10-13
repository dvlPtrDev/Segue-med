import { signupRequest } from "../api/auth.js";
import { show_error, show_success } from "../shared/ui.js";

const form = document.querySelector("#signup-form");
const phone = document.querySelector("#phone");
const cpf = document.querySelector("#cpf");
const terms = document.querySelector("#terms");

form?.addEventListener("submit", signUp);

phone.addEventListener("input", telMask);
cpf.addEventListener("input", cpfMask);
terms.addEventListener("change", is_term_checked);

function is_term_checked() {
    const btn = document.querySelector("#create-btn");
    btn.disabled = !terms.checked;
}

function telMask() {
    let value = phone.value.replace(/\D\g/, "");
    if (value.length > 2) {
        value = value.replace(/^(\d{2})(\d)/, "$1 $2");
    }
    if (value.length > 8) {
        value = value.replace(/^(\d{2}) (\d{5})(\d)/, "$1 $2-$3")
    }
    phone.value = value;
}

function cpfMask() {
    let value = cpf.value.replace(/\D\g/, "");
    if (value.length > 3) {
        value = value.replace(/^(\d{3})(\d)/, "$1.$2");
    }
    if (value.length > 6) {
        value = value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3")
    }
    if (value.length > 9) {
        value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
    }
    
    cpf.value = value;
}

async function signUp(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const values = {
        name: data.get("name")?.trim(),
        cpf: cpf.value,
        birth_date: data.get("birth_date"),
        phone: phone.value.replace(/\D/g, "") || undefined,
        email: data.get("email")?.trim(),
        password: data.get("password"),
    }
    
    if (!validate_values(values)) return;
    
    const result = await signupRequest(values);
    if (!result.success) {
        show_error(result.error.message);
        return;
    }
    
    show_success("Sua conta foi criada com sucesso, estamos te redirecionando ao login!");

    setTimeout(() => {
        window.location.href = "login.php"
    }, 2000)
}
function validate_values(values) {
    if (!values.name) {
        show_error("Preencha o seu nome");
        return false;
    }
    if (!values.email) {
        show_error("Preencha o seu email");
        return false;
    }
    if (!values.birth_date) {
        show_error("Preencha sua data de nascimento");
        return false;
    }
    if (!values.cpf) {
        show_error("Preencha o seu CPF");
        return false;
    }
    if (!values.password) {
        show_error("Preencha o campo senha");
        return false;
    }
    if (values.name.length >= 255) {
        show_error("O nome é muito longo.");

        return false;
    }

    if (values.email.length > 255) {

        show_error("O email é muito longo.");

        return false;
    }

    if (values.cpf.replace(/\D/g, "").length !== 11) {

        show_error("O CPF deve possuir 11 dígitos.");

        return false;
    }
    const birthDate = new Date(values.birth_date);
    const today = new Date();
    const minDate = new Date("1900-01-01")
    if (
        birthDate > today ||
        birthDate < minDate
    ) {
        show_error(`Insira uma data válida (01-01-1900 até ${today.toLocaleDateString()}`);
        return false;
    } 
    

    if (values.phone && (values.phone.length < 10 || values.phone.length > 11)) {

        show_error("O telefone deve possuir 10 ou 11 dígitos.");

        return false;
    }

    if (!values.password || values.password.length < 8) {

        show_error("A senha deve ter pelo menos 8 caracteres.");

        return false;
    }

    if (!terms.checked) {

        show_error("Você precisa aceitar os termos de serviço.");

        return false;
    }

    return true;
}
