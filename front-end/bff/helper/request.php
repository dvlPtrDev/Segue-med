<?php

require_once __DIR__ . "/session.php";

function api_request(
    string $method,
    string $url,
    mixed $body = null,
    ?array $headers = null,
    bool $authenticated = false
): array {
    for ($attempt = 0; $attempt < 2; $attempt++) {
        $requestHeaders = $headers ?? [];

        if ($body !== null && !is_array($body)) {
            $requestHeaders[] = "Content-Type: application/json";
        }

        if ($authenticated) {
            $requestHeaders[] =
                "Authorization: Bearer " .
                get_session_value("access_token");
        }

        $ch = curl_init($url);

        if ($ch === false) {
            throw new RuntimeException(
                "Não foi possível iniciar a requisição."
            );
        }

        curl_setopt_array($ch, [
            CURLOPT_CUSTOMREQUEST => $method,
            CURLOPT_HTTPHEADER => $requestHeaders,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_CONNECTTIMEOUT => 10,
            CURLOPT_TIMEOUT => 30,
        ]);

        if ($body !== null) {
            curl_setopt($ch, CURLOPT_POSTFIELDS, $body);
        }

        $response = curl_exec($ch);

        if ($response === false) {
            $error = curl_error($ch);

            throw new RuntimeException(
                "Não foi possível se conectar à API: " . $error
            );
        }

        $result = json_decode(
            $response,
            true,
            512,
            JSON_THROW_ON_ERROR
        );

        if (!is_array($result)) {
            throw new RuntimeException(
                "A API retornou uma resposta inválida."
            );
        }

        $unauthorized =
            ($result["success"] ?? null) === false &&
            ($result["error"]["code"] ?? null) === "UNAUTHORIZED";

        if (
            !$authenticated ||
            !$unauthorized ||
            $attempt === 1
        ) {
            return $result;
        }

        require_once __DIR__ . "/../auth/refresh.php";

        if (!update_access_token()) {
            return failure(
                "UNAUTHORIZED",
                "Não foi possível autenticar"
            );
        }
    }

    throw new RuntimeException(
        "Não foi possível concluir a requisição."
    );
}

function post_request(
    string $url,
    mixed $body,
    ?array $headers = null,
    bool $authenticated = false
): array {
    return api_request(
        "POST",
        $url,
        $body,
        $headers,
        $authenticated
    );
}

function get_request(
    string $url,
    ?array $headers = null,
    bool $authenticated = false
): array {
    return api_request(
        "GET",
        $url,
        null,
        $headers,
        $authenticated
    );
}