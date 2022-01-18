// class Polygon {
//   constructor(...sides) {
//     this.sides = sides;
//   }
//   // Method
//   *getSides() {
//     for(const side of this.sides){
//       yield side;
//     }
//   }
// }
//
// const pentagon = new Polygon(1,2,3,4,5,6,7,8);
//
// newArray = [...pentagon.getSides()] // [1,2,3,4,5]
// console.log(newArray);

// function babyShark() {
//   const sharks = ['Baby', 'Mommy', 'Daddy', 'Grandma', 'Grandpa'];
//   const doo = ' doo'.repeat(6);
//   const letsGoHunt = "Let's go hunt" + doo + '\n';
//   const letsGoHuntChunk = letsGoHunt.repeat(3);
//   const finale = "Let's go hunt!"
//   return (sharks.map(shark => {
//     const dooLine = shark + ' shark' + doo + '\n';
//     const dooChunk = dooLine.repeat(3);
//     const lastLine = shark + ' shark!';
//     return dooChunk + lastLine;
//   }).join('\n') + '\n' + letsGoHuntChunk + finale);
// }


// const person = {
//     firstName: 'Omri',
//     lastName: 'Ruvio',
//     favoriteFood: 'Borek',
//     address: {
//         state: 'Israel',
//         city: 'Harish',
//         street: 'Lotem',
//         number: '31'
//     }
// }
//
// person.fullName = [person.firstName, person.lastName];
//
// formatName = ([a, b]) => 'First name: ' + a + '\nLast name: ' + b
//
// console.log(formatName(person.fullName));
//
// const {firstName: firstNameOut, lastName: lastNameOut, address: {state: stateOut}} = person;
//
// console.log(firstNameOut)
// console.log(lastNameOut)
// console.log(stateOut)
//
// // const karen = person
// const karen = {...person}
//
// karen.firstName = 'Karen';
//
// console.log(karen.firstName);
// console.log(person.firstName);

// const numbers = [1,2,3,4,5,6,7,8,9];
//
// const numbers2 = numbers.map((number) => number*2);
//
// console.log(numbers2);
//
//
// const somedate = new Date(2013, 11, 24);
//
// if ((somedate.getDate() === 24) && (somedate.getMonth() === 11)) {
//     console.log("It's christmas eve.") }
//
// // const isChristmas = d => /12-24/.test(d.toJSON())
// //
// // if (isChristmas(somedate)) {
// //     console.log("It's christmas even checked by regex&JSON.")
// // }

// const base2ToDecimal = (number) => {
//     number = number.toString();
//     for (let i = 0; i <= number.length; i++) {
//     if (number[i] > 1) {
//         throw new Error('Number is not base2');
//     }
// }
//     const binary = [];
//     for (let i=1; i<=32768; i=i*2) { console.log(i); binary.push(i) }
//     let binCount = 0;
//     let sum = 0;
//     for (let i=number.length -1 ; i>=0; i--) {
//         sum+= (number[i]*binary[binCount]);
//         binCount++
//     }
//     return sum;
// }
//
// console.log(base2ToDecimal(111110100011111));
//
// console.log(parseInt('11111010001', 2));

// const binary=(d)=>d.toString(2); // convert decimal to binary
//
// console.log(binary(10));

// const canNest=(a,b)=>Math.min(...a)>Math.min(...b)&&Math.max(...a)<Math.max(...b) //checks if array1 can be nested in array2
//
// const arr1 = [5,10,15];
// const arr2 = [3,15,20];
// console.log(canNest(arr1,arr2));

// const array = [true, false, true, true, true, false, true];
// function countTrue(arr) {
//     let sum=0;
//     for (i of array) {
//         if (i) {sum++}
//     }
//     return sum;}
//
// console.log(countTrue(array));
//
// console.log(array.filter(bool=>bool).length);

