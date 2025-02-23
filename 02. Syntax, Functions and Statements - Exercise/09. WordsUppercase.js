function wordsUppercase(input) {
    let words = input
    .split(/[\s,!.?;:"'(){}\[\]-]+/)
    .filter(word => word.length > 0)
    .map(word => word.toUpperCase())
    .join(', ');

    console.log(words);
}