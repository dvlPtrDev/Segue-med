<?php

    require_once __DIR__ . "/../helper/request.php";
    require_once __DIR__ . "/../helper/response.php";
    require_once __DIR__ . "/../helper/session.php";
    require_once __DIR__ . "/../auth/refresh.php";

    init_session();
    function get_me(bool $retry = false) {
        $token = $_SESSION["access_token"] ?? null;
        if ($token === null) {
            echo failure("UNAUTHORIZED", "Credenciais inválidas");
        }

        $response = get_request(
            "http://localhost:5002/patients/me", 
            [
                "Authorization: Bearer " . $token,
                "Accept: application/json"
            ]
        );  
        if (!$response["success"]) {
            $error = $response["error"];
            if (ErrorCode::from($error["code"]) === ErrorCode::UNAUTHORIZED && !$retry) {
                if (!update_access_token()) {
                    return null;
                }
                return get_me(true);
            }   
            echo failure(
                $response["error"]["code"], 
                $response["error"]["message"]
            );
        }
        return $response["data"];
    }