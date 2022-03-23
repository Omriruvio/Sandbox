//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const shows = ['sopranos', 'spartacus', 'vikings', 'simpsons']
shows.forEach(show => console.log(show))
//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
const numbers = [1, 3, 5, 6, 7, 10]
const newNumbers = numbers.filter(x => x % 2 == 0);
console.log(newNumbers)

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
const secondLowestSecondHighest = (arr) => {
  const sorted = arr.sort((a, b) => a > b);
  alert(sorted[1]);
  alert(sorted[sorted.length - 2]);
}

secondLowestSecondHighest([1, 3, 5, 6, 7, 10])
