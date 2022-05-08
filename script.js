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

// function getLastDayOfMonth(year, month) {
//   let date = new Date(year, month+1, 0);
//   return date.getDate()
// }

// function secondsPassedToday() {
//   const current = new Date();
//   const dayStart = new Date();
//   dayStart.setHours(0);
//   dayStart.setMinutes(0);
//   dayStart.setSeconds(0);
//   return Math.round((current - dayStart) / 1000);
// }

// function secondsUntilTomorrow() {
//   const now = new Date();
//   const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1)
//   return (tomorrow - now) / 1000;
// }

// function formatDate(date) {
//   const now = new Date();
//   const diffInSeconds = (now - date) / 1000;
//   switch (true) {
//     case diffInSeconds < 1:
//       return `right now`
//     case (diffInSeconds < 60):
//       return `${Math.round(diffInSeconds)} sec. ago`
//     case (diffInSeconds < 3600):
//       return `${Math.round(diffInSeconds / 60)} min. ago`
//     default:
//       // return date.toLocaleString().replaceAll('/', '.').replace(',', '').slice(0, -6);
//       // [day, month, year, hours, minutes] = [
//       //   date.getDate(), date.getMonth() + 1, date.getFullYear().slice(0, 3), date.getHours(), date.getMinutes()
//       // ]
//       return `${date.getDate() < 10 ? ('0' + date.getDate()): date.getDate()}.` +
//              `${(date.getMonth() + 1) < 10 ? ('0' + (date.getMonth() + 1)): (date.getMonth() + 1)}.` +
//              `${String(date.getUTCFullYear()).slice(-2)} ` +
//              `${date.getHours() < 10 ? ('0' + date.getHours()): date.getHours()}:` +
//              `${date.getMinutes() < 10 ? ('0' + date.getMinutes()): date.getMinutes()}`
//   }
// }

// function dirReduc(arr){
//   let vertical = '';
//   let horizontal = '';
//   const results = [];
//   for (const direction of arr) {
//     if (direction == 'NORTH' && vertical != 'SOUTH' && results[results.length -1] != 'SOUTH') {
//       vertical = 'NORTH'
//       results.push('NORTH');
//       horizontal = null;
//     } else if (direction == 'SOUTH' && vertical != 'NORTH' && results[results.length -1] != 'NORTH') {
//       vertical = 'SOUTH';
//       results.push('SOUTH');
//       horizontal = null;
//     } else if (direction == 'EAST' && horizontal != 'WEST' && results[results.length -1] != 'WEST') {
//       horizontal = 'EAST';
//       results.push('EAST');
//       vertical = null;
//     } else if (direction == 'WEST' && horizontal != 'EAST' && results[results.length -1] != 'EAST') {
//       horizontal = 'WEST';
//       results.push('WEST');
//       vertical = null;
//     } else {
//       results.pop();
//       if (direction == 'NORTH' || direction == 'SOUTH') vertical = null;
//       if (direction == 'EAST' || direction == 'WEST') horizontal = null;

//     }
//   }
//   return results;
// }

// // cleaner solution

// function dirReduc(arr){
//   const dir = {
//     "NORTH": "SOUTH",
//     "EAST": "WEST",
//     "SOUTH": "NORTH",
//     "WEST": "EAST"
//   }

//   const stack = []
//   for (let i = 0; i < arr.length; i++) {
//     if (stack[stack.length-1] === dir[arr[i]]) {
//       stack.pop()
//     } else {
//       stack.push(arr[i])
//     }
//   }
//   return stack
// }

// const maxSalaries = (salaries) => {
//   let max = 0;
//   let highest = '';
//   for ([person, salary] of Object.entries(salaries)) {
//       if (salary > max) {
//         max = salary;
//         highest = person;
//       }
//   }
//   return highest;
// }

// const rotLetter = (letter) => {
//   const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//   const result = alphabet[(alphabet.indexOf(letter.toLowerCase()) + 13) % alphabet.length];
//   if (letter.toUpperCase() == letter)
//     return result.toUpperCase()
//   else
//     return result
// }
// const isLetter = (letter) => /[a-zA-Z]/.test(letter);

// function rot13(message) {
//   return message.split('').map((letter) => {
//     return !isLetter(letter) ? letter : rotLetter(letter)
//   }).join('')
// }

// const calc = (num1, num2, op) => {
//   switch (op) {
//     case '+':
//       return num1 + num2;
//     case '-':
//       return num1 - num2;
//     case '*':
//       return num1 * num2;
//     case '/':
//       return Math.floor(num1 / num2)
//     default:
//       alert('Invalid operand.')
//   }
// }

// const zero = ([op, num] = []) => op ? calc(0, num, op) : 0
// const one = ([op, num] = []) => op ? calc(1, num, op) : 1
// const two = ([op, num] = []) => op ? calc(2, num, op) : 2
// const three = ([op, num] = []) => op ? calc(3, num, op) : 3
// const four = ([op, num] = []) => op ? calc(4, num, op) : 4
// const five = ([op, num] = []) => op ? calc(5, num, op) : 5
// const six = ([op, num] = []) => op ? calc(6, num, op) : 6
// const seven = ([op, num] = []) => op ? calc(7, num, op) : 7
// const eight = ([op, num] = []) => op ? calc(8, num, op) : 8
// const nine = ([op, num] = []) => op ? calc(9, num, op) : 9

// const plus = (num) => ['+', num]
// const minus = (num) => ['-', num]
// const times = (num) => ['*', num]
// const dividedBy = (num) => ['/', num]

// Description:
// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

// It must start with a hashtag (#).
// All words must have their first letter capitalized.
// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.

// my solution:

// function getWords(str) {
//   let words = [];
//   let i = 0;
//   let word = '';
//   while (i < str.length) {
//       word = '';
//       while (str[i] && str[i] != ' ') {
//           word += str[i];
//           i++;
//       }
//       if (word.length > 0) words.push(word.split('').join(''));
//       i++;
//   }
//   return words;
// }

// function titleCase(arr){
//   return arr.map((word) => {
//     word = word.split('');
//     word[0] = word[0].toUpperCase();
//     return word.join('')
//   })
// }

// function generateHashtag (str) {
//   const finalWord = titleCase(getWords(str)).join('');
//   return finalWord.length >= 140 || str.trim() == '' || str == '#' ? false : `#${finalWord}`
// }

// cleaner solution:

// const capitalize = (word) => word[0].toUpperCase() + word.slice(1);

// const generateHashtag = (str) => {
//   return str ? `#${str.split(' ').map(capitalize).join('')}` : false;
// }

// Given a number, say prod (for product), we search two Fibonacci numbers F(n) and F(n+1) verifying

// F(n) * F(n+1) = prod.

// Your function productFib takes an integer (prod) and returns an array:

// [F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
// depending on the language if F(n) * F(n+1) = prod.

// If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prodyou will return

// [F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
// F(n) being the smallest one such as F(n) * F(n+1) > prod.

// // my solution
// function productFib(prod) {
//   let fib = [0, 1];
//   let i = 0;
//   while ((fib[i] * fib[i+1]) <= prod) {
//     fib[i+2] = fib[i] + fib[i+1];
//     i++;
//   }
//   const result = (fib[i-1] * fib[i] == prod);
//   return result ? [fib[i-1], fib[i], result] : [fib[i], fib[i+1], result]
// }

// // cleaned solution
// function productFib(prod){
//   let [a, b] = [0, 1];
//   while(a * b < prod) [a, b] = [b, a + b];
//   return [a, b, a * b === prod];
// }

// // tests
// productFib(4895)/* , [55, 89, true]) */
// productFib(5895)/* , [89, 144, false]) */
// productFib(74049690)/* , [6765, 10946, true]) */
// productFib(84049690)/* , [10946, 17711, false]) */
// productFib(193864606)/* , [10946, 17711, true]) */
// productFib(447577)/* , [610, 987, false]) */
// productFib(602070)/* , [610, 987, true]) */

// Object.values(' 0  22 12'.split(' ').reduce((obj, x) => {
//   if (x != '') {
//     obj[x] = (x.split('').reduce((a, b) => {return Number(a) + Number(b)}, 0))
//   }
//   return obj;
// },{})).sort((a, b) => a - b)

// This is the kata for below solution: https://www.codewars.com/kata/55c6126177c9441a570000cc
// Solutions: https://www.codewars.com/kata/55c6126177c9441a570000cc/solutions/javascript
// IMPORTANT

// function orderWeight(strng) {
//   const sumString = (str) => str.split('').reduce((a, b) => (Number(a) + Number(b)), 0);
//   return (strng.split(' ').reduce((arr, x) => {
//     if (x != '') arr.push([x, (sumString(x))])
//     return arr;
//   },[]))
//   .sort((a, b) => a[1] == b[1] ? String(a[0]) > String(b[0]) ? 1 : -1 : a[1] - b[1])
//   .map(x => x[0])
//   .join(' ')
// }

