function listOfNames(names) {
    names
    .sort( (a, b) => a.localeCompare(b))
    .forEach( (name, position) => console.log(`${position + 1}.${name}`));
}