// const array = [true, false, true, true, true, false, true];
// // return how many 'true's in array
// function countTrue(arr) {
//     arr2 = arr.filter(a=>a) //function checksums(a){if (a===true) return a}
//     return arr2.length;}
//
// console.log(countTrue(array));

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     // compareAge({age, name}) { // object destructuring
//     // 	if ((age) > (this.age)) {return (name + ' is older than me.')}
//     //     if ((age) < (this.age)) {return (name + ' is younger than me.')}
//     //     return (name + ' is the same age me.')
//     // }
//
//     compareAge=o=> `${o.name} is ${o.age === this.age ? "the same age as" : `${o.age > this.age ? 'old' : 'young'}er than`} me.`
//     compareAge2=o=> o.name + ' is ' + ['older than ','the same age as ' ,'younger than '][1+Math.sign(this.age-o.age)] + 'me.';
//     compareAge3=o=>`${o.name} is ${o.age===this.age?"the same age as":`${o.age>this.age?"old":"young"}er than`} me.`
//
// }
// p1 = new Person("Samuel", 24)
// p2 = new Person("Joel", 36)
// p3 = new Person("Lily", 24)
//
// console.log(p1.compareAge3(p3));

// // The omri way
// numberSquares=n=> {
//     if (n===0) return 0;
//     let comboArray = [0];
//     for (let i=1; i<=n; i++) {
//         let current = i*i + comboArray[i-1]
//         comboArray.push(current)
//     }
//     return comboArray[n];
// }
//
////Fancy formula for sum of n squares of natural numbers
// numberSquares2=n=>n*(n+1)*(n*2+1)/6;
//
// console.log(numberSquares(4));
// console.log(numberSquares(4));

// whichIsLarger=(f,g)=>f()==g()?'neither':f()>g()?'f':'g'


// // username validation funciton
// function usernameValidation(str) {
//     if (str.length<4 || str.length>25) throw new Error ('Username must be between 4 and 25 characters long.')
//     if (!/[a-zA-Z]/.test(str[0])) throw new Error('Username must start with a letter.')
//     if (!/^\w+$/.test(str)) throw new Error('Username must not contain special characters.')
//     if (str[str.length-1]==='_') throw new Error('Cannot end username with underscore.')
//
//     // if ((str.length<4 || str.length>25) || (!/[a-zA-Z]/.test(str[0])) || (!/^\w+$/.test(str)) || (str[str.length-1]==='_')) {return false}
//     // return true;
//
//     return str;
//
// }
// const omri = 'aa_';
// console.log(usernameValidation(omri));



// // function takes a sorted array and an integer, checks if integer exists in array and returns its position or -1 if does not exist.
// const binarySearch = function (a, x) {  
//     let low = 0;
//     let high = a.length - 1;
//     while (low<=high) {
//         let mid = Math.floor(low + (high -low)/2);
//         if (a[mid]=== x) { return mid }
//         else if (a[mid] > x) { high = mid - 1 }
//         else low = mid + 1;
//     }
//     return (-1);
// }

// function searchSorted(a, x) {
//     let result = binarySearch(a, x);
//     if (result != -1) { console.log('Number ' + x + ' was found at position ' + result +'.')}
//     else console.log('Number was not found in array.')
// }

// const array = [1,5,8,11,15,17,20,25,27,29,35,37,40,45,49,50,55];
// const x = 1;

// searchSorted(array, x);

// const recursiveBinarySearch = function (a, low, high, x) {
//   if (low > high) return -1;
//   let mid = Math.floor(low + (high - low) / 2);
//   if (x === a[mid]) return mid;
//   if (x > a[mid]) {
//       return recursiveBinarySearch(a, mid+1, high, x);
//   }
//   return recursiveBinarySearch(a, low, mid-1, x);
  
// }

// function recursiveSearchSorted(a, x) {
//   let low = 0;
//   let high = a.length -1;
//   let result = recursiveBinarySearch(a, low, high, x);
//   if (result != -1) { console.log('Number ' + x + ' was found at position ' + result +'.')}
//   else console.log('Number was not found in array.')
// }

// recursiveSearchSorted(array, x);


