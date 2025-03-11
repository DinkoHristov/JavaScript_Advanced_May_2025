function solve(input) {
    let result = '<table>\n';

    input.forEach(element => {
        let inputInfo = JSON.parse(element)
        let { name, position, salary } = inputInfo;

        result += '\t<tr>\n';

        result += `\t\t<td>${name}</td>\n`;
        result += `\t\t<td>${position}</td>\n`;
        result += `\t\t<td>${salary}</td>\n`;

        result += '\t</tr>\n';
    });

    result += '</table>'
    console.log(result);
}