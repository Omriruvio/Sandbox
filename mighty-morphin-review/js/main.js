// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
const holiday = 'passover'.toUpperCase()
console.log(holiday)


//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
const bob = 'something'
console.log(bob.slice(-3))

// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function substractfromhundred(a, b, c, d, e) {
  console.log( Math.abs(100 - a - b - c - d - e) )
}

substractfromhundred(10, 20, 30, 20, 10)


// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function lowesthighest (a, b, c) {
  console.log(Math.min(a, b, c))
  console.log(Math.max(a, b, c))
}

lowesthighest(10, 20, 30)

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
function headsTails () {
  let result = Math.random() > 0.5 ? 'heads' : 'tails'
  console.log(result)
}

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flipNTimes(n) {
  for (let i = 0; i < n; i++) {
    headsTails()
  }
}
