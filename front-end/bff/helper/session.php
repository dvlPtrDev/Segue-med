<?php

function init_session() {
    if (session_status() !== PHP_SESSION_ACTIVE) {
        session_start();
    }
}

function set_session_value(string $key, mixed $value) {
    init_session();
    $_SESSION[$key] = $value;
}

function get_session_value(string $key) {
    init_session();
    return $_SESSION[$key] ?? null;
}