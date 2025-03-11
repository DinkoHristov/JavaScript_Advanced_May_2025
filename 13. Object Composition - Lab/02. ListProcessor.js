function solve(commands) {
    function processList() {
        let list = [];

        return {
            add: text => list.push(text), 
            remove: function(text) {
                while(list.some(x => x == text)) {
                    list.splice(list.indexOf(text), 1);
                }
            },
            print: () => console.log(list.join(',')),
        }
    }

    let listProcessor = processList();

    commands.forEach(currCommand => {
        let [command, text] = currCommand.split(' ');
        listProcessor[command](text);
    });
}