<?php
if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

if (empty($_SESSION["logged_in"])) {
    header('Location: ../login.php');
    exit;
}
?>
<!doctype html>
<html lang="pt-BR">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Meu acompanhamento | MediCore</title>
    <link rel="stylesheet" href="../assets/css/root.css">
    <link rel="stylesheet" href="../assets/css/dashboard/patient/dashboard.css">
    <script defer type="module" src="../assets/js/dashboard/patient.js"></script>
    <script defer type="module" src="../assets/js/dashboard/shared/modals.js"></script>
    <script defer type="module" src="../assets/js/dashboard/patient.js"></script>
</head>

<body>
  <div class="alerts-container">
    <div
        class="alert alert-danger"
        id="error-alert"
        role="alert"
        hidden
    ></div>

    <div
        class="alert alert-success"
        id="success-alert"
        role="status"
    ></div>
  </div>
  </div>
    <a class="skip-link" href="#main-content">Pular para o conteúdo</a>
    <button class="menu-shade" id="menu-shade"></button>
    <?php require_once __DIR__ . "/components/sidebar.php" ?>
    <div class="workspace">
        <header class="topbar">
          <?php require_once __DIR__ . "/components/topbar.php"; ?>
        </header>
        <main id="main-content">
          <div class="page-heading" id="overview">
            <div>
              <span class="eyebrow">MediCore / Meu acompanhamento</span>
                    <h1>Olá, 
                      <span class="name">Usuário</span>
                      <span aria-hidden="true">&#x1F44B;</span>
                    </h1>
                    <p class="subtitle">Histórico atualizado em 19/09/2026.</p>
                </div>
                <span class="demo-badge">Dados demonstrativos</span>
              </div>
              <?php require_once __DIR__ . "/components/completion.php"; ?>
              <?php require_once __DIR__ . "/components/metrics.php" ?>
            <div class="dashboard-grid">
                <?php require_once __DIR__ . "/components/grid.php" ?>
            </div>
            <footer class="footer"><span>MediCore · Cuidado que conecta</span><span>Ambiente demonstrativo • Setembro de
                    2026</span></footer>
        </main>
    </div>
    <?php
    require_once __DIR__ . '/components/modals/details.php';
    require_once __DIR__ . '/components/modals/add-prescription.php';
    require_once __DIR__ . '/components/modals/add-exam.php';
    require_once __DIR__ . '/components/modals/add-medication.php';
    require_once __DIR__ . "/components/modals/expand.php";
    ?>

</body>

</html>