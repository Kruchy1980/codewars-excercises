// Define a card suit

function defineSuit(card) {
    // good luck
    return card.includes('♣') ? 'clubs' :
        card.includes('♠') ? 'spades' :
        card.includes('♦') ? 'diamonds' :
        'hearts';
}