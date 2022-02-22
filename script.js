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

// const words = require("random-words");

// const { list } = require("mocha/lib/reporters");
// 
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
// const dataArray = [5,10,15];
// const searchStringArray = [3,15,20];
// console.log(canNest(dataArray,searchStringArray));

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
//     searchStringArray = arr.filter(a=>a) //function checksums(a){if (a===true) return a}
//     return searchStringArray.length;}
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

// function toCamelCase(str) {
//   if (!str) return '';
//   let letters = str.split('');
//   letters.forEach((letter, i) => {
//     if (letter == '_' || letter == '-') {
//       letters.splice(i, 1);
//       letters[i] = letters[i].toUpperCase();
//     }
//   })
//   return letters.join('');
// }

// function filter_list(l) {
//   if (!l) return [];
//   let newArray = l.filter(x => { return (Number.isInteger(x)) })
//   return newArray;
// }

// function duplicateEncode(word) {
//   if (!word) return '';
//   const array = word.toLowerCase().split('');
//   const counts = {};
//   // map each character in array 
//   return array.map(char => {
//     if (!counts[char]) {
//       // if doesnt exist in object, iterate over array and 
//       counts[char] = 0;
//       array.forEach(x => { if (x == char) { ++counts[char] } })
//       //      update counts with character: count

//       //      check if character count is > 1 then 
//       if (counts[char] > 1) { return ')' } else { return '(' }
//       //          splice with either ( or )
//     } else {
//       // if already exists in object
//       //      splice with with )  
//       return ')'
//     }
//   }).join('');
// }

// function findOdd(A) {
//   const counts = {};
//   A.forEach(num => {
//     if (!counts[num]) { counts[num] = 1 } else { counts[num]++ }
//   })
//   for (const count of Object.keys(counts)) {
//     if (counts[count] % 2 != 0) { return parseInt(count) }
//   }
//   return 0;
// }

// const uniqueInOrder = function (iterable) {
//   return (typeof (iterable) == "string" ? iterable.split('') : iterable)
//     .filter((x, i, a) => {
//       return a[i] != a[i + 1] ? x : false;
//     })
// }

// function humanReadable(seconds) {
//   const h = Math.floor(seconds / 3600);
//   const secRemain = seconds % 3600;
//   const m = Math.floor(secRemain / 60);
//   const s = Math.floor(secRemain % 60);
//   return `${h < 10 ? `0${h}` : h}:${m < 10 ? `0${m}` : m}:${s < 10 ? `0${s}` : s}`;
// }

// // get hours 
// // get minutes = hours / 60
// // get seconds = minutes / 60 + hours % 60


// const maxSequence = function (arr) {
//   let biggestS = 0;
//   const checkSum = (start, end, origin) => {
//     const slice = origin.slice(start, end + 1);
//     let currentSliceSum = slice.reduce((a, b) => a + b);
//     if (currentSliceSum > biggestS) {
//       biggestS = currentSliceSum;
//     }
//   }
//   for (let i = 0; i < arr.length; i++) {
//     // arrs external low and high
//     let low = i;
//     let high = arr.length - 1;
//     while (low <= high) {
//       // arrs internal low and high until 1 cell left
//       checkSum(low, high, arr);
//       high--;
//     }
//   }
//   return (biggestS);
// }



// function bouncingBall(h, bounce, window) {
//   if (!(h > 0 && bounce > 0 && bounce < 1 && h > window)) return -1;
//   let passes = 1;
//   while (Math.floor(bounce * h) > 0) {
//     h *= bounce;
//     if (h > window) {
//       passes += 2;
//     }
//   }
//   return (passes);
// }

// You are given an array(list) strarr of strings and an integer k. Your task is to return the first longest string consisting of k consecutive strings taken in the array.

// Examples:
// strarr = ["tree", "foling", "trashy", "blue", "abcdef", "uvwxyz"], k = 2

// Concatenate the consecutive strings of strarr by 2, we get:

