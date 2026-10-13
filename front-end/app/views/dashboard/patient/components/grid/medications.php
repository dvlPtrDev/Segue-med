<section class="panel" id="medications">
    <div class="panel-header panel-header-actions">
        <h2>Medicamentos</h2>

        <button
            type="button"
            class="add-button primary"
            id="add-medication"
            aria-label="Adicionar medicamento"
            aria-haspopup="dialog"
            aria-controls="add-medication-modal"
        >
            Adicionar
        </button>
    </div>

    <div id="medication-list">
        <!-- Medicamento 1 -->
        <div class="record">
            <span class="record-icon" aria-hidden="true">▤</span>

            <div class="record-info">
                <h3>Medicamento demonstrativo A</h3>
                <p>Posologia registrada: 1 comprimido pela manhã.</p>
                <span class="badge neutral">
                    Uso contínuo • início em 12/09/2026
                </span>
            </div>
        </div>

        <!-- Medicamento 2 -->
        <div class="record">
            <span class="record-icon" aria-hidden="true">▤</span>

            <div class="record-info">
                <h3>Medicamento demonstrativo B</h3>
                <p>Posologia registrada: 1 comprimido à noite.</p>
                <span class="badge neutral">
                    De 12/09/2026 a 19/09/2026
                </span>
            </div>
        </div>
    </div>
    <div class="expand">
        <button>Ver todos</button>
    </div>
</section>