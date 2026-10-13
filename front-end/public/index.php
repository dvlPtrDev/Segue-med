<?php
    require_once __DIR__ . "/../bff/helper/session.php";
    init_session();
    if (!isset($_SESSION["logged_in"])) {
        header("Location: /auth/login.php");
        exit;
    }
    require_once __DIR__ . "/../bff/user/get_me.php";
    
    $rawUserData = get_me();
    if (!isset($rawUserData)) {
        throw new Exception("Não foi possível renderizar as credenciais");
    }
    
    switch($rawUserData["user_role"]) {
        case "PATIENT":
            require_once __DIR__ . "/../app/views/dashboard/patient/dashboard.php";
            break;
            case "ADMIN_OWNER":
                require_once __DIR__ . "/../app/views/dashboard/admin/dashboard.php";
            
    }
