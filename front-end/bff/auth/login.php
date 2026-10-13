<?php
    require_once __DIR__ . "/../helper/session.php";
    require_once __DIR__ . "/../helper/request.php";
    require_once __DIR__ . "/../helper/response.php";


    $body = file_get_contents("php://input");
    
    function set_auth_session(array $response_data) {
        set_session_value("logged_in", true);
        set_session_value("access_token", $response_data["access_token"]["token"]);
        set_session_value("refresh_token", $response_data["refresh_token"]);
    }

    $result = post_request("http://localhost:5002/sessions", $body);

    if (!is_valid_response($result)) {
        echo failure($result["error"]["code"], $result["error"]["message"]);
        return;
    }   

    set_auth_session($result["data"]);
    echo json_encode([
        "success" => true,
        "data" => null
        ]);