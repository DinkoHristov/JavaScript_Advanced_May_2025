function solution(input = '') {
    return {
        append(strValue) {
            input += strValue;
        },

        removeStart(n) {
            input = input.slice(n);
        },

        removeEnd(n) {
            input = input.slice(0, -n);
        },

        print() {
            console.log(input);
        }
    }
}