// treefoling   (length 10)  concatenation of strarr[0] and strarr[1]
// folingtrashy ("      12)  concatenation of strarr[1] and strarr[2]
// trashyblue   ("      10)  concatenation of strarr[2] and strarr[3]
// blueabcdef   ("      10)  concatenation of strarr[3] and strarr[4]
// abcdefuvwxyz ("      12)  concatenation of strarr[4] and strarr[5]

// Two strings are the longest: "folingtrashy" and "abcdefuvwxyz".
// The first that came is "folingtrashy" so 
// longest_consec(strarr, 2) should return "folingtrashy".

// In the same way:
// longest_consec(["zone", "abigail", "theta", "form", "libe", "zas", "theta", "abigail"], 2) --> "abigailtheta"


// my solution:
// function longestConsec(strarr, k) {
//   if (strarr.length == 0 || k > strarr.length || k <= 0) return '';
//   let longest = '';
//   for (let i = 0; i <= strarr.length - k; i++) {
//   // for i in  <= list.length - k
//     let concatted = '';
//     // init concattedstring;
//     for (let j=i; j < i + k; j++) {
//     //  from j=i < j+k-1? iterations -- I was wrong - it is (i < i + k)
//     //    current = array[j]
//       concatted += strarr[j];
//     //    concattedstring += current
//     }
//     //  compare and update global sum & longest concattedstring
//     longest = concatted.length > longest.length ? concatted : longest;
//   }
//   return longest;
// }

// other solutions:
// function longestConsec(strarr, k) {
//   const longest = "";
//   for(const i=0;k>0 && i<=strarr.length-k;i++){
//     const tempArray = strarr.slice(i,i+k);
//     const tempStr = tempArray.join("");
//     if(tempStr.length > longest.length){
//       longest = tempStr;
//     }
//   }
//   return longest;
// }

// function longestConsec(strarr, k) {
//   if (k <= 0 || k > strarr.length) {
//     return '';
//   }

//   return strarr.reduce((long, item, i) => {
//     const currString = strarr.slice(i, i + k).join('');
//     return (currString.length > long.length)
//       ? currString
//       : long;
//   }, '');
// }

// function anagrams(word, [...words]) {
//   const tempWord = word.split('').sort().join('');
//   const tempArray = words.map((w) => w.split('').sort().join(''));
//   return tempArray.map((w, i) => (w == tempWord) ? words[i] : null).filter(w => w != null);
// }

// const sort = (string) => string.split('').sort().join('');
// const anagrams = (word, words) => words.filter((_, i) => sort(word) == sort(words[i]));



// let result = [];
// for word in origin
//  for i in temparray
// if origin[word] == temparray[i];
// result.push(origin[word]);
// return result;


// word = input.split('');
// for each letter in word 
//   if word.indexOf(letter.toLowerCase()) == word.lastIndexOf(letter.toLowerCase()) return letter

// return 'None';

// function firstNonRepeatingLetter(s) {
//   const array = s.toLowerCase().split('');
//   for (let i = 0; i < array.length; i++) {
//     if (array.indexOf(array[i].toLowerCase()) == array.lastIndexOf(array[i].toLowerCase())) return s[i];
//   }
//   return '';
// }

// function add(x) {
//   return function add(y) {
//     return x+y;
//   }
// }

// const MORSE_CODE = {
//   '.-': 'A',
//   '-…': 'B',
//   '-.-.': 'C',
//   '-..': 'D',
//   '.': 'E',
//   '..-.': 'F',
//   '--.': 'G',
//   '....': 'H',
//   '..': 'I',
//   '.---': 'J',
//   '-.-': 'K',
//   '.-..': 'L',
//   '--': 'M',
//   '-.': 'N',
//   '---': 'O',
//   '.--.': 'P',
//   '--.-': 'Q',
//   '.-.': 'R',
//   '…': 'S',
//   '-': 'T',
//   '..-': 'U',
//   '…-': 'V',
//   '.--': 'W',
//   '-..-': 'X',
//   '-.--': 'Y',
//   '--..': 'Z',
//   '-----': '0',
//   '.----': '1',
//   '..---': '2',
//   '…--': '3',
//   '….-': '4',
//   '…..': '5',
//   '-….': '6',
//   '--…': '7',
//   '---..': '8',
//   '----.': '9',
// }

