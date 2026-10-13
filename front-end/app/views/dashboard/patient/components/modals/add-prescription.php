<dialog
    class="registration-modal"
    id="add-prescription-modal"
    aria-labelledby="prescription-modal-title"
>
    <form class="registration-form">
        <header class="registration-header">
            <h2 id="prescription-modal-title">Adicionar receita</h2>
            <button
                type="button"
                class="close"
                data-close-registration
                aria-label="Fechar"
            >×</button>
        </header>

        <p class="registration-note">
            Demonstração: nenhum dado ou arquivo será enviado.
            Os campos serão limpos ao fechar.
        </p>

        <div class="registration-field">
            <label for="prescription-name">Identificação da receita *</label>
            <input
                id="prescription-name"
                name="prescriptionName"
                type="text"
                placeholder="Ex.: Receita da consulta de setembro"
                maxlength="150"
                required
            >
        </div>

        <div class="registration-field">
            <label for="prescription-date">Data de emissão *</label>
            <input
                id="prescription-date"
                name="prescriptionDate"
                type="date"
                required
            >
        </div>

        <div class="registration-field">
            <label for="prescription-professional">Profissional prescritor</label>
            <input
                id="prescription-professional"
                name="prescriptionProfessional"
                type="text"
                placeholder="Nome do profissional"
                maxlength="150"
            >
        </div>

        <div class="registration-field">
            <label for="prescription-file">Foto ou PDF da receita *</label>
            <input
                id="prescription-file"
                name="prescriptionFile"
                type="file"
                accept="application/pdf,image/jpeg,image/png"
                aria-describedby="prescription-file-help"
                required
            >
            <small id="prescription-file-help">
                PDF, JPG ou PNG. Máximo de 10 MB.
            </small>
        </div>

        <div class="registration-field">
            <label for="prescription-notes">Observações</label>
            <textarea
                id="prescription-notes"
                name="prescriptionNotes"
                rows="3"
                maxlength="2000"
            ></textarea>
        </div>

        <p class="registration-feedback" role="status"></p>

        <footer class="registration-actions">
            <button type="button" class="button" data-close-registration>
                Cancelar
            </button>
            <button type="submit" class="button primary">
                Validar demonstração
            </button>
        </footer>
    </form>
</dialog>
