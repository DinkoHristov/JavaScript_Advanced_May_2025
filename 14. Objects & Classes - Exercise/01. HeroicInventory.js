function solve(input) {
    let result = [];

    input.forEach(element => {
        let [name, level, items] = element.split(' / ');

        result.push({
            name,
            level: Number(level),
            items: items ? items.split(', ') : [],
        });
    });

    console.log(JSON.stringify(result));
}