// const decodeMorse = function (morseCode) {
//   const words = morseCode.split('   ');
//   const result = [];
//   for (const word of words) {
//     let letters = word.split(' ');
//     for (const letter of letters) {
//       result.push(MORSE_CODE[letter]);
//     }
//     result.push(' ');
//   }
//   return result.join('').trim();
// }

// 1, 246, 2, 123, 3, 82, 6, 41 are the divisors of number 246. Squaring these divisors we get: 1, 60516, 4, 15129, 9, 6724, 36, 1681. The sum of these squares is 84100 which is 290 * 290.

// Task
// Find all integers between m and n (m and n integers with 1 <= m <= n) such that the sum of their squared divisors is itself a square.

// We will return an array of subarrays or of tuples (in C an array of Pair) or a string. The subarrays (or tuples or Pairs) will have two elements: first the number the squared divisors of which is a square and then the sum of the squared divisors.

// Example:
// list_squared(1, 250) --> [[1, 1], [42, 2500], [246, 84100]]
// list_squared(42, 250) --> [[42, 2500], [246, 84100]]

// function listSquared(m, n) {
//   const isNumberSquare = (num) => Number.isInteger(Math.sqrt(num));
//   // function that gets an array all of a number's divisors
//   const getDivisorArray = (num) => {
//     let divisorsArray = [];
//     for (let i = 1; i<=num; i++) {
//       if (num % i == 0) divisorsArray.push(i);
//     }
//     return divisorsArray;
//   }
//   const getDivisorSquaredSum = (num) => getDivisorArray(num).map(x => x*x).reduce((x, y) => x+y);
//   const results = [];
//   for (let i = m; i <= n; i++) {
//     const divisorSquaredSum = getDivisorSquaredSum(i);
//     if (isNumberSquare(divisorSquaredSum)) results.push([i, divisorSquaredSum]);
//   }
//   return results;
// }


// function scramble(str1, str2) {
//   const dataArray = str1.split('').sort();
//   const searchStringArray = str2.split('').sort();
//   return searchStringArray.every((letter)=> {
//     const searchLetterOccurrences = getOccurrences(letter, searchStringArray);
//     const dataLetterOccurences =  getOccurrences(letter, dataArray);
//     return (dataLetterOccurences >= searchLetterOccurrences);
//   }); 

//   function getOccurrences(letter, array) {
//     const first = array.indexOf(letter);
//     const last = array.lastIndexOf(letter);
//     const occurences = first == -1 ? 0 : first == 0 ? last + 1 : last - first + 1;
//     return occurences;
//   }
//  }



// function scramble(str1, str2) {
//   const dataDict = {};
//   const searchDict = {};
//   let result = false;
//   str1.split('').forEach((char) => {
//     if (!dataDict[char]) {dataDict[char] = 1} else dataDict[char]++;
//   })
//   str2.split('').forEach((char) => {
//     if (!searchDict[char]) {searchDict[char] = 1} else {searchDict[char]++};
//   })
//   for (letter in searchDict) {
//     if (!(dataDict[letter] >= searchDict[letter])) return false;
//   }
//   return true;
// }



// const stringPermutations = str => {
//   if (str.length <= 2) return str.length === 2 ? [str, str[1] + str[0]] : [str];
//   return str
//     .split('')
//     .reduce(
//       (acc, letter, i) =>
//         acc.concat(stringPermutations(str.slice(0, i) + str.slice(i + 1)).map(val => letter + val)),
//       []
//     );
// };

// function factorialize(num) {
//   let result = 1;
//   for (let i = num; i > 0; i--) result *= i;
//   return result;
// }

// function shuffle(string) {
//   const letters = string.split('');

//   for (let i = 0; i < string.length; i++) {
//     let tmp = letters[i];
//     let randomIndex = Math.floor(Math.random() * (string.length));
//     letters[i] = letters[randomIndex];
//     letters[randomIndex] = tmp;
//   }
//   return letters.join('');
// }



