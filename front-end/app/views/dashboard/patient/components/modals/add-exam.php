<dialog
    class="registration-modal"
    id="add-exam-modal"
    aria-labelledby="exam-modal-title"
>
    <form class="registration-form" id="add-exam-form">
        <header class="registration-header">
            <h2 id="exam-modal-title">Adicionar exame</h2>
            <button
                type="submit"
                class="close"
                data-close-registration
                aria-label="Fechar"
            >×</button>
        </header>


        <div class="registration-field">
            <label for="exam-name">Nome do exame *</label>
            <input
                id="exam-name"
                name="examName"
                type="text"
                placeholder="Ex.: Hemograma completo"
                maxlength="150"
                required
            >
        </div>

        <div class="registration-field">
            <label for="exam-date">Data do exame *</label>
            <input
                id="exam-date"
                name="examDate"
                type="date"
                required
            >
        </div>

        <div class="registration-field">
            <label for="exam-result">Resultado do exame</label>
            <textarea
                id="exam-result"
                name="examResult"
                rows="3"
                maxlength="2000"
                placeholder="Transcreva o resultado, incluindo a unidade quando houver."
            ></textarea>
        </div>
        <div class="registration-field">
            <label for="exam-result">Observações</label>
            <textarea
                id="notes"
                name="notes"
                rows="3"
                maxlength="2000"
                placeholder="Ex.: Exame realizado em jejum."
            ></textarea>
        </div>

        <div class="registration-field">
            <label for="exam-file">Foto ou PDF do exame</label>
            <input
                id="exam-file"
                name="examFile"
                type="file"
                accept="application/pdf,image/jpeg,image/png"
            >
            <small id="exam-file-help">
                PDF, JPG ou PNG. Máximo de 10 MB.
            </small>
        </div>

        <p class="registration-feedback" role="status"></p>

        <footer class="registration-actions">
            <button type="button" class="button" data-close-registration>
                Cancelar
            </button>
            <button type="submit" class="button primary">
                Finalizar
            </button>
        </footer>
    </form>
</dialog>
