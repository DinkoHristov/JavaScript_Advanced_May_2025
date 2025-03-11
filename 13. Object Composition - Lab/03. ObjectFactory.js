function solve(input) {
    let commands = JSON.parse(input);

    let result = commands.reduce( (acc, el) => ({...acc, ...el}), {});

    return result;
}