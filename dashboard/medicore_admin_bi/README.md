# MediCore — ADMIN_BI

Dashboard demonstrativo do perfil `ADMIN_BI`.

## Arquivos

- `dashboard.php`
- `components/sidebar.php`
- `components/topbar.php`
- `assets/css/dashboard/admin_bi/dashboard.css`
- `assets/js/dashboard/admin_bi.js`

## Observações

- Todos os dados são mockados diretamente no HTML/PHP.
- Os botões e links de ação usam `href="#"`.
- CPFs e CNPJs aparecem mascarados.
- O CSS mantém as variáveis e identidade visual do dashboard do paciente, mas reduz cartões, sombras, ícones e elementos decorativos.
- O JavaScript implementa apenas:
  - abertura/fechamento da sidebar no mobile;
  - fechamento com Escape;
  - busca local na tabela de pacientes.

## Integração

A estrutura assume que o projeto já possui:

- `assets/css/dashboard/shared/dashboard-components.css`
- `assets/css/dashboard/shared/dashboard-layout.css`
- `assets/css/dashboard/shared/dashboard-tokens.css`

Se os caminhos no projeto real forem diferentes, ajuste apenas os três `@import` no topo de `dashboard.css`.
