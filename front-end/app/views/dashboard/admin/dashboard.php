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
    <title>Business Intelligence | Tamo</title>

    <link
        rel="stylesheet"
        href="../assets/css/dashboard/admin/dashboard.css"
    >

</head>

<body>

    <?php require_once __DIR__ . "/components/sidebar.php"; ?>

    <div class="workspace">
        <header class="topbar">
            <?php require_once __DIR__ . "/components/topbar.php"; ?>
        </header>

        <main id="main-content">
            <section class="page-heading" id="overview">
                <?php require_once __DIR__ . "/components/overview.php" ?>
            </section>

            <section
                class="metrics"
                aria-label="Indicadores principais"
            >
                <?php require_once __DIR__ . "/components/metrics.php" ?>
            </section>

            <div class="dashboard-grid">
                <section class="panel panel-wide" id="registrations">
                    <div class="panel-header">
                        <div>
                            <h2>Cadastros por mês</h2>
                            <p>
                                Novos usuários nos últimos seis meses.
                            </p>
                        </div>

                        <a class="text-link" href="#">
                            Ver relatório
                        </a>
                    </div>

                    <div
                        class="bar-chart"
                        aria-label="Gráfico de cadastros por mês"
                    >
                        <?php require_once __DIR__ . "/components/chart.php" ?>  
                    </div>
                </section>

                <section class="panel" id="users">
                    <?php require_once __DIR__ . "/components/users_panel.php" ?>
                </section>
            </div>

            <section class="panel table-panel" id="patients">
                <div class="panel-header panel-header-wrap">
                    <div>
                        <h2>Pacientes recentes</h2>
                        <p>
                            Documentos apresentados de forma mascarada.
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
                    <?php require_once __DIR__ . "/components/patients_list.php" ?>
                </div>
            </section>

            <section class="panel table-panel" id="pharmacies">
                <div class="panel-header panel-header-wrap">
                    <div>
                        <h2>Farmácias recentes</h2>
                        <p>
                            Estabelecimentos cadastrados na plataforma.
                        </p>
                    </div>

                    <div class="panel-actions">
                        <a href="#" class="button">
                            Ver todas
                        </a>

                        <a href="#" class="button primary">
                            Nova farmácia
                        </a>
                    </div>
                </div>

                <div class="table-wrap">
                    <?php require_once __DIR__ . "/components/pharmacy_list.php" ?>
                </div>
            </section>

            <section class="activity-section" id="activity">
                <div class="section-heading">
                    <div>
                        <h2>Atividade recente</h2>
                        <p>
                            Eventos administrativos demonstrativos.
                        </p>
                    </div>

                    <a href="#" class="text-link">
                        Ver histórico
                    </a>
                </div>
                <?php require_once __DIR__ . "/components/activity_list.php" ?>
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