// function permutations (str, current = [], results = []) {
//   str = !(Array.isArray(str)) ? str.split('') : str;
//   if (str.length == 0) results.push(current.join(''));

//   for (let i = 0; i < str.length; i++) {
//     current.push(str[i]);
//     const newStr = str.filter((x, j) => i !== j );
//     permutations(newStr, current, results);
//     current.pop();
//   }

//   return [...new Set(results)];
// }


// function factorialize(num) {
//   if (num == 0) return 1;

//   return num * factorialize(num -1);
// }

// function removeNb (n) {
//   const results = [];
//   const arr = Array.from({length: n}, (x, i) => i + 1);
//   let total = (n * (n + 1)) / 2;

//   arr.forEach((a, i) => {
//     arr.forEach((b, i) => {
//       if (a * b == total - a - b) results.push([a, b]);
//     })
//   })
//   return results;
// }


// function Calculator() {
//   this.read = function () {
//     this.a = +prompt('a?', 0)
//     this.b = +prompt('b?', 0)
//   }
//   this.sum = function () {
//     return this.a + this.b;
//   }
//   this.mul = function () {
//     return this.a * this.b;
//   }
// }

// function Accumulator(startingValue) {
//   this.value = startingValue;
//   this.read = function () {
//     this.value += +prompt('New value?', 0);
//   }

// }

// function pillars(num_pill, dist, width) {
//   return num_pill == 1 ? 0 : ((num_pill - 1) * dist * 100 + (num_pill - 2) * width);
// }


// // Given two integers a and b, which can be positive or negative, 
// // find the sum of all the integers between
// //  and including them and return it. If the two numbers are equal return a or b.
// // Note: a and b are not ordered!

// function getSum(a, b) {
//   if (a == b) {
//     return a;
//   }

//   let low = a < b ? a : b;
//   const high = b > a ? b : a;

//   let sum = 0;
//   // loop from low until including high low <= high
//   for (let i = low; low <= high; low++) {
//     sum += low;
//   }

//   return sum;
// }

// function readNumber() {
//   do {
//     num = prompt('number?');
//     if (!num) return null;
//   } while (Number.isNaN(parseInt(num)));
//   return +num;
// }

// function randomInteger(min, max) {
//   let range = max - min + 1;
//   return Math.floor(Math.random() * Math.abs(range)) + min;
// }

// function ucFirst(str) {
//   return str ? str[0].toUpperCase() + str.slice(1) : str;
// }

// function checkSpam(str) {
//   return (str.toLowerCase().includes('xxx') || str.toLowerCase().includes('viagra'));
// }

// function truncate(str, maxlength) {
//   if (str.length > maxlength) {
//       return str.slice(0, maxlength - 1) + '…';
//   }
//   return str;
// }

// function extractCurrencyValue(str) {
//   return parseInt(str.slice(1));
// }

// function sumInput() {
//   let sum = 0;
//   while (true) {
//       let num = parseInt(prompt('Number to sum?'));
//       if (Number.isNaN(num)) {return sum};
//       sum += num;
//    } 
//   return sum;        
// }


// // manually sort an array (without using array.sort(sortFunction))

