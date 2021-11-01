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
//
// }
//

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





