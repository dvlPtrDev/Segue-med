<?php
    
    require_once __DIR__ . "/../helper/request.php";
    require_once __DIR__ . "/../helper/response.php";
    require_once __DIR__ . "/../helper/session.php";

    init_session();
    
    function update_access_token() {
        $result = post_request("http://localhost:5001/refresh", json_encode([ "refresh_token" => get_session_value("refresh_token") ]), null);
        
        if (!is_valid_response($result)) {
            return false;
        }
        set_session_value("access_token", $result["data"]["access_token"]["token"]);
        return true;
    }