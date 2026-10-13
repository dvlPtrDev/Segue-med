<?php

require_once __DIR__ . "/../helper/session.php";
require_once __DIR__ . "/../helper/request.php";
require_once __DIR__ . "/../helper/response.php";

init_session();

$body = [
    "name" => $_POST["name"] ?? "",
    "exam_date" => $_POST["exam_date"] ?? "",
    "results" => $_POST["results"] ?? "",
    "notes" => $_POST["notes"] ?? ""
];

$file = $_FILES["file"] ?? null;

if (
    is_array($file) &&
    ($file["error"] ?? UPLOAD_ERR_NO_FILE) !== UPLOAD_ERR_NO_FILE
) {
    if (
        $file["error"] !== UPLOAD_ERR_OK ||
        !isset($file["tmp_name"], $file["name"]) ||
        !is_uploaded_file($file["tmp_name"])
    ) {
        http_response_code(400);

        echo failure(
            "VALIDATION_ERROR",
            "Erro ao receber o arquivo."
        );

        return;
    }

    if ($file["size"] > 10 * 1024 * 1024) {
        http_response_code(400);

        echo failure(
            "VALIDATION_ERROR",
            "O arquivo deve ter no máximo 10 MB."
        );

        return;
    }

    $body["file"] = new CURLFile(
        $file["tmp_name"],
        $file["type"] ?? "application/octet-stream",
        $file["name"]
    );
}

$result = post_request(
    "http://localhost:5002/exams",
    $body,
    [
        "Accept: application/json"
    ],
    true
);

if (!is_valid_response($result)) {
    echo failure(
        $result["error"]["code"],
        $result["error"]["message"]
    );

    return;
}

echo json_encode([
    "success" => true,
    "data" => null
]);