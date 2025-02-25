function createSortedList() {
    class MyList {
        constructor() {
            this.array = [];
            this.size = 0;
        }

        add(element) {
            this.array.push(element);
            this.size++;
            this.array.sort( (a, b) => a - b);
        }

        remove(index) {
            if (index >= 0 && index < this.array.length) {
                this.array.splice(index, 1);
                this.size--;
            }
        }

        get(index) {
            return this.array[index];
        }
    }

    return new MyList();
}
