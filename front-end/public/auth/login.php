<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Faça login | MediCore</title>
  <link rel="stylesheet" href="../assets/css/root.css">
  <link rel="stylesheet" href="../assets/css/auth/login.css">
  <link rel="stylesheet" href="../assets/css/auth/global.css">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
  <script defer src="https://kit.fontawesome.com/7351777d54.js" crossorigin="anonymous"></script>
  <script type="module" defer src="/assets/js/auth/login.js"></script>
  <script type="module" defer src="/assets/js/auth/shared/password.js"></script>
</head>

<body>
  <div class="alerts-container">
    <div
        class="alert alert-danger"
        id="error-alert"
        role="alert"
    ></div>

    <div
        class="alert alert-success"
        id="success-alert"
        role="status"
    ></div>
  </div>
  </div>
  <main class="auth-shell">
    <section class="brand-panel" aria-labelledby="brand-heading">
      <div class="brand-lockup" aria-label="MediCore">
        <div class="brand-mark" aria-hidden="true">
          <img src="../assets/img/logo.png" alt="">
        </div>
        <span class="brand-name">SEGUE</span>
      </div>

      <div class="brand-copy">
        <p class="eyebrow">Gerenciando sua saúde</p>
        <h1>Uma vida mais saudável começa aqui</h1>
        <p class="brand-description">
          Organize receitas, exames e seu prontuário em um só lugar, com segurança e praticidade.
        </p>
      </div>

      <div class="trust-note">
        <div class="shield-icon" aria-hidden="true">✓</div>
        <div>
          <span>Seus dados são protegidos conforme a <a
              href="https://www.planalto.gov.br/ccivil_03/_ato2015-2018/2018/lei/l13709.htm">Lei geral de proteção de
              dados (LGPD)</a>.</span>
        </div>
      </div>
    </section>

    <section class="form-panel" aria-labelledby="signup-heading">
      <div class="form-wrap">
        <div class="mobile-brand brand-lockup" aria-label="MediCore">
          <div class="brand-mark" aria-hidden="true"><span></span><span></span></div>
          <span class="brand-name">MediCore</span>
        </div>

        <header class="form-header">
          <p class="form-kicker">Bem-vindo de volta</p>
          <h2 id="signup-heading">Faça login na sua conta</h2>
          <p>Preencha seus dados para começar a cuidar melhor da sua saúde.</p>
        </header>

        <form class="auth-form" method="POST" action="#" id="login-form">
            <div class="field-group">
              <label for="email">Email <span class="required">*</span></label>
              <input id="email" name="email" type="email" placeholder="seu@email.com" required>
            </div>
          <div class="field-group password-group">
            <label for="password">Senha <span class="required">*</span></label>

            <div class="password-wrapper">
              <input id="password" name="password" type="password" placeholder="Crie uma senha segura" minlength="8" required>

              <label for="toggle-password" class="toggle-container">
                <i class="fa-solid fa-eye eye-open toggle-btn" id="show-pwd"></i>
                <i class="fa-solid fa-eye-slash eye-closed toggle-btn disabled" id="hide-pwd"></i>
              </label>
            </div>

            <small>Mínimo de 8 caracteres.</small>
          </div>

          <label class="checkbox-row">
            <input type="checkbox" name="remember" id="remember">
            <span>Lembrar de mim.</span>
          </label>

          <button type="submit" id="create-btn" class="primary-button">Criar minha conta
            <span>→</span></button>
        </form>

        <div class="divider"><span>Ainda não tem uma conta?</span></div>
        <a class="secondary-button" href="signup.php">Criar Conta</a>
        <p class="support-copy">Precisa de ajuda? <a href="#support">Contate o suporte</a></p>
      </div>
    </section>
  </main>
</body>

</html>