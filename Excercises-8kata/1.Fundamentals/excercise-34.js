//A wolf in sheep's clothing

warnTheSheep = (queue) => {
  const wolfPosition=queue.indexOf('wolf')
  return wolfPosition===queue.length-1?"Pls go away and stop eating my sheep"
  :`Oi! Sheep number ${queue.length-1-wolfPosition}! You are about to be eaten by a wolf!`
}