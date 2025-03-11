class List {
    #list = [];

    constructor() {
        this.size = 0;
    }

    add(element) {
        this.#list.push(element);
        this.size = this.#list.length;;
    }

    remove(index) {
        if (index >= 0 && index < this.#list.length) {
            this.#list.sort( (a, b) => a - b);

            this.#list.splice(index, 1);
            this.size = this.#list.length;;
        }
    }

    get(index) {
        if (index >= 0 && index < this.#list.length) {
            this.#list.sort( (a, b) => a - b);

            return this.#list[index];
        }
    }
}