// function sumDigits(n) {
//   const nArr = String(n).split('');
//   return nArr.reduce((a, b) => a + b);
// }

// function digital_root(n) {
//   return String(n).split('').length == 1 ? n : digital_root(String(n).split('').reduce((a, b)=> +a + +b))
// }

// function shiftedDiff(first,second){
//   function rotate(str) {
//     str = Array.isArray(str) ? str : str.split('')
//     str.unshift(str.pop())
//     return str;
//   }
//   if (first == second) return 0;
//   for (let i = 0; i < first.length; i++) {
//     first = rotate(first);
//     if (first.join('') == second) return i+1;
//   }
//   return -1;
// }

// function whatCentury(year)
// {
//   const suffixes = ['th', 'st', 'nd', 'rd'];
//   const prefix = Number(year.slice(0, 2));
//   const that = (Number(String(prefix)[1]) + 1) % 10;
//   const suffix = prefix < 20 && prefix > 3 ? 'th' : suffixes[that] || 'th';
//   if (year % 1000 == 0) return prefix+'th';
//   return `${prefix + 1}${suffix}`;
// }

// function toAndFrom(a, b, t) {
//   if (a == b) return 0
//   let forward = a < b;
//   let low = a < b ? a : b;
//   let high = a > b ? a : b;
//   let i = forward ? low : high;
//   while (t > 0) {
//     forward = i == high ? false : i == low ? true : forward;
//     i = forward ? ++i : --i;
//     t--
//   }
//   return i;
// }

// A person is moving along a straight line. Initially he is at point A. He goes to point B from A with speed equal to 1 meter per second. Immediately after reaching B he turns around and heads to A from B with the same speed. After reaching point A he turns around once again and heads to B. etc.

// We need an algorithm that identifies the location of the person at any given moment in time(argument t).

// function toAndFrom(a, b, t) {
//   const low = a < b ? a : b;
//   const high = a > b ? a : b;
//   const range = high - low;
//   let isForward = Math.floor(t / range) % 2 == 0;
//   if (b < a) isForward = !isForward
//   const diff = t % range
//   return isForward ? low + diff : high -diff;
// }

// function deleteNth(arr,n){
//   const count = {};
//   return arr.filter(x => {
//     count[x] = count[x] ? ++count[x] : 1;
//     return count[x] <= n
//   })
// }

// const persistence = (num, count = 0) => num < 10 ? count : persistence(String(num).split('').reduce((a, b) => a * b), ++count)

// let exp =  '5 1 2 + 4 * + 3 -'.split(" ")

// exp = exp.map(i =>  {return Number(i) ? Number(i) : i})

// console.log(calculate(exp))

// function calculate (exp) {
//   let calc = {
//     "+" : (a, b) => a + b,
//     "-" : (a, b) => a - b,
//     "*" : (a, b) => a * b,
//     "/" : (a, b) => a / b
//   }

//   let stack = []

//   exp.forEach(op => {
//     stack.push (
//       calc[op]
//         ? calc[op](...stack.splice(-2))
//         : op
//       )
//   });

//   return stack
// }

// function calc(expr) {
//   const arr = expr.split(' ').map(x => Number(x) ? Number(x) : x);
//   const stack = [];
//   const calc = {
//     '+': (b, a) => a + b,
//     '-': (b, a) => a - b,
//     '*': (b, a) => a * b,
//     '/': (b, a) => a / b
//   }

//   arr.forEach(x => {
//     stack.push(
//      calc[x] ? calc[x](stack.pop(), stack.pop()) : x
//     )
//   })

//   return stack[0] || 0;
// }

// console.log(calc('5 1 2 + 4 * + 3 -')) // 14

// function duplicateCount(text) {
//   return Object.values(text.toLowerCase().split('').reduce((acc, x) => {
//     acc[x] ? acc[x]++ : acc[x] = 1;
//     return acc;
//   }, {})).filter(x => x > 1).length
// }

// // You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

// function findOutlier(arr) {
//   const isEven = arr.slice(0, 3).filter(x => x % 2 == 0).length >= 2;
//   return arr.find(x => isEven ? x % 2 != 0 : x % 2 == 0)
// }

// function convertNum(num) {
//   const isEven = x => x % 2 == 0;
//   return String(num).split('').reduce((acc, x) => {
//     const value =
//       (acc.length == 0) ? x :
//         (isEven(acc[acc.length - 1]) && isEven(x)) ? ['-', x] :
//           !(isEven(acc[acc.length - 1]) || isEven(x)) ? ['*', x] : x;
//     acc = acc.concat(value);
//     return acc;
//   }, [])
// }

// console.log(convertNum(126879)) // [1, 2, -, 6, -, 8, 7, *, 9]

// function isValidWalk(walk) {
//   if (walk.length != 10) return false;
//   let sums = { 'n': 0, 's': 0, 'e': 0, 'w': 0 }
//   sums = walk.reduce((obj, x) => {
//     if (obj[x]) { obj[x]++ } else { obj[x] = 1 }
//     return obj
//   }, sums)
//   return sums['n'] - sums['s'] == 0 && sums['w'] - sums['e'] == 0
// }

// console.log(!isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e']))

// function getAlphabetArray (isLowerCase = true) {
//   const ASCII_TABLE_LOWERCASE_A_POSITION = 97
//   const ASCII_TABLE_UPPERCASE_A_POSITION = 65
//   const ALPHABET_LENGTH = 26
//   asciiPosition = isLowerCase ? ASCII_TABLE_LOWERCASE_A_POSITION : ASCII_TABLE_UPPERCASE_A_POSITION
//   return Array.from({length: ALPHABET_LENGTH}, (_, i) => String.fromCharCode(i + asciiPosition))
//   // ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
// }

// function alphabetPosition(text) {
//   const abc = getAlphabetArray();
//   text = text.toLowerCase();
//   return text.split('').reduce((acc, x) => {
//     let result = abc.includes(x) ? abc.indexOf(x) + 1 : false
//     if (result) acc.push(result)
//     return acc
//   }, []).join(' ')
// }

// console.log(alphabetPosition("The sunset sets at twelve o' clock."))

// function order(words){
//   return words.split(' ').reduce((res, x) => {
//     let pos = x.match(/[0-9]+/g)
//     res[pos-1] = x;
//     return res;
//   }, []).join(' ')
// }

// console.log(order("is2 Thi1s T4est 3a"))

// const sumArray = arr => arr.reduce((a, b) => a + b, 0);
// const sumOfSliceBefore = (arr, i) => sumArray(arr.slice(0, i));
// const sumOfSliceAfter = (arr, i) => sumArray(arr.slice(i+1));

// function findEvenIndex(arr){
//   return arr.findIndex((x, i, arr) => (sumOfSliceBefore(arr, i)) == sumOfSliceAfter(arr, i))
// }

// console.log(findEvenIndex([1,100,50,-51,1,1]))

// function formatDuration (seconds) {
//   const totalYears = Math.floor(seconds / 60 / 60 / 24 / 365);
//   const remainderDays = Math.floor(seconds / 60 / 60 / 24) % 365;
//   const remainderHours = Math.floor(seconds / 60 / 60) % 24;
//   const remainderMinutes = Math.floor(seconds / 60) % 60
//   const remainderSeconds = seconds % 60;

//   const format = (time, string) => time == 1 ? `${time} ${string.slice(0, -1)}` : time > 1 ? `${time} ${string}` : 0;

//   const results = [format(totalYears, 'years'),
//                    format(remainderDays, 'days'),
//                    format(remainderHours, 'hours'),
//                    format(remainderMinutes, 'minutes'),
//                    format(remainderSeconds, 'seconds')
//                   ].filter(x => x != 0)

//   return results.reverse().reduce((acc, x, i) => {
//     if (i == 0 && results.length > 1) {acc.push(x, ' and ')} else if (i != results.length -1) {acc.push(x, ', ')} else {acc.push(x)}
//     return acc;
//   }, []).reverse().join('') || 'now';
// }

// console.log(formatDuration(3662))

// function amountOfPages(summary){
//   let pages = 1;
//   let sum = 0;
//   while (sum < summary) {
//     sum += String(pages++).length;
//   }
//   return pages - 1;
// }

// function domainName(url){
//   const split = url.slice(0, 4) == 'http' ? url.split('//')[1].split('.') : url.split('.');
//   return split[0] == 'www' ? split[1] : split[0]
// }

// function domainName(url){
//   url = url.replace("https://", '');
//   url = url.replace("http://", '');
//   url = url.replace("www.", '');
//   return url.split('.')[0];
// };

// console.log(domainName("http://github.com/carbonfive/raygun"))
// console.log(domainName("http://www.zombie-bites.com"))
// console.log(domainName("https://www.cnet.com"))
// console.log(domainName("http://google.com"))
// console.log(domainName("http://google.co.jp"))
// console.log(domainName("www.xakep.ru"))
// console.log(domainName("https://youtube.com"))

