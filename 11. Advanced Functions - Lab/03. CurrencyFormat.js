function createFormatter(separator, symbol, symbolFirst, formatterFunc) {
    return function(value) {
        return formatterFunc(separator, symbol, symbolFirst, value);
    }
}