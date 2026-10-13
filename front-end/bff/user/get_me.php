<?php

    require_once __DIR__ . "/../helper/request.php";
    require_once __DIR__ . "/../helper/response.php";
    require_once __DIR__ . "/../helper/session.php";
    require_once __DIR__ . "/../auth/refresh.php";

    init_session();
    function get_me(bool $retry = false) {
        $response = get_request(
            "http://localhost:5002/users/me", 
            [ "Accept: application/json" ], true
        );  

        if (!$response["success"]) {
            echo failure(
                $response["error"]["code"], 
                $response["error"]["message"]
            );
        }
        return $response["data"];
    }