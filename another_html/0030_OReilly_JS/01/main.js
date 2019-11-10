
'use strict'
function draw (n) {
  if (n < 1 || n > 52) throw new Error('you must draw between 1 and 52 cards!')
  const deck = []
  for (const suit of ['\u2660', '\u2663', '\u2665', '\u2666']) {
    for (const rank of 'A,2,3,4,5,6,7,8,9,10,J,Q,K'.split(',')) {
      deck.push(`${rank}${suit}`)
    }
  }
  const hand = []
  while (n) {
    hand.push(deck.splice(Math.floor(Math.random() * deck.length), 1)[0])
    n--
  }
  return hand
}
console.log('Your hand:')
console.log(draw(5))
