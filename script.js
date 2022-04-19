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

function high(x) {
  return x.split(' ').reduce(
    (highest, word) => {
      let sum = [...word].reduce((sum, letter) => sum + letter.charCodeAt(0) - 96, 0);
      if (sum > highest[1]) highest = [word, sum];
      return highest;
    },
    ['', 0]
  )[0];
}

console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano');
console.log(high('take me to semynak'), 'semynak');
console.log(high('aa b'), 'aa');
console.log(high('b aa'), 'b');
console.log(high('bb d'), 'bb');
console.log(high('d bb'), 'd');
console.log(high('aaa b'), 'aaa');
