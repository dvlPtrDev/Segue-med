<?php


function handlelogin() {
    require_once __DIR__ . "/../../bff/auth/login.php";
}
function handleSignup() {
    require_once __DIR__ . "/../../bff/auth/signup.php";
}

function handleLogout() {
    require_once __DIR__ . "/../../bff/auth/logout.php";
}

$action = $_GET["action"] ?? null;

switch ($action) {
    case "login":
        handleLogin();
        break;
    case "signup":
        handleSignup();
        break;
    case "logout":
        handleLogout();
    default:
        http_response_code(404);
        echo json_encode([
            "success" => false,
            "error" => [
                "code" => "NOT_FOUND",
                "message" => "Ação inválida"
            ]
        ]);
}