// function cakes(recipe, available) {
//   const results = {}
//   for (const [ing, amount] of Object.entries(recipe)) {
//     if (available[ing]) {
//       results[ing] = Math.floor(available[ing] / amount)
//     }
//   }
//   return (Object.keys(results).length == Object.keys(recipe).length) ? (Math.min(...Object.values(results))) : 0
// }

// function cakes(recipe, available) {
//   return Object.keys(recipe).reduce(function(val, ingredient) {
//     return Math.min(Math.floor(available[ingredient] / recipe[ingredient] || 0), val)
//   }, Infinity)
// }

// console.log(cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}))
// console.log(cakes({cream: 1, flour: 3, sugar: 1, milk: 1, oil: 1, eggs: 1}, {sugar: 1, eggs: 1, flour: 3, cream: 1, oil: 1, milk: 1}))
// console.log(cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}))

// function twoSum(numbers, target) {
//   const result = [];
//   for (let i = 0; i < numbers.length; i++) {
//     for (let j = 0; j < numbers.length; j++) {
//       if (i != j && numbers[i] + numbers[j] == target) return [j, i];
//     }
//   }
// }

// console.log(twoSum([1234, 5678, 9012], 14690));

// function tribonacci(sig, n) {
//   const result = [...sig];
//   if (n < 3) return sig.slice(0, n);
//   for (let i = 0; i < n - 3; i++) {
//     result.push(result.slice(i, i + 3).reduce((a, b) => a + b));
//   }
//   return result;
// }
// // returns a Xibonnaci sequence according to the provided signature and required length
// // kata - https://www.codewars.com/kata/556e0fccc392c527f20000c5
// function fibX(sig, n) {
//   const result = [...sig];
//   if (n < sig.length) return sig.slice(0, n);
//   for (let i = 0; i < n - sig.length; i++) {
//     result.push(result.slice(i, i + sig.length).reduce((a, b) => a + b));
//   }
//   return result;
// }

// console.log(fibX([0, 0, 0, 0, 1], 15));

// // kata - https://www.codewars.com/kata/5287e858c6b5a9678200083c

// function narcissistic(value) {
//   return (
//     String(value)
//       .split('')
//       .reduce((acc, x) => {
//         acc = Number(acc) + x ** String(value).length;
//         return acc;
//       }, 0) === value
//   );
// }
// console.log(narcissistic(371));

// kata - https://www.codewars.com/kata/545cedaa9943f7fe7b000048

// function isPangram(string) {
//   return 'abcdefghijklmnopqrstuvwxyz'.split('').every((x) => string.toLowerCase().includes(x));
// }

// function isPangram(string) {
//   return new Set(string.toLowerCase().replace(/[^\a-z]+/g, '')).size === 26;
// }

// console.log(isPangram('The quick brown fox jumps over the lazy dog.'), true);
// console.log(isPangram('This is not a pangram.'), false);

// kata - https://www.codewars.com/kata/515de9ae9dcfc28eb6000001

// function solution(str) {
//   const arr = str.split('');
//   const result = [];
//   const isEven = arr.length % 2 == 0;
//   if (!isEven) result.push(`${arr.pop()}_`);
//   while (arr.length > 1) {
//     result.push(`${arr.pop()}${arr.pop()}`.split('').reverse().join(''));
//   }
//   return result.reverse();
// }

// function solution(str) {
//   arr = [];
//   for (let i = 0; i < str.length; i += 2) {
//     second = str[i + 1] || '_';
//     arr.push(str[i] + second);
//   }
//   return arr;
// }

// console.log(solution('abcdef'), ['ab', 'cd', 'ef']);
// console.log(solution('abcdefg'), ['ab', 'cd', 'ef', 'g_']);

// kata - https://www.codewars.com/kata/585d7d5adb20cf33cb000235

// function findUniq(arr) {
//   const newArr = arr.filter((x) => x != arr[0]);
//   return newArr.length == 1 ? newArr[0] : arr[0];
// }

// function findUniq(arr) {
//   return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
// }

// // takes a string such as '1hr20min' or '1 hour 20 min 30seconds'
// // returns an array with separate time types and values:
// // below solution is not optimal, would be better to:
// //  join the string into a single piece and parse by slicing between numbers
// const parseToNumbersAndWords = (str) => {
//   const result = [];
//   str = str.split(' ');
//   while (str.length > 0) {
//     if (!Number.isNaN(Number(str[0]))) {
//       //if array item is integer shift and push
//       result.push(str.shift());
//     } else if (!Number.isNaN(Number(str[0][0]))) {
//       // if first character is integer remove it and push then get the word, remove it and push
//       let num = parseInt(str[0], 10);
//       let length = String(num).length;
//       let slice = str[0].slice(0, length);
//       str[0] = str[0].slice(length);
//       result.push(slice);

//       // result.push(str.shift()); // unneccesary?

//       // number is removed now remove the word
//       const firstDigit = str[0].match(/\d/);
//       const firstDigitIndex = str[0].indexOf(firstDigit);
//       if (firstDigitIndex === -1) {
//         result.push(str.shift());
//         continue;
//       }

//       let stringSlice = str[0].slice(0, firstDigitIndex);
//       str[0] = str[0].slice(firstDigitIndex);
//       result.push(stringSlice);
//     } else {
//       // if the array item starts with a word, get the word, remove and push it
//       const firstDigit = str[0].match(/\d/); // Gives the first digit in the string
//       const firstDigitIndex = str[0].indexOf(firstDigit);
//       if (firstDigitIndex === -1) {
//         result.push(str.shift());
//         continue;
//       }
//       if (Array.isArray(str)) {
//         result.push(str[0].splice(0, firstDigitIndex - 1));
//       } else {
//         result.push(
//           str
//             .split('')
//             .splice(0, firstDigitIndex - 1)
//             .join('')
//         );
//       }
//     }
//   }
//   return result;
// };

// console.log(parseToNumbersAndWords('1hr20min')); // ['1', 'hr', '20', 'min']
// console.log(parseToNumbersAndWords('1 hour 20 min 30seconds')); // ['1', 'hour', '20', 'min', '30', 'seconds']
// console.log(parseToNumbersAndWords('1hr20min')); // ['1', 'hr', '20', 'min']
// console.log(parseToNumbersAndWords('1hr20mins 30s')); // ['1', 'hr', '20', 'mins', '30', 's']
// console.log(parseToNumbersAndWords('1h20m90s')); // ['1', 'h', '20', 'm', '90', 's']
// console.log(parseToNumbersAndWords('0h2m40s')); // ['0', 'h', '2', 'm', '40', 's']
// console.log(parseToNumbersAndWords('0h0m0s')); // ['0', 'h', '0', 'm', '0', 's']
// console.log(parseToNumbersAndWords('25h0m0s')); // ['25', 'h', '0', 'm', '0', 's']
// console.log(parseToNumbersAndWords('1h')); // ['1', 'h']
// console.log(parseToNumbersAndWords('1 hour 20 min 30seconds')); // ['1', 'hour', '20', 'min', '30', 'seconds']

// function isPrime(num) {
//   if (num < 2) return false;
//   for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// kata - https://www.codewars.com/kata/550498447451fbbd7600041c

// function comp(a, b) {
//   if (!a || !b) return false;
//   return a.every((x) => {
//     let index = b.indexOf(Math.pow(x, 2));
//     if (index !== -1) {
//       b.splice(index, 1);
//       return true;
//     } else return false;
//   });
// }

// const arr1 = [121, 144, 19, 161, 19, 144, 19, 11];
// const arr2 = [11 * 11, 121 * 121, 144 * 144, 19 * 19, 161 * 161, 19 * 19, 144 * 144, 19 * 19];
// console.log(comp(arr1, arr2));

// kata - https://www.codewars.com/kata/5839edaa6754d6fec10000a2

// function findMissingLetter(array) {
//   let found;
//   array.forEach((x, i) => {
//     if (i !== 0) {
//       const previous = array[i - 1].charCodeAt(0) + 1;
//       const current = array[i].charCodeAt(0);
//       if (current !== previous) {
//         found = String.fromCharCode(previous);
//       }
//     }
//   });
//   return found || 0;
// }

// P - Params: String representing time: "10:10"
// R - Returns: "Mirrored" time
// E -
// P - Pseudo code:
// Convert string to workable value
// chunk = Convert time to minutes
// substract chunk from minuts in 12 hours (720?)
// convert chunk back to HH:MM ->
// (hours) - Math.floor of divide by 60 - if 12 then 00
// (minutes) - modulo 60
// return string of HH:MM

// kata - https://www.codewars.com/kata/56548dad6dae7b8756000037

