// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
const drink = '         ZeroCoke    '
console.log(drink.trim());

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
const multiword = 'Some sort of apple'
console.log(`string ${multiword.includes('apple') ? 'does' : 'does not'} contain apple`);

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rps () {
  const rand = Math.random()
  return  rand < 0.33 ? 'rock' : rand < 0.66 ? 'paper' : 'scissors'
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function didIwinRps (choice) {
  const botRoll = rps();
  choice = choice.toLowerCase();
  if (choice == 'rock' && botRoll == 'paper') return 'LOST'
  if (choice == 'rock' && botRoll == 'scissors') return 'WON'
  if (choice == 'rock' && botRoll == 'rock') return 'TIE'
  if (choice == 'paper' && botRoll == 'paper') return 'TIE'
  if (choice == 'paper' && botRoll == 'rock') return 'WON'
  if (choice == 'paper' && botRoll == 'scissors') return 'LOST'
  if (choice == 'scissors' && botRoll == 'rock') return 'LOST'
  if (choice == 'scissors' && botRoll == 'paper') return 'WON'
  if (choice == 'scissors' && botRoll == 'scissors') return 'TIE'

  // console.log( rps() == choice ? 'WON!' : 'LOST' )
}

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function didIwinThose (choices) {
  for (const choice of choices) {
    console.log(didIwinRps(choice))
  }
}

