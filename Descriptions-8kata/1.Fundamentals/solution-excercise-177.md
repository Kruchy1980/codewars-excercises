# Define a card suit

You get any card as an argument. Your task is to return a suit of this card.

Our deck (is preloaded):

deck = ['2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣','A♣',
'2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦','A♦',
'2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥','A♥',
'2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠','A♠'];
('3♣') -> return 'clubs'
('3♦') -> return 'diamonds'
('3♥') -> return 'hearts'
('3♠') -> return 'spades'

### Solution

function defineSuit(card) {
// good luck

##### We can use the string.includes() method to solve the problem

return card.includes('♣') ? 'clubs'
: card.includes('♠') ? 'spades'
: card.includes('♦') ? 'diamonds'
: 'hearts';
}

### More about the string.includes() meyhod under url:

https://www.w3schools.com/jsref/jsref_includes_array.asp - Array.includes() method