// function WhatIsTheTime(str) {
//   let hours = Number(str.split(':')[0]);
//   hours = hours === 12 ? 0 : hours;
//   const minutes = Number(str.split(':')[1]);
//   const totalMinutes = hours * 60 + minutes;
//   const diff = 720 - totalMinutes;
//   let resultHours = String(Math.floor(diff / 60));
//   resultHours = resultHours === '0' ? '12' : resultHours;
//   resultHours = resultHours.length < 2 ? resultHours.padStart(2, 0) : resultHours;
//   let resultMinutes = String(diff % 60);
//   resultMinutes = resultMinutes.length < 2 ? resultMinutes.padStart(2, 0) : resultMinutes;
//   return [resultHours, resultMinutes].join(':');
// }

// Number.prototype.mod = function (n) {
//   return ((this % n) + n) % n;
// };

// function whatIsTheTime(mirrored) {
//   const [mh, mm] = mirrored.split(':').map(Number);
//   const m = (-mm).mod(60);
//   const h = (-mh - (m && 1)).mod(12) || 12;
//   return [h, m].map((n) => ('0' + n).slice(-2)).join(':');
// }

// console.log(WhatIsTheTime('12:02'), '11:58');
// console.log(WhatIsTheTime('01:50'), '10:10');
// console.log(WhatIsTheTime('11:58'), '12:02');

// kata - https://www.codewars.com/kata/540954232a3259755d000039

// const fridayTheThirteenths = (startYear, endYear = startYear) => {
//   const getFirstFriday = (year) => {
//     const isFriday = (date) => date.getDay() === 5;
//     let thisDate = new Date(year, 0, 1);
//     while (!isFriday(thisDate)) {
//       thisDate = new Date(thisDate.getFullYear(), thisDate.getMonth(), thisDate.getDate() + 1);
//     }
//     return thisDate;
//   };

//   const formatDate = (date) => `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;

//   const startDate = new Date(startYear, 0, 1);
//   const endDate = new Date(endYear + 1, 0, 0);
//   let currentFriday = getFirstFriday(startDate.getFullYear());
//   const results = [];
//   while (currentFriday.getFullYear() <= endDate.getFullYear()) {
//     if (currentFriday.getDate() === 13) results.push(formatDate(currentFriday));
//     currentFriday = new Date(currentFriday.getFullYear(), currentFriday.getMonth(), currentFriday.getDate() + 7);
//   }

//   return results.join(' ');
// };

// const otherFridayTheThirteenths = (start, end = start) =>
//   [...Array((end - start + 1) * 12).keys()]
//     .filter((val) => new Date(start, val, 13).getDay() === 5)
//     .map((val) => `${(val % 12) + 1}/13/${(start + val / 12) ^ 0}`)
//     .join(` `);

// console.log(fridayTheThirteenths(2005));

// let company = {
//   // the same object, compressed for brevity
//   sales: [
//     { name: 'John', salary: 1000 },
//     { name: 'Alice', salary: 1600 },
//   ],
//   development: {
//     sites: [
//       { name: 'Peter', salary: 2000 },
//       { name: 'Alex', salary: 1800 },
//     ],
//     internals: [{ name: 'Jack', salary: 1300 }],
//   },
// };

// function sumDept(dept) {
//   if (Array.isArray(dept)) {
//     return dept.reduce((a, b) => a + b.salary, 0);
//   } else {
//     let sum = 0;
//     for (const subDept in dept) {
//       sum += sumDept(dept[subDept]);
//     }
//     return sum;
//   }
// }

// console.log(sumDept(company));

// kata - https://www.codewars.com/kata/578aa45ee9fd15ff4600090d
//You will be given an array of numbers. You have to sort the odd
//numbers in ascending order while leaving the even numbers
//at their original positions.

// function sortArray(arr) {
//   const cache = [];
//   arr.forEach((element, i) => {
//     if (element % 2 !== 0) {
//       cache.push(element);
//       arr[i] = '_';
//     }
//   });
//   cache.sort((a, b) => a - b);
//   arr.forEach((x, i) => {
//     if (x === '_') arr[i] = cache.shift();
//   });
//   return arr;
// }

// function sortArrayBetter(array) {
//   const odd = array.filter((x) => x % 2).sort((a, b) => a - b);
//   return array.map((x) => (x % 2 ? odd.shift() : x));
// }

// console.log(sortArray([5, 3, 2, 8, 1, 4]), [1, 3, 2, 8, 5, 4]);
// console.log(sortArray([5, 3, 1, 8, 0]), [1, 3, 5, 8, 0]);
// console.log(sortArray([]), []);

// // recursive sum to n
// function sumTo(n) {
//   return n < 1 ? n : sumTo(n - 1) + n;
// }

// // iterative sum to n
// function iterativeSumTo(n) {
//   let sum = 0;
//   for (let i = 1; i <= n; i++) {
//     sum += i;
//   }
//   return sum;
// }

// // arithmetic sum to n
// function arithmeticSum(n) {
//   // n(a1 + an)/2
//   return ((1 + n) * n) / 2;
// }

// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null,
//       },
//     },
//   },
// };

// // recursive
// function printList(list) {
//   console.log(list.value);
//   if (list.next) printList(list.next);
// }

// // iterative
// function iterativePrintList(list) {
//   let tmp = list;
//   while (tmp) {
//     console.log(tmp.value);
//     tmp = tmp.next;
//   }
// }

// // reverse recursive
// function reverseRecursive(list) {
//   if (list.next) reverseRecursive(list.next);
//   console.log(list.value);
// }

// // reverse iterative
// function reverseIterative(list) {
//   const cache = [];
//   let tmp = list;
//   while (tmp) {
//     cache.push(tmp.value);
//     tmp = tmp.next;
//   }
//   for (let i = cache.length - 1; i >= 0; i--) {
//     console.log(cache[i]);
//   }
// }

// kata - https://www.codewars.com/kata/5270d0d18625160ada0000e4
// function score(dice) {
//   let sum = 0;

//   const subSum = (dig, single = 0, multi = 100) => {
//     let tmpSum = 0;
//     let tmp = [...dice].filter((x) => x === dig);
//     let count = tmp.length;
//     // handle multi
//     if (count >= 3) {
//       tmpSum += dig * multi;
//       count -= 3;
//     }
//     // handle single
//     if (count > 0) tmpSum += dig * single * count;
//     sum += tmpSum;
//   };
//   subSum(1, 100, 1000);
//   subSum(5, 10, 100);
//   subSum(2);
//   subSum(3);
//   subSum(4);
//   subSum(6);
//   return sum;
// }

// function getProperty(obj, path) {
//   let temp = obj;
//   const paths = path.split('.');

//   for (let i = 0; i < paths.length; i++) {
//     temp = temp[paths[i]];
//   }

//   console.log(temp);
// }

// const object = {
//   one: 1,
//   two: {
//     three: 3,
//     five: {
//       six: 6,
//     },
//   },
//   four: 4,
// };

// getProperty(object, 'one'); // 1
// getProperty(object, 'two.five.six'); // 6

// function getPropertyBetter(obj, path) {
//   return path.split('.').reduce(function (res, key) {
//     if (res === undefined || res === null) {
//       console.log('There is no such property');
//       return undefined;
//     }

//     return res[key];
//   }, obj);
// }

// kata - https://www.codewars.com/kata/576757b1df89ecf5bd00073b

// function towerBuilder(nFloors) {
//   const structure = [];
//   const result = [];
//   let i = 1;
//   while (structure.length < nFloors) {
//     structure.push(i <= 1 ? 1 : i);
//     i += 2;
//   }
//   let padding = 0;
//   for (let i = nFloors - 1; i >= 0; i--) {
//     result.push(`${' '.repeat(padding / 2)}${'*'.repeat(structure[i])}${' '.repeat(padding / 2)}`);
//     padding += 2;
//   }
//   return result.reverse();
// }

// function towerBuilderBetter(n) {
//   return Array.from({ length: n }, function (v, k) {
//     const spaces = ' '.repeat(n - k - 1);
//     return spaces + '*'.repeat(k + k + 1) + spaces;
//   });
// }

// console.log(towerBuilder(1), ['*']);
// console.log(towerBuilder(2), [' * ', '***']);
// console.log(towerBuilder(3), ['  *  ', ' *** ', '*****']);

// Parameters - number of slices of bread
// Return - X bread or bread sandwitch string concatted
// Examples
// Pseudo code

// kata - https://www.codewars.com/kata/622a6a822494ab004b2c68d2

// function slicesToName(n) {
//   let result = '';
//   if (n <= 1 || !n || Number.isNaN(Number(n))) return null;
//   if (n % 2 === 0) {
//     result += 'sandwich '.repeat(n / 2);
//   } else if (n >= 3) {
//     result = 'bread sandwich ';
//     n -= 3;
//     while (n > 0) {
//       result += 'sandwich ';
//       n -= 2;
//     }
//   }
//   return result.trim();
// }

