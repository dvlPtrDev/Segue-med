<?php
    require_once __DIR__ . "/../helper/request.php";
    require_once __DIR__ . "/../helper/response.php";
    require_once __DIR__ . "/../helper/session.php";
    require_once __DIR__ . "/../auth/refresh.php";

    init_session();
    function get_exams() {
        $response = get_request(
            "http://localhost:5002/exams", 
            [
                "Accept: application/json"
            ], true
        );  
        if (!is_valid_response($response)) {
            return failure(
                $response["error"]["code"], 
                $response["error"]["message"]
            );
        }
        
        return $response;
    }
    echo json_encode(get_exams(), JSON_UNESCAPED_UNICODE);
    
    