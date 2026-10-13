import { loginRequest } from "../api/auth.js";
import { show_error, show_success } from "../shared/ui.js";

const form = document.querySelector("#login-form");

const email_input = document.querySelector("#email");

form?.addEventListener("submit", login);

email_input.addEventListener("invalid", (event) => {
    event.preventDefault();
    show_error("Digite um email válido.");
});


async function login(event) {
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    const email = data.get("email")?.trim();
    const password = data.get("password");
    const remember = document.querySelector("#remember").checked

    if (!validate_values(email, password)) {
        return;
    }
    
    const result = await loginRequest(email, password, remember);    

    if (!result.success) {
        show_error(result.error.message)
        return;
    }

    show_success("Bem-vindo de volta, você será redirecionado para sua dashboard em instantes!");

    setTimeout(() => {
        window.location.href = "../index.php"
    }, 2000);
}


function validate_values(email, password) {
    if (!email || !password) {
        show_error("Preencha todos os campos.");
        return false;
    }

    if (email.length > 254) {
        show_error("O email é muito longo.");
        return false;
    }

    if (password.length < 8) {
        show_error("A senha deve ter pelo menos 8 caracteres.");
        return false;
    }

    return true;
}