// // console.log(slicesToName(false), null)
// // console.log(slicesToName(1), null)
// // console.log(slicesToName(-2), null)
// // console.log(slicesToName('bread'), null)
// // console.log(slicesToName(2), 'sandwich')
// // console.log(slicesToName(3), 'bread sandwich')
// // console.log(slicesToName(11),'bread sandwich sandwich sandwich sandwich sandwich')
// // console.log(slicesToName(8), 'sandwich sandwich sandwich sandwich')

// // P R E P
// // Params - String with bread sandwich / sandwich
// // Return - Number of bread slices

// function nameToSlices(name) {
//   let numberOfSlices = 0;
//   let error = false;
//   if (!name || Number.isInteger(name)) return null;
//   const arr = name.split(' ');
//   if (arr[0] === 'bread' && arr[1] === 'sandwich') {
//     numberOfSlices += 3;
//     arr.splice(0, 2);
//   }
//   numberOfSlices += arr.reduce((sum, x) => {
//     if (x !== 'sandwich') error = true;
//     sum += 2;
//     return sum;
//   }, 0);

//   return !error ? numberOfSlices : null;
// }

// // console.log(nameToSlices(12), null)
// // console.log(nameToSlices(""), null);
// // console.log(nameToSlices("sandwich sandwich bread sandwich"), null);
// // console.log(nameToSlices('sand wich'), null)
// // console.log(nameToSlices('bread sandwich'), 3)
// // console.log(nameToSlices('sandwich sandwich sandwich sandwich'), 8)
// // console.log(nameToSlices('bread'), null)
// // console.log(nameToSlices('bread sandwich sandwich sandwich'), 7)
// // console.log(nameToSlices('bread sandwich bread sandwich'), null)

// P R E P
// Parameters - string containing words separated by whitespace
// Return - highest scoring word according to alphabetical value

// function high(x) {
//   return x.split(' ').reduce(
//     (highest, word) => {
//       let sum = [...word].reduce((sum, letter) => sum + letter.charCodeAt(0) - 96, 0);
//       if (sum > highest[1]) highest = [word, sum];
//       return highest;
//     },
//     ['', 0]
//   )[0];
// }

// console.log(high('man i need a taxi up to ubud'), 'taxi');
// console.log(high('what time are we climbing up the volcano'), 'volcano');
// console.log(high('take me to semynak'), 'semynak');
// console.log(high('aa b'), 'aa');
// console.log(high('b aa'), 'b');
// console.log(high('bb d'), 'bb');
// console.log(high('d bb'), 'd');
// console.log(high('aaa b'), 'aaa');

// kata - https://www.codewars.com/kata/583203e6eb35d7980400002a

// P - receives array of strings representing smilies
// R - Returns number of valid smilies

// function countSmileys(arr) {
//   const isSmiley = (smiley) => {
//     const eyes = [':', ';'];
//     const nose = ['-', '~'];
//     const mouth = [')', 'D'];
//     const spread = [...smiley];
//     if (eyes.includes(spread.shift()) && mouth.includes(spread.pop())) {
//       if (spread.length > 0 && !nose.includes(spread[0])) return false;
//       return true;
//     } else return false;
//   };
//   return arr.reduce((sum, smiley) => (isSmiley(smiley) ? ++sum : sum), 0);
// }

// // const faces = new Set()
// // for (let eyes of [':',';'])
// //     for (let nose of ['-','~',''])
// //         for (let mouth of [')','D'])
// //             faces.add(eyes+nose+mouth)

// // const countSmileysCooler =(arr)=> arr.filter(x => faces.has(x)).length

// console.log(countSmileys([]), 0);
// console.log(countSmileys([':D', ':~)', ';~D', ':)']), 4);
// console.log(countSmileys([':)', ':(', ':D', ':O', ':;']), 2);
// console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);

// Kata - https://www.codewars.com/kata/5208f99aee097e6552000148/
// P receives joined string of camel case words
// R return a string separated by white space between each came cased word

// const solution = (str) => {
//   const findNextCamel = (str) => str.findIndex((x, i) => x.toUpperCase() === x && i !== 0);
//   str = str.split('');
//   let result = '';
//   let nextCamel = findNextCamel(str);
//   while (str.length > 0 && nextCamel >= 1) {
//     result += str.splice(0, nextCamel).join('') + ' ';
//     nextCamel = findNextCamel(str);
//   }
//   return result + str.join('').trim();
// };

// const solutionBetter = (string) => {
//   return [...string]
//     .map((char) => {
//       return char === char.toUpperCase() ? ` ${char}` : char;
//     })
//     .join('');
// };

// console.log(solution('camelCasing'), 'camel Casing');
// console.log(solution('camelCasingTest'), 'camel Casing Test');
// console.log(solution('WhoLetTheDogsOut'), 'Who Let The Dogs Out');

// kata - https://www.codewars.com/kata/5277c8a221e209d3f6000b56

// receive string of brackets
// return true/false according to the validity of the brackets

// function validBraces(braces) {
//   // helper function that gets corresponding opener for closer
//   const getOpener = (bracket) => openers[closers.indexOf(bracket)];
//   const openers = '({[';
//   const closers = ')}]';
//   const cache = [];
//   for (const bracket of [...braces]) {
//     if (openers.includes(bracket)) {
//       //if bracket is an opener
//       cache.push(bracket);
//     } else if (closers.includes(bracket)) {
//       // if bracket is a closer
//       if (cache[cache.length - 1] === getOpener(bracket)) {
//         cache.pop();
//       } else return false;
//     }
//   }
//   return cache.length === 0 ? true : false;
// }

// console.log(validBraces('()))'), false);
// console.log(validBraces('()'), true);
// console.log(validBraces('[]'), true);
// console.log(validBraces('{}'), true);
// console.log(validBraces('(){}[]'), true);
// console.log(validBraces('([{}])'), true);
// console.log(validBraces('(}'), false);

// console.log(validBraces('[(])'), false);
// console.log(validBraces('({})[({})]'), true);
// console.log(validBraces('(})'), false);
// console.log(validBraces('(({{[[]]}}))'), true);
// console.log(validBraces('{}({})[]'), true);
// console.log(validBraces(')(}{]['), false);
// console.log(validBraces('())({}}{()][]['), false);
// console.log(validBraces('(((({{'), false);
// console.log(validBraces('}}]]))}])'), false);

// kata - https://www.codewars.com/kata/550554fd08b86f84fe000a58/train/javascript

// Receives two arrays of strings
// Returns a new array with items from array 1 that appear as a part or as a whole in array 2

// const inArray = (a1, a2) =>
//   [
//     ...new Set(
//       a1.reduce((result, x) => {
//         if (a2.find((y) => y.includes(x))) result.push(x);
//         return result;
//       }, [])
//     ),
//   ].sort();

// // console.log(...new Set(['a', 'b', 'a']))

// console.log(inArray(['xyz', 'live', 'strong'], ['lively', 'alive', 'harp', 'sharp', 'armstrong']), ['live', 'strong']);
// console.log(inArray(['live', 'strong', 'arp'], ['lively', 'alive', 'harp', 'sharp', 'armstrong']), ['arp', 'live', 'strong']);
// console.log(inArray(['tarp', 'mice', 'bull'], ['lively', 'alive', 'harp', 'sharp', 'armstrong']), []);

// const sum = (a) => {
//   let currentSum = a;
//   const next = (b) => {
//     currentSum += b;
//     return next;
//   };
//   next.toString = () => currentSum;
//   return next;
// };

// console.log(sum(1)(2).toString()); // 3
// console.log(sum(5)(-1)(2).toString()); // 6
// console.log(sum(6)(-1)(-2)(-3).toString()); // 0
// console.log(sum(0)(1)(2)(3)(4)(5).toString()); // 15

// kata - https://www.codewars.com/kata/57b06f90e298a7b53d000a86

// P - Receives customers: array of integers representing time at till
//          n: integer representing amount of tills
// R - Returns integer representing amount of time to clear all customers

// const queueTime = (customers, n) => {
//   const queues = Array.from({ length: n }, (x) => 0);
//   for (const customer of customers) {
//     queues[queues.indexOf(Math.min(...queues))] += customer;
//   }
//   return Math.max(...queues);
// };

// console.log(queueTime([], 1), 0);
// console.log(queueTime([1, 2, 3, 4], 1), 10);
// console.log(queueTime([2, 2, 3, 3, 4, 4], 2), 9);
// console.log(queueTime([1, 2, 3, 4, 5], 100), 5);

// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// Make two variants of the solution.

// Using setInterval.
// Using nested setTimeout.

// const printNumbers = (from, to) => {
//   let count = from;
//   const interval = setInterval(() => {
//     if (count >= to) clearInterval(interval);
//     console.log(count++);
//   }, 1000);
// };

