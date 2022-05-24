/* Review */

console.log("hello world", true, 1, [1, 2, 3], {a: 1, b:2})

console.log(1057 * 189);

document.querySelector('h1').innerHTML = 1057 * 189;  // shows it on HTML page on Live Server 


// Data Types 

console.log('this will run'); 
/*console.log('this will run too'); */
console.log('this will run as well'); 

// Strings
'string'; 
"double quotes"; 
`back ticks`;

// Numbers 
1;  // integer 
1.1;  // float 

// Boolean 
true;  // 1, yes 
false;  // 0, no 


// Complex Data Types (compound data types) (organize data) 

// array 
array = [];  // array is a list of values; 

// object 
object = {};  // object is a list of key value pairs; (dictionary); 

{
    js: 'javascript, a programming language for the web'
}

const whatIsThis = document.querySelector('h2'); 
whatIsThis.innerHTML = "this is a string";  // this is a string  - shows it on HTML on Live Server 
// this is an element 
// an element is an object 
console.dir(whatIsThis); 

//  =  is an operator

let score = 0; 
console.log(score + 10);  // 10 
console.log(score);  // 0 
console.log(score += 10);  // 10
console.log(score);  // 10
score += 1; 
score += 1;  // this will add both line 49 and 50 until logged on the console again 
console.log(score);  // 12 

// + += add  -> += add and assign 
// - -= subtract 
// * *= multiply 
// / /= divide 
// % %= module 

// Modulus 
console.log(7 % 5);  // 2
console.log(12 % 5);  // 2  // loop? 


// Template Literals ${____}  - where ____ is a variable 
const noun = 'friend'; 
const catchphrase = `I am a ${noun}.`;  // I am a friend.  // nested 
console.log(catchphrase);  // to console a variable - no type of quotations in paranethesis 
let story = `It has been said that a dog is man's best ${noun}.`;   
console.log(story);  // It has been said that a god is a man's best friend. 


/* Second half of Class */ 


// .length
console.log(
    'hello my name is...'.length  // 19  - shows how many characters long everything within quotes is 
)

// .toUpperCase()
console.log(
    'hello my name is...'.toUpperCase()  // HELLO MY NAME IS...  - makes everything upper case 
)

// .slice(_, _) 
console.log(
    'hello my name is...'.toUpperCase().slice(1,5)  // ELLO  - slice from 1 to 5 but 5 is not counted, 1st character is 0 
)

// [] character
console.log(
    'hello my name is...'[0]  // h  - [] can also show character of number asked for inside the brackets 
)

// .blink() 
document.querySelector('h3').innerHTML = 'Hello my name is..'.blink()  // deprecated 
const answer = 'Hello' 
document.querySelector('h4').innerHTML = answer;  // Hello  - shows on HTML page 
console.log(answer);  // Hello  - shows n console 

// .charCodeAt(_) 
const secondAnswerExample = 'Hello my name is..'.charCodeAt(0)   
document.querySelector('h5').innerHTML = secondAnswerExample;  // 72  - where number in [] character lands
console.log(secondAnswerExample);  // 72 

// two strings
const insertName = 'Hello my name is...' + 'Trixy'; 
document.querySelector('h6').innerHTML = insertName;  // Hello my name is...Trixy 
console.log(insertName);  // Hello my name is...Trixy 

// .concat('', '') 
const concatExample = 'Hello my name is...'.concat('Trixy.', ' Hey.')  // other form to connect strings 
document.querySelector('p').innerHTML = concatExample;  // Hello my name is...Trixy. Hey. 
console.log(concatExample);  // Hello my name is...Trixy. Hey.

// .endsWith('')
const endsWithExample = 'Hello my name is...'.endsWith('is...'); 
document.querySelector('section').innerHTML = endsWithExample;  // true  - comes back as true
console.log(endsWithExample);  // true 

const endsWithExampleTwo = 'Hello my name is...'.endsWith('the end.'); 
document.querySelector('b').innerHTML = endsWithExampleTwo;  // false  - comes back as false
console.log(endsWithExampleTwo);  // false 

