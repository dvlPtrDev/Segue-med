<?php
    require_once __DIR__ . "/../helper/request.php";
    require_once __DIR__ . "/../helper/response.php";
    require_once __DIR__ . "/../helper/session.php";
    require_once __DIR__ . "/../auth/refresh.php";
    
    function get_exams_count() {
            $response = get_request(
                "http://localhost:5002/exams/count", 
                [ "Accept: application/json" ], true);  
            if (!is_valid_response($response)) {
                echo failure(
                    $response["error"]["code"], 
                    $response["error"]["message"]
                );
            }
            return $response["data"];
        }
    echo json_encode([
        "success" => true,
        "data" => get_exams_count()
    ]);