// const printNumbers = (from, to) => {
//   let count = from;
//   let timer = setTimeout(function go() {
//     console.log(count++);
//     count <= to && (timer = setTimeout(go, 1000));
//   }, 1000);
// };

// printNumbers(1, 10);

// kata - https://www.codewars.com/kata/5842df8ccbd22792a4000245/train/javascript

// P - Receives number
// R - Returns expanded form number

// const expandedForm = (num) =>
//   [...String(num)]
//     .reverse()
//     .reduce((result, x, i) => {
//       if (Number(x) !== 0) result.push(x.padEnd(i + 1, 0));
//       return result;
//     }, [])
//     .reverse()
//     .join(' + ');

// console.log(expandedForm(12), '10 + 2');
// console.log(expandedForm(42), '40 + 2');
// console.log(expandedForm(70304), '70000 + 300 + 4');

// kata - https://www.codewars.com/kata/51b62bf6a9c58071c600001b

// const solution = (number) => {
//   let result = '';
//   const latin = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
//   for (const [roman, value] of Object.entries(latin)) {
//     while (number >= value) {
//       number -= value;
//       result += roman;
//     }
//   }
//   return result;
// };

// console.log(solution(1), 'I', '1 should, "I"');
// console.log(solution(2), 'II', '2 should, "II"');
// console.log(solution(3), 'III', '3 should, "III"');
// console.log(solution(4), 'IV', '4 should, "IV"');
// console.log(solution(5), 'V', '5 should, "V"');
// console.log(solution(9), 'IX', '9 should, "IX"');
// console.log(solution(10), 'X', '10 should, "X"');
// console.log(solution(11), 'XI');
// console.log(solution(19), 'XIX');
// console.log(solution(22), 'XXII');
// console.log(solution(15), 'XV');

// console.log(solution(1000), 'M', '1000 should, "M"');
// console.log(solution(1001), 'MI', '1001 should, "MI"');
// console.log(solution(1990), 'MCMXC', '1990 should, "MCMXC"');
// console.log(solution(2007), 'MMVII', '2007 should, "MMVII"');
// console.log(solution(2008), 'MMVIII', '2008 should, "MMVIII"');

// kata - https://www.codewars.com/kata/54ff3102c1bad923760001f3

// function getCount(str) {
//   const vowles = 'aeiou';
//   return [...str].filter((x) => vowles.includes(x)).length;
// }

// kata - https://www.codewars.com/kata/546e2562b03326a88e000020

// const squareDigits = (num) => parseInt([...String(num)].map((x) => Math.pow(x, 2)).join(''));

// console.log(squareDigits(3212), 9414);
// console.log(squareDigits(2112), 4114);
// console.log(squareDigits(0), 0);

// kata - https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript

// function disemvowel(str) {
//   const vowels = 'aeiouAEIOU';
//   return [...str].filter((x) => !vowels.includes(x)).join('');
// }

// // kata - https://www.codewars.com/kata/554b4ac871d6813a03000035

// // Receive space sparated string of numbers
// // return string "highest lowest"

// const highAndLow = (str) => {
//   const arr = str.split(' ');
//   return `${Math.max(...arr)} ${Math.min(...arr)}`;
// };

// console.log(highAndLow('8 3 -5 42 -1 0 0 -9 4 7 4 -4'), '42 -9');
// console.log(highAndLow('1 2 3'), '3 1');

// // kata - https://www.codewars.com/kata/5467e4d82edf8bbf40000155

// // P - Receive any non negative integer
// // R - Return descending order integer

// const descendingOrder = (n) => {
//   return +n
//     .toString()
//     .split('')
//     .sort((a, b) => b - a)
//     .join('');
// };

// console.log(descendingOrder(0), 0);
// console.log(descendingOrder(1), 1);
// console.log(descendingOrder(111), 111);
// console.log(descendingOrder(15), 51);
// console.log(descendingOrder(1021), 2110);
// console.log(descendingOrder(123456789), 987654321);

// // kata - https://www.codewars.com/kata/5667e8f4e3f572a8f2000039

// // P - string with a-z A-Z letters
// // R - input seperated with dashes, first letter of each part captilized and repeated i number of times

// const accum = (s) => [...s].map((x, i) => x.toUpperCase() + x.repeat(i).toLowerCase()).join('-');

// console.log(accum('ZpglnRxqenU'), 'Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu');
// console.log(accum('NyffsGeyylB'), 'N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb');
// console.log(accum('MjtkuBovqrU'), 'M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu');
// console.log(accum('EvidjUnokmM'), 'E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm');
// console.log(accum('HbideVbxncC'), 'H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc');

// // kata - https://www.codewars.com/kata/56747fd5cb988479af000028

// // P - Receive string
// // R - Return middle character or 2 middle characters for even length string

// const getMiddle = (s) => {
//   const length = s.length;
//   const isEven = s.length % 2 === 0;
//   return isEven ? s[length / 2 - 1] + s[length / 2] : s[Math.floor(length / 2)];
// };

// console.log(getMiddle('test'), 'es');
// console.log(getMiddle('testing'), 't');
// console.log(getMiddle('middle'), 'dd');
// console.log(getMiddle('A'), 'A');

// // kata - https://www.codewars.com/kata/55908aad6620c066bc00002a

// const XO = (str) => {
//   const os = [...str].filter((x) => x === 'o' || x === 'O');
//   const xs = [...str].filter((x) => x === 'x' || x === 'X');
//   return os.length === xs.length;
// };

// // kata - https://www.codewars.com/kata/57cebe1dc6fdc20c57000ac9

// const findShortest = (str) => Math.min.apply(null, str.split(' ').map((x) => x.length));

// console.log(findShortest('bitcoin take over the world maybe who knows perhaps', 3));

// kata - https://www.codewars.com/kata/5390bac347d09b7da40006f6

// String.prototype.toJadenCase = function () {
//   return this.split(' ')
//     .map((x) => x[0].toUpperCase() + x.slice(1))
//     .join(' ');
// };

// let str = "How can mirrors be real if our eyes aren't real";
// console.log(str.toJadenCase(), "How Can Mirrors Be Real If Our Eyes Aren't Real");

// // kata - https://www.codewars.com/kata/554e4a2f232cdd87d9000038

// function DNAStrand(dna) {
//   const replace = { A: 'T', T: 'A', C: 'G', G: 'C' };
//   return [...dna].map((x) => replace[x]).join('');
// }

// // kata https://www.codewars.com/kata/558fc85d8fd1938afb000014

// // P - receive array of positive integers
// // R - return sum of two lowest integers

// const sumTwoSmallestNumbers = (arr) => {
//   const temp = [Infinity, Infinity];
//   outer: for (const x of arr) {
//     for (let i = 0; i < temp.length; i++) {
//       const highestIndex = temp.indexOf(Math.max(...temp));
//       if (x < temp[highestIndex]) {
//         temp[highestIndex] = x;
//         continue outer;
//       }
//     }
//   }

//   return temp;
// };

// console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]), 13, 'Sum should be 13');
// console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]), 6, 'Sum should be 6');
// console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]), 10, 'Sum should be 10');
// console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]), 24, 'Sum should be 24');
// console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]), 16, 'Sum should be 16');

// function longest(s1, s2) {
//   return [...new Set(s1 + s2)].sort().join('');
// }

// console.log(longest('aretheyhere', 'yestheyarehere'), 'aehrsty');
// console.log(longest('loopingisfunbutdangerous', 'lessdangerousthancoding'), 'abcdefghilnoprstu');
// console.log(longest('inmanylanguages', 'theresapairoffunctions'), 'acefghilmnoprstuy');

// // Kata - https://www.codewars.com/kata/5552101f47fc5178b1000050

// // P - receive n - number p - power
// // return - is there a number k that n * k equal to successive powers of the digits

// const digPow = (n, p) => {
//   const sumPowers = [...n.toString()].reduce((acc, x) => (acc += Math.pow(x, p++)), 0);
//   const k = sumPowers / n;
//   return Number.isInteger(k) ? k : -1;
// };

// console.log(digPow(89, 1), 1);
// console.log(digPow(92, 1), -1);
// console.log(digPow(46288, 3), 51);

// // kata - https://www.codewars.com/kata/5592e3bd57b64d00f3000047

// const findNb = (m) => {
//   let current = 0;
//   let cubes = 0;
//   while (m > current) {
//     current += Math.pow(++cubes, 3);
//   }
//   return current === m ? cubes : -1;
// };

// console.log(findNb(4183059834009), 2022);
// console.log(findNb(24723578342962), -1);
// console.log(findNb(135440716410000), 4824);
// console.log(findNb(40539911473216), 3568);

// const wave = (str) => {
//   return [...str]
//     .map((_, i, arr) => {
//       if (arr[i] !== ' ') {
//         return arr.slice(0, i).join('') + arr[i].toUpperCase() + arr.slice(i + 1).join('');
//       }
//     })
//     .filter((x) => x !== undefined);
// };

