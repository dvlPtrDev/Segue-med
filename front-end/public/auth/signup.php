<!DOCTYPE html>
<html lang="pt-BR">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Criar conta | MediCore</title>
  <link rel="stylesheet" href="../assets/css/auth/signup.css">
  <link rel="stylesheet" href="../assets/css/auth/global.css">

  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">
  <script defer src="https://kit.fontawesome.com/7351777d54.js" crossorigin="anonymous"></script>
  <script type="module" defer src="../assets/js/auth/signup.js"></script>
  <script type="module" defer src="../assets/js/auth/shared/password.js"></script>
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

    <section class="form-panel">
      <div class="form-wrap">
        <div class="mobile-brand brand-lockup" aria-label="MediCore">
          <div class="brand-mark"><span></span><span></span></div>
          <span class="brand-name">MediCore</span>
        </div>

        <header class="form-header">
          <p class="form-kicker">Comece agora</p>
          <h2 id="signup-heading">Crie sua conta</h2>
          <p>Preencha seus dados para começar a cuidar melhor da sua saúde.</p>
        </header>

        <form class="auth-form" method="POST" action="#" id="signup-form">
          <div class="field-group">
            <label for="name">Nome completo <span class="required">*</span></label>
            <input id="name" name="name" type="text" placeholder="Seu nome" required>
          </div>
          <div class="field-row">
            <div class="field-group">
              <label for="email">Email <span class="required">*</span></label>
              <input id="email" name="email" type="email" placeholder="seu@email.com" required>
            </div>
            <div class="field-group">
              <label for="cpf">CPF <span class="required">*</span></label>
              <input id="cpf" name="cpf" type="text" placeholder="123.456.789-01" maxlength="14" required>
            </div>
          </div>
          <div class="field-row">
            <div class="field-group">
              <label for="birth_date">data de nascimento<span class="required">*</span></label>
              <input id="birth_date" name="birth_date" type="date" placeholder="Insira sua data de nascimento"
                minlength="8" required>
            </div>
            <div class="field-group">
              <label for="phone">Telefone</label>
              <input id="phone" name="phone" type="tel" placeholder="11 12345-6789" minlength="6" maxlength="17">
            </div>
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
            <input type="checkbox" name="terms" id="terms" required>
            <span>Concordo com os <a href="#terms">Termos de serviço</a> e a <a href="#privacy">política de
                privacidade</a> da plataforma.</span>
          </label>

          <button type="submit" id="create-btn" class="primary-button" disabled>Criar minha conta
            <span>→</span></button>
        </form>

        <div class="divider"><span>Já possui uma conta?</span></div>
        <a class="secondary-button" href="login.php">Entrar na MediCore</a>
        <p class="support-copy">Precisa de ajuda? <a href="#support">Contate o suporte</a></p>
      </div>
    </section>
  </main>
</body>

</html>