// .startsWith('') 
const startsWithExample = 'Hello my name is...'.startsWith('Hello my name');  // .startsWith('Hi'); - false 
document.querySelector('em').innerHTML = startsWithExample;  // true  - comes back as true
console.log(startsWithExample);  // true 

const title = 'My page';    // 'My page!' - false for second <li> 
const page = `
<h1>${title}</h1>
<p>this is a paragraph</p>
<p>this is another paragraph</p>
<ul>
    <li>this is a list item</li>
    <li>${title.endsWith('page')}</li> 
</ul>
`//.includes('this is a list item');  // true  - on console and html 
//.indexOf('blue');  // -1  - no blue 
//.indexOf('this is a list item');  // 91 
document.querySelector('body').innerHTML = page; 
console.log(page);  // everything on "const page= ___" shows on console 

// decimal number with template literal  `.${___}`  
const pageTwo = 'My page!';
const value = 9; 
const answerEx = `.${value}`; 
document.querySelector('body').innerHTML = answerEx;  // .9 
console.log(answerEx);  // .9 

// .padStart(_, '_')  - two digits instead of single digit answer - 0 added if not a double digit number 
const valueTwo = '5'; 
const answr = `.${valueTwo.padStart(2, '0')}`; 
document.querySelector('body').innerHTML = `<h1>${answr}</h1>`;  // .05  - in h1 element 
console.log(answr);  // .05 

// .repeat(_) 
const valueThree = '10'; 
const answerThree = `.${valueThree.repeat(10)}`; 
document.querySelector('body').innerHTML = answerThree;  // .10101010101010101010  - repeats (10) 10 times 
console.log(answerThree);  // .10101010101010101010 

// .replace('', '') 
const valueFour = '10'; 
const answerFour = `.${valueFour.replace('0', 'x')}`; 
document.querySelector('body').innerHTML = answerFour;  // .1x  - replaces 0 with x 
console.log(answerFour);  // .1x 
// more .replace('' '')
console.log('101010101'.replace('0', 'x'));  // 1x1010101  - only the first 0 turns to x 
console.log('101010101'.replaceAll('0', 'x'));  // 1x1x1x1x1  - all 0's turn to x 

// .split('') 
const valueFive = '  10  '; 
const answerFive = valueFive.split('');  // no longer in back ticks, template literal and no decimal before value 
document.querySelector('body').innerHTML = answerFive;  // _, ,1,0, ,_   - splits each character including spaces 
console.log(answerFive);  // _, ,1,0, ,_  


// Alert, Confirm, Prompt 

/*
// alert(''); 
alert('Welcome to my page!');  // okay - undefined on console

// confirm(''); 
confirm('Are you sure?');  // okay or cancel - true or false on console 

// prompt(''); 
prompt('What is your name?');  // insert name then okay or cancel - '___' on console 

const myAlert = alert('Welcome to my page!'); 
const myConfirm = confirm('Are you sure'); 
const myPrompt = prompt('What is your name'); 
console.log(myAlert, myConfirm, myPrompt);  // undefined, true, 'Trixy' 

newAnswer = myPrompt; 
document.querySelector('body').innerHTML = `<h1>Hello, ${newAnswer}</h1>`;  // Hello, Trixy 
console.log(newAnswer);  // Trixy  - puts the input added on answer to myPrompt prompt 
*/


// Math Object 

//Math 
console.log(Math);  // Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …} 

console.log(Math.abs(-5));  // 5 
console.log(Math.acos(0.5));  // 1.0471975511965979 

// Math.max(__, __, __,) 
console.log(Math.max(40, 22, 2, 55, 20, 8, 42));  // 55  - highest number 

// Math.min(__, __, __,) 
console.log(Math.min(40, 22, 2, 55, 20, 8, 42));  // 2  - lowest number 

// Math.random() 
console.log(Math.random());  // 0.48478748370850044  - random number - will always change on each console check 
console.log(Math.random());  // 0.38594500591799163  - another random number - will always change on each console check 
console.log(Math.random());  // 0.9094579854526734  - other random number - will always change on each console check 

