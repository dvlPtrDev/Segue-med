<?php


function handleGetAll() {
    require_once __DIR__ . "/../../bff/exam/get_all.php";
}
function handleGetCount() {
    require_once __DIR__ . "/../../bff/exam/get_count.php";
}

function handleCreate() {
    require_once __DIR__ . "/../../bff/exam/create.php";
}
$action = $_GET["action"] ?? null;

switch ($action) {
    case "gall":
        handleGetAll();
        break;
    case "gcount":
        handleGetCount();
        break;
    case "new":
        handleCreate();
        break;
    default:
        http_response_code(404);
        echo failure("NOT_FOUND", "Ação inválida");
}