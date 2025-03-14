class Textbox {
    _value;

    constructor(selector, regex) {
        this.selector = selector;
        this.regex = regex;
        this._elements = Array.from(document.querySelectorAll(selector));
        this.__invalidSymbols = this.regex;
        this._value = this._elements.length > 0 ? this._elements[0].value : '';

        this._elements.forEach(el => {
            el.addEventListener('input', (event) => {
                this.value = event.target.value;
            });
        });
    }

    get value() {
        return this._value;
    }

    set value(newValue) {
        this._elements.forEach(el => el.value = newValue);
    }

    get elements() {
        return this._elements;
    }
 
    isValid() {
        return !this._invalidSymbols.test(this._value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = Array.from(document.getElementsByClassName('.textbox'));

inputs.forEach(input => {
    input.addEventListener('click',function(){console.log(textbox.value);}); 
});