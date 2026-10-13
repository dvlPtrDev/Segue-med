<section class="panel" id="prescriptions">
    <div class="panel-header panel-header-actions">
        <h2>Receitas recentes</h2>

        <button
            type="button"
            class="add-button primary"
            id="add-prescription"
            aria-label="Adicionar receita"
            aria-haspopup="dialog"
            aria-controls="add-prescription-modal"
        >
            Adicionar
        </button>
    </div>

    <div id="prescription-list">
        <!-- Receita 1 -->
        <div class="record">
            <span class="record-icon" aria-hidden="true">▤</span>

            <div class="record-info">
                <h3>Receita RX-001</h3>
                <p>12/09/2026 • Dra. Ana Souza</p>
                <span class="badge neutral">Receita • PDF</span>
            </div>

            <details>
                <summary class="text-button">
                    Ver detalhes
                </summary>

                <dl class="detail-list">
                    <div>
                        <dt>Emissão</dt>
                        <dd>12/09/2026</dd>
                    </div>

                    <div>
                        <dt>Prescritor</dt>
                        <dd>Dra. Ana Souza</dd>
                    </div>

                    <div>
                        <dt>Anexo</dt>
                        <dd>PDF — referência fictícia, sem arquivo disponível.</dd>
                    </div>

                    <div>
                        <dt>Resumo</dt>
                        <dd>Receita registrada durante consulta de acompanhamento.</dd>
                    </div>
                </dl>
            </details>
        </div>

        <!-- Receita 2 -->
        <div class="record">
            <span class="record-icon" aria-hidden="true">▤</span>

            <div class="record-info">
                <h3>Receita RX-002</h3>
                <p>30/08/2026 • Prescritor não informado</p>
                <span class="badge neutral">Receita • Foto</span>
            </div>

            <details>
                <summary class="text-button">
                    Ver detalhes
                </summary>

                <dl class="detail-list">
                    <div>
                        <dt>Emissão</dt>
                        <dd>30/08/2026</dd>
                    </div>

                    <div>
                        <dt>Prescritor</dt>
                        <dd>Não informado</dd>
                    </div>

                    <div>
                        <dt>Anexo</dt>
                        <dd>Foto — referência fictícia, sem arquivo disponível.</dd>
                    </div>

                    <div>
                        <dt>Resumo</dt>
                        <dd>Receita enviada pelo paciente, pendente de conferência.</dd>
                    </div>
                </dl>
            </details>
        </div>
    </div>
    <div class="expand">
        <button>Ver todos</button>
    </div>
</section>