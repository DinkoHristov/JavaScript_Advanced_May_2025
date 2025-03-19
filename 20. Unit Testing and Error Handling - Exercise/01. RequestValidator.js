function solve(httpObject) {
    let method = httpObject.method;
    let uri = httpObject.uri;
    let version = httpObject.version;
    let message = httpObject.message;

    if (method !== 'GET' && 
        method !== 'POST' && 
        method !== 'DELETE' && 
        method !== 'CONNECT' ||
        method === undefined) {
            throw new Error(`Invalid request header: Invalid Method`);
    }

    let uriRegex = /^(?:[a-zA-Z0-9.]+|\*)$/;
    if (!uriRegex.test(uri) || uri === undefined) {
        throw new Error(`Invalid request header: Invalid URI`);
    }

    if (version !== 'HTTP/0.9' &&
        version !== 'HTTP/1.0' &&
        version !== 'HTTP/1.1' &&
        version !== 'HTTP/2.0' ||
        version === undefined) {
            throw new Error(`Invalid request header: Invalid Version`);
    }

    let messageRegex = /^[^<>\\\&'"]*$/;
    if (!messageRegex.test(message) || message === undefined) {
        throw new Error(`Invalid request header: Invalid Message`);
    }

    return httpObject;
}

export { solve };