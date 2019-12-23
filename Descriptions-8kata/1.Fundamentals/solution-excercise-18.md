## For UFC Fans (Total Beginners): Conor McGregor vs George Saint Pierre

This is a beginner friendly kata especially for UFC/MMA fans.

It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!

If the winner is George Saint Pierre he will obviously say:

"I am not impressed by your performance."
If the winner is Conor McGregor he will most undoubtedly say:

"I'd like to take this chance to apologize.. To absolutely NOBODY!"

## Solution

var quote = function(fighter) {

# Ternary function is used in here and that is it

return fighter.toLowerCase() === 'george saint pierre' ? "I am not impressed by your performance." :
"I'd like to take this chance to apologize.. To absolutely NOBODY!";
};