# MediCore — PHARMACY

Dashboard demonstrativo do perfil `PHARMACY`.

## Direção visual

O painel foi construído como um meio-termo entre:

- o dashboard mais pessoal e acolhedor do `PATIENT`;
- o dashboard mais seco e analítico do `ADMIN_BI`.

Ele mantém cards, ícones e timeline, mas prioriza tarefas operacionais da farmácia.

## Conteúdo mockado

- Receitas recebidas
- Receitas pendentes
- Atendimentos concluídos
- Pacientes atendidos
- Receitas recentes
- Pacientes recentes
- Ações rápidas
- Resumo diário
- Histórico de atendimentos

Todos os dados estão diretamente no HTML/PHP.

## Arquivos

- `dashboard.php`
- `components/sidebar.php`
- `components/topbar.php`
- `assets/css/dashboard/pharmacy/dashboard.css`
- `assets/js/dashboard/pharmacy.js`

## Ações

Os botões e links de negócio usam `href="#"` e podem ser conectados aos endpoints posteriormente.

O JavaScript implementa somente:

- sidebar mobile;
- fechamento com Escape;
- busca local na tabela de pacientes.
