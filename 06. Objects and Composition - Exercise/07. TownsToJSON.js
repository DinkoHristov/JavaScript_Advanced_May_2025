function townsToJson(input) {
    let headers = input.shift().split(' ').filter(x => x !== '|');

    let results = [];
    for (let i = 0; i < input.length; i++) {
        let values = input[i].split('|').filter(x => x !== '|'&& x !== '');

        let obj  = {};
        obj[headers[0]] = values[0].trim();
        obj[headers[1]] = Number(Number(values[1].trim()).toFixed(2));
        obj[headers[2]] = Number(Number(values[2].trim()).toFixed(2));

        results.push(obj);
    }

    console.log(JSON.stringify(results));
}

townsToJson(
   ['| Town | Latitude | Longitude |',
'| Veliko Turnovo | 43.0757 | 25.6172 |',
'| Monatevideo | 34.50 | 56.11 |']      
);