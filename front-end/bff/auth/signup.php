<?php
    require_once __DIR__ . "/../helper/request.php";
    require_once __DIR__ . "/../helper/response.php";

    $body = file_get_contents("php://input");
    
    $result = post_request("http://localhost:5002/patient", $body);
    if (!is_valid_response($result)) {
        echo failure($result["error"]["code"], $result["error"]["message"]);
        return;
    }
    echo json_encode([
        "success" => true,
        "data" => null
    ]);