// Math.floor(Math.random()) 
console.log(Math.floor(Math.random()));  // 0  - always 0 ? 

// Math.flor(Math.random() * 5) - any number between 0 and 5 
console.log(Math.floor(Math.random() * 5));  // 0  - random number between 0 and 5 - always changes on each console check 
console.log(Math.floor(Math.random() * 5));  // 3  - random number between 1 and 5 - always changes on each console check 
console.log(Math.floor(Math.random() * 5));  // 1  - random number between 1 and 5 - always changes on each console check 

// Math.ceil(Math.random())
console.log(Math.ceil(Math.random()));  // 1  - always 1 ? 

// Math.ceil(Math.random() *5) - any number between 1 and 5 
console.log(Math.ceil(Math.random() * 5));  // 3  - random number between 1 and 5 - always changes on each console check 
console.log(Math.ceil(Math.random() * 5));  // 1  - random number between 1 and 5 - always changes on each console check 
console.log(Math.ceil(Math.random() * 5));  // 5  - random number between 1 and 5 - always changes on each console check 


// Date Object 

// Date() 
console.log(Date());  // Tue May 24 2022 03:46:21 GMT-0700 (Pacific Daylight Time) - changes on each console check 
dateAnswer = Date(); 
document.querySelector('body').innerHTML = dateAnswer;  // Tue May 24 2022 03:46:21 GMT-0700 (Pacific Daylight Time) - changes on each console check 

document.querySelector('body').innerHTML = `This is the date information`; // This is the date information  - on html 

dateAnswerTwo = new Date(); 
document.querySelector('body').innerHTML = `<h1>This is the date information</h1>
<p>Month: ${dateAnswerTwo.getMonth()}</p>
`;  // Month: 4  - month 4 because January is 0 - months begins at 0 and so on 
console.log(dateAnswerTwo);  // Tue May 24 2022 04:13:43 GMT-0700 (Pacific Daylight Time) 

console.dir(new Date());  // Tue May 24 2022 04:14:33 GMT-0700 (Pacific Daylight Time) 
dateAnswerThree = new Date(); 
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']; 
document.querySelector('body').innerHTML = 
`
<h1>This is the date information</h1>
<p>Month: ${months[dateAnswerThree.getMonth()]}</p>
<p>Day: ${dateAnswerThree.getDate()}</p>
<p>Year: ${dateAnswerThree.getFullYear()}</p>
<p>Hours: ${dateAnswerThree.getHours() % 12 /* added module */}</p>
<p>Minutes: ${dateAnswerThree.getMinutes()}</p>
<p>Seconds: ${dateAnswerThree.getSeconds()}</p>
`;  // Month: May   Day: 24   Year: 2022   Hours: 4   Minutes:31   Seconds: 52 

// keeps it running updating LIVE  
setInterval(() => {
    dateAnswerThree = new Date();
    document.querySelector('body').innerHTML = 
    `
    <h1>This is the date information</h1>
    <p>Month: ${months[dateAnswerThree.getMonth()]}</p>
    <p>Day: ${dateAnswerThree.getDate()}</p>
    <p>Year: ${dateAnswerThree.getFullYear()}</p>
    <p>Hours: ${dateAnswerThree.getHours() % 12}</p>
    <p>Minutes: ${dateAnswerThree.getMinutes()}</p>
    <p>Seconds: ${dateAnswerThree.getSeconds()}</p>
    <p>Time: ${dateAnswerThree.getHours() > 12 ? 'PM' : 'AM'}</p>
    <p>${ String(dateAnswerThree.getHours() % 12).padStart(2, 0)} : ${dateAnswerThree.getMinutes().toString().padStart(2, '0')} : ${dateAnswerThree.getSeconds().toString().padStart(2, '0')}</p>
    `;
    console.log('running..')
}, 1000); 
// Month: May   Day: 24   Year: 2022   Hours: 4   Minutes:31   Seconds: 52   Time: AM   04:52:20   