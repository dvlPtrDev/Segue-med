<?php

    function get_data() {
        require_once __DIR__ . "/../../bff/patient/get_me.php";
        return get_me();
    }
    echo json_encode([
        "success" => true,
        "data" => get_data()
    ]);