// sortIntegerArray = (arr) => {
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < arr[i-1]) {
//       const removed = arr.splice(i, 1);
//       for (let j = 0; j < i; j++) {
//         if (arr[j] >= removed[0]) {
//           arr.splice((j-1) < 0 ? 0 : j, 0, removed[0]);
//           break;
//         }
//       }
//     }
//   }
//   return arr;
// }

// Task:
// You are given two sorted lists, with distinct elements. Find the maximum path sum while traversing through the lists.

// Points to consider for a valid path:

// A path can start from either list, and can finish in either list.
// If there is an element which is present in both lists (regardless of its index in the lists), you can choose to change your path to the other list.
// Return only the maximum path sum.

// Example:
// [0, 2, 3, 7, 10, 12]
//    [1, 5, 7, 8]
// Both lists having only 7 as common element, the possible paths would be:

// 0->2->3->7->10->12 => 34
// 0->2->3->7->8      => 20
// 1->5->7->8         => 21
// 1->5->7->10->12    => 35 (maximum path)


// my original solution

// function maxSumPath(arr1,arr2){
//   const junctions = {};
//   let junctionMax = 0;
//   const arr1Sum = arr1.reduce((a, b) => {
//     let currentSum = a+b;
//     if (arr2.includes(b)) junctions[b] = [currentSum];
//     return currentSum;
//   }, 0)
//   const arr2Sum = arr2.reduce((a, b)=>{ 
//     let currentSum = a+b;
//     if (b in junctions) junctions[b][1] = currentSum;
//     return currentSum;
//   }, 0);
//   for (const junction in junctions) {
//     aToB = junctions[junction][0] + arr2Sum - junctions[junction][1];
//     bToA = junctions[junction][1] + arr1Sum - junctions[junction][0];
//     junctionMax = Math.max(junctionMax, aToB, bToA);
//   }

//   return Math.max(arr1Sum, arr2Sum, junctionMax);
// }

// working solution:

// function maxSumPath(arr1, arr2) {
//   let i = 0;
//   let j = 0; 
//   let max1 = 0;
//   let max2 = 0;
//   while ((i < arr1.length) && (j < arr2.length)) {
//     if (arr1[i] < arr2[j]) {
//       max1 += arr1[i];
//       i++
//     } else if (arr2[j] < arr1[i]) {
//       max2 += arr2[j];
//       j++
//     } else {
//       max1 += arr1[i];
//       max2 += arr2[j];
//       max1 = Math.max(max1, max2);
//       max2 = max1;
//       i++;
//       j++;
//     }
//   }
//   while (i < arr1.length) {
//     max1 += arr1[i];
//     i++;
//   }
//   while (j < arr2.length) {
//     max2 += arr2[j];
//     j++;
//   }
//   return Math.max(max1, max2)
// }


// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// function solution(num) {
//   if (num < 3) return 0;
//   let sum = 0;
//   for (let i = 3; i < num; i++) {
//     if (i % 3 == 0 || i % 5 == 0) {
//       sum += i;
//     } 
//   }
//   return sum;
// }

// Description:
// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"

// function spinWords(string){
//   return string.split(' ').map((word) => (word.length > 4) ? word.split('').reverse().join('') : word).join(' ');  
// }


// Translate border-left-width to borderLeftWidth
// importance: 5
// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// function camelize (str) {
//   return str.split('-').map((x, i, arr) => {
//       return (i != 0) ? x = x[0].toUpperCase() + x.slice(1) : x;
//       }).join('')
// }


// function Calculator() {
//   this.methods = {
//     '+': (a, b) => a + b,
//     '-': (a, b) => a - b
//   }

//   this.calculate = (str) => {
//     let split = str.split(' ')
//     let a = +split[0]
//     let op = split[1]
//     let b = +split[2]

//     if (!this.methods[op] || Number.isNaN(a) || Number.isNaN(b)) return NaN;

//     return this.methods[op](a, b);
//   }

//   this.addMethod = (op, func) => {
//     this.methods[op] = func;
//   }
// }

// function createPhoneNumber(numbers) {
//   const format = "(xxx) xxx-xxxx";

//   for (let i = 0; i < numbers.length; i++) {
//     format = format.replace('x', numbers[i]);
//   }

//   return format;
// }


// initiate new sentance
// split input to words, for each word:
  // move first letter to end + ay:
  // let i = 0;
  // while word[i] && word[i] includes punctuation
    // i++
  // const removed = word.split('').splice(i, 1);
  // sentance += word.append(removed).join('') + 'ay';

// return sentance 


// function pigIt (str) {
//   let sentance = '';
//   const words = str.split(' ');
//   words.forEach(word => {
//     let i = 0;
//     while (word[i] && !!word[i].match(/^[.,:!?]/)) i++;
//     if (word[i]) {
//       let splitword = word.split('');
//       let removed = splitword.splice(i, 1);
//       splitword.push(removed[0]);
//       sentance += splitword.join('') + 'ay ';
//     } else {
//       sentance += word + ' ';
//     }
//   });
//   return sentance.trim();
// }

// let users = [
//   {id: 'john', name: "John Smith", age: 20},
//   {id: 'ann', name: "Ann Smith", age: 24},
//   {id: 'pete', name: "Pete Peterson", age: 31},
// ];

// function createUserDB(users) {
//   return users.reduce((obj, user) => {obj[user.id] = user; return obj}, {})
// }
// console.log(createUserDB(users));


// const moveZeros = function (arr) {
//   const newArr = [];
//   const zeroes = [];
//   arr.forEach(x => {
//     if (x === 0) zeroes.push(x); else newArr.push(x);
//   })
//   return newArr.concat([...zeroes])
// }


// Write a function that takes a string of parentheses, and determines if the order 
// of the parentheses is valid. The function should return true if the string is valid, 
// and false if it's invalid.

// my solution

// function validParentheses(parens) {
//   let [ a, b ] = [ 0, 0 ];
//   let open = false;
//   const splitParens = parens.split('');
//   for (let i = 0; i < splitParens.length; i++) {
//     if (splitParens[i] === '(') a++;
//     if (splitParens[i] === ')' && !open) return false;
//     if (splitParens[i] === ')') b++;
//     open = a == b ? false : true; 
//   };
//   if (a == b && !open) return true;
//   return false;
// }

// nice solution
// function validParentheses(parens){
//   while(parens.indexOf('()') != -1){
//     parens = parens.replace('()', '');
//   }
//   return !parens.length;
// }


// get starting point (x, y)
// if starting point is falsey return []
// push starting point
// go right until no more right (if right move right, results.push[currentX][currentY], falsey it)
// go down until no more down (if down move down, results.push[currentX][currentY], falsey it)
// go left until no more left (if left move left, results.push[currentX][currentY], falsey it)
// go up until no more up  (if up  move up, results.push[currentX][currentY], falsey it) ELSE => starting point right
// pass the next starting point


// function snail(matrix, position = [0, 0], direction = 'right', results)

// base condition: no possible path

// if direction == right 
  // if right exists set currentPosition to right, results.push(currentPosition)
    // else snail(matrix, currentPosition, 'down', results)



// basic solution

// function snail(array) {
//   let results = [];

//   while (array.length > 0) {
//     results = results ? results.concat(array.shift()) : array.shift();
//     for (let i = 0; i < array.length; i++){
//       results.push(array[i].pop())
//     }
//     results = results.concat((array.pop() || []).reverse());
//     for (let i = array.length - 1; i >= 0; i--) {
//       results.push(array[i].shift());
//     }
//   }
//   return results;
// }

// cleaner basic solution:
// function snail(array) {
//   var vector = [];
//   while (array.length) {
//     vector.push(...array.shift());
//     array.map(row => vector.push(row.pop()));
//     array.reverse().map(row => row.reverse());
//   }
//   return vector;
// }

// clean solution with pointers

// snail = function(arr) {
//   var result = [];
//   var top = 0, bottom = arr.length-1;
//   var left = 0, right = arr[0].length-1;
  
//   do {
//     for (var i = left; i <= right; i++){result.push(arr[top][i])} // top row
//     for (var i = top+1; i <= bottom; i++){result.push(arr[i][right])} // right column
//     for (var i = right-1; i >= left; i--){result.push(arr[bottom][i])} // bottom row
//     for (var i = bottom-1; i > top; i--){result.push(arr[i][left])} // left column
//     top++; bottom--; left++; right--;
//   } while (top <= bottom);
  
//   return result;


// function aclean(arr) {
//   let results = new Map;
//   for (word of arr) {
//     let sorted = word.split('').sort().join('');
//     results.set(sorted, word);
//   }
//   return Array.from(results.keys());
// }

// function bclean(arr) {
//   let results = [];
//   for (word of arr) {
//     let sorted = word.split('').sort().join('');
//     results.push(sorted);
//   }

//   return [...new Set(results)]
// }

// function topSalary(obj) {
//   let max = 0;
//   let highest = null;
//   for (const [name, salary] of Object.entries(obj)) {
//       if (salary > max) {
//           max = salary;
//           highest = name;
//       }
//   }
//   return highest;
// }

function getLastDayOfMonth(year, month) {
  let date = new Date(year, month+1, 0);
  return date.getDate()
}

function secondsPassedToday() {
  const current = new Date();
  const dayStart = new Date();
  dayStart.setHours(0);
  dayStart.setMinutes(0);
  dayStart.setSeconds(0);
  return Math.round((current - dayStart) / 1000);
}

function secondsUntilTomorrow() {
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1)
  return (tomorrow - now) / 1000;
}