// let userInput = prompt('H, Q or 9? What is your requirement?');
// let bottleSong = '99 bottles of beer on the wall, 99 bottles of beer. \nTake one down and pass it around, 98 bottles of beer on the wall.\n98 bottles of beer on the wall, 98 bottles of beer.\nTake one down and pass it around, 97 bottles of beer on the wall.\n97 bottles of beer on the wall, 97 bottles of beer.\nTake one down and pass it around, 96 bottles of beer on the wall.\n...\n...\n...\n2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.';

// function HQ9 (code) {
//   if (code === null || code === undefined) return;
//   else if (code.toString() === 'H') {
//     return 'Hello World!';
//   } else if (code.toString() === 'Q') {
//     return code;
//   } else if (code.toString() === '9') {
//     let songBody = '';
//     let i = 99;
//     while (i >= 3) {
//       let currentChunk = `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${(i-1)} bottles of beer on the wall.\n`;      
//       i--;
//       songBody += currentChunk;
//     }
//     while (i >= 0) {
//       currentChunk = `${i == 0 ? 'No more' : i} ${i == 1 ? 'bottle' : 'bottles'} of beer on the wall, ${i==0 ? 'no more' : i} ${i==1 ? 'bottle' : 'bottles'} of beer.\n`
//       currentChunk += `${i == 0 ? 'Go to the store and buy some more, 99 bottles of beer on the wall.' : ''}`;
//       if (i != 0) { 
//         currentChunk +=  `Take one down and pass it around, ${(i == 2) ? '1 bottle' : (i == 1) ? 'no more bottles' : ''} of beer on the wall.\n`
//       }
      
//       songBody += currentChunk;
//       i--;
//     }

//     return songBody;
//   }
//   return;
// }

// console.log(HQ9('9'));

// // my way
// function closeCompare (a, b, margin) { 
//   // margin = (margin ?? 0);
//   let distance;
//   if (margin === null || margin === undefined) margin = 0;
//   if ((a >= 0 && b >= 0) || (a < 0 && b < 0)) {
//     distance = Math.abs(Math.abs(a) - Math.abs(b))}
//   else {distance = Math.abs(a - b)};
//   if (margin >= distance) return 0;
//   if (a < b) return -1;
//   if (a > b) return 1;
// }

// // the smarter way
// function closeCompare(a, b, margin = 0){
//   return Math.abs(a - b) <= margin? 0: Math.sign(a - b);
// }

// //another smart way
// function closeCompare(a, b, margin = 0) {
//   if (a < b - margin) return -1;
//   if (a - margin > b) return 1;
//   return 0;
// }

// // my way
// function numberToPower(number, power){
//   if (power === 0) return 1;
//   let result = number;
//   for (let i = 1; i<power; i++) {
//     result = result*number;
//   }
//   return result;
// }

// // recursive way
// function numberToPower(number, power){
//   if (power === 0) return 1;
//   return number * numberToPower(number, power - 1)
// }

// // recursive short
// const numberToPower = (number,power) => power > 0 ? number * numberToPower(number,power-1) : 1;


// // take an array and make an object containing items and number of recursions of each item as key:value

// function occurenceCount(array) {
//    let result = array.reduce(function (previous, item) {
//     if (!previous[item]) previous[item] = 1;
//     else previous[item] += 1;
//     return previous;
//   }, {})
//   return result;
// }

// const fruits = ["apple", "banana", "orange", "banana", "apple", "banana"];
// console.log(occurenceCount(fruits));


// const chessChampions = [
// 	"Wilhelm Steinitz",
//   "Emanuel Lasker",
//   "Jose Capablanca",
//   "Alexander Alekhine",
//   "Machgielis Euwe",
//   "Mikhail Botvinnik",
//   "Vasily Smyslov",
//   "Mikhail Tal",
//   "Tigran Petrosian",
//   "Boris Spassky",
//   "Robert Fischer",
//   "Anatoly Karpov",
//   "Garry Kasparov",
//   "Vladimir Kramnik",
//   "Viswanathan Anand",
//   "Magnus Carlsen"
// ];

