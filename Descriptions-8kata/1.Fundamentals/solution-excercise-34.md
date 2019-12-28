# A wolf in sheep's clothing

Wolves have been reintroduced to Great Britain. You are a sheep farmer, and are now plagued by wolves which pretend to be sheep. Fortunately, you are good at spotting them.

Warn the sheep in front of the wolf that it is about to be eaten. Remember that you are standing at the front of the queue which is at the end of the array:

[sheep, sheep, sheep, sheep, sheep, wolf, sheep, sheep]      (YOU ARE HERE AT THE FRONT OF THE QUEUE)
   7      6      5      4      3            2      1

If the wolf is the closest animal to you, return "Pls go away and stop eating my sheep". Otherwise, return "Oi! Sheep number N! You are about to be eaten by a wolf!" where N is the sheep's position in the queue.

Note: there will always be exactly one wolf in the array.

### Solution

warnTheSheep = (queue) => {
#### First declare the variable of wolf position in array
  const wolfPosition=queue.indexOf('wolf')
##### If wolf position is first of list - here the end of array than "Pls go away and stop eating my sheep", else we need to check the sheep position which will be eaten still remember to check it from the end of array and the sheep from the end of aray will be eaten but the place is counted from the wolf position :)
  return wolfPosition===queue.length-1?"Pls go away and stop eating my sheep"
  :`Oi! Sheep number ${queue.length-1-wolfPosition}! You are about to be eaten by a wolf!`
}