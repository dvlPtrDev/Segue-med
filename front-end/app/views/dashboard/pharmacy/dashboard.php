<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (empty($_SESSION["logged_in"])) {
    header("Location: ../login.php");
    exit;
}
?>
<!doctype html>
<html lang="pt-BR">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Painel da farmácia | Segue</title>

    <link
        rel="stylesheet"
        href="../assets/css/dashboard/pharmacy/dashboard.css"
    >

    <script
        defer
        type="module"
        src="../assets/js/dashboard/pharmacy.js"
    ></script>
</head>

<body>
    <a class="skip-link" href="#main-content">
        Pular para o conteúdo
    </a>

    <button
        class="menu-shade"
        id="menu-shade"
        type="button"
        aria-label="Fechar menu"
        hidden
    ></button>

    <?php require_once __DIR__ . "/components/sidebar.php"; ?>

    <div class="workspace">
        <header class="topbar">
            <?php require_once __DIR__ . "/components/topbar.php"; ?>
        </header>

        <main id="main-content">
            <section class="page-heading" id="overview">
                <div>
                    <span class="eyebrow">
                        MediCore / Farmácia
                    </span>

                    <h1>
                        Olá, Farmácia Central
                    </h1>

                    <p class="subtitle">
                        Acompanhe receitas, pacientes e atendimentos recentes.
                    </p>
                </div>

                <div class="heading-actions">
                    <a href="#" class="button">
                        Buscar receita
                    </a>

                    <a href="#" class="button primary">
                        Novo atendimento
                    </a>
                </div>
            </section>

            <section
                class="metrics"
                aria-label="Resumo da farmácia"
            >
                <article class="metric">
                    <div class="metric-top">
                        <span>Receitas recebidas</span>
                        <span class="metric-icon" aria-hidden="true">
                            ▤
                        </span>
                    </div>

                    <strong class="metric-value">
                        28
                    </strong>

                    <small>
                        Nos últimos 7 dias
                    </small>
                </article>

                <article class="metric">
                    <div class="metric-top">
                        <span>Pendentes</span>
                        <span class="metric-icon" aria-hidden="true">
                            ◷
                        </span>
                    </div>

                    <strong class="metric-value">
                        6
                    </strong>

                    <small>
                        Aguardando atendimento
                    </small>
                </article>

                <article class="metric">
                    <div class="metric-top">
                        <span>Concluídas hoje</span>
                        <span class="metric-icon" aria-hidden="true">
                            ✓
                        </span>
                    </div>

                    <strong class="metric-value">
                        12
                    </strong>

                    <small>
                        Até 17:30
                    </small>
                </article>

                <article class="metric">
                    <div class="metric-top">
                        <span>Pacientes atendidos</span>
                        <span class="metric-icon" aria-hidden="true">
                            ♡
                        </span>
                    </div>

                    <strong class="metric-value">
                        143
                    </strong>

                    <small>
                        Neste mês
                    </small>
                </article>
            </section>

            <div class="dashboard-grid">
                <section class="panel" id="prescriptions">
                    <div class="panel-header panel-header-actions">
                        <div>
                            <h2>Receitas recentes</h2>

                            <p>
                                Prescrições disponíveis para consulta e atendimento.
                            </p>
                        </div>

                        <a class="text-link" href="#">
                            Ver todas
                        </a>
                    </div>

                    <div class="prescription-list">
                        <article class="prescription-item">
                            <div class="record-icon" aria-hidden="true">
                                ▤
                            </div>

                            <div class="record-info">
                                <strong>
                                    Receita #MC-20481
                                </strong>

                                <p>
                                    Mariana Alves · CPF ***.482.***-**
                                </p>

                                <small>
                                    Emitida em 25/09/2026
                                </small>
                            </div>

                            <div class="record-actions">
                                <span class="status pending">
                                    Pendente
                                </span>

                                <a href="#">
                                    Visualizar
                                </a>
                            </div>
                        </article>

                        <article class="prescription-item">
                            <div class="record-icon" aria-hidden="true">
                                ▤
                            </div>

                            <div class="record-info">
                                <strong>
                                    Receita #MC-20479
                                </strong>

                                <p>
                                    Ricardo Nunes · CPF ***.105.***-**
                                </p>

                                <small>
                                    Emitida em 25/09/2026
                                </small>
                            </div>

                            <div class="record-actions">
                                <span class="status available">
                                    Disponível
                                </span>

                                <a href="#">
                                    Visualizar
                                </a>
                            </div>
                        </article>

                        <article class="prescription-item">
                            <div class="record-icon" aria-hidden="true">
                                ▤
                            </div>

                            <div class="record-info">
                                <strong>
                                    Receita #MC-20474
                                </strong>

                                <p>
                                    Fernanda Lima · CPF ***.927.***-**
                                </p>

                                <small>
                                    Emitida em 24/09/2026
                                </small>
                            </div>

                            <div class="record-actions">
                                <span class="status completed">
                                    Concluída
                                </span>

                                <a href="#">
                                    Detalhes
                                </a>
                            </div>
                        </article>
                    </div>
                </section>

                <aside class="stack">
                    <section class="panel" id="quick-actions">
                        <div class="panel-header">
                            <div>
                                <h2>Acesso rápido</h2>

                                <p>
                                    Ações mais usadas no atendimento.
                                </p>
                            </div>
                        </div>

                        <div class="quick-actions">
                            <a href="#">
                                <span aria-hidden="true">⌕</span>
                                Consultar receita
                            </a>

                            <a href="#">
                                <span aria-hidden="true">♡</span>
                                Localizar paciente
                            </a>

                            <a href="#">
                                <span aria-hidden="true">✓</span>
                                Registrar atendimento
                            </a>

                            <a href="#">
                                <span aria-hidden="true">◷</span>
                                Ver histórico
                            </a>
                        </div>
                    </section>

                    <section class="panel">
                        <div class="panel-header">
                            <div>
                                <h2>Resumo de hoje</h2>

                                <p>
                                    Movimentação demonstrativa.
                                </p>
                            </div>
                        </div>

                        <dl class="summary-list">
                            <div>
                                <dt>Receitas consultadas</dt>
                                <dd>18</dd>
                            </div>

                            <div>
                                <dt>Atendimentos concluídos</dt>
                                <dd>12</dd>
                            </div>

                            <div>
                                <dt>Atendimentos pendentes</dt>
                                <dd>6</dd>
                            </div>

                            <div>
                                <dt>Última atualização</dt>
                                <dd>17:30</dd>
                            </div>
                        </dl>
                    </section>
                </aside>
            </div>

            <section class="panel table-panel" id="patients">
                <div class="panel-header panel-header-wrap">
                    <div>
                        <h2>Pacientes recentes</h2>

                        <p>
                            Pacientes vinculados a atendimentos da farmácia.
                        </p>
                    </div>

                    <div class="panel-actions">
                        <input
                            id="patient-search"
                            type="search"
                            placeholder="Buscar paciente"
                            aria-label="Buscar paciente"
                        >

                        <a href="#" class="button">
                            Ver todos
                        </a>
                    </div>
                </div>

                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>Paciente</th>
                                <th>CPF</th>
                                <th>Último atendimento</th>
                                <th>Receitas</th>
                                <th>Status</th>
                                <th>
                                    <span class="sr-only">
                                        Ações
                                    </span>
                                </th>
                            </tr>
                        </thead>

                        <tbody id="patient-table-body">
                            <tr>
                                <td>
                                    <strong>
                                        Mariana Alves
                                    </strong>

                                    <span>
                                        mariana.a@example.com
                                    </span>
                                </td>

                                <td>
                                    ***.482.***-**
                                </td>

                                <td>
                                    25/09/2026
                                </td>

                                <td>
                                    3
                                </td>

                                <td>
                                    <span class="status pending">
                                        Pendente
                                    </span>
                                </td>

                                <td>
                                    <a href="#">
                                        Ver paciente
                                    </a>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>
                                        Ricardo Nunes
                                    </strong>

                                    <span>
                                        ricardo.n@example.com
                                    </span>
                                </td>

                                <td>
                                    ***.105.***-**
                                </td>

                                <td>
                                    25/09/2026
                                </td>

                                <td>
                                    2
                                </td>

                                <td>
                                    <span class="status available">
                                        Em atendimento
                                    </span>
                                </td>

                                <td>
                                    <a href="#">
                                        Ver paciente
                                    </a>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>
                                        Fernanda Lima
                                    </strong>

                                    <span>
                                        fernanda.l@example.com
                                    </span>
                                </td>

                                <td>
                                    ***.927.***-**
                                </td>

                                <td>
                                    24/09/2026
                                </td>

                                <td>
                                    1
                                </td>

                                <td>
                                    <span class="status completed">
                                        Concluído
                                    </span>
                                </td>

                                <td>
                                    <a href="#">
                                        Ver paciente
                                    </a>
                                </td>
                            </tr>

                            <tr>
                                <td>
                                    <strong>
                                        André Martins
                                    </strong>

                                    <span>
                                        andre.m@example.com
                                    </span>
                                </td>

                                <td>
                                    ***.631.***-**
                                </td>

                                <td>
                                    23/09/2026
                                </td>

                                <td>
                                    4
                                </td>

                                <td>
                                    <span class="status completed">
                                        Concluído
                                    </span>
                                </td>

                                <td>
                                    <a href="#">
                                        Ver paciente
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section class="panel" id="history">
                <div class="panel-header panel-header-actions">
                    <div>
                        <h2>Atendimentos recentes</h2>

                        <p>
                            Histórico resumido da operação.
                        </p>
                    </div>

                    <a class="text-link" href="#">
                        Ver histórico completo
                    </a>
                </div>

                <ol class="timeline">
                    <li>
                        <strong>
                            Atendimento concluído
                        </strong>

                        <p>
                            Receita #MC-20474 · Fernanda Lima
                        </p>

                        <small>
                            Hoje, 16:42
                        </small>
                    </li>

                    <li>
                        <strong>
                            Receita consultada
                        </strong>

                        <p>
                            Receita #MC-20479 · Ricardo Nunes
                        </p>

                        <small>
                            Hoje, 15:18
                        </small>
                    </li>

                    <li>
                        <strong>
                            Novo atendimento iniciado
                        </strong>

                        <p>
                            Receita #MC-20481 · Mariana Alves
                        </p>

                        <small>
                            Hoje, 14:57
                        </small>
                    </li>

                    <li>
                        <strong>
                            Atendimento concluído
                        </strong>

                        <p>
                            Receita #MC-20465 · André Martins
                        </p>

                        <small>
                            Hoje, 11:05
                        </small>
                    </li>
                </ol>
            </section>

            <footer class="footer">
                <span>
                    MediCore · Cuidado que conecta
                </span>

                <span>
                    Ambiente demonstrativo • Setembro de 2026
                </span>
            </footer>
        </main>
    </div>
</body>

</html>
