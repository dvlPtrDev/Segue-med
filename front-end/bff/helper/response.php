<?php

enum ErrorCode: string {
    case BAD_REQUEST = "BAD_REQUEST";
    case VALIDATION_ERROR = "VALIDATION_ERROR";
    case UNAUTHORIZED = "UNAUTHORIZED";
    case FORBIDDEN = "FORBIDDEN";
    case NOT_FOUND = "NOT_FOUND";
    case CONFLICT = "CONFLICT";
    case INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR";
    public function status(): int {
        return match ($this) {
            self::BAD_REQUEST => 400,
            self::VALIDATION_ERROR => 400,
            self::UNAUTHORIZED => 401,
            self::FORBIDDEN => 403,
            self::NOT_FOUND => 404,
            self::CONFLICT => 409,
            self::INTERNAL_SERVER_ERROR => 500
        };
    }
}
function failure(string $string_code, string $msg) {
    $code = ErrorCode::tryFrom($string_code);
    error_log($string_code);
    
    if ($code === null) {
        http_response_code(500);
        return failure("INTERNAL_SERVER_ERROR", "Um erro inesperado ocorreu, tente novamente");
    }
    http_response_code($code->status());
    return json_encode([
        "success" => false,
        "error" => [
            "code" => $code,
            "message" => $msg
        ] 
    ], JSON_UNESCAPED_UNICODE);
}
function is_valid_response(array $result) {
    if (
        !$result ||
        !isset($result["success"]) ||
        !$result["success"]
    ) {
        return false;
    }
    return true;
}