// console.log(wave('two words'));

// // kata - https://www.codewars.com/kata/5626b561280a42ecc50000d1

// // P - receive a, b representing a range to scan for numbers that the sum of
// // their digits raised by consecutive pwoer is euqal to the number itself
// // R - array that fulfills the property above

// const sumDigPow = (a, b) => {
//   const results = [];
//   for (let i = a; i <= b; i++) {
//     let pow = 1;
//     let currentSum = 0;
//     const currentNumStringed = String(i);
//     for (let j = 0; j < currentNumStringed.length; j++) {
//       currentSum += Math.pow(currentNumStringed[j], pow++);
//     }
//     if (currentSum === i) results.push(i);
//   }
//   return results;
// };

// console.log(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
// console.log(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]);

// // kata - https://www.codewars.com/kata/51b6249c4612257ac0000005

// // P - receive string of roman characters
// // R - return decimal value integer

// const solution = (roman) => {
//   const massage = {
//     IV: 'IIII',
//     IX: 'VIIII',
//     XL: 'XXXX',
//     XC: 'LXXXX',
//     CD: 'CCCC',
//     CM: 'DCCCC',
//   };
//   const convert = {
//     M: 1000,
//     D: 500,
//     C: 100,
//     L: 50,
//     X: 10,
//     V: 5,
//     I: 1,
//   };
//   for (const [key, value] of Object.entries(massage)) {
//     roman = roman.replace(key, value);
//   }
//   return [...roman].reduce((acc, x) => (acc += convert[x]), 0);
// };

// console.log(solution('XXI'), 21);
// console.log(solution('I'), 1);
// console.log(solution('IV'), 4);
// console.log(solution('MMVIII'), 2008);
// console.log(solution('MDCLXVI'), 1666);

// // kata - https://www.codewars.com/kata/52efefcbcdf57161d4000091

// // P - receive string
// // R - return object with characters and count of characters as key/value pairs

// function count(string) {
//   const result = {};
//   for (const char of string) {
//     result[char] = result[char] ? ++result[char] : 1;
//   }
//   return result;
// }

// console.log(count('aba'), { a: 2, b: 1 });
// console.log(count(''), {});

// // kata - https://www.codewars.com/kata/57814d79a56c88e3e0000786

// // P - Receives string of numbers and n amounts to shuffle
// // R - Return shuffled odd + even indexed string n amount of times

// function encrypt(text, n) {
//   if (text === '') return '';
//   if (!text) return null;
//   let result = [...text];
//   for (let i = 0; i < n; i++) {
//     const odds = [...result].filter((x, i) => i % 2 !== 0);
//     const evens = [...result].filter((x, i) => i % 2 === 0);
//     result = [...odds, ...evens];
//   }

//   return result.join('');
// }

// console.log(encrypt('This is a test!', 0), 'This is a test!');
// console.log(encrypt('This is a test!', 1), 'hsi  etTi sats!');
// console.log(encrypt('This is a test!', 2), 's eT ashi tist!');
// console.log(encrypt('This is a test!', 3), ' Tah itse sits!');
// console.log(encrypt('This is a test!', 4), 'This is a test!');
// console.log(encrypt('This is a test!', -1), 'This is a test!');
// console.log(encrypt('This kata is very interesting!', 1), 'hskt svr neetn!Ti aai eyitrsig');

// function decrypt(encryptedText, n) {
//   if (encryptedText === '') return '';
//   if (!encryptedText) return null;
//   let result = [...encryptedText];
//   const middleIndex = result.length % 2 === 0 ? Math.max(result.length / 2) : Math.min(result.length / 2);
//   for (let i = 0; i < n; i++) {
//     const odds = result.slice(0, middleIndex);
//     const evens = result.slice(middleIndex);
//     result = [];
//     for (let j = 0; j < encryptedText.length / 2; j++) {
//       result.push(evens[j], odds[j]);
//     }
//   }
//   return result.join('');
// }

// console.log(decrypt('This is a test!', 0), 'This is a test!');
// console.log(decrypt('hsi  etTi sats!', 1), 'This is a test!');
// console.log(decrypt('s eT ashi tist!', 2), 'This is a test!');
// console.log(decrypt(' Tah itse sits!', 3), 'This is a test!');
// console.log(decrypt('This is a test!', 4), 'This is a test!');
// console.log(decrypt('This is a test!', -1), 'This is a test!');
// console.log(decrypt('hskt svr neetn!Ti aai eyitrsig', 1), 'This kata is very interesting!');

// // kata - https://www.codewars.com/kata/563b662a59afc2b5120000c6
// // recursion

// const nbYear = (p0, percent, aug, p, count = 0) => {
//   return p0 >= p ? count : nbYear(p0 + Math.floor((p0 * percent) / 100) + aug, percent, aug, p, ++count);
// };

// console.log(nbYear(1500, 5, 100, 5000), 15);
// console.log(nbYear(1500000, 2.5, 10000, 2000000), 10);
// console.log(nbYear(1500000, 0.25, 1000, 2000000), 94);

// // kata - https://www.codewars.com/kata/587731fda577b3d1b0001196

// String.prototype.camelCase = function () {
//   return this.split(' ')
//     .map((x) => (x ? x[0].toUpperCase() + x.slice(1) : x))
//     .join('');
// };

// console.log('test case'.camelCase(), 'TestCase');
// console.log('camel case method'.camelCase(), 'CamelCaseMethod');
// console.log('say hello '.camelCase(), 'SayHello');
// console.log(' camel case word'.camelCase(), 'CamelCaseWord');
// console.log(''.camelCase(), '');

// // kata - https://www.codewars.com/kata/55466989aeecab5aac00003e
// // recursion
// // P - Receive length and width integers
// // R - Return array with possible squares in the rectangle, return null if already a square

// const sqInRect = (len, wid) => {
//   if (len === wid) return null;
//   const results = [];
//   const getLargestSquare = (x, y) => {
//     if (x === 0 || y === 0) return;
//     const low = Math.min(x, y);
//     const high = Math.max(x, y);
//     results.push(low);
//     getLargestSquare(low, high - low);
//   };
//   getLargestSquare(len, wid);
//   return results;
// };

// // function sqInRectCleaner(a, b, initial = true) {
// //   if (a === b) {
// //     return initial ? null : [a];
// //   }
// //   const min = Math.min(a, b);
// //   const max = Math.max(a, b);

// //   return [min, ...sqInRect(max - min, min, false)];
// // }

// console.log(sqInRect(5, 5), null);
// console.log(sqInRect(5, 3), [3, 2, 1, 1]);
// console.log(sqInRect(3, 5), [3, 2, 1, 1]);
// console.log(sqInRect(20, 14), [14, 6, 6, 2, 2, 2]);

// // kata - https://www.codewars.com/kata/52b757663a95b11b3d00062d

// // P - receive string of words
// // R - return WeIrD CaSeD SeNtAnC

// const toWeirdCase = (str) => {
//   return str
//     .split(' ')
//     .map((x) => [...x].map((x, i) => (i % 2 === 0 ? x.toUpperCase() : x.toLowerCase())).join(''))
//     .join(' ');
// };

// console.log(toWeirdCase('This is a test'), 'ThIs Is A TeSt');
// console.log(toWeirdCase('This'), 'ThIs');
// console.log(toWeirdCase('is'), 'Is');

// // kata - https://www.codewars.com/kata/5503013e34137eeeaa001648

// // P - receive integer representing diamond size
// // R - null if even int, return diamond made by astersks and \n newlines

// const diamond = (n) => {
//   if (n % 2 === 0 || n <= 0) return null;
//   const result = [];
//   for (let i = 1; i <= n; i += 2) {
//     const side = ' '.repeat(Math.floor((n - i) / 2));
//     result.push(`${side}${'*'.repeat(i)}${side}\n`);
//   }
//   const bottom = result.slice(0, result.length - 1).reverse();
//   return [...result, ...bottom].join('');
// };

// console.log(diamond(15));

// // kata - https://www.codewars.com/kata/515decfd9dcfc23bb6000006

// // P - Receive string
// // R - Return true/false according to validity of IP

// const isValidIP = (str) => {
//   const newStr = str
//     .trim()
//     .split('.')
//     .filter((x) => Number.isInteger(Number(x)) && x >= 0 && x <= 255 && String(parseInt(x)).length == String(x).length);

//   return newStr.length === 4 && str !== '' && str.length === newStr.join('.').length;
// };

// function isValidIPCleaner(str) {
//   const octets = str.split('.'); // Split into octets
//   return (
//     octets.length === 4 && // Ensure str has exactly 4 octets
//     octets.reduce(
//       (
//         acc,
//         octet // Check all octets
//       ) =>
//         acc === true && // Ensure prior octets okay
//         String(Number(octet)) === octet && // Ensure octet has nothing funky like spaces, leading 0's, ...
//         Number(octet) >= 0 && // Ensure octet is 0 or more
//         Number(octet) <= 255, // Ensure octet is 255 or less
//       true
//     )
//   );
// }

