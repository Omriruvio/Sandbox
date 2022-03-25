//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
const numArr = [1, 4, 56, 6]
console.log(numArr.reduce((a, b) => a+b))

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
function squared(arr) {
  return arr.map(x => x * x)
}

console.log(squared(numArr))

//Create a function that takes string
//Print the reverse of that string to the console
function reverse(str) {
  console.log(str.reverse())
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(str) {
  console.log(`string is ${str !== reverse(str) ? 'not' : ''} a palindrome`)
}
