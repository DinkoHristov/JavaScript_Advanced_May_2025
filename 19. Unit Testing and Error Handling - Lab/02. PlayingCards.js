function solve(cardFace, cardSuite) {
    class Card {
        constructor(face, suite) {
            const validCardFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
            
            if (!validCardFaces.includes(face)) {
                throw new Error('Invalid card face!');
            }

            this.face = face;
            this.suite = suite;
        }

        get suite() {
            return this._suite;
        }

        set suite(value) {
            if (value === 'S') {
                this._suite = '\u2660';
            } else if (value === 'H') {
                this._suite = '\u2665';
            } else if (value === 'D') {
                this._suite = '\u2666';
            } else if (value === 'C') {
                this._suite = '\u2663';
            }
        }

        toString() {
            return `${this.face}${this.suite}`;
        }
    }

    return new Card(cardFace, cardSuite);
}

let card = solve('2', 'C');
console.log(card.toString());