// chessChampions.sort(function (a, b) {
//   if (a.split(' ')[1].toLowerCase > b.split(' ')[1].toLowerCase) return 1;
//   if (a.split(' ')[1].toLowerCase < b.split(' ')[1].toLowerCase) return -1;
//   return 0;
// });

// console.log(chessChampions);


// // printPrimes is a function that takes n and prints all prime numbers up to and including n
// // my way
// function checkPrime(number) {
//   let res = true;
//   for (let i=2; i < number; i++) {
//     if (number % i == 0) {res=false; break;} else {res=true}
//   }
//   return res;
// }

// function printPrimes(n) {
//   for (let i=1; i<=n; i++) {
//     if (checkPrime(i)) console.log(i);
//   }
// }

// function printMorePrimes (n) {
//   nextPrime:
//   for (let i = 2; i <= n; i++) {
//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     } 
//     console.log(i);
//   }
// }

// let arr = [1,2,3,4,5,6,7,8,9,10,11,12,13];
// // let arr = ['apple', 'orange', 'banana', 'tomato', 'cabbage']
// // console.log(arr.map((item, i) => { return {index: i, object: item}}))
// console.log(arr.reduce((prev, current, i) => {
//   return prev+current;
// }, ))



// const array = ["apple", "banana", "orange", "banana", "apple", "banana"];

// const randomBetweenAny = (a, b) => {
//   let min = a<b?a:b;
//   let max = a>b?a:b;
//   let range = max - min + 1;
//   return Math.floor(Math.random()*Math.abs(range) + min);
// }

// console.log(randomBetweenAny(10, -5));

function toCamelCase(str){
  if (!str) return '';
  let letters = str.split('');
  letters.forEach((letter, i) => {
    if (letter == '_' || letter == '-') {
      letters.splice(i, 1);
      letters[i] = letters[i].toUpperCase();
    }
  })
  return letters.join('');
}

function filter_list(l) {
  if (!l) return [];
  let newArray = l.filter(x => {return (Number.isInteger(x))})
  return newArray;
}

function duplicateEncode(word){
  if (!word) return '';
  const array = word.toLowerCase().split('');
  const counts = {};
  // map each character in array 
  return array.map(char => {
    if (!counts[char]) {
      // if doesnt exist in object, iterate over array and 
      counts[char] = 0;
      array.forEach(x => { if (x == char) {++counts[char]} })
      //      update counts with character: count
      
      //      check if character count is > 1 then 
      if (counts[char] > 1) {return ')'} else {return '('}
      //          splice with either ( or )
    } else {
      // if already exists in object
      //      splice with with )  
      return ')'
    } 
  }).join('');
}

function findOdd(A) {
  const counts = {};
  A.forEach(num => {
    if (!counts[num]) {counts[num] = 1} else {counts[num]++}
  })
  for (const count of Object.keys(counts)) {
    if (counts[count] % 2 != 0) { return parseInt(count) }
  }
  return 0;
}

var uniqueInOrder=function(iterable){
  return (typeof(iterable) == "string" ? iterable.split('') : iterable)
  .filter((x, i, a) => {
    return a[i] != a[i+1] ? x : false;
  })
}

function humanReadable (seconds) {
  const h = Math.floor(seconds / 3600);
  const secRemain = seconds % 3600;
  const m = Math.floor(secRemain / 60);
  const s = Math.floor(secRemain % 60);
  return `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
}

// get hours 
// get minutes = hours / 60
// get seconds = minutes / 60 + hours % 60


var maxSequence = function(arr){
  let biggestS = 0;
  const checkSum = (start, end, origin) => {
    const slice = origin.slice(start, end+1);
    let currentSliceSum = slice.reduce((a, b)=> a+b);
    if (currentSliceSum > biggestS) {
      biggestS = currentSliceSum;
    }
  }
  for (let i = 0; i < arr.length; i++) {
  // sets external low and high
    let low = i;
    let high = arr.length -1;
    while (low <= high) {
      // sets internal low and high until 1 cell left
      checkSum(low, high, arr);
      high--;
    }
  }
  return(biggestS);
}




















































































































