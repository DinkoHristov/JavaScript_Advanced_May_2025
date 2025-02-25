function fromJSONToHTMLTabl(input) {
    function escapeHtml(str) {
        let entityMap = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': '&quot;',
            "'": '&#39;',
            "/": '&#x2F;'
        };
        return str.replace(/[&<>"'\/]/g, (s) => entityMap[s]);
    }

    let students = JSON.parse(input);
    let html = '<table>\n';

    for (let i = 0; i < students.length; i++) {
        let currentStudent = students[i];

        if (i === 0) {
            // Add headers
            html += '\t<tr>';
            for (const key in currentStudent) {
                html += `<th>${escapeHtml(key)}</th>`;
            }
            html += '</tr>\n';
        }

        html += '\t<tr>';
        for (const key in currentStudent) {
            html += `<td>${escapeHtml(String(currentStudent[key]))}</td>`;
        }
        html += '</tr>\n';
    }

    html += '</table>'

    return html;
}