function printDeckOfCards(cards) {

    function makeCard(face, suit) {
        const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const validSuits = ['S', 'H', 'D', 'C'];

        if (!validFaces.includes(face)) {
            throw new Error("Invalid Face");
        }

        if (!validSuits.includes(suit)) {
            throw new Error("Invalid Suit");
        }

        let card = {
            face: face,
            suit: suit,
            toString: ()=> {
                let suitSymbols = {
                    'S': '\u2660',
                    'H': '\u2665',
                    'D': '\u2666',
                    'C': '\u2663'
                };
                return card.face + suitSymbols[card.suit];
            }
        };
        return card;
    }

    let deck = [];

    for (let card of cards) {
        let f = card.substr(0, card.length - 1);
        let s = card[card.length - 1];

        try {
            deck.push(makeCard(f, s));
        }
        catch (err) {
            console.log(`Invalid card: ${card}`);
            return;
        }
    }
    console.log(deck.join(' '));
}

printDeckOfCards(['AS', '10D', 'KH', '2C']);
printDeckOfCards(['5S', '3D', 'QD', '1C']);