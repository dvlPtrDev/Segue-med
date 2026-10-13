export function formatDate(value) {
    return new Intl.DateTimeFormat("pt-BR").format(
        new Date(value)
    );
}

export function formatNumber(value) {
    return new Intl.NumberFormat("pt-BR").format(value);
}

export function formatPercent(value) {
    return new Intl.NumberFormat("pt-BR", {
        style: "percent",
        maximumFractionDigits: 1
    }).format(value);
}

export function maskCpf(value) {
    return `${value.slice(0, 3)}.***.***-${value.slice(-2)}`;
}

export function normalizeText(value) {
    return value
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

export function createElement(tagName, className, text) {
    const element = document.createElement(tagName);

    if (className) {
        element.className = className;
    }

    if (text !== undefined) {
        element.textContent = text;
    }

    return element;
}

export function renderMetrics(container, items) {
    container.replaceChildren(
        ...items.map(([label, value, note, icon]) => {
            const card = createElement("article", "metric");
            const top = createElement("div", "metric-top");

            top.append(createElement("span", "", label));

            const symbol = createElement("span", "metric-icon", icon);
            symbol.setAttribute("aria-hidden", "true");

            top.append(symbol);

            card.append(
                top,
                createElement("strong", "metric-value", value),
                createElement("span", "metric-note", note)
            );

            return card;
        })
    );
}

export function renderDetails(container, entries) {
    const list = createElement("dl", "detail-list");

    entries.forEach(([label, value]) => {
        const group = createElement("div");

        group.append(
            createElement("dt", "", label),
            createElement("dd", "", value)
        );

        list.append(group);
    });

    container.replaceChildren(list);
}