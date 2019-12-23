## I love you, a little , a lot, passionately ... not at all

Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:

I love you
a little
a lot
passionately
madly
not at all
When the last petal was torn there were cries of excitement, dreams, surging thoughts and emotions.

Your goal in this kata is to determine which phrase the girls would say for a flower of a given number of petals, where nb_petals > 0.

### Solution

One of the possibility of solution for that task is to use conditional function in such a figure

function howMuchILoveYou(nbPetals) {

#### First condition is that whenewer the nbPetals will be divided by 6 with score equal 1 than reurned will be such a text etc.

    if( nbPetals % 6 === 1) {
    return 'I love you';
    } else if (nbPetals % 6 === 2) {
    return 'a little';
    } else if (nbPetals % 6 === 3) {
    return 'a lot';
    } else if (nbPetals % 6 === 4) {
    return 'passionately';
    } else if (nbPetals % 6 === 5) {
    return 'madly';
    } else if (nbPetals % 6 === 0) {
    return 'not at all';
    }

};
