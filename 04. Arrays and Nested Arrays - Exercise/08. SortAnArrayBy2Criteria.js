function sortArrayByCriteria(array) {
    array
    .sort( (a, b) => a.length - b.length || a.toLowerCase().localeCompare(b.toLowerCase()))
    .forEach(element => console.log(element));
}