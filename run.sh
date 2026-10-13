#!/usr/bin/env bash

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"

(
    cd "$SCRIPT_DIR/auth" || exit 1
    pnpm run dev
) &

(
    cd "$SCRIPT_DIR/farmacia" || exit 1
    pnpm run dev
) &

(
    cd "$SCRIPT_DIR/front-end" || exit 1
    php -S localhost:8080 -t public
) &

wait