// console.log(isValidIP(''), false);
// console.log(isValidIP('abc.def.ghi.jkl'), false);
// console.log(isValidIP('123.456.789.0'), false);
// console.log(isValidIP('12.34.56'), false);
// console.log(isValidIP('256.1.2.3'), false);
// console.log(isValidIP('1.2.3.4.5'), false);
// console.log(isValidIP('123,45,67,89'), false);
// console.log(isValidIP('12.34.56.-7'), false);
// console.log(isValidIP('01.02.03.04'), false);
// console.log(isValidIP('1e0.1e1.1e2.2e2'), false);
// console.log(isValidIP('0.0.0.0'), true);
// console.log(isValidIP('12.255.56.1'), true);
// console.log(isValidIP('137.255.156.100'), true);
// console.log(isValidIP(' 1.2.3.4'), false);
// console.log(isValidIP('1.2.3.4 '), false);
// console.log(isValidIP('1.2.3.4\n'), false);
// console.log(isValidIP('\n1.2.3.4'), false);

// // kata - https://www.codewars.com/kata/5202ef17a402dd033c000009

// // P - Receive title and minorWords strings
// // R - Return title cased string, first word letter always capped, the rest according to specs.

// const titleCase = (title, exceptions) => {
//   if (exceptions) exceptions = exceptions.toLowerCase().split(' ');
//   if (!title) return '';
//   title = title.toLowerCase();
//   title = title
//     .split(' ')
//     .map((word) => {
//       return exceptions ? (!exceptions.includes(word) ? word[0].toUpperCase() + word.slice(1) : word) : word[0].toUpperCase() + word.slice(1);
//     })
//     .join(' ');
//   return title[0].toUpperCase() + title.slice(1);
// };

// console.log(titleCase(''), '');
// console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings');
// console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows');
// console.log(titleCase('the quick brown fox'), 'The Quick Brown Fox');

// // kata - https://www.codewars.com/kata/56b5afb4ed1f6d5fb0000991

// const revrot = (str, size) => {
//   if (size <= 0 || size.length > str.length) return '';
//   const split = [];
//   let i = 0;
//   while (i <= str.length - size) {
//     split.push(str.slice(i, i + size));
//     i += size;
//   }

//   return split
//     .reduce((acc, chunk) => {
//       const chunkCubedSum = chunk.split('').reduce((res, x) => (res += Number(x) ** 3), 0);
//       if (chunkCubedSum % 2 === 0) {
//         acc.push(chunk.split('').reverse().join(''));
//       } else {
//         const shifted = chunk.slice(1) + chunk[0];
//         acc.push(shifted);
//       }
//       return acc;
//     }, [])
//     .join('');
// };

// console.log(revrot('123456987654', 6), `--> "234561876549"`);
// console.log(revrot('123456987653', 6), `--> "234561356789"`);
// console.log(revrot('66443875', 4), `--> "44668753"`);
// console.log(revrot('66443875', 8), `--> "64438756"`);
// console.log(revrot('664438769', 8), `--> "67834466"`);
// console.log(revrot('123456779', 8), `--> "23456771"`);
// console.log(revrot('', 8), `--> ""`);
// console.log(revrot('123456779', 0), `--> "" `);
// console.log(revrot('563000655734469485', 4), `--> "0365065073456944"`);

// // kata - https://www.codewars.com/kata/54a91a4883a7de5d7800009c

// // P - receive string
// // R - increment the string by adding 1 to the number at its end, or 1 if no number exists at end

// const incrementString = (str) => {
//   const num = [];
//   str = [...str];
//   while (Number.isInteger(+str[str.length - 1])) {
//     num.push(str.pop());
//   }
//   num.reverse();
//   const insert = String(Number(num.join('')) + 1).padStart(num.length, 0);
//   return str.join('') + insert;
// };

// console.log(incrementString('foobar000'), 'foobar001');
// console.log(incrementString('foo'), 'foo1');
// console.log(incrementString('foobar001'), 'foobar002');
// console.log(incrementString('foobar99'), 'foobar100');
// console.log(incrementString('foobar099'), 'foobar100');
// console.log(incrementString(''), '1');

// // kata - https://www.codewars.com/kata/52f787eb172a8b4ae1000a34

// // P - Receive n
// // R - Return number of trailing zeroes in n! (factorial)

// function zeros(n) {
//   let count = 0;
//   for (let i = 5; Math.floor(n / i) >= 1; i *= 5) count += Math.floor(n / i);
//   return count;
// }

// console.log(zeros(0), 0, 'Testing with n = 0');
// console.log(zeros(5), 1, 'Testing with n = 5');
// console.log(zeros(6), 1, 'Testing with n = 6');
// console.log(zeros(30), 7, 'Testing with n = 30');

// const fib = (n) => (n < 2 ? n : fib(n - 1) + fib(n - 2));

// const fib = (n) => {
//   if (n <= 1) {
//     // console.log(1);
//     return n;
//   }
//   // console.log(n);
//   return fib(n - 2) + fib(n - 1);
// };

// console.log(fibArray(8).reduce((acc, x) => (acc += x * 4), 0));

// // kata - https://www.codewars.com/kata/559a28007caad2ac4e000083/

// function perimeter(n) {
//   if (n === 0) return 4;
//   const fibArray = (n) => {
//     const results = [1, 1];
//     for (let i = 2; i < n; i++) {
//       results.push(results[i - 1] + results[i - 2]);
//     }
//     return results;
//   };
//   return fibArray(n + 1).reduce((acc, x) => (acc += x * 4), 0);
// }

// console.log(perimeter(0), 4);
// console.log(perimeter(5), 80);
// console.log(perimeter(7), 216);
// console.log(perimeter(20), 114624);
// console.log(perimeter(30), 14098308);

// kata - https://www.codewars.com/kata/54d512e62a5e54c96200019e

// const primeFactors = (n) => {
//   const isPrime = (x) => {
//     for (let i = 2; i <= Math.floor(Math.sqrt(x)); i++) {
//       if (x % i == 0) return false;
//     }
//     return true;
//   };
//   const getNextPrime = (n) => {
//     while (!isPrime(n)) {
//       isPrime(++n);
//     }
//     return n;
//   };
//   // initialize results []
//   const results = [];
//   let total = 0;
//   let temp = n;
//   // while not results.every(x => isPrime(x)) && n > 1
//   while (total < n) {
//     // find the first prime that n is divisible by
//     let prime = 2;
//     while (!(temp % prime === 0)) {
//       prime = getNextPrime(++prime);
//     }
//     // push prime to results
//     results.push(prime);
//     // update prime to be the result of the division
//     temp = temp / prime;
//     total = results.reduce((a, b) => a * b, 1);
//   }

//   return results;
// };

// const primeFactors = (n) => {
//   const isPrime = (x) => {                                       // helper function - checks if number is prime number
//     for (let i = 2; i <= Math.sqrt(x); i++) {
//       if (x % i == 0) return false;
//     }
//     return true;
//   };
//   const getNextPrime = (n) => {                                 // helper function - gets next prime number
//     while (!isPrime(n)) isPrime(++n)
//     return n;
//   };

//   const results = {};                                           // initialize results object - keys: prime numbers used, values: amount of each prime
//   let total = 1;                                                // initialize total - holds sum of prime numbers multiplication
//   let temp = n;                                                 // initialize temp - holds changing value of each division

//   while (total < n) {                                           // while multiplication sum is not greater than the input number (n)
//     let prime = 2;                                              // set first prime to test with 2
//     while (!(temp % prime === 0)) {                             // find the first prime that current 'temp' is divisible by
//       prime = getNextPrime(++prime);
//     }                                                           // 'prime' is now the first prime that 'temp' is divisible by
//     results[prime] = results[prime] ? ++results[prime] : 1;     // update results object with {prime: prime-count}
//     total *= prime;                                             // update 'total' with the current sum of prime numbers multiplication
//     temp = temp / prime;                                        // update prime to be the result of the division
//   }

//   return Object.entries(results)                                // formatting results object for output
//     .map((x) => `(${x[0]}${x[1] > 1 ? '**' + x[1] : ''})`)
//     .join('');
// };

const primeFactors = (n) => {
  const results = {};
  // loop from divisor 2 until n is not divisible anymore
  for (let div = 2; n > 1; div++) {
    // while n is divisible by current divisor
    while (n % div === 0) {
      n /= div; // keep dividing
      results[div] = results[div] ? ++results[div] : 1; // push and count divisors
    }
  }
  return Object.entries(results) // format results object
    .map((x) => `(${x[0]}${x[1] > 1 ? '**' + x[1] : ''})`)
    .join('');
};

console.log(primeFactors(7775460));
