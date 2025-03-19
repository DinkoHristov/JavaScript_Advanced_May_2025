function printDeckOfCards(cards) {
    function createCard(cardFace, cardSuite) {
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
                const suits = {
                    'S': '\u2660', // Spades
                    'H': '\u2665', // Hearts
                    'D': '\u2666', // Diamonds
                    'C': '\u2663'  // Clubs
                };
                if (!suits[value]) {
                    throw new Error('Invalid card suite!');
                }
                this._suite = suits[value];
            }

            toString() {
                return `${this.face}${this.suite}`;
            }
        }

        return new Card(cardFace, cardSuite);
    }

    let resultMessage = [];
    
    for (const card of cards) {
        let cardFace, cardSuite;
        if (card.length === 3) {
            cardFace = card.slice(0, 2);
            cardSuite = card[2];
        } else {
            cardFace = card[0];
            cardSuite = card[1];
        }

        try {
            resultMessage.push(createCard(cardFace, cardSuite).toString());
        } catch (error) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }

    console.log(resultMessage.join(' '));
}


printDeckOfCards(
    ['AS', '10D', 'KH', '2C']
);