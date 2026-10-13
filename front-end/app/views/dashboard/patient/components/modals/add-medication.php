<dialog
    class="registration-modal"
    id="add-medication-modal"
    aria-labelledby="medication-modal-title"
>
    <form class="registration-form">
        <header class="registration-header">
            <h2 id="medication-modal-title">Adicionar medicamento</h2>
            <button
                type="button"
                class="close"
                data-close-registration
                aria-label="Fechar"
            >×</button>
        </header>

        <p class="registration-note">
            Transcreva as informações da prescrição.
            Nesta demonstração, nada será salvo e os campos serão limpos ao fechar.
        </p>

        <div class="registration-field">
            <label for="medication-name">Nome do medicamento *</label>
            <input
                id="medication-name"
                name="medicationName"
                type="text"
                maxlength="150"
                required
            >
        </div>

        <div class="registration-field">
            <label for="medication-strength">Concentração e apresentação</label>
            <input
                id="medication-strength"
                name="medicationStrength"
                type="text"
                placeholder="Conforme consta na embalagem ou receita"
                maxlength="150"
            >
        </div>

        <div class="registration-field">
            <label for="medication-dosage">Posologia registrada *</label>
            <textarea
                id="medication-dosage"
                name="medicationDosage"
                rows="3"
                placeholder="Transcreva a dose, a via e a frequência prescritas."
                maxlength="1000"
                required
            ></textarea>
        </div>

        <div class="registration-field">
            <label for="medication-start">Data de início</label>
            <input
                id="medication-start"
                name="medicationStart"
                type="date"
            >
        </div>

        <div class="registration-field">
            <label for="medication-end">Data de término, se informada</label>
            <input
                id="medication-end"
                name="medicationEnd"
                type="date"
            >
        </div>

        <div class="registration-field">
            <label for="medication-notes">Observações</label>
            <textarea
                id="medication-notes"
                name="medicationNotes"
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