function formatDate(date) {
  const now = new Date();
  const diffInSeconds = (now - date) / 1000;
  switch (true) {
    case diffInSeconds < 1:
      return `right now`
    case (diffInSeconds < 60):
      return `${Math.round(diffInSeconds)} sec. ago`
    case (diffInSeconds < 3600):
      return `${Math.round(diffInSeconds / 60)} min. ago`
    default:
      // return date.toLocaleString().replaceAll('/', '.').replace(',', '').slice(0, -6);
      // [day, month, year, hours, minutes] = [ 
      //   date.getDate(), date.getMonth() + 1, date.getFullYear().slice(0, 3), date.getHours(), date.getMinutes()
      // ]
      return `${date.getDate() < 10 ? ('0' + date.getDate()): date.getDate()}.` +
             `${(date.getMonth() + 1) < 10 ? ('0' + (date.getMonth() + 1)): (date.getMonth() + 1)}.` +
             `${String(date.getUTCFullYear()).slice(-2)} ` +
             `${date.getHours() < 10 ? ('0' + date.getHours()): date.getHours()}:` +
             `${date.getMinutes() < 10 ? ('0' + date.getMinutes()): date.getMinutes()}`
  }
}


function dirReduc(arr){
  let vertical = '';
  let horizontal = '';
  const results = [];
  for (const direction of arr) {
    if (direction == 'NORTH' && vertical != 'SOUTH' && results[results.length -1] != 'SOUTH') {
      vertical = 'NORTH'
      results.push('NORTH');
      horizontal = null;
    } else if (direction == 'SOUTH' && vertical != 'NORTH' && results[results.length -1] != 'NORTH') {
      vertical = 'SOUTH';
      results.push('SOUTH');
      horizontal = null;
    } else if (direction == 'EAST' && horizontal != 'WEST' && results[results.length -1] != 'WEST') {
      horizontal = 'EAST';
      results.push('EAST');
      vertical = null;
    } else if (direction == 'WEST' && horizontal != 'EAST' && results[results.length -1] != 'EAST') {
      horizontal = 'WEST';
      results.push('WEST');
      vertical = null;
    } else {
      results.pop();
      if (direction == 'NORTH' || direction == 'SOUTH') vertical = null;
      if (direction == 'EAST' || direction == 'WEST') horizontal = null;
      
    }
  }
  return results;
}

// cleaner solution

function dirReduc(arr){
  const dir = {
    "NORTH": "SOUTH",
    "EAST": "WEST",
    "SOUTH": "NORTH",
    "WEST": "EAST"
  }
  
  const stack = []
  for (let i = 0; i < arr.length; i++) {
    if (stack[stack.length-1] === dir[arr[i]]) {
      stack.pop()
    } else {
      stack.push(arr[i])
    }
  }
  return stack
}

const maxSalaries = (salaries) => {
  let max = 0;
  let highest = '';
  for ([person, salary] of Object.entries(salaries)) {
      if (salary > max) {
        max = salary;
        highest = person;
      }
  }
  return highest;
}


const rotLetter = (letter) => {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  const result = alphabet[(alphabet.indexOf(letter.toLowerCase()) + 13) % alphabet.length];
  if (letter.toUpperCase() == letter) 
    return result.toUpperCase()
  else 
    return result
}
const isLetter = (letter) => /[a-zA-Z]/.test(letter);

function rot13(message) {
  return message.split('').map((letter) => {
    return !isLetter(letter) ? letter : rotLetter(letter)
  }).join('')
}




















